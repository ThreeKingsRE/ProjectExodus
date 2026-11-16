import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'zero-waste',
  moduleKey: 'product-lifecycle-design',
  lessons: [
    {
      id: 'zw-life-1',
      title: 'Designing Out Waste',
      content: {
        ELEMENTARY: `
<h2>Things Made to Last</h2>
<p>Have you ever had a toy that broke on the very first day? That feels sad, and the broken toy often ends up in the trash. Now think of a sturdy wooden block or a strong backpack that lasts for years. The people who invent and plan things are called designers, and they can choose to make things that last a long time and do not become waste.</p>

<h3>Every Thing Has a Life Story</h3>
<p>Just like you, every thing has a life story. It begins when materials like wood, metal or plastic are taken from the Earth. Then a factory turns them into a thing. Next, a truck carries it to a store. You use it for a while. At the end, it might be fixed, passed on, recycled or thrown away. Designers think about the whole story, from beginning to end.</p>

<h3>What Makes a Good Design?</h3>
<ul>
<li><strong>Strong:</strong> made from tough materials so it does not break easily when you use it</li>
<li><strong>Fixable:</strong> easy to repair when a part breaks, like sewing a button back on a coat</li>
<li><strong>Simple:</strong> made of only a few materials, so it is easier to recycle at the end</li>
<li><strong>Useful:</strong> something you really need and will use again and again</li>
<li><strong>Shareable:</strong> able to be passed on to a brother, sister or friend when you outgrow it</li>
</ul>

<h3>Good Ideas from Designers</h3>
<p>Some shoes have soles that can be replaced when they wear out. Some toys use screws instead of glue, so a broken piece can be swapped. Some backpacks have extra-strong zippers. Some pencils can be refilled. Each of these ideas helps a thing live a longer life.</p>

<h3>You Can Be a Designer Too</h3>
<ol>
<li>Take good care of your things so they last longer.</li>
<li>When something breaks, ask if it can be fixed before throwing it away.</li>
<li>Pass on clothes and toys you have outgrown.</li>
<li>Draw your own invention and think: how could it be fixed if it broke?</li>
</ol>

<h3>Think About It</h3>
<p>Pick one thing you use every day, like your water bottle or your shoes. What is its life story? How could a designer make it last even longer?</p>
`,
        MIDDLE_SCHOOL: `
<h2>How Design Decides What Becomes Waste</h2>
<p>Most of the environmental impact of a product is decided before it is ever made. When designers choose materials, shapes and the way parts fit together, they decide how long the product will last, whether it can be fixed and what happens when it is no longer wanted. That makes design one of the most powerful tools for reducing waste.</p>

<h3>The Life Cycle of a Product</h3>
<ol>
<li><strong>Raw materials:</strong> mining metals, drilling for oil to make plastic, cutting trees for paper</li>
<li><strong>Manufacturing:</strong> turning materials into parts and putting them together in factories</li>
<li><strong>Transport:</strong> moving the product by ship, train or truck to stores and homes</li>
<li><strong>Use:</strong> the time we use the product, which may need energy, water or replacement parts</li>
<li><strong>End of life:</strong> repair, reuse, recycling, composting, burning or landfill</li>
</ol>

<h3>Planned Obsolescence</h3>
<p>Planned obsolescence means designing a product so it breaks, wears out or seems outdated sooner than it needs to, so people buy a new one. It can happen through cheap parts that fail, batteries that cannot be replaced, special screws that stop people opening a device, or constant style changes that make last year's model feel old. Not every short life is planned, but the result is the same: more waste.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Life cycle:</strong> all the stages of a product, from raw materials to what happens at the end</li>
<li><strong>Planned obsolescence:</strong> designing products to break or become outdated sooner than necessary</li>
<li><strong>Durability:</strong> how long a product can keep working well under normal use</li>
<li><strong>Repairability:</strong> how easy it is to fix a product when part of it breaks</li>
<li><strong>Modular design:</strong> building a product from separate parts that can be swapped or upgraded</li>
<li><strong>Single-material design:</strong> making a product mostly from one material so it is easier to recycle</li>
</ul>

<h3>Design Choices and Their Effects</h3>
<table>
<thead><tr><th>Design choice</th><th>Effect on waste</th></tr></thead>
<tbody>
<tr><td>Parts glued together</td><td>Hard to repair or separate for recycling</td></tr>
<tr><td>Parts held with standard screws</td><td>Easy to open, fix and take apart</td></tr>
<tr><td>Battery sealed inside</td><td>The whole device may be replaced when the battery dies</td></tr>
<tr><td>Replaceable battery</td><td>The device can keep working for years</td></tr>
<tr><td>Many mixed materials</td><td>Difficult or impossible to recycle</td></tr>
<tr><td>One main material</td><td>Simpler to recycle</td></tr>
</tbody>
</table>

<h3>Why It Matters</h3>
<p>If a phone lasts twice as long, roughly half as many phones need to be made over the same time. That means less mining, less factory energy and less waste. You can support good design by choosing products that are sturdy, repairable and come with spare parts, and by caring for the things you already own.</p>
`,
        HIGH_SCHOOL: `
<h2>Design for Environment: Durability, Repair and Beyond</h2>
<p>Design for Environment (DfE) is an approach in which designers consider environmental impacts at every stage of a product's life, not just at the end. Because so much of a product's impact is locked in during design, DfE aims to prevent waste and pollution rather than clean them up later. This lesson explores the main strategies and the trade-offs designers face.</p>

<h3>Core DfE Strategies</h3>
<ul>
<li><strong>Design for durability:</strong> using robust materials and components so the product lasts longer under normal use</li>
<li><strong>Design for repair:</strong> making parts accessible with common tools and providing spare parts and repair information</li>
<li><strong>Design for disassembly:</strong> joining parts with screws or clips instead of glue so they can be separated easily</li>
<li><strong>Design for recycling:</strong> choosing compatible materials and avoiding mixtures that cannot be separated</li>
<li><strong>Dematerialization:</strong> delivering the same function with less material, for example lighter packaging</li>
<li><strong>Design for energy efficiency:</strong> reducing the energy a product uses while in operation</li>
</ul>

<h3>Where Is the Impact?</h3>
<p>Different products have their biggest impacts at different stages, so the right design strategy depends on the product.</p>
<table>
<thead><tr><th>Product</th><th>Stage with the largest impact</th><th>Best design focus</th></tr></thead>
<tbody>
<tr><td>Smartphone</td><td>Manufacturing, especially chips and materials</td><td>Durability, repairability and longer software support</td></tr>
<tr><td>Washing machine</td><td>Use, through electricity and water</td><td>Energy and water efficiency, durability</td></tr>
<tr><td>Disposable cup</td><td>Materials and end of life</td><td>Reusable alternatives or less material</td></tr>
<tr><td>Car</td><td>Use for fuel cars; manufacturing becomes larger for electric cars</td><td>Efficiency, lightweighting and battery longevity</td></tr>
</tbody>
</table>

<h3>Trade-offs Designers Face</h3>
<ol>
<li><strong>Durability versus weight:</strong> stronger materials can be heavier, raising transport energy.</li>
<li><strong>Efficiency versus longevity:</strong> replacing an old appliance early may save energy but creates waste and new manufacturing impacts.</li>
<li><strong>Thinness versus repair:</strong> slim devices often rely on glue, making repair difficult.</li>
<li><strong>Cost versus quality:</strong> durable parts can raise the price, even if they save money over time.</li>
<li><strong>Recyclability versus performance:</strong> mixed materials may perform better but recycle poorly.</li>
</ol>

<h3>Real-World Examples</h3>
<p>Some phone and laptop makers now design devices with replaceable batteries and modular parts. Outdoor clothing brands offer repair services and spare parts. Furniture designed with standard fasteners can be taken apart, moved and reassembled. Repairability scores, used in some countries, rate how easy products are to fix and help buyers choose. Right-to-repair campaigns push for access to spare parts, tools and manuals.</p>

<h3>Solutions and Actions</h3>
<p>Designers can ask simple questions at every stage: Can this use less material? Can it be opened and fixed? Will its materials be recoverable? Consumers can favor durable, repairable products and keep them longer. Governments can require spare parts, repair information and longer software updates. Together, these steps keep products in use and out of the waste stream.</p>
`,
        UNDERGRADUATE: `
<h2>Lifecycle Assessment and Eco-Design</h2>
<p>Eco-design integrates environmental criteria into product development alongside cost, function and aesthetics. Its main analytical tool is lifecycle assessment (LCA), which quantifies environmental impacts across a product's life from raw material extraction to end of life. This lesson introduces LCA methodology, eco-design principles and the logic of material selection, so you can evaluate design choices rather than rely on intuition.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Lifecycle assessment:</strong> a standardized method for quantifying environmental impacts across all stages of a product's life</li>
<li><strong>Functional unit:</strong> the defined amount of service a product provides, used so that alternatives are compared fairly</li>
<li><strong>System boundary:</strong> the decision about which processes and life stages are included in an assessment</li>
<li><strong>Life cycle inventory:</strong> the list of material and energy inputs and emissions for every process in the system</li>
<li><strong>Impact assessment:</strong> converting inventory data into impact categories such as climate change, water use or toxicity</li>
<li><strong>Burden shifting:</strong> reducing an impact in one stage or category while unintentionally increasing it in another</li>
</ul>

<h3>The Four Phases of LCA</h3>
<ol>
<li><strong>Goal and scope:</strong> state the purpose, functional unit and system boundary, such as cradle-to-gate or cradle-to-grave.</li>
<li><strong>Inventory analysis:</strong> collect data on inputs and outputs for every process within the boundary.</li>
<li><strong>Impact assessment:</strong> translate inventory flows into impact categories using characterization factors.</li>
<li><strong>Interpretation:</strong> identify hotspots, test sensitivity to assumptions and draw conclusions.</li>
</ol>
<p>The international ISO 14040 and 14044 standards describe this framework. A crucial point is the functional unit: comparing one reusable cup with one disposable cup is meaningless; comparing the cups needed to serve a given number of drinks over a year is meaningful.</p>

<h3>Reasoning with Break-Even Points</h3>
<p>Reusable products typically carry a higher impact to make than single-use versions, but that impact is spread over many uses. The break-even point is the number of uses after which the reusable option has lower total impact. If a reusable item is used fewer times than its break-even number, it can be worse than the disposable. Washing adds impact per use, so a dishwasher that runs full and efficiently lowers the break-even number, while hot handwashing raises it.</p>

<h3>Material Selection</h3>
<table>
<thead><tr><th>Criterion</th><th>Question to ask</th><th>Example consideration</th></tr></thead>
<tbody>
<tr><td>Embodied impact</td><td>How intensive is producing this material?</td><td>Primary aluminum is energy-intensive; recycled aluminum far less so</td></tr>
<tr><td>Durability</td><td>Will it last for the intended life?</td><td>Stronger materials may permit fewer replacements</td></tr>
<tr><td>Recyclability</td><td>Is there an established recovery route?</td><td>Mono-materials recycle better than laminates</td></tr>
<tr><td>Toxicity</td><td>Does it contain substances of concern?</td><td>Some additives complicate recycling and harm health</td></tr>
<tr><td>Renewability</td><td>Is it renewable and responsibly sourced?</td><td>Bio-based does not automatically mean lower impact</td></tr>
</tbody>
</table>

<h3>Eco-Design Principles</h3>
<p>Common eco-design strategies include reducing material use, selecting low-impact materials, optimizing production, reducing use-phase energy, extending product life, and optimizing end of life. These are often visualized as a strategy wheel. The key analytical skill is matching strategy to hotspot: extending life matters most where manufacturing dominates; efficiency matters most where use dominates.</p>

<h3>Applied Method: A Streamlined Eco-Design Review</h3>
<ol>
<li>Define the function and functional unit.</li>
<li>Sketch the life cycle and estimate which stage dominates impact.</li>
<li>Select strategies that target the hotspot.</li>
<li>Check for burden shifting across stages and impact categories.</li>
<li>Test assumptions, such as lifetime and number of uses, with sensitivity analysis.</li>
</ol>
`,
        GRADUATE: `
<h2>Circular Design Strategies, Business Models and Policy</h2>
<p>At the graduate level, product lifecycle design is inseparable from business model and policy design. A durable, repairable product only reduces waste if the business earns money from longevity, if users keep products longer and if regulation rewards rather than penalizes these choices. This lesson examines circular design strategies, the business models that make them viable and the policy instruments that shape design decisions.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Slowing loops:</strong> design strategies that extend product life through durability, repair and upgrade</li>
<li><strong>Closing loops:</strong> strategies that return materials to production through recycling and remanufacturing</li>
<li><strong>Narrowing loops:</strong> strategies that use fewer resources per product through efficiency and lightweighting</li>
<li><strong>Product-service system:</strong> a business model that sells the function or outcome of a product rather than the product itself</li>
<li><strong>Remanufacturing:</strong> restoring used products or components to like-new condition with a warranty comparable to new</li>
<li><strong>Ecodesign requirements:</strong> legally binding product rules on efficiency, durability, repairability or information</li>
</ul>

<h3>Business Models and Incentives</h3>
<p>Under conventional sales models, revenue rises with units sold, which creates a structural incentive for short product lives. Product-service systems invert this. When a company sells lighting as a service, retains ownership of fixtures and charges for illumination, it profits from durable, efficient and easily maintained products. Similar logic applies to leased appliances, tool sharing and pay-per-use machinery. However, these models face barriers: customer preference for ownership, balance-sheet impacts from holding assets, reverse logistics costs and risks of more intensive use or careless handling.</p>
<table>
<thead><tr><th>Business model</th><th>Design incentive created</th><th>Main barrier</th></tr></thead>
<tbody>
<tr><td>Conventional sale</td><td>Low cost and frequent replacement</td><td>Incentive conflicts with longevity</td></tr>
<tr><td>Product-as-a-service</td><td>Durability, efficiency, maintainability</td><td>Capital needs and customer acceptance</td></tr>
<tr><td>Take-back and remanufacture</td><td>Design for disassembly and core recovery</td><td>Return logistics and uncertain core quality</td></tr>
<tr><td>Repair and upgrade services</td><td>Modularity and spare part availability</td><td>Labor costs relative to new products</td></tr>
<tr><td>Resale and refurbishment</td><td>Durability and data-safe reset</td><td>Cannibalization of new sales</td></tr>
</tbody>
</table>

<h3>Policy Instruments</h3>
<p>Policy increasingly targets design directly. The European Union has expanded ecodesign rules beyond energy efficiency to cover durability, repairability, recycled content and product information, including digital product passports for some categories. Repairability scoring, minimum spare part availability periods and right-to-repair laws aim to reduce barriers to repair. Extended producer responsibility with eco-modulated fees can financially reward design for recycling. Public procurement can specify durability and service models, creating early markets.</p>

<h3>Governance and Equity Questions</h3>
<p>Circular design policy raises equity questions. Durable products may cost more upfront, burdening low-income households unless financing, leasing or secondhand markets make longevity accessible. Repair jobs are often local and accessible, but manufacturers may resist sharing tools and information. Global supply chains mean design rules adopted in one large market can shape products worldwide, raising questions about whose standards apply.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Identify whether the strategy slows, closes or narrows resource loops.</li>
<li>Check whether the business model profits from the intended design change.</li>
<li>Assess rebound risks, such as cheaper service increasing total use.</li>
<li>Identify policy levers that align incentives across producers and users.</li>
<li>Examine affordability and access for different user groups.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in Design for Circularity</h2>
<p>Research on design for circularity asks how product design interacts with material systems, markets and social practices over time. Design decisions propagate through supply chains, consumption patterns and end-of-life infrastructure, so evaluating them requires dynamic and systemic methods. This lesson surveys modeling approaches, contested questions and the study of transition pathways.</p>

<h3>Methods and Concepts</h3>
<ul>
<li><strong>System dynamics modeling:</strong> simulation using stocks, flows and feedback loops to study how design and policy changes play out over time</li>
<li><strong>Dynamic lifecycle assessment:</strong> LCA that accounts for changes over time in background systems, such as a decarbonizing electricity grid</li>
<li><strong>Optimal product lifetime:</strong> the replacement timing that minimizes total impact, balancing new efficient models against manufacturing burdens</li>
<li><strong>Material passport:</strong> a digital record of the materials and components in a product, intended to enable recovery and reuse</li>
<li><strong>Socio-technical transition:</strong> a long-term shift in technologies, institutions, practices and markets that fulfills a societal function differently</li>
<li><strong>Multi-level perspective:</strong> a framework that analyzes transitions as interactions among niches, regimes and broader landscape pressures</li>
</ul>

<h3>Modeling Product Lifetimes</h3>
<p>Optimal lifetime analysis shows that the environmentally best moment to replace a product depends on the ratio of production to use-phase impacts and on the rate of efficiency improvement. As electricity grids decarbonize, use-phase impacts of electrical products fall, which tends to favor keeping existing products longer. Dynamic LCA attempts to represent these changing backgrounds, but results are sensitive to scenario assumptions. Empirical work on actual product lifetimes, including how long products sit unused in storage, is essential for calibrating models.</p>

<h3>System Dynamics and Feedbacks</h3>
<p>System dynamics models represent feedbacks such as how secondhand supply affects new sales, how repair prices respond to part availability, and how recycled content mandates shift material markets. These models help explore unintended consequences: a successful resale market may lower prices and increase total consumption, while longer warranties may change how carefully users treat products.</p>

<h3>Contested Questions</h3>
<table>
<thead><tr><th>Question</th><th>Why it is contested</th></tr></thead>
<tbody>
<tr><td>Does longevity always reduce impact?</td><td>Efficiency gains in new products and grid decarbonization change the answer by product</td></tr>
<tr><td>Do product-service systems reduce total consumption?</td><td>Evidence varies; some models increase usage intensity or have rebound effects</td></tr>
<tr><td>How much does design determine impact?</td><td>Widely repeated claims about design locking in most impact are rarely measured rigorously</td></tr>
<tr><td>Value of material passports</td><td>Benefits depend on data quality, interoperability and whether recyclers actually use the data</td></tr>
<tr><td>Durability versus fashion and software</td><td>Physical durability may not matter if products become socially or digitally obsolete</td></tr>
</tbody>
</table>

<h3>Transition Pathways</h3>
<p>Transition research uses frameworks such as the multi-level perspective to explain why circular design remains niche despite technical feasibility. Regimes built around linear sales, global supply chains and cheap virgin materials are stabilized by sunk investments, routines and regulations. Pathways for change include niche innovations scaling with policy support, regime actors adopting circular models for strategic reasons, and landscape pressures such as resource price shocks or supply security concerns. Research debates whether incremental eco-design can add up to transformation or whether deeper changes in consumption and ownership are required.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Empirical datasets on real product lifetimes, storage and reuse across product categories.</li>
<li>Coupled models linking product design, consumer behavior and material markets.</li>
<li>Evaluation of digital product passports and their effect on recovery rates.</li>
<li>Methods for including software support and social obsolescence in lifetime design.</li>
<li>Comparative studies of policy mixes that move circular design from niche to regime.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'zwlq1',
      question: {
        ELEMENTARY: 'What makes a good design for reducing waste?',
        MIDDLE_SCHOOL: 'What is planned obsolescence?',
        HIGH_SCHOOL: 'What does DfE stand for?',
        UNDERGRADUATE: 'What does lifecycle assessment measure?',
        GRADUATE: 'What is a product-service system?',
        PHD: 'What is a material passport?',
      },
      options: {
        ELEMENTARY: ['Made to last and be fixed', 'Made to break quickly', 'Made with lots of mixed materials', 'Made to be thrown away'],
        MIDDLE_SCHOOL: ['Designing products to break or become outdated sooner than necessary', 'Making products last forever', 'Recycling old products', 'Using recycled materials'],
        HIGH_SCHOOL: ['Design for Environment', 'Direct Factory Export', 'Durable Finished Equipment', 'Design for Excellence'],
        UNDERGRADUATE: ['Environmental impacts across all stages of a product\'s life', 'Only manufacturing impacts', 'Only disposal impacts', 'Only product price'],
        GRADUATE: ['Selling the function or outcome of a product rather than the product itself', 'Selling more products faster', 'Planned obsolescence', 'Lowering quality to cut prices'],
        PHD: ['A digital record of the materials and components in a product', 'A travel document for products', 'A manufacturing date stamp', 'A brand certification logo'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Things made to last and to be fixed stay out of the trash for much longer.',
        MIDDLE_SCHOOL: 'Planned obsolescence shortens product life through weak parts, sealed batteries or style changes.',
        HIGH_SCHOOL: 'Design for Environment considers impacts at every stage of a product\'s life during design.',
        UNDERGRADUATE: 'LCA quantifies impacts from raw material extraction through manufacturing, use and end of life.',
        GRADUATE: 'Product-service systems sell outcomes such as lighting, which rewards durable and efficient products.',
        PHD: 'Material passports record what products contain so materials and components can be recovered and reused.',
      },
    },
    {
      id: 'zwlq2',
      question: {
        ELEMENTARY: 'What is the first part of a thing\'s life story?',
        MIDDLE_SCHOOL: 'Why is a replaceable battery a good design choice?',
        HIGH_SCHOOL: 'For a washing machine, which life stage usually has the largest impact?',
        UNDERGRADUATE: 'Why is the functional unit important in LCA?',
        GRADUATE: 'Why do conventional sales models create an incentive for short product lives?',
        PHD: 'Why does grid decarbonization tend to favor keeping electrical products longer?',
      },
      options: {
        ELEMENTARY: ['Being thrown away', 'Taking materials from the Earth', 'Riding in a truck', 'Sitting on a shelf'],
        MIDDLE_SCHOOL: ['It makes the device heavier', 'The device can keep working when the battery wears out', 'It makes recycling impossible', 'It makes the device look newer'],
        HIGH_SCHOOL: ['Transport', 'Use, through electricity and water', 'Packaging', 'The store display'],
        UNDERGRADUATE: ['It sets the product price', 'It ensures alternatives are compared on the same amount of service', 'It lists all the factories', 'It removes the need for data'],
        GRADUATE: ['Customers dislike durable products', 'Revenue rises with the number of units sold', 'Repair is always illegal', 'Durable products cannot be sold'],
        PHD: ['Manufacturing impacts disappear', 'Use-phase impacts fall, so manufacturing a replacement weighs relatively more', 'Old products become more efficient', 'Electricity becomes more expensive'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Every thing starts with materials like wood, metal or plastic taken from the Earth.',
        MIDDLE_SCHOOL: 'With a replaceable battery, you only replace the worn part instead of the whole device.',
        HIGH_SCHOOL: 'Washing machines use electricity and water for years, so use dominates their impact.',
        UNDERGRADUATE: 'Comparing equal service, like drinks served over a year, makes reusable and disposable options comparable.',
        GRADUATE: 'If profit comes from units sold, frequent replacement increases revenue, conflicting with longevity.',
        PHD: 'Cleaner electricity shrinks use-phase impacts, making the manufacturing burden of a new product relatively more important.',
      },
    },
    {
      id: 'zwlq3',
      question: {
        ELEMENTARY: 'What can you do when a toy breaks?',
        MIDDLE_SCHOOL: 'Which way of joining parts makes a product easier to fix?',
        HIGH_SCHOOL: 'What is design for disassembly?',
        UNDERGRADUATE: 'What is the break-even point for a reusable product?',
        GRADUATE: 'Which strategy is an example of "slowing loops"?',
        PHD: 'What does the multi-level perspective analyze?',
      },
      options: {
        ELEMENTARY: ['Throw it away right away', 'Buy two new ones', 'Ask if it can be fixed', 'Hide it'],
        MIDDLE_SCHOOL: ['Strong glue', 'Melting parts together', 'Standard screws', 'Sealing everything shut'],
        HIGH_SCHOOL: ['Making products as thin as possible', 'Using as much glue as possible', 'Joining parts so they can be separated easily', 'Designing products to be disposable'],
        UNDERGRADUATE: ['The price at which it sells', 'The day it is manufactured', 'The number of uses after which it has lower total impact than single-use', 'The weight at which it breaks'],
        GRADUATE: ['Lightweighting a product', 'Burning products for energy', 'Extending product life through repair and upgrade', 'Shipping products further'],
        PHD: ['Only consumer preferences', 'Only factory emissions', 'Transitions as interactions among niches, regimes and landscape pressures', 'Single product prices'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Asking if something can be fixed gives it a longer life and keeps it out of the trash.',
        MIDDLE_SCHOOL: 'Standard screws let people open a product, replace a part and close it again.',
        HIGH_SCHOOL: 'Using screws or clips instead of glue lets parts be separated for repair and recycling.',
        UNDERGRADUATE: 'Reusables have higher production impact, which is offset only after enough uses.',
        GRADUATE: 'Slowing loops means keeping products in use longer through durability, repair and upgrade.',
        PHD: 'The multi-level perspective explains transitions through niche innovations, dominant regimes and broad landscape pressures.',
      },
    },
    {
      id: 'zwlq4',
      question: {
        ELEMENTARY: 'Why is a thing made of only a few materials a good idea?',
        MIDDLE_SCHOOL: 'If a phone lasts twice as long, what happens?',
        HIGH_SCHOOL: 'What is a trade-off of very thin devices?',
        UNDERGRADUATE: 'What is burden shifting?',
        GRADUATE: 'What is remanufacturing?',
        PHD: 'Why is the value of material passports contested?',
      },
      options: {
        ELEMENTARY: ['It is heavier', 'It is louder', 'It changes color', 'It is easier to recycle at the end'],
        MIDDLE_SCHOOL: ['Twice as many phones are needed', 'Mining increases', 'Nothing changes', 'Roughly half as many phones need to be made over that time'],
        HIGH_SCHOOL: ['They always last longer', 'They use more screws', 'They are easier to recycle', 'They often rely on glue, making repair difficult'],
        UNDERGRADUATE: ['Moving products by truck', 'Selling a product to another company', 'Reducing all impacts at once', 'Reducing one impact while increasing another elsewhere'],
        GRADUATE: ['Shredding products for recycling', 'Burning products for energy', 'Designing a new product from scratch', 'Restoring used products to like-new condition with a comparable warranty'],
        PHD: ['They have been proven to double recovery everywhere', 'They contain no data', 'They are required for every product worldwide', 'Benefits depend on data quality, interoperability and actual use by recyclers'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Fewer materials are easier to sort and recycle.',
        MIDDLE_SCHOOL: 'Longer life means fewer replacements, so less mining, factory energy and waste.',
        HIGH_SCHOOL: 'Glued, slim designs make it hard to open devices and replace parts.',
        UNDERGRADUATE: 'Burden shifting moves impact to another stage or category instead of reducing it overall.',
        GRADUATE: 'Remanufacturing restores products or components to like-new condition and keeps their embedded value.',
        PHD: 'A passport only helps if its data are accurate, compatible across systems and used in recovery decisions.',
      },
    },
    {
      id: 'zwlq5',
      question: {
        ELEMENTARY: 'Who plans and invents how things are made?',
        MIDDLE_SCHOOL: 'What is modular design?',
        HIGH_SCHOOL: 'What is dematerialization?',
        UNDERGRADUATE: 'What does the system boundary in an LCA define?',
        GRADUATE: 'Why can durable products raise equity concerns?',
        PHD: 'What is optimal product lifetime analysis about?',
      },
      options: {
        ELEMENTARY: ['Designers', 'Bus drivers', 'Mail carriers', 'Lifeguards'],
        MIDDLE_SCHOOL: ['Building a product from separate parts that can be swapped or upgraded', 'Gluing all parts together', 'Making a product from one solid block', 'Painting a product in many colors'],
        HIGH_SCHOOL: ['Delivering the same function with less material', 'Adding more material for strength', 'Turning products into dust', 'Selling products online'],
        UNDERGRADUATE: ['Which processes and life stages are included in the assessment', 'The final price', 'The country of sale', 'The number of customers'],
        GRADUATE: ['They may cost more upfront, burdening low-income households', 'They are always cheaper', 'They cannot be sold secondhand', 'They are banned in some markets'],
        PHD: ['Finding the replacement timing that minimizes total impact', 'Making every product last forever', 'Maximizing sales volume', 'Choosing product colors'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Designers decide what things are made of and how they fit together.',
        MIDDLE_SCHOOL: 'Modular products let you replace or upgrade one part instead of the whole product.',
        HIGH_SCHOOL: 'Dematerialization means doing the same job with less material, such as lighter packaging.',
        UNDERGRADUATE: 'The boundary, such as cradle-to-gate or cradle-to-grave, sets which processes are counted.',
        GRADUATE: 'Higher upfront prices can exclude low-income households unless leasing, financing or secondhand markets help.',
        PHD: 'Optimal lifetime analysis balances manufacturing burdens of new products against efficiency gains in use.',
      },
    },
  ],
}

export default expansion
