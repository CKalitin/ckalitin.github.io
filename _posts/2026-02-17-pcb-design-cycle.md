---
layout: post
title: "Insights From Designing The Battery's High Voltage Controller"
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

Since September of last year I've been designing the High Voltage Controller (HVC) for UBC Solar's V4 battery pack. Throughout this process, severalinsights and design philosophies have emerged that I think are worth sharing. Many of these insights - particularly those in the first section - are high-level and applicable to projects in other domains, not just PCB design.

Some of these points may sound obvious, but the hard part is not reading and remembering them, but actually having these lessons ingrained into your head. It's very easy to tell new engineers to not make mistakes like shorting batteries, but unless those lessons are beat into your head it may be very difficult to avoid them!

## **Connect Your Project To Team Goals**

At the begining every Saturday Meeting, our team captain, Tima Komarov, goes over a slide that states the goals of the team. One of these is achieving Top 5 at the Formula Sun Grand Prix in the summer of 2027. This is a high level goal, but each UBC Solar member must know how their work contributes to it, and knowing the high level goal allows members to independently make design decisions for their own projects.

For the High Voltage Controller (HVC), it's fairly clear how it contributes to the overall goal. Without a board that controls our battery pack, we won't be able to drive the car. So, such a component is on the critical path to achieving our goal.

In some cases, it might not be clear exactly how a project is contributing to the success of the team. In such cases, it's extremely important for the member to ask questions and figure out how to connect their day-to-day work to the long-term success of the team. Otherwise, it's very easy to fixate on low-level details and lose sight of if your work is actually useful.

[Image of test setup]

An example of this is my first project on the team, characterizing our V3 battery pack's current sensor to minimize its error.

This project dragged on for months while I developed an automated testing setup (shown above) for characterizing the current sensor. This involved understanding the functionality of the current sensor and the board that reads it, writing firmware, and software to read from our instrumentation. All of this work went on while I had no clear requirement for how accurate the current sensor needed to be, and no clear timeline for when it should be completed.

While this was a great learning experience, not connecting the day-to-day work on the project to higher-level team goals during that term (preparing for our next competition) caused the project to drag on for months longer than expected. In these months, I could have been doing other work that would have prepared our battery pack for the next competition.

## **MVPs vs MMRs**

Part of connecting your work to the goals of the team is understanding what work is *required* and what features are *nice to have*. On Solar, we often use the terms MVP (Minimum Viable Product) and MMR (Minimum Marketable Product) to distinguish between these two categories. The MVP is the minimum set of features required for the product to be functional, while the MMR is the minimum set of features required for the product to be marketable or competitive.

Every member on the team must understand what an MVP looks like for their project. This is the minimum set of features that must be implemented for the car to drive at competition. Before other work is attempted, the designer should be working towards the MVP and ensuring that it is completed on time. Once it's guaranteed that your project will have the MVP features by the deadline, then other MMR features can be added.

An easy test you can run for if a given feature is an MVP or MMR is to ask yourself if competition was in a month, would you develop the feature. A month is such a short timeline that you must only work on features that are strictly required for the car to drive.

Notice this framework doesn't restrict a project to only having MVP features on its first revision. The limiting factor is your timeline. So, if time permits, extra features can be added in the first revision.

On the HVC, this meant implementing a shunt current sensor and a power path prioritizer in the first revision of the board. These features are not strict requirements to achieve functionality and add significant design and testing time. However, there were 8 months allocated to the HVC project, so there was enough time to implement these features in the first revision. 

Due to the nature of PCBs, such schedule margin is also likely the only time when MMR features will be added. Once your board is working, it's unlikely that the best use of your time will be to revisit the same project and add a couple of extra features. Each PCB revision imposes a opportunity cost, so it's often more useful to move onto the next project. This is in contrast to a field like software (where the terms MVP and MMR originate), where adding an additional feature doesn't mean potentially spending weeks rerouting your PCB.

## **Schematic Design: You Must Be The Expert**

- Schematic design cycle
    - You must be the expert, when people ask questions they should run out of questions before you run out of answers
    - Have a clear mental model of the system (the blocks, how they interact with each other, edge cases, etc.)
    - So, don't copy and paste designs - ensure you fundamentally understand everything (ECU Rev 2.0 Design Documentation)
    - The LLMs are good at suggesting ICs, but remember that you must be the expert
    - Most importantly: define all interfaces early so integration is not a pain

## **Routing & Component Placement: Mechanical Constraints Drive Routing!**

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

## **Quick Note on Testing: Design For It Before You Order The PCB**

- Testing
    - Think about it before you order the PCB, design for it
    - Test individual systems
    - Once individual systems work, test it all
    - Testing isn't done until you're integrated with the rest of the pack and the car, think again to what the original goal was
    
## **Why Should You Know The History Of Your Project?**




