---
layout: post
title: "Planet Labs Charts That Describe Their History"
categories: Space
tags:
    - Space Industry Analysis
    - Latest Posts
author:
 - Christopher Kalitin
word_count: 1
---
<head>
    <meta property="og:image" content="{{site.url}}\assets\space-industry-charts\planet_labs_payloads_vs_year_by_program.png">
</head>

Today I published my [Space Industry Charts project](https://ckalitin.github.io/space/2025/06/08/space-industry-charts.html) where I wrote a Python/Pandas library to interface with Jonathan McDowell's datasets that list every launch that has ever happened, every payload ever put into space, every organization that has ever launched an orbital or suborbital rocket, and every site at which launches have ever occured.

It's an extremely comprehensive dataset, but Jonathan McDowell is [self-described](https://x.com/planet4589/status/1870692278764974531) as "old school" and enters all this data manually with MicroEmacs and custom C programs. Extremely legendary, but I want a nice accessible interface to this data so I could, for example, generate a plethora of charts on all the payloads Planet Labs has ever launched with nice labels and colours.

The scripts/library I used are [available on Github](https://github.com/CKalitin/mcdowell-dataset-analysis/blob/main/examples/planet_labs_charts.py). Make your own charts too! I'll write a nice tutorial at some point in the future.

### <b>Planet Labs Satellite Programs</b>

![Planet Labs Payloads Vs Year By Program]({{site.url}}\assets\space-industry-charts\planet_labs_payloads_vs_year_by_program.png){: width="800"}  
[Expanded Chart]({{site.url}}\assets\space-industry-charts\planet_labs_payloads_vs_year_by_program.png){: target="_blank"}  

First, we have a chart of payloads vs year by program.

Planet Labs has has 8 satellite programs (at least that are recorded in McDowell's dataset):
- Doves (3U, ~5 kg, no propulsion, 3-5 m resolution, 1-3 year lifespan)
- Flock 1 (Deployed from ISS in Feb 2014 so 1-2 year lifespan)
- Flock 2 (Deployed to SSO orbit for greater lifespan of ~3 years)
- Flock 3 (about the same as the rest)
- Flock 4 (Superdoves)
- SkySat (Acquired through purchase of Terra Bella from Google in 2017, 0.5m resolution, ~100 kg)
- Pelican (Next gen after SkySat, ~160 kg, 0.3m resolution, Grok says it downlinks 1-2 TB/day)
- Tanager (Hyperspectral designed to complement Planet's optical sats, ~400 spectral bands vs. ~4 for optical, 30m resolution, ~160kg, pne launched 2024)

The chart above really shows Planet Labs' strategy with their Doves, make a fuck ton of them and get continuous data while the satellites are in orbit. If you make them small and cheap enough, it's not an issue that they have a 1-3 year lifespan, just launch more.

Judging from them continually launching a flock of ~40 doves per year, they are having to consistently replace satellites as they reenter. I'll make some sat lifespan charts later.

This is consistent with the strategy of over-provisioning a constellation, similar to what Starlink is doing or what Kuiper plans to do. In contrast, you have a constellation like Iridium which produces and launches just barely enough satellites to get global coverage. Iridium has 66 satellites currently providing service and a couple extras in orbit. In contrast, Starlink has several thousand.

What's also interesting (and I have little insight into) is the fact that they've been on the same Dove design since 2019. Have they converged onto an ideal satellite platform? It would also be interesting to consider what Starlink would converge onto. They've been flying V2 Mini for a while now, maybe this is the ideal LEO broadband satellite design for a Falcon 9 class launch vehicle.

My guess is we'll see fewer Starlink iterations for Starship than we saw for Falcon 9.

<b>Aside on Chris Kemp talking about constellation over-provisioning</b>

Chris Kemp, founder of Astra Space, went on [Ashlee Vance's podcast](https://www.youtube.com/watch?v=I_I_TS-dZdc&start=1469) recently and spoke about their strategy with Astra's Rocket 4 and his view on the future of satellite constellations:

"If you are flying thousands of satellites in a constellation and you have the ability to replace satellites and upgrade and augment planes as needed, from a capacity standpoint that's that's going to be more efficient than just overprovisioning the entire constellation by 5%."

"SpaceX is is obviously just continuously flying and upgrading and replenishing but not every constellation will not have that luxury. They're not going to have the the capital that SpaceX has to just overprovision everything all the time and continue to iterate. The other constellations are are being a lot more thoughtful about capacity planning and that's where we can we can really help"

"The other thing is let's not assume that every constellation is going to meet a homogeneous vertically integrated constellation"

"But I think what countries will increasingly want is a model much more akin to the traditional telecommunications model where you're going to want to own and operate satellites just like you own and operate your fiber and your your cellular and your other data centers"

"When Microsoft Azure and cloud services enter a country they typically ask uh the country asks for the data center to be local so that the laws of that country can govern the data stored in that country."

I have a blog post in the works on Astra's Rocket 4 and why I think this strategy does not work. Countries may well want their own sovereign satellite constellations, but the economics behind launch and operating a satellite constellation skew very heavily towards a Starlink-like model of over-provisioning and continuous replacement.

Ukraine is currently using Starshield (A US Department of Defense derivative of Starlink) to provide satellite internet to its military. With cheaper launch and satellite costs in the future, they could create their own constellation, but it would be much more expensive and less capable than Starlink.

LEO constellations don't lend as well to the sovereign model as something like traditional GEO telecommunications satellites.

### <b>Orbits</b>

![Planet Labs Payloads Vs Year By Orbit]({{site.url}}\assets\space-industry-charts\planet_labs_payloads_vs_year_by_orbit.png){: width="800"}  
[Expanded Chart]({{site.url}}\assets\space-industry-charts\planet_labs_payloads_vs_year_by_orbit.png){: target="_blank"}  

![Planet Labs Payloads Vs Year By Launch Vehicle]({{site.url}}\assets\space-industry-charts\planet_labs_payloads_vs_year_by_launch_vehicle.png){: width="800"}  
[Expanded Chart]({{site.url}}\assets\space-industry-charts\planet_labs_payloads_vs_year_by_launch_vehicle.png){: target="_blank"}  

![Planet Labs Payloads Vs Year By Country]({{site.url}}\assets\space-industry-charts\planet_labs_payloads_vs_year_by_country.png){: width="800"}  
[Expanded Chart]({{site.url}}\assets\space-industry-charts\planet_labs_payloads_vs_year_by_country.png){: target="_blank"}  
