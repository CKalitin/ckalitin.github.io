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

For the previous few months we've been trying to diagnose an issue we've been having with the current sensor on our battery pack. We use the HASS-100S hall effect sensor and it was giving us inaccurate current data during competition in the summer. We spent months diving deep into what could cause this and the project took many turns. We started at characterizing the current sensor itself, then realized the ADC pin was the issue and tried characterizing it, then realized all ADC pins were off which is where we arrive today. This process took months mostly because we didn't understand these systems from first principles, now that I've done this testing, fixing this kind of issue in the future will take 10x-100x less time.

![Error Graph from our initial characterization of the current sensor]({{site.url}}/assets/images/esp32-adc-characterization/initial-error.jpg){: height="300" .align-center}  
<i>Error Graph from our initial characterization of the current sensor</i>

A few days ago I had my last final exam for the term, so the real work of figuring out how microcontrollers actually work could begin. After bouncing around a few of my existing projects I decided to characterize the ADCs on my STM32 F031K6T6 and ESP32-WROOM-32D to get a better understanding of how to use them and learn more about how they work along the way.

All test data can be found <a href="https://docs.google.com/spreadsheets/d/14OSSoQIURZ027khO06cPYy9pPMkBiIPu_ZhBbcTdWYQ/edit?usp=sharing">here</a>.  
My code can be found <a href="https://github.com/CKalitin/ESP32-WROOM-32D/blob/master/ADC-Self-Calibration/src/main.cpp">here</a>, if you look through previous commits you'll find earlier test code I wrote for this project.

### <b>Initial Testing</b>

![My Initial Testing Setup]({{site.url}}/assets/images/esp32-adc-characterization/test-setup.jpg){: height="250" .align-center}  
<i>My Initial Testing Setup</i>

I initially wanted a graph of ADC voltage vs. True voltage (as measured by a multimeter) for both microcontrollers. Both have 12-bit SAR ADC's so this testing is applicable to the work on the UBC Solar battery pack. I used a potentiometer to vary voltage between 0-3.3 to get a full range of values. I have no power supply (yet) so I must work with the tools I have. It doesn't look like the potentiometer introduced much error when comparing these results to those later in testing, it only introduced some noise.

![STM32 ADC Voltage vs. True Voltage]({{site.url}}/assets/images/esp32-adc-characterization/STM32-Multimeter-Testing.jpg){: height="320" .align-center}  
<i>Blue Line = ADC Observed Voltage, Red Line = True Voltage (what we expect), Yellow Line = ADC Voltage plus Error Polynomial</i>

![ESP32 ADC Voltage vs. True Voltage]({{site.url}}/assets/images/esp32-adc-characterization/ESP32-Multimeter-Testing.jpg){: height="320" .align-center}  
<i>Blue Line = ADC Observed Voltage, Red Line = True Voltage (what we expect), Yellow Line = ADC Voltage plus Error Polynomial</i>

The shape of the ESP32's ADC voltage graph perplexed me because it appears the first value it observed was 0.14V, and it stopped at 3.18V. Some googling & talking to Grok showed that below 0.1V or above 3.1V the ESP32's ADCs are not accurate. In the UBC Solar battery pack we give the current sensor a 1.8V reference voltage to offset the readings. So, the we are right in the middle of the accurate range of the ESP32's microcontroller. STM32 chips have a similar range in which they are meant to operate accurately.

With the ADC observed voltage and the expected voltage, I fit a polynomial to the error using Google Sheet's built in function and plotted the voltage + error polynomial on the graph. Note that I didn't redo the test here with the error polynomial applied in firmware, I just added it to the spreadsheet values. With the error polynomial applied, the STM32 and ESP32 ADCs became accurate to within 0.01V in most of the range (0.5V - 3.0V). The reason this range doesn't exactly match the expected 0.1V - 3.1V range that the ESP32 chip should be accurate in is because of improper application of the error polynomial, I should have deleted values that are outside the range I want.

