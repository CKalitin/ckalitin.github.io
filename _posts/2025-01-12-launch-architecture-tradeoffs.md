---
layout: post
title: "A New Paradigm of Launch Vehicle Tradeoffs"
categories: Space
author:
 - Christopher Kalitin
---
<head>
    <meta property="og:image" content="{{site.url}}/assets/images/launch-architecture-tradeoffs/VulcanRaptor.jpg">
</head>

![Image]({{site.url}}/assets/images/launch-architecture-tradeoffs/VulcanRaptor.jpg){: height="600" .align-center}  
<i>This image from <a href="https://x.com/StormSilvawalk1/status/1878617797531742227">@StormSilvawalk1</a> illustrates the two paradigms well. 10 seperable vehicle parts (SRBs, stages, fairing etc.) vs. just 2 for Starship & Neutron.</i>

Notes:

The core point: The tradeoff is between making a more capable standard vehicle or using unique vehicles for each mission type.

The paradigm of reuse doesn't really work for legacy space companies because they're used to unique solution. If Vulcan was to be fully reusable they'd need 10 reusable vehicles, look at the Ariane 6 reuse concept too.

The previous paradigm of thought had to be tuned to having few launches and very different requirements, mainly high energy. High energy architectures lend themselves to unique solutions like boosters/different upper stages. The new paradigm is focused on LEO with everything else as an after thought (constellations). For SpaceX, the right Mars architecture just happens to be the right LEO architecture, everything in between is secondary.

Post:

* TODO: Redo this intro
We are currently living through a paradigm shift in launch vehicle architecture design. This means we are continually seeing legacy perspectives bump up against new ideas that are optimized for different requirements. Sometimes this can result in laughable concepts like Ariane Space planning quadruple booster reuse for Ariane 6.

### <b>We're Seeing a Paradigm Shift From Customizable Vehicles to Vehicles Focused on LEO</b>

* Add in the cost saving aspects of both paradigms

The old paradigm of vehicle design was optimized for infrequent launches to a varity of orbits. The Evolved Expendable Launch Vehicle (EELV) program vehicles are great examples of this. The Delta IV and Atlas V were both optimized to have a wide range of configurations to meet the various target orbit and mass specifications that the US government layed out. This lead to 11 flown configurations (<a href="https://en.wikipedia.org/wiki/Atlas_V#Versions">according to Wikipedia</a>) for the Atlas 5 and 5 for the Delta IV. These configuations mainly varied the number of boosters and size of the fairing and were the proper tradeoff for the requirements that Boeing and Lockheed Martin were given for these vehicles.

The new paradigm ushered in by SpaceX's Falcon 9 is focused on reuse, high flight rates, and standardizing your vehicle for a specific orbit. Falcon 9 was originally optimized only to deliver the Dragon capsule to the ISS which is in Low Earth Orbit (LEO). Now, it's primary use is launching the Starlink satellites to LEO. To a first approximation, Falcon 9's architecture is solely focused on getting as much mass to LEO as possible. Starship shows this goal even more clearly. It is a vehicle architecture that is completely focused on getting as much mass to LEO as possible. This means that through reuse and an extremely high flight rate they can achieve low cost, then leverage refilling missions to get to Mars or other high energy destinations in the solar system.

### <b>The Paradigms Decide Vehicle Architecture Optimizations</b>

* Both of what approaches?

Both of these approaches are sound given their respective requirements (<a href="https://en.wikipedia.org/wiki/National_Security_Space_Launch#2018_to_2020s">reaching EELV target orbits</a> vs. getting tons of mass into LEO). However, issues start to arise when the companies that were dominant in the old paradigm try to adapt to the new paradigm.

Legacy space companies like ULA or Ariane Space are used to building customizable vehicles (varying booster counts or fairing sizes) because this was the most economical way to launch all the payloads they were tasked with launching. It is unfortunate to waste a full vehicle rated for 20t when your payload is only 10t, so instead you rate your base vehicle for 10t and add boosters onto it to be able to launch 20t. Atlas 5 took this to an extremely with some of it's launches using only one booster (imagine that offset thrust)!

This approach has no place in the paradigm shift to reuse. Because the Falcon 9 is capable of booster reuse, SpaceX is not particularly impacted by whether their payload is 2t or 20t, they get the booster back either way so they have no reason to spend all the money required to create 10 different variants for different payload classes. 

A defining characteristic of this paradigm shift is the approaches to lowering the cost of missions. The legacy model was to use as little hardware as possible for a given mission to save money (hence the 11 Atlas 5 configurations). The new model is to use a standard vehicle for all your missions to save money. This is because the primary cost savings of reuse come from high cadence (this was part of the reason the Shuttle was never cheap). Flying a standardized vehicle for all your missions has immense value in the cost savings the high cadence provides.

With the partially-reusable Falcon 9, there are still some areas where SpaceX doesn't get cost savings from high cadence and they revert to the old model of using as little hardware as possible to decrease cost. For example, on Transporter missions they use <a href="https://x.com/Blobifi/status/1752378858580652109">a shorter Merlin engine nozzle extension</a> to save the cost of the Niobium. 

Looking into the future, SpaceX is fully bought into reuse and the result is they are developing a single vehicle that they can throw at every problem. With Starship they're again going all in on a single vehicle and <a href="https://x.com/culpable_mink/status/1780049986203349125">throwing it at every problem</a>.

![Image]({{site.url}}/assets/images/launch-architecture-tradeoffs/StarshipMeme1.jpg){: height="300" .align-center}  
![Image]({{site.url}}/assets/images/launch-architecture-tradeoffs/StarshipMeme2.jpg){: height="300" .align-center}  

### <b>Not Having Full Buy-in To The New Paradigm Explains All The Foolishness We're Seeing</b>

There is this <a href="https://x.com/tesla4k/status/1676077165983723520">hilarious infamous clip of an Ariane Space exec</a> saying SpaceX's plans are a dream and if they ever come true that Ariane Space will be quick to follow. This is a phenomenon of beliving the current paradigm of launch vehicle design will continue long into the future and a belief that Ariane Space would be fast enough to keep up with any paradigm shifts. Both of these points turned out to be false, hence why this clip is hilarious.


