---
title: You Must Model Reflect Orbital In The End State
date: '2026-06-28'
tags:
  - Space Industry Analysis
image: /assets/images/reflect-orbital-math/sso_transmission_proximity_min100MW_exclChi.png
redirectFrom:
  - /space/industry/analysis/2026/06/28/reflect-orbital-math.html
---

If you have feedback / criticism, please [reply here](https://x.com/CKalitin/status/2068585609380196560?s=20).

All charts and source data are available in this [spreadsheet](https://docs.google.com/spreadsheets/d/19wsl4ZJp0i5ETl95NHZqOQkjcGUeqm0TIfWgUL0eyIQ/edit?usp=sharing) and this [repo](https://github.com/CKalitin/charts-and-data-analysis/tree/master/Reflect-Orbital).

![Image](/assets/images/reflect-orbital-math/sso_transmission_proximity_min100MW_exclChi.png)  
*With Claude Code, no analysis is beyond our reach.*

I have seen Reflect Orbital fall into the category of problem where people do zero math and come to the conclusion that they'll fail one too many times! This is in the same vein as the thought that data centers use terrible amounts of water ([they don't](https://x.com/andymasley/status/2056894455853068675)), where nobody does any math or has any real figures. Naturally, the solution when faced with such a problem is to do the math yourself and write a blog post on it.

### **A Primer On Reflect Orbital**

The premise of Reflect Orbital is to build and launch thousands of satellites with 10-100m wide reflectors. These satellites would reflect sunlight onto solar arrays and other [customers of light](youtu.be/MjcuDBLW24k?si=NABkCUEr8URiq1K2&t=636) like construction sites, mines, rescue operations, agriculture, etc.

![Image](/assets/images/reflect-orbital-math/sso_visualization.jpg)  

These satellites are placed into a Sun Synchronous Orbit which never enters the shadow of the Earth and sits along the terminator between night and day. Because the satellites are only ever over the portion of the Earth that is experiencing a sunset or sunrise, Reflect's satellites are only able to extend the day by 1-2 hours and they cannot give you sunlight at midnight. Furthermore, the sunlight that hits the satellites would otherwise have missed the Earth, so we're not moving sunlight from one portion of the Earth to another, instead we're increasing the amount of power that hits the Earth.

Now to get one easy point out of the way, these satellites won't significantly increase the temperature of the Earth by reflecting sunlight onto it. The Earth has 255 million square kilometers exposed to the sun while each next generation Reflect satellite is planned to be 3000 m2 (0.003 km2). Their full size constellation of OOM(10,000) satellites would increase the amount of sunlight hitting the Earth by 0.00001%. So far away from Kardashev level 2!

### **Ground Illumination Area Limitations**

[This xkcd post](https://what-if.xkcd.com/145/) does an excellent job at explaining the phenomenon described below in far more understandable words and diagrams.

![Image](/assets/images/reflect-orbital-math/Half-angle-diagram.jpg)  

The most fundamental limitation for Reflect Orbital is that you can never get the area of illumination of your reflected light below a few kilometers in diameter. This is because the angle of the cone of reflected light is always the same as the angle of light coming from your light source.

To illustrate this point, consider that the sun takes up 0.53 degrees of the sky from the distance of the Earth to the sun. This means we can model the sun as an array of point light sources that are spread across 0.53 degrees of the sky. The diagram above illustrates this with the green and red arrows originating from opposite sides of the sun from the perspective of the mirror.

Because the sun is extremely far away from the Earth, the rays of light from the same side of the sun are nearly parallel to each other. In the diagram, this is illustrated by the coloured pairs having the same angle. This behaviour is what you expect from a light source where as you get farther away from it, the rays become more parallel.

However, we're still faced with the limitation that the sun is not a single point source of light, but an array of point sources taking up 0.53 degrees of the sky. Even though the rays of light from any one point are parallel, the rays from different point sources (eg. on opposite sides of the sun) are not parallel to each other.

![Image](/assets/images/reflect-orbital-math/gf-illustration.jpeg)  

This illustration by my lovely girlfriend shows a few of the cases I described above.

The middle image shows the case for a point source arbitrarily far away from you. The incoming rays are parallel and a parabolic mirror can reflect them into an arbitrarily small point.

The bottom image shows that because we have rays offset by 0.53 degrees from each other, a parabolic mirror in fact cannot focus the light onto an arbitrarily small point.

This idea requires a lot of mental shape rotation to [grok](https://www.merriam-webster.com/dictionary/grok), go talk to your favourite language model or bored physics student if you want more explanation.

**Implications For Reflect**

This is all to say that our reflected beam of light can never be a cone of an angle less than 0.53 degrees.

For a satellite in a sun-synchronous orbit 550 km above the Earth, the best diameter of the point of reflected light on the Earth will be tan(0.53 deg) * 550 km = 5 km.

Even with a parabolic mirror, we cannot decrease this illuminated point size. A parabolic mirror will eliminate the size of the mirror as a variable, but not the angular size of the sun in the sky.

For example, if we had a 1 kilometer wide mirror in a 550 km SSO orbit, our point size would be 5 + 1 = 6 km. If we had a parabolic mirror we could get it down to 5 km, but never below that.

Furthermore, our 550 km distance number assumes we're directly over the target. If we reflect sunlight onto a target eg. 500 km away from our ground track, we have a 743 km net distance and a reflected point diameter of ~7 km.

So, we are faced with a fundamental limitation for Reflect that to get maximum efficiency in reflecting sunlight onto a solar array, it needs to be 5 km in diameter or greater. A circle of 5 km diameter is ~20 km2, which amounts to a ~5 GW solar array. There are only three 5+ GW solar arrays in the world and all are in China.

![Image](/assets/images/reflect-orbital-math/single-axis-tracked.jpg)  
*This single-axis tracked solar array is great for following the sun (east-west trajectory) but not a sun-synchronous satellite (north-south trajectory).*

Furthermore, receiving as much of the solar energy as possible requires the solar array packing density to be high. This means you effectively want to cover as much of the ground area as possible with solar arrays. This means south-facing fixed arrays or single-axis tracked arrays would not receive 100% of the reflected energy even if they were in a 5 km diameter circle, due to the spaces between the solar arrays.

### **Solar Array Business Model**

![Image](/assets/images/reflect-orbital-math/solar_opex_donut.png)  

Now that we've gotten some fundamental physics mental models out of the way, we can move on to the economics and the potential business model that Reflect could take.

In a [previous blog post](https://ckalitin.github.io/projects/2026/04/07/terraform-solar-costs.html#:~:text=Operational%20Costs) I looked into the operational costs of solar arrays and you can see a pie chart of those costs above. The majority of these costs do not scale with the amount of energy that the solar array produces. For example, property tax, insurance, land lease, inspection, cleaning, asset management, balance of structure, etc. are constant costs regardless of how much energy the solar array produces.

The only costs that may scale with greater energy output are the cost of new inverters and other electrical equipment that has its life determined by usage. In contrast, solar modules tend to need to be replaced after extreme weather events (eg. hail), not after x hours of use.

This goes to show that a marginal hour of sunlight does not increase the operational costs of a solar array. Instead, this is nearly zero marginal cost energy. If you sold sunlight to a solar array for free, the solar array's margin would be nearly 100%.

Hence, the price Reflect can charge for each kWh reflected onto a solar array is nearly the cost the solar array operator charges per kWh themselves. For example, if a solar array sells energy at \$0.1/kWh, Reflect could charge \$0.08/kWh (80% of the price of energy!) and both parties could still be profitable.

Furthermore, if local NIMBY's are upset at the absolute majesty of sunlight after dark, the satellites could reflect sunlight to the positive side of the terminator. Because the satellites are directly over the terminator between day and night, there isn't any significant difference to reflecting sunlight to the portion of Earth that just experienced sunset or to the portion about to experience sunset. If energy is fungible across time - ie. you don't have a great need for a kWh an hour after sunset versus an hour before - then this is a possible strategy.

### **Modelling Transmission Efficiency and Time-on-Target**

![Image](/assets/images/reflect-orbital-math/sso_land_proximity.png)  

Now we can get to the really fun part, modelling what portion of a satellite's orbit could reflect sunlight to a customer / solar array and the effective transmission efficiency (how much power is lost due to clouds and atmospheric aberration).

First we can overlay the ground track of a Sun-Synchronous Orbit (SSO) onto the Earth and find how much of that orbit is over land or over water within 300 miles (500 km) of land. We find that 44% of an SSO orbit could be usable for reflecting sunlight onto the land.

![Image](/assets/images/reflect-orbital-math/sso_solar_proximity_min100MW_exclChi.png)  

Not every portion of the Earth is solar array (so far from Kardashev Level 1!), so next we take a map of >=100 MW solar arrays and find what portion of an SSO orbit is within 300 miles of these points. Excluding China as a market that Reflect can't service, we find that 11.4% of a Reflect satellite could be useful for reflecting sunlight onto a solar array. If we include China that increases to 13.4%.

I'm using 100 MW solar arrays as a minimum under two assumptions. First, that this is the reasonably smallest solar array you would consider reflecting sunlight onto since such a solar array would be <10% of the illuminated area of your satellite. Second, that the distribution of larger solar arrays (eg. 1+ GW) will follow the distribution of 100 MW solar arrays today. In essence, in 10-20 years all of these 100 MW solar arrays may be 1 GW arrays and we can apply this same 11.4% time-on-target number.

![Image](/assets/images/reflect-orbital-math/sso_transmission_proximity_min100MW_exclChi.png)  

Finally, we can integrate historical weather data to get the average transmission efficiency for reflecting sunlight onto a given point on the Earth. Transmission efficiency is the fraction of solar power received on the ground versus what is reflected by the mirror.

Transmission efficiency was derived using a constant of 0.7 for clear skies and 0.2 for cloudy skies, meaning if a location is cloudy, we take the solar power density in space near Earth (1361 W/m2), multiply by 0.2, and get 272.2 W/m2.

Next, I used the [ERA5 dataset](https://cds.climate.copernicus.eu/datasets/reanalysis-era5-single-levels?tab=overview) to get 6 years of hourly cloud cover data for each solar array location. With this, I interpolated between our constants of 0.7 and 0.2 depending on the portion of time a given location was covered by clouds.

This approach won't provide 100% accuracy, but it's a close enough approximation to be suitable for this analysis. As we'll see later, the net output of this model is equally sensitive to other variables like launch cost and solar array packing density, so it's not worth spending time here to get more precision.

The output of this modelling is that for only 11.4% of a satellite's orbit is it over a >100 MW solar array, and the mean transmission efficiency is just 45.9%. Some regions like the Middle East and US Southwest got around 60-70% transmission efficiency and other regions like Ireland and Central America got closer to 30%. Overall, the distribution roughly resembles a gaussian distribution, which is an encouraging sign that nothing is terribly wrong with the analysis.

The primary takeaway here is that only 5% of the solar power that hits the satellite is transmitted to the solar array on the ground.

### **Modelling Satellite Cost & Profit**

Thus far, I've shared 3 fundamental insights about Reflect Orbital that most seem to have missed:
1. The minimum illuminated spot size is ~5 km (ok, most serious people know this)
2. They can sell energy to solar arrays for close to the price the solar operators charge for energy
3. Transmission efficiency and Time-on-Target mean only ~5% of the sunlight the satellite sees is used on Earth.

The final two are what held me back from doing this analysis in the past, how much you sell energy for and how efficiently you can transmit it are fundamental to this analysis. Luckily [my knowledge of solar arrays recently increased](https://ckalitin.github.io/projects/2026/04/07/terraform-solar-costs.html) and Claude Code means [nothing is beyond my reach](https://en.wikipedia.org/wiki/File:Nrol-39.jpg).

![Image](/assets/images/reflect-orbital-math/spreadsheet.jpg)  

Finally, we can put all of our assumptions into a spreadsheet and get a cost, revenue, and profit margin out for a sweep of cases.

We notice that Reflect's first generation of satellites has a gross profit margin of -8,000% (two orders of magnitude from profitability). Only in an extremely optimistic case in which the price (not cost!) of a Starship launch is \$7.5M and satellites have a 10-year lifespan and cost half of what a Starlink satellite costs today do we get towards gross profitability.

With these numbers, we can come to a few conclusions about Reflect Orbital's business model:
1. It's a bet on relatively high energy prices.
2. It's a bet on exceptionally low satellite costs
3. It's a bet on exceptionally low launch costs
4. It's a bet on long satellite lifespans
5. It's a bet on there being vastly more terrestrial solar arrays

The revenue per satellite scales linearly with the cost of electricity, and we see that only at ~0.1 \$/kWh do they have a shot at gross profitability. As a reminder, this is the price they would charge a solar array, so the cost to the consumer would be higher. Given this, Reflect is obviously not on a path to greatly decrease the cost of energy. Instead, their business model relies on energy prices not falling dramatically.

For reference, in [a previous blog post](https://ckalitin.github.io/projects/2026/04/07/terraform-solar-costs.html#:~:text=As%20a%20final%20exercise%2C%20I%20included%20the%20costs%20of%20a%20standard%20utility%20solar%20array%20as%20described%20in%20the%20NREL%20paper) I found that the levelized cost of energy of modern solar arrays is ~0.045 \$/kWh, half of what Reflect requires to be gross profitable.

![Image](/assets/images/reflect-orbital-math/Starlink-table.jpg)

Reflect would have to build their satellites for about half the cost of Starlink satellites today. SpaceX achieved the impossible with Starlink after [many companies failed at satellite internet in the past](https://x.com/r0ck3t23/status/2071045292347031742?s=20) by pulling off many miracles in series. For Reflect to come close to profitability, they need to not just replicate one of SpaceX's most impressive and underappreciated miracles, building thousands of satellites at costs orders of magnitude under the existing industry, but they need to take it even farther to get costs a couple multiples under SpaceX! If they start building hundreds or thousands of satellites every year, that is not even enough as they need to get to a cost of <500 \$/kg on them!

Adding to the list of series miracles required for Reflect to succeed is Starship launch prices reaching <\$10M. Note that this does not mean SpaceX's internal launch costs reaching that level, but launch prices to external customers reaching that level. 

SpaceX seems to have [robust internal demand for launch for decades to come](https://x.com/Tesla/status/2035526423495180779), so they have little incentive to price external launches at close to their internal costs. Instead, what's likely needed for Starship (or equivalent vehicles) launch costs to reach ~50 \$/kg, is sufficient competition to drive down prices. SpaceX competitors have [barely begun to replicate the success of the Falcon 9](https://x.com/dpoddolphinpro/status/2071186849343631833?s=20), so it's a safe assumption that they won't compete with Starship anytime soon.

Another variable that results in a linear change in satellite profitability is the lifespan of the satellite. Achieving a 10 year satellite lifespan is likely one of the easier items on the list. However, designing for long satellite lifespan runs counter to the philosophy of mass manufacturing thousands of cheap satellites. This is a trade every constellation has to run, so nothing fundamentally or uniquely difficult here for Reflect.

Finally, as discussed before, Reflect is a bet on there being vastly more 5 GW class terrestrial solar arrays. Currently 3 such solar arrays exist in the world. In my earlier modelling I assumed every 100 MW class solar array was a potential customer, but such solar arrays are so small that they'd cover only ~2% of the illumination area of a satellite. It is a requirement for Reflect to succeed that there be 2-3 orders of magnitude more 5 GW class solar arrays in the world. This requirement I'm less skeptical of compared to the others, [as capitalism and Wright's law are on their side](https://caseyhandmer.wordpress.com/2024/05/22/the-solar-industrial-revolution-is-the-biggest-investment-opportunity-in-history/).

It's possible Reflect's real bet is not on completely fungible undifferentiated photons delivered onto solar arrays, but higher revenue opportunities like lighting construction sites, as [Ben Nowack has said before](youtu.be/MjcuDBLW24k?si=NABkCUEr8URiq1K2&t=636) and suggested they could charge [\$5,000 / hour](https://futurism.com/space/fcc-huge-mirror-satellite#:~:text=Nowack%20imagines%20charging%20about%20%245%2C000%20per%20hour%20for%20the%20light%20of%20a%20single%20mirror) (~100x more than selling to solar arrays). I'll leave this analysis to someone else as I'm not interested in becoming an expert in industrial lighting costs, but my instinct is that any increase in price you get is counteracted by dramatically lower utilization of the satellite. 

### **Conclusion**

Overall, the insight I wanted to share with this blog post is that you must model businesses like Reflect Orbital by considering their end-state economics, as I described in my blog post [Optimize For The End State](https://ckalitin.github.io/ideas/2026/06/13/end-state-optimization.html) a couple of weeks ago. Any minimum viable product from Reflect Orbital is almost guaranteed to make no money, so if you model only the first iteration you immediately come to the conclusion that it's impossible. However, the capital markets in the US are robust enough that any company with promise of future profitability will likely be able to raise until they get to that future.

All of the unintelligible yappers online making 20 minute videos on this hurt my brain. At the very least please do multiplication in your analysis at least once! Look, I came to the conclusion that it just barely makes sense if they get 5 absolute miracles to go right, but put in the effort to think about it from first principles!

A deeper issue with Reflect is that they don't seem to have any [profitable intermediary steps](https://ckalitin.github.io/technology/2025/04/30/useful-intermediary-steps.html) on the path to success. This makes them far more susceptible to not being able to raise during a particularly bad year and going bankrupt. Luckily, [my boss understands how extremely important revenue-generating intermediary steps are](https://terraformindustries.wordpress.com/2026/06/16/the-enormous-size-of-the-oil-and-gas-market-drives-adoption-of-synthetic-fuel-production/) and we are hiring.
