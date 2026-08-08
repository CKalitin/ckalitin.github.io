# FSGP 2025 Other Teams Notes

Christopher Kalitin

### **Waterloo**

They use 6811s.

X bee radio to radio on laptop to influx to Graham’s. Same architecture.

Fuck tons of bootloaders. Easy first year project.

Evan and Aiden were impressed by our sim environment.

They’ve burned tons of LTCs too with headers.

LTC4418 for power distribution.

10 Ah custom Supp.

AFE \= analog front end like LTC

Didnt name it MS13 lol.

Power distribution board external. Supp to Pwoer dost to BMS. Convoluted

Wave sculpted 22 motor controller prohelion

Duraclick connector for CAN

Motor controller for regen set target vel to 0 and then set regen current.

Pedal to adc normalised zero to one to motor controller. 

Cruise control would be torque to one and set desired vel.

Spi to can for motor controller because not enough can with petals

Throttle from pedal is torque, set wanted vel to extremely high.

10 MPPTs??

Nomura MPPTs

power controlle board gives voltage to each thing, eg right lights.

Around 30V into each one. 150V out nominal.

Nvm, 2 strings and five in each.

Array, MPPT, array, MPPT, and it just steps up.

Two can connectors on each, so daisy chained together. Controller boards, the little black ones.

Final board has a termination resistor.

Five in the car:

1. Battery BMS  
2. Power dist  
3. Console (screen)  
4. MCI

No issues looking at a single one in the string in testing. Low arbitration issues with dropped messages.

Drone camera for backup, hardwired. Yellow red white wires.

7 segment display for console board display to driver. 

Scrutineering:

Microvolts put into the external curr sense board (this is the one connected to the shunt resistor). Voltage divider to get that low.

They have harnesses similar to use for cell boards.

How get that low voltage reading?

MAX17261 for amplifiing shunt. Out to I2C with an ADC inside. Have to isolate because “high voltage.” Remember that in hall land youre isolated. 

Liam and Arian.

Saman: use active components for knowing if  is low on Supp. This is already done on horn.voltage

### **Purdue**

Australian teams start at low temp and heat up. Cell chemistry for high thermal capacity and low internal resistance.

Orion v2, small looking guy.

Honey comb aerojet? Doesn’t splinter. Kevlar\!\!\!

Orion has internal IMD

Prioritize to switch Supp and batt

Power dist board, since Orion

Supp \!= aux\!\!\!

Tried making their own DCdc?\!?\! couldn’t find transformer

Their own cell encapsulation

Get Kevlar prepreg bc Purdue.

36s8p.

8 thermistors.

### **Puerto Rico**

Race capture 4 used for driver sensing. It has a can I put from their orion

Raspberry pi powers disappear.

Two driver fans

Space limited in pack due to cage (other team?) so power dist is external. High voltage inside a glass cage for motor, arrays, battery, probably DCDC.

No can to raspberry, they do it through the race capture Quateo.

Bars between contractors, everything else wires. Bars because better and no bars anywhere else because hard.

Two big bars of cells. 7 high, dozens long. 30s14p. See the image.

GPS map of track with the race capture, track position, very cool.

Didn't ask about telemetry\! They looked bare bones though maybe don’t have it or CAN logging.

Playing music on drums (handheld)\!\!\!\!

Have to take off all nickel tabs to get to a cell in the middle of a bar. 

Copper bus bars. 

LCD driver display I think high res, well if it shows track position.

Single piston thing spring on the wheel.

External DCDC you can see in the image.

### **Wisconsin Madison**

AD BMS 6830B for next gen BMS in house currently Orion, 12 years old.

Orion has duck tons of fuses to solve the jumper issue.

Lights testing:  
If one turn signal is on, the daytime running lights on the other side should be on.

Fully removable top shell way easier for array work.

### **Questions**

Cell setup, stack, module sheet, etc.

Monocoques

Can splitters

Mppts

Motors

Fan placement, Airflow validation

Cell characterisation

Enclosure design, material, impound in vehicle- If yes, how?

Cell name

Solar panel supplier

