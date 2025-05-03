---
layout: post
title: "Jevons Paradox is a Subset of the Principle Behind Learning Rate"
categories: Technology
author:
 - Christopher Kalitin
---
<head>
    <meta property="og:image" content="{{site.url}}/assets/images/jevons-learning-rate/notebook.jpg">
</head>

<i>"It's not really it's not really an explanatory power to take Moore's law and then just kind of extrapolate."</i>  
- [Casey Handmer](https://youtu.be/ekEdq6PhC0Q?si=Verot8watOdSoCzD&t=551)

### <b>Introduction</b>

<a href="https://en.wikipedia.org/wiki/Jevons_paradox">Jevons Paradox</a> is the observation that when technological advancements make a production process more efficient, instead of decreased resource usage (as you'd expect), the usage of that resource increases. Essentially, with more efficient methods of utilizing resources, we actually end up using more resources, not less.

![Image description](/assets/images/s-curve-examples/Chart-EV-Prediction.jpg){: width="420" .align-center}  
<i>Above is a chart that shows my prediction for EV market share. This prediction applies the principle of learning rate to predict the future of the car market.</i>

In a previous blog post, <a href="https://ckalitin.github.io/technology/2024/11/19/s-curve-examples.html">S-Curves Allow You to Predict the Future</a>, I showed how the framework of learning rate can be applied to predict the future. In short, all technologies follow the same general pattern of cost decline and demand increase. This pattern is followed so regularly that you can use it to predict certain products/markets into the future with high accuracy.

The S-Curve is the graphical representation of this principle, which you can see in the chart above or in my [previous blog post](https://ckalitin.github.io/technology/2024/11/19/s-curve-examples.html). In the most basic sense, you can just fit an S-Curve to existing market data, and extrapolate into the future (so long as you check your assumptions carefully!).

Learning Rate is the percentage cost decline for a cumulative doubling in production. For example, <a href="https://www.pv-magazine.com/2021/03/29/battery-costs-have-fallen-97-since-1991-claim-mit-researchers/">batteries</a> currently have a learning rate of about 20%, meaning for every doubling in production (about every 2 years) they fall in cost by about 20%. Casey Handmer explains part of the concept in <a href="https://youtu.be/ekEdq6PhC0Q?si=Verot8watOdSoCzD&t=551">this clip</a> the rest is explained, again, in my [previous blog post](https://ckalitin.github.io/technology/2024/11/19/s-curve-examples.html).

### <b>Expressing Learning Rate With A Simple Diagram</b>

![Image description](/assets/images/jevons-learning-rate/learning-rate-cld.png){: width="300" .align-center}  
<i>Super simple diagram that shows the principle behind learning rate.</i>

New ideas:
- Describe the diagram through a single iteration?
- It's about the magnitude of difference.
- When demand as a function of cost has a derivative of 0, the loop is balancing.
- Cost decline as a function of production must be less than 1 (multiplicative).
- Balancing loops are just no demand growth.
- Reinforcing loops still have relatively constant cost decline.
- The cost decline is the fundamentally most important thing and where you can help
- Only then can you talk about Jevons
- Then, saturation

The diagram above can be used to describe the flywheel affect of learning rate that allows us to seemingly magically get 12% cheaper solar panels every year in perpetuity. It shows the casuality between production, efficiency, cost, and demand. 

For example, for a decrease in cost of 10% a given technology may have a marginal increase in demand of 20% leading to a marginal increase in production of 20%. After we go through a few intermediary steps in the diagram to be covered later, we get back to a marginal decrease in cost of 10%. This is a reinforcing feedback loop, which means that the technology will continue to grow until it reaches saturation. At saturation, the change in marginal demand as a function of cost and the change in marginal cost as a function of production will both equal 1 (ie. 0% growth when multiplying).

Note that in this case "saturation" refers literally to market saturation. For example, the market for automotive vehicles is mostly saturated at the moment with little growth, the flat end of the S-curve.

During [his interview on S3](https://youtu.be/ekEdq6PhC0Q?si=Verot8watOdSoCzD&t=551), Casey Handmer described the same idea in less words and in a more esoteric manner (took a while for me to understand):  
<i>"You have to understand why if you reduce the cost by 10% you'll increase demand by 20%, if you increase demand by 20% you can increase production by 20%, if you increase production by 20% you'll lower the cost by 11%."  
"If you're able to lower the cost by more than the marginal increase in demand demands increase in production you have this extremely positive feedback loop."</i>

![Image description](/assets/images/jevons-learning-rate/handmer-solar.png){: width="500" .align-center}  
<i>[Casey Handmer's](https://caseyhandmer.wordpress.com/2025/04/08/to-conquer-the-primary-energy-consumption-layer-of-our-entire-civilization/) graph of solar cost decline.</i>

In reality, cost decline as a function of production is almost always described a constant, as this graph above shows. During some time periods you get a gradual or sudden change in the slope of the curve, but in most years fitting a constant is a good approximation.






Notes:

It's all about the marginal affect of each step in the loop. If the marginal increase in demand is greater htan the marginal 

"So if you're able to lower the cost by more than the marginal increase in demand demands increase in production you have this extremely positive feedback loop."

In english: If you decrease cost by more than the marginal increase in production, you have a reinforcing feedback loop that will lead you into the heavens.

Why Jevons is a subset of learning rate:
- It increases efficiency, which makes the product cheaper, which increases demand, and now we're right back to the beginning of the loop.

At saturation:
The magnitude of the difference between the marginal decrease in cost and the marginal increase demand is the determining factor of the strength of Jevons Paradox. 

As the scale of a particular technology increases, the magnitude between marginal increase in demand and marginal decrease in cost decreases. 

Energy and Civilization notes:
"In countries with high per capita energy use, “at saturation”, Jevons paradox is weaker."

"In affluent countries, those whose high per capita energy use has approached, or already reached, saturation levels, the effect has been getting weaker." page 14

### <b>Further Fundamental Questions</b>

- Note stauration for future reserach
- Now why does more prod = greater efficiency? Future research, very fundamental question
- R&D can't be predicted, too low level for Psychohistory (economics)

- For future: when does learning rate decrease?

Cost decline must be a function of increased production. Eg. for 2x production 20% cost decline.

A constant 10% cost decline for 20% increase in demand is linear growth? No? No.

Is there no such thing as a balancing loop? That's just no demand growth! Demand as a function of cost is the determining factor, and the marginal decrease in cost as a function of production.

### <b>Anecdotes</b>

![Image description](/assets/images/jevons-learning-rate/notebook.jpg){:.align-center}  
<i>(<a href="{{site.url}}/assets/images/jevons-learning-rate/notebook.jpg">Expanded Image</a>) These are my notes from math class.</i>

A few days ago I was sitting in my honours integral calculus class and my brain was far too small to understand the subject matter. Naturally, I had the epiphany that Jevons Paradox can be described using the framework of learning rate. So, instead of spending the next 15 minutes learning trig substitution, I jotted down the notes you see above.

Update: I got exactly 50% in that class

![Image description](/assets/images/jevons-learning-rate/git.jpg){:.align-center}  
<i>This is the <a href="https://github.com/CKalitin/ckalitin.github.io/commit/b829dd56f774547c1bf48911ccfffa265ebaf28f">commit</a> where Copilot told me about Jevons Paradox. Oct 27 2024.</i>

I first heard of Jevons Paradox from Github Copilot when I was writing some notes on a blog post idea entitled Second and Third Order Effects of Increasing Energy Use. This idea came to me while reading The Capitalist Manifesto, so you might be able to guess at what my take would be. I write all my blog posts in VS Code as .md files, so Copilot is always trying to complete my sentences. Sometimes, it gives me a great topic to cover like Jevons Paradox in the context of one of my existing ideas!

Since then, Satya Nadella, Microsoft CEO, <a href="https://x.com/satyanadella/status/1883753899255046301">posted about Jevons Paradox</a> in the context of Deepseek supposedly demonstrating greater efficiency in AI training.

![Image description](/assets/images/jevons-learning-rate/vaclavsmil.jpg){:.align-center}  
<i>Excerpt from Page 14 of Energy and Civilization.</i>

I once again heard about Jevons Paradox while reading <a href="https://x.com/pronounced_kyle/status/1865939460468441314">Energy and Civilization</a>. This is one of the great books that takes a very high level idea ("energy") and connects it down to extremely low level phenomena. The Alchemy of Air is another amazing example. One great anecdote from Energy and Civilization comes from a description of early attempts at harnessing a fraction of the kinetic energies of wind and water. These same energy flows steered the great late fifteenth-century European transatlantic voyages to the Caribbean, instead of farther north. The same energy flows that allowed us to lower the cost of processing grain steered Columbus to the Caribbean!