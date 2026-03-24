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

As a primer, Terraform Industries is a startup that is developing a process to synthesize Natural Gas from Sunlight and Air. Natural Gas is CH4, you can get the C from atmospheric carbon dioxide and the H from water. By creating a process that leverages very cheap solar energy (direct DC from the solar, not going through the electrical grid) to power this process, they can produce Natural Gas at a cost that is competitive with fossil Natural Gas. This closes the carbon cycle but more importantly gives us abundant and cheap fuels anywhere in the world with enough sunlight to sustain agriculture.

Casey Handmer has written at length about the specific strategy of Terraform Industries, and I implore you to read these blog posts:
- [Terraform Industries Whitepaper](https://terraformindustries.wordpress.com/2022/07/24/terraform-industries-whitepaper/)
- [To Conquer the Primary Energy Consumption Layer of Our Entire Civilization](https://terraformindustries.wordpress.com/2025/04/03/to-conquer-the-primary-energy-consumption-layer-of-our-entire-civilization/)

51 hours and 27 minutes ago I read this blog post by Klaasnotfound which criticizes many of Terraform Industries approaches. To ensure that the company I aspire to work at for decades is not firmly rooted in a flawed strategy, I decided to do my own due dilligence, and this blog post covers just the Electrolyzer economics portion of that due dilligence.

## **Electrolyzer Cost Vs Efficiency**

![Image](/assets/images/terraform-electrolyzer-modelling/handmer-cost-vs-eff.png)  

Terraform Industries gets their hydrogen from electrolysis which uses an electrochemical cell to split H2O into H2 and O2. There are several methods of electrolysis including Alkaline electrolysis, Proton Exchange Membrane (PEM) electrolysis, and Anion Exchange Membrane (AEM) electrolysis, etc. For the purposes of this analysis, the technical details behind each method is unimportant and the economic model is agnostic to the method, it only cares about the cost and efficiency of the process.

Above is a chart from Casey Handmer's blog post [How to Produce Green Hydrogen for $1/kg](https://terraformindustries.wordpress.com/2023/08/16/how-to-produce-green-hydrogen-for-1-kg/) that shows the capex cost ($/kW, cost per power input) of an electrolyzer vs its efficiency (kWh/kgH2). Handmer's goal here is to model the relation between cost and efficiency of electrolyzers given various design decisions.

To illustrate $/kg, he uses the example of a kettle at 20 $/kW, as a kettle uses ~1 kW and costs ~$20. Efficiency is measured in kWh/kgH2 here, not percent as you may be used to. The energy content of 1 kg of H2 is 39.4 kWh, so we can compute efficiency as kWh required to produce 1 kg of H2 divided by 39.4 kWh, but we don't do that here because % efficiency isn't that important.

![Image](/assets/images/terraform-electrolyzer-modelling/klass-cost-vs-eff.png)  

In Klass' analysis, he overlayed Casey Handmer's model of electrolyzer cost with data points on electrolysis costs from various companies. It shows that the cost at higher efficiency could be much lower than Handmer predicted, which is potentially a big inditement of Terraform's strategy!

Klaas makes the mistake of using aspirational forward-looking numbers for electrolyzer stack cost from strange sources, instead of more concrete data points from actual electrolyzer plants. I took a more nuanced and rigorous approach by collecting more data points and sorting them into electrolyzer stack vs full plant costs and estimates vs actual costs. I go into more detail in [my notes](https://docs.google.com/document/d/1tDWz1ySHcHYq-t8HoBXNIyI4U1g-nvfA8-StTX8SiJg/edit?tab=t.90il04kjrwsf) (ctrl-f "BLOG POST READERS CTRL F HERE" to get to the specific section).

![Image](/assets/images/terraform-electrolyzer-modelling/electrolyzer.jpg){:height="200px"}  

![Image](/assets/images/terraform-electrolyzer-modelling/electrolyzer-cost-pie.jpg){:height="200px"}  
*Source is this [World Bank Technical Report](https://documents1.worldbank.org/curated/en/099022326123011297/pdf/P506220-b45b0865-8706-4862-8792-d8cc71f84569.pdf)*

An electrolyzer stack is the core part of the electrolyzer that contains the electrochemical cells, and is a subset of the cost of an entire electrolyzer plant. As the pie chart above from the World Bank shows, it's very important to distinguish between these two costs as the Electrolyzer stack is only one component of cost.

![Image](/assets/images/terraform-electrolyzer-modelling/electrolyzer_cost_vs_eff.png)  
*Sources [available here](https://docs.google.com/spreadsheets/d/1r1VjkEGa8Ftf5orS9y2FDFu3sXiLq2zs2cJpQokQMtU/edit?usp=sharing)*

When I plot the data with the distinctions mentioned above, we notice that they are no functioning electrolyzer stacks or plants below Handmer's line. 

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