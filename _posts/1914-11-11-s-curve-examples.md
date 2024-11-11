---
layout: post
title: "S-Curves Will Set You Free"
categories: Technology
author:
 - Christopher Kalitin
---
<head>
    <meta property="og:image" content="{{site.url}}/assets/images/to-teach-engineering/Rocket.jpg">
</head>

Ideas:
1. Show the charts on historic S curves that I have
2. Define S curve
3. Give overview on why it happens
4. Learning Rate!!
5. Why does it level off?

Structure:
Section 1:
1. Define s curve briefly
2. Show all historic s curves
3. Explain why these are so powerful
Section 2:
4. Learning Rate is why they happen
5. Give examples of learning rate from the past and today
Section 3:
6. Conclude with predcitions

I've decided I'm going to be an <a href="https://x.com/Andercot/status/1855046549015052624">Econophysicist</a>.

What is an S-curve?
An s curve (sigmoid curve) is a specific shape of a graph of market share vs. time.
- Sigmoid etymology

The four stages of the S-curve:
1. Early R&D
2. Initial Commercial Appeal
3. Obvious exponential growth
4. Market Saturation
5. Stagnation

- This list looks very similar to the one from The Singularity Is Near
Precursor stage: dreaming, eg. Da Vinci drawing aeroplanes
Invention stage: the birth of a technology
Development stage: often more crucial than invention, many improvements that may be more important than the original invention
Maturity stage: interwoven into the fabric of life
Stage of the false pretenders: upstart threatens to replace the technology, but is missing some element, fails to surpass the original invention, short victory for the original technology 
Final stage: new technology renders the original technology into a stage of obsolescence
Actual final stage: The complete end of the original invention, eg. horse and buggy, records

Internet Archive sources, page 105: https://archive.org/details/kurzweil-ray-the-singularity-is-near/page/n105/mode/1up

![Image description]({{site.url}}/assets/images/s-curve-examples/Kurzweil-Notes-Screenshot.jpg){: width="600" .align-center}  

![Image description]({{site.url}}/assets/images/s-curve-examples/Kurzweil-Screenshot.jpg){: width="600" .align-center}  

- Mention that Growth rates exponentially decline, with the image example of EVs

The early growth of a technology is characterized by exponential improvements that do not make much of an impact for its total market share. The technology may be exponentially improving, but it is still not good enough for anyone to use it at scale. 
- There's a storage example here (silicon or something? SSDs?)

After this initial R&D phase, there is a smooth transition to a phase in which the technology begins to be adopted. It has exponentially declined in cost enough that it has its own niche. An example here is golf carts, they are a relatively small and niche market compared to all other vehicles, but it just so happens that the electric powertrain is more optimal for the user experience than an internal combustion engine. Throughout

- Casey Handmer Clip: https://youtu.be/ekEdq6PhC0Q?si=Verot8watOdSoCzD&t=551 on how to actually understand Moore's Law, why does it happen really? I still can't write the full proof.

What to cover:
1. Explain what an S-curve is
2. Show my charts
3. Explain how to use S curves to predict the future
4. Show my EV prediction
5. Describe the 5 stages of an S curve, then show Kurzweil's 7 stages
6. Explain Learning Rate <- Casey Handmer Clip
7. Show that growth rate linearly declines, derivative magic means a nice smooth exponential looking curve

### Historic Proof for S Curves

![Image description]({{site.url}}/assets/images/s-curve-examples/s-curve.png){: width="420" .align-center}

An S curve is a function that describes the shape of the market share vs. time graphs of almost all technologies. These S-curves are characterized by an extremely slow start, where they are arbitrarily close to zero; an exponential growth phase; then followed by a leveling off where they asymptotically approach 100% market share.

These S curves give you the ability to predict the future with a high level of certainty. <a href="https://asimov.fandom.com/wiki/Psychohistory">Psychohistory</a> brought to reality (Read Foundation). The reason you can use this method to predict the future with such high certainty is that the growth of almost all technologies that we have ever invented have followed the same pattern: the S curve.

At the begining of this year I began work on my longest blog post yet, <a href="https://ckalitin.github.io/technology/1961/04/12/transition-to-robotaxis.html">The Transition to EV Robotaxis (FUTURE CHIRS! UPDATE THIS LINK WHEN ITS DONE)</a>. In that post I extrapolated historic data on EV adoption by fitting an S curve to the data. I found that 50% of cars sold in 2027 will be EVs and 90% in 2030. To ensure fitting an S curve was an appropriate method to make such predictions, I aggregated the market share data of several technologies over the past century to confirm whether they followed the same growth pattern. All of these charts are shown below.

