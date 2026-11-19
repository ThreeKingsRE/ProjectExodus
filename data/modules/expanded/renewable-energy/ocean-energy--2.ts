import type { ModuleExpansion } from '../types'

// Rewritten with its own angle: real marine energy projects, where they go and
// how they affect ocean life. Chapter 7 covers how ocean energy works.
const expansion: ModuleExpansion = {
  topicId: 'renewable-energy',
  moduleKey: 'ocean-energy~2',
  title: 'Marine Energy Projects and Ocean Impacts',
  description: {
    ELEMENTARY: 'Where people build machines that catch ocean power, and how they keep fish and whales safe.',
    MIDDLE_SCHOOL: 'How tidal and wave energy projects are placed, tested and checked for effects on sea life.',
    HIGH_SCHOOL: 'Siting marine energy projects, sharing the sea with others and studying effects on marine life.',
    UNDERGRADUATE: 'Marine energy project development: resource siting, environmental effects, monitoring and consenting.',
    GRADUATE: 'Marine renewable energy deployment: marine spatial planning, environmental risk retirement and adaptive management.',
    PHD: 'Research on marine energy deployment: cumulative effects, monitoring technologies and governance of ocean space.',
  },
  lessons: [
    {
      id: 're-ocean-1',
      title: 'Marine Energy Projects and Ocean Impacts',
      content: {
        ELEMENTARY: `
<h2>Power From the Sea, Safely</h2>
<p>The ocean is always moving. Tides rise and fall twice a day, and waves roll in all the time. People have built machines that catch some of that motion and turn it into electricity. But the ocean is also home to fish, seals, whales and seabirds. So builders must be careful to choose good places and keep sea animals safe.</p>

<h3>Picking a Good Spot</h3>
<p>Tidal machines work best in narrow places where water rushes in and out fast, like a channel between two islands. Wave machines work best where big waves roll in from the open sea. Builders also check where boats travel and where people fish, so everyone can share the sea.</p>
<ul>
<li><strong>Tide:</strong> the rise and fall of the sea that happens twice a day</li>
<li><strong>Tidal turbine:</strong> an underwater machine with blades that spin when tides flow</li>
<li><strong>Wave machine:</strong> a floating machine that makes electricity as waves move it</li>
<li><strong>Marine life:</strong> all the animals and plants that live in the sea</li>
<li><strong>Underwater camera:</strong> a camera that films what happens below the water</li>
</ul>

<h3>Watching Out for Sea Animals</h3>
<p>Scientists put underwater cameras and microphones near the machines. They watch to see if fish and seals swim safely around the turning blades. So far, most animals seem to steer clear, but scientists keep watching to be sure.</p>

<h3>Why It Is Worth It</h3>
<p>Tides come every single day, so tidal power is very easy to predict. Places on islands or coasts can use it to make clean power instead of shipping in fuel.</p>
`,
        MIDDLE_SCHOOL: `
<h2>Building Energy Projects in the Ocean</h2>
<p>Marine energy, which includes power from tides, waves and ocean currents, is still young compared with wind and solar. A handful of projects around the world now send electricity to the grid, and many more are being tested. Building in the ocean is hard: saltwater rusts metal, storms batter equipment and the sea is shared with fishing boats, ships and wildlife. This chapter looks at how projects choose their sites and how scientists check their effects on ocean life.</p>

<h3>Choosing a Site</h3>
<p>Tidal turbines need fast-flowing water, usually in straits and channels. Wave devices need strong, steady waves, often on coasts facing the open ocean. Developers also look at water depth, the seabed, distance to the shore for the power cable, and whether there is a port nearby to build and repair equipment. Many countries have ocean test centres where companies can try out new machines before building full projects.</p>
<ul>
<li><strong>Test centre:</strong> a place at sea with cables and monitoring where new marine devices are tested</li>
<li><strong>Strait:</strong> a narrow channel of water connecting two larger bodies of water</li>
<li><strong>Collision risk:</strong> the chance that an animal swims into moving parts of a machine</li>
<li><strong>Underwater noise:</strong> sound from machines or construction that can disturb marine animals</li>
<li><strong>Marine spatial planning:</strong> deciding together how different uses of the sea are shared</li>
</ul>

<h3>Effects on Sea Life</h3>
<p>Scientists study several possible effects: animals bumping into turbine blades, noise from construction and operation, electromagnetic fields from power cables, and changes to how water and sand move. Monitoring at test sites so far suggests that single devices pose low risk, because animals tend to avoid them, but large arrays of many devices have not been studied much yet.</p>

<h3>Sharing the Sea</h3>
<p>Fishing communities, shipping companies and conservation groups all use the ocean. Marine spatial planning brings these groups together to decide where energy projects can go with the least conflict, so clean energy and healthy oceans can grow together.</p>
`,
        HIGH_SCHOOL: `
<h2>From Prototype to Power Plant: Marine Energy in Practice</h2>
<p>Tidal stream turbines, wave energy converters and ocean current devices have moved from laboratory tanks to the open sea, but only a few projects deliver power commercially. Their progress depends not only on engineering but on where they are built, how they share busy coastal waters and what they mean for marine ecosystems. This chapter focuses on those practical questions.</p>

<h3>Siting Marine Energy</h3>
<p>Resource maps show where tidal currents exceed about two metres per second or where wave energy flux is high. But a good resource is only the start. Developers must consider seabed geology for foundations, water depth for installation vessels, grid connection distance, access to ports for maintenance and exposure to extreme storms. Many promising sites are in remote areas where island and coastal communities pay high prices for diesel-generated electricity, making marine energy especially valuable there.</p>
<ul>
<li><strong>Tidal stream:</strong> fast-flowing water created by tides, used to turn underwater turbines</li>
<li><strong>Wave energy flux:</strong> the amount of power carried by waves per metre of wave front</li>
<li><strong>Array:</strong> a group of many marine energy devices installed together</li>
<li><strong>Environmental monitoring:</strong> measuring how a project affects wildlife and habitats over time</li>
<li><strong>Consenting:</strong> the process of getting permits and approvals to build a project</li>
</ul>

<h3>Environmental Effects</h3>
<p>Researchers group potential effects into several stressors: collision of fish, seals or diving birds with moving blades; underwater noise during construction and operation; electromagnetic fields around export cables; changes to currents, waves and sediment; and displacement of animals from habitat. Years of monitoring at test sites using sonar, underwater cameras and tagged animals indicate that for small numbers of devices, these risks are generally low. The big unknown is cumulative effects when arrays grow to dozens or hundreds of devices.</p>

<h3>Sharing the Ocean</h3>
<p>Coastal waters host fishing, shipping, recreation, cultural uses and protected areas. Marine spatial planning maps these uses and helps agree where energy development fits. Engaging fishing communities and Indigenous peoples early can reduce conflict and bring local knowledge of currents and wildlife into project design.</p>

<h3>Why It Matters</h3>
<p>Tides are predictable decades in advance, and waves peak in winter when solar is weakest, so marine energy can balance other renewables. If projects are sited and monitored carefully, they can add clean, reliable power while protecting ocean health.</p>
`,
        UNDERGRADUATE: `
<h2>Marine Energy Project Development and Environmental Effects</h2>
<p>Marine renewable energy (MRE) encompasses tidal stream, tidal range, wave, ocean current and ocean thermal technologies. After decades of prototypes, tidal stream technology has demonstrated multi-megawatt arrays, while wave energy remains largely pre-commercial. For both, project development is constrained as much by consenting, environmental uncertainty and costs of marine operations as by device performance. This chapter covers project siting, environmental effects and monitoring.</p>

<h3>Resource Assessment and Siting</h3>
<p>Tidal stream sites are characterised by peak current speed, turbulence and bathymetry using acoustic Doppler current profilers and hydrodynamic models. Wave resources are assessed from buoy data and spectral wave models. Siting integrates resource, geotechnical conditions, grid connection, port infrastructure and constraints from shipping lanes, fisheries and protected areas. Array layout must account for wake effects, since upstream turbines reduce flow for downstream ones, and for extraction limits, since removing energy can alter the tidal flow itself.</p>
<ul>
<li><strong>Acoustic Doppler current profiler:</strong> an instrument that measures water velocity at many depths using sound</li>
<li><strong>Stressor-receptor framework:</strong> an approach that pairs project stressors (noise, moving parts) with affected receptors (species, habitats)</li>
<li><strong>Risk retirement:</strong> concluding, based on evidence, that a specific effect poses low risk for small deployments</li>
<li><strong>Passive acoustic monitoring:</strong> listening for animal vocalisations with underwater microphones</li>
<li><strong>Levelised cost of energy:</strong> lifetime cost per unit of electricity, a key barrier for marine energy</li>
</ul>

<h3>Environmental Effects and Monitoring</h3>
<p>Assessments use a stressor-receptor framework. Collision risk is evaluated with encounter models and observations from multibeam sonar and cameras; evidence to date shows few collisions and frequent avoidance by marine mammals and fish. Operational noise is generally below thresholds for injury, though construction noise (especially pile driving) needs mitigation. Electromagnetic fields from cables are detectable by sensitive species such as sharks and rays, but effects appear localised. International collaborations have compiled evidence enabling regulators to "retire" some risks for small numbers of devices.</p>

<h3>Consenting and Costs</h3>
<p>Uncertainty about effects historically led regulators to require extensive pre-construction surveys and monitoring, adding cost and delay. Proportionate, adaptive approaches, where monitoring is scaled to risk and adjusted as evidence accumulates, are increasingly used. Reducing marine operations costs, improving device survivability and deploying larger arrays are key to lowering the levelised cost of energy toward that of offshore wind. Standardised device testing and certification also help investors compare technologies.</p>
`,
        GRADUATE: `
<h2>Deploying Marine Renewable Energy Responsibly</h2>
<p>Marine renewable energy offers predictable, seasonally complementary generation, but deployment has lagged forecasts for two decades. Beyond technology costs, the sector faces regulatory uncertainty, environmental evidence gaps and competition for ocean space. This chapter examines marine spatial planning, environmental risk retirement and adaptive management as tools for scaling deployment responsibly.</p>

<h3>Marine Spatial Planning</h3>
<p>Marine spatial planning (MSP) is a public process of analysing and allocating the spatial and temporal distribution of human activities in marine areas to achieve ecological, economic and social objectives. For MRE, MSP identifies zones where resource quality overlaps least with high-value fishing grounds, shipping routes, cultural uses and sensitive habitats. Co-location, for example combining wave devices with offshore wind or aquaculture, can share infrastructure and reduce spatial conflict. Effective MSP depends on good data, transparent trade-off analysis and meaningful participation by fishers and Indigenous rights holders.</p>
<ul>
<li><strong>Marine spatial planning:</strong> a public process for allocating ocean space among uses to meet ecological, economic and social goals</li>
<li><strong>Co-location:</strong> placing multiple activities, such as energy and aquaculture, in the same marine area</li>
<li><strong>Adaptive management:</strong> adjusting operations and monitoring as new evidence about effects emerges</li>
<li><strong>Before-after control-impact design:</strong> a monitoring design comparing sites before and after development with control sites</li>
<li><strong>Cumulative effects:</strong> the combined impact of many projects and stressors over space and time</li>
</ul>

<h3>Environmental Risk Retirement</h3>
<p>International evidence syntheses have evaluated stressors such as collision, noise, electromagnetic fields, habitat change and changes in oceanographic systems. For small numbers of devices, many of these risks have been assessed as low, allowing regulators to reduce monitoring requirements in comparable settings. Risk retirement is not permanent: it is specific to scale and context, and evidence for large arrays remains thin.</p>

<h3>Adaptive Management and Monitoring Design</h3>
<p>Adaptive management licenses projects to proceed while monitoring triggers changes, such as turbine shutdowns when marine mammals approach, if effects exceed thresholds. Monitoring designs like before-after control-impact studies, coupled with sonar, cameras, passive acoustics and animal tagging, generate the evidence needed to refine thresholds. Costs of monitoring can be shared through test centres and data-sharing agreements.</p>

<h3>Policy Pathways</h3>
<p>Revenue support schemes, ring-fenced auctions for marine energy and public funding for test infrastructure have driven deployment in leading countries. Coupling these with streamlined, proportionate consenting and coordinated environmental research could move the sector toward commercial scale.</p>

<h3>Community Benefits and Acceptance</h3>
<p>Projects in remote coastal and island communities can bring local jobs in fabrication, port services and maintenance, as well as lower electricity costs. Acceptance improves when communities share in ownership or revenue and when fishers help shape layouts and exclusion zones. Early, honest communication about uncertainties and monitoring results builds the trust needed for later, larger phases.</p>
`,
        PHD: `
<h2>Research Frontiers in Marine Energy Deployment</h2>
<p>As marine renewable energy approaches array scale, research priorities are shifting from device-level effects toward cumulative and ecosystem-level questions, monitoring technologies capable of detecting rare events, and governance of increasingly crowded ocean space. This chapter surveys those frontiers and the methodological challenges they pose.</p>

<h3>Cumulative and Ecosystem-Level Effects</h3>
<p>Single-device studies cannot reveal how arrays of many devices interact with ecosystems. Energy extraction at scale can modify tidal flows, mixing, sediment transport and stratification, with potential knock-on effects for primary productivity and foraging habitat. Coupled hydrodynamic-ecological models are being developed to explore these effects, but validation is limited by the absence of large arrays. Cumulative effects assessment must also consider interactions with other stressors, including offshore wind, shipping, fishing and climate change, which alters species distributions and baseline conditions.</p>
<ul>
<li><strong>Far-field effects:</strong> changes to oceanographic processes at distances well beyond the project site</li>
<li><strong>Population-level consequences:</strong> whether individual-level effects change the size or viability of a population</li>
<li><strong>Detection probability:</strong> the likelihood that a monitoring method observes an event that actually occurs</li>
<li><strong>Data portal:</strong> a shared repository of environmental monitoring data and evidence for regulators and researchers</li>
<li><strong>Blue economy:</strong> sustainable use of ocean resources for economic growth while preserving ecosystem health</li>
</ul>

<h3>Monitoring Rare Events</h3>
<p>Collisions are rare, so detecting them requires continuous, high-resolution monitoring that is costly and generates vast data volumes. Research on integrated instrumentation packages, automated classification of sonar and video using machine learning, and low-power autonomous platforms aims to raise detection probability while lowering cost. Linking individual-level observations to population-level consequences requires demographic models and long-term tagging studies.</p>

<h3>Governance of Ocean Space</h3>
<p>Marine energy competes with other blue economy uses and with conservation goals such as protecting a large share of ocean area. Research examines how marine spatial planning can integrate energy targets with biodiversity commitments, how Indigenous sovereignty and customary marine tenure should shape decisions, and how benefit-sharing arrangements affect community acceptance. Comparative studies of consenting regimes suggest that proportionate, evidence-based approaches can accelerate deployment without increasing ecological risk, but empirical evaluation is limited.</p>

<h3>System Value and Integration</h3>
<p>The predictability of tidal power and seasonal pattern of wave power may reduce balancing and storage costs in high-renewable systems, especially for islands. Quantifying this system value, and comparing it with marine energy's higher costs, requires power system models that resolve tidal phasing across sites and wave-wind correlations.</p>

<h3>Toward Evidence-Based Scaling</h3>
<p>Phased deployment, in which arrays grow stepwise as monitoring evidence accumulates, offers a way to learn about cumulative effects without precluding commercial progress. Designing these phases so that each produces statistically meaningful evidence, and sharing data openly across projects and countries, remains an open methodological challenge. Statistical power analysis at the design stage, so that monitoring can actually detect effects of concern, is still rare in practice.</p>
`,
      },
    },
  ],
  quiz: [
    {
      id: 're-ocean2-q1',
      question: {
        ELEMENTARY: 'Where do tidal machines work best?',
        MIDDLE_SCHOOL: 'Why do many countries have ocean test centres?',
        HIGH_SCHOOL: 'Why can marine energy be especially valuable for remote island communities?',
        UNDERGRADUATE: 'What is risk retirement in marine energy consenting?',
        GRADUATE: 'What is marine spatial planning?',
        PHD: 'Why are far-field effects difficult to validate today?',
      },
      options: {
        ELEMENTARY: ['In narrow places where water rushes fast', 'In a bathtub', 'On a mountain top', 'In a quiet pond'],
        MIDDLE_SCHOOL: ['To let companies test new machines before full projects', 'To store fish', 'To build cruise ships', 'To make salt'],
        HIGH_SCHOOL: ['They often pay high prices for diesel-generated electricity', 'Islands have no electricity needs', 'Marine energy is free to build', 'Islands cannot use solar'],
        UNDERGRADUATE: ['Concluding from evidence that a specific effect is low risk for small deployments', 'Retiring old turbines', 'Removing all monitoring forever', 'Closing test centres'],
        GRADUATE: ['A public process for allocating ocean space among uses', 'Drawing pictures of the sea', 'A shipping timetable', 'A type of turbine'],
        PHD: ['Large arrays that could cause them have not yet been built', 'They are too easy to measure', 'Tides do not move water', 'Models cannot represent water'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Tidal machines need water that rushes fast, like in narrow channels.',
        MIDDLE_SCHOOL: 'Test centres let companies try new devices safely before building full projects.',
        HIGH_SCHOOL: 'Remote communities often rely on expensive shipped-in diesel, so local marine power can save a lot.',
        UNDERGRADUATE: 'Risk retirement means evidence shows an effect is low risk for small numbers of devices.',
        GRADUATE: 'MSP is a public process that allocates ocean space among competing uses.',
        PHD: 'Without large arrays, models of far-field effects cannot be checked against reality.',
      },
    },
    {
      id: 're-ocean2-q2',
      question: {
        ELEMENTARY: 'What do scientists use to watch sea animals near the machines?',
        MIDDLE_SCHOOL: 'What is collision risk?',
        HIGH_SCHOOL: 'What is a marine energy "array"?',
        UNDERGRADUATE: 'Why must tidal array layout account for wake effects?',
        GRADUATE: 'What is co-location in marine planning?',
        PHD: 'What do machine-learning methods aim to improve in marine monitoring?',
      },
      options: {
        ELEMENTARY: ['Fishing nets', 'Kites', 'Underwater cameras and microphones', 'Sandcastles'],
        MIDDLE_SCHOOL: ['The chance of two boats racing', 'The price of electricity', 'The chance an animal swims into moving parts', 'The risk of rain'],
        HIGH_SCHOOL: ['A single small buoy', 'A type of fish', 'A group of many devices installed together', 'A power cable'],
        UNDERGRADUATE: ['Wakes make turbines spin backwards', 'Wakes heat the water', 'Upstream turbines reduce flow for downstream ones', 'Wakes stop tides'],
        GRADUATE: ['Moving a project to land', 'Painting devices the same colour', 'Placing activities like energy and aquaculture in the same area', 'Sharing one cable with a city'],
        PHD: ['Turbine colour choices', 'Shipping speed', 'Detection probability of rare events at lower cost', 'Electricity prices'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Underwater cameras and microphones help scientists see and hear animals near the machines.',
        MIDDLE_SCHOOL: 'Collision risk is the chance an animal hits moving parts like turbine blades.',
        HIGH_SCHOOL: 'An array is a group of many devices installed together.',
        UNDERGRADUATE: 'Turbines slow the water behind them, so downstream turbines get less flow.',
        GRADUATE: 'Co-location combines uses, such as energy and aquaculture, in the same space.',
        PHD: 'Automated classification of sonar and video helps detect rare collisions affordably.',
      },
    },
    {
      id: 're-ocean2-q3',
      question: {
        ELEMENTARY: 'Why is tidal power easy to predict?',
        MIDDLE_SCHOOL: 'What have monitoring studies found so far about single devices?',
        HIGH_SCHOOL: 'What is the big unknown in marine energy\'s environmental effects?',
        UNDERGRADUATE: 'Which construction activity most often needs noise mitigation?',
        GRADUATE: 'Why is risk retirement not permanent?',
        PHD: 'Why must cumulative effects assessment consider climate change?',
      },
      options: {
        ELEMENTARY: ['Tides only happen on birthdays', 'The moon is random', 'Nobody knows when tides come', 'Tides come every single day'],
        MIDDLE_SCHOOL: ['They destroy all sea life', 'They make the water hot', 'They stop tides', 'They pose low risk because animals tend to avoid them'],
        HIGH_SCHOOL: ['Whether tides exist', 'The colour of turbines', 'Whether boats can float', 'Cumulative effects of large arrays'],
        UNDERGRADUATE: ['Painting turbines', 'Testing cables in labs', 'Ordering parts', 'Pile driving'],
        GRADUATE: ['It is decided by coin toss', 'Turbines rust away', 'Regulators change every year', 'It is specific to scale and context'],
        PHD: ['Climate change has no ocean effects', 'It only affects land', 'It makes tides stop', 'It alters species distributions and baseline conditions'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Tides rise and fall every day, so we know when they will come.',
        MIDDLE_SCHOOL: 'Animals mostly avoid single devices, so risks look low so far.',
        HIGH_SCHOOL: 'Effects of many devices together are still largely unknown.',
        UNDERGRADUATE: 'Pile driving for foundations is loud and usually needs mitigation.',
        GRADUATE: 'Evidence from small deployments may not hold for large arrays or different settings.',
        PHD: 'Climate change shifts species and baselines, so it interacts with project effects.',
      },
    },
    {
      id: 're-ocean2-q4',
      question: {
        ELEMENTARY: 'Who else uses the sea that builders must think about?',
        MIDDLE_SCHOOL: 'Which sea animals can sense electromagnetic fields from cables?',
        HIGH_SCHOOL: 'What is consenting?',
        UNDERGRADUATE: 'What does passive acoustic monitoring do?',
        GRADUATE: 'What is adaptive management?',
        PHD: 'What is a data portal used for in marine energy?',
      },
      options: {
        ELEMENTARY: ['Only robots', 'Boats, people who fish and sea animals', 'Nobody', 'Only clouds'],
        MIDDLE_SCHOOL: ['Starfish only', 'Sharks and rays', 'Seaweed', 'Sand'],
        HIGH_SCHOOL: ['Agreeing on a turbine colour', 'Getting permits and approvals to build a project', 'Selling electricity', 'Building ships'],
        UNDERGRADUATE: ['Playing music to fish', 'Listening for animal sounds with underwater microphones', 'Measuring currents', 'Counting boats by radar'],
        GRADUATE: ['Ignoring evidence', 'Adjusting operations and monitoring as new evidence emerges', 'Only building in summer', 'Managing a fishing fleet'],
        PHD: ['Selling electricity', 'Sharing environmental monitoring data and evidence', 'Booking ships', 'Storing turbine parts'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Boats, people who fish and sea animals all share the sea.',
        MIDDLE_SCHOOL: 'Sharks and rays can sense electromagnetic fields, but effects appear localised.',
        HIGH_SCHOOL: 'Consenting is getting the permits and approvals needed to build.',
        UNDERGRADUATE: 'Passive acoustic monitoring listens for animal calls with hydrophones.',
        GRADUATE: 'Adaptive management lets projects proceed while adjusting as evidence grows.',
        PHD: 'Data portals share monitoring evidence with regulators and researchers.',
      },
    },
    {
      id: 're-ocean2-q5',
      question: {
        ELEMENTARY: 'What is marine life?',
        MIDDLE_SCHOOL: 'What is marine spatial planning for?',
        HIGH_SCHOOL: 'Why can marine energy balance other renewables?',
        UNDERGRADUATE: 'What remains a key barrier for marine energy compared with offshore wind?',
        GRADUATE: 'Which design compares sites before and after development with control sites?',
        PHD: 'What is phased deployment intended to achieve?',
      },
      options: {
        ELEMENTARY: ['All the animals and plants that live in the sea', 'Boats', 'Beach towels', 'Rocks on land'],
        MIDDLE_SCHOOL: ['Deciding together how different uses of the sea are shared', 'Planning beach parties', 'Mapping stars', 'Building houses'],
        HIGH_SCHOOL: ['Tides are predictable and waves peak in winter when solar is weak', 'It only works at noon', 'It replaces batteries completely', 'It has no variation'],
        UNDERGRADUATE: ['Its higher levelised cost of energy', 'Lack of water', 'Too much sunshine', 'No electricity demand'],
        GRADUATE: ['Before-after control-impact design', 'Random guessing', 'Single photographs', 'Opinion surveys only'],
        PHD: ['Learning about cumulative effects as arrays grow stepwise', 'Building everything at once', 'Avoiding all monitoring', 'Stopping all projects'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Marine life means all the animals and plants in the sea.',
        MIDDLE_SCHOOL: 'MSP helps groups agree on how to share the sea.',
        HIGH_SCHOOL: 'Predictable tides and winter waves complement solar and wind.',
        UNDERGRADUATE: 'Marine energy still costs more per unit than offshore wind.',
        GRADUATE: 'BACI designs compare before and after at impact and control sites.',
        PHD: 'Stepwise growth lets evidence on cumulative effects build without halting progress.',
      },
    },
  ],
}

export default expansion
