---
layout: post
title: "Quintuple Simultaneous Booster Landings with kOS"
categories: Projects
author:
 - Christopher Kalitin
---
<head>
    <meta property="og:image" content="{{site.url}}/assets/images/more-kos-boosters/Quad-Landing.jpg">
</head>

<iframe width="560" height="315" src="https://www.youtube.com/embed/TlE2G-zM3PI?si=CwmZvX_dRyTEJXnh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

FIX LINK FIX LINK FIX LINK
X Post Link for comments: <a href="https://x.com/CKalitin/status/1816283619213582749">here</a>.

Read the code <a href="https://github.com/CKalitin/KOS-Scripts">here</a>.

I have a tendency to only write blog posts about things I think are impressive. This blog post isn't very technically impressive to me, but documenting your work has value in and of itself. <a href="https://mischajohal.com/Thoughts/Reflecting-on-UBC-Solar">Mischa Johal</a>, THE UBC SOLAR WIZARD, has done a great job at drilling into our heads the importance of documentation.

I was going to make this blog post understandable to non technical kOS folk and hence increase the readership infinitely, however I realized I'm the only person who will ever read this.

This blog post is a continuation of my previous post on <a href="https://ckalitin.github.io/space/2024/07/24/kos-booster-landing.html">How to Land an Orbital Rocket Booster with kOS</a>. In that post I described how I figured out how to write the fundamental code required to land a booster. Since then, I tinkered some more to create a fully autonomous KSP launch vehicle that can land 5 boosters simultaneously. It is completely beautiful and magical to watch agents you wrote autonomously navigate an environment - agents that are self landing rockets!!

### <b>kOS is still a shitty language</b>

![Image description]({{site.url}}/assets/images/more-kos-boosters/Boosters.jpg){: height="400" .align-center}

In my <a href="https://ckalitin.github.io/space/2024/07/24/kos-booster-landing.html">previous blog post</a> I went on and on about why kOS is a shitty language. This remains true. The <a href="https://www.youtube.com/watch?v=FLwD60hPK4I">unique</a> nature of this language makes it not very applicable to other projects. This has made me hesitant about continuing any projects with kOS as they aren't very technically informative. However, rockets landing is magical. Since the previous blog post I found out there is a <a href="https://krpc.github.io/krpc/">KSP mod for controlling rockets with Python</a>. Rewriting the code with kRPC again falls into the category of a project that isn't very technologically insightful. Let's see if the lord gives me enough strength to work on firmware instead of KSP for the foreseeable future.

This is all to say that this isn't a technologically insightful or impressive project. There will be no impressive code, algorithms, or flight mechanics in this blog post. Just fucking around with a shitty language to get boosters to land. Interspersed with some remarkable pictures - Romans could have never imaged this!

### <b>Beauty is the Purpose</b>

![Image description]({{site.url}}/assets/images/more-kos-boosters/Dzhanibekov-Ascent.jpg){: height="400" .align-center}

On real launch vehicles, getting the payload into orbit is the most important objective of every launch, recovery of hardware is secondary. However, unlike a real satellite, the output of my scripts is not economically productive. The output of my scripts is purely watching boosters autonomously land and marvelling at the sight. This is important context for understanding the parameters for state changes during launch.

The Dzhanibekov (most impressive Cosmonaut to ever live) launch vehicle is a design that have a single core with 4 side mounted boosters. It has a payload capacity of about 1 ton in KSP. This is an extremely overengineered rocket because it's goal is to look cool, not be efficient. One productive insight from this project is a better appreciation of the difficulty of recovering high-energy stages. The side boosters separate at around 700/s and ~28km altitude. This is close enough to the launch site that the boost back burn is not very expensive. However, the center core separates at a far higher altitude and higher velocity, meaning it requires far more fuel to return to the launch site. This is sub-optimal as you are leaving a lot of payload capacity on the table. Hence why SpaceX doesn't try to recover the center core of the Falcon Heavy anymore. 

### <b>How Ascent Works</b>
![Image description]({{site.url}}/assets/images/more-kos-boosters/front_Dzhanibekov_1.png){: height="400" .align-center}

Ascent is very simple. 

Every stage on the rocket has it's own script and the center core controls the ascent. The center core script lerps between the initial pitch and the final pitch at the 25km, which is 45 degrees from vertical. These values were determined from my experience in KSP and flight testing. Also, note that I had to write the LERP function manually as kOS doesn't have it built it. Below is part of the function in the KOS-Scripts/Dzhanibekov/Dzhanibekov-Core.ks file. Like I said, no beautiful code in sight. 

