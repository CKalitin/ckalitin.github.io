---
layout: post
title: "Modelling dV Savings Of Super Synchronous Transfer Orbits"
categories: Projects
tags:
    - Projects
    - Latest Posts
author:
 - Christopher Kalitin
redirect_from:
  - /space/2026/01/04/supersyncronous-transfer-orbits.html
  - /space/2026/01/29/supersyncronous-transfer-orbits.html
word_count: 1787
---
<head>
    <meta property="og:image" content="{{site.url}}/assets/images/falcon-9-cadence/f9_starlink_launches_vs_month_with_sigmoid.png">
</head>

![Image](/assets/images/supersyncronous-transfer-orbits/35786_km_apogee_transfer_to_geo_1ms.png){:height="600"}  

If you have feedback or criticism, please [respond here](https://x.com/CKalitin/status/2017032666072436794).

A few weeks ago SpainSat NG 2 - a Spanish Military Telecommunication Satellite launched in October 2025 - was struck by a micrometeoroid while 50,000 km above the Earth. Note that at 50,000 km altitude there is extremely little man-made space debris, so the impactor was almost certainly a natural micrometeoroid, see [the distribution of space debris](https://www.google.com/search?client=firefox-b-d&hs=DMRU&sca_esv=8661a703ca5d5409&sxsrf=AE3TifPul-NgCOJjxg__-p-XSQuptlGVRg:1767592158357&udm=2&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIeuYzzFkfneXafNx6OMdA4MRo3L_oOc-1oJ7O1RV73dx3MIyCigtuiU2aDjExIvydX85cOq96-7Mxd4KSNCLhHwYIo4RJXEXVWYwYSeCFXG0J5g7J0_QlNiqM4Euq3DbUukakRlQBtEL4YIItWZLBS4_D4qpoqMYJgdHY3UCoXAcIgwU4ag&q=space+debris+over+earth+altitude+distribution&sa=X&ved=2ahUKEwjDsdP12fORAxUKODQIHf6EJ9sQtKgLegQIFhAB&biw=958&bih=954&dpr=1#sv=CAMSVhoyKhBlLUV5aTNlcWE4OXRmMU9NMg5FeWkzZXFhODl0ZjFPTToOQWpwMm80NXhQWDdHbE0gBCocCgZtb3NhaWMSEGUtRXlpM2VxYTg5dGYxT00YADABGAcgyYC8kwMwAkoKCAIQAhgCIAIoAg).

This satellite was transiting to a Geostationary Orbit above Earth at an altitude of 35,768 km using a super synchronous transfer orbit with an apogee of approximately 50,000 km. This is in contrast to a more common direct geostationary transfer orbit (GTO) with an apogee of 35,768 km.

After stepping out of the steam room an hour ago I got to thinking about the dV savings of using a super synchronous transfer orbit versus a standard geostationary transfer orbit so - with great help from Gemini and Grok Code Fast 1 - I wrote some Python scripts to model dV of given maneuvers.

The code and charts are available on [GitHub](https://github.com/CKalitin/charts-and-data-analysis/tree/master/supersyncronous-transfer-modelling).

### <b>Visualizing Transfer Orbits</b>

Some shape rotation is likely required to understand these charts, wordcels be warned.

![Image](/assets/images/supersyncronous-transfer-orbits/35786_km_apogee_transfer_to_geo_100000ms.png){:height="500"}  
<i>[Expanded Image](/assets/images/supersyncronous-transfer-orbits/35786_km_apogee_transfer_to_geo_100000ms.png)</i>  
<i>This chart shows a direct insertion into a Geostationary Orbit from an initial orbit with a perigee of 400 km and inclination of 45 degrees.</i>

The chart above shows a standard direct insertion in Geostationary Orbit. The trajectory is marked by three primary phases:
1. Initial Orbit (Dark blue): After separating from the launch vehicle, the satellite is in a 400x35,768 km orbit with an inclination of 45 degrees.
2. Inclination Change (Purple): At apogee, the satellite performs an inclination change maneuver to reduce its inclination from 45 degrees to 0 degrees.
3. Circularization Burn (Yellow): Again at apogee, the satellite performs a circularization burn to raise its perigee from 400 km to 35,768 km, achieving a circular geostationary orbit.

![Image](/assets/images/supersyncronous-transfer-orbits/250000_km_apogee_transfer_to_geo.png){:height="500"}  
<i>[Expanded Image](/assets/images/supersyncronous-transfer-orbits/250000_km_apogee_transfer_to_geo.png)</i>  
<i> This chart shows a generic super synchronous transfer orbit with an initial apogee of 100,000 km, perigee of 400 km, and inclination of 45 degrees.</i>

This chart shows a super synchronous transfer orbit with an apogee of 250,000 km. The trajectory has one additional phase:
1. Initial Orbit: Unchanged
2. Inclination Change: Unchanged
3. Perigee Raise: Unchanged
4. Apogee Lower: Because our initial apogee in this case was 250,000 km, we need to perform a final maneuver to lower our apogee from 250,000 km to 35,768 km.

This may already be starting to be hard to visualize, so realize that the purple, orange, and yellow lines above are all in the same plane (which is equatorial to the Earth). Only the dark blue initial orbit is inclined at 45 degrees to this plane.

### <b>Order Of Maneuvers</b>

![Image](/assets/images/supersyncronous-transfer-orbits/diagram_inc.jpg){:height="200"}  

We perform our inclination change before any other maneuvers (perigee raise or apogee lower) because inclination changes are most efficient at higher altitudes where orbital velocity is lower.

The diagram above shows an inclination change maneuver. All we are doing during an inclination change is rotating our velocity vector by the desired inclination change angle (Δi). The magnitude of the velocity vector remains unchanged.

Hence, a lower orbital velocity means changing the inclination of an orbit requires less dV. Imagine if you wanted to change inclination by 180 degrees - if you were right above the Earth you would need to cancel out your entire orbital velocity and then accelerate back up in the opposite direction. However, as you get farther away from the Earth you travel slower, so the required dV diminishes.

If we were to raise our perigee before changing inclination, we would first increase the orbital velocity at apogee, which would increase the dV required for the inclination change.

### <b>dV vs Apogee</b>

![Image](/assets/images/supersyncronous-transfer-orbits/apogee_vs_dv_components_200Mm_1ms_dV_lim_inc45.png){:height="400"}  
<i>[Expanded Image](/assets/images/supersyncronous-transfer-orbits/apogee_vs_dv_components_200Mm_1ms_dV_lim_inc45.png)</i>  
<i>Required velocity change for each maneuver type vs initial apogee altitude.</i>

The chart above shows us that as we increase the insertion apogee of our satellite, the net dV required to reach geostationary orbit decreases. Notice that both perigee raise and inclination change dV requirements decrease with increasing apogee, while the Apogee lower dV requirement increases (since a higher initial apogee must be decreased in the end).

![Image](/assets/images/supersyncronous-transfer-orbits/apogee_vs_dv_rates_200Mm_1ms_dV_lim_inc45.png){:height="400"}  
<i>[Expanded Image](/assets/images/supersyncronous-transfer-orbits/apogee_vs_dv_rates_200Mm_1ms_dV_lim_inc45.png)</i>  
<i>Rate of change of dV for each maneuver type vs initial apogee altitude.</i>

This chart provides 2 insights:
1. In the limit, inclination change dV approaches zero as apogee increases.
2. Apogee and perigee change dV requirements nearly perfectly offset each other.

As I described in the previous section, inclination change dV decreases with increasing apogee because orbital velocity at apogee decreases. We see this as the blue line (d(dV) inclination change) approaching zero as apogee increases.

The apogee and perigee change dV requirements follow an extremely similar curve (mirrored on the x-axis), but look closely and you'll see that the magnitude of d(dV) for perigee change is always slightly higher than that of apogee change. This means that as we increase apogee, the net dV savings continues to increase (since d(dV) for perigee change is negative, a net dV savings), albeit at a diminishing rate.

![Image](/assets/images/supersyncronous-transfer-orbits/apogee_vs_dv_rates_10000Mm_100000ms_dV_lim_inc45.png){:height="400"}  
<i>[Expanded Image](/assets/images/supersyncronous-transfer-orbits/apogee_vs_dv_rates_10000Mm_100000ms_dV_lim_inc45.png)</i>

Just in case you're unconvinced that the limit is zero (for engineering purposes, no formulas in sight, read the code), here's a longer chart.

### <b>Low dV-per-pass Simulations</b>

What makes these simulations more interesting is that most satellites don't use high-thrust propulsion systems that allow arbitrary changes in velocity at any time. Instead, most GEO satellites use low-thrust electric propulsion systems that can only provide a small amount of acceleration over long periods of time.

To determine how much dV a satellite can get in a single apogee pass, I [asked Gemini](https://gemini.google.com/share/df06885668b7) to list a few ion thrusters on standard GEO Satellite buses. Most results average around a net acceleration of 5e-5 m/s². Assuming a satellite burns for 2 hours on either side of apogee in a geostationary orbit, we get a total dV of 2*2*3600*5e-5 = 0.72 m/s per apogee pass. I used 1 m/s per pass as a round number for my simulations in the name of sig figs.

This isn't a perfect approximation, since satellites at higher altitudes have longer orbital periods and can burn for longer periods of time at high efficiency (just eating the cosine losses, ask your favourite LLM or KSP player if confused). Furthermore, a real satellite isn't limited to only raising perigee or changing inclination at one time, you can do both. So, my model overestimates transit time.

![Image](/assets/images/supersyncronous-transfer-orbits/35786_km_apogee_transfer_to_geo_1ms.png){:height="500"}  
<i>[Expanded Image](/assets/images/supersyncronous-transfer-orbits/35786_km_apogee_transfer_to_geo_1ms.png)</i>

The chart above shows a standard GTO transfer but with a dV limit of 1 m/s per pass. This means that the satellite must do 2729 total passes to reach geostationary orbit, taking 1480 days. The net dV requirement doesn't change because we impose a 1m/s dV limit per pass, as my model assumes perfect efficiency in using all available dV each pass.

This chart follows the same colour scheme as before, so a lighter colour is where the satellite was more recently.

This is the trade-off of using a low-thrust propulsion system. Electric thrusters are far more efficient than chemical thrusters meaning your satellite can be lighter, but you pay for this efficiency with longer transfer times, and hence a delayed time to revenue / operational capability.

![Image](/assets/images/supersyncronous-transfer-orbits/100000_km_apogee_transfer_to_geo_1ms.png){:height="500"}  
<i>[Expanded Image](/assets/images/supersyncronous-transfer-orbits/100000_km_apogee_transfer_to_geo_1ms.png)</i>

This chart shows a super synchronous transfer orbit with an initial apogee of 100,000 km and a dV limit of 1 m/s per pass.

Notice that the net number of passes has decreased to 1921, because the total dV requirement is now 1.920 km/s instead of 2.728 km/s. However, higher orbits take more time, so our total time to GEO has increased to 3180 days.

### <b>Time to GEO & Net dV Requirement vs Insertion Apogee Charts</b>

![Image](/assets/images/supersyncronous-transfer-orbits/apogee_vs_dv_time_10000Mm_100000ms_dV_lim_inc_comparison.png){:height="350"}  
<i>[Expanded Image](/assets/images/supersyncronous-transfer-orbits/apogee_vs_dv_time_10000Mm_100000ms_dV_lim_inc_comparison.png)</i>

Finally, here's a chart that shows the trend in total dV required vs initial apogee for both 0 degree and 45 degree inclination orbits, with no dV limit per pass.

As expected, total dV requirement quickly falls to a limit as initial apogee increases while time to GEO steadily increases as our orbital period increases. Furthermore, the 45 degree initial orbit requires more dV and time, given the additional inclination change maneuver that's required. Note that the positive derivative in the time to GEO curve shows up because of the [r^1.5 relationship](https://www.youtube.com/watch?v=aFrItoUDA4E) between orbital radius and period.

The Moon is 384,400 km away from the Earth (~0.4e7 km), so this model is reaching its limits here, where the orbit of our satellite can no longer be approximated as a 2-body problem between the Earth and the satellite alone. This is especially true if we push to higher apogees where the satellite would reach escape velocity from Earth.

The limit of dV to reach GEO from a 400 km circular orbit is ~1.28 km/s, which is far lower than the ~2.7 km/s required for a direct GEO insertion!

Just to illustrate that the model really breaks down here, this is what the 10,000,000 km orbit looks like:

![Image](/assets/images/supersyncronous-transfer-orbits/10000000_km_apogee_transfer_to_geo.png){:height="500"}  
<i>[Expanded Image](/assets/images/supersyncronous-transfer-orbits/10000000_km_apogee_transfer_to_geo.png)</i>

![Image](/assets/images/supersyncronous-transfer-orbits/apogee_vs_dv_time_10000Mm_1ms_dV_lim_inc_comparison.png){:height="350"}  
<i>[Expanded Image](/assets/images/supersyncronous-transfer-orbits/apogee_vs_dv_time_10000Mm_1ms_dV_lim_inc_comparison.png)</i>

The chart above shows what happens when we impose a 1 m/s dV limit per pass.

We see a few things:
1. Some noise at the high-end of the time to GEO curves
2. A slightly negative second derivative in the time to GEO curves
3. A slightly negative slope for the 0 inc dV vs apogee curve (0 inc means the initial orbit has 0 degree inclination)

The noise emerges because at certain critical points as we increase insertion apogee, the number of passes required to raise perigee drops by one full pass, causing a sudden drop in total time to GEO. This is more pronounced at higher apogees because the orbital period is longer, so each pass saved saves more time. I.e. because of our 1m/s dV limit, once you require 1.01 m/s for a maneuver, you need wait for 2 full passes.

The slightly negative second derivative occurs because there's a different dominant function determining the shape of the curve. Now, instead of orbital period being the dominant factor, the total number of passes required dominates. The number of passes required slowly decreases as the net dV requirement decreases, causing a slowly decreasing slope in time to GEO. 

This implies that far to the right of what I've shown above, the time to GEO curve will eventually start to increase again as orbital period dominates once more.

The slight negative slope of the 0 degree inclination orbit proves to us that increasing insertion apogee does provide dV savings because the rate of dV savings on the perigee raise outweighs the rate of dV increase on the apogee lower (as shown in the "dV vs Apogee" section).

### <b>The End</b>

This was a fun exercise in modelling an arbitrary problem in Python, and I really had to apply step 2 of the Feynman Algorithm to find "a lot of beauty hidden between those lines" - Savvas Hatzikiriakos, my CHBE 244 prof.

![Image](/assets/images/supersyncronous-transfer-orbits/model.jpg){:height="200"}  

Here's a 3D model of 100,000 km Super Synchronous Transfer Orbit.