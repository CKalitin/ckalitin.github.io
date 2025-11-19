---
layout: post
title: "Rewiring a 240V Kiln and Producing Calcium Oxide"
categories: projects
tags:
    - Projects
    - Latest Posts
author:
 - Christopher Kalitin
word_count: 1000
---
<head>
    <meta property="og:image" content="{{site.url}}/assets/images/rewired-240v-kiln/1000c.jpg">
</head>

![Image](/assets/images/rewired-240v-kiln/1000c.jpg){:height="500"}

### **Intro**

Two weeks ago I applied to Terraform Industries and spoke to Casey Handmer. His advice was that I gain more experience through projects and that reading textbooks and going to class doesn't really teach you anything. About half an hour after I spoke to him I decided on taking on direct air capture of CO2 through the [calcium looping process](https://en.wikipedia.org/wiki/Calcium_looping) as a project.

![Image](/assets/images/rewired-240v-kiln/stoichiometry.png)

[Terraform industries is using this process](https://terraformindustries.wordpress.com/2022/07/24/terraform-industries-whitepaper/) to produce carbon-neutral CH4 and CH3OH from sunlight and air. The stoichiometry of the calcium looping process is shown above. The calcination step is done at ~850-900 C and is what I approached first (can't do the carbonation step without Calcium Oxide to start with).

My project notes are [available here](https://docs.google.com/document/d/12KHtcnumooHgzO7qDuehRkyOHOEnnQzopWQEb114Iws/edit?usp=sharing). If you can parse them, there are more details in there.

I'll try to keep this post short and just get into fun anecdotes in a few parts of the project.

### **Theory of Operating + Wiring**

![Image](/assets/images/rewired-240v-kiln/header.jpg){:height="500"}
I bought a $300 kiln off Facebook Marketplace with a missing power cord and a couple broken elements. In the interest of moving fast on this project I didn't do much research before this and jumped straight into serially solving all problems with the kiln.

In any project there are always a finite number of problems you have to solve, so you can move very quickly by attacking the problem directly in front of you at full force, solving it, and moving onto the next one.

![Image](/assets/images/rewired-240v-kiln/wiring.png){:height="500"}

The first step was to understand the wiring of the kiln. My quick wiring diagram is shown above.

There are three main components:
1. Kiln Sitter (240 V input, makes sure you don't accidentally leave it on all night)
2. Element Control Box (Several contactors and switches control current flow)
3. Heating Elements (Resistors)

### **LT-3 Kiln Sitter**

![Image](/assets/images/rewired-240v-kiln/kiln-sitter.jpg){:height="200"}

![Image](/assets/images/rewired-240v-kiln/kiln-sitter-schematic.png)

The LT-3 kiln sitter contains a relay (with an unknown part number) that connects both 240 V phases to the element control box. This relay is the first switch in the kiln.

The Kiln sitter has two methods of turning off the kiln:
1. A sensing rod deforms with temperature, and at a critical temperature it releases a weight (visible in the image above) that hits the relay armature and opens it.
2. A 4 RPH (revolution per hour) synchrotron rotates and when it hits 0 hours, a spring is released that hits the relay armature and opens it.

The ceramic tube containing my firing gauge cracked in half when I was removing the kiln sitter, and the sensing rod has degraded over decades and now doesn't hold the weight up, so it wants to enternally keep the relay open. So, I had no way to use this safety mechanism.

The synchrotron does seem to work, and it's required that it's turned to >0 hours for the relay to activate.

### **Element Control Box**

![Image](/assets/images/rewired-240v-kiln/element-control-box.jpg){:height="300"}

![Image](/assets/images/rewired-240v-kiln/element-control-box-internals.jpg){:height="300"}

The element control box has 3 primary components:
1. AutoMate II PCB (For a basic temperature profile)
2. Infinite Control Switches (Maintain a given current, these are fascinating more on them later)
3. Mercury dipped contactor (Again, a very fun concept)

The wiring was shown in my sketch above.

### **AutoMate II PCB**

![Image](/assets/images/rewired-240v-kiln/pcb.jpg){:height="300"}

![Image](/assets/images/rewired-240v-kiln/durakool-mercury-contactor.jpg){:height="300"}

This PCB is on the other end of the black control panel shown in the element control box image in the previous section. 

It takes in both phase A and phase B, steps this down into some sort of logic voltage, then outputs a PWM signal to the primary mercury contactors.

It scales the duty cycle over 0-10 hours so you can get a sloped temperautre profile. Note that all control in this kiln is done by current, not temeperature. Not a thermocouple in site, so you've just got to guess what temperature a 60% duty cycle will get you to.

### **Mercury Contactor**

![Image](/assets/images/rewired-240v-kiln/durakool-mercury-contactor.jpg){:height="300"}

![Image](/assets/images/rewired-240v-kiln/mercury-contactor-schematic.png){:height="300"}

This is the primary contactor in the element control box. After the kiln sitter relay, this is the next switch in the path of current flow.

Because the AutoMate II PCB needs to control this contactor with PWM, it needs to be able to tolerate very many cycles in its lifetime. So, it uses an armature driven by a 240 V AC solenoid which is dipped into mercury as a conductor. This results in less mechanical wear that armatures hitting each other, liquids are nicer.

### **Infinite Control Switch**

![Image](/assets/images/rewired-240v-kiln/infinite-switch.jpg){:height="300"}

![Image](/assets/images/rewired-240v-kiln/infinite-switches.jpg){:height="300"}


