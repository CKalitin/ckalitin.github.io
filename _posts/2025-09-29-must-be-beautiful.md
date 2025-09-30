---
layout: post
title: "It Must Be Beautiful"
categories: ideas
tags:
    - Ideas
    - Drafts
author:
 - Christopher Kalitin
word_count: 1213
---
<head>
    <meta property="og:image" content="{{site.url}}/assets/images/must-be-beautiful/Brightside-Pack.png">
</head>

"Everything is beautifully finished. I’ll go down and look at a launch vehicle and everybody knows that the cable ties holding the wire looms should be 50 millimeters apart, equally spaced within Nibs pointing up. You go down there and all the wiring looms are just works of art

And you can argue that why is that really needed? Does it matter if they’re 50 millimeters or 60 millimeters apart? Probably not. But the reality is, if someone has taken the pride to make it all look just absolutely beautiful, then chances are they’ve taken the pride to look at the wires at their cable tying and the tray, they’re cable tying too.

I think there’s nothing better than somebody walking away from their job going, that’s the best that can be. So it’s hard coded into the DNA of the company. It’s one of our core values and that is built beautiful things. So anything that goes out of the door of Rocket Lab must be beautiful."  
\- [Peter Beck, Rocket Lab](https://youtu.be/IueD0_f7O8k?si=m25ORLIJwAgbrrNi&t=864)

### <b>Effort Put Into Beauty Provides Positive Externalities</b>

On the UBC Solar student design team I've recently been advocating for our battery pack, workspaces, car, and generally everything to be more beautiful. Generally, I've been saying this off hand as something that is self evident. This means I have a perfect opportunity for me to write the proof for something I find extremely clear, that not everyone immediately sees.

Chasing beauty in your work and environment leads to a number of positive externalities. First, if you hear a voice in the back of your head always advocating for beauty, you will not be able to live with little mistakes or issues that could grow in the future. Second, the pursuit of beauty extends to your workspace and all your work. Third, chasing beauty encourages taking pride in your work, which is extremely important to producing high quality and useful things.

A perfect illustration of the first point - beauty meaning you can't live with little mistakes - is what happened to [UBC Solar's motor at FSGP 2025](https://ckalitin.github.io/solar/2025/07/18/motor-hall-sensors.html). In 2024, the motor power wire was secured to structural components of the vehicle using zip ties and UBC Solar did 94 official laps. A year later, the same wire was not secured at all and the motor power wire came into contact with the rotor and the friction quickly wore through the insulation of the motor coils, shorting adjacent phases. We were only able to do 5 laps at competition because no one took the time to examine every bit of the car to ensure no little mistakes like a loose wire would cause a critical failure.

At the top of this post is a quote from Peter Beck, the founder and CEO of Rocket Lab, where he boasts about the spacing of zip ties on Electron's wiring harnesses. If someone had the same passion for beautiful wiring harnesses on UBC Solar, we would have done far more than 5 laps in 2025.

*"Renovating UBC Solar’s bay, an ownership-enforcing rite-of-passage for new exec teams."*  
\- [Mischa Johal, former UBC Solar Electrical Lead](https://mischajohal.com/Thoughts/Reflecting-on-UBC-Solar)

Achieving beauty in your work or a product you build is not easy if you are surrounded by a messy workspace. If it is difficult to find tools or parts, your work is less efficient and you end up not working as quickly as you could, or worse, making mistakes and misplacing critical items. Keeping your workspace beautiful requires it being clean and organized.

This, as with many of the points I'll make in this post, become self-evident to you only once you notice something that prompts you to believe it as well. As a kid I had a messy room most of my life, only after hearing Peter Beck preach beauty in aerospace hardware and seeing Solar's motor fry at comp did I truly internalize the lesson.

### <b>Elegance Is Key</b>

“All of us had been trained by Kelly Johnson and believed fanatically at his insistence that an airplane that looked beautiful would fly the same way.”  
\- Ben R. Rich, Skunk Works

An elegant design is one that maximizes a desired trait while minimizing the complexity and cost required to achieve it. Such elegance in a design is a subset of beauty. Beauty is possible without elegance, but elegance itself is a form of beauty.

![Image](/assets/images/must-be-beautiful/Brightside-Pack.png){:height="400"}  
*Left: A preliminary design of UBC Solar's third generation battery pack. Right: The final design with less wasted conductor length, minimizing electrical losses and risk of shorts.*

UBC Solar went through several minor and major iterations during the design of our third generation battery pack. The preliminary design used bolts for electrical connections (bolts caused Stanford's solar car fire), required significant conductor length (see the cable routing on the right side of the left image), had poor accessibility for battery monitoring cell boards, and had a number of other issues.

In contrast, the final design eliminated the majority of the wasted conductor length by using pin connectors, organized the HV- and HV+ connections on either corner of the same side of the pack, and made the battery monitoring boards easily accessible (thank god for that!). All these changes made the battery pack more elegant, achieving the same result with less complexity, cost, and risk. Part of why I've been mentioning beauty so much on UBC Solar is that I see the risk of our next pack not being a particularly elegant design, and I want to avoid that!

"In traditional Japanese aesthetics, wabi-sabi (侘び寂び) centers on the acceptance of transience and imperfection. It is often described as the appreciation of beauty that is 'imperfect, impermanent, and incomplete'."  
\- [Wikipedia](https://en.wikipedia.org/wiki/Wabi-sabi)

It is important to note that elegant designs do not require perfection. A design can be elegant and beautiful without being perfect. There's some elegance in an [O(1) search space L1 cache of clothes sitting on your floor](https://x.com/0xAsync/status/1607541407937339392) while such a situation is not perfect, beautifully symmetric, or particularly clean - focusing on a subset of the beauty in this situation as other negative externalities can present themselves.

### <b>Exploration Should Reveal More Beauty</b>

Attention to detail in every aspect of design - especially when documented - creates a space for future curious individuals to explore and discover every tradeoff and elegant decision made in the design. A beautiful design should make more sense as you examine it, with every decision self-evidently justified. This is one of the fundamental aspects of pursuing beauty in your work, deeply considering every decision and tradeoff the ensure you make the correct choice at every branching point. 

Such attention to detail is not possible in every situation, given the constraints present on every design. Such constraints mean every iteration of a design cannot be perfect, but we can always make marginal progress to the ideal of a perfect beautiful design. In fields where work has stacked up over decades, such as aerospace or semiconductors, beauty is present in the form of decades of accumulated knowledge and design decisions that have been refined over time into a beautiful culmination of work. Such fields are where beauty can be hardest to contribute to, as so much has been achieved already. However, a marginal step in the direction of beauty is always possible, and such steps are what lead us to the ideal an elegant, perfect, beautiful design.