---
layout: post
title: "Analysing the Dedicated Small Sat Launch Market"
categories: Technology
author:
 - Christopher Kalitin
---
<head>
    <meta property="og:image" content="{{site.url}}/assets/images/2024-02-10/Small-Sat-Missions-Addressable-By-Launch-Types.png">
</head>

In the last 5 years, Rocket Lab's Electron dedicated small satellite launches and SpaceX's Transporter rideshare missions have become regular occurrences. This has posed a problem many have struggled to answer by my standards: Why would any satellites be launched on a small rocket when rideshare missions are cheaper?

Access the source data at the link below or in <a href="{{site.url}}/assets/images/2024-02-10/Small-Sat-Launches-Spreadsheet.png">image form</a>.  
Copy the spreadsheet and in Cell BC2 filter to only small sat launches.  
<a href="https://docs.google.com/spreadsheets/d/1VOgRbnAsQZdGIPoemRj5ApSLk_jxGanNliWEPnBB3p4/edit?usp=sharing">https://docs.google.com/spreadsheets/d/1VOgRbnAsQZdGIPoemRj5ApSLk_jxGanNliWEPnBB3p4/edit?usp=sharing</a>

### <b>Rideshareable Satellites</b>
![Image description]({{site.url}}/assets/images/2024-02-10/Small-Sat-Missions-Addressable-By-Rideshare.png){: width="600" .align-center}

In the past 6 years (2018-2023 inclusive), 55 dedicated small sat launches have occurred excluding Chinese rockets. By my criteria, 11 of these missions could have been completed by launching on a commercial rideshare mission. However, five of these appear to prefer a dedicated launch and the remaining six are more well-suited for a rideshare mission on a medium launch vehicle.

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

The rideshare, Planet Labs Dove, and CICERO 10 launches are well suited for a rideshare mission on a medium launch vehicle (MLV). The rideshare missions are all risky flights on unproven launch vehicles (Astra Rocket 3, Firefly Alpha, Virgin Orbit LauncherOne). The reason these payloads flew on a small launch vehicle (SLV) is likely due to the lower cost of flying on a risky rocket. For example, many low-cost Government / Military rideshare payloads flew on Virgin Orbit's LauncherOne. The Dove and CICERO 10 launches are also well suited to rideshare missions because an exact orbit is not required. Planet Labs have been launching payloads on rideshare missions since the first flight of Antares.

The remaining five missions are all tech demonstration satellites and all require a commonly-used Sun Synchronous Orbit (SSO). This is a ~500km orbit at an inclination of 98 degrees that allows a satellite to pass over locations on Earth at regular intervals. This is the orbit every SpaceX Transporter rideshare mission has gone to, but there are more considerations than the end destination.

The reason for launching on a dedicated small rocket instead of a rideshare mission is likely schedule requirements. Rideshare missions only launch a couple of times per year and are scheduled by the launch provider. Small sat operators have much more control over launch date and orbital parameters when flying on a dedicated launch vehicle. This is often cited as the primary reason for companies choosing a dedicated launch over a rideshare mission. However, these five commercial schedule-constrained missions account for only 9% of the small sat launches in the last 6 years.

### <b>Kick Stageable Satellites</b>
![Image description]({{site.url}}/assets/images/2024-02-10/Small-Sat-Missions-Addressable-By-Launch-Types.png){: width="600" .align-center}

Only five of the previous 55 small sat launches are suitable for launching on a rideshare mission and using a kick stage. A Kick Stage is a small stage on top of the rocket that can change the orbit of the payload so it is delivered to the specific orbit that is required.

Missions (Rocket, Payload):
1. Electron - Palisade
1. Electron - GMS-T
1. Electron - GAzella
1. Electron - MATS
1. Electron - Rideshare

Each of these five launches have satellites that require unique orbits around the Earth and cannot use the default SSO orbit that many rideshare missions arrive at. The highest orbit is that of Paliside at 1,200km and an 88-degree inclination as of February 9 2024. The lowest orbit is MATS at 590km and a 98-degree inclination, this launch was also Rocket Lab's second attempt at catching a booster.

All the launches mentioned above have inclinations that are within several degrees of the 98 degrees that is common for rideshare missions. Major inclination changes require immense amounts of fuel to complete, so more than a couple of degrees of inclination change is not reasonable to be completed with a kick stage.

Kick stages are very useful for achieving a target orbital altitude. In the past, this has been a capability only achieved through dedicated launch or complex satellites that have propulsion built in. 

Only ~10% of small sat launches can be addressed by a kick stage. For all the news around them, this appears to be a fairly low number, but this is only small kick stages like Impulse's Mira. The larger market (especially economically) for kick stages may be as a GEO delivery mechanism.

### <b>Dedicated Launch Required Satellites</b>
![Image description]({{site.url}}/assets/images/2024-02-10/Small-Sat-Types.png){: width="600" .align-center}