Ask about wave sculptors

Documentation / wiki

### **Berkeley**

Michigan has active wheel farings with a spring so faring goes out on turns, they might have in older car, might next car. Currently magnets, bolts on top, magnets bottom and tape.

Battery and solar is at charging area, mech fixes so rest of car is here\!\!

Now at charging area for elec guys:

12p34s

In house interconnects between modules

Modules have cells vertically, they swap direction each time so interconnects are only on one side.

Module logics, LTC something.

High voltage power distribution board. Pre charge on it\!\!

BMS board.

Two victor DCdc, heat sinks.

Each module has 5 thermistors, white wires.

Miles connector soldered onto module board.

MPPTs: bankrupt, 13 years, and for next Feb, Dilithium power company, photon 3\.

Homemade kinda spare mppt.

Can connector: phoenix conmector  
M8 5 pin

It’s just a wire going into everywhere, why do we have can splitters?\!?\!?\!\!?\!\!\!

Molocell, Taiwan, Canadian factory, M35A. “They’re great cells highly recommend.”

Omg this battery

E stop on battery

Motor controller Mitsuba

Gochermann solar panels  
Maxion gen 3 solar cells

Motor: Mitsuba too

No cfd for battery, just cell

Hand calcs for fans  
Literally in notebooks for five hours and a text book. Fluid dynamics test book, heat transfer. Model convective gets transfer over rows of cylindrical banks is the name of the chapter.

24 milliohns per cell. Used for be 36 for their last gen. He says Deev says we’re around 40\.

3.6 kW absolute for two motors.

Modelled for dropping cells 5 degrees below steady state battery temp in the model. 

Do you want three slow fans or one fast one??

M1096 D3 motor

3.6 kW is max regen  
5.4 kW is max power into motors  
Better numbers

Majority do self encapsulation.

Gochermann encapsules theirs.

Theirs is self and easy to damage.

Top wrap sponsored Esteban’s wrap

### **Purdue**

They are alcoholics (raging)

CNC polycarbonate

Laser cut nickel sheet spot welded.

3D print clip on.

Cells are structural.

Cells take force in the vertical direction.

Capacity cell characterisation. V and R vs time, samples seconds apart.

Kunkin Load (piece of shit). For capacity testing.

It ran current through one cell at a time.

2C, 1C, 0.5C, 0.2C. for 3-5 cells. 2C was half an hour. 

Didnt characterise all the cells. Similar enough that could put them together.

21700 50E Samsung

Extra 0 might mean cylindrical. Not prismatic or  a.    T pouch.

no can splitters either.

Cfd on Steering wheel too\!

Mitsuba motor.

Tritium motor controller.

Kevlar battery.

$400k car. $330k sponsored, idk if this guy has good nukb we though. Marketing intern guy, mechanical work, operatipns leada for next year. All operations peopl do technical work too. Marketing is under operations. Mihir Garg.

A lot of it is maintaining relationships. Callings visiting, sending resumes, sending package with merch.

Leads end up doing operations work.

Email them with specifics.

Illinois: make sure high corkage crimps are good, if they rattle they melt the Andersons.

### **ETS**

Prohelion BMS off the shelf

They test PCBs extensively before putting it in the car.

Marand motor, pretty old  
Tritium, wavesculpter 22

Elmars MPPTs

Cell: 2170s, Mun Mull? Cells.  
Good manufacturer so all the same internal resistance so no big characterisation 

Encapsulation is Suncat Solar

Every project has a page, wiki.

Info on every comp, the dos and donts 

WSC is way bigger and you try to keep stuff secret, no public wiki

17 of their people going to WSC.

40 teams ish at WSC. Mostly SOV.

Wiki is done after the project, some pictures, what needs to be upgraded.

Sometimes do design reviews. Mostly based on if people are confident in what their doing.

What is a monocoque.

Bullets are more aerodynamic but less stable.

Manufacturing is easier for bullet. 

Antoine Lapointe. 

Mostly undergrads 

Observer here, car is being shipped To WSC. He’s 

“It would have been pretty easy for us to win here … with six square meters of cells.”

