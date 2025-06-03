---
layout: post
title: "Deriving the Impulse Labs Master Plan"
categories: Space
tags:
    - Ideas
    - Drafts
author:
 - Christopher Kalitin
redirect_from:
  - /space/2025/06/02/impulse-master-plan.html
word_count: 0
---
<head>
    <meta property="og:image" content="{{site.url}}/assets/images/impulse-master-plan/header.jpeg">
</head>

![Image](/assets/images/impulse-master-plan/header.jpeg){: .align-center}  
<i>The Impulse Stove has a peak single element power output of 10kW!!!</i>

### <b>Intro</b>

For the last few days I've been visting SF (holy shit you can just do things) and last Thursday I got to see Impulse Labs. Today, through an unlikely series of events (See Appendix 1), I interviewed at Impulse and could have the opportunity to work on their astoundingly beautiful electric induction stove that can output a max of 10kW from a single heating element! For some context, our car at [UBC Solar](https://ckalitin.github.io/technical/2025/03/26/stm32-rcc-register.html) has an average power of 2kW. This stove outputs 5x the power of our solar car!

To hedge against the risk of me getting this job and not being able to write about Impulse Labs, today I'm writing a blog in which I'll attempt to derive the Impulse Labs [Master Plan](https://www.tesla.com/secret-master-plan). This is a quick couple hour blog post, so not a full deep analysis like some of my other [Space](https://ckalitin.github.io/space/2024/08/12/extrapolating-demand-firefly.html) [Industry](https://ckalitin.github.io/technology/2024/01/07/analysing-neutron-competitively.html) [posts](https://ckalitin.github.io/technology/2024/11/19/s-curve-examples.html), just a first attempt.

While at Impulse Labs I got some EE related information and heard the term "NDA" so I assume I can't share it. This blog will be a high level exploration/derivation of Impulse's product strategy with information I can find on the internet and hence will not risk divulging information that would get an offer revoked.

### <b>Begining the Analysis</b>

![Image](/assets/images/impulse-master-plan/impulse-home.jpg){: .align-center}  
<i>A home full of potential Impulse products.</i>

Impulse Labs' first product is a 10kW electric induction stove that has a 3kWh battery built into it. The addition of a battery means no home rewiring is required to install it and it can be powered off a standard 110V wall outlet with a 15A breaker. 120V * 15A = 1.8kW, so if they tried powering the stove directly off the wall they'd be >5x over the limit of a standard US home circuit.

This is the primary unique feature of the Impulse stove: the battery allows peak output power to be much higher than peak input power. For appliances that are not continuously used, such as a stove, this means power can trickle in from the wall at a low rate and power can be drawn from the battery at a high rate when needed.

I consider this to be the core of Impulse Labs' product strategy and will consider how the battery strategy can be applied to other home appliances.

On [Impulse Labs' website](https://www.impulselabs.com/about), they show a home full of potential future Impulse products (see image above). This includes a stove, fridge, oven, washing machine, and dryer.

I will analyze how useful the battery strategy is for these appliances:
 - Stove
 - Dryer
 - Oven
 - Water Heater
 - Washing Machine
 - Dishwasher
 - Fridge

### <b>Characteristics of an Applicable Appliance</b>

Most US homes have individual circuit breakers at 15-20 A and a main circuit breaker of 100-200 A. Large electrical appliances such as stoves, dryers, and water heaters typically have 30 A breakers on separate circuits.

We can use 110V AC RMS and 15A max as an upper bound for peak power on a standard home circuit. 110 V * 15 A = 1.65 kW.

If a given electrical appliance has a peak power output of >1.65 kW, the only option is to either use a battery or a legacy energy source (eg. nat gas). If peak power output is reasonably less than 1.65kW, a wall outlet can be used directly.

This gives us a few traits for an appliance to be a good candidate for the Impulse Labs battery strategy:
 - Peak power output of >1.65 kW
 - Low usage factor (eg. ~1% for a stove)
 - Suitable for an electrical energy source (eg. induction stove vs. gas)

To determine if an appliance is suitable, we need to know the following:
 - Legacy power input (eg. nat gas rate for a stove)
 - Electric power input (eg. induction stove power)
 - Nominal power output (eg. heating element power, not to be confused with input/charging power)
 - Usage factor (What percentage of time the appliance is on)
 - Charge time (In between uses, will you be able to charge it fully?)

We'll assume the appliance operates at a nominal power until it is fully discharged and that it charges at a power of 1 kW whenever it is not in use. We'll also assume that the battery is sized for a continuous usage of the nominal power for the duration of the usage factor (eg. 3 kW for 30 minutes for the stove means 1.5kWh).

If we see that given the expected usage factor we cannot fully charge the appliance in between uses, it is not suitable for the Impulse battery strategy from a consumer perspective.

### <b>Stoves</b>

Parameters:
 - Legacy power input: 3 kW ([10,000 BTU/hr](https://www.whirlpool.com/blog/kitchen/how-many-btus-for-gas-range.html))
 - Electric power input: 1 kW (from 110 V, 15 A wall outlet)
 - Nominal power output: [3 kW](https://www.energysage.com/electricity/house-watts/how-many-watts-does-an-electric-oven-and-stove-use/)
 - Usage factor: 2% (30 minutes per day)
 - Battery size: 1.5 kWh (3 kW * 30 minutes)
 - Charge time: 1.5 hours

"120 V, 15 A or 240 V, 10–30 A" from website https://www.impulselabs.com/
"No electrician required"

### <b>Dryers</b>

### <b>Ovens</b>

### <b>Water Heaters</b>

### <b>Washing Machines</b>

### <b>Dishwashers</b>

### <b>Fridges</b>

### <b>Appendix One: The Remarkable Story of How I Got To Impulse Labs</b>

I'll quickly go over how I got into this position because it's a completely remarkable experience. In September 2024 I joined the UBC Solar student design team and got a ton of firmware / PCB / Debugging experience. This shaped the projects I posted on X and David Holz (founder of Midjourney) DM'd me one day while I was studying for my linear algebra final. His advice essentially was "Hey kid you should consider dropping out and moving to SF for hardware interships." Next I DM'd a ton of founders asking for factory tours and a job. Through sheer luck, Casey Handmer happened to fly into SF a day after me and responded to my DM. He sent me a random address to said "Sam is happy to chat Mars stuff too." That random address was Impulse Labs and Sam was Sam d'Amico, the founder. I asked about hardware internships and got an interview, which seems to have gone well!

The moral of this story is that you have agency! You can just ask people for things and most say yes! Just make sure you ask good questions and are someone worth talking to!

Notice that if I hadn't written my previous blog post on [blunt body Mars entry vehicles](https://ckalitin.github.io/space/2025/05/13/martian-atmosphere-model.html), Casey Handmer would've been less interested in talking to me and I'd likely never have gotten to interview at Impulse Labs.
