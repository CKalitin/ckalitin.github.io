---
layout: post
title: "I Made A Reflow Oven"
categories: ideas
tags:
    - Projects
    - Drafts
author:
 - Christopher Kalitin
word_count: 1
---
<head>
    <meta property="og:image" content="{{site.url}}/assets/images/made-reflow-oven/SSR.jpg">
</head>

![Image](/assets/images/made-reflow-oven/header.jpg){:height="500"}

### **Convection Toaster Ovens Just Happen To Be Perfect For Reflow Ovens**

A couple of months ago I wanted to do thermal characterization testing on 3D printed filament to derive the yield strength vs temperature curve. On the critical path of this project is having an environment chamber that can be controlled to a precise temperature. This is essentially what a reflow oven does, and I've made several PCBs in the last few months, so I decided to make a reflow oven.

A convection consists of a few heating elements, a fan to circulate the air, and various analog components for user input. A reflow oven consists of a few heating elements, a fan to circulate the air, and various digital components for user input. Lots of overlap! 

Because most convection toaster ovens are a completely analog systems, it is not too difficult to hack it so it can be controlled digitally with a Solid State Relay.

### **Part Selection**

**Solid State Relay**

![Image](/assets/images/made-reflow-oven/SSR.jpg){:height="300"}

Because precise control of temperature requires PWMing the heating elements, a Solid State Relay (SSR) is required. A mechanical relay / contactor would wear out rather quickly if switched many times per second. Switching time for a mechanical relay is also tens of milliseconds while SSRs switch in microseconds.

I chose the [SSR-25DA](https://cdn.sparkfun.com/datasheets/Components/General/SSR40DA.pdf) and picked one up for $26 CAD from Lee's Electronics here in Vancouver. It has a current limit of 25 A and a switching voltage range of 3 to 32 V DC. Because trigger current is only 7.5 mA, it can be driven directly from a 3.3V GPIO pin. STM32F031K6 GPIO pins can sink or source up to 15 mA in a subset of their voltage range (0.4 V to VDD - 0.4 V), [see page 81](file:///C:/Users/Chris/Downloads/stm32l031k6.pdf).

**Thermistor**

![Image](/assets/images/made-reflow-oven/thermistor_1.jpg){:height="200"}
![Image](/assets/images/made-reflow-oven/thermistor_2.jpg){:height="200"}

![Image](/assets/images/made-reflow-oven/thermistor_back.jpg){:height="200"}

I bought [this NTC 100 K thermistor](https://datasheet4u.com/datasheet/Danfoss/NTC100K-944190) from Aliexpress. NTC = negative temperature coefficient, meaning resistance decreases as temperature increases. 100 K means resistance is 100 kOhm at 25 C. 

Electrical tape melts at ~80 C and I have no great thermal adhesive, so I cut a hole in the back of the oven and put the thermistor through it. I've unfortunately returned to being a busy engineering student so this solution to mounting the thermistor will have to suffice for now. I'll just have to remember to check if it's fallen out!

![Image](/assets/images/made-reflow-oven/graph.png){:height="300"}  
<i>[See spreadsheet](https://docs.google.com/spreadsheets/d/1yqm948NJ8_uzt0267oY7HAHMM17IJyKlpiy86Fge3AQ/edit?usp=sharing)</i>

To convert a resistance to a voltage I used a voltage divider with a 1 kOhm resistor.

Slew rate of a voltage divider is greatest when both resistors are equal, and I wanted to optimize precision of temperature measurements in the relevant range for reflow soldering (~150 C to 250 C). At ~170 C the thermistor resistance is about 1 kOhm, so I chose a 1 kOhm resistor for the voltage divider.

Optimizing for a high slew rate is ideal because that means a single degree change in temperature will result in a greater change in voltage. With a constant ADC resolution, this means greater precision in temperature measurement.

For 3D printer filament thermal characterization testing, I'll likely want precise temperature measurements around 60-80 C, where the thermistor is around 15 kOhm, so I'll swap out the 1 kOhm resistor. The 1kOhm resistor is current soldered in place to a wire, so I'll likely make another thermistor harness to female jumper pin that can plug into my STM32.

### **STM32 Microcontroller + 1602A LCD Display**

![Image](/assets/images/made-reflow-oven/display.jpg){:height="200"}


- ADC fried and 1.5 mA current flowing into it, no other available ADC pin so can't use the display
- Firmware / FSM
- Instead, real time matplotlib graphing via UART
- Up next: Modelling it to do something more sophisticated than bang-bang control as a function of target and current temperature
    https://en.wikipedia.org/wiki/Bang%E2%80%93bang_control


### **Firmware / FSM**

![Image](/assets/images/made-reflow-oven/fried_adc.jpg){:height="300"}  
*The multimeter is in series between the middle tap of the thermistor + 1k voltage divider and the ADC pin. We see 1.5 mA flowing into the ADC, clearly it's fried.*

### **Real-time Matplotlib Graphing via UART**

![Image](/assets/images/made-reflow-oven/uart_data_2025-09-14_10-09-09_real_time.png){:height="400"}

### **Up Next: Modelling & Control Algorithms**

