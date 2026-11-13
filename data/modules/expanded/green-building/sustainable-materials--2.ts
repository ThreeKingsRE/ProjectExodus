import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'green-building',
  moduleKey: 'sustainable-materials~2',
  lessons: [
    {
      id: 'gb-mat-1',
      title: 'Building Better with Sustainable Materials',
      content: {
        ELEMENTARY: `
<h2>Building Better with Earth-Friendly Materials</h2>
<p>Every building is made of stuff: wood, stone, brick, glass, metal and more. Some of these materials are kinder to the Earth than others. Builders who care about nature try to pick materials that do not use up too much energy, do not make a big mess, and can be used again one day.</p>

<h3>Where Do Building Materials Come From?</h3>
<p>All materials start in nature. Wood comes from trees. Bricks come from clay dug out of the ground and baked in hot ovens. Steel comes from rocks that are melted in huge furnaces. Making some materials takes a lot of heat and energy, and that energy often comes from burning fuels that warm up our planet.</p>
<ul>
<li><strong>Material:</strong> the stuff something is made from, like wood, clay or metal</li>
<li><strong>Bamboo:</strong> a tall, fast-growing grass that is strong enough to build with</li>
<li><strong>Recycled:</strong> made from old things that were used before, instead of brand-new stuff</li>
<li><strong>Natural material:</strong> something that comes from nature with very little changing, like stone or straw</li>
<li><strong>Waste:</strong> leftover things that get thrown away and often end up in a dump</li>
</ul>

<h3>What Makes a Material Earth-Friendly?</h3>
<ol>
<li>It grows back quickly, like bamboo or trees from a well-cared-for forest.</li>
<li>It comes from nearby, so trucks do not have to drive very far.</li>
<li>It is made from recycled things, like old bricks or reused wood.</li>
<li>It lasts a long time, so it does not need to be replaced often.</li>
<li>It can be used again when the building is changed or taken apart.</li>
</ol>

<h3>Trees Are Super Helpers</h3>
<p>While a tree grows, it breathes in a gas called carbon dioxide and keeps the carbon inside its wood. When we build with wood and new trees are planted, that carbon stays locked away inside the building. That is one reason wood from well-cared-for forests is a popular green choice.</p>

<h3>You Can Help Too</h3>
<p>You can be a material detective! Look around your home or school. What is the floor made of? The walls? The table? Could any of those things be reused or recycled? When you build a fort, a model or a birdhouse, try using boxes, sticks or scraps you already have. Using things again is one of the greenest choices of all.</p>
`,
        MIDDLE_SCHOOL: `
<h2>Choosing Materials That Are Better for the Planet</h2>
<p>When people talk about green buildings, they often think about solar panels or saving electricity. But the materials a building is made from matter a lot too. Making concrete, steel, glass and plastic uses energy and creates pollution long before anyone moves in. Choosing better materials is one of the most powerful decisions designers make.</p>

<h3>The Hidden Cost of Materials</h3>
<p>Every material has a story. It is dug up or harvested, processed in a factory, shipped to the building site and finally installed. At each step, energy is used, and much of that energy comes from fossil fuels that release carbon dioxide. The carbon released during this whole journey is called <em>embodied carbon</em>, because it is "built into" the material even though you cannot see it.</p>
<ul>
<li><strong>Embodied carbon:</strong> the greenhouse gases released to make, transport and install a material</li>
<li><strong>Operational carbon:</strong> the greenhouse gases released while a building is being used, from heating, cooling and lights</li>
<li><strong>Renewable material:</strong> a material that can grow back, such as wood, bamboo, cork or straw</li>
<li><strong>Recycled content:</strong> the part of a product made from materials that were used before</li>
<li><strong>Durability:</strong> how long a material lasts before it wears out and needs replacing</li>
<li><strong>Salvaged material:</strong> something taken from an old building and used again, like bricks or beams</li>
</ul>

<h3>Comparing Common Materials</h3>
<table>
<thead><tr><th>Material</th><th>Main concern</th><th>Greener option</th></tr></thead>
<tbody>
<tr><td>Concrete</td><td>Making cement needs very high heat and releases carbon dioxide</td><td>Use less, or mixes that replace part of the cement</td></tr>
<tr><td>Steel</td><td>Melting iron ore takes a lot of energy</td><td>Steel with high recycled content</td></tr>
<tr><td>Wood</td><td>Can harm forests if cut carelessly</td><td>Wood from responsibly managed forests</td></tr>
<tr><td>Insulation foam</td><td>Made from oil-based chemicals</td><td>Cellulose, wool or wood-fiber insulation</td></tr>
</tbody>
</table>

<h3>Thinking About the Whole Life</h3>
<p>A good material is not only about how it is made. It also matters how long it lasts and what happens at the end. A cheap floor that wears out in five years may cause more harm than a sturdy one that lasts for decades. Materials that can be taken apart and reused keep waste out of landfills.</p>

<h3>Questions Smart Builders Ask</h3>
<ol>
<li>How much energy did it take to make this?</li>
<li>How far did it travel to get here?</li>
<li>Is it healthy for the people inside the building?</li>
<li>How long will it last?</li>
<li>Can it be reused or recycled later?</li>
</ol>
`,
        HIGH_SCHOOL: `
<h2>Material Selection, Embodied Carbon and Life Cycle Thinking</h2>
<p>For decades, green building focused on cutting the energy a building uses for heating, cooling and lighting. As buildings become more efficient, attention has shifted to the carbon released by producing and installing the materials themselves. For a highly efficient new building, this embodied carbon can make up a large share, sometimes the majority, of its total climate impact over its lifetime.</p>

<h3>Why Some Materials Have Big Footprints</h3>
<p>Concrete is the most widely used construction material on Earth. Its key ingredient, cement, is made by heating limestone to very high temperatures. That process releases carbon dioxide in two ways: from burning fuel for heat, and from the chemical reaction that breaks down limestone itself. Cement production is responsible for several percent of global carbon dioxide emissions. Steel, aluminum and glass also require energy-intensive high-temperature processes.</p>

<h3>Life Cycle Assessment</h3>
<p>To compare materials fairly, engineers use <em>life cycle assessment</em>, which follows a product through every stage of its life:</p>
<ul>
<li><strong>Raw material extraction:</strong> mining, quarrying or harvesting the resources a product needs</li>
<li><strong>Manufacturing:</strong> processing raw resources into finished products in factories and kilns</li>
<li><strong>Transportation:</strong> moving materials from factories to the building site by truck, rail or ship</li>
<li><strong>Use phase:</strong> the years a material spends in the building, including maintenance and replacement</li>
<li><strong>End of life:</strong> what happens when a building is demolished, such as landfill, recycling or reuse</li>
<li><strong>Cradle to grave:</strong> an assessment boundary that covers a product from extraction all the way to disposal</li>
</ul>

<h3>Comparing Structural Options</h3>
<table>
<thead><tr><th>Option</th><th>Strengths</th><th>Trade-offs</th></tr></thead>
<tbody>
<tr><td>Conventional concrete</td><td>Strong, fire resistant, durable</td><td>High embodied carbon from cement</td></tr>
<tr><td>Low-carbon concrete mixes</td><td>Replace some cement with by-products such as fly ash or slag</td><td>May cure more slowly; supply varies by region</td></tr>
<tr><td>Recycled steel</td><td>Lower energy than steel made from ore</td><td>Still energy intensive; depends on electricity source</td></tr>
<tr><td>Mass timber</td><td>Renewable, stores carbon, lighter weight</td><td>Depends on sustainable forestry; needs moisture and fire design</td></tr>
<tr><td>Earth and straw</td><td>Very low processing energy</td><td>Best for small buildings; needs skilled builders</td></tr>
</tbody>
</table>

<h3>Strategies Designers Use</h3>
<ol>
<li><strong>Build less:</strong> reuse existing buildings and design efficient structures that need less material.</li>
<li><strong>Choose lower-carbon versions:</strong> pick cement substitutes, recycled metals and bio-based insulation.</li>
<li><strong>Source responsibly:</strong> look for certified wood and local supply where it makes sense.</li>
<li><strong>Design for the future:</strong> use connections that allow parts to be removed and reused.</li>
</ol>
<p>Material choices involve trade-offs. A low-carbon option that fails early, causes moisture problems or is hard to obtain may not be the best choice. Good design balances carbon, cost, health, durability and local availability.</p>
`,
        UNDERGRADUATE: `
<h2>Analyzing Material Impacts: LCA, EPDs and Procurement</h2>
<p>Sustainable material selection has moved from rules of thumb, such as "choose recycled content", to quantitative comparison based on standardized data. This lesson introduces the methods professionals use to measure material impacts, how that data is reported, and how it can be turned into procurement decisions on real projects.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Life cycle assessment:</strong> a standardized method for quantifying environmental impacts across a product or building life</li>
<li><strong>Functional unit:</strong> the defined quantity of performance being compared, such as one square meter of wall with a given thermal resistance</li>
<li><strong>System boundary:</strong> the set of life cycle stages and processes included in an assessment</li>
<li><strong>Environmental Product Declaration:</strong> a verified document reporting a product's life cycle impacts using shared rules</li>
<li><strong>Product category rules:</strong> agreed methods that define how LCAs and EPDs are performed for a specific product type</li>
<li><strong>Global warming potential:</strong> an impact indicator expressing greenhouse gas emissions as an equivalent mass of carbon dioxide</li>
</ul>

<h3>Life Cycle Stages for Buildings</h3>
<p>European and international standards divide a building life cycle into modules, which allows different studies to report results consistently:</p>
<table>
<thead><tr><th>Module</th><th>Stage</th><th>Typical contents</th></tr></thead>
<tbody>
<tr><td>A1 to A3</td><td>Product stage</td><td>Raw material supply, transport to factory, manufacturing</td></tr>
<tr><td>A4 to A5</td><td>Construction stage</td><td>Transport to site, installation, site waste</td></tr>
<tr><td>B1 to B7</td><td>Use stage</td><td>Maintenance, repair, replacement, operational energy and water</td></tr>
<tr><td>C1 to C4</td><td>End-of-life stage</td><td>Demolition, transport, waste processing, disposal</td></tr>
<tr><td>D</td><td>Beyond the system boundary</td><td>Potential benefits from reuse, recovery and recycling</td></tr>
</tbody>
</table>
<p>Many EPDs report only the product stage, often called cradle to gate. Comparing a cradle-to-gate value for one product with a cradle-to-grave value for another is a common error.</p>

<h3>Reading an EPD Critically</h3>
<p>An EPD does not certify that a product is "green". It discloses impacts in a standardized way. Product-specific EPDs reflect a single manufacturer and plant, industry-average EPDs reflect a sector, and generic database values are less precise still. When comparing products, check that the functional unit, product category rules, system boundary and data year match. Differences between products within the same category can be substantial, which is why specifying by performance rather than by generic material type can unlock large reductions.</p>

<h3>Quantitative Reasoning</h3>
<p>Total embodied impact is the sum, across all components, of quantity multiplied by impact factor. In most buildings a small number of components dominate: structure, foundations and the building envelope usually account for most of the embodied carbon. That means effort is best directed at large-volume materials such as concrete and steel before fine-tuning finishes. Replacement cycles matter too: a finish replaced several times over a building life multiplies its product-stage impact accordingly.</p>

<h3>A Procurement Checklist</h3>
<ol>
<li>Run an early whole-building LCA to find the highest-impact components.</li>
<li>Set a project target, for example a percentage reduction against a baseline design.</li>
<li>Request product-specific EPDs in bid documents for major materials.</li>
<li>Specify performance limits, such as a maximum global warming potential for concrete mixes.</li>
<li>Check durability, health disclosures and supply chain risk alongside carbon.</li>
<li>Verify delivered products against submitted EPDs during construction.</li>
</ol>
`,
        GRADUATE: `
<h2>Circularity, Bio-Based Materials and Construction Supply Chains</h2>
<p>Construction is one of the largest consumers of raw materials and one of the largest producers of waste in most economies. A linear model of extract, build, demolish and landfill dominates practice. Graduate-level analysis looks beyond individual product choices to the systems that shape material flows: design practices, supply chains, markets, regulation and the institutions that govern them.</p>

<h3>Principles of a Circular Built Environment</h3>
<ul>
<li><strong>Circular economy:</strong> an economic model that keeps products and materials in use at their highest value for as long as possible</li>
<li><strong>Design for disassembly:</strong> detailing buildings with reversible connections so components can be recovered intact</li>
<li><strong>Material passport:</strong> a digital record of the materials in a building, their quantities and their recovery potential</li>
<li><strong>Urban mining:</strong> treating the existing building stock as a source of secondary materials</li>
<li><strong>Downcycling:</strong> recycling that turns a material into a lower-value product, such as crushing concrete into fill</li>
<li><strong>Bio-based material:</strong> a material derived from renewable biological sources such as wood, bamboo, hemp, straw or cork</li>
</ul>
<p>The hierarchy matters. Keeping a building in use beats reusing its components, which beats recycling materials, which beats energy recovery and disposal. Much of what is called recycling in construction today is downcycling.</p>

<h3>Bio-Based Materials: Promise and Limits</h3>
<p>Bio-based materials can store biogenic carbon for the life of a building and often require less processing energy. However, their benefits depend on how forests and farms are managed, on whether the carbon is eventually released through decay or burning, and on how assessments account for timing. Land use, biodiversity and competition with food production are legitimate concerns at scale. Responsible sourcing schemes and transparent accounting of biogenic carbon are therefore central to credible claims.</p>

<h3>Barriers in Supply Chains and Institutions</h3>
<table>
<thead><tr><th>Barrier</th><th>Effect</th><th>Possible response</th></tr></thead>
<tbody>
<tr><td>Fragmented supply chains</td><td>Little information flows between producers, designers and contractors</td><td>Digital product data and disclosure requirements</td></tr>
<tr><td>Building codes written around conventional materials</td><td>Novel or reused materials face slow approval</td><td>Performance-based codes and testing protocols</td></tr>
<tr><td>Warranty and liability for reused components</td><td>Owners and insurers resist uncertified materials</td><td>Recertification and grading standards</td></tr>
<tr><td>Low landfill and virgin material prices</td><td>Recovery is uneconomic</td><td>Landfill levies and recycled content mandates</td></tr>
<tr><td>Split incentives between developers and owners</td><td>Future value of recoverable parts is not captured</td><td>Long-term ownership models and leasing of components</td></tr>
</tbody>
</table>

<h3>Policy Instruments</h3>
<p>Public authorities are major clients and regulators, which gives them two levers. As clients, they can adopt low-carbon procurement policies that set embodied carbon limits for materials such as concrete and steel. As regulators, they can require whole-life carbon assessment for larger projects, set demolition waste diversion targets, and adjust codes to accept reclaimed components. Policies work best in combination, because disclosure without limits creates data but little change, and limits without data are hard to enforce.</p>

<h3>Equity and Global Supply</h3>
<p>Material supply chains cross borders. Extraction and primary processing often happen in regions that bear the local pollution while the finished buildings are elsewhere. Lower-carbon policies can shift burdens, for example by changing demand for particular by-products or timber sources. A robust evaluation considers labor conditions, community impacts and the rights of Indigenous and local landholders where resources are harvested.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Map material flows for the project or portfolio, including what is already in existing buildings.</li>
<li>Prioritize retention and reuse before specifying new materials.</li>
<li>Assess whole-life carbon with transparent treatment of biogenic carbon.</li>
<li>Identify regulatory, liability and market barriers to the preferred strategy.</li>
<li>Consider social and ecological effects along the supply chain.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in Sustainable Construction Materials</h2>
<p>Research on construction materials now spans chemistry, materials science, forestry, industrial ecology and economics. Key questions concern how far emissions from conventional materials can be reduced, whether buildings can act as meaningful carbon stores, and how material-level innovations translate into system-level outcomes. This lesson surveys methods, debates and open directions for advanced study.</p>

<h3>Novel Material Pathways</h3>
<ul>
<li><strong>Supplementary cementitious materials:</strong> materials such as calcined clays, slag and fly ash that replace part of the clinker in cement</li>
<li><strong>Carbon mineralization:</strong> reacting carbon dioxide with calcium or magnesium compounds to form stable carbonates within concrete or aggregates</li>
<li><strong>Engineered timber:</strong> laminated or composite wood products that allow wood to be used in larger and taller structures</li>
<li><strong>Mycelium composites:</strong> materials grown from fungal networks binding agricultural residues, explored for insulation and panels</li>
<li><strong>Biogenic carbon storage:</strong> carbon absorbed by plants during growth and retained in building products for their service life</li>
<li><strong>Clinker factor:</strong> the share of clinker in a cement, a key lever for reducing process emissions</li>
</ul>

<h3>Methodological Debates</h3>
<p>Assessment methods strongly shape conclusions about which materials are preferable. Several issues remain contested:</p>
<table>
<thead><tr><th>Question</th><th>Why it is contested</th></tr></thead>
<tbody>
<tr><td>Accounting for biogenic carbon</td><td>Counting uptake and release as neutral hides timing; dynamic methods value delayed emissions differently</td></tr>
<tr><td>Allocation of impacts to by-products</td><td>Whether slag or fly ash carries part of the burden of steel or coal power changes their apparent benefit</td></tr>
<tr><td>Crediting future recycling and reuse</td><td>Module D benefits are speculative and can be double counted across life cycles</td></tr>
<tr><td>Attributional versus consequential LCA</td><td>Average impacts differ from the marginal effects of a decision on markets</td></tr>
<tr><td>Permanence of carbon storage</td><td>Buildings may be demolished, burned or landfilled, releasing stored carbon</td></tr>
</tbody>
</table>

<h3>System-Level Effects</h3>
<p>Material substitution studies often assume that a lower-carbon option displaces a higher-carbon one one-for-one. At scale this may not hold. Increased timber demand interacts with forest carbon stocks and harvest rates, and the net effect depends on forest growth dynamics, management and leakage to other regions. Demand for by-products such as fly ash is limited by their supply, which declines as coal power is phased out. Material efficiency, using less material per unit of service, is consistently identified as a large but underused lever. Dynamic material flow analysis, which models the stock of buildings and its inflows and outflows over time, is used to explore these effects.</p>

<h3>Modeling Approaches</h3>
<p>Researchers combine several tools. Process-based LCA offers detail but truncates supply chains. Environmentally extended input-output analysis captures whole economies but at coarse resolution, and hybrid methods attempt to combine both. Building stock models link material demand to demographic and economic scenarios. Integrated assessment models examine how the materials sector interacts with energy and land systems. Uncertainty analysis, including sensitivity to service life and end-of-life assumptions, is essential because these parameters often dominate results.</p>

<h3>Contested Questions</h3>
<p>Can buildings be a significant carbon sink, or is their storage potential small relative to emissions from conventional materials? How should research weigh the near-term urgency of emissions reductions against longer-term storage? To what extent can reused components be qualified for structural use without prohibitive testing costs? Each question involves both technical uncertainty and value judgments about time, risk and responsibility.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Dynamic, time-explicit carbon accounting that is practical for design decisions.</li>
<li>Durability and performance data for novel low-carbon binders and bio-based products in real service conditions.</li>
<li>Non-destructive testing and grading methods to qualify reclaimed structural components.</li>
<li>Coupled forest, materials and building stock models that capture leakage and land-use effects.</li>
<li>Assessment methods that incorporate social impacts and justice along material supply chains.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'gbmq1',
      question: {
        ELEMENTARY: 'Which of these is an earth-friendly building material?',
        MIDDLE_SCHOOL: 'What is embodied carbon?',
        HIGH_SCHOOL: 'Why does making cement release so much carbon dioxide?',
        UNDERGRADUATE: 'What is an Environmental Product Declaration (EPD)?',
        GRADUATE: 'What is design for disassembly?',
        PHD: 'What are supplementary cementitious materials?',
      },
      options: {
        ELEMENTARY: ['Bamboo', 'Styrofoam cups', 'Plastic bags', 'Oil'],
        MIDDLE_SCHOOL: ['The greenhouse gases released to make, transport and install a material', 'The color of a material', 'How heavy a material is', 'The carbon released by lights and heating'],
        HIGH_SCHOOL: ['Burning fuel for high heat and the chemical breakdown of limestone both release it', 'Cement absorbs carbon dioxide from the air', 'Cement is made from trees', 'Only the trucks that deliver it release carbon dioxide'],
        UNDERGRADUATE: ['A verified document reporting a product life cycle impacts using shared rules', 'A label proving a product has zero impact', 'An electrical design standard', 'A building energy bill'],
        GRADUATE: ['Detailing buildings with reversible connections so components can be recovered intact', 'Building structures that can never be changed', 'Demolishing buildings quickly with machines', 'Gluing every component permanently'],
        PHD: ['Materials such as calcined clays, slag and fly ash that replace part of the clinker in cement', 'Steel bars added to concrete', 'Paints applied to concrete surfaces', 'Water added to cement'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Bamboo is a fast-growing grass that grows back quickly, so it is an earth-friendly choice.',
        MIDDLE_SCHOOL: 'Embodied carbon is built into a material through mining, making, shipping and installing it.',
        HIGH_SCHOOL: 'Cement releases carbon dioxide from fuel combustion and from the chemical reaction that breaks down limestone.',
        UNDERGRADUATE: 'An EPD discloses impacts in a standardized, verified way; it does not certify that a product is green.',
        GRADUATE: 'Reversible connections allow parts to be taken out and reused instead of being demolished as waste.',
        PHD: 'Replacing clinker with these materials lowers the clinker factor and therefore process emissions.',
      },
    },
    {
      id: 'gbmq2',
      question: {
        ELEMENTARY: 'Why is wood from well-cared-for forests a green choice?',
        MIDDLE_SCHOOL: 'Which insulation is a greener choice than oil-based foam?',
        HIGH_SCHOOL: 'What does a cradle-to-grave assessment cover?',
        UNDERGRADUATE: 'Which components usually account for most of a building embodied carbon?',
        GRADUATE: 'What is downcycling?',
        PHD: 'Why is accounting for biogenic carbon contested?',
      },
      options: {
        ELEMENTARY: ['Wood is always painted green', 'Trees keep carbon locked in their wood and new trees are planted', 'Wood never needs to be cut', 'Wood is made in factories'],
        MIDDLE_SCHOOL: ['Plastic wrap', 'Cellulose, wool or wood-fiber insulation', 'Aluminum foil only', 'Concrete blocks'],
        HIGH_SCHOOL: ['Only the factory stage', 'A product from extraction all the way to disposal', 'Only transport to the site', 'Only the years a product is used'],
        UNDERGRADUATE: ['Paint and carpets', 'Structure, foundations and the building envelope', 'Door handles and light switches', 'Furniture only'],
        GRADUATE: ['Reusing a whole building without changes', 'Recycling that turns a material into a lower-value product', 'Riding bicycles to construction sites', 'Increasing the value of a material'],
        PHD: ['Biogenic carbon cannot be measured at all', 'Counting uptake and release as neutral hides timing, and dynamic methods value delays differently', 'Plants do not absorb carbon', 'All methods give identical results'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Growing trees store carbon in their wood, and planting new trees keeps forests healthy.',
        MIDDLE_SCHOOL: 'Insulation made from paper fibers, wool or wood avoids oil-based chemicals.',
        HIGH_SCHOOL: 'Cradle to grave follows a product from raw material extraction through manufacturing, use and disposal.',
        UNDERGRADUATE: 'Large-volume materials in structure, foundations and envelope dominate, so effort should start there.',
        GRADUATE: 'Crushing concrete into fill is a common example of downcycling, which loses much of the material value.',
        PHD: 'Whether storage timing is valued, and whether carbon stays stored, changes conclusions about bio-based materials.',
      },
    },
    {
      id: 'gbmq3',
      question: {
        ELEMENTARY: 'What does recycled mean?',
        MIDDLE_SCHOOL: 'What is a salvaged material?',
        HIGH_SCHOOL: 'What is a trade-off of mass timber?',
        UNDERGRADUATE: 'What is a common error when comparing EPDs?',
        GRADUATE: 'What is a material passport?',
        PHD: 'Why might timber substitution not deliver one-for-one carbon savings at scale?',
      },
      options: {
        ELEMENTARY: ['Thrown in the ocean', 'Made of gold', 'Made from old things that were used before', 'Painted a new color'],
        MIDDLE_SCHOOL: ['A material that has never been used', 'A material made in space', 'Something taken from an old building and used again', 'A material that dissolves in rain'],
        HIGH_SCHOOL: ['It cannot hold any weight', 'It is heavier than concrete', 'It depends on sustainable forestry and needs moisture and fire design', 'It is made from oil'],
        UNDERGRADUATE: ['Reading the product name', 'Checking the data year', 'Comparing a cradle-to-gate value with a cradle-to-grave value', 'Using the same functional unit'],
        GRADUATE: ['A travel document for builders', 'A permit to demolish a building', 'A digital record of the materials in a building and their recovery potential', 'A tax on new materials'],
        PHD: ['Wood has no carbon in it', 'Timber is never used in buildings', 'Harvest increases interact with forest carbon stocks and can cause leakage to other regions', 'Concrete stores more carbon than wood'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Recycled things are made from old materials instead of brand-new stuff.',
        MIDDLE_SCHOOL: 'Salvaged bricks and beams get a second life in a new building.',
        HIGH_SCHOOL: 'Mass timber is renewable and stores carbon, but it relies on good forest management and careful design.',
        UNDERGRADUATE: 'Different system boundaries make numbers incomparable, so boundaries must match.',
        GRADUATE: 'Material passports record what is in a building so materials can be recovered later.',
        PHD: 'Net effects depend on forest growth, management and leakage, not just the material swap.',
      },
    },
    {
      id: 'gbmq4',
      question: {
        ELEMENTARY: 'Why is it good to get materials from nearby?',
        MIDDLE_SCHOOL: 'Why can a cheap floor be worse for the planet than a sturdy one?',
        HIGH_SCHOOL: 'Which strategy should usually come first to cut material impacts?',
        UNDERGRADUATE: 'What is a functional unit in LCA?',
        GRADUATE: 'Why do disclosure and limits work best together as policy?',
        PHD: 'What does dynamic material flow analysis model?',
      },
      options: {
        ELEMENTARY: ['Nearby things are always shiny', 'Trucks do not have to drive very far', 'Nearby things are heavier', 'Far things are always broken'],
        MIDDLE_SCHOOL: ['It is always the same color', 'Cheap floors are recycled automatically', 'Cheap floors are made of gold', 'It may wear out quickly and need replacing many times'],
        HIGH_SCHOOL: ['Add more decoration', 'Use the heaviest materials', 'Ship materials from far away', 'Build less by reusing buildings and designing efficient structures'],
        UNDERGRADUATE: ['The price of a product', 'The brand of a product', 'The color of a product', 'The defined quantity of performance being compared'],
        GRADUATE: ['Disclosure alone always bans bad materials', 'Limits do not need any data', 'Neither has any effect', 'Disclosure without limits creates data but little change, and limits need data to enforce'],
        PHD: ['Only the chemistry of one product', 'Daily weather patterns', 'Electricity prices only', 'The building stock with its inflows and outflows of materials over time'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Less driving means less fuel burned and less pollution.',
        MIDDLE_SCHOOL: 'A floor that has to be replaced again and again uses more materials and energy over time.',
        HIGH_SCHOOL: 'Reusing buildings and using less material avoids impacts before choosing lower-carbon products.',
        UNDERGRADUATE: 'Comparisons are only fair when they deliver the same function, such as a wall of the same thermal resistance.',
        GRADUATE: 'Policies reinforce each other: disclosure supplies the data that limits require.',
        PHD: 'It tracks how material stocks in buildings grow and are released over time, exposing system effects.',
      },
    },
    {
      id: 'gbmq5',
      question: {
        ELEMENTARY: 'What is a natural material?',
        MIDDLE_SCHOOL: 'What is operational carbon?',
        HIGH_SCHOOL: 'What do low-carbon concrete mixes do?',
        UNDERGRADUATE: 'Why is specifying a maximum global warming potential for concrete useful?',
        GRADUATE: 'What is urban mining?',
        PHD: 'Why is the supply of fly ash a limit on its role as a cement substitute?',
      },
      options: {
        ELEMENTARY: ['Something from nature with very little changing, like stone or straw', 'A plastic toy', 'A video game', 'Something made only in factories'],
        MIDDLE_SCHOOL: ['Greenhouse gases released while a building is used, from heating, cooling and lights', 'Carbon stored in trees', 'Carbon used to make bricks', 'A type of paint'],
        HIGH_SCHOOL: ['Replace some cement with by-products such as fly ash or slag', 'Use more cement than usual', 'Add plastic instead of sand', 'Remove all water from concrete'],
        UNDERGRADUATE: ['Product differences within a category can be large, so performance limits unlock reductions', 'It makes concrete weaker on purpose', 'It removes the need for engineers', 'It guarantees zero emissions'],
        GRADUATE: ['Treating the existing building stock as a source of secondary materials', 'Digging new mines under cities', 'Mining coal for power plants', 'Building taller towers'],
        PHD: ['It is a by-product of coal power, which declines as coal plants close', 'It is unlimited everywhere', 'It cannot be used in concrete', 'It is only made in laboratories'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Natural materials like stone, straw and earth come from nature with little processing.',
        MIDDLE_SCHOOL: 'Operational carbon comes from running a building, while embodied carbon comes from making its materials.',
        HIGH_SCHOOL: 'By-products from other industries can replace part of the cement and cut embodied carbon.',
        UNDERGRADUATE: 'Specifying by performance rewards the lower-impact products within the same category.',
        GRADUATE: 'Existing buildings hold large quantities of materials that can be recovered and reused.',
        PHD: 'Substitution assumptions must account for by-product supply that shrinks as the energy system changes.',
      },
    },
  ],
}

export default expansion
