---
layout: post
title: "What SpaceX's Bandwagon Missions Mean for Small Rockets"
categories: Space
author:
 - Christopher Kalitin
---
<head>
    <meta property="og:image" content="{{site.url}}/assets/images//stoke-nova-perfect/hop.jpg">
</head>

![Image description]({{site.url}}/assets/images/covers/spacex-bandwagon-mission.jpg){: height="600" .align-center}

SpaceX's Bandwagon-1 rideshare mission launched yesterday and I was busy speedrunning a unit of Chemistry 11 in 8 hours to write this blog post before the launch. Regardless, this is the first of SpaceX's rideshare missions to low inclination orbits. The Bandwagon-1 mission will expand the range of payloads that can be launched on a Falcon 9 rideshare mission and will continue the trend of making dedicated small satellite launch a smaller niche of the market. While dedicated small satellite launch will lose market share, the overall market will increase and provide more satellites that must be launched.

Three months ago I wrote this <a href="https://ckalitin.github.io/technology/2024/02/10/smallsats-vs-rideshare.html">blog post</a> on the dedicated small sat launch market. The Bandwagon missions will have significant implications on the conclusions I came to. Specifically, many of the satellites I listed as requiring a dedicated small sat launch in fact do not.

### <b>Payloads Unsuited for Dedicated Launch</b>

Bandwagon-1 launched 11 satellites, from <a href="https://www.spacex.com/launches/mission/?missionId=bandwagon-1">SpaceX's website</a>: "On board this mission are 11 spacecraft including KOREA's 425Sat, HawkEye 360’s Clusters 8 & 9, Tyvak International’s CENTAURI-6, iQPS’s QPS-SAR-7 TSUKUYOMI-II, Capella Space’s Capella-14, and Tata Advanced Systems Limited’s TSAT-1A."

Two of the payloads are very well-suited to a rideshare mission:
1. CENTAURI-6   - Internet of Things connectivity satellite, 12kg
2. TSAT-1A      - Tech demo for Earth Observation, 42kg

The <a href="https://space.skyrocket.de/doc_sdat/centauri-6.htm">CENTAURI-6</a> satellite is a 35kg, 6U cubesat that provides connectivity for relatively low-bandwidth applications. The maker of the satellite, Fleet Space Technologies, plans on launching a constellation of 140 satellites. Previous prototypes have flown on a PSLV, Electron rideshare, and three times on Falcon 9 rideshare missions. Because these are prototypes, they do not require exact orbits like a full constellation would. SpaceX Transporter missions are ~10x cheaper per kg than a dedicated launch, so it makes sense to launch these prototypes on a rideshare mission. In the future, when the constellation is ready to be deployed, they will likely use dedicated launches to get full coverage of the Earth.

The TSAT-1A satellite weighs 42kg and is a tech demo for Earth Observation from India. This is a demonstration satellite and does not require exact orbits. Given the fast that rideshare is 10x cheaper than a dedicated launch, it's clear why these didn't launch on an electron. The default for small satellites is to use a rideshare mission, they only use dedicated launches if it is required for their mission or if they have schedule constraints.

### <b>Payloads That Could've Launched on an SLV</b>

1. Korea 425                - Korean Military SAR satellite, 800kg
2. HawkEye 360 Satellites   - Space Situational Awareness Satellites, 25kg each
3. QPS-SAR-7 TSUKUYOMI-II   - SAR satellite, 120kg
4. Cappela 14               - Earth Observation Satellite, ~100kg

The Korea 425 Satellite is the second in a line of Synthetic Aperature Radar (SAR) satellites for the Korean military. It's mass is 800kg which is outside the range of many small launch vehicles like Electron, but Firefly's Alpha or ABL's RS1 could have launched it assuming the payload fairing are large enough. In the future, if the Korean military wants to position their satellites to optimize coverage of the Earth, they may need to launch on a dedicated mission. 

Last year, on December 1st 2023, the first Korea 425 satellite was launched on a Falcon 9 mission along with 23 small satellites as rideshare payloads. Because it was the primary payload on the mission it was able to dictate the orbit and inclination of the mission. This may have occured on Bandwagon-1 as well because the Korea 425 satellite is the most massive payload on the mission and the first one listed by SpaceX.

When 1-ton class launch vehicles start launching regularly, it may be more cost-effective to launch these 1-ton class satellites on those vehicles. However, this time the Korean military chose to launch on a Falcon 9 rideshare mission likely because RS1 and Alpha were not an option at the time.

