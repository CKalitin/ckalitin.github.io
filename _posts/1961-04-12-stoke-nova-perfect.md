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

This is a demand analysis.

At first glance, Stoke's Nova appears to be an immensely exciting R&D project without much commercial appeal. In a world where the currently most successful rocket (and throughout history) is a 20 ton class partially reusable launch vehicle, it is difficult to see exactly how such a comparativly small rocket will compete. Data is the answer to all your problems, so I've answered all my questions with my <a href="https://docs.google.com/spreadsheets/d/1VOgRbnAsQZdGIPoemRj5ApSLk_jxGanNliWEPnBB3p4/edit?usp=sharing">dataset</a> on successful western orbital launches from 2018-2023 inclusive and will convey all insights in this blog post.

Stoke's Nova rocket is perfectly sized to compete for existing satellite launches and future constellations. It can compete for LEO satellite launches as the average mass of customer payloads on Falcon 9 is 4.4 tons (ex. Dragon). Furthermore, full reusability allows Nova to launch constellations even with its 5t LEO capacity. The launch cost must be several times lower than competitors and reusability allows for this. Finally, the fully reusable architecture lends itself to becoming a cargo/crew capsule and refilling in orbit to address high energy orbits and potentially Moon/Mars landings.

### <b>Notes</b>

1. Dedicated Small Sat Launch
2. NSSL
3. Constellations
4. High flight rate = lower costs
5. Commercial Payloads
6. Capsule (Crew / Cargo, mostly cargo)
7. Predictions
8. Stoke might die brutally (Astra)

Structure:
1. Opening (stoke can address almost all current market segments and full reusability matters, a rocket like Nova)
2. Existing LEO Satellites (4.4t)
3. Constellations (Fully Reusability)
4. GEO Communication Satellites (compete against F9+Helios)
4. Capsule (Cargo, slim chance of crew)
5. Moon Lander
6. NSSL capability (demonstrate power of refilling in orbit)

Structure V2:
1. Opening
2. Fully reusability allows addressing almost all markets (Constellations, Small Sats, GEO)
3. Future addressable markets on Nova platform (Capsule, Moon, NSSL)
4. Implications for existing rockets (No one is as smart as me) + Starship competition (economics)
5. Conclusion (work into above section?)

1. Current competition is partially reusable, (downrange vs. RTLS, ie. size)
2. Constellations can be launched on any size of rocket (Neutron Vs. New Glenn)
3. Nova is 4x smaller than F9, so will have to launch 4x+ cheaper, possible through full reusability

Structure V3:
1. Launching Constellations (launching more, but cheaper)
2. Small size is a feature (flight rate decreases cost, lower upfront development cost, full reusability required to achieve low cost eg. Firefly)
3. Competing against partially-reusable launch vehicles
4. Competing against fully-reusable launch vehicles
5. Stoke is a well suited organizations (SpaceX example, Rocket Lab might not have been able to do this)

### <b>Full Reusability Makes Constellations Addressable</b>

Through following current trends in the launch market it is clear that launching constellations is the market that almost all new rockets should be optimized for. 67% of commercial launches in the last 6 years were for constellations. 80% of these launches were Starlink while the remaining is comprised mainly of Iridium and OneWeb. With numerous upcoming constellations - mainly Kuiper - it is clear this market will experience much more rapid growth than other payload types.

Excluding Starlink, the market for commercial launches is shared in equal thirds between Constellations, GEO Communications Satellites, and Small Satellite launches. Legacy GEO Communications satellites are a fairly static market and have been for ~20 years at around 10 launches per year. Small satellites are experiencing exponential growth, but the TAM for rideshare missions is relatively low. This leaves constellations as the massive market that is exponentailly growing.

The primary considerations behind launching constellations are responsiveness and cost per launch per satellite. Constellations can be launched on rockets of almost any size because they are made up of a large number of relatively small satellites. To illustrate this, a 20 ton class mediun-lift launch vehicle is not required to launch constellations because 5 ton class rocket can be competitive if cost is 4x less and cadence is 4x more than the 20 ton class vehicle. Furthermore, the requirement for an increased number of launches potentially gives advantages in responsiveness.

