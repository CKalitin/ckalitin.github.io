---
layout: post
title: "What's The Optimal Atmospheric Pressure Of The Moon For Reentry Vehicles?"
categories: Space
tags:
    - Projects
    - Drafts
author:
 - Christopher Kalitin
word_count: 1000
---
<head>
    <meta property="og:image" content="{{site.url}}/assets/images/optimal-lunar-atmosphere/impact_velocity_vs_atm_t0.1_linear.png">
</head>

https://youtu.be/prUXHpvsIPg?si=j5JJXZ2TA5xpSea_&t=2012

- Take two vehicle, a Perseverence BC and LD ratio blunt body
- Model a Shuttle-like vehicle with a similar ballistic coefficient and LD, with positive angle of attack
- Plot Lunar Atmospheric Pressure vs. Terminal Velocity
- Also consider different atmospheric scale heights

Scale height:
H = kT/(ug)

k = 1.38 x 10^-23 J/K (Boltzmann constant)
T = temperature in Kelvin
u = mean molar mass of the gas (kg/mol)
g = acceleration due to gravity (m/s^2) (1.62)

Earth mean temperature is 288 K. Mars is 210 K. I'll assume 250 K for the Moon. Closer to the Sun, and maybe similar atmosphere.
Composition matters due to green house gas effects, pressure matters for heat capacity and other atmospheric effects (eg. convection, diurnal thermal inertia)

Earth mean molar mass is 0.029 kg/mol (dry air), Mars is 0.043 kg/mol (mostly CO2). Assume 40 kg/mol for the Moon. With Handmer's technique it'd skew higher with more oxygen liberated from rocks and metals (silicon, aluminum, etc.). Lunar regolith is ~45% Oxygen.

Moon currently has a ~25t atmosphere. Exhaust gasses from the Apollo lunar landers significiantly increase this for a time. Particularly for prograde burns where the gasses (include exhaust velocity here) are not ejected out of the Moon's sphere of influence (SOI).

Shuttle CD vs aoa:  
Too lazy to find a good paper, first 2 searches got me nothing  
This Reddit comment says 0.78 to 0.84 at 40 degree angle of attack. I'll use 0.81 and interpolate to zero AoA.  
https://www.reddit.com/r/AskPhysics/comments/7r18wm/comment/iguakaz/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button  

Here's a paper that shows Cd vs. AoA and velocity:  
https://aviation.stackexchange.com/questions/35305/what-was-the-space-shuttles-glide-ratio  
https://www.researchgate.net/figure/a-Lift-dotted-and-drag-coefficients-C-L-and-C-D-for-the-Space-Shuttle-as-a-function_fig1_276077644  

Cite og Mars blog post as to why my pressure vs. height approximation might be wrong.

Speed of sound:
v = sqrt(gamma * R * T)
gamma = 1.4
R = 259.84 J/(kg·K) (O2) (Mars is 189, Earth is 287)
T = 250 K
v = sqrt(1.4 * 259.84 * 250) = 301.57 m/s

Claude:
"Temperature: Extreme diurnal variation (120K to 390K) creates dynamic scale heights. Dayside H ≈ 3× nightside H."
https://claude.ai/chat/4b661ce0-8a5d-4ccc-b576-6005e5e71606

Describe atmosphere scale height, 1/e falloff.  
H = k * T / (g * M / N), there M/N is molecular mass derived from molar mass  
atmospheric_scale_height = BOLTZMANN_CONSTANT * ATMOSPHERIC_TEMPERATURE / (GRAVITATIONAL_ACCELERATION * MEAN_MOLAR_MASS / AVOGADRO_NUMBER)  
This gives a scale height of 32 km, for reference Earth is 8.5 km, Mars is 11 km. Wow huge atmosphere.

Currently, day side gets to 390 K, night side gets to 120 K. 270 K range.
If the atmosphere and convection makes this less extreme, we could still see a 100-200 K variation, maybe 200 to 350 K, extending the atmosphere 1.75x on the day side!

Now I see the Moon rising over the horizon, I keep track of it, mention that

Ok that scale height makes a HUGE difference

# Notes

Notes:
 - 250 K assumption
 - 40 g/mol for Moon (Assuming skewed to O2)
 - Mention composition of regolith
 - Mention the Moon's existing atmosphere and exhaust from landers
 - Shuttle stats
 - Quick note on pressure vs height might not be linear (also temp)

Conclusions:
 - Mars' Atmospheric Pressure is Perfect
 - Moon you can go to around 500, maybe 1000 if you want to go extra
 - Lunar Atmosphere's Scale Height is insane

First cover the simulation
Then cover scale height
Then cover the final chart and Mars' atmosphere being perfectly sized

Also show a simulation with a multiple skip reentry!!!

# Blog Post

