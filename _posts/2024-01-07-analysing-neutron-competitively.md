---
layout: post
title: "Analysing Neutron in the Commerical Satellite Launch Market"
categories: Technology
tag: Space Industry Analysis
author:
 - Christopher Kalitin
word_count: 1315
---
<head>
    <meta property="og:image" content="{{site.url}}/assets/images/2024-01-07/neutron-deploy.jpg">
</head>

![Image description]({{site.url}}/assets/images/2024-01-07/neutron-deploy.jpg){: width="600" .align-center}

Neutron is Rocket Lab's next-generation medium-lift rocket. In many ways, it looks and functions like Falcon 9 version 2 as it is designed from the ground up for reusability. This is most obvious with the booster. The fairings are built into the structure of the booster, the landing legs are built into strakes, and the Archimedes engine is designed to operate below maximum performance to optimize for reusability.

During the early development of Falcon 9, SpaceX was optimizing for the lowest probability of bankruptcy. With Neutron, Rocket Lab can optimize for the most competitive and efficient rocket.

However, Neutron is not a perfectly optimized rocket compared to its competition. In many ways the Falcon 9 and other future medium/heavy lift rockets out perform Neutron in its primary market of launching constellations. The volume of the fairing and payload mass are both lower than comparable rockets such as the Falcon 9, Terran R, and New Glenn and it is not optimized for high-energy orbits meaning it can't launch most GTO satellites.

Model this analysis is based on: <a href="https://docs.google.com/spreadsheets/d/1VOgRbnAsQZdGIPoemRj5ApSLk_jxGanNliWEPnBB3p4/edit?usp=sharing">https://docs.google.com/spreadsheets/d/1VOgRbnAsQZdGIPoemRj5ApSLk_jxGanNliWEPnBB3p4/edit?usp=sharing</a>

More, better, and more accurate charts here: <a href="https://drive.google.com/drive/folders/1IAbB-Ydgv3udhIhvfdKp_dWnxUshMqmc?usp=drive_link">https://drive.google.com/drive/folders/1IAbB-Ydgv3udhIhvfdKp_dWnxUshMqmc?usp=drive_link</a>

### <b>Legacy Commerical Communication Satellite Market</b>

![Image description]({{site.url}}/assets/images/2024-01-07/Launches-Total-Type-Mass.png){: width="600" .align-center}  
<a href="{{site.url}}/assets/images/2024-01-07/Western-Commercial-Launches-By-Orbit-By-Mass.png">Updated Chart (Important! Click Me!)</a>

The legacy commercial communication satellite market is dominated by GEO satellites. Between 2018 and 2023, 48 commercial satellites were successfully launched. 39 of these satellites were launched to GTO/GEO while only 9 were launched to LEO/MEO/SSO.

Neutron can only launch ~50% of these satellites and most require expending the booster. This was the primary commercial market for the Falcon 9 after the original CRS test launches. Before 2018, Falcon 9 conducted 6 LEO commerical satellite launches and 17 to GEO/GTO. 

In the early days of Falcon 9 commerical launches it took market share from the Ariane 5. The Ariane 5 was optimized for high-energy orbits which was the majority of the market at the time. 

Ariane 5 peaked at 7 launches per year. Compared to the 96 Falcon 9 launches in 2023 this is a relatively small market and shows that the new paradigm of constellations is far more important than the legacy market of commercial communication satellites. Clearly new rockets should be optimized for launching LEO constellations and not GEO satellites. This point is more of an indictment of Vulcan than Neutron. Even the majority of Vulcan's booked launches are for a LEO constellation.

Neutron will not take market share here and I don't believe Rocket Lab should put much effort into this as it is now a minor market compared to Constellations.

### <b>Constellations - The Next Paradigm</b>

![Image description]({{site.url}}/assets/images/2024-01-07/Launches-Type-Pie.png){: width="500" .align-center}

Constellations are the next paradigm in the commercial communication satellite market and what Rocket Lab claims Neutron is optimized for. 

Constellations do not require high-energy orbits. Rather, they require high mass-to-orbit over multiple launches. So, there are no stringent minimum mass requirements for constellations as there are for GEO satellites. Total mass to orbit is the primary metric and this can be achieved by any rocket through increasing the total number of launches. Cost per launch per satellite is the metric that should be optimized for.

There are multiple LEO constellations waiting to be launched. Kuiper is the most well-known and there are many smaller constellation projects such as Iridium, OneWeb, Orbcomm, Intelsat, etc. Launch TAM in total until 2030 may be upwards of 10 billion dollars excluding Starlink.

