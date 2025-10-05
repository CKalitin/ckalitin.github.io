---
layout: post
title: "Analog Battery Management System"
categories: projects
tags:
    - Projects
    - Drafts
author:
 - Christopher Kalitin
word_count: 2500
---
<head>
    <meta property="og:image" content="{{site.url}}/assets/images/must-be-beautiful/Brightside-Pack.png">
</head>

![Image](/assets/images/analog-bms-project/PCB-no-probes.jpg){:height="350"}

About 6 weeks ago I read a [blog post by Vlastimil Slinták](https://uart.cz/en/2557/lto-bms-development-notes/) in which attempted to develop an Analog Battery Management System (BMS) for a 1s3p Lithium Titanate (LTO) battery pack. From what I understand, he ended up running into an issue where he could not drive a PMOS's gate high enough to open it fully, and decided to go with a low-power microcontroller in the end.

I took some time to understand the circuit and decided it would be a good exercise to learn more about analog electronics and PCB design. A microcontroller really is the best way to build a BMS, but analog circuitry is fun to learn about and how our forefathers did things.

Fundamentally, a BMS has 5 main functions:  
- Undervoltage protection (UV)
- Overvoltage protection (OV)
- Undertemperature protection (UT)
- Overtemperature protection (OT)
- Overcurrent protection (OC)

Other functions include cell balancing, state of charge (SoC) estimation, and communication with other devices. These were out of scope for an Analog BMS and I get a good enough taste of these technical problems on the [UBC Solar student design team](https://ubcsolar.com/) where I work on the BMS for [our 5.4 kWh Li-ion battery pack](https://ckalitin.github.io/ideas/2025/09/29/must-be-beautiful.html).

See all my [project notes](https://docs.google.com/document/d/1lFDT0ucuAMWAn8gqRJLu0UlbEVvGxtJeb0i-wHZCMNs/edit?tab=t.0), [BOM](https://docs.google.com/spreadsheets/d/1S_8XwXVPueQ1eiFWQywlaV26638HY9bX2LvsAcdvjEg/edit?gid=0#gid=0), [testing data](https://docs.google.com/spreadsheets/d/1fG0IjSdaaXqMwqhgySdIyr8Wdc52NVvBKQQJ1HLR2iQ/edit?usp=sharing), and ![KiCAD / Solidworks files on GitHub](https://github.com/CKalitin/analog-bms/blob/master/renders/PCB_schematic.jpg).

### **Schematic Overview**

![Image](/assets/images/analog-bms-project/PCB_schematic.jpg)  
<i><a href="{{site.url}}/assets/images/analog-bms-project/PCB_schematic.jpg">Expanded Schematic</a></i>

**MOSFET Body Diodes**

![Image](/assets/images/analog-bms-project/nfet-body-diode.jpg)  
*Notice the intrinsic body diode of this NFET points from source to drain. Current can always flow from source to drain if Vs - Vd > Vth.*

The fundamental principle of this BMS is leveraging the intrinsic body diodes of MOSFETs to toggle current flow in a given direction, but always allow current to flow in the opposite direction. Doubling up on FETs antiparallel to each other (eg. drain to drain) is a commmon technique to prevent current flow in either direction when both FETs are off.

For undervoltage (UV) protection, I used a P-channel MOSFET (PMOS) with source to BATT+ and drain to the load. When the gate is pulled to GND, this FET conducts and current can flow out of the cells. When the gate is pulled to BATT+, the FET is not conducting and current cannot flow out of the cells. However, current can still flow into the cells through the body diode of the PMOS. This allows us to charge the battery when the voltage is critically low, but not to discharge.

A similar arrangement is used for the overvoltage (OV) protection, however I used an N-channel MOSFET (NMOS) instead. If I used a PMOS, I would have to pull the gate voltage below 0 V (Source voltage to load, 0 V initially) for it to be conducting. With an NMOS, I need to pull the gate voltage above BATT+ for it to be conducting. This meant I either needed a charge pump outputting a negative voltage, or a way to source a voltage higher than BATT+. I followed Vlastimil's original design and used a charge pump to get ~5 V, a boost converter would have also worked and may have been a better choice to get a more constant voltage.

**Toggling UV/OV Fault Conditions**

To detect undervoltage and overvoltage conditions, I used two comparators (TLV7031) that compared divided battery voltages to a fixed 1.8 V voltage reference. These comparators were chosen for low quiescense current, rail-to-rail operation, and fairly high hysteresis (10 mV typical).

I baselined the use of [Molicel's INR-18650-M35A cells](https://www.molicel.com/wp-content/uploads/INR18650M35A-V2-80096.pdf), which are the cells that UBC Solar uses. This provided a voltage range of 2.7 V to 4.2 V per cell, giving me my UV and OV conditions.

To simplify the BOM, I used a single 1.8 V fixed voltage reference (TPS71518) and two voltage dividers to scale the battery voltage to toggle the comparators at the desired voltages. For example, for undervoltage I divided the 2.7 V minimum voltage of the cells into 1.8 V and connected this to the inverting input of the comparator. The non-inverting input was connected to the 1.8 V reference. When the battery voltage dropped below 2.7 V, the output of the comparator went high, pulling the gate of the PMOS to BATT+ and disabling discharge.

My original design involved two voltage references (TPS7A2401) that would output 2.542 V and 4.142 V. These values were the closest I could trim the output of the references to 2.5 V and 4.2 V (I hadn't yet realized 2.7 V is the correct value for UV for battery chemistry reasons). [Chris Jack](https://x.com/ee44cd/status/1957650301126623319) (Great name) pointed out that I could get away with a single 1.8 V reference and two voltage dividers, instead of 2 references and 2 dividers.

I ended up having issues with the voltage dividers not dividing BATT+ properly because of the extremely weak resistors (~1M to limit quiesence current), so this was an incorrect design decision I didn't explore far enough (more on this later). A common theme in this project was making poor design decisions because of a lack of theoretical understanding.

**Temperature Faults**

Temperature faulting circuitry uses the same principle as the UV/OV circuitry with FETs and comparators. The difference is that I used a 560k NTC thermistor and an additional PMOS.

To sense temperature, I hooked up the NTC thermistor in a voltage divider with a 1M resistor from Batt+ to GND. This way, voltage at the midpoint of the divider increases as temperature increases. By referencing this against voltage dividers from BATT+ to GND, I could toggle comparators at given temperatures.

I setup the comparators to output high (5 V) whenever a fault temperature occured. Because I used a rail-to-rail comparator (TLV7032) and the comparator outputs are connected to each other, I added a diode in series with each output to prevent one comparator outputting high and the other low (eg. one OT and other nominal) and effectively shorting GND to 5 V. This is a good time to mention that if you have any better ideas for this circuitry please email (christopher.kalitin@gmail.com) or [DM me](https://x.com/CKalitin).

The UT/OT comparators output high during a fault condition, which is whats required to open the PMOS. However, the NMOS needs to be pulled to GND to open, so I added a PMOS with source to 5V, drain to the gate of the NMOS, and gate to the output of the UT/OT comparators. This way, I flip the logic of the UT/OT comparators to drive the NMOS gate low during a fault condition.

**Don't Do Logic Power-Side**

As [one of my Moots pointed out](https://x.com/liminalsunset_/status/1957613147210346914), a mistake in this design is doing UT/OT logic power-side instead of signal-side. All MOSFETs have an on resistance (Rds(on)), and a BMS should aim for as low resistance as possible to minimize power loss. By adding 2 more FETs in series with the load path, I increassed the overall Rds(on) of the BMS. A better design would be to do all OT/UT logic signal-side, so as to not add more resistance power-side.

He also pointed out that the [drain current of NMOS's is a function of Vgs](https://x.com/CKalitin/status/1957620149005217891), and with only 0.8 V between my NMOS gate and source when the battery is at 4.2 V, the drain current is ~100 mA. I decreased the OV threshold to 4 V to increase the max current to ~1 A. This is a bandaid on the problem and is a result of a fundamentally flawed design, but it works for a learning exercise PCB.

**Breadboarding Temperature Circuitry**

![Image](/assets/images/analog-bms-project/breadboard.jpg){:height="350"}

To confirm the temperature circuitry I designed worked, I breadboarded it up and tested it by shorting the equivalent of the thermistor voltage divider output to PSU+ (OT fault) and GND (UT fault). This worked first try!

**Quiesence Current & Part Selection**

The primary condsideration I took into account for part selection is ensuring all components had low quiesence current. The BMS is always connected to the battery, so it must draw a very small amount of current to avoid draining the battery over time, and potentially going low enough to damage the cells.

Two of the 18650 cells I chose have a capacity of 7000 mAh. If the BMS draws 50 uA ([Vlastimil Slinták](https://uart.cz/en/2557/lto-bms-development-notes/) got 50 uA), this would drain the battery in 140,000 hours, or 16 years. This is acceptable for a BMS. 

The full BOM is [available here](https://docs.google.com/spreadsheets/d/1S_8XwXVPueQ1eiFWQywlaV26638HY9bX2LvsAcdvjEg/edit?gid=0#gid=0) and all notes about part selection are in my [project notes](https://docs.google.com/document/d/1lFDT0ucuAMWAn8gqRJLu0UlbEVvGxtJeb0i-wHZCMNs/edit?tab=t.0).

**PCB Routing**

![Image](/assets/images/analog-bms-project/PCB_kicad_top_layer.png){:height="350"}  
<i><a href="{{site.url}}/assets/images/analog-bms-project/PCB_kicad_top_layer.png">Expanded Image</a></i>

[Ari Wasch pointed out](https://x.com/ariwasch/status/1958188737726202057) that direct connections would be ideal instead of thermal reliefs for the high current paths. I set the entire top layer of the PCB (BATT+) to use direct connections instead of thermal reliefs and didn't really have any problems with this. Resistance was marginally decreased and I never had issues soldering / desoldering components.

[I asked former UBC Solar Electrical Lead Mischa Johal](/assets/images/analog-bms-project/mischa-on-direct-connections.jpg) about if we have / should use direct connections on our module sheet PCBs (they hold and provide current paths for our cells) to decrease the resistance of our pack. Apparently some characterization testing was done on this (with little documentation) and it was found that temperatures didn't significantly increase and resistance didn't significantly decrease.

![Image](/assets/images/analog-bms-project/i-love-my-moots.jpg){:height="350"}
<i><a href="{{site.url}}/assets/images/analog-bms-project/i-love-my-moots.jpg">I love my moots.</a></i>

[One of my moots](https://x.com/sgull_dev/status/1958066751775596706) gave the amazing suggestion of removing all reference designators and replacing it with fun squigles. The only logical response to this is to [get all my moots to send me their best pepes and memes](https://x.com/CKalitin/status/1958071000773587136) to put on the PCB, along with my [favourite 4chan greentext](https://www.reddit.com/r/4chan/comments/qnh8m5/best_thing_ive_ever_read_in_4chan/).

https://x.com/sgull_dev/status/1958066751775596706

### **Enclosure Rev 1**

- Enclosure rev 1 design (bad design)

### **PCB Bringup**

- PCB Bringup (link reflow oven post)

### **Debugging**

- Issues during testing
    - Wrong resistors
    - MOSFET footprint (easy fix)
    - Weak pulldowns? FET issue? Temp circuitry
    - Voltage dividers inconsistent (LTspice, replaced comparator & same issue)

### **Conclusion**

- Conclusion / It worked
    - UV worked, not OV. Haven't tested UT or OT or OC (I should do this now)
    - Theoretical understanding is very important, microcontrollers are underrated, you can get away with way less fundamental understanding
    - Czech guy ended up putting an extremely low power MCU on his BMS that communicated as well. Obviously this is the right design decision.
    - More breadboard testing when you don't know what you're doing.