"It's a very very straight forward calculation any well motivated middle schooler could do."  
\- [Casey Handmer, unrelated](https://youtu.be/prUXHpvsIPg?si=wRYjIBMgZcb3r01d&t=589)

![Image](/assets/images/optimal-lunar-atmosphere/impact_velocity_vs_atm_t0.1_linear.png){:height="600"}  
*The final result, impact velocity vs. lunar surface atmospheric pressure for a few reentry vehicles.*

Three hours ago I was nerdsnipped by this [podcast with Casey Handmer](https://youtu.be/prUXHpvsIPg?si=j5JJXZ2TA5xpSea_&t=2012) in which he starts gushing about how beautiful a Lunar atmosphere would be. The effect this lunar atmosphere would have on spacecraft landing on the Moon was brought up and I decided to adapt my [Martian entry vehicle](https://ckalitin.github.io/space/2025/05/13/martian-atmosphere-model.html) model to how small you could make a lunar atmosphere while getting most of the benefits of atmospheric decelleration on landing.

All code is [available here](https://github.com/CKalitin/Martian-Ballistic-Modelling/blob/master/Project/lunar_atmosphere.py).

### </b> Atmospheric Parameters</b>

The Moon's atmosphere is currently weighs about 25 tonnes in total, for a surface atmospheric pressure of 0.3 nanopascals. This is a small enough atmosphere that when the Apollo spacecraft fired their engines around the Moon, they increased the mass of the Moon's atmosphere by double digit percentages.

<b>Molar Mass</b>  
Casey Handmer's quick method for creating a lunar atmosphere involves melting the top 30 feet of the lunar regolith and letting the oxygen escape into the atmosphere. I'm not smart enough to conceive of a method for terraforming the Moon myself so my assumption was a mostly diatomic oxygen atmosphere.

Depending on the region of the Moon you're in, [Lunar regolith is composed](https://www.linkedin.com/pulse/chemistry-moon-ganeshkumar-palanisamy/) of 42% oxygen, 21% silicon, 13% iron, 8% calcium, 7% aluminum, 6% magnesium, and 3% other trace elements. This mainly comes in the form of silicon dioxide, aluminum oxide, iron oxide. So, it appears to be a safe assumption that the majority of the gas in a terraformed Moon's atmosphere would be oxygen.

Hence, I assumed a lunar atmosphere mean molar mass of 32g/mol, the same as diatomic oxygen. For reference, Earth is 29 g/mol (since N2 is 28g/mol) and Mars is 43 g/mol (mostly CO2 at 43g/mol).

<b>Temperature</b>  
Next I assumed a uniform average temperature of 250 K. Mean surface temperature on Earth is 288 K and on Mars it's 210 K. With the Moon closer to the sun than Mars, I felt (Felt!) 250 K was a fair number. This is a one night project, I'm fine with theoretical +/- 25% error bars.

<b>Atmosphere Scale Height</b>  

![Image](/assets/images/optimal-lunar-atmosphere/scale_atm.png){:height="100"}  
*Scale height equation for an arbitrary body.*

With temperature and molar mass we can find the scale height of our lunar atmosphere. Scale height is the height at which the atmospheric pressure decreases by a factor of e (ie. ~37%).

Earth's scale height is about 8.5 km, Mars' is about 11 km, and Titan's is ~15-50 km. We see above that scale height is a function of gravitational acceleration, so we expect a far lower value for the Moon.

Using the numbers above (250 K, 32 g/mol, 1.62 m/s^2), we find a lunar scale height of 40.1 km. This is significantly larger than Earth's and Mars', indictating a lunar atmosphere that falls off more slowly with altitude.

![Image](/assets/images/optimal-lunar-atmosphere/pressures.png){:height="600"}  
*This illustrates how slowly our lunar atmosphere falls off.*

To illustrate how extreme a scale height of 40.1 km is, above is a graph showing atmospheric pressure vs. altitude for the Earth, Mars, and an example 100 Pa Lunar atmosphere. Notice how steep the lines are for the Earth and Mars, and how shallow the line is for the Lunar atmosphere.

The Karman line defines the edge of space on Earth, this fairly arbitrary boundary is located at an altitude of 100 km. At this altitude, Earth's atmospheric pressure is a little under a single pascal (0.79 Pa). Note that this value is not based on experimental data, and instead uses this formula: p(h) = p0 * exp(-h/H), where p0 is the surface pressure and H is the scale height.

We can use the definition of space beginning at the altitude at which atmospheric pressure is 1 Pa. Using this definition, space begins 72 km above Mars' surface. On our Moon, space would begin 185 km above the surface. That's what an extremely low gravity gets you! Especially for a body the size of the Moon!

To further illustrate just how far the Moon's atmosphere would extend, we can consider the International Space Station. The ISS orbits the Earth at an altitude of about 400 km and without boosts it would reorbit due to drag in about one year. At this altitude atmosphereic pressure is 0.37 femtopascals (using the formula above, not experimental data). To reach the same pressure if the ISS was around our 100 Pa Moon, it would have to be 1,610 km from the surface.

<b>Mars' Atmosphere is Perfectly Sized</b>