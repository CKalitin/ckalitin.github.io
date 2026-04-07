---
layout: post
title: "The Path To 1 ¢/kWh Solar Costs for Terraform Industries"
categories: Projects
tags:
    - Projects
    - Drafts
author:
 - Christopher Kalitin
word_count: 1976
---
<head>
    <meta property="og:image" content="{{site.url}}/assets/images/terraform-electrolyzer-modelling/electrolyzer_3d_graph_with_lines.png">
</head>

This is part two in my three part series of blog posts on modelling the economics of Terraform Industries:
1. [Terraform Industries Electrolyzer Economics Modelling](https://ckalitin.github.io/projects/2026/03/23/terraform-electrolyzer-modelling.html)
2. [What Commodity Prices Are Required For Terraform Industries To Be Competitive?](https://ckalitin.github.io/projects/2026/04/05/terraform-commodity-prices.html)
3. Solar cost blog post coming up *(You are here)*

If you have feedback or criticism, please reply here.

Links to my notes and the charts.

![Image](/assets/images/terraform-commodity-prices/methanol_cost_vs_inputs_45V.png)  

Motivation:
- Terraform is extremely sensitive to solar costs, show the chart from last time
- For it to be economical, < 1 ¢/kWh ($10/MWh) solar costs are required

Paper:
- Klaas (again who is this?) used a paper that didn't break down the costs the way I wanted
- Enter the NREL report from Q1 2023
- It is a bottom-up cost model they developed after surveyed 40 solar experts involved in the entire stack of a solar project from manufacturing of modules and inverters to installation.
- It gives a breakdown of the costs of the subcomponents of each solar project, 
- The NREL report gives a high-level breakdown of cost (Module, Inverter, Structural, Fieldwork, etc.) and breaks down each of those categories into their subcomponent costs. For example, details like the cost of the fasteners for the single-axis trackers, the cost of warehousing the equipment, interconnection costs, sales tax, profit margin, etc.

Charts:
- Cost breakdown by component
    - This is the high-level plant scale cost chart summary, more details to follow, no more than 3 sentences here probably
    - Our goal is to be extremely sensitive to the cost of the solar plant, and to get the greatest cost reduction we want to be as sensitive to the cost of the module as possible, the magic bit of silicon that converts sunlight into electricity, and through a Terraform then into wealth
- Sub component cost breakdown
    - Explain each individual subcomponent and how I decreased its costs
    - Modules are modelled with 20% YoY cost reductions due to learning rate, so their reductions are modelled later, we're modelling sensitivity to module costs here
    - Terraform uses fixed east-west solar arrays. These max power per unit area, but receive lower energy from the sun than single-axis trackers. This is deserving of it's own subsection of the blog post
    - GHI analysis here too
    - Terraform assumes 60% mechanical BoS declines for fixed arrays, similar here
    - EBOS (Electrical balance of system) declines due to no transmission, substation, inverters, electrical network upgrade, transformers. We still have all the DC costs however, which is what's left over.
    - Labour costs associated with each subsystem scale with decline in cost of that subsystem
    - Office costs are dominated by the interconnect and we delete this. Obv no outreach. I assumed 50% engineering costs (planning the solar array) remain, maybe this is high but best to have at least a few points where I'm not overly optimistic in this analysis
    - Included sales tax, scaled with decline in BOM cost of other subcomponents. Also contingency, again this could be deleted but for the sake of being conservative with a point i didn't understand deeply enough, I kept it in.
- Cost declines YoY
    - Contrast sensitivity to module costs for both cases
    - terminal case of the standard utility array is 69%, for Terraform is started at 50% and gets down to 20%.
- OPEX
    - OPEX breakdown before LCOE
    - obv don't need new inverters, land lease included in capex (land cost). Assume reduction in cleaning cost via magic. new BOS declines in proportion to decline in BOS capex, could be even lower since we have no trackers
    - no asset management
    - still keep in insurance, though Terraform could self-insure.
- LCOE
    - Apply 10% inflation for paper published in 2023.
    - Land costs are $5000 / acre for California agricultural land, we can use worse land but this is a fine heuristic and adds 12 $/kW to capex
    - 1 MW at 20% eff requires 5 MW of irradience area, 5000 m2, 1.24 acres. Correct order, numbers likely off by tens of percents here because I'm not doing any detailed calculation on how much solar energy is actually collected by the array (eg. south-facing vs east-west analysis).
    - Assume 0% discount rate because Terraform can insource the array and not operate with the same financial model
    - Take numbers above and make current and terminal cost estimates
    - add in standard utility solar, which including discount rate over 25 years of 5%, the interesting thing is it's already 4 cents per kilowatt hour, pretty low! but not low enough for us!


