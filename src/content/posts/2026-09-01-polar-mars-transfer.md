---
title: Mars Transfer Trajectories from Polar Earth Orbits
date: '2026-09-01'
tags:
  - Orbit / Aerospace Modelling
image: /assets/images/polar-mars-transfer/starbase_louisiana.jpg
---

![Image](/assets/images/polar-mars-transfer/starbase_louisiana.jpg)  
*Starbase Lousisana. A majestic testament to the technocaptialist acceleration that will guide the light cone.*

SpaceX recently announced a Louisiana launch complex that will consist of 12 Starship pads. Louisiana sits on the northern coast of the Gulf of America and hence is extremely well suited for polar launch trajectories.

SpaceX is planning to launch millions of [Starmind](https://www.spacex.com/spacexai/starmind) satellites for AI compute. These satellites will live in Sun-Synchronous orbit, which is well suited for launch out of Louisiana. This appears to be the primary reason SpaceX is building Starbase Louisiana.

However, [achieving a trans Mars injection (TMI) is possible from a polar orbit](https://x.com/CKalitin/status/2093037110924398924?s=20). This blog post will describe the Earth orbit azimuth constraints of such a transfer.

A range of orbits are achievable from Louisiana, with Starship overflying Mexico or the water between Mexico and Cuba or Cuba and Florida. As such, there are many ways to get to Mars from Louisiana, this blog post will explore the one most interesting from an orbital dynamics perspective.

For more discussion, [reply here](https://x.com/CKalitin/status/2094992909271707875?s=20).

## **Traditional Mars Transfer Orbits**

![Image](/assets/images/polar-mars-transfer/earth_mars_transfer_trajectory.png)  
*An Earth to Mars transfer trajectory with a 193 day time of flight, viewed in the plane of the ecliptic.*

![Image](/assets/images/polar-mars-transfer/starlink_logo.png)  
*The Starlink logo.*

[To get Mars from the Earth](https://docs.google.com/document/d/1qfztXXRWr1km6U4H44dSpyG7I-Xspd4GkBQmKVjKmbM/edit?tab=t.0#heading=h.oveq8xnxco79) you have to increase your velocity tangential to the Earth's orbit. This maneuver extends your orbit around the sun into an ellipse. With the correct increase in velocity while at Earth, your orbit will intersect Mars' orbit while you intersect Mars' sphere of influence. Such a trajectory is called a Hohmann Transfer and it will make lots of sense if you play Kerbal Space Program.

An Earth-to-Mars Hohmann transfer is illustrated in the diagram above, which also happens to be the Starlink logo. Gateway to Mars.

## **Polar Mars Transfer Orbits**

![Image|80%](/assets/images/polar-mars-transfer/ecliptic_family_best_burn_3d.png)  
*A polar parking orbit whose plane contains the Earth's heliocentric velocity vector, with the injection burn marked.*

First, definitions. We use the Earth's velocity relative to the sun for interplanetary transfers, the heliocentric velocity. The direction of the Earth's velocity relative to the sun is referred to as the heliocentric velocity vector.

Another definition that will come in handy later is the Ecliptic, the plane of the orbit of the Earth around the sun.

If we start in a polar orbit of the Earth, our aim remains to increase our velocity tangential to the Earth's velocity.

To do so, we can use a polar orbit of the type shown above where the plane of the orbit contains the Earth's heliocentric velocity vector. This way, we can conduct a burn at the right time in the orbit such that all of our velocity change is in the same direction of the Earth's heliocentric velocity vector.

However, if the plane of our orbit does not contain the Earth's heliocentric velocity vector, we will have to expend more fuel to compensate for this. Because our trans Mars injection burn is not pointing in the same direction as the Earth's heliocentric velocity vector, we have to compensate by changing our velocity by the difference between the two vectors.

## **Non-Hohmann Transfer Complications**

How naive I was as I wrote the words you read above in the airport on my way to [see West](https://x.com/CKalitin/status/2093526059463451025?s=20).

An interplanetary transfer orbit is not a simple Hohmann transfer, like the Starlink logo suggests. A Hohmann transfer is the lowest energy path between two coplanar circular orbits for a single satellite. This model does not account for the requirement that we must arrive at a point along Mars' orbit at the same moment Mars is there.

This time-dependence requirement gives us the Lambert problem. Our transfer orbit is not constrained just by our initial and final orbits, but also by celestial body positions (Earth and Mars) which are a function of time.

![Image|w411](/assets/images/polar-mars-transfer/earth_mars_transfer_full_period.png)  
*The same transfer, drawn over its full period. The transfer ellipse is wider than Mars' orbit, not tangent to it.*

As such, our transfer orbit is not a simple ellipse between two circular paths (the Starlink Logo), but an ellipse slightly wider than required. To reach such an orbit, our ejection burn must not be exactly parallel to Earth's heliocentric velocity vector.

![Image](/assets/images/polar-mars-transfer/mars_orbit_inclination_edge_on.png)  
*Mars' orbit plane viewed edge-on along its line of nodes, tilted 1.85 degrees out of the ecliptic. True scale.*

![Image](/assets/images/polar-mars-transfer/ecliptic_family_min_dv_plane_face_on.png)  
*A cross-section taken from the perspective of the sun, showing v_infinity offset from the Earth's heliocentric velocity vector.*

One additional complication is that Mars' heliocentric inclination is 1.85 degrees offset from the Earth's so we once again don't burn parallel to the Earth's heliocentric velocity vector, but offset in the vertical direction. The diagram above shows this, where v_infinity (velocity when we're arbitrarily far away from the Earth's gravitational field) is not parallel to the Earth's velocity vector. The diagram above is a cross-section taken from the perspective of the sun.

## **Polar Orbits Aren't Polar Relative To The Solar System**

![Image|w504](/assets/images/polar-mars-transfer/two_polar_plane_families.png)  
*The two 'polar' plane families, each at its own minimum-dV RAAN.*

As we all know, the Earth has a ~23 degree tilt which gives us seasons. This tilt means that an orbit that is polar relative to the Earth is not "polar" relative to the solar system.

This means that an orbit perpendicular to the ecliptic (solar-system polar) is not equivalent to an orbit perpendicular to the Earth's equator (Earth polar).

At this point the blog post is certainly devolving into far too much shape rotation, and I enjoy having both models so I'll include charts of both.

The chart at the top of this section illustrates the difference between the two.

## **Solving Transfer dV vs RAAN**

![Image|60%](/assets/images/polar-mars-transfer/orbital_elements_diagram.png)  
*The six orbital elements.*

Above is a diagram of the six orbital elements. We will be varying the Longitude of Ascending Node, which is similar to the Right Ascension of the Ascending Node (RAAN). This determines how offset our polar orbit is from the Earth's heliocentric velocity vector.

As a reminder, if our RAAN gives us an orbit whose plane is not close to the Earth's heliocentric velocity vector, we will not be able to conduct our Trans Mars Injection burn in a way that efficiently maximizes our velocity parallel to the Earth's heliocentric velocity vector. Furthermore, because of the complications described above, we want to be ~15 degrees off of the Earth's heliocentric velocity vector.

![Image](/assets/images/polar-mars-transfer/injection_dv_vs_raan.png)  
*Minimum injection dV against RAAN offset from the plane containing the Earth's heliocentric velocity vector, for both polar orbit families.*

Finally, we have our output for both orbit classes.

First, we notice that the ideal RAAN is offset 5-10 degrees from the plane containing Earth's heliocentric velocity vector due to Mars' inclination relative to Earth and the non-Hohmann Mars transfer.

Then, we see a smooth increase in dV requirements until the orbit is 90 degrees offset from ideal. Note that we only have to sweep -90 to 90 degrees due to symmetry, where -90 degree and 270 degree offset orbits are equivalent.

Now, we've answered the question we originally sought to ask. However, there is more behavior to be understood like why exactly the polar orbit Mars transfers cost almost the same amount of dV as an ideal 28.5 degree Earth orbit transfer.

![Image](/assets/images/polar-mars-transfer/equatorial_family_departure_geometry.png)
![Image](/assets/images/polar-mars-transfer/ecliptic_family_departure_geometry.png)

*The ideal Earth-Polar and Solar-System-Polar departure geometry.*

The two charts above show the ideal orbits in both the Earth-Polar and Solar-System-Polar families. Both injection burns occur at roughly the same position in the orbit (True Anomaly, my favorite name of the orbital elements) and don't result in particularly different dV expenditures (3.78 km/s vs 3.80 km/s). This behavior shows insensitivity to inclination.

![Image](/assets/images/polar-mars-transfer/injection_dv_vs_inclination.png)  
*Minimum injection dV against parking orbit inclination. Below 22.85 degrees the cost climbs steeply.*

To explore the insensitivity to inclination of initial Earth parking orbits, the chart above sweeps inclination vs injection burn dV.

The interesting result is that we see a wall emerge below 22.85 degrees. The reason for this is that because Earth and Mars have different heliocentric inclinations, you need to increase out-of-ecliptic-plane (solar polar) velocity, which requires a non-zero inclination so that there is a vertical component to your velocity. Note that this reason has nothing to do with Earth's tilt being ~23 degrees.

Furthermore, any plane that contains v_inf (ejection velocity vector) reaches the same minimum dV cost of 3.766 km/s. This is because the geometry of the transfer burn is invariant under rotation about the v_inf axis. In simpler terms, if the plane of your orbit contains your desired ejection vector, the inclination of your orbit is not a determining variable.

## **Conclusion**

In the end, we'll end up seeing all (rounds to 100%) of Starships flying into three orbital planes. Sun-Syncronous Orbit, the plane with an ideal RAAN for a Mars transfer, and the plane of the Moon's orbit. What a magnificent future we've just peered into.

Overall this blog post has been heavy on shape rotation and I'm not sure anyone will understand my points if they haven't spent a critical number of hours in Kerbal Space Program and thinking about orbital mechanics. Nonetheless, this was a fun exercise and a satisfying way to prove to myself I've taught myself orbital mechanics.
