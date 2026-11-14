import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'green-building',
  moduleKey: 'embodied-carbon',
  lessons: [
    {
      id: 'gb-ec-1',
      title: 'Hidden Carbon in Buildings',
      content: {
        ELEMENTARY: `
<h2>The Hidden Carbon in Buildings</h2>
<p>When you look at a building, you see walls, windows and a roof. But there is something you cannot see: the pollution that was made when all those materials were created. Scientists call it <em>embodied carbon</em>. It is like a secret story hidden inside every brick, beam and window!</p>

<h3>Where Does Hidden Carbon Come From?</h3>
<p>Before a building can be built, people dig rocks out of the ground, cook them in giant hot ovens, melt metal, cut trees and drive everything to the building site in trucks. Many of these jobs burn fuels like coal, oil and gas. Burning these fuels puts a gas called carbon dioxide into the air, which makes our planet warmer.</p>
<ul>
<li><strong>Carbon dioxide:</strong> an invisible gas that traps heat around the Earth when there is too much of it</li>
<li><strong>Cement:</strong> a gray powder that is mixed with water, sand and stones to make concrete</li>
<li><strong>Steel:</strong> a very strong metal made by melting iron in hot furnaces</li>
<li><strong>Factory:</strong> a big building where materials are made using machines and energy</li>
</ul>

<h3>The Biggest Hidden Carbon Makers</h3>
<p>Concrete and steel are used in almost every big building, and making them uses lots of heat. Cement is made by heating rock in a kiln that is hotter than a pizza oven by many times. The rock itself also lets out carbon dioxide as it cooks. That is why concrete and steel have a lot of hidden carbon.</p>

<h3>How We Can Shrink Hidden Carbon</h3>
<ol>
<li><strong>Fix and reuse:</strong> keep old buildings and fix them up instead of knocking them down.</li>
<li><strong>Use less:</strong> design buildings that need fewer materials.</li>
<li><strong>Choose wisely:</strong> pick materials that need less energy to make, like wood from well-cared-for forests.</li>
<li><strong>Use again:</strong> reuse old bricks, doors and beams in new buildings.</li>
</ol>
<ul>
<li><strong>Reuse:</strong> using something again instead of throwing it away</li>
</ul>

<h3>Be a Carbon Detective</h3>
<p>Next time you walk past a building, ask yourself: what is it made of? Where did those materials come from? Could any of them be used again one day? Asking these questions makes you a carbon detective!</p>
`,
        MIDDLE_SCHOOL: `
<h2>Embodied Carbon: The Climate Cost of Materials</h2>
<p>When people talk about buildings and climate change, they often think about the energy used for heating, cooling and lights. That is called <em>operational carbon</em>. But there is another part of the story. Every material in a building has a climate cost from mining, manufacturing, transporting and installing it. This is called <em>embodied carbon</em>, and it is released before anyone even moves in.</p>

<h3>The Life Story of a Material</h3>
<ol>
<li><strong>Extraction:</strong> digging up raw materials such as limestone, iron ore or sand</li>
<li><strong>Manufacturing:</strong> turning raw materials into products in factories and kilns</li>
<li><strong>Transport:</strong> moving products by truck, train or ship to the building site</li>
<li><strong>Construction:</strong> using machines and energy to put everything together</li>
<li><strong>Maintenance and replacement:</strong> repairing and swapping parts during the building's life</li>
<li><strong>End of life:</strong> taking the building down and dealing with the waste</li>
</ol>

<h3>Key Words</h3>
<ul>
<li><strong>Embodied carbon:</strong> greenhouse gases released by making, moving, building with and disposing of materials</li>
<li><strong>Operational carbon:</strong> greenhouse gases from energy used to run a building, such as heating and lighting</li>
<li><strong>Greenhouse gas:</strong> a gas such as carbon dioxide that traps heat in the atmosphere</li>
<li><strong>Kiln:</strong> a very hot oven used to make cement, bricks and other materials</li>
<li><strong>Life cycle:</strong> all the stages in a product's life, from raw material to disposal</li>
<li><strong>Recycled content:</strong> the part of a product made from materials that were used before</li>
</ul>

<h3>Which Materials Carry the Most?</h3>
<table>
<thead><tr><th>Material</th><th>Why it has embodied carbon</th><th>Lower-carbon idea</th></tr></thead>
<tbody>
<tr><td>Concrete</td><td>Cement needs very high heat, and the heated limestone releases carbon dioxide</td><td>Use less cement in the mix, use only what the design needs</td></tr>
<tr><td>Steel</td><td>Melting iron ore takes lots of energy</td><td>Use steel made from recycled scrap with cleaner electricity</td></tr>
<tr><td>Aluminum</td><td>Making it needs huge amounts of electricity</td><td>Use recycled aluminum</td></tr>
<tr><td>Wood</td><td>Harvesting and processing use some energy</td><td>Choose wood from responsibly managed forests</td></tr>
</tbody>
</table>

<h3>Why It Matters More and More</h3>
<p>As new buildings get better at saving energy, their operational carbon goes down. That makes embodied carbon a bigger share of the total. Also, embodied carbon is released right now, at the start of a building's life, while the climate is changing fast. Cutting it early helps the planet sooner.</p>

<h3>What Designers Can Do</h3>
<p>Architects and engineers can reuse existing buildings, design efficient structures that need less material, and choose products with lower carbon footprints. Some companies now publish labels that show how much carbon their products contain, helping designers compare options.</p>
`,
        HIGH_SCHOOL: `
<h2>Lifecycle Carbon and Material Choices</h2>
<p>Buildings affect the climate in two ways. They use energy every day for heating, cooling, lighting and equipment, which produces operational carbon. They also contain materials whose production, transport, construction and disposal release greenhouse gases, which is embodied carbon. Understanding both, across a building's whole life, is essential for designing buildings that genuinely reduce climate impact.</p>

<h3>Carbon Across the Life Cycle</h3>
<ul>
<li><strong>Upfront carbon:</strong> emissions released before a building is used, from material production and construction</li>
<li><strong>Use-stage embodied carbon:</strong> emissions from maintenance, repair and replacing parts like roofs, finishes and equipment</li>
<li><strong>End-of-life carbon:</strong> emissions from demolition, transport of waste, processing and landfill</li>
<li><strong>Whole life carbon:</strong> embodied and operational carbon added together over the building's entire life</li>
<li><strong>Carbon dioxide equivalent:</strong> a unit that converts different greenhouse gases into the amount of carbon dioxide with the same warming effect</li>
</ul>

<h3>Why Cement Is Special</h3>
<p>Cement is the glue in concrete, and it is made by heating limestone and clay in a kiln to form clinker. Two things release carbon dioxide: burning fuel to reach very high temperatures, and a chemical reaction called calcination, where limestone breaks down and releases carbon dioxide directly. Because of the chemical part, switching to clean energy alone cannot eliminate cement emissions. Cement production is one of the largest single industrial sources of carbon dioxide in the world.</p>

<h3>Comparing Reduction Strategies</h3>
<table>
<thead><tr><th>Strategy</th><th>How it cuts carbon</th><th>Trade-offs</th></tr></thead>
<tbody>
<tr><td>Reuse an existing building</td><td>Avoids most new structural material</td><td>May need creative design to fit new uses</td></tr>
<tr><td>Efficient structural design</td><td>Uses less material for the same strength</td><td>Needs more engineering time</td></tr>
<tr><td>Lower-cement concrete mixes</td><td>Replaces some cement with other materials</td><td>Some mixes gain strength more slowly</td></tr>
<tr><td>Recycled steel</td><td>Melting scrap uses less energy than making steel from ore</td><td>Limited by scrap supply and quality</td></tr>
<tr><td>Timber and bio-based materials</td><td>Lower production emissions, stores carbon</td><td>Depends on sustainable forestry, fire and moisture design</td></tr>
<tr><td>Local sourcing</td><td>Reduces transport emissions</td><td>Transport is often a small share compared to manufacturing</td></tr>
</tbody>
</table>

<h3>Carbon Accounting Tools</h3>
<p>To compare materials fairly, designers use life cycle assessment, a method that adds up impacts across all stages. Manufacturers can publish Environmental Product Declarations, standardized reports showing a product's environmental impacts, including its global warming potential. These let designers compare, for example, two concrete mixes with the same strength.</p>

<h3>Real-World Applications</h3>
<ol>
<li>Engineers specify concrete by performance rather than a fixed cement amount, allowing lower-carbon mixes.</li>
<li>Designers compare embodied carbon of design options early, when changes are cheapest.</li>
<li>Some governments and companies set limits on the carbon content of materials they buy.</li>
<li>Salvaged materials such as bricks, timber and steel sections are reused in new projects.</li>
</ol>
<p>The most powerful decisions happen at the start of a project: whether to build new at all, how big to build, and what structural system to use.</p>
`,
        UNDERGRADUATE: `
<h2>Whole Building Life Cycle Assessment and Carbon Reduction</h2>
<p>Whole building life cycle assessment applies life cycle methods to an entire building, quantifying environmental impacts from raw material extraction to end of life. For carbon, it is the main tool for comparing design options, setting targets and demonstrating reductions. Using it well requires understanding the standard life cycle modules, data sources, system boundaries and the sources of uncertainty.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Life cycle assessment:</strong> a standardized method for quantifying environmental impacts across all stages of a product or system</li>
<li><strong>Global warming potential:</strong> the impact category expressing climate effect in kilograms of carbon dioxide equivalent</li>
<li><strong>Environmental Product Declaration:</strong> a verified, standardized report of a product's life cycle environmental impacts</li>
<li><strong>Product category rules:</strong> agreed rules that specify how life cycle assessments and declarations are done for a product group</li>
<li><strong>Functional unit:</strong> the quantified function used as a basis for comparison, such as one square meter of floor area over a set study period</li>
<li><strong>Carbon intensity:</strong> embodied carbon divided by floor area, used to benchmark buildings</li>
</ul>

<h3>Life Cycle Modules</h3>
<p>European standards for building assessment organize the life cycle into lettered modules, and this structure is widely used internationally.</p>
<table>
<thead><tr><th>Module</th><th>Stage</th><th>Typical contents</th></tr></thead>
<tbody>
<tr><td>A1 to A3</td><td>Product stage</td><td>Raw material supply, transport to factory, manufacturing</td></tr>
<tr><td>A4 to A5</td><td>Construction stage</td><td>Transport to site, construction and installation processes</td></tr>
<tr><td>B1 to B7</td><td>Use stage</td><td>Maintenance, repair, replacement, refurbishment, operational energy and water</td></tr>
<tr><td>C1 to C4</td><td>End of life</td><td>Demolition, transport, waste processing, disposal</td></tr>
<tr><td>D</td><td>Beyond the system boundary</td><td>Potential benefits from reuse, recovery and recycling, reported separately</td></tr>
</tbody>
</table>
<p>Upfront carbon corresponds to modules A1 to A5. Because these emissions occur now, many targets focus on them first.</p>

<h3>Where the Carbon Is</h3>
<p>In typical multi-story buildings, the structure and foundations usually account for the largest share of upfront carbon, often followed by the envelope. Over a long study period, frequent replacements of finishes, services and facade components can add substantially. Mechanical, electrical and plumbing systems are often underestimated due to limited data, and refrigerant leakage can be significant.</p>

<h3>Quantitative Reasoning</h3>
<p>Embodied carbon for a material equals its quantity multiplied by an emission factor from an EPD or database. For example, if a design reduces concrete volume by a tenth through efficient slab design and also uses a mix with a lower carbon factor, the two reductions multiply, delivering a larger combined cut than either alone. Comparisons must use the same functional unit, study period and modules; otherwise results are not comparable.</p>

<h3>Reduction Hierarchy</h3>
<ol>
<li><strong>Build nothing:</strong> question the need and reuse existing assets where possible.</li>
<li><strong>Build less:</strong> optimize space use, grids, spans and structural efficiency.</li>
<li><strong>Build clever:</strong> select lower-carbon materials and specify performance-based concrete.</li>
<li><strong>Build efficiently:</strong> reduce construction waste and plan for disassembly and reuse.</li>
</ol>

<h3>Applied Method</h3>
<ol>
<li>Define the goal, functional unit, study period and modules included.</li>
<li>Extract quantities from the design model or cost plan.</li>
<li>Assign emission factors, preferring product-specific EPDs where available.</li>
<li>Identify hotspots and test alternatives at concept stage.</li>
<li>Document assumptions and uncertainties so results can be reviewed.</li>
</ol>
`,
        GRADUATE: `
<h2>Embodied Carbon Policy, Benchmarks and Supply Chains</h2>
<p>Embodied carbon has moved from voluntary practice into public policy. Governments are using procurement, building regulation and disclosure requirements to drive reductions, while industry is developing benchmarks and low-carbon products. This lesson examines the policy toolkit, the role of benchmarks, the economics of decarbonizing heavy materials, and governance challenges along global supply chains.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Buy Clean policy:</strong> a public procurement approach that requires or prefers construction materials below set carbon limits</li>
<li><strong>Embodied carbon benchmark:</strong> a reference distribution of carbon intensity for similar buildings or products used to set targets</li>
<li><strong>Global warming potential limit:</strong> a maximum carbon value per unit of product or per unit of building area set by policy</li>
<li><strong>Green premium:</strong> the additional cost of a low-carbon product compared with its conventional equivalent</li>
<li><strong>Carbon leakage:</strong> the shift of emissions to places with weaker climate rules when production moves to avoid costs</li>
<li><strong>Offtake agreement:</strong> a long-term commitment to purchase a product, which can help finance new low-carbon production</li>
</ul>

<h3>Policy Instruments</h3>
<table>
<thead><tr><th>Instrument</th><th>How it works</th><th>Strengths and weaknesses</th></tr></thead>
<tbody>
<tr><td>Disclosure requirements</td><td>Projects must report whole life carbon</td><td>Builds data and capacity; no direct reduction</td></tr>
<tr><td>Building-level limits</td><td>Caps carbon intensity for new buildings</td><td>Flexible for designers; needs robust benchmarks and verification</td></tr>
<tr><td>Product-level procurement limits</td><td>Public buyers set limits for concrete, steel and other materials</td><td>Uses public purchasing power; depends on EPD availability</td></tr>
<tr><td>Carbon pricing and border adjustments</td><td>Price emissions in production and imports</td><td>Broad signal; politically complex, leakage concerns</td></tr>
<tr><td>Reuse and retrofit incentives</td><td>Favor renovation over demolition through planning rules</td><td>Targets the largest lever; may conflict with density goals</td></tr>
</tbody>
</table>

<h3>Benchmarks and Targets</h3>
<p>Benchmarks require large, consistent datasets. Variation in scope, modules, data sources and study periods means that published figures are often not comparable. Many jurisdictions start with disclosure, then use the resulting data to set limits that tighten over time. Targets must account for building type, structure and climate, while avoiding loopholes such as excluding hard-to-measure building systems.</p>

<h3>Decarbonizing Heavy Materials</h3>
<p>Cement and steel present different challenges. For cement, near-term levers include reducing clinker content through supplementary materials such as slag, fly ash and calcined clays, while process emissions from calcination may ultimately require carbon capture. For steel, recycled scrap melted in electric arc furnaces with clean electricity offers large reductions, while primary steel may shift toward hydrogen-based direct reduction. These pathways need major capital investment, and public procurement can provide the stable demand that justifies it.</p>

<h3>Supply Chain Governance</h3>
<ol>
<li><strong>Data quality:</strong> generic averages can hide large differences between plants, rewarding no one for improvement.</li>
<li><strong>Verification:</strong> EPDs need third-party review and consistent product category rules.</li>
<li><strong>Small producers:</strong> the cost of producing EPDs can burden smaller and regional suppliers.</li>
<li><strong>International trade:</strong> imported materials may have less transparent data.</li>
</ol>

<h3>Equity and Just Transition</h3>
<p>Heavy material industries employ many workers and are concentrated in specific regions, often near communities that have long borne air pollution from kilns and furnaces. Decarbonization policy can be designed to improve local air quality and protect jobs, or it can shift burdens. Inclusive planning with affected workers and communities is part of credible embodied carbon policy.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Assess data readiness and the availability of product-specific declarations.</li>
<li>Choose instruments matched to market maturity, starting with disclosure where needed.</li>
<li>Set limits informed by benchmarks and a clear schedule of tightening.</li>
<li>Monitor costs, supply and compliance, and support smaller producers.</li>
<li>Evaluate whether policy drives real production changes, not just paperwork.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in Embodied Carbon Accounting</h2>
<p>Embodied carbon accounting has become central to building decarbonization, yet its numbers rest on methodological choices and data of variable quality. For researchers, the open questions concern uncertainty, temporal dynamics, the treatment of biogenic carbon and end-of-life benefits, and how to model systemic reduction pathways across the building stock and material industries.</p>

<h3>Methodological Concepts</h3>
<ul>
<li><strong>Attributional assessment:</strong> an approach that allocates a share of existing global flows to a product, describing its average footprint</li>
<li><strong>Consequential assessment:</strong> an approach that estimates how emissions change across the system as a result of a decision</li>
<li><strong>Biogenic carbon:</strong> carbon absorbed from the atmosphere by plants and stored in bio-based materials such as timber</li>
<li><strong>Dynamic life cycle assessment:</strong> a method that accounts for when emissions and removals occur, not only their totals</li>
<li><strong>Parameter uncertainty:</strong> uncertainty in input values such as quantities and emission factors</li>
<li><strong>Scenario uncertainty:</strong> uncertainty from choices about future conditions, such as grid decarbonization or end-of-life practices</li>
</ul>

<h3>Data Quality and Uncertainty</h3>
<p>Studies comparing whole building assessments often find wide variation in results for similar buildings. Causes include incomplete quantity take-offs, differing system boundaries, use of generic versus product-specific data and differing assumptions about replacement cycles. Probabilistic methods, such as Monte Carlo simulation with distributions for quantities and factors, can express results as ranges, but require data on variability that is often lacking. Mechanical, electrical and plumbing systems and refrigerants remain especially poorly characterized.</p>

<h3>Contested Questions</h3>
<table>
<thead><tr><th>Question</th><th>Positions and stakes</th></tr></thead>
<tbody>
<tr><td>How to count biogenic carbon in timber</td><td>Counting storage as an uptake at the start versus treating carbon as neutral over the life cycle can change comparisons with concrete and steel</td></tr>
<tr><td>Module D benefits</td><td>Crediting future recycling may double count benefits or rely on uncertain end-of-life practices</td></tr>
<tr><td>Timing of emissions</td><td>Equal weighting of all emissions ignores that early emissions contribute to near-term warming</td></tr>
<tr><td>Future grid and production assumptions</td><td>Assuming decarbonized future replacements may understate or overstate use-stage impacts</td></tr>
<tr><td>Concrete carbonation uptake</td><td>Concrete reabsorbs some carbon dioxide over time; how much to credit is uncertain</td></tr>
</tbody>
</table>

<h3>Systemic Reduction Pathways</h3>
<p>Building-level assessments cannot reveal whether reductions are real at the scale of the economy. Stock and flow models of materials, linked with building stock models, allow researchers to estimate future material demand under scenarios of population, floor area per person, renovation rates and material substitution. Such models show that demand-side measures, including extending building life, using existing floor area more intensively and avoiding vacancy, can rival supply-side technology changes. Consequential thinking is needed for questions such as whether increased timber demand affects forest carbon stocks, or whether reduced clinker content shifts scarce supplementary materials from other users.</p>

<h3>Methodological Debates</h3>
<ol>
<li><strong>Attributional versus consequential framing:</strong> attributional results are suited to labels and benchmarks, but policy decisions arguably need consequential analysis.</li>
<li><strong>Static versus dynamic accounting:</strong> dynamic methods better reflect climate timing but complicate communication and comparison.</li>
<li><strong>Allocation of byproducts:</strong> assigning emissions to slag and fly ash affects their apparent benefit as cement substitutes.</li>
<li><strong>Standardization versus innovation:</strong> rigid product rules may slow recognition of novel materials.</li>
</ol>

<h3>Open Research Directions</h3>
<ol>
<li>Open, harmonized datasets of building-level embodied carbon with transparent metadata.</li>
<li>Uncertainty quantification methods suitable for design-stage decision-making.</li>
<li>Integrated forest and building models for evaluating large-scale timber use.</li>
<li>Dynamic accounting approaches compatible with carbon budgets.</li>
<li>Material flow models linking building policy to industrial decarbonization pathways.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: "gbecq1",
      question: {
        ELEMENTARY: "Where is hidden carbon in buildings?",
        MIDDLE_SCHOOL: "What is embodied carbon?",
        HIGH_SCHOOL: "What is upfront carbon?",
        UNDERGRADUATE: "What is an EPD?",
        GRADUATE: "What is a Buy Clean policy?",
        PHD: "What is biogenic carbon?",
      },
      options: {
        ELEMENTARY: ["In the materials, like cement and steel", "In the clouds above", "In the rain", "In the paint color"],
        MIDDLE_SCHOOL: ["Greenhouse gases from making, moving, building with and disposing of materials", "Carbon in the air we breathe", "Carbon from our breathing", "Carbon from cars only"],
        HIGH_SCHOOL: ["Emissions released before a building is used", "Emissions from running the building", "Emissions after demolition only", "There is no such thing"],
        UNDERGRADUATE: ["Environmental Product Declaration", "Electric Power Device", "Energy Performance Design", "Emission Prevention Document"],
        GRADUATE: ["Public procurement that requires or prefers materials below carbon limits", "A rule about cleaning products", "An air cleaning standard", "A water treatment law"],
        PHD: ["Carbon absorbed by plants and stored in bio-based materials like timber", "Carbon from fossil fuels", "Carbon released by calcination", "Carbon in steel scrap"],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: "Making cement and steel makes lots of carbon pollution, and that carbon is hidden in the building.",
        MIDDLE_SCHOOL: "Embodied carbon comes from the whole life story of materials, not from running the building.",
        HIGH_SCHOOL: "Upfront carbon comes from material production and construction, before anyone moves in.",
        UNDERGRADUATE: "An EPD is a verified, standardized report of a product's environmental impacts.",
        GRADUATE: "Buy Clean policies use public purchasing to favor lower-carbon materials.",
        PHD: "Biogenic carbon was recently captured from the atmosphere by growing plants.",
      },
    },
    {
      id: "gbecq2",
      question: {
        ELEMENTARY: "What is a good way to shrink hidden carbon?",
        MIDDLE_SCHOOL: "Why is embodied carbon becoming a bigger share of a building's total?",
        HIGH_SCHOOL: "Why can't clean energy alone eliminate cement emissions?",
        UNDERGRADUATE: "Which life cycle modules make up upfront carbon?",
        GRADUATE: "Why do many jurisdictions start with disclosure before setting limits?",
        PHD: "What does a consequential assessment estimate?",
      },
      options: {
        ELEMENTARY: ["Knock down old buildings quickly", "Fix and reuse old buildings", "Use more concrete", "Drive materials farther"],
        MIDDLE_SCHOOL: ["Materials are getting heavier", "New buildings use less energy to run, so operational carbon shrinks", "Nobody uses heating anymore", "Embodied carbon is growing because of paint"],
        HIGH_SCHOOL: ["Kilns run on sunlight", "Calcination releases carbon dioxide from limestone itself", "Cement contains no carbon", "Cement is made without heat"],
        UNDERGRADUATE: ["C1 to C4", "A1 to A5", "B1 to B7", "Module D only"],
        GRADUATE: ["Disclosure is required by every law", "Disclosure builds the data needed to set credible limits", "Limits are illegal", "Disclosure cuts carbon directly"],
        PHD: ["The average share of global flows for a product", "How system-wide emissions change as a result of a decision", "Only transport emissions", "The price of carbon"],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: "Keeping and fixing buildings means we do not need lots of new materials.",
        MIDDLE_SCHOOL: "As buildings get more efficient, the hidden carbon in materials becomes a larger part of the total.",
        HIGH_SCHOOL: "The chemical breakdown of limestone releases carbon dioxide no matter what fuel heats the kiln.",
        UNDERGRADUATE: "Upfront carbon covers the product stage (A1 to A3) and construction stage (A4 to A5).",
        GRADUATE: "Reported data reveals typical values, which are needed to set fair limits.",
        PHD: "Consequential assessment asks what changes in the wider system because of a choice.",
      },
    },
    {
      id: "gbecq3",
      question: {
        ELEMENTARY: "What is cement used to make?",
        MIDDLE_SCHOOL: "Which lower-carbon idea fits steel?",
        HIGH_SCHOOL: "Which strategy usually avoids the most new structural material?",
        UNDERGRADUATE: "Which part of a typical multi-story building usually has the largest share of upfront carbon?",
        GRADUATE: "Which route offers large reductions for steel?",
        PHD: "What is a concern with crediting Module D benefits?",
      },
      options: {
        ELEMENTARY: ["Glass windows", "Wooden chairs", "Concrete", "Plastic toys"],
        MIDDLE_SCHOOL: ["Paint it a lighter color", "Ship it farther away", "Use steel made from recycled scrap with cleaner electricity", "Use twice as much"],
        HIGH_SCHOOL: ["Local sourcing", "Choosing a new paint", "Reusing an existing building", "Adding more parking"],
        UNDERGRADUATE: ["Interior paint", "Door handles", "The structure and foundations", "Light switches"],
        GRADUATE: ["Burning more coal in blast furnaces", "Using more aluminum", "Recycled scrap in electric arc furnaces with clean electricity", "Importing more steel"],
        PHD: ["It is always ignored", "It only applies to glass", "It may double count benefits or rely on uncertain future practices", "It measures transport"],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: "Cement is mixed with water, sand and stones to make concrete.",
        MIDDLE_SCHOOL: "Melting recycled scrap with clean power uses less energy than making steel from iron ore.",
        HIGH_SCHOOL: "Reusing a building keeps its structure, which is usually the largest carbon item.",
        UNDERGRADUATE: "Structure and foundations typically dominate upfront carbon, followed by the envelope.",
        GRADUATE: "Electric arc furnaces melting scrap, powered by clean electricity, cut steel emissions greatly.",
        PHD: "Future recycling credits are uncertain and can overlap with credits claimed by the next user.",
      },
    },
    {
      id: "gbecq4",
      question: {
        ELEMENTARY: "What is carbon dioxide?",
        MIDDLE_SCHOOL: "What is a kiln?",
        HIGH_SCHOOL: "What is whole life carbon?",
        UNDERGRADUATE: "What is a functional unit?",
        GRADUATE: "What is carbon leakage?",
        PHD: "Why might dynamic life cycle assessment be preferred?",
      },
      options: {
        ELEMENTARY: ["A kind of shiny rock", "A type of building", "A wooden beam", "An invisible gas that traps heat around the Earth"],
        MIDDLE_SCHOOL: ["A kind of truck", "A recycling bin", "A building label", "A very hot oven for making cement and bricks"],
        HIGH_SCHOOL: ["Only the carbon in paint", "Only operational energy", "Only demolition emissions", "Embodied and operational carbon added together over the building's life"],
        UNDERGRADUATE: ["A department of an engineering firm", "A unit of electricity", "A building's heating system", "The quantified function used as a basis for comparison"],
        GRADUATE: ["Gas leaking from pipes", "Carbon stored in timber", "Concrete absorbing carbon", "Emissions shifting to places with weaker climate rules"],
        PHD: ["It ignores timing", "It is simpler to communicate", "It removes all uncertainty", "It accounts for when emissions occur, reflecting near-term warming"],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: "Carbon dioxide is an invisible gas; too much of it warms our planet.",
        MIDDLE_SCHOOL: "Kilns are very hot ovens used to make cement and bricks.",
        HIGH_SCHOOL: "Whole life carbon counts both embodied and operational carbon across all stages.",
        UNDERGRADUATE: "A functional unit, like one square meter over a study period, makes comparisons fair.",
        GRADUATE: "Carbon leakage happens when production moves to avoid climate costs.",
        PHD: "Dynamic methods account for timing, since early emissions add to near-term warming.",
      },
    },
    {
      id: "gbecq5",
      question: {
        ELEMENTARY: "What does reuse mean?",
        MIDDLE_SCHOOL: "When is embodied carbon released?",
        HIGH_SCHOOL: "What does an Environmental Product Declaration help designers do?",
        UNDERGRADUATE: "What happens when a design uses less concrete and a lower-carbon mix?",
        GRADUATE: "Which are near-term levers for cutting cement emissions?",
        PHD: "What have demand-side measures been shown to do in stock and flow models?",
      },
      options: {
        ELEMENTARY: ["Using something again instead of throwing it away", "Buying something new", "Breaking something", "Hiding something"],
        MIDDLE_SCHOOL: ["Mostly at the start, before anyone moves in", "Only when the lights are on", "Only in winter", "Never"],
        HIGH_SCHOOL: ["Compare products, such as two concrete mixes, on their impacts", "Choose paint colors", "Measure room noise", "Design window shapes"],
        UNDERGRADUATE: ["The reductions multiply into a larger combined cut", "The reductions cancel out", "Carbon goes up", "Nothing changes"],
        GRADUATE: ["Reducing clinker with slag, fly ash and calcined clays", "Adding more clinker", "Using thicker walls", "Shipping cement farther"],
        PHD: ["They can rival supply-side technology changes", "They have no effect", "They always increase emissions", "They only affect transport"],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: "Reuse means using things again, like old bricks in a new building.",
        MIDDLE_SCHOOL: "Much embodied carbon is released upfront, when materials are made and the building is built.",
        HIGH_SCHOOL: "EPDs report impacts in a standard way so similar products can be compared.",
        UNDERGRADUATE: "Less material times a lower factor gives a bigger cut than either change alone.",
        GRADUATE: "Replacing some clinker with other materials cuts both fuel and calcination emissions.",
        PHD: "Extending building life and using space better can cut material demand as much as new technology.",
      },
    },
  ],
}

export default expansion
