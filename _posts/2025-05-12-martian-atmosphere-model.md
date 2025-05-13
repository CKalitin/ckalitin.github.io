---
layout: post
title: "Modelling Mars’ Atmosphere for Simulating Blunt Body Entry Vehicles"
categories: Space
author:
 - Christopher Kalitin
---
<head>
    <meta property="og:image" content="{{site.url}}/assets/images/martian-atmosphere-model/Perseverance.png">
</head>

![Image]({{site.url}}/assets/images/martian-atmosphere-model/Perseverance.png){: .align-center}  
<i>This is one of the outputs of this project, a simulated entry of the Perseverance Mars rover compared to real data.</i>

For a fun application of this model and explanation of one of the tradeoffs in designing a Mars lander and Mars lander trajectories, see the [companion blog post](https://ckalitin.github.io/technology/2025/05/03/jevons-learning-rate.html) to this one.

Here I describe how the model works, my processing in creating it, and backtesting to real Mars lander data.

Links to [Github](https://github.com/CKalitin/Martian-Ballistic-Modelling) and [project notes](https://docs.google.com/document/d/1ly_03dqeLvqldw1R2ucLL4pWBLjphZS_wUZC6nIAfGA/edit?usp=sharing).

### <b>How to Model a Mars Lander</b>

![Image]({{site.url}}/assets/images/martian-atmosphere-model/FBD.png){: .align-center}  
<i>Free body diagram of the blunt body entry vehicle used in the model.</i>

My goal with this project was to create a minimum viable Martian atmosphere model that could be used to simulate the entry of blunt body vehicles with various parameters (drag coefficient, ballistic coefficient, angle of attack, etc.).

In keeping with this goal, I sought to keep the model as simple as possible. Hence, there are only three forces acting on the vehicle: drag, lift, and gravity.

I used multiple papers to determine the values for the parameters used in the model. For example, I used the paper [Aerodynamics for the Mars Pheonix Entry Capsule](https://arc.aiaa.org/doi/10.2514/1.46219) to determine the drag coefficient vs. velocity for the Phoenix lander, and generalized this to other blunt body vehicles. All papers and sources I found are listed in the [Google Doc containing my project notes](https://docs.google.com/document/d/1ly_03dqeLvqldw1R2ucLL4pWBLjphZS_wUZC6nIAfGA/edit?usp=sharing).

Other data gained from papers on Mars' atmosphere / Mars landers include:  
1. [Phoenix lander coefficient of drag vs. velocity](https://arc.aiaa.org/doi/10.2514/1.46219)
2. [Mars atmospheric pressure vs. altitude](https://ntrs.nasa.gov/api/citations/20210023957/downloads/Mars-GRAM%20User%20Guide.pdf) ([secondary source](https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html))
3. [Mars atmospheric temperature vs. altitude](https://www.researchgate.net/publication/234396071_The_Martian_upper_atmosphere)
4. [Mars atmospheric density vs. altitude](https://www.grc.nasa.gov/www/k-12/airplane/atmosmrm.html) ([secondary source](https://ntrs.nasa.gov/api/citations/20210015330/downloads/NASA-TM-20210015330.pdf))
5. [Phoenix Lander lift to drag ratio vs. AoA](https://arc.aiaa.org/doi/10.2514/1.46219)
6. [Perseverance lander trajectory data](https://drive.google.com/file/d/1Ou3LRuLYgJrq4oOTXSURy2oxXd8bafxY/view?usp=drive_link)
7. [Altitude vs. velocity data for several Mars landers (Chapter 9)](https://docs.google.com/document/d/1qfztXXRWr1km6U4H44dSpyG7I-Xspd4GkBQmKVjKmbM/edit?tab=t.0)

By assuming all blunt body entry vehicles are similar, I did not have to create a complex aerothermodynamic model for each vehicle, instead using the same parameters and functions for coefficent of drag vs. velocity, etc. for all of them (See Appendix 1). I tested this hypothesis by backtesting the model against real data on various Mars landers and got encouraging results (see the chart of simulated vs. real Perseverance landing data).

Further structure:
- Martian atmosphere data
- Show equations
- Show first simulations and convergence table with time step
- Show Opportunity fit and Handmer chart
- Show Perserverance fit
- Show Starship fit

### <b>Finding and Implementing Martian Atmosphere Data</b>

<b>Getting Data From Papers</b>

![Image]({{site.url}}/assets/images/martian-atmosphere-model/sheets-cd-paper-example.jpg){: .align-center}  
<i>This shows getting raw data from a chart from a paper by translating pixel positions on a chart to useful values.</i>

Before I could begin implementing the model, I needed to find quantitative data on the Martian atmosphere in a format I could use. Unfortunately, most papers do not give you .csv's of their data, and instead give you charts. So I resorted to pixel counting in Krita and writing Python scripts to extract data from the charts.

I wrote (with the help of the LLMs) several Python scripts to automate data extraction, some of which you might find useful ([available on Github](https://github.com/CKalitin/Martian-Ballistic-Modelling/tree/master/Project/Extras)):  
1. To extract pixel positions from a line chart: 
   - [image_point_select.py](https://github.com/CKalitin/Martian-Ballistic-Modelling/blob/master/Project/Extras/image_point_select.py)
   - [line_point_extract.py](https://github.com/CKalitin/Martian-Ballistic-Modelling/blob/master/Project/Extras/line_point_extract.py)
2. For converting pixel positions to values: 
   - [points-to-values.py](https://github.com/CKalitin/Martian-Ballistic-Modelling/blob/master/Project/Extras/points-to-values.py)
   - [Google sheets](https://docs.google.com/spreadsheets/d/1tmwKuVABUd6NjIiFCKm2_hXt3HP747TOeOaumtxbcEM/edit?usp=sharing)
3. For converting data into more useful formats:
    - [sheets_to_np_array.py](https://github.com/CKalitin/Martian-Ballistic-Modelling/blob/master/Project/Extras/sheets_to_np_array.py)
    - [rebase_graph_interpolation.py](https://github.com/CKalitin/Martian-Ballistic-Modelling/blob/master/Project/Extras/rebase-graph-interpolation.py)
    - [hvel_to_downreange_dist.py](https://github.com/CKalitin/Martian-Ballistic-Modelling/blob/master/Project/Extras/hvel-to-downrange-dist.py)

<b>Atmospheric Pressure Data</b>

<b>Atmospheric Temperature Data</b>

<b>Atmospheric Density Data</b>

<b>Drag Coefficient and Lift to Drag Ratio</b>

### <b>Equations & Building The Model in Python</b>

### <b>Initial Simulations and Convergence as a Function of Time Step</b>

### <b>Fitting To Opportunity</b>

### <b>Fitting To Perseverance</b>

### <b>Fitting To Starship</b>

### <b>Appendix 1: A Note on Blunt Body Aerodynamics</b>

A blunt body (or bluff body) is defined as an object where pressure drag is the dominant drag force acting on it.

This is unlike a streamlined body, for which flow stays attached to the surface and friction drag dominates. For a streamlined body like an airfoil, pressure graidents develop at high angles of attack, which can lead to flow separation and stall. During stall, eddy formation in the wake causes pressure losses which causes pressure drag. The normal operating condition of an airfoil is to have attached flow.

In contrast, because the purpose of a blunt body is to generate as much drag as possible, it always operates in a separated flow regime. The angle of attack can modulate the lift to drag ratio slightly, but it is not similar to an airfoil where AoA is a much greater factor in determining lift and drag. Hence, the coefficient of drag, coefficient of lift, and lift to drag ratio can be used to simply model a blunt body vehicle.

([further reading](https://www.princeton.edu/~asmits/Bicycle_web/blunt.html))

### <b>Appendix 2: Rods of God</b>


### <b>Appendix 3: Cool paper with a detachable heat shield Mars lander design</b>


### <b>Appendix 4: Finding Perseverance data vs. finding Tianwen-1 data</b>

