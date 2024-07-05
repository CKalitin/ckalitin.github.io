---
layout: post
title: "Comparing Demand for Firefly's Alpha vs. Electron"
categories: Technology
author:
 - Christopher Kalitin
---
<head>
    <meta property="og:image" content="{{site.url}}/assets/images/firefly-vs-rocketlab/alpha-launch-1.jpg">
</head>

![Image description]({{site.url}}/assets/images/firefly-vs-rocketlab/alpha-launch-1.jpg){: width="600" .align-center}

Firefly's Alpha and Rocket Lab's Electron are both in a similar mass class of launch vehicles capable of catering to the small satellite launch market, but because of the differences in capability and price they are not in direct competition for most payloads.

Yesterday I was interviewed by Dave G about the small satellite launch market and we discussed Firefly's Alpha briefly. I felt the need to write this blog post to effectively convey my thoughts and show the information that made me come to my conclusions.

### <b>Firefly Alpha Planned Launches</b>

Firefly's Alpha rocket is capable of delivering 1,030 kg to LEO while Rocket Lab's Electron does 300 kg to LEO. Due to Alpha's larger size it is more expensive than Electron and the primary feature of rockets in this class is launching payloads too massive for smaller rockets. This can be seen in Alpha's planned launches (<a href="https://en.wikipedia.org/wiki/Firefly_Alpha#Launch_history">from wikipedia</a>).

1. NASA ELaNa Rideshare mission (11 satellites)
2. Commercial Rideshare mission (With orbital tug)
3. Satlantis Satellite (first launch, details unknown)
4. NRO Satellite (Classified US Military Payload)
5. ESO SAR 1 Satellite (~200kg+)

From this list of upcoming Alpha launches there appears to be several reasons for payloads to fly on Alpha instead of Electron with mass requirements being the most common. This presents few opportunities for competition.

First, the NASA VCLS (Venture Class Launch Services) rideshare mission contracts have been given to <a href="https://spacenews.com/three-companies-win-nasa-small-launch-contracts/">numerous launch providers</a> as a way of supporting development of new launch vehicles. There isn't space for competition between Firefly and Rocket Lab here as the goal of the program is to give new launch vehicles extra funding. Electron is a mature vehicle and is not eligible for these launches anymore.

Second, the Commercial rideshare missions will use Firefly's Elytra orbital tug to deliver the payloads in an exact orbit. This is the first flight of Elytra and on it they will test all the systems. They are dispensing commercial small satellites and <a href="https://techcrunch.com/2023/08/08/firefly-debuts-elytra-orbital-transfer-vehicles/?guccounter=1">proving their capabilities for future NRO missions</a>. 

Thirdly, although there is little information available about it, judging from EOS Data Analytics' <a href="https://en.wikipedia.org/wiki/EOS_SAT-1">previous satellite</a> and extrapolating forward, the EOS SAR 1 satellite may to be too heavy to launch on Electron. Furthermore, the CEO of EOS Data Analytics is Max Polyakov, a co-founder of Firefly.

Fourth, Satlantis is a young company so they may have not been able to get on Electron's manifest soon enough. All Electron launches in 2024 are booked and many are already scheduled in 2025. Furthermore, SpaceX Transporter missions have a <a href="https://x.com/SpaceEquities/status/1757826079337615727?s=20">2 year wait</a>. This shows merely having a functional launch vehicle - even one that costs 2x more than Electron - is enough to get awarded contracts when there are customers who can't afford to wait two years to launch their payload. Also, their satellite may be too massive to launch on Electron, we will know once it launches in 2024.

Finally, the NRO responsive space mission is part of a contract between the NRO and Firefly. The goal of this contract is to provide the capability to launch a payload for the NRO at a moment's notice. In 2023 Firefly demonstrated this capability when they launches the Vitcus Nox satellite within 27 hours of the launch order. Another requirement for this contract appears to be that it must take place in the US as it is a military payload that must launch on short notice. Rocket Lab only has one Electron launch pad in the US, so staying ready for a launch at all times may interfere with commercial payloads.

### <b>Competition between Alpha and Electron</b>

With the context of Firefly's planned launches we can consider the opportunities for competition between Firefly and Rocket Lab for these launches. 

If the commercial rideshare mission is too massive to be launched on a single Electron, two launches could have been used. This would make the cost nearly equal between both launch providers and schedule becomes a larger concern. Because Electron is all booked for 2024 this gives Firefly and advantage until Rocket Lab increases cadence. Furthermore, with SpaceX transporter mission being booked for the next two years, Firefly was in a very good position to launch this mission.

If Electron was a larger vehicle it may have been able to launch the EOS SAR 1 satellite. However, the development costs associated with this make it not economical for Rocket Lab to pursue such a capability. Marginally increasing payload capacity is much less useful than increasing cadence or partial reusability.

With increased cadence and a smaller backlog for Electron, Rocket Lab may have gotten the opportunity to launch the Satlantis satellite. This is assuming it is not too heavy for Electron which is currently unknown. Rocket Lab has always been interested in increasing cadence and with current trends Electon may be demand limited within 2-3 years.

Schedule and payload requirements may have limited Rocket Lab's ability to compete for the NRO responsive space contract. Rocket Lab's first launch from the US was in early 2023 and the contract was awarded in August 2023. As mentioned above, Rocket Lab can get more use out of the pad when launching commercial payloads than keeping it primed for the NRO. So, for this contract to be a net gain to Rocket Lab they may have needed another launch pad in Virginia. Space is limited on Wallops Island and Rocket Lab had limited time which led to the company not being able to successfully compete for this contract. If another similar contract arises in the future it will be very interesting to follow and observe if Rocket Lab is in a better position to compete for it.

Overall, the only planned Alpha payload that reasonably could have flown on Electron is Satlantis' satellite and possibly the rideshare mission. This shows the different niches both rockets are optimized to compete for.

Firefly does not have a vehicle well-suited to compete for payloads currently launching on Electron. The cost to launch Firefly's Alpha is $15M while Electron costs ~$7M. With the 200% difference in cost, satellite operators are highly incentivized to launch on Electon. Furthermore, the average mass of payloads launched on Electron is ~116kg. The primary reason for a satellite that can launch on Electron to use Alpha is likely schedule considerations and Firefly may have gotten the Satlantis launch because of this. This schedule constraint will likely alleviate in the future as cadence increases.

In conclusion, the larger size and higher cost of Firefly's Alpha rocket makes it well-suited for different payloads than Electron. This niche of payloads will likely increase in number as the commercialization of space continues and this growth will offset potential competition from smaller and cheaper rockets.

Edit July 4 2024: This analysis didn't include small sat constellations, I've written more on this <a href="https://ckalitin.github.io/space/2024/07/04/small-sat-constellations.html">here</a>.