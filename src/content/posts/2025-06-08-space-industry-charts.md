---
title: Space Industry Charts
date: '2025-06-08'
tags:
  - Space Industry Analysis
image: \assets\space-industry-charts\electron_launches_vs_mass_by_orbit.png
redirectFrom:
  - /space/2025/06/08/space-industry-charts.html
---

I'm very open to ideas for new charts!  
I'm in this for the love of the game pls send me ideas on [X](https://x.com/CKalitin) or email (christopher.kalitin@gmail.com).

[See the Github repo I wrote to generate these charts!](https://github.com/CKalitin/mcdowell-dataset-analysis)

CSVs of all the data is also available in the repo if you'd like to visualize it yourself! Or, run the scripts and get your own data for a launch vehicle of your choosing!

[Download All 160 Charts](\assets\space-industry-charts.zip)

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

![Electron Launches Vs Mass By Orbit](\assets\space-industry-charts\electron\electron_launches_vs_mass_by_orbit.png)  
[Expanded Chart](\assets\space-industry-charts\electron\electron_launches_vs_mass_by_orbit.png)

These charts show the distribution of launches by payload mass range. They're also broken down by category.

Eg. how many Falcon 9 launches were between 0 and 1000 kg and to LEO, BEO, etc.

<b>Total Mass Vs Mass By Category:</b>  

![F9 Launches Vs Month By General Launch Payload Type 2010 2025](\assets\space-industry-charts\f9\f9_total_mass_vs_mass_by_general_launch_payload_type.png)  
[Expanded Chart](\assets\space-industry-charts\f9\f9_total_mass_vs_mass_by_general_launch_payload_type.png)

These charts are the same as the launch count vs. mass range charts describe above but normalized for mass.

So, instead of launch count per mass range, this is total mass launched per mass range.

Eg. A launch in the 0-1000 kg range with a payload of 500 kg counts as 500 kg in the chart. A launch in the 16-17 t range with a payload of 16.5 t counts as 16,500 kg in the chart.

This weighs each launch by its payload mass, to give a better sense of the distribution of mass launched. Useful for constellations for example, like Starlink.

<b>Launches Vs Month By Category:</b>  

![F9 Launches Vs Month By Orbit 2010 Present](\assets\space-industry-charts\f9\f9_launches_vs_month_by_orbit_2010_present.png)  
[Expanded Chart](\assets\space-industry-charts\f9\f9_launches_vs_month_by_orbit_2010_present.png)

There's a lot of months in the history of a launch vehicle, so this charts gets a bit busy.

<b>Launches Vs Year By Category:</b>  

![Global Launches Vs Year By General Launch Payload Type 2000 2025](\assets\space-industry-charts\global\global_launches_vs_year_by_general_launch_payload_type_2000_2025.png)  
[Expanded Chart](\assets\space-industry-charts\global\global_launches_vs_year_by_general_launch_payload_type_2000_2025.png)

Yea you get what this is right?

### <b>Charts in Alphabetical Order</b>

[Download All 160 Charts](\assets\space-industry-charts.zip)

<b>Antares</b>

[Antares Launches Apogee Vs Date By Simple Orbit 2013 2023](\assets\space-industry-charts\antares\antares_launches_apogee_vs_date_by_simple_orbit_2013_2023.png)  
[Antares Launches Apogee Vs Inc By Simple Orbit 2013 2023](\assets\space-industry-charts\antares\antares_launches_apogee_vs_inc_by_simple_orbit_2013_2023.png)  
[Antares Launches Inc Vs Date By Simple Orbit 2013 2023](\assets\space-industry-charts\antares\antares_launches_inc_vs_date_by_simple_orbit_2013_2023.png)  
[Antares Launches Payload Mass Vs Date By Simple Orbit 2013 2023](\assets\space-industry-charts\antares\antares_launches_payload_mass_vs_date_by_simple_orbit_2013_2023.png)  
[Antares Launches Vs Mass By General Launch Payload Type](\assets\space-industry-charts\antares\antares_launches_vs_mass_by_general_launch_payload_type.png)  
[Antares Launches Vs Mass By Launch Vehicle](\assets\space-industry-charts\antares\antares_launches_vs_mass_by_launch_vehicle.png)  
[Antares Launches Vs Mass By Orbit](\assets\space-industry-charts\antares\antares_launches_vs_mass_by_orbit.png)  
[Antares Launches Vs Month By General Launch Payload Type 2013 2023](\assets\space-industry-charts\antares\antares_launches_vs_month_by_general_launch_payload_type_2013_2023.png)  
[Antares Launches Vs Month By Orbit 2013 2023](\assets\space-industry-charts\antares\antares_launches_vs_month_by_orbit_2013_2023.png)  
[Antares Launches Vs Year By General Launch Payload Type 2013 2023](\assets\space-industry-charts\antares\antares_launches_vs_year_by_general_launch_payload_type_2013_2023.png)  
[Antares Launches Vs Year By Launch Vehicle 2013 2023](\assets\space-industry-charts\antares\antares_launches_vs_year_by_launch_vehicle_2013_2023.png)  
[Antares Launches Vs Year By Orbit 2013 2023](\assets\space-industry-charts\antares\antares_launches_vs_year_by_orbit_2013_2023.png)  
[Antares Total Mass Vs Mass By General Launch Payload Type](\assets\space-industry-charts\antares\antares_total_mass_vs_mass_by_general_launch_payload_type.png)  
[Antares Total Mass Vs Mass By Launch Vehicle](\assets\space-industry-charts\antares\antares_total_mass_vs_mass_by_launch_vehicle.png)  
[Antares Total Mass Vs Mass By Orbit](\assets\space-industry-charts\antares\antares_total_mass_vs_mass_by_orbit.png)  

<b>Ariane</b>

This covers Ariane 1, 2, 3, 4, and 5.

[Ariane Launches Vs Mass By General Launch Payload Type](\assets\space-industry-charts\ariane\ariane_launches_vs_mass_by_general_launch_payload_type.png)  
[Ariane Launches Vs Mass By Launch Vehicle](\assets\space-industry-charts\ariane\ariane_launches_vs_mass_by_launch_vehicle.png)  
[Ariane Launches Vs Mass By Orbit](\assets\space-industry-charts\ariane\ariane_launches_vs_mass_by_orbit.png)  
[Ariane Launches Vs Month By General Launch Payload Type 1979 Present](\assets\space-industry-charts\ariane\ariane_launches_vs_month_by_general_launch_payload_type_1979_present.png)  
[Ariane Launches Vs Month By Orbit 1979 Present](\assets\space-industry-charts\ariane\ariane_launches_vs_month_by_orbit_1979_present.png)  
[Ariane Launches Vs Year By General Launch Payload Type 1979 Present](\assets\space-industry-charts\ariane\ariane_launches_vs_year_by_general_launch_payload_type_1979_present.png)  
[Ariane Launches Vs Year By Launch Vehicle 1979 Present](\assets\space-industry-charts\ariane\ariane_launches_vs_year_by_launch_vehicle_1979_present.png)  
[Ariane Launches Vs Year By Orbit 1979 Present](\assets\space-industry-charts\ariane\ariane_launches_vs_year_by_orbit_1979_present.png)  
[Ariane Total Mass Vs Mass By General Launch Payload Type](\assets\space-industry-charts\ariane\ariane_total_mass_vs_mass_by_general_launch_payload_type.png)  
[Ariane Total Mass Vs Mass By Launch Vehicle](\assets\space-industry-charts\ariane\ariane_total_mass_vs_mass_by_launch_vehicle.png)  
[Ariane Total Mass Vs Mass By Orbit](\assets\space-industry-charts\ariane\ariane_total_mass_vs_mass_by_orbit.png)  

<b>Atlas</b>

This covers Atlas 1, 2, 3, and 5. Remember Atlas 4 doesn't exist.

[Atlas Launches Vs Mass By General Launch Payload Type](\assets\space-industry-charts\atlas\atlas_launches_vs_mass_by_general_launch_payload_type.png)  
[Atlas Launches Vs Mass By Launch Vehicle](\assets\space-industry-charts\atlas\atlas_launches_vs_mass_by_launch_vehicle.png)  
[Atlas Launches Vs Mass By Orbit](\assets\space-industry-charts\atlas\atlas_launches_vs_mass_by_orbit.png)  
[Atlas Launches Vs Month By General Launch Payload Type 1958 Present](\assets\space-industry-charts\atlas\atlas_launches_vs_month_by_general_launch_payload_type_1958_present.png)  
[Atlas Launches Vs Month By Orbit 1958 Present](\assets\space-industry-charts\atlas\atlas_launches_vs_month_by_orbit_1958_present.png)  
[Atlas Launches Vs Year By General Launch Payload Type 1958 Present](\assets\space-industry-charts\atlas\atlas_launches_vs_year_by_general_launch_payload_type_1958_present.png)  
[Atlas Launches Vs Year By Launch Vehicle 1958 Present](\assets\space-industry-charts\atlas\atlas_launches_vs_year_by_launch_vehicle_1958_present.png)  
[Atlas Launches Vs Year By Orbit 1958 Present](\assets\space-industry-charts\atlas\atlas_launches_vs_year_by_orbit_1958_present.png)  
[Atlas Total Mass Vs Mass By General Launch Payload Type](\assets\space-industry-charts\atlas\atlas_total_mass_vs_mass_by_general_launch_payload_type.png)  
[Atlas Total Mass Vs Mass By Launch Vehicle](\assets\space-industry-charts\atlas\atlas_total_mass_vs_mass_by_launch_vehicle.png)  
[Atlas Total Mass Vs Mass By Orbit](\assets\space-industry-charts\atlas\atlas_total_mass_vs_mass_by_orbit.png)  

<b>Canada</b>

[Canada Payloads Vs Mass By Orbit 1000 50](\assets\space-industry-charts\canada\canada_payloads_vs_mass_by_orbit_1000_50.png)  
[Canada Payloads Vs Mass By Orbit 100 5](\assets\space-industry-charts\canada\canada_payloads_vs_mass_by_orbit_100_5.png)  
[Canada Payloads Vs Mass By Orbit Max Mass](\assets\space-industry-charts\canada\canada_payloads_vs_mass_by_orbit_max_mass.png)  
[Canada Payloads Vs Year By Operator Type](\assets\space-industry-charts\canada\canada_payloads_vs_year_by_operator_type.png)  
[Canada Payloads Vs Year By Simple Payload Category](\assets\space-industry-charts\canada\canada_payloads_vs_year_by_simple_payload_category.png)  

<b>Constellations</b>

[Constellation Payloads Vs Date Since First Payload By Filter 2020 Present](\assets\space-industry-charts\constellation_payloads\constellation_payloads_vs_date_since_first_payload_by_filter_2020_present.png)  
[Constellation Payloads Vs Date Since First Payload By Filter 2020 Present 1000](\assets\space-industry-charts\constellation_payloads\constellation_payloads_vs_date_since_first_payload_by_filter_2020_present_1000.png)  
[Constellation Payloads Vs Date Since First Payload By Filter 2020 Present 1000 Log](\assets\space-industry-charts\constellation_payloads\constellation_payloads_vs_date_since_first_payload_by_filter_2020_present_1000_log.png)  
[Constellation Payloads Vs Date Since First Payload By Filter 2020 Present Log](\assets\space-industry-charts\constellation_payloads\constellation_payloads_vs_date_since_first_payload_by_filter_2020_present_log.png)  

<b>Delta</b>

This covers Delta 1, 2, 3, and 4.

[Delta Launches Vs Mass By General Launch Payload Type](\assets\space-industry-charts\delta\delta_launches_vs_mass_by_general_launch_payload_type.png)  
[Delta Launches Vs Mass By Launch Vehicle](\assets\space-industry-charts\delta\delta_launches_vs_mass_by_launch_vehicle.png)  
[Delta Launches Vs Mass By Orbit](\assets\space-industry-charts\delta\delta_launches_vs_mass_by_orbit.png)  
[Delta Launches Vs Month By General Launch Payload Type 1972 2024](\assets\space-industry-charts\delta\delta_launches_vs_month_by_general_launch_payload_type_1972_2024.png)  
[Delta Launches Vs Month By Orbit 1972 2024](\assets\space-industry-charts\delta\delta_launches_vs_month_by_orbit_1972_2024.png)  
[Delta Launches Vs Year By General Launch Payload Type 1972 2024](\assets\space-industry-charts\delta\delta_launches_vs_year_by_general_launch_payload_type_1972_2024.png)  
[Delta Launches Vs Year By Launch Vehicle 1972 2024](\assets\space-industry-charts\delta\delta_launches_vs_year_by_launch_vehicle_1972_2024.png)  
[Delta Launches Vs Year By Orbit 1972 2024](\assets\space-industry-charts\delta\delta_launches_vs_year_by_orbit_1972_2024.png)  
[Delta Total Mass Vs Mass By General Launch Payload Type](\assets\space-industry-charts\delta\delta_total_mass_vs_mass_by_general_launch_payload_type.png)  
[Delta Total Mass Vs Mass By Launch Vehicle](\assets\space-industry-charts\delta\delta_total_mass_vs_mass_by_launch_vehicle.png)  
[Delta Total Mass Vs Mass By Orbit](\assets\space-industry-charts\delta\delta_total_mass_vs_mass_by_orbit.png)  

<b>Electron</b>

[Electron Launches Apogee Vs Date By Simple Orbit 2017 Present](\assets\space-industry-charts\electron\electron_launches_apogee_vs_date_by_simple_orbit_2017_present.png)  
[Electron Launches Apogee Vs Inc By Simple Orbit 2017 Present](\assets\space-industry-charts\electron\electron_launches_apogee_vs_inc_by_simple_orbit_2017_present.png)  
[Electron Launches Inc Vs Date By Simple Orbit 2017 Present](\assets\space-industry-charts\electron\electron_launches_inc_vs_date_by_simple_orbit_2017_present.png)  
[Electron Launches Payload Mass Vs Date By Simple Orbit 2017 Present](\assets\space-industry-charts\electron\electron_launches_payload_mass_vs_date_by_simple_orbit_2017_present.png)  
[Electron Launches Vs Mass By General Launch Payload Type](\assets\space-industry-charts\electron\electron_launches_vs_mass_by_general_launch_payload_type.png)  
[Electron Launches Vs Mass By Orbit](\assets\space-industry-charts\electron\electron_launches_vs_mass_by_orbit.png)  
[Electron Launches Vs Month By General Launch Payload Type 2017 Present](\assets\space-industry-charts\electron\electron_launches_vs_month_by_general_launch_payload_type_2017_present.png)  
[Electron Launches Vs Month By Orbit 2017 Present](\assets\space-industry-charts\electron\electron_launches_vs_month_by_orbit_2017_present.png)  
[Electron Launches Vs Year By General Launch Payload Type 2017 Present](\assets\space-industry-charts\electron\electron_launches_vs_year_by_general_launch_payload_type_2017_present.png)  
[Electron Launches Vs Year By Orbit 2017 Present](\assets\space-industry-charts\electron\electron_launches_vs_year_by_orbit_2017_present.png)  
[Electron Total Mass Vs Mass By General Launch Payload Type](\assets\space-industry-charts\electron\electron_total_mass_vs_mass_by_general_launch_payload_type.png)  
[Electron Total Mass Vs Mass By Orbit](\assets\space-industry-charts\electron\electron_total_mass_vs_mass_by_orbit.png)  

<b>Falcon 9</b>

[F9 Launches Apogee Vs Date By Simple Orbit 2010 Present](\assets\space-industry-charts\f9\f9_launches_apogee_vs_date_by_simple_orbit_2010_present.png)  
[F9 Launches Apogee Vs Inc By Simple Orbit 2010 Present](\assets\space-industry-charts\f9\f9_launches_apogee_vs_inc_by_simple_orbit_2010_present.png)  
[F9 Launches Inc Vs Date By Simple Orbit 2010 Present](\assets\space-industry-charts\f9\f9_launches_inc_vs_date_by_simple_orbit_2010_present.png)  
[F9 Launches Payload Mass Vs Date By Simple Orbit 2010 Present](\assets\space-industry-charts\f9\f9_launches_payload_mass_vs_date_by_simple_orbit_2010_present.png)  
[F9 Launches Vs Mass By General Launch Payload Type](\assets\space-industry-charts\f9\f9_launches_vs_mass_by_general_launch_payload_type.png)  
[F9 Launches Vs Mass By Launch Pad](\assets\space-industry-charts\f9\f9_launches_vs_mass_by_launch_pad.png)  
[F9 Launches Vs Mass By Orbit](\assets\space-industry-charts\f9\f9_launches_vs_mass_by_orbit.png)  
[F9 Launches Vs Month By General Launch Payload Type 2010 Present](\assets\space-industry-charts\f9\f9_launches_vs_month_by_general_launch_payload_type_2010_present.png)  
[F9 Launches Vs Month By Launch Pad 2010 Present](\assets\space-industry-charts\f9\f9_launches_vs_month_by_launch_pad_2010_present.png)  
[F9 Launches Vs Month By Orbit 2010 Present](\assets\space-industry-charts\f9\f9_launches_vs_month_by_orbit_2010_present.png)  
[F9 Launches Vs Year By General Launch Payload Type 2010 Present](\assets\space-industry-charts\f9\f9_launches_vs_year_by_general_launch_payload_type_2010_present.png)  
[F9 Launches Vs Year By Launch Pad 2010 Present](\assets\space-industry-charts\f9\f9_launches_vs_year_by_launch_pad_2010_present.png)  
[F9 Launches Vs Year By Orbit 2010 Present](\assets\space-industry-charts\f9\f9_launches_vs_year_by_orbit_2010_present.png)  
[F9 Total Mass Vs Mass By General Launch Payload Type](\assets\space-industry-charts\f9\f9_total_mass_vs_mass_by_general_launch_payload_type.png)  
[F9 Total Mass Vs Mass By Launch Pad](\assets\space-industry-charts\f9\f9_total_mass_vs_mass_by_launch_pad.png)  
[F9 Total Mass Vs Mass By Orbit](\assets\space-industry-charts\f9\f9_total_mass_vs_mass_by_orbit.png)  

<b>Falcon 9 (Matplotlib Charts)</b>

[F9 Days Between Launches Lc39A 2022-01-01 Present](\assets\space-industry-charts\f9_matplotlib\f9_days_between_launches_LC39A_2022-01-01_present.png)  
[F9 Days Between Launches Lc40 2022-01-01 Present](\assets\space-industry-charts\f9_matplotlib\f9_days_between_launches_LC40_2022-01-01_present.png)  
[F9 Days Between Launches Slc4E 2022-01-01 Present](\assets\space-industry-charts\f9_matplotlib\f9_days_between_launches_SLC4E_2022-01-01_present.png)  
[F9 Days Between Vs Date All Boosters](\assets\space-industry-charts\f9_matplotlib\f9_days_between_vs_date_all_boosters.png)  
[F9 Days Between Vs Date B1080-To-B1088](\assets\space-industry-charts\f9_matplotlib\f9_days_between_vs_date_B1080-to-B1088.png)  
[F9 Days Between Vs Date B1090-To-B1097](\assets\space-industry-charts\f9_matplotlib\f9_days_between_vs_date_B1090-to-B1097.png)  
[F9 Days Between Vs Flight Count B1080-To-B1088](\assets\space-industry-charts\f9_matplotlib\f9_days_between_vs_flight_count_B1080-to-B1088.png)  
[F9 Days Between Vs Flight Count B1090-To-B1097](\assets\space-industry-charts\f9_matplotlib\f9_days_between_vs_flight_count_B1090-to-B1097.png)  
[F9 Flight Counts Over Time B1080-To-B1088](\assets\space-industry-charts\f9_matplotlib\f9_flight_counts_over_time_B1080-to-B1088.png)  
[F9 Flight Counts Over Time B1090-To-B1097](\assets\space-industry-charts\f9_matplotlib\f9_flight_counts_over_time_B1090-to-B1097.png)  

<b>Falcon Heavy</b>

[F9H Launches Vs Mass By General Launch Payload Type](\assets\space-industry-charts\f9h\f9h_launches_vs_mass_by_general_launch_payload_type.png)  
[F9H Launches Vs Mass By Orbit](\assets\space-industry-charts\f9h\f9h_launches_vs_mass_by_orbit.png)  
[F9H Launches Vs Month By General Launch Payload Type 2018 2024](\assets\space-industry-charts\f9h\f9h_launches_vs_month_by_general_launch_payload_type_2018_2024.png)  
[F9H Launches Vs Month By Orbit 2018 2024](\assets\space-industry-charts\f9h\f9h_launches_vs_month_by_orbit_2018_2024.png)  
[F9H Launches Vs Year By General Launch Payload Type 2018 2024](\assets\space-industry-charts\f9h\f9h_launches_vs_year_by_general_launch_payload_type_2018_2024.png)  
[F9H Launches Vs Year By Orbit 2018 2024](\assets\space-industry-charts\f9h\f9h_launches_vs_year_by_orbit_2018_2024.png)  
[F9H Total Mass Vs Mass By General Launch Payload Type](\assets\space-industry-charts\f9h\f9h_total_mass_vs_mass_by_general_launch_payload_type.png)  
[F9H Total Mass Vs Mass By Orbit](\assets\space-industry-charts\f9h\f9h_total_mass_vs_mass_by_orbit.png)  

<b>Global</b>

[Global Launches Vs Month By General Launch Payload Type 1957 Present](\assets\space-industry-charts\global\global_launches_vs_month_by_general_launch_payload_type_1957_present.png)  
[Global Launches Vs Month By General Launch Payload Type 2000 Present](\assets\space-industry-charts\global\global_launches_vs_month_by_general_launch_payload_type_2000_present.png)  
[Global Launches Vs Month By Orbit 1957 Present](\assets\space-industry-charts\global\global_launches_vs_month_by_orbit_1957_present.png)  
[Global Launches Vs Month By Orbit 2000 Present](\assets\space-industry-charts\global\global_launches_vs_month_by_orbit_2000_present.png)  
[Global Launches Vs Year By General Launch Payload Type 1957 Present](\assets\space-industry-charts\global\global_launches_vs_year_by_general_launch_payload_type_1957_present.png)  
[Global Launches Vs Year By General Launch Payload Type 2000 Present](\assets\space-industry-charts\global\global_launches_vs_year_by_general_launch_payload_type_2000_present.png)  
[Global Launches Vs Year By Orbit 1957 Present](\assets\space-industry-charts\global\global_launches_vs_year_by_orbit_1957_present.png)  
[Global Launches Vs Year By Orbit 2000 Present](\assets\space-industry-charts\global\global_launches_vs_year_by_orbit_2000_present.png)  
[Global Payloads Vs Year By Simple Payload Category](\assets\space-industry-charts\global\global_payloads_vs_year_by_simple_payload_category.png)  

<b>Kuiper</b>

[Kuiper Launches Apogee Vs Date By Launch Vehicle Simplified 2023 Present](\assets\space-industry-charts\kuiper\kuiper_launches_apogee_vs_date_by_launch_vehicle_simplified_2023_present.png)  
[Kuiper Launches Apogee Vs Inc By Launch Vehicle Simplified 2023 Present](\assets\space-industry-charts\kuiper\kuiper_launches_apogee_vs_inc_by_launch_vehicle_simplified_2023_present.png)  
[Kuiper Launches Inc Vs Date By Launch Vehicle Simplified 2023 Present](\assets\space-industry-charts\kuiper\kuiper_launches_inc_vs_date_by_launch_vehicle_simplified_2023_present.png)  
[Kuiper Launches Payload Mass Vs Date By Launch Vehicle Simplified 2023 Present](\assets\space-industry-charts\kuiper\kuiper_launches_payload_mass_vs_date_by_launch_vehicle_simplified_2023_present.png)  

<b>Observation Satellites</b>

[Observation Payloads Vs Year By Orbit 1959 2025](\assets\space-industry-charts\observation\observation_payloads_vs_year_by_orbit_1959_2025.png)  
[Observation Payloads Vs Year By Orbit 1959 Present](\assets\space-industry-charts\observation\observation_payloads_vs_year_by_orbit_1959_present.png)  

<b>Planet Labs</b>

[Planet Labs Payloads Vs Year By Launch Country](\assets\space-industry-charts\planet_labs\planet_labs_payloads_vs_year_by_launch_country.png)  
[Planet Labs Payloads Vs Year By Launch Vehicle](\assets\space-industry-charts\planet_labs\planet_labs_payloads_vs_year_by_launch_vehicle.png)  
[Planet Labs Payloads Vs Year By Orbit](\assets\space-industry-charts\planet_labs\planet_labs_payloads_vs_year_by_orbit.png)  
[Planet Labs Payloads Vs Year By Program](\assets\space-industry-charts\planet_labs\planet_labs_payloads_vs_year_by_program.png)  

<b>Soyuz</b>

[Soyuz Launches Vs Mass By General Launch Payload Type](\assets\space-industry-charts\soyuz\soyuz_launches_vs_mass_by_general_launch_payload_type.png)  
[Soyuz Launches Vs Mass By Orbit](\assets\space-industry-charts\soyuz\soyuz_launches_vs_mass_by_orbit.png)  
[Soyuz Launches Vs Month By General Launch Payload Type 1957 Present](\assets\space-industry-charts\soyuz\soyuz_launches_vs_month_by_general_launch_payload_type_1957_present.png)  
[Soyuz Launches Vs Month By Orbit 1957 Present](\assets\space-industry-charts\soyuz\soyuz_launches_vs_month_by_orbit_1957_present.png)  
[Soyuz Launches Vs Year By General Launch Payload Type 1957 Present](\assets\space-industry-charts\soyuz\soyuz_launches_vs_year_by_general_launch_payload_type_1957_present.png)  
[Soyuz Launches Vs Year By Orbit 1957 Present](\assets\space-industry-charts\soyuz\soyuz_launches_vs_year_by_orbit_1957_present.png)  
[Soyuz Total Mass Vs Mass By General Launch Payload Type](\assets\space-industry-charts\soyuz\soyuz_total_mass_vs_mass_by_general_launch_payload_type.png)  
[Soyuz Total Mass Vs Mass By Orbit](\assets\space-industry-charts\soyuz\soyuz_total_mass_vs_mass_by_orbit.png)  

<b>Starlink</b>

[Starlink Launches Apogee Vs Date By Launch Pad 2019 2025](\assets\space-industry-charts\starlink\starlink_launches_apogee_vs_date_by_launch_pad_2019_2025.png)  
[Starlink Launches Apogee Vs Date By Launch Pad 2019 Present](\assets\space-industry-charts\starlink\starlink_launches_apogee_vs_date_by_launch_pad_2019_present.png)  
[Starlink Launches Apogee Vs Inc By Launch Pad 2019 2025](\assets\space-industry-charts\starlink\starlink_launches_apogee_vs_inc_by_launch_pad_2019_2025.png)  
[Starlink Launches Apogee Vs Inc By Launch Pad 2019 Present](\assets\space-industry-charts\starlink\starlink_launches_apogee_vs_inc_by_launch_pad_2019_present.png)  
[Starlink Launches Inc Vs Date By Launch Pad 2019 2025](\assets\space-industry-charts\starlink\starlink_launches_inc_vs_date_by_launch_pad_2019_2025.png)  
[Starlink Launches Inc Vs Date By Launch Pad 2019 Present](\assets\space-industry-charts\starlink\starlink_launches_inc_vs_date_by_launch_pad_2019_present.png)  
[Starlink Launches Payload Mass Vs Date By Launch Pad 2019 2025](\assets\space-industry-charts\starlink\starlink_launches_payload_mass_vs_date_by_launch_pad_2019_2025.png)  
[Starlink Launches Payload Mass Vs Date By Launch Pad 2019 Present](\assets\space-industry-charts\starlink\starlink_launches_payload_mass_vs_date_by_launch_pad_2019_present.png)  
[Starlink Payloads Vs Date Since First Payload By Filter 2020 Present](\assets\space-industry-charts\starlink\starlink_payloads_vs_date_since_first_payload_by_filter_2020_present.png)  

<b>Test</b>

[Test Launches Vs Mass Leo Excl Russia China](\assets\space-industry-charts\test\test_launches_vs_mass_LEO_excl_russia_china.png)  

<b>Titan</b>

[Titan Launches Apogee Vs Date By Simple Orbit 1964 2005](\assets\space-industry-charts\titan\titan_launches_apogee_vs_date_by_simple_orbit_1964_2005.png)  
[Titan Launches Apogee Vs Inc By Simple Orbit 1964 2005](\assets\space-industry-charts\titan\titan_launches_apogee_vs_inc_by_simple_orbit_1964_2005.png)  
[Titan Launches Inc Vs Date By Simple Orbit 1964 2005](\assets\space-industry-charts\titan\titan_launches_inc_vs_date_by_simple_orbit_1964_2005.png)  
[Titan Launches Payload Mass Vs Date By Simple Orbit 1964 2005](\assets\space-industry-charts\titan\titan_launches_payload_mass_vs_date_by_simple_orbit_1964_2005.png)  
[Titan Launches Vs Mass By General Launch Payload Type](\assets\space-industry-charts\titan\titan_launches_vs_mass_by_general_launch_payload_type.png)  
[Titan Launches Vs Mass By Launch Vehicle](\assets\space-industry-charts\titan\titan_launches_vs_mass_by_launch_vehicle.png)  
[Titan Launches Vs Mass By Orbit](\assets\space-industry-charts\titan\titan_launches_vs_mass_by_orbit.png)  
[Titan Launches Vs Month By General Launch Payload Type 1964 2005](\assets\space-industry-charts\titan\titan_launches_vs_month_by_general_launch_payload_type_1964_2005.png)  
[Titan Launches Vs Month By Orbit 1964 2005](\assets\space-industry-charts\titan\titan_launches_vs_month_by_orbit_1964_2005.png)  
[Titan Launches Vs Year By General Launch Payload Type 1964 2005](\assets\space-industry-charts\titan\titan_launches_vs_year_by_general_launch_payload_type_1964_2005.png)  
[Titan Launches Vs Year By Launch Vehicle 1964 2005](\assets\space-industry-charts\titan\titan_launches_vs_year_by_launch_vehicle_1964_2005.png)  
[Titan Launches Vs Year By Orbit 1964 2005](\assets\space-industry-charts\titan\titan_launches_vs_year_by_orbit_1964_2005.png)  
[Titan Total Mass Vs Mass By General Launch Payload Type](\assets\space-industry-charts\titan\titan_total_mass_vs_mass_by_general_launch_payload_type.png)  
[Titan Total Mass Vs Mass By Launch Vehicle](\assets\space-industry-charts\titan\titan_total_mass_vs_mass_by_launch_vehicle.png)  
[Titan Total Mass Vs Mass By Orbit](\assets\space-industry-charts\titan\titan_total_mass_vs_mass_by_orbit.png)  

<b>V2</b>

[Jonathan McDowell pointed out](https://x.com/planet4589/status/1997942839096095176) his dataset of suborbital launches is "certainly incomplete."

[V2 Launches Apogee Vs Date By Launch Vehicle Simplified 1942 1952](\assets\space-industry-charts\v2\v2_launches_apogee_vs_date_by_launch_vehicle_simplified_1942_1952.png)  
[V2 Launches Vs Month By Category 1942 1952](\assets\space-industry-charts\v2\v2_launches_vs_month_by_category_1942_1952.png)  
[V2 Launches Vs Month By Launch Vehicle 1942 1952](\assets\space-industry-charts\v2\v2_launches_vs_month_by_launch_vehicle_1942_1952.png)  
[V2 Launches Vs Year By Category 1942 1952](\assets\space-industry-charts\v2\v2_launches_vs_year_by_category_1942_1952.png)  
[V2 Launches Vs Year By Launch Vehicle 1942 1952](\assets\space-industry-charts\v2\v2_launches_vs_year_by_launch_vehicle_1942_1952.png)
