---
layout: post
title: "Extrapolating Demand for the 1-ton Rocket Class"
categories: Space
author:
 - Christopher Kalitin
---
<head>
    <meta property="og:image" content="{{site.url}}/assets/images/extrapolating-demand-firefly/cover.jpg">
</head>

![Image description]({{site.url}}/assets/images/extrapolating-demand-firefly/cover.jpg){:width="1000" .align-center}

Tell me where I'm wrong or just give compliments <a href="https://x.com/CKalitin/status/1813437503480696867">fix me pls</a>.

"Our view of 1-ton is it's kind of a no man's land because if you look at Electron it's been increadibly successful. If you look at the paylaods that we're lifting they're all sort of in that 200kg class, so the whole reason someone comes to a dedicated rocket is because they want a dedicated rocket. So putting a 200 kg payload in a one ton lift class, I just don't see how you can be economic to be able to compete with a smaller 300 kg lift class."

Today four of the best space investing Youtubers posted their interview with Peter Beck and Adam Spice of Rocket Lab. Responding to <a href="https://youtu.be/dfIHhLd9Wjs?si=tTmpJ1NQNpwMN2hB&t=379">one of Dave G's questions</a>, Peter Beck said this about the 1-ton rocket class: "Our view of 1-ton is it's kind of a no mans land."

During this year I've written a few blog posts on the topic of the 1-ton lift class. <a href="https://ckalitin.github.io/technology/2024/02/16/firefly-vs-rocketlab.html">Comparing Demand for Firefly's Alpha vs. Electron</a>, <a href="https://ckalitin.github.io/space/2024/07/04/small-sat-constellations.html">Small Sat Constellations: The line between Electron and Rideshare</a>, and <a href="https://ckalitin.github.io/space/2024/07/16/small-constellation-charts.html">Visualizing Small Sat Constellation Tradeoffs with Charts</a>. The primary insights from this reasearch have been that there is little competition between the 1-ton rockets and Electron and that there is only a small niche of the constellation market that is optimal for the 1-ton class. Peter Beck's comments help to confirm my conclusions.

In this blog post, I'll use my <a href="https://docs.google.com/spreadsheets/d/1VOgRbnAsQZdGIPoemRj5ApSLk_jxGanNliWEPnBB3p4/edit?usp=sharing">dataset</a> (Based on Jonathan Mcdowell's public data, Gunter's Space Page, and others) to quantify exactly how big the market for the 1-ton class rockets is.

1. Constellation Market (how many will need it?)
2. Dedicated large satellites
3. Dedicated small satellites
4. Rideshare
5. Military

### <b>Don't Extrapolate the Early Launches</b>

Because the small satellite market is still relatively young and still growing, relying on historical data is not the correct approach. Just this year Electron is aiming to 2x their launch cadence and Firefly is still in the process of ramping up. The primary use of historic data is comparisions between both vehicles.

Despite the difference in size, Alpha's and Electron's first few flights resembled each other closely. Firefly's Alpha has flown 5 times to date and 3 of these missions were rideshare as part of their DREAM program or for NASA. This is the same as the first five Electron launches, 3 of them were rideshare carrying assorted satellites for Planet Labs, Spire global, or NASA's ELaNa program. 

As Firefly's first four launches and the first flight of Electron proved, the early launches of any launch system are risky. This means that the first few launches of a new rocket are underpriced to account for the risk. The effect of this is the first few launches are not indicative of the future market due to the cheaper pricing. For example, in the last 3 years Electron has launched 3 rideshare missions out of 28 total launches. This amounts to ~10% of their launches vs. 60% during the first 5 launches. This is why we cannot directly extrapolate the first 5 Firefly launches and expect an accurate result.

"It's too small to be a useful rideshare vehicle and it's too big to be a decicated vehicle." - Peter Beck. In this quote - again from the Dave G interview - Beck is referring to competing with Falcon 9 rideshare missions where specific orbit parameters and timing are worth sacrificing for a significantly lower cost. This reflects the early Alpha and Electron flights which were underpriced to account for the risk. However, Rideshare missions are not sustainable long-term on small launch vehicles because SpaceX has far higher pricing power. He say's a 1-ton class rocket is too big to be a dedicated vehicle because the vast majority of payloads that need specific orbits and launch dates are light enough to be launched on Electron, which is ~2x cheaper.

### <b>Most Constellations Are Optimized for Electron</b>

![Image description]({{site.url}}/assets/images/small-constellation-charts/Satellite-Count-Vs-Adjusted-Cost-100kg.png){:width="600" .align-center}
![Image description]({{site.url}}/assets/images/small-constellation-charts/Satellite-Count-Vs-Adjusted-Cost-200kg.png){:width="600" .align-center}

The over-representation of rideshare missions is not the only source of uncertainty. The biggest upcoming market for rockets of all classes is constellations (70% of Rocket Labs 2024 launches so far). Small sat constellations are an even younger market than small sats themselves, so assumptions will have to be made in extrapolating the size of the market. The primary assumption that will need to be made is the distribution of satellite mass total sat count in upcoming constellations.

