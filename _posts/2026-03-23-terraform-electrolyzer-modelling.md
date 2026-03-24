---
layout: post
title: "Terraform Industries Electrolyzer Economics Modelling"
categories: Projects
tags:
    - Projects
    - Drafts
author:
 - Christopher Kalitin
word_count: 2000
---
<head>
    <meta property="og:image" content="{{site.url}}/assets/images/terraform-electrolyzer-modelling/electrolyzer_3d_graph_with_lines.png">
</head>

![Image](/assets/images/terraform-electrolyzer-modelling/electrolyzer_3d_graph_with_lines.png)  
*One of the beautiful charts that came out of this modelling.*

In 45 days I will begin work at Terraform Industries as a Mechanical Engineering Intern. At that time I must be able to hold my own in a conversation about the economics of the Terraformer and have sufficient knowledge of the entire design space. To this end, I’ve spent nearly every waking minute of my last 52 hours reseraching and modelling the Terraformer.

As a primer, Terraform Industries is a startup that is developing a process to synthesize Natural Gas from Sunlight and Air. Natural Gas is CH4, you can get the C from atmospheric carbon dioxide and the H from atmospheric water vapor. By creating a process that leverages very cheap solar energy (direct DC from the solar, not going through the electrical grid) to power this process, they can produce Natural Gas at a cost that is competitive with fossil Natural Gas. This closes the carbon cycle but more importantly gives us abundant and cheap fuels anywhere in the world with enough sunlight to sustain agriculture.

Casey Handmer has written at length about the specific strategy of Terraform Industries, and I implore you to read these blog posts:
- [Terraform Industries Whitepaper](https://terraformindustries.wordpress.com/2022/07/24/terraform-industries-whitepaper/)
- [To Conquer the Primary Energy Consumption Layer of Our Entire Civilization](https://terraformindustries.wordpress.com/2025/04/03/to-conquer-the-primary-energy-consumption-layer-of-our-entire-civilization/)

51 hours and 27 minutes ago I read this blog post by Klaasnotfound which criticizes many of Terraform Industries approaches. To ensure that the company I aspire to work at for decades is not firmly rooted in a flawed strategy, I decided to do my own due dilligence, and this blog post covers just the Electrolyzer economics portion of that due dilligence.

Key charts (well, points):
- Introduce the Klaas piece - and I'm working at Terraform and working on a full analysis and technical work will come when I'm there, for now modelling among my other technical projects, more blog posts soon!
- His mistake is using aspirational numbers from strange sources
- I took a more nuanced and rigorous approachs by sorting electrolyzer cost data points into stack / full plant and estimate / actual costs
- *CHART* cost vs eff
- Overview of electrolyzer methods, the technology doesn't actually matter here
- Overview of stack vs plant, charts from the World Bank Report
- When I plot it out, Handmer's line follows perfectly. Perfectly calibrated prognostication
- Let's assume a case in 2030 where the AEM numbers actually happen, green line fit that goes a little above terraform at 40 $/kW, not Terraform's long-term target of $20/kW, but below the $50/kW that Handmer used in some estimates
- This is a big focus on this post, comparing optimistic estimates of AEM to Terraform's strategy (with its optimistic estimates)
- *CHART* Cost vs eff / capex - note the capex relation is the lines
- It's a downwards parabola
- Now that we have cost and many data points of electrolyzer processes with cost and efficiency, we can plot them together
- *2 CHARTS* Cost vs Efficiency and Capex, both 3d and 2d
- I Claude Coded all of these charts and the 3d was a little much but still looks nice so I'll keep it in with the 2d
- From the charts above you see that the lightest parts (yellow) are where you want to be
- and Terraform's strategy is a valid optimization assuming my assumptions of 1 cent per kWh, 25% capacity factor, 10 year amortization 
- I used 10 year amortization because most of the AEM / PEM methods assumed 10 year amortization, which I'll get into in the next section
- Analysis of that one Klaas paragraph, it's alright we all make mistakes and don't think hard enough in places, but I'll call you out
- *2 CHARTS* opex vs capex breakdown
- Lets breakdown the cost curves we got earlier into their capex and opex contribution
- We notice that with high-efficiency (efficiency here is kWh/kgH2, not %) processes, capex dominates
- with low-efficiency processes, opex dominates
- Like Amdalh's law, this means high-efficiency processes focus mostly on capex reduction, while low-efficiency processes focus mostly on opex reduction
- opex reduction happens automatically through solar module costs declining (future terraform modelling blog post will cover this)
- With high efficiency, you optimize for a higher amortization period
- With low efficiency, you optimize for lower electricity costs, which again is automatic
- *CHART* %capex vs efficiency / capex
- By Amdalh's law, we want the primary cost driver to be what we can control
- At 80 kWh/kgH2, opex dominates in all cases, even with 3 year amortization
- Capex is so low that electricity cost domaintes
- Looks at the previous charts, this is very obvious as the orange section is bigger than the blue section on the right
- The Terraform strategy is shorting the price of solar by betting on production processes that have low capex, are electrically inefficient, and very sensitive to electricity costs - This is perfectly encapsulated by being at the right side of the chart