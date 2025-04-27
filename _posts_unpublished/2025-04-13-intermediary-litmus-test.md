---
layout: post
title: "Useful Intermediary Steps Are A Fundamental Litmus Test For Startups And All Large Projects"
categories: Technology
author:
 - Christopher Kalitin
---
<head>
    <meta property="og:image" content="{{site.url}}/assets/images/jevons-learning-rate/notebook.jpg">
</head>

Examples of successes: SpaceX, Rocket Lab  
Potential Successes, right strategy: Terraform, Stoke, Comma  
Failures: Astra, Mars One  
Coutner Example: Blue Origin (capital prevents death)  

Rocket Lab Example - they almost follow Blue Origin's motto better than Blue Origin

Blue Origin and other huge companies taking on huge projects are not the same phenomenon as startups, but they suffers from the same pitfalls. Terraform is a useful example here, how large companies could easily fail at what terraform is doing.

What is the framework?
1. Intermediary steps on a large project (write the proof about why this is required, non-trivial, need more examples)
2. Shippable Intermediaries prove you have something useful
3. Revenue generation is a further test, and keeps you alive - if not revenue generating you are only proving your right to more investment capital

Intermediary steps allow you to course correct if your vision of the future market is incorrect (Rocket Lab and Astra example!!). 

What I need to explore more:
1. Examples, and crucially, more counterexamples
2. Why is course correcting such a fundamental requirement? Historical examples.

You can apply this more personally too. If you want to dropout to start a business, make sure you're the kind of person that'll actually work all day and not play video games all day because you saw a tiktok of a dropseller once.

Or, on projects you need useful intermediary steps, don't try to jump to the end. Maybe this is useful on Solar.

It's error correction, more feedback means more chances to correct your course. Error correction! I couldn't get the word earlier.

Blog post:  
Blog post:  
Blog post:  