Sixteen small sat launches of the last 55 are in a category that is not addressable by rideshare or kick stages. These are satellites that require a unique <a href="https://en.wikipedia.org/wiki/Orbital_plane">orbital plane</a> to take their place in a constellation. To properly cover the world with a satellite constellation the satellites must be placed into precise orbital planes so that there are no locations on the surface that lack coverage. For example, Starlink Shell 1 consists of 72 orbital planes with 22 satellites in each. Satellites cannot be moved between orbital planes due to a similar reason as inclination changes, it requires an immense amount of fuel.

The requirement for a unique orbital plane and the immense difficulty of addressing this market with a kick stage makes it the perfect market for small launch vehicles.

All of these launches carried satellites that conduct Earth observation:
1. 7x Blacksky (Imaging)
2. 3x Capella (Synthetic Aperture Radar)
3. 2x Tropics (Weather Observation)
4. 4x others (mostly Synthetic Aperture Radar)

These Earth observation constellation satellites all require launching to a specific orbit on a small launch vehicle, but not all constellations do. The prime example is Planet Labs. Their constellation is used for Earth Imaging but they have flown many times more on rideshare missions than small sat launches. Planet Labs solved the dedicated launch problem through the sheer scale of their constellation. They currently operate 150 satellites and have launched 462 in total. Because of the size of this constellation, the number of launches required, and eased requirements on orbital planes, Planet Labs is able to forego the need for dedicated launches.

Rocket Lab is currently targetting 22 launches in 2024 and the majority of these are for Earth Observation satellites:
1. 3x Spire
2. 2x NASA Prefire
3. 5x Kinéis
4. 2x Capella
5. 3x Strix
6. 2x Hawk
7. 5x Blacksky
8. 2x Non-Earth Observation

All 16 of the launches that required a unique plane in the last 6 years were launched by Electron. Furthermore, 22 of the 24 currently planned Electron launches are for constellation satellites that require unique orbital planes. These are launches that can only be done with a small satellite launch vehicle and will be the primary business of small launch providers for the coming years.

### <b>Government and Military Satellites</b>
![Image description]({{site.url}}/assets/images/2024-02-10/Small-Sat-Operator-Types.png){: width="600" .align-center}

The Government and Military are not rational consumers. In the commercial world, everything makes sense because economics drives it all, this is not true of the government.

24 of the previous 55 small sat launches were paid for by National Space Agencies or Militaries.   
11 of these launches used a government-developed launch vehicle (Rocket, Customer):
1. SS-520 - Japan
2. Vega - Europe
3. Minotaur IV - USSF
4. Vega - Europe
5. Pegasus - USSF
6. Minotaur I - USSF
7. Epsilon - Japan
8. SSLV - India
9. Shavit 2 - Isreal
10. Nuri - South Korea
11. GYUB-TV2 - South Korea

Many countries are interested in developing their own launch capability and do so with a government-led program. This often leads to achieving the goal of developing a rocket, but not often an <a href="https://en.wikipedia.org/wiki/Space_Launch_System">economical one</a>. Because the goals of these programs are more aimed toward increasing the technological sophistication of a country and not solely to create a cheaper and reliable rocket, these programs often struggle against privately developed rockets and <a href="https://europeanspaceflight.substack.com/p/arianegroup-wants-210m-per-year-more">require government subsidy to stay afloat</a>. 

This is all to say the above 11 launches do not compete in the same arena as the rest of the commercial small satellite launches. For example, the Vega rideshare mission is part of an ESA program to launch small satellites. The ESA perfers launching payloads on their own rockets due to the <a href="https://eufundingoverview.be/funding/the-european-space-agency-esa#:~:text=ESA%20operates%20on%20the%20basis,equivalent%20to%20each%20country's%20contribution.">geographical return policy</a>, and appear to only launch on non-european rockets <a href="https://spacenews.com/europe-considers-launching-copernicus-satellite-on-falcon-9/">begrudingly</a>. With the commercialization of space flight this paradigm that has been present since the V2 will go away in favour of <a href="https://en.wikipedia.org/wiki/Falcon_9">cheaper and more reliable</a> commercial rockets.

The remaining 13 government/military launches were all done for US customers by purchasing a launch on a commercial provider's rocket. This method opens competition among launch providers to provide the best service. 

Launches (Rocket, Customer):
1. Electron - NASA
1. Electron - USSF
2. Electron - USSF
3. Electron - USSF
4. Electron - USSF
5. LauncherOne - USSF
6. Electron - USSF
7. Rocket 3 - USSF
8. Electron - NASA Capstone
9. LauncherOne - USSF
10. Electron - USSF
11. Electron - USSF
12. Alpha - Lockheed Martin

The US Military almost exclusively launches its satellites on dedicated launches. This is to maintain national security by having tight control over who has access to the satellite. The requirement for dedicated launch means these satellites cannot be launched on rideshare missions and will continue to be a large part of the small satellite launch market even when ridesharing & kick stages offer significant cost savings.

