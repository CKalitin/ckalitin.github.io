---
layout: post
title: "Planet Labs Charts That Describe Their History"
categories: Space
tags:
    - Space Industry Analysis
    - Latest Posts
author:
 - Christopher Kalitin
word_count: 1753
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
- Flock 1 (Deployed from ISS in Feb 2014 so 1-2 year lifespan at that 400 km orbit)
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

### <b>Aside on Chris Kemp Talking About Constellation Over-Provisioning</b>

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

The most obvious trend here is the switch to sun-synchronous orbit (SSO) in 2014. SSO is a polar orbit that allows satellites to pass over the same point on Earth at the same local time every day. This is ideal for Earth observation satellites like Planet Labs' Doves, as it allows them to capture consistent lighting conditions for their images.

As we'll see below, the early LEO launches were on the Soyuz, Antares, Falcon 9, H2, and Atlas 5 rockets. 

The 2014 bar to LEO was launched on Antares. This can be explained by the fact the Antares was designed by Orbital ATK to launch the Cygnus resupply spacecraft to the ISS under NASA's Commercial Resupply Services program. Because Antares always flies to the ISS (which is in Low Earth Orbit), any Planet Labs flights on Antares would also be to LEO.

There was another Antares launch in 2014 which carried 26 Dove satellites (compared to 28 on the previous launch). This vehicle exploded a few seconds after launch and plummeted back down onto the launch pad, destroying it all. [Smarter Every Day made a video on this](https://www.youtube.com/watch?v=PbabP9ttrZc) and more ISS resupply missions that exploded (CRS-7).

In 2015 Planet Labs launched satellites on 3 Falcon 9 launches to the ISS, CRS-5, -6, -7 carrying 10, 14, and 8 satellites respectively ([according to Wikipedia](https://www.spacedaily.com/reports/NanoRacks_Completes_Historic_Third_Round_of_ISS_CubeSat_Deployments_999.html), but McDowell's numbers disagree). CRS-7 was famously the first Falcon 9 failure.

The delay in launching to the ISS and satellite deployment is notable.

[According to the great Gunter Krebs](https://space.skyrocket.de/doc_sdat/flock-1.htm), the satellites on the CRS-6 mission of Flock-1e were played in April 2015 and deplaying on 13 July 2025 and 16 July 2015. A 3 month delay between launch and deployment!

### <b>Aside on The Depressing Lack of Competition to SpaceX</b>

I'll also write a blog post later on this, but watching the competition to SpaceX recently has been [horribly depressing](https://x.com/CKalitin/status/1847868023064948888).

First, with the COTS contract SpaceX sued NASA to be allowed to compete. It was originally to be a sole source contract to Kistler Space Systems which were going to develop the K-1 launch vehicle using Soviet NK-33 engines originally developed for the N1 Moon rocket. Kistler was unable to get enough private funding to advance in the COTS competition and went bankrupt. This is the first SpaceX competitor failure in a NASA contract.

Next, Northrop Grumman (then Orbital ATK) was awarded the COTS contract in 2008 and developed the Antares rocket and Cygnus spacecraft. Antares at that time used the NK-33 engines as well. These engines failed during the 2014 launch and they had to switch to using different engines.

They decided on another Russian engine, the RD-181. They ordered a limited supply of these engines and after US sanctions on Russia they were unable to get more and had to once again switch to a different engine. (Maybe there's more to this story someone correct me).

Now, they are developing the Antares 330 rocket which will use the Firefly Miranda engine. In the meantime, Northrop Grumman has no launch vehicle to launch Cygnus themselves and ULA is all booked up with Kuiper launches. So what do you they do? Launch Cygnus on a SpaceX Falcon 9, their direct competition.

OneWeb has also recently been launching their satellites on Falcon 9 because there's no alterative.

Better yet, Amazon was sued by their shareholders for how they were buying launches for the Kuiper program and effectively forced to buy 3 launches on the Falcon 9, again their direct competition.

[Eager Space](https://www.youtube.com/@EagerSpace) made some good videos here you should go find them and watch all his stuff.

There's really no alterative to SpaceX for these companies, so they go to their direct competition for launch services. How depressing that SpaceX is the only option and everyone else is falling over themselves.

Furthermore, after Elon's recent hilarious crashout over Trump (simultaneously iSpace was failing to land on the Moon which made it even more fun), the Pentagon began [urging SpaceX's competition](https://www.washingtonpost.com/technology/2025/06/07/trump-musk-spacex-nasa-national-security/?utm_campaign=wp_main&utm_source=twitter&utm_medium=social) to work faster. Yea why didn't we think of that before. Btw this is a one-shot blog post that I'm writing at midnight now I'm not proof reading shit.

### <b>Launch Vehicles</b>

![Planet Labs Payloads Vs Year By Launch Vehicle]({{site.url}}\assets\space-industry-charts\planet_labs_payloads_vs_year_by_launch_vehicle.png){: width="800"}  
[Expanded Chart]({{site.url}}\assets\space-industry-charts\planet_labs_payloads_vs_year_by_launch_vehicle.png){: target="_blank"}  

The first interesting thing here is the great big bar in 2017 with the PSLV launch. This was the [PSLV-C37](https://en.wikipedia.org/wiki/PSLV-C37) mission which before SpaceX's Transporter missions had the record for most satellites launched in a single mission with 2014 satellites to SSO. Planet Labs constituted 88 of these with their Dove Flock 3 satellites.

Also interesting is the dominance of the Falcon 9 since 2021. Planet Labs has apparently been taking full advantage of SpaceX's Transporter rideshare missions! USA!!!

### <b>Countries</b>

![Planet Labs Payloads Vs Year By Country]({{site.url}}\assets\space-industry-charts\planet_labs_payloads_vs_year_by_country.png){: width="800"}  
[Expanded Chart]({{site.url}}\assets\space-industry-charts\planet_labs_payloads_vs_year_by_country.png){: target="_blank"}  

Columbia Flag Jumpscare!

I was joking about a friend today how Planet Labs frantically searched all over the world for launch vehicles during their early days. This chart really shows that with 6 countries total across 10 launch vehicles.

Then, in 2021, launch was solved for Planet Labs with SpaceX's Transporter missions. What a great result! Also, where is the competition for SpaceX's Transporter missions! Neutron get launching already so you can compete! Soon I'll be complaining about lack of competition for Starship too, but that's a different story and the third future blog post I've mentioned in this post.

