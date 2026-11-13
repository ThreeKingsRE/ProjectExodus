import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'zero-waste',
  moduleKey: 'extended-producer-responsibility',
  lessons: [
    {
      id: 'zw-epr-1',
      title: 'Producer Responsibility: Who Pays for the Trash?',
      content: {
        ELEMENTARY: `
<h2>Who Should Clean Up After a Toy?</h2>
<p>Imagine you borrow a friend's paint set. When you are finished, you clean the brushes and put the lids back on. That is being responsible! Some people think companies that make things should do the same: help clean up after their products when we are done with them.</p>

<h3>Where Does Stuff Go When We Are Done?</h3>
<p>Every day we use things that come in boxes, bottles and wrappers. When a toy breaks or a juice bottle is empty, it often goes in a bin. Then a town or city has to pay workers and trucks to collect it. Right now, lots of that cost is paid by towns, not by the companies that made the stuff.</p>
<ul>
<li><strong>Producer:</strong> the company that makes or sells a product, like a toy maker or juice company</li>
<li><strong>Packaging:</strong> the box, bottle, bag or wrapper that a product comes in</li>
<li><strong>Recycling:</strong> turning old things into materials that can be used to make new things</li>
</ul>

<h3>A Fair Idea</h3>
<p>Extended producer responsibility is a long name for a simple idea: the company that makes something should help take care of it at the end. When companies have to pay for the trash their products make, they start to think hard about making less of it. They might use less packaging, or make bottles that are easier to recycle.</p>
<ul>
<li><strong>Deposit:</strong> a little extra money you pay for a bottle that you get back when you return it</li>
<li><strong>Take-back:</strong> when a store or company collects old products so they can be reused or recycled</li>
<li><strong>Responsibility:</strong> taking care of something you made or used instead of leaving it for others</li>
</ul>

<h3>Things You Can Do</h3>
<ol>
<li>Return bottles and cans if your area has a deposit, and get your money back.</li>
<li>Look for the recycling symbol on packages and help sort them at home.</li>
<li>Ask a grown-up to take old batteries back to a store collection box.</li>
<li>Choose toys and snacks with less packaging when you can.</li>
</ol>

<h3>Think About It</h3>
<p>If you had to clean up every wrapper from your own lunch, would you pack your lunch differently? Companies are being asked that same question. Taking care of what we make is something everyone, big and small, can do!</p>
`,
        MIDDLE_SCHOOL: `
<h2>Making Producers Part of the Solution</h2>
<p>For a long time, the job of handling waste belonged almost entirely to cities and towns. Companies designed products and packaging, sold them, and never thought about them again. Extended producer responsibility, or EPR, changes that by stretching a company's responsibility past the moment of sale, all the way to the end of a product's life.</p>

<h3>How Does EPR Work?</h3>
<p>Under an EPR law, a company that sells certain products, such as packaging, batteries or electronics, must help pay for collecting and recycling them. Most companies do not run their own recycling trucks. Instead, they join a group that organizes collection and recycling for many companies at once and pays for it with fees from its members.</p>
<ol>
<li>A company puts a product or package on the market.</li>
<li>It reports how much material it sold and pays a fee.</li>
<li>The fees fund collection bins, sorting centers and recycling.</li>
<li>Companies with easier-to-recycle designs may pay lower fees.</li>
</ol>

<h3>Key Words</h3>
<ul>
<li><strong>Extended producer responsibility:</strong> a policy that makes producers responsible for their products after customers are finished with them</li>
<li><strong>End of life:</strong> the stage when a product is used up, broken or no longer wanted</li>
<li><strong>Producer responsibility organization:</strong> a group that collects fees from many companies and organizes recycling on their behalf</li>
<li><strong>Deposit return system:</strong> a program where you pay a small deposit on a drink container and get it back when you return it</li>
<li><strong>Take-back program:</strong> a service where a seller or maker accepts old products for reuse or recycling</li>
<li><strong>Recyclability:</strong> how easily a product or package can actually be collected, sorted and made into something new</li>
</ul>

<h3>Products Often Covered by EPR</h3>
<table>
<thead><tr><th>Product</th><th>Why it needs special care</th></tr></thead>
<tbody>
<tr><td>Packaging</td><td>Huge amounts are thrown away every day</td></tr>
<tr><td>Electronics</td><td>Contain valuable metals and some harmful substances</td></tr>
<tr><td>Batteries</td><td>Can leak chemicals or cause fires in garbage trucks</td></tr>
<tr><td>Tires</td><td>Bulky, and dumped tires can collect water and breed mosquitoes</td></tr>
<tr><td>Paint</td><td>Leftover paint can pollute soil and water if poured away</td></tr>
</tbody>
</table>

<h3>Why It Matters</h3>
<p>EPR does two jobs. First, it moves the cost of waste from taxpayers to the companies and customers who actually use the products. Second, and maybe more important, it gives designers a reason to make products that create less waste. When a company pays for its own trash, cutting that trash saves it money.</p>
`,
        HIGH_SCHOOL: `
<h2>Extended Producer Responsibility in Practice</h2>
<p>Extended producer responsibility is a policy approach in which the companies that design and sell products take on financial and sometimes physical responsibility for those products after use. It grew out of a simple observation: the people who decide how a product is made are not the people who pay to manage its waste. EPR tries to connect those two decisions.</p>

<h3>The Problem EPR Tries to Fix</h3>
<p>In a typical system, a beverage company chooses a bottle design, a retailer sells it, and a city pays to collect and process the empty bottle. Because the producer never sees the waste bill, it has little reason to choose a material that is easy to recycle. Economists call this an <em>externality</em>: a cost that falls on someone outside the transaction.</p>

<h3>Common EPR Programs</h3>
<table>
<thead><tr><th>Program type</th><th>Typical products</th><th>How it works</th></tr></thead>
<tbody>
<tr><td>Packaging EPR</td><td>Boxes, bottles, films, cans</td><td>Producers pay fees that fund curbside or drop-off collection and sorting</td></tr>
<tr><td>E-waste take-back</td><td>Computers, phones, TVs</td><td>Producers fund collection sites and certified recyclers</td></tr>
<tr><td>Deposit return</td><td>Drink containers</td><td>Customers pay a refundable deposit, which raises return rates</td></tr>
<tr><td>Special products</td><td>Tires, batteries, paint, mattresses</td><td>Collection networks for items that are bulky, hazardous or hard to recycle</td></tr>
</tbody>
</table>

<h3>Key Terms</h3>
<ul>
<li><strong>Externality:</strong> a cost or benefit that affects people who did not choose it, such as a city paying for a company's packaging waste</li>
<li><strong>Producer responsibility organization:</strong> a nonprofit or company that manages collection and recycling for many producers using their fees</li>
<li><strong>Eco-modulation:</strong> charging lower fees for products that are easier to reuse or recycle and higher fees for problem materials</li>
<li><strong>Collection target:</strong> a required share of products sold that must be gathered back for recycling</li>
<li><strong>Free rider:</strong> a company that sells products but avoids paying its share of the program</li>
<li><strong>Design for recycling:</strong> choosing materials, colors and labels so a product can be sorted and recycled easily</li>
</ul>

<h3>Benefits and Trade-offs</h3>
<p>Where EPR is well designed, it tends to raise collection and recycling rates and provides stable funding for recycling programs. It can also nudge companies toward lighter, simpler packaging. But EPR has limits. Fees may be too small to change designs, costs are often passed on to customers in prices, and programs can focus on recycling rather than on reducing or reusing products. Enforcement matters too: online sellers based overseas can be hard to bring into the system.</p>

<h3>What Makes a Good Program?</h3>
<ol>
<li>Clear rules about which products and which companies are covered.</li>
<li>Fees that reward better design, not just a flat charge per item.</li>
<li>Convenient collection for everyone, including rural and apartment residents.</li>
<li>Public reporting so people can see whether targets are met.</li>
<li>Room for reuse and repair, not only recycling.</li>
</ol>
`,
        UNDERGRADUATE: `
<h2>Designing Extended Producer Responsibility Policy</h2>
<p>Extended producer responsibility is an environmental policy principle that assigns producers responsibility, financial, physical or informational, for the post-consumer stage of their products. In economic terms it internalizes end-of-life costs that would otherwise fall on municipalities and taxpayers. In design terms it creates a feedback loop from the waste stream back to the product development process. How strong that loop is depends almost entirely on policy design.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Cost internalization:</strong> shifting the cost of managing a product's waste into the price paid by its producer and users</li>
<li><strong>Individual producer responsibility:</strong> an arrangement in which each producer bears the end-of-life costs of its own branded products</li>
<li><strong>Collective producer responsibility:</strong> an arrangement in which producers pool costs through a shared organization, usually by market share or weight sold</li>
<li><strong>Eco-modulated fee:</strong> a fee that varies with design attributes such as recyclability, recycled content or hazardous substances</li>
<li><strong>Orphan products:</strong> products whose producer no longer exists or cannot be identified, whose costs must still be covered</li>
<li><strong>Performance target:</strong> a legally required outcome such as a collection, recycling or reuse rate</li>
</ul>

<h3>Policy Instruments Within EPR</h3>
<table>
<thead><tr><th>Instrument</th><th>Mechanism</th><th>Strength</th><th>Weakness</th></tr></thead>
<tbody>
<tr><td>Take-back mandate</td><td>Producers must accept returned products</td><td>Direct physical responsibility</td><td>Convenience varies widely</td></tr>
<tr><td>Advance disposal fee</td><td>Fee charged at sale funds end-of-life management</td><td>Simple to administer</td><td>Weak design signal if flat</td></tr>
<tr><td>Deposit-refund</td><td>Refundable deposit paid at purchase</td><td>High return rates, clean material</td><td>Needs return infrastructure</td></tr>
<tr><td>Recycled content standard</td><td>Minimum share of recycled material in new products</td><td>Creates demand for recyclate</td><td>Can be hard to verify</td></tr>
<tr><td>Eco-modulated fees</td><td>Fees scaled by design attributes</td><td>Rewards better design</td><td>Complex criteria, risk of gaming</td></tr>
</tbody>
</table>

<h3>Fee Structures and Incentives</h3>
<p>Most packaging programs charge fees per unit of weight for each material category. Weight-based fees encourage lightweighting, but they can also push producers toward light multilayer materials that are harder to recycle than heavier mono-materials. Eco-modulation tries to correct this by adding a bonus or penalty linked to recyclability. The incentive only works if the fee difference is large compared with the cost of redesign; a small modulation may be absorbed as a cost of doing business.</p>
<p>Collective schemes are cheaper to run and handle orphan products easily, but they dilute the design signal: a producer that improves its packaging shares the savings with every competitor in its material category. Individual responsibility preserves the signal but requires tracing products by brand, which is costly for small, mixed items.</p>

<h3>Governance Questions</h3>
<p>Who controls the producer responsibility organization matters. Producer-run organizations know their supply chains but may resist ambitious targets; government-led oversight improves accountability but can be slower. Strong programs typically combine producer funding with independent oversight, audited data, public reporting and penalties for free riders.</p>

<h3>Evaluating a Program: A Checklist</h3>
<ol>
<li>Define scope: which products, which producers, and which end-of-life services are funded.</li>
<li>Check whether fees cover the full net cost of collection, sorting and processing.</li>
<li>Test the design signal: would a realistic redesign change a producer's fee meaningfully?</li>
<li>Examine targets: are they measured at collection, at sorting, or at actual recycling?</li>
<li>Look for reuse and reduction incentives, not only recycling outcomes.</li>
<li>Review governance: oversight, data transparency and enforcement against free riders.</li>
</ol>
`,
        GRADUATE: `
<h2>Evaluating Extended Producer Responsibility Systems</h2>
<p>EPR is now one of the most widely adopted waste policy tools in the world. The concept was articulated in Sweden around 1990, and Germany's packaging ordinance in the early 1990s became an influential early model that shifted packaging costs to industry. Since then, EPR has spread across Europe, East Asia, Canada and Latin America, and a growing number of US states have adopted packaging EPR laws. With diffusion has come variation, and with variation, a large body of experience about what makes EPR effective.</p>

<h3>Dimensions of Effectiveness</h3>
<ul>
<li><strong>Environmental effectiveness:</strong> measurable changes in collection, recycling, reuse and waste prevention attributable to the program</li>
<li><strong>Cost effectiveness:</strong> the cost of achieving those outcomes compared with alternative policies</li>
<li><strong>Upstream design effect:</strong> the degree to which the program changes product and packaging design rather than only funding downstream management</li>
<li><strong>Additionality:</strong> the extent to which outcomes would not have happened without the policy</li>
<li><strong>Policy diffusion:</strong> the spread of a policy model from one jurisdiction to others, often with local adaptation</li>
<li><strong>Regulatory capture:</strong> a situation in which regulated industries gain undue influence over the rules and bodies meant to oversee them</li>
</ul>

<h3>International Models</h3>
<table>
<thead><tr><th>Model</th><th>Typical features</th><th>Key lesson</th></tr></thead>
<tbody>
<tr><td>Single national PRO</td><td>One producer-funded organization per product stream</td><td>Economies of scale, but limited competition and possible capture</td></tr>
<tr><td>Competing PROs</td><td>Several organizations compete for producer members</td><td>Lower fees, but risk of cost cutting and cherry-picking easy materials</td></tr>
<tr><td>Government-run fund</td><td>Producers pay fees into a public fund</td><td>Strong accountability, weaker producer engagement in design</td></tr>
<tr><td>Deposit systems</td><td>Separate system for beverage containers</td><td>Very high return rates and clean streams for closed-loop recycling</td></tr>
</tbody>
</table>
<p>Comparative evidence suggests that EPR reliably improves collection and funding stability, while its effect on upstream design is more modest. Design change is strongest where fees are differentiated, targets include reuse, and producers face direct costs rather than averaged ones.</p>

<h3>Design Incentives and Their Limits</h3>
<p>Eco-modulation has become the main tool for strengthening the design signal. Criteria often reward mono-materials, recycled content and compatibility with sorting systems, and penalize problematic additives, dark plastics that optical sorters miss, or non-recyclable composites. Challenges include setting criteria that keep up with technology, preventing producers from optimizing to the scoring rules rather than real outcomes, and harmonizing criteria across jurisdictions so multinational producers face consistent signals.</p>

<h3>Equity and Distributional Issues</h3>
<p>EPR redistributes costs from municipal budgets to producers and, through prices, to consumers. This can relieve under-resourced municipalities, but program design determines whether rural, low-income and multi-family households receive equal service. In many countries, informal waste pickers already perform much of the collection; EPR can either displace them or formally integrate and pay them for that work.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Establish a baseline and counterfactual before attributing outcomes to EPR.</li>
<li>Separate downstream outcomes (collection, recycling) from upstream outcomes (design change, prevention).</li>
<li>Audit data quality, especially the gap between collected and actually recycled material.</li>
<li>Assess governance: PRO structure, oversight, transparency and dispute resolution.</li>
<li>Analyze who gains and loses, including municipalities, consumers and informal workers.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in Extended Producer Responsibility</h2>
<p>EPR research has moved from documenting program outcomes to analyzing EPR as a complex adaptive system in which producers, producer responsibility organizations, recyclers, municipalities, regulators and consumers interact. The central research puzzle is why EPR so consistently improves collection while producing only moderate upstream design change, and how instruments and institutions could be designed to close that gap.</p>

<h3>Analytical Approaches</h3>
<ul>
<li><strong>System dynamics modeling:</strong> simulating stocks and flows of products, materials and money with feedback loops and delays to explore long-run program behavior</li>
<li><strong>Principal-agent analysis:</strong> studying how regulators can steer producer organizations whose interests and information differ from their own</li>
<li><strong>Mechanism design:</strong> an approach that designs rules and fees so that self-interested producers choose socially preferred products</li>
<li><strong>Quasi-experimental evaluation:</strong> methods such as difference-in-differences that estimate policy effects by comparing jurisdictions or periods</li>
<li><strong>Dynamic material flow analysis:</strong> modeling material stocks in use and their future release as waste to anticipate program needs</li>
<li><strong>Socio-technical transition theory:</strong> a framework that explains how regimes of technology, markets and rules change over time</li>
</ul>

<h3>System Dynamics of EPR</h3>
<p>EPR systems contain reinforcing and balancing loops. Higher collection funding can improve sorting technology, raising recyclate quality and value, which lowers net program costs and supports higher targets. Balancing loops include producers lightweighting in ways that reduce recyclability, falling commodity prices that raise net costs, and long product lifetimes that delay the arrival of redesigned products in the waste stream. Delays between design changes and end-of-life outcomes, sometimes years for durable goods, make it difficult to observe or reward design improvements within a policy cycle.</p>

<h3>Optimizing Fee Design</h3>
<p>A key methodological question is how to set modulated fees that reflect marginal environmental and management costs. Approaches include cost-based fees derived from processing data, impact-based fees derived from life-cycle assessment, and target-based fees adjusted iteratively to achieve a desired design mix. Each raises issues of information asymmetry: producers know their redesign costs, while regulators and organizations know system costs. Mechanism design suggests that menus of fees or tradable obligations can reveal private cost information, but empirical tests remain limited.</p>

<h3>Contested Questions</h3>
<table>
<thead><tr><th>Question</th><th>Why it is contested</th></tr></thead>
<tbody>
<tr><td>Individual versus collective responsibility</td><td>Trade-off between design signal strength and administrative cost</td></tr>
<tr><td>Competition among producer organizations</td><td>Competition may lower costs but erode service quality and data integrity</td></tr>
<tr><td>Counting chemical recycling and energy recovery</td><td>Definitions of recycling shape which technologies EPR funds</td></tr>
<tr><td>Role of informal waste workers</td><td>Integration can improve livelihoods or displace existing workers</td></tr>
<tr><td>EPR for prevention and reuse</td><td>Fees designed around recycling may not reward reduction or reuse systems</td></tr>
</tbody>
</table>

<h3>Policy Innovation</h3>
<p>Emerging designs include reuse targets and funding for shared reusable packaging pools, EPR for textiles and furniture, digital product information to trace products by brand, and modulation linked to measured outcomes rather than design checklists. Cross-border e-commerce raises questions of jurisdiction and enforcement that research on platform liability is beginning to address.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Causal estimates of upstream design change attributable to fee modulation.</li>
<li>Models linking product lifetimes, design delays and policy evaluation horizons.</li>
<li>Comparative institutional analysis of producer organization governance and capture.</li>
<li>Methods to value prevention and reuse within EPR financing.</li>
<li>Just transition frameworks for integrating informal collection into formal EPR systems.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'zweprq1',
      question: {
        ELEMENTARY: 'What happens when you return a bottle with a deposit?',
        MIDDLE_SCHOOL: 'What does EPR stand for?',
        HIGH_SCHOOL: 'Why do economists call a city paying for a company\'s packaging waste an externality?',
        UNDERGRADUATE: 'What is an eco-modulated fee?',
        GRADUATE: 'What does comparative evidence suggest EPR most reliably improves?',
        PHD: 'Why do delays make EPR design effects hard to observe?',
      },
      options: {
        ELEMENTARY: ['You get your money back', 'Nothing happens', 'You pay more money', 'The bottle goes to the landfill'],
        MIDDLE_SCHOOL: ['Extended Producer Responsibility', 'Extra Packaging Required', 'Environmental Protection Rules', 'Energy Power Reduction'],
        HIGH_SCHOOL: ['The cost falls on someone outside the sale of the product', 'The cost is paid by the producer directly', 'The packaging is made outside the country', 'The city earns a profit from it'],
        UNDERGRADUATE: ['A fee that varies with design attributes such as recyclability or hazardous content', 'A flat fee charged equally on every product', 'A fee paid only by governments', 'A fine for littering'],
        GRADUATE: ['Collection and stable funding for recycling', 'Elimination of all packaging', 'Lower prices for every product', 'Complete redesign of every product'],
        PHD: ['Redesigned durable products may not reach the waste stream for years', 'Products never become waste', 'Fees are always set too high', 'Producers report data instantly'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'When you bring the bottle back, you get your deposit money back and the bottle can be recycled.',
        MIDDLE_SCHOOL: 'EPR means Extended Producer Responsibility: producers help take care of products at the end of their life.',
        HIGH_SCHOOL: 'The producer chooses the packaging, but the city pays to manage it, so the cost lands on someone outside the transaction.',
        UNDERGRADUATE: 'Eco-modulation scales fees by design, rewarding recyclable products and penalizing problem materials.',
        GRADUATE: 'EPR consistently raises collection and funding stability, while upstream design change is more modest.',
        PHD: 'Long product lifetimes create delays between design change and end-of-life outcomes, beyond typical policy cycles.',
      },
    },
    {
      id: 'zweprq2',
      question: {
        ELEMENTARY: 'Who is a producer?',
        MIDDLE_SCHOOL: 'What does a producer responsibility organization do?',
        HIGH_SCHOOL: 'What is a free rider in an EPR program?',
        UNDERGRADUATE: 'Why can weight-based fees sometimes work against recyclability?',
        GRADUATE: 'What is a risk of having several competing producer organizations?',
        PHD: 'What is the goal of mechanism design in EPR fee setting?',
      },
      options: {
        ELEMENTARY: ['The person who drives the garbage truck', 'The company that makes or sells a product', 'A tree in the park', 'A kind of recycling bin'],
        MIDDLE_SCHOOL: ['It sells new toys', 'It collects fees from many companies and organizes recycling for them', 'It writes school textbooks', 'It builds landfills for free'],
        HIGH_SCHOOL: ['A company that pays extra to help others', 'A company that sells products but avoids paying its share', 'A cyclist who collects bottles', 'A government inspector'],
        UNDERGRADUATE: ['Heavy materials are always harder to recycle', 'They can push producers toward light multilayer materials that are hard to recycle', 'Weight cannot be measured', 'They encourage producers to add weight'],
        GRADUATE: ['They always raise fees sharply', 'Cost cutting and cherry-picking easy materials', 'They eliminate all data reporting', 'They ban deposit systems'],
        PHD: ['To remove all fees from the system', 'To design rules and fees so self-interested producers choose socially preferred products', 'To let producers set their own targets with no oversight', 'To measure only landfill volumes'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'A producer is the company that makes or sells something, like a toy maker or a juice company.',
        MIDDLE_SCHOOL: 'Producer responsibility organizations pool fees from many companies to pay for collection and recycling.',
        HIGH_SCHOOL: 'Free riders benefit from the system without paying, which is unfair to companies that do pay.',
        UNDERGRADUATE: 'Charging by weight rewards lightness, and light multilayer packs are often less recyclable than heavier mono-materials.',
        GRADUATE: 'Competition can lower fees but may lead organizations to cut service or focus on the cheapest materials.',
        PHD: 'Mechanism design aligns private incentives with social goals, for example through fee menus that reveal private cost information.',
      },
    },
    {
      id: 'zweprq3',
      question: {
        ELEMENTARY: 'What might a company do if it has to pay for its trash?',
        MIDDLE_SCHOOL: 'Why are batteries often included in EPR programs?',
        HIGH_SCHOOL: 'Which of these is a common EPR product group?',
        UNDERGRADUATE: 'What is a strength of collective producer responsibility?',
        GRADUATE: 'What is regulatory capture?',
        PHD: 'Why is the definition of recycling contested in EPR research?',
      },
      options: {
        ELEMENTARY: ['Use even more wrappers', 'Throw things in the river', 'Use less packaging and make things easier to recycle', 'Stop making anything at all'],
        MIDDLE_SCHOOL: ['They are too light to collect', 'They are made of paper', 'They can leak chemicals or cause fires in garbage trucks', 'They are always reused'],
        HIGH_SCHOOL: ['Fresh fruit', 'Garden soil', 'Tires, batteries and paint', 'Tap water'],
        UNDERGRADUATE: ['It gives each producer a perfectly individual price signal', 'It requires tracing every item by brand', 'It is cheaper to run and handles orphan products easily', 'It eliminates the need for any fees'],
        GRADUATE: ['When regulators take over all factories', 'When products are captured by sorting machines', 'When regulated industries gain undue influence over the rules meant to oversee them', 'When recycling targets are met early'],
        PHD: ['Everyone already agrees on one definition', 'Recycling is never measured', 'Whether chemical recycling or energy recovery counts shapes which technologies EPR funds', 'Definitions do not affect funding'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Paying for trash gives companies a reason to make less of it, like using smaller or recyclable packaging.',
        MIDDLE_SCHOOL: 'Batteries need special handling because they can leak harmful chemicals or start fires.',
        HIGH_SCHOOL: 'Tires, batteries and paint are bulky or hazardous, so many places run EPR programs for them.',
        UNDERGRADUATE: 'Pooling costs lowers administration and covers products whose makers are gone, though it weakens the design signal.',
        GRADUATE: 'Capture happens when industry shapes the oversight bodies and rules in its own favor.',
        PHD: 'What counts as recycling decides which processes receive EPR funding and how targets are met.',
      },
    },
    {
      id: 'zweprq4',
      question: {
        ELEMENTARY: 'What is packaging?',
        MIDDLE_SCHOOL: 'What is the stage called when a product is used up or no longer wanted?',
        HIGH_SCHOOL: 'Which feature makes an EPR program stronger?',
        UNDERGRADUATE: 'Why might a small eco-modulation have little effect?',
        GRADUATE: 'Why must evaluators separate downstream and upstream outcomes?',
        PHD: 'What does dynamic material flow analysis help EPR planners anticipate?',
      },
      options: {
        ELEMENTARY: ['A kind of fruit', 'A game you play outside', 'A song about recycling', 'The box, bottle or wrapper a product comes in'],
        MIDDLE_SCHOOL: ['The beginning of life', 'The factory stage', 'The shopping stage', 'End of life'],
        HIGH_SCHOOL: ['Keeping fee data secret', 'Charging the same flat fee to every product', 'Leaving out online sellers', 'Fees that reward better design and public reporting'],
        UNDERGRADUATE: ['It is illegal in most places', 'It makes products heavier', 'It removes all funding', 'Producers may absorb the fee difference rather than pay for redesign'],
        GRADUATE: ['They are always identical', 'Upstream outcomes cannot exist', 'Downstream outcomes are never measured', 'Collection gains do not show whether products were actually redesigned or waste prevented'],
        PHD: ['Daily weather patterns', 'Consumer brand loyalty', 'Stock market prices', 'Future release of products in use as waste'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Packaging is what a product comes in, like a box, bottle, bag or wrapper.',
        MIDDLE_SCHOOL: 'End of life is when a product is finished being used and needs to be reused, recycled or thrown away.',
        HIGH_SCHOOL: 'Design-based fees and public reporting give companies reasons to improve and let people check results.',
        UNDERGRADUATE: 'If redesign costs more than the fee saving, producers simply pay the higher fee.',
        GRADUATE: 'Funding more collection is different from changing product design or preventing waste in the first place.',
        PHD: 'Dynamic material flow analysis models stocks in use and when they will become waste.',
      },
    },
    {
      id: 'zweprq5',
      question: {
        ELEMENTARY: 'What can you do to help with old batteries?',
        MIDDLE_SCHOOL: 'Who mainly paid for handling waste before EPR?',
        HIGH_SCHOOL: 'What is a common criticism of EPR programs?',
        UNDERGRADUATE: 'What is an orphan product?',
        GRADUATE: 'How can EPR affect informal waste pickers?',
        PHD: 'What trade-off is central to the individual versus collective responsibility debate?',
      },
      options: {
        ELEMENTARY: ['Ask a grown-up to take them to a store collection box', 'Put them in the garden', 'Throw them in a lake', 'Hide them under the bed'],
        MIDDLE_SCHOOL: ['Cities, towns and taxpayers', 'Only the companies that made the products', 'Nobody paid anything', 'Only schools'],
        HIGH_SCHOOL: ['They may focus on recycling rather than reducing or reusing products', 'They always collect too much material', 'They make recycling bins illegal', 'They only cover food'],
        UNDERGRADUATE: ['A product whose producer no longer exists or cannot be identified', 'A product sold without packaging', 'A product made in a single factory', 'A product that is always reused'],
        GRADUATE: ['It can either displace them or formally integrate and pay them for their work', 'It has no possible effect on them', 'It always bans their work', 'It requires them to pay producer fees'],
        PHD: ['Design signal strength versus administrative cost', 'Paper versus plastic', 'Urban versus rural weather', 'Taxes versus tariffs on food'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Many stores have special boxes for old batteries so they can be recycled safely.',
        MIDDLE_SCHOOL: 'Before EPR, cities and taxpayers paid most of the cost of collecting and handling waste.',
        HIGH_SCHOOL: 'Many programs fund recycling but do little to encourage less packaging or reuse.',
        UNDERGRADUATE: 'Orphan products have no identifiable producer, so collective schemes must still cover their costs.',
        GRADUATE: 'Program design decides whether informal workers lose their livelihoods or become paid partners.',
        PHD: 'Individual responsibility sends a sharper design signal but requires costly brand-level tracing.',
      },
    },
  ],
}

export default expansion
