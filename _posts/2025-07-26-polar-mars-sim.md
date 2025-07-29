---
layout: post
title: "Rewriting My Mars Entry Simulation Using Polar Coordinates"
categories: Space
tags:
    - Projects
    - Drafts
author:
 - Christopher Kalitin
word_count: 57
---
<head>
    <meta property="og:image" content="{{site.url}}/assets/images/polar-mars-sim/Perseverance_Polar_xy.png">
</head>

You can tell I wrote this code by hand due to the intrinsicly human artisanal nature of the code. Hand made, no machine involvement, pure craftsmanship. (tl;dr code is shitty)

1. Explain why to make Mars round
2. Explain issue with the local flat Earth cartesian approximation (first, understand why it fails)
3. Explain how to rewrite using polar coordinates

- Explain the problem of local flat Earth approximation

- Explain why my first attempt per increasing altitude every frame failed

- Explain polar coordinates

- Explain why you need to rotate the velocity vectors every frame (align with global cartesian reference frame, not local flat Earth frame)

Structure:
1. Casey Handmer (link his sim too)
2. Explain the problem
3. Explain the first attempt and why it failed (Desmos screenshot)
4. Explain polar coordinates
5. Explain why rotating velocity vectors is necessary
6. Explain deceleration issue (probably gravity), also note that you can't model Starship negative AoA if it's flat
7. Show simulations!

Keep it short, this should be <1000 words. And keep it technical.

About two months ago I flew to SF and had the opportunity to speak to Casey Handmer while touring [Impulse Labs](https://ckalitin.github.io/space/2025/06/02/impulse-master-plan.html). Handmer had previously done some [Mars EDL modelling](https://caseyhandmer.wordpress.com/2016/09/29/spacex-mars-plan-analysis/) back when Starship was called the Interplanetary Transportation Systems, and I got some useful feedback on my [Blunt Body Mars Entry Vehicle simulation](https://github.com/CKalitin/Martian-Ballistic-Modelling) from him. The most important piece of feedback was that modelling Mars as a flat surface is not an accurate approximation.

My old code is available when browsing the files associated with [this commit](https://github.com/CKalitin/Martian-Ballistic-Modelling/tree/7d8259368cf26e0765eb03a828a1cbb55736c84a). You can tell I wrote this code by hand due to the intrinsicly human artisanal nature of the code. Hand made, no machine involvement, pure craftsmanship. (tl;dr code is shitty)

### **The Problem With A Flat Mars**

![Image](/assets/images/polar-mars-sim/Perseverance_Cartesian_xy.png){:height="250"}  
*[Expanded Image](/assets/images/polar-mars-sim/Perseverance_Cartesian.png)*  
*This shows a Y vs. X plot from my original Mars simulation, modelling the planet as flat.*

![Image](/assets/images/polar-mars-sim/Perseverance_Polar_xy.png){:height="250"}  
*[Expanded Image](/assets/images/polar-mars-sim/Perseverance_Polar.png)*  
*This shows a global Mars-center relative position plot from my updated simulation. Notice Mars curves down ~50 km from start to finish.*

