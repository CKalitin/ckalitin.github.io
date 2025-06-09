---
layout: post
title: "Space Industry Charts"
categories: Space
tags:
    - Other
author:
 - Christopher Kalitin
word_count: 1114
redirect_from:
  - /space/2025/06/08/space-industry-charts.html
---
<head>
    <meta property="og:image" content="{{site.url}}\assets\space-industry-charts\electron_launches_vs_mass_by_orbit.png">
</head>

I'm very open to ideas for new charts!  
I'm in this for the love of the game pls send me ideas on [X](https://x.com/CKalitin) or email (christopher.kalitin@gmail.com).

Github Repo that I wrote to generate these charts [here](https://github.com/CKalitin/mcdowell-dataset-analysis).  
CSVs of all the data is also available in the repo if you'd like to visualize it yourself! Or, run the scripts and get your own data for a launch vehicle of your choosing!

[Download All]({{site.url}}\assets\space-industry-charts.zip)

### <b>Type Explanations</b>

There are currently 2 types in which launches are categorised:
* Orbit
* General Launch Payload Type

<b>Orbits:</b>

* LEO (Low Earth Orbit)
* SSO (Sun-Synchronous Orbit)
* MEO (Medium Earth Orbit)
* GTO (Geostationary Transfer Orbit)
* GEO (Geostationary Earth Orbit)
* HEO (High Earth Orbit)
* BEO (Beyond Earth Orbit)

Polar orbits are considered a subset of SSO. Not technically correct but it's a useful simplification. Pls [complain at me](https://x.com/CKalitin) if you disagree my mind isn't hard to sway here.

<b>General Launch Payload Types:</b>
* Starlink
* Commercial
* Chinese Commercial
* Government
* Eastern Government
* Military
* Eastern Military

Eastern is defined as Russia, China, Soviet Union. Fairly arbitrary.

These categories were created for high level views of the global space industry, so they don't perfectly match some launch-vehicle specific charts.

Eg. There are Electron charts categorised by General Launch Payload Type, but obviously Electron isn't launching Russian defense satellites.

### <b>Chart Examples & Explainations</b>

<b>Launches Vs Mass By Category:</b>  

![Electron Launches Vs Mass By Orbit]({{site.url}}\assets\space-industry-charts\electron_launches_vs_mass_by_orbit.png){: width="550"}  
[Expanded Chart]({{site.url}}\assets\space-industry-charts\electron_launches_vs_mass_by_orbit.png){: target="_blank"}

These charts show the distribution of launches by payload mass range. They're also broken down by category.

Eg. how many Falcon 9 launches were between 0 and 1000 kg and to LEO, BEO, etc.

<b>Total Mass Vs Mass By Category:</b>  

![F9 Launches Vs Month By General Launch Payload Type 2010 2025]({{site.url}}\assets\space-industry-charts\f9_total_mass_vs_mass_by_general_launch_payload_type.png){: width="550"}  
[Expanded Chart]({{site.url}}\assets\space-industry-charts\f9_total_mass_vs_mass_by_general_launch_payload_type.png){: target="_blank"}

These charts are the same as the launch count vs. mass range charts describe above but normalized for mass.

So, instead of launch count per mass range, this is total mass launched per mass range.

Eg. A launch in the 0-1000 kg range with a payload of 500 kg counts as 500 kg in the chart. A launch in the 16-17 t range with a payload of 16.5 t counts as 16,500 kg in the chart.

This weighs each launch by its payload mass, to give a better sense of the distribution of mass launched. Useful for constellations for example, like Starlink.

<b>Launches Vs Month By Category:</b>  

![F9 Launches Vs Month By Orbit 2010 2025]({{site.url}}\assets\space-industry-charts\f9_launches_vs_month_by_orbit_2010_2025.png){: width="550"}  
[Expanded Chart]({{site.url}}\assets\space-industry-charts\f9_launches_vs_month_by_orbit_2010_2025.png){: target="_blank"}

There's a lot of months in the history of a launch vehicle, so this charts gets a bit busy.

<b>Launches Vs Year By Category:</b>  

![Global Launches Vs Year By General Launch Payload Type 2000 2025]({{site.url}}\assets\space-industry-charts\global_launches_vs_year_by_general_launch_payload_type_2000_2025.png){: width="550"}  
[Expanded Chart]({{site.url}}\assets\space-industry-charts\global_launches_vs_year_by_general_launch_payload_type_2000_2025.png){: target="_blank"}

Yea you get what this is right?

### <b>Charts in Alphabetical Order</b>

[Download All]({{site.url}}\assets\space-industry-charts.zip)

<b>Ariane</b>

This covers Ariane 1, 2, 3, 4, and 5.

[Ariane Launches Vs Mass By General Launch Payload Type]({{site.url}}\assets\space-industry-charts\ariane_launches_vs_mass_by_general_launch_payload_type.png){: target="_blank"}  
[Ariane Launches Vs Mass By Orbit]({{site.url}}\assets\space-industry-charts\ariane_launches_vs_mass_by_orbit.png){: target="_blank"}  
[Ariane Launches Vs Month By General Launch Payload Type 1979 2025]({{site.url}}\assets\space-industry-charts\ariane_launches_vs_month_by_general_launch_payload_type_1979_2025.png){: target="_blank"}  
[Ariane Launches Vs Month By Orbit 1979 2025]({{site.url}}\assets\space-industry-charts\ariane_launches_vs_month_by_orbit_1979_2025.png){: target="_blank"}  
[Ariane Launches Vs Year By General Launch Payload Type 1979 2025]({{site.url}}\assets\space-industry-charts\ariane_launches_vs_year_by_general_launch_payload_type_1979_2025.png){: target="_blank"}  
[Ariane Launches Vs Year By Orbit 1979 2025]({{site.url}}\assets\space-industry-charts\ariane_launches_vs_year_by_orbit_1979_2025.png){: target="_blank"}  
[Ariane Total Mass Vs Mass By General Launch Payload Type]({{site.url}}\assets\space-industry-charts\ariane_total_mass_vs_mass_by_general_launch_payload_type.png){: target="_blank"}  
[Ariane Total Mass Vs Mass By Orbit]({{site.url}}\assets\space-industry-charts\ariane_total_mass_vs_mass_by_orbit.png){: target="_blank"}  

<b>Atlas</b>

This covers Atlas 1, 2, 3, and 5. Remember Atlas 4 doesn't exist.

[Atlas Launches Vs Mass By General Launch Payload Type]({{site.url}}\assets\space-industry-charts\atlas_launches_vs_mass_by_general_launch_payload_type.png){: target="_blank"}  
[Atlas Launches Vs Mass By Orbit]({{site.url}}\assets\space-industry-charts\atlas_launches_vs_mass_by_orbit.png){: target="_blank"}  
[Atlas Launches Vs Month By General Launch Payload Type 1958 2025]({{site.url}}\assets\space-industry-charts\atlas_launches_vs_month_by_general_launch_payload_type_1958_2025.png){: target="_blank"}  
[Atlas Launches Vs Month By Orbit 1958 2025]({{site.url}}\assets\space-industry-charts\atlas_launches_vs_month_by_orbit_1958_2025.png){: target="_blank"}  
[Atlas Launches Vs Year By General Launch Payload Type 1958 2025]({{site.url}}\assets\space-industry-charts\atlas_launches_vs_year_by_general_launch_payload_type_1958_2025.png){: target="_blank"}  
[Atlas Launches Vs Year By Orbit 1958 2025]({{site.url}}\assets\space-industry-charts\atlas_launches_vs_year_by_orbit_1958_2025.png){: target="_blank"}  
[Atlas Total Mass Vs Mass By General Launch Payload Type]({{site.url}}\assets\space-industry-charts\atlas_total_mass_vs_mass_by_general_launch_payload_type.png){: target="_blank"}  
[Atlas Total Mass Vs Mass By Orbit]({{site.url}}\assets\space-industry-charts\atlas_total_mass_vs_mass_by_orbit.png){: target="_blank"}  

<b>Electron</b>

[Electron Launches Vs Mass By General Launch Payload Type]({{site.url}}\assets\space-industry-charts\electron_launches_vs_mass_by_general_launch_payload_type.png){: target="_blank"}  
[Electron Launches Vs Mass By Orbit]({{site.url}}\assets\space-industry-charts\electron_launches_vs_mass_by_orbit.png){: target="_blank"}  
[Electron Launches Vs Month By General Launch Payload Type 2017 2025]({{site.url}}\assets\space-industry-charts\electron_launches_vs_month_by_general_launch_payload_type_2017_2025.png){: target="_blank"}  
[Electron Launches Vs Month By Orbit 2017 2025]({{site.url}}\assets\space-industry-charts\electron_launches_vs_month_by_orbit_2017_2025.png){: target="_blank"}  
[Electron Launches Vs Year By General Launch Payload Type 2017 2025]({{site.url}}\assets\space-industry-charts\electron_launches_vs_year_by_general_launch_payload_type_2017_2025.png){: target="_blank"}  
[Electron Launches Vs Year By Orbit 2017 2025]({{site.url}}\assets\space-industry-charts\electron_launches_vs_year_by_orbit_2017_2025.png){: target="_blank"}  
[Electron Total Mass Vs Mass By General Launch Payload Type]({{site.url}}\assets\space-industry-charts\electron_total_mass_vs_mass_by_general_launch_payload_type.png){: target="_blank"}  
[Electron Total Mass Vs Mass By Orbit]({{site.url}}\assets\space-industry-charts\electron_total_mass_vs_mass_by_orbit.png){: target="_blank"}  

<b>Falcon 9</b>

[F9 Launches Vs Mass By General Launch Payload Type]({{site.url}}\assets\space-industry-charts\f9_launches_vs_mass_by_general_launch_payload_type.png){: target="_blank"}  
[F9 Launches Vs Mass By Orbit]({{site.url}}\assets\space-industry-charts\f9_launches_vs_mass_by_orbit.png){: target="_blank"}  
[F9 Launches Vs Month By General Launch Payload Type 2010 2025]({{site.url}}\assets\space-industry-charts\f9_launches_vs_month_by_general_launch_payload_type_2010_2025.png){: target="_blank"}  
[F9 Launches Vs Month By Orbit 2010 2025]({{site.url}}\assets\space-industry-charts\f9_launches_vs_month_by_orbit_2010_2025.png){: target="_blank"}  
[F9 Launches Vs Year By General Launch Payload Type 2010 2025]({{site.url}}\assets\space-industry-charts\f9_launches_vs_year_by_general_launch_payload_type_2010_2025.png){: target="_blank"}  
[F9 Launches Vs Year By Orbit 2010 2025]({{site.url}}\assets\space-industry-charts\f9_launches_vs_year_by_orbit_2010_2025.png){: target="_blank"}  
[F9 Total Mass Vs Mass By General Launch Payload Type]({{site.url}}\assets\space-industry-charts\f9_total_mass_vs_mass_by_general_launch_payload_type.png){: target="_blank"}  
[F9 Total Mass Vs Mass By Orbit]({{site.url}}\assets\space-industry-charts\f9_total_mass_vs_mass_by_orbit.png){: target="_blank"}  

<b>Falcon Heavy</b>

[Fh Launches Vs Mass By Orbit]({{site.url}}\assets\space-industry-charts\fh_launches_vs_mass_by_orbit.png){: target="_blank"}  
[Fh Total Mass Vs Mass By Orbit]({{site.url}}\assets\space-industry-charts\fh_total_mass_vs_mass_by_orbit.png){: target="_blank"}  

<b>Global Launches</b>

[Global Launches Vs Month By General Launch Payload Type 1957 2025]({{site.url}}\assets\space-industry-charts\global_launches_vs_month_by_general_launch_payload_type_1957_2025.png){: target="_blank"}  
[Global Launches Vs Month By General Launch Payload Type 2000 2025]({{site.url}}\assets\space-industry-charts\global_launches_vs_month_by_general_launch_payload_type_2000_2025.png){: target="_blank"}  
[Global Launches Vs Month By Orbit 1957 2025]({{site.url}}\assets\space-industry-charts\global_launches_vs_month_by_orbit_1957_2025.png){: target="_blank"}  
[Global Launches Vs Month By Orbit 2000 2025]({{site.url}}\assets\space-industry-charts\global_launches_vs_month_by_orbit_2000_2025.png){: target="_blank"}  
[Global Launches Vs Year By General Launch Payload Type 1957 2025]({{site.url}}\assets\space-industry-charts\global_launches_vs_year_by_general_launch_payload_type_1957_2025.png){: target="_blank"}  
[Global Launches Vs Year By General Launch Payload Type 2000 2025]({{site.url}}\assets\space-industry-charts\global_launches_vs_year_by_general_launch_payload_type_2000_2025.png){: target="_blank"}  
[Global Launches Vs Year By Orbit 1957 2025]({{site.url}}\assets\space-industry-charts\global_launches_vs_year_by_orbit_1957_2025.png){: target="_blank"}  
[Global Launches Vs Year By Orbit 2000 2025]({{site.url}}\assets\space-industry-charts\global_launches_vs_year_by_orbit_2000_2025.png){: target="_blank"}  

<b>Global Payloads</b>

[Global Payloads vs Year by Simple Payload Category]({{site.url}}\assets\space-industry-charts\global_payloads_vs_year_by_simple_payload_category.png){: target="_blank"}  

<b>Planet Labs</b>

[Planet Labs Payloads Vs Year By Country]({{site.url}}\assets\space-industry-charts\planet_labs_payloads_vs_year_by_country.png)  
[Planet Labs Payloads Vs Year By Launch Vehicle]({{site.url}}\assets\space-industry-charts\planet_labs_payloads_vs_year_by_launch_vehicle.png)  
[Planet Labs Payloads Vs Year By Orbit]({{site.url}}\assets\space-industry-charts\planet_labs_payloads_vs_year_by_orbit.png)  
[Planet Labs Payloads Vs Year By Program]({{site.url}}\assets\space-industry-charts\planet_labs_payloads_vs_year_by_program.png)  

<b>Soyuz</b>

[Soyuz Launches Vs Mass By General Launch Payload Type]({{site.url}}\assets\space-industry-charts\soyuz_launches_vs_mass_by_general_launch_payload_type.png){: target="_blank"}  
[Soyuz Launches Vs Mass By Orbit]({{site.url}}\assets\space-industry-charts\soyuz_launches_vs_mass_by_orbit.png){: target="_blank"}  
[Soyuz Launches Vs Month By General Launch Payload Type 1957 2025]({{site.url}}\assets\space-industry-charts\soyuz_launches_vs_month_by_general_launch_payload_type_1957_2025.png){: target="_blank"}  
[Soyuz Launches Vs Month By Orbit 1957 2025]({{site.url}}\assets\space-industry-charts\soyuz_launches_vs_month_by_orbit_1957_2025.png){: target="_blank"}  
[Soyuz Launches Vs Year By General Launch Payload Type 1957 2025]({{site.url}}\assets\space-industry-charts\soyuz_launches_vs_year_by_general_launch_payload_type_1957_2025.png){: target="_blank"}  
[Soyuz Launches Vs Year By Orbit 1957 2025]({{site.url}}\assets\space-industry-charts\soyuz_launches_vs_year_by_orbit_1957_2025.png){: target="_blank"}  
[Soyuz Total Mass Vs Mass By General Launch Payload Type]({{site.url}}\assets\space-industry-charts\soyuz_total_mass_vs_mass_by_general_launch_payload_type.png){: target="_blank"}  
[Soyuz Total Mass Vs Mass By Orbit]({{site.url}}\assets\space-industry-charts\soyuz_total_mass_vs_mass_by_orbit.png){: target="_blank"}  

<b>Starlink</b>

[Starlink Apogee Vs Date By Pad]({{site.url}}\assets\space-industry-charts\starlink_apogee_vs_date_by_pad.png)  
[Starlink Apogee Vs Inclination By Pad]({{site.url}}\assets\space-industry-charts\starlink_apogee_vs_inclination_by_pad.png)  
[Starlink Inclination Vs Date By Pad]({{site.url}}\assets\space-industry-charts\starlink_inclination_vs_date_by_pad.png)  
[Starlink Mass Vs Date By Pad]({{site.url}}\assets\space-industry-charts\starlink_mass_vs_date_by_pad.png)  

<b>Titan</b>

[Titan Launches Vs Mass By General Launch Payload Type]({{site.url}}\assets\space-industry-charts\titan_launches_vs_mass_by_general_launch_payload_type.png){: target="_blank"}  
[Titan Launches Vs Mass By Orbit]({{site.url}}\assets\space-industry-charts\titan_launches_vs_mass_by_orbit.png){: target="_blank"}  
[Titan Launches Vs Month By General Launch Payload Type 1964 2005]({{site.url}}\assets\space-industry-charts\titan_launches_vs_month_by_general_launch_payload_type_1964_2005.png){: target="_blank"}  
[Titan Launches Vs Month By Orbit 1964 2005]({{site.url}}\assets\space-industry-charts\titan_launches_vs_month_by_orbit_1964_2005.png){: target="_blank"}  
[Titan Launches Vs Year By General Launch Payload Type 1964 2005]({{site.url}}\assets\space-industry-charts\titan_launches_vs_year_by_general_launch_payload_type_1964_2005.png){: target="_blank"}  
[Titan Launches Vs Year By Orbit 1964 2005]({{site.url}}\assets\space-industry-charts\titan_launches_vs_year_by_orbit_1964_2005.png){: target="_blank"}  
[Titan Total Mass Vs Mass By General Launch Payload Type]({{site.url}}\assets\space-industry-charts\titan_total_mass_vs_mass_by_general_launch_payload_type.png){: target="_blank"}  
[Titan Total Mass Vs Mass By Orbit]({{site.url}}\assets\space-industry-charts\titan_total_mass_vs_mass_by_orbit.png){: target="_blank"}  