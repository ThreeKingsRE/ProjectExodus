import type { ModuleExpansion } from '../types'

// Rewritten with its own angle: the costs and side effects of desalination and
// the alternatives to weigh first. Chapter 10 covers how desalination works.
const expansion: ModuleExpansion = {
  topicId: 'water-systems',
  moduleKey: 'desalination~2',
  title: 'Desalination Trade-offs: Brine, Energy and Alternatives',
  description: {
    ELEMENTARY: 'Turning seawater into drinking water is amazing, but it uses lots of energy and leaves very salty water behind.',
    MIDDLE_SCHOOL: 'The energy, cost and salty waste of desalination, and other ways towns can find water first.',
    HIGH_SCHOOL: 'Weighing desalination\'s energy use, brine and cost against conservation, reuse and other supplies.',
    UNDERGRADUATE: 'Desalination trade-offs: energy intensity, brine management, marine impacts, cost and alternatives.',
    GRADUATE: 'Planning decisions on desalination: lifecycle impacts, portfolio planning and governance of new supply.',
    PHD: 'Research on desalination sustainability: brine valorisation, renewable coupling and water-energy planning.',
  },
  lessons: [
    {
      id: 'ws-desal-1',
      title: 'Desalination Trade-offs: Brine, Energy and Alternatives',
      content: {
        ELEMENTARY: `
<h2>Ocean Water to Drinking Water</h2>
<p>The ocean holds almost all the water on Earth, but it is far too salty to drink. Some places with very little rain build big factories called desalination plants. These plants push seawater through very fine filters that let water through but hold the salt back. Out comes fresh water people can drink!</p>

<h3>It Takes Lots of Energy</h3>
<p>Pushing seawater through those filters takes a lot of pushing, and pushing takes energy. A desalination plant uses much more electricity than getting water from a river or lake. If that electricity comes from burning coal or gas, it adds pollution to the air.</p>
<ul>
<li><strong>Desalination:</strong> taking the salt out of seawater to make fresh water</li>
<li><strong>Filter:</strong> something that lets some things through and holds others back</li>
<li><strong>Brine:</strong> extra-salty water left over after desalination</li>
<li><strong>Energy:</strong> the power needed to make machines work</li>
<li><strong>Reuse:</strong> cleaning used water so it can be used again</li>
</ul>

<h3>What Happens to the Salt?</h3>
<p>The salt does not disappear. It ends up in leftover water called brine, which is twice as salty as the sea. If brine is dumped in one spot, it can sink and harm sea creatures on the seafloor. Plants must spread it out carefully.</p>

<h3>Try Other Ways First</h3>
<p>Before building a plant, towns can fix leaky pipes, catch rainwater and clean used water to use again. These ways often cost less. Desalination can be a helpful extra, especially in very dry places by the sea where rain hardly ever falls.</p>
`,
        MIDDLE_SCHOOL: `
<h2>The Price of Fresh Water From the Sea</h2>
<p>Desalination can make drinking water from an almost endless source: the ocean. Countries in the Middle East, North Africa and dry coastal cities in places like Australia and California rely on it. But desalination comes with trade-offs in energy, money and the environment. Smart planners weigh those trade-offs against other ways to get water.</p>

<h3>Energy and Cost</h3>
<p>Most modern plants use reverse osmosis, which forces seawater through membranes at high pressure. Making a cubic metre of drinking water this way takes around 3 to 4 kilowatt-hours of electricity, several times more than treating river water. Energy is the biggest running cost, and building a large plant can cost billions. Pairing plants with solar or wind power can cut their pollution and help keep energy costs steady.</p>
<ul>
<li><strong>Reverse osmosis:</strong> pushing water through a membrane at high pressure to remove salt</li>
<li><strong>Membrane:</strong> a thin sheet with tiny pores that blocks salt</li>
<li><strong>Brine discharge:</strong> releasing leftover salty water back into the sea</li>
<li><strong>Intake:</strong> the pipe that draws seawater into a plant</li>
<li><strong>Water recycling:</strong> treating wastewater so it can be used again</li>
</ul>

<h3>Effects on the Ocean</h3>
<p>For every litre of fresh water, plants produce more than a litre of brine. Brine is denser than seawater, so it can settle on the seafloor and stress plants and animals there. Intakes can also suck in fish eggs and tiny creatures. Well-designed plants use diffusers to mix brine quickly and screened or under-seafloor intakes to protect marine life.</p>

<h3>Alternatives to Weigh</h3>
<p>Fixing leaks, saving water, capturing stormwater and recycling wastewater often cost less and use less energy than desalination. Many cities build a mix: conservation and recycling first, with desalination as a drought-proof backup that can run harder when rain is scarce.</p>
`,
        HIGH_SCHOOL: `
<h2>Is Desalination the Answer?</h2>
<p>When droughts strike coastal cities, desalination looks like a perfect solution: an unlimited, drought-proof supply of fresh water. Global desalination capacity has grown rapidly, and some countries now get most of their drinking water from the sea. Yet desalination is one of the most energy-intensive and expensive ways to supply water, and it produces large volumes of brine. This chapter weighs those trade-offs and the alternatives planners compare it with.</p>

<h3>The Energy Question</h3>
<p>Reverse osmosis (RO) seawater plants typically use about 3 to 4 kWh of electricity per cubic metre of fresh water, compared with well under 1 kWh for conventional treatment of fresh water. Energy recovery devices recapture pressure from the brine stream and have cut energy use dramatically since the 1990s, but the thermodynamic minimum for separating salt means energy will always be significant. Where electricity comes from fossil fuels, desalination adds to greenhouse emissions; powering plants with renewable energy or buying renewable electricity offsets this.</p>
<ul>
<li><strong>Energy recovery device:</strong> equipment that reuses pressure from the brine stream to cut energy use</li>
<li><strong>Brine:</strong> the concentrated salty water left after fresh water is removed</li>
<li><strong>Diffuser:</strong> a pipe outlet with many nozzles that mixes brine quickly with seawater</li>
<li><strong>Impingement and entrainment:</strong> harm to marine life trapped against or drawn into an intake</li>
<li><strong>Potable reuse:</strong> purifying wastewater to drinking water standards</li>
</ul>

<h3>Brine and Marine Life</h3>
<p>Seawater RO recovers roughly 40 to 50 percent of intake water as fresh water; the rest returns as brine about twice as salty, sometimes warmer and containing treatment chemicals. Because brine sinks, it can harm seafloor communities like seagrass if poorly dispersed. Diffusers, siting in high-energy waters and limits on salinity at the edge of a mixing zone reduce impacts. Intakes can kill fish larvae through impingement and entrainment; subsurface intakes or fine screens and slow intake velocities help.</p>

<h3>Comparing Options</h3>
<p>Planners compare desalination with demand reduction, leak reduction, stormwater capture, groundwater banking and water recycling. Potable reuse of treated wastewater typically uses about half the energy of seawater desalination and is also drought-proof, though public acceptance must be built. Many cities treat desalination as an "insurance" supply that runs at full output only in droughts, which raises its cost per unit when it does run.</p>
`,
        UNDERGRADUATE: `
<h2>Desalination Trade-offs</h2>
<p>Desalination capacity worldwide exceeds 100 million cubic metres per day, concentrated in the Middle East, North Africa and arid coastal regions. Reverse osmosis has largely displaced thermal processes for new seawater plants because of its lower energy use. Nonetheless, desalination remains among the most energy- and capital-intensive water supply options, with environmental impacts at both intake and outfall. This chapter analyses those trade-offs and how desalination compares with alternative supplies.</p>

<h3>Energy Intensity and Thermodynamics</h3>
<p>The theoretical minimum energy to desalinate standard seawater at 50 percent recovery is roughly 1 kWh per cubic metre. Modern seawater RO plants with isobaric energy recovery devices achieve about 2.5 to 3.5 kWh per cubic metre for the RO stage, and 3 to 4 including intake, pre-treatment and conveyance. Brackish water desalination, with lower salinity, requires far less energy. The carbon footprint depends on the electricity mix, ranging from near zero with renewable supply to over 2 kg CO₂ per cubic metre with coal-heavy grids.</p>
<ul>
<li><strong>Recovery ratio:</strong> the fraction of feedwater that becomes fresh product water</li>
<li><strong>Specific energy consumption:</strong> energy used per cubic metre of product water</li>
<li><strong>Mixing zone:</strong> the area around an outfall where discharge standards may be exceeded while brine dilutes</li>
<li><strong>Zero liquid discharge:</strong> treatment that recovers water and solids so no liquid brine is discharged</li>
<li><strong>Levelised cost of water:</strong> lifetime cost of a supply divided by the volume it delivers</li>
</ul>

<h3>Brine Management</h3>
<p>Global brine production is estimated to exceed the volume of desalinated water produced. Ocean outfalls with multiport diffusers achieve rapid dilution; regulations set salinity limits at the edge of the mixing zone. Pre-treatment chemicals (antiscalants, coagulants) and occasional cleaning chemicals require management. Inland plants face harder choices: evaporation ponds, deep-well injection or energy-intensive zero liquid discharge.</p>

<h3>Costs and Planning</h3>
<p>Levelised costs for large seawater RO plants often fall around 0.5 to 1.5 US dollars per cubic metre, higher for small plants or where land, energy and financing are expensive. Because capital costs dominate, plants that run below capacity during wet years have higher unit costs. Integrated resource planning compares desalination with conservation, recycling, stormwater capture and transfers on cost, energy, reliability and environmental impacts.</p>

<h3>Alternatives</h3>
<p>Indirect and direct potable reuse typically require around 1 to 1.5 kWh per cubic metre, less than half that of seawater RO, while also reducing wastewater discharges. Combining options often yields more resilient portfolios than relying on any single source, and spreads risk across different weather and energy conditions.</p>
`,
        GRADUATE: `
<h2>Planning Decisions on Desalination</h2>
<p>Few water supply decisions are as consequential as committing to a large desalination plant. Plants are capital-intensive, long-lived and energy-hungry, and their value depends on uncertain future demand, climate and alternative supplies. Several cities have built plants during droughts that then sat largely idle when rains returned, while others rely on desalination as a core supply. This chapter examines lifecycle impacts, portfolio planning under uncertainty and governance.</p>

<h3>Lifecycle and Environmental Assessment</h3>
<p>Lifecycle assessments show operation dominates impacts through electricity use, so siting near renewable resources or contracting renewable power is the main lever for climate impact. Local marine effects depend on intake design, brine dilution and receiving-water ecology. Cumulative impacts matter in semi-enclosed seas with many plants, where brine and thermal discharges may raise salinity and temperature regionally.</p>
<ul>
<li><strong>Integrated resource planning:</strong> evaluating supply and demand options together against multiple objectives</li>
<li><strong>Real options analysis:</strong> valuing flexibility to expand, delay or adapt investments as uncertainty resolves</li>
<li><strong>Stranded asset:</strong> an investment that is underused or uneconomic before the end of its expected life</li>
<li><strong>Take-or-pay contract:</strong> an agreement requiring payment for a minimum volume whether or not it is taken</li>
<li><strong>Cumulative impact:</strong> combined environmental effects of multiple facilities or stressors</li>
</ul>

<h3>Portfolio Planning Under Uncertainty</h3>
<p>Because desalination provides drought-independent supply, its value is partly as insurance. Robust decision-making and real options approaches compare building large plants early with modular, staged capacity triggered by storage levels or demand. Studies of drought-era plants show the risks of take-or-pay contracts and plants sized for worst-case scenarios that become stranded assets. Combining desalination with aquifer storage, so surplus production in wet years is banked, can improve utilisation.</p>

<h3>Comparing With Alternatives</h3>
<p>Potable reuse offers drought-resilient supply at lower energy use and often lower cost, with public acceptance as the main barrier. Demand management and loss reduction often have the lowest levelised costs. Multi-criteria analysis weighing cost, energy, greenhouse emissions, reliability, ecological impacts and social acceptance supports transparent comparison.</p>

<h3>Governance and Equity</h3>
<p>Large desalination plants are often delivered through public-private partnerships, which allocate construction and operational risk but can lock utilities into long contracts. Cost recovery through water rates raises affordability concerns, particularly when plants are underused. Transparent planning processes, independent review of demand forecasts and attention to who pays and who benefits are central to legitimate decisions.</p>

<h3>Lessons From Drought-Era Plants</h3>
<p>Several large plants commissioned during severe droughts were placed in standby soon after rains returned, while ratepayers continued to cover capital and contract costs. Later reviews emphasised staged capacity, realistic demand forecasts, flexible contracts and integration with storage. Cities that planned desalination as part of a diversified portfolio, rather than as an emergency response, generally achieved better utilisation and public support.</p>
`,
        PHD: `
<h2>Research Frontiers in Desalination Sustainability</h2>
<p>Desalination's role in global water security is growing, yet its sustainability depends on resolving three challenges: reducing energy and carbon intensity, managing brine as a resource rather than a waste, and integrating desalination into water and energy planning under deep uncertainty. This chapter surveys research addressing each.</p>

<h3>Energy and Renewable Coupling</h3>
<p>Seawater reverse osmosis now operates within a factor of about two to three of the thermodynamic minimum, limiting further gains from membranes alone. Research targets reduced pre-treatment and intake energy, novel processes such as closed-circuit and osmotically assisted RO for high recovery, and direct coupling with variable renewable energy. Flexible operation, ramping output with renewable availability, raises questions about membrane fouling, capital utilisation and storage of product water. Desalination as a flexible load could help balance high-renewable grids, an area where coupled water-energy system modelling is still developing.</p>
<ul>
<li><strong>Brine valorisation:</strong> recovering valuable products such as minerals, salts or chemicals from brine</li>
<li><strong>Osmotically assisted reverse osmosis:</strong> an RO variant that reduces osmotic pressure to reach higher recovery</li>
<li><strong>Water-energy nexus:</strong> interdependencies between water and energy systems in planning and operation</li>
<li><strong>Deep uncertainty:</strong> conditions where probabilities of future states cannot be reliably estimated</li>
<li><strong>Membrane fouling:</strong> accumulation of material on membranes that reduces performance and raises energy use</li>
</ul>

<h3>Brine Valorisation and Environmental Science</h3>
<p>Brine contains magnesium, lithium and other resources, motivating research on selective recovery through crystallisation, electrodialysis and membrane distillation. Economic viability depends on concentrations, energy cost and markets; most approaches remain at pilot scale. Environmental research addresses long-term, cumulative effects of discharges in semi-enclosed seas, interactions with warming and deoxygenation, and ecotoxicology of treatment chemicals, informing outfall standards that are often based on limited data.</p>

<h3>Planning Under Deep Uncertainty</h3>
<p>Decision-making under deep uncertainty methods, such as robust decision-making and dynamic adaptive pathways, are applied to evaluate when and how much desalination capacity to build relative to reuse, conservation and transfers. Studies of drought-era investments provide natural experiments on how institutions respond to crisis and the long-term costs of rapid commitments.</p>

<h3>Equity and Governance</h3>
<p>Desalination can reshape who controls water, shifting supply from shared river systems to energy-dependent infrastructure owned or operated by private firms. Research on affordability, the distribution of costs across ratepayers and the political economy of mega-projects is needed, particularly in water-stressed countries where desalination is expanding rapidly.</p>

<h3>Methodological Needs</h3>
<p>Integrated models linking hydrology, energy systems, ocean processes and economics, combined with transparent data on plant performance and discharges, would support more balanced comparisons of desalination with other supply and demand options.</p>

<h3>Small-Scale and Decentralised Systems</h3>
<p>Research also explores small, solar-powered desalination for remote communities and islands, including membrane distillation and capacitive deionisation for brackish water. These systems face challenges in maintenance, fouling and cost per unit, but could expand access where centralised infrastructure is impractical. Evaluating their long-term reliability in the field is an important gap.</p>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'ws-desal2-q1',
      question: {
        ELEMENTARY: 'What is brine?',
        MIDDLE_SCHOOL: 'About how much electricity does reverse osmosis need per cubic metre of drinking water?',
        HIGH_SCHOOL: 'What do energy recovery devices do in a desalination plant?',
        UNDERGRADUATE: 'What is the approximate theoretical minimum energy to desalinate seawater at 50 percent recovery?',
        GRADUATE: 'Which stage dominates desalination\'s lifecycle environmental impacts?',
        PHD: 'Why are further energy gains from membranes alone limited?',
      },
      options: {
        ELEMENTARY: ['A kind of fish', 'A sweet drink', 'Extra-salty water left after desalination', 'Rainwater'],
        MIDDLE_SCHOOL: ['0.01 kWh', 'About 50 kWh', 'About 3 to 4 kWh', 'None'],
        HIGH_SCHOOL: ['Add more salt', 'Clean the beach', 'Reuse pressure from the brine stream to cut energy use', 'Heat the water'],
        UNDERGRADUATE: ['About 10 kWh per cubic metre', 'About 0.01 kWh per cubic metre', 'About 1 kWh per cubic metre', 'Zero'],
        GRADUATE: ['Construction', 'Decommissioning', 'Operation, through electricity use', 'Membrane shipping'],
        PHD: ['Membranes cannot be made', 'Salt is not dissolved in water', 'SWRO already operates within a factor of about two to three of the thermodynamic minimum', 'Energy use is already zero'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Brine is the very salty water left over after taking out fresh water.',
        MIDDLE_SCHOOL: 'Reverse osmosis uses roughly 3 to 4 kWh per cubic metre.',
        HIGH_SCHOOL: 'Energy recovery devices recapture pressure from brine, cutting energy use.',
        UNDERGRADUATE: 'Thermodynamics sets a minimum near 1 kWh per cubic metre at 50 percent recovery.',
        GRADUATE: 'Electricity use during operation dominates lifecycle impacts.',
        PHD: 'With SWRO close to the thermodynamic limit, other parts of the process offer more room.',
      },
    },
    {
      id: 'ws-desal2-q2',
      question: {
        ELEMENTARY: 'Why can brine harm sea creatures?',
        MIDDLE_SCHOOL: 'Why can brine settle on the seafloor?',
        HIGH_SCHOOL: 'What are impingement and entrainment?',
        UNDERGRADUATE: 'What is a mixing zone?',
        GRADUATE: 'What is a stranded asset?',
        PHD: 'What is brine valorisation?',
      },
      options: {
        ELEMENTARY: ['It is too cold', 'It is too sweet', 'It glows', 'If dumped in one spot, it sinks and is very salty'],
        MIDDLE_SCHOOL: ['It floats on top', 'It turns into gas', 'It evaporates instantly', 'It is denser than seawater'],
        HIGH_SCHOOL: ['Types of filters', 'Ways to save energy', 'Brine chemicals', 'Harm to marine life trapped against or drawn into an intake'],
        UNDERGRADUATE: ['A kitchen blender', 'A beach for swimming', 'A type of membrane', 'The area around an outfall where standards may be exceeded while brine dilutes'],
        GRADUATE: ['A plant that runs perfectly', 'A new pipeline', 'A budget surplus', 'An investment underused or uneconomic before the end of its expected life'],
        PHD: ['Making brine saltier', 'Pumping brine inland', 'Painting brine pipes', 'Recovering valuable products such as minerals from brine'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Brine is very salty and sinks, which can harm creatures on the seafloor.',
        MIDDLE_SCHOOL: 'Brine is denser than seawater, so it sinks.',
        HIGH_SCHOOL: 'Animals can be trapped on intake screens or drawn into the plant.',
        UNDERGRADUATE: 'Regulations allow higher salinity within a defined area while brine dilutes.',
        GRADUATE: 'Plants built for worst-case droughts can sit idle and become stranded assets.',
        PHD: 'Valorisation recovers resources like magnesium and lithium from brine.',
      },
    },
    {
      id: 'ws-desal2-q3',
      question: {
        ELEMENTARY: 'What should towns try before building a desalination plant?',
        MIDDLE_SCHOOL: 'How do well-designed plants protect sea life from brine?',
        HIGH_SCHOOL: 'About what share of intake water does seawater RO recover as fresh water?',
        UNDERGRADUATE: 'What options do inland desalination plants face for brine?',
        GRADUATE: 'Why can take-or-pay contracts be risky for utilities?',
        PHD: 'What question arises when desalination plants ramp output with renewable availability?',
      },
      options: {
        ELEMENTARY: ['Fixing leaks, catching rainwater and reusing water', 'Building more swimming pools', 'Using more water', 'Nothing'],
        MIDDLE_SCHOOL: ['Using diffusers to mix brine quickly', 'Dumping brine in one place', 'Adding sugar', 'Heating the ocean'],
        HIGH_SCHOOL: ['About 40 to 50 percent', 'About 99 percent', 'About 5 percent', 'Exactly 100 percent'],
        UNDERGRADUATE: ['Evaporation ponds, deep-well injection or zero liquid discharge', 'Dumping in rivers freely', 'Selling brine as drinking water', 'Nothing is needed'],
        GRADUATE: ['They require payment for minimum volumes whether or not water is taken', 'They lower prices', 'They forbid desalination', 'They have no obligations'],
        PHD: ['Effects on membrane fouling, capital utilisation and product water storage', 'Whether plants can be painted', 'Whether seawater is salty', 'How to stop the wind'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Fixing leaks, saving rainwater and reusing water often cost less.',
        MIDDLE_SCHOOL: 'Diffusers spread brine quickly so it does not collect on the seafloor.',
        HIGH_SCHOOL: 'Seawater RO turns about 40 to 50 percent of intake into fresh water.',
        UNDERGRADUATE: 'Without an ocean outfall, inland plants must use ponds, injection or ZLD.',
        GRADUATE: 'Utilities pay for minimum volumes even if they do not need the water.',
        PHD: 'Flexible operation affects fouling, capital use and the need to store product water.',
      },
    },
    {
      id: 'ws-desal2-q4',
      question: {
        ELEMENTARY: 'Why does a desalination plant need so much energy?',
        MIDDLE_SCHOOL: 'What is an intake?',
        HIGH_SCHOOL: 'How does potable reuse compare with seawater desalination on energy?',
        UNDERGRADUATE: 'Why do plants that run below capacity in wet years have higher unit costs?',
        GRADUATE: 'What can improve the utilisation of a desalination plant?',
        PHD: 'Which planning methods are applied to desalination under deep uncertainty?',
      },
      options: {
        ELEMENTARY: ['To make music', 'Lots of pushing is needed to force water through filters', 'To heat the beach', 'To light up the sky'],
        MIDDLE_SCHOOL: ['A water bottle', 'The pipe that draws seawater into a plant', 'A beach towel', 'A type of fish'],
        HIGH_SCHOOL: ['It uses ten times more', 'It typically uses about half the energy', 'It uses exactly the same', 'It uses no energy'],
        UNDERGRADUATE: ['Energy is free', 'Capital costs dominate and are spread over less water', 'Membranes get cheaper', 'Brine is valuable'],
        GRADUATE: ['Building it twice as big', 'Banking surplus production in aquifers during wet years', 'Turning it off permanently', 'Raising prices only'],
        PHD: ['Coin flips', 'Robust decision-making and dynamic adaptive pathways', 'Ignoring uncertainty', 'Single-year budgets'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Pushing seawater through very fine filters takes a lot of energy.',
        MIDDLE_SCHOOL: 'The intake is the pipe that brings seawater into the plant.',
        HIGH_SCHOOL: 'Potable reuse usually needs around half the energy of seawater RO.',
        UNDERGRADUATE: 'Fixed capital costs spread over less water raise the cost per unit.',
        GRADUATE: 'Banking water produced in wet years keeps the plant running and useful.',
        PHD: 'These methods help plan when uncertainty about the future is deep.',
      },
    },
    {
      id: 'ws-desal2-q5',
      question: {
        ELEMENTARY: 'What does desalination do?',
        MIDDLE_SCHOOL: 'How can desalination plants cut their pollution?',
        HIGH_SCHOOL: 'Why do many cities treat desalination as "insurance"?',
        UNDERGRADUATE: 'What is a levelised cost of water?',
        GRADUATE: 'Which approach supports transparent comparison of desalination with other options?',
        PHD: 'How can desalination reshape who controls water?',
      },
      options: {
        ELEMENTARY: ['Makes water saltier', 'Freezes the ocean', 'Makes fish', 'Takes salt out of seawater to make fresh water'],
        MIDDLE_SCHOOL: ['Using more coal', 'Running all night on diesel', 'Using more brine', 'Pairing plants with solar or wind power'],
        HIGH_SCHOOL: ['It never works', 'It is the cheapest supply', 'It replaces all rivers', 'It is drought-proof but costly, so it runs fully mainly in droughts'],
        UNDERGRADUATE: ['The price of one bottle', 'Daily electricity price', 'A membrane rating', 'Lifetime cost of a supply divided by the volume it delivers'],
        GRADUATE: ['Choosing randomly', 'Only cost comparisons', 'Political announcements', 'Multi-criteria analysis'],
        PHD: ['It has no effect on control', 'It returns water to rivers', 'It ends all private involvement', 'It shifts supply toward energy-dependent infrastructure often operated by private firms'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Desalination removes salt from seawater so people can drink it.',
        MIDDLE_SCHOOL: 'Using solar or wind electricity cuts the plant\'s pollution.',
        HIGH_SCHOOL: 'Desalination keeps working in droughts, but it is expensive to run all the time.',
        UNDERGRADUATE: 'Levelised cost spreads lifetime cost over all the water delivered.',
        GRADUATE: 'Multi-criteria analysis weighs cost, energy, reliability, ecology and acceptance together.',
        PHD: 'Desalination moves supply from shared rivers to plants that may be privately run.',
      },
    },
  ],
}

export default expansion
