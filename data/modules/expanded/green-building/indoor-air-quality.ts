import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'green-building',
  moduleKey: 'indoor-air-quality',
  lessons: [
    {
      id: 'gb-iaq-1',
      title: 'Breathing Easy Indoors',
      content: {
        ELEMENTARY: `
<h2>Breathing Easy: Fresh Air Inside Buildings</h2>
<p>Take a big, deep breath. Ahh! The air you just breathed went all the way into your lungs. Most of us spend a lot of our day inside, at home, at school or in shops. That means the air inside buildings is really important for staying healthy, feeling happy and thinking clearly.</p>

<h3>What Is in Indoor Air?</h3>
<p>Air looks empty, but it carries tiny things you cannot see. Some come from outside, like pollen from flowers. Some come from inside, like dust, smoke from cooking, or smells from paints and cleaning sprays. When lots of people are in one room, the air also fills up with the breath they breathe out.</p>
<ul>
<li><strong>Fresh air:</strong> clean air from outside that comes into a building through windows or vents</li>
<li><strong>Dust:</strong> tiny bits of dirt, skin and fibers that float in the air and settle on things</li>
<li><strong>Mold:</strong> a fuzzy growth that can appear in damp places and make some people sneeze or cough</li>
<li><strong>Vent:</strong> an opening that lets air move in or out of a room</li>
<li><strong>Filter:</strong> a screen that catches dust and tiny bits as air passes through it</li>
</ul>

<h3>How Buildings Keep Air Fresh</h3>
<p>Good buildings let stale air out and bring fresh air in. Some do it with windows that open. Others use fans and vents that move air around all day long, with filters to catch dust. Kitchens and bathrooms often have fans to carry away steam and cooking smells.</p>

<h3>Why Fresh Air Matters</h3>
<p>When the air in a classroom gets stuffy, people can feel sleepy, get headaches or find it harder to pay attention. Fresh, clean air helps everyone feel awake and ready to learn. It also helps people with asthma and allergies breathe more easily.</p>

<h3>Air Helpers You Can Be</h3>
<ol>
<li>Open a window for a little while each day if the air outside is clean.</li>
<li>Turn on the fan when cooking or after a hot shower.</li>
<li>Help dust and clean so dust does not build up.</li>
<li>Take off your shoes at the door to keep outdoor dirt outside.</li>
<li>Tell a grown-up if you see mold or smell something strange.</li>
</ol>
<p>Clean air is invisible, but you can feel the difference!</p>
`,
        MIDDLE_SCHOOL: `
<h2>What Makes Indoor Air Healthy or Unhealthy?</h2>
<p>People in many countries spend most of their time indoors. Surprisingly, the air inside can sometimes contain more pollutants than the air outside, because pollutants from furniture, cooking, cleaning and people build up when air is not refreshed. Understanding where indoor pollution comes from is the first step to fixing it.</p>

<h3>Common Indoor Air Pollutants</h3>
<table>
<thead><tr><th>Pollutant</th><th>Where it comes from</th><th>Possible effects</th></tr></thead>
<tbody>
<tr><td>Dust and particles</td><td>Cooking, outdoor air, candles, worn materials</td><td>Irritates lungs, worsens asthma</td></tr>
<tr><td>VOCs</td><td>Paints, glues, new furniture, cleaning products</td><td>Headaches, eye and throat irritation</td></tr>
<tr><td>Carbon dioxide</td><td>People breathing out</td><td>Stuffiness, tiredness at high levels</td></tr>
<tr><td>Mold</td><td>Damp walls, leaks, poor ventilation</td><td>Allergies, coughing, asthma attacks</td></tr>
<tr><td>Carbon monoxide</td><td>Faulty gas heaters, stoves or car exhaust</td><td>Dangerous; can be deadly</td></tr>
<tr><td>Radon</td><td>Natural gas seeping up from soil and rock</td><td>Raises lung cancer risk over many years</td></tr>
</tbody>
</table>

<h3>Key Words</h3>
<ul>
<li><strong>Indoor air quality:</strong> how clean and healthy the air inside a building is</li>
<li><strong>Volatile organic compounds:</strong> chemicals that evaporate into the air from products such as paints and glues, often called VOCs</li>
<li><strong>Ventilation:</strong> replacing stale indoor air with fresh outdoor air</li>
<li><strong>Humidity:</strong> the amount of water vapor in the air</li>
<li><strong>Carbon monoxide detector:</strong> an alarm that warns people when a dangerous invisible gas is present</li>
<li><strong>Pollutant source:</strong> the thing that releases a pollutant into the air</li>
</ul>

<h3>Three Ways to Make Air Healthier</h3>
<ol>
<li><strong>Remove the source:</strong> choose low-VOC paints and products, fix leaks and avoid smoking indoors.</li>
<li><strong>Ventilate:</strong> bring in outdoor air and use exhaust fans in kitchens and bathrooms.</li>
<li><strong>Filter:</strong> use good filters in heating and cooling systems or portable air cleaners.</li>
</ol>

<h3>Balancing Energy and Air</h3>
<p>Green buildings are built to be airtight so they do not waste heat. But a tightly sealed building needs a planned way to bring in fresh air. Many use mechanical ventilation systems that swap stale air for fresh air while recovering heat from the outgoing air. That way the building stays both healthy and energy efficient.</p>

<h3>Why It Matters</h3>
<p>Healthy indoor air helps students concentrate, reduces sick days and is especially important for children, older people and anyone with asthma.</p>
`,
        HIGH_SCHOOL: `
<h2>Ventilation, Filtration and Source Control</h2>
<p>Indoor air quality, often shortened to IAQ, depends on a balance between pollutants released indoors or brought in from outside and the processes that remove them. Engineers manage IAQ with three main strategies, generally applied in order of preference: control sources, ventilate to dilute and remove what remains, and filter or clean the air.</p>

<h3>Source Control</h3>
<p>The most effective approach is to stop pollutants from entering the air in the first place. That means specifying low-emitting paints, adhesives, flooring and furniture, keeping buildings dry to prevent mold, sealing paths where soil gases such as radon could enter, venting combustion appliances outdoors, and placing air intakes away from traffic and loading docks.</p>

<h3>Ventilation</h3>
<p>Ventilation dilutes pollutants with outdoor air and exhausts stale air. It can be natural, through windows and openings driven by wind and temperature differences, or mechanical, using fans and ducts. Many efficient buildings use heat recovery ventilation, where outgoing air warms or cools incoming air through a heat exchanger without mixing the two streams.</p>
<ul>
<li><strong>Natural ventilation:</strong> airflow driven by wind and buoyancy through openings, without fans</li>
<li><strong>Mechanical ventilation:</strong> airflow provided by fans and ducts at a controlled rate</li>
<li><strong>Heat recovery ventilator:</strong> a unit that transfers heat between outgoing and incoming air to save energy</li>
<li><strong>Air changes per hour:</strong> how many times the volume of air in a space is replaced each hour</li>
<li><strong>Local exhaust:</strong> a fan that removes pollutants right where they are produced, such as a range hood</li>
<li><strong>MERV rating:</strong> a scale that rates how well a filter captures particles of different sizes</li>
</ul>

<h3>Filtration</h3>
<p>Filters remove particles as air passes through. Higher MERV ratings capture more of the smallest particles, which are the ones that penetrate deepest into the lungs. HEPA filters capture an even higher share and are common in portable air cleaners and hospitals. Ordinary filters do not remove gases such as VOCs; activated carbon media can absorb some of them.</p>
<table>
<thead><tr><th>Strategy</th><th>Strengths</th><th>Trade-offs</th></tr></thead>
<tbody>
<tr><td>Source control</td><td>Prevents exposure entirely; low running cost</td><td>Requires careful product choices and maintenance</td></tr>
<tr><td>More outdoor air</td><td>Dilutes all indoor pollutants including CO2</td><td>Uses energy to heat or cool; brings in outdoor pollution</td></tr>
<tr><td>Higher-efficiency filters</td><td>Removes fine particles and some airborne germs</td><td>Higher fan energy and filter replacement costs</td></tr>
<tr><td>Portable air cleaners</td><td>Flexible, easy to add to existing rooms</td><td>Limited coverage; noise; must be sized for room</td></tr>
</tbody>
</table>

<h3>Measuring Indoor Air</h3>
<p>Carbon dioxide sensors are widely used as an indicator of ventilation: high CO2 levels suggest that not enough fresh air is reaching occupants. Particle sensors, VOC sensors and humidity sensors provide a fuller picture. Relative humidity kept in a moderate range helps limit mold and dust mites while keeping people comfortable.</p>

<h3>Real-World Applications</h3>
<p>Schools, offices and hospitals increasingly monitor IAQ continuously and display results to occupants. Wildfire smoke events have shown the value of buildings that can reduce outdoor air intake and run high-efficiency filtration when outdoor air is polluted.</p>
`,
        UNDERGRADUATE: `
<h2>IAQ Standards, Monitoring and HVAC Design</h2>
<p>Designing for indoor air quality means translating health goals into engineering quantities: airflow rates, filter efficiencies, pollutant emission limits and sensor setpoints. This lesson introduces the mass-balance reasoning behind ventilation design, the role of standards, and how monitoring closes the loop between design intent and actual conditions.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Mass balance:</strong> the principle that indoor concentration depends on emission rates, outdoor air supply, filtration and deposition</li>
<li><strong>Ventilation rate procedure:</strong> a prescriptive method that sets minimum outdoor airflow per person and per unit floor area</li>
<li><strong>IAQ procedure:</strong> a performance method that designs airflow to keep specific contaminants below target concentrations</li>
<li><strong>Ventilation effectiveness:</strong> how well supplied air actually reaches the breathing zone of occupants</li>
<li><strong>Clean air delivery rate:</strong> the effective flow of particle-free air an air cleaner provides</li>
<li><strong>Steady-state concentration:</strong> the level a pollutant reaches when its sources and removal processes balance</li>
</ul>

<h3>Thinking in Mass Balance</h3>
<p>For a well-mixed room, the steady-state concentration of a pollutant equals its outdoor contribution plus its indoor emission rate divided by the total removal rate. Removal comes from outdoor air ventilation, filtration of recirculated air and natural deposition onto surfaces. This shows why doubling outdoor air roughly halves the indoor-generated portion of a pollutant, and why filtration can be an energy-efficient complement to ventilation for particles. For CO2, which filters do not remove, only ventilation and occupancy matter, which is why CO2 is useful as a ventilation indicator but not a complete measure of air quality.</p>

<h3>Standards and Guidelines</h3>
<p>Ventilation standards, such as those published by professional engineering societies, specify minimum outdoor air rates for different space types. Health agencies publish guideline values for pollutants such as fine particles, ozone and certain VOCs. Green building rating systems reference these documents and often add credits for low-emitting materials, enhanced filtration, IAQ testing before occupancy and continuous monitoring.</p>

<h3>HVAC Design Choices</h3>
<table>
<thead><tr><th>Design choice</th><th>IAQ effect</th><th>Energy effect</th></tr></thead>
<tbody>
<tr><td>Dedicated outdoor air system</td><td>Delivers measured outdoor air independent of heating and cooling loads</td><td>Allows efficient heat recovery and smaller fans</td></tr>
<tr><td>Energy recovery</td><td>Neutral if leakage between streams is controlled</td><td>Large reduction in conditioning energy</td></tr>
<tr><td>Demand-controlled ventilation</td><td>Adjusts outdoor air to occupancy</td><td>Saves energy in variably occupied spaces</td></tr>
<tr><td>Displacement ventilation</td><td>Can improve ventilation effectiveness in the breathing zone</td><td>Lower fan energy in suitable spaces</td></tr>
<tr><td>High-efficiency filters</td><td>Lower fine particle exposure</td><td>Higher pressure drop and fan energy</td></tr>
</tbody>
</table>

<h3>Monitoring and Verification</h3>
<p>Low-cost sensors make continuous monitoring practical, but their accuracy varies, especially for particles and VOCs. Sensors need calibration, proper placement in the breathing zone and data review. Monitoring often reveals problems that design calculations miss, such as dampers stuck closed, schedules that shut off ventilation too early, or rooms that are more crowded than planned.</p>

<h3>Design Checklist</h3>
<ol>
<li>Inventory likely pollutant sources and specify low-emitting materials.</li>
<li>Calculate minimum outdoor air rates using the relevant standard.</li>
<li>Select filtration appropriate to outdoor air quality and occupant risk.</li>
<li>Locate intakes away from exhaust, traffic and other contaminant sources.</li>
<li>Plan for commissioning, sensor calibration and ongoing maintenance.</li>
</ol>
`,
        GRADUATE: `
<h2>IAQ, Health, Productivity and Building Performance</h2>
<p>Indoor air quality sits at the intersection of public health, building economics and energy policy. Because people spend most of their lives indoors, buildings strongly shape exposure to pollutants. At the graduate level, the questions shift from how to design ventilation to how to value its benefits, how to govern IAQ in practice, and how to resolve tensions with energy and climate goals.</p>

<h3>Health Evidence</h3>
<p>Well-established links exist between indoor exposures and health: fine particles with cardiovascular and respiratory disease, radon with lung cancer, combustion products with respiratory symptoms, and dampness and mold with asthma. Airborne transmission of respiratory infections in poorly ventilated spaces gained wide attention during the COVID-19 pandemic, shifting ventilation from a comfort topic to a public health priority.</p>
<ul>
<li><strong>Exposure:</strong> contact between a person and a pollutant, determined by concentration and time spent in it</li>
<li><strong>Sick building syndrome:</strong> symptoms such as headaches and irritation that occupants link to time spent in a particular building</li>
<li><strong>Cognitive performance:</strong> measured mental abilities such as decision making, attention and memory</li>
<li><strong>Disability-adjusted life years:</strong> a metric combining years of life lost and years lived with illness</li>
<li><strong>Environmental justice:</strong> the fair distribution of environmental burdens and benefits across communities</li>
<li><strong>Building performance evaluation:</strong> systematic assessment of how a building actually performs in use</li>
</ul>

<h3>Productivity and Economics</h3>
<p>Controlled studies have found that higher ventilation rates and lower levels of CO2 and VOCs are associated with better performance on cognitive tests, and studies in schools have linked ventilation to student performance and absence. Effect sizes vary between studies and settings. Because staff salaries in offices far exceed energy costs, even small productivity effects can outweigh the energy cost of better ventilation, which strengthens the business case. Translating laboratory findings into reliable estimates for real buildings remains challenging.</p>

<h3>Tensions and Trade-offs</h3>
<table>
<thead><tr><th>Goal</th><th>Potential conflict</th><th>Resolution strategy</th></tr></thead>
<tbody>
<tr><td>Energy efficiency</td><td>Reducing outdoor air saves energy but raises indoor pollutants</td><td>Heat recovery and demand control instead of lower minimum rates</td></tr>
<tr><td>Airtight envelopes</td><td>Less accidental infiltration of fresh air</td><td>Planned mechanical ventilation in tight buildings</td></tr>
<tr><td>Electrification</td><td>None; removing gas stoves reduces combustion pollutants</td><td>Pair with good kitchen exhaust</td></tr>
<tr><td>Polluted outdoor air</td><td>More ventilation brings in outdoor pollution</td><td>Filtration and smart control during smoke or smog events</td></tr>
</tbody>
</table>

<h3>Governance and Equity</h3>
<p>Unlike outdoor air, indoor air in most jurisdictions is lightly regulated outside workplaces and specific hazards. Responsibility is split among building owners, designers, operators, tenants and public health agencies. Low-income households are more likely to live in housing with dampness, combustion appliances, nearby traffic and limited ventilation, making IAQ an environmental justice concern. Schools in under-resourced districts may defer maintenance of ventilation systems.</p>

<h3>Evaluating Building Performance</h3>
<ol>
<li>Define health-relevant metrics, not just compliance with airflow rates.</li>
<li>Monitor key pollutants and ventilation in occupied conditions.</li>
<li>Survey occupants about symptoms, comfort and perceived air quality.</li>
<li>Value health and productivity outcomes alongside energy costs.</li>
<li>Identify institutional responsibility for maintenance and response.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in Indoor Air Quality</h2>
<p>Indoor air research has expanded from a narrow focus on ventilation rates to a broad science of indoor chemistry, microbiology, exposure and health. Advances in instrumentation and sensors have revealed that indoor environments are chemically and biologically dynamic. This lesson surveys the research frontiers, methods and debates relevant to doctoral study.</p>

<h3>Indoor Chemistry</h3>
<p>Indoor air is a reactive environment. Ozone entering from outdoors reacts with terpenes from cleaning products and fragrances, and with skin oils on occupants and surfaces, producing secondary pollutants including aldehydes and ultrafine particles. Surfaces act as large reservoirs that absorb and later re-release semivolatile compounds. Cooking and cleaning generate bursts of particles and reactive gases.</p>
<ul>
<li><strong>Secondary organic aerosol:</strong> particles formed in air when gaseous compounds react and condense</li>
<li><strong>Semivolatile organic compounds:</strong> chemicals that partition between air, dust and surfaces, such as some plasticizers and flame retardants</li>
<li><strong>Surface reservoir:</strong> indoor materials that absorb chemicals and release them over long periods</li>
<li><strong>Bioaerosol:</strong> airborne particles of biological origin such as bacteria, viruses, fungal spores and pollen</li>
<li><strong>Demand-controlled ventilation:</strong> varying outdoor air supply in response to measured occupancy or carbon dioxide</li>
<li><strong>Exposome:</strong> the totality of environmental exposures a person experiences over a lifetime</li>
</ul>

<h3>Emerging Contaminants</h3>
<p>Research attention has grown on chemicals such as per- and polyfluoroalkyl substances in consumer products and dust, phthalates, flame retardants, and microplastics. Many are found in dust and on surfaces as well as in air, so exposure routes include ingestion and skin contact, not only inhalation. Air cleaning technologies that use reactive chemistry, such as some ionizers, may generate byproducts, and their net effects are debated.</p>

<h3>Ventilation Optimization</h3>
<table>
<thead><tr><th>Approach</th><th>Research question</th></tr></thead>
<tbody>
<tr><td>Demand-controlled ventilation using CO2</td><td>How well does CO2 track pollutants not emitted by people?</td></tr>
<tr><td>Multi-pollutant control</td><td>How should controls weigh particles, VOCs, CO2 and humidity together?</td></tr>
<tr><td>Model predictive control</td><td>Can forecasts of occupancy and outdoor air improve IAQ and energy together?</td></tr>
<tr><td>Infection risk-based ventilation</td><td>What equivalent clean air rates reduce airborne transmission meaningfully?</td></tr>
<tr><td>Personalized ventilation</td><td>Can delivering air to the breathing zone reduce total airflow needs?</td></tr>
</tbody>
</table>

<h3>Methods</h3>
<p>Researchers combine high-resolution chemical instrumentation, low-cost sensor networks, computational fluid dynamics, multizone airflow models and epidemiological designs. Chamber studies offer control but limited realism; field studies capture real behavior but face confounding. Low-cost sensors enable large datasets but raise questions about calibration drift and cross-sensitivity. Linking measured exposures to health outcomes requires careful study design, since people move between many indoor environments.</p>

<h3>Contested Questions</h3>
<p>How large and robust are the cognitive effects of CO2 itself, as distinct from co-varying pollutants? Should ventilation standards shift from per-person airflow rates to performance targets for specific pollutants? How should standards balance infection control, energy and carbon? Are air cleaning technologies that rely on chemical reactions safe at scale? Each question involves uncertain evidence and policy judgments.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Characterizing indoor chemical transformations and their health relevance in real buildings.</li>
<li>Robust, calibrated sensor networks and methods to handle sensor drift.</li>
<li>Control algorithms that optimize multiple pollutants, comfort and energy jointly.</li>
<li>Exposure studies that capture total exposure across homes, schools, workplaces and transport.</li>
<li>Evidence on IAQ inequities and interventions in low-income and informal housing.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'gbiaq1',
      question: {
        ELEMENTARY: 'What helps keep indoor air healthy?',
        MIDDLE_SCHOOL: 'What are VOCs?',
        HIGH_SCHOOL: 'What does a MERV rating describe?',
        UNDERGRADUATE: 'Why is CO2 useful as a ventilation indicator but not a complete measure of air quality?',
        GRADUATE: 'Why can small productivity effects outweigh ventilation energy costs in offices?',
        PHD: 'What is demand-controlled ventilation?',
      },
      options: {
        ELEMENTARY: ['Bringing in fresh air from outside', 'Keeping every window sealed forever', 'Spraying lots of air freshener', 'Letting dust pile up'],
        MIDDLE_SCHOOL: ['Chemicals that evaporate into the air from products like paints and glues', 'A type of window', 'A kind of fan', 'Clean outdoor air'],
        HIGH_SCHOOL: ['How well a filter captures particles of different sizes', 'Air speed in a duct', 'Room humidity', 'Room temperature'],
        UNDERGRADUATE: ['Filters do not remove CO2, so it reflects ventilation and occupancy but not other pollutants', 'CO2 is the only indoor pollutant', 'CO2 cannot be measured', 'CO2 is removed by every filter'],
        GRADUATE: ['Staff salaries far exceed energy costs', 'Energy is free', 'Ventilation reduces salaries', 'Offices use no energy'],
        PHD: ['Varying outdoor air supply in response to measured occupancy or CO2', 'Fixed ventilation at all times', 'Turning ventilation off at night only', 'Random airflow changes'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Fresh outdoor air pushes stale air out and helps everyone breathe easily.',
        MIDDLE_SCHOOL: 'VOCs are volatile organic compounds released by products such as paints, glues and new furniture.',
        HIGH_SCHOOL: 'Higher MERV ratings capture more of the smallest particles.',
        UNDERGRADUATE: 'CO2 tracks people and ventilation, but particles and VOCs can be high even when CO2 is low.',
        GRADUATE: 'Because people cost far more than energy, even small performance gains can justify better ventilation.',
        PHD: 'It matches airflow to need, but CO2 may not track pollutants that people do not emit.',
      },
    },
    {
      id: 'gbiaq2',
      question: {
        ELEMENTARY: 'What can grow in damp places and make people sneeze?',
        MIDDLE_SCHOOL: 'Where does radon come from?',
        HIGH_SCHOOL: 'Which strategy is generally preferred first for good IAQ?',
        UNDERGRADUATE: 'What is a dedicated outdoor air system?',
        GRADUATE: 'Why is IAQ an environmental justice concern?',
        PHD: 'What happens when ozone meets terpenes from cleaning products indoors?',
      },
      options: {
        ELEMENTARY: ['Sunshine', 'Mold', 'Rainbows', 'Snowflakes'],
        MIDDLE_SCHOOL: ['Air fresheners', 'Natural gas seeping up from soil and rock', 'Cooking oil', 'Pencils'],
        HIGH_SCHOOL: ['Opening doors at random', 'Source control to stop pollutants entering the air', 'Adding more furniture', 'Turning off fans'],
        UNDERGRADUATE: ['A window that opens automatically', 'A system delivering measured outdoor air independent of heating and cooling loads', 'A portable fan', 'A gas furnace'],
        GRADUATE: ['Indoor air affects everyone equally', 'Low-income households more often live with dampness, combustion appliances and traffic', 'Only wealthy homes have IAQ problems', 'IAQ is fully regulated everywhere'],
        PHD: ['Nothing happens', 'They react to form secondary pollutants such as aldehydes and ultrafine particles', 'They produce pure oxygen', 'They cancel each other out completely'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Mold is a fuzzy growth in damp places that can make some people sneeze or cough.',
        MIDDLE_SCHOOL: 'Radon is a natural gas from soil and rock that can build up in basements.',
        HIGH_SCHOOL: 'Stopping pollutants at the source prevents exposure entirely and costs little to run.',
        UNDERGRADUATE: 'Separating ventilation from conditioning lets designers deliver and verify outdoor air directly.',
        GRADUATE: 'Housing conditions concentrate indoor exposures among lower-income households.',
        PHD: 'Indoor chemistry turns these reactants into secondary pollutants that may matter for health.',
      },
    },
    {
      id: 'gbiaq3',
      question: {
        ELEMENTARY: 'When should you turn on the kitchen fan?',
        MIDDLE_SCHOOL: 'How do green buildings stay airtight and still have fresh air?',
        HIGH_SCHOOL: 'What does a heat recovery ventilator do?',
        UNDERGRADUATE: 'What is ventilation effectiveness?',
        GRADUATE: 'How can airtight energy-efficient envelopes stay healthy?',
        PHD: 'What are semivolatile organic compounds?',
      },
      options: {
        ELEMENTARY: ['When you go to sleep', 'When reading a book', 'When cooking', 'When playing outside'],
        MIDDLE_SCHOOL: ['They never let air in', 'They leave every door open', 'They use mechanical ventilation that swaps stale air for fresh air while recovering heat', 'They use more air freshener'],
        HIGH_SCHOOL: ['Burns gas to heat air', 'Adds moisture to air only', 'Transfers heat between outgoing and incoming air without mixing them', 'Filters water'],
        UNDERGRADUATE: ['The color of the air ducts', 'The price of a fan', 'How well supplied air reaches occupants breathing zone', 'The number of windows'],
        GRADUATE: ['By lowering outdoor air rates', 'By removing all vents', 'With planned mechanical ventilation', 'By sealing kitchens'],
        PHD: ['Gases that never touch surfaces', 'Pure metals', 'Chemicals that partition between air, dust and surfaces', 'Only outdoor pollutants'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'The fan carries away smoke and smells from cooking.',
        MIDDLE_SCHOOL: 'Mechanical ventilation with heat recovery keeps air fresh without wasting heat.',
        HIGH_SCHOOL: 'An HRV saves energy by pre-warming or pre-cooling incoming air with outgoing air.',
        UNDERGRADUATE: 'Air that short-circuits from supply to exhaust does little for occupants, so effectiveness matters.',
        GRADUATE: 'Tight buildings need intentional ventilation because accidental leakage is low.',
        PHD: 'SVOCs such as some plasticizers move between air, dust and surfaces, creating several exposure routes.',
      },
    },
    {
      id: 'gbiaq4',
      question: {
        ELEMENTARY: 'How can you keep outdoor dirt out of the house?',
        MIDDLE_SCHOOL: 'Which gas from faulty heaters is very dangerous?',
        HIGH_SCHOOL: 'What do ordinary particle filters NOT remove well?',
        UNDERGRADUATE: 'In a well-mixed room, what does doubling outdoor air do to the indoor-generated part of a pollutant?',
        GRADUATE: 'Which pollutant is well established as a cause of lung cancer indoors?',
        PHD: 'Why is linking indoor exposures to health outcomes difficult?',
      },
      options: {
        ELEMENTARY: ['Jump on the bed', 'Open the fridge', 'Wear muddy boots inside', 'Take off your shoes at the door'],
        MIDDLE_SCHOOL: ['Oxygen', 'Water vapor', 'Nitrogen', 'Carbon monoxide'],
        HIGH_SCHOOL: ['Dust', 'Pollen', 'Large particles', 'Gases such as VOCs'],
        UNDERGRADUATE: ['Doubles it', 'Leaves it unchanged', 'Makes it zero', 'Roughly halves it'],
        GRADUATE: ['Water vapor', 'Oxygen', 'Nitrogen', 'Radon'],
        PHD: ['Indoor air never changes', 'Sensors are perfectly accurate', 'Health is not affected by air', 'People move between many environments, and studies face confounding'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Leaving shoes at the door keeps dirt and dust from being tracked inside.',
        MIDDLE_SCHOOL: 'Carbon monoxide is invisible and can be deadly, which is why detectors are important.',
        HIGH_SCHOOL: 'Particle filters do not capture gases; activated carbon can absorb some VOCs.',
        UNDERGRADUATE: 'Concentration from indoor sources is emission rate divided by removal rate, so doubling ventilation roughly halves it.',
        GRADUATE: 'Radon from soil and rock raises lung cancer risk over long exposure.',
        PHD: 'Total exposure spans homes, schools, workplaces and transport, complicating attribution.',
      },
    },
    {
      id: 'gbiaq5',
      question: {
        ELEMENTARY: 'How can stuffy air make people feel?',
        MIDDLE_SCHOOL: 'What is ventilation?',
        HIGH_SCHOOL: 'What can buildings do during wildfire smoke events?',
        UNDERGRADUATE: 'What do sensors often reveal that design calculations miss?',
        GRADUATE: 'What is sick building syndrome?',
        PHD: 'What is a concern with air cleaners that use reactive chemistry?',
      },
      options: {
        ELEMENTARY: ['Sleepy or headachy', 'Super strong', 'Taller', 'Invisible'],
        MIDDLE_SCHOOL: ['Replacing stale indoor air with fresh outdoor air', 'Painting walls', 'Heating water', 'Turning off lights'],
        HIGH_SCHOOL: ['Reduce outdoor air intake and run high-efficiency filtration', 'Open every window wide', 'Turn off all filters', 'Burn candles indoors'],
        UNDERGRADUATE: ['Dampers stuck closed or schedules that shut ventilation off too early', 'That ducts are always perfect', 'That rooms are always empty', 'That filters never need changing'],
        GRADUATE: ['Symptoms occupants link to time spent in a particular building', 'A disease of plants', 'A broken elevator', 'A type of building code'],
        PHD: ['They may generate byproducts, so net effects are debated', 'They always remove every pollutant', 'They use no electricity', 'They only work outdoors'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Stuffy air can make it harder to stay awake and pay attention.',
        MIDDLE_SCHOOL: 'Ventilation brings fresh air in and sends stale air out.',
        HIGH_SCHOOL: 'When outdoor air is polluted, limiting intake and filtering helps protect occupants.',
        UNDERGRADUATE: 'Monitoring catches operational faults and crowding that design assumptions overlooked.',
        GRADUATE: 'Symptoms like headaches and irritation that ease after leaving a building suggest an IAQ problem.',
        PHD: 'Some reactive cleaners may create secondary pollutants, so their safety at scale is contested.',
      },
    },
  ],
}

export default expansion
