---
layout: post
title: "Space Industry Charts"
categories: Space
tags:
    - Other
author:
 - Christopher Kalitin
word_count: 1727
redirect_from:
  - /space/2025/06/08/space-industry-charts.html
---
<head>
    <meta property="og:image" content="{{site.url}}\assets\space-industry-charts\electron_launches_vs_mass_by_orbit.png">
</head>

I'm very open to ideas for new charts!  
I'm in this for the love of the game pls send me ideas on [X](https://x.com/CKalitin) or email (christopher.kalitin@gmail.com).

[See the Github repo I wrote to generate these charts!](https://github.com/CKalitin/mcdowell-dataset-analysis)

CSVs of all the data is also available in the repo if you'd like to visualize it yourself! Or, run the scripts and get your own data for a launch vehicle of your choosing!

[Download All 111 Charts]({{site.url}}\assets\space-industry-charts.zip)

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

*Some* polar orbits are considered a subset of SSO. If this is critical to your application, check the [raw csv lists](https://github.com/CKalitin/mcdowell-dataset-analysis/tree/main/examples/outputs/raw_dataframes) of the launches for a particular chart. Polar being SSO isn't technically correct but it's a useful simplification. Pls [complain at me](https://x.com/CKalitin) if you disagree my mind isn't hard to sway here.

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

![Electron Launches Vs Mass By Orbit]({{site.url}}\assets\space-industry-charts\electron\electron_launches_vs_mass_by_orbit.png){: width="550"}  
[Expanded Chart]({{site.url}}\assets\space-industry-charts\electron\electron_launches_vs_mass_by_orbit.png){: target="_blank"}

These charts show the distribution of launches by payload mass range. They're also broken down by category.

Eg. how many Falcon 9 launches were between 0 and 1000 kg and to LEO, BEO, etc.

<b>Total Mass Vs Mass By Category:</b>  

![F9 Launches Vs Month By General Launch Payload Type 2010 2025]({{site.url}}\assets\space-industry-charts\f9\f9_total_mass_vs_mass_by_general_launch_payload_type.png){: width="550"}  
[Expanded Chart]({{site.url}}\assets\space-industry-charts\f9\f9_total_mass_vs_mass_by_general_launch_payload_type.png){: target="_blank"}

These charts are the same as the launch count vs. mass range charts describe above but normalized for mass.

So, instead of launch count per mass range, this is total mass launched per mass range.

Eg. A launch in the 0-1000 kg range with a payload of 500 kg counts as 500 kg in the chart. A launch in the 16-17 t range with a payload of 16.5 t counts as 16,500 kg in the chart.

This weighs each launch by its payload mass, to give a better sense of the distribution of mass launched. Useful for constellations for example, like Starlink.

<b>Launches Vs Month By Category:</b>  

![F9 Launches Vs Month By Orbit 2010 Present]({{site.url}}\assets\space-industry-charts\f9\f9_launches_vs_month_by_orbit_2010_present.png){: width="550"}  
[Expanded Chart]({{site.url}}\assets\space-industry-charts\f9\f9_launches_vs_month_by_orbit_2010_present.png){: target="_blank"}

There's a lot of months in the history of a launch vehicle, so this charts gets a bit busy.

<b>Launches Vs Year By Category:</b>  

![Global Launches Vs Year By General Launch Payload Type 2000 2025]({{site.url}}\assets\space-industry-charts\global\global_launches_vs_year_by_general_launch_payload_type_2000_2025.png){: width="550"}  
[Expanded Chart]({{site.url}}\assets\space-industry-charts\global\global_launches_vs_year_by_general_launch_payload_type_2000_2025.png){: target="_blank"}

Yea you get what this is right?

### <b>Charts in Alphabetical Order</b>

[Download All 135 Charts]({{site.url}}\assets\space-industry-charts.zip)

<b>Antares</b>

[Antares Launches Apogee Vs Date By Simple Orbit 2013 2023]({{site.url}}\assets\space-industry-charts\antares\antares_launches_apogee_vs_date_by_simple_orbit_2013_2023.png){: target="_blank"}  
[Antares Launches Apogee Vs Inc By Simple Orbit 2013 2023]({{site.url}}\assets\space-industry-charts\antares\antares_launches_apogee_vs_inc_by_simple_orbit_2013_2023.png){: target="_blank"}   
[Antares Launches Inc Vs Date By Simple Orbit 2013 2023]({{site.url}}\assets\space-industry-charts\antares\antares_launches_inc_vs_date_by_simple_orbit_2013_2023.png){: target="_blank"}  
[Antares Launches Payload Mass Vs Date By Simple Orbit 2013 2023]({{site.url}}\assets\space-industry-charts\antares\antares_launches_payload_mass_vs_date_by_simple_orbit_2013_2023.png){: target="_blank"}  
[Antares Launches Vs Mass By General Launch Payload Type]({{site.url}}\assets\space-industry-charts\antares\antares_launches_vs_mass_by_general_launch_payload_type.png){: target="_blank"}  
[Antares Launches Vs Mass By Launch Vehicle]({{site.url}}\assets\space-industry-charts\antares\antares_launches_vs_mass_by_launch_vehicle.png){: target="_blank"}  
[Antares Launches Vs Mass By Orbit]({{site.url}}\assets\space-industry-charts\antares\antares_launches_vs_mass_by_orbit.png){: target="_blank"}  
[Antares Launches Vs Month By General Launch Payload Type 2013 2023]({{site.url}}\assets\space-industry-charts\antares\antares_launches_vs_month_by_general_launch_payload_type_2013_2023.png){: target="_blank"}  
[Antares Launches Vs Month By Orbit 2013 2023]({{site.url}}\assets\space-industry-charts\antares\antares_launches_vs_month_by_orbit_2013_2023.png){: target="_blank"}  
[Antares Launches Vs Year By General Launch Payload Type 2013 2023]({{site.url}}\assets\space-industry-charts\antares\antares_launches_vs_year_by_general_launch_payload_type_2013_2023.png){: target="_blank"}  
[Antares Launches Vs Year By Launch Vehicle 2013 2023]({{site.url}}\assets\space-industry-charts\antares\antares_launches_vs_year_by_launch_vehicle_2013_2023.png){: target="_blank"}  
[Antares Launches Vs Year By Orbit 2013 2023]({{site.url}}\assets\space-industry-charts\antares\antares_launches_vs_year_by_orbit_2013_2023.png){: target="_blank"}  
[Antares Total Mass Vs Mass By General Launch Payload Type]({{site.url}}\assets\space-industry-charts\antares\antares_total_mass_vs_mass_by_general_launch_payload_type.png){: target="_blank"}  
[Antares Total Mass Vs Mass By Launch Vehicle]({{site.url}}\assets\space-industry-charts\antares\antares_total_mass_vs_mass_by_launch_vehicle.png){: target="_blank"}  
[Antares Total Mass Vs Mass By Orbit]({{site.url}}\assets\space-industry-charts\antares\antares_total_mass_vs_mass_by_orbit.png){: target="_blank"}  

<b>Ariane</b>

This covers Ariane 1, 2, 3, 4, and 5.

[Ariane Launches Vs Mass By General Launch Payload Type]({{site.url}}\assets\space-industry-charts\ariane\ariane_launches_vs_mass_by_general_launch_payload_type.png){: target="_blank"}  
[Ariane Launches Vs Mass By Launch Vehicle]({{site.url}}\assets\space-industry-charts\ariane\ariane_launches_vs_mass_by_launch_vehicle.png){: target="_blank"}  
[Ariane Launches Vs Mass By Orbit]({{site.url}}\assets\space-industry-charts\ariane\ariane_launches_vs_mass_by_orbit.png){: target="_blank"}  
[Ariane Launches Vs Month By General Launch Payload Type 1979 Present]({{site.url}}\assets\space-industry-charts\ariane\ariane_launches_vs_month_by_general_launch_payload_type_1979_present.png){: target="_blank"}  
[Ariane Launches Vs Month By Orbit 1979 Present]({{site.url}}\assets\space-industry-charts\ariane\ariane_launches_vs_month_by_orbit_1979_present.png){: target="_blank"}  
[Ariane Launches Vs Year By General Launch Payload Type 1979 Present]({{site.url}}\assets\space-industry-charts\ariane\ariane_launches_vs_year_by_general_launch_payload_type_1979_present.png){: target="_blank"}  
[Ariane Launches Vs Year By Launch Vehicle 1979 Present]({{site.url}}\assets\space-industry-charts\ariane\ariane_launches_vs_year_by_launch_vehicle_1979_present.png){: target="_blank"}  
[Ariane Launches Vs Year By Orbit 1979 Present]({{site.url}}\assets\space-industry-charts\ariane\ariane_launches_vs_year_by_orbit_1979_present.png){: target="_blank"}  
[Ariane Total Mass Vs Mass By General Launch Payload Type]({{site.url}}\assets\space-industry-charts\ariane\ariane_total_mass_vs_mass_by_general_launch_payload_type.png){: target="_blank"}  
[Ariane Total Mass Vs Mass By Launch Vehicle]({{site.url}}\assets\space-industry-charts\ariane\ariane_total_mass_vs_mass_by_launch_vehicle.png){: target="_blank"}  
[Ariane Total Mass Vs Mass By Orbit]({{site.url}}\assets\space-industry-charts\ariane\ariane_total_mass_vs_mass_by_orbit.png){: target="_blank"}  

<b>Atlas</b>

This covers Atlas 1, 2, 3, and 5. Remember Atlas 4 doesn't exist.

[Atlas Launches Vs Mass By General Launch Payload Type]({{site.url}}\assets\space-industry-charts\atlas\atlas_launches_vs_mass_by_general_launch_payload_type.png){: target="_blank"}  
[Atlas Launches Vs Mass By Launch Vehicle]({{site.url}}\assets\space-industry-charts\atlas\atlas_launches_vs_mass_by_launch_vehicle.png){: target="_blank"}  
[Atlas Launches Vs Mass By Orbit]({{site.url}}\assets\space-industry-charts\atlas\atlas_launches_vs_mass_by_orbit.png){: target="_blank"}  
[Atlas Launches Vs Month By General Launch Payload Type 1958 Present]({{site.url}}\assets\space-industry-charts\atlas\atlas_launches_vs_month_by_general_launch_payload_type_1958_present.png){: target="_blank"}  
[Atlas Launches Vs Month By Orbit 1958 Present]({{site.url}}\assets\space-industry-charts\atlas\atlas_launches_vs_month_by_orbit_1958_present.png){: target="_blank"}  
[Atlas Launches Vs Year By General Launch Payload Type 1958 Present]({{site.url}}\assets\space-industry-charts\atlas\atlas_launches_vs_year_by_general_launch_payload_type_1958_present.png){: target="_blank"}  
[Atlas Launches Vs Year By Launch Vehicle 1958 Present]({{site.url}}\assets\space-industry-charts\atlas\atlas_launches_vs_year_by_launch_vehicle_1958_present.png){: target="_blank"}  
[Atlas Launches Vs Year By Orbit 1958 Present]({{site.url}}\assets\space-industry-charts\atlas\atlas_launches_vs_year_by_orbit_1958_present.png){: target="_blank"}  
[Atlas Total Mass Vs Mass By General Launch Payload Type]({{site.url}}\assets\space-industry-charts\atlas\atlas_total_mass_vs_mass_by_general_launch_payload_type.png){: target="_blank"}  
[Atlas Total Mass Vs Mass By Launch Vehicle]({{site.url}}\assets\space-industry-charts\atlas\atlas_total_mass_vs_mass_by_launch_vehicle.png){: target="_blank"}  
[Atlas Total Mass Vs Mass By Orbit]({{site.url}}\assets\space-industry-charts\atlas\atlas_total_mass_vs_mass_by_orbit.png){: target="_blank"}  

<b>Canada</b>

[Canada Payloads Vs Mass By Orbit 1000 50]({{site.url}}\assets\space-industry-charts\canada\canada_payloads_vs_mass_by_orbit_1000_50.png){: target="_blank"}  
[Canada Payloads Vs Mass By Orbit 100 5]({{site.url}}\assets\space-industry-charts\canada\canada_payloads_vs_mass_by_orbit_100_5.png){: target="_blank"}  
[Canada Payloads Vs Mass By Orbit Max Mass]({{site.url}}\assets\space-industry-charts\canada\canada_payloads_vs_mass_by_orbit_max_mass.png){: target="_blank"}  

<b>Delta</b>

This covers Delta 1, 2, 3, and 4.

[Delta Launches Vs Mass By General Launch Payload Type]({{site.url}}\assets\space-industry-charts\delta\delta_launches_vs_mass_by_general_launch_payload_type.png){: target="_blank"}  
[Delta Launches Vs Mass By Launch Vehicle]({{site.url}}\assets\space-industry-charts\delta\delta_launches_vs_mass_by_launch_vehicle.png){: target="_blank"}  
[Delta Launches Vs Mass By Orbit]({{site.url}}\assets\space-industry-charts\delta\delta_launches_vs_mass_by_orbit.png){: target="_blank"}  
[Delta Launches Vs Month By General Launch Payload Type 1972 2024]({{site.url}}\assets\space-industry-charts\delta\delta_launches_vs_month_by_general_launch_payload_type_1972_2024.png){: target="_blank"}  
[Delta Launches Vs Month By Orbit 1972 2024]({{site.url}}\assets\space-industry-charts\delta\delta_launches_vs_month_by_orbit_1972_2024.png){: target="_blank"}  
[Delta Launches Vs Year By General Launch Payload Type 1972 2024]({{site.url}}\assets\space-industry-charts\delta\delta_launches_vs_year_by_general_launch_payload_type_1972_2024.png){: target="_blank"}  
[Delta Launches Vs Year By Launch Vehicle 1972 2024]({{site.url}}\assets\space-industry-charts\delta\delta_launches_vs_year_by_launch_vehicle_1972_2024.png){: target="_blank"}  
[Delta Launches Vs Year By Orbit 1972 2024]({{site.url}}\assets\space-industry-charts\delta\delta_launches_vs_year_by_orbit_1972_2024.png){: target="_blank"}  
[Delta Total Mass Vs Mass By General Launch Payload Type]({{site.url}}\assets\space-industry-charts\delta\delta_total_mass_vs_mass_by_general_launch_payload_type.png){: target="_blank"}  
[Delta Total Mass Vs Mass By Launch Vehicle]({{site.url}}\assets\space-industry-charts\delta\delta_total_mass_vs_mass_by_launch_vehicle.png){: target="_blank"}  
[Delta Total Mass Vs Mass By Orbit]({{site.url}}\assets\space-industry-charts\delta\delta_total_mass_vs_mass_by_orbit.png){: target="_blank"}  

<b>Electron</b>

[Electron Launches Apogee Vs Date By Simple Orbit 2017 Present]({{site.url}}\assets\space-industry-charts\electron\electron_launches_apogee_vs_date_by_simple_orbit_2017_present.png){: target="_blank"}  
[Electron Launches Apogee Vs Inc By Simple Orbit 2017 Present]({{site.url}}\assets\space-industry-charts\electron\electron_launches_apogee_vs_inc_by_simple_orbit_2017_present.png){: target="_blank"}  
[Electron Launches Inc Vs Date By Simple Orbit 2017 Present]({{site.url}}\assets\space-industry-charts\electron\electron_launches_inc_vs_date_by_simple_orbit_2017_present.png){: target="_blank"}  
[Electron Launches Payload Mass Vs Date By Simple Orbit 2017 Present]({{site.url}}\assets\space-industry-charts\electron\electron_launches_payload_mass_vs_date_by_simple_orbit_2017_present.png){: target="_blank"}  
[Electron Launches Vs Mass By General Launch Payload Type]({{site.url}}\assets\space-industry-charts\electron\electron_launches_vs_mass_by_general_launch_payload_type.png){: target="_blank"}  
[Electron Launches Vs Mass By Orbit]({{site.url}}\assets\space-industry-charts\electron\electron_launches_vs_mass_by_orbit.png){: target="_blank"}  
[Electron Launches Vs Month By General Launch Payload Type 2017 Present]({{site.url}}\assets\space-industry-charts\electron\electron_launches_vs_month_by_general_launch_payload_type_2017_present.png){: target="_blank"}  
[Electron Launches Vs Month By Orbit 2017 Present]({{site.url}}\assets\space-industry-charts\electron\electron_launches_vs_month_by_orbit_2017_present.png){: target="_blank"}  
[Electron Launches Vs Year By General Launch Payload Type 2017 Present]({{site.url}}\assets\space-industry-charts\electron\electron_launches_vs_year_by_general_launch_payload_type_2017_present.png){: target="_blank"}  
[Electron Launches Vs Year By Orbit 2017 Present]({{site.url}}\assets\space-industry-charts\electron\electron_launches_vs_year_by_orbit_2017_present.png){: target="_blank"}  
[Electron Total Mass Vs Mass By General Launch Payload Type]({{site.url}}\assets\space-industry-charts\electron\electron_total_mass_vs_mass_by_general_launch_payload_type.png){: target="_blank"}  
[Electron Total Mass Vs Mass By Orbit]({{site.url}}\assets\space-industry-charts\electron\electron_total_mass_vs_mass_by_orbit.png){: target="_blank"}  

<b>Falcon 9</b>

[F9 Launches Apogee Vs Date By Simple Orbit 2010 Present]({{site.url}}\assets\space-industry-charts\f9\f9_launches_apogee_vs_date_by_simple_orbit_2010_present.png){: target="_blank"}  
[F9 Launches Apogee Vs Inc By Simple Orbit 2010 Present]({{site.url}}\assets\space-industry-charts\f9\f9_launches_apogee_vs_inc_by_simple_orbit_2010_present.png){: target="_blank"}  
[F9 Launches Inc Vs Date By Simple Orbit 2010 Present]({{site.url}}\assets\space-industry-charts\f9\f9_launches_inc_vs_date_by_simple_orbit_2010_present.png){: target="_blank"}  
[F9 Launches Payload Mass Vs Date By Simple Orbit 2010 Present]({{site.url}}\assets\space-industry-charts\f9\f9_launches_payload_mass_vs_date_by_simple_orbit_2010_present.png){: target="_blank"}  
[F9 Launches Vs Mass By General Launch Payload Type]({{site.url}}\assets\space-industry-charts\f9\f9_launches_vs_mass_by_general_launch_payload_type.png){: target="_blank"}  
[F9 Launches Vs Mass By Orbit]({{site.url}}\assets\space-industry-charts\f9\f9_launches_vs_mass_by_orbit.png){: target="_blank"}  
[F9 Launches Vs Month By General Launch Payload Type 2010 Present]({{site.url}}\assets\space-industry-charts\f9\f9_launches_vs_month_by_general_launch_payload_type_2010_present.png){: target="_blank"}  
[F9 Launches Vs Month By Orbit 2010 Present]({{site.url}}\assets\space-industry-charts\f9\f9_launches_vs_month_by_orbit_2010_present.png){: target="_blank"}  
[F9 Launches Vs Year By General Launch Payload Type 2010 Present]({{site.url}}\assets\space-industry-charts\f9\f9_launches_vs_year_by_general_launch_payload_type_2010_present.png){: target="_blank"}  
[F9 Launches Vs Year By Orbit 2010 Present]({{site.url}}\assets\space-industry-charts\f9\f9_launches_vs_year_by_orbit_2010_present.png){: target="_blank"}  
[F9 Total Mass Vs Mass By General Launch Payload Type]({{site.url}}\assets\space-industry-charts\f9\f9_total_mass_vs_mass_by_general_launch_payload_type.png){: target="_blank"}  
[F9 Total Mass Vs Mass By Orbit]({{site.url}}\assets\space-industry-charts\f9\f9_total_mass_vs_mass_by_orbit.png){: target="_blank"}  

<b>Falcon Heavy</b>

[F9H Launches Vs Mass By General Launch Payload Type]({{site.url}}\assets\space-industry-charts\f9h\f9h_launches_vs_mass_by_general_launch_payload_type.png){: target="_blank"}  
[F9H Launches Vs Mass By Orbit]({{site.url}}\assets\space-industry-charts\f9h\f9h_launches_vs_mass_by_orbit.png){: target="_blank"}  
[F9H Launches Vs Month By General Launch Payload Type 2018 2024]({{site.url}}\assets\space-industry-charts\f9h\f9h_launches_vs_month_by_general_launch_payload_type_2018_2024.png){: target="_blank"}  
[F9H Launches Vs Month By Orbit 2018 2024]({{site.url}}\assets\space-industry-charts\f9h\f9h_launches_vs_month_by_orbit_2018_2024.png){: target="_blank"}  
[F9H Launches Vs Year By General Launch Payload Type 2018 2024]({{site.url}}\assets\space-industry-charts\f9h\f9h_launches_vs_year_by_general_launch_payload_type_2018_2024.png){: target="_blank"}  
[F9H Launches Vs Year By Orbit 2018 2024]({{site.url}}\assets\space-industry-charts\f9h\f9h_launches_vs_year_by_orbit_2018_2024.png){: target="_blank"}  
[F9H Total Mass Vs Mass By General Launch Payload Type]({{site.url}}\assets\space-industry-charts\f9h\f9h_total_mass_vs_mass_by_general_launch_payload_type.png){: target="_blank"}  
[F9H Total Mass Vs Mass By Orbit]({{site.url}}\assets\space-industry-charts\f9h\f9h_total_mass_vs_mass_by_orbit.png){: target="_blank"}  

<b>Global</b>

[Global Launches Vs Month By General Launch Payload Type 1957 2025]({{site.url}}\assets\space-industry-charts\global\global_launches_vs_month_by_general_launch_payload_type_1957_2025.png){: target="_blank"}  
[Global Launches Vs Month By General Launch Payload Type 2000 2025]({{site.url}}\assets\space-industry-charts\global\global_launches_vs_month_by_general_launch_payload_type_2000_2025.png){: target="_blank"}  
[Global Launches Vs Month By Orbit 1957 2025]({{site.url}}\assets\space-industry-charts\global\global_launches_vs_month_by_orbit_1957_2025.png){: target="_blank"}  
[Global Launches Vs Month By Orbit 2000 2025]({{site.url}}\assets\space-industry-charts\global\global_launches_vs_month_by_orbit_2000_2025.png){: target="_blank"}  
[Global Launches Vs Year By General Launch Payload Type 1957 2025]({{site.url}}\assets\space-industry-charts\global\global_launches_vs_year_by_general_launch_payload_type_1957_2025.png){: target="_blank"}  
[Global Launches Vs Year By General Launch Payload Type 2000 2025]({{site.url}}\assets\space-industry-charts\global\global_launches_vs_year_by_general_launch_payload_type_2000_2025.png){: target="_blank"}  
[Global Launches Vs Year By Orbit 1957 2025]({{site.url}}\assets\space-industry-charts\global\global_launches_vs_year_by_orbit_1957_2025.png){: target="_blank"}  
[Global Launches Vs Year By Orbit 2000 2025]({{site.url}}\assets\space-industry-charts\global\global_launches_vs_year_by_orbit_2000_2025.png){: target="_blank"}  

<b>Planet Labs</b>

[Planet Labs Payloads Vs Year By Launch Country]({{site.url}}\assets\space-industry-charts\planet_labs\planet_labs_payloads_vs_year_by_launch_country.png){: target="_blank"}  
[Planet Labs Payloads Vs Year By Launch Vehicle]({{site.url}}\assets\space-industry-charts\planet_labs\planet_labs_payloads_vs_year_by_launch_vehicle.png){: target="_blank"}  
[Planet Labs Payloads Vs Year By Orbit]({{site.url}}\assets\space-industry-charts\planet_labs\planet_labs_payloads_vs_year_by_orbit.png){: target="_blank"}  
[Planet Labs Payloads Vs Year By Program]({{site.url}}\assets\space-industry-charts\planet_labs\planet_labs_payloads_vs_year_by_program.png){: target="_blank"}  

<b>Soyuz</b>

[Soyuz Launches Vs Mass By General Launch Payload Type]({{site.url}}\assets\space-industry-charts\soyuz\soyuz_launches_vs_mass_by_general_launch_payload_type.png){: target="_blank"}  
[Soyuz Launches Vs Mass By Orbit]({{site.url}}\assets\space-industry-charts\soyuz\soyuz_launches_vs_mass_by_orbit.png){: target="_blank"}  
[Soyuz Launches Vs Month By General Launch Payload Type 1957 Present]({{site.url}}\assets\space-industry-charts\soyuz\soyuz_launches_vs_month_by_general_launch_payload_type_1957_present.png){: target="_blank"}  
[Soyuz Launches Vs Month By Orbit 1957 Present]({{site.url}}\assets\space-industry-charts\soyuz\soyuz_launches_vs_month_by_orbit_1957_present.png){: target="_blank"}  
[Soyuz Launches Vs Year By General Launch Payload Type 1957 Present]({{site.url}}\assets\space-industry-charts\soyuz\soyuz_launches_vs_year_by_general_launch_payload_type_1957_present.png){: target="_blank"}  
[Soyuz Launches Vs Year By Orbit 1957 Present]({{site.url}}\assets\space-industry-charts\soyuz\soyuz_launches_vs_year_by_orbit_1957_present.png){: target="_blank"}  
[Soyuz Total Mass Vs Mass By General Launch Payload Type]({{site.url}}\assets\space-industry-charts\soyuz\soyuz_total_mass_vs_mass_by_general_launch_payload_type.png){: target="_blank"}  
[Soyuz Total Mass Vs Mass By Orbit]({{site.url}}\assets\space-industry-charts\soyuz\soyuz_total_mass_vs_mass_by_orbit.png){: target="_blank"}  

<b>Starlink</b>

[Starlink Launches Apogee Vs Date By Launch Pad 2019 2025]({{site.url}}\assets\space-industry-charts\starlink\starlink_launches_apogee_vs_date_by_launch_pad_2019_2025.png){: target="_blank"}  
[Starlink Launches Apogee Vs Inc By Launch Pad 2019 2025]({{site.url}}\assets\space-industry-charts\starlink\starlink_launches_apogee_vs_inc_by_launch_pad_2019_2025.png){: target="_blank"}  
[Starlink Launches Inc Vs Date By Launch Pad 2019 2025]({{site.url}}\assets\space-industry-charts\starlink\starlink_launches_inc_vs_date_by_launch_pad_2019_2025.png){: target="_blank"}  
[Starlink Launches Payload Mass Vs Date By Launch Pad 2019 2025]({{site.url}}\assets\space-industry-charts\starlink\starlink_launches_payload_mass_vs_date_by_launch_pad_2019_2025.png){: target="_blank"}  

<b>Titan</b>

[Titan Launches Apogee Vs Date By Simple Orbit 1964 2005]({{site.url}}\assets\space-industry-charts\titan\titan_launches_apogee_vs_date_by_simple_orbit_1964_2005.png){: target="_blank"}  
[Titan Launches Apogee Vs Inc By Simple Orbit 1964 2005]({{site.url}}\assets\space-industry-charts\titan\titan_launches_apogee_vs_inc_by_simple_orbit_1964_2005.png){: target="_blank"}  
[Titan Launches Inc Vs Date By Simple Orbit 1964 2005]({{site.url}}\assets\space-industry-charts\titan\titan_launches_inc_vs_date_by_simple_orbit_1964_2005.png){: target="_blank"}  
[Titan Launches Payload Mass Vs Date By Simple Orbit 1964 2005]({{site.url}}\assets\space-industry-charts\titan\titan_launches_payload_mass_vs_date_by_simple_orbit_1964_2005.png){: target="_blank"}  
[Titan Launches Vs Mass By General Launch Payload Type]({{site.url}}\assets\space-industry-charts\titan\titan_launches_vs_mass_by_general_launch_payload_type.png){: target="_blank"}  
[Titan Launches Vs Mass By Launch Vehicle]({{site.url}}\assets\space-industry-charts\titan\titan_launches_vs_mass_by_launch_vehicle.png){: target="_blank"}  
[Titan Launches Vs Mass By Orbit]({{site.url}}\assets\space-industry-charts\titan\titan_launches_vs_mass_by_orbit.png){: target="_blank"}  
[Titan Launches Vs Month By General Launch Payload Type 1964 2005]({{site.url}}\assets\space-industry-charts\titan\titan_launches_vs_month_by_general_launch_payload_type_1964_2005.png){: target="_blank"}  
[Titan Launches Vs Month By Orbit 1964 2005]({{site.url}}\assets\space-industry-charts\titan\titan_launches_vs_month_by_orbit_1964_2005.png){: target="_blank"}  
[Titan Launches Vs Year By General Launch Payload Type 1964 2005]({{site.url}}\assets\space-industry-charts\titan\titan_launches_vs_year_by_general_launch_payload_type_1964_2005.png){: target="_blank"}  
[Titan Launches Vs Year By Launch Vehicle 1964 2005]({{site.url}}\assets\space-industry-charts\titan\titan_launches_vs_year_by_launch_vehicle_1964_2005.png){: target="_blank"}  
[Titan Launches Vs Year By Orbit 1964 2005]({{site.url}}\assets\space-industry-charts\titan\titan_launches_vs_year_by_orbit_1964_2005.png){: target="_blank"}  
[Titan Total Mass Vs Mass By General Launch Payload Type]({{site.url}}\assets\space-industry-charts\titan\titan_total_mass_vs_mass_by_general_launch_payload_type.png){: target="_blank"}  
[Titan Total Mass Vs Mass By Launch Vehicle]({{site.url}}\assets\space-industry-charts\titan\titan_total_mass_vs_mass_by_launch_vehicle.png){: target="_blank"}  
[Titan Total Mass Vs Mass By Orbit]({{site.url}}\assets\space-industry-charts\titan\titan_total_mass_vs_mass_by_orbit.png){: target="_blank"}  
