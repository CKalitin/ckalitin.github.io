---
layout: post
title: "Falcon 9 Launch Cadence Is Asymptotically Approaching A Limit"
categories: Space
tags:
    - Space Industry Analysis
    - Latest Posts
author:
 - Christopher Kalitin
word_count: 1341
---
<head>
    <meta property="og:image" content="{{site.url}}/assets/images/falcon-9-cadence/f9_starlink_launches_vs_month_with_sigmoid.png">
</head>

![Image](/assets/images/falcon-9-cadence/f9_starlink_launches_vs_month_with_sigmoid.png){:height="400"}  
<i>[Expanded Image](/assets/images/falcon-9-cadence/f9_starlink_launches_vs_month_with_sigmoid.png)</i>

### **Introduction**

A couple of weeks ago I updated the [160 space industry charts](https://ckalitin.github.io/space/2025/06/08/space-industry-charts.html) available on my blog and [noticed](https://x.com/CKalitin/status/1998611899546517821?s=20) that Falcon 9 launch cadence appeared to be leveling out.

As I've [previously written about](https://ckalitin.github.io/technology/2025/05/03/jevons-learning-rate.html), the growth of every new technology appears to follow an S-curve. Falcon 9 launch cadence is no different, and - after carefully checking out assumptions - we can fit an S-curve to the data to predict the leveling out of future Falcon 9 launches.

tl;dr:
- The primary limitation to cadence appears to be ground infrastructure
- Booster turnaround times are also hitting a limit, but can be solved by building more boosters
- Falcon 9 cadence growth is primarily driven by Starlink launches, which are moving to Starship
- After Starlink launches are completed moving to Starship, Falcon 9 cadence will collapse

The vibecoded script and painstakingly manually written library to generate all the graphs in this post is available on [GitHub](https://github.com/CKalitin/mcdowell-dataset-analysis/blob/main/examples/f9_matplotlib.py).

### **Launch Pad Cadence Graphs**

![Image](/assets/images/falcon-9-cadence/f9_days_between_launches_LC40_2022-01-01_present.png){:height="400"}  
<i>[Expanded Image](/assets/images/falcon-9-cadence/f9_days_between_launches_LC40_2022-01-01_present.png)</i>

SLC40 is SpaceX's most frequently used Falcon 9 launch pad, and hence the most used launch pad in the world. Above is a graph of days between Falcon 9 Launches from SLC-40.

As we can see, the majority of the gains in launch rate happened pre-2024, and since then they've managed to shave 1-2 days off average turnaround time.

There's a consistent minor trend toward lower turnaround times, amounting to about 1 day per year for the past 2 years. This suggests there is minor room for future improvement, but not a significant amount. The S-Curve of launch cadence from SLC-40 has leveled out, only minor improvements are likely in the future.

The fundamental limiting factor in launch cadence is turnaround time of a single launch site. All other factors are dependent on this one. So, without another launch site, Falcon 9 cadence cannot increase significantly.

It took thousands of engineers working extremely hard through a decade to build a launch vehicle capable of launching and landing every few days, and now their work is complete and they can move onto Starship or [breaking the Medium Launch Monopoly](https://finance.yahoo.com/news/rocket-lab-ceo-we-have-the-right-combination-to-break-spacexs-monopoly-194214038.html).

![Image](/assets/images/falcon-9-cadence/f9_days_between_launches_LC39A_2022-01-01_present.png){:height="400"}  
<i>[Expanded Image](/assets/images/falcon-9-cadence/f9_days_between_launches_LC39A_2022-01-01_present.png)</i>

LC-39A is a more interesting case, as it is shared between Falcon 9, Falcon Heavy, and Dragon launches. So, it has a much more sporradic launch cadence as the pad is reconfigured between different vehicle types. That 3rd degree polynominal fit is literally a wave.

![Image](/assets/images/falcon-9-cadence/f9_days_between_launches_SLC4E_2022-01-01_present.png){:height="400"}  
<i>[Expanded Image](/assets/images/falcon-9-cadence/f9_days_between_launches_SLC4E_2022-01-01_present.png)</i>

SLC-4E is SpaceX's west coast launch pad, primarily used for Starlink launches to polar orbits. It has a similar trend to SLC-40, with minor improvements in turnaround time over the past 2 years.

### **Booster Turnaround Time**

![Image](/assets/images/falcon-9-cadence/f9_days_between_vs_date_all_boosters.png){:height="400"}  
<i>[Expanded Image](/assets/images/falcon-9-cadence/f9_days_between_vs_date_all_boosters.png)</i>

As discussed above, the primary limitation to launch cadence is launch site turnaround time. However, analyzing booster turnaround times can provide us some insight into how many boosters SpaceX required to maintain a given launch cadence.

SpaceX's fastest turnaround time for a Falcon 9 booster was 9 days with B1088 from SLC-4E between a March 12 2025 Launch of the SPHEREx NASA missing and a March 21 2025 Starshield launch.

Average booster turnaround time follows a similar trend as launch site turnaround time, with only minor improvements over the past few years. The average booster turnaround time for the last 50 launches is currently 50 days.

Note that the 10th percentile booster turnaround time is 27 days, just under a month. Nearly all Falcon 9 boosters require more than a month to be readied for their next launch.

Given an average booster turnaround time of 50 days, and a launch cadence of 2-3 days between launches, SpaceX requires around 20 flight ready Falcon 9 boosters to maintain their current launch cadence.

### **Fitting An S-Curve**

![Image](/assets/images/falcon-9-cadence/f9_starlink_launches_vs_month_with_sigmoid.png){:height="400"}  
<i>[Expanded Image](/assets/images/falcon-9-cadence/f9_starlink_launches_vs_month_with_sigmoid.png)</i>

With the above data in mind, we can make some assumptions to fit an S-curve to Falcon 9 launch cadence.

Assuming SpaceX can achieve average turnaround times of 4 days from SLC-40 and SLC-4E and 14 days from LC-39A, we reach a theoretical maximum annual launch cadence of 209 launches per year, or 17.4 launches per month.

This is merely assuming a marginal improvement of ~10% in turnaround times from current levels, about equivalent to what they've sustained annually for the past 2 years. 

With this 17.4 launches per month terminal value, I manually fit an S-curve to the monthly Falcon 9 launch cadence data, resulting in the red curve above.

The fact that an S-curve fits to the data so nicely (with some averaging) is a great testament to the work of the Falcon 9 team over the last few years, and the applicability of Wright's law.

### **Predicting Starship Launches & Falcon 9 Cadence Collapse**

Part of the reason I'm confident in my prediction of Falcon 9 cadence leveling out is that the primary driver of Falcon 9 launches over the past few years has been Starlink launches and these are moving to Starship.

With a few assumptions about Starship launch cadence, we can predict the shift of Starlink from Falcon 9 to Starship.

Assumptions:
- 2026 will primarily consist of Starship V3 test launches.
- Ship + Booster Reuse Achieved in 2026.
- Second Pad (at least!) operational in 2027 (LC-39A).
- Sufficient short-term cadence for Starlink after test, Lunar, and Martian missions.

![Image](/assets/images/falcon-9-cadence/starship_launches_by_type.png){:height="400"}  
<i>[Expanded Image](/assets/images/falcon-9-cadence/starship_launches_by_type.png)</i>

With the above assumptions, I took a guess at what Starship launch cadence might look like over the next few years. Note that I have the first Starlink launch at the end of 2026, and assume a fairly linear ramp as that is suitable for this analysis (of course it'll actually be an S-curve).

![Image](/assets/images/falcon-9-cadence/starlink_capacity_tbps.png){:height="400"}  
<i>[Expanded Image](/assets/images/falcon-9-cadence/starlink_capacity_tbps.png)</i>

At the end of 2024, [SpaceX disclosed](https://x.com/Starlink/status/1874123729950958075?s=20) that each Starship Starlink launch would add over 60 Tbps of capacity to the Starlink constellation, and that this is 20x greater than a single Falcon 9 Starlink launch. This data may be slightly out of date for when it's most relevant in my analysis (2026-2029), but it is suitable for rough estimates as my prediction of Starship launch cadence will probably be more wrong than this data.

Note that I backfit this 3 Tbps number to all previous Falcon 9 launches, artifically increasing the impact of early Starlink launches with previous satellite versions. This is again suitable for the current analysis.

Combining this information with my Starship launch cadence estimates, we can predict additional Starlink bandwidth capacity from each Starship and Falcon 9 Launch.

We see that a Single Starship launch per month adds more bandwidth capacity than 20 Falcon 9 launches in a month.

![Image](/assets/images/falcon-9-cadence/f9_and_starship_total_launches_vs_month.png){:height="400"}  
<i>[Expanded Image](/assets/images/falcon-9-cadence/f9_and_starship_total_launches_vs_month.png)</i>

I assume SpaceX will continue launching Starlink of Falcon 9 until it is a small fraction of Starship capacity. Eliminating all Falcon 9 Starlink launches as soon as Starship begins launching Starlink satellites is suboptimal because that would eliminate ~50% of Starlink capacity growth capability until Starlink launches ramp up.

Even though a Falcon 9 Starship launch is far less efficient (in cost per Tbps) than a Starship launch, each Falcon 9 launch still makes a marginal contribution to Starlink capacity growth.

My assumption is that Falcon 9 Starlink launches will begin to be phased out around the time Starship is ramping from 1 to 2 Starlink launches per month, around mid 2028.

This means around the begin of 2028 will begin the collapse of Falcon 9 launch cadence, as Starlink launches are around 75% of Falcon 9 launches.

![Image](/assets/images/falcon-9-cadence/global_launches_vs_year_by_general_launch_payload_type_1957_present.png){:height="400"}  
<i>[Expanded Image](/assets/images/falcon-9-cadence/global_launches_vs_year_by_general_launch_payload_type_1957_present.png)</i>

Given that the Falcon 9 is the most launched rocket in the world, 2028 may be a year in which humanity experiences a decline in annual launch cadence. Note that annual mass to orbit will increase, due to Starship's vastly higher payload capacity.

The last time annual launch cadence declined was in 2019, and this was also due to Falcon 9 launch cadence decreasing.

Given the ramp upcoming ramp of Starship launches and the excess of competition in the launch market, we may never see another dip in annual launch cadence after 2028.

We will never again experience a year like 1986 when [the US only had 6 successful orbital launches](https://x.com/CKalitin/status/1934492313042223581). The lowest in US history, including 1958 when US orbital launches began.

What a time to be alive!  
The Future Looks Bright!