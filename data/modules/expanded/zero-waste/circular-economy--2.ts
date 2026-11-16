import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'zero-waste',
  moduleKey: 'circular-economy~2',
  lessons: [
    {
      id: 'zw-circ-1',
      title: 'Round and Round: Keeping Things in Use',
      content: {
        ELEMENTARY: `
<h2>Round and Round We Go!</h2>
<p>Imagine a toy car that zooms around a round track. It never falls off the end, because a circle has no end! Some people think our things should work the same way. Instead of using something once and throwing it away, we can keep it going round and round. This idea is called a <em>circular economy</em>.</p>

<h3>The Line and the Circle</h3>
<p>A lot of stuff today travels in a straight line. We take something from nature, make a thing, use it for a short time, and then it goes in the trash. At the end of the line is a big pile of garbage.</p>
<p>In a circle, the story keeps going. When we are done with something, it gets fixed, passed on, or turned into something new. Nothing has to fall off the end.</p>
<ul>
<li><strong>Reuse:</strong> using something again, like refilling the same water bottle every day</li>
<li><strong>Repair:</strong> fixing something that is broken so it can work again</li>
<li><strong>Share:</strong> letting other people use your things so fewer new things are needed</li>
<li><strong>Recycle:</strong> breaking down old things so their materials can make brand new things</li>
<li><strong>Circle:</strong> a shape with no end, which is why it is a good picture for keeping things in use</li>
</ul>

<h3>Ways to Keep Things Going</h3>
<p>Your family might already be part of the circle without knowing it! Here are some things people do every day:</p>
<ol>
<li>Hand-me-down clothes go from an older child to a younger one.</li>
<li>A library lets many people read the same book.</li>
<li>A bike shop fixes a flat tire instead of buying a new bike.</li>
<li>Glass jars get washed and used to store buttons, crayons or snacks.</li>
<li>Old paper goes in the recycling bin and comes back as new paper.</li>
</ol>

<h3>Which Way Is Best?</h3>
<p>Keeping the whole thing is usually better than breaking it apart. Using a toy again is easier than recycling it, because the toy is already made! So the best order is: use it longer, fix it, share it, and recycle it last.</p>

<h3>Your Circle Challenge</h3>
<p>Can you find three things in your home that could go around the circle again? Maybe a box that can become a dollhouse, a shirt that a cousin could wear, or a broken crayon that can still draw. Every time you keep something going, you help keep our planet clean and happy!</p>
`,
        MIDDLE_SCHOOL: `
<h2>Discovering the Circular Economy</h2>
<p>An <em>economy</em> is the way people make, buy, sell and use things. Most of today's economy works like a one-way street: take materials from the Earth, make products, and throw them away. A <em>circular economy</em> tries to turn that one-way street into a loop, so materials keep being used and very little becomes waste.</p>

<h3>From Linear to Circular</h3>
<p>The one-way model is often called the <em>linear economy</em>, or "take, make, waste." It has helped make products cheap, but it uses up resources quickly and creates mountains of trash and pollution. A circular economy is built around three big ideas:</p>
<ol>
<li><strong>Design out waste and pollution</strong> so garbage is avoided from the start.</li>
<li><strong>Keep products and materials in use</strong> for as long as possible at their highest value.</li>
<li><strong>Regenerate nature</strong> by returning safe, natural materials to the soil and protecting ecosystems.</li>
</ol>

<h3>Key Words</h3>
<ul>
<li><strong>Linear economy:</strong> a system where things are made, used once or briefly, and then thrown away</li>
<li><strong>Circular economy:</strong> a system designed so products and materials keep being used instead of wasted</li>
<li><strong>Raw materials:</strong> natural resources like trees, metals and oil that are used to make products</li>
<li><strong>Refurbish:</strong> cleaning and repairing a used product so it works like new and can be sold again</li>
<li><strong>Biological cycle:</strong> the loop where natural materials like food scraps break down and feed the soil</li>
<li><strong>Technical cycle:</strong> the loop where materials like metals and plastics are reused, repaired and recycled</li>
</ul>

<h3>Inner Loops Are Better</h3>
<p>Not every loop is equal. The smaller the loop, the more value we keep. Fixing a phone keeps almost all the energy and materials that went into making it. Recycling the phone only saves some of the metals, and it takes energy to melt and separate them.</p>
<table>
<thead><tr><th>Loop</th><th>Example</th><th>How much value is kept</th></tr></thead>
<tbody>
<tr><td>Keep using it</td><td>Taking care of your shoes so they last</td><td>The most</td></tr>
<tr><td>Reuse or share</td><td>Selling a bike you outgrew</td><td>Very high</td></tr>
<tr><td>Repair or refurbish</td><td>Replacing a cracked phone screen</td><td>High</td></tr>
<tr><td>Recycle</td><td>Melting cans into new metal</td><td>Some</td></tr>
<tr><td>Throw away</td><td>Sending it to a landfill</td><td>Almost none</td></tr>
</tbody>
</table>

<h3>Nature Is the Original Circle</h3>
<p>In a forest, there is no garbage. Fallen leaves become food for insects and fungi, which make soil, which grows new trees. The circular economy borrows this idea: one thing's "waste" becomes another thing's food or raw material.</p>

<h3>What You Can Do</h3>
<p>Buy used items when you can, fix things before replacing them, borrow tools or games instead of buying them, and compost food scraps. These choices are small loops that add up to a big circle.</p>
`,
        HIGH_SCHOOL: `
<h2>Circular Business Models and System Change</h2>
<p>A circular economy is not just about recycling bins. It asks companies, governments and citizens to rethink how value is created. If a business earns money only by selling more new products, it has little reason to make them last. Circular business models change that logic so that keeping products in use becomes profitable.</p>

<h3>Five Circular Business Models</h3>
<ul>
<li><strong>Product-as-a-service:</strong> customers pay for the use or performance of a product, such as lighting or laundry, while the company keeps ownership</li>
<li><strong>Product life extension:</strong> businesses earn money from repair, upgrades, maintenance and spare parts</li>
<li><strong>Sharing platforms:</strong> services that let many people use the same car, tool or space, raising how often each item is used</li>
<li><strong>Resource recovery:</strong> collecting used products or by-products and turning them into new raw materials</li>
<li><strong>Circular supplies:</strong> using renewable, recycled or easily recyclable inputs instead of virgin materials</li>
</ul>

<h3>Why Product-as-a-Service Changes Incentives</h3>
<p>When a company sells a washing machine, it profits more if you buy a new one soon. When it rents you washing as a service, every breakdown costs the company money. Suddenly durable parts, easy repair and efficient energy use are in the company's own interest. Examples already exist for things like office carpets, lighting, car sharing, tools and some industrial equipment.</p>

<h3>Design Strategies Behind the Models</h3>
<table>
<thead><tr><th>Strategy</th><th>What it means</th><th>Business model it supports</th></tr></thead>
<tbody>
<tr><td>Durability</td><td>Using strong materials and robust construction</td><td>Product-as-a-service, sharing</td></tr>
<tr><td>Modularity</td><td>Building products from swappable parts</td><td>Repair and upgrade services</td></tr>
<tr><td>Design for disassembly</td><td>Using screws and clips rather than glue</td><td>Refurbishment and recycling</td></tr>
<tr><td>Material simplicity</td><td>Fewer, unmixed and non-toxic materials</td><td>Resource recovery</td></tr>
</tbody>
</table>

<h3>Barriers and Trade-offs</h3>
<p>Circular models face real obstacles. New products are often cheaper than repairs because labor costs more than materials. Collecting used products back from customers (called <em>reverse logistics</em>) is expensive. Some consumers prefer to own things. And sharing or renting can sometimes increase transport emissions if items are delivered back and forth. Circular does not automatically mean better; each case must be checked.</p>

<h3>System Change: Beyond One Company</h3>
<p>Because products move through many hands, no single business can close a loop alone. Designers, manufacturers, retailers, repairers, recyclers and governments all play a part. Policies that can help include repair rights, deposit-return schemes, rules that require companies to take back their products, and taxes that make landfilling more expensive.</p>

<h3>Where You Fit In</h3>
<ol>
<li>Choose rental, sharing or secondhand options for things you use rarely.</li>
<li>Look for products with warranties, spare parts and repair guides.</li>
<li>Support local repair cafes or learn basic repair skills.</li>
<li>Ask businesses whether they take back products at end of life.</li>
</ol>
`,
        UNDERGRADUATE: `
<h2>Implementing the Circular Economy: Frameworks, Metrics and Practice</h2>
<p>Turning the circular economy from a vision into practice requires frameworks that say which strategies to prioritize, metrics that show whether a system is actually becoming more circular, and implementation methods that firms and cities can follow. This lesson takes an implementation-focused view, examining how organizations move from pilots to measurable change.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>R-ladder:</strong> a ranked list of circular strategies, from refuse and rethink at the top to recycle and recover at the bottom</li>
<li><strong>Value retention:</strong> the share of a product's economic and embodied value preserved when it re-enters use</li>
<li><strong>Utilization rate:</strong> the fraction of time a product is actually in use, which sharing models aim to raise</li>
<li><strong>Closed-loop recycling:</strong> recycling a material back into the same kind of product without major quality loss</li>
<li><strong>Downcycling:</strong> recycling into a lower-quality application, such as mixed plastic into park benches</li>
<li><strong>Material circularity indicator:</strong> a product-level score combining recycled input, lifetime, use intensity and recovery at end of life</li>
</ul>

<h3>The R-Ladder as a Decision Tool</h3>
<p>Many frameworks rank strategies by how much value they keep. A common version runs: refuse, rethink, reduce, reuse, repair, refurbish, remanufacture, repurpose, recycle and recover. Higher rungs generally preserve more embodied energy and materials. A practical implication is that organizations focused only on recycling rates may miss larger gains available through product design, longer use and sharing.</p>

<h3>Quantitative Reasoning: Why Lifetime Matters</h3>
<p>Consider a product whose environmental impact comes mostly from manufacturing. If its lifetime doubles, the manufacturing impact per year of service roughly halves. For products whose impact comes mostly from energy use during operation, such as some older appliances, the logic differs: keeping a very inefficient device running may cost more than replacing it with an efficient one. Circular decisions therefore depend on where impacts sit in the life cycle.</p>
<table>
<thead><tr><th>Product type</th><th>Where most impact sits</th><th>Best circular lever</th></tr></thead>
<tbody>
<tr><td>Smartphones, laptops, furniture</td><td>Manufacturing and materials</td><td>Extend lifetime, repair, reuse</td></tr>
<tr><td>Clothing</td><td>Fiber production and processing</td><td>Wear longer, resale, rental</td></tr>
<tr><td>Older refrigerators, boilers</td><td>Energy during use</td><td>Efficient replacement plus recycling</td></tr>
<tr><td>Packaging</td><td>Material production and disposal</td><td>Reduce, refill, reusable systems</td></tr>
</tbody>
</table>

<h3>Measuring Progress</h3>
<p>Circularity metrics operate at several levels. At the product level, indicators combine recycled content, lifetime and recovery. At the company level, firms track revenue from circular models or tonnes of material taken back. At the national level, statistics compare the share of material inputs that come from secondary (recycled) sources. A known limitation is that high recycling percentages can coexist with rising total consumption, so circularity rates should be read alongside absolute material use.</p>

<h3>An Implementation Checklist</h3>
<ol>
<li>Map material flows and identify the products or streams with the largest impact.</li>
<li>Locate the life-cycle stage where impact concentrates.</li>
<li>Select strategies from the highest feasible rung of the R-ladder.</li>
<li>Design the business model, reverse logistics and partners needed to close the loop.</li>
<li>Pilot, measure with both relative and absolute indicators, and check for rebound.</li>
<li>Scale through procurement, standards and policy support.</li>
</ol>
`,
        GRADUATE: `
<h2>Circular Economy Policy, Investment and Transformation</h2>
<p>At the graduate level, the circular economy is a question of economic transformation: how to redirect capital, regulation and institutions so that keeping materials in productive use becomes the default rather than the exception. This lesson examines policy packages, investment and finance barriers, corporate strategy and the governance of transition.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Policy mix:</strong> a coordinated set of regulations, economic instruments and information tools that together shift market behavior</li>
<li><strong>Extended producer responsibility:</strong> making producers financially or physically responsible for products after consumer use</li>
<li><strong>Green public procurement:</strong> using government purchasing power to prefer durable, repairable or recycled products</li>
<li><strong>Externality pricing:</strong> charging for environmental damage, such as through landfill or virgin material taxes, so prices reflect true costs</li>
<li><strong>Residual value risk:</strong> the uncertainty about what a returned product will be worth, which affects financing of service models</li>
<li><strong>Lock-in:</strong> the tendency of existing infrastructure, contracts and habits to keep a linear system in place</li>
</ul>

<h3>Policy Packages</h3>
<p>Several governments, including the European Union through its Circular Economy Action Plan, have moved from waste-focused regulation toward product-focused policy. The general direction includes ecodesign requirements covering durability and repairability, rights to repair, digital product information, targets for reuse and recycled content, and restrictions on destroying unsold goods. The key shift is upstream: rather than managing waste after it exists, policy increasingly shapes how products are designed and sold.</p>
<table>
<thead><tr><th>Instrument</th><th>Mechanism</th><th>Typical limitation</th></tr></thead>
<tbody>
<tr><td>Ecodesign standards</td><td>Set minimum durability, repairability or recycled content</td><td>Slow to develop product by product</td></tr>
<tr><td>Landfill and incineration taxes</td><td>Make disposal more expensive than recovery</td><td>Can shift waste to exports or illegal dumping</td></tr>
<tr><td>Extended producer responsibility</td><td>Producers fund collection and treatment</td><td>Fees often too low to drive design change</td></tr>
<tr><td>Public procurement criteria</td><td>Creates stable demand for circular products</td><td>Capacity and training gaps among buyers</td></tr>
<tr><td>Tax shifts from labor to resources</td><td>Makes repair labor cheaper relative to materials</td><td>Politically difficult, distributional concerns</td></tr>
</tbody>
</table>

<h3>Investment and Finance</h3>
<p>Circular business models change cash flows. Instead of receiving full payment at sale, a product-as-a-service company receives payments over years while carrying the asset on its balance sheet. This raises working capital needs and exposes firms to residual value risk. Lenders unfamiliar with secondary markets may undervalue returned products. Instruments that can help include asset-backed financing, standardized product data that make residual values more predictable, and blended public-private funds for early infrastructure such as sorting and remanufacturing facilities.</p>

<h3>Corporate Transformation</h3>
<p>Firms often begin with pilots that remain small because they compete with the core linear business for resources. Scaling usually requires changes to incentives, accounting, supplier contracts and sales targets. Evaluating corporate commitments therefore means asking whether circular revenue is growing as a share of the business and whether absolute virgin material use is falling, not only whether pilot projects exist.</p>

<h3>Equity and Global Dimensions</h3>
<p>Circular transitions redistribute work and value. Repair and remanufacturing can create local jobs, but much informal collection and recycling in lower-income countries is done by waste pickers who may be displaced by formal systems unless they are included. Trade in used goods and secondary materials can extend product life or can export waste burdens. Just transition principles ask who gains, who loses and who has a voice.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Define the target: absolute material and impact reduction, not just higher recycling rates.</li>
<li>Assess the policy mix for gaps across design, use and end of life.</li>
<li>Check financing conditions for circular business models and infrastructure.</li>
<li>Identify lock-ins and the actors who benefit from the status quo.</li>
<li>Examine distributional effects on workers, consumers and trading partners.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: Circular Transitions, Rebound and Systemic Change</h2>
<p>Circular economy research has grown rapidly, but its central claim, that circular strategies can decouple economic activity from resource use and environmental harm, remains empirically contested. Advanced research focuses on whether circular interventions actually reduce absolute impacts once market responses are considered, how transitions unfold over time, and what conceptual foundations the field should rest on.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Circular economy rebound:</strong> the effect when circular activities increase total production or consumption, partially or fully offsetting their intended benefits</li>
<li><strong>Substitution rate:</strong> the degree to which a secondhand or recycled product actually displaces production of a new one</li>
<li><strong>Absolute decoupling:</strong> a fall in total resource use or impact while economic output continues to grow</li>
<li><strong>In-use stocks:</strong> the materials accumulated in buildings, infrastructure and durable goods that determine future secondary supply</li>
<li><strong>Multi-level perspective:</strong> a transitions framework describing change through interactions among niches, regimes and broader landscape pressures</li>
<li><strong>Sufficiency:</strong> strategies that reduce demand for products or services themselves rather than making supply more circular</li>
</ul>

<h3>The Rebound Problem</h3>
<p>Circular rebound arises through several channels. If recycled materials are cheaper, they can lower prices and increase overall consumption. If secondhand goods are imperfect substitutes, buyers may purchase them in addition to, rather than instead of, new items. Money saved by consumers through reuse may be spent on other goods with their own impacts. Empirical estimates of substitution rates vary widely across products and contexts, and assuming one-to-one displacement can greatly overstate benefits. This places consequential modeling and market analysis at the center of credible circularity assessment.</p>

<h3>Modeling Approaches</h3>
<table>
<thead><tr><th>Method</th><th>What it captures</th><th>Main limitation</th></tr></thead>
<tbody>
<tr><td>Dynamic material flow analysis</td><td>Stocks, flows and future secondary supply</td><td>Little behavioral or economic feedback</td></tr>
<tr><td>Consequential life cycle assessment</td><td>Marginal effects of decisions, including displacement</td><td>Sensitive to assumptions about markets</td></tr>
<tr><td>Environmentally extended input-output models</td><td>Economy-wide supply chain effects</td><td>Coarse sector resolution</td></tr>
<tr><td>Computable general equilibrium models</td><td>Price effects, rebound and macroeconomic impacts</td><td>Strong assumptions about rational markets</td></tr>
<tr><td>Agent-based models</td><td>Heterogeneous consumer and firm behavior</td><td>Hard to calibrate and validate</td></tr>
</tbody>
</table>

<h3>Physical Limits</h3>
<p>Thermodynamics constrains circularity: materials degrade, dissipate and mix, and recovery requires energy. Growing in-use stocks mean that, for expanding economies, secondary materials cannot meet all demand even with perfect recycling, because materials remain locked in long-lived products. These limits suggest that circular strategies must be combined with demand reduction to achieve absolute decoupling.</p>

<h3>Contested Questions</h3>
<ul>
<li>Whether circular economy discourse is compatible with continued economic growth, or implicitly requires sufficiency and post-growth thinking.</li>
<li>Whether firm-led circularity, focused on profitable loops, neglects lower-value but environmentally important strategies.</li>
<li>How to weigh local job creation against efficiency gains from centralized recovery.</li>
<li>Whether circularity indicators reward recycling over higher-value strategies such as reduction and longevity.</li>
</ul>

<h3>Transitions and Systemic Change</h3>
<p>Socio-technical transition theory frames circularity as the replacement of an entrenched linear regime. Niches such as repair cafes, remanufacturers and sharing platforms experiment with alternatives, but scaling depends on regime destabilization through policy, price shifts and cultural change. Research examines how incumbents co-opt or resist circular niches, how institutions such as standards and accounting rules enable or block change, and how everyday practices evolve.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Empirical estimation of substitution and rebound across product categories and regions.</li>
<li>Integrated models linking material stocks, prices, behavior and environmental impacts.</li>
<li>Metrics that reward higher-value strategies and absolute reductions rather than recycling rates.</li>
<li>Comparative studies of policy mixes and their effects on design and business models.</li>
<li>Analysis of justice, informal labor and global trade in circular transitions.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'zwcirc2q1',
      question: {
        ELEMENTARY: 'Why is a circle a good picture for how we should use things?',
        MIDDLE_SCHOOL: 'What are the three big ideas of a circular economy?',
        HIGH_SCHOOL: 'What is product-as-a-service?',
        UNDERGRADUATE: 'What does the R-ladder rank?',
        GRADUATE: 'What is residual value risk in circular business models?',
        PHD: 'What is a circular economy rebound effect?',
      },
      options: {
        ELEMENTARY: ['A circle has no end, so things keep being used', 'A circle is the only shape for toys', 'Circles make things go faster', 'Circles turn things into trash'],
        MIDDLE_SCHOOL: ['Design out waste, keep things in use, regenerate nature', 'Take, make, waste', 'Buy, use, throw away', 'Dig, burn, bury'],
        HIGH_SCHOOL: ['Paying for the use of a product while the company keeps ownership', 'Buying a product and throwing it away', 'A service station for cars', 'A store that sells only products'],
        UNDERGRADUATE: ['Circular strategies, ordered by how much value they keep', 'Products by price', 'Recycling plants by size', 'Countries by population'],
        GRADUATE: ['Uncertainty about what a returned product will be worth', 'The risk that products are too cheap', 'The chance that customers never pay', 'The danger of fires in warehouses'],
        PHD: ['When circular activities raise total consumption and offset benefits', 'When recycled material bounces back from a machine', 'When products always last forever', 'When circularity has only positive effects'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'A circle has no end, so things go around again by being reused, fixed, shared or recycled instead of thrown away.',
        MIDDLE_SCHOOL: 'The circular economy aims to design out waste, keep products and materials in use, and regenerate nature.',
        HIGH_SCHOOL: 'In product-as-a-service, customers pay for use or performance, so the company profits from durable, repairable products.',
        UNDERGRADUATE: 'The R-ladder ranks strategies from refuse and rethink down to recycle and recover by how much value they preserve.',
        GRADUATE: 'Service models keep products on the balance sheet, so uncertainty about returned products\' value affects financing.',
        PHD: 'Rebound occurs through price effects, imperfect substitution and re-spending, partially or fully offsetting circular gains.',
      },
    },
    {
      id: 'zwcirc2q2',
      question: {
        ELEMENTARY: 'Which is usually the best way to keep a toy in the circle?',
        MIDDLE_SCHOOL: 'Which loop keeps the most value from a product?',
        HIGH_SCHOOL: 'Why does product-as-a-service encourage durable products?',
        UNDERGRADUATE: 'Doubling the lifetime of a product whose impact is mostly from manufacturing does what?',
        GRADUATE: 'What is the main shift in recent circular economy policy packages?',
        PHD: 'What is a substitution rate?',
      },
      options: {
        ELEMENTARY: ['Throw it away', 'Keep playing with it or share it', 'Bury it in the yard', 'Break it on purpose'],
        MIDDLE_SCHOOL: ['Sending it to a landfill', 'Keeping it in use and caring for it', 'Burning it', 'Melting it down'],
        HIGH_SCHOOL: ['Every breakdown costs the company money', 'Customers pay more when products break', 'Companies never repair anything', 'Products are thrown away faster'],
        UNDERGRADUATE: ['Doubles the manufacturing impact per year', 'Roughly halves the manufacturing impact per year of service', 'Has no effect at all', 'Makes recycling impossible'],
        GRADUATE: ['Moving upstream to shape product design, not just manage waste', 'Banning all recycling', 'Focusing only on landfills', 'Removing all product rules'],
        PHD: ['How fast a product is shipped', 'The share of new products made of plastic', 'How much a reused or recycled product actually displaces new production', 'The speed of a recycling machine'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Using something longer or sharing it keeps the whole toy, which is better than recycling or throwing it away.',
        MIDDLE_SCHOOL: 'The innermost loop, keeping a product in use, saves almost all the energy and materials that went into it.',
        HIGH_SCHOOL: 'Since the company owns the product, breakdowns cost it money, so durability and easy repair pay off.',
        UNDERGRADUATE: 'Spreading the same manufacturing impact over twice as many years roughly halves the impact per year of service.',
        GRADUATE: 'Policy increasingly sets ecodesign, repairability and recycled content rules instead of only managing waste.',
        PHD: 'Substitution rates show whether secondhand or recycled goods truly replace new production or add to consumption.',
      },
    },
    {
      id: 'zwcirc2q3',
      question: {
        ELEMENTARY: 'What does it mean to repair something?',
        MIDDLE_SCHOOL: 'What is refurbishing?',
        HIGH_SCHOOL: 'What is reverse logistics?',
        UNDERGRADUATE: 'What is downcycling?',
        GRADUATE: 'Why can extended producer responsibility fail to change product design?',
        PHD: 'Why can secondary materials not meet all demand in a growing economy even with perfect recycling?',
      },
      options: {
        ELEMENTARY: ['Painting it a new color', 'Throwing it away', 'Fixing it so it works again', 'Hiding it in a closet'],
        MIDDLE_SCHOOL: ['Burning a product for energy', 'Burying a product', 'Cleaning and repairing a used product so it works like new', 'Buying a brand new product'],
        HIGH_SCHOOL: ['Driving trucks backwards', 'Shipping new products to stores', 'Collecting used products back from customers', 'Advertising products online'],
        UNDERGRADUATE: ['Recycling a material into the same product', 'Repairing a product', 'Recycling into a lower-quality application', 'Sharing a product with neighbors'],
        GRADUATE: ['Producers are not allowed to pay fees', 'It only covers food', 'Fees are often too low to drive design change', 'It bans all products'],
        PHD: ['Recycling machines are too slow', 'Recycled materials are always toxic', 'Materials stay locked in long-lived products as in-use stocks grow', 'Nobody wants recycled materials'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Repairing means fixing something that is broken so you can keep using it.',
        MIDDLE_SCHOOL: 'Refurbishing cleans and repairs a used product so it works like new and can be sold again.',
        HIGH_SCHOOL: 'Reverse logistics moves used products back from customers for reuse, repair or recycling, which can be costly.',
        UNDERGRADUATE: 'Downcycling turns materials into lower-quality uses, such as mixed plastic into benches.',
        GRADUATE: 'When producer fees are low, they cover collection costs but give little incentive to redesign products.',
        PHD: 'Growing in-use stocks hold materials for decades, so secondary supply lags behind current demand.',
      },
    },
    {
      id: 'zwcirc2q4',
      question: {
        ELEMENTARY: 'Which of these is an example of sharing?',
        MIDDLE_SCHOOL: 'What happens in the biological cycle?',
        HIGH_SCHOOL: 'Which is a real barrier to circular business models?',
        UNDERGRADUATE: 'For an old, very inefficient refrigerator, what is often the best circular lever?',
        GRADUATE: 'What does green public procurement do?',
        PHD: 'What is sufficiency in circular economy debates?',
      },
      options: {
        ELEMENTARY: ['Hiding your toys', 'Throwing away a book', 'Buying a new bike every week', 'Borrowing books from a library'],
        MIDDLE_SCHOOL: ['Metals are melted in a furnace', 'Plastic is sent to the ocean', 'Glass is buried forever', 'Natural materials like food scraps break down and feed the soil'],
        HIGH_SCHOOL: ['Repairs are always free', 'Everyone prefers renting', 'Collecting products is always cheap', 'New products are often cheaper than repairs'],
        UNDERGRADUATE: ['Keep it running as long as possible', 'Paint it a new color', 'Store it in a garage', 'Replace it with an efficient model and recycle the old one'],
        GRADUATE: ['Bans governments from buying anything', 'Requires all products to be imported', 'Removes product standards', 'Uses government purchasing to prefer durable, repairable or recycled products'],
        PHD: ['Making recycling more efficient', 'Increasing production of recycled goods', 'Using only renewable energy', 'Reducing demand for products or services themselves'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'A library lets many people read the same book, so fewer new books are needed.',
        MIDDLE_SCHOOL: 'In the biological cycle, natural materials decompose and return nutrients to the soil.',
        HIGH_SCHOOL: 'Labor costs often make repair more expensive than buying new, which works against circular models.',
        UNDERGRADUATE: 'When most impact comes from energy during use, efficient replacement plus recycling can beat life extension.',
        GRADUATE: 'Public buyers spend large sums, so their criteria create stable demand for circular products.',
        PHD: 'Sufficiency reduces demand itself, which many argue is needed alongside circular supply to achieve absolute decoupling.',
      },
    },
    {
      id: 'zwcirc2q5',
      question: {
        ELEMENTARY: 'Where does stuff end up in a straight-line economy?',
        MIDDLE_SCHOOL: 'What is the linear economy often called?',
        HIGH_SCHOOL: 'Why can no single company close a loop on its own?',
        UNDERGRADUATE: 'Why should circularity rates be read alongside absolute material use?',
        GRADUATE: 'What is lock-in?',
        PHD: 'In the multi-level perspective, where do experiments like repair cafes usually begin?',
      },
      options: {
        ELEMENTARY: ['In the trash', 'Back in the store', 'In a new toy', 'In the garden as soil'],
        MIDDLE_SCHOOL: ['Take, make, waste', 'Reduce, reuse, recycle', 'Share, fix, compost', 'Grow, harvest, rest'],
        HIGH_SCHOOL: ['Products move through many hands, from designers to recyclers', 'Companies are not allowed to recycle', 'Loops close by themselves', 'Customers never return anything'],
        UNDERGRADUATE: ['High recycling rates can coexist with rising total consumption', 'Absolute use is always zero', 'Circularity rates are illegal to publish', 'Material use never changes'],
        GRADUATE: ['Infrastructure, contracts and habits that keep a linear system in place', 'A tool for locking recycling bins', 'A type of recycled material', 'A law that bans repair'],
        PHD: ['In niches where alternatives are tested', 'In the landscape of global trends', 'Only inside large incumbent firms', 'In international treaties'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'In a straight line, we take, make, use and then throw things away, so they end up as trash.',
        MIDDLE_SCHOOL: 'The linear economy is often summarized as take, make, waste.',
        HIGH_SCHOOL: 'Designers, makers, retailers, repairers, recyclers and governments all need to work together to close loops.',
        UNDERGRADUATE: 'A system can recycle a higher share while still using more materials overall, so both views are needed.',
        GRADUATE: 'Lock-in describes how existing systems and interests make linear practices hard to change.',
        PHD: 'Niches are protected spaces where alternatives develop before they can challenge the dominant regime.',
      },
    },
  ],
}

export default expansion
