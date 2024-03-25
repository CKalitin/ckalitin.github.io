---
layout: post
title: "Stoke's Nova is a Perfectly Sized Rocket"
categories: Technology
author:
 - Christopher Kalitin
---
<head>
    <meta property="og:image" content="{{site.url}}/assets/images//stoke-nova-perfect/hop.jpg">
</head>

![Image description]({{site.url}}/assets/images/stoke-nova-perfect/hop.jpg){: width="600" .align-center}

This blog post is 2000 words too long, I added tl;drs to every section.

At first glance, Stoke's Nova appears to be an immensely exciting R&D project without much commercial appeal. In a world where the currently most successful rocket (and throughout history) is a 20-ton class partially reusable launch vehicle, it is difficult to see exactly how such a comparatively small rocket will compete. Data is the answer to all your problems, so I've answered all my questions with my <a href="https://docs.google.com/spreadsheets/d/1VOgRbnAsQZdGIPoemRj5ApSLk_jxGanNliWEPnBB3p4/edit?usp=sharing">dataset</a> on successful western orbital launches from 2018-2023 inclusive and will convey all insights in this blog post. My primary goal is to examine Nova from a demand perspective.

Stoke's Nova rocket is perfectly sized to compete for existing satellite launches and future constellations. It can compete for LEO satellite launches as the average mass of customer payloads on Falcon 9 is 3.7 tons (ex. Dragon). Full reusability will allow it to compete against Electon and launch constellations even with its 5t LEO capacity. The launch cost must be several times lower than competitors and reusability allows for this. Finally, the fully reusable architecture lends itself to becoming a cargo/crew capsule, refilling in orbit to address high energy orbits and potentially Moon/Mars landings.

### <b>Full Reusability Makes Constellations Addressable</b>

![Image description]({{site.url}}/assets/images/stoke-nova-perfect/Western-Commercial-Launches-By-Type.png){: width="600" .align-center}

* Constellations will be the biggest market in the future.
* Legacy GEO is a stagnant, comparitively small market.
* Responsiveness and low cost per launch per satellite are the primary considerations for launching constellations.
* Constellations can be launched on any size rocket as long as the above point is met.
* Full reusability allows for higher cadence and lower cost, even better than partial reusability even at the 5t class.

Through following current trends in the launch market it is clear that launching constellations is the market that almost all new rockets should be optimized for. 67% of commercial launches in the last 6 years were for constellations. 80% of these launches were Starlink while the remaining is comprised mainly of Iridium and OneWeb. With numerous upcoming constellations - mainly Kuiper - it is clear this market will experience much more rapid growth than other payload types.

Excluding Starlink, the market for commercial launches is shared in equal thirds between Constellations, GEO Communications Satellites, and Small Satellite launches. Legacy GEO Communications satellites are a fairly static market and have been for ~20 years at around 10 launches per year. Small satellites are experiencing exponential growth, but the TAM for rideshare missions is relatively low. This leaves constellations as the massive market that is exponentially growing.

The primary considerations behind launching constellations are responsiveness and cost per launch per satellite. Constellations can be launched on rockets of almost any size because they are made up of a large number of relatively small satellites. To illustrate this, a 20-ton class medium-lift launch vehicle is not required to launch constellations because a 5-ton class rocket can be competitive if the cost is 4x less and the cadence is 4x more than the 20-ton class vehicle. Furthermore, the requirement for an increased number of launches potentially gives advantages in responsiveness.

Stoke's Nova is designed to launch about 5 tons (<a href="https://arstechnica.com/space/2023/09/stoke-space-hops-its-upper-stage-leaping-toward-a-fully-reusable-rocket/">7 according to Eric Berger</a>). At this scale, to be competitive with Falcon 9 it must be 4x cheaper per launch which would cost $15M for the customer or <a href="https://youtu.be/DxREm3s1scA?si=ejdsalwfZkgcCpZG&t=2362">~$4M marginal launch cost</a>. As we've seen with Falcon 9, reusability has dramatically decreased launch costs to the point where the majority of the cost of a rocket is no longer in the first stage. Second-stage reusability will drive down costs even further and a small launch on the scale of Stoke's Nova is well suited to achieving a high launch cadence which will accelerate the process of decreasing costs.

