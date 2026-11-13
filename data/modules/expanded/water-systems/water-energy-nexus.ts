import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'water-systems',
  moduleKey: 'water-energy-nexus',
  lessons: [
    {
      id: 'ws-nexus-1',
      title: 'Water and Energy Together',
      content: {
        ELEMENTARY: `
<h2>Two Best Friends: Water and Energy</h2>
<p>Water and energy are like two best friends who are always helping each other. When you turn on the tap, energy helped bring that water to you. When you switch on a light, water probably helped make that electricity. Let's find out how!</p>

<h3>Energy Helps Water</h3>
<p>Water is heavy. To get it from a river or a lake all the way to your kitchen, big machines called pumps push it through pipes. Pumps need electricity to work. Water also has to be cleaned before we drink it, and the cleaning machines use energy too.</p>
<ul>
<li><strong>Pump:</strong> a machine that pushes water through pipes, up hills and into tall buildings</li>
<li><strong>Treatment plant:</strong> a big building where dirty water is cleaned so it is safe to drink</li>
<li><strong>Pipe:</strong> a long tube that carries water under the ground to homes and schools</li>
</ul>

<h3>Water Helps Energy</h3>
<p>Many power plants make electricity by boiling water into steam. The steam spins a giant wheel called a turbine, and the turbine makes electricity. After that, the hot steam has to be cooled down, and that takes even more water.</p>
<ul>
<li><strong>Steam:</strong> the hot cloud that rises when water boils, strong enough to spin machines</li>
<li><strong>Turbine:</strong> a giant spinning wheel that turns motion into electricity</li>
<li><strong>Dam:</strong> a wall across a river that holds water back so it can flow through turbines</li>
</ul>

<h3>Saving One Saves Both</h3>
<p>Here is the cool part: because water and energy help each other, saving one saves the other too! When you take a shorter shower, you save water <em>and</em> the energy used to pump, clean and heat it. When you turn off the lights, the power plant needs a little less cooling water.</p>
<ol>
<li>Turn off the tap while you brush your teeth.</li>
<li>Switch off lights and screens when you leave a room.</li>
<li>Ask a grown-up to fix dripping taps.</li>
</ol>

<h3>Think About It</h3>
<p>Next time you drink a glass of water, imagine its journey: the pumps that pushed it, the plant that cleaned it, and the electricity that made it all happen. Water and energy really are a team!</p>
`,
        MIDDLE_SCHOOL: `
<h2>The Water-Energy Connection</h2>
<p>Scientists use a special word for things that are tightly linked: a <em>nexus</em>. Water and energy form one of the most important nexuses on Earth. We use energy to move and clean water, and we use water to produce most of our energy. Understanding this link helps us use both more wisely.</p>

<h3>How Much Energy Does Water Use?</h3>
<p>Before water reaches your home, it goes through several steps, and almost every step uses energy:</p>
<ol>
<li><strong>Collecting</strong> water from rivers, lakes or underground wells</li>
<li><strong>Pumping</strong> it to a treatment plant, sometimes uphill for many kilometers</li>
<li><strong>Treating</strong> it with filters and disinfection so it is safe to drink</li>
<li><strong>Delivering</strong> it through a network of pipes at the right pressure</li>
<li><strong>Heating</strong> it in your home for showers, laundry and dishes</li>
<li><strong>Cleaning</strong> the used water at a wastewater plant before returning it to nature</li>
</ol>
<p>Heating water at home is often the most energy-hungry step of all. That is why hot water is especially "expensive" for the planet.</p>

<h3>How Much Water Does Energy Use?</h3>
<p>Coal, gas and nuclear power plants are called <em>thermal</em> plants because they use heat to boil water into steam. The steam must be cooled and turned back into water, which needs a lot of cooling water from rivers, lakes or the sea. In the United States, power plants withdraw more fresh water than almost any other use.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Nexus:</strong> a close connection where changing one thing changes the other</li>
<li><strong>Thermal power plant:</strong> a power plant that boils water into steam to spin turbines</li>
<li><strong>Cooling water:</strong> water used to cool steam back into liquid inside a power plant</li>
<li><strong>Water withdrawal:</strong> water taken from a river, lake or aquifer, even if most of it is returned</li>
<li><strong>Water consumption:</strong> water that is used up and not returned, often because it evaporates</li>
<li><strong>Wastewater treatment:</strong> cleaning used water from homes before it goes back into rivers</li>
</ul>

<h3>Energy Sources That Sip Instead of Gulp</h3>
<table>
<thead><tr><th>Energy source</th><th>Water needed to run</th></tr></thead>
<tbody>
<tr><td>Coal and nuclear</td><td>A lot, mostly for cooling</td></tr>
<tr><td>Natural gas (combined cycle)</td><td>Less than coal, still needs cooling</td></tr>
<tr><td>Solar panels</td><td>Very little, mainly for occasional cleaning</td></tr>
<tr><td>Wind turbines</td><td>Almost none</td></tr>
</tbody>
</table>

<h3>Why It Matters</h3>
<p>During droughts, rivers get low and warm. Some power plants have had to cut back because there was not enough cool water. At the same time, people need more energy to pump water from deeper wells. Choosing wind and solar power, and saving hot water at home, eases pressure on both systems at once.</p>
`,
        HIGH_SCHOOL: `
<h2>The Water-Energy Nexus: Two Systems, One Problem</h2>
<p>Energy and water are usually managed by different companies, regulated by different agencies and studied in different classes. In reality they are deeply intertwined. Engineers call this relationship the <em>water-energy nexus</em>, and it shapes everything from your utility bill to how cities plan for drought and climate change.</p>

<h3>Energy for Water</h3>
<p>Water is heavy (one cubic meter weighs a metric ton), so moving it takes serious energy. The energy embedded in a glass of tap water comes from several stages:</p>
<ul>
<li><strong>Conveyance:</strong> pumping water from its source to where it is needed, sometimes across mountains</li>
<li><strong>Treatment:</strong> filtering and disinfecting raw water so it meets drinking water standards</li>
<li><strong>Distribution:</strong> keeping pipes pressurized so water reaches every building</li>
<li><strong>End use:</strong> heating, chilling or pressurizing water inside homes and businesses</li>
<li><strong>Wastewater treatment:</strong> aerating and processing sewage so it can be safely released</li>
<li><strong>Desalination:</strong> removing salt from seawater, usually by forcing it through membranes at high pressure</li>
</ul>
<p>Water and wastewater utilities are often the single largest electricity users in a town's government budget. Desalination is the most energy-intensive source of fresh water, typically several times more than treating river or lake water.</p>

<h3>Water for Energy</h3>
<p>Most of the world's electricity still comes from thermal plants that turn water into steam. Two cooling designs dominate:</p>
<table>
<thead><tr><th>Cooling design</th><th>Withdrawal</th><th>Consumption</th></tr></thead>
<tbody>
<tr><td>Once-through cooling</td><td>Very high: water passes through once and returns warmer</td><td>Low</td></tr>
<tr><td>Recirculating (cooling towers)</td><td>Much lower</td><td>Higher, because water evaporates</td></tr>
<tr><td>Dry (air) cooling</td><td>Minimal</td><td>Minimal, but efficiency drops on hot days</td></tr>
</tbody>
</table>
<p>The difference between <em>withdrawal</em> (water taken) and <em>consumption</em> (water not returned) matters: once-through plants can harm fish and warm rivers, while cooling towers permanently remove water from a basin. Fuel production uses water too, from mining to refining to growing biofuel crops.</p>

<h3>When the Systems Collide</h3>
<p>Heat waves and droughts stress both systems at the same moment. Electricity demand peaks for air conditioning just as rivers run low and warm, and some plants must reduce output to protect aquatic life. Meanwhile, falling groundwater forces farms and cities to pump from deeper, which takes more energy.</p>

<h3>Solutions That Help Both</h3>
<ol>
<li><strong>Low-water electricity:</strong> wind and solar photovoltaics need almost no water to operate.</li>
<li><strong>Efficient pumping:</strong> variable-speed pumps and leak repair cut both water and energy losses.</li>
<li><strong>Energy recovery:</strong> wastewater plants can capture biogas from sludge to generate their own power.</li>
<li><strong>Hot water savings:</strong> efficient showerheads and heat-pump water heaters save twice.</li>
</ol>
<p>Because every liter saved also saves energy, water conservation is quietly one of the most effective climate strategies available to households and cities.</p>
`,
        UNDERGRADUATE: `
<h2>Analyzing the Water-Energy Nexus</h2>
<p>The water-energy nexus describes the two-way dependency between water resources and energy systems. Treating either system in isolation leads to blind spots: an energy plan that ignores water availability can strand power plants during drought, and a water plan that ignores energy can lock a city into high-carbon supply. This lesson builds the analytical vocabulary needed to evaluate both together.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Energy intensity of water:</strong> the energy required to supply or treat a unit volume of water, usually in kilowatt-hours per cubic meter</li>
<li><strong>Water intensity of energy:</strong> the water withdrawn or consumed per unit of energy produced, often in liters per megawatt-hour</li>
<li><strong>Embedded energy:</strong> the total energy used across the water cycle, from extraction through end use and wastewater treatment</li>
<li><strong>Consumptive use:</strong> water removed from a basin through evaporation, incorporation into products or transfer elsewhere</li>
<li><strong>Thermal pollution:</strong> the release of heated cooling water that lowers dissolved oxygen and harms aquatic ecosystems</li>
<li><strong>Life-cycle assessment:</strong> an accounting method that tracks resource use across every stage of a product or service</li>
</ul>

<h3>Energy Intensity Across Water Sources</h3>
<p>Energy intensity varies by orders of magnitude depending on source and treatment:</p>
<table>
<thead><tr><th>Water source</th><th>Relative energy intensity</th><th>Main driver</th></tr></thead>
<tbody>
<tr><td>Gravity-fed surface water</td><td>Very low</td><td>Minimal pumping, conventional treatment</td></tr>
<tr><td>Local groundwater</td><td>Low to moderate</td><td>Lift from depth; rises as water tables fall</td></tr>
<tr><td>Long-distance transfers</td><td>Moderate to high</td><td>Pumping over terrain and distance</td></tr>
<tr><td>Water reuse (advanced treatment)</td><td>Moderate to high</td><td>Membrane filtration and advanced oxidation</td></tr>
<tr><td>Seawater desalination</td><td>Highest</td><td>Overcoming osmotic pressure in reverse osmosis</td></tr>
</tbody>
</table>
<p>For reverse osmosis, a thermodynamic minimum energy exists for separating salt from water; modern plants operate within a few multiples of that floor thanks to energy recovery devices that capture pressure from the brine stream.</p>

<h3>Water Intensity Across Electricity Sources</h3>
<p>Thermoelectric generation dominates freshwater withdrawals in many industrialized countries. Combined-cycle gas plants use less cooling water per unit of electricity than coal or nuclear because a portion of their output comes from a gas turbine that needs no steam cycle. Concentrating solar power with wet cooling can be water-intensive, whereas photovoltaics and wind are nearly water-free in operation. Hydropower is a special case: it consumes little water directly, but large reservoirs can lose significant volumes to evaporation, and how that loss is allocated among irrigation, flood control and power is contested.</p>

<h3>Coupled Risks</h3>
<p>Coupling creates correlated failure modes. Drought simultaneously raises water scarcity, reduces hydropower, constrains thermal plant cooling and increases groundwater pumping energy. Climate change intensifies these correlations by raising water temperatures, which lowers cooling efficiency and tightens environmental discharge limits.</p>

<h3>Applying Nexus Thinking</h3>
<ol>
<li>Map the system boundary: which water and energy flows matter for the decision?</li>
<li>Quantify intensities for each option using consistent units.</li>
<li>Distinguish withdrawal from consumption and identify the affected basin.</li>
<li>Test options against drought and heat scenarios, not just average years.</li>
<li>Look for co-benefits, such as efficiency measures that reduce both demands.</li>
</ol>
`,
        GRADUATE: `
<h2>Integrated Planning for the Water-Energy Nexus</h2>
<p>At the graduate level, the nexus is less a set of facts than a planning and governance problem. Water and energy infrastructure have long lifetimes, separate regulators and different pricing logics, yet they share exposure to drought, heat and demand growth. This lesson examines how planners quantify coupling, where institutional silos create inefficiency, and which tools support integrated decisions.</p>

<h3>Quantifying Coupling</h3>
<ul>
<li><strong>Water-energy footprint:</strong> a joint metric expressing the water use of an energy pathway and the energy use of a water pathway on a common basis</li>
<li><strong>Marginal intensity:</strong> the change in energy or water demand from the next unit of supply, which often differs sharply from the average</li>
<li><strong>Integrated resource planning:</strong> evaluating supply and demand-side options across both sectors with shared scenarios and costs</li>
<li><strong>Stranded asset risk:</strong> the chance that infrastructure becomes uneconomic before the end of its life because of resource constraints</li>
<li><strong>Environmental flow:</strong> the quantity and timing of river flow required to sustain ecosystems, which limits withdrawals for cooling and supply</li>
<li><strong>Demand-side management:</strong> programs that shift or reduce consumption, such as time-of-use pumping or efficient fixtures</li>
</ul>
<p>Average intensities are useful for inventories, but decisions turn on marginal values. A city whose next increment of supply is desalinated seawater faces a very different energy profile from one expanding gravity-fed reservoirs, even if their current averages look similar.</p>

<h3>Institutional Silos</h3>
<p>Energy regulators often evaluate generation without pricing water scarcity, while water agencies may treat electricity as an exogenous cost. The result is predictable: thermal plants sited in water-stressed basins, water utilities that pump during peak electricity prices, and few mechanisms to credit water savings for their energy value. Integrated approaches include joint scenario planning, shared data platforms and regulatory recognition of cross-sector benefits.</p>

<h3>Operational Flexibility as a Resource</h3>
<p>Water systems contain storage in reservoirs, tanks and aquifers. That storage allows pumping and treatment loads to be shifted in time, turning water utilities into flexible electricity consumers. Scheduling pumping when renewable output is high, or participating in demand-response programs, can lower costs and emissions without changing service levels.</p>
<table>
<thead><tr><th>Lever</th><th>Water benefit</th><th>Energy benefit</th></tr></thead>
<tbody>
<tr><td>Leak reduction in distribution networks</td><td>Less non-revenue water</td><td>Less pumping and treatment energy</td></tr>
<tr><td>Load shifting with storage tanks</td><td>Neutral if pressure is maintained</td><td>Lower peak demand, better renewable integration</td></tr>
<tr><td>Biogas recovery at wastewater plants</td><td>Improved sludge stabilization</td><td>On-site generation offsets grid purchases</td></tr>
<tr><td>Dry or hybrid cooling retrofits</td><td>Large withdrawal reductions</td><td>Some efficiency penalty on hot days</td></tr>
</tbody>
</table>

<h3>Equity and Governance</h3>
<p>Nexus trade-offs are distributional. Energy-intensive supply raises water bills, which weigh most on low-income households, while thermal pollution and reservoir operations affect downstream and Indigenous communities whose water rights may predate the infrastructure. Credible integrated plans make these allocations explicit rather than leaving them to separate agencies.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Define the decision, boundary and time horizon, including climate scenarios.</li>
<li>Estimate marginal water and energy intensities for each option.</li>
<li>Stress-test against compound events such as heat waves during drought.</li>
<li>Value co-benefits and cross-sector externalities explicitly.</li>
<li>Assess who bears costs and risks, and through which institutions.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in the Water-Energy Nexus</h2>
<p>Nexus research has matured from inventory studies, which tabulate intensities, to coupled modeling and governance analysis. The open questions concern how to represent interdependence under deep uncertainty, how to scale from facilities to basins and grids, and how institutional design shapes outcomes. This lesson surveys methods, debates and research gaps for advanced study.</p>

<h3>Modeling Approaches</h3>
<ul>
<li><strong>Soft-linked models:</strong> separate water and energy models exchanging outputs iteratively, preserving sector detail at the cost of consistency</li>
<li><strong>Hard-linked models:</strong> a single optimization or simulation framework that represents both sectors with shared constraints</li>
<li><strong>Agent-based models:</strong> simulations of individual actors such as utilities, farmers and regulators whose decisions produce emergent system behavior</li>
<li><strong>Robust decision making:</strong> exploring many plausible futures to find strategies that perform acceptably across them rather than optimally in one</li>
<li><strong>Multi-objective optimization:</strong> identifying trade-off frontiers among cost, emissions, water stress and reliability instead of a single optimum</li>
<li><strong>Hydro-economic models:</strong> models that combine hydrology with economic valuation of water across competing uses</li>
</ul>
<p>Soft-linking dominates practice because sector models are mature and institutionally owned, but it can miss feedbacks such as drought-driven electricity price spikes that alter pumping schedules. Hard-linked capacity-expansion models capture these interactions but face data, resolution and tractability limits.</p>

<h3>Scale and Resolution</h3>
<p>Nexus constraints bind locally and temporally: a basin-level annual balance can hide summer cooling-water shortfalls at a specific plant. Research increasingly couples high-resolution hydrology with hourly grid operations, raising questions about how to aggregate without losing the extremes that matter for reliability. Representing water temperature, not just quantity, is essential for thermal plant derating.</p>

<h3>Contested Questions</h3>
<table>
<thead><tr><th>Question</th><th>Why it is contested</th></tr></thead>
<tbody>
<tr><td>How to allocate reservoir evaporation among uses</td><td>Allocation choice can swing hydropower's water footprint widely</td></tr>
<tr><td>Withdrawal versus consumption as the policy metric</td><td>Each captures different harms: ecological disturbance versus basin depletion</td></tr>
<tr><td>Value of water in energy planning</td><td>Market prices rarely reflect scarcity or environmental flows</td></tr>
<tr><td>Rebound effects of efficiency</td><td>Savings in one sector may enable growth that erodes nexus benefits</td></tr>
</tbody>
</table>

<h3>Decarbonization Interactions</h3>
<p>Deep decarbonization reshapes the nexus. Wind and photovoltaics reduce operational water demand, but carbon capture adds cooling load to fossil plants, green hydrogen requires water for electrolysis plus purification, and bioenergy can be highly water-intensive depending on irrigation. Meanwhile, electrification of water heating and desalination couples water service more tightly to grid conditions. Assessing net effects requires consistent life-cycle boundaries and attention to regional water stress rather than global averages.</p>

<h3>Governance Research</h3>
<p>Institutional analysis examines why integrated planning is rare despite clear technical benefits. Explanations include regulatory fragmentation, misaligned incentives, data ownership and path dependence in infrastructure. Polycentric governance frameworks suggest coordination can emerge without full institutional merger, through shared data, joint scenarios and boundary organizations.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Coupled models that represent water temperature, hourly operations and long-term capacity choices together.</li>
<li>Uncertainty characterization for compound drought-heat events under climate change.</li>
<li>Empirical evaluation of demand flexibility from water utilities in high-renewable grids.</li>
<li>Methods that integrate equity and procedural justice into nexus optimization.</li>
<li>Consistent water accounting for emerging fuels such as hydrogen and synthetic fuels.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'wnexusq1',
      question: {
        ELEMENTARY: 'Why do water and energy need each other?',
        MIDDLE_SCHOOL: 'Which step in getting water to your home often uses the most energy?',
        HIGH_SCHOOL: 'Why do most thermal power plants need large amounts of water?',
        UNDERGRADUATE: 'What does "embedded energy" in water describe?',
        GRADUATE: 'What is integrated resource planning in the nexus context?',
        PHD: 'What distinguishes a hard-linked nexus model from a soft-linked one?',
      },
      options: {
        ELEMENTARY: ['Pumps need energy to move water, and power plants need water to cool down', 'They do not need each other at all', 'Only water needs energy', 'Only energy needs water'],
        MIDDLE_SCHOOL: ['Heating water inside the home', 'Painting the pipes', 'Reading the water meter', 'Building the water tower roof'],
        HIGH_SCHOOL: ['To cool the steam after it spins the turbines', 'To clean the solar panels every hour', 'To fill decorative fountains', 'To lubricate the transmission lines'],
        UNDERGRADUATE: ['All energy used across the water cycle, from extraction to wastewater treatment', 'The chemical energy stored inside water molecules', 'Only the electricity used by household taps', 'Energy produced by hydropower dams'],
        GRADUATE: ['Evaluating water and energy options together with shared scenarios and costs', 'Planning energy projects without considering water', 'Pricing water only by volume delivered', 'Letting each utility plan independently'],
        PHD: ['Both sectors share one framework with common constraints instead of exchanging outputs between separate models', 'It uses only historical data', 'It ignores water temperature entirely', 'It optimizes one sector at a time'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Energy runs the pumps that bring us water, and many power plants use water to cool down. They help each other!',
        MIDDLE_SCHOOL: 'Heating water for showers, laundry and dishes is often the most energy-hungry step of the whole water journey.',
        HIGH_SCHOOL: 'Thermal plants boil water into steam to spin turbines, then need cooling water to condense that steam back into liquid.',
        UNDERGRADUATE: 'Embedded energy counts every stage: conveyance, treatment, distribution, end use and wastewater treatment.',
        GRADUATE: 'Integrated resource planning puts supply and demand options from both sectors on a common footing.',
        PHD: 'Hard-linked models capture feedbacks inside one framework; soft-linked models iterate between separate sector models.',
      },
    },
    {
      id: 'wnexusq2',
      question: {
        ELEMENTARY: 'Which of these saves both water and energy?',
        MIDDLE_SCHOOL: 'Which energy source needs almost no water to run?',
        HIGH_SCHOOL: 'What is the difference between water withdrawal and water consumption?',
        UNDERGRADUATE: 'Why do combined-cycle gas plants use less cooling water per unit of electricity than coal plants?',
        GRADUATE: 'Why do planners focus on marginal rather than average intensity?',
        PHD: 'Why is reservoir evaporation a contested issue in hydropower water accounting?',
      },
      options: {
        ELEMENTARY: ['Leaving the lights on all night', 'Taking a shorter shower', 'Running the tap while brushing teeth', 'Filling the bath to the top'],
        MIDDLE_SCHOOL: ['Coal power', 'Nuclear power', 'Wind power', 'Natural gas steam plants'],
        HIGH_SCHOOL: ['They mean exactly the same thing', 'Withdrawal is water taken; consumption is water not returned', 'Consumption is always larger than withdrawal', 'Withdrawal only applies to oceans'],
        UNDERGRADUATE: ['They burn hotter coal', 'Part of their output comes from a gas turbine that needs no steam cycle', 'They never need cooling', 'They use seawater only'],
        GRADUATE: ['Marginal values are easier to calculate', 'Decisions change the next unit of supply, whose intensity can differ sharply from the average', 'Average intensities are always zero', 'Regulators forbid using averages'],
        PHD: ['Evaporation never happens from reservoirs', 'How evaporation is allocated among irrigation, flood control and power can swing hydropower\'s footprint widely', 'Evaporation is always counted as zero', 'Only wind farms have reservoirs'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'A shorter shower uses less water and less energy to heat and pump that water.',
        MIDDLE_SCHOOL: 'Wind turbines turn moving air into electricity and need almost no water to operate.',
        HIGH_SCHOOL: 'A plant can withdraw a lot but return most of it warmer; consumption is the part lost, mainly to evaporation.',
        UNDERGRADUATE: 'In combined-cycle plants the gas turbine generates power without steam, so less output depends on water cooling.',
        GRADUATE: 'The next increment of supply (for example desalination) can be far more energy-intensive than the current average.',
        PHD: 'Reservoirs serve multiple purposes, so the allocation rule for evaporation strongly shapes hydropower\'s reported water use.',
      },
    },
    {
      id: 'wnexusq3',
      question: {
        ELEMENTARY: 'What spins inside a power plant to make electricity?',
        MIDDLE_SCHOOL: 'What does the word "nexus" mean?',
        HIGH_SCHOOL: 'Which source of fresh water is usually the most energy-intensive?',
        UNDERGRADUATE: 'What is thermal pollution?',
        GRADUATE: 'How can water utilities act as flexible electricity consumers?',
        PHD: 'What is the main aim of robust decision making in nexus planning?',
      },
      options: {
        ELEMENTARY: ['A bicycle', 'A turbine', 'A water bottle', 'A rainbow'],
        MIDDLE_SCHOOL: ['A type of pipe', 'A brand of pump', 'A close connection where changing one thing changes the other', 'A kind of power plant'],
        HIGH_SCHOOL: ['Gravity-fed lake water', 'Rainwater from a roof', 'Seawater desalination', 'Local spring water'],
        UNDERGRADUATE: ['Releasing heated cooling water that lowers dissolved oxygen and harms aquatic life', 'Air pollution from boilers', 'Noise from turbines', 'Light pollution near cities'],
        GRADUATE: ['By using storage to shift pumping and treatment to times when electricity is cheap or renewable', 'By shutting down during every heat wave', 'By building more coal plants', 'By pumping only at peak demand'],
        PHD: ['Finding strategies that perform acceptably across many plausible futures', 'Finding the single optimal plan for the most likely future', 'Ignoring uncertainty to simplify models', 'Using only one climate scenario'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Steam or moving water spins a turbine, and the spinning turbine makes electricity.',
        MIDDLE_SCHOOL: 'A nexus is a tight link, like water and energy, where a change in one affects the other.',
        HIGH_SCHOOL: 'Desalination must push water through membranes at high pressure, which takes much more energy than treating fresh water.',
        UNDERGRADUATE: 'Warm discharge water holds less oxygen and can stress or kill fish and other aquatic organisms.',
        GRADUATE: 'Reservoirs and tanks let utilities move energy use in time without reducing water service.',
        PHD: 'Robust decision making searches for strategies that hold up across many futures instead of optimizing for one forecast.',
      },
    },
    {
      id: 'wnexusq4',
      question: {
        ELEMENTARY: 'What can you do when you leave a room to help save water at the power plant?',
        MIDDLE_SCHOOL: 'Why can droughts cause problems for some power plants?',
        HIGH_SCHOOL: 'Which cooling design withdraws the most water?',
        UNDERGRADUATE: 'What helps modern reverse osmosis plants approach the thermodynamic minimum energy?',
        GRADUATE: 'Which measure reduces both non-revenue water and pumping energy?',
        PHD: 'Why does green hydrogen complicate the decarbonized water-energy nexus?',
      },
      options: {
        ELEMENTARY: ['Open the window', 'Play music louder', 'Turn on another light', 'Switch off the lights'],
        MIDDLE_SCHOOL: ['Rivers get too cold', 'There may not be enough cool water to cool the steam', 'Solar panels stop working', 'Wind turbines freeze'],
        HIGH_SCHOOL: ['Dry air cooling', 'Recirculating cooling towers', 'Hybrid cooling', 'Once-through cooling'],
        UNDERGRADUATE: ['Adding more salt to the feed water', 'Running pumps at maximum speed', 'Removing all membranes', 'Energy recovery devices that capture pressure from the brine'],
        GRADUATE: ['Raising water prices only', 'Building a larger reservoir', 'Increasing system pressure', 'Detecting and repairing leaks in the distribution network'],
        PHD: ['Hydrogen needs no water at all', 'It only affects transportation fuels', 'Water footprints are identical everywhere', 'Electrolysis needs purified water, adding demand that must be assessed against regional water stress'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Less electricity used means power plants need a little less cooling water.',
        MIDDLE_SCHOOL: 'Thermal plants need cool water; in droughts rivers run low and warm, so some plants must cut output.',
        HIGH_SCHOOL: 'Once-through cooling pulls huge volumes through the plant once and returns it warmer.',
        UNDERGRADUATE: 'Energy recovery devices reuse the pressure in the concentrated brine, cutting overall energy use.',
        GRADUATE: 'Every liter lost to leaks was already pumped and treated, so fixing leaks saves both water and energy.',
        PHD: 'Electrolysis consumes water (plus purification), so its water impact depends heavily on local scarcity.',
      },
    },
    {
      id: 'wnexusq5',
      question: {
        ELEMENTARY: 'What is a dam?',
        MIDDLE_SCHOOL: 'What happens at a wastewater treatment plant?',
        HIGH_SCHOOL: 'How can a wastewater plant produce some of its own energy?',
        UNDERGRADUATE: 'Why is drought considered a "coupled risk" for water and energy?',
        GRADUATE: 'Why are nexus trade-offs described as distributional?',
        PHD: 'Why is water temperature important in high-resolution nexus models?',
      },
      options: {
        ELEMENTARY: ['A wall across a river that holds water back', 'A type of fish', 'A water bottle', 'A rain cloud'],
        MIDDLE_SCHOOL: ['Used water is cleaned before it goes back to nature', 'Water is turned into electricity', 'New water is created', 'Water is frozen into ice'],
        HIGH_SCHOOL: ['By capturing biogas from sludge and burning it to generate power', 'By adding more chlorine', 'By heating the river', 'By installing more pipes'],
        UNDERGRADUATE: ['It affects only water prices', 'It reduces water supply, hydropower and cooling capacity while raising pumping energy at the same time', 'It increases rainfall', 'It only affects solar panels'],
        GRADUATE: ['Costs and risks fall unevenly on different groups, such as low-income households and downstream communities', 'All users are always affected equally', 'They only concern engineers', 'They have no effect on bills'],
        PHD: ['Warmer water lowers cooling efficiency and tightens discharge limits, causing thermal plant derating', 'Temperature has no effect on power plants', 'Only volume matters for reliability', 'Models cannot represent temperature'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'A dam holds water back so it can be stored or flow through turbines to make electricity.',
        MIDDLE_SCHOOL: 'Wastewater plants clean the water we have used before it returns to rivers and the sea.',
        HIGH_SCHOOL: 'Digesting sludge produces biogas, which can fuel engines or turbines that power the plant.',
        UNDERGRADUATE: 'Drought hits several parts of both systems at once, so failures are correlated rather than independent.',
        GRADUATE: 'Choices about supply, pricing and discharge shift costs and harms onto specific communities.',
        PHD: 'Annual volume balances can hide summer temperature limits that force plants to reduce output.',
      },
    },
  ],
}

export default expansion
