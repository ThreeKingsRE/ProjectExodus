import type { ModuleExpansion } from '../types'

// Rewritten with its own angle: planning and building a microgrid for a real
// community, step by step. Chapter 9 covers what microgrids are.
const expansion: ModuleExpansion = {
  topicId: 'renewable-energy',
  moduleKey: 'microgrids~2',
  title: 'Building a Resilient Community Microgrid',
  description: {
    ELEMENTARY: 'How a town plans its own little power system to keep important places running in a storm.',
    MIDDLE_SCHOOL: 'The steps a community takes to plan, build and run a microgrid that keeps power on in emergencies.',
    HIGH_SCHOOL: 'Planning a community microgrid: choosing critical loads, sizing solar and batteries, and deciding who runs it.',
    UNDERGRADUATE: 'Community microgrid design: load assessment, resource sizing, islanding, controls and ownership.',
    GRADUATE: 'Resilience-driven microgrid planning: valuing resilience, techno-economic design, governance and finance.',
    PHD: 'Research on community microgrids: resilience metrics, design optimisation under uncertainty and governance.',
  },
  lessons: [
    {
      id: 're-mg-1',
      title: 'Building a Resilient Community Microgrid',
      content: {
        ELEMENTARY: `
<h2>Keeping the Lights On When Storms Come</h2>
<p>Sometimes a big storm knocks down power lines, and whole towns go dark. Fridges stop, phones cannot charge and hospitals have to use noisy backup machines. Some towns have a plan: they build their own small power system, called a microgrid, that can keep important places running even when the big grid is broken.</p>

<h3>Step One: Pick the Most Important Places</h3>
<p>First, the town asks, "Which places must stay open in an emergency?" Usually the answer is the fire station, the health clinic, a school that can be a shelter, and the store where people get food and water. These are called critical places.</p>
<ul>
<li><strong>Microgrid:</strong> a small power system that can run on its own, apart from the big grid</li>
<li><strong>Critical place:</strong> a building that must keep working in an emergency, like a clinic</li>
<li><strong>Shelter:</strong> a safe place where people can stay during a storm</li>
<li><strong>Battery:</strong> something that stores electricity for later</li>
<li><strong>Solar panel:</strong> a panel that makes electricity from sunlight</li>
</ul>

<h3>Step Two: Add Sunshine and Batteries</h3>
<p>Next, the town puts solar panels on roofs and parking lots, and big batteries nearby. On normal days the panels help save money. When a storm hits, a special switch separates the microgrid from the big grid, and the solar panels and batteries keep the critical places powered.</p>

<h3>Step Three: Work Together</h3>
<p>Neighbours, the town council and the power company all help decide where things go and who takes care of them. When everyone works together, the town is ready for the next storm.</p>
`,
        MIDDLE_SCHOOL: `
<h2>Planning a Microgrid for Your Town</h2>
<p>Hurricanes, wildfires, ice storms and heat waves are knocking out power more often in many places. A community microgrid is a local power system, usually made of solar panels, batteries and sometimes a backup generator, that can disconnect from the main grid and keep important buildings running. Building one is a community project that takes careful planning.</p>

<h3>Choosing What to Power</h3>
<p>Planners start by listing critical loads: places such as a fire station, health centre, water pump, emergency shelter and grocery store. They measure how much electricity each one needs and for how long it must run, perhaps three days after a hurricane. This tells them how big the microgrid must be.</p>
<ul>
<li><strong>Critical load:</strong> electricity use that must continue during an emergency</li>
<li><strong>Islanding:</strong> when a microgrid disconnects from the main grid and runs on its own</li>
<li><strong>Resilience:</strong> the ability to keep working through and recover from disasters</li>
<li><strong>Controller:</strong> the computer that runs the microgrid and decides when to island</li>
<li><strong>Feasibility study:</strong> an early study that checks whether a project can work and what it would cost</li>
</ul>

<h3>Choosing the Parts</h3>
<p>Solar panels provide clean energy every sunny day. Batteries store it for nights and cloudy days. A small generator might be kept for very long emergencies. A controller decides when to separate, or island, from the main grid and how to share power among buildings.</p>

<h3>Who Owns It and Who Pays?</h3>
<p>Microgrids cost a lot, so towns look for grants and partners. Some are owned by the power company, some by the city and some by a community cooperative. On normal days the microgrid can earn money by selling solar power or helping the grid, which helps pay it off. The best projects ask residents what they need and make sure poorer neighbourhoods are protected too, not just wealthy ones.</p>
`,
        HIGH_SCHOOL: `
<h2>From Idea to Island: Planning a Community Microgrid</h2>
<p>A microgrid is a group of connected loads and energy resources that can operate either connected to the main grid or as an island on its own. Community microgrids extend this idea beyond a single campus or military base to serve a neighbourhood's critical facilities. As climate-driven outages grow longer and more frequent, more towns are asking how to build one. This chapter walks through the planning process.</p>

<h3>1. Define Goals and Critical Loads</h3>
<p>Planning begins by deciding what the microgrid is for: keeping a hospital and shelters running for 72 hours after a hurricane, protecting a water treatment plant, or cutting bills and emissions day to day. Engineers then audit the critical loads, measuring peak demand in kilowatts and daily energy in kilowatt-hours, often finding that efficiency upgrades shrink the system needed.</p>
<ul>
<li><strong>Critical facility:</strong> a building whose operation is essential during emergencies, such as a hospital or shelter</li>
<li><strong>Point of common coupling:</strong> the connection point where a microgrid joins or separates from the main grid</li>
<li><strong>Black start:</strong> restarting a power system from a complete outage without help from the outside grid</li>
<li><strong>Load shedding:</strong> deliberately disconnecting less important loads to keep critical ones running</li>
<li><strong>Resilience hub:</strong> a community building with backup power that offers shelter, charging and supplies in emergencies</li>
</ul>

<h3>2. Size the Resources</h3>
<p>Designers model hourly solar output and load to size panels and batteries for the target outage. A common result is solar plus battery for most needs, with a small generator or extra storage for long, cloudy outages. The controller must be able to black start the microgrid and shed less important loads if energy runs short.</p>

<h3>3. Engineer the Connection</h3>
<p>The microgrid joins the main grid at a point of common coupling with a fast switch. When the grid fails, the switch opens and the microgrid islands; when the grid returns, it resynchronises. Protection equipment must be redesigned, because faults behave differently in a small, inverter-based island than on the big grid.</p>

<h3>4. Decide Ownership and Finance</h3>
<p>Options include utility ownership, municipal ownership, a cooperative of residents and businesses, or a private developer with long-term contracts. Grants for resilience, savings on energy bills and payments for grid services help cover costs. Community engagement matters: many towns build resilience hubs in community centres so the benefits reach renters, older adults and low-income households.</p>
`,
        UNDERGRADUATE: `
<h2>Community Microgrid Design</h2>
<p>The U.S. Department of Energy defines a microgrid as a group of interconnected loads and distributed energy resources within clearly defined electrical boundaries that acts as a single controllable entity with respect to the grid and can connect and disconnect from it. Community microgrids apply this concept to multiple customers and critical facilities in a neighbourhood or town, raising engineering, regulatory and governance challenges that single-owner microgrids avoid.</p>

<h3>Load Assessment and Resilience Targets</h3>
<p>Design starts with resilience targets, such as supplying defined critical loads for a specified outage duration with a stated probability. Load assessment uses interval meter data to build hourly profiles for critical facilities, separating essential from deferrable loads. Efficiency and load-shedding schemes often reduce required capacity substantially. Seasonal worst cases (a multi-day winter storm with little solar) usually drive sizing.</p>

<h3>Resource Sizing and Dispatch</h3>
<p>Techno-economic tools optimise the mix of photovoltaics, batteries and dispatchable backup (diesel, natural gas or, increasingly, fuel-flexible generators) to minimise lifecycle cost subject to resilience constraints. Grid-connected operation generates value through bill savings, demand charge reduction and wholesale or ancillary services, which offsets resilience investment. Dispatch strategies keep batteries partly charged when storms are forecast.</p>
<ul>
<li><strong>Grid-forming inverter:</strong> an inverter that sets voltage and frequency, allowing an inverter-based island to operate</li>
<li><strong>Resilience target:</strong> a stated goal for which loads must be served, for how long and with what probability</li>
<li><strong>Protection coordination:</strong> arranging protective devices so faults are isolated correctly in both grid-connected and islanded modes</li>
<li><strong>Lifecycle cost:</strong> the total cost of building, operating and maintaining a system over its life</li>
<li><strong>Franchise rights:</strong> a utility's legal right to be the sole provider of electricity distribution in an area</li>
</ul>

<h3>Controls and Protection</h3>
<p>Inverter-dominated islands require grid-forming inverters to establish voltage and frequency, replacing the role traditionally played by rotating generators. A microgrid controller manages transitions between modes, dispatch and load shedding. Protection is a key engineering challenge: inverter fault currents are small, so conventional overcurrent protection may not detect faults when islanded, requiring adaptive or differential protection schemes.</p>

<h3>Regulatory and Ownership Issues</h3>
<p>Serving multiple customers across public streets can conflict with utility franchise rights, so many community microgrids are utility-owned or built through partnerships. Alternatives include municipal utilities, cooperatives and third-party models under special tariffs. Clear rules on cost allocation, who gets served during outages and who pays are essential for public support.</p>
`,
        GRADUATE: `
<h2>Resilience-Driven Microgrid Planning</h2>
<p>As outages from extreme weather increase in frequency and duration, utilities and communities are investing in microgrids explicitly for resilience. Yet resilience is hard to value: outage costs are uncertain, unevenly distributed and often borne by people who are not part of the investment decision. This chapter examines how to value resilience, design microgrids that deliver it cost-effectively, and govern and finance community-scale systems.</p>

<h3>Valuing Resilience</h3>
<p>Standard reliability indices such as SAIDI and SAIFI capture routine outages but not long, high-impact events. Resilience valuation approaches include customer damage functions (survey-based estimates of outage costs by customer type), interruption cost estimate tools, and the value of avoided critical service loss (for example, hospital function or water treatment). Each has limitations: damage functions are poorly calibrated for multi-day outages and undervalue impacts on vulnerable groups, so planners increasingly complement monetary metrics with performance-based targets.</p>
<ul>
<li><strong>SAIDI:</strong> System Average Interruption Duration Index, the average outage duration per customer per year</li>
<li><strong>Customer damage function:</strong> an estimate of the economic cost of an outage for a type of customer and duration</li>
<li><strong>Value of lost load:</strong> the average value customers place on avoiding a unit of unserved electricity</li>
<li><strong>Stochastic outage modelling:</strong> simulating many possible outage events with their probabilities to test a design</li>
<li><strong>Resilience-as-a-service:</strong> a business model in which a provider guarantees backup power for a fee</li>
</ul>

<h3>Techno-Economic Design Under Uncertainty</h3>
<p>Design optimisation must handle uncertainty in outage timing and duration, weather, loads and prices. Stochastic outage modelling evaluates designs across many simulated events, revealing trade-offs between cost and probability of serving critical loads. Results frequently show that modest additions of storage and controls to existing solar and backup generation provide large resilience gains, and that coordinated microgrids across a neighbourhood can share resources more efficiently than isolated systems.</p>

<h3>Governance, Finance and Equity</h3>
<p>Community microgrids span multiple owners and public rights-of-way, so governance models determine feasibility. Utility ownership fits within existing regulation but may prioritise system benefits; municipal and cooperative models offer community control but face financing and franchise barriers; third-party resilience-as-a-service contracts shift risk but can be costly. Equity considerations include prioritising critical facilities serving vulnerable populations, siting resilience hubs in disadvantaged neighbourhoods and ensuring costs are not recovered regressively.</p>

<h3>Implementation Lessons</h3>
<p>Experience from deployed community microgrids highlights long interconnection and permitting timelines, the importance of operations and maintenance budgets after grants end, and the value of exercising islanding regularly. Systems that are never tested in island mode can fail when they are finally needed. Training local operators, keeping spare parts and documenting procedures are as important as the hardware itself.</p>
`,
        PHD: `
<h2>Research on Community Microgrids and Resilience</h2>
<p>Community microgrids sit at the intersection of power engineering, disaster science, economics and governance. Despite rapid deployment, fundamental questions remain about how to define and measure resilience, how to design and operate networked microgrids under deep uncertainty, and how institutions should allocate the costs and benefits of resilience. This chapter surveys those research frontiers.</p>

<h3>Defining and Measuring Resilience</h3>
<p>Resilience frameworks distinguish phases of an event: resistance, absorption, recovery and adaptation. Metrics proposed include resilience trapezoids that capture performance degradation and recovery over time, probabilistic measures of critical load served, and community-level indicators linking electricity to services such as water and health care. Open problems include aggregating heterogeneous impacts into decision-relevant metrics without obscuring distributional effects, and validating models against scarce data from real long-duration outages.</p>
<ul>
<li><strong>Resilience trapezoid:</strong> a representation of system performance over the phases of disruption, degradation and recovery</li>
<li><strong>Networked microgrids:</strong> multiple microgrids that can interconnect to share resources during emergencies</li>
<li><strong>Deep uncertainty:</strong> situations where probabilities of key future conditions cannot be reliably estimated</li>
<li><strong>Interdependent infrastructure:</strong> systems such as power, water and communications that depend on one another</li>
<li><strong>Procedural justice:</strong> fairness in how decisions are made, including who participates and whose knowledge counts</li>
</ul>

<h3>Design and Operation Under Deep Uncertainty</h3>
<p>Two-stage and multi-stage stochastic programming, robust optimisation and decision-making under deep uncertainty methods are applied to microgrid planning, capturing uncertain hazards, climate change and technology costs. Networked microgrids raise operational problems: forming and reconfiguring islands dynamically, coordinating grid-forming inverters for stability and allocating scarce energy among critical loads. Research on interdependent infrastructure models how microgrids supporting water pumping, communications and fuel supply affect overall community recovery.</p>

<h3>Institutions and Justice</h3>
<p>Empirical studies of microgrid deployment reveal that funding and siting decisions often follow institutional capacity rather than need, potentially widening resilience gaps. Research on procedural and distributive justice asks who participates in planning, whose critical services are prioritised, and how costs are recovered. Comparative analysis of ownership models, from utility-owned to cooperative, and of regulatory innovations such as resilience tariffs and shared ownership remains limited.</p>

<h3>Methodological Needs</h3>
<p>Progress requires better outage and impact data, co-simulation linking power systems with other infrastructure and social systems, and participatory modelling that incorporates community knowledge. Longitudinal studies of how microgrids actually perform during disasters, and how communities use them, would ground design methods in evidence rather than assumptions.</p>

<h3>Climate Adaptation and Long-Term Planning</h3>
<p>Microgrids are long-lived assets designed against hazards that are themselves changing. Research is beginning to integrate downscaled climate projections, such as future hurricane intensity, wildfire weather and extreme heat, into microgrid siting and sizing, and to examine adaptive pathways in which systems are expanded or reconfigured as risks evolve. Linking these methods with community-led adaptation planning could ensure that resilience investments anticipate future conditions rather than reflecting only past disasters.</p>
`,
      },
    },
  ],
  quiz: [
    {
      id: 're-mg2-q1',
      question: {
        ELEMENTARY: 'What is a microgrid?',
        MIDDLE_SCHOOL: 'What is "islanding"?',
        HIGH_SCHOOL: 'What is the point of common coupling?',
        UNDERGRADUATE: 'Why are grid-forming inverters needed in an inverter-based island?',
        GRADUATE: 'Why do standard reliability indices like SAIDI undervalue microgrid resilience?',
        PHD: 'What do networked microgrids allow during emergencies?',
      },
      options: {
        ELEMENTARY: ['A very tiny phone', 'A small power system that can run on its own', 'A kind of fishing net', 'A cloud'],
        MIDDLE_SCHOOL: ['Building houses on islands', 'When a microgrid disconnects from the main grid and runs on its own', 'Moving power plants to the sea', 'Turning off all lights'],
        HIGH_SCHOOL: ['The town square', 'The connection point where a microgrid joins or separates from the main grid', 'A type of battery', 'A charging cable'],
        UNDERGRADUATE: ['They are cheaper than wires', 'They set voltage and frequency when no rotating generator does', 'They store hydrogen', 'They replace solar panels'],
        GRADUATE: ['They count only renewable energy', 'They capture routine outages but not long, high-impact events', 'They measure electricity prices', 'They ignore all outages'],
        PHD: ['Selling microgrids abroad', 'Interconnecting to share resources across microgrids', 'Turning off all critical loads', 'Replacing transmission entirely'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'A microgrid is a small power system that can keep running when the big grid is broken.',
        MIDDLE_SCHOOL: 'Islanding means the microgrid separates and powers its buildings on its own.',
        HIGH_SCHOOL: 'The point of common coupling is where the switch connects or separates the microgrid.',
        UNDERGRADUATE: 'Without rotating generators, grid-forming inverters must establish voltage and frequency.',
        GRADUATE: 'SAIDI and SAIFI reflect everyday outages, not rare multi-day disasters.',
        PHD: 'Networked microgrids can interconnect to share generation and storage.',
      },
    },
    {
      id: 're-mg2-q2',
      question: {
        ELEMENTARY: 'Which place is a "critical place" in an emergency?',
        MIDDLE_SCHOOL: 'What is the first step when planning a community microgrid?',
        HIGH_SCHOOL: 'Why do engineers often find efficiency upgrades helpful when auditing critical loads?',
        UNDERGRADUATE: 'What usually drives the sizing of a solar-plus-storage microgrid?',
        GRADUATE: 'What do stochastic outage models reveal about microgrid designs?',
        PHD: 'Which methods are applied to microgrid planning under deep uncertainty?',
      },
      options: {
        ELEMENTARY: ['A toy shop', 'A movie theatre', 'A skate park', 'The health clinic'],
        MIDDLE_SCHOOL: ['Painting the solar panels', 'Choosing a logo', 'Buying the biggest generator', 'Listing critical loads and how long they must run'],
        HIGH_SCHOOL: ['They make loads bigger', 'They remove the need for any batteries', 'They are required by law everywhere', 'They shrink the system needed'],
        UNDERGRADUATE: ['Sunny summer afternoons', 'Average spring days', 'Days with no load at all', 'Seasonal worst cases like multi-day winter storms'],
        GRADUATE: ['Only the cost of solar panels', 'The colour of equipment', 'Nothing useful', 'Trade-offs between cost and probability of serving critical loads'],
        PHD: ['Coin flips', 'Ignoring uncertainty', 'Single deterministic forecasts only', 'Stochastic programming, robust optimisation and deep-uncertainty methods'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'A health clinic must stay open to help people during an emergency.',
        MIDDLE_SCHOOL: 'Planners first list critical loads and how long they must keep running.',
        HIGH_SCHOOL: 'Using less energy means smaller, cheaper solar and battery systems can do the job.',
        UNDERGRADUATE: 'The hardest periods, like long winter storms with little sun, set the size.',
        GRADUATE: 'Simulating many outages shows how much extra cost buys how much extra resilience.',
        PHD: 'These methods handle uncertainty that cannot be captured by single forecasts.',
      },
    },
    {
      id: 're-mg2-q3',
      question: {
        ELEMENTARY: 'What does the special switch do when a storm hits?',
        MIDDLE_SCHOOL: 'What does the microgrid controller do?',
        HIGH_SCHOOL: 'What is "black start"?',
        UNDERGRADUATE: 'Why is protection a key engineering challenge in islanded microgrids?',
        GRADUATE: 'What is resilience-as-a-service?',
        PHD: 'What does the resilience trapezoid represent?',
      },
      options: {
        ELEMENTARY: ['It separates the microgrid from the big grid', 'It turns off the sun', 'It calls the fire station', 'It plays music'],
        MIDDLE_SCHOOL: ['Decides when to island and how to share power', 'Paints the buildings', 'Bills customers for water', 'Plants trees'],
        HIGH_SCHOOL: ['Restarting a power system from a full outage without outside help', 'Painting batteries black', 'Starting cars in winter', 'Turning off all solar'],
        UNDERGRADUATE: ['Inverter fault currents are small, so conventional protection may miss faults', 'Protection is not needed', 'Faults never happen in islands', 'Wires cannot carry current'],
        GRADUATE: ['A provider guarantees backup power for a fee', 'A government tax', 'A type of inverter', 'Free electricity for all'],
        PHD: ['System performance over disruption, degradation and recovery', 'A shape of solar panel', 'A battery chemistry', 'A pricing schedule'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'The switch separates the microgrid so it can keep critical places running.',
        MIDDLE_SCHOOL: 'The controller manages islanding and decides how to share power among buildings.',
        HIGH_SCHOOL: 'Black start means restarting from a complete outage using only local resources.',
        UNDERGRADUATE: 'Inverters supply little fault current, so new protection schemes are needed.',
        GRADUATE: 'In resilience-as-a-service, a provider guarantees backup power for a fee.',
        PHD: 'The trapezoid shows how performance drops and recovers through an event.',
      },
    },
    {
      id: 're-mg2-q4',
      question: {
        ELEMENTARY: 'What do solar panels do for the microgrid on normal days?',
        MIDDLE_SCHOOL: 'How can a microgrid help pay for itself on normal days?',
        HIGH_SCHOOL: 'What is a resilience hub?',
        UNDERGRADUATE: 'Why are many community microgrids utility-owned or built through partnerships?',
        GRADUATE: 'Why can customer damage functions be problematic for resilience planning?',
        PHD: 'What have empirical studies found about microgrid funding and siting?',
      },
      options: {
        ELEMENTARY: ['Nothing at all', 'Make it snow', 'Help save money', 'Turn off the lights'],
        MIDDLE_SCHOOL: ['By charging residents for storms', 'By selling the batteries', 'By selling solar power or helping the grid', 'It cannot'],
        HIGH_SCHOOL: ['A gym', 'A power plant', 'A community building with backup power offering shelter and supplies', 'A bus station'],
        UNDERGRADUATE: ['Solar panels require it', 'Batteries cannot be privately owned', 'Serving many customers across streets can conflict with utility franchise rights', 'Utilities forbid all microgrids'],
        GRADUATE: ['They are too accurate', 'They ignore businesses', 'They are poorly calibrated for multi-day outages and undervalue vulnerable groups', 'They only measure wind'],
        PHD: ['They always follow need', 'They are random', 'They often follow institutional capacity rather than need', 'They never favour any area'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'On normal days the solar panels help the town save money.',
        MIDDLE_SCHOOL: 'Selling solar power or providing grid services earns money between emergencies.',
        HIGH_SCHOOL: 'Resilience hubs are community buildings with backup power that support residents in emergencies.',
        UNDERGRADUATE: 'Franchise rights often reserve multi-customer distribution for the utility.',
        GRADUATE: 'Damage functions underestimate long outages and their effects on vulnerable people.',
        PHD: 'Places with more institutional capacity tend to get microgrids, which can widen gaps.',
      },
    },
    {
      id: 're-mg2-q5',
      question: {
        ELEMENTARY: 'Who helps plan a town\'s microgrid?',
        MIDDLE_SCHOOL: 'Why might a microgrid keep a small generator?',
        HIGH_SCHOOL: 'What is load shedding?',
        UNDERGRADUATE: 'What is a resilience target?',
        GRADUATE: 'Why should microgrids be tested regularly in island mode?',
        PHD: 'Why is interdependent infrastructure modelling important for microgrid research?',
      },
      options: {
        ELEMENTARY: ['Only one person', 'Neighbours, the town council and the power company', 'Nobody', 'Only animals'],
        MIDDLE_SCHOOL: ['To make noise', 'For very long emergencies when solar and batteries run low', 'To charge phones only', 'To replace the solar panels'],
        HIGH_SCHOOL: ['Cutting trees', 'Deliberately disconnecting less important loads to keep critical ones running', 'Moving boxes', 'Shedding old batteries'],
        UNDERGRADUATE: ['A sports score', 'A stated goal for which loads to serve, for how long and with what probability', 'The price of solar panels', 'A battery brand'],
        GRADUATE: ['Testing is forbidden', 'Untested systems can fail when they are finally needed', 'Islanding damages equipment', 'Tests raise electricity prices'],
        PHD: ['Power systems are independent of water and communications', 'Microgrids supporting water, communications and fuel affect community recovery', 'Only electricity matters', 'It replaces engineering design'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Neighbours, leaders and the power company all work together.',
        MIDDLE_SCHOOL: 'A generator can help in very long outages when solar and batteries are not enough.',
        HIGH_SCHOOL: 'Load shedding switches off less important loads so critical ones keep power.',
        UNDERGRADUATE: 'A resilience target defines which loads must be served, for how long and how reliably.',
        GRADUATE: 'Regular island tests reveal problems before a real emergency.',
        PHD: 'Power supports water pumping, communications and fuel, so their links shape recovery.',
      },
    },
  ],
}

export default expansion