### <b>Nova can Launch Most Payloads</b>

![Image description]({{site.url}}/assets/images/stoke-nova-perfect/Western-Launches-By-Orbit-By-Mass.png){: width="600" .align-center}

* 60% of commercial GEO satellites are below 5t - this is addressable with refilling in orbit
* Average F9 payloads (ex. Dragon) is 3.7 tons.
* SpaceX transporter missions are ~5 tons, volume limited. Nova is well suited for these missions.
* Dedicated small sat launch can be done on Nova due to full reusability.
* Nova could launch 28 of the last 32 Falcon 9 LEO customer launches (ex. Dragon).
* If stretched to 7t LEO capacity, Nova meets all but 1 NSSL Phase 2 target orbits.

Launching legacy geostationary communications satellites has very different considerations from launching constellations. These launches require immense mass to GTO capability and prefer high-energy optimized architectures like Ariane 5 or Vulcan. However, ~60% of the commercial GEO satellites launched in the last 6 years were under 5 tons. Because <a href="https://youtu.be/fcLuugmHV90?si=8EKMazIYyfUyPrm2">refilling in orbit is planned for Nova</a>, it will essentially be able to put its entire LEO capacity directly in a geostationary orbit and potentially return the second stage (Assuming 6000m/s+ delta-v in the upper stage similar to Starship). Because the vehicle is fully reusable this may cost less than a dedicated Falcon 9 launch.

The average mass of Falcon 9 customer LEO launches excluding Dragon is 3.7 tons. Between 2018 and 2023 inclusive, 32 of these launches occurred and only 4 of them were over 5 tons. This means Nova could have launched 28 of the previous 32 Falcon 9 customer launches assuming there were no further considerations such as payload volume. Because Falcon 9 is oversized for the majority of LEO customer payloads, Nova is well-positioned to compete in this market.

Small satellite rideshare missions are well suited for Nova given their low mass requirements and flexibility. For example, SpaceX Transporter missions are often below 5 tons, another example of Falcon 9 being oversized for customer payloads. The limiting factor in Nova being able to launch these missions may be <a href="https://i0.wp.com/spacenews.com/wp-content/uploads/2023/06/transporter8-stack.jpg?resize=661%2C1024&ssl=1">payload volume</a>. It is possible Nova's fairing is not large enough to fit the number of satellites Falcon 9 can. Regardless, this is solved by launching fewer satellites at once. Rideshare missions are flexible enough that they can launch on nearly any vehicle and the potential for extremely low cost with Nova makes it well-suited for these launches.

Small satellite rideshare missions are not the only small sat missions addressable by Nova. Because full reusability allows it to achieve very low costs, it will be economical for small satellites to launch on a dedicated Nova. Stoke will have to decrease costs below where Electron is today - $7M - and increase cadence. If second-stage reuse is achieved the first goal is possible and because Nova has many more market segments available than Electron, a higher cadence can be achieved.

All 4 of the Falcon 9 LEO customer launches that exceeded Nova's 5-ton capacity were for the US Military. There were two NROL launches and two SDA launches. Because of the classified nature of these payloads, their exact mass is unknown, so some of them may be within Nova's 5-ton payload capacity. Even so, to launch these payloads Nova would have to be certified by the US Military to launch classified payloads under NSSL Lane 2 which is unlikely given competition from larger and more established rockets. 

Nova may be able to achieve all but one of the <a href="https://en.wikipedia.org/wiki/National_Security_Space_Launch#2018_to_2020s">NSSL Phase 2 target orbits</a> if the vehicle was stretched to a 7-ton LEO capacity. These orbits are mainly high-energy and require 4-7 tons of payload capacity. For example, the GEO 2 target orbit requires 6.6 tons direct to GEO, and MEO Direct 1 requires 5.3 tons direct to an 18200km orbit of Earth. The only required orbit Nova can't complete is Polar 2 which requires 17 tons to a 830 km polar orbit of Earth. This shows how in-space refilling is a feature that opens up a lot of capability and how Nova could compete for NSSL Phase 3 Lane 1 payloads.

