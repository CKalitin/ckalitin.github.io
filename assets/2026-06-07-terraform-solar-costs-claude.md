---
layout: post
title: "The Path To 1 ¢/kWh Solar Costs for Terraform Industries"
categories: Projects
tags:
    - Projects
    - Drafts
author:
 - Christopher Kalitin
word_count: 2100
---
<head>
    <meta property="og:image" content="{{site.url}}/assets/images/terraform-solar-costs/solar_lcoe_terraform.png">
</head>

This is part three in my three part series of blog posts on modelling the economics of Terraform Industries:
1. [Terraform Industries Electrolyzer Economics Modelling](https://ckalitin.github.io/projects/2026/03/23/terraform-electrolyzer-modelling.html)
2. [What Commodity Prices Are Required For Terraform Industries To Be Competitive?](https://ckalitin.github.io/projects/2026/04/05/terraform-commodity-prices.html)
3. [The Path To 1 ¢/kWh Solar Costs for Terraform Industries](https://ckalitin.github.io/projects/2026/04/07/terraform-solar-costs.html) *(You are here)*

If you have feedback or criticism, [please reply here](https://x.com/CKalitin).

Links to [my notes](https://docs.google.com/document/d/1tDWz1ySHcHYq-t8HoBXNIyI4U1g-nvfA8-StTX8SiJg/edit) and the [charts](https://github.com/CKalitin/charts-and-data-analysis/tree/master/Terraformer-Economics/terraformer).

![Image](/assets/images/terraform-solar-costs/solar_lcoe_terraform.png)

In the [previous post](https://ckalitin.github.io/projects/2026/04/05/terraform-commodity-prices.html), we found that Terraform Industries can produce methanol at a competitive price with current cost targets. A common theme throughout this analysis is that the economics of Terraform's process are extremely sensitive to the cost of solar electricity. This is by design - as Casey Handmer explains, the strategy is to deliberately build machines that consume enormous amounts of solar in order to take a short position on its cost. But this sensitivity cuts both ways. If solar electricity never reaches 1 ¢/kWh, the entire thesis falls apart.

In this post, I want to answer the question Klaas raised but didn't properly analyze: can solar electricity actually reach 1 ¢/kWh, and what does the path look like?

## **Finding a Better Cost Model**

Klaas, in his [blog post](https://klaasnotfound.com/2025/06/03/terraform-industries-business-case-doesnt-add-up/), used a cost model for solar that didn't break down the costs in a way that allowed meaningful analysis of Terraform's specific configuration. To determine if 1 ¢/kWh is achievable, you need to understand which costs disappear when you cut the grid connection, which costs scale with module cost, and which costs decline independently of module learning rates.

Enter the [NREL Q1 2023 Utility-Scale Solar PV Cost Report](https://www.nrel.gov/docs/fy23osti/83586.pdf). NREL developed a bottom-up cost model after surveying 40 solar experts involved in the entire stack of a solar project — from module and inverter manufacturing to installation, permitting, and interconnection. Unlike a lot of the hand-wavy top-down analyses you find, this gives a detailed breakdown of every subcomponent: the cost of the fasteners on the single-axis trackers, the cost of warehousing the equipment on-site, the interconnection fees, sales tax, profit margin, and more.

This level of granularity is exactly what we need. When Terraform eliminates a cost category (eg. no inverters, no grid interconnection), we can precisely quantify how much that saves. When a cost category scales with module prices (eg. sales tax on BOM), we know that cost will decline at the same rate as modules. This is the right tool for the job.

## **The Utility-Scale Solar Cost Stack**

![Image](/assets/images/terraform-solar-costs/solar_subcomponent_breakdown.png)

The NREL report structures costs into seven high-level categories: Module, Inverter, Structural Balance of System (SBOS), Electrical Balance of System (EBOS), Fieldwork, Officework, and Other. The chart above shows the full subcomponent breakdown for a standard utility-scale single-axis tracking system.

A few things stand out immediately. The module is the largest single cost, but it's not as dominant as you might expect — it's roughly a third of total system cost. The inverter, SBOS (the racking and tracker hardware), and EBOS (wiring, combiners, transformers, substation) together represent nearly as much. Fieldwork (labour for installation) and Officework (permitting, interconnection, engineering) are non-trivial. This distribution matters a great deal because the module is on a well-established learning curve, while many of the other costs are more stubborn.

The standard NREL analysis is for a utility-scale system with single-axis trackers feeding power into the grid. Terraform's configuration is fundamentally different, and that difference is the entire story.

## **How Terraform Modifies Each Cost**

Terraform's solar array has three key differences from a standard utility installation:

**1. Fixed east-west arrays instead of single-axis trackers**

Single-axis trackers follow the sun throughout the day and deliver roughly 30-35% more annual energy than a fixed south-facing array. They also cost more — the tracker hardware, motors, control electronics, and foundations for a moving structure are all more expensive than a simple fixed mounting. Terraform uses fixed east-west bifacial arrays, which sacrifice some annual energy yield in exchange for higher peak power density per unit area and lower structural costs.

This matters because Terraform's constraint is not annual energy — it's peak power density. The electrolyzer is sized to the solar array and runs at high utilization when the sun is shining. Maximizing the power you can extract per square meter of land (and per unit of SBOS cost) is the right optimization.

For the GHI analysis: a fixed east-west array captures roughly 5-10% less energy annually than a south-facing fixed array, but significantly more than a flat array. The transposition factor (converting GHI to array power output) for east-west configurations is well-characterized and the tradeoff is justified given the structural cost savings and higher land utilization. Terraform assumes 60% decline in mechanical BoS costs relative to a standard tracker system.

**2. No inverter, no grid connection**

This is where Terraform's configuration becomes genuinely radical. A standard utility solar plant needs inverters to convert DC from the panels to AC for the grid, a substation, a transformer, grid interconnection hardware, and pays substantial interconnection fees. Terraform connects their solar array directly to the electrolyzer via DC. The electrolyzer acts as its own MPPT (maximum power point tracker) — as I described [in the first post](https://ckalitin.github.io/projects/2026/03/23/terraform-electrolyzer-modelling.html). This eliminates the entire EBOS stack except for the DC-side wiring, combiners, and fusing.

Specifically, Terraform deletes: inverters, transformers, the substation, the electrical network upgrade, and all transmission infrastructure. What remains is the DC collection system — wiring from panels to combiner boxes to the electrolyzer. This is a very large cost reduction. The EBOS category in the NREL model is substantial, and most of it vanishes.

**3. Labour and overhead scale with hardware**

One of the useful properties of the NREL bottom-up model is that labour costs are associated with each subsystem and scale roughly in proportion to the cost of that subsystem. When you eliminate the inverter hardware, you also eliminate the labour to install and commission it. When the mechanical BoS gets cheaper, so does the labour to install it. This cascading effect means the total cost reductions from hardware eliminations are larger than the hardware costs alone.

For Officework: interconnection fees and permitting for grid connection disappear entirely. Outreach and community engagement costs go away. I assumed 50% of engineering costs remain, which is probably conservative — you still need to plan and survey the site — but I'd rather err on the side of not being overly optimistic here.

Sales tax and contingency were kept in the model, scaled to the remaining BOM costs. Contingency is one of those line items I didn't dig into deeply enough to confidently eliminate, so it stays in.

## **The Learning Curve**

![Image](/assets/images/terraform-solar-costs/solar_cost_projection_breakdowns.png)

![Image](/assets/images/terraform-solar-costs/solar_cost_projection_line.png)

Modules are modelled separately from the rest of the system. Solar modules have a well-established [learning rate of approximately 20% per year](https://caseyhandmer.wordpress.com/2025/04/08/to-conquer-the-primary-energy-consumption-layer-of-our-entire-civilization/) — a 20% cost reduction for every doubling of cumulative production — and production has been doubling roughly every two years. I model module costs with 20% year-over-year cost reductions from the 2023 NREL baseline.

The charts above show the cost projections over time, broken down by component. The terminal state of a standard utility-scale system (with trackers and grid connection) shows roughly 69% total cost reduction from today's baseline as modules asymptote toward their cost floor and the other costs decline more slowly. For Terraform's configuration, the analysis starts from a lower base (already missing large cost categories) and declines from there.

The important comparison is the sensitivity to module cost in each configuration. In a standard utility system with 7+ cost categories, modules are one of several dominant costs, and module cost reduction has a bounded effect on total system cost. In Terraform's stripped-down configuration, modules represent a much larger fraction of total remaining costs. This means Terraform's LCOE is much more sensitive to module learning rate declines — which is exactly the strategy Casey Handmer is describing when he talks about taking a short position on solar costs.

## **OPEX**

![Image](/assets/images/terraform-solar-costs/solar_opex_breakdown.png)

Before getting to LCOE we need the annual operating costs. The OPEX breakdown for a standard utility system includes: inverter replacement (inverters degrade and must be replaced mid-life), land lease, module cleaning, asset management and monitoring, and insurance.

For Terraform's configuration:

- **Inverter replacement**: gone, there are no inverters
- **Land lease**: Terraform owns the land, so land cost is included in capex rather than OPEX. I used $5,000/acre for California agricultural land as a conservative heuristic — Terraform can use less valuable land, but this is a reasonable upper bound. At 20% panel efficiency, 1 MW of installed capacity requires roughly 5 MW of incident solar irradiance area, which works out to approximately 5,000 m² or 1.24 acres.
- **Cleaning**: reduced via operational improvements. Fixed arrays are simpler to clean than tracking systems.
- **Asset management**: no third-party asset management needed for a self-operated industrial facility
- **Insurance**: kept in the model. Terraform could self-insure at scale but this is speculative.

The OPEX reductions compound on top of the CAPEX reductions in the LCOE calculation.

## **LCOE: Does Terraform Get to 1 Cent?**

![Image](/assets/images/terraform-solar-costs/solar_lcoe.png)

![Image](/assets/images/terraform-solar-costs/solar_lcoe_terraform.png)

The LCOE calculation combines all of the above:

> LCOE ≈ (CAPEX × CRF + Annual O&M) / Annual Energy Output

Where CRF is the Capital Recovery Factor: r(1+r)^N / ((1+r)^N - 1). A few key assumptions:

- **10% inflation adjustment** on the 2023 NREL report numbers to bring them to current costs
- **0% discount rate** for Terraform. Standard utility solar analysis uses 5-7% discount rates reflecting the cost of capital for a project developer. Terraform can insource their solar array and operate it as part of a vertically integrated industrial process, not a project finance vehicle. With a 0% discount rate, the CRF simplifies to 1/N.
- **25-year system life**, consistent with industry standard assumptions
- **Standard utility comparison at 5% discount rate** over 25 years — this is the reference case

The first chart shows the LCOE for a standard utility-scale system. Including a 5% discount rate, the result is already strikingly low: approximately 4 ¢/kWh today. This reflects how much solar costs have already fallen. But 4 ¢/kWh is not 1 ¢/kWh, and 4 ¢/kWh through an inverter and grid connection is not the same as direct DC to an electrolyzer.

The second chart shows Terraform's path. The current case lands around **15-16 $/MWh (1.5-1.6 ¢/kWh)** — already dramatically below grid-connected solar, primarily from eliminating EBOS, inverters, interconnection, and the financing premium. With module cost declines proceeding at the historical 20%/year learning rate, the terminal case gets to approximately **5 $/MWh (0.5 ¢/kWh)**. Along the way, the intermediate cases show **7-8 $/MWh** within a few years of module cost reductions.

The 1 ¢/kWh target is achievable. More than achievable — on this analysis Terraform's configuration reaches 1 ¢/kWh before modules hit their cost floor, and the terminal case is well below it.

Standard utility solar, even with the remarkable cost declines it has already achieved, will not reach 1 ¢/kWh. Grid interconnection, inverters, and the cost of capital are too large a fraction of total cost and are not on steep enough learning curves to get there. Terraform's direct-DC configuration fundamentally restructures the cost stack in a way that makes 1 ¢/kWh achievable.

## **Super Power**

*"The world has so much solar energy that if you just learn how to use it, you can solve all of our energy problems."*  
*— Tony Seba*

The conclusion here is the same one that runs through this entire three-part series: there is always one esoteric point at which the economics of Terraform's process clicks into place, and everything else follows from it. In the first post, it was the low-capex low-efficiency electrolyzer optimization. In the second, it was methanol as the product of choice. Here, it is the direct-DC solar configuration and what it does to the cost stack.

Terraform Industries is not just a company that makes natural gas from sunlight. It is a bet that we can restructure the entire primary energy supply of human civilization around a resource that is free, local, and inexhaustible. Solar irradiance hitting the Earth's surface represents roughly 10,000 times current global energy consumption. The limiting factor has never been the resource — it has been the cost of capture.

With a 0% discount rate, no grid connection, no inverters, and 20% annual module learning rate declines, the cost of capturing that resource reaches a level that makes the synthesis of liquid fuels economically competitive with extraction from geological reservoirs. At that point, the carbon cycle closes. Anywhere with enough sunlight to sustain agriculture can produce its own fuel. Countries that are currently energy importers become energy independent. The geopolitical leverage of fossil fuel exporters evaporates.

That is what 1 ¢/kWh solar electricity enables. And based on this analysis, it is not a distant fantasy — it is the natural extrapolation of trends already underway, achievable without any breakthroughs beyond continuing to manufacture solar modules at the rate we already are.

Casey Handmer calls this [Super Power](https://caseyhandmer.wordpress.com/2024/10/22/superpower/). He is right.
