**Comp questions / Notes**

Active wheel shells cover

Do teams have balancing on during comp

    what is balancing current???


Testing July 3 1:28pm, motor controller finally works:

Hard break testing first at 1:30

1:46
Micheal in car about to drive put in steering wheel, seeing tel reset.

1:49
Driving to dynamics, took tape of wheels, tel still resetting.

Tel resetting every around 100s.

1:53
Two wet break runs we got it!!! Last one had some skid.

Tel no longer resetting good for 300 seconds.

Driving first lap:

Any data comms related to 

Have a spare of every comms device including radio modules, p cans, and another person fully on boarded.

Back in bay after driving:

Saman heard the banging when we were getting on the track.

A bolt on the motor (I think) was hitting the wire causing the banging.

The motor wire was rubbing on the inside coil (coil rotates, inductor in the middle is stator).

5-10 minutes between car moving, then it crept extremely slowly. Checks out that it’s temperature.

I put my hand on the inside of the back bulkhead when in bay at least 20 minutes after  off the track and it was still hot.

We didn’t have telemetry, Aarjav was attempting to debug on his laptop right before. I’ve got pictures.

Motor has thermistors. We saw motor fault later. See video.

Alex heard it while driving onto the track too, Saman says he said it’s just a hinge.

Imagine scrapping the first lap for a noise like that. Difficult to convince people, especially when we wanted to get down to 70% SOC for strategy then charge during evening and tomorrow morning.

Saman says the banging issues was actually the wire plastic wrapping around the motor wires hitting the motor.

Important to note that we really wanted to drive it into the pit and kept trying for a long while, then a scrutineer commanded us to while some of us were already on the way to get a safety car (van).

Data to look at:
Motor current, pack current, motor faults, battery faults, events surrounding all faults, motor temperature, battery and mppt temps.

Julie looking for extra Mitsuba 2096 D3

Aum:
While rolling onto the track SOC was 99-100%. At some point it was stuck at 102%. Then, first power cycle and it became 91% and was consistently there after more power cycles.

Questions for other teams

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









Motor scrutineer in morning:
“Have you guys passed scrutineer if?”
Nods
“Good, because you’ll fail insulation now.”

Sasha Zbrozek

Deterministic noise

Sense lines coupling really well to one power line.

Configure hall order for phase order so the motor learns it, maybe not possible with the software.

We may need to switch Hall effect lines if it’s not in the order it expects.

Evan Stumpges, motor LCR testing 
Anodised is not conductive
His job is motors

I have to make a gps map.

Western Michigan Ursa Major guy
Maksim Savich

Westbound Radio CBA get 4 or 5 ebay 
Variable resistor for constant current capacity testing and solar arrays
Stephen Zajac

Esteban had 75 miles per kWh?!?!?!! Idk if this is actually real