### <b>Crew / Cargo Capsule and Lunar Landing</b>

* Nova has teased in-orbit refilling and Moon landings.
* Nova has enough delta-v for a Moon landing with a full 5-ton payload.
* Testing in LEO allows for higher reliability and lower cost.
* Nova is slightly too small to reasonably launch crew, but a cargo capsule is possible.

Nova's upper stage is a fully reusable orbital reentry vehicle capable of propulsive landing. Previous vehicles capable of orbital reentry have all carried <a href="https://en.wikipedia.org/wiki/SpaceX_Dragon_2">crew</a> or <a href="https://www.space.com/varda-in-space-manufacturing-capsule-reentry-photos">cargo</a> and orbital vehicles capable of propulsive landing have all been Moon/Mars landers.

In Stoke Space's <a href="https://youtu.be/fcLuugmHV90?si=C0-daIiAsqi6o4d0">promotional video</a> 4 months ago they teased in-orbit refilling and Moon landings. As mentioned above, in-orbit refilling allows them to increase payload capacity beyond low-earth orbit. This also allows them to get enough delta-v in low Earth orbit to achieve a lunar landing. A lunar landing from LEO requires ~5,700 m/s of delta-v. If Nova's upper stage has a similar delta-v to Starship (6000m/s), this is possible with a full 5-ton payload. Even if delta-v is lower than 6000m/s or significant extra mass is required to achieve a lunar landing, the payload capacity to the lunar surface will be greater than a ton. Currently, the largest planned robotic lunar lander is Astrobotic's Griffin which is capable of delivering 625kg to the lunar surface. A Nova-based lunar lander could deliver more payload to the Lunar surface for a lower overall cost.

Lunar landings of lower cost and higher reliability are made possible by testing the landing system on Earth dozens or hundreds of times before attempting a Lunar landing. Engines and maneuvering systems will be tested many times before a lunar landing and this makes a failure when attempting to land far less likely. For example, failures like Peregrine, Luna 25, or Beresheet would not have occurred on a sufficiently tested vehicle. Lunar-specific features cannot be tested on Earth such as communications or landing software and these are among the greatest causes for failure. A lunar landing with Nova remains a significant technological challenge, but a vehicle tested on Earth or in Earth orbit hundreds of times has a far higher chance of success and can be cheaper.

Nova is an undersized rocket for launching crew. For example, Soyuz is one of the small crew capsules currently flying and it weighs 7 tons. This is beyond Nova's 5-ton LEO capacity and makes it very difficult to create a crew capsule even if it is integrated into an existing spacecraft with maneuvering capabilities. A Cargo capsule is more reasonable, but it is unlikely that there will be sufficient demand for Stoke Space to pursue this. In his <a href="https://www.youtube.com/live/P_S350j1HQA?si=DqnatYXVLB-qmTNn&t=4182">interview</a> with NASASpaceflight, Andy Lapsa - Stoke Space CEO and cofounder - was asked about crew rating Nova and said this: "I actually expect that we'll see a bimodal distribution in the optimal size of the vehicles. One of them is designed for satellites and one of them is probably bigger designed for humans with life \[support\] systems."

### <b>Small Size if a Feature</b>

* High cadence drivse down costs and allows for rapid iteration.
* Nova can address almost all payloads, this allows for high flight rate.
* Because it's smaller it requires more launches to launch constellations. This increases cadence.

The fully reusable architecture allows for a high flight rate which can bring down the cost per launch and allows for rapid iteration. 

Flight rate is one of the primary factors behind falling launch costs apart from vehicle architecture. Launching multiple times as much as your competitors with a smaller fully-reusable vehicle allows for an accelerated process of lowering costs. Contrast this with Neutron, which will likely launch less than Falcon 9 with a second stage of <a href="https://x.com/BellikOzan/status/1741535515759857816?s=20">similar complexity</a>. It will be much harder for Rocket Lab to compete with Falcon 9 than for Stoke.

