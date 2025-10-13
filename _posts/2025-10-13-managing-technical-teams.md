---
layout: post
title: "Managing Technical Teams"
categories: projects
tags:
    - Projects
    - Drafts
author:
 - Christopher Kalitin
word_count: 700
---
<head>
    <meta property="og:image" content="{{site.url}}/assets/images/managing-technical-teams/meme.png"/>
</head>

Distilled Insights / Ideas:
 - The way you manage a small strong team is completely different from a large team with lower average competence per person.
    - Engineers are not the ground truth in large teams, managers are.
    - Exceptionally competent engineers can instantly make decisions that accelerate progress (when leaders allow / encourage this, docking collar example)
 - UBC Solar is a relatively benign and fun example of a slightly-to-large team with varying levels of competence.
    - Excessive documentation is required because your replacement will almost always be less competent than you, and won't make decisions as quickly or in the same way.
    - Design reviews are required so novice engineers don't go off in suboptimal directions. (I'm an example)
    - Integration meetings are required because of lack of interdisciplinary knowledge. (What do the mech teams do? I'm not sure how I'd possible contribute over there, but am sure on the electrical side.)
    - I tried to incessantly get everyone I know to apply, maybe this was a mistake you only actually want the most exceptionally competent people.
    - Contrast to rule 5 (Johnson wrote those rules in half a night, I aspire for something similar with these blog posts, distilled insights)
 - Exceptionally competent engineers are individual agents that seek out critical path problems and attack them
    - Kaiser quote
    - Dennis Overholter stealth discovery story
    - Rule 1 and 3
    - Eg. MCC example where it's only possible with a small team of exceptional engineers
    - Karpathy example of course
 - Team progress diverges when functional goals aren't explicitly defined
    - Tesla Bot example
    - Current sensor example
    - Gene Kranz quote on NASA (higher level)
    - Contrast to rule 2

Key ideas:
 - Benefits of small strong teams
    - Engineers as ground truth
    - Rapid decision making (docking collar or rules)
    - Autonomously attacking critical path problems (Overholter)
    - Some projects require this (MCC)
 - What must you do in the absence of a small strong team
    - Documentation
    - Design reviews
    - Integration meetings
    - Solar examples
 - Team progress declines without clear functional goals
    - Tesla Bot
    - Current sensor
    - NASA
 - Finally, how do you find exceptionally competent engineers?
    - Kaiser quote

![Image](/assets/images/managing-technical-teams/meme.png){: height="300px" }  

Several years ago I saw the meme above and realized I came to the exact opposite conclusion as most people discussing it. I've done [my fair share of complaining about education](https://ckalitin.github.io/idea/2025/04/26/low-leverage-university.html), but the most useful insights from this meme is not to feel sympathy for the child.

The very small number of "smart kids" in that classroom have the potential to go on to do extremely useful things for humanity that will improve all of our lives and allow prosperity long into the future. Catering to such students that show promise at doing useful things is far more important than catering to the median student, and I feel far more sympathy for the smart kids being forced to sit in that slow boring classroom - having been one of them - than the students slowing them down.

Catering to the smart kids does not end with education, but it extends to using their abilities to maximum leverage in technical projects. This is the focus of this blog post.

I've spent the past couple of months reading books on some of the early monumental technical projects in human history. There are very many common themes between these, especially in how the teams of exceptionally competent engineers were managed. The following insights are distilled from these books and my own experiences.

### **Small Strong Teams**

 - Benefits of small strong teams
    - Engineers as ground truth
    - Rapid decision making (docking collar or rules)
    - Autonomously attacking critical path problems (Overholter)
    - Some projects require this (MCC)

"If the team is small and strong, then engineers and the code are the source of truth. So they [engineers] have the source of truth, not some manager."
https://x.com/rohanpaul_ai/status/1977266545333297525

Elon instantly making a decision on the docking collar, this can be done with exceptionally competent engineers
https://x.com/yrouel86/status/1967887843113799969

In some cases, success is only possible with a small team of exceptional engineers. Eg. SCE to AUX.
“In the seconds-critical world of Mission Control, a single individual must assume responsibility to take any actions needed for crew safety and mission success.”
Chapter 22 Failure is Not an Option, Gene Kranz

Kelly Johnson’s Rule #3
“The number of people having any connection to the project must be restricted in an almost vicious manner. Use a small number of good people.”
rule 1: "The Skunk Works manager must be delegated practically complete control of his program in all aspects."
rule 5: "There must be a minimum number of reports required, but important work must be recorded thoroughly."

Dennis Overholter stealth discovery story?

### **What Must You Do In The Absence Of A Small Strong Team?**

 - What must you do in the absence of a small strong team
    - Documentation
    - Design reviews
    - Integration meetings
    - Solar examples

“Our people knew what they were doing, worked skilfully under intense pressure, and skirted hazards mostly by sheer expertise and experience. But as we grew the skill level decreased and sloppiness suddenly became a serious problem.”
Chapter 3, Skunk Works, Ben R. Rich

UBC Solar uses design reviews because we get new first year engineering students every year that don't really know how to do useful things. 
This is the failure mode of my first project (current sensor), and contrast it to how quickly I designed the circuit for the next generation current sensor.
If you aren't dead set on a functional goal, you'll go in suboptimal directions (Tesla Bot Kevin Huang example). 

Integration failures occur when everyone does not have a clear view of everything going on, this is why being interdisciplinary is so important. (QUOTE HOW TO BUILD A CAR)
“Engineers needed to become operators. There was a hell of a difference. An engineer can explain how a system should work in theory, but an operator has to know what the engineer knows and how the systems tie together to get the mission accomplished.”
Chapter 3 Failure is Not an Option, Gene Kranz

“What are they doing? Compiling one million sheets of paper every day. Reports and data that no one in the bureaucracy has either the time or the interest to read.”
Ben R. Rich on the cost overruns due to countless USAF auditors on the B2 bomber program.

### **Team Progress Asymptotically Approaches Zero Without Clear Functional Goals**

 - Team progress declines without clear functional goals
    - Tesla Bot
    - Current sensor
    - NASA

Or, goes backwards.
https://caseyhandmer.wordpress.com/2025/01/17/dittemores-law/

rule 2: "Strong but small project offices must be provided both by the military and industry."

Clear functional goals are required at all levels:
“We must revitalise NASA. Lacking a clear goal, the team that placed an American on the Moon, NASA, has become just another federal bureaucracy beset by competing agendas and unable to establish discipline within its structure.”
Epilogue, Failure is Not an Option, Gene Kranz

### **Finally, How Do You Find Exceptionally Competent Engineers**

Hopefully I can find the Casey Handmer quote about them being emergent in the right organizations. From a podcast a couple months ago.

“You find your key men by piling work on them.
They say, I can't do anymore. And you say, sure, you can. So you pile it on, and they're doing more and more.
Pretty soon, you have men you can rely on absolutely. You have an organization that can really get things done.”
From Founders: #66 Henry Kaiser: Builder in the Modern American West, Apr 7, 2019

Elon simplifies all of this down to: speed of innovation is the differentiaing factor