![Zoomed in view of the STM32 ADC Voltage vs. True Voltage]({{site.url}}/assets/images/esp32-adc-characterization/STM32-Zoomed.jpg){: height="320" .align-center}  
<i>Zoomed in view of the STM32 ADC Voltage vs. True Voltage</i>

This zoomed in view of the same STM32 ADC Voltage vs. Multimeter Voltage graph from above shows a strange non-linearity point in the graph. Above a voltage of 0.07V, we get a mostly linear error. However, below this we see this strange non-linear part of the graph. I don't understand Electical Engineering or Physics at a low enough level to describe this, but it tells us that the reasonable lower range of the STM32's ADC is 0.07V.

![Testing with a 1.2 V Battery]({{site.url}}/assets/images/esp32-adc-characterization/STM32-Battery-Testing.jpg){: height="104" .align-center}  
<i>Testing with a 1.2 V Battery</i>

I also tested with a 1.2V AAA battery to ensure that the potentiometer was not an issue and got results that were similarly inaccurate. Note that I converted in the spreadsheet with the formula (ADC Reading / 4095) * 3.3. This assumes the reference voltage is 3.3V and converts the ADC reading assuming the conversions: 0 = 0V and 4095 = 3.3V.

### <b>Using the esp32-adc-calibration Github repo</b>

![This is the code from the Github repo I used, notice the massive array at the top that stores the lookup table.]({{site.url}}/assets/images/esp32-adc-characterization/LUT.jpg){: height="500" .align-center}  
<i>This is the code from the Github repo I used, notice the massive array at the top that stores the lookup table and the line count.</i>

In researching I found <a href="https://github.com/e-tinkers/esp32-adc-calibrate">this Github repo</a> that uses the ESP32's DAC (Digital to Analogue Voltage Converter) to get the chip to characterize itself. If you have a known voltage output from the DAC, you can pipe this directly into the ADC and find you error in firmware instead of on a spreadsheet. This Github repo then takes the error values and feeds it into an arduino .ino program (ESP32's can run using the Arduino IDE) to get a lookup table of errors. Essentially, it records 256 values and for reach range in between them it calculates the error. With these ranges you can use them as a lookup table where you input your ADC value as a key and get the expected ADC value back for that particular ADC voltage. 

This lookup table appraoch required 16 KB of flash memory on the ESP32. If we really wanted to do this on the UBC Solar battery pack we could shrink the lookup table to 128 values and probably have enough flash left over for the other programs. However, this is still a very stupid idea. We aren't software devs that can throw memory and compute at all of our problems.

![Test Results]({{site.url}}/assets/images/esp32-adc-characterization/LUT-Values.jpg){: height="400" .align-center}  
<i>Blue Line = DAC Output Voltage, Red Line = Unadjusted ADC Reading, Yellow Line = ADC Reading Adjusted with Lookup Table</i>

The shape of the error looks very similar in this test and the calibrated reading is spot on with what we expect. However, I later found out that the output of the DAC cannot be trusted. When testing with a multimeter, it's output was inaccurate in a similar was in which the ADC was. So, this kind of test where you use the DAC to calibrate the ADC is not possible on my ESP32 chip.

I initially wanted to write my own self calibration script for my STM32, but after realizing the DAC may not be trustworthy and the fact that unlike UBC Solar's STM32 chip mine doesn't have a DAC, I decided to abandon this idea. If on Solar we find that the DAC on our chip is trustworthy, this could be a good way to calibrate the ADCs on any of our boards, not just the ECU (Elithion Control Unit) in the Battery Pack.

### <b>Testing Attenuation</b>

