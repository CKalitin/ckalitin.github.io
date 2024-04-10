---
layout: post
title: "What SpaceX's Bandwagon Missions Mean for Small Rockets"
categories: Space
author:
 - Christopher Kalitin
---
<head>
    <meta property="og:image" content="{{site.url}}/assets/images/covers/spacex-bandwagon-mission.jpg">
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

Capella has previously launched satellites on both Electron and Falcon 9. They currently have 7 satellites in orbit so they fall into the category of constellations small enough that they don't require dedicated launches to achieve optimal coverage of the Earth. The likely reason for Capella launching on both Electron and Falcon 9 is likely schedule. They may want to reasonably space out their satellites - hence launching one at a time - but also want to launch many. So, a few Transporter missions a year is not enough. 

The advantage of Bandwagon missions over Transporter can be seen when comparing the inclinations of Capella's dedicated Electron missions vs. the Falcon 9 missions. The Capella Electron launches had an <a href="https://en.wikipedia.org/wiki/Capella_Space">inclination of ~45 degrees</a> while Transporter is around 95 degrees. The lower inclination means the satellites spend less time at the poles and more time over economially interesting areas of the Earth. 

### <b>Analysing Electron's Manifest</b>

There are a couple sources for Electron's 2024 manifest. Many of these are outdated as the manifest has changed since they were published. The most up-to-date source I've found is <a href="https://x.com/scotto2050/status/1774467309987569689">Scott O's list</a>, even better than <a href="https://nextspaceflight.com/launches/rockets/upcoming/10/">Next Space Flight's</a>.

![Image description]({{site.url}}/assets/images/spacex-bandwagon-mission/Scott-O-Manifest.jpeg){: height="500" .align-center}

In the previous secitons I laid out the advantages of Transporter / Bandwagon missions. Both are lower cost and Bandwagon gives a more ideal orbit for many payloads because of the <a href="https://x.com/SpaceX/status/1777111200624791583">higher revisit rates</a>. Now these advantages can be used as a framework for analysing which types of payloads on Electrons manifest may be at risk. Not the payloads themselves, but the general types of payloads.

The first launch on the list, NROL-199 (NROL-123?) "Live and Let Fly", was a US military launch. The military uses dedicated launch because of security reasons with payloads and this payload may need an exact orbit. From <a href="https://planet4589.org/space/gcat/data/cat/satcat.html">Jonathan McDowell's data</a> it's not clear the final orbit the satellite was deployed into (COSPAR ID: 2024-053A). The estimated orbit is 500km at 48 degrees. 

The NASA / KAIST (Korea Advanced Institute of Science and Technology) rideshare mission is going to a specific orbit. First, KAIST's NEONSAT-1 will be deployed in a 500km orbit and then the Photon Kick Stage will be used to deploy ACS3 - a solar sail tech demo satellite - to a 1000km orbit. From the mission profile, it seems the ACS3 satellite is the primary payload. The KAIST satellite may be launching as a rideshare payloads on an Electron due to schedule constraints, while the ACS3 satellite requires a dedicated launch for a specific orbit. Kick stages like Helios's Mira will made it possible to launch these payloads on Medium-lift rideshare missions like Transporter. In the cost estimates section of my <a href="https://ckalitin.github.io/technology/2024/02/10/smallsats-vs-rideshare.html">previous blog post</a> I point out how this can be much cheaper than a dedicated launch.

NASA's PREFIRE launches are an excellent example of the perfect payloads for Electron. The PREFIRE-1 and PREFIRE-2 satellites are Earth Observation satellites that will be deployed to a polar orbit to study the Earth's poles. Like NASA's earlier TROPICS launches, these satellites require specific orbital planes to optimally cover the Earth. This can't be done on a rideshare mission unless you are the primary payload, like the first launch of Korea 425. This is the type of launch that will continue to be done on dedicated small launch vehicles.

The remaining payloads on Electron's manifest can be put into two categories. First, payloads that are part of relatively small constellations that don't require perfect seperation of orbital planes. Second, payloads that much prefer unique orbital planes which can't be achieved on rideshare missions.