Launching constellations would provide an excellent opportunity for Stoke as they could substantially increase launch cadence as Starlink did for Falcon 9. Constellation satellites are payloads that can accept more risk than other more expensive, one-off payloads. This means they can be launched on riskier life-leading boosters and upper stages. For years the life-leading Falcon 9 boosters only launched Starlink satellites. After years of testing and iteration SpaceX's customers became comfortable with launching on these boosters. SpaceX's current life-leading booster, B1060, recently launched the IM-1 lunar landing mission on its 18th flight. 

SpaceX iterated on Falcon 9's design for years and refined it through the process of launching Starlink satellites on life-leading boosters. Thus far, Stoke has embraced iteration and hardware-rich development through the development of Nova's upper stage/engine and the first stage engines. Through launching constellations on many more individual launches than competitors, Stoke will be able to push hardware to its limits and refine the vehicle through rapid iteration.

### <b>Competing Against Partially-Reusable Launch Vehicles</b>

![Image description]({{site.url}}/assets/images/stoke-nova-perfect/Falcon-9-Customer-Launches.png){: width="600" .align-center}

* Neutron and Nova have lots of overlap in addressable payloads (>90%).
* Larger Rockets (New Glenn, etc.) have less overlap because of GEO sats, Moon missions, etc.

Vehicles like Nova are the perfect competition against partially reusable medium launch vehicles. For example, Nova's scale makes it very well suited to competing with Neutron. First, the average mass of customer payloads on Falcon 9 is 3.7t (excluding Dragon). This is addressable both by Nova and Neutron. Second, the next largest market for Falcon 9 is GEO communications satellites. Neutron GTO capacity is rumoured to be around 3-5 tons. Because Nova is planned to be refilled in orbit, it has a comparable GTO capacity to Neutron. Finally, both rockets will compete for launching constellations and Nova may cost less than Neutron because of full reusability. 

Almost every payload that can be launched on Neutron can be launched on Nova. The major exception is LEO satellites that are >5 tons. This is a relatively small market as it is mostly US Military payloads. NSSL Lane 2 payloads are mainly reserved for medium-lift launch vehicles. It is unlikely that Stoke or Neutron will be competitive against SpaceX and ULA here without more changes in NSSL policy.

Heavy-lift rockets such as New Glenn and Terran R are much harder to compete against with a vehicle on the scale of Nova. Larger rockets can pursue unique missions and are better suited for heavy GEO satellites and massive constellations. For example, Nova could not compete for <a href="https://en.wikipedia.org/wiki/Blue_Moon_(spacecraft)">HLS</a> as a vehicle on the scale of New Glenn or larger is required. Furthermore, for extremely large constellations such as Starlink or Kuiper, a larger rocket is better suited due to the sheer amount of satellites needed. Nova will need to launch almost every day to compete with these rockets on Starlink-sized constellations.

### <b>Competing Against Fully-Reusable Launch Vehicles</b>

* Competing against partially-reusable launch vehicles is easy.
* Small constellations and small satellites will become its niche, like Electron today.

Stoke's Nova is clearly an excellent architecture to compete against partially-reusable launch vehicles, but it is far less clear Stoke's position against larger fully and rapidly reusable launch vehicles. In the next 10-20 years we will enter the paradigm of fully and rapidly reusable launch vehicles. It will not be just Starship and Nova, but every new rocket will be fully and rapidly reusable. When every major rocket is fully and rapidly reusable, Nova will not have all the benefits it will enjoy against partially reusable launch vehicles over the next ten years.

Large constellations will most likely be launched on large rockets. The sheer number of launches required to put the same mass into orbit compared to a heavy-lift reusable rocket makes it unlikely that a Nova-sized vehicle will be able to compete. For example, Nova would have to be 30x cheaper than Starship to be competitive. When rockets enter an airline-like model cost per kilogram will become a more important factor and the larger scale of Starship will become more of a competitive advantage.