In the <a href="https://github.com/e-tinkers/esp32-adc-calibrate/blob/master/README.md">README</a> for the esp32-adc-calibrate repo, the author mentions that reading the <a href="https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/peripherals/adc_calibration.html">ADC Calibration</a> documentation is a good first step before implementing the code. I read it and found the esp_adc_cal_characterize() function that allows you to set the attenuation, bit width, and other parameters for either of the two ADCs on the ESP32-WROOM-32D. There's no automatic ADC calibration, but I could set parameters and record the results.

![Little difference was found between all the attenuation values.]({{site.url}}/assets/images/esp32-adc-characterization/Atten-0-2.5.jpg){: height="320" .align-center}  
![Little difference was found between all the attenuation values.]({{site.url}}/assets/images/esp32-adc-characterization/Atten-12.jpg){: height="320" .align-center}  
<i>Little difference was found between all the attenuation values.</i>

I <a href="https://github.com/CKalitin/ESP32-WROOM-32D/blob/master/ADC-Self-Calibration/src/main.cpp">wrote some firmware</a> inspried by the Github repo above that automatically tested the ADC given a range of DAC values. This was before I found out the DAC is not trustworthy to output specific voltages within ~0.1V in most of the range while I needed ~0.01V precision.

With that firmware, I automatically tested the attenuation values of 0 dB, 2.5dB, and 12dB to see if there was any difference and found none. Attenuation is essentially signal boosting, and I was using a small jumper cable, so it made little difference. However, when swapping out the jumper cable for a short paper clip I found that the noise was reduced. When I get into designing PCBs I'm sure I'll understand this phenomenon better.

### <b>Raw ADC Values Testing</b>

![I tested ADC 2 with lower level functiosn and found little improvement.]({{site.url}}/assets/images/esp32-adc-characterization/ADC2-raw-testing.jpg){: height="320" .align-center}  
<i>I tested ADC 2 with lower level functiosn and found little improvement.</i>

Looking further into the ESP32 documentation, I found lower level libraries that can be used to get the raw ADC values directly instead of interfacing through the Arduino library. I wrote a quick function to convert this raw value into a voltage and tested it using the same "DAC voltage into ADC" strategy as before. I found no difference between my own custom conversion function and the Arduino library's analogRead() function. I also tested the second ADC on my ESP32 and found little difference in the results compared to the first ADC. However, the second ADC was accurate down to 0V while ADC 1 was accurate down to 0.08V. 

![With the graphs above, I got the error graph and fit a Polynomial (trendline) to it]({{site.url}}/assets/images/esp32-adc-characterization/Error-ADC2.jpg){: height="320" .align-center}  
<i>With the graphs above, I got the error graph and fit a Polynomial (trendline) to it.</i>

I then got the error for ADC 2 in raw bits. Instead of converting to voltages and then getting the error, I skipped that step and got the error in raw ADC values between 0-255. This isn't keeping with the ADC's 12-bit range because the DAC only goes to 8-bits, so I was limited to 8-bits of precision. I then fit a polynomial to the error and got the error graph above. The error was very similar to earlier testing, so nothing I had tried fixed the problem and mostly served as an exercise in understanding how to use the ADC on my ESP32.

### <b>Discovering the DAC was Imprescise</b>

![I tested the ADC and DAC with a multimeter and found that all the values differed.]({{site.url}}/assets/images/esp32-adc-characterization/voltages.jpg){: height="320" .align-center}  
<i>I tested the ADC and DAC with a multimeter and found that all the values differed.</i>

During the previous round of testing with the raw ADC values I decided to take out a multimeter and get a ground truth value for the voltage. I discovered a discrepancy between the DAC expected output voltage and the voltages the multimeter was showing. I testing it on a range of values between 0.4V and 1.0V and found a difference along the entire range.

Above you can see the True (multimeter) voltage, what the DAC thinks it's outputting, and what the ADC thinks the voltage is. All of these values differ by a significant amount (~0.5 - 0.1V). This means a self calibration is not possible because the DAC's specified output and what it actually outputs are not equal.

### <b>Conclusion</b>

