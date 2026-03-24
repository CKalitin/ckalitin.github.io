---
layout: post
title: "Terraform Industries Electrolyzer Economics Modelling"
categories: Projects
tags:
    - Projects
    - Drafts
author:
 - Christopher Kalitin
word_count: 1862
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

51 hours and 27 minutes ago I read [this blog post by Klaasnotfound](https://klaasnotfound.com/2025/06/03/terraform-industries-business-case-doesnt-add-up/) which criticizes many of Terraform Industries approaches. To ensure that the company I aspire to work at for decades is not firmly rooted in a flawed strategy, I decided to do my own due dilligence, and this blog post covers just the Electrolyzer economics portion of that due dilligence.

## **Electrolyzer Cost Vs Efficiency**

![Image](/assets/images/terraform-electrolyzer-modelling/handmer-cost-vs-eff.png)  

Terraform Industries gets their hydrogen from electrolysis which uses an electrochemical cell to split H2O into H2 and O2. There are several methods of electrolysis including Alkaline electrolysis, Proton Exchange Membrane (PEM) electrolysis, and Anion Exchange Membrane (AEM) electrolysis, etc. For the purposes of this analysis, the technical details behind each method is unimportant and the economic model is agnostic to the method, it only cares about the cost and efficiency of the process.

Above is a chart from Casey Handmer's blog post [How to Produce Green Hydrogen for $1/kg](https://terraformindustries.wordpress.com/2023/08/16/how-to-produce-green-hydrogen-for-1-kg/) that shows the capex cost ($/kW, cost per power input) of an electrolyzer vs its efficiency (kWh/kgH2). Handmer's goal here is to model the relation between cost and efficiency of electrolyzers given various design decisions.

To illustrate $/kg, he uses the example of a kettle at 20 $/kW, as a kettle uses ~1 kW and costs ~$20. Efficiency is measured in kWh/kgH2 here, not percent as you may be used to. The energy content of 1 kg of H2 is 39.4 kWh, so we can compute efficiency as kWh required to produce 1 kg of H2 divided by 39.4 kWh, but we don't do that here because % efficiency isn't that important.

![Image](/assets/images/terraform-electrolyzer-modelling/klass-cost-vs-eff.png)  

In Klass' analysis, he overlayed Casey Handmer's model of electrolyzer cost with data points on electrolysis costs from various companies. It shows that the cost at higher efficiency could be much lower than Handmer predicted, which is potentially a big inditement of Terraform's strategy!

Klaas makes the mistake of using aspirational forward-looking numbers for electrolyzer stack cost from strange sources, instead of more concrete data points from actual electrolyzer plants. I took a more nuanced and rigorous approach by collecting more data points and sorting them into electrolyzer stack vs full plant costs and estimates vs actual costs. I go into more detail in [my notes](https://docs.google.com/document/d/1tDWz1ySHcHYq-t8HoBXNIyI4U1g-nvfA8-StTX8SiJg/edit?tab=t.90il04kjrwsf) (ctrl-f "BLOG POST READERS CTRL F HERE" to get to the specific section).

![Image](/assets/images/terraform-electrolyzer-modelling/electrolyzer.jpg){:height="250px"}  
*This shows one electrolyzer cell, many of which are combined into an electrolyzer stack, and many stacks are combined into an electrolyzer plant.*

![Image](/assets/images/terraform-electrolyzer-modelling/electrolyzer-cost-pie.jpg)  
*Source is this [World Bank Technical Report](https://documents1.worldbank.org/curated/en/099022326123011297/pdf/P506220-b45b0865-8706-4862-8792-d8cc71f84569.pdf)*

An electrolyzer stack is the core part of the electrolyzer that contains the electrochemical cells, and is a subset of the cost of an entire electrolyzer plant. As the pie chart above from the World Bank shows, it's very important to distinguish between these two costs as the Electrolyzer stack is only one component of cost.

![Image](/assets/images/terraform-electrolyzer-modelling/electrolyzer_cost_vs_eff.png)  
*Sources [available here](https://docs.google.com/spreadsheets/d/1r1VjkEGa8Ftf5orS9y2FDFu3sXiLq2zs2cJpQokQMtU/edit?usp=sharing)*

When I plot the data with the distinctions mentioned above, we notice that they are no functioning electrolyzer stacks or plants below Handmer's line (save one that I had to estimate the efficiency of using [this paper](https://www.frontiersin.org/journals/energy-research/articles/10.3389/fenrg.2026.1667072/full)).

Given Handmer's analysis was in 2024, it appears to be [perfectly calibrated prognostication](https://x.com/DMOPalmer/status/2031229258991857826?s=20).

Furthermore, Klaas' optimistic data points for AEM electrolyzers are not suitable compasisons to compare against Handmer's 2024 analysis. This rest of this blog post will be focused on comparing the optimistic estimates of AEM electrolyzers to Terraform's strategy. If AEM electrolyzers really are ~$250/kW at ~50 kWh/kgH2, does this pose issues for Terraform's strategy long-term?

## **Electrolyzer Cost vs Capex (a function of efficiency)**

![Image](/assets/images/terraform-electrolyzer-modelling/electrolyzer_cost_vs_eff_with_fit.png)  

To continue modelling design tradeoffs between various electrolyzer processes, I fit a curve to the 2030 estimates of electrolyzer capex cost vs efficiency. This fit is shown above as the green dashed line. It's slightly pessimistic for the high-efficiency data points as it mainly ignores the Verdagy AEM 2030 data point. It's also slightly pessimistic for [Terraform's long-term target of $20/kW at 50% efficiency (78.89 kWh/kgH2)](https://terraformindustries.wordpress.com/2023/01/09/terraform-industries-whitepaper-2-0/#:~:text=Our%20long%20term%20cost%20target%20is%20%2420%2FkW%2C%20which%20is%20comparable%20to%20an%20electric%20kettle%2E) as the fit results in ~$40/kW at that efficiency. It seems to be a happy medium.

With Handmer's function of cost vs efficiency and my fit of cost vs efficiency in 2030, we can model the cost of hydrogen as $/kgH2. Both of these lines are used as translations between efficiency and cost, so we can plot the data with two x axes, as shown below.

![Image](/assets/images/terraform-electrolyzer-modelling/electrolyzer_future_cost_est.png)  

In Handmer's model we see that the lowest cost for Hydrogen (asumming one cent per kWh, 25% capacity factor, and 10 year amortization) is around $1.5/kgH2. In my 2030 model, the cost is ~$0.95/kgH2.

We see that currently the Terraform strategy is obviously the valid optimization, but if we assume high-efficiency electrolyzers get significantly cheaper by 2030, the difference between Terraform's strategy and the high-efficiency strategy becomes smaller. There are some limitations to just assuming a line that goes to 40 kWh/kgH2, but the difference in cost is ~20% instead of a couple multiples.

We also see that higher efficiency processes are much more sensitive to the amoritization period, as they have higher capital expenditures initially, whereas Terraform's strategy is to deliberately target lower capex with an efficient process, resulting in net lower costs. More on this later.

Note that the 2030 Model is a downwards parabola because cost linear with respect to capex (cost = capex + opex) and capex is linear with respect to efficiency. So, we get a quadratic relationship between cost and efficiency.

## **Visualizing Cost vs Efficiency and Capex Simultaneously**

![Image](/assets/images/terraform-electrolyzer-modelling/electrolyzer_3d_graph_with_lines.png)  

![Image](/assets/images/terraform-electrolyzer-modelling/electrolyzer_heatmap_with_fit.png)  

- I Claude Coded all of these charts and the 3d was a little much but still looks nice so I'll keep it in with the 2d
- From the charts above you see that the lightest parts (yellow) are where you want to be
- and Terraform's strategy is a valid optimization assuming my assumptions of 1 cent per kWh, 25% capacity factor, 10 year amortization 
- I used 10 year amortization because most of the AEM / PEM methods assumed 10 year amortization, which I'll get into in the next section
- Analysis of that one Klaas paragraph, it's alright we all make mistakes and don't think hard enough in places, but I'll call you out

Above are two charts that overlap the cost of hydrogen onto the cost vs efficiency graphs from earlier. I Claude Coded these charts initially and the 3d one was a little much, but it still looks nice so I kept it in with the 2d heatmap version.

The lightest (yellow) parts of the charts are where you want to be. We see that Terraform's strategy is a valid optimization for lowering cost if you're along the red or green lines. Obviously you can't go too far off these lines because no extremely low cost high efficiency electrolyzers exist. 

For my analysis I've been assuming 1 cent per kWh, 25% capacity factor, and 10 year amortization. I used 10 year amortization because most of the AEM / PEM methods I found assumed 10 year amortization ([sources in this spreadsheet](https://docs.google.com/spreadsheets/d/1r1VjkEGa8Ftf5orS9y2FDFu3sXiLq2zs2cJpQokQMtU/edit?gid=1679586932#gid=1679586932)). If we were to assume a shorter amortization period ([Terraform is targetting 5 years](https://terraformindustries.wordpress.com/2023/08/16/how-to-produce-green-hydrogen-for-1-kg/#:~:text=offering%20%3C5%20year%20ROI%20with)), the Terraform's strategy looks even better.

“Why do we care? Does it even matter? If both approaches produce hydrogen at around $1.12 per kg, wouldn’t Terraform’s approach still be preferable because it doesn’t need batteries, energy management logic etc.? Well, no - because while the price per kg may be the same, the AEM electrolyzers will produce much more hydrogen! Running Terraform’s hypothetical 1 MW electrolyzer for 12,500 hours (25% of 50,000 hours) will produce 12,500,000 kWh / 80 kWh/kg-H₂ = 156,250 kg-H₂ over its lifespan (as noted in their blog post). Running a 1 MW AEM electrolyzer with cel = 200 $/kW and ηel = 45 kWh/kg‑H₂ for 17,500 hours (35% of 50,000 hours) will yield 388,888 kg-H₂, which is almost 2.5 times as much. For $1.11 per kg.”  
\- Klaas, in his [write-up](https://klaasnotfound.com/2025/06/03/terraform-industries-business-case-doesnt-add-up/)

At this point, I'd like to make a criticism of one of Klass' points. We all make such mistakes and at times don't think enough about what we say - as I might have done in this analysis - but that doesn't mean I won't call you out on it.

Above he says that even though Terraform and the AEM electrolyzer he benchmarks them against have the same cost per kg of hydrogen, the AEM electrolyzer still wins because it will produce more hydrogen with an equally sized solar array. This completely misses the point that we've already factored the cost of the solar array into our analysis with the operating cost of electricty ($0.01/kWh). 

Sure, a more efficient electrolyzer will produce more hydrogen with the same solar array compared to Terraform's process, but it would also be more expensive to build! We've already factored this into our analysis!

## **OPEX vs CAPEX Breakdown**




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