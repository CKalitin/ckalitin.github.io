---
layout: post
title: "Small Sat Rockets vs. Rideshare + Kick Stages"
categories: Technology
author:
 - Christopher Kalitin
---

Takeaways:
1. Existing Rideshareable missions are early electron launches, tech demos to unique orbots (except ALE-2), and rideshare (Astra, Vega)
2. Only 3 missions (Palisade com sat demo, GMS-T com sat, baby come back rideshare with NASA, demo, and spire weather sats) were over 1000km, still addressable by Mira
3. The remiaining Kickstagable satellite are in slightly unique SSO orbits for imaging/SAR (750km GAzella, 350km CE-SAT IIB w/ Doves)
4. Firefly quick response military launch is not addressable by rideshare
5. The mission to low inclinations are Synthetic Aperture Radar, Imaging, Observation these are difficult to address due to the unique orbital planes with constellations (tropics, Blackstar Global, Capella)

Categories:
1. Rideshareable
3. SSO Kick stage
4. Low inclination constellation (Unique orbital plane required)
5. Military

Other:
* Planet Labs has had 4 flights, the first 2 electrons, and two electrons in 2020 for super doves one of which failed, super doves have also been launched on PSLV
* The imaging launches are all Blacksky & PlanetLabs
* Kick Stages are a high-level technology that decreases costs slightly
* Include an estimate of cost

Cost:
* Mira is 250kg wet mass + 300kg payload with 500m/s
* Transporter missions are ~$5,500 / kg, $3M launch cost
* Assume $1-2M cost when at scale
* This is slightly lower than an electron (~7M) and easier to bring down in the future
* SpaceX's cross launch margins are >50%, Rocket Lab is ~20%
* More room for cost declines on an MLV, could get 2x cheaper in the short term
* Recovery could bring down Electron costs by ~1-2 million, bridging the gap
* Either way, the only advantage of dedicated small sat launch for a mission that could take a Mira is schedule

In the last 5 years Rocket Lab's Electron dedicated small satellite launches and SpaceX's Transporter rideshare missions have become regular occurances. This has posed a problem many have stugguled to answer by my standards: Why would any satellites be launched on a small rocket when rideshare missions are cheaper?

First, we must understand the categories of small satellites. 

### Rideshareable Satellites
![Image description]({{site.url}}/assets/images/2024-02-10/Small-Sat-Missions-Addressable-By-Rideshare.png){: width="600" .align-center}
+ Planet Labs launches example

In the past 5 years (2018-2023), 55 dedicated small sat launches have occured exlucing Chinese rockets. By my criteria, 15 of these missions could have been completed through launching on a rideshare mission. However, about five of these appear to perfer a dedicated launch and the remaining ten are well suited for a rideshare mission on a medium launch vehicle.

These missions are (Rocket, Payload):
1. Electron - Dove/Lemurs
2. Electron - CICERO 10/Lemurs
3. Electron - ALE-2
4. Vega     - Rideshare
5. Electron - Dragracer/BRO/SpaceBEE
6. Electron - Strix-Alpha
7. LauncherOne - Rideshare
8. Rocket 3 - Rideshare
9. Electron - Strix-Beta
10. LauncherOne - Rideshare
11. Rocket 3 - Rideshare
12. Electron - E-Space Demo
13. Alpha - Rideshare
14. SSLV - ESO-07
15. GYUB - S-STEP

The rideshare missions and Planet Labs Lemur launches are well suited for a rideshare mission on a medium launch vehicle (MLV). The rideshare missions are mainly risky flights of unproven launch vehicles (Astra Rocket 3 flight 6, Firefly Alpha flight 2). The reason these payloads flew on a small launch vehicle (SLV) is likely due to the lower cost of flying on a risky rocket. The Vega rideshare mission is part of an ESA program to launch small satellites. The ESA perfers launching payloads on their own rockets, and appear to only launch on non-european rockets <a href="https://spacenews.com/europe-considers-launching-copernicus-satellite-on-falcon-9/#:~:text=ESA%20and%20the%20European%20Commission%20already%20have%20plans%20for%20as,planned%20to%20launch%20in%20October.">bregrudingly</a>. The two launches with Planet Labs satellites are also well suited to a rideshare missions because an exact orbit is not required. Planet Labs has been launching payloads on rideshare missions since the first flight of Antares.

The remaining five missions require a commonly-used Sun Synchronous Orbit (SSO). This is a ~500km orbit at an inclination of 98 degrees that allows a satellite to pass over locations on Earth at regular intervals. For example, an imaging satellite can use this orbit to pass over Vancouver at 3:00 PM every day to take images during rush hour. Every SpaceX Transporter rideshare mission has gone to this orbit.

The reason for launching on a dedicated launch instead of a rideshare mission is likely to be schedule requirements. Rideshare missions only launch a couple of times per year and are scheduled by the launch provider. A Small Sat Operater does not have the same control over the launch date or exact orbit as on a dedicated launch. This is often cited as the primary reason for companies choosing a dedicated SLV launch over a rideshare mission. However, these five missions account for only 16% of the commercial small sat launches in the last 5 years.

### Kick Stageable Satellites
![Image description]({{site.url}}/assets/images/2024-02-10/Small-Sat-Missions-Addressable-By-Launch-Types.png){: width="600" .align-center}

Only four of the previous 31 commercial small sat missions could have been completed on a rideshare mission using a kick stage. A Kick Stage is a small stage on top of the rocket that can change the orbit of the payload so it is delivered to the specific orbit that is required.

Each of these four launches have satellites that require unique orbits around the Earth and cannot use the default SSO orbit that many rideshare missions arrive at.  
Missions (Rocket, Payload):
1. Electron - Palisade
1. Electron - GMS-T
1. Electron - GAzella
1. Electron - Rideshare

The highest orbit is that of Paliside, 1,200km at an 88 degree inclination as of February 9 2024. The lowest orbit is GAzelle at 750km and a 99 degree inclination.

All the launches have inclinations that are within several degrees of the 98 degrees that is common for rideshare missions. Inclination changes require immense amounts of fuel to complete, so more than a couple degrees of inclination change is not reasonable to be completed with a kick stage.

### Dedicated Launch Required Satellites
![Image description]({{site.url}}/assets/images/2024-02-10/Small-Sat-Types.png){: width="600" .align-center}
+ Include satellite types

### Cost Estimates


### Summary

