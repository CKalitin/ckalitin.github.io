---
layout: post
title: "Analysing Neutron Competitively"
categories: Technology
author:
 - Christopher Kalitin
---
<head>
    <meta property="og:image" content="{{site.url}}/assets/images/2024-01-07/neutron-deploy.jpg">
</head>

- Undersized for most pre-constellation satellites (GTO com sats)
- Slightly undersized from a constellation perspective
    - Payload mass and volume are low
    - Lower cost per launch required to compete
SpaceX’s Iridium deal was $492/8 launches = $61.5M
    - Neutron would take ~13 launches at 6/launch, $37.8M
    - Here Neutron is volume-limited, 10 sats is 6.6t

![Image description]({{site.url}}/assets/images/2024-01-07/neutron-deploy.jpg){: height="400" .align-center}

Neutron is Rocket Lab's next-generation medium-lift rocket. In many ways, it looks and functions like Falcon 9 version 2 as it is designed from the ground up for reusability. This is most obvious with the booster. The fairings are built into the structure of the booster, the landing legs are built into strakes, and the Archimedes engine is designed to operate below max performance to optimize for reusability.

During the early development of Falcon 9, SpaceX was optimizing for the lowest probability of bankruptcy. With Neutron, Rocket Lab can optimize for the most competitive and efficient rocket.

However, Neutron is not a perfectly optimized rocket and in many ways Falcon 9 is superior. The volume of the fairing and payload mass are both lower than comparable rockets such as the Falcon 9, Terran R, and New Glenn and it is not optimized for high-energy orbits meaning it can't launch most GTO satellites - which is the majority of the legacy communication satellite market.

Model this analysis is based on: <a href="https://docs.google.com/spreadsheets/d/1VOgRbnAsQZdGIPoemRj5ApSLk_jxGanNliWEPnBB3p4/edit?usp=sharing">https://docs.google.com/spreadsheets/d/1VOgRbnAsQZdGIPoemRj5ApSLk_jxGanNliWEPnBB3p4/edit?usp=sharing</a>

### Legacy Commerical Communication Satellite Market

![Image description]({{site.url}}/assets/images/2024-01-07/Launches-Total-Type-Mass.png){: height="350" .align-center}

The legacy commercial communication satellite market is dominated by GEO satellites. From 2018 to the end of 2023, 39 commercial GEO satellites have been launched and 9 commercial satellites to LEO.

Neutron can only launch ~50% of these satellites and most of these require expending the booster. This was the primary commercial market for the Falcon 9 after the original CRS test launches. Before 2018, Falcon 9 conducted 6 commercial LEO launches and 17 commercial GEO launches. Here the Falcon 9 took market share from the Ariane 5, which was optimized for these high-energy orbits.

Ariane 5 peaked at 7 launches per year. This shows the relatively small size of this market. This is more an indictment of the Vulcan than Neutron, as Vulcan is optimized for high energy orbits which are a small portion of the future commercial market.

Neutron will not take market share here and I don't believe Rocket Lab should put much effort into this as it is now a minor market compared to Constellations.

### Constellations - The Next Paradigm

![Image description]({{site.url}}/assets/images/2024-01-07/Launches-Type-Pie.png){: height="350" .align-center}

Constellations are the next paradigm in the commercial communication satellite market and what Rocket Lab claims Neutron is optimized for. 

Constellations do not require high-energy orbits, rather they require high mass-to-orbit over multiple launches. So, there are no stringent minimum mass requirements for constellations like for GEO satellites. Total mass to orbit is the primary metric and this can be achieved by any rocket through increasing the total number of launches. Cost per launch and cost per satellite is what should be optimized for.

There are multiple LEO constellations waiting to be launched. Kuiper is the most well-known and there are many smaller constellation projects such as Iridium, OneWeb, Orbcomm, Intelsat, etc. Launch TAM in total until 2030 may be upwards of 10 billion excluding Starlink.

Small Sat constellations are a minority of the market. Small sats can be launched on rideshare missions and do not require massive amounts of launches. 

To illustrate this point, Planet Labs currently has around 200 operational satellites in orbit and Dove satellites weigh around 5kg. 200*5=1000kg. The entire constellation is only a couple of tons, if specific orbits weren't required, this could be done on a single Falcon 9.

### Neutron's Competitive Position in Constellations

![Image description]({{site.url}}/assets/images/2024-01-07/Constellation-Rockets.png){: width="700" .align-center}

<a href="{{site.url}}/assets/images/2024-01-07/Constellation-Rockets.png">Click here for expanded version of chart</a> <a href="https://docs.google.com/spreadsheets/d/1VOgRbnAsQZdGIPoemRj5ApSLk_jxGanNliWEPnBB3p4/edit?usp=sharing">or source</a>

Cost per satellite is fundamentally what is being optimized when launching constellations along with responsiveness. Payload mass and/or volume are the primary determining factors for the number of satellites that can be launched. This is clear with Starlink as SpaceX was constrained by volume with v1 and now is constrained by mass on v2 mini. 

Above you can see the cost per satellite for current and under-development medium-lift rockets for a few major constellations. Neutron is outcompeted by the Falcon 9, Terran R, and New Glenn on all constellations at my price-per-launch estimates. If you'd like to use your own estimates, copy the spreadsheet and make your own adjustments.

Neutron will have to charge ~$40M per launch to be competitive on constellations. This is not a consideration for other larger LEO/GTO satellites as they are not mass-limited. Falcon 9 launches many ~5t satellites which is far below the 18.4t max payload.

SpaceX's original Iridium deal was $492M for 8 launches which is $61.5M per launch. Neutron would have to launch ~13 times for $38.7M per launch. With reusability this is possible, but at significantly lower margins than the Falcon 9 and potentially other medium launch vehicles.

### Conclusion

In my <a href="https://youtu.be/kKo5IDTiWIU?si=ia7J-ZC1VPU2lDkC">recent video</a> on updates to my RKLB valuation model, the primary piece of intelligent criticism I received was about my comments about Neutron. I've spent the last 2 days and 12 hours in total researching and creating a model of the commercial satellite launch market to improve my understanding.

<i>"Constellations are what you want to be aiming for to launch. I'm not sure Neutron is optimized to launch constellations."</i>
I completely misunderstood the cost per launch component. My fundamental criticism of Neutron is that because of its lower size compared to other medium/heavy lift partially-reusable rockets, it will have to charge much less per launch to be competitive.

<i>"[For Neutron to efficiently launch constellations] it will have to land at sea with low payload volume with low payload mass. This is not the best architecture I'd say something like relativities Terran R I'd be more bullish on."</i>
I completely stand by this statement. New Glenn appears to be the best rocket to launch mega-constellations from a design perspective. RTLS + High payload mass + Large fairing volume makes an ideal 2050 rocket. Neutron is suboptimal on all three of these metrics.

Execution is fundamentally what you should be concerned with in rocket development programs. In the video, I missed this point entirely as I was focused on being pessimistic about Rocket Lab to combat my inherent optimism as can be seen in my valuation estimates.

Rocket Lab has a proven track record and I believe they will be able to execute on Neutron. However, Neutron remains a suboptimal rocket for the commercial satellite launch market.