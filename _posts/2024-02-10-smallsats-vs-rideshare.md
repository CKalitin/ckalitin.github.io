---
layout: post
title: "Small Sat Rockets vs. Rideshare + Kick Stages"
categories: Technology
author:
 - Christopher Kalitin
---

In the last 5 years Rocket Lab's Electron dedicated small satellite launches and SpaceX's Transporter rideshare missions have become regular occurances. This has posed a problem many have stugguled to answer by my standards: Why would any satellites be launched on a small rocket when rideshare missions are cheaper?

Access the source data at the link below.  
Copy the spreadsheet and in Cell BC2 filter to only small sat launches.  
<a href="https://docs.google.com/spreadsheets/d/1VOgRbnAsQZdGIPoemRj5ApSLk_jxGanNliWEPnBB3p4/edit?usp=sharing">https://docs.google.com/spreadsheets/d/1VOgRbnAsQZdGIPoemRj5ApSLk_jxGanNliWEPnBB3p4/edit?usp=sharing</a>

### <b>Rideshareable Satellites</b>
![Image description]({{site.url}}/assets/images/2024-02-10/Small-Sat-Missions-Addressable-By-Rideshare.png){: width="600" .align-center}

In the past 6 years (2018-2023 inclusive), 55 dedicated small sat launches have occured excluding Chinese rockets. By my criteria, 11 of these missions could have been completed through launching on a commercial rideshare mission. However, five of these appear to perfer a dedicated launch and the remaining six are more well suited for a rideshare mission on a medium launch vehicle.

These missions are (Rocket, Payload):
1. Electron - Dove/Lemurs
2. Electron - CICERO 10/Lemurs
3. Electron - ALE-2
4. Electron - Dragracer/BRO/SpaceBEE
5. Electron - Strix-Alpha
6. LauncherOne - Rideshare
7. LauncherOne - Rideshare
8. Electron - Strix-Beta
9. Rocket 3 - Rideshare
10. Electron - E-Space Demo
11. Alpha - Rideshare

The rideshare, Planet Labs Dove, and CICERO 10 launches are well suited for a rideshare mission on a medium launch vehicle (MLV). The rideshare missions are all risky flights on unproven launch vehicles (Astra Rocket 3, Firefly Alpha, Virgin Orbit LauncherOne). The reason these payloads flew on a small launch vehicle (SLV) is likely due to the lower cost of flying on a risky rocket. For example, many low-cost Government / Military rideshare payloads flew on Virgin Orbit's LauncherOne. The Dove and CICERO 10 launches are also well suited to a rideshare missions because an exact orbit is not required. Planet Labs have been launching payloads on rideshare missions since the first flight of Antares.

The remaining five missions are all tech demonstration satellites and all require a commonly-used Sun Synchronous Orbit (SSO). This is a ~500km orbit at an inclination of 98 degrees that allows a satellite to pass over locations on Earth at regular intervals. This is the orbit every SpaceX Transporter rideshare mission has gone to, but there are more considerations than the end destination.

The reason for launching on a dedicated small rocket instead of a rideshare mission is likely schedule requirements. Rideshare missions only launch a couple of times per year and are scheduled by the launch provider. Small sat operaters have much more control over launch date and orbital parameters when flying on a dedicated launch vehicle. This is often cited as the primary reason for companies choosing a dedicated launch over a rideshare mission. However, these five commercial schedule-constrained missions account for only 9% of the small sat launches in the last 6 years.

### <b>Kick Stageable Satellites</b>
![Image description]({{site.url}}/assets/images/2024-02-10/Small-Sat-Missions-Addressable-By-Launch-Types.png){: width="600" .align-center}

Only five of the previous 55 small sat launches are suitable to launching on a rideshare mission and using a kick stage. A Kick Stage is a small stage on top of the rocket that can change the orbit of the payload so it is delivered to the specific orbit that is required.

Missions (Rocket, Payload):
1. Electron - Palisade
1. Electron - GMS-T
1. Electron - GAzella
1. Electron - MATS
1. Electron - Rideshare

