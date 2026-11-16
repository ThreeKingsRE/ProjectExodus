import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'green-building',
  moduleKey: 'net-zero-carbon-buildings',
  lessons: [
    {
      id: 'gb-nz-1',
      title: 'Zero Carbon Buildings: Counting Every Bit of Carbon',
      content: {
        ELEMENTARY: `
<h2>Buildings That Keep the Air Clean</h2>
<p>When we burn coal, oil or gas, an invisible gas called carbon dioxide goes into the air. Too much of it acts like a thick blanket around Earth and makes the planet warmer. A net zero carbon building is a building that works hard not to add this gas to the air.</p>

<h3>Two Kinds of Carbon</h3>
<p>A building adds carbon to the air in two ways. First, carbon is made when we build it. Factories that make cement, steel and glass often burn lots of fuel. Second, carbon is made every day the building is used, when it heats rooms, cools rooms and turns on lights.</p>
<ul>
<li><strong>Carbon dioxide:</strong> an invisible gas that traps heat around our planet</li>
<li><strong>Building carbon:</strong> the carbon made when materials are produced and the building is put together</li>
<li><strong>Everyday carbon:</strong> the carbon made when a building uses energy for heat, cooling and lights</li>
</ul>

<h3>How Builders Shrink Carbon</h3>
<ul>
<li><strong>Use less stuff:</strong> design smart so fewer materials are needed</li>
<li><strong>Pick better materials:</strong> choose wood from well cared for forests or reused bricks</li>
<li><strong>Use less energy:</strong> thick walls and good windows keep heat where it belongs</li>
<li><strong>Clean power:</strong> get electricity from the sun and wind instead of burning fuel</li>
</ul>

<h3>Balancing the Scale</h3>
<p>Imagine a balance scale. On one side is all the carbon the building adds. On the other side are the things that take carbon away or stop it from being made. A net zero carbon building tries to cut its carbon as much as possible first, and then balance the little bit that is left.</p>

<h3>Things You Can Do</h3>
<ol>
<li>Turn off lights when you leave a room.</li>
<li>Wear a sweater instead of turning the heat way up.</li>
<li>Take care of things so they last a long time.</li>
<li>Plant a tree with your family or class.</li>
</ol>
<p>Every small action helps keep our air clean and our planet comfy!</p>
`,
        MIDDLE_SCHOOL: `
<h2>What Makes a Building Net Zero Carbon?</h2>
<p>Buildings are responsible for a large share of the world's carbon emissions, from the energy used inside them and from making the materials they are built with. A net zero carbon building cuts these emissions as far as possible and balances any that remain. To understand how, we need to know where a building's carbon comes from.</p>

<h3>The Two Types of Building Carbon</h3>
<table>
<thead><tr><th>Type</th><th>Where it comes from</th><th>When it happens</th></tr></thead>
<tbody>
<tr><td>Embodied carbon</td><td>Mining, making, shipping and installing materials</td><td>Mostly before anyone moves in</td></tr>
<tr><td>Operational carbon</td><td>Energy for heating, cooling, hot water, lights and devices</td><td>Every year the building is used</td></tr>
</tbody>
</table>
<p>For older buildings, operational carbon was usually the bigger part. As buildings become more efficient and electricity becomes cleaner, embodied carbon becomes a bigger share of the total.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Embodied carbon:</strong> emissions from producing, transporting and installing building materials</li>
<li><strong>Operational carbon:</strong> emissions from the energy a building uses while people live and work in it</li>
<li><strong>Net zero:</strong> cutting emissions as much as possible and balancing the rest so the total is zero</li>
<li><strong>Renewable energy:</strong> energy from sources that refill naturally, like sunlight and wind</li>
<li><strong>Carbon offset:</strong> paying for a project elsewhere that reduces or removes carbon to balance your own</li>
<li><strong>Electrification:</strong> switching equipment from burning fuel to running on electricity</li>
</ul>

<h3>The Order of Steps</h3>
<ol>
<li><strong>Reduce:</strong> design an efficient building that needs little energy and fewer materials.</li>
<li><strong>Choose low-carbon materials:</strong> such as recycled steel, lower-carbon concrete or responsibly sourced timber.</li>
<li><strong>Electrify:</strong> use heat pumps instead of gas furnaces.</li>
<li><strong>Use renewable power:</strong> solar panels on site or clean electricity from the grid.</li>
<li><strong>Balance what is left:</strong> only after reducing, use offsets for remaining emissions.</li>
</ol>

<h3>Why Offsets Come Last</h3>
<p>Offsets can be useful, but they do not stop the building's own emissions. Some offset projects are not as good as they claim. That is why experts say to reduce first and offset only what truly cannot be avoided yet.</p>

<h3>Think About It</h3>
<p>Which do you think has more carbon: a brand new building or fixing up an old one? Often reusing a building avoids a lot of embodied carbon, because the structure is already there.</p>
`,
        HIGH_SCHOOL: `
<h2>Net Zero Carbon: Operational and Embodied Strategies</h2>
<p>The term "net zero" is used in many ways, so it helps to be precise. A net zero energy building produces as much energy as it uses over a year. A net zero carbon building focuses on greenhouse gas emissions instead, and the most complete definitions count both the carbon from running the building and the carbon locked into its materials. This lesson looks at both sides of the carbon ledger and the strategies that shrink each.</p>

<h3>Key Terms</h3>
<ul>
<li><strong>Operational carbon:</strong> emissions from energy used for heating, cooling, ventilation, hot water, lighting and plug loads</li>
<li><strong>Embodied carbon:</strong> emissions from extracting, manufacturing, transporting, installing, maintaining and disposing of materials</li>
<li><strong>Upfront carbon:</strong> the embodied carbon released before a building is occupied, which cannot be undone later</li>
<li><strong>Grid emissions factor:</strong> the amount of carbon released per unit of electricity on a particular power grid</li>
<li><strong>Heat pump:</strong> an electric device that moves heat rather than creating it by burning fuel</li>
</ul>

<h3>Cutting Operational Carbon</h3>
<p>The first step is reducing energy demand with insulation, airtightness, high-performance windows and smart shading. Next, buildings are electrified, replacing gas boilers and stoves with heat pumps and induction cooking. Finally, the remaining electricity comes from renewables, either on site or through clean power purchases. Because grids are getting cleaner in many regions, an all-electric building's emissions tend to fall over time, while a gas-heated building stays locked in.</p>

<h3>Cutting Embodied Carbon</h3>
<p>Upfront carbon is released all at once, right when the climate most needs fast cuts. Strategies include reusing existing buildings, designing efficient structures that use less material, specifying lower-carbon concrete mixes, using recycled steel and choosing bio-based materials such as timber from responsibly managed forests.</p>

<h3>Comparing Strategies</h3>
<table>
<thead><tr><th>Strategy</th><th>Carbon targeted</th><th>Trade-off</th></tr></thead>
<tbody>
<tr><td>Reuse an existing building</td><td>Embodied</td><td>May need upgrades to reach high efficiency</td></tr>
<tr><td>Extra insulation</td><td>Operational</td><td>Insulation itself has embodied carbon, so choose types wisely</td></tr>
<tr><td>Heat pumps</td><td>Operational</td><td>Refrigerant leaks can add potent greenhouse gases</td></tr>
<tr><td>Rooftop solar</td><td>Operational</td><td>Panels carry embodied carbon and roof space is limited</td></tr>
<tr><td>Lower-carbon concrete</td><td>Embodied</td><td>May need adjusted curing times and engineering review</td></tr>
</tbody>
</table>

<h3>Where Offsets Fit</h3>
<p>After all practical reductions, some emissions usually remain, especially upfront carbon. Offsets or carbon removals can balance them, but their quality varies. A good offset must represent a real reduction that would not have happened anyway and that lasts. Most frameworks treat offsets as a last step, not a substitute for reductions.</p>

<h3>Real-World Applications</h3>
<ol>
<li>Cities requiring new buildings to be all-electric.</li>
<li>Designers comparing structural options by their embodied carbon early in a project.</li>
<li>Schools pairing deep efficiency with rooftop solar to cut both bills and emissions.</li>
</ol>
`,
        UNDERGRADUATE: `
<h2>Whole-Life Carbon Assessment, Reduction and Offsetting</h2>
<p>Whole-life carbon assessment counts all greenhouse gas emissions attributable to a building across its life cycle: materials production, construction, operation, maintenance, replacement and end of life. Analyzing a building this way exposes trade-offs that a focus on energy alone would miss, and provides the basis for credible net zero carbon claims.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Whole-life carbon:</strong> the sum of embodied and operational emissions over a building's full life cycle</li>
<li><strong>Life cycle stages:</strong> the standardized phases of product, construction, use and end of life used to organize emissions</li>
<li><strong>Carbon dioxide equivalent:</strong> a common unit that converts different greenhouse gases by their warming effect relative to carbon dioxide</li>
<li><strong>Global warming potential:</strong> a measure of how much heat a gas traps compared with carbon dioxide over a set period</li>
<li><strong>Environmental product declaration:</strong> a verified document reporting a product's life cycle environmental impacts</li>
<li><strong>Carbon removal:</strong> an activity that takes carbon dioxide out of the atmosphere and stores it, unlike avoidance offsets</li>
</ul>

<h3>Structuring the Assessment</h3>
<table>
<thead><tr><th>Stage</th><th>Includes</th><th>Usual significance</th></tr></thead>
<tbody>
<tr><td>Product stage</td><td>Raw material supply, transport, manufacturing</td><td>Often the largest embodied share</td></tr>
<tr><td>Construction stage</td><td>Transport to site, installation, waste</td><td>Smaller but not trivial</td></tr>
<tr><td>Use stage, embodied</td><td>Maintenance, repair, replacement, refrigerant leakage</td><td>Grows with short-lived components and systems</td></tr>
<tr><td>Use stage, operational</td><td>Energy and water use</td><td>Depends heavily on efficiency and grid carbon</td></tr>
<tr><td>End of life</td><td>Demolition, processing, disposal</td><td>Uncertain because it lies far in the future</td></tr>
</tbody>
</table>

<h3>Quantitative Reasoning</h3>
<p>Annual operational carbon equals energy use multiplied by the emissions factor of each energy source. Over a long study period, a modest annual saving accumulates, but if the grid decarbonizes, later years contribute less. Embodied carbon is front-loaded: a large share occurs before occupancy. For a highly efficient building on a clean grid, upfront embodied carbon can be comparable to, or exceed, decades of operational emissions. This shifts the design emphasis toward material efficiency and reuse.</p>

<h3>Reduction Hierarchy</h3>
<ol>
<li>Build nothing new where an existing building can meet the need.</li>
<li>Build less: right-size spaces and optimize structural spans.</li>
<li>Build clever: specify low-carbon materials with product declarations.</li>
<li>Operate efficiently: minimize demand, electrify and control refrigerant leakage.</li>
<li>Supply renewable energy on site or through additional procurement.</li>
<li>Compensate for residual emissions with high-quality removals or offsets.</li>
</ol>

<h3>Evaluating Offsets</h3>
<p>Offset quality hinges on additionality (the reduction would not happen otherwise), permanence (stored carbon stays stored), accurate baselines, avoidance of double counting and independent verification. Avoidance offsets prevent future emissions, while removals take carbon out of the atmosphere. Many frameworks now favor durable removals for long-term neutralization of residual emissions.</p>

<h3>Common Pitfalls</h3>
<ul>
<li><strong>Boundary gaps:</strong> leaving out refrigerants, tenant energy or replacements makes totals look smaller than they are</li>
<li><strong>Generic data:</strong> relying on average values when product-specific declarations are available hides real differences</li>
<li><strong>Annual netting:</strong> balancing summer solar exports against winter gas use can mask real emissions</li>
</ul>
`,
        GRADUATE: `
<h2>Net Zero Carbon Policy, Accounting Standards and Decarbonization Pathways</h2>
<p>Net zero carbon in buildings is now shaped by public policy, corporate climate commitments and investor expectations. Each actor needs comparable, verifiable numbers, which raises questions about accounting boundaries, the treatment of electricity and offsets, and how individual buildings fit within sector-wide decarbonization. This lesson examines the institutional machinery behind net zero claims.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Carbon accounting:</strong> the systematic measurement, tracking and reporting of greenhouse gas emissions</li>
<li><strong>Scope 1, 2 and 3 emissions:</strong> categories for direct emissions, purchased energy emissions and value-chain emissions respectively</li>
<li><strong>Location-based method:</strong> calculating electricity emissions using the average emissions of the local grid</li>
<li><strong>Market-based method:</strong> calculating electricity emissions using contracts and certificates an organization has purchased</li>
<li><strong>Building performance standard:</strong> a regulation requiring existing buildings to meet energy or emissions limits that tighten over time</li>
<li><strong>Science-based pathway:</strong> an emissions trajectory consistent with limiting warming in line with international climate goals</li>
</ul>

<h3>Accounting Choices Matter</h3>
<p>The same building can report very different emissions depending on method. Under market-based accounting, renewable energy certificates can reduce reported electricity emissions to near zero even if the building draws power from a fossil-heavy grid at night. Critics argue this overstates real impact unless purchases are additional and matched in time and location. For developers, embodied carbon appears in their own footprint, while for occupiers it often sits in value-chain emissions, which affects who has incentives to reduce it.</p>

<h3>Policy Instruments</h3>
<table>
<thead><tr><th>Instrument</th><th>Target</th><th>Challenge</th></tr></thead>
<tbody>
<tr><td>All-electric or fossil-free codes for new buildings</td><td>Operational carbon</td><td>Legal challenges and gas utility transition</td></tr>
<tr><td>Building performance standards for existing stock</td><td>Operational carbon in large buildings</td><td>Compliance cost for owners with limited capital</td></tr>
<tr><td>Embodied carbon limits in public procurement</td><td>Material emissions</td><td>Data availability and supplier readiness</td></tr>
<tr><td>Mandatory whole-life carbon reporting</td><td>Transparency across life cycle</td><td>Method consistency and verification capacity</td></tr>
<tr><td>Carbon pricing</td><td>All emissions with a price signal</td><td>Distributional effects and political feasibility</td></tr>
</tbody>
</table>

<h3>Decarbonization Pathways for the Building Sector</h3>
<p>Sector pathways combine several trends: deep retrofits of existing buildings, near-zero new construction, electrification of heating, a clean power grid and decarbonized material production. Because most buildings that will exist in mid-century already stand today, retrofits and existing-building policy carry great weight. Timing also matters: emissions released early, such as upfront carbon from a construction boom, accumulate in the atmosphere and count toward the remaining carbon budget.</p>

<h3>Institutional Barriers</h3>
<ul>
<li><strong>Split incentives:</strong> owners pay for upgrades while tenants receive lower bills, so neither acts alone</li>
<li><strong>Data gaps:</strong> many jurisdictions lack product declarations or metered building data</li>
<li><strong>Workforce capacity:</strong> heat pump installation and retrofit skills are in short supply in many places</li>
<li><strong>Short investment horizons:</strong> owners may plan to sell before savings pay back</li>
</ul>

<h3>Equity Considerations</h3>
<p>As customers leave gas networks, fixed costs may fall on the remaining, often lower-income, customers. Performance standards can trigger rent increases if not paired with tenant protections. Just transition approaches target support to affordable housing, small owners and workers in affected industries.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Define the boundary: operational, embodied, refrigerants and tenant loads.</li>
<li>Specify the electricity accounting method and its time and location matching.</li>
<li>Check that reductions come before offsets and that offsets meet quality criteria.</li>
<li>Align targets with a sector pathway and interim milestones.</li>
<li>Assess distributional impacts and verification arrangements.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in Building Carbon Modeling and Verification</h2>
<p>Research on net zero carbon buildings addresses how to estimate emissions credibly, how to verify that reductions are real, and how to scale building-level action into sector-wide decarbonization. Methodological choices about time, boundaries, data and counterfactuals can change conclusions substantially, making this a field where measurement science and policy design are tightly linked.</p>

<h3>Methodological Concepts</h3>
<ul>
<li><strong>Dynamic life cycle assessment:</strong> an approach that accounts for when emissions occur and how electricity and material emissions change over time</li>
<li><strong>Marginal emissions factor:</strong> the emissions from the generator that responds to a change in demand, as opposed to the grid average</li>
<li><strong>Temporal matching:</strong> pairing electricity consumption with clean generation in the same hour rather than over a year</li>
<li><strong>Counterfactual baseline:</strong> an estimate of what emissions would have been without an intervention, needed to claim reductions</li>
<li><strong>Building stock model:</strong> a model representing many buildings by archetype to project sector-wide energy use and emissions</li>
<li><strong>Measurement and verification:</strong> methods for confirming actual energy and emissions savings using metered data</li>
</ul>

<h3>Modeling Building Carbon</h3>
<p>Static assessments apply fixed emissions factors over a study period, which can misrepresent all-electric buildings on decarbonizing grids. Dynamic approaches use projected grid trajectories, but these depend on uncertain policy futures. Hourly modeling with marginal or time-varying factors captures the value of load flexibility and storage, yet marginal factors are difficult to estimate and disputed. Embodied carbon modeling faces different problems: sparse and heterogeneous product data, uncertain service lives and speculative end-of-life scenarios.</p>

<h3>Verification of Reductions</h3>
<p>The persistent gap between predicted and measured energy performance is well documented, with causes including occupant behavior, commissioning quality and modeling assumptions. Approaches to verification range from simple whole-building metered comparisons to weather-normalized regression and calibrated simulation. For embodied carbon, verification relies on product declarations whose methods and data vary, and on as-built quantities that often differ from design estimates.</p>

<h3>Contested Questions</h3>
<table>
<thead><tr><th>Question</th><th>Why it is contested</th></tr></thead>
<tbody>
<tr><td>Average versus marginal emissions factors</td><td>Each answers a different question, and results can diverge sharply</td></tr>
<tr><td>Annual versus hourly renewable matching</td><td>Annual matching is simpler but may not reflect physical grid impact</td></tr>
<tr><td>Biogenic carbon in timber</td><td>Treatment of storage, forest dynamics and end of life changes results</td></tr>
<tr><td>Role of offsets in net zero claims</td><td>Quality, permanence and double counting remain difficult to guarantee</td></tr>
<tr><td>Weighting of future emissions</td><td>Whether near-term emissions should count more because of carbon budgets</td></tr>
</tbody>
</table>

<h3>Sectoral Decarbonization Research</h3>
<p>Stock models project how retrofit rates, electrification, grid decarbonization and material innovation combine. Key uncertainties include achievable renovation rates, rebound effects, the evolution of space cooling demand in a warmer climate and supply-side constraints in cement and steel. Coupling stock models with power system models helps capture how mass electrification affects peak demand and grid emissions, a feedback that building-level analysis cannot see.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Robust, transparent methods for marginal and time-varying emissions factors.</li>
<li>Harmonized embodied carbon datasets with quantified uncertainty.</li>
<li>Empirical evaluation of building performance standards and their verified impacts.</li>
<li>Consistent treatment of biogenic carbon and carbon removals in whole-life assessments.</li>
<li>Integrated building, grid and material supply models for sector pathways.</li>
<li>Methods to embed equity outcomes into decarbonization modeling.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'gbnzq1',
      question: {
        ELEMENTARY: 'What is a net zero carbon building?',
        MIDDLE_SCHOOL: 'What are the two types of building carbon?',
        HIGH_SCHOOL: 'What is upfront carbon?',
        UNDERGRADUATE: 'What is whole-life carbon?',
        GRADUATE: 'What is carbon accounting?',
        PHD: 'What is a counterfactual baseline?',
      },
      options: {
        ELEMENTARY: ['A building that works hard not to add carbon dioxide to the air', 'A building with no numbers on the door', 'A building with no walls', 'A building that uses lots of coal'],
        MIDDLE_SCHOOL: ['Embodied carbon and operational carbon', 'Black carbon and white carbon', 'Hot carbon and cold carbon', 'Indoor carbon and outdoor carbon'],
        HIGH_SCHOOL: ['Embodied carbon released before a building is occupied', 'Carbon released only at demolition', 'Carbon from the electricity used each year', 'Carbon stored in houseplants'],
        UNDERGRADUATE: ['The sum of embodied and operational emissions over a building\'s full life cycle', 'Only the emissions from construction', 'Only the emissions from energy use', 'Emissions from the first year only'],
        GRADUATE: ['The systematic measurement, tracking and reporting of greenhouse gas emissions', 'Counting the money spent on a building', 'Estimating rent levels', 'Recording construction worker hours'],
        PHD: ['An estimate of emissions without the intervention, needed to claim a reduction', 'The first year of measured data', 'The grid average emissions factor', 'The design energy model'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Net zero carbon buildings cut carbon as much as they can and balance the tiny bit that is left.',
        MIDDLE_SCHOOL: 'Embodied carbon comes from materials; operational carbon comes from energy used each year.',
        HIGH_SCHOOL: 'Upfront carbon is released before occupancy and cannot be undone later.',
        UNDERGRADUATE: 'Whole-life carbon covers product, construction, use and end-of-life stages together.',
        GRADUATE: 'Carbon accounting provides comparable numbers for managing and reporting emissions.',
        PHD: 'Without a counterfactual, you cannot tell how much of an observed change the intervention caused.',
      },
    },
    {
      id: 'gbnzq2',
      question: {
        ELEMENTARY: 'Which of these is clean power for a building?',
        MIDDLE_SCHOOL: 'Why should carbon offsets come last?',
        HIGH_SCHOOL: 'Why do all-electric buildings tend to get cleaner over time?',
        UNDERGRADUATE: 'What is an environmental product declaration?',
        GRADUATE: 'How does the market-based method calculate electricity emissions?',
        PHD: 'What is a marginal emissions factor?',
      },
      options: {
        ELEMENTARY: ['Burning coal', 'Electricity from the sun and wind', 'Burning old tires', 'Running a gas generator all day'],
        MIDDLE_SCHOOL: ['They are always free', 'They do not stop the building\'s own emissions and some are lower quality', 'They are illegal everywhere', 'They make buildings taller'],
        HIGH_SCHOOL: ['Electric equipment never breaks', 'Many grids are getting cleaner, so their electricity causes fewer emissions', 'Heat pumps burn less gas', 'Electricity has no emissions anywhere'],
        UNDERGRADUATE: ['A sales brochure', 'A verified document reporting a product\'s life cycle environmental impacts', 'A building permit', 'A list of construction prices'],
        GRADUATE: ['Using only the local grid average', 'Using contracts and certificates the organization has purchased', 'Ignoring electricity entirely', 'Using the emissions of the nearest power plant'],
        PHD: ['The average emissions of all power plants in a year', 'Emissions from the generator that responds to a change in demand', 'Emissions from building materials', 'The maximum emissions any plant can produce'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'The sun and wind make electricity without burning fuel.',
        MIDDLE_SCHOOL: 'Reducing comes first; offsets only balance what truly cannot be avoided yet.',
        HIGH_SCHOOL: 'As grids add renewables, an all-electric building\'s emissions fall, while gas heating stays locked in.',
        UNDERGRADUATE: 'Product declarations provide verified, product-specific impact data for whole-life assessments.',
        GRADUATE: 'Market-based accounting reflects purchased contracts and certificates, which can differ from the physical grid.',
        PHD: 'Marginal factors describe the consequence of changing demand, unlike average factors.',
      },
    },
    {
      id: 'gbnzq3',
      question: {
        ELEMENTARY: 'Where does building carbon come from?',
        MIDDLE_SCHOOL: 'What is electrification?',
        HIGH_SCHOOL: 'What is a trade-off of using heat pumps?',
        UNDERGRADUATE: 'Why does embodied carbon matter more for very efficient buildings on clean grids?',
        GRADUATE: 'What is a split incentive?',
        PHD: 'Why is the treatment of biogenic carbon in timber contested?',
      },
      options: {
        ELEMENTARY: ['From rainbows', 'From reading books', 'From factories that make cement, steel and glass', 'From playing outside'],
        MIDDLE_SCHOOL: ['Adding more gas pipes', 'Building with metal only', 'Switching equipment from burning fuel to running on electricity', 'Turning off the electricity'],
        HIGH_SCHOOL: ['They only work in summer', 'They burn coal', 'Refrigerant leaks can add potent greenhouse gases', 'They need a chimney'],
        UNDERGRADUATE: ['Embodied carbon disappears after one year', 'Efficient buildings use more materials by law', 'Upfront embodied carbon can rival decades of low operational emissions', 'Clean grids increase material emissions'],
        GRADUATE: ['When two buildings share a wall', 'When a tax credit is divided equally', 'When owners pay for upgrades but tenants receive the lower bills', 'When energy prices change by season'],
        PHD: ['Timber contains no carbon', 'Timber is never used in buildings', 'Storage, forest dynamics and end-of-life assumptions change results', 'All methods treat it identically'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Making materials like cement and steel often burns lots of fuel, which adds carbon to the air.',
        MIDDLE_SCHOOL: 'Electrification, such as heat pumps, lets buildings run on clean electricity instead of burning fuel.',
        HIGH_SCHOOL: 'Refrigerants can be powerful greenhouse gases, so leak control and refrigerant choice matter.',
        UNDERGRADUATE: 'When operational emissions are tiny, the front-loaded embodied share dominates whole-life carbon.',
        GRADUATE: 'Split incentives stall upgrades because the investor and the beneficiary are different parties.',
        PHD: 'How forests regrow and what happens to wood at end of life strongly affect timber\'s net carbon.',
      },
    },
    {
      id: 'gbnzq4',
      question: {
        ELEMENTARY: 'What can you do to help keep carbon out of the air?',
        MIDDLE_SCHOOL: 'Why can reusing an old building save carbon?',
        HIGH_SCHOOL: 'What makes a good carbon offset?',
        UNDERGRADUATE: 'What does additionality mean for an offset?',
        GRADUATE: 'What does a building performance standard do?',
        PHD: 'What is temporal matching?',
      },
      options: {
        ELEMENTARY: ['Leave the lights on all night', 'Turn the heat way up', 'Throw toys away quickly', 'Turn off lights when you leave a room'],
        MIDDLE_SCHOOL: ['Old buildings never use energy', 'Old buildings are always cheaper to heat', 'Reusing makes no difference', 'The structure already exists, avoiding a lot of embodied carbon'],
        HIGH_SCHOOL: ['It is the cheapest one available', 'It is used instead of any reductions', 'It is planted indoors', 'It is a real, lasting reduction that would not have happened anyway'],
        UNDERGRADUATE: ['The offset is added to the building\'s energy bill', 'The offset project is located next door', 'The offset is counted twice', 'The reduction would not have happened without the offset funding'],
        GRADUATE: ['Rates buildings by their appearance', 'Sets limits only for new houses', 'Bans renewable energy', 'Requires existing buildings to meet energy or emissions limits that tighten over time'],
        PHD: ['Building on the same date each year', 'Matching materials to suppliers', 'Matching maintenance schedules', 'Pairing electricity consumption with clean generation in the same hour'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Using less electricity means less fuel is burned to make it.',
        MIDDLE_SCHOOL: 'Reusing a building keeps its structure, which is often a large share of embodied carbon.',
        HIGH_SCHOOL: 'Good offsets are real, additional and permanent, and they come after reductions.',
        UNDERGRADUATE: 'If the reduction would have happened anyway, the offset does not change emissions.',
        GRADUATE: 'Performance standards drive improvements in the existing stock with tightening limits.',
        PHD: 'Hourly matching better reflects whether clean power actually supplies a building\'s demand.',
      },
    },
    {
      id: 'gbnzq5',
      question: {
        ELEMENTARY: 'How can builders use less energy in a building?',
        MIDDLE_SCHOOL: 'What is the first step toward a net zero carbon building?',
        HIGH_SCHOOL: 'What is the difference between net zero energy and net zero carbon?',
        UNDERGRADUATE: 'What is the first step in the reduction hierarchy?',
        GRADUATE: 'Why do retrofits carry great weight in building sector pathways?',
        PHD: 'What is a well-documented problem in verifying operational savings?',
      },
      options: {
        ELEMENTARY: ['Thick walls and good windows', 'Leaving doors open in winter', 'Using more light bulbs', 'Making the windows thinner'],
        MIDDLE_SCHOOL: ['Reduce energy and material needs through smart design', 'Buy offsets first', 'Install a gas furnace', 'Build the biggest building possible'],
        HIGH_SCHOOL: ['Net zero energy balances energy over a year, while net zero carbon counts emissions', 'They are always exactly the same', 'Net zero carbon ignores energy completely', 'Net zero energy counts only embodied carbon'],
        UNDERGRADUATE: ['Use an existing building instead of building new where possible', 'Buy offsets for all emissions', 'Install the largest solar array', 'Replace all materials every year'],
        GRADUATE: ['Most buildings that will exist in mid-century already stand today', 'New buildings are banned', 'Retrofits have no embodied carbon', 'Existing buildings use no energy'],
        PHD: ['The gap between predicted and measured energy performance', 'Meters never record energy', 'Weather has no effect on energy use', 'All models are perfectly calibrated'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Thick, well insulated walls and good windows keep heat where it belongs.',
        MIDDLE_SCHOOL: 'Reducing comes first, then clean energy, then balancing what is left.',
        HIGH_SCHOOL: 'Net zero energy is about energy balance; net zero carbon focuses on greenhouse gas emissions.',
        UNDERGRADUATE: 'Building nothing new avoids most embodied carbon entirely.',
        GRADUATE: 'Because the existing stock is so large and long-lived, it must be decarbonized through retrofits.',
        PHD: 'Occupant behavior, commissioning and modeling assumptions cause measured results to differ from predictions.',
      },
    },
  ],
}

export default expansion
