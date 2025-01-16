---
layout: post
title: "Fun Charts That Visualize The History of Communicatons Satellites"
categories: Space
author:
 - Christopher Kalitin
---
<head>
    <meta property="og:image" content="{{site.url}}/assets/images/fun-comsat-charts/Communications Satellite Launches by Provider vs. Year (Ex. Starlink).png">
</head>

![Image]({{site.url}}/assets/images/com-sat-cost/Communications Satellites Launched Per Year (Ex. Starlink).png){: .align-center}  
<i>This is the chart from the previous blog post.</i>

<a href="https://ckalitin.github.io/space/2025/01/09/com-sat-cost.html">In my blog post from 6 days ago</a> I wrote about the insights I gained along the way to chart out communication satellite bandwidth cost over time. As part of that blog post I created the chart you see above of communication satellites launched over time and described some of the the bumps you see on it. However, without any colour coding or categorization, it's difficult to parse. So, I suffering in Google Sheets for a few hours and categorized the data by Satellite Series so you could better visualize my points.

So, here's 4 fun charts that visualize the history of communications satellites with an explaination under each one of interesting points.

![Image]({{site.url}}/assets/images/fun-comsat-charts/Communications Satellite Launches by Provider vs. Year.png){: .align-center}  
This chart just shows that Starlink is still winning.

![Image]({{site.url}}/assets/images/fun-comsat-charts/Communications Satellite Launches by Provider vs. Year (Ex. Starlink).png){: .align-center}  

Without Starlink, we can better see the history of Communications Satellite launches. You can clearly see the Iridium V1 bump from 1997-1998, and directly after it the Globalstar bump, which were Iridiums chief competition back in the day. This also illustrates the massive launch requirements for internet constellations vs. call constellations with the size of the Iridium and Globalstar bumps relative to OneWeb (and of course Starlink, but that's on a whole other level). All the red on the chart is all the other Soviet/Russia satellites and the yellow is western communications satellites and Galileo, which is the European GPS system. 

![Image]({{site.url}}/assets/images/fun-comsat-charts/Sat Count by Satellite Program.png){: .align-center}  
Just for fun, you can see the power law distribution of satellite programs by the number of satellites launched. As you'd expect, most satellites are one-offs or part of a small series, you get what'd you'd expect after that, an exponential decay.

![Image]({{site.url}}/assets/images/fun-comsat-charts/Sat Count by Satellite Program Aggregated.png){: .align-center}  
This chart is another way to illustrate the power law distribution of satellite programs as you can see how many satellite programs have launched 1 or fewer satellites, <=2, <=3, etc. The previous chart is the derivative of this function.
