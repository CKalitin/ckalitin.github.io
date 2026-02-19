---
layout: post
title: "The PCB Design Cycle: Designing The Battery's High Voltage Controller"
categories: Projects
tags:
    - Projects
    - Drafts
author:
 - Christopher Kalitin
word_count: 1111
---
<head>
    <meta property="og:image" content="{{site.url}}/assets/images/circuit-analysis-useful/header.jpg">
</head>

![Image](/assets/images/circuit-analysis-useful/header.jpg)  

## **Project Background**

Ideas:
- HVC Project Management reflections, how to manage PCB projects
- HVC functionality overview, how to design a PCB from a high level
- Give mech side more understanding of the design cycle
- What does the BMS actually do?
- Designing the High Voltage Controller of the V4 Battery Pack
- Explain the design cycle for potential new recruits, and pitfalls

Design cycle:

Point to cover:
- Before going into design, know your goals (what does *the team* need) and gauge every decision off this
    - Individual features may not be required for high-level goals for the year
        - Explain core functionality of the HVC (contactors, reading from the BMS, current sensing, LV control & swapping)
    - MMRs vs MVPs, know what's a must have a what isn't
        - Shunt resistor, power path prioritizer
        - Some things not strict requirements (regs) but we should absolutely have (precharge monitoring)
    - Many MMRs will never be revisited, so if you have the extra time, add them in
        - Once a project is complete, it's likely more useful for a designer to move onto another project than revisit the same one to make it marignally better (eg. distribution board and E-fuses)
- Schematic design cycle
    - You must be the expert, when people ask questions they should run out of questions before you run out of answers
    - Have a clear mental model of the system (the blocks, how they interact with each other, edge cases, etc.)
    - So, don't copy and paste designs - ensure you fundamentally understand everything (ECU Rev 2.0 Design Documentation)
    - The LLMs are good at suggesting ICs, but remember that you must be the expert
    - Most importantly: define all interfaces early so integration is not a pain
- Routing design cycle
    - Mechanical constraints drive routing!
        - Show the connectors, and how they connect in the pack
    - Place blocks, then signals, then power, then everything else
        - Bottom right, swap
        - Top right (nice white line), current sensing and precharge monitoring
        - bottom left, masterboard and microcontroller
        - middle, MOSFETs
    - Other little tips:
        - constant DC voltages don't care about a million vias, but high speed and sensitive signals do
- Testing
    - Think about it before you order the PCB, design for it
    - Test individual systems
    - Once individual systems work, test it all
    - Testing isn't done until you're integrated with the rest of the pack and the car, think again to what the original goal was

Post Focus:
- High level design cycle, less low-level PCB stuff
- Try to make it applicable to Mech people as well
    - Eg. in routing section make the first focus integration (connectors and mechanical constraints)

