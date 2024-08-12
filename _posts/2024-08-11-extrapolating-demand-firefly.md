---
layout: post
title: "Extrapolating Demand for the 1-ton Class Rockets"
categories: Space
author:
 - Christopher Kalitin
---
<head>
    <meta property="og:image" content="{{site.url}}/assets/images/extrapolating-demand-firefly/cover.jpg">
</head>

![Image description]({{site.url}}/assets/images/extrapolating-demand-firefly/cover.jpg){:width="1000" .align-center}

Tell me where I'm wrong or just give compliments <a href="https://x.com/CKalitin/status/1813437503480696867">fix me pls</a>.

"Our view of 1-ton is it's kind of a no man's land because if you look at Electron it's been increadibly successful. If you look at the paylaods that we're lifting they're all sort of in that 200 kg class, so the whole reason someone comes to a dedicated rocket is because they want a dedicated rocket. So putting a 200 kg payload in a one ton lift class, I just don't see how you can be economic to be able to compete with a smaller 300 kg lift class."

"It's too small to be a useful rideshare vehicle and it's too big to be a decicated vehicle."

Today four of the best space investing Youtubers posted their interview with Peter Beck and Adam Spice of Rocket Lab. Responding to <a href="https://youtu.be/dfIHhLd9Wjs?si=tTmpJ1NQNpwMN2hB&t=379">one of Dave G's questions</a>, Peter Beck said this about the 1-ton rocket class: "Our view of 1-ton is it's kind of a no mans land."

During this year I've written a few blog posts on the topic of the 1-ton lift class. <a href="https://ckalitin.github.io/technology/2024/02/16/firefly-vs-rocketlab.html">Comparing Demand for Firefly's Alpha vs. Electron</a>, <a href="https://ckalitin.github.io/space/2024/07/04/small-sat-constellations.html">Small Sat Constellations: The line between Electron and Rideshare</a>, and <a href="https://ckalitin.github.io/space/2024/07/16/small-constellation-charts.html">Visualizing Small Sat Constellation Tradeoffs with Charts</a>. The primary insights from this reasearch have been that there is little competition between the 1-ton rockets and Electron and that there is only a small niche of the constellation market that is optimal for the 1-ton class. Peter Beck's comments help to confirm my conclusions.

In this blog post, I'll use my <a href="https://docs.google.com/spreadsheets/d/1VOgRbnAsQZdGIPoemRj5ApSLk_jxGanNliWEPnBB3p4/edit?usp=sharing">dataset</a> (Based on Jonathan Mcdowell's public data, Gunter's Space Page, and others) to quantify exactly how big the market for the 1-ton class rockets is.

1. Constellation Market (how many will need it?)
2. Dedicated large satellites
3. Dedicated small satellites
4. Rideshare
5. Military

#### Don't Extrapolate the Early Launches

Because the small satellite market is still relatively young and still growing, relying on historical data is not the correct approach. Just this year Electron is aiming to 2x their launch cadence and Firefly is still in the process of ramping up. The primary use of historic data is comparisions between both vehicles.

Firefly's Alpha has flown 5 times to date. 3 of these missions were rideshare as part of their DREAM program or for NASA. This is the same as the first five Electron launches, 3/5 of them were rideshare carrying assorted satellites for Planet Labs, Spire global, and NASA's ELaNa program. As Firefly's first four launches and the first flight of Electron proved, the early launches of any launch system are risky. This means that the first few launches of a new rocket are underpriced to account for this risk. This cheaper pricing means the first few launches are not indicative of the future market. For example, in the last 3 years Electron has launched 3 rideshare missions out of 28 launches. This amounts to ~10% of their launches vs. 60% during the first 5 launches. For this reason we cannot directly extrapolate the first 5 Firefly launches and expect an accurate result.

#### Constellations

![Image description]({{site.url}}/assets/images/small-constellation-charts/Satellite-Count-Vs-Adjusted-Cost-100kg.png){:width="600" .align-center}
![Image description]({{site.url}}/assets/images/small-constellation-charts/Satellite-Count-Vs-Adjusted-Cost-200kg.png){:width="600" .align-center}

The over-representation of rideshare missions is not the only source of uncertainty. The biggest upcoming market for rockets of all classes is constellations (70% of Rocket Labs 2024 launches so far). Small sat constellations are an even younger market than small sats themselves, so assumptions will have to be made in extrapolating the size of the market. The primary assumption that will need to be made is the distribution of satellite mass total sat count in upcoming constellations.

In my <a href="https://ckalitin.github.io/space/2024/07/16/small-constellation-charts.html"> previous blog post</a> I created the beautiful chart you can see above that visualises the trade-offs between Electron, Alpha, and Rideshare in launching constellations. Assuming you are using 100kg satellites, only when you exceed 25 satellites in your constellation does a rocket on the scale of Alpha become economical. Furthermore,the lower cadence of Alpha means Electron sees a further cost advantage. 

The cost advantage of Electron starts to diminish when you increase the mass of the satellites. This is the strength of the 1-ton class rockets, they are the most efficient way to launch heavy and relatively small constellations. Satellites between 150-500kg in constellations of between ~25-100 total satellites are the optimal market for the 1-ton class rockets. The issue is none of these constellations exist, hence Peter Beck saying: "Our view of 1-ton is it's kind of a no mans land."

The heaviest commercial Earth Observation satellites are operated by Capella. Six of these 112kg satellites are currently in orbit and were launched on either Electron or Falcon 9 rideshare missions. These satellites are not heavy enough and not launched at high enough scale to take advantage of Alpha's 1-ton payload capacity. 

#### Are We Seeing a Military Constellation?

<a href="https://spacenews.com/firefly-inks-multi-launch-deal-with-lockheed-martin-for-alpha-rocket-rides/">Lockheed Martin</a> and <a href="https://spacenews.com/firefly-signs-multi-launch-agreement-with-l3harris/">L3 Harris</a> have purchased up to 20 and 25 launches from Firefly respectively. It is not clear what payloads will fly on these missions and even if Lockheed Martin purchased flights on Alpha or MLV. 

However, if launches are being purchased this far ahead in bulk it may be likely that these are for a potential constellation. The national security nature of these companies may also mean there is a responsive space aspect to these contracts that takes advantage of the capability Firefly developed for their Victus Nox mission.

Assuming these satellites are for a constellation, the choice of Firefly to launch them may be due to the fact that the satellites are heavy enough to take advantage of Alpha's payload capacity. Earth Observation satellites seem to level out at the ~100kg mark, but other applications may require heavier satellites. For example, various Starlink satellite iterations have been between ~250kg and ~800kg. If we are seeing the early stages of a military constellation, it may be that the hardware required for these satellites make them fit into the class that can leverage the Alpha's 1-ton payload capacity.

The very forward looking nature of these contracts may mean they don't materialize as <a href="https://x.com/TheRTest/status/1821560677724463405">This Guy</a>(hilarious name, true comedian) has theorised. Furthermore, the primary limiting factor of the analysis I've done to find the niche for the 1-ton class rockets in the charts above doesn't take into account industry partnerships and other business factors. 

# The Two Categories of Satellites

