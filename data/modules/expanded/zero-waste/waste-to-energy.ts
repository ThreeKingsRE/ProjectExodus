import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'zero-waste',
  moduleKey: 'waste-to-energy',
  lessons: [
    {
      id: 'zw-wte-1',
      title: 'Energy From Waste',
      content: {
        ELEMENTARY: `
<h2>Can Trash Make Energy?</h2>
<p>Every day, people throw away lots of things. Some of it can be reused, some can be recycled, and food scraps can be composted. But some trash is left over. What happens to it? In some places, that leftover trash is turned into energy that lights up homes and warms buildings. Let's see how!</p>

<h3>Burning Trash for Power</h3>
<p>Some towns have special buildings called waste-to-energy plants. Trucks bring leftover trash there. The trash is burned in a very hot, carefully controlled fire. The heat boils water into steam, and the steam spins a big wheel called a turbine. The spinning turbine makes electricity!</p>
<ul>
<li><strong>Waste-to-energy plant:</strong> a building where leftover trash is turned into electricity or heat</li>
<li><strong>Steam:</strong> the hot cloud that comes from boiling water and can push machines</li>
<li><strong>Turbine:</strong> a giant spinning wheel that helps make electricity</li>
</ul>

<h3>Tiny Helpers Make Gas</h3>
<p>Food scraps and other plant and animal leftovers can make energy in a different way. They go into big closed tanks with no air inside. Tiny living things called bacteria eat the scraps slowly. As they eat, they give off a gas called biogas. Biogas can be burned for cooking, heating or making electricity. What is left over can help plants grow.</p>
<ul>
<li><strong>Bacteria:</strong> tiny living things, too small to see, that break down food and plants</li>
<li><strong>Biogas:</strong> a gas made by bacteria eating food scraps that can be used as fuel</li>
<li><strong>Landfill:</strong> a big place where trash is buried in the ground</li>
</ul>

<h3>Energy Is Good, Less Trash Is Better</h3>
<p>Making energy from trash is better than letting it sit in a landfill forever. But the very best idea is to make less trash in the first place! Burning trash also makes smoke that must be cleaned very carefully. So we try these steps first:</p>
<ol>
<li>Use less: pick things with little packaging.</li>
<li>Reuse: use a lunch box and a water bottle again and again.</li>
<li>Recycle and compost: put paper, cans and food scraps in the right bins.</li>
<li>Only then: turn what is left into energy.</li>
</ol>

<h3>Think About It</h3>
<p>Look in your trash bin at home. Which things could have been reused, recycled or composted instead? Every item you save is a little win for the planet, even before anyone turns trash into energy.</p>
`,
        MIDDLE_SCHOOL: `
<h2>How Waste Becomes Electricity and Heat</h2>
<p>When waste cannot be prevented, reused, recycled or composted, it still holds energy. Paper, plastic, wood and food all contain chemical energy, the same kind of energy stored in fuels. Waste-to-energy (often shortened to WTE) technologies capture some of that energy as electricity, heat or fuel instead of burying it in a landfill.</p>

<h3>Three Main Ways to Get Energy From Waste</h3>
<ol>
<li><strong>Incineration with energy recovery:</strong> mixed trash is burned at very high temperatures. The heat boils water into steam, which spins a turbine to make electricity. Some plants also send hot water to nearby buildings for heating.</li>
<li><strong>Anaerobic digestion:</strong> food scraps, manure and other organic waste are sealed in tanks without oxygen. Bacteria break them down and release biogas, which is mostly methane. The leftover material, called digestate, can be used as fertilizer.</li>
<li><strong>Landfill gas capture:</strong> buried organic waste slowly rots and makes methane anyway. Pipes drilled into a landfill can collect some of this gas and burn it for power instead of letting it escape.</li>
</ol>

<h3>Key Words</h3>
<ul>
<li><strong>Incineration:</strong> burning waste at high temperature in a controlled furnace</li>
<li><strong>Anaerobic digestion:</strong> bacteria breaking down organic waste without oxygen to make biogas</li>
<li><strong>Methane:</strong> a flammable gas that is the main part of biogas and a strong greenhouse gas</li>
<li><strong>Digestate:</strong> the nutrient-rich material left over after anaerobic digestion</li>
<li><strong>Bottom ash:</strong> the solid leftover material that remains after waste is burned</li>
<li><strong>Waste hierarchy:</strong> a ranking that puts preventing waste first and landfill last</li>
</ul>

<h3>Comparing the Options</h3>
<table>
<thead><tr><th>Method</th><th>Best for</th><th>Main product</th></tr></thead>
<tbody>
<tr><td>Incineration</td><td>Mixed leftover trash</td><td>Electricity and heat</td></tr>
<tr><td>Anaerobic digestion</td><td>Food scraps and manure</td><td>Biogas and fertilizer</td></tr>
<tr><td>Landfill gas capture</td><td>Waste already buried</td><td>Methane for power</td></tr>
</tbody>
</table>

<h3>Where WTE Fits in the Waste Hierarchy</h3>
<p>The waste hierarchy ranks choices from best to worst: prevent, reuse, recycle and compost, recover energy, and finally landfill. Energy recovery is near the bottom. That is because burning a plastic bottle gets back only a small part of the energy and materials that went into making it, while recycling or reusing it saves much more.</p>

<h3>Why People Debate It</h3>
<p>Supporters say WTE shrinks the amount of trash going to landfills and produces useful energy. Critics worry about air pollution, the cost of building plants, and the risk that cities stop trying to reduce waste because the plant needs trash to keep running. Modern plants use filters and scrubbers to clean their smoke, but communities nearby often want strong proof that the air is safe.</p>
`,
        HIGH_SCHOOL: `
<h2>Waste-to-Energy: Technologies and Trade-Offs</h2>
<p>Waste-to-energy (WTE) covers several technologies that recover energy from waste that would otherwise be landfilled. Each technology suits different waste streams, produces different outputs and raises different environmental questions. Understanding them helps explain why some countries rely heavily on WTE while zero waste advocates often oppose it.</p>

<h3>Thermal Technologies</h3>
<ul>
<li><strong>Mass-burn incineration:</strong> mixed municipal waste is burned on moving grates; heat raises steam for electricity and sometimes district heating</li>
<li><strong>Gasification:</strong> waste is heated with a limited amount of oxygen so it does not fully burn, producing a fuel gas called syngas</li>
<li><strong>Pyrolysis:</strong> waste is heated with almost no oxygen, breaking it into oils, gases and a solid char</li>
<li><strong>Refuse-derived fuel:</strong> waste that has been shredded and sorted into a more uniform fuel for kilns or boilers</li>
<li><strong>Syngas:</strong> a mixture mainly of carbon monoxide and hydrogen that can be burned or turned into chemicals</li>
</ul>
<p>Mass-burn incineration is by far the most common and proven. Gasification and pyrolysis promise cleaner, more flexible outputs, but many projects have struggled with mixed, wet and variable waste, and commercial track records are more limited.</p>

<h3>Biological Technologies</h3>
<p>Anaerobic digestion uses microbes in sealed tanks to convert food waste, manure and sewage sludge into biogas. Biogas can generate electricity, be burned for heat, or be cleaned into biomethane for vehicles or gas grids. Unlike incineration, digestion keeps nutrients in the digestate so they can return to soil. It only works for organic material, so good source separation of food scraps is essential.</p>

<h3>Comparison Table</h3>
<table>
<thead><tr><th>Technology</th><th>Feedstock</th><th>Outputs</th><th>Main concerns</th></tr></thead>
<tbody>
<tr><td>Mass-burn incineration</td><td>Mixed residual waste</td><td>Electricity, heat, ash</td><td>Air emissions, ash disposal, high capital cost</td></tr>
<tr><td>Gasification</td><td>Pre-sorted waste</td><td>Syngas, slag</td><td>Reliability with variable waste, cost</td></tr>
<tr><td>Pyrolysis</td><td>Plastics, biomass</td><td>Oils, gas, char</td><td>Scale, product quality, fossil carbon in oils</td></tr>
<tr><td>Anaerobic digestion</td><td>Food, manure, sludge</td><td>Biogas, digestate</td><td>Contamination, methane leaks, odor</td></tr>
<tr><td>Landfill gas capture</td><td>Buried waste</td><td>Methane for power</td><td>Only part of the gas is captured</td></tr>
</tbody>
</table>

<h3>Emissions and Residues</h3>
<p>Burning waste releases carbon dioxide, and the share from plastics counts as fossil emissions much like burning oil. Combustion can also form pollutants such as nitrogen oxides, acid gases, fine particles, dioxins and mercury from items like batteries. Modern plants use high temperatures, scrubbers, fabric filters and continuous monitoring to control these. Fly ash captured by the filters concentrates heavy metals and must be handled as hazardous waste, while bottom ash is sometimes reused in construction after treatment.</p>

<h3>The Hierarchy Conflict</h3>
<p>The waste hierarchy places energy recovery below prevention, reuse and recycling. A large incinerator needs a steady supply of waste for decades to pay back its cost. If a city later succeeds at reducing waste, the plant may run short, which can create pressure to keep waste levels high. This is why zero waste plans usually treat WTE as a limited last resort for truly residual waste, if they use it at all.</p>

<h3>Real-World Choices</h3>
<ol>
<li>Separate food scraps for anaerobic digestion before considering thermal treatment.</li>
<li>Size any thermal plant for the waste expected after reduction targets, not today's volume.</li>
<li>Remove batteries, electronics and other hazardous items before combustion.</li>
<li>Use waste heat locally for district heating to raise overall efficiency.</li>
</ol>
`,
        UNDERGRADUATE: `
<h2>Analyzing Waste-to-Energy Systems</h2>
<p>Evaluating waste-to-energy requires more than asking whether a plant produces electricity. Analysts compare energy efficiency, net greenhouse gas effects, pollutant control, residue management and how the plant interacts with the wider waste and energy systems. This lesson builds the core vocabulary and reasoning for those comparisons.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Calorific value:</strong> the amount of heat released when a fuel or waste stream burns completely, usually expressed per unit mass</li>
<li><strong>Net electrical efficiency:</strong> the share of energy in the waste that leaves the plant as usable electricity after the plant's own consumption</li>
<li><strong>Combined heat and power:</strong> operating a plant to deliver both electricity and useful heat, raising total energy recovery</li>
<li><strong>Biogenic carbon:</strong> carbon in waste that came from recently living material such as food, paper and wood</li>
<li><strong>Fossil carbon:</strong> carbon in waste derived from oil or gas, mainly in plastics and synthetic textiles</li>
<li><strong>Air pollution control residue:</strong> the hazardous fly ash and spent reagents captured by a plant's flue gas cleaning system</li>
</ul>

<h3>Energy Efficiency</h3>
<p>Municipal waste is a low-grade fuel. It is wet, mixed and corrosive, so steam conditions in WTE boilers are kept milder than in fossil power plants to limit corrosion. As a result, electricity-only plants typically convert only a modest fraction of the waste's energy into electricity, often in the range of roughly one fifth to one quarter. Plants that also supply district heat or industrial steam can recover a much larger share of the energy overall. Location therefore matters: a plant beside a heat network performs very differently from an isolated one.</p>

<h3>Carbon Accounting Logic</h3>
<p>The climate effect of WTE depends on what it replaces and what is in the waste. Combustion of biogenic carbon is often treated as climate-neutral in inventories, while fossil carbon from plastics is counted as an emission. As recycling and composting remove paper and food, the remaining residual waste becomes richer in plastics, so emissions per tonne burned can rise. At the same time, the credit for displacing grid electricity shrinks as grids decarbonize. Comparisons with landfill hinge on how well the landfill captures methane.</p>
<table>
<thead><tr><th>Factor</th><th>Makes WTE look better</th><th>Makes WTE look worse</th></tr></thead>
<tbody>
<tr><td>Grid mix displaced</td><td>Coal-heavy grid</td><td>Low-carbon grid</td></tr>
<tr><td>Waste composition</td><td>High biogenic share</td><td>High plastic share</td></tr>
<tr><td>Heat use</td><td>Connected to district heating</td><td>Electricity only, heat wasted</td></tr>
<tr><td>Landfill comparison</td><td>Poor methane capture at landfill</td><td>Well-controlled landfill</td></tr>
<tr><td>Recycling comparison</td><td>Material truly unrecyclable</td><td>Recyclable material burned</td></tr>
</tbody>
</table>

<h3>Emissions Control</h3>
<p>Flue gas cleaning typically combines combustion control (sustained high temperature and good mixing to destroy organic compounds), reagents to neutralize acid gases, activated carbon to capture mercury and dioxins, fabric filters for particles, and systems to reduce nitrogen oxides. Performance depends on design, maintenance and monitoring, and communities often focus on start-up, shutdown and upset conditions when controls are less effective.</p>

<h3>System Integration</h3>
<p>WTE interacts with collection contracts, recycling programs and energy markets. Long-term supply agreements can guarantee a minimum tonnage to the operator, which shifts risk to municipalities if waste generation falls. Anaerobic digestion integrates differently, depending on separate food waste collection and offering both renewable gas and nutrient recovery.</p>

<h3>An Evaluation Checklist</h3>
<ol>
<li>Characterize the residual waste after realistic reduction and recycling targets.</li>
<li>Estimate net energy recovery with and without heat offtake.</li>
<li>Account fossil and biogenic carbon separately and test several grid scenarios.</li>
<li>Specify flue gas cleaning and the disposal route for fly ash and bottom ash.</li>
<li>Review contract terms for minimum tonnage commitments and exit options.</li>
<li>Compare against the alternatives: prevention, recycling, digestion and well-managed landfill.</li>
</ol>
`,
        GRADUATE: `
<h2>Waste-to-Energy Policy, Carbon Accounting and the Hierarchy Debate</h2>
<p>At the policy level, waste-to-energy sits at the intersection of waste management, energy policy and climate policy, three domains with different goals. A technology that looks attractive as an energy source or a landfill alternative may conflict with zero waste and circular economy objectives. This lesson examines how those conflicts arise, how carbon accounting choices shape conclusions, and how governments can design policy that limits unintended consequences.</p>

<h3>Key Policy Concepts</h3>
<ul>
<li><strong>Waste hierarchy:</strong> the policy principle ranking prevention, reuse, recycling, recovery and disposal in descending order of preference</li>
<li><strong>Infrastructure lock-in:</strong> the tendency of long-lived, capital-intensive assets to shape future choices because they must be fed and paid off</li>
<li><strong>Put-or-pay contract:</strong> an agreement requiring a municipality to supply a minimum tonnage or pay for the shortfall</li>
<li><strong>Incineration tax:</strong> a levy per tonne burned intended to keep recovery more expensive than recycling</li>
<li><strong>Renewable energy eligibility:</strong> rules deciding whether energy from waste qualifies for renewable subsidies or targets</li>
<li><strong>Overcapacity:</strong> a situation where installed treatment capacity exceeds the residual waste available, encouraging imports or weaker recycling</li>
</ul>

<h3>Hierarchy Conflicts</h3>
<p>Several European countries that built extensive incineration capacity have faced periods of overcapacity, importing waste from neighbors to keep plants running. Their experience is widely cited as evidence that thermal capacity, once built, can compete with recycling. Conversely, countries with little landfill space and strong district heating argue that WTE is the realistic home for residual waste. Policy design should treat capacity as a sizing problem tied to forward-looking reduction targets, not current volumes.</p>

<h3>Carbon Accounting Choices</h3>
<p>National inventories usually report fossil carbon from waste combustion in the waste or energy sector and treat biogenic carbon as neutral. Life-cycle studies add avoided emissions from displaced electricity and heat, and from avoided landfill methane. Each choice embeds assumptions. As grids decarbonize, avoided-emission credits fall, and as plastics dominate residual waste, direct fossil emissions rise. Including WTE in emissions trading schemes, or requiring carbon capture, would change its economics substantially.</p>
<table>
<thead><tr><th>Policy instrument</th><th>Intended effect</th><th>Risk if poorly designed</th></tr></thead>
<tbody>
<tr><td>Landfill tax</td><td>Push waste up the hierarchy</td><td>Diverts waste to incineration rather than recycling</td></tr>
<tr><td>Incineration tax</td><td>Protect recycling's price advantage</td><td>Encourages illegal dumping if set without enforcement</td></tr>
<tr><td>Capacity caps</td><td>Prevent overbuilding</td><td>May strand landfill-dependent regions</td></tr>
<tr><td>Renewable subsidies for WTE</td><td>Support low-carbon energy</td><td>Subsidizes burning of fossil plastics</td></tr>
<tr><td>Separate food waste mandates</td><td>Feed digestion, raise compost quality</td><td>Low participation without convenient collection</td></tr>
</tbody>
</table>

<h3>Economics and Contracts</h3>
<p>WTE plants are capital-intensive and financed over decades. Revenue comes from gate fees and energy sales. Investors seek guaranteed tonnage, so put-or-pay clauses are common. These shift the risk of successful waste reduction onto the public. Flexible contracts, modular capacity, and explicit review points tied to recycling performance reduce that exposure.</p>

<h3>Equity and Siting</h3>
<p>Waste facilities have historically been sited disproportionately in low-income communities and communities of color, a central concern of the environmental justice movement. Even with modern controls, residents bear truck traffic, perceived risk and stigma. Meaningful participation, transparent monitoring data, cumulative impact assessment and community benefit agreements are increasingly expected in siting decisions.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Project residual waste under ambitious prevention and recycling scenarios.</li>
<li>Size capacity to the residual, with modular or shared regional options.</li>
<li>Apply consistent carbon accounting with future grid and composition scenarios.</li>
<li>Align taxes and subsidies so recycling remains cheaper than recovery.</li>
<li>Assess cumulative local burdens and build in community oversight.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: Advanced Conversion, Lock-In and Circularity</h2>
<p>Research on waste-to-energy has moved beyond plant engineering toward questions of system dynamics: how conversion technologies interact with material cycles, how infrastructure shapes long-term pathways, and whether any form of energy recovery is compatible with a circular economy. This lesson surveys methods, contested claims and open directions.</p>

<h3>Advanced Conversion Technologies</h3>
<ul>
<li><strong>Plasma gasification:</strong> using an electrically generated plasma to reach very high temperatures and convert waste into syngas and vitrified slag</li>
<li><strong>Hydrothermal processing:</strong> treating wet waste in hot pressurized water to produce bio-crude or char without first drying it</li>
<li><strong>Chemical recycling:</strong> breaking polymers into monomers or feedstocks, which overlaps with pyrolysis and blurs the line between recycling and recovery</li>
<li><strong>Carbon capture at WTE plants:</strong> capturing flue gas carbon dioxide, which could yield net removals where biogenic carbon dominates</li>
<li><strong>Waste-to-fuels:</strong> converting syngas or biogas into liquid fuels, hydrogen or chemicals rather than electricity</li>
<li><strong>Techno-economic analysis:</strong> modeling the cost, performance and scale-up risk of a technology before commercial deployment</li>
</ul>
<p>A recurring finding is that heterogeneous, contaminated feedstock is the binding constraint for advanced processes. Pre-treatment, tar formation, catalyst poisoning and energy balances often prove harder at scale than at pilot stage. Whether outputs count as recycling, fuel or neither is also a regulatory question with large consequences for incentives.</p>

<h3>Lock-In as a Research Object</h3>
<p>Lock-in can be analyzed through path dependence theory, which explains how early investments create increasing returns, sunk costs and institutional routines that resist change. Empirical studies examine contract structures, municipal finance, workforce interests and regional heat networks that depend on incineration. A key methodological question is how to separate genuine lock-in, where capacity actively suppresses prevention and recycling, from simple correlation between high incineration and high recycling in wealthy countries.</p>

<h3>Modeling Approaches</h3>
<table>
<thead><tr><th>Method</th><th>Strength</th><th>Limitation</th></tr></thead>
<tbody>
<tr><td>Attributional life-cycle assessment</td><td>Transparent accounting of a defined system</td><td>Ignores market responses and marginal effects</td></tr>
<tr><td>Consequential life-cycle assessment</td><td>Captures displaced products and marginal technologies</td><td>Sensitive to assumed market responses</td></tr>
<tr><td>Dynamic material flow analysis</td><td>Tracks stocks and flows over time</td><td>Limited behavioral and economic detail</td></tr>
<tr><td>System dynamics and agent-based models</td><td>Represent feedbacks and lock-in mechanisms</td><td>Hard to parameterize and validate</td></tr>
<tr><td>Optimization of waste systems</td><td>Identifies cost-effective configurations</td><td>Assumes rational, centralized planners</td></tr>
</tbody>
</table>

<h3>Contested Questions</h3>
<ol>
<li><strong>Circular economy compatibility:</strong> some frameworks treat energy recovery as leakage from the material loop, others as a necessary sink for contaminated and degraded materials, including substances of concern that should leave circulation.</li>
<li><strong>Biogenic neutrality:</strong> treating biogenic combustion as neutral ignores timing and the counterfactual fate of the carbon, such as long-term storage in landfills.</li>
<li><strong>Baselines:</strong> results reverse depending on whether the comparison is a poorly managed dump, a modern landfill or an ambitious recycling scenario.</li>
<li><strong>Chemical recycling claims:</strong> mass-balance accounting and the share of output that becomes fuel rather than new polymer are actively debated.</li>
</ol>

<h3>Methodological Debates</h3>
<p>Prospective assessment must account for changing grid carbon intensity, future waste composition and technology learning over plant lifetimes of several decades. Static assessments using today's grid can overstate benefits. Uncertainty analysis, scenario discovery and explicit treatment of time in carbon accounting are increasingly expected. There is also debate over system boundaries for municipal decisions versus national or regional decisions, since waste and energy flows cross borders.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Empirical tests of whether thermal capacity causally suppresses prevention and recycling.</li>
<li>Dynamic assessments linking waste composition scenarios to grid decarbonization pathways.</li>
<li>The role of energy recovery as a controlled sink for hazardous substances in a circular system.</li>
<li>Scale-up performance and honest accounting for chemical recycling and advanced conversion.</li>
<li>Governance designs that allow capacity to shrink as waste falls without stranding public finances.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'zwwteq1',
      question: {
        ELEMENTARY: 'What can a waste-to-energy plant make from leftover trash?',
        MIDDLE_SCHOOL: 'What is anaerobic digestion?',
        HIGH_SCHOOL: 'What is gasification?',
        UNDERGRADUATE: 'What is fly ash from a WTE plant and why does it need special handling?',
        GRADUATE: 'What is infrastructure lock-in in the context of waste-to-energy?',
        PHD: 'Why is the compatibility of WTE with a circular economy contested?',
      },
      options: {
        ELEMENTARY: ['Electricity', 'More trash', 'Fresh water', 'Gold'],
        MIDDLE_SCHOOL: ['Bacteria breaking down organic waste without oxygen to make biogas', 'Burning trash in a furnace', 'Burying waste in a landfill', 'Washing waste with water'],
        HIGH_SCHOOL: ['Heating waste with limited oxygen to make syngas', 'Open burning in a pile', 'Composting waste outdoors', 'Freezing waste to shrink it'],
        UNDERGRADUATE: ['Residue captured by flue gas cleaning that concentrates heavy metals and is hazardous', 'Clean sand that can go straight into playgrounds', 'Steam that escapes from the turbine', 'Food scraps removed before burning'],
        GRADUATE: ['Long-lived assets that must be fed with waste and paid off, shaping future choices', 'A way to make plants easier to close early', 'A rule banning waste imports', 'A recycling bin lock that stops scavenging'],
        PHD: ['It can be seen as leakage from material loops or as a necessary sink for contaminated materials', 'Every framework agrees it is perfectly circular', 'It has no relationship to material flows', 'It always increases recycling rates'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'The heat from burning leftover trash boils water into steam, which spins a turbine to make electricity.',
        MIDDLE_SCHOOL: 'In sealed tanks without oxygen, bacteria break down food scraps and manure and give off biogas.',
        HIGH_SCHOOL: 'Gasification heats waste with only limited oxygen, so it makes a fuel gas called syngas instead of fully burning.',
        UNDERGRADUATE: 'Air pollution control residue traps metals and pollutants, so it must be managed as hazardous waste.',
        GRADUATE: 'Large, capital-intensive plants need steady waste supplies for decades, which can work against reduction goals.',
        PHD: 'Researchers disagree on whether energy recovery is a loss from the loop or a needed exit for degraded and hazardous materials.',
      },
    },
    {
      id: 'zwwteq2',
      question: {
        ELEMENTARY: 'What should we try FIRST before turning trash into energy?',
        MIDDLE_SCHOOL: 'Where does energy recovery sit in the waste hierarchy?',
        HIGH_SCHOOL: 'Which technology keeps nutrients so they can return to the soil?',
        UNDERGRADUATE: 'Why can emissions per tonne burned rise as recycling and composting improve?',
        GRADUATE: 'What is a put-or-pay contract?',
        PHD: 'What is usually the binding constraint for advanced conversion technologies at scale?',
      },
      options: {
        ELEMENTARY: ['Throw more things away', 'Make less trash and reuse things', 'Bury everything', 'Burn everything right away'],
        MIDDLE_SCHOOL: ['At the very top, above prevention', 'Near the bottom, above landfill but below recycling', 'It is not part of the hierarchy', 'Exactly equal to reuse'],
        HIGH_SCHOOL: ['Mass-burn incineration', 'Anaerobic digestion', 'Plasma torches', 'Refuse-derived fuel kilns'],
        UNDERGRADUATE: ['Plants burn hotter every year', 'Residual waste becomes richer in fossil plastics after paper and food are removed', 'Recycling adds carbon to waste', 'Composting makes plastic heavier'],
        GRADUATE: ['A rule that waste must be sorted at home', 'An agreement requiring a minimum tonnage or payment for the shortfall', 'A tax on putting waste in landfills', 'A grant for building recycling centers'],
        PHD: ['Lack of interest from researchers', 'Heterogeneous, contaminated feedstock', 'Too much uniform clean waste', 'Excess oxygen in all reactors'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Using less and reusing things are the best steps. Turning trash into energy comes later, for what is left.',
        MIDDLE_SCHOOL: 'The hierarchy ranks prevent, reuse, recycle and compost, recover energy, then landfill last.',
        HIGH_SCHOOL: 'Anaerobic digestion leaves digestate, which keeps nutrients that can go back to farmland.',
        UNDERGRADUATE: 'Removing paper and food leaves more plastic, whose fossil carbon is counted as an emission when burned.',
        GRADUATE: 'Put-or-pay clauses guarantee the operator tonnage, shifting the risk of successful waste reduction to the public.',
        PHD: 'Mixed, wet and contaminated waste causes pre-treatment, tar and catalyst problems that often appear only at scale.',
      },
    },
    {
      id: 'zwwteq3',
      question: {
        ELEMENTARY: 'What tiny living things make biogas from food scraps?',
        MIDDLE_SCHOOL: 'What is digestate?',
        HIGH_SCHOOL: 'Why do zero waste plans usually treat WTE as a last resort?',
        UNDERGRADUATE: 'How does combined heat and power change a WTE plant\'s performance?',
        GRADUATE: 'Why might a landfill tax alone fail to push waste toward recycling?',
        PHD: 'Why is consequential life-cycle assessment useful but sensitive for WTE studies?',
      },
      options: {
        ELEMENTARY: ['Butterflies', 'Fish', 'Bacteria', 'Birds'],
        MIDDLE_SCHOOL: ['The smoke from an incinerator', 'A type of plastic', 'Nutrient-rich material left after anaerobic digestion', 'A tool for digging landfills'],
        HIGH_SCHOOL: ['WTE plants are too small to matter', 'Burning creates new materials', 'Large plants need steady waste for decades, which can compete with reduction', 'WTE is the top of the waste hierarchy'],
        UNDERGRADUATE: ['It lowers total energy recovery', 'It makes heat useless', 'Delivering useful heat as well as electricity recovers a much larger share of the energy', 'It removes the need for flue gas cleaning'],
        GRADUATE: ['Landfill taxes are always illegal', 'Landfill taxes make recycling more expensive', 'Waste may simply shift to incineration unless recycling stays cheaper', 'Landfill taxes increase landfill use'],
        PHD: ['It ignores displaced products entirely', 'It uses no assumptions at all', 'It captures displaced and marginal technologies but depends on assumed market responses', 'It can only study landfills'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Bacteria are too small to see. They eat food scraps in closed tanks and give off biogas.',
        MIDDLE_SCHOOL: 'Digestate is what remains after digestion, and it can be used as fertilizer.',
        HIGH_SCHOOL: 'Because plants must be fed to pay back their costs, they can create pressure to keep waste levels high.',
        UNDERGRADUATE: 'Electricity-only plants convert a modest share; adding heat offtake raises total energy recovery substantially.',
        GRADUATE: 'Without an incineration tax or similar tools, a landfill tax can divert waste to burning instead of recycling.',
        PHD: 'Consequential LCA models market effects, so results depend heavily on which technologies are assumed to be displaced.',
      },
    },
    {
      id: 'zwwteq4',
      question: {
        ELEMENTARY: 'What spins inside a waste-to-energy plant to make electricity?',
        MIDDLE_SCHOOL: 'What is the main gas in biogas?',
        HIGH_SCHOOL: 'Why must batteries be removed before waste is burned?',
        UNDERGRADUATE: 'Why are steam conditions in WTE boilers kept milder than in fossil power plants?',
        GRADUATE: 'What can happen when a region builds more incineration capacity than its residual waste?',
        PHD: 'What does path dependence theory help explain about WTE?',
      },
      options: {
        ELEMENTARY: ['A bicycle wheel', 'A merry-go-round', 'A spinning top', 'A turbine'],
        MIDDLE_SCHOOL: ['Oxygen', 'Helium', 'Water vapor', 'Methane'],
        HIGH_SCHOOL: ['They make the fire too cold', 'They are too light to burn', 'They are worth more as fuel', 'They can release metals such as mercury into the emissions'],
        UNDERGRADUATE: ['To save water', 'Because waste burns too cleanly', 'To make the plant quieter', 'To limit corrosion from wet, mixed and corrosive waste'],
        GRADUATE: ['Recycling always rises automatically', 'Plants shut down immediately', 'Waste disappears from the region', 'Plants may import waste or weaken recycling to stay full'],
        PHD: ['Why technologies never change', 'Why all waste is identical', 'Why weather affects plant output', 'How early investments create sunk costs and routines that resist change'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Steam from boiling water spins a turbine, and the turbine makes electricity.',
        MIDDLE_SCHOOL: 'Biogas is mostly methane, a flammable gas that is also a strong greenhouse gas if it escapes.',
        HIGH_SCHOOL: 'Hazardous items like batteries can add metals such as mercury to the smoke and ash.',
        UNDERGRADUATE: 'Waste is wet and corrosive, so boilers run at milder steam conditions, which lowers electrical efficiency.',
        GRADUATE: 'Overcapacity creates pressure to import waste or divert recyclables so plants can keep running.',
        PHD: 'Path dependence explains how sunk costs, contracts and institutions lock in a technology pathway.',
      },
    },
    {
      id: 'zwwteq5',
      question: {
        ELEMENTARY: 'What is a landfill?',
        MIDDLE_SCHOOL: 'What does landfill gas capture do?',
        HIGH_SCHOOL: 'What is syngas mainly made of?',
        UNDERGRADUATE: 'How does a low-carbon electricity grid affect the climate case for WTE?',
        GRADUATE: 'Why do environmental justice concerns arise in WTE siting?',
        PHD: 'Why can static assessments overstate the benefits of WTE plants?',
      },
      options: {
        ELEMENTARY: ['A big place where trash is buried in the ground', 'A park with swings', 'A recycling machine', 'A kind of compost'],
        MIDDLE_SCHOOL: ['Collects methane from buried waste so it can be burned for power', 'Turns landfills into lakes', 'Pumps fresh air into landfills', 'Removes plastic from the ocean'],
        HIGH_SCHOOL: ['Carbon monoxide and hydrogen', 'Pure oxygen', 'Salt and water', 'Helium and neon'],
        UNDERGRADUATE: ['It shrinks the credit for displacing grid electricity', 'It makes WTE emissions disappear', 'It has no effect at all', 'It doubles the energy in waste'],
        GRADUATE: ['Facilities have historically been sited disproportionately in marginalized communities', 'Every neighborhood shares burdens equally', 'Plants never generate truck traffic', 'Residents always choose the site themselves'],
        PHD: ['They use today\'s grid and waste mix for a plant that will run for decades as both change', 'They include too many future scenarios', 'They always assume zero emissions', 'They only consider heat output'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'A landfill is a huge place where trash is buried. Making energy from trash keeps some of it out.',
        MIDDLE_SCHOOL: 'Pipes in the landfill collect some of the methane from rotting waste so it can make power instead of escaping.',
        HIGH_SCHOOL: 'Syngas is mainly carbon monoxide and hydrogen and can be burned or used to make chemicals.',
        UNDERGRADUATE: 'When the grid is already clean, the electricity WTE replaces has little carbon, so its avoided-emission credit falls.',
        GRADUATE: 'Waste facilities have often been placed near low-income communities and communities of color, who bear the burdens.',
        PHD: 'Grids decarbonize and waste composition shifts over plant lifetimes, so snapshots using today\'s conditions can mislead.',
      },
    },
  ],
}

export default expansion
