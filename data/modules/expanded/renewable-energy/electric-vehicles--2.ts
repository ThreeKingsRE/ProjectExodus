import type { ModuleExpansion } from '../types'

// Rewritten with its own angle: shared transport and the charging networks that
// make electric travel work. Chapter 10 covers how electric vehicles work.
const expansion: ModuleExpansion = {
  topicId: 'renewable-energy',
  moduleKey: 'electric-vehicles~2',
  title: 'Clean Transit and Charging Networks',
  description: {
    ELEMENTARY: 'How electric buses, trains and bikes move lots of people, and where electric vehicles get recharged.',
    MIDDLE_SCHOOL: 'How cities switch buses, trains and bikes to clean power, and how charging stations are planned.',
    HIGH_SCHOOL: 'Electrifying public transport and building the charging networks that let everyone travel cleanly.',
    UNDERGRADUATE: 'Electric public transit, charging infrastructure types, siting and grid impacts.',
    GRADUATE: 'Planning electrified transit and charging networks: fleet transition, siting, grid integration and equity.',
    PHD: 'Research on electrified mobility systems: charging network optimisation, fleet-grid integration and access.',
  },
  lessons: [
    {
      id: 're-ev-1',
      title: 'Clean Transit and Charging Networks',
      content: {
        ELEMENTARY: `
<h2>Lots of People, One Clean Ride</h2>
<p>A car carries a few people. A bus can carry fifty! When a bus runs on electricity instead of diesel fuel, it gets lots of people where they need to go without puffing smoke into the air. Electric trains, trams and even e-bikes do the same. This chapter is about clean ways to travel together and the places where electric vehicles fill up.</p>

<h3>Buses and Trains That Plug In</h3>
<p>Electric buses have big batteries under the floor. At night they park in a garage and plug in to recharge, like a phone. Some trains and trams get power from wires above the track, so they never need to stop to fill up. They are quiet, too, so streets near the bus stop are calmer.</p>
<ul>
<li><strong>Electric bus:</strong> a bus that runs on a battery instead of diesel fuel</li>
<li><strong>Tram:</strong> a train that runs on tracks in the street and gets power from overhead wires</li>
<li><strong>Charger:</strong> a machine that puts electricity into a vehicle's battery</li>
<li><strong>Charging station:</strong> a place with chargers where vehicles stop to recharge</li>
<li><strong>Public transport:</strong> buses and trains that anyone can ride</li>
</ul>

<h3>Places to Plug In</h3>
<p>Electric cars and scooters need chargers too. Towns put chargers in parking lots, at shops and along highways so drivers can recharge on long trips. Planners try to put chargers where everyone can reach them, not just in a few neighbourhoods.</p>

<h3>Why It Matters</h3>
<p>When more people ride clean buses and trains, there are fewer cars on the road, less traffic and cleaner air for everyone, especially for kids who walk to school beside busy streets.</p>
`,
        MIDDLE_SCHOOL: `
<h2>Moving Cities on Clean Power</h2>
<p>Transportation is one of the biggest sources of air pollution and climate-warming gases in many countries. Switching private cars to electric helps, but the biggest wins come when whole buses, trains and delivery fleets go electric, because each vehicle carries many people or packages and runs all day long.</p>

<h3>Electric Buses and Trains</h3>
<p>Battery-electric buses charge overnight at the depot, and some top up quickly at the end of their route using a charger mounted on a pole. Electric trains, subways and trams usually draw power continuously from overhead wires or a third rail. Because electric motors are quiet and produce no exhaust, they improve air quality right where people wait and walk.</p>
<ul>
<li><strong>Depot charging:</strong> recharging buses overnight in the garage where they park</li>
<li><strong>Opportunity charging:</strong> quick top-ups at bus stops or at the end of a route</li>
<li><strong>Fast charger:</strong> a high-power charger that refills a battery in minutes instead of hours</li>
<li><strong>Charging network:</strong> all the charging stations across a city or country</li>
<li><strong>Micromobility:</strong> small electric vehicles like e-bikes and e-scooters for short trips</li>
</ul>

<h3>Building a Charging Network</h3>
<p>For people to choose electric cars and vans, they need to know they can charge. Cities put slower chargers where vehicles park for hours, such as homes, workplaces and street curbs, and fast chargers along highways for long trips. Planners study where people drive and park so chargers are useful, and they check that renters and people without driveways can charge too.</p>

<h3>Challenges</h3>
<p>Electric buses cost more to buy, though they cost less to fuel and maintain. Many fast chargers in one spot can strain local power lines, so utilities and cities plan together. Getting the plan right means cleaner air, quieter streets and travel that runs on renewable energy for everyone in the city.</p>
`,
        HIGH_SCHOOL: `
<h2>Electrifying How We Move Together</h2>
<p>An electric car parked in a driveway is the familiar picture of clean transport, but it is only part of the story. The fastest way to cut transport emissions per person is to electrify shared transport, such as buses, trains, trams, delivery vans and taxis, and to build charging networks that serve everyone. This chapter looks at those systems rather than at individual vehicles.</p>

<h3>Electrifying Public Transport</h3>
<p>Rail has run on electricity for over a century, drawing power from overhead lines or a third rail. Buses are now following. A battery-electric bus uses roughly three to four times less energy per kilometre than a diesel bus, because electric motors waste far less energy as heat and recover energy when braking. Agencies choose between depot charging, where buses charge overnight and carry big batteries, and opportunity charging, where pantograph chargers at route ends top them up in a few minutes, allowing smaller batteries.</p>
<ul>
<li><strong>Regenerative braking:</strong> using the motor to slow the vehicle and recover energy into the battery</li>
<li><strong>Pantograph charger:</strong> an overhead arm that connects to a bus roof for fast charging</li>
<li><strong>Level 2 charger:</strong> a medium-power charger that refills a car over several hours</li>
<li><strong>DC fast charger:</strong> a high-power charger that can add hundreds of kilometres of range in under an hour</li>
<li><strong>Charging desert:</strong> an area with too few public chargers for residents to rely on electric vehicles</li>
</ul>

<h3>Designing Charging Networks</h3>
<p>Good networks match charger speed to how long vehicles stay parked. Homes and workplaces need slow chargers; shopping centres need medium ones; highways need fast chargers spaced so drivers never run low. Reliability matters as much as numbers: a broken charger on a long trip is a serious problem. Many cities now map charging deserts, often in lower-income or rental-heavy areas, and target new curbside chargers there.</p>

<h3>The Grid Connection</h3>
<p>A bus depot charging dozens of buses at night can draw as much power as a small town. Managed charging spreads that load over the night and avoids peak hours, and depot batteries or solar canopies can cushion demand. When charging is scheduled for times when wind and solar are plentiful, clean transport becomes a tool for using more renewable energy, not just a new demand.</p>

<h3>Beyond the Bus</h3>
<p>Delivery companies are electrifying vans because they drive predictable routes and return to a depot each night. Shared e-bikes and e-scooters cover short trips and connect people to train stations. Together these pieces form a clean mobility system.</p>
`,
        UNDERGRADUATE: `
<h2>Electric Mobility Systems: Transit and Charging Infrastructure</h2>
<p>Decarbonising transport requires more than replacing internal-combustion vehicles one-for-one. System-level choices, such as how much travel shifts to public transport, how fleets are electrified and how charging infrastructure is deployed, determine emissions, costs and who benefits. This chapter examines electrified public transit and charging networks as engineered systems connected to the power grid.</p>

<h3>Transit Electrification</h3>
<p>Electric rail and trolleybuses use continuous power from catenary or third rail, avoiding large batteries entirely. Battery-electric buses (BEBs) now account for a large share of new bus sales in many cities. Fleet planning must reconcile battery capacity, route length, climate (cabin heating can raise winter energy use substantially) and charging strategy. Depot-charged buses need larger batteries and more depot power; opportunity charging allows smaller batteries but requires high-power chargers on route and tighter scheduling. Total cost of ownership comparisons often favour BEBs over their lifetime because of lower energy and maintenance costs, despite higher purchase prices.</p>
<ul>
<li><strong>Total cost of ownership (TCO):</strong> purchase, energy, maintenance and other costs over a vehicle's life</li>
<li><strong>Catenary:</strong> overhead wires that supply continuous power to trains, trams or trolleybuses</li>
<li><strong>Managed charging:</strong> controlling when and how fast vehicles charge to reduce costs and grid impacts</li>
<li><strong>Utilisation rate:</strong> the share of time a charger is actually in use, which drives its economics</li>
<li><strong>Demand charge:</strong> a utility fee based on a site's highest power draw, which can dominate fast-charging costs</li>
</ul>

<h3>Charging Infrastructure Types and Siting</h3>
<p>Charging spans AC Level 1 and Level 2 (roughly 1 to 20 kW) and DC fast charging (50 to 350 kW and beyond). Siting models use travel surveys, parking duration and traffic flows to locate chargers where dwell times match charging speed. Public fast chargers face a chicken-and-egg problem: low early utilisation makes them unprofitable, while their absence slows EV adoption. Demand charges can make low-utilisation fast chargers especially costly, prompting tariff reform and on-site batteries.</p>

<h3>Grid Integration</h3>
<p>Aggregated charging can add significant evening peaks if unmanaged. Time-of-use tariffs, smart charging and depot energy management shift loads to off-peak or high-renewable periods. Vehicle-to-grid (V2G) technology, which lets parked vehicles discharge to the grid, is being piloted with school buses, whose long summer idle periods align with peak demand.</p>

<h3>Equity Considerations</h3>
<p>Early charging deployment concentrated in affluent areas with high EV ownership. Equity-focused planning prioritises transit electrification on routes serving pollution-burdened neighbourhoods and curbside or multi-unit housing chargers for residents without garages.</p>
`,
        GRADUATE: `
<h2>Planning Electrified Transit and Charging Networks</h2>
<p>Transport electrification is a planning problem as much as a technology problem. Transit agencies, utilities, municipalities and private charge-point operators must coordinate fleet replacement schedules, depot power upgrades, public charger deployment and tariff design. Decisions made now lock in infrastructure for decades. This chapter examines those planning problems and the trade-offs between system cost, reliability, grid impact and equity.</p>

<h3>Fleet Transition Planning</h3>
<p>Transit agencies typically replace buses on 12- to 15-year cycles, so fleet transition plans phase in battery-electric buses as vehicles retire. Planning tools combine block-level energy simulation (accounting for route profile, passenger load, temperature and HVAC) with charging strategy and depot layout. Key constraints include depot grid connection capacity, which can take years to upgrade, and operational resilience: agencies keep diesel or hybrid backup during transition and plan for charger failures. Mixed strategies, depot charging for most blocks plus on-route charging for the longest, often minimise cost.</p>
<ul>
<li><strong>Block:</strong> the full sequence of trips a single bus performs between leaving and returning to the depot</li>
<li><strong>Interconnection queue:</strong> the waiting list for new or upgraded grid connections, a frequent bottleneck for depots</li>
<li><strong>Charge-point operator:</strong> a company that owns or operates public chargers and sells charging services</li>
<li><strong>Vehicle-to-grid (V2G):</strong> bidirectional charging that lets vehicles supply power back to the grid</li>
<li><strong>Accessibility metric:</strong> a measure of how easily residents can reach chargers or transit within a given time or distance</li>
</ul>

<h3>Public Charging Network Design</h3>
<p>Network design balances coverage (no gaps along corridors), capacity (enough ports at busy times) and reliability (uptime). Location models range from flow-refuelling location models for highway corridors to agent-based simulations of urban charging demand. Market failures in low-demand areas justify public investment or obligations on operators; standards for payment, connectors and uptime reporting improve user experience and competition.</p>

<h3>Grid Integration and Tariffs</h3>
<p>Fleet depots and fast-charging hubs are large, concentrated loads. Managed charging, on-site storage and solar, and utility programmes that coordinate connection planning can reduce upgrade costs. Tariff design is decisive: demand charges calibrated for industrial loads can make low-utilisation fast chargers uneconomic, so many jurisdictions have introduced EV-specific rates or demand-charge holidays. V2G pilots with school buses and fleets test whether vehicle batteries can provide valuable services without compromising mobility.</p>

<h3>Equity and Mode Shift</h3>
<p>Electrifying private cars alone does not address congestion, road safety or the transport needs of people who cannot drive. Planning frameworks therefore pair charging deployment with transit investment and mode shift, and use accessibility metrics to target chargers and electric routes to underserved and pollution-burdened communities. Monitoring frameworks that track air quality, ridership and charger use by neighbourhood help agencies check whether investments actually reach the people they were meant to serve.</p>
`,
        PHD: `
<h2>Research on Electrified Mobility Systems</h2>
<p>Transport is now one of the largest sources of greenhouse gas emissions in many economies, and its electrification couples transport and power systems tightly. Research on electrified mobility spans optimisation of charging networks, joint planning of fleets and grids, behavioural responses to infrastructure and prices, and the distributional consequences of deployment. This chapter surveys open problems at these interfaces.</p>

<h3>Charging Network Optimisation Under Uncertainty</h3>
<p>Facility location formulations for charging, including flow-capturing and flow-refuelling models, have evolved toward stochastic and robust programmes that account for uncertain adoption trajectories, travel behaviour and technology change (higher charging power, larger batteries). Coupled transport-power models capture feedback between charging prices, route choice and congestion at chargers. Open questions include how to plan networks robust to uncertain future vehicle ranges and how to value charger reliability, which surveys identify as a major barrier yet models rarely represent.</p>
<ul>
<li><strong>Flow-refuelling location model:</strong> an optimisation model that places chargers to serve trips along travel paths given vehicle range</li>
<li><strong>Stochastic programming:</strong> optimisation that explicitly represents uncertain parameters with probability distributions</li>
<li><strong>Coupled transport-power model:</strong> a model linking traffic and travel decisions with electricity network operation</li>
<li><strong>Battery degradation cost:</strong> the economic cost of capacity loss caused by charging and discharging, relevant to V2G</li>
<li><strong>Transport poverty:</strong> lacking affordable, accessible transport to reach work, services and opportunities</li>
</ul>

<h3>Fleet-Grid Co-Optimisation</h3>
<p>Bus and freight fleets offer controllable, predictable loads. Research co-optimises vehicle scheduling, charging and depot energy assets, sometimes including bidirectional charging. Key uncertainties include battery degradation under V2G cycling, the value of fleet flexibility in markets with high renewable shares, and contractual arrangements that let fleets participate without risking service. Large-scale studies suggest managed charging can substantially reduce the generation and network capacity needed for electrified transport, but realised flexibility depends on operational realities that pilots are only beginning to quantify.</p>

<h3>Behaviour, Distribution and Policy</h3>
<p>Charging behaviour departs from rational models: drivers over-rely on fast chargers, avoid unfamiliar networks and respond to perceived rather than actual reliability. Distributionally, subsidies and infrastructure have favoured higher-income adopters, while transport poverty persists among households without cars. Research integrates accessibility analysis, environmental justice data and policy evaluation to assess whether electrification programmes reduce or reproduce inequities, and whether investment should prioritise transit and active mobility over private vehicle charging.</p>

<h3>Methodological Directions</h3>
<p>Progress depends on open charging session data, linked travel and electricity datasets, and evaluation designs that can attribute outcomes to policies. Agent-based simulation calibrated with such data, combined with natural experiments from staggered infrastructure rollouts, offers a path to stronger causal evidence on what actually changes travel and emissions. Integrating life-cycle emissions, including battery manufacturing and the carbon intensity of charging electricity by hour, would further clarify which electrification pathways deliver the largest real reductions.</p>
`,
      },
    },
  ],
  quiz: [
    {
      id: 're-ev2-q1',
      question: {
        ELEMENTARY: 'Why is an electric bus better for clean air than many cars?',
        MIDDLE_SCHOOL: 'Why do electric buses and trains cut pollution so much?',
        HIGH_SCHOOL: 'Why is electrifying shared transport especially effective at cutting emissions per person?',
        UNDERGRADUATE: 'Why do total cost of ownership comparisons often favour battery-electric buses?',
        GRADUATE: 'Why is depot grid connection capacity a key constraint in transit fleet transition?',
        PHD: 'Why do surveys suggest charger reliability deserves more attention in network models?',
      },
      options: {
        ELEMENTARY: ['It is painted green', 'It drives faster', 'It honks less', 'It carries lots of people without smoke'],
        MIDDLE_SCHOOL: ['They are smaller', 'They only run at night', 'They have no seats', 'They carry many people all day with no exhaust'],
        HIGH_SCHOOL: ['Shared vehicles never need charging', 'Buses are lighter than cars', 'Trains use diesel', 'Each vehicle carries many people and runs all day'],
        UNDERGRADUATE: ['They have cheaper purchase prices', 'They need no drivers', 'They never need maintenance', 'Lower energy and maintenance costs outweigh higher purchase prices'],
        GRADUATE: ['Buses cannot charge at depots', 'Depots need no electricity', 'Diesel is required by law', 'Upgrades can take years through interconnection queues'],
        PHD: ['Chargers never fail', 'Reliability is easy to model', 'Drivers ignore reliability', 'Reliability is a major barrier but rarely represented in models'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'One electric bus can carry fifty people with no smoke at all.',
        MIDDLE_SCHOOL: 'Buses and trains carry many riders all day, so going electric removes a lot of exhaust.',
        HIGH_SCHOOL: 'Shared vehicles move many people and run constantly, so each electric one replaces lots of emissions.',
        UNDERGRADUATE: 'Despite higher purchase prices, lower fuel and maintenance costs make lifetime costs competitive.',
        GRADUATE: 'Depot grid upgrades can be slow, so they often set the pace of fleet transition.',
        PHD: 'Users rank reliability highly, yet most location models assume chargers always work.',
      },
    },
    {
      id: 're-ev2-q2',
      question: {
        ELEMENTARY: 'Where do electric buses usually recharge at night?',
        MIDDLE_SCHOOL: 'What is opportunity charging for buses?',
        HIGH_SCHOOL: 'What is regenerative braking?',
        UNDERGRADUATE: 'What fee can dominate the costs of a low-utilisation fast charger?',
        GRADUATE: 'In transit planning, what is a "block"?',
        PHD: 'What does a flow-refuelling location model optimise?',
      },
      options: {
        ELEMENTARY: ['In the river', 'In the bus garage', 'At the beach', 'On the roof of a school'],
        MIDDLE_SCHOOL: ['Charging only on holidays', 'Quick top-ups at stops or at the end of a route', 'Charging with gasoline', 'Never charging'],
        HIGH_SCHOOL: ['Braking that uses a parachute', 'Using the motor to slow down and recover energy into the battery', 'Braking only in rain', 'Replacing the brakes every week'],
        UNDERGRADUATE: ['A parking ticket', 'A demand charge based on peak power', 'A carbon tax on electricity', 'A registration fee'],
        GRADUATE: ['A city block of houses', 'The full sequence of trips a bus runs between leaving and returning to the depot', 'A traffic jam', 'A charger cable'],
        PHD: ['Paint colours for chargers', 'Charger placement to serve trips along paths given vehicle range', 'Battery chemistry choice', 'Ticket prices'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Buses park in their garage at night and plug in, like a phone.',
        MIDDLE_SCHOOL: 'Opportunity charging gives buses short, fast top-ups during their day.',
        HIGH_SCHOOL: 'The motor works as a generator when braking, sending energy back to the battery.',
        UNDERGRADUATE: 'Demand charges based on a site\'s peak power can outweigh the energy cost when chargers are rarely used.',
        GRADUATE: 'A block is one bus\'s full workday, which sets how much energy it must carry or get on route.',
        PHD: 'These models place chargers so trips along travel paths can be completed within vehicle range.',
      },
    },
    {
      id: 're-ev2-q3',
      question: {
        ELEMENTARY: 'Why do towns put chargers in many different neighbourhoods?',
        MIDDLE_SCHOOL: 'Where should slow chargers go?',
        HIGH_SCHOOL: 'What is a "charging desert"?',
        UNDERGRADUATE: 'What does equity-focused charging planning prioritise?',
        GRADUATE: 'What do accessibility metrics measure in charging and transit planning?',
        PHD: 'What is "transport poverty"?',
      },
      options: {
        ELEMENTARY: ['So everyone can reach one', 'To make streets darker', 'To scare birds', 'Because chargers are free to build'],
        MIDDLE_SCHOOL: ['Where vehicles park for hours, like homes and workplaces', 'Only on highways', 'In the middle of roads', 'Nowhere'],
        HIGH_SCHOOL: ['An area with too few public chargers for residents to rely on EVs', 'A desert with solar chargers', 'A charger that only works in heat', 'A broken car'],
        UNDERGRADUATE: ['Routes in pollution-burdened areas and chargers for residents without garages', 'Affluent areas only', 'Highway rest stops only', 'Areas with the most luxury cars'],
        GRADUATE: ['How easily residents can reach chargers or transit', 'Charger brand loyalty', 'Electricity prices only', 'Vehicle top speed'],
        PHD: ['Lacking affordable, accessible transport to reach work and services', 'Owning too many cars', 'Spending on luxury vehicles', 'Living near a train station'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Chargers spread across town mean every family can reach one.',
        MIDDLE_SCHOOL: 'Slow chargers suit places where vehicles stay parked for a long time.',
        HIGH_SCHOOL: 'Charging deserts are areas, often renter-heavy, where too few chargers exist.',
        UNDERGRADUATE: 'Equity planning targets polluted neighbourhoods and people who cannot charge at home.',
        GRADUATE: 'Accessibility metrics show how easily people can reach chargers or transit in a given time.',
        PHD: 'Transport poverty means lacking affordable, accessible ways to reach opportunities.',
      },
    },
    {
      id: 're-ev2-q4',
      question: {
        ELEMENTARY: 'How do many trams and trains get their electricity?',
        MIDDLE_SCHOOL: 'What is micromobility?',
        HIGH_SCHOOL: 'About how much less energy per kilometre does a battery-electric bus use than a diesel bus?',
        UNDERGRADUATE: 'Which charging power range describes DC fast charging?',
        GRADUATE: 'Why are school buses attractive for vehicle-to-grid pilots?',
        PHD: 'What remains uncertain about fleet participation in vehicle-to-grid services?',
      },
      options: {
        ELEMENTARY: ['From candles', 'From wind blowing on them', 'From wires above the track', 'From the passengers'],
        MIDDLE_SCHOOL: ['Very tiny cars for toys', 'Microwave ovens on buses', 'Small electric vehicles like e-bikes for short trips', 'Trains underground'],
        HIGH_SCHOOL: ['About the same', 'Twice as much', 'Roughly three to four times less', 'Ten times more'],
        UNDERGRADUATE: ['1 to 2 kW', '5 to 10 kW', '50 to 350 kW and beyond', 'Under 1 kW'],
        GRADUATE: ['They are always moving', 'They have no batteries', 'Long summer idle periods align with peak demand', 'They run on diesel'],
        PHD: ['Whether vehicles have wheels', 'Whether chargers use cables', 'Battery degradation under V2G cycling and contractual arrangements', 'Whether electricity exists'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Trams and many trains get power from wires above the track, so they never stop to fill up.',
        MIDDLE_SCHOOL: 'Micromobility means small electric rides like e-bikes and e-scooters.',
        HIGH_SCHOOL: 'Efficient motors and regenerative braking make electric buses use roughly three to four times less energy.',
        UNDERGRADUATE: 'DC fast chargers deliver about 50 to 350 kW or more.',
        GRADUATE: 'School buses sit idle in summer when grid demand peaks, so they can help without disrupting service.',
        PHD: 'How much V2G wears batteries and how fleets can contract safely are still open questions.',
      },
    },
    {
      id: 're-ev2-q5',
      question: {
        ELEMENTARY: 'What is a charger?',
        MIDDLE_SCHOOL: 'Why might many fast chargers in one spot cause a problem?',
        HIGH_SCHOOL: 'How can a bus depot avoid overloading the grid when charging at night?',
        UNDERGRADUATE: 'What is managed charging?',
        GRADUATE: 'Why have many jurisdictions introduced EV-specific tariffs or demand-charge holidays?',
        PHD: 'What evidence would most strengthen causal claims about charging policy?',
      },
      options: {
        ELEMENTARY: ['A kind of bus seat', 'A road sign', 'A traffic light', 'A machine that puts electricity into a vehicle battery'],
        MIDDLE_SCHOOL: ['They make cars slower', 'They are too quiet', 'They need petrol', 'They can strain local power lines'],
        HIGH_SCHOOL: ['Charge every bus at 6 p.m.', 'Turn off the lights', 'Use more diesel', 'Spread charging across the night with managed charging'],
        UNDERGRADUATE: ['Charging only with cash', 'Hiring charger managers', 'Charging at the fastest speed always', 'Controlling when and how fast vehicles charge'],
        GRADUATE: ['To make charging more expensive', 'To ban fast chargers', 'To fund diesel buses', 'Industrial-style demand charges made low-utilisation fast chargers uneconomic'],
        PHD: ['Single opinion surveys', 'Press releases', 'Assuming outcomes', 'Natural experiments and linked session, travel and electricity data'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'A charger fills an electric vehicle\'s battery with electricity.',
        MIDDLE_SCHOOL: 'Many fast chargers together draw lots of power, which can strain local lines.',
        HIGH_SCHOOL: 'Spreading charging over the night avoids big peaks and can use clean power when it is plentiful.',
        UNDERGRADUATE: 'Managed charging controls timing and speed to cut costs and grid impacts.',
        GRADUATE: 'Demand charges designed for factories made rarely used fast chargers lose money, so tariffs were adapted.',
        PHD: 'Natural experiments and linked datasets let researchers attribute changes to policies.',
      },
    },
  ],
}

export default expansion