```
UNTIL SHIP:ALTITUDE > 30000 {
    SET targetBearing to 90.
    SET targetPitch to LERP(90, 45, CLAMP(SHIP:ALTITUDE, 0, 25000)/25000).
    SET targetRoll to LERP(-90, 0, CLAMP(SHIP:ALTITUDE, 0, 2000)/2000).
    LOCK STEERING TO HEADING(targetBearing, targetPitch, targetRoll).
}
```

Like all orbital rockets, we want to achieve a horizontal velocity of ~2200m/s to stay in orbit around Kerbin. However, we also need to return the boosters to the launch site. Because the boosters have to do boost back burns to arrest their horizontal velocity and move their impact location from far in the ocean to back at the same centre, we want to have as little horizontal velocity as is reasonable when we separate the boosters. That's why we use a lofted trajectory to get to orbit. For reference, <a href="https://youtu.be/h8sV0BwD0H4?si=587gj6Woz3pHYfst">as Matt Lowne explains in this video</a> that taught me how to get into orbit in KSP years ago, on a standard ascent profile you aim for 45 degrees off vertical when you're at 10km. We aim for 45 degrees off vertical at 25km. This decreases the fuel required for the boost back burn and hence increases payload performance.

### <b>How Staging Works</b>

The upper stage and boosters are dorment until their respective staging events. They wake up when particular mass values are reached. The core for this is shown below. Note that the UNTIL loop is just the opposite of a while loop. It runs the code until the condition is true. 

Center Core Script:
```
IF (SHIP:MASS < 35.5 and SHIP:STAGENUM >= initialStageNum - 1) {
        LOCK STEERING TO srfPrograde.
        WAIT 2.5.
        STAGE.
        LOCK STEERING TO HEADING(targetBearing, targetPitch, -90).
        WAIT 0.5.
    }
```

Booster Script:
```
PRINT "WAITING FOR STAGING" at (0, 0).

UNTIL SHIP:MASS < 35.5 {}
WAIT 2.6.

Print "STAGED                 " at (0, 0).

LOCK THROTTLE TO 0.
```

The messaging system between separate scripts in kOS is slightly complicated, so I decided it was easier for each script to watch for staging events on their own instead of a central script telling all the others to wake up.

I tried to make each script detect staging events on their own, but this failed. The number of stages on a vehicle in kOS can be read with "SHIP:STAGENUM". However, the number of stages on a vehicle only updates when the player is currently looking at a vehicle. This is a limitation of kOS as it has to work around KSP, which is designed for a single craft to be controlled at a time. This is why I had to use the "SHIP:MASS" value to detect staging events. The center core and boosters all detect the criteria for staging (Criteria: total rocket mass < 35.5t) individually and then move onto the next mission state themselves.

### <b>Batshit Crazy Boost Back Startup</b>

![Image description]({{site.url}}/assets/images/more-kos-boosters/Boostback.jpg){: height="400" .align-center}

The atmosphere of Kerbin is not balanced as well at God balanced Earth's atmosphere. When we stage the boosters, we are still only 28km above the surface of Kerbin. This means aerodynamic affects play a major role in the control of the boosters. Unlike <a href="https://youtu.be/eiOzvaEBD0Q?si=kmkaxR_zkjiCH7D6&t=164">Falcon 9's comparatively calm</a> reorientation for boostback where it is above the atmosphere, our boosters are still in the atmosphere and have to fight against it. We can't rely purely on RCS to reorient the boosters and atmospheric forces are too strong. So, we fire the engines once we are within 90 degree of the boostback burn direction vector. This leads to a batshit crazy looking separation and boostback startup as all the boosters are point in different directions and getting wildly flung around by the atmosphere. Watch the video at the top <a href="https://youtu.be/TlE2G-zM3PI?si=vkA91f0ccABY5PED&t=111">at the 1:51 mark</a> to see what I mean.

Also, in testing I had the force of the decouple between the center core and the boosters set too high. Because the decoupler is at the bottom of the boosters for aesthetic reasons, this meant the top of the boosters would be pushed into the center core as the bottom was pushed away. <a href="https://youtu.be/vHWDNrrfhnI?si=ywafNIzUZUpWuCA0&t=135">Soyuz Style</a> - </a href="{{site.url}}/assets/images/more-kos-boosters/SoyuzBoosterSeparation.jpg">This image really gets the point across</a>. The solution was the decrease the force the decouplers exerted and to add small solid separation motors. Note that the force vector of the separation motors runs through the center of mass of the boosters to ensure no torque.

### <b>Upper Stage Burn</b>


