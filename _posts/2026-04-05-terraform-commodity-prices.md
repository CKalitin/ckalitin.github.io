---
layout: post
title: "What Commodity Prices Are Required For Terraform Industries To Be Competitive?"
categories: Projects
tags:
    - Projects
    - Latest Posts
author:
 - Christopher Kalitin
word_count: 1988
---
<head>
    <meta property="og:image" content="{{site.url}}/assets/images/terraform-commodity-prices/methanol_cost_vs_inputs_45V.png">
</head>

This is part two in my three part series of blog posts on modelling the economics of Terraform Industries:
1. [Terraform Industries Electrolyzer Economics Modelling](https://ckalitin.github.io/projects/2026/03/23/terraform-electrolyzer-modelling.html)
2. [What Commodity Prices Are Required For Terraform Industries To Be Competitive?](https://ckalitin.github.io/projects/2026/04/05/terraform-commodity-prices.html) *(You are here)*
3. [The Path To 1 ¢/kWh Solar Costs for Terraform Industries](https://ckalitin.github.io/projects/2026/04/07/terraform-solar-costs.html)

If you have feedback or criticism, [please reply here](https://x.com/CKalitin/status/2040901065701462103?s=20).

Links to [my](https://docs.google.com/document/d/1tDWz1ySHcHYq-t8HoBXNIyI4U1g-nvfA8-StTX8SiJg/edit?tab=t.ncpm456it7zt) [notes](https://docs.google.com/document/d/1tDWz1ySHcHYq-t8HoBXNIyI4U1g-nvfA8-StTX8SiJg/edit?tab=t.37pyd9ihe3qp) and the [charts](https://github.com/CKalitin/charts-and-data-analysis/tree/master/Terraformer-Economics/terraformer).

![Image](/assets/images/terraform-commodity-prices/methanol_cost_vs_inputs_45V.png)  

Terraform Industries makes natural gas from sunlight and air, [as I discussed previously](https://ckalitin.github.io/projects/2026/03/23/terraform-electrolyzer-modelling.html). Air gives us CO2 and H2O, which we turn into H2 and can combine into natural gas (CH4), methanol (CH3OH), ethylene (C2H4), and other chemicals. To determine if Terraform Industries process has the potential to be competitive - or as Klaas explored [in this blog post](https://klaasnotfound.com/2025/06/03/terraform-industries-business-case-doesnt-add-up/), completely uncompetitive without subsidies - we need to understand the current price drivers of these commodities and how cheap Terraform can get.

### **Natural Gas Extraction**

Natural gas is CH4 and is currently produced through either primary or associated production. Primary production is the process of drilling into a reservoir for the purpose of extracting only natural gas. Primary production processes include conventional vertical drilling, horizontal drilling, hydraulic fracturing (shale gas), coal bed methane extraction, and more. Associated production involves drilling for oil, and producing natural gas as a byproduct.

Assoicated production is done at "wet wells" where natural gas (gaseous CH4) and natural gas liquids (NGLs, short chain hydrocarbons at <5 Carbons) is found together with longer chain hydrocarbons (oil). Natural gas is gaseous at room temperature and pressure, while natural gas liquids (eg. ethane, propane, butane) are liquid at room temperature and pressure. 

We'll take a slight tangent now and describe why you get a distribution in the length of hydrocarbons in a given reservoir.

Oil / Natural gas begins with organic matter that undergoes catagenesis, which is the process of breaking down organic matter into simpler liquid and gaseous hydrocarbons in the absense of oxygen. Organic matter (you) is just a bunch of hydrocarbons with functional groups attached (eg. -OH, -COOH, etc.) - to a first approximation. By stripping away the functional groups, you get long-chain hydrocarbons. 

A long-chain hydrocarbon is just a string of C-C bonds surrounded by C-H bonds. C-C bonds are more stable than C-H bonds, and both are extremely stable under high-pressure and low-oxygen. As the temperature increases, the probability that a C-C bond breaks increases. Higher temperature changes the Gibbs free energy of the system and makes it more favourable for C-C bonds to break. To illustrate, oil is stable at 60-120 C (C5+ hydrocarbons), wet gas is stable at 120-200 C (C2-C5 hydrocarbons), and above 550 C, methane spontaneously decomposes into elemental carbon and hydrogen.

### **Natural Gas Markets and Prices**

Because wet wells produce both oil and natural gas, the oil can effectively subsidize the natural gas production. This means that the breakeven price for natural gas from wet wells can be negative, as the revenue from oil offsets the costs of drilling and production. Once again, oil can effectively subidize the extraction of natural gas from some (mainly US-based) wet wells. This provides extreme downward pressure on the price of natural gas, and is one of the main reasons why natural gas prices are so low in the US.

Natural gas spot prices and futures prices are available on Henry Hub (US), TTF (Netherlands), and JKM (Japan). The US and Japanese units are $/MMBtu while the European unit is $/MWh. To convert from $/MMBtu to $/MWh, we can use the conversion factor of 1 MMBtu = 0.293 MWh.

![Image](/assets/images/terraform-commodity-prices/henry-hub.jpg)  

In the US, natural gas prices have been extremely low since about 2010 mainly due to expansion of shale gas production (fracking). The negative breakeven price of natural gas from wet wells and the expansion of fracking means US prices are around $3/MMBtu.

![Image](/assets/images/terraform-commodity-prices/ttf.jpg)  

![Image](/assets/images/terraform-commodity-prices/jkm.jpg)  

In contrast, European prices are usually around 20-40 €/MWh, which is 6.75-13.5 $/MMBtu. Japanese prices are, without the noise of global conflicts, are ~10 $/MMBtu.

In the charts above you'll notice that the prices follow each other during certain periods like 2022 (the war in Ukraine) and early 2026 (the war in Iran). Natural gas is a globally traded commodity, meaning it's extremely sensitive to the actions of the parties involved in the global supply chain, [which do not always align with the interests of consumers](https://en.wikipedia.org/wiki/1973_oil_crisis). In contrast, Terraform Industries process relies only on local extremely plentiful inputs (sunlight and air) and is not subject to the same geopolitical risks.

Furthermore, natural gas is [sensitive to oil and NGL prices](https://www.enerdynamics.com/Energy-Insider_Blog/Are-Natural-Gas-Prices-Below-3-Sustainable.aspx). Because wet and associated production is a significant source of natural gas (tens of percent of US production), if oil or NGL prices fall, gas production declines. If production declines, prices will rise to the point at which dry wells become profitable again (>3 $/MMBtu).

### **Terraform Industries Natural Gas Feedstock Costs**

> CO2 + 4H2 -> CH4 + 2H2O  
> 2.74 kgCO2 + 0.50 kgH2 -> 1 kgCH4

![Image](/assets/images/terraform-commodity-prices/terraformer-mk1.png){:height="400"}  

With the context of the global natural gas market, we can model the cost of producing natural gas with Terraform Industries process. I described this [in my previous post](https://ckalitin.github.io/projects/2026/03/23/terraform-electrolyzer-modelling.html) so I won't go into too much detail, but Terraform takes atmospheric CO2 and H2O, electrolyzese the H2O into H2, and burns them into CH4. 

![Image](/assets/images/terraform-commodity-prices/ch4_cost_vs_inputs.png)  

We can approximate the cost of producing natural gas with Terraform Industries process by summing the cost of the inputs (CO2 and H2), with some embedded capital and operating costs, as described, again, [in my previous post](https://ckalitin.github.io/projects/2026/03/23/terraform-electrolyzer-modelling.html) where capex factors into net H2 cost.

Above is the result of such an analysis, using the stoichiometry of the reaction (shown above) and a 95% efficiency to model CH4 cost versus H2 and CO2 cost.

We notice that breakeven cost in the US is ~3 $/MMBtu, but with Terraform Industries long-term cost targets they only get to 16 $/MMBtu, 5x out of the money.

We saw earlier that Japanese and European prices are around 10 $/MMBtu, meaning Terraform is close to being competitive in those markets, but even with Casey Handmer's optimistic cost targets, Terraform is still more expensive. Commodity markets are unforgiving and Terraform will not succeed unless they can get to the right side of capitalism.

Furthermore, the fact that Terraform's process is more economical in natural gas poor geographies illustrates the point that this technology [asymmetrically benefits countries like China](https://youtu.be/3cDHx2_QbPE?si=8yb1UkJJrnA5kQcv&t=133).

If you stopped the analysis here - [as Klaas did](https://klaasnotfound.com/2025/06/03/terraform-industries-business-case-doesnt-add-up/#:~:text=Terraform%20is,why), my beef is described in the [previous blog post](https://ckalitin.github.io/projects/2026/03/23/terraform-electrolyzer-modelling.html) - it looks like Terraform Industries process is completely uncompetitive without an extreme level of subsidies. 

Next, we'll look at the tax credits that Terraform is eligible for. Then, we'll see the real solution to being 5x more expensive on natural gas.

### **Relevant US Tax Credits**

Section 45 and Section 48 encompass production and investment tax credits respectively.

[45Q](https://carboncapturecoalition.org/wp-content/uploads/2025/09/45Q-primer-Carbon-Capture-Coalition.pdf) is a tax credit for carbon capture and sequestration. It has a few different tiers depending on if you're capturing and sequestering CO2, recovering it from an industrial process, etc. The highest tier that is relevant for Terraform Industries is provides *138 $/tCO2*.

[45V](https://www.cleanegroup.org/wp-content/uploads/45V-Clean-Hydrogen-Production-Tax-Credit-Fact-Sheet.pdf) is a tax credit for clean hydrogen production. It provides *3 $/kgH2*.

[45Y](https://www.cruxclimate.com/insights/tech-neutral-tax-credits) is a tax credit for clean electricity production. It provides 0.003 $/kWh up to 0.015 $/kWh (inflation adjusted) depending on the technology and location. [48E](https://www.cruxclimate.com/insights/tech-neutral-tax-credits) is a tax credit for clean energy manufacturing. It provides 6 to 30% of construction costs incurred by the taxpayer depending on the technology and location.

These tax credits cannot be stacked on top of each other, so Terraform has to choose which one to use. 

These tax credits can be applied either as direct payments (same method as a tax refund), a transfer (eg. sell your credits for 90 cents on the dollar), or a direct reduction of tax liability.

The direct payment method is the most lucrative for Terraform Industries. To illustrate, we'll use the 45V tax credit as an example. [Terraform is targetting 1 $/kgH2](https://terraformindustries.wordpress.com/2023/08/16/how-to-produce-green-hydrogen-for-1-kg/), and at 3 $/kgH2, the 45V tax credit would cover 300% of their cost. The 45V tax credit ends up being the most lucrative for Terraform.

![Image](/assets/images/terraform-commodity-prices/ch4_cost_vs_inputs_45V.png)  

With the 45V tax credit, we can redo our analysis of Terraform's cost of natural gas and find that it's now *-15 $/MMBtu*! Negative!

The 45V tax credit expires 10 years after the start of production, so it can't be used indefinitely and it is a bad idea to be on the wrong side of capitalism long-term. However, this provides a clear go-to-market strategy for Terraform Industries.

[Update Apr 12 2026]
*"And the way we achieve that is we're targeting less than 100 dollars per tonne year as a capex price for our direct net capture system and we're currently targeting less than 100 dollars per kilowatt for our electrolyzer. Ultimately, we'll go much cheaper than that, but I don't want to say how much cheaper, because everyone will think we're crazy. But our current prototype is on the order of a hundred bucks a kilowatt."*
*\- Casey Handmer, [SPRIND Podcast](https://youtu.be/eOo3yN5XHAQ?si=2FR7eBAfPjyyoZDF&t=688), originally released Dec 2023*

### **Methanol**

> CO2 + 3H2 -> CH3OH + H2O  
> 1.37 kgCO2 + 0.19 kgH2 -> 1 kgCH3OH

A common theme in my analysis of Terraform Industries so far is that there are many steps at which you have to find one very esoteric point that makes the economics work out, otherwise it looks like Terraform is doomed for failure. [Last time](https://ckalitin.github.io/projects/2026/03/23/terraform-electrolyzer-modelling.html), it was discovering the low-capex low-efficiency electrolyzer optimization and that it greatly favours low-amortization and extreme sensitivity to electricity prices. This time, it's the fact that methanol is a far superior product for Terraform Industries to produce than natural gas.

Fundamentally, a Terraformer producing natural gas is in competition with extraction from reservoirs. However, methanol is not found in reservoirs and is produced from natural gas. Terraform can skip the natural gas step and synthesize methanol directly from CO2 and H2, meaning the production stack is entirely different and much shorter. This is source of their advantage.

Unlike natural gas, methanol does not trade of highly liquid public exchanges. Instead, methanol is traded over the counter (OTC) and prices are exposed by Price Reporting Agencies. This makes it slightly harder to find the current or time-series price of methanol, but some sources like S&P Global (a PRA) exist. [S&P Global reports](https://www.spglobal.com/energy/en/news-research/latest-news/chemicals/032026-global-methanol-prices-soar-in-response-to-middle-east-war#:~:text=Southeast%20Asia%20methanol%20prices%20have%20jumped%2072%25,the%20highest%20level%20since%20March%2026%2C%202021%2C) that Southeast Asian methanol prices are ~400 $/MT in nominal geopolitical situations. Other geographies are similar.

![Image](/assets/images/terraform-commodity-prices/methanol_cost_vs_inputs.png)  

With the stoichiometry of the reaction and again an assumed 95% efficiency, we once again model the cost of producing methanol with Terraform Industries process as a function of the cost of H2 and CO2. This time we find that their long-term cost targets of 1 $/kgH2 and 100 $/tCO2 get them to *342 $/MT* methanol! This is on the right side of capitalism and bodes well even without tax credits.

![Image](/assets/images/terraform-commodity-prices/methanol_cost_vs_inputs_45V.png)   

With subsidies, the picture gets even better as the cost is -250 $/MT. It's slightly absurd for the US government to so heavily subsidize such a process, but Terraform Industries will get far cheaper with time. These tax credits are a method of accelerating progress in US industry and will hopefully be phased out with time. At that time, Terraform Industries must be competitive without subsidies, and with methanol they have a clear path to get there.

There is a reason Casey Handmer has said [methanol is Terraform's approach to liquid fuels](https://terraformindustries.wordpress.com/2024/06/24/how-terraform-navigated-the-idea-maze/#:~:text=Methanol%20is%20our%20approach%20to%20liquid%20fuels). With current goals, Terraform Industries can produce methanol at a competitive price. With future cost reductions Terraform's process will only get cheaper as they proceed to conquer more and more of the methanol market.

### **Ethylene**

> 2CO2 + 6H2 -> C2H4 + 4H2O  
> 0.43 kgCO2 + 3.14 kgH2 -> 1 kgC2H4

![Image](/assets/images/terraform-commodity-prices/ethylene-pathways.jpg)    
*This image shows various pathways to produce ethylene. Terraform follows the lowest path, starting with CO2 and H2, existing industry uses CH4 as a feedstock instead of CO2 + H2.*

We've just found the sweet spot for Terraform Industries in methanol, but for extra credit we'll model ethylene as well.

I didn't look too far into the ethylene market, but found that its cost is ~500 $/MT. I'll assume 90% synthesis efficiency since it isn't a single step reaction like natural gas or methanol.

![Image](/assets/images/terraform-commodity-prices/ethylene_cost_vs_inputs.png)   

![Image](/assets/images/terraform-commodity-prices/ethylene_cost_vs_inputs_45V.png)   

With current cost targets, Terraform Industries is at 825 $/MT ethylene with tax credits and -603 $/MT with tax credits. This reflects the situation with natural gas production outside of the US where they're <2x more expensive, so there is a path to competitiveness, but it requires even more optimistic cost reductions than Terraform is already targeting.