Both the HawkEye 360 and BlackSky have launched on both rideshare and dedicated launches in the past. Because of the significant cost savings over dedicated launches, they may choose to launch on Transporter or Bandwagon missions in the future, as they have in the past. Particularly Bandwagon in the cases of these two companies as they both benefit from lower inclinations. However, as they scale their constellations the benefit of unique orbital planes for each group of constellation satellites starts to outweigh the cost savings of rideshare.

Kineis and NorthStar are planning to start with large constellations. They aren't quite following the exact same path of previous satellite constellation companies like Capella which began with many test satellites. Right off the bat they've booked 8 Electron launches between them and may continue to book more dedicated launches as they scale their constellations. This approach allows a faster ramp to profitability. For some, this approach was not as possible in the past because of the youth of the small launch market. For example, when Capella was launching their first few satellites Electron only had a couple of launches and the industry had much less experience in manufacturing reliable small satellites. Like PREFIRE, these small satellite consetllations are the type of payloads that are very well-suited to dedicated small launch vehicles.

Just yesterday Rocket Lab signed a contract to <a href="https://spacenews.com/rocket-lab-wins-14-4-million-contract-to-launch-space-test-program-experiment/">launch a US Space Force payload to a very low Earth Orbit</a>. “DiskSat will demonstrate sustained VLEO (very low earth orbit) flight and test a unique, 40-inch diameter, disk-shaped satellite bus that is designed to increase on-orbit persistence,” the Space Systems Command said. This is a unique payload that requires a dedicated launch and it's where Electron shines. In the future this may be addressable by a kick stage like Mira on a rideshare mission, but for now it requires a dedicated launch.

### <b>Outlook on the Small Satellite Launch Market</b>

In my <a href="https://ckalitin.github.io/technology/2024/02/10/smallsats-vs-rideshare.html">Analysing the Dedicated Small Sat Launch Market</a> blog post I came to a slightly incorrect conclusion. This error came from looking too closely at Rocket Lab and not the market as a whole as I did not look closely enough at the rideshare market to see how many small constellation satellites don't need exact orbits. My conclusion was that almost all small satellite constellations would require dedicated launches. This is slightly incorrect as we can see from the HawkEye, BlackSky, etc. launches on rideshare missions. There is an advantage from launching on dedicated missions - as is seen in Kineis and NorthStar's approaches - and with the growth of constellations like BlackSky there is a push for more dedicated launches. I came to the right conclusion, but with incorrect reasoning. 

Rideshare inevitably would take significant market share from dedicated launch vehicles. The cost savings are too significant to ignore. <a href="https://x.com/CKalitin/status/1765884501262233975">Some think</a> that SpaceX is maliciously trying to take market share from Rocket Lab and other small launch providers. This is not the case as rideshare is a commercial inevitability. SpaceX is simply providing a service that is cheaper and more convenient for many small satellite operators. 

Rocket Lab does not compete with SpaceX on small satellites. In a conversation with Anthony Colangelo on the MECO podcast (check it out!) several years ago Peter Beck said, "[Dedicated Launch is] never going to be as cheap as rideshare" and "Our vehicle is more expensive and we don't try to compete with rideshare" (<a href="https://mainenginecutoff.com/podcast/155">47:50</a>).

From looking at Electron manifest we've seen that around 10-20% of payloads will be addressable by rideshare missions in the future. This is offset by the growing small satellite constellations. Rideshare allows for a lower barrier to entry for satellite constellations, which often evolve and expand to needing dedicated launches. There is a significant market for dedicated small launch vehicles even while competition from MLV rideshare grows. Over the next decade, rideshare will not be the largest threat to small launch vehicles. <a href="https://ckalitin.github.io/technology/2024/02/26/stoke-nova-perfect.html">Vehicles like Nova</a> will be the largest threat in my opinion as they will be able to have high cadence because many different segments are available to them which allows lower costs. Just like Falcon 9, it will be a side effect that they destroy the partially reusable small launch market.
