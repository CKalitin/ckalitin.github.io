---
layout: post
title: "What I Learned From Other Teams At FSGP 2025"
categories: Solar
tags:
    - Ideas
    - Drafts
author:
 - Christopher Kalitin
redirect_from:
  - /solar/2025/07/09/fsgp-team-insights.html
word_count: 170
---
<head>
    <meta property="og:image" content="{{site.url}}/assets/images/nasa-end-state/msr.jpg">
</head>

### **Waterloo**

#### **Components They Use**
- LTC6811 Slave Board IC
- XBee Radio Modules
- 10 Ah custom supplemental battery
- LTC4418 for power distribution (In place of how we use relays on the ECU I think)
- Prohelion Wave Sculpter 22 Motor Controller
- Duraclick connector for CAN
- Nomura MPPTs

#### **General Notes**

**Bootloader & STM32**

They have Bootloaders to flash over CAN (I think it was CAN). Mostly because "It's an easy project for a first year."

This is also why they want to use STM32F103CBT6's instesad of the C8's. The CB has 128 KB of flash memory while the C8 has 64 KB, which is not quite enough space for the bootloader and the application code.

The STM32F103CBT6 is also the same chip that is on our ST-Links.

**Controller Board**

![IMAGE](/assets/images/fsgp-team-insights/waterloo/Controller-1.jpg){:width="500"}  
[Expanded Image](/assets/images/fsgp-team-insights/waterloo/Controller-1.jpg)  
![IMAGE](/assets/images/fsgp-team-insights/waterloo/Controller-2.jpg){:width="500"}  
[Expanded Image](/assets/images/fsgp-team-insights/waterloo/Controller-2.jpg)  
*MS15's standard Controller Board.*

Waterloo uses a single common microcontroller board for everything. They call it a Controller Board.

They have 4 of these boards in the car:
1. Battery Management System (BMS)
2. Power Distribution Board
3. Console (Driver User Interface)
4. Motor Controller Interface

These are relatively small boards and have a few standard components on them. Essentially, they build their own standard microcontroller board suited for their needs.