They were at 80% SOC last year after FSGP, not pushing it, keep it ready for ASC.

Do as much testing as you can, so you come here with a car that works.

They have a 7km track, where they test. Dynamics in parking lot.

They don’t do wet break testing, calcs instead.

Driving a few months before for testing. Sometimes delays.

This year 700km of tracking testing before comp. Most of it was in rain too.

Everywhere cerane wrap.

“We wrap the shit out of PCBs.”

Wrap the boxes around PCBs.

3D printed PCB enclosures. 

They try to just have CAN wires everywhere. He doesn’t know how they do power.

Lights have two molex to each light. Light controller PCB.

“You guys have a lot of wires.”

Each board has Can in and out.  
“Less cables.”

“You guys have a lot of cables.”

They have a dashboard completely on the wheel, just can coming out of it.

PNG technology is the track.

CNC aluminium roll cage. brian scrutineer doesn’t like it.

Most Machining done in house. 5 axis parts not in house. Like roll cage, too big for CNC. 

Carbon fibre wheels brought from GH Craft.  
“They are popular carbon fibre wheels for solar cars, only solar cars.”

CAN connector: M12 or M16, “the msot reliable connector you know.”

“I know screw on connectors are fine.”

Carbon fibre mount for horn to aero shell.

Can put horn in the side, “I don’t know why you decided to put it in the middle, it doesnt change much.”

Easier to mount o m the side.

Ease of manufacturing is why they go bullet, “for us it’s more aero.”

6 square meter on the new bullet.

About half the size of the space were in right now at comp.

Two zones for wet layup and pairing.

They also have a specific building for design teams.

More and more design teams at ETS by the year.

Teams that don’t need garages just have a room.

“How do you make sure your team knows how to build a good car for the next generation.”  
”Take notes. Take notes.”

“Keep the Wikipedia in shape.”

Say what works and what doesn’t.

“We just started making good cars five years ago maybe.”

2022 didnt run at ASC, then they got 2nd place.

Grab as much knowledge as possible from previous members. 

Anytime your off the track there’s a yellow shirt with you. Observers like ASC.

At WSC observers sleep eight eg teams like food and sleep.  
“You’re happy when you’re with Michigan.”

They’re camping I the desert for WSC.

Monocoque

They do plugs out sources then they do molds and parts in house.

No active wheel fairings, time constraint because of WSC rule change. 2 months earlier and bigger arrays.

Manufacturing was less than a year.

Started in September done in April.

Design was earlier.

### **Calgary**

Separate regen pedal.

Raspberry pi running hdmi display and cellular modem without static ip.

Can splitters\!\!\!\!\!\!

St link usb c to flash. 

fucking drink holders\!\!\!

USB C CHARGER\!\!\!

Molex microfit connector for can

JTAG is a standard connector too?

Fuse board fans, display, all lv systems. Can 12V input.

Separate critical system and CAN power lines.

Battery, Strobe light, on critical system.

No estop for driver

18 kWh

Driver control boards stacked. 

Power board in the stack, it distributes power to the stack and it. Only top board in the stack has an STM32 F4 or L4. then in stack is driver input board for mostly buttons and pedals.

630-640 ish kg.

33s

Nominal voltage 108\.

18650s

Maran motor and motor controller

Some type of carbon fibre for the battery, different from chassis.

5 pre charge boards, one master BMS, Orion BMS, switch board for emergency switch, dcdc board with aux and high voltage, and 12v selector.

They did a lot of cell characterzi, idk of capacity or impedance.

A much of word docs for documentation.

In the middle:

1. CAN  
2. Lights to the back  
3. Key signals for on

Pi and modem have static local ips.

McMaster uses sigma clad for module sandwiches contacts. Sponsored for free. before they had a design with tons of spot welds and bus bars, then talked to a power electronics professor.

Hexagonal pattern of cells horizontal to air flow.

RJ 44 for can and Can debug blue (blue).

12.96 kWh, used to be 18kWh it is the limit for MOV.

Off the shelf seats they can’t find receipts could have been stolen lol.