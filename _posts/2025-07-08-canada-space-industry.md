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

### <b>Introduction</b>

Today I read this [Space News article](https://www.space.com/space-exploration/launches-spacecraft/can-canada-get-to-orbit-companies-nordspace-and-protospace-hope-to-launch-countrys-1st-space-mission-exclusive) about Nord Space, Canada's first launch vehicle startup ever.

While i'm generally skeptical of all space startups - hardware is already extremely difficult and this is one of the most unforgiving domains ever - some of the points made in that article prompted me to consider the market for a domestic launch provider in Canada more seriously.

Particularly, the founder was optimistic about sovereign launch demand in Canada, creating a regulatory framework for launches here, and the aerospace supply chain around their HQ in Ontario.

### <b>Domestic Canadian Launch Market</b>

##### **Historic Data**

![Image](/assets/images/canada-space-industry/canada_payloads_vs_year_by_operator_type.png){:  target="_blank" .width="600"}  
*[Enlarged Image](/assets/images/canada-space-industry/canada_payloads_vs_year_by_operator_type.png)*  
![Image](/assets/images/canada-space-industry/canada_payloads_vs_year_by_simple_payload_category.png){:  target="_blank" .width="600"}  
*[Enlarged Image]({{site.url}}/assets/images/canada-space-industry/canada_payloads_vs_year_by_simple_payload_category.png)*  
<i>Note these are Canadian payloads (As categorized by Jonathan McDowell in his [dataset psatcat](https://planet4589.org/space/gcat/web/cat/pcols.html)) launched on any nation's launch vehicle. Ignore the lower counts of the simple payload category chart (eg. 15 vs 18 in 2023), those are wrong, Python is being goofy.</i>

To begin my analysis of the Canadian Space Industry I used my [McDowell Dataset Analysis repo](https://ckalitin.github.io/space/2025/06/08/space-industry-charts.html) to generate a few charts about the history of Canadian Payloads that have successfully made it into orbit.

The trend in Canadian payloads looks roughly exponential and it feels like you could fit an exponential to them without much worry. However, seeing as there were only 10 payloads launched in 2024 and 2025 so far, we need to carefully check our assumptions before predicting extreme growth.

#### Upcoming Canadian Payloads

A [SpaceQ article by Marc Boucher](https://spaceq.ca/canadian-satellite-launches-could-set-record-in-2025/) claims there could be 36 Canadian satellites launched in 2025. Some of these are unlikely, like 8 satellites that are built and operated by NorthStar under a "space-as-a-service" deal with Spire, who sued them after one of their previous satellites was lost and three had unusable data.

The majority of upcoming Canadian satellites are launching on SpaceX's Transporter 15 mission in October. They are 9 of EDA's Earth Observation satellites and the first 10 of Kepler's Optical Data Relay Network communication satellites. An honorable mention is the Univresity or Toronto's Aerospace Team launching a 3U imaging satellite. Hopefully UBC can get on this list in the future!

Unlike the American space industry, dominated by thousands of Starlink satellites, the Canadian space industry is small enough that University design groups get a mention! The group of 10 academic satellites in 2023 were mostly launched on SpaceX's CRS-27 mission to the ISS. These all comes from Universities around the nation, from Manitoba to Yukon.

#### Mass Distribution of Canadian Satellites

![Image](/assets/images/canada-space-industry/canada_payloads_vs_mass_by_orbit_max_mass.png){:  target="_blank" .width="600"}  
*[Enlarged Image](/assets/images/canada-space-industry/canada_payloads_vs_mass_by_orbit_max_mass.png)*  
![Image](/assets/images/canada-space-industry/canada_payloads_vs_mass_by_orbit_1000_50.png){:  target="_blank" .width="600"}  
*[Enlarged Image](/assets/images/canada-space-industry/canada_payloads_vs_mass_by_orbit_1000_50.png)*  
![Image](/assets/images/canada-space-industry/canada_payloads_vs_mass_by_orbit_100_5.png){:  target="_blank" .width="600"}  
*[Enlarged Image](/assets/images/canada-space-industry/canada_payloads_vs_mass_by_orbit_100_5.png)*  
<i>These charts show in progressively more detail the mass distribution of Canadian satellites. Satellite count vs. payload mass.</i>

The vast majority of Canadian satellites weigh less than 15 kg. These consist of Kepler's communication satellites, various University projects, and GHGSat's Earth Observation satellites. Kepler is based in Toronto and is focused on high-bandwidth In-space data relay for LEO spacecraft, particularly remoate sensing missions. GHGSat is based in Montreal (Where I'm flying in a few weeks go please reach out if you're around there!) and monitors primarily methane and carbon dioixde emissions.

The higher mass geostationary satellites are mainly communication satellites. Telstar 18V and 19V were launched on Falcon 9s in 2018 and provide communication services. Anik F3 was a 4.6 tonne satellite launched on the Proton-M rocket and is also a geostationary communications satellites. RCM-1, -2, -3 are C-band synthetic aperture radar satellites in Sun Synchronous Orbit that weight ~1.5t. They were built by MDA and operated by the Canadian Space Agency (CSA). 

##### **Analyzing NordSpace's Founder's Comments**

"They're [Canadian Department of National Defense] the ones who really are sending the strongest demand signals. We're not excited about relying on foreign partners, no matter how close they may be, to get our assets to space. We have all these payloads that kind of just sit on shelves. Let's just toss them on your rocket and get them up there."  
*[Rahul Goel, NordSpace Founder](https://www.space.com/space-exploration/launches-spacecraft/can-canada-get-to-orbit-companies-nordspace-and-protospace-hope-to-launch-countrys-1st-space-mission-exclusive)*

The founder of NordSpace seems optimistic about the potential for the Canadian defense industry to be a big source of demand for NordSpace. We've seen in the past with programs like NASA's Venture Class Launch Services (VCLS) or lane 2 of NSSL phase 3 that government programs have a great potential to kick start launch companies. So, this certainly a market that should always be considered for new space startups.

A few months ago at the [SmallSat Europe event in Amsterdam](https://news.satnews.com/2025/05/29/fireside-chat-with-sir-peter-beck/?utm_source=chatgpt.com) (And elsewhere, but I can't find a better source), Peter Beck said that European launch startups would have to rely on government payloads to get off the ground before they are commercially competitive. These are one of the primary markets for European launch startups, as in national defense having sovereign launch capability is far more important than in commercial markets.

[Firefly announced a launch site in Sweden](https://payloadspace.com/firefly-greenlit-for-future-swedish-launches/) to seemingly capitalise on the subset of the European launch demand that prefers launch on their own soil.

Looking at the chart at the top of this section, we see only 6 Canadian military payloads launched in history. Some of these may be mislabelled, and I only just noticed 3 were labelled incorrectly as commercial when they were part of a Defense Research and Development Canada program. However, there is clearly a scarcity of Canadian military payloads as far as I can tell.

Goel claims there are payloads sitting on shelves and he certainly has greater insight into the Canadian defense market than I do, but there isn't any evidence I can find of substantial Canadian military launch demand. Canada currently relies on US military space assets, maybe this will change in the future.

### **Challenges With Building Rockets In a Country Where It Hasn't Ever Been Done**

The most visible issue with building rockets in Canada is that there are no launch or test sites. NordSpace's test site is an abandoned mine that they found after searching "every location you can imagine."

"In Canada, [if] you mentioned to anybody that you're building a rocket engine and you want to test it on their farm or on an industrial plot, they're just going to have an allergic reaction to it right away. We got kciked out of every location you can imagine."
*[Rahul Goel, NordSpace Founder](https://www.space.com/space-exploration/launches-spacecraft/can-canada-get-to-orbit-companies-nordspace-and-protospace-hope-to-launch-countrys-1st-space-mission-exclusive)*

The lack of any launch or test sites means you are required to build you own. As Rocket Lab at Mahia or SpaceX at McGregor can attest to, having your own test/launch infrastructure can be a great advantage in launch vehicle programs. This is especially true in SpaceX's case where they bought McGregor from the bankrupt Beal Aerospace for a farily low price (Eric Berger goes into this in Liftoff). However, for early stage companies you want to buy down technical risk and focus on reaching milestones early. So, vertical integration is not ideal for a startup if it isn't required.

Peter Beck danced with the indigenous people of New Zealand to be allowed to build a launch site on land they had the rights to. Goel's quote gets to a similar mentality in Canada where it's also particularly difficult to build risky test sites.

They're launch site is located at 46 degrees latitude on the coast of Newfoundland. This is less than the 49 degree latitude of Baikonur Cosmodrome, so they could access the International Space Station. However, future US commercial space stations and under no obligation to launch to higher orbital inclinations. A higher inclination also requires more energy expenditure to reach a Geostationary Orbit, which lowers payload capacity. On the other hand, Sun Synchronous Orbit can be access from anywhere as it's ~95 degrees inclined. Many Earth Observation satellites use this orbit.

### **Positives Of Being A Non-US Non-Government Launch Program**

Although there are many challenges, it's not all negatives!

In the same Space News article I've been mentioning Goel says that within 10 km of their headquarters there are five critical suppliers to SpaceX's Merlin and Raptor engine programs. Even though they're in Canada, they aren't too isolated from US Aerospace technology.

Because NordSpace is a private company, they aren't subject to the same whims of goverment as programs like the Avro Arrow. They may rely on domestic payloads, but the vision and execution for how they launch these payloads is all up to them. This is the same reason why SpaceX will take us to Mars and why NASA has failed for decades.

My favourite advantage of a non-US launch company is that they are not subject to ITAR. This means you don't need to be a US citizen to work there. For countries that don't want to go through ITAR regulatory approval processes or individuals that can't be bothered to become US citizens, NordSpace presents and easier path to space or working on space.

### **Proactive Launch Range / Regulatory Strategy**

Canada has no regulatory launch approval process. NordSpace's strategy for solving this problem is to be proactive about working with the government to build such a framework. [They are aiming](https://www.space.com/space-exploration/launches-spacecraft/can-canada-get-to-orbit-companies-nordspace-and-protospace-hope-to-launch-countrys-1st-space-mission-exclusive) to get a full orbital launch approval for their upcoming 2025 suborbital launch of their Taiga rocket.

Rocket Lab had to go through a similar process to get approval to launch from New Zealand and to get ITAR approval to launch US military payloads from their Mahia launch site.

They plan on building out their launch site with two pads. One for themselves, the other for a theoretical customer in the future. They hope for another company to come around and use this pad, whether a local Canadian company or international company. Like discussed in the previous two sections, I'm not sure of the benefits any company could get here aside from not having to go through ITAR approvals - assuming they don't want to launch US military payloads from Canadian soil.

### **Examining NordSpace's Launch Vehicle Strategy**

![Image](/assets/images/canada-space-industry/electron_launches_vs_mass_by_orbit.png){:  target="_blank" .width="600"}  
*[Enlarged Image](/assets/images/canada-space-industry/electron_launches_vs_mass_by_orbit.png)*  
<i>This is [my chart](https://ckalitin.github.io/space/2025/06/08/space-industry-charts.html) of the mass distribution of Rocket Lab Electron launches.</i>

NordSpace has plans for 3 launch vehicles:  
1. Taiga - Hypersonic Suborbital Space - 50 kg payload
2. Tundra - LEO Small Sat Launcher - 500 kg payload
3. Titan - LEO Medium Lift Vehicle - 5,000 kg payload

A hypersonic suborbital launch vehicle is an interesting first vehicle. As Rocket Lab's HASTE program has demonstrated, there is a non-trivial amount of hypersonic testing demand from US military contractors. This may be true in Canada as well so NordSpace may continue to have demand for Taiga after their larger launch vehicles come online. A small vehicle is obviously the right choice for their first rocket to demonstrate their ability to build rockets - [Stoke Space seems to be the exception here](https://ckalitin.github.io/technology/2024/02/26/stoke-nova-perfect.html).

I have [written extensively](https://ckalitin.github.io/space/2024/08/12/extrapolating-demand-firefly.html) about the 1-ton class launch vehicles like Firefly's Alpha in the past, so a Neuron instantly actived in my mind when I saw they were aiming for 500 kg, instead of something lower like the ~100 kg capacity of Astra's Rocket 3.3.

In short, most payloads will not use the full payload capacity of 500 kg.

3. Examine the LV Strategy

Suborbital hypersonic test vehicle first, 50 kg past 100km
Then 500 kg class LEO LV
Then 5000 kg class LEO LV

### **Conclusion**

"sub-$100 million easily." LOL

he talked about monthly launches end of 2030. Good Luck! Where payloads? Not from Canada!
 
They talk about moving fast and iterating, good.

27.5 kg to lunar orbit?
https://x.com/Nord_Space/status/1917571312375194068
Not TLI????

Estimates several launches a year with Canadian Payloads (0.5 and 5 ton class?), later expanding to global payloads.
