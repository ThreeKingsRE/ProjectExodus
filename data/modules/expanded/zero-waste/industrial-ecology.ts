import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'zero-waste',
  moduleKey: 'industrial-ecology',
  lessons: [
    {
      id: 'zw-ind-1',
      title: 'Factories Like Nature',
      content: {
        ELEMENTARY: `
<h2>Factories That Work Like a Forest</h2>
<p>Have you ever walked through a forest? It is full of life, but you will not find a trash can anywhere! In a forest, everything gets used again. Some people had a great idea: what if factories could work like a forest too?</p>

<h3>Nature Has No Trash</h3>
<p>When a leaf falls, worms and tiny living things called decomposers eat it. They turn it into rich soil. Plants use that soil to grow new leaves. Animals eat the plants, and their droppings feed the soil again. Around and around it goes!</p>
<ul>
<li><strong>Decomposer:</strong> a tiny living thing, like a worm or mushroom, that breaks down dead plants and animals</li>
<li><strong>Cycle:</strong> something that goes around and around and comes back to the start</li>
<li><strong>Ecosystem:</strong> a community of plants, animals and tiny living things that share a home</li>
</ul>

<h3>Factories Make Leftovers</h3>
<p>Factories make the things we use, like paper, bread, metal cans and electricity. While they work, they make leftovers too. There may be extra heat, steam, sawdust, scraps or used water. Often these leftovers get thrown away.</p>

<h3>Sharing Leftovers</h3>
<p>Here is the clever part. One factory's leftovers can be another factory's food! Sawdust from a furniture shop can be pressed into new boards. Warm water from a power plant can heat nearby homes or greenhouses. When factories share like this, they act like neighbors in a forest.</p>
<ul>
<li><strong>Leftover:</strong> something that is still there after a job is done</li>
<li><strong>Share:</strong> to give part of what you have to someone else so they can use it</li>
<li><strong>Neighbor:</strong> someone who lives or works close by</li>
</ul>

<h3>You Can Be a Little Factory Too</h3>
<ol>
<li>Give your fruit and vegetable peels to a compost bin, just like decomposers do.</li>
<li>Use the back of used paper for drawing.</li>
<li>Share toys and books you have finished with with friends.</li>
<li>Collect rainwater to water plants.</li>
</ol>

<h3>Think About It</h3>
<p>Next time you see a factory, imagine it holding hands with the factory next door, passing its leftovers along. That is how factories can work like nature!</p>
`,
        MIDDLE_SCHOOL: `
<h2>Industrial Ecology: Learning From Nature</h2>
<p>Industrial ecology is a field of study that looks at factories, cities and whole economies as if they were ecosystems. In nature, materials flow in loops and almost nothing is wasted. In many industries, materials flow in a straight line: dig them up, make products, throw them away. Industrial ecologists look for ways to bend that line into loops.</p>

<h3>Linear Versus Looped Systems</h3>
<table>
<thead><tr><th>Feature</th><th>Linear industry</th><th>Industry working like an ecosystem</th></tr></thead>
<tbody>
<tr><td>Raw materials</td><td>Always new from mines, wells and forests</td><td>Partly supplied by other industries' leftovers</td></tr>
<tr><td>By-products</td><td>Thrown away or released as pollution</td><td>Sold or shared as resources</td></tr>
<tr><td>Energy</td><td>Waste heat is lost to the air</td><td>Waste heat warms buildings or other processes</td></tr>
<tr><td>Water</td><td>Used once and discharged</td><td>Cleaned and reused several times</td></tr>
</tbody>
</table>

<h3>Industrial Symbiosis</h3>
<p>In biology, <em>symbiosis</em> means two living things helping each other, like bees and flowers. In industrial symbiosis, companies help each other by trading leftovers. A power plant might send its extra steam to a nearby factory. A factory that cleans smoke from chimneys may produce a mineral called gypsum that a building-board maker can use.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Industrial ecology:</strong> the study of industries as systems of material and energy flows, modeled on natural ecosystems</li>
<li><strong>Industrial symbiosis:</strong> companies exchanging by-products, energy or water so one company's waste becomes another's resource</li>
<li><strong>By-product:</strong> a secondary material made while producing the main product</li>
<li><strong>Waste heat:</strong> heat released by a process that is not used and usually escapes into the air or water</li>
<li><strong>Eco-industrial park:</strong> a group of businesses located close together that share resources and services</li>
<li><strong>Raw material:</strong> a natural substance, like ore, wood or oil, used to make products</li>
</ul>

<h3>A Famous Example</h3>
<p>The town of Kalundborg in Denmark is often described as a classic case of industrial symbiosis. Over several decades, a power station, a refinery, a pharmaceutical company, a plasterboard maker and the town itself began trading steam, heat, water and by-products. What makes it interesting is that much of it grew step by step, as companies noticed deals that saved money.</p>

<h3>Why It Matters</h3>
<p>Sharing leftovers saves money, reduces pollution and means fewer raw materials need to be dug up. It also shows that protecting the environment and running a business can go together when we think in systems.</p>
`,
        HIGH_SCHOOL: `
<h2>Industrial Symbiosis, Eco-Industrial Parks and Material Flows</h2>
<p>Industrial ecology treats the economy as a living system with a metabolism: it takes in materials and energy, transforms them and releases wastes. The goal is to redesign that metabolism so it resembles mature natural ecosystems, where outputs of one organism feed another. This lesson explores the main tools and examples of the field, along with its limitations.</p>

<h3>Industrial Metabolism</h3>
<p>Just as a body digests food and releases waste, a city or country digests resources. Scientists can measure how many tonnes of minerals, fossil fuels, biomass and water flow into an economy, how much accumulates in buildings and products, and how much leaves as emissions and waste. Mapping these flows shows where the biggest opportunities for loops lie.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Industrial metabolism:</strong> the total flow of materials and energy through an economy, from extraction to disposal</li>
<li><strong>Material flow:</strong> the movement of a substance or material through processes, measured in mass over time</li>
<li><strong>Cascading:</strong> using a resource several times in a sequence of decreasing quality requirements, such as reusing water for cooling and then irrigation</li>
<li><strong>Eco-industrial park:</strong> a planned or emerging cluster of businesses that collaborate on energy, water and material exchanges</li>
<li><strong>Anchor tenant:</strong> a large facility, such as a power plant or refinery, whose flows make it a hub for exchanges</li>
<li><strong>Utility sharing:</strong> joint use of infrastructure like wastewater treatment, steam networks or logistics</li>
</ul>

<h3>Types of Exchanges</h3>
<table>
<thead><tr><th>Exchange type</th><th>Example</th><th>Benefit</th></tr></thead>
<tbody>
<tr><td>By-product reuse</td><td>Fly ash from coal combustion used in cement and concrete</td><td>Less landfill, less virgin material</td></tr>
<tr><td>Energy cascading</td><td>Waste steam piped to a nearby food processor</td><td>Less fuel burned overall</td></tr>
<tr><td>Water cascading</td><td>Treated process water reused for cooling</td><td>Lower freshwater withdrawals</td></tr>
<tr><td>Shared services</td><td>Joint wastewater plant or waste collection</td><td>Lower costs through scale</td></tr>
</tbody>
</table>

<h3>Self-Organized Versus Planned Parks</h3>
<p>Many successful symbiosis networks, such as Kalundborg in Denmark, grew gradually from bilateral deals between neighbors who trusted one another. Attempts to design eco-industrial parks from scratch have had mixed results, because companies must have matching flows, reliable supply and good reasons to cooperate. Facilitators who help companies discover matches have become a common tool.</p>

<h3>Trade-offs and Limits</h3>
<ul>
<li>Dependency: if one company closes or changes its process, its partners lose a supply.</li>
<li>Lock-in: an exchange built around a polluting anchor, such as a coal plant, may slow the transition away from it.</li>
<li>Quality: by-products may contain contaminants that limit reuse.</li>
<li>Regulation: rules that classify by-products as waste can make exchanges hard to permit.</li>
</ul>

<h3>Real-World Applications</h3>
<p>Industrial ecology ideas appear in district heating that uses industrial waste heat, cement made with slag or ash, breweries sending spent grain to farms as animal feed, and cities mapping their material flows to plan waste and recycling infrastructure. Each example turns a linear flow into a loop.</p>
`,
        UNDERGRADUATE: `
<h2>Material Flow Analysis, Symbiosis Networks and Lifecycle Thinking</h2>
<p>Industrial ecology provides the quantitative backbone for circular economy thinking. Its central claim is that environmental problems are best understood by tracing physical flows of materials and energy through technological systems. This lesson introduces the main analytical methods and shows how they connect firm-level exchanges to economy-wide resource use.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Material flow analysis:</strong> a method that quantifies flows and stocks of materials within a defined system using mass balance</li>
<li><strong>Substance flow analysis:</strong> a form of material flow analysis that tracks a single chemical element or compound, such as phosphorus or lead</li>
<li><strong>In-use stock:</strong> materials accumulated in products and infrastructure currently in service, such as steel in buildings</li>
<li><strong>Mass balance:</strong> the principle that inputs to a process equal outputs plus changes in stock</li>
<li><strong>Life cycle assessment:</strong> a method for estimating environmental impacts of a product or service across all life stages</li>
<li><strong>Dematerialization:</strong> reducing the quantity of materials needed to deliver a given service or economic output</li>
</ul>

<h3>Doing a Material Flow Analysis</h3>
<ol>
<li>Define the system boundary in space and time, such as a city over one year.</li>
<li>Identify the processes, such as production, manufacturing, use and waste management.</li>
<li>Quantify flows between processes using statistics, industry data and estimates.</li>
<li>Apply mass balance to check consistency and estimate missing flows.</li>
<li>Calculate stocks and their changes, then interpret losses, recycling rates and hotspots.</li>
</ol>
<p>Because mass is conserved, inconsistencies reveal data gaps. Uncertainty is usually handled with ranges or data-quality scores, and results are often presented as Sankey diagrams in which arrow width is proportional to flow size.</p>

<h3>Analyzing Symbiosis Networks</h3>
<p>Symbiosis networks can be described as graphs, with companies as nodes and exchanges as links. Network measures such as the number of links, connectedness and the share of exchanges that depend on a single hub help assess resilience. A network that relies on one anchor tenant is efficient but fragile; one with multiple suppliers for key flows is more robust.</p>

<h3>Comparing Analytical Methods</h3>
<table>
<thead><tr><th>Method</th><th>Unit of analysis</th><th>Main question</th></tr></thead>
<tbody>
<tr><td>Material flow analysis</td><td>Region, sector or economy</td><td>How much material flows where, and how much accumulates?</td></tr>
<tr><td>Substance flow analysis</td><td>One element or compound</td><td>Where are losses of a critical or toxic substance?</td></tr>
<tr><td>Life cycle assessment</td><td>Product or service</td><td>What are the environmental impacts per functional unit?</td></tr>
<tr><td>Input-output analysis</td><td>Economic sectors</td><td>How do supply chains link final demand to resource use?</td></tr>
</tbody>
</table>

<h3>Lifecycle Thinking Applied to Exchanges</h3>
<p>Not every exchange is beneficial. Transporting a low-value by-product a long distance may create more emissions than it saves. Life cycle assessment of an exchange compares the impacts of the symbiotic system against a reference case in which each company sources virgin inputs and disposes of wastes separately. Allocation choices, such as how to share the impacts of a power plant between electricity and steam, can strongly influence results.</p>

<h3>Applied Checklist</h3>
<ul>
<li>Is the by-product consistent in quality and quantity?</li>
<li>What virgin material or energy does it actually displace?</li>
<li>Do transport and processing impacts erode the benefit?</li>
<li>Does the exchange create lock-in to a high-impact process?</li>
</ul>
`,
        GRADUATE: `
<h2>Eco-Industrial Development, Policy and Systems Optimization</h2>
<p>Graduate study shifts from describing flows to shaping them. Eco-industrial development raises questions of planning, coordination, regulation and finance. Firms rarely optimize across organizational boundaries on their own, so the challenge is designing institutions that make system-level efficiency attractive to individual actors.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Facilitated symbiosis:</strong> programs in which a third party helps companies identify and implement by-product exchanges</li>
<li><strong>End-of-waste criteria:</strong> regulatory conditions under which a processed waste ceases to be classified as waste and can be traded as a product</li>
<li><strong>Transaction costs:</strong> the costs of finding partners, negotiating contracts and monitoring exchanges, which can block beneficial deals</li>
<li><strong>Systems optimization:</strong> mathematical methods that find configurations minimizing cost or impact across several interconnected facilities</li>
<li><strong>Coordination failure:</strong> a situation where a beneficial joint investment does not happen because no single actor captures enough of the benefit</li>
<li><strong>Industrial cluster policy:</strong> public strategies that co-locate related firms to share infrastructure, skills and resources</li>
</ul>

<h3>Barriers to Eco-Industrial Development</h3>
<table>
<thead><tr><th>Barrier</th><th>Description</th><th>Possible response</th></tr></thead>
<tbody>
<tr><td>Information</td><td>Firms do not know what neighbors produce or need</td><td>Facilitation programs, shared databases, workshops</td></tr>
<tr><td>Regulatory</td><td>By-products classified as waste face permitting and transport rules</td><td>Clear end-of-waste and by-product criteria</td></tr>
<tr><td>Economic</td><td>Low landfill fees and cheap virgin materials reduce incentives</td><td>Landfill taxes, material pricing, procurement standards</td></tr>
<tr><td>Infrastructure</td><td>Pipelines and heat networks require large shared investment</td><td>Public co-finance, utility models, long-term contracts</td></tr>
<tr><td>Trust and risk</td><td>Dependence on a partner's supply creates business risk</td><td>Contracts, backup supply, gradual scaling</td></tr>
</tbody>
</table>

<h3>Optimization Approaches</h3>
<p>Planners use mathematical programming to design networks for water, heat and materials across sites. A typical model minimizes total cost or emissions subject to mass and energy balances, quality constraints and capacity limits. Results often show that the system-optimal design differs from what individual firms would choose, so mechanisms such as cost-sharing rules or cooperative game theory are used to allocate savings fairly and make the solution stable.</p>

<h3>Policy and the Circular Economy</h3>
<p>Industrial ecology informs circular economy strategies by identifying where material losses are largest and which loops are feasible. Policy tools include landfill and incineration taxes, green public procurement, standards that allow recycled content and secondary materials, and regional programs that fund symbiosis facilitators. Effective policy recognizes that the best loop depends on local industrial structure.</p>

<h3>Equity and Place</h3>
<p>Industrial clusters are often located near lower-income communities that bear the burden of pollution. Eco-industrial development can reduce local emissions, but it can also entrench polluting anchors or attract new heavy industry. Meaningful community participation in siting and monitoring decisions is part of responsible practice.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Establish a baseline of flows, costs and emissions for participating firms.</li>
<li>Assess net environmental benefit using life cycle methods with explicit allocation choices.</li>
<li>Examine economic viability for each participant, not just the system.</li>
<li>Test resilience if a key partner exits.</li>
<li>Consider long-term compatibility with decarbonization goals.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: Industrial Ecosystem Dynamics and Transitions</h2>
<p>Industrial ecology has evolved from a biological metaphor into a quantitative science of socio-economic metabolism. Current research asks how industrial ecosystems emerge and change, what makes them resilient, how to model material stocks over time, and how industrial systems can transition toward low-carbon and circular configurations. This lesson reviews methods, debates and open questions.</p>

<h3>Analytical Approaches</h3>
<ul>
<li><strong>Dynamic material flow analysis:</strong> modeling stocks and flows over time using product lifetimes and demand drivers to project future scrap and resource needs</li>
<li><strong>Ecological network analysis:</strong> applying food-web metrics such as cycling, connectance and redundancy to industrial exchange networks</li>
<li><strong>Agent-based modeling:</strong> simulating firms as autonomous decision makers to study how symbiosis networks form, grow and dissolve</li>
<li><strong>Multi-regional input-output analysis:</strong> linking economic transactions across countries with environmental data to trace resource footprints of consumption</li>
<li><strong>Prospective life cycle assessment:</strong> assessing future technologies at scale, with changing background systems such as decarbonizing electricity</li>
<li><strong>Socio-technical transition theory:</strong> frameworks that explain systemic change through interactions between niches, regimes and broader landscapes</li>
</ul>

<h3>The Ecosystem Analogy and Its Limits</h3>
<p>Researchers debate how far the biological analogy holds. Natural ecosystems run on solar energy, recycle nutrients through decomposers and evolve over long periods. Industrial systems run largely on fossil energy, are shaped by markets and regulation, and contain materials, such as synthetic chemicals and alloys, that are hard to cycle. Critics warn that the metaphor can mislead, while supporters argue that ecological metrics still offer useful insights into structure and resilience.</p>

<h3>Resilience and Network Structure</h3>
<table>
<thead><tr><th>Network property</th><th>Effect on performance</th><th>Research tension</th></tr></thead>
<tbody>
<tr><td>High efficiency, few links</td><td>Low cost, high throughput</td><td>Fragile to loss of a hub</td></tr>
<tr><td>Redundancy and diversity</td><td>Robust to disruption</td><td>Higher cost; possible underused capacity</td></tr>
<tr><td>Strong dependence on an anchor</td><td>Stable flows while anchor operates</td><td>Lock-in to anchor's technology</td></tr>
<tr><td>Modular sub-networks</td><td>Contained failures</td><td>Fewer system-wide synergies</td></tr>
</tbody>
</table>
<p>Ecological network studies suggest that sustainable systems balance efficiency and redundancy. Translating this into design guidance for industrial networks remains an active area.</p>

<h3>Stocks, Scrap and Long-Term Dynamics</h3>
<p>Dynamic stock models show that in-use stocks of metals in buildings, vehicles and infrastructure are large and growing, especially in rapidly urbanizing economies. Because products last for decades, recycled supply lags demand: even perfect recycling cannot meet a growing demand. This insight shapes debates about how much circularity can reduce primary extraction in the near term.</p>

<h3>Transition Pathways</h3>
<p>Decarbonization challenges classic symbiosis models built around fossil anchors. Research examines how networks reorganize when coal plants close, how hydrogen, captured carbon or biomass by-products might create new exchanges, and whether electrification reduces waste heat opportunities. Transition studies combine quantitative modeling with qualitative analysis of actors, institutions and power.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Integrating dynamic material flow analysis with energy system models to assess circular decarbonization pathways.</li>
<li>Empirical tests of whether ecological network metrics predict industrial network resilience.</li>
<li>Data infrastructures for firm-level flows that respect confidentiality.</li>
<li>Understanding how policy and governance foster or hinder self-organized symbiosis.</li>
<li>Assessing distributional impacts of industrial transitions on workers and host communities.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'zwindq1',
      question: {
        ELEMENTARY: 'How can factories work like nature?',
        MIDDLE_SCHOOL: 'What is industrial symbiosis?',
        HIGH_SCHOOL: 'What is industrial metabolism?',
        UNDERGRADUATE: 'What is material flow analysis?',
        GRADUATE: 'What are end-of-waste criteria?',
        PHD: 'What does dynamic material flow analysis add to static analysis?',
      },
      options: {
        ELEMENTARY: ['By using each other\'s leftovers', 'By making more pollution', 'By always working alone', 'By throwing everything away'],
        MIDDLE_SCHOOL: ['Companies exchanging by-products so one company\'s waste becomes another\'s resource', 'Factories competing to make more waste', 'A kind of machine part', 'Building factories in forests'],
        HIGH_SCHOOL: ['The total flow of materials and energy through an economy, from extraction to disposal', 'How fast a factory worker eats lunch', 'The speed of a conveyor belt', 'A type of metal alloy'],
        UNDERGRADUATE: ['A method that quantifies flows and stocks of materials in a system using mass balance', 'Tracking only money between companies', 'Measuring only air pollution', 'Counting the number of factories'],
        GRADUATE: ['Conditions under which a processed waste can be traded as a product', 'Rules that ban all recycling', 'The date a landfill closes', 'Criteria for building new incinerators'],
        PHD: ['It models stocks and flows over time using product lifetimes and demand drivers', 'It ignores stocks entirely', 'It only measures money flows', 'It replaces mass balance with guesses'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Like plants and animals in a forest, factories can share leftovers so nothing goes to waste.',
        MIDDLE_SCHOOL: 'Industrial symbiosis turns one company\'s leftovers into another company\'s raw materials.',
        HIGH_SCHOOL: 'Like a body digesting food, an economy takes in resources, transforms them and releases wastes.',
        UNDERGRADUATE: 'MFA uses the conservation of mass to track and check material flows and stocks.',
        GRADUATE: 'Clear end-of-waste rules reduce the regulatory burden that can block by-product exchanges.',
        PHD: 'Dynamic models project how stocks grow and when products will become scrap.',
      },
    },
    {
      id: 'zwindq2',
      question: {
        ELEMENTARY: 'What does a decomposer do?',
        MIDDLE_SCHOOL: 'Which town is often described as a classic example of industrial symbiosis?',
        HIGH_SCHOOL: 'What is cascading?',
        UNDERGRADUATE: 'What does the principle of mass balance state?',
        GRADUATE: 'Why can transaction costs block beneficial exchanges?',
        PHD: 'What is a key criticism of the ecosystem analogy in industrial ecology?',
      },
      options: {
        ELEMENTARY: ['Builds tall buildings', 'Breaks down dead leaves into soil', 'Makes plastic', 'Paints flowers'],
        MIDDLE_SCHOOL: ['Paris, France', 'Kalundborg, Denmark', 'Sydney, Australia', 'Cairo, Egypt'],
        HIGH_SCHOOL: ['Throwing a resource away after one use', 'Using a resource several times in a sequence of decreasing quality needs', 'Building waterfalls at factories', 'Stacking boxes in a warehouse'],
        UNDERGRADUATE: ['Outputs are always larger than inputs', 'Inputs equal outputs plus changes in stock', 'Mass disappears during manufacturing', 'Only liquids have mass'],
        GRADUATE: ['They make deals free', 'Finding partners, negotiating and monitoring cost money and time', 'They only apply to banks', 'They are paid by the government'],
        PHD: ['Industrial systems run on solar energy just like ecosystems', 'Industrial systems rely heavily on fossil energy and contain materials hard to cycle', 'Ecosystems produce more waste than factories', 'The analogy has never been used'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Decomposers like worms and mushrooms turn dead leaves into rich soil.',
        MIDDLE_SCHOOL: 'In Kalundborg, a power station, refinery and other companies trade steam, water and by-products.',
        HIGH_SCHOOL: 'Cascading reuses a resource, such as water, for jobs that need lower and lower quality.',
        UNDERGRADUATE: 'Because mass is conserved, inputs must equal outputs plus any change in stock.',
        GRADUATE: 'The effort of searching, negotiating and monitoring can outweigh savings, so good deals go undone.',
        PHD: 'Unlike ecosystems, industry runs largely on fossil energy and uses synthetic materials hard to cycle.',
      },
    },
    {
      id: 'zwindq3',
      question: {
        ELEMENTARY: 'What could sawdust from a furniture shop become?',
        MIDDLE_SCHOOL: 'What is waste heat?',
        HIGH_SCHOOL: 'Why have planned eco-industrial parks had mixed results?',
        UNDERGRADUATE: 'Why might a symbiosis network that depends on one hub be considered fragile?',
        GRADUATE: 'Why do system-optimal designs need cost-sharing rules?',
        PHD: 'Why can recycled supply not meet growing demand for metals in the near term?',
      },
      options: {
        ELEMENTARY: ['A rain cloud', 'A swimming pool', 'New pressed boards', 'A pair of shoes'],
        MIDDLE_SCHOOL: ['Heat used to cook dinner', 'Heat from the sun on a garden', 'Heat released by a process that usually escapes unused', 'Heat stored in batteries'],
        HIGH_SCHOOL: ['Companies always share perfectly', 'Planning is never attempted', 'Companies need matching flows, reliable supply and reasons to cooperate', 'Parks are too small to matter'],
        UNDERGRADUATE: ['Hubs never close', 'It has too many links', 'If the hub fails, many exchanges are lost at once', 'Hubs produce no by-products'],
        GRADUATE: ['They make the model simpler', 'Governments forbid optimization', 'The best system design may not be the best choice for each firm, so savings must be shared fairly', 'Costs are always zero'],
        PHD: ['Metals cannot be recycled', 'Products last for decades, so scrap supply lags behind demand', 'Recycling is illegal', 'Demand for metals is falling everywhere'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Sawdust can be pressed into new boards instead of being thrown away.',
        MIDDLE_SCHOOL: 'Waste heat is heat that escapes unused, but it could warm buildings or other processes.',
        HIGH_SCHOOL: 'Designing parks from scratch is hard because exchanges need matching flows and trust.',
        UNDERGRADUATE: 'Networks relying on a single anchor are efficient but vulnerable if it exits.',
        GRADUATE: 'Fair allocation of savings makes firms willing to join the system-optimal design.',
        PHD: 'Long product lifetimes mean today\'s scrap reflects past, smaller demand.',
      },
    },
    {
      id: 'zwindq4',
      question: {
        ELEMENTARY: 'What can you do that is like a decomposer?',
        MIDDLE_SCHOOL: 'What is an eco-industrial park?',
        HIGH_SCHOOL: 'What is a risk of building exchanges around a coal plant anchor?',
        UNDERGRADUATE: 'In a Sankey diagram, what does the width of an arrow show?',
        GRADUATE: 'Which policy tool raises the incentive to use by-products instead of dumping them?',
        PHD: 'What do ecological network studies suggest sustainable systems balance?',
      },
      options: {
        ELEMENTARY: ['Put fruit and vegetable peels in a compost bin', 'Throw peels in the trash', 'Leave the lights on', 'Buy more toys'],
        MIDDLE_SCHOOL: ['A group of nearby businesses that share resources and services', 'A playground for factory workers', 'A forest with no businesses', 'A single giant factory'],
        HIGH_SCHOOL: ['Lock-in that may slow the move away from coal', 'Coal plants make no by-products', 'It always speeds up clean energy', 'There is no risk at all'],
        UNDERGRADUATE: ['The size of the flow', 'The color of the material', 'The age of the factory', 'The number of workers'],
        GRADUATE: ['Landfill taxes', 'Subsidies for virgin materials', 'Lower fees for dumping', 'Removing recycled content standards'],
        PHD: ['Efficiency and redundancy', 'Speed and color', 'Profit and advertising', 'Size and height'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Composting peels turns them into soil, just like decomposers do in a forest.',
        MIDDLE_SCHOOL: 'Eco-industrial parks bring businesses together so they can share energy, water and materials.',
        HIGH_SCHOOL: 'Partners depending on a coal plant\'s by-products may resist or be harmed by its closure.',
        UNDERGRADUATE: 'Sankey diagrams draw arrows with widths proportional to flow size.',
        GRADUATE: 'Landfill taxes make disposal more expensive, so reusing by-products becomes more attractive.',
        PHD: 'Systems that are too efficient are fragile; too much redundancy is costly, so a balance is needed.',
      },
    },
    {
      id: 'zwindq5',
      question: {
        ELEMENTARY: 'Where is there no trash can at all?',
        MIDDLE_SCHOOL: 'What is a by-product?',
        HIGH_SCHOOL: 'Which is an example of a by-product exchange?',
        UNDERGRADUATE: 'What is dematerialization?',
        GRADUATE: 'Why is community participation important in eco-industrial development?',
        PHD: 'What is agent-based modeling used for in industrial ecology?',
      },
      options: {
        ELEMENTARY: ['A school', 'A shop', 'A house', 'A forest'],
        MIDDLE_SCHOOL: ['The main product a factory sells', 'A shop that sells products', 'A type of raw material from a mine', 'A secondary material made while producing the main product'],
        HIGH_SCHOOL: ['Burning all leftovers', 'Sending ash to landfill', 'Selling the main product', 'Fly ash used in cement and concrete'],
        UNDERGRADUATE: ['Making products heavier', 'Recycling only paper', 'Using more materials per service', 'Reducing materials needed to deliver a service or output'],
        GRADUATE: ['Communities never live near clusters', 'It slows every project down for no reason', 'It is required only for farms', 'Nearby communities often bear pollution burdens and should shape siting and monitoring'],
        PHD: ['Measuring metal hardness', 'Counting trees in forests', 'Calculating tax rates', 'Simulating firms as decision makers to see how networks form and dissolve'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'In a forest everything gets used again, so there is no trash!',
        MIDDLE_SCHOOL: 'A by-product is an extra material made alongside the main product.',
        HIGH_SCHOOL: 'Fly ash can replace some cement, reducing landfill and virgin material use.',
        UNDERGRADUATE: 'Dematerialization means getting the same service from less material.',
        GRADUATE: 'Communities near clusters carry pollution risks and deserve a voice in decisions.',
        PHD: 'Agent-based models show how network patterns emerge from individual firm decisions.',
      },
    },
  ],
}

export default expansion
