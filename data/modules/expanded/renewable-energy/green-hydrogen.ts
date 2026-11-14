import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'renewable-energy',
  moduleKey: 'green-hydrogen',
  lessons: [
    {
      id: 're-h2-1',
      title: 'Green Hydrogen: Clean Fuel From Sun, Wind and Water',
      content: {
        ELEMENTARY: `
<h2>Making Fuel From Water and Sunshine</h2>
<p>Hi, I am Pip the Water Drop! Did you know that inside every drop of water there is a hidden fuel? It is called hydrogen. When we use clean electricity from the sun or the wind to set it free, we call it <em>green hydrogen</em>. Let's find out how it works!</p>

<h3>What Is Inside a Water Drop?</h3>
<p>Water is made of tiny pieces called atoms. Each tiny bit of water has two hydrogen atoms and one oxygen atom holding hands. Hydrogen is the lightest thing in the whole universe. It is so light that it floats away very fast if we let it go.</p>
<ul>
<li><strong>Atom:</strong> a tiny building block that everything around us is made from</li>
<li><strong>Hydrogen:</strong> the lightest gas there is, which can be used as a clean fuel</li>
<li><strong>Oxygen:</strong> the gas in the air that people and animals need to breathe</li>
</ul>

<h3>Splitting Water With Clean Power</h3>
<p>A special machine called an electrolyzer uses electricity to pull water apart. Hydrogen bubbles come out on one side and oxygen bubbles come out on the other side. If the electricity comes from solar panels or wind turbines, no smoke is made at all. That is why we call it green!</p>
<ul>
<li><strong>Electrolyzer:</strong> a machine that uses electricity to split water into hydrogen and oxygen</li>
<li><strong>Solar panel:</strong> a flat panel that turns sunlight into electricity</li>
<li><strong>Wind turbine:</strong> a tall tower with blades that spin in the wind to make electricity</li>
</ul>

<h3>What Can Green Hydrogen Do?</h3>
<p>Green hydrogen can be saved for later, like packing a snack for a long trip. It can help make strong steel for bridges. It can help make plant food for farms. It can even power big trucks and buses. When hydrogen is used in a fuel cell, the only thing that comes out of the tailpipe is water!</p>

<h3>Why Is It Tricky?</h3>
<p>Hydrogen is so tiny and light that it is hard to keep in a tank. It also takes a lot of electricity to make. So grown-ups are working hard to make it cheaper and to use it where it helps the most.</p>

<h3>Things You Can Do</h3>
<ol>
<li>Draw a picture of the sun and wind helping to split a water drop.</li>
<li>Look for buses or trucks in your town that say they run on hydrogen.</li>
<li>Tell a friend that the only thing a hydrogen bus puffs out is water.</li>
</ol>
`,
        MIDDLE_SCHOOL: `
<h2>Green Hydrogen: Turning Clean Electricity Into Fuel</h2>
<p>Hydrogen is the most common element in the universe, but on Earth it is almost always locked inside other things, like water or natural gas. To use it as a fuel, we have to set it free. How we do that decides whether hydrogen is clean or polluting. When renewable electricity is used to split water, the result is called green hydrogen.</p>

<h3>The Colors of Hydrogen</h3>
<p>Hydrogen gas has no color at all. People use color names as nicknames to describe how it was made:</p>
<table>
<thead><tr><th>Nickname</th><th>How it is made</th><th>Pollution</th></tr></thead>
<tbody>
<tr><td>Grey hydrogen</td><td>From natural gas, releasing carbon dioxide</td><td>High</td></tr>
<tr><td>Blue hydrogen</td><td>From natural gas, with some carbon dioxide captured and stored</td><td>Lower, but not zero</td></tr>
<tr><td>Green hydrogen</td><td>From water, using renewable electricity</td><td>Very low</td></tr>
</tbody>
</table>
<p>Today, most hydrogen in the world is still grey. Switching to green hydrogen is one way to cut a lot of carbon pollution.</p>

<h3>How Electrolysis Works</h3>
<p>Inside an electrolyzer there are two metal plates called electrodes, sitting in water with something added to help electricity flow. When electricity runs through, water molecules break apart. Hydrogen gathers at one electrode and oxygen at the other. The hydrogen is collected, cleaned and squeezed into tanks.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Electrolysis:</strong> using electricity to split a substance, such as water, into its parts</li>
<li><strong>Electrode:</strong> a metal plate where electricity enters or leaves a liquid</li>
<li><strong>Renewable electricity:</strong> power from sources that refill naturally, such as sun, wind and flowing water</li>
<li><strong>Fuel cell:</strong> a device that combines hydrogen and oxygen to make electricity, heat and water</li>
<li><strong>Ammonia:</strong> a chemical made with hydrogen that is used to make fertilizer for crops</li>
<li><strong>Emissions:</strong> gases such as carbon dioxide released into the air</li>
</ul>

<h3>Where Green Hydrogen Helps Most</h3>
<p>Electricity can power cars and homes directly, and that is usually more efficient. Green hydrogen is most useful for jobs that are hard to do with batteries or wires:</p>
<ol>
<li>Making fertilizer, which already uses a lot of grey hydrogen today</li>
<li>Making steel without burning coal</li>
<li>Fueling ships and possibly long-distance trucks</li>
<li>Storing extra wind and solar energy for many weeks</li>
</ol>

<h3>The Challenges</h3>
<p>Making green hydrogen loses some energy along the way, and electrolyzers are still expensive. Hydrogen is also hard to store because it is so light and can leak through tiny gaps. Engineers are working on cheaper machines and better tanks so green hydrogen can grow.</p>
`,
        HIGH_SCHOOL: `
<h2>Green Hydrogen: Electrolysis, Storage and Fuel Cells</h2>
<p>Hydrogen is already a major industrial chemical, used mostly to make fertilizer and to refine oil. Nearly all of it is made from fossil fuels, which releases large amounts of carbon dioxide. Green hydrogen promises the same molecule with almost no emissions, made by splitting water using renewable electricity. Understanding where it fits, and where it does not, is a key part of planning a clean energy system.</p>

<h3>Electrolysis Technologies</h3>
<p>All electrolyzers split water into hydrogen and oxygen, but they do it in different ways:</p>
<table>
<thead><tr><th>Type</th><th>How it works</th><th>Strengths</th><th>Limitations</th></tr></thead>
<tbody>
<tr><td>Alkaline</td><td>Electrodes in a liquid alkaline solution</td><td>Mature, uses cheaper materials</td><td>Slower to respond to changing power</td></tr>
<tr><td>Proton exchange membrane (PEM)</td><td>A solid polymer membrane carries protons</td><td>Compact, follows wind and solar output quickly</td><td>Needs costly metals such as platinum and iridium</td></tr>
<tr><td>Solid oxide</td><td>Ceramic material at very high temperature</td><td>Can be very efficient, especially with waste heat</td><td>Less mature, materials wear at high heat</td></tr>
</tbody>
</table>

<h3>Key Terms</h3>
<ul>
<li><strong>Green hydrogen:</strong> hydrogen made by electrolysis powered by renewable electricity</li>
<li><strong>Grey hydrogen:</strong> hydrogen made from natural gas without capturing the carbon dioxide released</li>
<li><strong>Hard-to-abate sector:</strong> an industry such as steel or fertilizer whose emissions are difficult to cut with electricity alone</li>
<li><strong>Energy density:</strong> how much energy is stored in a given mass or volume of fuel</li>
<li><strong>Capacity factor:</strong> how much of the time a machine runs at full output, averaged over a year</li>
<li><strong>Hydrogen embrittlement:</strong> weakening of some metals when hydrogen atoms seep into them</li>
</ul>

<h3>The Storage Challenge</h3>
<p>Hydrogen holds a lot of energy per kilogram but very little per liter as a gas. To store useful amounts it must be compressed to very high pressure, cooled into a liquid at extremely low temperature, or converted into another chemical such as ammonia. Each option costs energy. For large seasonal storage, some regions are studying underground salt caverns, which have stored hydrogen for industry for decades.</p>

<h3>Fuel Cells and Other End Uses</h3>
<p>A fuel cell reverses electrolysis: hydrogen and oxygen combine to produce electricity, heat and water. Hydrogen can also be burned for high-temperature heat or used as a chemical ingredient. For steelmaking, hydrogen can replace coal in removing oxygen from iron ore, a process called direct reduction.</p>

<h3>The Efficiency Trade-Off</h3>
<p>Converting electricity to hydrogen and back to electricity loses a large share of the original energy, often more than half. A battery electric car uses electricity far more efficiently than a hydrogen car. That is why many experts suggest a priority list: use green hydrogen first where direct electricity cannot do the job, like fertilizer, steel and shipping fuels.</p>

<h3>Making Green Hydrogen Work</h3>
<ol>
<li>Lower electrolyzer costs through mass manufacturing.</li>
<li>Build plenty of cheap wind and solar power to supply electrolyzers.</li>
<li>Locate production near users or storage to reduce transport costs.</li>
<li>Use clean water sources and treat water carefully.</li>
<li>Replace existing grey hydrogen first, where demand already exists.</li>
</ol>
`,
        UNDERGRADUATE: `
<h2>Green Hydrogen Production, Economics and Infrastructure</h2>
<p>Green hydrogen sits at the intersection of the power sector and heavy industry. Its cost and climate value depend on the electricity that feeds it, how often the electrolyzer runs, how the hydrogen is moved, and which fossil process it replaces. This lesson develops the analytical tools to evaluate green hydrogen projects on cost, emissions and infrastructure needs.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Levelized cost of hydrogen:</strong> the average cost per kilogram over a project's life, including capital, electricity, operations and financing</li>
<li><strong>Stack efficiency:</strong> the share of electrical energy input that ends up as chemical energy in hydrogen</li>
<li><strong>Utilization rate:</strong> the fraction of hours an electrolyzer operates, which spreads its capital cost over more output</li>
<li><strong>Additionality:</strong> the requirement that electrolyzers use new renewable generation rather than diverting existing clean power</li>
<li><strong>Temporal matching:</strong> pairing hydrogen production with renewable generation in the same hour, month or year</li>
<li><strong>Carbon intensity:</strong> the greenhouse gas emissions per kilogram of hydrogen across its production chain</li>
</ul>

<h3>Cost Structure</h3>
<p>The levelized cost of green hydrogen is dominated by two items: electricity and electrolyzer capital. Roughly fifty or more kilowatt-hours of electricity are needed per kilogram of hydrogen, so electricity price drives operating cost. Capital cost per kilogram falls as utilization rises. This creates a classic trade-off: running only when renewable power is cheapest minimizes electricity cost but leaves expensive equipment idle, while running constantly maximizes utilization but may require pricier or dirtier power.</p>
<table>
<thead><tr><th>Cost driver</th><th>Effect of improvement</th><th>Main lever</th></tr></thead>
<tbody>
<tr><td>Electricity price</td><td>Largest effect on operating cost</td><td>Low-cost wind and solar, good resource sites</td></tr>
<tr><td>Electrolyzer capital cost</td><td>Large effect at low utilization</td><td>Manufacturing scale, standardized designs</td></tr>
<tr><td>Utilization rate</td><td>Spreads fixed costs</td><td>Hybrid wind and solar, storage, grid connection</td></tr>
<tr><td>Cost of capital</td><td>Strong effect on capital-heavy projects</td><td>Long-term offtake contracts, policy certainty</td></tr>
<tr><td>Transport and storage</td><td>Can rival production cost over long distances</td><td>Co-location with demand, pipelines</td></tr>
</tbody>
</table>

<h3>Emissions Accounting</h3>
<p>An electrolyzer connected to a fossil-heavy grid can produce hydrogen with higher emissions than grey hydrogen, because the conversion losses multiply the grid's carbon intensity. That is why rules on additionality, temporal matching and geographic deliverability matter. Hourly matching gives the most accurate emissions picture but raises costs; annual matching is cheaper but can hide fossil-powered production at night or in calm weather.</p>

<h3>Infrastructure Requirements</h3>
<p>Hydrogen moves by truck as compressed gas or liquid, by dedicated pipeline, or as a carrier such as ammonia. Pipelines are cheapest at high volumes but need anchor demand. Repurposing natural gas pipelines is possible in some cases, but materials must be checked for embrittlement and compressors adapted. Water supply is modest compared with many industrial uses, yet in arid regions desalination may be needed, adding a small cost.</p>

<h3>Applied Evaluation Checklist</h3>
<ol>
<li>Identify the fossil process being replaced and its current emissions.</li>
<li>Estimate the levelized cost under realistic utilization and electricity prices.</li>
<li>Check the electricity source against additionality and matching rules.</li>
<li>Compare with direct electrification of the same end use.</li>
<li>Account for transport, storage and conversion losses to the point of use.</li>
<li>Confirm water sourcing and local environmental impacts.</li>
</ol>
`,
        GRADUATE: `
<h2>Green Hydrogen Policy, Sector Coupling and Decarbonization Strategy</h2>
<p>Many governments have published hydrogen strategies, but turning targets into functioning markets is a governance challenge. Green hydrogen requires coordinated investment in renewable generation, electrolysis, storage, transport and new industrial processes, each with different owners and risk profiles. This lesson examines policy design, sector coupling and the place of hydrogen in wider decarbonization portfolios.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Sector coupling:</strong> linking electricity with industry, transport and heat so that flexibility and energy can flow between them</li>
<li><strong>Contract for difference:</strong> a subsidy that pays producers the gap between an agreed strike price and a reference price</li>
<li><strong>Offtake agreement:</strong> a long-term contract in which a buyer commits to purchase a set volume of hydrogen or its derivatives</li>
<li><strong>Guarantee of origin:</strong> a certificate tracking how a unit of hydrogen was produced and its emissions profile</li>
<li><strong>Hydrogen valley:</strong> a regional cluster where production, storage and multiple users are co-located to share infrastructure</li>
<li><strong>Merit order of use:</strong> a ranking of end uses by how much value hydrogen adds compared with alternatives</li>
</ul>

<h3>The Chicken-and-Egg Problem</h3>
<p>Producers will not build electrolyzers without buyers, buyers will not retool plants without reliable supply, and nobody builds pipelines without both. Policy tools try to break this deadlock. Supply-side measures include production tax credits, capital grants and competitive auctions. Demand-side measures include quotas for green hydrogen in refineries or fertilizer production, public procurement of green steel, and carbon pricing that raises the cost of grey hydrogen. Many analysts argue that demand-side policies are underused relative to supply subsidies.</p>
<table>
<thead><tr><th>Instrument</th><th>Main target</th><th>Key risk</th></tr></thead>
<tbody>
<tr><td>Production tax credit</td><td>Lowers producer cost per kilogram</td><td>Weak emissions rules can reward grid-powered production</td></tr>
<tr><td>Contract for difference</td><td>Bridges cost gap with grey hydrogen</td><td>Fiscal exposure if reference prices fall</td></tr>
<tr><td>Demand quotas</td><td>Creates guaranteed markets</td><td>Costs passed to consumers</td></tr>
<tr><td>Carbon pricing</td><td>Penalizes grey hydrogen</td><td>Carbon leakage without border adjustments</td></tr>
<tr><td>Infrastructure planning</td><td>Coordinates pipelines and storage</td><td>Overbuilding for demand that never materializes</td></tr>
</tbody>
</table>

<h3>Sector Coupling and the Power System</h3>
<p>Electrolyzers are large, potentially flexible loads. Operated well, they can absorb surplus renewable output and reduce curtailment. Operated poorly, they add demand during scarcity and raise prices and emissions. Market design must align electrolyzer incentives with grid conditions, for example through time-varying network charges and clear rules on matching production to clean supply.</p>

<h3>Equity and Global Dimensions</h3>
<p>Countries with excellent solar and wind resources see export opportunities, often as ammonia or other derivatives. Critics warn that export projects can compete with domestic decarbonization, use scarce water or land, and repeat extractive patterns if local communities gain little. Credible strategies address local electricity access, water stewardship, land rights including those of Indigenous peoples, and value capture through domestic processing such as green iron.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Rank end uses by abatement value and the availability of direct electrification.</li>
<li>Design emissions rules strict enough to prevent higher-carbon outcomes.</li>
<li>Balance supply and demand support to avoid stranded production.</li>
<li>Coordinate infrastructure planning with realistic demand clusters.</li>
<li>Assess distributional impacts on host communities, workers and consumers.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in Green Hydrogen Systems</h2>
<p>Green hydrogen research spans electrochemistry, power systems, industrial process design and international political economy. Key open questions concern how to cut electrolyzer cost and scarce-material use, how to integrate highly variable production into industrial processes that prefer steady supply, how to account for emissions credibly, and how global hydrogen trade might evolve. This lesson surveys methods and debates for advanced study.</p>

<h3>Advanced Electrolysis</h3>
<ul>
<li><strong>Anion exchange membrane electrolysis:</strong> an emerging design aiming to combine the compactness of membrane systems with cheaper, non-precious catalysts</li>
<li><strong>Catalyst loading:</strong> the amount of catalytic metal per unit electrode area, a key target for reducing reliance on iridium and platinum</li>
<li><strong>Degradation rate:</strong> the gradual loss of performance over operating hours, which may accelerate under frequent cycling</li>
<li><strong>Co-electrolysis:</strong> high-temperature electrolysis of steam and carbon dioxide together to produce synthesis gas for fuels</li>
<li><strong>Direct seawater electrolysis:</strong> research into splitting seawater without separate desalination, challenged by chloride side reactions</li>
<li><strong>Overpotential:</strong> the extra voltage beyond the thermodynamic minimum required to drive reactions at a useful rate</li>
</ul>
<p>Materials research seeks catalysts that maintain activity and durability under dynamic operation. Scarce iridium supply is often cited as a potential bottleneck for proton exchange membrane scale-up, motivating work on lower loadings and alternative chemistries.</p>

<h3>System Integration and Optimization</h3>
<p>Coupled optimization models size wind, solar, electrolyzers, batteries and hydrogen storage together to minimize delivered cost for a given demand profile. Results are sensitive to weather years, so multi-year and stochastic formulations are increasingly used. A central tension is between variable production and industrial processes such as ammonia synthesis that prefer stable feed; research explores flexible synthesis loops, buffer storage and process redesign to tolerate variability.</p>

<h3>Contested Questions</h3>
<table>
<thead><tr><th>Question</th><th>Why it is contested</th></tr></thead>
<tbody>
<tr><td>Hourly versus annual matching</td><td>Trade-off between emissions integrity and early-stage cost</td></tr>
<tr><td>Scale of future hydrogen demand</td><td>Projections vary widely depending on assumptions about electrification</td></tr>
<tr><td>Climate effect of hydrogen leakage</td><td>Hydrogen indirectly extends the lifetime of methane and other warming gases</td></tr>
<tr><td>Blending into gas networks</td><td>Modest emissions benefit versus infrastructure lock-in concerns</td></tr>
<tr><td>Export versus domestic use</td><td>Competing visions of value capture and development</td></tr>
</tbody>
</table>

<h3>Life-Cycle and Leakage Research</h3>
<p>Hydrogen is not itself a direct greenhouse gas, but it reacts in the atmosphere in ways that indirectly increase warming. Leakage rates across production, compression, transport and use are poorly measured, and measurement technology for small, fast-diffusing molecules is still developing. Life-cycle assessment must also address embodied emissions of electrolyzers and renewable equipment, allocation of by-product oxygen and heat, and consistent system boundaries for derivatives.</p>

<h3>Political Economy of Trade</h3>
<p>Scholars debate whether hydrogen and its derivatives will form a globally traded commodity or remain largely regional, given conversion losses and shipping costs. Research questions include how certification schemes will interoperate across jurisdictions, how trade might reshape energy geopolitics, and whether exporting regions can capture industrial value rather than exporting raw molecules.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Durable, low-cost catalysts for dynamic operation without scarce metals.</li>
<li>Integrated models linking weather variability, storage and flexible chemical synthesis.</li>
<li>Field measurement and modeling of hydrogen leakage and its climate effect.</li>
<li>Comparative evaluation of certification and matching rules in practice.</li>
<li>Methods to embed water stress, land use and procedural justice in project siting.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'rh2q1',
      question: {
        ELEMENTARY: 'What makes hydrogen "green"?',
        MIDDLE_SCHOOL: 'How is grey hydrogen usually made?',
        HIGH_SCHOOL: 'Why is storing hydrogen a challenge?',
        UNDERGRADUATE: 'What does additionality require of a green hydrogen project?',
        GRADUATE: 'What is sector coupling?',
        PHD: 'Why is iridium often discussed as a bottleneck for electrolysis?',
      },
      options: {
        ELEMENTARY: ['Painting the tank green', 'Using sun or wind electricity to split water', 'Mixing it with leaves', 'Keeping it in a garden'],
        MIDDLE_SCHOOL: ['From water using solar power', 'From natural gas, releasing carbon dioxide', 'From ocean waves', 'From recycled batteries'],
        HIGH_SCHOOL: ['It is too heavy to lift', 'It holds very little energy per liter as a gas, so it must be compressed, liquefied or converted', 'It turns into water inside the tank', 'It cannot be moved at all'],
        UNDERGRADUATE: ['It must use new renewable generation rather than diverting existing clean power', 'It must be built next to a coal plant', 'It must sell hydrogen abroad', 'It must use only grid power'],
        GRADUATE: ['Linking electricity with industry, transport and heat so energy and flexibility flow between them', 'Building separate grids for each sector', 'Merging two utility companies', 'Banning electricity in industry'],
        PHD: ['It is a scarce metal used as a catalyst in proton exchange membrane electrolyzers', 'It is required in alkaline electrolyte', 'It is the main ingredient in ammonia', 'It is used to build salt caverns'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Green hydrogen is made when clean electricity from the sun or wind splits water.',
        MIDDLE_SCHOOL: 'Grey hydrogen comes from natural gas and releases carbon dioxide into the air.',
        HIGH_SCHOOL: 'Hydrogen gas is very light, so useful amounts need high pressure, very cold liquid storage or a carrier like ammonia.',
        UNDERGRADUATE: 'Additionality makes sure electrolyzers add clean supply instead of pulling it away from other users.',
        GRADUATE: 'Sector coupling connects power with other sectors, and electrolyzers are one of the links.',
        PHD: 'Iridium is scarce, so lowering loadings or finding alternatives is key for scaling membrane electrolysis.',
      },
    },
    {
      id: 'rh2q2',
      question: {
        ELEMENTARY: 'What machine splits water into hydrogen and oxygen?',
        MIDDLE_SCHOOL: 'Which of these is a good use for green hydrogen?',
        HIGH_SCHOOL: 'Which electrolyzer type follows changing wind and solar output quickly but needs costly metals?',
        UNDERGRADUATE: 'Why can raising an electrolyzer\'s utilization rate lower the cost of hydrogen?',
        GRADUATE: 'What is the chicken-and-egg problem in hydrogen markets?',
        PHD: 'What is a central integration tension between variable renewable supply and ammonia synthesis?',
      },
      options: {
        ELEMENTARY: ['A toaster', 'A bicycle', 'An electrolyzer', 'A kite'],
        MIDDLE_SCHOOL: ['Charging phones', 'Lighting a desk lamp', 'Making fertilizer and steel', 'Running a fridge at home'],
        HIGH_SCHOOL: ['Alkaline', 'Solid oxide', 'Proton exchange membrane', 'Coal gasifier'],
        UNDERGRADUATE: ['It makes the electricity free', 'It removes the need for water', 'It spreads fixed capital costs over more kilograms produced', 'It reduces the weight of hydrogen'],
        GRADUATE: ['Producers, buyers and pipeline builders each wait for the others to commit first', 'Hydrogen is used to feed chickens', 'Eggs are needed to make hydrogen', 'Markets cannot set prices for gases'],
        PHD: ['Ammonia cannot be made from hydrogen', 'Variable renewables produce constant output', 'Synthesis processes prefer stable feed while production follows the weather', 'Electrolyzers cannot be turned off'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'An electrolyzer uses electricity to pull water apart into hydrogen and oxygen.',
        MIDDLE_SCHOOL: 'Green hydrogen is most useful where direct electricity is hard to use, like fertilizer and steel.',
        HIGH_SCHOOL: 'PEM electrolyzers respond quickly but use platinum and iridium.',
        UNDERGRADUATE: 'Electrolyzers are capital-intensive, so running more hours lowers the capital cost per kilogram.',
        GRADUATE: 'No party wants to invest first, which is why policy tries to support supply and demand together.',
        PHD: 'Research explores buffer storage and flexible synthesis to reconcile variable supply with steady processes.',
      },
    },
    {
      id: 'rh2q3',
      question: {
        ELEMENTARY: 'What comes out of a hydrogen bus tailpipe?',
        MIDDLE_SCHOOL: 'What is electrolysis?',
        HIGH_SCHOOL: 'Why do experts often prefer battery electric cars over hydrogen cars?',
        UNDERGRADUATE: 'How can grid-powered electrolysis end up with higher emissions than grey hydrogen?',
        GRADUATE: 'Which policy tool creates guaranteed markets by requiring certain users to buy green hydrogen?',
        PHD: 'Why does hydrogen leakage matter for the climate?',
      },
      options: {
        ELEMENTARY: ['Water', 'Black smoke', 'Sand', 'Popcorn'],
        MIDDLE_SCHOOL: ['Using electricity to split a substance into its parts', 'Burning coal to make steam', 'Freezing water into ice', 'Mixing salt into water'],
        HIGH_SCHOOL: ['Converting electricity to hydrogen and back loses much more energy than charging a battery', 'Hydrogen cars are always louder', 'Batteries need hydrogen to work', 'Hydrogen cars cannot drive uphill'],
        UNDERGRADUATE: ['Conversion losses multiply the carbon intensity of a fossil-heavy grid', 'Electrolysis releases carbon from water', 'Grey hydrogen has no emissions', 'Grid power is always renewable'],
        GRADUATE: ['Demand quotas', 'Capital grants', 'Production tax credits', 'Research funding'],
        PHD: ['It reacts in the atmosphere in ways that indirectly increase warming', 'Hydrogen is a strong direct greenhouse gas', 'Leaked hydrogen turns into coal', 'Leakage has no climate effect'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'A fuel cell joins hydrogen and oxygen, and the only thing left over is water.',
        MIDDLE_SCHOOL: 'Electrolysis means using electricity to break something apart, like water into hydrogen and oxygen.',
        HIGH_SCHOOL: 'The round trip through hydrogen often loses more than half the energy, while batteries lose much less.',
        UNDERGRADUATE: 'Because so much electricity is needed per kilogram, dirty power can make the hydrogen worse than grey.',
        GRADUATE: 'Quotas require refineries, fertilizer plants or others to use a share of green hydrogen.',
        PHD: 'Hydrogen extends the lifetime of methane and other warming gases, so leaks reduce its climate benefit.',
      },
    },
    {
      id: 'rh2q4',
      question: {
        ELEMENTARY: 'Why is hydrogen hard to keep in a tank?',
        MIDDLE_SCHOOL: 'What is blue hydrogen?',
        HIGH_SCHOOL: 'How can hydrogen help make steel without coal?',
        UNDERGRADUATE: 'What does temporal matching describe?',
        GRADUATE: 'Why do critics raise concerns about some hydrogen export projects?',
        PHD: 'What is co-electrolysis?',
      },
      options: {
        ELEMENTARY: ['It is too sticky', 'It is too big', 'It is too cold', 'It is so tiny and light that it slips away'],
        MIDDLE_SCHOOL: ['Hydrogen made from seawater', 'Hydrogen made from natural gas with some carbon dioxide captured', 'Hydrogen colored with dye', 'Hydrogen made by wind only'],
        HIGH_SCHOOL: ['By painting the steel', 'By cooling the furnace', 'By removing oxygen from iron ore in direct reduction', 'By adding hydrogen to finished steel beams'],
        UNDERGRADUATE: ['The age of an electrolyzer', 'The time to ship ammonia', 'The hours a factory is open', 'Pairing hydrogen production with renewable generation in the same time period'],
        GRADUATE: ['They may compete with local decarbonization and use scarce water or land with little local benefit', 'Exporting hydrogen is impossible', 'Ships cannot carry ammonia', 'Export projects never need water'],
        PHD: ['Burning hydrogen with coal', 'Electrolyzing steam and carbon dioxide together to make synthesis gas', 'Running two electrolyzers in a row', 'Splitting seawater at room temperature'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Hydrogen is the lightest gas, so it can slip through tiny gaps and float away.',
        MIDDLE_SCHOOL: 'Blue hydrogen still uses natural gas but captures part of the carbon dioxide.',
        HIGH_SCHOOL: 'In direct reduction, hydrogen pulls oxygen out of iron ore instead of coal doing that job.',
        UNDERGRADUATE: 'Temporal matching checks whether clean power was produced at the same time hydrogen was made.',
        GRADUATE: 'Export projects need safeguards for water, land rights and local benefits.',
        PHD: 'Co-electrolysis produces a mix of hydrogen and carbon monoxide that can be made into fuels.',
      },
    },
    {
      id: 'rh2q5',
      question: {
        ELEMENTARY: 'Which of these can make electricity for an electrolyzer?',
        MIDDLE_SCHOOL: 'Why is green hydrogen useful for storing energy?',
        HIGH_SCHOOL: 'What is a hard-to-abate sector?',
        UNDERGRADUATE: 'What are the two largest drivers of the levelized cost of green hydrogen?',
        GRADUATE: 'How can electrolyzers support a renewable-heavy power grid?',
        PHD: 'Why are multi-year weather data used in hydrogen system optimization?',
      },
      options: {
        ELEMENTARY: ['A wind turbine', 'A pillow', 'A sandwich', 'A sock'],
        MIDDLE_SCHOOL: ['It can save extra wind and solar energy for weeks', 'It disappears after one day', 'It makes the sun shine longer', 'It can only be used once a year'],
        HIGH_SCHOOL: ['An industry such as steel or fertilizer whose emissions are hard to cut with electricity alone', 'A sector that never uses energy', 'A sector with no workers', 'Any industry that uses solar power'],
        UNDERGRADUATE: ['Electricity price and electrolyzer capital cost', 'Paint and labeling', 'Water price and land rent only', 'Marketing and insurance'],
        GRADUATE: ['By running when renewable output is high and absorbing surplus that would be curtailed', 'By always running at peak demand', 'By replacing all transmission lines', 'By shutting off solar farms'],
        PHD: ['Results are sensitive to weather variability, so single years can mislead sizing decisions', 'Weather has no effect on renewables', 'It is required by law', 'Hydrogen demand changes with the weather only'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Wind turbines and solar panels make the clean electricity used to make green hydrogen.',
        MIDDLE_SCHOOL: 'Hydrogen can be stored for a long time and used later, unlike electricity which must be used right away or stored in batteries.',
        HIGH_SCHOOL: 'Steel, fertilizer and shipping are hard to electrify directly, so green hydrogen is most valuable there.',
        UNDERGRADUATE: 'Electricity cost and capital cost (spread over utilization) dominate the cost per kilogram.',
        GRADUATE: 'Flexible electrolyzers can use surplus clean power and reduce curtailment if incentives are designed well.',
        PHD: 'Calm or cloudy years change how much storage and generation are needed, so models use many weather years.',
      },
    },
  ],
}

export default expansion
