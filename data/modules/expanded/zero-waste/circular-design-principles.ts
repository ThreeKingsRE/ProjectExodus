import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'zero-waste',
  moduleKey: 'circular-design-principles',
  lessons: [
    {
      id: 'zw-circ-1',
      title: 'Design for Zero Waste',
      content: {
        ELEMENTARY: `
<h2>Designing Things That Never Become Trash</h2>
<p>Have you ever built something with blocks? When you are finished, you can take the blocks apart and build something new. Nothing gets thrown away! Some grown-ups called <em>designers</em> are trying to make all kinds of things work like blocks. This is called <em>circular design</em>.</p>

<h3>What Does a Designer Do?</h3>
<p>A designer is a person who decides how a thing will look, what it will be made of and how it will work. Designers make chairs, shoes, toys, phones and even cereal boxes. The choices they make at the very beginning decide whether a thing will last a long time or end up in the trash quickly.</p>

<h3>Super Design Powers</h3>
<ul>
<li><strong>Strong:</strong> made tough so it lasts a long, long time without breaking</li>
<li><strong>Fixable:</strong> easy to repair when a part breaks, so you do not need a new one</li>
<li><strong>Snap-apart:</strong> held together with screws or clips instead of glue, so it can come apart</li>
<li><strong>Simple materials:</strong> made of just one or two materials, which makes recycling much easier</li>
<li><strong>Safe for nature:</strong> made of things that will not hurt soil, water or animals</li>
</ul>

<h3>Good Design Examples</h3>
<ol>
<li>A backpack with a zipper you can replace when it breaks.</li>
<li>A wooden toy held together with pegs that can be put back in.</li>
<li>A pencil case made from one kind of metal that can be recycled easily.</li>
<li>A refill bottle for hand soap, so the pump bottle is used again and again.</li>
<li>A crib that changes into a small bed as a child grows.</li>
</ol>

<h3>Trash Is a Design Mistake</h3>
<p>Some people say that trash is really a design mistake. If a thing was designed well, it could be fixed, shared, or turned into something new. So when we see lots of trash, it can remind us to design better!</p>

<h3>Be a Little Designer</h3>
<p>Draw a toy that could never become trash. How would you fix it if it broke? What would it be made of? What could it turn into when you are too big to play with it? Share your design with your family. You are thinking just like a circular designer!</p>
`,
        MIDDLE_SCHOOL: `
<h2>Smart Design That Stops Waste Before It Starts</h2>
<p>It is much easier to prevent waste than to clean it up. Experts often say that a large share of a product's environmental impact is decided at the design stage, before a single item is made. That is because designers choose the materials, how parts fit together and how long the product is meant to last. <em>Circular design</em> means making those choices so products and materials can keep going around in loops.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Design for disassembly:</strong> making products that can be taken apart easily for repair, upgrade or recycling</li>
<li><strong>Modular design:</strong> building a product from separate parts, or modules, that can be swapped out</li>
<li><strong>Durability:</strong> how well a product holds up to use and time without breaking</li>
<li><strong>Mono-material:</strong> a product made mostly of one material, which is easier to recycle</li>
<li><strong>Planned obsolescence:</strong> designing products so they wear out or go out of date sooner than they need to</li>
<li><strong>Non-toxic materials:</strong> materials that do not contain harmful chemicals that could leak into the environment</li>
</ul>

<h3>Glue versus Screws</h3>
<p>Imagine a phone where the battery is glued inside. When the battery gets weak, it is hard to replace, so people may buy a whole new phone. Now imagine a phone where the battery is held with a few screws. Anyone with a small screwdriver could swap it. That simple choice can add years to the phone's life.</p>

<h3>Comparing Design Choices</h3>
<table>
<thead><tr><th>Design choice</th><th>Linear version</th><th>Circular version</th></tr></thead>
<tbody>
<tr><td>How parts join</td><td>Strong glue everywhere</td><td>Screws, clips and snap fits</td></tr>
<tr><td>Materials</td><td>Many mixed plastics and metals</td><td>Few, clearly labeled materials</td></tr>
<tr><td>Spare parts</td><td>Not available</td><td>Sold for years after purchase</td></tr>
<tr><td>Style</td><td>Trendy, quickly out of fashion</td><td>Timeless and easy to update</td></tr>
<tr><td>End of life</td><td>Landfill</td><td>Repair, reuse, recycling or composting</td></tr>
</tbody>
</table>

<h3>Designing Services, Not Just Things</h3>
<p>Sometimes the smartest design is not a new object at all. Instead of every family owning a drill they use only a few times, a tool library lets people borrow one. Designers can create services like rental, refill stations and repair programs that meet people's needs with fewer products.</p>

<h3>Your Design Challenge</h3>
<ol>
<li>Pick an object that often breaks or gets thrown away, like headphones.</li>
<li>List what usually goes wrong with it.</li>
<li>Redesign it so the broken part can be replaced.</li>
<li>Choose materials that can be recycled or composted.</li>
<li>Explain how it could come back to the maker at the end of its life.</li>
</ol>
`,
        HIGH_SCHOOL: `
<h2>Circular Design: Disassembly, Materials and Product-Service Systems</h2>
<p>Circular design applies the logic of the circular economy to the drawing board. Its goal is to make products, packaging and services that keep materials in use at their highest value and that avoid waste and pollution entirely. Three pillars stand out: designing products that come apart, selecting materials that can cycle safely, and designing systems where the business model rewards longevity.</p>

<h3>Design for Disassembly</h3>
<p>Products that can be taken apart quickly and without damage are easier to repair, upgrade, remanufacture and recycle. Designers do this by using reversible fasteners such as screws and clips instead of adhesives, limiting the number of different fastener types, labeling parts and making key components like batteries and screens easy to reach. Furniture, electronics and even buildings are increasingly designed this way.</p>

<h3>Material Selection</h3>
<ul>
<li><strong>Material passport:</strong> a record of the materials in a product or building so they can be identified and recovered later</li>
<li><strong>Recycled content:</strong> the share of a product made from recycled rather than virgin materials</li>
<li><strong>Composite material:</strong> a combination of materials bonded together, which is often strong but hard to separate and recycle</li>
<li><strong>Substance of concern:</strong> a chemical that may harm health or the environment or that contaminates recycling</li>
<li><strong>Biological nutrient:</strong> a material designed to safely biodegrade and return to the soil</li>
<li><strong>Technical nutrient:</strong> a material, such as metal, designed to cycle repeatedly through industry without losing quality</li>
</ul>
<p>A key rule is to avoid mixing biological and technical nutrients in ways that cannot be separated. A shoe with a natural sole glued to a synthetic upper may end up neither compostable nor recyclable.</p>

<h3>Product-Service Systems</h3>
<p>A product-service system combines a product with services, or replaces ownership with access. Examples include leasing, pay-per-use and subscription models. When the producer keeps ownership, it has a reason to design for durability and easy maintenance, because it pays for failures and recovers value at the end.</p>
<table>
<thead><tr><th>Type</th><th>How it works</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Product-oriented</td><td>Customer owns the product; services like repair are added</td><td>Warranty and maintenance contracts</td></tr>
<tr><td>Use-oriented</td><td>Customer pays to use a product owned by the provider</td><td>Leasing, rental, sharing</td></tr>
<tr><td>Result-oriented</td><td>Customer pays for an outcome, not a product</td><td>Paying for clean laundry or lighting levels</td></tr>
</tbody>
</table>

<h3>Trade-offs Designers Face</h3>
<p>Circular design is not always straightforward. Making a product more durable may add weight or material. A glued phone can be thinner and more water-resistant than a screwed one. Recycled plastics may vary in quality and color. Designers must balance these trade-offs and test whether the circular version actually reduces impacts over its full life.</p>

<h3>Applying Circular Design</h3>
<ol>
<li>Start with the need: could a service or shared product meet it better?</li>
<li>Design for long life, repair and upgrade.</li>
<li>Choose fewer, safer, well-labeled materials.</li>
<li>Plan how the product will come back at end of life.</li>
</ol>
`,
        UNDERGRADUATE: `
<h2>Circular Design Strategies, Business Models and Innovation Methods</h2>
<p>Circular design operates at the intersection of engineering, materials science, business strategy and user experience. A technically perfect, fully recyclable product may still fail if no business model brings it back, or if users do not adopt it. This lesson analyzes the main families of circular design strategy, how they align with business models, and the structured methods designers use to innovate.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Slowing loops:</strong> strategies that extend product life, such as durability, repairability and emotional attachment</li>
<li><strong>Closing loops:</strong> strategies that return materials into production through recycling and remanufacturing</li>
<li><strong>Narrowing loops:</strong> strategies that use fewer resources per product, such as lightweighting and efficiency</li>
<li><strong>Remanufacturing:</strong> restoring used products or components to like-new condition with a matching warranty</li>
<li><strong>Design for remanufacture:</strong> designing durable cores, accessible wear parts and standard interfaces to make remanufacturing feasible</li>
<li><strong>Emotional durability:</strong> design that builds a lasting bond between user and product so it is kept and cared for longer</li>
</ul>

<h3>Slowing, Closing and Narrowing</h3>
<p>A widely used framework classifies circular strategies as slowing, closing or narrowing resource loops, and some versions add regenerating. These strategies interact. Lightweighting (narrowing) can make products less durable or harder to repair (working against slowing). Using recycled content (closing) is valuable, but slowing loops generally preserves more value because the product's embodied energy is kept intact.</p>
<table>
<thead><tr><th>Strategy family</th><th>Design principles</th><th>Aligned business model</th></tr></thead>
<tbody>
<tr><td>Slowing</td><td>Durability, modularity, repairability, upgradeability, timeless aesthetics</td><td>Leasing, repair services, resale platforms</td></tr>
<tr><td>Closing</td><td>Mono-materials, disassembly, material passports, avoiding contaminants</td><td>Take-back programs, remanufacturing, material recovery</td></tr>
<tr><td>Narrowing</td><td>Lightweighting, efficiency, dematerialization</td><td>Conventional sales with lower input costs</td></tr>
<tr><td>Regenerating</td><td>Bio-based, non-toxic, compostable inputs</td><td>Agricultural partnerships, compost recovery</td></tr>
</tbody>
</table>

<h3>Business Model Integration</h3>
<p>Design choices only deliver circular outcomes if a business model captures the value they create. A modular laptop has value only if spare parts are sold and repair is supported. Remanufacturing works best when products return in predictable volumes and condition, which favors leasing and take-back contracts. Analysts therefore treat product design and business model as a single design problem, using tools such as business model canvases adapted to include reverse flows and end-of-life value.</p>

<h3>Innovation Methods</h3>
<p>Circular design teams draw on several structured methods. Design thinking starts with user needs and rapid prototyping. Lifecycle thinking identifies where impacts concentrate. System mapping reveals the actors needed to close loops. Circular design guides and toolkits offer prompts for each phase. Teardown analysis, where products are taken apart and timed, gives quantitative evidence of disassembly difficulty.</p>

<h3>An Applied Design Review</h3>
<ol>
<li>Define the user need and ask whether a service could meet it with fewer products.</li>
<li>Identify the life-cycle hotspot to choose between slowing, closing and narrowing.</li>
<li>Check joints, fasteners and access to wear parts through a teardown exercise.</li>
<li>Audit materials for mixing, contaminants and substances of concern.</li>
<li>Specify the business model and reverse logistics that will return the product.</li>
<li>Prototype, test with users and verify impacts with a lifecycle assessment.</li>
</ol>
`,
        GRADUATE: `
<h2>Design Policy, Corporate Circular Strategy and System-Level Design</h2>
<p>For circular design to move beyond showcase products, it must be embedded in regulation, corporate strategy and the wider systems products depend on. At the graduate level, the focus shifts from what a good product looks like to how institutions can make circular design the norm, and how designers can intervene in systems rather than individual objects.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Ecodesign regulation:</strong> legal requirements setting minimum environmental performance for products placed on a market</li>
<li><strong>Repairability index:</strong> a score informing buyers how easy a product is to repair, based on criteria such as disassembly and spare parts</li>
<li><strong>Digital product passport:</strong> a digital record of a product's materials, components and repair information, accessible along the value chain</li>
<li><strong>Reverse logistics:</strong> the systems that collect used products and move them back for reuse, repair, remanufacturing or recycling</li>
<li><strong>Systemic design:</strong> design that addresses the relationships among products, infrastructure, institutions and behavior rather than single artifacts</li>
<li><strong>Design brief:</strong> the document setting goals and constraints for a design project, a key leverage point for embedding circular criteria</li>
</ul>

<h3>Design Policy</h3>
<p>Ecodesign rules historically focused on energy efficiency during use. Policy in several jurisdictions, notably the European Union, has been widening to cover durability, repairability, recycled content, presence of substances of concern and information requirements. Some countries have introduced repairability scores on certain products, and right-to-repair measures in various places aim to make spare parts, tools and repair information available. These instruments target design directly by changing what products are legally allowed or commercially attractive to sell.</p>
<table>
<thead><tr><th>Instrument</th><th>Design lever</th><th>Challenge</th></tr></thead>
<tbody>
<tr><td>Ecodesign requirements</td><td>Minimum durability and repairability</td><td>Setting measurable, enforceable criteria</td></tr>
<tr><td>Repairability labels</td><td>Market pressure through consumer information</td><td>Ensuring scores reflect real repair outcomes</td></tr>
<tr><td>Digital product passports</td><td>Information for repair and recovery</td><td>Data standards, confidentiality, cost to small firms</td></tr>
<tr><td>Fee modulation in producer responsibility</td><td>Lower fees for recyclable, durable design</td><td>Fee differences often too small to change design</td></tr>
</tbody>
</table>

<h3>Corporate Circular Strategy</h3>
<p>Inside companies, circular design competes with cost, speed to market and sales targets. Firms that make progress typically set circular criteria in design briefs, give designers access to lifecycle data, align incentives with lifetime value rather than unit sales, and build reverse logistics capabilities. Cannibalization is a recurring concern: durable or refurbished products may reduce sales of new ones, so strategies need revenue models that capture value from service, repair and resale.</p>

<h3>System-Level Design</h3>
<p>Some waste problems cannot be solved by better products alone. A perfectly recyclable package still becomes litter if collection systems are missing. Reusable packaging requires standardized containers, washing infrastructure and return networks shared among many brands. System-level design addresses these shared infrastructures and the rules governing them, often through collaborations between companies, municipalities and communities.</p>

<h3>Equity Considerations</h3>
<p>Circular designs can raise upfront prices, putting durable products out of reach for low-income households unless rental, financing or secondhand markets exist. Repair access differs between urban and rural areas. Designers and policymakers should consider affordability and local repair ecosystems, including informal repairers whose skills are often overlooked.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Are circular criteria written into briefs, standards or regulations?</li>
<li>Does the business model reward lifetime value rather than volume?</li>
<li>Are the infrastructures needed to close loops in place or being built?</li>
<li>Do policies measure real-world repair and recovery outcomes?</li>
<li>Who can afford and access the resulting products and services?</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in Circular Design Methodology</h2>
<p>Circular design research examines how design knowledge is produced, how designers can influence behavior and systems, and whether design is capable of driving the deep transformations that circularity implies. The field draws on design studies, engineering, behavioral science, transitions research and philosophy of technology, and it is marked by debates about agency, evidence and scale.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Design for sustainable behavior:</strong> design that steers user practices toward lower-impact patterns through feedback, defaults, affordances or constraints</li>
<li><strong>Script:</strong> the pattern of use that a product's design invites or enforces, a concept from science and technology studies</li>
<li><strong>Practice theory:</strong> an approach that treats routines such as laundry or cooking as the unit of analysis rather than individual choices</li>
<li><strong>Transition design:</strong> an approach that frames design as a long-term intervention in socio-technical systems toward desirable futures</li>
<li><strong>Research through design:</strong> generating knowledge by making and testing prototypes as part of inquiry</li>
<li><strong>Speculative design:</strong> creating provocative scenarios or artifacts to open debate about possible futures</li>
</ul>

<h3>Design and Behavior</h3>
<p>Many circular strategies depend on user behavior: products last only if users care for them, return schemes work only if users return items, and sharing works only if users trust the system. Design for sustainable behavior offers a spectrum of strategies, from information and feedback to persuasive nudges and strongly constraining designs. Research questions include which strategies are effective in which contexts, how long effects persist, and the ethics of steering behavior without users' awareness. Practice theory critiques individualistic models by arguing that behavior is embedded in shared routines, infrastructure and social meaning, suggesting interventions should target practices rather than persuade individuals.</p>
<table>
<thead><tr><th>Strategy</th><th>Degree of control</th><th>Research concern</th></tr></thead>
<tbody>
<tr><td>Information and feedback</td><td>Low</td><td>Effects often small or short-lived</td></tr>
<tr><td>Defaults and nudges</td><td>Medium</td><td>Transparency and autonomy</td></tr>
<tr><td>Affordances and scripts</td><td>Medium to high</td><td>Unintended workarounds</td></tr>
<tr><td>Constraint and force</td><td>High</td><td>Acceptability and legitimacy</td></tr>
</tbody>
</table>

<h3>Methodological Debates</h3>
<p>Circular design guidance is often normative and heuristic, while rigorous evidence of outcomes is limited. Researchers debate how to evaluate design methods: through controlled studies, longitudinal case studies, or lifecycle and market modeling of resulting products. A further question is whether design for circularity should be optimized at product level, where tools are mature, or at system level, where impacts are decided but evaluation is harder. Tension also exists between universal design principles and context-specific solutions shaped by local materials, repair cultures and Indigenous and local knowledge.</p>

<h3>Transformative Design</h3>
<p>Transition design and related approaches argue that incremental product improvements cannot achieve circularity on their own, and that designers must work on visions, institutions and long time horizons. Critics question whether designers have the authority or legitimacy to steer systems, and whether such approaches can be evaluated. Participatory and co-design methods respond by sharing design power with communities affected by change.</p>

<h3>Contested Questions</h3>
<ul>
<li>Whether behavior-steering design respects user autonomy, and who decides which behaviors are desirable.</li>
<li>How much of circular performance is determined by design versus by markets, infrastructure and policy.</li>
<li>Whether product longevity conflicts with innovation and efficiency improvements over time.</li>
<li>How to integrate local and traditional repair and material knowledge without appropriation.</li>
</ul>

<h3>Open Research Directions</h3>
<ol>
<li>Longitudinal studies of how circular designs perform in real use, including care and return behavior.</li>
<li>Methods linking design decisions to system-level and rebound effects.</li>
<li>Evaluation frameworks for transition and participatory design interventions.</li>
<li>Design approaches for reuse systems shared across many companies.</li>
<li>Ethical frameworks for behavior-shaping design in circular contexts.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'zwcdpq1',
      question: {
        ELEMENTARY: 'What is circular design?',
        MIDDLE_SCHOOL: 'What is design for disassembly?',
        HIGH_SCHOOL: 'What is a material passport?',
        UNDERGRADUATE: 'What does "slowing loops" mean?',
        GRADUATE: 'What is reverse logistics?',
        PHD: 'What is design for sustainable behavior?',
      },
      options: {
        ELEMENTARY: ['Making things so they never become trash', 'Making only round things', 'Making things as fast as possible', 'Making things that break quickly'],
        MIDDLE_SCHOOL: ['Making products that come apart easily for repair or recycling', 'Breaking products on purpose', 'Gluing every part together', 'Designing products that never open'],
        HIGH_SCHOOL: ['A record of the materials in a product so they can be recovered', 'A travel document for designers', 'A brand logo', 'A receipt from a store'],
        UNDERGRADUATE: ['Extending product life through durability, repair and attachment', 'Making factories run more slowly', 'Delaying recycling for years', 'Shipping products by slower boats'],
        GRADUATE: ['Systems that move used products back for reuse, repair or recycling', 'Shipping new products to stores', 'Sending waste to landfills', 'Delivering mail backwards'],
        PHD: ['Design that steers user practices toward lower-impact patterns', 'Design that ignores users', 'Design that only changes colors', 'Design that removes all choices without reason'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Circular design makes things that can be fixed, shared or turned into something new instead of becoming trash.',
        MIDDLE_SCHOOL: 'Design for disassembly uses screws and clips so products can be taken apart for repair, upgrade or recycling.',
        HIGH_SCHOOL: 'A material passport records what materials are in a product or building so they can be recovered later.',
        UNDERGRADUATE: 'Slowing loops keeps products in use longer, preserving their embodied energy and materials.',
        GRADUATE: 'Reverse logistics collect used products and return them for reuse, repair, remanufacturing or recycling.',
        PHD: 'Design for sustainable behavior uses feedback, defaults, affordances or constraints to support lower-impact practices.',
      },
    },
    {
      id: 'zwcdpq2',
      question: {
        ELEMENTARY: 'Why is it better to hold things together with screws or clips instead of glue?',
        MIDDLE_SCHOOL: 'What is planned obsolescence?',
        HIGH_SCHOOL: 'Why should designers avoid mixing biological and technical nutrients that cannot be separated?',
        UNDERGRADUATE: 'What is remanufacturing?',
        GRADUATE: 'What is a repairability index?',
        PHD: 'In science and technology studies, what is a product\'s script?',
      },
      options: {
        ELEMENTARY: ['Glue is prettier', 'Screws and clips let the thing come apart to be fixed', 'Glue makes things last forever', 'Screws are only for toys'],
        MIDDLE_SCHOOL: ['Planning to fix things', 'Designing products to wear out or go out of date sooner than needed', 'A schedule for recycling trucks', 'Planning a new store'],
        HIGH_SCHOOL: ['They become too heavy', 'The product may be neither compostable nor recyclable', 'They change color', 'It makes products more expensive to sell'],
        UNDERGRADUATE: ['Melting products into raw materials', 'Restoring used products to like-new condition with a matching warranty', 'Burning products for energy', 'Throwing products away'],
        GRADUATE: ['A price tag on spare parts', 'A score telling buyers how easy a product is to repair', 'A list of repair shops', 'A tax on repairs'],
        PHD: ['The instruction manual', 'The pattern of use a design invites or enforces', 'The marketing slogan', 'The legal warranty'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Screws and clips can be undone, so the thing can be repaired or taken apart for recycling.',
        MIDDLE_SCHOOL: 'Planned obsolescence makes products wear out or go out of date early, which creates more waste.',
        HIGH_SCHOOL: 'Inseparable mixes, like a natural sole glued to a synthetic upper, block both composting and recycling.',
        UNDERGRADUATE: 'Remanufacturing restores products to like-new condition, usually with a warranty comparable to new.',
        GRADUATE: 'Repairability indexes inform buyers using criteria such as ease of disassembly and spare part availability.',
        PHD: 'A script is the pattern of use that a product\'s design encourages or forces on its users.',
      },
    },
    {
      id: 'zwcdpq3',
      question: {
        ELEMENTARY: 'Which of these is made to be fixed?',
        MIDDLE_SCHOOL: 'What is modular design?',
        HIGH_SCHOOL: 'What is a result-oriented product-service system?',
        UNDERGRADUATE: 'Why can lightweighting conflict with slowing loops?',
        GRADUATE: 'Why is cannibalization a concern in corporate circular strategy?',
        PHD: 'How does practice theory critique individual-focused behavior design?',
      },
      options: {
        ELEMENTARY: ['A toy that breaks if you open it', 'A cup that cracks on the first day', 'A backpack with a zipper you can replace', 'A glued toy that cannot come apart'],
        MIDDLE_SCHOOL: ['Products made of one solid block', 'Products designed to be thrown away', 'Products built from separate parts that can be swapped', 'Products sold only online'],
        HIGH_SCHOOL: ['The customer owns the product forever', 'The customer buys spare parts', 'The customer pays for an outcome, such as clean laundry', 'The customer pays nothing'],
        UNDERGRADUATE: ['Lighter products are always more durable', 'Lightweighting increases material use', 'Lighter products can be less durable or harder to repair', 'Lightweighting has no effect on products'],
        GRADUATE: ['Durable or refurbished products may reduce sales of new ones', 'Products eat each other', 'Recycling becomes illegal', 'It makes products less durable'],
        PHD: ['It says only prices matter', 'It ignores routines', 'It argues behavior is embedded in shared routines, infrastructure and meaning', 'It says users always act alone'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'A replaceable zipper means the backpack can be fixed instead of thrown away.',
        MIDDLE_SCHOOL: 'Modular products have separate parts that can be replaced or upgraded on their own.',
        HIGH_SCHOOL: 'In result-oriented systems, the customer pays for a result, so the provider is motivated to use durable, efficient products.',
        UNDERGRADUATE: 'Using less material can make products more fragile or harder to repair, working against longevity.',
        GRADUATE: 'Firms worry longer-lasting or refurbished products will reduce new sales, so they need service and resale revenue.',
        PHD: 'Practice theory treats routines as shaped by infrastructure and social meaning, not just individual choice.',
      },
    },
    {
      id: 'zwcdpq4',
      question: {
        ELEMENTARY: 'Why are simple materials good for design?',
        MIDDLE_SCHOOL: 'How can a tool library be a kind of good design?',
        HIGH_SCHOOL: 'Why does a producer that keeps ownership of a product design it to last?',
        UNDERGRADUATE: 'What does a teardown analysis provide?',
        GRADUATE: 'Why can a perfectly recyclable package still become waste?',
        PHD: 'What is transition design?',
      },
      options: {
        ELEMENTARY: ['They change color', 'They are always more expensive', 'They are heavier', 'They make recycling easier'],
        MIDDLE_SCHOOL: ['It sells more drills', 'It makes tools break faster', 'It hides tools from people', 'It meets people\'s needs with fewer products'],
        HIGH_SCHOOL: ['It never has to repair anything', 'Customers pay for every new product', 'It wants products to fail quickly', 'It pays for failures and recovers value at the end'],
        UNDERGRADUATE: ['The product\'s color options', 'The product\'s sales history', 'The store where it was sold', 'Quantitative evidence of how hard a product is to take apart'],
        GRADUATE: ['Recycling is always banned', 'Packages cannot be recycled', 'Recyclable packages are always heavier', 'Collection systems may be missing'],
        PHD: ['Designing product transitions between colors', 'Making only small product updates', 'Designing only websites', 'Framing design as long-term intervention in socio-technical systems'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Things made of just one or two materials are much easier to recycle.',
        MIDDLE_SCHOOL: 'Sharing tools through a library means fewer drills are made but everyone can still use one.',
        HIGH_SCHOOL: 'Because the producer pays for breakdowns and keeps the end-of-life value, durability pays off for it.',
        UNDERGRADUATE: 'Teardowns time and record the disassembly steps, giving hard evidence about repair and recovery difficulty.',
        GRADUATE: 'Without collection and sorting infrastructure, even a recyclable package can end up as litter or landfill.',
        PHD: 'Transition design works on visions, institutions and long time horizons, not just individual products.',
      },
    },
    {
      id: 'zwcdpq5',
      question: {
        ELEMENTARY: 'Some people say trash is really a kind of what?',
        MIDDLE_SCHOOL: 'When is much of a product\'s environmental impact decided?',
        HIGH_SCHOOL: 'What is a composite material?',
        UNDERGRADUATE: 'Why should design and business model be treated as one design problem?',
        GRADUATE: 'What is a challenge of digital product passports?',
        PHD: 'What is a common research concern about information and feedback strategies?',
      },
      options: {
        ELEMENTARY: ['A design mistake', 'A good idea', 'A kind of food', 'A new toy'],
        MIDDLE_SCHOOL: ['At the design stage', 'Only at the store', 'Only in the trash can', 'Only when it is painted'],
        HIGH_SCHOOL: ['A mix of materials bonded together that is hard to separate', 'A single pure metal', 'A material that composts in a day', 'A type of paint'],
        UNDERGRADUATE: ['Circular design choices only deliver value if a business model captures it', 'Business models never affect design', 'Designers decide all prices', 'Products sell themselves'],
        GRADUATE: ['Data standards, confidentiality and cost to small firms', 'They make products heavier', 'They are printed on paper only', 'They ban recycling'],
        PHD: ['Effects are often small or short-lived', 'They always force behavior', 'They are illegal', 'They always work forever'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'If something was designed well, it could be fixed, shared or made into something new, so trash points to a design mistake.',
        MIDDLE_SCHOOL: 'Designers choose materials, joints and lifespan, so much of the impact is decided before anything is made.',
        HIGH_SCHOOL: 'Composites combine materials for strength but are often hard to separate and recycle.',
        UNDERGRADUATE: 'A modular product needs spare parts and repair services, and remanufacturing needs take-back contracts.',
        GRADUATE: 'Passports need common data standards, protection of confidential information and affordable access for small firms.',
        PHD: 'Information and feedback offer low control, and studies often find their effects are modest or fade over time.',
      },
    },
  ],
}

export default expansion
