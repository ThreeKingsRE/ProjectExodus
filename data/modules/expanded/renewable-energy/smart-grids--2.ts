import type { ModuleExpansion } from '../types'

// Rewritten with its own angle: how homes and people take part in the grid by
// shifting when they use power. Chapter 8 covers how smart grids work.
const expansion: ModuleExpansion = {
  topicId: 'renewable-energy',
  moduleKey: 'smart-grids~2',
  title: 'Demand Response and the Smart Home',
  description: {
    ELEMENTARY: 'How families can help the power grid by using electricity at the best times of day.',
    MIDDLE_SCHOOL: 'How smart thermostats, appliances and prices help homes use power when clean energy is plentiful.',
    HIGH_SCHOOL: 'How demand response and smart home devices shift electricity use to support a renewable grid.',
    UNDERGRADUATE: 'Demand response programmes, price signals, smart devices and their value to the grid.',
    GRADUATE: 'Demand-side flexibility: programme design, aggregation, measurement and consumer outcomes.',
    PHD: 'Research on demand-side flexibility: behavioural response, baselines, automation and distributional effects.',
  },
  lessons: [
    {
      id: 're-sg-1',
      title: 'Demand Response and the Smart Home',
      content: {
        ELEMENTARY: `
<h2>Helping the Grid at the Right Time</h2>
<p>Electricity has busy times, just like a playground at recess. In the early evening, lots of families come home, turn on lights, cook dinner and watch TV all at once. Power plants have to work extra hard. If some of us wait a little to run the dishwasher or charge a car, the grid does not have to work so hard.</p>

<h3>Smart Helpers at Home</h3>
<p>Some homes have smart helpers. A smart thermostat can warm or cool the house a little before the busy time, so it can rest during the busy time. A smart dishwasher can wait until later at night. A phone app can send a message saying, "Please save energy between 5 and 8 o'clock today."</p>
<ul>
<li><strong>Busy time:</strong> the part of the day when lots of people use electricity at once</li>
<li><strong>Smart thermostat:</strong> a device that controls heating and cooling and can plan ahead</li>
<li><strong>Shift:</strong> to move something to a different time</li>
<li><strong>Grid:</strong> the network of wires that brings electricity to homes</li>
<li><strong>Save energy:</strong> to use less electricity</li>
</ul>

<h3>Using Sunshine and Wind</h3>
<p>When the sun shines or the wind blows hard, there is lots of clean electricity. That is a great time to wash clothes or charge an electric car. Using power at those times means we need less power from smoky plants.</p>

<h3>Everyone Can Help</h3>
<p>One family waiting to run the dishwasher seems tiny. But when thousands of families help at the same time, it is like turning off a whole power plant. Small choices add up, and they keep the air cleaner for everyone!</p>
`,
        MIDDLE_SCHOOL: `
<h2>When You Use Power Matters</h2>
<p>The electricity grid has to match supply and demand every second. The hardest moments are peaks, like hot summer evenings when air conditioners all run at once. Power companies used to meet peaks by firing up extra plants, which are often expensive and polluting. Demand response is a different idea: instead of making more electricity at peak time, ask homes and businesses to use a little less, or to use it at a different time.</p>

<h3>How Demand Response Works</h3>
<p>Some utilities send an alert before an expected peak. People who sign up for a programme might get a bill credit for turning down the air conditioning or delaying laundry. Other utilities use time-of-use prices: electricity costs more in the evening and less at night or midday, so families save money by shifting their use. Smart devices make this easy by doing the shifting automatically.</p>
<ul>
<li><strong>Demand response:</strong> changing when or how much electricity people use to help the grid</li>
<li><strong>Peak demand:</strong> the highest amount of electricity used at one time</li>
<li><strong>Time-of-use price:</strong> an electricity price that changes depending on the time of day</li>
<li><strong>Smart meter:</strong> a meter that records how much electricity is used and when</li>
<li><strong>Bill credit:</strong> money taken off your electricity bill as a reward</li>
</ul>

<h3>The Smart Home</h3>
<p>Smart thermostats can pre-cool a house before the peak and coast through it. Electric water heaters can heat water earlier and keep it hot in an insulated tank. Electric cars can charge after midnight or when solar power is strongest. Together, these devices make a home flexible without anyone feeling uncomfortable.</p>

<h3>Why It Helps Renewables</h3>
<p>Solar and wind do not follow our schedules. Demand response lets us use more electricity when they are producing and less when they are not, so the grid can rely more on clean power and less on fossil fuels.</p>
`,
        HIGH_SCHOOL: `
<h2>Flexible Demand for a Renewable Grid</h2>
<p>Traditional grids were built on a simple rule: demand does whatever it wants and supply follows. Power plants ramped up and down to match. As more electricity comes from variable sources like wind and solar, that rule is flipping. It is often cheaper and cleaner to move some demand to match supply than to keep backup plants waiting. Demand response and smart home technology are how ordinary households become part of that balancing act.</p>

<h3>Types of Demand Response</h3>
<p>Programmes fall into two broad groups. Incentive-based programmes pay participants to reduce use during specific events, such as a heat wave, or let the utility briefly cycle their air conditioners. Price-based programmes use rates that vary with time: time-of-use rates have fixed peak and off-peak periods; critical-peak pricing adds very high prices on a few stressed days; real-time pricing follows wholesale market prices hour by hour.</p>
<ul>
<li><strong>Incentive-based programme:</strong> a scheme that pays customers to reduce demand when asked</li>
<li><strong>Critical-peak pricing:</strong> very high electricity prices on a small number of high-stress days</li>
<li><strong>Load shifting:</strong> moving electricity use from one time to another without reducing the total</li>
<li><strong>Pre-cooling:</strong> cooling a building before a peak so the air conditioner can run less during it</li>
<li><strong>Home energy management system:</strong> software that coordinates a home's devices to save money and help the grid</li>
</ul>

<h3>Devices That Make It Automatic</h3>
<p>People rarely want to watch prices all day, so automation is key. A home energy management system can pre-cool or pre-heat the house, run the water heater at cheap hours, charge the electric car when solar output peaks and pause the pool pump during an event. Studies of automated programmes generally show larger and more reliable demand reductions than programmes that rely on people remembering to act.</p>

<h3>Benefits and Concerns</h3>
<p>Demand response can reduce the need for expensive peaker plants, lower wholesale prices for everyone and help absorb surplus solar at midday. But program design matters. People with health conditions or very hot homes may not be able to cut cooling safely, and complicated rates can confuse customers. Good programmes let people opt out of any event, protect vulnerable households and explain savings clearly.</p>

<h3>A Glimpse of the Future</h3>
<p>Imagine a heat wave in 2035. Millions of thermostats, water heaters and car chargers each shift a little, guided by price signals and automation. Together they act like a large clean power plant that never burns fuel.</p>
`,
        UNDERGRADUATE: `
<h2>Demand Response: Mechanisms and Value</h2>
<p>Power systems must balance supply and demand continuously. Historically, flexibility came almost entirely from the supply side: dispatchable plants that could ramp output. With rising shares of variable renewable generation and electrification of heating and transport, demand-side flexibility has become a major resource. Demand response (DR) refers to changes in electricity consumption by end users in response to price signals or incentive payments, and smart home technology is turning millions of small loads into controllable resources.</p>

<h3>Programme Types and Price Signals</h3>
<p>Incentive-based programmes include direct load control (the utility or an aggregator remotely cycles devices), interruptible tariffs for large customers and peak-time rebates. Price-based programmes include time-of-use (TOU), critical-peak pricing (CPP) and real-time pricing (RTP). TOU encourages routine load shifting; CPP targets the few hours that drive capacity costs; RTP passes through wholesale price variation most completely but exposes customers to volatility. Evaluations typically find that CPP with enabling technology produces the largest peak reductions per household.</p>
<ul>
<li><strong>Direct load control:</strong> remote control of customer devices by a utility or aggregator during events</li>
<li><strong>Peak-time rebate:</strong> a payment for reducing use below a baseline during peak events, with no penalty for not participating</li>
<li><strong>Baseline:</strong> an estimate of what a customer would have used without the event, used to measure the reduction</li>
<li><strong>Price elasticity of demand:</strong> how much electricity use changes in response to a change in price</li>
<li><strong>Snapback:</strong> a rise in demand right after an event ends as devices recover</li>
</ul>

<h3>Measurement and Value</h3>
<p>Measuring DR is inherently counterfactual: the reduction is the difference between actual use and an estimated baseline. Baseline methods (averages of similar days, regression or control groups) can be gamed or biased, especially for weather-sensitive loads. DR value streams include avoided generation capacity, reduced wholesale energy costs, deferred network upgrades and ancillary services such as frequency response, which fast-acting loads like water heaters can provide.</p>

<h3>Smart Homes as Flexible Resources</h3>
<p>Thermostats exploit the thermal mass of buildings; electric water heaters store energy as hot water; EV charging is highly shiftable because cars sit parked most of the day. Interoperability standards let aggregators control devices from many manufacturers. Snapback, comfort limits and customer opt-outs constrain how much flexibility is reliably available, so aggregators model these when bidding into markets.</p>

<h3>Commercial and Industrial Flexibility</h3>
<p>Large customers were the first demand response participants. Cold storage warehouses can pre-chill and coast through events, water utilities can shift pumping, and factories with flexible processes can reschedule production. Their loads are large and well metered, so they often provide fast, reliable reductions and ancillary services, while household programmes add breadth across millions of small loads.</p>
`,
        GRADUATE: `
<h2>Demand-Side Flexibility: Design, Aggregation and Measurement</h2>
<p>Decarbonisation is shifting power systems toward variable supply and electrified, potentially flexible demand. Demand-side flexibility can substitute for peaking capacity, network reinforcement and some storage, but realising it at scale requires well-designed tariffs and programmes, aggregation platforms, credible measurement and attention to consumer outcomes. This chapter analyses these elements.</p>

<h3>Programme and Tariff Design</h3>
<p>Design choices trade off efficiency, simplicity, customer risk and equity. Dynamic pricing aligns incentives with system costs but transfers risk to customers; incentive programmes protect customers but require baselines and can reward inflated consumption. Opt-out enrolment (default TOU with the option to leave) typically achieves far higher participation than opt-in, with modestly smaller per-customer response but much larger aggregate impact. Pairing price signals with automation, such as thermostats and EV chargers that respond automatically, raises both response size and persistence.</p>
<ul>
<li><strong>Opt-out enrolment:</strong> placing customers on a programme by default while letting them leave</li>
<li><strong>Aggregator:</strong> an intermediary that pools many small flexible loads and sells their flexibility</li>
<li><strong>Measurement and verification (M&amp;V):</strong> methods to quantify the demand reduction actually delivered</li>
<li><strong>Randomised control trial:</strong> an evaluation design that compares randomly assigned treatment and control groups</li>
<li><strong>Flexibility envelope:</strong> the range of power a fleet of devices can deliver over time, given comfort and device constraints</li>
</ul>

<h3>Aggregation and Market Participation</h3>
<p>Wholesale and ancillary service markets increasingly allow aggregated distributed resources to participate, subject to telemetry, minimum size and performance requirements. Aggregators must forecast a fleet's flexibility envelope, accounting for weather, occupancy, device state and opt-outs, and dispatch devices to meet commitments. Coordination with distribution operators matters, because a wholesale-optimal dispatch can overload local feeders.</p>

<h3>Measurement and Verification</h3>
<p>Baseline-based settlement suffers from bias and gaming risks; regression and synthetic-control baselines improve accuracy, while randomised control trials provide the gold standard for programme evaluation but are hard to use for individual settlement. Device-level telemetry offers direct measurement for some resources but raises privacy and data-governance questions.</p>

<h3>Consumer Outcomes and Equity</h3>
<p>Evidence suggests most households save modestly on dynamic rates, but some, particularly those with inflexible loads or poorly insulated homes, may pay more. Bill-protection guarantees, targeted efficiency support and accessible communication mitigate these risks. As flexibility becomes a valued resource, designers must ensure benefits are not concentrated among households that can afford smart devices.</p>

<h3>Interoperability and Data Governance</h3>
<p>Scaling flexibility depends on devices that speak common protocols and on clear rules for who may control them and use their data. Open standards for device communication, customer consent frameworks and cybersecurity requirements are becoming as important as tariff design, because a compromised fleet of controllable loads could itself threaten grid stability.</p>
`,
        PHD: `
<h2>Research Frontiers in Demand-Side Flexibility</h2>
<p>Demand-side flexibility is frequently cited as a cornerstone of low-carbon power systems, yet estimates of its realistic potential vary widely. The gap reflects uncertainties about behaviour, device and building physics, measurement and institutional arrangements. This chapter surveys the research questions that will determine how much flexibility households and businesses can reliably provide.</p>

<h3>Behavioural Response and Persistence</h3>
<p>Field experiments on dynamic pricing have estimated price elasticities and peak reductions, but most run for a season or two. Persistence of response over years, habituation to alerts and interaction with automation remain open questions. Behavioural research examines salience, defaults and framing, finding that defaults and automation often matter more than price level. Understanding heterogeneity, which households respond, by how much and why, is crucial for both forecasting and equity.</p>
<ul>
<li><strong>Persistence:</strong> whether demand response continues over months and years rather than fading</li>
<li><strong>Heterogeneous treatment effect:</strong> variation in how different groups respond to the same intervention</li>
<li><strong>Synthetic control:</strong> a method that builds a weighted comparison group to estimate what would have happened without an intervention</li>
<li><strong>Grey-box building model:</strong> a simplified physical model of a building's thermal behaviour calibrated with data</li>
<li><strong>Distributional incidence:</strong> how costs and benefits of a policy fall across different groups</li>
</ul>

<h3>Modelling Flexibility From Devices and Buildings</h3>
<p>Aggregate flexibility depends on building thermal dynamics, device states and occupant constraints. Approaches range from grey-box building models and virtual battery representations of thermostatically controlled loads to data-driven models trained on smart meter and device telemetry. Key challenges include representing rebound and snapback, coordinating heterogeneous devices without synchronised responses, and preserving privacy, for example through federated or differentially private methods.</p>

<h3>Measurement, Baselines and Market Integrity</h3>
<p>Settling demand response against counterfactual baselines creates incentives for gaming and introduces measurement error that scales with participation. Research compares baseline methods, synthetic control and machine-learning counterfactuals, and asks whether settlement should move toward device-level measurement or price-based approaches that avoid baselines entirely.</p>

<h3>Distributional and Institutional Questions</h3>
<p>Dynamic tariffs can produce winners and losers; studies of distributional incidence find that low-income households are not systematically worse off on average but that specific groups, such as those with high, inflexible cooling needs, can be harmed. Open questions include how to design tariffs that are efficient yet fair, how to share the system value of flexibility with participants, and how regulation should govern aggregators that control millions of household devices.</p>

<h3>Toward Integrated Assessment</h3>
<p>Capacity expansion and operational models often treat demand flexibility as a cheap, perfectly reliable resource. Integrating empirically grounded behavioural and building models into these system models, with explicit uncertainty, would produce more credible estimates of how much flexibility can displace generation, storage and network investment. Such integration also clarifies the cybersecurity and reliability risks of depending on large fleets of networked devices, and the value of diversity across device types and providers.</p>
`,
      },
    },
  ],
  quiz: [
    {
      id: 're-sg2-q1',
      question: {
        ELEMENTARY: 'When is a "busy time" for electricity?',
        MIDDLE_SCHOOL: 'What is demand response?',
        HIGH_SCHOOL: 'As renewables grow, what is often cheaper than keeping backup plants waiting?',
        UNDERGRADUATE: 'Which programme type typically yields the largest peak reductions per household in evaluations?',
        GRADUATE: 'Why does opt-out enrolment usually produce a larger aggregate impact than opt-in?',
        PHD: 'Which open question limits confidence in long-run estimates of demand response?',
      },
      options: {
        ELEMENTARY: ['In the middle of the night', 'When everyone is asleep', 'Early evening, when families get home', 'Never'],
        MIDDLE_SCHOOL: ['Building more power plants', 'Painting power lines', 'Changing when or how much people use electricity to help the grid', 'Turning off the grid'],
        HIGH_SCHOOL: ['Burning more coal', 'Building bigger meters', 'Moving some demand to match supply', 'Ignoring demand'],
        UNDERGRADUATE: ['Flat rates', 'Opt-in newsletters', 'Critical-peak pricing with enabling technology', 'Annual bill inserts'],
        GRADUATE: ['Opt-out customers respond more strongly each', 'Opt-in programmes are illegal', 'Far higher participation outweighs a modestly smaller per-customer response', 'Opt-out removes the need for prices'],
        PHD: ['Whether electricity exists in winter', 'Whether meters measure energy', 'Persistence of response over years', 'Whether thermostats have screens'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'The busy time is early evening, when lots of families use power at once.',
        MIDDLE_SCHOOL: 'Demand response means adjusting electricity use to help balance the grid.',
        HIGH_SCHOOL: 'Shifting flexible demand toward times of plentiful supply often costs less than standby plants.',
        UNDERGRADUATE: 'Critical-peak pricing paired with automation produces the biggest peak reductions.',
        GRADUATE: 'Defaults bring in many more customers, so total impact is larger even if each responds a bit less.',
        PHD: 'Most trials are short, so whether response persists for years is still uncertain.',
      },
    },
    {
      id: 're-sg2-q2',
      question: {
        ELEMENTARY: 'What can a smart thermostat do before a busy time?',
        MIDDLE_SCHOOL: 'What does a time-of-use price do?',
        HIGH_SCHOOL: 'What is pre-cooling?',
        UNDERGRADUATE: 'Why is measuring demand response inherently counterfactual?',
        GRADUATE: 'What does an aggregator do?',
        PHD: 'What does a synthetic control method estimate?',
      },
      options: {
        ELEMENTARY: ['Warm or cool the house a little early', 'Turn off the sun', 'Make the house noisy', 'Send the house to the grid'],
        MIDDLE_SCHOOL: ['Charges different prices at different times of day', 'Keeps prices the same forever', 'Makes electricity free', 'Tells you the weather'],
        HIGH_SCHOOL: ['Cooling a building before a peak so the AC can run less during it', 'Cooling food before cooking', 'Turning off cooling forever', 'Opening all windows in winter'],
        UNDERGRADUATE: ['The reduction is the gap between actual use and an estimated baseline', 'Meters cannot measure kWh', 'Prices are secret', 'Events never happen'],
        GRADUATE: ['Pools many small flexible loads and sells their flexibility', 'Builds transmission lines', 'Generates electricity from coal', 'Prints electricity bills'],
        PHD: ['What would have happened without an intervention, using a weighted comparison group', 'The colour of meters', 'Future fuel prices', 'Device manufacturing costs'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'It can warm or cool the house a little early so it can rest during the busy time.',
        MIDDLE_SCHOOL: 'Time-of-use prices are higher at busy times and lower at quiet times.',
        HIGH_SCHOOL: 'Pre-cooling stores "coolness" in the building so less cooling is needed at peak.',
        UNDERGRADUATE: 'You cannot observe what the customer would have used, so you estimate a baseline.',
        GRADUATE: 'Aggregators combine many small resources into a fleet that can participate in markets.',
        PHD: 'Synthetic control builds a weighted comparison group to estimate the counterfactual.',
      },
    },
    {
      id: 're-sg2-q3',
      question: {
        ELEMENTARY: 'When is a great time to charge an electric car?',
        MIDDLE_SCHOOL: 'What does a smart meter record?',
        HIGH_SCHOOL: 'Which pricing approach adds very high prices on a few high-stress days?',
        UNDERGRADUATE: 'What is "snapback"?',
        GRADUATE: 'Why must aggregators coordinate with distribution operators?',
        PHD: 'What do grey-box building models represent?',
      },
      options: {
        ELEMENTARY: ['When the power is smoky', 'When the sun shines or wind blows hard', 'Only during the busy time', 'Never'],
        MIDDLE_SCHOOL: ['Only the outside temperature', 'How much electricity is used and when', 'Your favourite TV shows', 'The colour of the house'],
        HIGH_SCHOOL: ['Flat-rate pricing', 'Critical-peak pricing', 'Free electricity days', 'Annual pricing'],
        UNDERGRADUATE: ['A broken thermostat', 'A rise in demand right after an event as devices recover', 'A type of meter', 'A wholesale price cap'],
        GRADUATE: ['Aggregators own all feeders', 'A wholesale-optimal dispatch can overload local feeders', 'Distribution operators set wholesale prices', 'There is no need to coordinate'],
        PHD: ['Only the building\'s paint colour', 'A building\'s thermal behaviour with a simplified physical model calibrated with data', 'Electricity market rules', 'Occupants\' favourite temperatures only'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'When clean energy is plentiful, charging uses sunshine and wind power.',
        MIDDLE_SCHOOL: 'A smart meter records how much electricity is used and at what time.',
        HIGH_SCHOOL: 'Critical-peak pricing targets the few days that stress the grid most.',
        UNDERGRADUATE: 'After an event, devices like air conditioners work harder to catch up, causing snapback.',
        GRADUATE: 'Moving many devices at once can overload local lines even if it helps the wholesale market.',
        PHD: 'Grey-box models combine simple physics with data to represent a building\'s thermal dynamics.',
      },
    },
    {
      id: 're-sg2-q4',
      question: {
        ELEMENTARY: 'Why do small choices like waiting to run the dishwasher matter?',
        MIDDLE_SCHOOL: 'How can an electric water heater help the grid?',
        HIGH_SCHOOL: 'Why do automated programmes often outperform those relying on people to act?',
        UNDERGRADUATE: 'Why is EV charging highly shiftable?',
        GRADUATE: 'What is the gold standard for evaluating a demand response programme?',
        PHD: 'What risk arises when many devices respond to the same signal at once?',
      },
      options: {
        ELEMENTARY: ['They make dishes dirtier', 'They do not matter', 'They make the TV louder', 'Thousands of families together make a big difference'],
        MIDDLE_SCHOOL: ['By freezing the water', 'By making water cold', 'By using more power at peak', 'By heating water earlier and keeping it hot'],
        HIGH_SCHOOL: ['People never want to save money', 'Automation is illegal', 'Prices never change', 'People rarely watch prices all day, so automation responds reliably'],
        UNDERGRADUATE: ['Cars must charge at 6 p.m.', 'EVs cannot charge at night', 'Charging uses no electricity', 'Cars sit parked most of the day'],
        GRADUATE: ['Guessing', 'Customer testimonials', 'Press coverage', 'Randomised control trials'],
        PHD: ['Devices become quieter', 'Meters stop working', 'Prices fall to zero', 'Synchronised responses can create new peaks'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'One family is small, but thousands together are like switching off a power plant.',
        MIDDLE_SCHOOL: 'Water heaters store energy as hot water, so they can heat ahead of the peak.',
        HIGH_SCHOOL: 'Automation acts every time, while people often forget or are busy.',
        UNDERGRADUATE: 'Because EVs are parked for long periods, their charging can be moved to better times.',
        GRADUATE: 'Randomised control trials compare random treatment and control groups for unbiased estimates.',
        PHD: 'If many devices switch at the same moment, they can create a new peak.',
      },
    },
    {
      id: 're-sg2-q5',
      question: {
        ELEMENTARY: 'What is the grid?',
        MIDDLE_SCHOOL: 'How does demand response help renewable energy?',
        HIGH_SCHOOL: 'What should good demand response programmes do for vulnerable households?',
        UNDERGRADUATE: 'What is a baseline in demand response?',
        GRADUATE: 'Which households may pay more on dynamic rates?',
        PHD: 'What do studies of distributional incidence find about dynamic tariffs?',
      },
      options: {
        ELEMENTARY: ['A game played at recess', 'A kind of oven', 'The network of wires that brings electricity to homes', 'A fishing net'],
        MIDDLE_SCHOOL: ['It stops the wind', 'It makes solar panels smaller', 'It lets us use more power when solar and wind are producing', 'It burns more coal'],
        HIGH_SCHOOL: ['Remove their electricity', 'Charge them extra', 'Let them opt out and protect their health', 'Hide the rates'],
        UNDERGRADUATE: ['The maximum price', 'A meter\'s serial number', 'An estimate of use without the event', 'The grid frequency'],
        GRADUATE: ['Those with smart devices', 'Those who shift laundry', 'Those with inflexible loads or poorly insulated homes', 'Those living near solar farms'],
        PHD: ['All low-income households always lose', 'Nobody is ever affected', 'Specific groups such as those with high inflexible cooling needs can be harmed', 'Everyone saves equally'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'The grid is the network of wires carrying electricity to homes.',
        MIDDLE_SCHOOL: 'Shifting demand toward sunny and windy times means we can rely more on clean power.',
        HIGH_SCHOOL: 'Programmes should let anyone opt out and protect people whose health depends on cooling.',
        UNDERGRADUATE: 'The baseline estimates what the customer would have used, so savings can be measured.',
        GRADUATE: 'People who cannot shift use or live in leaky homes can face higher bills on dynamic rates.',
        PHD: 'Average effects are small for low-income households, but specific groups can be harmed.',
      },
    },
  ],
}

export default expansion