Small Sat constellations are a minority of the market. Small sats can be launched on rideshare missions and do not require massive amounts of launches. To illustrate this point, Planet Labs currently has around 200 operational satellites in orbit and each Dove satellite weighs around 5kg. 200*5=1000kg. The entire constellation is only a couple of tons, if specific orbits weren't required, this could be done on a single Falcon 9.

### <b>Neutron's Competitive Position in Constellations</b>

![Image description]({{site.url}}/assets/images/2024-01-07/Constellation-Rockets.png){: width="700" .align-center}

<a href="{{site.url}}/assets/images/2024-01-07/Constellation-Rockets.png">Click here for expanded version of chart</a> <a href="https://docs.google.com/spreadsheets/d/1VOgRbnAsQZdGIPoemRj5ApSLk_jxGanNliWEPnBB3p4/edit?usp=sharing">or source</a>

Cost per launch per satellite is fundamentally what is being optimized when launching constellations, with <a href="https://www.aboutamazon.com/news/innovation-at-amazon/amazon-project-kuiper-spacex-launch">responsiveness</a> tied for first or in second place. Payload mass and volume are the primary determining factors for the number of satellites that can be launched. This is clear with Starlink as SpaceX was constrained by volume with v1 and now is constrained by mass on v2 mini. 

Above you can see the cost per launch per satellite for current, under-development, and retired medium/heavy lift rockets for a few major constellations. Neutron must be priced far lower than other medium-lift rockets to be competitive at my price-per-launch estimates. If you'd like to use your own estimates, copy the spreadsheet and make your own adjustments.

Neutron will have to charge ~$40M per launch to be competitive on constellations. This is not a consideration for other larger LEO/GTO satellites as they are not mass-limited. You can see this when Falcon 9 launches ~5t LEO satellites which is far below the 18.4t max payload.

SpaceX's original Iridium deal was $492M for 8 launches which is $61.5M per launch. If Neutron carried out this contract, it would have to launch ~13 times for $38.7M per launch. Worse yet, Neutron is volume limited here as the 10 Iridium satellites are only 6.6t. With reusability, $40M per launch is possible, but at significantly lower margins than the Falcon 9 and potentially other medium launch vehicles in the future.

Neutron's improved partially-reusable design over Falcon 9 shows some promise for lower costs, but design is not the hard part. SpaceX produces 100 F9 second stages per year and Falcon 9's marginal cost per launch is <a href="https://youtu.be/DxREm3s1scA?si=ejdsalwfZkgcCpZG&t=2360">~$15M</a>. It is <a href="https://x.com/BellikOzan/status/1741535515759857816?s=20">unlikely that Neutron's second stage will be cheaper</a> and with the increased competition I am doubtful that Neutron will exceed 50 customer launches per year before the paradigm of fully-reusable rockets arrives. These points apply to their competition as well. Economies of scale will be difficult to achieve with Neutron and as a hopeful future RKLB investor I don't see lower costs than F9 as likely.

### <b>Conclusion</b>

In my <a href="https://youtu.be/kKo5IDTiWIU?si=ia7J-ZC1VPU2lDkC">recent video</a> on updates to my RKLB valuation model, the primary piece of intelligent criticism I received was about my comments about Neutron. I've spent the last 2 days and 12 hours in total researching and creating a model of the commercial satellite launch market to improve my understanding.

<i>"Constellations are what you want to be aiming for. I'm not sure Neutron is optimized to launch constellations."</i>  
I completely misunderstood the cost per launch component. My fundamental criticism of Neutron is that because of its lower size compared to other medium/heavy lift partially-reusable rockets, it will have to charge much less per launch to be competitive. However, with the smaller size of Neutron and Rocket Lab's proven ability to development launch vehicles for low cost, Neutron may be well positioned to achieve lower launch costs than competitors. 

<i>"[For Neutron to efficiently launch constellations] it will have to land at sea with low payload volume with low payload mass. This is not the best architecture I'd say, something like relativity's Terran R I'd be more bullish on."</i>  
I completely stand by this statement. New Glenn appears to be the best partially-reusable rocket to launch mega-constellations from a design perspective. RTLS + High payload mass + Large fairing volume makes an ideal 2050 rocket. Neutron is suboptimal on all three of these metrics.

Execution is fundamentally what you should be concerned with in rocket development programs. This can be seen in the chart above as the Falcon 9 is suboptimal and yet launches the vast majority of satellites - world class execution is far more important than anything else. In the video I missed this point entirely as I was focused on being pessimistic about Rocket Lab to combat my inherent optimism as can be seen in my valuation estimates.

Rocket Lab has a proven track record and I believe they will be able to execute on the Neutron program while bringing in billions in profits over its lifetime. However, Neutron remains a suboptimal rocket.