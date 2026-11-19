import type { ModuleExpansion } from '../types'

// Rewritten with its own angle: designing rainwater and greywater systems into
// buildings (sizing, plumbing, treatment, codes). The first water-efficient
// buildings chapter covers fixtures and overall water strategy.
const expansion: ModuleExpansion = {
  topicId: 'green-building',
  moduleKey: 'water-efficient-buildings~2',
  title: 'Rainwater and Greywater Systems in Buildings',
  description: {
    ELEMENTARY: 'How buildings can catch rain and use sink and shower water twice to flush toilets and water plants.',
    MIDDLE_SCHOOL: 'How rainwater tanks and greywater systems work inside homes, schools and offices.',
    HIGH_SCHOOL: 'Designing rainwater harvesting and greywater reuse into buildings: parts, sizing, safety and savings.',
    UNDERGRADUATE: 'Engineering building water reuse: demand matching, tank sizing, treatment levels and plumbing codes.',
    GRADUATE: 'Building-scale water reuse systems: risk management, regulation, economics and net zero water design.',
    PHD: 'Research on decentralised building water reuse: health risk, performance, energy and urban water system effects.',
  },
  lessons: [
    {
      id: 'gb-wt-1',
      title: 'Rainwater and Greywater Systems in Buildings',
      content: {
        ELEMENTARY: `
<h2>Buildings That Use Water Twice</h2>
<p>Every day, buildings use lots of clean drinking water. But do you need drinking water to flush a toilet or water a garden? Not really! Some buildings are designed to catch rain from the roof and to save water from sinks and showers so it can be used again. This helps save clean water for drinking and cooking.</p>

<h3>Catching Rain</h3>
<p>When rain falls on a roof, it runs into gutters and down pipes. A rainwater system sends that water into a big tank instead of down the drain. A filter keeps out leaves and bugs. Later, a pump sends the rainwater to toilets, washing machines or garden taps.</p>

<h3>Using Sink and Shower Water Again</h3>
<p>Water that goes down the drain from a bathroom sink, shower or bath is called greywater. It is a little soapy, but it is not very dirty. Some buildings clean it a bit and use it again to flush toilets or water plants. Toilet water is different. It is called blackwater and needs much more cleaning.</p>
<ul>
<li><strong>Rainwater harvesting:</strong> catching rain from roofs to use later</li>
<li><strong>Gutter:</strong> a channel along the edge of a roof that collects rain</li>
<li><strong>Tank:</strong> a big container that stores water</li>
<li><strong>Greywater:</strong> used water from sinks, showers and baths</li>
<li><strong>Blackwater:</strong> water from toilets that needs a lot of cleaning</li>
</ul>

<h3>Purple Pipes</h3>
<p>In many buildings, pipes carrying reused water are painted purple. The colour is a signal that says "do not drink this water!" That way, plumbers never mix it up with drinking water.</p>

<h3>Your Turn</h3>
<p>Where does the rain go when it falls on your school's roof? See if you can spot the gutters and downpipes. Could your school catch that water for its garden?</p>
`,
        MIDDLE_SCHOOL: `
<h2>Rainwater and Greywater Inside Buildings</h2>
<p>Most buildings use treated drinking water for everything, including flushing toilets, washing clothes and watering landscapes. These uses don't need water that clean. By adding rainwater harvesting and greywater reuse, buildings can cut their drinking water use a lot, lower water bills and reduce stormwater runoff. Here is how these systems are designed into a building.</p>

<h3>Rainwater Systems</h3>
<p>A building rainwater system has several parts. The roof is the catchment area. Gutters and downpipes carry water to a first-flush diverter, which throws away the first, dirtiest water from each storm. A filter removes leaves and grit. The water is stored in a tank, which may be above ground, underground or in the basement. A pump and pipes deliver it to toilets, laundry and irrigation, and a backup connection to the city supply keeps things working in dry spells.</p>

<h3>Greywater Systems</h3>
<p>Greywater comes from showers, baths, bathroom sinks and sometimes washing machines. Simple systems send laundry water straight to garden mulch beds. More advanced systems filter and disinfect greywater so it can flush toilets. Greywater should be used soon after it is collected, because if it is stored too long it can start to smell and grow germs.</p>
<ul>
<li><strong>Catchment area:</strong> the surface, usually a roof, that collects rain</li>
<li><strong>First-flush diverter:</strong> a device that throws away the first dirty rainwater</li>
<li><strong>Non-potable water:</strong> water that is not safe to drink but fine for flushing or watering</li>
<li><strong>Potable water:</strong> water that is safe to drink</li>
<li><strong>Backflow preventer:</strong> a valve that stops reused water flowing into drinking water pipes</li>
<li><strong>Dual plumbing:</strong> separate pipes for drinking water and reused water</li>
</ul>

<h3>Keeping It Safe</h3>
<p>Reused water travels through separate pipes, often coloured purple and labelled. Backflow preventers stop it mixing with drinking water. Local plumbing codes set rules about where and how reused water can be used.</p>

<h3>The Payoff</h3>
<p>Toilet flushing and laundry can make up a large part of indoor water use in homes and offices, so replacing that with rainwater or greywater makes a real difference.</p>
`,
        HIGH_SCHOOL: `
<h2>Designing Water Reuse Into Buildings</h2>
<p>Water-efficient fixtures reduce demand, but buildings can go further by replacing drinking water with alternative sources for uses that don't require potable quality. Rainwater harvesting and greywater reuse are the two most common on-site sources. Designing them well requires matching supply to demand, sizing storage, choosing treatment and following plumbing and health rules.</p>

<h3>Matching Supply and Demand</h3>
<p>Designers first estimate non-potable demand: toilet and urinal flushing, laundry, irrigation and cooling towers. Then they estimate supply. Rainwater supply depends on roof area, local rainfall and a runoff coefficient (how much of the rain actually reaches the tank). Greywater supply depends on how many people shower and wash. Offices produce little greywater but use a lot of water for flushing, while homes and hotels produce lots of shower water, so the best source varies by building type.</p>

<h3>Rainwater System Design</h3>
<p>Key components are the catchment, conveyance (gutters and pipes), first-flush diversion, pre-filtration, storage, pumping, final filtration, disinfection if required, and a make-up water supply from the mains. Tank size balances cost against how much demand can be met; designers often use a daily water balance model with years of rainfall data to find a cost-effective size.</p>
<ul>
<li><strong>Runoff coefficient:</strong> the fraction of rain on a surface that can actually be collected</li>
<li><strong>Water balance model:</strong> a calculation tracking inflow, storage and use over time</li>
<li><strong>Make-up water:</strong> mains water added when the reuse tank runs low</li>
<li><strong>Disinfection:</strong> treatment that kills germs, such as UV light or chlorine</li>
<li><strong>Air gap:</strong> a physical gap that prevents reused water entering the drinking supply</li>
<li><strong>Cross-connection:</strong> an unsafe link between drinking water and non-potable pipes</li>
</ul>

<h3>Greywater System Design</h3>
<p>Greywater systems range from simple laundry-to-landscape setups to packaged treatment units with screening, biological treatment, membranes and UV disinfection. Because greywater contains soap, skin cells, hair and some bacteria, untreated greywater should go to subsurface irrigation, not sprinklers, and should not be stored for long.</p>

<h3>Safety and Codes</h3>
<p>Plumbing codes require dual plumbing with purple pipes and labels, backflow protection or air gaps, and limits on uses. Some places require permits, inspections and water quality testing.</p>

<h3>Benefits</h3>
<p>Well-designed systems can meet most toilet and irrigation demand, cut stormwater runoff, and contribute to green building certification points.</p>
`,
        UNDERGRADUATE: `
<h2>Engineering Building Water Reuse</h2>
<p>On-site non-potable water systems substitute rainwater, greywater and sometimes condensate or foundation drainage for potable supply. Engineering these systems involves quantifying demand and supply, sizing storage and treatment, selecting treatment trains to meet fit-for-purpose quality targets, designing safe distribution, and planning operations and maintenance. This chapter presents the design process for building-scale systems.</p>

<h3>Demand and Supply Analysis</h3>
<p>Non-potable demand is estimated from occupancy, fixture flow rates and use patterns, plus irrigation and cooling demand that vary seasonally. Supply is estimated from rainfall records, catchment area and runoff coefficients for rainwater, and from occupant shower, bath and laundry use for greywater. Alternative sources such as air conditioning condensate can be significant in hot humid climates. Matching profiles reveals whether supply limits or demand limits system yield.</p>

<h3>Storage Sizing</h3>
<p>Daily or hourly simulation using long-term rainfall series estimates water savings efficiency (the fraction of demand met) for different tank sizes. Savings rise quickly at first and then flatten, so an economically optimal size usually meets less than all demand. Greywater systems need only small equalisation storage because quality deteriorates with storage time; tanks are often sized for one day's flow.</p>
<ul>
<li><strong>Fit-for-purpose:</strong> treating water only to the quality its end use requires</li>
<li><strong>Water savings efficiency:</strong> the share of non-potable demand met by an alternative source</li>
<li><strong>Treatment train:</strong> a sequence of treatment processes applied to water</li>
<li><strong>Membrane bioreactor:</strong> biological treatment combined with membrane filtration</li>
<li><strong>Equalisation tank:</strong> storage that smooths out variable inflows</li>
<li><strong>Turbidity:</strong> cloudiness of water caused by suspended particles</li>
</ul>

<h3>Treatment</h3>
<p>Rainwater for toilet flushing often needs only filtration and sometimes UV disinfection, though roof materials and bird droppings can introduce contaminants. Greywater for indoor reuse typically requires biological treatment to remove organic matter, followed by filtration and disinfection; membrane bioreactors are common in larger buildings. Water quality targets typically specify limits on turbidity, biochemical oxygen demand and indicator bacteria.</p>

<h3>Distribution and Codes</h3>
<p>Plumbing codes require separate non-potable distribution with purple pipe and signage, backflow prevention or air gaps on make-up water, and restrictions on uses. Some jurisdictions have adopted risk-based water reuse frameworks with tiered treatment and monitoring requirements by use.</p>

<h3>Operations and Maintenance</h3>
<p>Systems require filter cleaning, UV lamp replacement, monitoring and periodic testing. Poor maintenance is a leading cause of failure, so responsibility and costs must be planned from the start.</p>
`,
        GRADUATE: `
<h2>Building-Scale Water Reuse Systems</h2>
<p>As cities face drought, ageing infrastructure and stormwater challenges, building-scale water reuse is moving from demonstration projects to policy requirements in some places. Some cities now require onsite non-potable water systems in large new developments. This shift raises questions about risk management, regulation, economics, energy use and how buildings can approach net zero water. This chapter analyses these issues.</p>

<h3>Risk-Based Management</h3>
<p>Modern frameworks apply quantitative microbial risk assessment to set log reduction targets for pathogens, such as viruses, bacteria and protozoa, based on source water and end use. Treatment trains must achieve these reductions reliably, verified by monitoring surrogates such as turbidity and UV transmittance. Water safety plans identify hazards, control points and corrective actions across the system.</p>

<h3>Regulatory Landscape</h3>
<p>Regulation is fragmented: plumbing codes, health departments and water utilities may all have a role. Some jurisdictions have adopted comprehensive frameworks for onsite water systems, with permitting, operator certification and reporting. Elsewhere, unclear rules and conservative interpretations have slowed adoption. Harmonised, risk-based standards reduce costs and uncertainty.</p>
<ul>
<li><strong>Log reduction:</strong> a measure of pathogen removal, where each log is a tenfold reduction</li>
<li><strong>Quantitative microbial risk assessment:</strong> estimating infection risk from pathogen exposure</li>
<li><strong>Water safety plan:</strong> a risk management plan covering a water system from source to use</li>
<li><strong>Net zero water:</strong> a building whose water use is balanced by onsite alternative sources and returned water</li>
<li><strong>Surrogate monitoring:</strong> tracking easy-to-measure parameters as indicators of treatment performance</li>
<li><strong>District-scale reuse:</strong> sharing treatment and distribution among several buildings</li>
</ul>

<h3>Economics and Scale</h3>
<p>Capital and operating costs per unit of water are often higher for building-scale systems than for centralised supply, especially for small buildings. Economies of scale favour larger buildings or district-scale systems shared among several buildings. Benefits that are not captured in water bills, such as reduced stormwater fees, avoided infrastructure expansion and drought resilience, can improve the business case if they are monetised.</p>

<h3>Energy and Carbon</h3>
<p>Treatment and pumping consume energy; membrane systems can use more energy per unit volume than centralised supply in some cities. Life cycle assessments show net benefits depend on local water supply energy intensity and system design.</p>

<h3>Occupants and Operators</h3>
<p>Systems perform only as well as the people who run them. Building managers need trained operators, clear maintenance contracts and alarm systems that flag treatment failures. Occupant behaviour matters too: products poured down drains, such as bleach, solvents or excess detergent, can upset biological treatment. Communication, signage and simple feedback on water savings help sustain support for reuse over a building's life.</p>

<h3>Net Zero Water Design</h3>
<p>Net zero water buildings combine efficient fixtures, rainwater and greywater reuse, and sometimes blackwater treatment and rainwater-to-potable systems. Examples show it is technically possible, but cost, regulation and maintenance remain significant hurdles. Integration with utility planning helps ensure decentralised systems complement rather than undermine centralised infrastructure.</p>
`,
        PHD: `
<h2>Research on Decentralised Building Water Reuse</h2>
<p>Decentralised water reuse at the building and district scale challenges the century-old model of centralised supply and treatment. Research examines health risks and how to manage them, how systems perform over time, their energy and carbon footprints, and how widespread adoption would affect urban water systems as a whole. This chapter surveys these research frontiers.</p>

<h3>Health Risk and Monitoring</h3>
<p>Quantitative microbial risk assessment underpins log reduction targets, but data on pathogen concentrations in building greywater and rainwater are limited and highly variable, since they depend on occupant health. Research characterises pathogen occurrence, Legionella growth in non-potable distribution, and the reliability of treatment under variable loads. Online monitoring, sensors and real-time control are being developed to verify performance continuously.</p>

<h3>Long-Term Performance</h3>
<p>Field studies show many installed systems underperform design expectations because of maintenance lapses, component failures and changes in occupancy. Research on reliability engineering, fault detection and service models (such as utility- or third-party-managed systems) aims to close this gap.</p>
<ul>
<li><strong>Legionella:</strong> a bacterium that grows in warm water systems and causes respiratory disease</li>
<li><strong>Fault detection:</strong> automated identification of system malfunctions from monitoring data</li>
<li><strong>Centralised system effects:</strong> impacts of decentralised reuse on utility revenue, flows and infrastructure</li>
<li><strong>Sewer flow reduction:</strong> lower wastewater volumes that can increase concentrations and deposits in sewers</li>
<li><strong>Socio-technical transition:</strong> a shift in technology together with institutions, practices and norms</li>
<li><strong>Hybrid water system:</strong> a mix of centralised and decentralised supply and treatment</li>
</ul>

<h3>Energy, Carbon and Life Cycle</h3>
<p>Life cycle assessments compare decentralised reuse to centralised supply and treatment. Outcomes depend on treatment technology, scale, local energy mix and avoided infrastructure. Research explores low-energy treatment options such as nature-based systems, gravity flow and heat recovery from greywater.</p>

<h3>Urban System Effects</h3>
<p>Widespread decentralised reuse reduces flows to sewers and demand on utilities. Reduced sewer flows can increase pollutant concentrations, solids deposition and corrosion. Lower demand can affect utility revenue and pricing. Modelling studies examine optimal mixes of centralised and decentralised systems, and how hybrid water systems can improve resilience to drought and climate change.</p>

<h3>Governance and Transitions</h3>
<p>Socio-technical transitions research examines how regulations, utility business models, building industry practices and public acceptance shape adoption. Studies of cities that mandate onsite reuse provide natural experiments in policy design, while research on equity asks who bears costs and who benefits from new systems.</p>

<h3>Climate Adaptation</h3>
<p>Climate change alters rainfall intensity and drought frequency, affecting rainwater yields and the value of reuse. Research couples climate projections with building water balance models to test system robustness, and examines how onsite storage can double as stormwater detention to reduce flooding. Questions remain about how to size systems for future, rather than historical, rainfall and how reuse contributes to urban resilience during supply interruptions.</p>

<h3>Open Questions</h3>
<p>Key gaps include long-term pathogen and performance data, harmonised risk-based regulation, low-energy treatment and integrated planning of hybrid urban water systems.</p>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'gbwt2-q1',
      question: {
        ELEMENTARY: 'What is greywater?',
        MIDDLE_SCHOOL: 'What does a first-flush diverter do?',
        HIGH_SCHOOL: 'What is a runoff coefficient?',
        UNDERGRADUATE: 'What does fit-for-purpose treatment mean?',
        GRADUATE: 'What is a log reduction?',
        PHD: 'Why are pathogen data for building greywater highly variable?',
      },
      options: {
        ELEMENTARY: ['Water from toilets', 'Rain from clouds', 'Water in the ocean', 'Used water from sinks, showers and baths'],
        MIDDLE_SCHOOL: ['Heats the water', 'Adds soap to water', 'Turns rain into ice', 'Throws away the first, dirtiest rainwater'],
        HIGH_SCHOOL: ['The speed of water in a pipe', 'The cost of a tank', 'The temperature of rain', 'The fraction of rain on a surface that can be collected'],
        UNDERGRADUATE: ['Treating all water to drinking quality', 'Never treating water', 'Using the cheapest pump', 'Treating water only to the quality its use requires'],
        GRADUATE: ['Cutting down trees', 'A drop in water pressure', 'Reducing paperwork', 'A tenfold reduction in pathogens per log'],
        PHD: ['Greywater never contains pathogens', 'All buildings are identical', 'Pathogens cannot be measured', 'They depend on occupant health'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Greywater is used water from sinks, showers and baths.',
        MIDDLE_SCHOOL: 'The first rain washes dirt off the roof, so it is diverted.',
        HIGH_SCHOOL: 'The runoff coefficient says how much rain reaches the tank.',
        UNDERGRADUATE: 'Fit-for-purpose matches treatment level to end use.',
        GRADUATE: 'Each log is a tenfold pathogen reduction.',
        PHD: 'Pathogen levels rise and fall with who is ill in the building.',
      },
    },
    {
      id: 'gbwt2-q2',
      question: {
        ELEMENTARY: 'Why are reused water pipes often painted purple?',
        MIDDLE_SCHOOL: 'What is a backflow preventer?',
        HIGH_SCHOOL: 'What is a cross-connection?',
        UNDERGRADUATE: 'What do plumbing codes require for non-potable distribution?',
        GRADUATE: 'What does a water safety plan cover?',
        PHD: 'Why is Legionella a concern in non-potable distribution?',
      },
      options: {
        ELEMENTARY: ['Because purple is pretty', 'To warn people not to drink the water', 'To make water warmer', 'To keep bugs away'],
        MIDDLE_SCHOOL: ['A pump that speeds water up', 'A valve that stops reused water entering drinking pipes', 'A filter for leaves', 'A water heater'],
        HIGH_SCHOOL: ['A pipe joining two gutters', 'An unsafe link between drinking water and non-potable pipes', 'A type of tank', 'A pipe painted two colours'],
        UNDERGRADUATE: ['Sharing pipes with drinking water', 'Separate purple pipes, signage and backflow protection', 'No labels at all', 'Clear plastic pipes only'],
        GRADUATE: ['Only the tank colour', 'Hazards, control points and corrective actions from source to use', 'Only the water bill', 'Only fire sprinklers'],
        PHD: ['It makes water purple', 'It grows in warm water systems and causes respiratory disease', 'It only lives in oceans', 'It cleans pipes'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Purple means "do not drink".',
        MIDDLE_SCHOOL: 'Backflow preventers protect the drinking water supply.',
        HIGH_SCHOOL: 'A cross-connection risks contaminating drinking water.',
        UNDERGRADUATE: 'Codes require separate, labelled, protected distribution.',
        GRADUATE: 'Water safety plans manage risk across the whole system.',
        PHD: 'Legionella thrives in warm water and can be inhaled in droplets.',
      },
    },
    {
      id: 'gbwt2-q3',
      question: {
        ELEMENTARY: 'What is blackwater?',
        MIDDLE_SCHOOL: 'Why should greywater not be stored for long?',
        HIGH_SCHOOL: 'Where should untreated greywater be used?',
        UNDERGRADUATE: 'Why are greywater tanks often sized for about one day\'s flow?',
        GRADUATE: 'Why do economies of scale favour district-scale reuse?',
        PHD: 'What problem can reduced sewer flows cause?',
      },
      options: {
        ELEMENTARY: ['Rainwater', 'Water from a shower', 'Water from toilets that needs lots of cleaning', 'Very cold water'],
        MIDDLE_SCHOOL: ['It turns into ice', 'It evaporates instantly', 'It can start to smell and grow germs', 'It becomes drinking water'],
        HIGH_SCHOOL: ['Drinking fountains', 'Swimming pools', 'Subsurface irrigation, not sprinklers', 'Kitchen taps'],
        UNDERGRADUATE: ['Larger tanks are illegal', 'Greywater never varies', 'Quality deteriorates with storage time', 'People shower once a month'],
        GRADUATE: ['District systems need no treatment', 'Small systems are free', 'Small buildings have high costs per unit of water', 'Pipes are unnecessary'],
        PHD: ['Sewers overflow more often', 'Sewers become drinking water', 'Higher pollutant concentrations, deposits and corrosion', 'No effects at all'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Blackwater from toilets needs much more treatment.',
        MIDDLE_SCHOOL: 'Stored greywater goes stale and grows germs.',
        HIGH_SCHOOL: 'Subsurface irrigation avoids contact and spray.',
        UNDERGRADUATE: 'Short storage keeps greywater from going septic.',
        GRADUATE: 'Sharing systems spreads fixed costs over more water.',
        PHD: 'Less flow means more concentrated sewage and more deposits.',
      },
    },
    {
      id: 'gbwt2-q4',
      question: {
        ELEMENTARY: 'Where does rainwater go in a rainwater system?',
        MIDDLE_SCHOOL: 'What is non-potable water?',
        HIGH_SCHOOL: 'Why do offices and hotels suit different reuse sources?',
        UNDERGRADUATE: 'What happens to water savings as tank size increases?',
        GRADUATE: 'Which benefits can improve the business case if monetised?',
        PHD: 'What is a hybrid water system?',
      },
      options: {
        ELEMENTARY: ['Into a big tank to use later', 'Straight into the ocean', 'Into the oven', 'Up into the clouds'],
        MIDDLE_SCHOOL: ['Water not safe to drink but fine for flushing or watering', 'Water safe to drink', 'Frozen water', 'Bottled water'],
        HIGH_SCHOOL: ['Offices use more flushing water while hotels produce more shower water', 'Offices have no toilets', 'Hotels have no showers', 'They are identical'],
        UNDERGRADUATE: ['Savings rise quickly then flatten', 'Savings fall', 'Savings grow forever at the same rate', 'Size has no effect'],
        GRADUATE: ['Lower stormwater fees, avoided infrastructure and drought resilience', 'Higher water bills', 'More pumping energy', 'More paperwork'],
        PHD: ['A mix of centralised and decentralised supply and treatment', 'A car that runs on water', 'A pipe made of two metals', 'A water-only power plant'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Rainwater is stored in a tank.',
        MIDDLE_SCHOOL: 'Non-potable water is for uses other than drinking.',
        HIGH_SCHOOL: 'Building type shapes greywater supply and flushing demand.',
        UNDERGRADUATE: 'Bigger tanks give diminishing returns.',
        GRADUATE: 'Wider benefits strengthen the economics.',
        PHD: 'Hybrid systems combine centralised and decentralised parts.',
      },
    },
    {
      id: 'gbwt2-q5',
      question: {
        ELEMENTARY: 'What can rainwater from the roof be used for?',
        MIDDLE_SCHOOL: 'What is dual plumbing?',
        HIGH_SCHOOL: 'What is make-up water?',
        UNDERGRADUATE: 'What is a leading cause of reuse system failure?',
        GRADUATE: 'What determines whether reuse saves energy overall?',
        PHD: 'What research aims to close the gap between design and field performance?',
      },
      options: {
        ELEMENTARY: ['Making juice', 'Brushing teeth', 'Baking bread', 'Flushing toilets and watering gardens'],
        MIDDLE_SCHOOL: ['Two taps in one sink', 'Pipes that are twice as long', 'Two plumbers working together', 'Separate pipes for drinking water and reused water'],
        HIGH_SCHOOL: ['Water used for makeup', 'Water from washing faces', 'Water stored in the attic', 'Mains water added when the reuse tank runs low'],
        UNDERGRADUATE: ['Too much rain', 'Purple paint', 'Too few labels on drinking taps', 'Poor maintenance'],
        GRADUATE: ['The colour of the pipes', 'The building\'s height alone', 'The weather on one day', 'Local supply energy intensity and system design'],
        PHD: ['Building bigger tanks only', 'Removing all monitoring', 'Using drinking water instead', 'Reliability engineering, fault detection and managed service models'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Rainwater works for toilets and gardens.',
        MIDDLE_SCHOOL: 'Dual plumbing keeps the two water supplies separate.',
        HIGH_SCHOOL: 'Make-up water keeps the system running in dry spells.',
        UNDERGRADUATE: 'Filters, lamps and sensors need regular upkeep.',
        GRADUATE: 'Energy benefits depend on local supply and treatment choices.',
        PHD: 'Better reliability and service models improve real performance.',
      },
    },
  ],
}

export default expansion
