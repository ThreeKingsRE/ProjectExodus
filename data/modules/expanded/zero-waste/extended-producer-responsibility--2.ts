import type { ModuleExpansion } from '../types'

// Rewritten with its own angle: how producer responsibility works for specific
// products in practice. Chapter 10 covers the idea of EPR and why it exists.
const expansion: ModuleExpansion = {
  topicId: 'zero-waste',
  moduleKey: 'extended-producer-responsibility~2',
  title: 'Producer Responsibility in Action: Packaging, Electronics and Batteries',
  description: {
    ELEMENTARY: 'How companies that make packaging, gadgets and batteries help collect and recycle them when we are done.',
    MIDDLE_SCHOOL: 'How producer responsibility programmes collect packaging, old electronics and batteries in real life.',
    HIGH_SCHOOL: 'Producer responsibility in practice for packaging, electronics and batteries: fees, collection and results.',
    UNDERGRADUATE: 'Implementing EPR for packaging, e-waste and batteries: scheme design, fee modulation and performance.',
    GRADUATE: 'Comparing EPR programmes across product streams: governance, eco-modulation, enforcement and outcomes.',
    PHD: 'Research on EPR in practice: design incentives, free-riding, informal sectors and transboundary flows.',
  },
  lessons: [
    {
      id: 'zw-epr-1',
      title: 'Producer Responsibility in Action: Packaging, Electronics and Batteries',
      content: {
        ELEMENTARY: `
<h2>Companies Helping Clean Up</h2>
<p>When you finish a juice box, an old phone stops working or a toy's battery runs out, where should it go? In many places, the companies that made those things have to help collect them and recycle them. This idea is called producer responsibility. It is a bit like a rule at home: if you take the toys out, you help put them away.</p>

<h3>Packaging</h3>
<p>Companies that sell drinks, snacks and cereal in boxes and bottles pay a little money for each package they make. That money helps pay for recycling trucks and sorting centres. Companies that use less packaging, or packaging that is easy to recycle, pay less. So they try to make better packages!</p>
<ul>
<li><strong>Producer:</strong> a company that makes or sells a product</li>
<li><strong>Packaging:</strong> the box, bottle or wrapper a product comes in</li>
<li><strong>Electronics:</strong> things that run on electricity, like phones, tablets and computers</li>
<li><strong>Battery:</strong> a small store of energy that powers toys, phones and remote controls</li>
<li><strong>Drop-off point:</strong> a place where you can bring old things to be recycled</li>
</ul>

<h3>Old Phones and Gadgets</h3>
<p>Old phones and computers have tiny bits of gold, copper and other metals inside. Electronics companies set up drop-off points in shops and town centres. The gadgets are taken apart so the metals can be used again.</p>

<h3>Batteries</h3>
<p>Batteries should never go in the trash, because some can catch fire in garbage trucks. Many shops have special battery boxes where you can drop old ones off. Battery companies pay to collect and recycle them safely. Ask a grown-up to help you find one near you!</p>
`,
        MIDDLE_SCHOOL: `
<h2>Making Producers Responsible</h2>
<p>Extended producer responsibility, or EPR, means the companies that put products on the market help pay for, and sometimes run, the collection and recycling of those products when people are finished with them. Instead of towns paying for everything with taxes, producers share the cost, which gives them a reason to design products that are easier to recycle. Here is how EPR works for three kinds of products.</p>

<h3>Packaging</h3>
<p>In many countries, companies that sell packaged goods pay fees to a producer responsibility organisation based on how much packaging they use and what it is made of. That organisation funds recycling collection and sorting. Packaging that is hard to recycle, like some mixed plastics, costs more, so companies have a reason to switch to simpler materials or reuse systems.</p>
<ul>
<li><strong>Extended producer responsibility (EPR):</strong> making producers responsible for their products after use</li>
<li><strong>Producer responsibility organisation:</strong> a group run by producers to manage collection and recycling</li>
<li><strong>Recycling fee:</strong> money producers pay for each unit or tonne of product they sell</li>
<li><strong>E-waste:</strong> old or broken electronics that people throw out</li>
<li><strong>Collection target:</strong> a goal for how much of a product must be collected</li>
</ul>

<h3>Electronics</h3>
<p>E-waste is one of the fastest-growing kinds of waste. EPR laws require electronics makers to fund take-back through shops, drop-off sites and collection events. Recyclers recover valuable metals and safely handle harmful substances like lead and mercury.</p>

<h3>Batteries</h3>
<p>Battery EPR programmes place collection boxes in shops and require recycling of materials like lithium, nickel and cobalt. Lithium-ion batteries in the trash can start fires in garbage trucks and recycling plants, so safe collection protects workers too.</p>

<h3>Does It Work?</h3>
<p>EPR has raised recycling rates in many places, but results depend on good rules, clear targets and checking that every company pays its share. Some companies avoid paying, which is unfair to those who follow the rules.</p>
`,
        HIGH_SCHOOL: `
<h2>EPR in Practice</h2>
<p>Extended producer responsibility shifts the cost and often the management of end-of-life products from local governments and taxpayers to the producers who design and sell them. More than a policy idea, it is now a set of working programmes for packaging, electronics, batteries, tyres, mattresses and more. This chapter examines how EPR operates for three major product streams and what results it has produced.</p>

<h3>Packaging Programmes</h3>
<p>Most packaging EPR systems work through producer responsibility organisations (PROs). Producers report how much packaging they place on the market, by material, and pay fees to the PRO. The PRO funds collection, sorting and recycling, often by reimbursing municipalities. A growing feature is eco-modulation: lower fees for packaging that is recyclable, reusable or contains recycled content, and higher fees for problem materials. Several countries in Europe and Canada have long-running systems, and a number of U.S. states have recently passed packaging EPR laws.</p>
<ul>
<li><strong>Eco-modulation:</strong> adjusting EPR fees according to how environmentally friendly a product's design is</li>
<li><strong>Free rider:</strong> a producer that sells products but avoids paying its EPR obligations</li>
<li><strong>Recycled content:</strong> the share of a product made from recycled material</li>
<li><strong>Collection rate:</strong> the share of products sold that are collected at end of life</li>
<li><strong>Critical minerals:</strong> materials like lithium and cobalt that are essential for technology and have supply risks</li>
</ul>

<h3>Electronics</h3>
<p>E-waste EPR programmes set collection targets based on products sold, require free take-back for consumers and set treatment standards to recover metals and handle hazardous substances safely. Collection rates vary widely; much e-waste still ends up stored in drawers, in trash or exported informally.</p>

<h3>Batteries</h3>
<p>Battery EPR has expanded to cover the lithium-ion batteries in phones, tools, e-bikes and electric vehicles. Programmes fund collection points and safe transport, and new rules increasingly require recycled content in new batteries, recovery of critical minerals and battery labelling.</p>

<h3>Lessons Learned</h3>
<p>Successful programmes combine clear targets, meaningful eco-modulation, strong enforcement against free riders, convenient collection and transparent reporting. For you as a consumer, the practical step is simple: find your local drop-off points for packaging, electronics and batteries, and use them instead of the trash.</p>
`,
        UNDERGRADUATE: `
<h2>Implementing EPR for Packaging, E-Waste and Batteries</h2>
<p>Extended producer responsibility is a policy approach in which producers bear physical and/or financial responsibility for products at the post-consumer stage. Its objectives include shifting costs from municipalities, increasing collection and recycling, and creating incentives for eco-design. Implementation varies widely in scheme structure, fee design, targets and oversight. This chapter analyses EPR implementation for packaging, waste electrical and electronic equipment (WEEE) and batteries.</p>

<h3>Scheme Design</h3>
<p>Producers may comply individually or collectively through a PRO; collective schemes dominate because of economies of scale, though individual responsibility offers stronger design incentives in principle. Key design elements include the definition of "producer" (brand owner, importer, online marketplace), scope of products, financial responsibility (full or partial net cost), targets, reporting requirements and government oversight of PROs, including whether multiple competing PROs are allowed.</p>
<ul>
<li><strong>Individual producer responsibility:</strong> each producer is responsible for its own products, strengthening design incentives</li>
<li><strong>Collective scheme:</strong> producers pool obligations through a shared organisation</li>
<li><strong>Full net cost:</strong> covering all costs of collection and treatment minus revenues from recovered materials</li>
<li><strong>WEEE:</strong> waste electrical and electronic equipment, the legal term for e-waste in many jurisdictions</li>
<li><strong>Online marketplace obligation:</strong> making e-commerce platforms responsible for EPR compliance of sellers</li>
</ul>

<h3>Packaging</h3>
<p>Packaging EPR fees are typically set per tonne by material. Eco-modulation adjusts fees for recyclability, recycled content or reuse. Evidence suggests fee modulation must be large enough relative to product prices to change design decisions. Full net cost coverage relieves municipalities and can fund improved collection infrastructure.</p>

<h3>Electronics</h3>
<p>WEEE schemes face complex products with long and uncertain lifetimes, hazardous components and valuable metals. Collection targets based on products placed on the market have been missed in many countries; a large share of e-waste is unreported, informally recycled or illegally exported. Treatment standards and audits aim to ensure safe processing.</p>

<h3>Batteries</h3>
<p>Battery regulations increasingly integrate EPR with design requirements: removability and replaceability, labelling, carbon footprint declarations, recycled content minimums and material recovery targets for lithium, cobalt and nickel. Safety risks from lithium-ion batteries in waste streams make collection convenience critical.</p>

<h3>Performance and Enforcement</h3>
<p>Performance depends on enforcement against free riders, particularly online sellers, robust data on products placed on the market and transparency in PRO operations and costs.</p>
`,
        GRADUATE: `
<h2>Comparing EPR Programmes Across Product Streams</h2>
<p>Extended producer responsibility has diffused globally across product streams and jurisdictions, but programme outcomes vary considerably. Comparing packaging, WEEE and battery programmes reveals how governance structures, fee design, enforcement and market conditions shape performance. This chapter analyses these dimensions and draws lessons for policy design.</p>

<h3>Governance Models</h3>
<p>EPR governance ranges from single, producer-run PROs with government oversight to multiple competing PROs and government-run models funded by producer fees. Monopoly PROs can achieve economies of scale and coordinated infrastructure but may lack incentives for cost efficiency; competing PROs may lower costs but can fragment collection and require clearing mechanisms. Strong government oversight, including approval of plans, performance audits and public reporting, is consistently associated with better outcomes.</p>
<ul>
<li><strong>Clearing house:</strong> a body that allocates obligations and costs among competing PROs</li>
<li><strong>Eco-modulation:</strong> fee differentiation based on environmental attributes of products</li>
<li><strong>Products placed on the market:</strong> the quantity of products sold, used as the basis for fees and targets</li>
<li><strong>Enforcement gap:</strong> the difference between legal obligations and actual compliance</li>
<li><strong>Design for recycling:</strong> designing products so materials can be efficiently recovered</li>
</ul>

<h3>Eco-Modulation in Practice</h3>
<p>Many packaging schemes now modulate fees, but differences are often small relative to production costs, limiting design effects. Effective modulation requires clear, verifiable criteria (for example, design-for-recycling guidelines), meaningful fee differences and periodic updating as technologies change. For electronics and batteries, modulation is less common because product complexity makes criteria harder to define, and design requirements in product regulation may be more effective.</p>

<h3>Enforcement and Free Riding</h3>
<p>Free riding, especially by online sellers based outside the jurisdiction, undermines funding and fairness. Responses include making online marketplaces responsible for compliance, producer registers, mandatory registration numbers on listings and penalties. Data quality on products placed on the market is a persistent weakness.</p>

<h3>Outcomes and Trade-offs</h3>
<p>Packaging EPR has generally increased recycling rates and shifted costs from municipalities, though effects on waste prevention and reuse are modest. WEEE collection often falls short of targets because of informal channels and stockpiling. Battery programmes face rising volumes of large lithium-ion batteries with new safety and logistics challenges. Integrating EPR with complementary policies such as deposit-return systems, recycled content mandates and reuse targets addresses goals EPR alone does not achieve.</p>

<h3>Design Lessons</h3>
<p>Key lessons include defining producers broadly, covering full net costs, setting enforceable targets, ensuring transparency and independent oversight, and aligning EPR with product design regulation. Programme reviews should also track whether collected material is actually recycled into high-value uses, rather than downcycled or exported, and should give municipalities, recyclers and civil society a formal role in scheme governance so that producer interests do not dominate decisions about fees, targets and reporting.</p>
`,
        PHD: `
<h2>Research on EPR in Practice</h2>
<p>Extended producer responsibility is one of the most widespread environmental policy instruments, yet empirical evidence about its effects on product design, waste prevention and recycling quality remains limited and contested. Research frontiers include identifying design incentives, explaining enforcement failures, understanding interactions with informal sectors and assessing transboundary flows of end-of-life products. This chapter surveys these questions.</p>

<h3>Does EPR Change Design?</h3>
<p>Theory predicts that internalising end-of-life costs should encourage design for recyclability and reduced material use, especially under individual producer responsibility. Empirical studies find weak design effects in collective schemes, where fees are averaged across producers and small relative to product prices. Research uses fee-change natural experiments, product-level data on packaging weight and material composition, and firm interviews to identify when eco-modulation influences design. Attribution is difficult because design also responds to costs, brand strategy and other regulations.</p>
<ul>
<li><strong>Internalisation:</strong> making producers bear costs previously borne by society</li>
<li><strong>Natural experiment:</strong> an observational setting where a policy change creates comparable treated and untreated groups</li>
<li><strong>Informal sector:</strong> unregulated economic activity, such as independent waste pickers and repairers</li>
<li><strong>Transboundary movement:</strong> cross-border shipment of waste or used products</li>
<li><strong>Circular economy indicator:</strong> a metric tracking progress toward reduced resource use and waste</li>
</ul>

<h3>Enforcement, Free Riding and Data</h3>
<p>Studies document widespread non-compliance, especially in e-commerce. Political economy research examines how PRO governance, producer influence over regulators and monitoring capacity shape enforcement. Better data infrastructure, such as producer registries, digital tracking and product passports, is proposed, but evidence on effectiveness is early.</p>

<h3>Informal Sectors and Justice</h3>
<p>In many low- and middle-income countries, informal collectors and recyclers handle most e-waste and packaging. EPR programmes designed for formal systems can displace these workers or fail to reach material they collect. Research examines models that integrate informal actors through registration, fair payment and safer processing, and assesses impacts on livelihoods and environmental health.</p>

<h3>Transboundary Flows</h3>
<p>Used electronics and batteries are exported for reuse, often blurring the line between reusable goods and waste. Research quantifies flows, evaluates the effects of export controls and international agreements on hazardous waste, and analyses how EPR in exporting countries interacts with recycling capacity and environmental burdens in importing countries.</p>

<h3>Political Economy of Scheme Design</h3>
<p>EPR laws are negotiated among producers, municipalities, waste companies and environmental groups, and the resulting design reflects their relative power. Producers often favour producer-run PROs and partial cost coverage, while municipalities push for full net cost reimbursement and control over collection. Comparative research traces how these coalitions shape fee structures, target levels and oversight, and whether PROs captured by large incumbents set eco-modulation criteria that favour existing packaging formats. Understanding these dynamics helps explain why programmes with similar legal texts perform very differently in practice.</p>

<h3>Evaluation Methods</h3>
<p>Progress requires better outcome data on prevention, reuse and recycling quality, not only collection volumes. Combining material flow analysis with policy evaluation methods and comparative cross-jurisdiction studies offers a path to stronger evidence about which EPR designs work.</p>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'zw-epr2-q1',
      question: {
        ELEMENTARY: 'What is producer responsibility?',
        MIDDLE_SCHOOL: 'What does EPR stand for?',
        HIGH_SCHOOL: 'What is eco-modulation?',
        UNDERGRADUATE: 'Why do collective schemes dominate EPR implementation?',
        GRADUATE: 'What is consistently associated with better EPR outcomes?',
        PHD: 'Why do collective EPR schemes tend to show weak design effects?',
      },
      options: {
        ELEMENTARY: ['Kids buying more toys', 'Shops closing early', 'Companies helping collect and recycle what they make', 'Throwing everything away'],
        MIDDLE_SCHOOL: ['Electric power recycling', 'Every product returned', 'Extended producer responsibility', 'Energy price reduction'],
        HIGH_SCHOOL: ['Making products more colourful', 'Removing all fees', 'Adjusting EPR fees by how environmentally friendly a design is', 'Charging everyone the same'],
        UNDERGRADUATE: ['They are required everywhere', 'They give the strongest design incentives', 'Economies of scale', 'They have no costs'],
        GRADUATE: ['No oversight at all', 'Secret reporting', 'Strong government oversight with audits and public reporting', 'Letting producers set targets alone'],
        PHD: ['Producers love redesigning', 'Fees are very large', 'Fees are averaged across producers and small relative to prices', 'Design never matters'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Companies help collect and recycle the things they make.',
        MIDDLE_SCHOOL: 'EPR means extended producer responsibility.',
        HIGH_SCHOOL: 'Eco-modulation charges lower fees for better designs.',
        UNDERGRADUATE: 'Pooling obligations lets producers share infrastructure and costs.',
        GRADUATE: 'Oversight, audits and transparency lead to better performance.',
        PHD: 'Averaged, small fees give little reason for any one producer to redesign.',
      },
    },
    {
      id: 'zw-epr2-q2',
      question: {
        ELEMENTARY: 'Why should batteries never go in the trash?',
        MIDDLE_SCHOOL: 'Why can lithium-ion batteries in the trash be dangerous?',
        HIGH_SCHOOL: 'What new requirements are battery rules adding beyond collection?',
        UNDERGRADUATE: 'Which battery design requirement makes recycling and repair easier?',
        GRADUATE: 'Why is eco-modulation less common for electronics and batteries?',
        PHD: 'What makes attributing design changes to EPR difficult?',
      },
      options: {
        ELEMENTARY: ['Some can catch fire in garbage trucks', 'They are too heavy', 'They taste bad', 'They are too small'],
        MIDDLE_SCHOOL: ['They can start fires in trucks and recycling plants', 'They turn into plastic', 'They are made of wood', 'They make trash smell nice'],
        HIGH_SCHOOL: ['Recycled content, mineral recovery and labelling', 'Brighter colours', 'Bigger sizes only', 'Removing all labels'],
        UNDERGRADUATE: ['Removability and replaceability', 'Sealing batteries permanently', 'Hiding battery labels', 'Smaller warranty'],
        GRADUATE: ['Product complexity makes criteria hard to define', 'Electronics have no environmental impact', 'Fees are banned', 'Batteries are always recyclable'],
        PHD: ['Design also responds to costs, brands and other regulations', 'Products never change', 'Data are perfect', 'Fees are invisible'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Some batteries can catch fire in garbage trucks.',
        MIDDLE_SCHOOL: 'Damaged lithium-ion batteries can spark fires in trucks and plants.',
        HIGH_SCHOOL: 'New rules require recycled content, recovery of minerals and labelling.',
        UNDERGRADUATE: 'Removable, replaceable batteries are easier to repair and recycle.',
        GRADUATE: 'Complex products make it hard to set fair, verifiable fee criteria.',
        PHD: 'Many forces shape design, so isolating EPR\'s effect is hard.',
      },
    },
    {
      id: 'zw-epr2-q3',
      question: {
        ELEMENTARY: 'What is inside old phones that can be used again?',
        MIDDLE_SCHOOL: 'What is e-waste?',
        HIGH_SCHOOL: 'Where does much e-waste still end up?',
        UNDERGRADUATE: 'What does WEEE stand for?',
        GRADUATE: 'Why does WEEE collection often fall short of targets?',
        PHD: 'What tension do transboundary flows of used electronics create?',
      },
      options: {
        ELEMENTARY: ['Chocolate', 'Sand', 'Water', 'Gold, copper and other metals'],
        MIDDLE_SCHOOL: ['Email messages', 'Electric cars only', 'Wasted electricity', 'Old or broken electronics people throw out'],
        HIGH_SCHOOL: ['Always in certified recycling', 'On the moon', 'Back in shops as new', 'In drawers, trash or informal exports'],
        UNDERGRADUATE: ['Water, energy and electric equipment', 'World e-waste exchange', 'Waste energy emission estimates', 'Waste electrical and electronic equipment'],
        GRADUATE: ['Too many collection points', 'Electronics last forever', 'Targets are too low', 'Informal channels and stockpiling'],
        PHD: ['All exports are new products', 'No used products cross borders', 'Exports are always recycled safely', 'The line between reusable goods and waste is blurred'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Phones contain tiny amounts of gold, copper and other metals.',
        MIDDLE_SCHOOL: 'E-waste is old or broken electronics.',
        HIGH_SCHOOL: 'Much e-waste is stored, trashed or exported informally.',
        UNDERGRADUATE: 'WEEE means waste electrical and electronic equipment.',
        GRADUATE: 'Informal collection and devices kept in drawers keep collection low.',
        PHD: 'Used electronics exported "for reuse" may actually be waste.',
      },
    },
    {
      id: 'zw-epr2-q4',
      question: {
        ELEMENTARY: 'How do companies pay for packaging recycling?',
        MIDDLE_SCHOOL: 'What is a producer responsibility organisation?',
        HIGH_SCHOOL: 'What is a free rider in EPR?',
        UNDERGRADUATE: 'What does "full net cost" coverage mean?',
        GRADUATE: 'What is a clearing house in EPR systems?',
        PHD: 'How can EPR programmes affect informal recyclers?',
      },
      options: {
        ELEMENTARY: ['They do not pay anything', 'They pay a little money for each package they make', 'Kids pay with pocket money', 'The weather pays'],
        MIDDLE_SCHOOL: ['A school club', 'A group run by producers to manage collection and recycling', 'A government tax office', 'A recycling truck'],
        HIGH_SCHOOL: ['A cyclist', 'A producer that sells products but avoids paying its obligations', 'A free recycling bin', 'A company that recycles everything'],
        UNDERGRADUATE: ['Paying nothing', 'Covering all collection and treatment costs minus material revenues', 'Covering only advertising', 'Paying twice'],
        GRADUATE: ['A recycling machine', 'A body that allocates obligations and costs among competing PROs', 'A shop sale', 'A landfill'],
        PHD: ['They always employ them formally', 'They can displace them or fail to reach material they collect', 'They have no effect', 'They ban recycling'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Companies pay a small fee for every package, which funds recycling.',
        MIDDLE_SCHOOL: 'A PRO is run by producers to organise collection and recycling.',
        HIGH_SCHOOL: 'Free riders sell products without paying their share.',
        UNDERGRADUATE: 'Full net cost covers all costs minus revenue from recovered materials.',
        GRADUATE: 'A clearing house balances obligations among competing PROs.',
        PHD: 'Formal schemes can push informal workers out or miss what they collect.',
      },
    },
    {
      id: 'zw-epr2-q5',
      question: {
        ELEMENTARY: 'Why do companies try to make better packages?',
        MIDDLE_SCHOOL: 'What makes EPR work well?',
        HIGH_SCHOOL: 'Which countries have long-running packaging EPR systems?',
        UNDERGRADUATE: 'Why is making online marketplaces responsible important?',
        GRADUATE: 'Which complementary policies address goals EPR alone does not achieve?',
        PHD: 'What outcome data are most needed for better EPR evaluation?',
      },
      options: {
        ELEMENTARY: ['Packages are prettier', 'Kids ask them to', 'Packages that are easy to recycle cost them less', 'It is a game'],
        MIDDLE_SCHOOL: ['No rules at all', 'Letting companies skip paying', 'Good rules, clear targets and checking every company pays', 'Hiding results'],
        HIGH_SCHOOL: ['None anywhere', 'Only on islands', 'Several in Europe and Canada', 'Only in Antarctica'],
        UNDERGRADUATE: ['Marketplaces make all products', 'Online sales are banned', 'Many free riders are online sellers outside the jurisdiction', 'Shops never sell online'],
        GRADUATE: ['Lower landfill fees', 'Single-use mandates', 'Deposit-return systems, recycled content mandates and reuse targets', 'Removing all targets'],
        PHD: ['Only company names', 'Only packaging colours', 'Prevention, reuse and recycling quality, not only collection volumes', 'Only collection truck counts'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Easy-to-recycle packages cost companies less in fees.',
        MIDDLE_SCHOOL: 'Clear rules, targets and enforcement make EPR fair and effective.',
        HIGH_SCHOOL: 'Europe and Canada have long-running packaging EPR systems.',
        UNDERGRADUATE: 'Platforms can ensure overseas sellers comply.',
        GRADUATE: 'Deposits, recycled content mandates and reuse targets fill EPR\'s gaps.',
        PHD: 'Better data on prevention, reuse and quality are needed, not just volumes.',
      },
    },
  ],
}

export default expansion
