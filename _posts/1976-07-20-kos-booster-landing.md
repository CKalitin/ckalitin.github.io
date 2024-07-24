---
layout: post
title: "How to Land an Orbital Rocket Booster with kOS"
categories: Space
author:
 - Christopher Kalitin
---
<head>
    <meta property="og:image" content="{{site.url}}/assets/images/kos-booster-landing/kOS-Booster-Final-Landing.jpg">
</head>

![Image description]({{site.url}}/assets/images/kos-booster-landing/kOS-Booster-Final-Landing.jpg){:width="600" .align-center}

<iframe width="800" src="http://www.youtube.com/embed/WO82PoAczTc" frameborder="0"></iframe>

Tell me where I'm wrong or just give compliments <a href="https://x.com/CKalitin/status/1810414736376549594">here</a>.

One of the reasons Casey Handmer cites when telling people to write blogs is that they are proof of work. Many of my early projects will not be impressive at all, but it's worth documenting it for a few reasons. (1) To share my thought process throughout the project. (2) To force myself into documenting it. (3) To be able to reflect in the future. Forcing yourself to document something means it's much harder to be satisfied with the shitty way of solving a problem. This is why everyone should write a blog. 

### <b>Chronological Order</b>

{ % highlight ruby %}
def foo
    puts 'foo'
end
{ % endhighlight %}

{ % highlight ruby %}
// Get distance between two positions without considering the altitude
// Eg. LatLngDist(V(SHIP:GEOPOSITION:LAT, SHIP:GEOPOSITION:LNG, 0), V(-0.09729775,-74.55767274,0))
function LatLngDist {
    // Only x and y are used for lat/long. z is to be ignored
    Parameter pos1.
    Parameter pos2.

    // 10471.975 is the length of one degree lat/long on Kerbin. 3769911/360
    return (pos1 - pos2):MAG * 10471.975. 
}
{ % endhighlight %}