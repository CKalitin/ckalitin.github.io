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

To detect undervoltage and overvoltage conditions, I used two comparators (TLV7031) that compared divided battery voltages to a fixed 1.8 V voltage reference.

I baselined the use of [Molicel's INR-18650-M35A cells](https://www.molicel.com/wp-content/uploads/INR18650M35A-V2-80096.pdf), which are the cells that UBC Solar uses. This provided a voltage range of 2.7 V to 4.2 V per cell, giving me my UV and OV conditions.

To simplify the BOM, I used a single 1.8 V fixed voltage reference (TPS71518) and two voltage dividers to scale the battery voltage to toggle the comparators at the desired voltages. For example, for undervoltage I divided the 2.7 V minimum voltage of the cells into 1.8 V and connected this to the inverting input of the comparator. The non-inverting input was connected to the 1.8 V reference. When the battery voltage dropped below 2.7 V, the output of the comparator went high, pulling the gate of the PMOS to BATT+ and disabling discharge.

My original design involved two voltage references (TPS7A2401) that would output 2.542 V and 4.142 V. These values were the closest I could trim the output of the references to 2.5 V and 4.2 V (I hadn't yet realized 2.7 V is the correct value for UV for battery chemistry reasons). [Chris Jack](https://x.com/ee44cd/status/1957650301126623319) (Great name) pointed out that I could get away with a single 1.8 V reference and two voltage dividers, instead of 2 references and 2 dividers.

I ended up having issues with the voltage dividers not dividing BATT+ properly because of the extremely weak resistors (~1M to limit quiesence current), so this was an incorrect design decision I didn't explore far enough (more on this later). A common theme in this project was making poor design decisions because of a lack of theoretical understanding.

**Temperature Faults**



**Quiesence Current & Part Selection**



**PCB Routing**



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
