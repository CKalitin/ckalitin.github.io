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
    <meta property="og:image" content="{{site.url}}/assets/images/polar-mars-sim/Perseverance_Polar_xy.png">
</head>

"It's a very very straight forward calculation any well motivated middle schooler could do."
- [Casey Handmer, unrelated](https://youtu.be/prUXHpvsIPg?si=wRYjIBMgZcb3r01d&t=589)

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

