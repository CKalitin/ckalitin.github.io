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

![Image](/assets/images/managing-technical-teams/meme.png)  

Several years ago I saw the meme above and noticed the majority of the discussion around it was people speaking from their perspective of the child, being forced to learn something they would never find any use for. I've done [my share of complaining about education](https://ckalitin.github.io/idea/2025/04/26/low-leverage-university.html), but my conclusion is the exact opposite. I feel an extreme amount of sympathy for the small number of students in that classroom who will make use of whatever is being taught, and being forced to sit next to dozens of other kids who slow their own progress.

I've been that kid, and have recently come to the conclusion that fostering the quick advancement of students that show promise at becoming exceptionally useful people is far more useful than catering to the median student. After examining how I came to this conclusion, I found it stems from my understanding of exceptionally competent technical teams and their positive impacts on the future of humanity.

I've spent the past couple of months reading books on some of the early monumental technical projects in human history. There are very many common themes between these, especially in how the teams of exceptionally competent engineers were managed. The following insights are distilled from these books and my own experiences.

I was that smart kid in the meme
Reading about early monumental technical projects and their leaders recently.

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