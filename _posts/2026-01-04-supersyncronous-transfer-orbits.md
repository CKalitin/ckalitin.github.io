---
layout: post
title: "Modelling dV Savings Of Supersynchronous Transfer Orbits"
categories: Space
tags:
    - Space Industry Analysis
    - Drafts
author:
 - Christopher Kalitin
word_count: 252
---
<head>
    <meta property="og:image" content="{{site.url}}/assets/images/falcon-9-cadence/f9_starlink_launches_vs_month_with_sigmoid.png">
</head>

![Image](/assets/images/falcon-9-cadence/f9_starlink_launches_vs_month_with_sigmoid.png){:height="400"}  
<i>[Expanded Image](/assets/images/falcon-9-cadence/f9_starlink_launches_vs_month_with_sigmoid.png)</i>

If you have feedback or criticism, please [respond here](https://x.com/CKalitin/status/2004666380306841780?s=20).

A few days ago it was announced that SpainSat NG 2 - a Spanish Militry Telecommunication Satellite launched in October 2025 - was struck by a micrometeoroid while 50,000 km above the Earth. Note that at 50,000 km altitude there is extremely little man-made space debris, so the impactor was almost certainly a natural micrometeoroid, see [the distribution of space debris](https://www.google.com/search?client=firefox-b-d&hs=DMRU&sca_esv=8661a703ca5d5409&sxsrf=AE3TifPul-NgCOJjxg__-p-XSQuptlGVRg:1767592158357&udm=2&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIeuYzzFkfneXafNx6OMdA4MRo3L_oOc-1oJ7O1RV73dx3MIyCigtuiU2aDjExIvydX85cOq96-7Mxd4KSNCLhHwYIo4RJXEXVWYwYSeCFXG0J5g7J0_QlNiqM4Euq3DbUukakRlQBtEL4YIItWZLBS4_D4qpoqMYJgdHY3UCoXAcIgwU4ag&q=space+debris+over+earth+altitude+distribution&sa=X&ved=2ahUKEwjDsdP12fORAxUKODQIHf6EJ9sQtKgLegQIFhAB&biw=958&bih=954&dpr=1#sv=CAMSVhoyKhBlLUV5aTNlcWE4OXRmMU9NMg5FeWkzZXFhODl0ZjFPTToOQWpwMm80NXhQWDdHbE0gBCocCgZtb3NhaWMSEGUtRXlpM2VxYTg5dGYxT00YADABGAcgyYC8kwMwAkoKCAIQAhgCIAIoAg).

This satellite was transiting to a Geostationary Orbit above Earth at an altitude of 35,768 km using a supersynchronous transfer orbit with an apogee of approximately 50,000 km. This is in contrast to a more common direct geostationary transfer orbit (GTO) with an apogee of 35,768 km.

After stepping out of the streamroom an hour ago I got to thinking about the dV savings of using a supersynchronous transfer orbit versus a standard geostationary transfer orbit so - with great help from Gemini and Grok Code Fast 1 - I wrote some Python scripts to model dV of given maneuvers.

The code and charts are available on [Github](https://github.com/CKalitin/charts-and-data-analysis/tree/master/supersyncronous-transfer-modelling).

 Total ΔV: 1.279 km/s

To determine how much dV a satellite can get in a single apogee pass, I [asked Gemini](https://gemini.google.com/app/64d01de46d723651) to list a few Ion thrusters on standard GEO Satellite Busses. Most results average around a net acceleration of 5e-5 m/s². Assuming a satellite burns for 2 hours on either side of apogee in a geostationary orbit, we get a total dV of 2*2*3600*5e-5 = 0.72 m/s per apogee pass.