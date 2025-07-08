---
layout: post
title: "Can Canada Support a Sovereign Space Industry?"
categories: Space
tags:
    - Space Industry Analysis
    - Drafts
author:
 - Christopher Kalitin
redirect_from:
  - /solar/2025/07/08/canada-space-industry.html
word_count: 2000
---
<head>
    <meta property="og:image" content="{{site.url}}/assets/images/nasa-end-state/msr.jpg">
</head>

Aim for <2000 words, deep enough analysis that I'm directionally correct.

Space news article: https://www.space.com/space-exploration/launches-spacecraft/can-canada-get-to-orbit-companies-nordspace-and-protospace-hope-to-launch-countrys-1st-space-mission-exclusive

Suborbital hypersonic test vehicle first, 50 kg past 100km
Then 500 kg class LEO LV
Then 5000 kg class LEO LV

No regulatory framework, trying to establish an orbital reg framework for orbital launches for the first suborbital launch. Get ahead of the problem. Rocket Lab went through the same thing.

Five critical Raptor and Merlin suppliers are within 10 km of their HQ. You can do manufacturing in Canada, just with a smaller industrial base, but it's possible.

Compare to that old cancelled Canadian jet, briefly!!!
Private efforts have an advantage over govrenment programs here, as the government is risk averse. Even US supply chain for military equipment is in China.

They want another customer for their New Found Land spaceport.
 - 46 degrees is not ideal
 - No ITAR is great! Even I could work there!
 - Big cost to building it out without much around, not much different from Mahia though
 - Example of Rocket Lab, would never launch from there
 - ITAR is the only real advantage
 - Compare to Firefly out of Norway

Estimates several launches a year with Canadian Payloads (0.5 and 5 ton class?), later expanding to global payloads.

DoD of Canada is sending the strongest demand signal.

They talk about moving fast and iterating, good.

Old mine is the engine test site, yea no one in Canada wants you to build a rocket engine next to you, minor disadvantage but not unprecedented, see Rocket Lab. (Where was their engine test site?)

Their model can be copy and pasted to other countries looking for sovereign space capabilities. They'd also have no ITAR.

"sub-$100 million easily." LOL

Structure:
1. Examine Canadian customer base (Gov, Commercial, Military!!!)
2. Issues with building rockets in a country that hasn't done it. Parallels to rocket lab.
    a. Regulatory Framework
    a. No ITAR
    a. No test sites
    a. No one wants you there, Beck had to dance with the indigenous people of New Zealand
    a. Some benefit of being a bigger country, SpaceX supply chain too
    a. Cancelled Canadian jet comparison, private industry advantage of constant vision, this is also why SpaceX will make it to Mars and why NASA hasn't
3. Examine the LV Strategy
4. Launch Range / Regulatory Strategy

27.5 kg to lunar orbit?
https://x.com/Nord_Space/status/1917571312375194068
Not TLI????

Prediction of 2025 Canadian payloads:
https://x.com/CanadaInSpace/status/1914436522469929039



### <b>Introduction</b>

Today I read this [Space News article](https://www.space.com/space-exploration/launches-spacecraft/) about Nord Space, Canada's first launch vehicle startup ever.

I'm generally skeptical of all space startups, hardware is already extremely difficult and this is one of the most unforgiving domains ever. Don't make the mistake of looking at SpaceX and extrapolating!

However, some of the points made in that article prompted me to consider the market for a domestic launch provider in Canada more seriously. Particularly, the founder was optimistic about sovereign launch demand in Canada, creating a regulatory framework for launches here, and the aerospace supply chain around their HQ in Ontario.

### <b>Domestic Canadian Launch Market</b>

![Image](/assets/images/canada-space-industry/canada_payloads_vs_year_by_operator_type.png){: .align-center}  
![Image](/assets/images/canada-space-industry/canada_payloads_vs_year_by_simple_payload_category.png){: .align-center}  
<i>Note these are Canadian payloads (As categorized by Jonathan McDowell in his [dataset psatcat](https://planet4589.org/space/gcat/web/cat/pcols.html)) launched on any nation's launch vehicle. Ignore the lower counts of the simple payload category chart (eg. 15 vs 18 in 2023), those are wrong, Python is being goofy.</i>

To begin my analysis of the Canadian Space Industry I used my [McDowell Dataset Analysis repo](https://ckalitin.github.io/space/2025/06/08/space-industry-charts.html) to generate a few charts about the history of Canadian Payloads that have successfully made it into orbit.

The trend in Canadian payloads looks roughly exponential and it feels like you could fit an exponential to them without much worry. However, seeing as there were only 10 payloads launched in 2024 and 2025 so far, we need to carefully check our assumptions before predicting extreme growth.

A [SpaceQ article by Marc Boucher](https://spaceq.ca/canadian-satellite-launches-could-set-record-in-2025/) claims there could be 36 Canadian satellites launched in 2025. Some of these are unlikely, like 8 satellites that are built and operated by NorthStar under a "space-as-a-service" deal with Spire, who sued them after one of their previous satellites was lost and three had unusable data.

The majority of upcoming Canadian satellites are launching on SpaceX's Transporter 15 mission. They are 9 of EDA's Earth Observation satellites and the first 10 of Kepler's Optical Data Relay Network communication satellites. An honorable mention is the Univresity or Toronto's Aerospace Team launching a 3U imaging satellite. Hopefully UBC can get on this list in the future!

![Image](/assets/images/canada-space-industry/canada_payloads_vs_mass_by_orbit_1000_50.png){: .align-center}  

![Image](/assets/images/canada-space-industry/canada_payloads_vs_mass_by_orbit_100_5.png){: .align-center}  

![Image](/assets/images/canada-space-industry/canada_payloads_vs_mass_by_orbit_max_mass.png){: .align-center}  

