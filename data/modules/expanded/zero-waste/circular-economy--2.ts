import type { ModuleExpansion } from '../types'

// Rewritten with its own angle: how real businesses make money while keeping
// products and materials in use. Chapter 2 covers circular economy principles.
const expansion: ModuleExpansion = {
  topicId: 'zero-waste',
  moduleKey: 'circular-economy~2',
  title: 'Circular Business Models in Practice',
  description: {
    ELEMENTARY: 'How shops and companies can rent, repair, refill and resell things so less ends up as trash.',
    MIDDLE_SCHOOL: 'Real businesses built on renting, repairing, refilling and reselling, and how they make money.',
    HIGH_SCHOOL: 'Five circular business models in practice, with examples, benefits and the challenges they face.',
    UNDERGRADUATE: 'Circular business models: product-as-a-service, reuse systems, remanufacturing, resale and sharing.',
    GRADUATE: 'Designing and scaling circular business models: economics, reverse logistics, metrics and policy enablers.',
    PHD: 'Research on circular business models: rebound effects, measurement, transitions and value distribution.',
  },
  lessons: [
    {
      id: 'zw-circ-1',
      title: 'Circular Business Models in Practice',
      content: {
        ELEMENTARY: `
<h2>Shops That Keep Things Going Round</h2>
<p>Most things we buy follow a straight line: make it, use it, throw it away. A circle is better! In a circle, things get used again and again. Some shops and companies have found ways to earn money by keeping things in the circle instead of selling new things that soon become trash.</p>

<h3>Rent It, Don't Buy It</h3>
<p>Some shops rent things you only need for a little while, like party costumes, tools or even baby clothes that babies grow out of fast. When you are done, you give them back, and the shop cleans them for the next family.</p>
<ul>
<li><strong>Rent:</strong> to pay to use something for a while and then give it back</li>
<li><strong>Repair:</strong> to fix something so it works again</li>
<li><strong>Refill:</strong> to fill the same container again instead of buying a new one</li>
<li><strong>Resell:</strong> to sell something used so someone else can use it</li>
<li><strong>Circle:</strong> a loop where things are used again and again</li>
</ul>

<h3>Fix It and Refill It</h3>
<p>Some companies fix their own products when they break, like phones or jackets. Refill shops let you bring your own bottle for shampoo, soap or juice and fill it up again and again.</p>

<h3>Sell It Again</h3>
<p>Second-hand shops and websites let people sell clothes, toys and books they no longer need. Someone else gets to enjoy them, and no new ones have to be made. Every time something goes round the circle again, we save materials and energy. You can join the circle too, by passing on toys and books you have outgrown or borrowing from a library instead of buying new.</p>
`,
        MIDDLE_SCHOOL: `
<h2>Making Money in a Circle</h2>
<p>A circular economy keeps products and materials in use for as long as possible. That sounds good for the planet, but can it also be good for business? Many companies are proving that it can. They earn money by renting, repairing, refilling, reselling and remaking products rather than only selling new ones. This chapter looks at how these businesses work.</p>

<h3>Product as a Service</h3>
<p>Instead of selling a product, some companies sell its use. A company might lease lighting to an office and charge for the light, keeping ownership of the lamps. Because the company owns them, it has a reason to make them last and to recycle them at the end.</p>
<ul>
<li><strong>Product as a service:</strong> selling the use of a product rather than the product itself</li>
<li><strong>Refurbish:</strong> to clean, repair and upgrade a used product so it works like new</li>
<li><strong>Resale:</strong> selling used products to new owners</li>
<li><strong>Reuse system:</strong> a system where containers are returned, cleaned and used again</li>
<li><strong>Take-back programme:</strong> a company collecting its old products from customers</li>
</ul>

<h3>Repair, Refurbish and Resell</h3>
<p>Some phone and laptop companies buy back old devices, refurbish them and sell them again at a lower price. Clothing brands run repair services and second-hand shops for their own products. Resale websites connect millions of buyers and sellers of used goods.</p>

<h3>Reuse and Refill</h3>
<p>Reusable container services deliver food or groceries in sturdy containers that customers return to be washed and refilled. Some cafés use deposit cups that customers return for a refund.</p>

<h3>The Challenges</h3>
<p>Circular businesses need ways to collect products back, clean and repair them, and keep track of them. These steps cost money, and new products are sometimes cheaper. Companies that succeed design products to be easy to repair and take apart, and they build loyal customers who like the service.</p>
`,
        HIGH_SCHOOL: `
<h2>Circular Business Models: How They Work</h2>
<p>In a linear economy, businesses profit from selling more products, which drives resource use and waste. Circular business models change how value is created so companies can earn money while keeping products and materials circulating. Researchers group them into a few main types. This chapter explains five with examples, along with what makes them succeed or struggle.</p>

<h3>1. Product as a Service</h3>
<p>The company keeps ownership and sells performance: hours of light, kilometres of tyre use or clean clothes from leased washing machines. This aligns incentives, because longer-lasting, efficient products lower the company's own costs.</p>

<h3>2. Reuse and Refill Systems</h3>
<p>Returnable packaging systems, from refillable bottles to reusable takeaway containers, replace single-use packaging. They depend on high return rates; a container must be reused many times before it beats single-use alternatives on environmental impact.</p>
<ul>
<li><strong>Return rate:</strong> the share of reusable items that customers bring back</li>
<li><strong>Remanufacturing:</strong> restoring used products or parts to like-new condition with a warranty</li>
<li><strong>Reverse logistics:</strong> moving products back from customers to companies for reuse or recycling</li>
<li><strong>Sharing platform:</strong> a service that lets many people use the same product</li>
<li><strong>Design for disassembly:</strong> designing products so they can be easily taken apart for repair or recycling</li>
</ul>

<h3>3. Remanufacturing and Refurbishment</h3>
<p>Engines, printer cartridges, medical devices and phones are rebuilt from used parts, often at a fraction of the energy and material needed for new ones. Businesses need reliable supplies of used products, called cores, and good testing.</p>

<h3>4. Resale</h3>
<p>Online platforms and brand-run resale programmes extend product life. Resale has grown rapidly, especially for clothing and electronics.</p>

<h3>5. Sharing</h3>
<p>Car sharing, tool libraries and equipment rental let many users share one product, raising how much each item is used.</p>

<h3>What Makes Them Work</h3>
<p>Success requires reverse logistics to bring products back, products designed for repair and disassembly, and customers willing to change habits. Policies such as deposit-return schemes and right-to-repair laws can help. When these pieces come together, circular models can save customers money, create local repair jobs and cut waste, all at the same time and in the same neighbourhood.</p>
`,
        UNDERGRADUATE: `
<h2>Circular Business Models</h2>
<p>Circular business models (CBMs) describe how organisations create, deliver and capture value while slowing, closing or narrowing resource loops. Slowing loops extends product life (reuse, repair, remanufacture); closing loops recovers materials (recycling); narrowing loops uses fewer resources per product (efficiency). This chapter analyses major CBM archetypes, their value logic and the operational capabilities they require.</p>

<h3>Product-Service Systems</h3>
<p>Product-service systems (PSS) range from product-oriented (maintenance contracts), to use-oriented (leasing, sharing), to result-oriented (selling outcomes such as light or mobility). Result-oriented PSS most strongly align provider incentives with resource efficiency, since the provider bears the costs of energy and materials. Barriers include customer preference for ownership, balance-sheet impacts of retaining assets and risk of customer misuse.</p>
<ul>
<li><strong>Product-service system:</strong> a combination of products and services designed to fulfil customer needs, often with retained ownership</li>
<li><strong>Slowing resource loops:</strong> extending product life through durability, reuse, repair and remanufacturing</li>
<li><strong>Closing resource loops:</strong> recovering materials from end-of-life products for new production</li>
<li><strong>Core:</strong> a used product or part returned for remanufacturing</li>
<li><strong>Cannibalisation:</strong> when sales of refurbished or resale products reduce sales of new products</li>
</ul>

<h3>Reuse, Remanufacturing and Resale</h3>
<p>Reuse systems for packaging require return infrastructure and high trip numbers to outperform single-use alternatives. Remanufacturing depends on core acquisition, quality grading and product designs that allow disassembly and component replacement; it often yields large energy and material savings. Resale and refurbishment create secondary markets, but brands may fear cannibalisation of new sales. Firms that run their own resale capture margins and customer data.</p>

<h3>Sharing and Access</h3>
<p>Sharing models increase utilisation of underused assets. Environmental benefits depend on whether sharing replaces ownership or merely adds new consumption, and on durability of shared products, which wear faster.</p>

<h3>Enablers and Constraints</h3>
<p>Capabilities include reverse logistics, product tracking, design for disassembly and partnerships across the value chain. Economic viability depends on virgin material prices, labour costs for repair and regulations. Extended producer responsibility, deposit-return schemes, public procurement and right-to-repair rules shift incentives toward circular models.</p>

<h3>Measuring Circularity</h3>
<p>Firms track metrics such as material circularity indicators, share of revenue from circular offerings and product lifetime extension. Lifecycle assessment is needed to confirm that circular models actually reduce environmental impacts, rather than shifting them elsewhere.</p>
`,
        GRADUATE: `
<h2>Designing and Scaling Circular Business Models</h2>
<p>Interest in circular business models has grown rapidly, yet many pilots fail to scale. Economic barriers, logistical complexity, measurement gaps and unsupportive policy frameworks constrain diffusion. This chapter examines the economics of circular models, the design of reverse logistics, metrics for performance and the policy environment needed for scale.</p>

<h3>Economics of Circularity</h3>
<p>Circular models change cost structures: retained ownership shifts capital onto provider balance sheets, reverse logistics adds handling costs, and repair and refurbishment are labour-intensive in high-wage economies. Revenues may come from service fees, secondary sales and recovered materials. Viability often hinges on asset utilisation, product durability and residual value. Low virgin material prices and externalised environmental costs disadvantage circular options relative to linear competitors.</p>
<ul>
<li><strong>Residual value:</strong> the value of a product or material at the end of a use cycle</li>
<li><strong>Reverse supply chain:</strong> the processes for collecting, sorting, refurbishing and redistributing returned products</li>
<li><strong>Material circularity indicator:</strong> a metric of how restorative a product's material flows are</li>
<li><strong>Externality:</strong> a cost or benefit affecting others that is not reflected in market prices</li>
<li><strong>Green public procurement:</strong> public purchasing that favours environmentally preferable products and services</li>
</ul>

<h3>Reverse Logistics and Operations</h3>
<p>Reverse supply chains face uncertainty in the timing, quantity and quality of returns. Decisions include collection channels (store returns, mail-back, pickup), grading and routing (reuse, refurbish, remanufacture, recycle) and inventory management for secondary products. Digital tools such as product passports and tracking improve visibility and support quality grading.</p>

<h3>Metrics and Impact Assessment</h3>
<p>Circularity metrics can mislead if they ignore environmental outcomes. A reusable container used too few times or a sharing service that increases consumption may raise impacts. Lifecycle assessment with realistic assumptions about use, return rates and displacement of new products is essential to verify benefits and avoid rebound effects.</p>

<h3>Policy Enablers</h3>
<p>Extended producer responsibility can reward design for reuse and repair through modulated fees. Deposit-return schemes raise return rates for reusable packaging. Right-to-repair laws open access to parts, tools and information. Green public procurement creates demand for product-as-a-service and remanufactured goods. Tax shifts from labour to resource use could improve the economics of repair-intensive models.</p>

<h3>Scaling Pathways</h3>
<p>Successful scaling often involves collaboration among competitors to share reuse infrastructure, standardised containers and pooled logistics, as shown in shared reusable packaging systems. Such collective approaches reduce costs and increase convenience, the main drivers of customer participation.</p>

<h3>Customer Adoption</h3>
<p>Circular offerings succeed when they are as convenient and affordable as linear alternatives. Barriers include concerns about hygiene and quality of used goods, attachment to ownership and uncertainty about service terms. Clear quality grading, warranties on refurbished products, easy return points and transparent pricing build trust and repeat use.</p>
`,
        PHD: `
<h2>Research on Circular Business Models</h2>
<p>Circular business model research has expanded from conceptual typologies to empirical studies of adoption, performance and system-level effects. Key debates concern whether circular models reduce absolute resource use, how to measure circularity meaningfully, how transitions unfold across industries and how value and risk are distributed among actors. This chapter surveys these frontiers.</p>

<h3>Circular Rebound and Absolute Decoupling</h3>
<p>Circular economy rebound occurs when circular activities fail to displace primary production or lower prices that stimulate additional consumption. Secondary products may serve new consumers rather than replace new purchases, and savings from sharing may be spent on other resource-intensive goods. Empirical studies of resale, refurbishment and sharing find displacement rates well below one-for-one in many markets. Research seeks robust methods to estimate displacement and to design business models and policies that achieve absolute reductions in resource use.</p>
<ul>
<li><strong>Circular economy rebound:</strong> when circular activities increase overall production or consumption, offsetting benefits</li>
<li><strong>Displacement rate:</strong> the extent to which a secondary product replaces production of a new one</li>
<li><strong>Absolute decoupling:</strong> economic activity growing while total resource use or impacts fall</li>
<li><strong>Socio-technical transition:</strong> a fundamental shift in technologies, institutions and practices in a sector</li>
<li><strong>Value distribution:</strong> how economic gains and risks are shared among actors in a value chain</li>
</ul>

<h3>Measurement and Evidence</h3>
<p>Firm-level circularity indicators often track material flows without capturing environmental outcomes, while lifecycle assessments rely on uncertain assumptions about use intensity, returns and displacement. Research integrates consequential lifecycle assessment, material flow analysis and economic modelling, and develops indicators that combine circularity with impact. Data scarcity on product lifetimes and secondary market behaviour remains a major constraint.</p>

<h3>Transitions and Organisational Change</h3>
<p>Transition studies analyse how circular models challenge incumbent regimes built around linear sales. Case studies show that incumbents often experiment with circular pilots without changing core business, while new entrants build circular models from the start. Research examines organisational capabilities, business model experimentation and the role of platforms and intermediaries.</p>

<h3>Value Distribution and Justice</h3>
<p>Circular strategies can shift work toward repair and reverse logistics, sometimes in low-wage or informal sectors, including waste pickers in the Global South whose livelihoods depend on materials. Research asks who captures value in circular systems, how labour conditions change and how global trade in used goods and recyclables affects importing countries.</p>

<h3>Policy Research</h3>
<p>Evaluations of right-to-repair laws, modulated extended producer responsibility fees and reuse mandates are emerging. Comparative policy analysis and natural experiments could clarify which instruments shift business models at scale without unintended consequences.</p>

<h3>Digital Infrastructure</h3>
<p>Digital product passports, tracking technologies and data platforms promise to make products' materials, repair histories and condition visible across their lives. Research examines whether such tools lower transaction costs for reuse and remanufacturing, how data access should be governed and whether they create new barriers for small repairers and informal actors.</p>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'zw-circ2-q1',
      question: {
        ELEMENTARY: 'What is better than making, using and throwing away?',
        MIDDLE_SCHOOL: 'What is "product as a service"?',
        HIGH_SCHOOL: 'Why does product-as-a-service align incentives with resource efficiency?',
        UNDERGRADUATE: 'Which type of product-service system most strongly aligns provider incentives with efficiency?',
        GRADUATE: 'Why can retained ownership be a barrier for circular providers?',
        PHD: 'What is circular economy rebound?',
      },
      options: {
        ELEMENTARY: ['Throwing things away faster', 'A circle where things are used again and again', 'Buying more new things', 'Hiding old things'],
        MIDDLE_SCHOOL: ['Giving products away free', 'Selling the use of a product rather than the product itself', 'Selling only services with no products', 'Throwing products away'],
        HIGH_SCHOOL: ['The customer pays for repairs', 'Longer-lasting, efficient products lower the company\'s own costs', 'Products are made cheaper', 'It removes the need for products'],
        UNDERGRADUATE: ['Product-oriented', 'Result-oriented', 'Use-oriented', 'Material-oriented'],
        GRADUATE: ['It lowers labour costs', 'It shifts capital onto the provider\'s balance sheet', 'It eliminates logistics', 'It removes customers'],
        PHD: ['Products bouncing back from walls', 'Circular activities that increase overall production or consumption', 'A recycling machine', 'Lower demand for everything'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'A circle keeps things in use instead of throwing them away.',
        MIDDLE_SCHOOL: 'Product as a service sells the use of something while the company keeps it.',
        HIGH_SCHOOL: 'Because the company owns the product, durability and efficiency save it money.',
        UNDERGRADUATE: 'Result-oriented models sell outcomes, so the provider bears resource costs.',
        GRADUATE: 'Owning assets ties up capital on the provider\'s balance sheet.',
        PHD: 'Rebound happens when circular activities stimulate more production or consumption.',
      },
    },
    {
      id: 'zw-circ2-q2',
      question: {
        ELEMENTARY: 'What does a refill shop let you do?',
        MIDDLE_SCHOOL: 'What does a take-back programme do?',
        HIGH_SCHOOL: 'Why do reuse systems need high return rates?',
        UNDERGRADUATE: 'What is a "core" in remanufacturing?',
        GRADUATE: 'What uncertainties do reverse supply chains face?',
        PHD: 'What have empirical studies found about displacement rates for resale and sharing?',
      },
      options: {
        ELEMENTARY: ['Throw bottles away', 'Buy a new bottle every time', 'Fill your own bottle again', 'Break bottles'],
        MIDDLE_SCHOOL: ['Sells new products only', 'Throws products into the ocean', 'Collects old products from customers', 'Hides products'],
        HIGH_SCHOOL: ['Return rates do not matter', 'Single-use is always better', 'Containers must be reused many times to beat single-use', 'Customers keep containers forever'],
        UNDERGRADUATE: ['A product\'s centre', 'A recycling bin', 'A used product or part returned for remanufacturing', 'A new product'],
        GRADUATE: ['Only weather', 'Only prices', 'Timing, quantity and quality of returns', 'None'],
        PHD: ['Exactly one-for-one everywhere', 'Always above two', 'Often well below one-for-one', 'Zero in all markets'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Refill shops let you fill the same bottle again and again.',
        MIDDLE_SCHOOL: 'Take-back programmes collect old products for reuse or recycling.',
        HIGH_SCHOOL: 'Each reusable item must make many trips to outperform single-use.',
        UNDERGRADUATE: 'A core is a used product or part sent back to be remanufactured.',
        GRADUATE: 'Returns vary in timing, amount and condition, complicating planning.',
        PHD: 'Secondary products often fail to fully replace new purchases.',
      },
    },
    {
      id: 'zw-circ2-q3',
      question: {
        ELEMENTARY: 'Why do some shops rent baby clothes?',
        MIDDLE_SCHOOL: 'What does refurbish mean?',
        HIGH_SCHOOL: 'What is reverse logistics?',
        UNDERGRADUATE: 'What is "slowing resource loops"?',
        GRADUATE: 'What can lifecycle assessment reveal about circular models?',
        PHD: 'How do incumbents often approach circular business models, according to case studies?',
      },
      options: {
        ELEMENTARY: ['Babies grow out of clothes fast', 'Baby clothes are made of gold', 'Babies never wear clothes', 'Shops do not like babies'],
        MIDDLE_SCHOOL: ['To clean, repair and upgrade a used product so it works like new', 'To throw away', 'To paint a wall', 'To melt down'],
        HIGH_SCHOOL: ['Moving products back from customers to companies', 'Driving backwards', 'Shipping only new products', 'Delivering mail'],
        UNDERGRADUATE: ['Extending product life through durability, reuse, repair and remanufacturing', 'Speeding up production', 'Burning waste', 'Using more materials'],
        GRADUATE: ['Whether a circular model actually reduces environmental impacts', 'A product\'s colour', 'Customer names', 'Store locations'],
        PHD: ['Experimenting with pilots without changing core business', 'Abandoning all linear sales immediately', 'Ignoring circularity entirely', 'Closing their companies'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Babies grow fast, so renting clothes saves money and materials.',
        MIDDLE_SCHOOL: 'Refurbishing cleans, repairs and upgrades used products.',
        HIGH_SCHOOL: 'Reverse logistics brings products back for reuse or recycling.',
        UNDERGRADUATE: 'Slowing loops keeps products in use longer.',
        GRADUATE: 'LCA checks whether circular approaches really lower impacts.',
        PHD: 'Many incumbents run pilots while their core business stays linear.',
      },
    },
    {
      id: 'zw-circ2-q4',
      question: {
        ELEMENTARY: 'What does "repair" mean?',
        MIDDLE_SCHOOL: 'What is a challenge for circular businesses?',
        HIGH_SCHOOL: 'What is design for disassembly?',
        UNDERGRADUATE: 'Why might brands fear running resale of their own products?',
        GRADUATE: 'How can extended producer responsibility support circular models?',
        PHD: 'Why is value distribution a justice issue in circular systems?',
      },
      options: {
        ELEMENTARY: ['To break something', 'To paint something', 'To hide something', 'To fix something so it works again'],
        MIDDLE_SCHOOL: ['There are too many customers', 'Products are always free', 'Nobody wants used products', 'Collecting, cleaning and repairing products costs money'],
        HIGH_SCHOOL: ['Making products impossible to open', 'Gluing everything together', 'Selling products in pieces', 'Designing products to be easily taken apart'],
        UNDERGRADUATE: ['Resale is illegal', 'Resale has no customers', 'Used goods are too expensive', 'Cannibalisation of new product sales'],
        GRADUATE: ['By banning recycling', 'By lowering all fees equally', 'By ending producer obligations', 'By modulated fees that reward reuse and repair design'],
        PHD: ['Everyone benefits equally', 'Value is never created', 'Only machines are affected', 'Work may shift to low-wage or informal sectors such as waste pickers'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Repairing means fixing something so it works again.',
        MIDDLE_SCHOOL: 'Collecting, cleaning and repairing products adds costs.',
        HIGH_SCHOOL: 'Design for disassembly makes products easy to take apart.',
        UNDERGRADUATE: 'Cheaper used goods may reduce sales of new ones.',
        GRADUATE: 'Fees that vary by design reward products that are easier to reuse and repair.',
        PHD: 'Repair and recovery work may be poorly paid or informal, raising justice concerns.',
      },
    },
    {
      id: 'zw-circ2-q5',
      question: {
        ELEMENTARY: 'What happens each time something goes round the circle again?',
        MIDDLE_SCHOOL: 'What is a reuse system?',
        HIGH_SCHOOL: 'Which policies can help circular businesses?',
        UNDERGRADUATE: 'When do sharing models deliver environmental benefits?',
        GRADUATE: 'What collective approach helps scale reusable packaging?',
        PHD: 'What is absolute decoupling?',
      },
      options: {
        ELEMENTARY: ['We use more plastic', 'We save materials and energy', 'Things get heavier', 'Nothing happens'],
        MIDDLE_SCHOOL: ['Buying new containers each time', 'Containers are returned, cleaned and used again', 'Burning containers', 'Hiding containers'],
        HIGH_SCHOOL: ['Bans on repair', 'Deposit-return schemes and right-to-repair laws', 'Taxes on reuse', 'Single-use mandates'],
        UNDERGRADUATE: ['Always, no matter what', 'When they replace ownership rather than add consumption', 'Never', 'Only for food'],
        GRADUATE: ['Each firm building separate systems', 'Shared infrastructure and standardised containers', 'Avoiding all collaboration', 'Using only single-use packaging'],
        PHD: ['Resource use growing faster than the economy', 'Economic activity growing while total resource use falls', 'Separating recycling bins', 'Removing all trade'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Using things again saves materials and energy.',
        MIDDLE_SCHOOL: 'Reuse systems collect, clean and reuse containers.',
        HIGH_SCHOOL: 'Deposits and right-to-repair laws make circular models easier.',
        UNDERGRADUATE: 'Sharing helps when it replaces owning, not when it adds new consumption.',
        GRADUATE: 'Pooled infrastructure and standard containers cut costs and raise convenience.',
        PHD: 'Absolute decoupling means growth with falling total resource use.',
      },
    },
  ],
}

export default expansion
