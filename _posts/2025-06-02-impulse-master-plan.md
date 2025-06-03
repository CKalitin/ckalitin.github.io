---
layout: post
title: "Deriving the Impulse Labs Master Plan"
categories: Space
tags:
    - Ideas
author:
 - Christopher Kalitin
redirect_from:
  - /space/2025/06/02/impulse-master-plan.html
word_count: 2325
---
<head>
    <meta property="og:image" content="{{site.url}}/assets/images/impulse-master-plan/header.jpeg">
</head>

![Image](/assets/images/impulse-master-plan/header.jpeg){: .align-center}  
<i>The Impulse Stove has a peak single-element power output of 10kW!!!</i>

### <b>Intro</b>

For the last few days I've been visiting SF (holy shit you can just do things) and last Thursday I got to see Impulse Labs. Today, through an unlikely series of events (See Appendix 1), I interviewed at Impulse and could have the opportunity to work on their astoundingly beautiful electric induction stove that can output a max of 10kW from a single heating element! For some context, our car at [UBC Solar](https://ckalitin.github.io/technical/2025/03/26/stm32-rcc-register.html) has an average power of 2kW. This stove outputs 5x the power of our solar car!

To hedge against the risk of getting this job and not being able to write about Impulse Labs, today I'm writing a blog in which I'll attempt to derive the Impulse Labs [Master Plan](https://www.tesla.com/secret-master-plan). This is a quick couple-hour blog post, so not a full deep analysis like some of my other [Space](https://ckalitin.github.io/space/2024/08/12/extrapolating-demand-firefly.html) [Industry](https://ckalitin.github.io/technology/2024/01/07/analysing-neutron-competitively.html) [posts](https://ckalitin.github.io/technology/2024/11/19/s-curve-examples.html), just a first attempt.

While at Impulse Labs I got some EE related information and heard the term "NDA" so I assume I can't share it. This blog will be a high level exploration/derivation of Impulse's product strategy with information I can find on the internet and hence will not risk divulging information that would get an offer revoked.

### <b>Beginning the Analysis</b>

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

Most US homes have individual circuit breakers at 15-20 A and a main circuit breaker at 100-200 A. Large electrical appliances such as stoves, dryers, and water heaters typically have 30 A breakers on separate circuits.

We can use 110V AC RMS and 15A max as an upper bound for peak power on a standard home circuit. 110 V * 15 A = 1.65 kW. Impulse Labs' website mentioned installation can be done without an electrician, so we can assume appliances must be charged at <1.65 kW.

If a given electrical appliance has a peak power output of >1.65 kW, the only option is to either use a battery or a legacy energy source (eg. nat gas). If peak power output is reasonably less than 1.65kW, a wall outlet can be used directly.

This gives us a few traits for an appliance to be a good candidate for the Impulse Labs battery strategy:
 - Peak power output of >1.65 kW
 - Low usage factor (eg. stove, microwave, etc.)
 - Suitable for an electrical energy source (eg. induction stove vs. gas)

To determine if an appliance is suitable, we need to know the following:
 - Legacy power input (eg. nat gas rate for a stove)
 - Electric power input (eg. induction stove power)
 - Nominal power output (eg. heating element power, not to be confused with input/charging power)
 - Usage factor (What percentage of time the appliance is on)
 - Charge time (In between uses, will you be able to charge it fully?)

We'll assume the appliance operates at a nominal power until it is fully discharged and that it charges at a power of 1 kW whenever it is not in use. We'll also assume that the battery is sized for continuous usage of the nominal power for the duration of the usage factor (eg. 3 kW for 30 minutes for the stove means 1.5 kWh).

If we see that given the expected usage factor we cannot fully charge the appliance in between uses, it is not suitable for the Impulse battery strategy from a consumer perspective.

### <b>Stoves</b>

Parameters:
 - Legacy power input: 3 kW ([10,000 BTU/hr](https://www.whirlpool.com/blog/kitchen/how-many-btus-for-gas-range.html))
 - Electric power input: 1 kW (from 110 V, 15 A wall outlet)
 - Nominal power output: [3 kW](https://www.energysage.com/electricity/house-watts/how-many-watts-does-an-electric-oven-and-stove-use/)
 - Usage factor: 2% (30 minutes per day)
 - Battery size: 1.5 kWh (3 kW * 30 minutes)
 - Charge time: 1.5 hours

Using the strategy described above, we get an electric stove that requires 3 kW to be on par with gas stoves and has a 1.5 kWh battery that can be charged in 1.5 hours.

This differs from the Impulse stove in that the battery is 1.5 kWh instead of 3 kWh and the nominal power output is 3 kW instead of Impulse's max of 10 kW. These differences are easily explained by the fact that the Impulse stove is designed to be a $6,000 premium product.

The 3 kW nominal power output means this product is very suitable for the Impulse battery strategy (3 > 1.65 kW).

This model also has a 2% usage factor and induction stoves are fairly comparable to gas stoves, which makes this a great candidate for an initial Impulse Labs product.

Now it seems I derived exactly the same reasoning behind the founding of Impulse Labs.

### <b>Dryers</b>

Parameters:
 - Legacy power input: [3 kW](https://www.inspirecleanenergy.com/blog/sustainable-living/how-much-electricity-dryer)
 - Electric power input: 1 kW
 - Nominal power output: 3 kW (Same as legacy power input)
 - Usage factor: 0.6 % (1 hour per week)
 - Battery size: 3 kWh (3 kW * 1 hour)
 - Charge time: 3 hours

Dryers use [1.8 - 5 kW](https://www.inspirecleanenergy.com/blog/sustainable-living/how-much-electricity-dryer) of power, so if you have the requirement of only using 110 V, 15 A wall outlets, they are well suited for the Impulse battery strategy. 

However, as we know, all dryers are already electric and use 240 V outlets in the US. Given that the issue of powering a dryer has already been solved through higher voltage outlets (which are common), it seems unlikely that Impulse Labs making a dryer is a high priority. However, it can fit well into an Impulse Labs array of products.

### <b>Ovens</b>

Parameters:
 - Legacy power input: [4 kW](https://grok.com/chat/3f5afe09-9a8b-446f-80ea-8720d4d19261)
 - Electric power input: 1 kW
 - Nominal power output: 4 kW (Same as legacy power input)
 - Usage factor: 4% (1 hour per day)
 - Battery size: 16 kWh (4 kW * 4 hours)
 - Charge time: 16 hours

There are two variants of ovens: gas and electric. According to [Grok](https://grok.com/chat/3f5afe09-9a8b-446f-80ea-8720d4d19261), 60% of US households use electric ovens. Like Dryers, these also use 240 V outlets. The max power from these 240 V outlets is 7.2 kW (240 * 30 A), so if running a dryer and oven on the same circuit simultaneously it's possible to trip the breaker (is this common knowledge for people with many high-power electrical appliances?).

The biggest issue with an electric oven run on a 110 V outlet is the 16-hours charging time (and the need for a 16+ kWh battery).

It's possible to extend operation time to 5.33 hours by running the power from the outlet at 1 kW while discharging the battery. However, given the long single usage time of an Oven, a very large battery and long charge time will be required.

Overall, some households already have wiring for electric ovens and the benefit of the Impulse battery strategy is diminished by the long charge time. This is a reasonable - but not excellent - candidate for the Impulse battery strategy.

### <b>Water Heaters</b>

Parameters:
 - Legacy power input: [4 kW](https://grok.com/chat/c8bb03db-b11b-4399-a0da-1e10233e4719)
 - Electric power input: 1 kW
 - Nominal power output: 4 kW
 - Usage factor: 16% (4 hours per day)
 - Battery size: 16 kWh (4 kW * 4 hours)
 - Charge time: 16 hours

Water heaters fall into four categories: gas or electric and tank or tankless. Tankless water heaters are [~30%](https://www.gminsights.com/industry-analysis/water-heater-market) more efficient due to the fact that they don't need to store hot water which cools down over time.

Tankless water heaters have about [25%](https://www.gminsights.com/industry-analysis/water-heater-market) market share and electric water heaters already have [~50%](https://www.gminsights.com/industry-analysis/water-heater-market) revenue share in the US.

Electric water heaters typically run on 240 V outlets, so we run into the same problem as with ovens and dryers: the Impulse battery strategy is not required because this problem has already been solved by using higher voltage outlets.

However, not all homes have 240 V outlets ready for electric water heaters. There's a niche where customers don't want to wire 240 V to the location of their water heater and could use a battery water heater instead.

Also, a water heater is an appliance that isn't commonly used for long uninterrupted periods of time, so my strategy of calculating battery size is not quite applicable. A more reasonable battery size is 4 kWh for an hour of continuous full-power operation, then falling back to 1 kW from the wall.

### <b>Washing Machines</b>

Parameters:
 - Legacy power input: [1 kW](https://www.energysage.com/electricity/house-watts/how-many-watts-does-a-washing-machine-use/)
 - Electric power input: 1 kW
 - Nominal power output: 1 kW (Same as legacy power input, I've never seen a gas washing machine)
 - Usage factor: 0.6 % (1 hour per week)
 - Battery size: 1 kWh (1 kW * 1 hour)
 - Charge time: 1 hours

Washing machines already run on 110 V. Not applicable to the Impulse battery strategy.

### <b>Dishwashers</b>

Parameters:
 - Legacy power input: [1.2 kW](https://www.directenergy.com/en/learn/home-energy-management/how-much-energy-dishwasher-use)
 - Electric power input: 1 kW
 - Nominal power output: 1.2 kW
 - Usage factor: 4% (1 hour per day)
 - Battery size: 1 kWh (1 kW * 1 hour)
 - Charge time: 1 hours

Again, also not applicable to the Impulse battery strategy.

### <b>Fridges</b>

Ok we all know these already run continuously on 110 V, no need to get numbers for them.

Ok if you're curious they [nominally use 300 W](https://www.energysage.com/electricity/house-watts/how-many-watts-does-a-refrigerator-use/) with peaks of 800 W.

### <b>Summary of Appliances</b>

We've found that a Stove is a great candidate for the Impulse battery strategy with a relatively small battery of 1.5 kWh in my analysis and a nominal power of 3 kW. Stoves are also a niche where not all homes are wired for electric stoves so there's the added benefit of being able to install a new electric stove without hiring an electrician.

The second product where the Impulse battery appliance strategy is more applicable is an Oven. Not all homes have electric ovens (like stoves) and Impulse could make a stove with a ~20 kWh battery that is suitable for most people.

The third product could be a water heater. It shares the trait that not all homes have wired 240 V for them and many are gas. They'd require a ~4 kWh battery, which is similar to their stove (3 kWh).

Where the battery appliance strategy is less applicable is for appliances that are either high power and already electric (eg. dryers), or low power and already electric (eg. washing machines, dishwashers, fridges).

### <b>Conclusion</b>

The unique feature of the Impulse stove - an battery embedded battery - can be applied to a couple of other appliances, but not all. Unlike what I first thought, which was to apply the battery strategy to every appliance, it seems that the Impulse is more about making beautiful home appliances that happen to take advantage of the battery strategy, which may evolve into a home appliance ecosystem with several small home batteries.

The angle of creating prevalent small home batteries may have lots of potential and is what I focused on less, this has been an analysis of the battery approach. In the US you can't push power back to the grid without a regulatory process, but you can push power into the house to power other household loads.

This means Impulse Labs appliances could power household loads when electricity prices are high and charge the batteries when prices are low, while also being appliances. Or, briefly power your home if the grid is down (however, afterwards you wouldn't be able to cook food).

So, in short, the Impulse Labs Master Plan is:
1. Make a beautiful stove that can be installed in any home without rewiring.
2. Build an oven using the same strategy of an embedded battery in the device and expand to other household appliances (eg. water heater or dryer).
3. While doing above, develop additional applications for the embedded batteries and potentially integrate into a home power / smart home system.

### <b>Appendix One: The Remarkable Story of How I Got To Impulse Labs</b>

I'll quickly go over how I got into this position because it's a completely remarkable experience:
- In September 2024 I joined the UBC Solar student design team and got a ton of firmware / PCB / Debugging experience.
- This shaped the projects I worked on and what I posted on X. David Holz (founder of Midjourney) DM'd me one day while I was studying for my linear algebra final. His advice essentially was "Hey kid you should consider dropping out and moving to SF for hardware internships."
- Next, I DM'd a ton of founders asking for factory tours and a job in SF.
- Through sheer luck, Casey Handmer happened to fly into SF a day after me and responded to my DM.
- He sent me a random address to meet up at and said "Sam is happy to chat Mars stuff too."
- That random address was Impulse Labs and Sam was Sam d'Amico, the founder. I asked about hardware internships and got an interview, which seemed to have gone well!

The moral of this story is that you have agency! You can just ask people for things and most say yes! Just make sure you ask good questions and are someone worth talking to!

Notice that if I hadn't written my previous blog post on [blunt body Mars entry vehicles](https://ckalitin.github.io/space/2025/05/13/martian-atmosphere-model.html), Casey Handmer would've been less interested in talking to me and I'd likely never have gotten to interview at Impulse Labs.