Stoke's Nova is designed to launch about 5 tons (<a href="https://arstechnica.com/space/2023/09/stoke-space-hops-its-upper-stage-leaping-toward-a-fully-reusable-rocket/">7 according to Eric Berger</a>). At this scale, to be competitive with Falcon 9 it must be 4x cheaper per launch which would cost $15M for the customer or <a href="https://youtu.be/DxREm3s1scA?si=ejdsalwfZkgcCpZG&t=2362">~$4M marginal launch cost</a>. As we've seen with Falcon 9, reusability has dramatically decreased launch costs to the point where the majority of the cost of a rocket is no longer in the first stage. Second stage reusability will drive down costs even further and a small launch on the scale of Stoke's Nova is well suited to achieving a high launch cadence which will accelerate the process of decreasing costs.

### <b>Nova can Launch Most Payloads</b>

+ Other payloads (GEO, rideshare, existing LEO satellites, NSSL, Capsule, Moon/Mars lander)

Launching legacy geostationary communications satellites has very different considerations from launch constellations. These launches require immense mass to GTO capability and perfer high-energy optimized architectures like Ariane 5 or Vulcan. However, ~60% of the commercial GEO satellites launched in the last 6 years were under 5 tons. Because <a href="https://youtu.be/fcLuugmHV90?si=8EKMazIYyfUyPrm2">refilling in orbit is planned for Nova</a>, it will essentailly be able to put its entire LEO capacity directly in a geostationary orbit and potentially return the second stage (Assuming 6000m/s+ delta v in the upper stage similar to Starship). Because the vehicle is fully reusable this may cost less than a dedicated Falcon 9 launch.

The average mass of Falcon 9 customer LEO launches excluding Dragon is 3.7 tons. Between 2018 and 2023 inclusive 32 of these launches occured and only 4 of them were over 5 tons. This means Nova could have launched 28 of the previous 32 Falcon 9 customer launches assuming there were not further considerations such as payload volume. Because Falcon 9 is oversized for the majority of LEO customer payloads, Nova is well positioned to compete for this market.

Small satellite rideshare missions are well suited for Nova given their low mass requirements and flexibility. SpaceX Transporter missions are often below 5 tons, another example of Falcon 9 being oversized for customer paylaods. The limiting factor in Nova being able to launch these missions may be <a href="https://i0.wp.com/spacenews.com/wp-content/uploads/2023/06/transporter8-stack.jpg?resize=661%2C1024&ssl=1">payload volume</a>. It is possible Nova's fairing is not large enough to fit the number of satellites Falcon 9 can. Regardless, this is solved by launching fewer satellites at once. Rideshare missions are flexible enough that they can launch on nearly any vehicle and the potential for extremely low cost with Nova makes it well suited for these launches.

All 4 of the Falcon 9 customer launches that exceeded Nova's 5 ton capacity were for the US Military. There were two NROL launches and two SDA launches. Because of the classified nature of these payloads their exact mass is unknown, so some of them may be within Nova's 5 ton payload capacity. Even so, to launch these payloads Nova would have to be certified by the US Military to launch classified payloads under NSSL Lane 2 which is unlikely given competition from larger and more established rockets. 

Nova may be able to achieve all but one of the <a href="https://en.wikipedia.org/wiki/National_Security_Space_Launch#2018_to_2020s">NSSL Phase 2 target orbits</a> if the vehicle was stretched to a seven ton LEO capacity. These orbits are mainly high-energy and require 4-7 tonsof payload capacity. For example, GEO 2 required 6.6t direct to GEO, and MEO Direct 1 requires 5.3 tons direct to an 18200km orbit of Earth. The only required orbit Nova can't complete is Polar 2 which requires 12 tons to a 830 km polar orbit of Earth. This shows how in-space refilling is a feature that opens up a lot of capability and how Nova could compete for NSSL Lane 1 payloads.

### <b>Future Capability built upon Fully Reusability and Refilling</b>

Nova's upper stage is a fully reusable orbital reentry vehicle capable of propulsive landing. Previous vehicles capable of orbital reentry have all carried <a href="https://en.wikipedia.org/wiki/SpaceX_Dragon_2">crew</a> or <a href="https://www.space.com/varda-in-space-manufacturing-capsule-reentry-photos">cargo</a> and orbital vehicles capable of propulsive landing have all been Moon/Mars landers.