Each board has output pins (GPIOs, etc.) wired to what looks like a [Micro Blade & Beam connector](https://blog.samtec.com/post/what-ultra-micro-printed-circuit-board-pcb-connectors-are-best-in-rugged-applications/). This specialized connector allows for many connectors in a small form factor.

In the Power Distribution Board section below, you can see how this Controller Board slots into the Power Distribution Board (Look for the Micro Blade & Beam connector and four screw holes). A similar slot exists on their BMS board.

Having Controller boards slot directly into PCBs (Like our DCDC does) allows for a more durable connection. I was originally skeptical of this connector, as I've killed many similar ones when disassembling iPhones, but iPhones use a ribbon cable with a similar connector, not a rigid PCB on the other end.

This also allows hot swapping microcontrollers, which is only an advantage if you're regularly killing microcontrollers, which you shouldn't be doing.

**CAN Architecture**

![IMAGE](/assets/images/fsgp-team-insights/waterloo/Controller-CAN.jpg){:width="500"}  
[Expanded Image](/assets/images/fsgp-team-insights/waterloo/Controller-CAN.jpg)  
*MS15's standard Controller Board with CAN In and CAN Out ports.*

Each Controller Board has a CAN In and a CAN Out port, which allows them to daisy chain the boards together. All boards are connected in series on a single CAN bus. The final board has a termination resistor.

The only issue they've had with CAN is low arbitration messages getting dropped. Fairly standard and simple issue.

They use the Duraclick 2-pin connector for CAN.

It seems that Controller Boards are on their own CAN Bus. The Motor Controller is on a separate CAN bus. To communicate with the motor controller, they use a SPI to CAN IC on the Motor Controller Interface Board (MCI). They ran out of CAN peripherals on their Controller Board, so had to use SPI to CAN to communicate with the motor controller.

**Power Distribution Board**

![IMAGE](/assets/images/fsgp-team-insights/waterloo/PowerDist-1.jpg){:width="500"}  
[Expanded Image](/assets/images/fsgp-team-insights/waterloo/PowerDist-1.jpg)  
![IMAGE](/assets/images/fsgp-team-insights/waterloo/PowerDist-2.jpg){:width="500"}  
[Expanded Image](/assets/images/fsgp-team-insights/waterloo/PowerDist-2.jpg)  
*MS15's Power Distribution Board.*  

Midnight Sun 15 has a single Power Distribution Board that lives outside of the battery pack. Standard power connectors enter this board from the battery (Left side of image).

I unfortunately didn't get the names of ICs / their purposes, but someone on Midnight sun who worked on this board can certainly be contacted for more info.

This Power Dist Board also powers the BMS. This presents an issue because the Auxilary Battery (10 Ah and custom built) is required for initial startup and it lives in the battery. So, a wire from the supplemental goes to the Power Dist Board, then back into the battery to power the BMS.

The Waterloo guys described this themselves as convoluted and suboptimal, so having a Power Distribution Board in the battery (or as part of the enclosure) is a good idea.

**10x Nomura MPPTs**

![IMAGE](/assets/images/fsgp-team-insights/waterloo/MPPT-1.jpg){:width="500"}  
![IMAGE](/assets/images/fsgp-team-insights/waterloo/MPPT-2.jpg){:width="500"}  
[Expanded Image](/assets/images/fsgp-team-insights/waterloo/MPPT-1.jpg)  
[Expanded Image](/assets/images/fsgp-team-insights/waterloo/MPPT-2.jpg)  
*Bottom of MS15's top shell showing MPPTs and arrays in series.*  

Mightnight Sun 15 uses 10 Nomura MPPTs, with 5 each in 2 strings.

They wire them such that solar arrays and MPPTs are alternating in series.

Ie.  
Solar Array 1 -> MPPT 1 -> Solar Array 2 -> MPPT 2 -> ... -> Solar Array 5 -> MPPT 5

Voltage is boosted ~30 V at each step. 150 V out nominal.

**Wavesculpter 22 Motor Controller**

Their Prohelion Wavesculpter 22 motor controller takes in a few variables, target velocity, target regen current, and target torque.

To enable regen, they set their target velocity to 0 and set their desired regen current.

For cruise control, they set the target torque to 1 and set the desired velocity.

During normal operation, they set the target velocity to a very high value and the target torque value is the angle of the pedal (normalized to a 0 to 1 range).

**Shunt Current Sensor**

Midnight Sun 15 uses a shunt current sensor that has an output difference of microvolts in its nominal current range.

To read such a low voltage difference, they use a MAX17261 IC which amplifies the shunt voltage and outputs an ADC reading over I2C.

Because the shunt voltage is taken from their primary high voltage bus, they have to isolate the MAX17261. This is done using isoI2C. It's a similar principle to our use of isoSPI for the slaveboards.

Our Hall Effect current sensors are already isolated, so we don't do this in the current pack.

**Scrutineering**

![IMAGE](/assets/images/fsgp-team-insights/waterloo/Voltage-Divider.jpg){:width="500"}  
[Expanded Image](/assets/images/fsgp-team-insights/waterloo/Voltage-Divider.jpg)  
*Waterloo's voltage divider perf board to simulate a shunt current sensor.*  

For over current scrutineering tests, they simulate the shunt current sensor by inputing a voltage into the MAX17261. They don't actually need a current source to complete the over current test, just a voltage source.

On a perfboard they have a voltage divider that gets them to the microvolt range to simulate the shunt voltage. This is then connected to the MAX17261.

![IMAGE](/assets/images/fsgp-team-insights/waterloo/Module-Board.jpg){:width="500"}  
[Expanded Image](/assets/images/fsgp-team-insights/waterloo/Module-Board.jpg)  
*Midnight Sun 15's cell board.*  

For cell board testing, they have their own harness that gives them battery module voltages and a thermistor. This is similar to our setup but they don't have to take out a cell board for the test and the cell boards are far more accessible.

**Team Organization**

I talked to Liam and Arian of the Embedded team (I think). Earlier I talked to Evan and Aiden, who are electrical leads.

Midnight Sun does not have subteams the same way we do. Instead, they have higher level teams (mech, elec, business, etc.) that all have projects groups within them. Each team has multiple leads.

This stems from the co-op schedule at Waterloo where students may often be gone for 4 months, come back for 4, then be gone again. This means you can't have a single person owning a project, instead you need a project group where everyone is up to speed on what is going on.

Team members often jump around on different projects and get a wide view of everything that goes on in the car.

**Other Points**

Evan and Aiden were impressed by our simulation environment. <3 Strategy

They use Analog Front End (AFE) to refer to slaveboards and everything beneath them in the battery sensing architecture.

Midnight Sun = MS. Designing MS16 rn. Skipped MS13 because thats a gang lol.

Telemetry architecture is very similar to ours. XBee radio to laptop receiver to database (I believe InfluxDB) to Grafana. Almost exactly the same as [Sunlink](https://github.com/UBC-Solar/sunlink).

They've also burned through tons of LTC chips on slaveboards. Their solution to this for MS16 is to create a board that slots into the slaveboard with a bunch of headers pin on it. So instead of plugging all the headers in sequentially, do it all at once.

They use a drone camera with the 3 standard wires (red, white, yellow) as a backup camera.
 
7 segment display for driver. When I said this looks cool they quickly corrected me and said it was actually shitty.

![IMAGE](/assets/images/fsgp-team-insights/waterloo/Pack.jpg){:width="500"}  
[Expanded Image](/assets/images/fsgp-team-insights/waterloo/Pack.jpg)  

They have a custom built 10 Ah auxiliary battery.

![IMAGE](/assets/images/fsgp-team-insights/waterloo/Label.jpg){:width="500"}  
[Expanded Image](/assets/images/fsgp-team-insights/waterloo/Label.jpg)  

Boards that they have fried all have labels on them signifying when they broke. 

#### **What UBC Solar Should Take From Them / Ideas**

**Grafana Is An Industry Standard**

[AstroForge](https://x.com/AstroForge/status/1882092115091734700/photo/1), the asteroid mining company that has actually launched a mission, uses Grafana for telemetry.

[Zydro Marine](https://x.com/chris_dalke/status/1923546546139779487) also uses Grafana for telemetry.

Web-based telemetry also isn't too rare. All of [Starship mission control telemetry](https://x.com/spacesudoer/status/1871235297746538727) is web-based.

Andrew McCalip of Varda Space - the space pharmaceutical manufacturing company - has a [public Grafana dashboard](https://x.com/andrewmccalip/status/1939444347528941872) for his side project of building an autonomous boat that can sail the world. He also has a [GPS dashboard to track his autonomous boat](https://x.com/andrewmccalip/status/1896012825686057178).

We should consider creating a public Grafana dashboard that anyone on the team (or alumni and friends) can access to see our telemetry. Currently, only one or two people can look at live telemetry from the car at any given time. A public Grafana dashboard - or one that Solar Members can log into - would allow anyone to see the telemetry in real time.

When I was timing up at HQ during the race I had no idea what was going on with the car and had to switch radio channels between the driver channel and the timing channel to figure out what was going on. A Grafana dashboard that any member can access solves this.

Also, we should create a GPS dashboard on Grafana to know where the car is.

**Rename MDU/MDI to MCI**

We call our motor interface board the Motor Drive Unit or Motor Drive Interface depending on who you ask.

To simplify naming (and remove the word "Drive", since it's redundant), we should rename the MDU/MDI to the Motor Controller Interface (MCI) and follow Waterloo's naming scheme for this board.

**Working Between Subteams**

A great strength of Waterloo's team structure is that members can move to different projects and work on what is most interesting to them, while getting a feel for all the different work that goes into the car.

We don't need to adopt their entire team structure and eliminate all of our subteams, but we should encourage more cross-subteam work so everyone can get a feel for all parts of the car and discover what work they like most.

Currently, the system for allocating a member to a particular subteam is the lead deciding where a new member should be placed. Instead, we can let members move more freely between subteams and decide themselves.

**Power Distribution Board**

***Blue Force's Fuse Board***

Waterloo's Power Distribution Board looks a lot cleaner than our distribution board. We should take more inspiration from industry power distribution boards for our next generation design. For example, we can consult autmotive fuse boards and put all connectors on the outer edge of the board.

**Bootloaders**

Currently an issue for us is flashing the BMS / ECU is difficult and requires opening the pack. Having a bootloader that allows us to flash over CAN or another bus would obfuscate this issue. Important consideration for v4, I believe we're going towards JTAG for this.

**CAN Splitters**

Waterloo does have any CAN splitters because boards are daisy chained. This is not the industry standard and our current architecture is more professional.

However, only one other team (Calgary) has CAN splitter boards. They have them for the same reason we do, our connectors don't have a standard off the shelf 3-way splitter. All other teams have an off-the-shelf 3-way splitter.

We should reconsider our CAN connector and the form factor of our CAN splitter by looking at what the automotive industry uses.

Our DB-9 and 4 port CAN splitter is a reasonable solution to this problem, but could be made better through a smaller form factor. Furthermore, a cleaner and more accessible wiring diagram for the car would help with understanding what all the wires in the car do.

**Shunt Current Sensor**

The big advantage of Waterloo's shunt current sensor system is that the MAX17261 IC gives them a higher precision voltage reading than we get from our STM32, leading to a more precise current value.

We can consider a shunt current sensor for v4. We could also achieve a higher precision current reading by using a high precision ADC IC on our ECU, eg. the ADS1115 which I'm using in [one of my projects](https://ckalitin.github.io/scribe/).

For simulating an over current fault in the future it seems we could inject a voltage into the current sense line on the ECU and forego the need for a separate current sensor with 30 loops around it. Send an email to scrutineers before baselining this architecture though.

### **Purdue**


### **Puerto Rico**


### **Wisconsin Madison**


### **Berkeley**


### **ETS**


### **Calgary**