While large constellations will not be addressable by Nova, smaller constellations will be. All constellations require satellites to be launched into unique orbital planes. This can not be done on a single launch because of the immense fuel requirements for changing your orbital plane. This means each launch may not carry enough satellites to an orbital plane to be economical on a large fully reusable rocket. For example, each Iridium launch carried 10 satellites on each launch which weighed ~6.6t. This scale of constellation - or smaller like Planet Labs - is well suited for a Nova-sized vehicle.

Aside from constellations, Nova may become the best small sat launch. Its small size and full reusability will allow it to launch small satellites at a lower cost than any other vehicle, including Electron. Furthermore, it may not be economical to develop a smaller fully reusable small sat launcher due to the upfront development costs. Also, a rocket designed for only small satellites will not be able to launch constellations or 1-5 ton satellites, which are the majority of Falcon 9 LEO customer payloads. Even if a smaller rocket is >50% cheaper per launch, it will take a very high number of flights to amortize the development cost. In 5-10 years Nova may launch more small satellites than Electron.

In a world of fully and rapidly reusable rockets, Nova may be similar to Electron today. It will have a niche of payloads that are well suited for its size and cost. This includes small satellites, small constellations, and <5t satellites like those currently launching on Falcon 9.

### <b>Not Many Organizations Can Pursue Full Reusability</b>

* Most space companies are too conservative

Current and upcoming rockets that are aiming to launch constellations are all partially reusable medium/heavy lift launch vehicles (excluding Starship, I'll cover that later). A partially reusable rocket is the most reasonable thing for a slightly risk-averse company to do. For companies like Rocket Lab or ULA, it is very difficult to pursue a fully and rapidly reusable rocket because it is an unproven market and has never been done before. This makes it a very hard sell to investors. This is especially true when you consider the development cost of such a program: ~$250M for Neutron vs. ~$5B for Starship. 

It takes a level of audacity to push for such a program that will create its own market. SpaceX has done this again and again with Falcon 9, Starlink, and now with Starship & Mars. When existing stakeholders are not willing to take the risk, a more conservative approach must be taken that is less likely to succeed against a sufficiently capable competitor. We've seen this in the past with the SLS and other legacy launch companies like ULA.

A clear vision and path are required to pursue a fully and rapidly reusable rocket - along with immense amounts of capital. SpaceX achieved this under Elon Musk with his own fortune, NASA contracts, and venture capital. Stoke will follow a similar path, but with more funding from venture capital now that SpaceX has opened that door.

### <b>Conclusion & Predictions</b>

* Nova will compete against partially reusable launch vehicles very well.
* Nova will become a niche vehicle for small constellations and small satellites in the future.
* They might die, but a vehicle like Nova is perfectly sized.

A fully and rapidly reusable launch vehicle on the scale of Stoke's Nova is perfectly sized to compete against existing and under-development partially reusable launch vehicles. It is well suited to launch constellations, LEO satellites, small GEO satellites, and small satellites. If full reusability is achieved with Nova, it will take significant market share over the next 5-10 years. 

Over the next decade, we will start to enter the paradigm of fully and rapidly reusable rockets. These rockets will be able to launch all payloads at a lower cost than all existing vehicles and alleviate the current mass and volume limitations. The lower cost will allow for new markets to emerge and for a new paradigm of satellite design. K2 Space is already preparing for this by developing satellites that are very heavy and have a large volume. This increases launch costs but decreases the cost to build the satellite. There will come a point in the next 10-20 years when this becomes more economical than the current paradigm of satellite design.

Nova's market this decade will be very different than the next decade. Before we firmly enter the paradigm of fully and rapidly reusable rockets and have payloads well suited to it, Nova will be able to compete against partially reusable rockets. After we enter this new paradigm, Nova will go the way of Electron and become more of a niche vehicle.

It is possible that Stoke will die brutally like Astra before it achieves low cost and high cadence with Nova. This would be immensely unfortunate because Nova is the coolest rocket ever developed, tied with Starship. However, a vehicle like Nova will be developed in the future to adequately serve the <5t satellite market segment.