Six Hawk satellites were launched on this mission. In my previous blog post on the small satellite launch market I categorized these as Earth Observation when in fact they are Space Situational Awareness satellites. They collect RF signal data in space and sell this data to commercial customers. Previously they have flown on an Electron and on six Transporter missions. These satellites have been mostly indifferent to inclination and their exact orbit, but as they scale the constellation they may perfer dedicated launches to get better coverage of LEO. They have 2 launches coming up on Electron.

The trade-off between frequent coverage of the Earth and cost is clear in the case of iQPS. Electron has launched many Earth Observation satellites. This is their primary market because many constellations seek to image parts of the Earth as frequently as possible. SpaceX calls this a <a href="https://x.com/SpaceX/status/1777111200624791583">"high revisit rate"</a>. The <a href="https://space.skyrocket.de/doc_sdat/qps-sar-3.htm">QPS-SAR-7 TSUKUYOMI-II</a> satellite is a Synthetic Aperature Radar satellite and iQPS has previously launched these satellites on a dedicated Electron mission as well as a rideshare missions on Epsilon and Falcon 9. Because of the relatively small size of the constellation - they're on their 7th satellite - they don't need dedicated launches to optimize their coverage of the Earth as opposed to a constellation like Starlink that must get very high coverage.

Capella has previously launched satellites on both Electron and Falcon 9. They currently have 7 satellites in orbit so they fall into the category of constellations small enoguh that they don't require dedicated launches to achieve optimal coverage of the Earth. 

3. Capella. They previously flew on Electron and Transporter missions, rideshare on starlink flight too, completely missed the mark on this one.
The electron flights were to lower inclinations, possibly to cover more important areas of the Earth's surface, Didn't target lowest possible inclination from virginia
Now these bandwagon missions may fit their requirements, better to be on lower inclinations
Again, small number of satellites and no requirement for full global coverage at lowest possible time between passes
https://en.wikipedia.org/wiki/Capella_Space

## <b>Notes</b>

New New Structure:
1. Intro (what it is, reflecting on my past predictions)
2. Payloads that won't launch on dedicated small launches
3. Payloads that could launch on dedicated launches
4. Go into constellations that don't need exact orbital planes and why I was wrong
5. Electron Manifest
6. Future of the market (Rideshare is cheaper and a commercial inevitability (SpaceX isn't malicious), earth coverage constellations, other constellations, expediency)

* Compare payloads to earlier Transporter missions
* Compare to small sat missions
* Predict which small sat payloads will fly on these types of missions
* Long-term outlook on small launch

More notes:
* The reason I was off the mark was only looking at electron payloads, not payloads in general - Expand to talk about Rocket Lab "analysts" that focus too much on the company and too little on the overall market, this is a surefire way to be wrong, bad strats
* I didn't fully appriciate how many small constellations don't need exact orbits (Spire, Capella, Hawk, Blacksky somewhat)
* Constellations that don't need exact orbits examples: (NASA Prefire (Tropics too), Strix), large sats like Strix or constellations that need regular coverage like Tropics

Electron Manifest:
Wikipedia: https://nextspaceflight.com/launches/rockets/upcoming/10/
Scott O: https://x.com/scotto2050/status/1774467309987569689

1. NRO              - National Security Payload
2. NASA / KAIST     - KAIST is Earth Obv. tech demo, NASA ACES is a solar sail demo
3. HawkEye-2        - RF signal location
4. Kineis-1         - IoT connectivity
5. BlackSky-7       - Earth Observation
6. NorthStar-2      - Space Situational Awareness
7. PREFIRE-1
8. PREFIRE-2
9. Kineis-2
10. Kineis-3
11. Winnebago-2

Peter Beck, they want to do rideshare, "Never going to be as cheap as rideshare", "Our vehicle is more expensive and we don't try to compete with rideshare", 47:50: https://mainenginecutoff.com/podcast/155
NorthStar-2: https://spacenews.com/electron-launches-northstar-satellites-in-latest-recovery-test/
NorthStar: 16U cubesats built by Spire, Space Situational Awareness, tracking objects as small as 5cm in LEO, "Four of a Kind" previous electron launch that was slated for LauncherOne, Small constellation that needs full coverage, "NorthStar, which raised $15 million in December and $105 million overall, says that when the 12 satellites are in service they will be able to monitor 60% of the sky at any given time, increasing to 100% when combined with other sensors."

How does this new contract fit into it?
https://spacenews.com/rocket-lab-wins-14-4-million-contract-to-launch-space-test-program-experiment/
"“DiskSat will demonstrate sustained VLEO (very low earth orbit) flight and test a unique, 40-inch diameter, disk-shaped satellite bus that is designed to increase on-orbit persistence,” the Space Systems Command said. "