Several years ago I saw [this clip of George Hotz](https://youtu.be/_L3gNaAVjQ4?si=timvK1RTGQ4UDSr7&t=3199) in which he described the mission of Comma AI as "solving self-driving cars while delivering shippable intermediaries."

In that clip and elsewhere he describes how actually shipping products to customers is a fundamental test of a startup that allows you to course correct quickly and prove your right to capital.

This blog post will describe how we can take the slightly more fundamental idea of useful intermediary steps and apply this to large scale projects, startups, and capital allocation.

- when it's finished, write a better introduction

### <b>The George Hotz Idea</b>  

George Hotz mainly focuses on the idea of shippable intermediaries in the self-driving car space where so many companies don't follow this principle and end going backrupt after wasting billions in capital. 

At Comma AI, they sell the Comma 3 device to customers that allows level 2 autonomous driving and they release updates of their [openpilot software on Github](https://github.com/commaai/openpilot). They sell a product to customers and update it to get feedback on new releases. With a large developer community (openpilot is open source), they get good useful feedback quickly.

In contrast, there are a surprising number of companies that spent billions developing self-driving car software that never actually shipped a product to customers! Examples include Argo AI ($3.6B raised), Aurora ($2.9B), and Cruise ($10B raised, recently shut down after offering some rides in SF).

Given the poor trajectories of these companies, they clearly didn't buy down enough technical risk early during previous funding rounds but regardless were given billions in capital to continue development. On the other hand, Comma AI has raised around $10M and has produced more value for customers than all the companies mentioned above combined (Comma has on the order of [10k active users](https://comma.ai/openpilot)).

### <b>Focusing on Useful Intermediary Steps Allows For Course Correction</b>  

<i>"Instead of charting a course that allows them to take smaller steps, rapidly iterate, and demonstrate measurable progress, we tend to see most companies instead devoting resources to extended solicitation of massive investments with technology and teams that are simply not prepared for it."</i>  
\- [Kyle Adkins of Terraform Industries](https://terraformindustries.wordpress.com/2025/03/25/no-excuses-how-to-build-scale-and-win-in-hard-tech/)

The fundamental principle behind the shippable intermediary is that useful intermediary steps allow for course correction. By extension, this allows for learning the topology of the problem space and error correction. 

Intermediary steps allow for course correction before sunk costs build up because they are incremental steps on the course to a larger goal. Through each intermediary step, you learn the topology of the landscape your project is moving through and can optimize your path to the final goal. This constant course correction is particularly important for large new R&D projects where each new piece of information has the potential to have a great impact on the course of a project. This allows for new information to be gathered and used to correct the course of a project before sunk costs build up and you end up with a $10B company with no useful product.

Error correction is important to a greater set of projects than learning the topology than the problem space. Novel projects are the subset of projects where you must learn what lies ahead. In the larger set of all projects, error correction is important to ensure that you are on the best path to achieve your goal. This includes projects with well worn paths. Building another skyscraper doesn't require fundamental research into the properties of concrete, but it does require error correction when not every human is working in the same direction and you get desyncs.

We can consider the development of early rocket propellants to illustrate the important of intermediary steps. The A4 rocket engine (V2 missile) had an ISP of ~215 seconds and was fueled with liquid oxygen and a mixture of 75-25 ethanol-water. Without dozens of intermediary steps between the devlopment of the A4 and the Saturn V, we would have optimized the Kerolox or Hydrolox rocket engines required to get to the Moon (just imagine trying to get to the Moon on 215 seconds of ISP!). Or, without the iterations between the A4, XLR50, LR-105, and H-1 engines (among many others) the F1 could not have been built to the standard it was.

In nearly every successful novel project in history you find intermediary steps. For example, the Hoover dam could not have been built to last many millenia without many previous smaller dams and massive concrete projects to learn the characteristics of the [heat of hydration of concrete](https://youtu.be/4EdMImlZE2s?si=3UJYCRIURTB5jtSX&t=2277). The early monumental [Oppau](https://en.wikipedia.org/wiki/Oppau_explosion) and [Leuna](https://en.wikipedia.org/wiki/Leuna_works) Haber-Bosch plants could not have been built without Bosch's earlier 8 foot tall oven tests where BASF discovered many metallurgy edge cases when working at 200 atm and 600 degree celsuis to synthesize Ammonia (this is actually a completely fascinating story and you must read [The Alchemy of Air](https://docs.google.com/document/d/178mx6r7ClbddQZYO9mZ4dCBUmYg97o4XSDJwmtkx7ME/edit?usp=sharing)).

At the top of this section there's a quote from [Kyle Adkins' blog post](https://terraformindustries.wordpress.com/2025/03/25/no-excuses-how-to-build-scale-and-win-in-hard-tech/) about Terraform Industries' plan to succeed in large scale hydrocarbon synthesis. Among many insights in this blog post, he describes how Terraform's strategy is to ensure each step on the path to dominating the hydrocarbon market is useful, and a great way to demonstrate you're doing something useful is through generating revenue.

"The companies that succeed start by dominating a valuable niche and scaling from there. Terraform follows this principle by ensuring that each deployment of synthetic fuel production generates revenue, avoiding the trap of infinite fundraising cycles."

It's not too difficult to consider a situation in which a larger company would take fewer intermediary steps and fail at large scale hydrocarbon synthesis. [Casey Handmer recently wrote a blog post](https://caseyhandmer.wordpress.com/2024/11/09/solar-and-batteries-for-generic-use-cases/) about which electrical loads are best suited to the Terraform strategy of using solely intermittent solar for industrial processes. He made sure to get the point across that if you don't consider something like the capex per unit power of your process, you could easily fall in a situation in which you are terribly underoptimized for cost. The intermediary step towards large scale hydrocarbon synthesis is having a Casey Handmer do some fundamental research into the most cost effective source of hydrocarbons in 20 years. As [Handmer's experiences at JPL illustrates](https://podcasts.apple.com/ca/podcast/energy-economics-and-rocket-science-with-casey-handmer/id1753399812?i=1000665423662) (timestamp: 44:45 and 55:12), large organizations are not always effective at facillitating this kind of research. Really, I'm just making the case for Polymaths.

### <b>Prove Your Right To Capital</b>

1. this is an extention of the principle shown above
2. Through showing your ability to execute (requires course correction to do well) you earn the right to raise capital
3. This allows you to continue on a path to a larger goal while doing something to prove you know what you're doing

### <b>Revenue Generation on the path of the Master Plan</b>

1. Raising capital doesn't actually mean your business is sustainable
2. Profitability is required for sustainable survival
3. The reason you raise capital instead of being profitable on a smaller scale is because you're working towards something greater (Rocket Lab example, mention intermediaries)
4. Generating revenue extends runway and has the other benefits (revenue means you provide value)

Casey Handmer: "Slow is fake."  
https://x.com/CJHandmer/status/1567353528087363586

