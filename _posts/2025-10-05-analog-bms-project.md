---
layout: post
title: "Analog Battery Management System Project"
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

![Image](/assets/images/made-reflow-oven/header.jpg){:height="500"}

***VERY IMPORTANT TO PUT AN IMAGE HERE***

About 6 weeks ago I read a [blog post by Vlastimil Slinták](https://uart.cz/en/2557/lto-bms-development-notes/) in which attempted to develop an Analog Battery Management System (BMS) for a 1s3p Lithium Titanate (LTO) battery pack. From what I understand, he ended up running into an issue where he could not drive a PMOS's gate high enough to open it fully, and decided to go with a low-power microcontroller in the end.

I took some time to understand the circuit and decided it would be a good exercise to learn more about analog electronics and PCB design. A microcontroller really is the best way to build a BMS, but analog circuitry is fun to learn about and how our forefathers did things.

Fundamentally, a BMS has 5 main functions:
- Undervoltage protection (UV)
- Overvoltage protection (OV)
- Undertemperature protection (UT)
- Overtemperature protection (OT)
- Overcurrent protection (OC)

Other functions include cell balancing, state of charge (SoC) estimation, and communication with other devices. All of this was out of scope for an Analog BMS and I get a good enough taste of these technical problems on the [UBC Solar student design team](https://ubcsolar.com/) where I work on the BMS for our 5.4 kWh Li-ion battery pack.

### **Schematic Overview**

- Circuit Overview
    - Fundamental principle: Body diodes of FETs
    - Comparators (Mistake of not doing all logic signal-side, not power-side, link Limina)
    - Voltage references + dividers (Wrong approach, more later)
    - Part Selection
    - Breadboard Testing
    - Direct connections for all (bad design decision, not really required)

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