In Stoke Space's <a href="https://youtu.be/fcLuugmHV90?si=C0-daIiAsqi6o4d0">promotional video</a> 4 months ago they teased in-orbit refilling and Moon landings. As mentioned above, in-orbit refilling allows them to increase payload capacity beyond low-earth orbit. This capability allows them to get enough delta-v in low Earth orbit to achieve a lunar landing. A lunar landing from LEO required ~5,700 m/s of delta-v. If Nova's upper stage has similar delta-v as Starship (6000m/s), this is possible with a full 5 ton payload. Even if delta-v is lower than 6000m/s or significant extra mass is required to achieve a lunar landing, payload to the lunar surface will be greater than a ton. The largest robotic lunar lander I am aware of is Astrobotic's Griffin which is capable of 625kg to the lunar surface. A Nova-based lunar lander could deliver more payload to the Lunar surface for a lower overall cost.

Lower cost and higher reliability is made possible through testing landing system on Earth dozens or hundreds of times before attempting a Lunar landing. Engines and maneuvering will be tested many times before a lunar landing. This (list failures)

Nova is an undersized rocket for launching crew. For example, Soyuz is one of the small crew capsules currently flying is weighs 7 tons. This is beyond Nova's 5 ton LEO capacity and makes it very difficult to create a crew capsule even if it is integrated into an existing spacecraft with maneuvering capabilities. In his <a href="https://www.youtube.com/live/P_S350j1HQA?si=DqnatYXVLB-qmTNn&t=4182">interview</a> with NASASpaceflight Andy Lapsa - Stoke Space CEO and cofounder - was asked about crew rating Nova and said this: "I actually expect that we'll see a bimodal distribution in those optimal size of the vehicles. One of them is designed for satellites and one of them is propbably bigger designed for humans with life systems."

### <b>Small Size if a Feature</b>

+ High flight rate is a feature / Small size is a feature:

Nova needing to launch 4x as much as Falcon 9 to put the same mass into orbit is a feature. Flight rate appears to be the determining factor behind falling launch costs apart from vehicle architecture. Launching 4x as much as your competitors with a smaller fully-reusable vehicle allows for an accelerated process of lowering costs. Contrast this with Neutron, which will likely launch less than Falcon 9 with a second stage of <a href="https://x.com/BellikOzan/status/1741535515759857816?s=20">similar complexity</a>. It will be much harder for Rocket Lab to compete with Falcon 9 than Stoke.

### <b>Competing Against Partially-Reusable Launch Vehicles</b>

Nova's scale makes it very well suited to competing with Neutron. First, the average mass of customer payloads on Falcon 9 is 4.4t (exluding Dragon). This is addressable both by Nova and Neutron. Second, the next largest market for Falcon 9 is GEO communications satellites. Neutron GTO capacity is rumored to be around 3-5 tons. Because Nova is planned to be refilled in orbit, its GEO capacity will be the same as LEO capacity, 5 tons. Finally, both rockets will compete for launching constellations and as mentioned above, Nova is positioned to cost less than Neutron long-term.

From my perspective, it even appears more achievable than Neutron achieving lower marginal launch costs than Falcon 9.

### <b>Competing Against Fully-Reusable Launch Vehicles</b>

Because of the larger sizes of New Glenn and Terran R, they may be in less competition with Nova than Neutron. These rockets are much larger which allows them to launch the heaviest GEO satellites and pursue difficult markets like <a href="https://en.wikipedia.org/wiki/Blue_Moon_(spacecraft)">HLS</a>. Furthermore, these vehicles have upgrade paths to full reusability.

Stoke's Nova is clearly an excellent architecture to compete against partially-reusable launch vehicles, but it is far less clear Stoke's position against larger fully and rapidly reusable launch vehicles. 
1. Small sat launcher
2. Starship's too big
3. It might serve smaller constellations (eg. Iridium, OneWeb, Intelsat)
4. Legacy Market

+ Why hasn't this been done before / Well suited organization:

Current and upcoming rockets that are aiming to launch constellations are all partially reusable medium-lift launch vehicles (excluding Starship, I'll cover that later). A partially-reusable rocket is the most reasonable thing for a slightly risk-averse company to do. For companies like Rocket Lab or ULA, it is very difficult to pursue a fully and rapidly reusable rocket. This is an unproven market and it has never been done before and is a very hard sell to investors. This is especially true when you consider the development cost of such a program: ~$250M for Neutron vs. ~$5B for Starship. It takes a level of audacity to push for such a program that will create its own market. SpaceX has done this again and again with Falcon 9, Starlink, and now Starship & Mars.
