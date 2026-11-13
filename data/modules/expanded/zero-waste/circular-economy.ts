import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'zero-waste',
  moduleKey: 'circular-economy',
  lessons: [
    {
      id: 'circular-lesson-1',
      title: 'From Linear to Circular',
      content: {
        ELEMENTARY: `
<h2>The Circle of Stuff</h2>
<p>Think about a juice box. Someone makes it, you drink from it, and then it goes in the trash. That is a straight line: make, use, throw away. But what if things went around in a circle instead, so nothing was ever really thrown away? That idea is called a circular economy, and it is a big, exciting idea!</p>

<h3>A Straight Line Makes Trash</h3>
<p>In a straight line, we dig up materials, make new things, use them for a little while and then toss them. The trash piles up in big holes in the ground called landfills. And every time we want something new, we have to dig up or cut down even more from nature.</p>

<h3>A Circle Keeps Things Going</h3>
<p>In a circle, old things come back to life. A broken toy gets fixed. A jacket that is too small goes to a younger cousin. A glass jar becomes a pencil holder. Old paper is turned into new paper. Apple cores go into compost and help grow new apples!</p>
<ul>
<li><strong>Reuse:</strong> using something again, maybe in a brand new way</li>
<li><strong>Repair:</strong> fixing something that is broken so it works again</li>
<li><strong>Recycle:</strong> turning old materials into new things in a factory</li>
<li><strong>Compost:</strong> letting food scraps and leaves turn into rich new soil</li>
<li><strong>Landfill:</strong> a big hole in the ground where trash is buried and stays</li>
</ul>

<h3>Nature Already Does This</h3>
<p>In a forest there is no trash can. When a leaf falls, bugs, worms and tiny living things eat it and turn it into soil. The soil helps new trees grow, and the trees make new leaves. Nature has been using the circle for millions of years. We can learn from it!</p>

<h3>You Can Join the Circle</h3>
<ol>
<li>Ask a grown-up if a broken toy can be fixed before throwing it away.</li>
<li>Give clothes and books you have outgrown to someone else.</li>
<li>Use both sides of your paper for drawing.</li>
<li>Turn an old box or jar into something new and fun.</li>
</ol>
<p>Every time you keep something in the circle, you are being a planet helper!</p>
`,
        MIDDLE_SCHOOL: `
<h2>Designing Waste Out of the System</h2>
<p>Most of the things we use follow a path called the <em>linear economy</em>: take materials from the Earth, make products, and dispose of them when we are done. It is sometimes called "take, make, waste." The circular economy is a different plan. Instead of fixing the trash problem at the end, it tries to stop waste from being created in the first place.</p>

<h3>The Three Big Principles</h3>
<p>People who study the circular economy often describe it with three main ideas:</p>
<ol>
<li><strong>Design out waste and pollution.</strong> Plan products from the start so they do not create trash or harmful leftovers.</li>
<li><strong>Keep products and materials in use.</strong> Use things longer, share them, repair them, and finally recycle their materials.</li>
<li><strong>Regenerate nature.</strong> Return nutrients to the soil and protect the natural systems we depend on.</li>
</ol>

<h3>Two Kinds of Loops</h3>
<p>Circular thinkers split materials into two groups. Biological materials, like food, wood and cotton, can safely go back to nature through composting. Technical materials, like metals and most plastics, should not go into soil, so they need to stay in loops of reuse, repair and recycling.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Linear economy:</strong> a system where materials are taken, made into products and then thrown away</li>
<li><strong>Circular economy:</strong> a system designed so products and materials keep being used instead of wasted</li>
<li><strong>Biological cycle:</strong> the loop where natural materials safely return to the soil as nutrients</li>
<li><strong>Technical cycle:</strong> the loop where metals and plastics are kept in use through reuse and recycling</li>
<li><strong>Virgin material:</strong> brand new raw material taken from nature, such as freshly mined metal</li>
<li><strong>Durability:</strong> how long a product can last and keep working before it wears out</li>
</ul>

<h3>Comparing the Two Economies</h3>
<table>
<thead><tr><th>Question</th><th>Linear economy</th><th>Circular economy</th></tr></thead>
<tbody>
<tr><td>Where do materials come from?</td><td>Mostly new from nature</td><td>Mostly from old products</td></tr>
<tr><td>How long are products used?</td><td>Often a short time</td><td>As long as possible</td></tr>
<tr><td>What happens at the end?</td><td>Landfill or burning</td><td>Repair, reuse, recycling or compost</td></tr>
<tr><td>How is a product designed?</td><td>Cheap and quick to make</td><td>Easy to fix, take apart and recycle</td></tr>
</tbody>
</table>

<h3>Why Recycling Is Not Enough</h3>
<p>Recycling is helpful, but it is near the end of the circle. Recycling uses energy, and some materials lose quality each time. The tighter the loop, the better: sharing or repairing a bike keeps much more value than melting it down. That is why circular thinkers say "keep it whole first, recycle last."</p>
`,
        HIGH_SCHOOL: `
<h2>Circular Economy Frameworks and Business Models</h2>
<p>A circular economy is an economic system that aims to keep products, components and materials at their highest value for as long as possible, while rebuilding natural systems rather than depleting them. It is not just a waste strategy. It changes how companies design products, how they make money and how customers get what they need.</p>

<h3>The Value Retention Hierarchy</h3>
<p>Not all circular actions are equal. A product contains the materials it is made of plus the energy, labor and design that went into shaping it. The more of that embedded value we keep, the better. Strategies are often ranked like this, from most to least value kept:</p>
<ol>
<li><strong>Maintain and prolong:</strong> keep the product working with care and servicing.</li>
<li><strong>Reuse and redistribute:</strong> pass it to another user through resale or sharing.</li>
<li><strong>Refurbish and remanufacture:</strong> restore or rebuild it to like-new condition.</li>
<li><strong>Recycle:</strong> break it down to raw materials to make something new.</li>
<li><strong>Energy recovery and landfill:</strong> last resorts where the material is lost.</li>
</ol>
<p>The inner loops are smaller, cheaper and use less energy. Recycling is still valuable, but it destroys the product's shape and most of its embedded value.</p>

<h3>Circular Business Models</h3>
<table>
<thead><tr><th>Model</th><th>How it works</th><th>Example idea</th></tr></thead>
<tbody>
<tr><td>Product as a service</td><td>Customers pay for use, not ownership</td><td>Leasing lighting or tools</td></tr>
<tr><td>Sharing platforms</td><td>Many people use one product</td><td>Bike or car sharing</td></tr>
<tr><td>Product life extension</td><td>Repair, upgrade and spare parts</td><td>Phones with replaceable batteries</td></tr>
<tr><td>Resource recovery</td><td>Waste becomes a new input</td><td>Turning food waste into compost</td></tr>
<tr><td>Circular supplies</td><td>Using recycled or renewable inputs</td><td>Packaging made from recycled fiber</td></tr>
</tbody>
</table>

<h3>Design Principles</h3>
<p>Circular products are designed with their whole future in mind. Designers aim for durability, modularity (parts that can be swapped), standard fasteners instead of glue, fewer mixed materials and clear labeling so recyclers know what they are handling.</p>
<ul>
<li><strong>Embedded value:</strong> the materials, energy and labor already built into a finished product</li>
<li><strong>Remanufacturing:</strong> rebuilding a used product to original specifications with a warranty</li>
<li><strong>Modularity:</strong> designing products from parts that can be replaced or upgraded separately</li>
<li><strong>Product as a service:</strong> a model where customers pay for access to a product rather than owning it</li>
<li><strong>Downcycling:</strong> recycling a material into something of lower quality or value</li>
</ul>

<h3>Trade-offs and Challenges</h3>
<p>Circularity is not automatically green. Shipping used goods long distances, or keeping a very inefficient old appliance running, can sometimes create more impact than replacing it. Rebound effects also matter: if sharing makes something cheaper, people may use more of it. Good circular strategies are checked with evidence, not assumed.</p>
`,
        UNDERGRADUATE: `
<h2>Implementing the Circular Economy: Metrics and Policy</h2>
<p>The circular economy has moved from an aspirational concept to an organizing principle in industrial strategy and environmental policy. Translating it into practice requires answering three analytical questions: which loops actually reduce environmental impact, how circularity can be measured, and which policy instruments shift incentives for producers and consumers.</p>

<h3>Core Concepts</h3>
<p>Circular strategies are often grouped into three families: narrowing loops (using fewer resources per unit of service through efficiency), slowing loops (extending product life through durability, repair and reuse), and closing loops (returning materials to production through recycling and composting). A related framing is the "R-ladder," which ranks strategies from refuse and rethink at the top down to recycle and recover at the bottom.</p>
<ul>
<li><strong>Narrowing loops:</strong> reducing the resources needed per product or service through efficiency</li>
<li><strong>Slowing loops:</strong> extending how long products and materials stay in use</li>
<li><strong>Closing loops:</strong> returning post-use materials back into production through recycling</li>
<li><strong>R-ladder:</strong> a ranking of circular strategies from refuse and rethink down to recover</li>
<li><strong>Rebound effect:</strong> extra consumption triggered when efficiency or sharing lowers effective costs</li>
<li><strong>Secondary raw material:</strong> material recovered from waste that can replace newly extracted inputs</li>
</ul>

<h3>Measuring Circularity</h3>
<p>Measurement happens at several scales, and each indicator answers a different question:</p>
<table>
<thead><tr><th>Scale</th><th>Typical indicator</th><th>What it shows</th><th>Main limitation</th></tr></thead>
<tbody>
<tr><td>Product</td><td>Material circularity indicators</td><td>Share of recycled input, recyclability and lifetime</td><td>Ignores toxicity and energy</td></tr>
<tr><td>Company</td><td>Recycled content, take-back rates</td><td>Progress against internal targets</td><td>Self-reported, hard to compare</td></tr>
<tr><td>National</td><td>Circular material use rate</td><td>Recovered material as a share of total material use</td><td>Mass-based, blind to value</td></tr>
<tr><td>Global</td><td>Economy-wide material flow accounts</td><td>Extraction, stocks and waste</td><td>Coarse resolution</td></tr>
</tbody>
</table>
<p>A key insight is that mass-based recycling rates can be misleading. Heavy, low-value materials such as construction rubble can dominate totals, while small amounts of critical metals that matter far more for environmental impact barely register. Analysts therefore pair circularity metrics with life cycle assessment to confirm that a circular option actually reduces impacts.</p>

<h3>Policy Frameworks</h3>
<ol>
<li><strong>Extended producer responsibility:</strong> makes producers pay for end-of-life management, rewarding designs that are cheaper to recover.</li>
<li><strong>Ecodesign requirements:</strong> set minimum standards for durability, repairability and recycled content.</li>
<li><strong>Right-to-repair rules:</strong> require spare parts, manuals and tools to be available.</li>
<li><strong>Green public procurement:</strong> uses government purchasing power to favor circular products.</li>
<li><strong>Fiscal instruments:</strong> landfill taxes, virgin material levies or lower taxes on repair services.</li>
</ol>

<h3>An Applied Checklist</h3>
<p>When evaluating a proposed circular initiative, ask: Does it displace new production, or add to it? Which loop does it operate in, and could an inner loop work instead? What are the transport and processing impacts? Are there rebound effects? Who bears the costs, and who captures the value? Answering these questions separates genuine circularity from relabeled business as usual.</p>
`,
        GRADUATE: `
<h2>Systemic Circularity Across Sectors and Scales</h2>
<p>At the graduate level, the circular economy is best understood not as a set of product-level practices but as a systemic transition affecting value chains, urban infrastructure, labor markets and international trade. Evaluating circularity therefore requires attention to scale, sectoral differences, institutional arrangements and distributional outcomes.</p>

<h3>Sectoral Differences</h3>
<p>Circular strategies look very different across sectors because material properties, product lifetimes and market structures differ:</p>
<table>
<thead><tr><th>Sector</th><th>Dominant opportunity</th><th>Structural barrier</th></tr></thead>
<tbody>
<tr><td>Built environment</td><td>Design for disassembly, reuse of components</td><td>Long lifetimes, fragmented ownership</td></tr>
<tr><td>Electronics</td><td>Repair, refurbishment, critical metal recovery</td><td>Miniaturization, proprietary design</td></tr>
<tr><td>Food systems</td><td>Waste prevention, nutrient recovery</td><td>Perishability, dispersed actors</td></tr>
<tr><td>Textiles</td><td>Reuse, fiber-to-fiber recycling</td><td>Blended fibers, fast fashion volumes</td></tr>
<tr><td>Packaging</td><td>Reuse systems, material simplification</td><td>Low unit value, convenience norms</td></tr>
</tbody>
</table>

<h3>Scales of Intervention</h3>
<p>Circularity operates at micro (product and firm), meso (eco-industrial parks and supply networks) and macro (city, region and nation) levels. Meso-level arrangements such as industrial symbiosis, where by-products of one facility feed another, depend on proximity, trust and stable contracts. Macro-level transitions depend on infrastructure, regulation and markets for secondary materials. Interventions that succeed at one scale can fail at another if these conditions are missing.</p>
<ul>
<li><strong>Industrial symbiosis:</strong> networks where waste or by-products of one firm become inputs for another</li>
<li><strong>Secondary materials market:</strong> trade in recovered materials that compete with virgin inputs</li>
<li><strong>Lock-in:</strong> persistence of linear systems due to sunk infrastructure, habits and institutions</li>
<li><strong>Just transition:</strong> ensuring workers and communities share fairly in the benefits of change</li>
<li><strong>Policy mix:</strong> a coordinated combination of regulatory, economic and informational instruments</li>
</ul>

<h3>Economics and Governance</h3>
<p>Linear systems persist partly because virgin materials are priced without their environmental costs, while labor-intensive activities such as repair face relatively high labor taxes. Shifting taxation from labor to resources is a frequently discussed reform. Governance challenges include coordinating across ministries for environment, industry and trade, aligning standards across borders, and preventing circular claims from becoming greenwashing.</p>

<h3>Equity and Global Trade</h3>
<p>Circular economy policy in wealthy countries can shift burdens elsewhere. Exports of used goods and scrap can support repair economies abroad, but they can also move hazardous processing to places with weaker protections. Informal waste workers already perform much of the world's material recovery, often in unsafe conditions. Inclusive approaches recognize these workers, integrate them into formal systems and protect their livelihoods.</p>

<h3>An Evaluation Framework</h3>
<ol>
<li>Define the functional unit and system boundary, including imports and exports.</li>
<li>Identify which loop the intervention narrows, slows or closes.</li>
<li>Assess environmental outcomes with life cycle methods, not mass alone.</li>
<li>Examine economic viability, including secondary material price volatility.</li>
<li>Analyze distributional effects on workers, consumers and trading partners.</li>
<li>Check institutional fit: who must coordinate, and who has authority to act.</li>
</ol>
<p>Circularity is ultimately a means to reduce resource use and environmental harm, not an end in itself. Evaluations should judge it against those goals.</p>
`,
        PHD: `
<h2>Researching Circular Economy Transitions</h2>
<p>Circular economy research has grown rapidly into an interdisciplinary field spanning industrial ecology, operations research, economics, design and transition studies. Doctoral work in this space confronts conceptual ambiguity, measurement challenges and deep uncertainty about whether circular strategies actually decouple human well-being from material throughput at scale.</p>

<h3>Material Flow Analysis and Stock Dynamics</h3>
<p>Material flow analysis (MFA) traces the flows and stocks of materials through a defined system using mass balance. Dynamic MFA adds time, modeling inflows, lifetimes and outflows of in-use stocks such as buildings, vehicles and infrastructure. A central insight from this work is that in a growing economy, even perfect recycling cannot meet total demand, because materials are locked in long-lived stocks. Secondary supply can only cover demand once stocks approach saturation, which makes demand-side and lifetime strategies essential.</p>
<ul>
<li><strong>Material flow analysis:</strong> a mass-balance method that tracks flows and stocks of materials in a system</li>
<li><strong>In-use stock:</strong> materials currently embedded in products and infrastructure that are still in service</li>
<li><strong>Dynamic MFA:</strong> a time-dependent model linking inflows, product lifetimes and future outflows</li>
<li><strong>Material Circularity Indicator:</strong> a product-level metric combining recycled input, lifetime and recovery</li>
<li><strong>Absolute decoupling:</strong> economic activity growing while total resource use and impacts fall</li>
<li><strong>Entropy constraint:</strong> the thermodynamic limit that dispersed or mixed materials are costly to recover</li>
</ul>

<h3>Modeling Approaches</h3>
<table>
<thead><tr><th>Method</th><th>Strength</th><th>Weakness</th></tr></thead>
<tbody>
<tr><td>Dynamic MFA</td><td>Captures stock buildup and future scrap</td><td>Limited behavioral and economic detail</td></tr>
<tr><td>Consequential LCA</td><td>Estimates system-wide effects of decisions</td><td>Sensitive to assumed market responses</td></tr>
<tr><td>Environmentally extended input-output</td><td>Economy-wide, includes trade</td><td>Aggregated sectors hide product detail</td></tr>
<tr><td>Agent-based models</td><td>Represents heterogeneous actors and adoption</td><td>Hard to validate empirically</td></tr>
<tr><td>Computable general equilibrium</td><td>Captures price and rebound effects</td><td>Strong assumptions about markets</td></tr>
</tbody>
</table>

<h3>Contested Questions</h3>
<p>Several debates remain unresolved. First, does circularity deliver absolute decoupling, or does it mostly lower unit costs and trigger rebound? Second, how should displacement be modeled: does a recycled or refurbished product substitute for a new one, or simply add supply? Results swing widely depending on this assumption. Third, thermodynamic critiques argue that losses through dissipation, alloy mixing and quality degradation make full circularity physically impossible, so the concept must be framed as slowing rather than eliminating throughput.</p>

<h3>Transition Pathways</h3>
<p>Transition scholars study circularity using frameworks such as the multi-level perspective, which examines how niche innovations interact with established regimes and broader landscape pressures. Questions include how repair cultures, reuse systems and sharing platforms scale; how incumbent firms capture or resist circular niches; and how policy shapes the direction of change. Comparative case studies, historical analysis and mixed methods complement quantitative modeling here.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Integrating dynamic MFA with economic models to capture rebound and price feedbacks.</li>
<li>Developing value-based and impact-weighted circularity metrics beyond mass.</li>
<li>Empirically measuring displacement rates for reuse and refurbishment markets.</li>
<li>Studying the role of informal sectors and global trade in material recovery.</li>
<li>Linking circularity to sufficiency, exploring when using less matters more than looping more.</li>
</ol>
<p>Rigorous research in this field is careful to state system boundaries, displacement assumptions and uncertainty, because those choices often determine whether a circular strategy appears beneficial.</p>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'cirq1',
      question: {
        ELEMENTARY: 'In a circular economy, what happens to old things?',
        MIDDLE_SCHOOL: 'Which list shows the three main principles of a circular economy?',
        HIGH_SCHOOL: 'In the value retention hierarchy, which strategy keeps the most value?',
        UNDERGRADUATE: 'What does "slowing loops" mean in circular economy strategy?',
        GRADUATE: 'What is industrial symbiosis?',
        PHD: 'What does dynamic material flow analysis add to a basic mass balance?',
      },
      options: {
        ELEMENTARY: ['They get fixed, reused, recycled or composted', 'They all go into a landfill', 'They disappear by magic', 'They are sent into space'],
        MIDDLE_SCHOOL: ['Design out waste, keep materials in use, regenerate nature', 'Take, make, waste', 'Buy, use, throw away', 'Mine, manufacture, dump'],
        HIGH_SCHOOL: ['Maintaining and prolonging the product', 'Recycling the product', 'Burning it for energy', 'Sending it to landfill'],
        UNDERGRADUATE: ['Extending how long products and materials stay in use', 'Making factories run more slowly', 'Reducing recycling rates', 'Delaying new product launches'],
        GRADUATE: ['Networks where by-products of one firm become inputs for another', 'Firms competing for the same raw materials', 'Factories working entirely alone', 'Outsourcing production overseas'],
        PHD: ['Time, linking inflows, product lifetimes and future outflows of in-use stocks', 'Prices of every material', 'Consumer survey data', 'Only carbon emissions'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'In a circular economy, things are fixed, reused, recycled or composted instead of thrown away.',
        MIDDLE_SCHOOL: 'The three principles are designing out waste, keeping materials in use and regenerating nature.',
        HIGH_SCHOOL: 'Keeping a product working keeps all of its materials, energy and labor in use.',
        UNDERGRADUATE: 'Slowing loops means durability, repair and reuse so products last longer.',
        GRADUATE: 'Industrial symbiosis links facilities so one firm\'s waste becomes another firm\'s resource.',
        PHD: 'Dynamic MFA models stocks over time, showing when products will leave use and become scrap.',
      },
    },
    {
      id: 'cirq2',
      question: {
        ELEMENTARY: 'How does nature use a circle of stuff in a forest?',
        MIDDLE_SCHOOL: 'Which materials belong in the biological cycle?',
        HIGH_SCHOOL: 'What is remanufacturing?',
        UNDERGRADUATE: 'Why can mass-based recycling rates be misleading?',
        GRADUATE: 'Why do linear systems persist partly for economic reasons?',
        PHD: 'Why can recycling alone not meet total demand in a growing economy?',
      },
      options: {
        ELEMENTARY: ['Trees throw leaves in a trash can', 'Leaves sit forever and never change', 'Fallen leaves become soil that helps new trees grow', 'Animals carry leaves to a landfill'],
        MIDDLE_SCHOOL: ['Metals and most plastics', 'Glass and electronics', 'Food, wood and cotton', 'Batteries and phones'],
        HIGH_SCHOOL: ['Melting a product into raw material', 'Burning a product for energy', 'Rebuilding a used product to original specifications', 'Selling a product at a discount'],
        UNDERGRADUATE: ['They always overstate plastic recycling', 'They are measured in dollars', 'Heavy low-value materials dominate while critical metals barely register', 'They only count household waste'],
        GRADUATE: ['Virgin materials are always more expensive', 'Repair is untaxed everywhere', 'Virgin materials are priced without environmental costs and repair labor is costly', 'Recycled materials are banned'],
        PHD: ['Recycling plants are too slow', 'Recycled material is always toxic', 'Materials are locked in long-lived stocks until products reach end of life', 'Demand always falls over time'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Bugs, worms and tiny living things turn fallen leaves into soil that grows new trees.',
        MIDDLE_SCHOOL: 'Natural materials like food, wood and cotton can safely return to soil through composting.',
        HIGH_SCHOOL: 'Remanufacturing rebuilds a product to like-new specifications, often with a warranty.',
        UNDERGRADUATE: 'Mass totals are dominated by heavy materials like rubble, hiding high-impact metals.',
        GRADUATE: 'Unpriced environmental costs and high labor costs favor new products over repair.',
        PHD: 'While stocks grow, outflows of scrap are smaller than new demand, so virgin input is still needed.',
      },
    },
    {
      id: 'cirq3',
      question: {
        ELEMENTARY: 'What is a landfill?',
        MIDDLE_SCHOOL: 'Why is recycling not the best circular action?',
        HIGH_SCHOOL: 'What is a product-as-a-service business model?',
        UNDERGRADUATE: 'What is a rebound effect?',
        GRADUATE: 'What is a just transition in the circular economy?',
        PHD: 'What is the central debate about displacement in circularity research?',
      },
      options: {
        ELEMENTARY: ['A playground on a hill', 'A big hole where trash is buried and stays', 'A factory that makes toys', 'A garden for vegetables'],
        MIDDLE_SCHOOL: ['Recycling is illegal in most places', 'It uses energy and some materials lose quality', 'Recycling makes products last longer', 'Recycling is the same as repair'],
        HIGH_SCHOOL: ['Selling as many products as possible', 'Customers pay for use rather than ownership', 'Giving away free products', 'Only selling repair tools'],
        UNDERGRADUATE: ['Recycling a product twice', 'Extra consumption triggered when efficiency or sharing lowers costs', 'A product bouncing back from damage', 'Returning a product to the store'],
        GRADUATE: ['Moving factories to cheaper countries', 'Ensuring workers and communities share fairly in the benefits of change', 'Ending all international trade', 'Replacing workers with machines'],
        PHD: ['Whether recycled or reused products replace new ones or simply add supply', 'Whether metals can be recycled at all', 'Whether landfills should be built', 'Whether products need labels'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'A landfill is a big hole in the ground where trash is buried, and it stays there.',
        MIDDLE_SCHOOL: 'Recycling uses energy and can lower material quality, so repair and reuse come first.',
        HIGH_SCHOOL: 'In product as a service, customers pay for access, like leasing lighting or tools.',
        UNDERGRADUATE: 'When something gets cheaper to use, people may use more of it, cancelling some benefits.',
        GRADUATE: 'A just transition protects workers and communities, including informal waste workers.',
        PHD: 'Results change dramatically depending on whether secondary products truly displace new production.',
      },
    },
    {
      id: 'cirq4',
      question: {
        ELEMENTARY: 'Which is a way to keep something in the circle?',
        MIDDLE_SCHOOL: 'What is a virgin material?',
        HIGH_SCHOOL: 'What is downcycling?',
        UNDERGRADUATE: 'What does extended producer responsibility do?',
        GRADUATE: 'What is lock-in?',
        PHD: 'What do thermodynamic critiques of the circular economy argue?',
      },
      options: {
        ELEMENTARY: ['Throwing a toy away when it gets a scratch', 'Buying a new box every day', 'Using only one side of paper', 'Giving outgrown clothes to someone else'],
        MIDDLE_SCHOOL: ['A material that has been recycled many times', 'A material made from food scraps', 'A material that cannot be recycled', 'Brand new raw material taken from nature'],
        HIGH_SCHOOL: ['Riding a bike downhill', 'Repairing a product perfectly', 'Selling used goods online', 'Recycling a material into something of lower quality'],
        UNDERGRADUATE: ['It bans all packaging', 'It makes consumers pay for landfills', 'It lets producers ignore end-of-life costs', 'It makes producers pay for end-of-life management'],
        GRADUATE: ['A security system for recycling centers', 'A rule that locks prices', 'A contract between two factories', 'Persistence of linear systems due to infrastructure, habits and institutions'],
        PHD: ['Recycling creates new energy', 'Materials can be looped forever with no loss', 'Entropy only affects food waste', 'Dissipation and mixing make full circularity physically impossible'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Passing on clothes you have outgrown lets someone else use them, so they stay in the circle.',
        MIDDLE_SCHOOL: 'Virgin material is brand new, like freshly mined metal or newly cut wood.',
        HIGH_SCHOOL: 'Downcycling turns a material into a lower-value product, such as mixed plastic into park benches.',
        UNDERGRADUATE: 'EPR shifts end-of-life costs to producers, rewarding designs that are cheaper to recover.',
        GRADUATE: 'Lock-in describes how sunk investments and routines keep linear systems in place.',
        PHD: 'Losses from dissipation, alloy mixing and degradation mean circularity can slow but not end throughput.',
      },
    },
    {
      id: 'cirq5',
      question: {
        ELEMENTARY: 'What does composting do?',
        MIDDLE_SCHOOL: 'Which loop is better for a bike: repair or melting it down?',
        HIGH_SCHOOL: 'Why is circularity not automatically green?',
        UNDERGRADUATE: 'Why do analysts pair circularity metrics with life cycle assessment?',
        GRADUATE: 'Why can circular economy policy in wealthy countries shift burdens elsewhere?',
        PHD: 'What does the multi-level perspective help researchers study?',
      },
      options: {
        ELEMENTARY: ['Turns plastic into toys', 'Makes trash disappear in the air', 'Turns food scraps and leaves into rich soil', 'Puts trash into a landfill'],
        MIDDLE_SCHOOL: ['Melting it, because metal is valuable', 'Neither, it should go to landfill', 'Repairing it, because it keeps more value', 'Burning it for energy'],
        HIGH_SCHOOL: ['Circular products are always more expensive', 'Recycling is always bad', 'Long shipping or inefficient old products can create more impact', 'Circularity only works for food'],
        UNDERGRADUATE: ['LCA is required by law for every product', 'LCA only measures cost', 'To confirm that a circular option actually reduces impacts', 'To calculate the weight of products'],
        GRADUATE: ['Wealthy countries stop all trade', 'Used goods never leave the country', 'Exports of scrap can move hazardous processing to places with weaker protections', 'Recycling is cheaper abroad'],
        PHD: ['How molecules break down in compost', 'How landfills store methane', 'How niche innovations interact with established regimes and landscape pressures', 'How to price recycled metals'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Composting lets food scraps and leaves turn into soil that helps plants grow.',
        MIDDLE_SCHOOL: 'Repairing keeps the whole bike working, which saves much more value and energy than melting it.',
        HIGH_SCHOOL: 'Transport, rebound and inefficiency can cancel benefits, so circular ideas need evidence.',
        UNDERGRADUATE: 'Circularity metrics alone can miss energy and toxicity, so LCA checks the real impact.',
        GRADUATE: 'Trade in used goods and scrap can export pollution and unsafe work to other countries.',
        PHD: 'The multi-level perspective explains how niches like repair cultures challenge linear regimes.',
      },
    },
  ],
}

export default expansion
