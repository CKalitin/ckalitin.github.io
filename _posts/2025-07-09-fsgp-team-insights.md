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

Two types of insights:
1. Observations about what they use (eg. LTC, solar cells, etc.)
2. Deeper insights about how the team / car works

### **Waterloo**

#### Components They Use
- LTC 6811 Slave Board IC
- XBee Radio Modules
- 10 Ah custom supplemental battery
- LTC 4418 for power distribution (In place of how we use relays on the ECU I think)
- Prohelion Wave Sculpter 22 Motor Controller
- Duraclick connector for CAN
- Nomura MPPTs

#### Bullet Point Notes
- Bootloaders to flash over CAN (I think it was CAN), easy project for a first year.
- Evan and Aiden (Elec leads iirc) were impressed by our simulation environment. <3 Strategy
- They've also burned through tons of LTC chips on slaveboards
- They use Analog Front End (AFE) to refer to slaveboards and lower in the battery sensing architecture.
- Midnight Sun = MS. Designing MS16 rn. Skipped MS13 because thats a gang lol.
- They have an external power distribution board.
    - Suboptimal because supplemental power is routed outside the battery, to the power dist board, then back into the battery for its own boards
 - 

Ok this requires images

#### What Solar Should Take From Them

### **Waterloo**


### **Waterloo**