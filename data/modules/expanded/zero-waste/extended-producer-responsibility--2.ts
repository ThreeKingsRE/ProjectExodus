import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'zero-waste',
  moduleKey: 'extended-producer-responsibility~2',
  lessons: [
    {
      id: 'zw-epr-1',
      title: 'Maker Responsibility: How Producer Programs Work',
      content: {
        ELEMENTARY: `
<h2>The Juice Box Promise</h2>
<p>Imagine you finish a juice box at lunch. Where should it go next? And who should help pay to recycle it? Many people think the company that made the juice box should help. That idea has a long name: maker responsibility. Let's find out what it means!</p>

<h3>Makers Choose the Package</h3>
<p>You did not pick the plastic straw, the foil inside or the cardboard outside. The company did. Because the company chose the package, it makes sense for the company to help take care of it when it is empty. When companies have to help pay for recycling, they start to think harder about making packages that are easy to recycle.</p>
<ul>
<li><strong>Maker:</strong> the company that designs a product and sells it to people</li>
<li><strong>Package:</strong> the box, bag, bottle or wrapper that holds something you buy</li>
<li><strong>Recycling:</strong> turning used things into materials that can be made into new things</li>
</ul>

<h3>Ways Makers Can Help</h3>
<p>There are different ways a company can do its part. Some ways are simple and some are big jobs.</p>
<ol>
<li>Paying money to help run recycling trucks and sorting centers.</li>
<li>Making packages from one material so they are easier to sort.</li>
<li>Setting up take-back bins in stores for old batteries or phones.</li>
<li>Making refill bottles that come back again and again.</li>
</ol>
<ul>
<li><strong>Take-back bin:</strong> a special box in a shop where you can return used items</li>
<li><strong>Refill:</strong> filling the same container again instead of buying a new one</li>
<li><strong>Deposit:</strong> a little extra money you pay for a bottle and get back when you return it</li>
</ul>

<h3>Your Part Matters Too</h3>
<p>Makers help, but families and kids help too! When you put things in the right bin, the recycling center gets clean materials it can use. Here are some things you can do:</p>
<ul>
<li>Rinse bottles and cans before putting them in the recycling bin.</li>
<li>Bring old batteries to a take-back bin with a grown-up, never the trash.</li>
<li>Choose a reusable water bottle for school.</li>
</ul>

<h3>Think About It</h3>
<p>If you owned a juice company, how would you design a box that is easy to recycle or refill? Draw your idea! Good designers think about the end of a product right at the very beginning.</p>
`,
        MIDDLE_SCHOOL: `
<h2>Following the Money: How Producer Responsibility Works</h2>
<p>Every year, towns and cities spend a lot of money collecting and sorting packaging, old electronics and other products. For a long time, that bill was paid only by local governments, which means by taxpayers. Extended Producer Responsibility, or EPR, is a policy that moves part or all of that cost to the companies that make and sell the products. Let's follow the money to see how it works.</p>

<h3>The Old Way and the EPR Way</h3>
<table>
<thead><tr><th>Question</th><th>Old way</th><th>EPR way</th></tr></thead>
<tbody>
<tr><td>Who pays for collection and recycling?</td><td>The town, through taxes or trash fees</td><td>Producers, through fees they pay into a program</td></tr>
<tr><td>Who decides how packages are designed?</td><td>Producers, with no link to disposal costs</td><td>Producers, but hard-to-recycle designs cost more</td></tr>
<tr><td>Who checks results?</td><td>Often nobody tracks it closely</td><td>The government sets targets and checks reports</td></tr>
</tbody>
</table>

<h3>Step by Step</h3>
<ol>
<li><strong>A law is passed</strong> saying producers of certain products must take responsibility for them after use.</li>
<li><strong>Producers join together</strong> in a group that runs the program for all of them.</li>
<li><strong>Each producer pays a fee</strong> based on how much packaging or how many products it sells.</li>
<li><strong>The group pays for collection</strong> and recycling, either by running it or by paying towns that do.</li>
<li><strong>The government checks</strong> that recycling targets are met and reports are honest.</li>
</ol>

<h3>Key Words</h3>
<ul>
<li><strong>Extended Producer Responsibility:</strong> a policy that makes producers responsible for their products after customers are done with them</li>
<li><strong>Producer:</strong> the company that makes a product or first sells it in a country</li>
<li><strong>End of life:</strong> the stage when a product is used up, broken or no longer wanted</li>
<li><strong>Fee:</strong> money a producer pays into the program for each unit or kilogram it sells</li>
<li><strong>Recycling target:</strong> a goal set by law for how much material must be collected and recycled</li>
<li><strong>Free rider:</strong> a company that sells products but avoids paying its share of the program</li>
</ul>

<h3>Why Companies Change Their Designs</h3>
<p>When producers pay for what happens to their products, they have a reason to make them cheaper to recycle. A bottle made of one kind of plastic with a paper label that washes off is easier to recycle than a bottle with mixed layers. In many programs, easy-to-recycle packaging pays a lower fee, so smart design saves the company money.</p>

<h3>What You Can Notice</h3>
<p>Look for take-back bins for batteries, light bulbs or phones in stores near you. Many of these exist because of producer responsibility rules. Ask yourself: who do you think pays for that bin to be emptied?</p>
`,
        HIGH_SCHOOL: `
<h2>Building an EPR Program: Laws, Organizations and Fees</h2>
<p>Extended Producer Responsibility began in Europe in the early 1990s and has since spread to many countries and product types, including packaging, batteries, electronics, tires, paint, mattresses and, more recently, textiles. Behind every EPR program is a set of design choices: what is covered, who counts as a producer, who runs collection and how fees are set. This lesson walks through those choices the way a policymaker would.</p>

<h3>Choice 1: What Is Covered and Who Is the Producer?</h3>
<p>A law must define the products covered and the obligated party. For products made overseas, the "producer" is usually the brand owner or the first importer who places the product on the national market. Online sellers create a challenge, because products shipped directly from abroad may escape the rules unless marketplaces are made responsible too.</p>

<h3>Choice 2: Who Runs the System?</h3>
<p>Most producers do not want to build their own collection networks, so they join a Producer Responsibility Organization (PRO).</p>
<table>
<thead><tr><th>Model</th><th>How it works</th><th>Strengths</th><th>Weaknesses</th></tr></thead>
<tbody>
<tr><td>Individual take-back</td><td>Each company collects its own products</td><td>Direct link between design and cost</td><td>Expensive and impractical for small items</td></tr>
<tr><td>Single collective PRO</td><td>One nonprofit PRO serves all producers</td><td>Economies of scale, simple oversight</td><td>Can become a monopoly with little pressure to improve</td></tr>
<tr><td>Competing PROs</td><td>Several PROs compete for producer members</td><td>Pressure to cut costs</td><td>Risk of cutting corners; needs strong regulation and a clearing system</td></tr>
<tr><td>Government-run fund</td><td>Producers pay fees to a public agency</td><td>Strong public control</td><td>Less producer engagement in design</td></tr>
</tbody>
</table>

<h3>Choice 3: How Are Fees Set?</h3>
<p>Fees usually depend on the weight or number of units a producer sells, by material type. Many programs now use <em>eco-modulated</em> fees: packaging that is recyclable, contains recycled content or is reusable pays less, while hard-to-recycle formats pay more. This turns the fee schedule into a design signal.</p>

<h3>Key Terms</h3>
<ul>
<li><strong>Producer Responsibility Organization:</strong> a group set up by producers to manage collection and recycling on their behalf</li>
<li><strong>Obligated producer:</strong> the brand owner or importer that the law requires to join or fund the program</li>
<li><strong>Eco-modulation:</strong> adjusting fees so products that are easier to reuse or recycle pay less</li>
<li><strong>Collection target:</strong> the share of products sold that must be gathered back after use</li>
<li><strong>Recycling rate:</strong> the share of collected material that is actually turned into new material</li>
<li><strong>Enforcement:</strong> government checks, audits and penalties that make sure producers follow the law</li>
</ul>

<h3>Trade-offs to Weigh</h3>
<ul>
<li><strong>Costs passed on:</strong> producers may raise prices slightly, but the cost is spread across buyers instead of all taxpayers.</li>
<li><strong>Local government role:</strong> towns may lose control over collection if the PRO takes over, or gain funding if the PRO reimburses them.</li>
<li><strong>Weight-based targets:</strong> they are easy to measure but can favor heavy materials over the most harmful ones.</li>
</ul>

<h3>Real-World Applications</h3>
<p>Many European countries have long-running packaging and electronics programs, and several Canadian provinces and US states have adopted packaging EPR laws in recent years. Battery and paint programs are common in North America because those items are hazardous in household trash. When you see a free drop-off point for paint or batteries, there is a good chance an EPR program is paying for it.</p>
`,
        UNDERGRADUATE: `
<h2>The Economics and Performance of EPR</h2>
<p>EPR is best understood as a tool for correcting a market failure. When producers make design and material choices, the costs of collecting, sorting and disposing of their products fall on municipalities and the environment, not on the producer. Economists call this an externality. EPR attempts to internalize those costs so they show up in producer decisions and, ultimately, in prices. This lesson examines the economic logic, system design variables, performance metrics and how programs differ internationally.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Externality:</strong> a cost or benefit of an activity that falls on people who did not choose it and is not reflected in market prices</li>
<li><strong>Cost internalization:</strong> making producers pay the end-of-life costs of their products so those costs enter design and pricing decisions</li>
<li><strong>Full net cost:</strong> the total cost of collection, sorting and treatment minus revenue from selling recovered materials</li>
<li><strong>Free riding:</strong> selling covered products without registering or paying fees, which shifts costs to compliant producers</li>
<li><strong>Orphan products:</strong> items whose producer no longer exists or cannot be identified, whose costs must be shared</li>
<li><strong>Pass-through:</strong> the portion of an EPR fee that producers transfer to consumers through higher prices</li>
</ul>

<h3>Two Incentive Channels</h3>
<p>EPR can change outcomes through two channels. The <em>financing channel</em> provides stable money for collection and recycling, which typically raises collection rates quickly. The <em>design channel</em> rewards producers who reduce material, avoid problem substances or improve recyclability. In practice, the financing channel has been stronger. When fees are flat and collective, a single producer that redesigns its packaging captures only a tiny share of the system-wide savings, so the design incentive is weak. Fee modulation tries to fix this by linking each producer's fee to the attributes of its own products.</p>

<h3>Performance Metrics</h3>
<table>
<thead><tr><th>Metric</th><th>What it measures</th><th>Watch out for</th></tr></thead>
<tbody>
<tr><td>Collection rate</td><td>Share of products placed on the market that are collected</td><td>Lag between sale and disposal for long-lived goods</td></tr>
<tr><td>Recycling rate</td><td>Share of collected material sent to recyclers</td><td>Whether it is measured at sorting or at actual reprocessing</td></tr>
<tr><td>Cost per tonne</td><td>Efficiency of the system</td><td>Low cost can mean low quality or exported waste</td></tr>
<tr><td>Design change indicators</td><td>Shifts in material use, recyclability or reuse</td><td>Hard to attribute to EPR rather than other trends</td></tr>
<tr><td>Free-rider share</td><td>Unregistered sales as a portion of the market</td><td>Online imports are difficult to estimate</td></tr>
</tbody>
</table>

<h3>Reasoning About Fees</h3>
<p>Suppose a producer sells a beverage in a multilayer pouch that the local system cannot recycle, while a competitor uses a single-material bottle that sorts easily. Under a flat fee by weight, the pouch might even pay less because it is lighter, rewarding the format that creates more residual waste. Under a modulated fee, the pouch pays a penalty reflecting its higher net cost, and the bottle pays less. The size of the gap matters: if the penalty is small relative to packaging and marketing costs, it will not change decisions.</p>

<h3>International Comparisons</h3>
<p>Programs differ along several dimensions: single versus competing PROs, full versus partial cost coverage, whether municipalities or PROs operate collection, and how strictly targets are enforced. Comparing raw recycling rates across countries is risky because definitions and measurement points differ. A fairer comparison looks at what is counted, where it is measured and what share ends up as material actually used again.</p>

<h3>Applied Checklist: Assessing an EPR Program</h3>
<ol>
<li>Does the definition of "producer" capture importers and online sellers?</li>
<li>Do fees cover the full net cost of managing the products?</li>
<li>Are fees modulated, and is the difference large enough to influence design?</li>
<li>Are recycling rates measured at the point of actual reprocessing?</li>
<li>Is there independent auditing and a credible penalty for free riders?</li>
<li>Does the program include prevention or reuse targets, not just recycling?</li>
</ol>
`,
        GRADUATE: `
<h2>Governing EPR Within Circular Economy Policy</h2>
<p>Three decades of experience have made EPR one of the most widely used waste policy instruments, but they have also exposed governance weaknesses. Programs can deliver high collection rates while doing little to reduce material use, can concentrate power in incumbent PROs, and can sit awkwardly alongside other circular economy goals such as reuse, repair and recycled-content requirements. This lesson treats EPR as a governance system and examines how its design choices shape outcomes.</p>

<h3>Governance Models</h3>
<ul>
<li><strong>Producer-led governance:</strong> producers control the PRO and its decisions, with government setting targets and monitoring outcomes</li>
<li><strong>Shared governance:</strong> municipalities, producers and sometimes civil society share decision rights over the program</li>
<li><strong>State-led governance:</strong> a public body collects fees and contracts services, with producers mainly acting as funders</li>
<li><strong>Clearing house:</strong> a neutral body that allocates obligations and reconciles data when several PROs compete</li>
<li><strong>Regulatory capture:</strong> a situation in which the regulated industry gains undue influence over the rules meant to govern it</li>
<li><strong>Fee modulation:</strong> varying producer fees according to product attributes such as recyclability, recycled content or reusability</li>
</ul>

<h3>Designing Fee Modulation</h3>
<p>Fee modulation is now standard in leading packaging programs, but its design is contested. Key choices include the criteria used, how they are verified, how large the bonus and malus are, and whether modulation is revenue-neutral. Criteria can be binary (recyclable or not) or graduated, and they may reference design guidelines that are updated over time. Effective modulation requires reliable product-level data, which in turn depends on reporting systems and audits. If penalties are small, producers absorb them; if criteria are vague, producers may claim recyclability that local infrastructure does not support.</p>

<h3>Comparing Governance Arrangements</h3>
<table>
<thead><tr><th>Arrangement</th><th>Accountability</th><th>Innovation pressure</th><th>Main risk</th></tr></thead>
<tbody>
<tr><td>Single producer-led PRO</td><td>Through regulator oversight</td><td>Low without strong targets</td><td>Monopoly and capture</td></tr>
<tr><td>Competing PROs with clearing house</td><td>Market plus regulator</td><td>Cost-focused</td><td>Race to the bottom on quality</td></tr>
<tr><td>Shared governance board</td><td>Multiple stakeholders</td><td>Moderate</td><td>Slow decisions and conflict</td></tr>
<tr><td>Public fund model</td><td>Direct public accountability</td><td>Depends on agency capacity</td><td>Weak link to product design</td></tr>
</tbody>
</table>

<h3>Integration With Circular Economy Policy</h3>
<p>Traditional EPR was built around recycling targets. Circular economy strategies place prevention, reuse and repair higher in the waste hierarchy, so newer programs add reuse targets, funding for refill infrastructure, recycled-content mandates and links to eco-design rules. Coordination problems arise when EPR fees fund recycling capacity that later competes with reuse, or when design guidelines from different jurisdictions conflict and fragment the market for producers that sell across borders.</p>

<h3>Equity and Institutional Barriers</h3>
<p>EPR redistributes costs from taxpayers to product buyers, which can be more or less progressive depending on pass-through and what is covered. Rural and remote communities often have higher collection costs, so programs need explicit service standards to avoid serving only profitable urban areas. Informal waste pickers, who recover large volumes in many countries, can lose their livelihoods if EPR systems ignore them; inclusive designs contract with or formally integrate them. Institutional barriers include limited regulator capacity, weak data, and the political influence of incumbent producers and PROs.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Clarify objectives: financing, design change, prevention, reuse or equity.</li>
<li>Map decision rights and identify who can block or shape reforms.</li>
<li>Test whether modulation signals are large and verifiable enough to change design.</li>
<li>Check service coverage across rural, remote and low-income areas.</li>
<li>Assess treatment of informal workers and municipal staff.</li>
<li>Review data transparency, auditing and enforcement capacity.</li>
</ol>
`,
        PHD: `
<h2>Researching EPR Effectiveness and Political Economy</h2>
<p>Despite the spread of EPR, rigorous evidence on what it achieves remains thinner than its popularity suggests. Many evaluations report descriptive collection and recycling rates without a credible counterfactual, and few isolate effects on product design or material use. At the same time, EPR is a political creation whose design reflects the interests of producers, municipalities, recyclers and regulators. This lesson examines methods for evaluating effectiveness, analytical lenses on political economy, and directions for next-generation policy design.</p>

<h3>Evaluation Methods</h3>
<ul>
<li><strong>Counterfactual analysis:</strong> estimating what would have happened without the policy, to separate its effect from background trends</li>
<li><strong>Difference-in-differences:</strong> comparing changes over time between jurisdictions that adopted EPR and similar ones that did not</li>
<li><strong>Synthetic control:</strong> building a weighted combination of untreated jurisdictions that resembles the treated one before adoption</li>
<li><strong>Product-level panel data:</strong> repeated observations of specific products that allow design changes to be tracked over time</li>
<li><strong>Process tracing:</strong> a qualitative method that follows causal mechanisms through documents, interviews and decisions</li>
<li><strong>Political economy:</strong> the study of how interests, institutions and power shape the adoption and design of policy</li>
</ul>

<h3>Identification Challenges</h3>
<p>EPR adoption is not random. Jurisdictions that adopt it often already have stronger environmental institutions and higher recycling rates, which biases naive comparisons. Programs also tend to arrive bundled with other measures such as landfill taxes, deposit systems or bans, making attribution difficult. Design effects are particularly hard to identify because global brands redesign products for multiple markets at once, so a change observed in one country may be driven by rules elsewhere. Researchers increasingly use product-level data, staggered adoption designs and mixed-methods approaches to address these problems.</p>

<h3>Political Economy Lenses</h3>
<table>
<thead><tr><th>Lens</th><th>Core question</th><th>Typical insight</th></tr></thead>
<tbody>
<tr><td>Interest group analysis</td><td>Which actors gain or lose and how they mobilize</td><td>Producers may support EPR when they can control the PRO</td></tr>
<tr><td>Historical institutionalism</td><td>How early choices constrain later reform</td><td>Incumbent PROs and contracts create path dependence</td></tr>
<tr><td>Policy diffusion</td><td>How designs spread between jurisdictions</td><td>Copying templates can import mismatched assumptions</td></tr>
<tr><td>Multi-level governance</td><td>How local, national and supranational rules interact</td><td>Fragmented rules raise compliance costs for producers</td></tr>
</tbody>
</table>

<h3>Contested Questions</h3>
<ul>
<li>Does EPR meaningfully change product design, or mainly finance recycling infrastructure?</li>
<li>Do competing PROs lower costs without reducing environmental performance?</li>
<li>Is weight-based target setting compatible with priorities based on environmental harm?</li>
<li>Should EPR fees be harmonized across jurisdictions to create stronger, consistent design signals?</li>
<li>How should EPR interact with waste trade, especially exports of used goods to lower-income countries?</li>
</ul>

<h3>Modeling Approaches</h3>
<p>Theoretical work models producer decisions under different fee structures, often using industrial organization frameworks to study how collective versus individual responsibility alters incentives. Agent-based and system dynamics models explore interactions between producers, PROs, recyclers and secondary material markets, including price volatility. Life-cycle and material flow models estimate the environmental outcomes of alternative designs. Linking these model types, so that behavioral responses feed into environmental accounting, remains methodologically challenging.</p>

<h3>Next-Generation Policy Design</h3>
<p>Proposals for next-generation EPR include fees tied to measured environmental impacts rather than weight, explicit reuse and prevention targets, digital product information to verify claims and enable individual producer accountability, responsibility for online marketplaces, and mechanisms that include informal recyclers. Each proposal raises research questions about administrative feasibility, data integrity and unintended consequences.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Credible causal estimates of EPR effects on product design and material use.</li>
<li>Comparative studies of PRO market structures and their long-run performance.</li>
<li>Methods for linking fee modulation to life-cycle impacts in a verifiable way.</li>
<li>Analysis of how EPR systems affect informal waste sectors and global used-goods trade.</li>
<li>Political economy of reform: when and why incumbent arrangements change.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'zwepr2q1',
      question: {
        ELEMENTARY: 'Who should help pay to recycle the packages they make?',
        MIDDLE_SCHOOL: 'What does EPR stand for?',
        HIGH_SCHOOL: 'What is a Producer Responsibility Organization (PRO)?',
        UNDERGRADUATE: 'What does cost internalization mean in the context of EPR?',
        GRADUATE: 'What is fee modulation?',
        PHD: 'What does a political economy analysis of EPR study?',
      },
      options: {
        ELEMENTARY: ['The companies that made them', 'Only the people who buy them', 'Nobody at all', 'The garbage truck driver'],
        MIDDLE_SCHOOL: ['Extended Producer Responsibility', 'Extra Plastic Recycling', 'Everyone Pays Regularly', 'Easy Product Returns'],
        HIGH_SCHOOL: ['A group set up by producers to manage collection and recycling for them', 'A government public relations office', 'A store that sells recycled products', 'A program that only handles plastic bottles'],
        UNDERGRADUATE: ['Making producers pay end-of-life costs so they enter design and pricing decisions', 'Hiding disposal costs inside city budgets', 'Having the government pay for all recycling', 'Removing every cost from the product'],
        GRADUATE: ['Varying producer fees according to attributes such as recyclability or reusability', 'Charging every product the same flat fee', 'Letting producers choose whether to pay', 'Setting fees randomly each year'],
        PHD: ['How interests, institutions and power shape the adoption and design of EPR', 'Only the chemistry of recycled materials', 'Purely technical engineering of sorting machines', 'Weather patterns that affect collection'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'The company chose the package, so it makes sense for the company to help pay for recycling it.',
        MIDDLE_SCHOOL: 'EPR stands for Extended Producer Responsibility, which makes producers responsible for products after use.',
        HIGH_SCHOOL: 'A PRO is an organization producers join so it can run collection and recycling on their behalf.',
        UNDERGRADUATE: 'Internalization moves costs that once fell on cities and the environment onto the producer.',
        GRADUATE: 'Modulated fees reward easier-to-recycle or reusable products with lower fees and penalize hard formats.',
        PHD: 'Political economy examines how producers, municipalities, recyclers and regulators shape the policy.',
      },
    },
    {
      id: 'zwepr2q2',
      question: {
        ELEMENTARY: 'What is a deposit on a bottle?',
        MIDDLE_SCHOOL: 'Under the old way, before EPR, who usually paid for collecting and recycling packaging?',
        HIGH_SCHOOL: 'What is a main weakness of having a single collective PRO?',
        UNDERGRADUATE: 'Why is the design incentive weak when fees are flat and collective?',
        GRADUATE: 'Why can informal waste pickers be harmed by EPR systems?',
        PHD: 'Why do naive comparisons between EPR and non-EPR jurisdictions tend to be biased?',
      },
      options: {
        ELEMENTARY: ['A sticker that shows the bottle color', 'A kind of plastic', 'A little extra money you get back when you return the bottle', 'A tax you never get back'],
        MIDDLE_SCHOOL: ['The companies that made the packages', 'Recycling machines paid for themselves', 'The town, through taxes or trash fees', 'Shoppers paid a fee at the door'],
        HIGH_SCHOOL: ['It is always too small to collect anything', 'It cannot collect any electronics', 'It can become a monopoly with little pressure to improve', 'It forces each company to build its own trucks'],
        UNDERGRADUATE: ['Producers are not allowed to redesign packaging', 'Recycling has no costs', 'A single redesigning producer captures only a tiny share of system-wide savings', 'Fees are always refunded'],
        GRADUATE: ['They are required to run every PRO', 'They are always paid more under EPR', 'Systems that ignore them can take away the materials they depend on for income', 'They are legally the producers'],
        PHD: ['EPR is always adopted randomly', 'Jurisdictions that adopt EPR often already have stronger institutions and higher recycling', 'Recycling rates are measured identically everywhere', 'No data exist for any country'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'You pay a small deposit when you buy the bottle and get the money back when you return it.',
        MIDDLE_SCHOOL: 'Before EPR, local governments paid, which meant taxpayers covered the bill.',
        HIGH_SCHOOL: 'With no competitor, a single PRO may have weak pressure to cut costs or improve service.',
        UNDERGRADUATE: 'Under flat collective fees, savings from one redesign are spread across all producers, so the reward is tiny.',
        GRADUATE: 'Inclusive designs contract with or integrate informal workers so they are not displaced.',
        PHD: 'Adoption is not random, so pre-existing differences can be mistaken for policy effects.',
      },
    },
    {
      id: 'zwepr2q3',
      question: {
        ELEMENTARY: 'Why do makers start designing packages that are easier to recycle?',
        MIDDLE_SCHOOL: 'What is a free rider in an EPR program?',
        HIGH_SCHOOL: 'For products made overseas, who is usually treated as the producer?',
        UNDERGRADUATE: 'Why can comparing raw recycling rates across countries be misleading?',
        GRADUATE: 'What is regulatory capture?',
        PHD: 'What does the difference-in-differences method compare?',
      },
      options: {
        ELEMENTARY: ['Because hard-to-recycle packages are prettier', 'Because they have to help pay for recycling', 'Because trucks like heavy boxes', 'Because nobody uses packages'],
        MIDDLE_SCHOOL: ['A company that pays double fees', 'A company that sells products but avoids paying its share', 'A worker who drives the recycling truck', 'A customer who uses a reusable bag'],
        HIGH_SCHOOL: ['The factory workers abroad', 'The brand owner or first importer that places it on the market', 'The shipping company', 'The customer who buys it'],
        UNDERGRADUATE: ['All countries use the same definitions', 'Definitions and measurement points differ between countries', 'Recycling rates never change', 'Only one country measures recycling'],
        GRADUATE: ['When regulators refuse to meet companies', 'When the regulated industry gains undue influence over its own rules', 'When a PRO buys a recycling truck', 'When fees are set by auction'],
        PHD: ['Two products sold in the same store', 'Changes over time in adopting jurisdictions versus similar non-adopting ones', 'Only results before a policy started', 'Two different recycling machines'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'When companies pay for recycling, easy-to-recycle packages cost them less, so they design better ones.',
        MIDDLE_SCHOOL: 'Free riders shift costs onto companies that follow the rules.',
        HIGH_SCHOOL: 'Laws usually obligate the brand owner or first importer, since overseas factories are outside the law.',
        UNDERGRADUATE: 'Countries count different things at different points, so a fair comparison checks definitions first.',
        GRADUATE: 'Capture happens when industry shapes the rules meant to govern it, weakening oversight.',
        PHD: 'Difference-in-differences compares before-and-after changes between treated and comparison jurisdictions.',
      },
    },
    {
      id: 'zwepr2q4',
      question: {
        ELEMENTARY: 'Where should old batteries go?',
        MIDDLE_SCHOOL: 'In many EPR programs, what kind of packaging pays a lower fee?',
        HIGH_SCHOOL: 'What is eco-modulation?',
        UNDERGRADUATE: 'What is the full net cost of managing products?',
        GRADUATE: 'How do newer EPR programs connect to circular economy goals beyond recycling?',
        PHD: 'Why are EPR effects on product design especially hard to identify?',
      },
      options: {
        ELEMENTARY: ['In the kitchen trash', 'In the garden', 'Down the drain', 'In a special take-back bin, with a grown-up'],
        MIDDLE_SCHOOL: ['The heaviest packaging', 'Packaging with many mixed layers', 'Packaging with the brightest colors', 'Packaging that is easy to recycle'],
        HIGH_SCHOOL: ['Painting packages green', 'Charging all materials the same price', 'Banning all packaging', 'Adjusting fees so products easier to reuse or recycle pay less'],
        UNDERGRADUATE: ['Only the price of new trucks', 'Material sales revenue alone', 'Advertising costs for the product', 'Collection, sorting and treatment costs minus revenue from recovered materials'],
        GRADUATE: ['By banning recycling', 'By removing all targets', 'By paying only for landfills', 'By adding reuse targets, refill funding, recycled-content rules and eco-design links'],
        PHD: ['Products never change', 'Design data are always public', 'EPR has no connection to design', 'Global brands redesign for many markets at once, so changes may be driven by rules elsewhere'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Batteries can be dangerous in the trash, so take-back bins collect them safely.',
        MIDDLE_SCHOOL: 'Lower fees for easy-to-recycle packaging reward smart design.',
        HIGH_SCHOOL: 'Eco-modulation turns the fee schedule into a design signal.',
        UNDERGRADUATE: 'Full net cost subtracts material revenue from the total cost of managing the products.',
        GRADUATE: 'Circular strategies prioritize prevention and reuse, so newer programs add tools that support them.',
        PHD: 'Because brands sell worldwide, a design change in one country may reflect another jurisdiction\'s rules.',
      },
    },
    {
      id: 'zwepr2q5',
      question: {
        ELEMENTARY: 'What can you do to help recycling centers get clean materials?',
        MIDDLE_SCHOOL: 'What role does the government play in an EPR program?',
        HIGH_SCHOOL: 'What is a weakness of weight-based targets?',
        UNDERGRADUATE: 'Under a flat fee by weight, why might a light, unrecyclable pouch be unfairly rewarded?',
        GRADUATE: 'Why do EPR programs need explicit service standards for rural and remote areas?',
        PHD: 'What is a proposal for next-generation EPR design?',
      },
      options: {
        ELEMENTARY: ['Rinse bottles and cans and put them in the right bin', 'Mix food scraps into the recycling', 'Put batteries in the trash', 'Throw everything in one bag'],
        MIDDLE_SCHOOL: ['It sets targets and checks that reports are honest', 'It designs every package', 'It sells the products', 'It has no role at all'],
        HIGH_SCHOOL: ['They can favor heavy materials over the most harmful ones', 'They are impossible to measure', 'They only count glass', 'They require counting each item by hand'],
        UNDERGRADUATE: ['Because it is lighter, it may pay less despite creating more residual waste', 'Because pouches are always recycled', 'Because weight fees are never charged', 'Because pouches pay the highest fee'],
        GRADUATE: ['Collection there costs more, so programs might otherwise serve only profitable urban areas', 'Rural areas produce no waste', 'Rural collection is always free', 'Remote areas are exempt from all laws'],
        PHD: ['Fees tied to measured environmental impacts instead of weight', 'Removing all data reporting', 'Ending responsibility for online sales', 'Returning all costs to taxpayers'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Clean, well-sorted materials are easier for recycling centers to turn into new things.',
        MIDDLE_SCHOOL: 'Governments set the rules and targets and check that producers meet them.',
        HIGH_SCHOOL: 'Heavy materials can dominate weight-based results even if lighter items cause more harm.',
        UNDERGRADUATE: 'Weight alone ignores recyclability, so a light pouch may pay less than a recyclable bottle.',
        GRADUATE: 'Service standards prevent programs from neglecting places where collection is costly.',
        PHD: 'Impact-based fees aim to match producer payments to environmental harm rather than mass.',
      },
    },
  ],
}

export default expansion
