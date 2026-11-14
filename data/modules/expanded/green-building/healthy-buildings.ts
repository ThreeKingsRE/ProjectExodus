import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'green-building',
  moduleKey: 'healthy-buildings',
  lessons: [
    {
      id: 'gb-health-1',
      title: 'Buildings for Health',
      content: {
        ELEMENTARY: `
<h2>Buildings That Help Us Stay Healthy</h2>
<p>Think about all the places you spend your day: your home, your classroom, the library, maybe a gym. Most of our time is spent inside buildings! That means the buildings we live and learn in can help us feel strong and healthy, or they can make us feel tired and grumpy. Let's discover what makes a building a healthy place to be.</p>

<h3>Fresh Air</h3>
<p>We breathe all day long. When lots of people are in one room with the windows shut, the air gets stuffy. Healthy buildings bring in fresh air from outside and push stale air out. That helps us stay awake and keeps germs from building up.</p>
<ul>
<li><strong>Fresh air:</strong> clean air from outside that helps us breathe easily and think clearly</li>
<li><strong>Stuffy air:</strong> old air in a closed room that can make us feel sleepy</li>
<li><strong>Fan:</strong> a machine that moves air around a room or blows it in and out</li>
</ul>

<h3>Light, Water and Quiet</h3>
<p>Healthy buildings have windows that let in sunlight, which helps our bodies know when to be awake. They have clean water to drink and wash our hands. They are not too hot, not too cold, and not too noisy, so we can rest, play and learn.</p>
<ul>
<li><strong>Daylight:</strong> light from the sky that comes in through windows and helps us feel awake</li>
<li><strong>Clean water:</strong> water that is safe to drink and wash with</li>
<li><strong>Quiet:</strong> a calm sound level that lets us listen, rest and concentrate</li>
</ul>

<h3>Healthy Habits Inside</h3>
<p>Buildings can help us move too. Easy-to-find stairs invite us to climb, and water fountains remind us to drink. Outdoor play areas get us running around.</p>
<ol>
<li>Open a window for a few minutes when a room feels stuffy, if a grown-up says it is okay.</li>
<li>Use the stairs when you can.</li>
<li>Drink water from a fountain or bottle during the day.</li>
<li>Wash your hands with soap and water.</li>
<li>Tell a grown-up if a room smells strange or feels too hot or cold.</li>
</ol>

<h3>Think About It</h3>
<p>Which room in your school makes you feel best? Is it bright? Is it quiet? Does it have fresh air? You are already a healthy building detective!</p>
`,
        MIDDLE_SCHOOL: `
<h2>What Makes a Building Healthy?</h2>
<p>In many countries, people spend roughly nine out of every ten hours indoors. That makes buildings one of the biggest influences on our health, even though we rarely think about them. A healthy building is designed and run so that the air, light, water, temperature and sound inside help people feel well rather than making them sick or tired.</p>

<h3>The Main Ingredients of a Healthy Building</h3>
<table>
<thead><tr><th>Ingredient</th><th>What a healthy building does</th><th>What can go wrong</th></tr></thead>
<tbody>
<tr><td>Air</td><td>Brings in plenty of fresh outdoor air and filters it</td><td>Stuffy rooms, headaches, spread of germs</td></tr>
<tr><td>Light</td><td>Uses daylight and good electric lighting</td><td>Eye strain, poor sleep, low mood</td></tr>
<tr><td>Water</td><td>Delivers clean, safe drinking water</td><td>Lead from old pipes, bacteria in unused pipes</td></tr>
<tr><td>Temperature</td><td>Keeps rooms comfortable all year</td><td>Overheating, cold drafts, trouble focusing</td></tr>
<tr><td>Sound</td><td>Controls noise and echo</td><td>Hard to hear teachers, stress, poor sleep</td></tr>
<tr><td>Movement</td><td>Makes stairs and walking routes inviting</td><td>Sitting all day with little activity</td></tr>
</tbody>
</table>

<h3>Key Words</h3>
<ul>
<li><strong>Ventilation:</strong> replacing stale indoor air with fresh outdoor air</li>
<li><strong>Air filter:</strong> a screen of fibers that traps dust, pollen and tiny particles from the air</li>
<li><strong>Thermal comfort:</strong> feeling neither too hot nor too cold inside a building</li>
<li><strong>Acoustics:</strong> how sound travels and echoes inside a space</li>
<li><strong>Sick building syndrome:</strong> when many people feel unwell in a building, often from poor air, and feel better after leaving</li>
<li><strong>Carbon dioxide sensor:</strong> a device that measures the gas we breathe out, used to check if a room needs more fresh air</li>
</ul>

<h3>How Scientists Check a Building</h3>
<p>Every time we breathe out, we add carbon dioxide to the air. When a classroom is crowded and not well ventilated, carbon dioxide levels climb. A simple sensor can show when it is time to bring in more fresh air. Building experts also use light meters, thermometers and sound meters to check if spaces are comfortable.</p>

<h3>Rating Healthy Buildings</h3>
<p>Some rating systems focus specifically on health. The WELL Building Standard, for example, scores buildings on things like air, water, light, movement, comfort and mental wellbeing. Rating systems give designers a checklist and let people compare buildings.</p>

<h3>Why It Matters</h3>
<p>Healthy buildings help students learn, workers focus and patients heal. They can also save energy when designed well, for example by using daylight and efficient ventilation that recovers heat from outgoing air.</p>
`,
        HIGH_SCHOOL: `
<h2>Designing Healthy Buildings: Air, Light, Sound and Comfort</h2>
<p>Building design has always been connected to public health. Better sanitation and ventilation in the past helped reduce diseases in crowded cities. Today, healthy building design looks at the whole indoor environment, recognizing that air quality, lighting, acoustics, thermal comfort and opportunities for movement all affect how people think, feel and recover.</p>

<h3>Ventilation and Filtration</h3>
<p>Ventilation dilutes indoor pollutants, including the carbon dioxide and moisture we exhale, chemicals released by furniture and cleaning products, and airborne germs. Filtration removes particles from air that is recirculated or brought in from outside.</p>
<ul>
<li><strong>Air change rate:</strong> how many times per hour the air in a room is replaced with outdoor or cleaned air</li>
<li><strong>Mechanical ventilation:</strong> fans and ducts that move air through a building in a controlled way</li>
<li><strong>Natural ventilation:</strong> using windows, vents and wind or temperature differences to move air</li>
<li><strong>Heat recovery ventilator:</strong> a device that transfers heat between outgoing and incoming air to save energy</li>
<li><strong>Particulate matter:</strong> tiny solid or liquid particles in the air that can be inhaled deep into the lungs</li>
</ul>
<p>There is a trade-off: more outdoor air improves air quality but takes energy to heat or cool. Heat recovery helps resolve this, letting buildings ventilate well while losing less energy.</p>

<h3>Lighting</h3>
<p>Daylight supports the body's internal clock and improves mood and visual comfort. Good lighting design brings in daylight while controlling glare, and uses electric lighting that is bright enough for tasks without flicker.</p>

<h3>Acoustics</h3>
<p>Noise from traffic, equipment and other people can cause stress and make it hard to concentrate or understand speech. Designers use sound-absorbing ceilings, insulation in walls and careful layout to keep noisy and quiet activities apart.</p>

<h3>Comparing Ventilation Approaches</h3>
<table>
<thead><tr><th>Approach</th><th>Advantages</th><th>Disadvantages</th></tr></thead>
<tbody>
<tr><td>Natural ventilation</td><td>Low energy, occupant control, connection to outdoors</td><td>Depends on weather, noise and outdoor pollution can enter</td></tr>
<tr><td>Mechanical ventilation</td><td>Reliable airflow, filtration possible</td><td>Uses fan energy, needs maintenance</td></tr>
<tr><td>Mechanical with heat recovery</td><td>Good air with lower heating and cooling losses</td><td>Higher upfront cost, needs airtight building</td></tr>
<tr><td>Mixed mode</td><td>Uses windows when mild, fans when needed</td><td>More complex controls</td></tr>
</tbody>
</table>

<h3>Health-Focused Rating Systems</h3>
<p>The WELL Building Standard is a rating system focused on human health and wellbeing. Its concepts include air, water, nourishment, light, movement, thermal comfort, sound, materials, mind and community. Fitwel is another health-focused certification. These systems complement energy-focused green building ratings.</p>

<h3>Real-World Solutions</h3>
<ol>
<li>Install carbon dioxide monitors in classrooms to guide ventilation.</li>
<li>Upgrade to higher-efficiency filters where equipment can handle them.</li>
<li>Add acoustic panels in noisy cafeterias and gyms.</li>
<li>Make stairs bright, visible and pleasant to encourage walking.</li>
<li>Flush and test water systems in buildings that have been closed for long periods.</li>
</ol>
`,
        UNDERGRADUATE: `
<h2>Healthy Building Standards, Metrics and Design Strategies</h2>
<p>Healthy building practice treats occupant health as a primary design objective alongside energy, cost and function. It draws on building science, environmental health and epidemiology. This lesson examines the main exposure pathways, the metrics used to evaluate indoor environments, and how health-focused certification systems such as WELL translate evidence into design requirements.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Indoor environmental quality:</strong> the combined conditions of air, thermal environment, lighting and acoustics experienced by occupants</li>
<li><strong>Exposure pathway:</strong> the route by which a hazard reaches a person, such as inhalation, ingestion or skin contact</li>
<li><strong>Performance-based requirement:</strong> a criterion based on measured outcomes, such as pollutant concentrations, rather than prescribed equipment</li>
<li><strong>Prescriptive requirement:</strong> a criterion that specifies particular features, products or design actions</li>
<li><strong>Source control:</strong> reducing pollutants at their origin, for example by selecting low-emitting materials</li>
<li><strong>Post-occupancy evaluation:</strong> systematic assessment of a building's performance and occupant experience after it is in use</li>
</ul>

<h3>The WELL Framework</h3>
<p>The WELL Building Standard organizes requirements into concepts covering air, water, nourishment, light, movement, thermal comfort, sound, materials, mind and community. Each concept contains preconditions that must be met and optimizations that earn points. A distinctive feature is performance verification: certification includes on-site testing of parameters such as air quality, water quality, light levels and acoustics, rather than relying solely on design documentation.</p>
<table>
<thead><tr><th>Concept</th><th>Example strategies</th><th>Example measurements</th></tr></thead>
<tbody>
<tr><td>Air</td><td>Enhanced filtration, ventilation, smoke-free policies</td><td>Particles, carbon dioxide, volatile organic compounds</td></tr>
<tr><td>Water</td><td>Water quality testing, accessible drinking water</td><td>Contaminants such as lead, microbial indicators</td></tr>
<tr><td>Light</td><td>Daylight access, circadian lighting design, glare control</td><td>Illuminance and light dose metrics</td></tr>
<tr><td>Thermal comfort</td><td>Individual controls, appropriate design conditions</td><td>Temperature, humidity, occupant surveys</td></tr>
<tr><td>Sound</td><td>Zoning, absorptive surfaces, sound isolation</td><td>Background noise and reverberation time</td></tr>
<tr><td>Mind and community</td><td>Restorative spaces, health policies, inclusive design</td><td>Mostly policy and survey based</td></tr>
</tbody>
</table>

<h3>Quantitative Reasoning</h3>
<p>Indoor carbon dioxide is a useful proxy for ventilation per person. Outdoor air contains a few hundred parts per million; occupied rooms rise above that baseline as people exhale. The steady-state rise is roughly proportional to the number of people divided by the outdoor air flow, so doubling the ventilation rate per person roughly halves the excess above outdoor levels. Carbon dioxide at typical indoor concentrations is mainly an indicator, not the primary hazard, although some studies suggest effects on decision-making at higher levels.</p>
<p>For airborne particles and pathogens, removal can come from outdoor air, filtration of recirculated air, or portable air cleaners. These can be combined into an equivalent clean air delivery rate, which allows designers to compare options on a common basis.</p>

<h3>Design Strategies by Pathway</h3>
<ol>
<li><strong>Inhalation:</strong> source control first, then ventilation, then filtration and air cleaning.</li>
<li><strong>Ingestion:</strong> safe drinking water, lead-free plumbing and management of stagnant water.</li>
<li><strong>Light exposure:</strong> daylight access and lighting tuned for both vision and the body clock.</li>
<li><strong>Noise exposure:</strong> site planning, envelope design and interior absorption.</li>
</ol>

<h3>Applied Checklist</h3>
<ol>
<li>Identify occupant groups and their vulnerabilities, such as children, older adults or patients.</li>
<li>Prioritize the largest exposures for the building type and location.</li>
<li>Set measurable targets and plan for verification testing.</li>
<li>Check that health measures align with energy goals, such as using heat recovery.</li>
<li>Plan operations, maintenance and ongoing monitoring after handover.</li>
</ol>
`,
        GRADUATE: `
<h2>Health-Focused Standards and Post-Pandemic Building Design</h2>
<p>The COVID-19 pandemic made the link between buildings and health visible to the public and to decision-makers in a way few previous events had. Questions about airborne transmission pushed ventilation and filtration from technical detail to boardroom priority. At the same time, health-focused certifications and investor interest in social performance have created new markets. This lesson examines how standards, policy and economics are reshaping building practice, and what tensions remain.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Airborne transmission:</strong> spread of infection through small respiratory particles that remain suspended and travel beyond close contact</li>
<li><strong>Equivalent clean air:</strong> the combined pathogen-free air delivered by outdoor ventilation, filtration and air cleaning, expressed as one flow rate</li>
<li><strong>Epidemic operating mode:</strong> a building operating strategy that increases ventilation and filtration during periods of high infection risk</li>
<li><strong>Health co-benefit:</strong> a health improvement that arises from a measure adopted mainly for another purpose, such as energy efficiency</li>
<li><strong>Social dimension of investment:</strong> the part of environmental, social and governance evaluation that considers effects on people, including health</li>
<li><strong>Building water management plan:</strong> a plan to control hazards such as Legionella bacteria in a building's water system</li>
</ul>

<h3>Post-Pandemic Design Shifts</h3>
<table>
<thead><tr><th>Area</th><th>Shift in practice</th><th>Tension or cost</th></tr></thead>
<tbody>
<tr><td>Ventilation</td><td>Higher outdoor air rates and attention to air distribution</td><td>Energy use in extreme climates</td></tr>
<tr><td>Filtration</td><td>Higher-efficiency filters in central systems</td><td>Fan energy, equipment capacity limits</td></tr>
<tr><td>Supplemental air cleaning</td><td>Portable filters and other technologies</td><td>Variable evidence and quality for some technologies</td></tr>
<tr><td>Monitoring</td><td>Carbon dioxide and particle sensors visible to occupants</td><td>Data interpretation, sensor accuracy, maintenance</td></tr>
<tr><td>Water systems</td><td>Flushing and management after long closures</td><td>Staff capacity, water use</td></tr>
<tr><td>Space planning</td><td>Flexible layouts and outdoor spaces</td><td>Reduced density versus efficient use of space</td></tr>
</tbody>
</table>

<h3>Standards Landscape</h3>
<p>Ventilation standards set minimum outdoor air rates mainly for comfort and odor control, not infection control. Health-focused certifications like WELL and Fitwel add requirements across many domains, with WELL emphasizing on-site performance verification. Professional bodies and public health agencies issued guidance during the pandemic, and there is ongoing work to define infection risk mitigation targets for ventilation. A recurring governance question is whether health targets should remain voluntary or be written into building codes, particularly for schools and care facilities.</p>

<h3>Economics</h3>
<p>Health interventions in buildings can be justified through avoided illness, improved cognitive performance and reduced absenteeism, but monetizing these benefits is uncertain. Energy costs of higher ventilation can be substantial in hot or cold climates, which is why heat and energy recovery, demand-controlled ventilation and efficient fans are central to reconciling health and climate goals. Certification costs and verification testing add overheads that larger owners can absorb more easily than small ones.</p>

<h3>Equity Considerations</h3>
<p>The burden of unhealthy buildings is uneven. Overcrowded housing, older schools with inadequate ventilation, and workplaces with few protections expose some groups far more than others. Voluntary certifications are concentrated in premium commercial buildings, so public policy, funding for school upgrades and housing standards are critical to extending benefits.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Specify health objectives and the populations affected.</li>
<li>Assess exposures and baseline performance with measurements.</li>
<li>Compare interventions on equivalent clean air, energy cost and maintenance burden.</li>
<li>Plan for operations, including staff training and sensor upkeep.</li>
<li>Track outcomes over time and adjust as conditions change.</li>
</ol>
`,
        PHD: `
<h2>Research on Building-Health Relationships</h2>
<p>Linking buildings to health outcomes is methodologically difficult. Exposures vary in space and time, people move among many environments, outcomes may appear years later, and building features cluster together with income, neighborhood and occupation. This lesson reviews approaches to measuring exposures and outcomes, evaluating interventions, and the debates that shape current research on healthy buildings.</p>

<h3>Measurement Concepts</h3>
<ul>
<li><strong>Exposure assessment:</strong> estimating the magnitude, duration and frequency of contact between people and environmental agents</li>
<li><strong>Personal monitoring:</strong> measuring exposures with wearable devices that follow individuals through their day</li>
<li><strong>Biomarker:</strong> a measurable biological indicator, such as a stress hormone or a chemical in urine, linked to exposure or effect</li>
<li><strong>Confounding:</strong> distortion of an apparent relationship by a third factor related to both exposure and outcome</li>
<li><strong>Cluster randomized trial:</strong> a trial that randomizes groups such as classrooms or buildings rather than individuals</li>
<li><strong>Exposure misclassification:</strong> error in assigning exposure levels, which can bias estimates of health effects</li>
</ul>

<h3>Study Designs and Their Limits</h3>
<table>
<thead><tr><th>Design</th><th>Typical use</th><th>Key limitation</th></tr></thead>
<tbody>
<tr><td>Controlled chamber studies</td><td>Effects of ventilation, temperature or pollutants on cognition and comfort</td><td>Short exposures, small samples, limited realism</td></tr>
<tr><td>Cross-sectional field studies</td><td>Associations between building conditions and symptoms</td><td>Confounding, cannot establish direction of effect</td></tr>
<tr><td>Cohort studies</td><td>Longer-term outcomes such as asthma development</td><td>Cost, attrition, exposure changes over time</td></tr>
<tr><td>Intervention trials</td><td>Air cleaners, ventilation upgrades in schools or homes</td><td>Blinding is hard, adherence varies</td></tr>
<tr><td>Natural experiments</td><td>Policy changes or retrofits affecting some buildings but not others</td><td>Comparability of groups, unmeasured differences</td></tr>
</tbody>
</table>

<h3>Biomarkers and Physiological Measures</h3>
<p>Researchers increasingly combine environmental sensors with physiological measures such as heart rate variability, sleep metrics and cortisol, along with cognitive tests. These offer mechanistic insight but raise problems: daily cycles, individual variability, the cost of repeated sampling and the challenge of interpreting short-term changes in terms of long-term health. Validating which measures predict meaningful outcomes is itself an open research task.</p>

<h3>Contested Questions</h3>
<ol>
<li><strong>Carbon dioxide effects:</strong> whether moderately elevated carbon dioxide directly affects cognition, or whether observed effects reflect co-varying pollutants, has produced mixed findings.</li>
<li><strong>Air cleaning technologies:</strong> evidence for mechanical filtration is relatively strong, while some newer technologies have less independent evaluation and possible byproducts.</li>
<li><strong>Thermal comfort models:</strong> whether standard comfort models adequately represent diverse populations, including older adults and different cultures, is debated.</li>
<li><strong>Certification and outcomes:</strong> whether certified buildings deliver measurably better health, beyond better documentation, is not well established.</li>
</ol>

<h3>Intervention Effectiveness</h3>
<p>Evaluating interventions requires attention to implementation fidelity. A filter upgrade does little if bypass leakage is high or systems run only part of the day. Sustained effectiveness depends on maintenance and occupant behavior, which suggests that interventions should be studied as socio-technical systems rather than isolated devices. Cost-effectiveness analyses must also account for energy penalties and their own health implications through outdoor emissions.</p>

<h3>Emerging Directions</h3>
<p>Dense, low-cost sensor networks and building management data enable large observational datasets, but sensor accuracy, calibration drift and data governance are significant concerns. Linking building data with health records raises privacy questions and requires careful ethics review. Indoor microbiome research explores how building design shapes microbial communities, with uncertain implications for health.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Large intervention trials in schools and housing with objective health endpoints.</li>
<li>Validated exposure models combining sensor data with time-activity patterns.</li>
<li>Assessment of health outcomes in certified versus non-certified buildings.</li>
<li>Methods to jointly optimize health, energy and climate outcomes.</li>
<li>Equity-focused research on populations with the highest indoor exposures.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: "gbhealthq1",
      question: {
        ELEMENTARY: "What do healthy buildings have?",
        MIDDLE_SCHOOL: "Roughly how much of their time do people in many countries spend indoors?",
        HIGH_SCHOOL: "What is the WELL Building Standard?",
        UNDERGRADUATE: "What is a distinctive feature of WELL certification?",
        GRADUATE: "Why did ventilation become a boardroom priority after COVID-19?",
        PHD: "What is confounding in building-health research?",
      },
      options: {
        ELEMENTARY: ["Fresh air and natural light", "Loud noises all day", "No windows at all", "Dark, stuffy rooms"],
        MIDDLE_SCHOOL: ["About nine out of every ten hours", "About one out of ten hours", "About half the time", "Almost never"],
        HIGH_SCHOOL: ["A health-focused building rating system", "A water company", "A lighting brand", "A paint color"],
        UNDERGRADUATE: ["On-site performance testing of air, water, light and sound", "It only reviews drawings", "It rates only energy use", "It has no requirements"],
        GRADUATE: ["Concern about airborne transmission of infection", "Fans became cheaper overnight", "Ventilation was banned before", "Windows stopped working"],
        PHD: ["Distortion of a relationship by a third factor linked to both exposure and outcome", "A type of air filter", "Measuring exposures with wearables", "Randomizing classrooms"],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: "Healthy buildings have fresh air, daylight, clean water and comfortable temperatures.",
        MIDDLE_SCHOOL: "We spend roughly nine out of ten hours indoors, so buildings strongly affect our health.",
        HIGH_SCHOOL: "WELL is a rating system focused on human health and wellbeing in buildings.",
        UNDERGRADUATE: "WELL includes performance verification, testing conditions on site rather than relying only on design documents.",
        GRADUATE: "Airborne transmission made ventilation and filtration visible as health measures.",
        PHD: "Building features cluster with income and neighborhood, so third factors can distort apparent effects.",
      },
    },
    {
      id: "gbhealthq2",
      question: {
        ELEMENTARY: "What can you do if a room feels stuffy?",
        MIDDLE_SCHOOL: "What can a carbon dioxide sensor tell us?",
        HIGH_SCHOOL: "What does a heat recovery ventilator do?",
        UNDERGRADUATE: "If ventilation per person doubles, what happens to the carbon dioxide excess above outdoor levels?",
        GRADUATE: "What is equivalent clean air?",
        PHD: "What is a cluster randomized trial?",
      },
      options: {
        ELEMENTARY: ["Close all doors tightly", "Open a window for a few minutes if a grown-up agrees", "Turn on more lamps", "Hide under the desk"],
        MIDDLE_SCHOOL: ["How loud the room is", "When a room needs more fresh air", "How bright the lights are", "How much water is used"],
        HIGH_SCHOOL: ["It heats water for showers", "It transfers heat between outgoing and incoming air", "It removes all noise", "It makes air stuffier"],
        UNDERGRADUATE: ["It doubles", "It roughly halves", "It stays exactly the same", "It drops to zero"],
        GRADUATE: ["Air from one brand of filter", "Combined pathogen-free air from ventilation, filtration and air cleaning as one flow rate", "Air that smells clean", "Outdoor air only"],
        PHD: ["A trial testing one person at a time", "A trial that randomizes groups such as classrooms or buildings", "A survey with no comparison", "A chamber study of one pollutant"],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: "Fresh air from outside helps clear stuffy air, as long as a grown-up says it is safe.",
        MIDDLE_SCHOOL: "We breathe out carbon dioxide, so rising levels show a room needs more ventilation.",
        HIGH_SCHOOL: "Heat recovery lets buildings ventilate well while losing less heating or cooling energy.",
        UNDERGRADUATE: "The excess is roughly proportional to people divided by outdoor air flow, so it about halves.",
        GRADUATE: "Equivalent clean air puts outdoor air, filtration and air cleaners on a common basis.",
        PHD: "Cluster trials randomize groups, which suits interventions that affect a whole room or building.",
      },
    },
    {
      id: "gbhealthq3",
      question: {
        ELEMENTARY: "How can a building help you move more?",
        MIDDLE_SCHOOL: "What is sick building syndrome?",
        HIGH_SCHOOL: "What is a disadvantage of natural ventilation?",
        UNDERGRADUATE: "What does source control mean?",
        GRADUATE: "Why are heat recovery and demand-controlled ventilation central after the pandemic?",
        PHD: "Why is the effect of moderate carbon dioxide on cognition contested?",
      },
      options: {
        ELEMENTARY: ["By hiding the stairs", "By locking the playground", "By having easy-to-find stairs and play areas", "By making hallways dark"],
        MIDDLE_SCHOOL: ["A disease only buildings catch", "A broken elevator", "When many people feel unwell in a building and better after leaving", "A crack in the wall"],
        HIGH_SCHOOL: ["It always uses the most energy", "It needs no windows", "It depends on weather and can let in noise and outdoor pollution", "It cannot move any air"],
        UNDERGRADUATE: ["Controlling the building's power source", "Choosing where water comes from", "Reducing pollutants at their origin, such as using low-emitting materials", "Hiding pollution sources from view"],
        GRADUATE: ["They are required in every country", "They make buildings louder", "They reconcile higher ventilation with energy and climate goals", "They remove the need for filters"],
        PHD: ["It has never been studied", "Carbon dioxide cannot be measured", "Findings are mixed and effects may reflect co-varying pollutants", "All studies agree on a large effect"],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: "Bright, easy-to-find stairs and outdoor play spaces invite us to move.",
        MIDDLE_SCHOOL: "Sick building syndrome describes symptoms linked to time in a building, often from poor air.",
        HIGH_SCHOOL: "Natural ventilation is low energy but relies on weather and can admit noise and outdoor pollution.",
        UNDERGRADUATE: "Source control removes or reduces pollutants before ventilation has to dilute them.",
        GRADUATE: "More outdoor air costs energy, so recovery and demand control limit that penalty.",
        PHD: "Studies disagree, and carbon dioxide often rises alongside other pollutants that could explain effects.",
      },
    },
    {
      id: "gbhealthq4",
      question: {
        ELEMENTARY: "Why is daylight good for us?",
        MIDDLE_SCHOOL: "Which problem can old pipes cause?",
        HIGH_SCHOOL: "What is particulate matter?",
        UNDERGRADUATE: "What is a post-occupancy evaluation?",
        GRADUATE: "What does a building water management plan help control?",
        PHD: "Why does implementation fidelity matter for filter upgrades?",
      },
      options: {
        ELEMENTARY: ["It makes us sleepy all day", "It makes rooms noisy", "It turns water cold", "It helps our bodies know when to be awake"],
        MIDDLE_SCHOOL: ["Too much daylight", "Echoes in the gym", "Cold drafts from windows", "Lead getting into drinking water"],
        HIGH_SCHOOL: ["A kind of building paint", "The weight of a wall", "A sound absorber", "Tiny particles in the air that can be inhaled deep into the lungs"],
        UNDERGRADUATE: ["A cost estimate before design", "A fire drill", "A zoning permit", "Assessing a building's performance and occupant experience once it is in use"],
        GRADUATE: ["Electricity prices", "Window cleaning schedules", "Parking demand", "Hazards such as Legionella bacteria in water systems"],
        PHD: ["Filters never wear out", "Fidelity only affects lighting", "Every installation works perfectly", "Bypass leakage or short run times can erase the expected benefit"],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: "Sunlight helps our body clock, so we feel awake in the day and sleepy at night.",
        MIDDLE_SCHOOL: "Old plumbing can contain lead, which can get into drinking water.",
        HIGH_SCHOOL: "Particulate matter is tiny particles that can reach deep into our lungs.",
        UNDERGRADUATE: "Post-occupancy evaluation checks how a building actually performs for its users.",
        GRADUATE: "Water management plans control risks like Legionella, especially after long closures.",
        PHD: "An intervention only works as installed and maintained, so fidelity shapes real effectiveness.",
      },
    },
    {
      id: "gbhealthq5",
      question: {
        ELEMENTARY: "What is a fan?",
        MIDDLE_SCHOOL: "What does thermal comfort mean?",
        HIGH_SCHOOL: "What can acoustic panels help with?",
        UNDERGRADUATE: "In what order does the inhalation strategy apply measures?",
        GRADUATE: "Why are voluntary health certifications not enough for equity?",
        PHD: "What is exposure misclassification?",
      },
      options: {
        ELEMENTARY: ["A machine that moves air around a room", "A type of window", "A water fountain", "A light bulb"],
        MIDDLE_SCHOOL: ["Feeling neither too hot nor too cold", "Having a warm blanket", "A broken heater", "Wearing a thick coat indoors"],
        HIGH_SCHOOL: ["Reducing noise and echo in spaces like cafeterias", "Making rooms brighter", "Heating water", "Cleaning the air of germs"],
        UNDERGRADUATE: ["Source control, then ventilation, then filtration and air cleaning", "Filtration only", "Ventilation, then nothing else", "Air cleaning before anything else, always"],
        GRADUATE: ["They are concentrated in premium commercial buildings", "They are banned in schools", "They cost nothing", "They apply to every home automatically"],
        PHD: ["Error in assigning exposure levels that can bias health estimates", "A labeling mistake on a filter box", "A kind of sensor", "A building code violation"],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: "Fans move air around a room or push air in and out.",
        MIDDLE_SCHOOL: "Thermal comfort means the temperature feels just right.",
        HIGH_SCHOOL: "Sound-absorbing panels reduce echo and noise so people can hear and focus.",
        UNDERGRADUATE: "Removing pollutants at the source comes first, then dilution and removal.",
        GRADUATE: "Certifications reach mostly premium buildings, so policy and funding are needed elsewhere.",
        PHD: "Misclassifying exposure can hide or distort true relationships between buildings and health.",
      },
    },
  ],
}

export default expansion
