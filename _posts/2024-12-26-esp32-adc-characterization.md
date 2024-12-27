---
layout: post
title: "Characterizing the ESP32's ADC"
categories: Projects
author:
 - Christopher Kalitin
---
<head>
    <meta property="og:image" content="{{site.url}}/assets/images/more-kos-boosters/Quad-Landing.jpg">
</head>

1. UBC Solar Issue
2. How I tested it?

What to cover:
* UBC Solar Issue
* My STM32 and ESP32 for testing
* Why my testing is applicable to UBC Solar (ESP32 testing mostly)
* Initial ESP32 and STM32 Testing (manual multimeter readings and ADC readings printed)
* 1.2V battery testing
* The project the other guy made - implementing that + memory taken by the LUT + Both ADCs tested
* I wanted to make my own self calibration STM32 project, but my chip doesn't have a DAC and the DAC might not be trustworthy
* Info on the ESP32 ADC Range from Grok - <0.1V and >3.1V it might be inaccurate
* Testing attenuation
* Testing with raw ADC values with a formula to translate
* Finding out tha the voltage reference value means nothing
* The final graph of adc voltage, dac voltage, and true voltage all being different in different ways
* Error graph, real final graph

BE SUCCINCT!!!
BE SUCCINCT!!!
BE SUCCINCT!!!

1000 words max fuck it

Structure:
1. Lay out the UBC Solar issue
2. Why my STM32 and ESP32 testing is applicable (focus on the solar guys)
3. Initial multimeter tests + 1.2V battery
4. Project the other guy made with LUTs
5. Can't make my own self calibration, also his was probably inaccurate bc. DAC, ADC, and True voltages are all different
6. Attenuation shows no impact at my scale?
7. raw ADC values testing (still no difference)
8. Voltage reference? reserach
9. final error graph
10. Path forward for solar

### <b>Introduction</b>

I joined the UBC Solar design team in September as a member of the Battery Management System team. I get to talk to wizards every meeting and work on very exciting projects, which makes this is the best team I've ever worked with and most exciting project I've ever worked on. Completely amazing projects and people.

For the previous few months we've been trying to diagnose an issue we've been having with the current sensor on our battery pack. We use the HASS-100S hall effect sensor and it was giving us inaccurate current data during competition in the summer. We spent months diving deep into what could cause this and this project took many turns. We started at characterizing the current sensor itself, then realized the ADC pin was the issue and tried characterizing it, then realized all ADC pins were off which is where we arrive today. This process took months mostly because we didn't understand these systems from first principles, now that I've done this testing, fixing this kind of issue in the future will take 10x-100x less time.

![Image description]({{site.url}}/assets/images/esp32-adc-characterization/initial-error.jpg){: height="400" .align-center}  
###### Error Graph from our initial characterization of the current sensor

A few days ago I had my last final exam for the term, so the real work of figuring out how microcontrollers actually work could begin. After bouncing around a few of my existing projects I decided to characterize the ADCs on my STM32 F031K6T6 and ESP32-WROOM-32D to get a better understanding of how to use them and learn more about how they work along the way.

### <b>Initial Testing</b>