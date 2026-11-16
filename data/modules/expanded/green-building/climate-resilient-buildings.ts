import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'green-building',
  moduleKey: 'climate-resilient-buildings',
  lessons: [
    {
      id: 'gb-resil-1',
      title: 'Weather-Ready Buildings for a Changing Climate',
      content: {
        ELEMENTARY: `
<h2>Buildings Ready for Any Weather</h2>
<p>Hi, I am Pip the builder bird! I build my nest in a safe spot, away from floods and out of the hot sun. People build homes and schools the same way. A building that stays safe when the weather gets wild is called a resilient building. Our weather is changing, so builders are learning new tricks to keep everyone safe.</p>

<h3>What Kind of Wild Weather?</h3>
<p>Some places get big storms with strong winds. Some places get floods when rivers rise. Other places get heat waves, when it stays very hot for many days. Some places get all of these!</p>
<ul>
<li><strong>Flood:</strong> when lots of water covers land that is usually dry</li>
<li><strong>Heat wave:</strong> many days in a row that are much hotter than normal</li>
<li><strong>Storm:</strong> strong wind and heavy rain that can shake trees and buildings</li>
</ul>

<h3>How Buildings Stay Safe</h3>
<p>Builders use clever ideas to protect people inside:</p>
<ul>
<li><strong>Raised floors:</strong> building the floor up high so flood water stays underneath</li>
<li><strong>Strong roofs:</strong> roofs tied down tightly so the wind cannot lift them off</li>
<li><strong>Shade:</strong> trees, awnings and light colored roofs that keep the sun from heating rooms</li>
<li><strong>Thick walls:</strong> well insulated walls that keep cool air in on a hot day</li>
</ul>

<h3>Staying Okay When the Power Goes Out</h3>
<p>Sometimes storms knock out the electricity. A really good building still stays comfortable without power. It has windows that open for breezes, lots of daylight, and walls that hold the cool or the warm inside for a long time.</p>

<h3>Things You Can Do</h3>
<ol>
<li>Help your family make a safety kit with water, a flashlight and snacks.</li>
<li>Learn where to go in your home or school if there is a storm.</li>
<li>Close curtains on sunny windows during a heat wave to keep rooms cool.</li>
<li>Drink lots of water and check on neighbors when it is very hot.</li>
</ol>
<p>Just like Pip picks a smart spot for a nest, people can build smart homes that keep everyone safe!</p>
`,
        MIDDLE_SCHOOL: `
<h2>Designing Buildings for Extreme Weather</h2>
<p>Buildings usually last fifty years or more. That means a school built today will face the weather of the 2070s, not just the weather of today. As the climate warms, many places are seeing hotter heat waves, heavier rainstorms and higher sea levels. Climate-resilient buildings are designed with that future in mind.</p>

<h3>The Main Climate Risks</h3>
<table>
<thead><tr><th>Risk</th><th>What it does to buildings</th><th>A design response</th></tr></thead>
<tbody>
<tr><td>Flooding</td><td>Soaks walls, ruins wiring, grows mold</td><td>Raise floors and put equipment on upper levels</td></tr>
<tr><td>Extreme heat</td><td>Makes rooms dangerously hot, strains air conditioning</td><td>Shade, insulation, cool roofs, cross ventilation</td></tr>
<tr><td>High winds</td><td>Rips off roofs, breaks windows</td><td>Strong connections and impact resistant windows</td></tr>
<tr><td>Wildfire</td><td>Embers blow in and ignite buildings</td><td>Fire resistant roofs, vents with screens, cleared yards</td></tr>
<tr><td>Drought</td><td>Water shortages, soil that shrinks and cracks foundations</td><td>Water saving fixtures and rainwater storage</td></tr>
</tbody>
</table>

<h3>Key Words</h3>
<ul>
<li><strong>Resilience:</strong> the ability to prepare for, withstand and recover quickly from a disaster</li>
<li><strong>Climate risk:</strong> the chance that a weather or climate event harms people or property</li>
<li><strong>Floodplain:</strong> low land next to a river or coast that floods from time to time</li>
<li><strong>Passive survivability:</strong> a building staying livable for days even when power and water are cut off</li>
<li><strong>Adaptation:</strong> changing how we design and live so that climate impacts cause less harm</li>
</ul>

<h3>Why Look at Future Weather?</h3>
<p>For a long time, builders designed using records of past weather. But the past is no longer a perfect guide. Scientists now make climate projections, which are estimates of what future weather may be like. Designers can use them to choose how high to raise a floor or how much shade a building will need decades from now.</p>

<h3>Resilient and Green Together</h3>
<p>Many resilient features also save energy. Good insulation keeps a home cool in a heat wave and also lowers the energy bill. Solar panels with batteries can keep lights on during an outage. Trees provide shade, soak up rain and clean the air. Designers try to choose features that help in several ways at once.</p>

<h3>Think Like a Designer</h3>
<p>Look at your own school. Is it near a river or the coast? Does it get very hot in summer? Which rooms could people use as a safe, cool place if the power went out? Asking these questions is the first step of a real resilience plan.</p>
`,
        HIGH_SCHOOL: `
<h2>Climate Risk Assessment and Resilient Design</h2>
<p>A building is a long-term bet on the future. Its foundation, structure and envelope may serve for many decades, while the climate around it keeps shifting. Climate-resilient design means identifying the hazards a building is likely to face over its whole life, judging how vulnerable it is to each one, and choosing strategies that reduce harm and speed recovery.</p>

<h3>Risk Is More Than the Hazard</h3>
<p>Engineers often describe risk as a combination of three things:</p>
<ul>
<li><strong>Hazard:</strong> the physical event, such as a flood, heat wave, hurricane or wildfire</li>
<li><strong>Exposure:</strong> whether the building and its people are in the path of that hazard</li>
<li><strong>Vulnerability:</strong> how easily the building and its occupants are harmed when exposed</li>
<li><strong>Adaptive capacity:</strong> the resources and options people have to adjust and recover</li>
<li><strong>Passive survivability:</strong> keeping safe indoor temperatures and basic function without grid power</li>
</ul>
<p>A building in a floodplain is exposed, but if its living spaces and electrical systems sit above expected flood levels, its vulnerability is much lower. Reducing any of these factors reduces risk.</p>

<h3>Designing for Future Climate, Not Past Climate</h3>
<p>Building codes have traditionally relied on historical weather records. Because the climate is changing, a design that was safe for the last fifty years may not be safe for the next fifty. Some designers now use future weather files and projected sea levels to size cooling systems, set floor heights and plan drainage.</p>

<h3>Comparing Strategies</h3>
<table>
<thead><tr><th>Strategy</th><th>Hazard addressed</th><th>Trade-off</th></tr></thead>
<tbody>
<tr><td>Elevating the building or critical equipment</td><td>Flooding</td><td>Higher construction cost, access ramps needed</td></tr>
<tr><td>Wet floodproofing (materials that tolerate getting wet)</td><td>Flooding</td><td>Cleanup still needed after a flood</td></tr>
<tr><td>High-performance envelope and shading</td><td>Heat and cold</td><td>Requires careful design to avoid overheating in summer</td></tr>
<tr><td>Solar panels with battery storage</td><td>Power outages</td><td>Upfront cost and limited backup duration</td></tr>
<tr><td>Ember-resistant vents and noncombustible cladding</td><td>Wildfire</td><td>Material choices may be more limited</td></tr>
</tbody>
</table>

<h3>Passive Survivability in a Heat Wave</h3>
<p>Extreme heat is one of the deadliest weather hazards, and the danger grows when power fails and air conditioning stops. Buildings with good insulation, shaded windows, thermal mass and operable windows for night ventilation can stay much cooler without electricity. This is especially important for older people, young children and anyone with health conditions.</p>

<h3>Real-World Applications</h3>
<ol>
<li>Hospitals placing generators and electrical rooms above flood levels rather than in basements.</li>
<li>Schools designed as community cooling or shelter centers during emergencies.</li>
<li>Homes in wildfire zones using defensible space and fire-resistant roofs.</li>
<li>Apartment buildings adding backup power for water pumps and elevators.</li>
</ol>

<h3>Resilience Is Also About Fairness</h3>
<p>Lower-income neighborhoods often have fewer trees, older housing and less ability to rebuild after a disaster. Resilient design works best when communities help decide priorities and when protection reaches the people who need it most.</p>
`,
        UNDERGRADUATE: `
<h2>Building Vulnerability, Adaptation Measures and Standards</h2>
<p>Climate-resilient building design applies risk analysis to a long-lived asset under a non-stationary climate. Historical weather no longer reliably predicts future loads, so designers must combine hazard projections, site exposure and building-specific vulnerability to choose adaptation measures. This lesson presents the core concepts, a structured assessment method and the role of codes and voluntary standards.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Non-stationarity:</strong> the condition in which the statistical properties of climate change over time, so past records misrepresent future risk</li>
<li><strong>Return period:</strong> the average interval between events of a given size, such as a flood expected once per hundred years on average</li>
<li><strong>Vulnerability assessment:</strong> a structured evaluation of which hazards could harm a building and how badly</li>
<li><strong>Critical systems:</strong> building components like power, water, heating and communications whose failure makes a building unusable</li>
<li><strong>Thermal autonomy:</strong> the share of time a building stays comfortable without active heating or cooling</li>
<li><strong>Design flood elevation:</strong> the height to which a building is protected from flooding, often set above a regulatory flood level</li>
</ul>

<h3>Reasoning About Probability</h3>
<p>A "hundred-year flood" is often misunderstood. It means an event with roughly a one percent chance of occurring in any single year. Over a thirty-year mortgage, that adds up to a substantial chance, roughly one in four, of at least one such flood. If the climate shifts so that the same water level becomes more frequent, the cumulative risk over the building's life rises further. Thinking in lifetime probability rather than annual probability changes which measures look worthwhile.</p>

<h3>Vulnerability Assessment Method</h3>
<ol>
<li>Identify hazards for the site using projections that cover the building's expected lifespan.</li>
<li>Map exposure: elevation, distance to water, vegetation, urban heat island effects.</li>
<li>Inventory critical systems and where they are located.</li>
<li>Estimate consequences: damage, downtime, health risk to occupants.</li>
<li>Rank risks and select measures that reduce the largest risks per unit cost.</li>
<li>Plan for recovery, including how quickly function can be restored.</li>
</ol>

<h3>Adaptation Measures by Category</h3>
<table>
<thead><tr><th>Category</th><th>Examples</th><th>Typical role</th></tr></thead>
<tbody>
<tr><td>Avoid</td><td>Siting outside high-hazard zones</td><td>Most effective, often limited by land availability</td></tr>
<tr><td>Resist</td><td>Elevated floors, impact glazing, reinforced connections</td><td>Prevent damage up to a design threshold</td></tr>
<tr><td>Tolerate</td><td>Flood-resistant finishes, raised outlets</td><td>Accept some damage but speed cleanup</td></tr>
<tr><td>Maintain function</td><td>On-site power, water storage, passive cooling</td><td>Keep occupants safe during outages</td></tr>
<tr><td>Recover</td><td>Spare parts, emergency plans, insurance</td><td>Shorten downtime after an event</td></tr>
</tbody>
</table>

<h3>Codes and Resilience Standards</h3>
<p>Building codes set minimum life-safety requirements, typically based on historical hazard maps. They aim to prevent collapse and loss of life, not necessarily to keep a building usable afterward. Voluntary resilience credits in green rating systems and specialized resilience standards go further, rewarding hazard assessment, backup power, passive survivability and post-event function. Many practitioners argue that codes should move toward forward-looking climate data, though updating maps and standards takes time.</p>

<h3>Avoiding Maladaptation</h3>
<p>Some measures solve one problem while creating another. Air conditioning reduces heat risk indoors but can increase outdoor heat and emissions. A seawall can protect one property while redirecting water to neighbors. Good assessment checks for these side effects.</p>
`,
        GRADUATE: `
<h2>Climate Risk Disclosure, Resilience Policy and Insurance</h2>
<p>At the graduate level, building resilience is examined as a problem of finance, regulation and governance. Physical climate risk affects property values, lending, insurance availability and public budgets. How that risk is measured, disclosed and priced shapes where and how buildings are constructed, and who bears the cost of adaptation.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Physical risk:</strong> financial exposure from direct climate impacts such as floods, storms, heat and wildfire</li>
<li><strong>Transition risk:</strong> financial exposure from policy, technology and market changes during decarbonization</li>
<li><strong>Climate risk disclosure:</strong> reporting how climate hazards may affect an organization or asset, so investors and lenders can judge risk</li>
<li><strong>Risk-based pricing:</strong> setting insurance premiums to reflect the expected loss of each specific property</li>
<li><strong>Moral hazard:</strong> the tendency to take more risk when someone else bears part of the cost</li>
<li><strong>Protection gap:</strong> the difference between total economic losses from disasters and the share that is insured</li>
</ul>

<h3>Why Disclosure Matters</h3>
<p>Markets cannot price what they cannot see. When buyers, lenders and investors lack information about flood or heat exposure, properties in high-risk areas may be overvalued. Disclosure frameworks for companies and financial institutions increasingly ask for scenario analysis of physical risks. For real estate portfolios this means assessing hazard exposure asset by asset and describing adaptation plans. Disclosure informs capital allocation, but its quality depends on consistent methods and credible hazard data.</p>

<h3>Insurance as a Signal and a Constraint</h3>
<p>Insurance transfers risk, but it also sends price signals. When premiums rise or insurers withdraw from high-risk regions, property owners face pressure to adapt or relocate. Public insurance programs and subsidized premiums can keep coverage affordable, but they may also dampen the signal and encourage rebuilding in harm's way. Some insurers offer premium reductions for verified mitigation measures such as fortified roofs, linking building design directly to cost.</p>

<h3>Policy Instruments</h3>
<table>
<thead><tr><th>Instrument</th><th>Mechanism</th><th>Limitation</th></tr></thead>
<tbody>
<tr><td>Forward-looking building codes</td><td>Require design to projected rather than historical hazards</td><td>Slow to update, applies mainly to new construction</td></tr>
<tr><td>Land-use regulation</td><td>Limits development in high-hazard zones</td><td>Politically contested, affects property values</td></tr>
<tr><td>Mandatory hazard disclosure at sale or lease</td><td>Informs buyers and renters</td><td>Information alone may not change behavior</td></tr>
<tr><td>Retrofit grants and incentives</td><td>Reduce upfront cost of mitigation</td><td>Uptake may favor better-resourced owners</td></tr>
<tr><td>Managed retreat and buyouts</td><td>Move people and assets away from repeat-loss areas</td><td>Social disruption and cultural loss</td></tr>
</tbody>
</table>

<h3>The Economics of Avoided Loss</h3>
<p>Mitigation spending pays off through damages that never occur, which makes benefits less visible than costs. Benefit-cost analysis compares expected avoided losses, discounted over time, with upfront investment. Results depend heavily on discount rate, hazard projections and whether indirect benefits, such as avoided displacement and health effects, are counted.</p>

<h3>Equity and Governance</h3>
<p>Risk-based insurance and disclosure can lower property values in exposed neighborhoods that are already disadvantaged, while wealthier owners can afford to adapt or move. Renters often have no control over building upgrades. Fair policy pairs price signals with targeted support, tenant protections and meaningful participation of affected communities, including Indigenous communities with long-standing ties to place.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Characterize physical risk under multiple climate scenarios and time horizons.</li>
<li>Identify who holds the risk: owners, tenants, lenders, insurers or the public.</li>
<li>Compare adaptation options using expected avoided loss and co-benefits.</li>
<li>Assess distributional effects and unintended incentives.</li>
<li>Define disclosure, monitoring and review commitments.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: Projections, Damage Functions and Adaptation Pathways</h2>
<p>Research on climate-resilient buildings sits at the intersection of climate science, structural and building physics, catastrophe modeling and decision theory. Key challenges include translating coarse climate projections into building-relevant hazards, representing how hazard intensity becomes damage and loss, and designing adaptation strategies that remain sound under deep uncertainty.</p>

<h3>Methodological Building Blocks</h3>
<ul>
<li><strong>Downscaling:</strong> methods that translate coarse global climate model output into local, building-relevant variables</li>
<li><strong>Future weather files:</strong> hourly synthetic weather datasets representing projected climate for building energy and comfort simulation</li>
<li><strong>Damage function:</strong> a relationship linking hazard intensity, such as flood depth or wind speed, to physical damage or economic loss</li>
<li><strong>Fragility curve:</strong> the probability that a component reaches a given damage state as a function of hazard intensity</li>
<li><strong>Catastrophe model:</strong> a simulation combining hazard, exposure, vulnerability and financial modules to estimate loss distributions</li>
<li><strong>Adaptation pathway:</strong> a sequence of actions with tipping points that trigger a switch to the next option as conditions change</li>
</ul>

<h3>From Climate Projections to Building Hazards</h3>
<p>Global models resolve atmospheric processes at scales far coarser than a building site. Statistical and dynamical downscaling, bias correction and morphing of historical weather files are used to create site-specific inputs. Each step adds uncertainty, and extremes, which matter most for resilience, are harder to represent than averages. Compound events, such as a heat wave coinciding with a grid failure, or storm surge with heavy rainfall, require joint probability methods rather than independent treatment of each hazard.</p>

<h3>Damage Functions and Their Limits</h3>
<p>Depth-damage curves for flooding and fragility curves for wind and earthquakes are central to loss estimation. Many were derived from limited post-event surveys in particular regions and building stocks, and are then transferred elsewhere. Open questions include how to represent duration, water velocity and contamination for floods, how to capture heat-related health damage rather than only physical damage, and how adaptation measures shift curves. Empirical validation is constrained by sparse, proprietary claims data.</p>

<h3>Contested Questions</h3>
<table>
<thead><tr><th>Question</th><th>Why it is contested</th></tr></thead>
<tbody>
<tr><td>Which climate scenarios to design for</td><td>Low-probability, high-impact outcomes argue for conservative design, while cost argues against it</td></tr>
<tr><td>Measuring resilience beyond avoided damage</td><td>Recovery time, health and social disruption are harder to quantify than repair cost</td></tr>
<tr><td>Transferability of damage functions</td><td>Construction practices and occupancy differ widely across regions</td></tr>
<tr><td>Role of cooling in heat adaptation</td><td>Air conditioning protects health but raises energy demand and outdoor heat</td></tr>
</tbody>
</table>

<h3>Decision Making Under Deep Uncertainty</h3>
<p>When probabilities themselves are poorly known, optimizing for a single expected-value scenario can produce brittle designs. Approaches such as robust decision making, real options analysis and dynamic adaptive pathways favor flexibility: building in the ability to add flood barriers, increase cooling capacity or raise equipment later, with monitoring triggers that signal when to act. Research examines how to define tipping points, how to value flexibility, and how institutions can commit to future decisions.</p>

<h3>Thermal Resilience and Health</h3>
<p>An active research area links building simulation with heat-health outcomes. Studies examine indoor overheating during prolonged outages, the influence of envelope, ventilation and occupant behavior, and metrics that capture exposure duration rather than peak temperature alone. Integrating physiological thresholds and population vulnerability into building metrics remains methodologically challenging.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Validated damage and fragility functions that account for adaptation measures and regional construction.</li>
<li>Methods for compound and cascading hazards affecting building systems and infrastructure together.</li>
<li>Standardized thermal resilience metrics linked to health outcomes.</li>
<li>Integration of social vulnerability and recovery capacity into catastrophe models.</li>
<li>Evaluation of how disclosure and insurance pricing actually change design and location decisions.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'gbresillq1',
      question: {
        ELEMENTARY: 'What is a resilient building?',
        MIDDLE_SCHOOL: 'What does passive survivability mean?',
        HIGH_SCHOOL: 'What is passive survivability?',
        UNDERGRADUATE: 'What is a vulnerability assessment?',
        GRADUATE: 'Why is climate risk disclosure important for property markets?',
        PHD: 'What is a damage function?',
      },
      options: {
        ELEMENTARY: ['A building that stays safe when the weather gets wild', 'A building made of rubber that bounces', 'A building that falls down in the wind', 'A building with no windows at all'],
        MIDDLE_SCHOOL: ['A building staying livable for days even when power and water are cut off', 'A building that needs power every second to stay safe', 'A building that can only be used in winter', 'A building that has no heating system'],
        HIGH_SCHOOL: ['Keeping safe indoor temperatures and basic function without grid power', 'Heating a building only with fossil fuels', 'Shutting a building during every storm', 'Relying entirely on air conditioning'],
        UNDERGRADUATE: ['A structured evaluation of which hazards could harm a building and how badly', 'A check of the paint color of the walls', 'A review of rent prices in the area', 'An inspection that only applies to new buildings'],
        GRADUATE: ['Markets cannot price risks they cannot see, so disclosure informs buyers, lenders and investors', 'It hides hazard information from buyers', 'It removes the need for insurance', 'It only matters to architects'],
        PHD: ['A relationship linking hazard intensity, such as flood depth, to physical damage or loss', 'A list of buildings that have been damaged', 'A formula for construction cost only', 'A climate model of global temperature'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Resilient buildings are built to keep people safe during storms, floods and heat waves.',
        MIDDLE_SCHOOL: 'Passive survivability means a building stays safe and livable for a while even without power or water.',
        HIGH_SCHOOL: 'Insulation, shade, thermal mass and night ventilation let a building stay safe without electricity.',
        UNDERGRADUATE: 'A vulnerability assessment identifies hazards, exposure, critical systems and consequences for a specific building.',
        GRADUATE: 'Without disclosure, properties in high-risk areas can be overvalued and capital misallocated.',
        PHD: 'Damage functions translate hazard intensity into expected damage or loss and are central to catastrophe models.',
      },
    },
    {
      id: 'gbresillq2',
      question: {
        ELEMENTARY: 'How can a building stay safe from a flood?',
        MIDDLE_SCHOOL: 'Why do designers now look at future weather, not just past weather?',
        HIGH_SCHOOL: 'In risk thinking, what does exposure mean?',
        UNDERGRADUATE: 'Roughly what is the chance of at least one hundred-year flood over a thirty-year mortgage?',
        GRADUATE: 'What is the protection gap?',
        PHD: 'What is a fragility curve?',
      },
      options: {
        ELEMENTARY: ['Painting the door blue', 'Building the floor up high so water stays underneath', 'Putting the beds in the basement', 'Leaving all the doors open'],
        MIDDLE_SCHOOL: ['Past weather records are always wrong', 'Buildings last decades and the climate is changing, so the past is not a perfect guide', 'Future weather is always cooler', 'Builders are not allowed to use old records'],
        HIGH_SCHOOL: ['How expensive the building was', 'Whether the building and its people are in the path of a hazard', 'How many windows face south', 'How old the occupants are'],
        UNDERGRADUATE: ['About one percent', 'Roughly one in four', 'Exactly one hundred percent', 'Zero, because it only happens once a century'],
        GRADUATE: ['The distance between a building and the coast', 'The difference between total disaster losses and the share that is insured', 'The gap between two flood walls', 'The time between an insurance claim and payment'],
        PHD: ['A graph of rainfall over a year', 'The probability that a component reaches a given damage state as hazard intensity rises', 'A plan for adding flood barriers later', 'A measure of building energy use'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Raised floors keep flood water below the rooms where people live.',
        MIDDLE_SCHOOL: 'A building made today will face the weather of many decades from now, so designers use climate projections.',
        HIGH_SCHOOL: 'Exposure describes being in harm\'s way; a building above flood level has lower vulnerability even if exposed.',
        UNDERGRADUATE: 'A one percent annual chance adds up over thirty years to roughly a one in four chance of at least one event.',
        GRADUATE: 'The protection gap is the uninsured share of disaster losses, often borne by households and governments.',
        PHD: 'Fragility curves express damage probability as a function of hazard intensity for a component or building type.',
      },
    },
    {
      id: 'gbresillq3',
      question: {
        ELEMENTARY: 'What can you do to keep a room cooler during a heat wave?',
        MIDDLE_SCHOOL: 'Which feature is both resilient and saves energy?',
        HIGH_SCHOOL: 'Why do some hospitals place generators above flood levels?',
        UNDERGRADUATE: 'What does non-stationarity mean for building design?',
        GRADUATE: 'How can subsidized insurance create moral hazard?',
        PHD: 'Why are adaptation pathways useful under deep uncertainty?',
      },
      options: {
        ELEMENTARY: ['Turn on the oven', 'Open the curtains wide in the sun', 'Close curtains on sunny windows', 'Wear a heavy coat'],
        MIDDLE_SCHOOL: ['A basement bedroom', 'Single-pane windows', 'Good insulation', 'A dark roof in a hot place'],
        HIGH_SCHOOL: ['Generators run better on rooftops', 'It is required for all buildings everywhere', 'Basements flood, which can knock out power when it is needed most', 'It makes the generator quieter'],
        UNDERGRADUATE: ['Climate never changes', 'Buildings never move', 'Past weather statistics may misrepresent future risk', 'Codes are updated every year'],
        GRADUATE: ['It always raises premiums sharply', 'It forces everyone to move away', 'It can weaken price signals and encourage rebuilding in harm\'s way', 'It removes all risk from the market'],
        PHD: ['They lock in one design forever', 'They ignore monitoring', 'They sequence actions with triggers so plans can change as conditions change', 'They assume the most likely scenario is certain'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Closing curtains blocks hot sunlight so rooms stay cooler.',
        MIDDLE_SCHOOL: 'Insulation keeps heat out in a heat wave and lowers energy bills all year.',
        HIGH_SCHOOL: 'Equipment in basements is exposed to flooding; raising it keeps critical power running.',
        UNDERGRADUATE: 'With a changing climate, historical records alone can underestimate future hazards.',
        GRADUATE: 'When premiums do not reflect risk, owners have less reason to adapt or avoid high-risk locations.',
        PHD: 'Adaptation pathways keep options open and use tipping points to trigger the next action.',
      },
    },
    {
      id: 'gbresillq4',
      question: {
        ELEMENTARY: 'What is a good thing to put in a family safety kit?',
        MIDDLE_SCHOOL: 'What is a floodplain?',
        HIGH_SCHOOL: 'Which strategy helps a building keep power during an outage?',
        UNDERGRADUATE: 'Which adaptation category accepts some damage but speeds cleanup?',
        GRADUATE: 'What is a main limitation of forward-looking building codes?',
        PHD: 'Why are compound events hard to model?',
      },
      options: {
        ELEMENTARY: ['A big bag of sand', 'A heavy television', 'A pile of homework', 'Water, a flashlight and snacks'],
        MIDDLE_SCHOOL: ['A flat roof', 'A kind of airplane', 'A dry desert', 'Low land near a river or coast that floods from time to time'],
        HIGH_SCHOOL: ['Removing insulation', 'Using darker roof colors', 'Putting wiring in the basement', 'Solar panels with battery storage'],
        UNDERGRADUATE: ['Avoid', 'Resist', 'Recover', 'Tolerate, such as flood-resistant finishes'],
        GRADUATE: ['They make buildings unsafe', 'They ban all new construction', 'They ignore life safety', 'They are slow to update and mainly affect new construction'],
        PHD: ['They never happen', 'They involve only one hazard', 'They are always less damaging', 'Hazards occurring together require joint probabilities rather than independent treatment'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Water, a flashlight and snacks help your family if the power goes out during a storm.',
        MIDDLE_SCHOOL: 'Floodplains are low areas beside rivers or coasts that flood now and then.',
        HIGH_SCHOOL: 'Solar with batteries can keep essential loads running when the grid is down, for a limited time.',
        UNDERGRADUATE: 'Tolerate measures let water in but use materials that clean up easily and recover quickly.',
        GRADUATE: 'Codes change slowly and mostly govern new buildings, leaving the existing stock unaddressed.',
        PHD: 'Compound events like heat plus grid failure interact, so treating each hazard separately underestimates risk.',
      },
    },
    {
      id: 'gbresillq5',
      question: {
        ELEMENTARY: 'Which of these is a heat wave?',
        MIDDLE_SCHOOL: 'What is adaptation?',
        HIGH_SCHOOL: 'Why is resilience also a fairness issue?',
        UNDERGRADUATE: 'What is an example of maladaptation?',
        GRADUATE: 'Why are the benefits of mitigation spending hard to see?',
        PHD: 'What is a known weakness of many existing damage functions?',
      },
      options: {
        ELEMENTARY: ['Many days in a row that are much hotter than normal', 'One cool rainy afternoon', 'A snowy morning', 'A windy night'],
        MIDDLE_SCHOOL: ['Changing how we design and live so climate impacts cause less harm', 'Ignoring weather forecasts', 'Building only on beaches', 'Turning off all smoke alarms'],
        HIGH_SCHOOL: ['Lower-income areas often have fewer trees, older housing and less ability to rebuild', 'Disasters affect everyone exactly the same', 'Only wealthy areas face storms', 'Fairness has nothing to do with buildings'],
        UNDERGRADUATE: ['A seawall that protects one property but sends water to neighbors', 'Planting shade trees', 'Raising electrical outlets', 'Making an emergency plan'],
        GRADUATE: ['They show up as damages that never occur', 'They are always larger than costs', 'They are paid by insurers in advance', 'They appear immediately on the balance sheet'],
        PHD: ['Many were derived from limited surveys in particular regions and then transferred elsewhere', 'They are updated daily from global data', 'They include every possible hazard', 'They are never used in loss models'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'A heat wave is several very hot days in a row, and it is important to stay cool and drink water.',
        MIDDLE_SCHOOL: 'Adaptation means adjusting designs and habits so climate changes cause less harm.',
        HIGH_SCHOOL: 'Resilience depends on resources, so protection needs to reach the people most at risk.',
        UNDERGRADUATE: 'Maladaptation reduces risk in one place while increasing it elsewhere or creating new problems.',
        GRADUATE: 'Avoided losses are invisible, so they must be estimated and discounted in benefit-cost analysis.',
        PHD: 'Transferring curves across regions with different construction practices introduces large uncertainty.',
      },
    },
  ],
}

export default expansion