Each of these five launches have satellites that require unique orbits around the Earth and cannot use the default SSO orbit that many rideshare missions arrive at. The highest orbit is that of Paliside at 1,200km and an 88 degree inclination as of February 9 2024. The lowest orbit is MATS at 590km and a 98 degree inclination, this launch was also Rocket Lab's second attempt at catching a booster.

All the launches mentioned above have inclinations that are within several degrees of the 98 degrees that is common for rideshare missions. Major inclination changes require immense amounts of fuel to complete, so more than a couple degrees of inclination change is not reasonable to be completed with a kick stage.

Kick stages are very useful for achieving a target orbital altitude. In the past this have been a capability only achieved through dedicated launch or complex satellites that have propulsion build in. 

Only ~10% of small sat launches can be addressed by a kick stage. For all the news around them this is appears to be a fairly low number, but this is only small kick stages like Impulse's Mira. The larger market (especially economically) for kick stages may be as a GEO delivery mechanism.

### <b>Dedicated Launch Required Satellites</b>
![Image description]({{site.url}}/assets/images/2024-02-10/Small-Sat-Types.png){: width="600" .align-center}

Sixteen small sat launches of the last 55 are in a category that is not addressable by rideshare or kick stages. These are satellites that require a unique orbital plane to take their place in a constellation. To properly cover the world with a satellite constellation the satellites must be placed into precise orbital planes so that there are no locations on the surface that lack coverage. For exmaple, Starlink Shell 1 consists of 72 orbital planes with 22 satellites in each. Satellites cannot be moved between orbital planes due to a similar reason as inclination changes, it requires immense amount of fuel.

The requirement for a unique orbital plane and the immense difficultly of addressing this market with a kick stage makes it the perfect market for small launch vehicles.

All of these launches carried satellites that conduct Earth observation:
1. 7x Blacksky (Imaging)
2. 3x Capella (Syntheric Aperture Radar)
3. 2x Tropics (Weather Observation)
4. 4x others (mostly Synthetic Aperture Radar)

These Earth observation constellation satellites all require launching to a specific orbit on a small launch vehicle, but not all constellations do. The prime example is Planet Labs. Their constellation is used for Earth Imaging but they have flown many times more on rideshare missions than small sat launches. Planet Labs solved the dedicated launch problem through sheer scale of their constellation. They currently operate 150 satellites and have launched 462 in total. Because of the size of this constellation, number of launches required, and eased requirements on orbital planes, Planet Labs is able to forego the need for dedicated launch.

Rocket Lab is currently targetting 22 launches in 2024 and the majority of these are for Earth Observation satellites:
1. 3x Spire
2. 2x NASA Prefire
3. 5x Kineis
4. 2x Capella
5. 3x Strix
6. 2x Hawk
7. 5x Blacksky
8. 2x Non-Earth Observation

All 16 of the launches that required a unique plane in the last 6 years were launched by Electron. Furthermore, of the 24 currently planned Electron launches 22 of them are for constellation satellites that require unique orbital planes. These are launches that can only be done of a small satellite launch vehicle and will be the primary business of small launch providers for the coming years.

### <b>Military and Government Satellites</b>
![Image description]({{site.url}}/assets/images/2024-02-10/Small-Sat-Operator-Types.png){: width="600" .align-center}

In progress

The Vega rideshare mission is part of an ESA program to launch small satellites. The ESA perfers launching payloads on their own rockets, and appear to only launch on non-european rockets <a href="https://spacenews.com/europe-considers-launching-copernicus-satellite-on-falcon-9/">bregrudingly</a>. 

### <b>Cost Estimates</b>

Cost:
* Mira is 250kg wet mass + 300kg payload with 500m/s
* Transporter missions are ~$5,500 / kg, $3M launch cost
* Assume $1-2M cost when at scale
* This is slightly lower than an electron (~7M) and easier to bring down in the future
* SpaceX's cross launch margins are >50%, Rocket Lab is ~20%
* More room for cost declines on an MLV, could get 2x cheaper in the short term
* Recovery could bring down Electron costs by ~1-2 million, bridging the gap
* Either way, the only advantage of dedicated small sat launch for a mission that could take a Mira is schedule

### <b>Summary</b>

