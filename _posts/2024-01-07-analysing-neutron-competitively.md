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

![Image description]({{site.url}}/assets/images/2024-01-07/neutron-deploy.jpg){: height="350" .align-center}

Neutron is Rocket Lab's next generation medium lift rocket. In many ways, it looks and functions like Falcon 9 version 2 as it is designed from the ground up for reusability. This is most obvious with the booster. The fairings are built into the structure of the booster, the landing legs are built into strakes, and the Archimedes engine is designed to operate below max performance to optimize for reusability.

During early deveoplment of Falcon 9, SpaceX was optimizing for lowest probability of bankruptcy. With Neutron, Rocket Lab can optimize for the most competitive and efficient rocket.

However, Neutron is not a perfectly optimized rocket and in many ways Falcon 9 is superior. The volume of the fairing and payload mass are both lower than comperable rockets such as the Falcon 9, Terran R, and New Glenn and it is not optimized for high-energy orbits meaning it can't launch most GTO satellites - the majority of the legacy communication satellite market.

Model this analysis is based on: <a href="https://docs.google.com/spreadsheets/d/1VOgRbnAsQZdGIPoemRj5ApSLk_jxGanNliWEPnBB3p4/edit?usp=sharing">https://docs.google.com/spreadsheets/d/1VOgRbnAsQZdGIPoemRj5ApSLk_jxGanNliWEPnBB3p4/edit?usp=sharing</a>

### Legacy Commerical Communication Satellite Market

![Image description]({{site.url}}/assets/images/2024-01-07/Launches-Total-Type-Mass.png){: height="350" .align-center}

The legacy commercial communication satellite market is dominated by GEO satellites. From 2018 to the end of 2023, 39 commerical GEO satellites have been launched and 9 commercial satellites to LEO.

Neutron can only launch ~50% of these satellites and most of these require expending the booster. This was the primary commerical market for the Falcon 9 after the original CRS test launches. Before 2018, the Falcon 9 conducted 6 commerical LEO launches and 17 commercial GEO launches. Here the Falcon 9 took market share from the Ariane 5, which launched the majority of these satellites.

Ariane 5 peaked at 7 launches per year. This shows the relativly small size of this market. This is more of an indictment of the Vulcan than Neutron, as Vulcan is optimized for high energy orbits which are a small portion of the future commerical market.

Neutron will not take market share here, and Rocket Lab shouldn't try to as this is a minor market.

### Constellations - The Next Paradigm

![Image description]({{site.url}}/assets/images/2024-01-07/Launches-Type-Pie.png){: height="350" .align-center}

Constellations are the next paradigm in the commerical communication satellite market and what Neutron is optimized for. 

### Neutron's Competitive Position in Constellations

![Image description]({{site.url}}/assets/images/2024-01-07/Constellation-Rockets.png){: height="700"}