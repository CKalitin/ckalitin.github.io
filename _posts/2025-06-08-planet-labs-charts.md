---
layout: post
title: "Planet Labs Charts That Describe Their History"
categories: Space
tags:
    - Space Industry Analysis
    - Latest Posts
author:
 - Christopher Kalitin
word_count: 1
---
<head>
    <meta property="og:image" content="{{site.url}}\assets\space-industry-charts\planet_labs_payloads_vs_year_by_program.png">
</head>

Today I published my [Space Industry Charts project](https://ckalitin.github.io/space/2025/06/08/space-industry-charts.html) where I wrote a Python/Pandas library to interface with Jonathan McDowell's datasets that list every launch that has ever happened, every payload ever put into space, every organization that has ever launched an orbital or suborbital rocket, and every site at which launches have ever occured.

It's an extremely comprehensive dataset, but Jonathan McDowell is [self-described](https://x.com/planet4589/status/1870692278764974531) as "old school" and enters all this data manually with MicroEmacs and custom C programs. Extremely legendary, but I want a nice accessible interface to this data so I could, for example, generate a plethora of charts on all the payloads Planet Labs has ever launched with nice labels and colours.

The scripts/library I used are [available on Github](https://github.com/CKalitin/mcdowell-dataset-analysis/blob/main/examples/planet_labs_charts.py). Make your own charts too! I'll write a nice tutorial at some point in the future.

![Planet Labs Payloads Vs Year By Country]({{site.url}}\assets\space-industry-charts\planet_labs_payloads_vs_year_by_country.png){: width="800"}  
[Expanded Chart]({{site.url}}\assets\space-industry-charts\planet_labs_payloads_vs_year_by_country.png){: target="_blank"}  

First, we have a chart of payloads vs year by program.

Planet Labs has has 8 satellite programs (at least that are recorded in McDowell's dataset):
- Doves (3U, ~5 kg, no propulsion, 3-5 m resolution, 1-3 year lifespan)
- Flock 1 (Deployed from ISS in Feb 2014 so 1-2 year lifespan)
- Flock 2 (Deployed to SSO orbit for greater lifespan of ~3 years)
- Flock 3 (about the same as the rest)
- Flock 4 (Superdoves)
- SkySat (Acquired through purchase of Terra Bella from Google in 2017, 0.5m resolution, ~100 kg)
- Pelican (Next gen after SkySat, ~160 kg, 0.3m resolution, Grok says it downlinks 1-2 TB/day)
- Tanager (Hyperspectral designed to complement Planet's optical sats, ~400 spectral bands vs. ~4 for optical, 30m resolution, ~160kg, pne launched 2024)



![Planet Labs Payloads Vs Year By Launch Vehicle]({{site.url}}\assets\space-industry-charts\planet_labs_payloads_vs_year_by_launch_vehicle.png){: width="800"}  
[Expanded Chart]({{site.url}}\assets\space-industry-charts\planet_labs_payloads_vs_year_by_launch_vehicle.png){: target="_blank"}  

![Planet Labs Payloads Vs Year By Orbit]({{site.url}}\assets\space-industry-charts\planet_labs_payloads_vs_year_by_orbit.png){: width="800"}  
[Expanded Chart]({{site.url}}\assets\space-industry-charts\planet_labs_payloads_vs_year_by_orbit.png){: target="_blank"}  

![Planet Labs Payloads Vs Year By Program]({{site.url}}\assets\space-industry-charts\planet_labs_payloads_vs_year_by_program.png){: width="800"}  
[Expanded Chart]({{site.url}}\assets\space-industry-charts\planet_labs_payloads_vs_year_by_program.png){: target="_blank"}  
