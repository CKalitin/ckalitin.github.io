---
layout: post
title: "Estimating Cost per Mbps of Communication Satellites Over Time"
categories: Space
author:
 - Christopher Kalitin
---
<head>
    <meta property="og:image" content="{{site.url}}/assets/images/com-sat-cost/Cost per Mbps vs. Satellite Program & Year Of First Launch.png">
</head>

Find the raw data <a href="https://docs.google.com/spreadsheets/d/1VOgRbnAsQZdGIPoemRj5ApSLk_jxGanNliWEPnBB3p4/edit?gid=996331802#gid=996331802">here</a>.

![My final testing setup]({{site.url}}/assets/images/com-sat-cost/ark.jpg){: .align-center}  
<i>Ark Invest chart that inspired this blog post</i>

Three hours ago I saw <a href="https://x.com/spacecasetayl0r/status/1877536120893755801">(Space) Case Taylor</a> reply to a <a href="https://x.com/skorusARK/status/1876483384467468797">post Sam Korus</a> of Ark Invest made in which he showed a chart of satellite bandwidth cost over time. You can see this chart above and it clearly shows the exponential cost decline of satellite bandwidth over time, <a href="https://ckalitin.github.io/technology/2024/11/19/s-curve-examples.html">the beauty of learning rate in production</a>. As an exercise and an opportunity to learn more about the communication satellite industry, I decided to derive a similar chart myself.

### <b>Using Jonathan Mcdowell's Dataset</b>

![My final testing setup]({{site.url}}/assets/images/com-sat-cost/Sat Count by Program.png){: .align-center}  
<i>This shows share of total communications satellites launched in all of history by satellite program.</i>

The first step was to filter Jonathan Mcdowell's dataset to include only communication satellites. I've <a href="https://docs.google.com/spreadsheets/d/1VOgRbnAsQZdGIPoemRj5ApSLk_jxGanNliWEPnBB3p4/edit?gid=61915314#gid=61915314">worked with his dataset</a> for over a year and already did this a while ago. This resulted in a list of 8,691 communications satellites successfully launched between 1960 and 2023 (inclusive), the first of these being Transit 1B on April 13, 1960. This data isn't directly pertinent to the result I'd like to get, but the journey is important and there are insights to be gained from this, these insights are the purpose of this section.

![My final testing setup]({{site.url}}/assets/images/com-sat-cost/Communications Satellites Launched Per Year.png){: .align-center}  
<i>That massive wall post 2020 is Starlink</i>

<a href="https://x.com/CKalitin/status/1860565042732601523/photo/1">As is a common theme</a> in trying to analyze the satellite industry, SpaceX's massive market share makes it very difficult to extra any insights from the raw charts, and if you want to learn anything other than "yea SpaceX is still winning" you have to exclude them from the dataset. 

![My final testing setup]({{site.url}}/assets/images/com-sat-cost/Communications Satellites Launched Per Year (Ex. Starlink).png){: .align-center}  
<i>Without Starlink, you can get a feel for the history of communications satellites.</i>

Above you can see communications satellites launched per year excluding Starlink and there are a lot of interesting stories behind all the bumps and increases.

The 1997-1999 bump is mainly due to the initial Iridium satellites. The majority of these satellites were launched by the Delta II out of SLC-2A, Iridium practically owned all launches out of this pad for a couple years. They had 40% of all launch contracts in the world during this time. I've been reading Eccentric Orbits and there are a lot of fun stories about Iridium's early days. Another one is that in the lead up to the inital launches, the GPS IIR-1 launch failed and the Delta II was grounded for a few months, <a href="https://www.youtube.com/watch?v=mTmb3Cqb2qw">you've probably seen the video of this</a>, as it's one of the most spectacular launch failures in history, also the origin of the <a href="https://x.com/tibininin/status/1842336603538161817">"we have had an anomoly" meme</a> circulating on X.

The smaller 2017-2018 bump is the Iridium NEXT launches on Falcon 9. Post 2020, the large increase is due to all the OneWeb launches on Soyuz, Falcon, and ISRO's LVM3.