![Image description]({{site.url}}/assets/images/s-curve-examples/Chart-AMRadio.jpg){: width="420" .align-center}
![Image description]({{site.url}}/assets/images/s-curve-examples/Chart-TV.jpg){: width="420" .align-center}
![Image description]({{site.url}}/assets/images/s-curve-examples/Chart-ColorTV.jpg){: width="420" .align-center}
![Image description]({{site.url}}/assets/images/s-curve-examples/Chart-USHouseholdColourTV.jpg){: width="420" .align-center}
![Image description]({{site.url}}/assets/images/s-curve-examples/Chart-DisealLocomotives.jpg){: width="420" .align-center}
![Image description]({{site.url}}/assets/images/s-curve-examples/Chart-Internet.jpg){: width="420" .align-center}
![Image description]({{site.url}}/assets/images/s-curve-examples/Chart-MobileInternet.jpg){: width="420" .align-center}
![Image description]({{site.url}}/assets/images/s-curve-examples/Chart-EVMarketShare.jpg){: width="420" .align-center}

<a href="https://docs.google.com/spreadsheets/d/1jXpCkFLl7Gyy0wmI-rIuWAXR_NwLOPIjxLCfmX2XnO0/edit?usp=sharing">Source of the charts</a>

As you can see, all of these charts follow the same pattern. It's important to note that I didn't cherry pick any of these, I just searched for growth curves of early technologies and pixel counted to get the data you see above. Whether this introduces bias is up to you, but if you find any growth curves that don't follow the S curve, please <a href="https://x.com/CKalitin">immediately send me a message</a>. Such information would be extremely important - my preferred method of contact is carrier pigeon.

### Learning Rate Explains it All

Assuming you aren't frantically searching for a carrier piegon to correct me right now, we can assume that all the historic data above proves that all new technologies follow the S curve. If you have the mentality of a school student who only wants to answer the questions on the test, you can be satisfied with the information above and apply it to all new technologies to your Heart's content. However, if you're destined for great things, you must understand why S curves happen from first principles.

- Casey Handmer Clip: https://youtu.be/ekEdq6PhC0Q?si=Verot8watOdSoCzD&t=551 on how to actually understand Moore's Law, why does it happen really? I still can't write the full proof.

As <a href="https://youtu.be/ekEdq6PhC0Q?si=Verot8watOdSoCzD&t=551">Casey Handmer</a> (Highest information density speaker alive) explains in this clip and <a href="https://caseyhandmer.wordpress.com/">elsewhere</a>, the fundamental reason that technologies follow S curves is the exponential growth that occurs when learning rate is allowed to compound. 

<a href="https://www.investopedia.com/terms/l/learning-curve.asp">Learning rate</a> is the percentage decrease in cost that a technology experiences as a result of a cumulative doubling in production. For example, <a href="https://www.pv-magazine.com/2021/03/29/battery-costs-have-fallen-97-since-1991-claim-mit-researchers/">batteries</a> currently have learning rate of about 20%. Batteries double in production about every 2 years and fall in cost by about 20%. 

The framework of applying learning rate is most useful for new exponentially growing technologies where doubling time is low. For example, EVs have a doubling time of about 2-3 years. If we extrapolate this out a few years we find that we will undergo a massive paradigm shift where EVs become the most common vehicles. Electrical transformers can also be described by a learning rate, but because they are such a mature technology the learning rate is only 4% and doubling time is very long.

Like Handmer explains, exponential decrease in cost (described by learning rate) is due to the reinforcing cycle of increased demand which leads to increased production which leads to decreased cost which leads to increased demand. As a product increases in volume, the revenues from the product increase, which allows for further investment into R&D and production, which further decreases cost and increases the desirability of the product.

- Expand more on why exactly increased investment leads to lower costs

The most famous application of this framework is <a href="https://en.wikipedia.org/wiki/Moore%27s_law">Moore's Law</a>, which states that the number of transistors in an integrated circuit doubles about every two years. Moore discovered this with only about 4 points on the graph of transistor count vs. time, and because learning rate appears to be a fundamental law of the universe, he was able to predict the future of integrated circuits far into the future with a high level of certainty.

An even more remarkable fact about Moore's Law is that it <a href="https://youtu.be/pacRs6wYjOk?si=zAYlS3fUxVYJRfOf&t=2649">applies to computers that existed well before Moore stated his law</a>. When we look at the electromechanical, relay, and vacuum tube based computers that came before transistors in integrated circuits we find that the trend of exponential growth was present long before Moore's Law was discovered. Learning rate even works in the backwards direction before we ever thought about it!

# The Life Cycle of a Technology

![Image description]({{site.url}}/assets/images/s-curve-examples/Kurzweil-Notes-Screenshot.jpg){: width="600" .align-center}  

![Image description]({{site.url}}/assets/images/s-curve-examples/Kurzweil-Screenshot.jpg){: width="600" .align-center}  

This explains why electrical transformers will be superceded.