The NASA Capstone mission is not beholden to the same anti-espionage requirements. The reason it had a dedicated launch was Electron's ability to provide the Photon satellite bus / kick stage to reach a trajectory that passes the Moon. Even though a kick stage was used, this mission is not addressable by a rideshare mission because launching to the Moon requires the satellite to be in the same orbital plane as the moon and no rideshare missions have ever gone to this orbit.

### <b>Cost Estimates</b>

Determining the price of a dedicated small satellite launch is straightforward as we can use the cost of an Electron launch, ~$7M.

The cost of a rideshare mission can be derived from what SpaceX charges for Transporter missions. They currently charge ~$5,500 / kg for a satellite on a transporter mission. The average mass of the payloads launched on Electron is 116kg. Multiplying these two numbers gives $638,000 as the cost of launching on a rideshare mission. This is 11x cheaper than a dedicated launch.

Determining the price of using a kick stage on a rideshare mission is more difficult because there are no publicly available prices for this service. We can estimate the price of launch by using Impulse Space's Mira kick stage. Mira weighs 250kg and can carry up to 300kg of payload while having 500m/s of delta-v. Using the average electron payload mass, the total mass of the kick stage and satellite is 366kg. This costs $2M to launch on a SpaceX Transporter mission, I will assume $2.5M because this is one of the larger payloads on a Transporter mission and there may be extra considerations around payload volume. 

The cost of manufacturing the kick stage itself is unknown, but we can use Rocket Lab's Photon as an analogue. The Electron and Photon for NASA's Capstone mission cost <a href="https://www.space.com/rocket-lab-launches-first-photon-satellite.html">$10M in total</a>. We already know the cost of an Electron launch is ~$7m, so Rocket Lab appears to have charged an extra $3M for Photon.

This gives a total of $5.5M for a rideshare + kickstage launch vs. $7M for a dedicated launch. 

Furthermore, there is more room for cost declines in using rideshare + kick stages compared to dedicated launches. SpaceX's margins on Falcon 9 are >50% as launch costs are <a href="https://youtu.be/DxREm3s1scA?si=ejdsalwfZkgcCpZG&t=2360">~$20M</a> and they make <a href="https://payloadspace.com/estimating-spacexs-2023-revenue/">~$45M</a> from Transporter missions. Rocket Lab's margins are <a href="https://twitter.com/daveginvesting/status/1702681576050426034">~22%</a> on Electron. There is room for improvement in Rocket Lab's margins as they reuse boosters and increase scale, however, they are currently <a herf="https://www.theverge.com/2022/5/2/23032354/rocket-lab-helicopter-catch-electron-reuse">planning to reuse only ~50%</a> of boosters and only increase scale ~2x. 

This shows that the gap in cost between rideshare + kick stages mission and dedicated launches will stay at around $1M - $2M for the foreseeable future. The incentive for a payload to use a dedicated launch when a rideshare mission is possible appears to only be schedule considerations.

### <b>Summary</b>

Around 20% of the existing dedicated small satellite launch market will go away with the increased cadence of rideshare missions and kick stages becoming a viable option. The market for dedicated launch has already been distilled through SpaceX transporter missions, with an increase in cadence and kick stages further distillation will occur. If rideshare missions and kick stages were ubiquitous in the past, I estimate ~50% of the small satellites launched in the previous 6 years that had the choice between rideshare/kick stage vs. dedicated launch would have flown on rideshare missions. 

The 30% of satellites that require unique orbital planes will remain part of the dedicated launch market forever. It is too difficult to significantly change the orbital plane of a satellite even with a large kick stage, so, this market is only addressable by dedicated launch. This can already be shown through Rocket Labs' launch manifest. >90% of their planned launches for 2024 and 2025 fall into this category.

Military launches make up another 30% of the dedicated small satellite launch market. National security requirements preclude these launches from occuring on rideshare missions so this segment will not be threatened.

Government-funded launch vehicles make up the remaining 20%. These programs exist because of political incentives so it is difficult to determine if they will continue into the future or not. However, with the push for commercialization in space flight, it is possible this market will slowly evaporate as privately funded alternatives arise in their respective countries. This segment is not addressable by commercial providers, so it is not of major interest.

The dedicated small satellite launch market has already faced tremendous competition from rideshare missions. Since its inception, SpaceX's Transporter program has launched about 785 satellites. Electron has launched about 180 satellites. Rideshare missions already have 80% of the total small satellite launch market. Dedicated launch is a somewhat niche service for unique satellite constellations and government customers.

Around 30% of the market for dedicated small satellite launches addressable by commercial providers will disappear with better alternatives arising. However, this does not translate into a fall in the quantitative demand. Rocket Lab's launch cadence is planned to increase from 9 to 20 this year. This 200% growth in a single year will offset the decline from rideshare missions. The rise of small satellite constellations and economically productive uses of space will drive substantial growth in the dedicated small satellite launch market even taking into account the decline from rideshare missions kick stages.