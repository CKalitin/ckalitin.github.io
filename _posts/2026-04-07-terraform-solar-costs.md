---
layout: post
title: "The Path To 1 ¢/kWh Solar Costs for Terraform Industries"
categories: Projects
tags:
    - Projects
    - Latest Posts
author:
 - Christopher Kalitin
word_count: 2508
---
<head>
    <meta property="og:image" content="{{site.url}}/assets/images/terraform-solar-costs/solar_subcomponent_breakdown.png">
</head>

This is part two in my three part series of blog posts on modelling the economics of Terraform Industries:
1. [Terraform Industries Electrolyzer Economics Modelling](https://ckalitin.github.io/projects/2026/03/23/terraform-electrolyzer-modelling.html)
2. [What Commodity Prices Are Required For Terraform Industries To Be Competitive?](https://ckalitin.github.io/projects/2026/04/05/terraform-commodity-prices.html)
3. [The Path To 1 ¢/kWh Solar Costs for Terraform Industries](https://ckalitin.github.io/projects/2026/04/07/terraform-solar-costs.html) *(You are here)*

If you have feedback or criticism, [please reply here](https://x.com/CKalitin/status/2041636266450809226?s=20).

Links to [my notes](https://docs.google.com/document/d/1tDWz1ySHcHYq-t8HoBXNIyI4U1g-nvfA8-StTX8SiJg/edit?tab=t.5nshiqbim9sk) and the [GitHub for the charts](https://github.com/CKalitin/charts-and-data-analysis/tree/master/Terraformer-Economics/solar).

![Image](/assets/images/terraform-solar-costs/solar_subcomponent_breakdown.png)  
*imo this is the most beautiful chart of the analysis.*

Terraform Industries is doing electrolysis of water and direct air capture of CO2 to produce methane and methanol. Because these processes can harness direct DC solar power from a PV solar array, they can avoid the costs of inverters, transmission lines, grid interconnection, and even MPPTs. Terraform is purposefully extremely sensitive to electricity costs, as I described in the [first post of this series](https://ckalitin.github.io/projects/2026/03/23/terraform-electrolyzer-modelling.html#:~:text=Opex%20vs%20Capex%20Breakdown) and requires electricity costs around 1 ¢/kWh to be competitive. Let's see if this is a reasonable goal.

My series of blog posts analyzing Terraform Industries spawned from reading [Klassnotfound's techno-economic analysis of Terraform](https://klaasnotfound.com/2025/06/03/terraform-industries-business-case-doesnt-add-up/). This is the final blog post that was directly inspired by his post and covers how cheap direct DC solar PV costs can get. Klaas used an [IRENA report](https://klaasnotfound.com/2025/06/03/terraform-industries-business-case-doesnt-add-up/#i-the-cheap-solar--amortization-fallacy:~:text=Source%3A%20IRENA%20%2D%20Renewable%20Power%20Generation%20Costs%20in%202023) on solar costs that doesn't break costs down enough to really answer the question posed above.

Instead, I found this [NREL report](https://docs.nrel.gov/docs/fy23osti/87303.pdf) from Q1 2023 (using 2022 USD). It is a bottom-up cost model they developed after surveyed 40 solar experts involved in the entire stack of a solar project from manufacturing of modules and inverters to tracker installation. It gives a high-level breakdown of cost (Module, Inverter, Structural, Fieldwork, etc.) and breaks down each of those categories into their subcomponent costs. For example, it covers details like the cost of the fasteners for the single-axis trackers, the cost of warehousing the equipment, interconnection costs, sales tax, profit margin, etc.

### **Plant-Level Cost Breakdown**

![Image](/assets/images/terraform-solar-costs/solar_cost_combined.png)  

*The panels are the magic part. They're the thing that turns sunlight into pure electrical energy at 25% efficiency. Everything else should be less than that. If you want to work on that project, come and work with us at Terraform because we're very cost-sensitive.*
*- [Casey Handmer](https://www.youtube.com/watch?v=3cDHx2_QbPE&t=2307s)*

The chart above shows the breakdown of costs for a standard utility scale solar plant, and which components Terraform can remove to reduce cost. More explanations are to follow, but because Terraform doesn't go through the grid or use single-axis trackers, they can remove ~50% of the costs of a standard utility scale solar plant.

Our goal is to be extremely sensitive to the cost of the solar modules. These are the "magic part that turns sunlight into pure electrical energy" and are [declining in cost at ~20% per year](https://ourworldindata.org/learning-curve) due to [Learning Rate / Wright's Law](https://ckalitin.github.io/technology/2025/05/03/jevons-learning-rate.html). So, if we maximize our sensitivity to module costs, we can get cost declines without putting any work into reducing our costs ourselves, solar panels will get cheaper regardless of actions taken by Terraform.

### **Subcomponent-Level Cost Breakdown**

![Image](/assets/images/terraform-solar-costs/solar_subcomponent_breakdown.png)  

Above is the breakdown of how much of each subcomponent of each system is removed by Terraform. Next I'll explain why I removed the costs I did.

**Modules**

We model the cost declines of PV solar modules using the 20% year-over-year cost declines due to learning rate. So, reductions in module costs are modelled later and we assume fixed module costs for now. The cost of some aluminum, glass, and silicon can't be reduced too directly by Terraform. PV solar modules are already a very competitive market, so many companies are already trying to reduce Terraform's module costs.

**Structural**

Terraform uses fixed east-west solar arrays instead of single-axis tracked solar arrays because [they believe this will be cheaper in the long run](https://terraformindustries.wordpress.com/2025/04/29/the-future-of-solar-doesnt-track-the-sun/). Lower solar energy collection (cosine losses) is offset by the reduced costs of not having the hardware associated with tracking the sun and lower land costs (fixed arrays are 2-3x denser).

Terraform doesn't use torque tubes, motors, or slew drives so these costs can be removed and shipping cost is reduced in proportion to the reduction in hardware. The cost of module rails and driven piers is kept, though this could also be reduced in the future through [alternative module mounting techniques](https://terraformindustries.wordpress.com/2025/04/29/the-future-of-solar-doesnt-track-the-sun/#:~:text=Solutions%2C%20such%20as%20the%C2%A0Jurchen%20PEG%20system%2C%20use%20the%20PV%20module%20as%20the%20primary%20structural%20component%2C%20which%20removes%2090%25%20of%20the%20typical%20structure%20of%20other%20solar%20array%20variants).

Terraform assumes a [60% mechanical BoS (Balance of system) cost decline](https://terraformindustries.wordpress.com/2025/04/29/the-future-of-solar-doesnt-track-the-sun/#:~:text=Table%205%3A%C2%A0Costs%20of%20the%20balance%20of%20system%20per%20watt), which is similar to my result.

**Electrical**

Electrical balance of system (EBOS) cost declines are dominated by the lack of a grid interconnection. If we don't need to convert DC to AC, we don't need inverters, transmission lines, substations, transformers, etc.

**Fieldwork**

I reduced labour costs in proportion to the decline in cost of each subsystem. Eg. only about 30% of EBOS costs remain, so the labour is also 30% of its previous value.

**Officework**

Officework costs are dominated by interconnection costs - which we don't have. Outreach is also not a concern for Terraform, as they are their own customer. I assumed a 50% reduction in engineering costs (planning the solar array). This may be high, but it's best not to be too overly optimistic, especially when I don't understand the fundamental nature of this cost.

**Other**

Terraform doesn't make a profit by selling kWh's, but by selling methane and methanol, so there is no profit associated with the solar array. Furthermore, I assumed no management costs as we aren't connected to the grid and any Terraformer management costs can be included higher up the chain (eg. when modelling the Terraformer itself, not just its solar array). Contingency cost is kept in as I don't have a full model of what it is and should cut off my optimism at some point. Sales tax declines in proportion to the decline in cost of the other subcomponents, as with labour.

### **Time-Series Cost Declines**

![Image](/assets/images/terraform-solar-costs/solar_cost_projection_breakdowns.png)  
![Image](/assets/images/terraform-solar-costs/solar_cost_projection_line.png)  

The charts above are perfect at illustrating why being extremely sensitive to module costs is so important for Terraform. These magic sheets of silicon and aluminum decrease in cost on their own every year, so if you make them a greater proportion of your costs, you'll get more cost declines without doing any work. 

As I described [in the first post of this series](https://ckalitin.github.io/projects/2026/03/23/terraform-electrolyzer-modelling.html#:~:text=By%20Amdahl%E2%80%99s,before), by Amdahl's Law we want the majority of our costs to be costs that can be decreased. If modules dominate our cost, we'll have a far better terminal cost than if fixed costs we have little control over dominate our costs.

The terminal case for standard utility solar arrays is 69% of the 2022 cost. In contrast, Terraform's 2022 cost is already 50% of the standard utility solar array, and gets down to ~20% in the limit (near 2036).

### **Operational Costs**

![Image](/assets/images/terraform-solar-costs/solar_opex_breakdown.png)  

Before we can model the net cost of the solar array over its entire lifetime, we need to model the operational costs of the solar array.

We obviously don't need new inverters so we can delete that 13.9% of the cost. We include the price of land in the capex, so we can remove land lease costs. Cleaning costs are assumed to decline in cost 50% by magic (the same magic that gives us 20% lower module costs YoY). We aren't connected to the grid so presumably inspection costs are lower (I don't have a great model here, but being off on the cost decline of inspection costs doesn't make a big difference). Asset Management is again factored in at a higher level (modelling the Terraform itself, not its solar array). Insurance is assumed to decline 50% as well, Terraform could self-insure so costs may end up even lower.

We get a net result (including 10% inflation since the paper was published) was 5.53 $/kW/year in 2026 USD.

### **Levelized Cost Of Energy (LCOE)**

Levelized Cost Of Energy (LCOE) is the net present value of the cost of energy over the lifetime of the project. In other words, it takes the cost of the plant divided by the total energy produced over its lifetime to come to a net cost per kWh.

![Image](/assets/images/terraform-solar-costs/ghi.png)  

Before we model LCOE, we need to make a few assumptions and get some solar resource data.

Solar resource data tells us how much solar energy reaches a square meter of land in a given location. It is measured in GHI (Global Horizontal Irradiance) which is the sum of Direct Normal Irradiance (direct sunlight) and Diffuse Horizontal Irradiance (sunlight that is scattered by clouds and the atmosphere). The units of GHI are kWh/m2/day. The GHI for California is around 5.5 kWh/m2/day. Multiplying by 365.25 days we get the value I used in my analysis of ~2000 kWh/m2/year.

If you perfectly tracked the sun, instead of using GHI you'd use Global Tilt Irradiance (GTI). [Terraform found](https://terraformindustries.wordpress.com/2025/04/29/the-future-of-solar-doesnt-track-the-sun/#:~:text=Figure%2016%3A%C2%A0Average%20performance%20improvement%20for%20single%2Daxis%20tracked%20array%20versus%20East%2DWest%20array%20at%20%281200%20kW%29%20when%20considering%20solar%20position%20and%20weather) that single-axis tracked solar arrays get ~20% more energy than fixed east-west arrays, taking into account weather.

Terraform is baselining a 1 MW solar array. A 1 MW array at 20% efficiency requires 5 MW of irradiance, which is 5000 m2 of land, or 1.24 acres. This heuristic works for this analysis as land cost is a tiny proportion of our cost, but for a better analysis I'd [do some vector math](https://substack.com/home/post/p-161699294) to find how much sunlight actually reaches our east-west solar modules.

Agricultural land in California costs ~5000 $/acre, so we can add 12 $/kW to our capex for land costs ([math in my notes](https://docs.google.com/document/d/1tDWz1ySHcHYq-t8HoBXNIyI4U1g-nvfA8-StTX8SiJg/edit?tab=t.5nshiqbim9sk)). Terraform could use far worse quality land as the only variables they care about are solar resource and initial access to the land for setup.

The final points are that I used a 0% discount rate because Terraform can insource the array and not operate with the same financial model as a standard utility solar plant, and I applied a 10% inflation to the NREL paper's costs since it used 2022 USD.

![Image](/assets/images/terraform-solar-costs/solar_lcoe_terraform.png)  

Taking all of the points above and estimates from previous sections into account, we come to the conclusion that in 2026 Terraform can already achieve 16 $/MWh. 

In the terminal case, module cost declines through 2036 could get Terraform down to 8 $/MWh. Even more interesting is that at this point Opex costs begin to dominate, so further module cost declines have less of an impact.

Module costs in 2036 are modelled at ~10% of the net array cost, which accounts for ~0.58 $/MWh. Meanwhile, Opex costs are 2.77 $/MWh. This provides a huge incentive to decrease Opex costs as they are the largest component of the cost at this point.

To illustrate this case, I added a bar showing zero Opex cost at 5 $/MWh. This is a case where we never need to clean or inspect the solar panels, never need to replace components, and don't pay insurance or property tax. There is a huge incentive to get to this point, 

![Image](/assets/images/terraform-solar-costs/solar_lcoe.png)  

As a final exercise, I included the costs of a standard utility solar array as described in the NREL paper.

This case includes a discount rate of 5% over 25 years, because this is the standard way solar arrays are financed. Notice that the discount rate over 25 years has almost the same impact on net cost as the solar array itself! This illustrates why [long amortization cycles kill your economics](https://ckalitin.github.io/projects/2026/03/23/terraform-electrolyzer-modelling.html#:~:text=amortization%20period) and why Terraform is so focused on achieving [5-year amortization cycles](https://terraformindustries.wordpress.com/2023/08/16/how-to-produce-green-hydrogen-for-1-kg/#:~:text=offering%20%3C5%20year%20ROI%20with) for their electrolyzers.

### **Super Power**

![Image](/assets/images/terraform-solar-costs/superpower.png)  

We've already found that Terraform can use existing technology and some future improvements to reach their solar cost goal of 1 ¢/kWh. Now, as an exercise, we can consider how Terraform could integrate into a fully renewable grid.

[Tony Seba has been talking about](https://www.youtube.com/watch?v=7YD16M4JMRM) his Super Power vision for years. It solves the problem of low capacity factor renewable grids by leveraging periods in which excess renewable energy is produced. Because the sun doesn't always shine and the wind doesn't always blow, if you build a fully renewable grid with solar wind and batteries you have to size it for the cloudiest, shortest, and least windy day of the year. This leaves tremendous excess capacity during the rest of the year.

Super Power is what Tony Seba calls this extremely low marginal cost electricity. Assuming other loads have already paid for your grid, you're left with effectively free electricity during periods of excess production. Now, after paying a little bit for access to this electricity and moving it to your site, you can use it for any industrial process you want.

For Terraform, this could mean colocating Terraformers with solar arrays so that they still have access to direct DC solar power for their process and don't have to go through the grid. During the spring, summer, and fall the Terraformers would utilize the solar array to keep it at max utilization and effectively subsidize the cost of electricity.

Casey Handmer and Matt Weickert did an analysis of powering data centers with [direct DC solar power](https://caseyhandmer.wordpress.com/2026/01/30/direct-current-data-centers/) which is applicable here. Their conclusion was that you would overbuild the array by ~10x to achieve the reliability required for a data centers (to optimize GPU utilization, as they describe). With such excess capacity you could add in Terraformers to effectively entirely subsidize the cost of electricity for the data center. In this case, the solar array built for a data center would not primarily be powering the data center, but would primarily be powering the Terraformers, producing methanol that you sell for a profit.

Another instantiation of this idea is Terraform Industries as a high capacity factor low-cost electricity provider. If you're a load that wants to be active 99.9999% of the time, Terraform could build a solar array and battery to provide you with that power, and keep all the excess power for themselves to run their Terraformers. This way, Terraform is effectively subsidizing the cost of electricity to the customer (potentially making it free). I haven't fully thought through this idea and I'm not sure this is the direction such a collaboration between low capacity factor Terraform and a high capacity factor load would take, but it poses fun thought experiments on what the future of electricity could look like. 

![Image](/assets/images/terraform-solar-costs/aella-diagram.png)  

The [Sankey diagram above](https://terraformindustries.wordpress.com/2023/08/16/how-to-produce-green-hydrogen-for-1-kg/#:~:text=This%20Sankey%20diagram%20shows%20how%20we%20expect%20natural%20economics%20forces%20will%20reshape%20the%20energy%20economy%20over%20the%20next%20two%20decades) is Handmer's take on how the flow of energy will change over the next several decades. Instead of natural gas and petroleum producing the majority of our energy, solar will be put into Terraformers to produce natural gas and associated products. 

Such a system would pose entirely different optimizations than the current industrial stack of the world, and if you're early enough to this game you could capture a significant portion of the value created by rearchitecting such a fundamental system and accelerate progress on building an extremely beautiful future for humanity. 

Terraform Industries is working towards building such a future, and that is the reason I hope to work there for decades. Some of Henry Kaiser's men stayed on with him from paving Victoria Drive in Vancouver to building the Liberty Ships 4 decades later, including one of his key lieutenants Clay Bedford. This is paralleled in some of Elon's key lieutenants including Mark Juncosa, Steve Davis and others. The most useful thing I could do with my live may be to become a key lieutenant to Casey Handmer and help him build for decades.