In my <a href="https://ckalitin.github.io/space/2024/07/16/small-constellation-charts.html"> previous blog post</a> I created the beautiful chart you can see above that visualises the trade-offs between Electron, Alpha, and Rideshare in launching constellations. Assuming you are using 100kg satellites, only when you exceed 25 satellites in your constellation does a rocket on the scale of Alpha become economical. Furthermore,the lower cadence of Alpha means Electron sees a further cost advantage. 

The cost advantage of Electron starts to diminish when you increase the mass of the satellites. This is the strength of the 1-ton class rockets, they are the most efficient way to launch heavy and relatively small constellations. Satellites between 150-500kg in constellations of between ~25-100 total satellites are the optimal market for the 1-ton class rockets. The issue is none of these constellations exist, hence Peter Beck saying: "Our view of 1-ton is it's kind of a no mans land."

The heaviest commercial Earth Observation satellites are operated by Capella. Six of these 112kg satellites are currently in orbit and were launched on either Electron or Falcon 9 rideshare missions. These satellites are not heavy enough and not launched at high enough scale to take advantage of Alpha's 1-ton payload capacity. 

### <b>Are We Seeing a Military Constellation?</b>

<a href="https://spacenews.com/firefly-inks-multi-launch-deal-with-lockheed-martin-for-alpha-rocket-rides/">Lockheed Martin</a> and <a href="https://spacenews.com/firefly-signs-multi-launch-agreement-with-l3harris/">L3 Harris</a> have purchased up to 20 and 25 launches from Firefly respectively. It is not clear what payloads will fly on these missions and even if Lockheed Martin purchased flights on Alpha or MLV. 

However, if launches are being purchased this far ahead in bulk it may be likely that these are for a potential constellation. The national security nature of these companies may also mean there is a responsive space aspect to these contracts that takes advantage of the capability Firefly developed for their Victus Nox mission.

Assuming these satellites are for a constellation, the choice of Firefly to launch them may be due to the fact that the satellites are heavy enough to take advantage of Alpha's payload capacity. Earth Observation satellites seem to level out at the ~100kg mark, but other applications may require heavier satellites. For example, various Starlink satellite iterations have been between ~250kg and ~800kg. If we are seeing the early stages of a military constellation, it may be that the hardware required for these satellites make them fit into the class that can leverage the Alpha's 1-ton payload capacity.

The very forward looking nature of these contracts may mean they don't materialize as <a href="https://x.com/TheRTest/status/1821560677724463405">This Guy</a>(hilarious name, true comedian) has theorised. Furthermore, the primary limiting factor of the analysis I've done to find the niche for the 1-ton class rockets is it doesn't take into account industry partnerships and other business factors. 

### <b>The Two Categories of Dedicated Small Sat Launch Satellites</b>

The first category of satellites that get their own dedicated small sat launch we've seen are those that use Electron for one of it's unique capabilites. Compared to rideshare, Electron can launch to a specific orbit on a specific date. For commercial customers this has meant a quicker time to revenue which should not be under estimated. Government customers have also taken advantage of the ability to launch to a specific orbit. For example, Rocket Lab recently launched Neonsat-1 and the ACS3 satellite on a single mission to two different orbits (520km & 1000km). Also, in April they <a href="https://spacenews.com/rocket-lab-wins-14-4-million-contract-to-launch-space-test-program-experiment/">won a contract</a> to launch a set of satellites for the US Space Force to a Very Low Earth Orbit (VLEO). 

This category of payloads isn't very well address by Alpha because of the low mass of the payloads. For example, the USSF VLEO satellites weight 200 kg in total. When payload capacity is not a concern, the cost advantage of Electron is a very large factor.

The second category of payloads we will see launch in the next few years are those that are too heavy for Electron and too light for Falcon 9. Just as Electron launches all satellites too light for Alpha, Alpha will be able to launch all satellites for light for Falcon 9. Because of the lack of competition and Falcon 9's utter dominance of the launch market during the last few years, it has launched several satellites to LEO that are far below it's 18 ton payload capacity. 

In order of most recent to least recent:
1. Korea Project 425 (800kg) (Anchor customer on Bandwagon-1)
2. iMECE (800kg)
3. EROS C3 (400kg)
3. Globalstar-2 FM15 (715 kg) (Rideshare with Starshield)
4. IXPE (330kg)
5. Paz (1,400kg)
6. Formosat 5 (525kg)
7. Jason-3 (553kg)
8. CASSIOPE (481kg) (First commercial Falcon 9 launch)

Given the 4x lower cost of an Alpha launch compared to a Falcon 9 launch, it is likely that Alpha will be able to compete for these payloads. Falcon 9 has launched less than one of these satellites per year over it's lifetime, so the market is not large. However, on the scale of Alpha, one launch per year is significant enough to mention.

### <b>Responsive Space</b>

