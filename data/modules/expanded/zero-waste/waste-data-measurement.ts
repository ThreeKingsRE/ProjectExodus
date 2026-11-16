import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'zero-waste',
  moduleKey: 'waste-data-measurement',
  lessons: [
    {
      id: 'zw-data-1',
      title: 'Counting and Measuring Waste',
      content: {
        ELEMENTARY: `
<h2>Trash Detectives: Counting Our Waste</h2>
<p>Hi, I'm Tally the Raccoon, and I love looking inside trash bins! Not to eat, but to learn. When we count and sort our trash, we become trash detectives. We find clues about what we waste, and then we can make a plan to waste less. Let's start our investigation!</p>

<h3>Why Do We Count Trash?</h3>
<p>Imagine you want to eat more fruit. First you might count how many pieces you eat each day. Trash works the same way. If we do not know how much we throw away, we cannot tell if we are getting better. Counting helps us see the problem and celebrate when we improve.</p>
<ul>
<li><strong>Waste:</strong> things we throw away because we think we do not need them anymore</li>
<li><strong>Sorting:</strong> putting things into groups that are alike, such as paper, plastic and food</li>
<li><strong>Weighing:</strong> using a scale to find out how heavy something is</li>
</ul>

<h3>How to Be a Trash Detective</h3>
<p>With a grown-up, you can do a trash check at home or at school. Wear gloves and work outside or on a big sheet.</p>
<ol>
<li>Pick one day of trash from one bin.</li>
<li>Sort it into piles: food, paper, plastic, metal, glass and other.</li>
<li>Count the items in each pile, or weigh each pile on a bathroom scale.</li>
<li>Write the numbers on a chart and draw a picture of the biggest pile.</li>
<li>Talk about how to make the biggest pile smaller next week.</li>
</ol>

<h3>Reading Your Clues</h3>
<p>Maybe your biggest pile is food scraps. That clue tells you to try composting or taking smaller portions. Maybe it is snack wrappers. That clue says to try snacks without wrappers, like apples or bananas, or to buy bigger packs and use a reusable box.</p>
<ul>
<li><strong>Chart:</strong> a picture made of boxes or bars that shows numbers so they are easy to compare</li>
<li><strong>Goal:</strong> something you are trying to do, such as filling the trash bin less often</li>
<li><strong>Compost:</strong> food scraps and leaves that break down into rich soil for plants</li>
</ul>

<h3>Check Again</h3>
<p>Detectives always check their work. Do another trash check a few weeks later. Is the biggest pile smaller? If so, great job! Counting again is how towns and cities know their waste plans are working, too.</p>
`,
        MIDDLE_SCHOOL: `
<h2>Why Waste Data Matters</h2>
<p>Cities, schools and companies all want to reduce waste. But how do they know where to start, or whether their plans are working? They measure. Waste data tells us how much waste is produced, what it is made of, and where it ends up. Without data, waste plans are just guesses.</p>

<h3>The Waste Audit</h3>
<p>A waste audit is a hands-on way to study trash. People collect waste from a building over a set time, sort it into categories and weigh each category. The results show which materials make up the biggest share and which could have been recycled, composted or avoided.</p>
<ol>
<li><strong>Plan:</strong> choose which bins to study and for how long, and gather gloves, bags and a scale.</li>
<li><strong>Collect:</strong> gather the waste without letting people know in advance, so they do not change their habits.</li>
<li><strong>Sort:</strong> separate items into categories like paper, plastics, food and landfill-only items.</li>
<li><strong>Weigh:</strong> record the weight of each category.</li>
<li><strong>Analyze:</strong> calculate the percentage each category makes up of the total.</li>
<li><strong>Act:</strong> use what you learned to make changes, then audit again later.</li>
</ol>

<h3>Key Words</h3>
<ul>
<li><strong>Waste audit:</strong> sorting and weighing waste to find out what is being thrown away</li>
<li><strong>Category:</strong> a group of similar materials, such as paper or food scraps</li>
<li><strong>Diversion rate:</strong> the percentage of waste kept out of landfill through recycling and composting</li>
<li><strong>Contamination:</strong> the wrong items ending up in a recycling or compost bin</li>
<li><strong>Baseline:</strong> the first measurement, used as a starting point to compare later results</li>
<li><strong>Per capita:</strong> an amount for each person, found by dividing a total by the number of people</li>
</ul>

<h3>Calculating a Diversion Rate</h3>
<p>Suppose a school throws out 100 kilograms of material in a week. Of that, 30 kilograms go to recycling and 20 kilograms go to compost. The diverted amount is 30 plus 20, which is 50 kilograms. Divide 50 by 100 and you get one half, or a diversion rate of 50 percent.</p>
<table>
<thead><tr><th>Where it went</th><th>Weight (kg)</th><th>Share of total</th></tr></thead>
<tbody>
<tr><td>Recycling</td><td>30</td><td>30%</td></tr>
<tr><td>Compost</td><td>20</td><td>20%</td></tr>
<tr><td>Landfill</td><td>50</td><td>50%</td></tr>
<tr><td>Total</td><td>100</td><td>100%</td></tr>
</tbody>
</table>

<h3>Watch Out for Tricky Numbers</h3>
<p>A higher diversion rate sounds great, but it does not tell the whole story. If the school suddenly makes twice as much waste overall, the landfill pile could grow even if the rate stays the same. That is why experts also track the total amount of waste per person. The best result is less waste overall, not just better sorting.</p>
`,
        HIGH_SCHOOL: `
<h2>Measuring Waste: Characterization, Diversion and Performance</h2>
<p>Waste managers rely on numbers to design collection routes, size facilities, set targets and report progress. But waste is messy to measure. It varies by season, neighborhood and business type, and different places define and count it differently. This lesson explains the main measurement tools and the strengths and weaknesses of common metrics.</p>

<h3>Waste Characterization Studies</h3>
<p>A characterization study finds out what is in a waste stream. Crews take random samples from trucks or bins, sort them into many detailed categories and weigh each one. Repeating samples across seasons and areas gives a picture of the average composition. Results reveal, for example, how much recyclable paper is still being landfilled or how large the food waste share is.</p>
<ul>
<li><strong>Waste characterization:</strong> a study that samples and sorts waste to estimate its composition by material</li>
<li><strong>Waste generation:</strong> the total amount of waste produced, before any recycling or disposal</li>
<li><strong>Diversion rate:</strong> the share of generated waste sent to recycling, composting or reuse instead of disposal</li>
<li><strong>Capture rate:</strong> the share of a specific material that is correctly placed in its intended bin</li>
<li><strong>Contamination rate:</strong> the share of material in a recycling or compost stream that does not belong there</li>
<li><strong>Weighbridge:</strong> a large scale that weighs trucks entering and leaving a facility</li>
</ul>

<h3>Comparing Common Metrics</h3>
<table>
<thead><tr><th>Metric</th><th>What it shows</th><th>Weakness</th></tr></thead>
<tbody>
<tr><td>Diversion rate</td><td>How much is kept out of landfill</td><td>Ignores total amount and what happens after collection</td></tr>
<tr><td>Waste per person</td><td>Whether total generation is falling</td><td>Can hide business and tourist waste</td></tr>
<tr><td>Capture rate</td><td>How well people sort a specific material</td><td>Needs characterization data to calculate</td></tr>
<tr><td>Contamination rate</td><td>Quality of recycling or compost</td><td>Varies a lot between samples</td></tr>
<tr><td>Disposal per person</td><td>What actually goes to landfill or incineration</td><td>Does not show prevention directly</td></tr>
</tbody>
</table>

<h3>Why Numbers Can Mislead</h3>
<p>Definitions vary widely. Some places count construction debris or yard waste in their recycling totals, which can raise the diversion rate sharply. Some count material sent for recycling, while others count only material actually turned into new products. Some include energy recovery as diversion and others do not. When comparing cities or countries, always check what is being counted.</p>

<h3>Measuring What Matters for Zero Waste</h3>
<p>Zero waste programs increasingly focus on reducing total generation and disposal, not just raising diversion. A city that halves its landfill waste per person has achieved something real, even if its diversion rate only rises a little. Prevention is hard to measure because it is the waste that never appeared, so programs use indicators like reuse counts, repair events, and sales of refillable products.</p>

<h3>Putting Data to Work</h3>
<ol>
<li>Establish a baseline with a characterization study.</li>
<li>Choose a small set of clear metrics, including total disposal per person.</li>
<li>Track contamination to improve education and bin design.</li>
<li>Repeat measurements regularly and in different seasons.</li>
<li>Share results publicly so residents can see progress.</li>
</ol>
`,
        UNDERGRADUATE: `
<h2>Waste Accounting Methods and Data Systems</h2>
<p>Waste data underpins policy targets, facility investment, extended producer responsibility fees and corporate sustainability reports. Yet waste statistics are assembled from a patchwork of sources with differing definitions, methods and quality. This lesson examines how waste is accounted for, how data systems are built, and how to interpret reported figures critically.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Measurement point:</strong> the place in the waste chain where quantities are recorded, such as collection, sorting facility input or final recycler output</li>
<li><strong>Mass balance:</strong> an accounting principle that inputs to a process must equal outputs plus changes in stock</li>
<li><strong>Sampling design:</strong> the plan for selecting waste samples so that results represent the whole stream</li>
<li><strong>Confidence interval:</strong> a range around an estimate that expresses how precise a sampled result is likely to be</li>
<li><strong>Activity data:</strong> records of operational quantities such as truck weights, collection counts and facility throughput</li>
<li><strong>Scope boundary:</strong> the definition of which wastes, sources and activities are included in an account</li>
</ul>

<h3>Where Data Comes From</h3>
<table>
<thead><tr><th>Source</th><th>Typical use</th><th>Common issues</th></tr></thead>
<tbody>
<tr><td>Weighbridge records</td><td>Tonnages entering facilities</td><td>Accurate by weight but no composition detail</td></tr>
<tr><td>Characterization studies</td><td>Composition of streams</td><td>Expensive, so samples are small and infrequent</td></tr>
<tr><td>Hauler and facility reports</td><td>Regional totals</td><td>Inconsistent definitions, voluntary reporting gaps</td></tr>
<tr><td>Surveys of businesses</td><td>Commercial and industrial waste</td><td>Low response rates and estimation</td></tr>
<tr><td>Trade and production statistics</td><td>Estimating products entering use</td><td>Indirect, relies on lifetime assumptions</td></tr>
</tbody>
</table>

<h3>Measurement Point Matters</h3>
<p>Recycling rates differ greatly depending on where they are measured. Material collected for recycling includes contaminants and items later rejected at sorting. Sorted bales may be exported, and some may not be recycled at the destination. Measuring at the input to the final reprocessing step gives a lower but more honest figure. Many jurisdictions have been shifting toward measurement closer to actual recycling for this reason.</p>

<h3>Quantitative Reasoning With Samples</h3>
<p>Because characterization relies on samples, estimates carry uncertainty. Waste composition is highly variable from load to load, so a small number of samples can produce wide confidence intervals. Stratifying samples by season, area or generator type, and increasing sample counts for the most important categories, narrows the uncertainty. When a reported change is smaller than the sampling uncertainty, it may not reflect a real change at all.</p>

<h3>Reporting Frameworks</h3>
<p>Organizations report waste through national statistical systems, regulatory returns, voluntary sustainability reporting and supply chain disclosures. Corporate frameworks commonly ask for waste by type, by hazard class and by destination, such as reuse, recycling, recovery and disposal. Comparability depends on consistent categories and on disclosing methods and assumptions.</p>

<h3>A Data Quality Checklist</h3>
<ol>
<li>State the scope: which sources, materials and time periods are included.</li>
<li>Identify the measurement point for every reported rate.</li>
<li>Check for mass balance between collected, sorted and reprocessed quantities.</li>
<li>Report sampling methods and uncertainty for composition estimates.</li>
<li>Separate measured values from estimated or modeled values.</li>
<li>Track definitions over time so trend changes are not artifacts of method changes.</li>
</ol>
`,
        GRADUATE: `
<h2>Waste Statistics, Material Flow Analysis and Policy Indicators</h2>
<p>At the policy level, waste data shapes targets, funding and accountability. Governments set recycling and reduction goals, assign producer obligations and judge program success using indicators. The choice and design of those indicators has real consequences: what gets measured gets managed, and what is mismeasured can be mismanaged. This lesson examines official waste statistics, material flow analysis and indicator design.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Material flow analysis:</strong> a systematic method that tracks flows and stocks of materials through a defined system using mass balance</li>
<li><strong>Economy-wide material flow accounts:</strong> national-level accounts of materials extracted, imported, exported and consumed</li>
<li><strong>Circular material use rate:</strong> an indicator of the share of material use that comes from recovered waste materials</li>
<li><strong>Decoupling:</strong> a situation where waste generation grows more slowly than, or falls while, economic activity grows</li>
<li><strong>Leading indicator:</strong> a measure that signals future outcomes, such as the share of products designed for reuse</li>
<li><strong>Perverse incentive:</strong> a policy signal that unintentionally rewards behavior contrary to the policy goal</li>
</ul>

<h3>Material Flow Analysis in Practice</h3>
<p>Material flow analysis maps a system's processes, such as production, use, collection, sorting and recycling, and quantifies the flows between them. Because mass must balance, MFA exposes gaps: missing tonnages, unrecorded exports or unknown fates. Analysts reconcile data from many sources and document uncertainty. MFA helps identify intervention points, for example showing that most losses of a material happen at collection rather than at reprocessing, which shifts policy attention toward collection systems.</p>

<h3>Designing Indicators</h3>
<table>
<thead><tr><th>Indicator type</th><th>Example</th><th>Policy risk</th></tr></thead>
<tbody>
<tr><td>Weight-based recycling rate</td><td>Percent of municipal waste recycled by mass</td><td>Rewards heavy materials and downcycling over high-impact light materials</td></tr>
<tr><td>Generation per capita</td><td>Kilograms of waste per person per year</td><td>Affected by tourism, commuters and business waste in municipal streams</td></tr>
<tr><td>Disposal per capita</td><td>Landfill and incineration per person</td><td>May encourage export of waste rather than reduction</td></tr>
<tr><td>Impact-weighted indicators</td><td>Carbon or toxicity avoided by recovery</td><td>Complex, depends on contested methods</td></tr>
<tr><td>Reuse and prevention indicators</td><td>Share of refillable packaging on the market</td><td>Hard to verify and standardize</td></tr>
</tbody>
</table>
<p>Weight-based targets are simple and auditable but can distort priorities. Glass and construction waste weigh a lot, so collecting them can lift rates while lighter materials with larger environmental footprints, such as plastics and electronics, receive less attention. Many analysts recommend combining weight-based indicators with impact-based and prevention indicators.</p>

<h3>Governance and Institutional Barriers</h3>
<p>Data ownership is fragmented among municipalities, private haulers, producer responsibility organizations and recyclers. Commercial confidentiality limits disclosure, and reporting burdens fall heavily on small actors. Digital tracking, such as electronic waste transfer notes and mandatory facility reporting, can improve coverage, but requires investment and legal frameworks. Data gaps are typically largest in informal waste sectors, where waste pickers recover significant volumes that rarely appear in official statistics.</p>

<h3>Equity in Measurement</h3>
<p>Indicators can obscure who bears burdens. National averages hide neighborhoods with poor collection service, and export of waste moves impacts to other countries. Recognizing informal workers in data systems is both an accuracy issue and a matter of fairness, because invisible work is easily displaced by policy.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Define the policy goal before choosing indicators.</li>
<li>Pair outcome indicators with leading and process indicators.</li>
<li>Specify measurement points, scope and methods in regulation.</li>
<li>Use MFA to check plausibility and reveal unrecorded flows.</li>
<li>Test indicators for perverse incentives before adopting targets.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in Waste Measurement, Uncertainty and Modeling</h2>
<p>Waste research increasingly depends on quantitative models that combine incomplete data from many sources. The credibility of conclusions about recycling performance, circularity and environmental impact rests on how measurement error and uncertainty are handled. This lesson surveys methodological approaches, contested issues and open research directions in waste data science.</p>

<h3>Methods and Concepts</h3>
<ul>
<li><strong>Data reconciliation:</strong> adjusting conflicting measurements so that they satisfy mass balance constraints while respecting their relative reliability</li>
<li><strong>Bayesian material flow analysis:</strong> treating flows as probability distributions updated by data, so prior knowledge and uncertain observations are combined formally</li>
<li><strong>Dynamic stock modeling:</strong> estimating future waste flows from products in use based on inflows and lifetime distributions</li>
<li><strong>Monte Carlo simulation:</strong> repeated random sampling of uncertain inputs to estimate the distribution of model outputs</li>
<li><strong>Sensitivity analysis:</strong> examining how changes in each input affect results to identify which parameters matter most</li>
<li><strong>Data pedigree matrix:</strong> a semi-quantitative scoring of data quality by criteria such as reliability, completeness and representativeness</li>
</ul>

<h3>Uncertainty Characterization</h3>
<p>Waste data contain several distinct kinds of uncertainty: random sampling error in composition studies, systematic bias from definitions and measurement points, model uncertainty from structural assumptions, and deep uncertainty about future behavior and technology. Many published MFAs report point estimates without uncertainty, or assign uncertainties using expert judgment. Bayesian and reconciliation approaches make assumptions explicit, but results can be sensitive to priors and to how correlated errors are represented.</p>

<h3>Dynamic Modeling of Waste Generation</h3>
<p>For durable goods such as electronics, vehicles and buildings, future waste depends on past inflows and on how long products stay in use. Lifetime distributions are often poorly known and change with design, repair and markets. Small changes in assumed lifetimes can shift projected waste flows substantially, which matters for planning recycling capacity and estimating secondary material supply.</p>

<h3>Contested Questions</h3>
<table>
<thead><tr><th>Question</th><th>Why it is contested</th></tr></thead>
<tbody>
<tr><td>Mass versus impact as the basis for circularity metrics</td><td>Mass is measurable; impact is meaningful but method-dependent</td></tr>
<tr><td>Counting exports as recycling</td><td>The fate of exported material is often unverifiable</td></tr>
<tr><td>Measuring prevention</td><td>Requires counterfactual baselines that cannot be observed directly</td></tr>
<tr><td>Representing informal recovery</td><td>Large flows exist outside official data, estimated with scarce evidence</td></tr>
<tr><td>Comparability across jurisdictions</td><td>Harmonization can erase locally meaningful distinctions</td></tr>
</tbody>
</table>

<h3>Emerging Data Sources</h3>
<p>Sensors in bins and trucks, computer vision at sorting facilities, digital product passports and remote sensing of dumpsites promise richer data. They raise their own questions: algorithmic classification error, representativeness of instrumented sites, privacy for households, and the governance of proprietary data. Integrating these sources with traditional statistics requires methods for combining data of differing resolution and quality.</p>

<h3>Methodological Debates</h3>
<p>Researchers debate whether to prioritize transparent, simple accounting that policymakers can audit, or sophisticated probabilistic models that better represent reality but are harder to communicate. There is also debate about the appropriate level of aggregation: fine material categories improve insight but increase sampling burden and uncertainty per category. Reproducibility of MFA studies is limited when underlying data are proprietary.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Standardized, open uncertainty reporting for waste statistics and MFA studies.</li>
<li>Robust methods for estimating prevention against credible counterfactuals.</li>
<li>Validation of sensor and computer vision data against manual characterization.</li>
<li>Better lifetime and stock models for durable goods under changing repair and reuse practices.</li>
<li>Approaches that integrate informal sector flows ethically and accurately.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'zwdataq1',
      question: {
        ELEMENTARY: 'Why do trash detectives count trash?',
        MIDDLE_SCHOOL: 'What is a waste audit?',
        HIGH_SCHOOL: 'What is a diversion rate?',
        UNDERGRADUATE: 'Why does the measurement point matter for a recycling rate?',
        GRADUATE: 'What is material flow analysis?',
        PHD: 'What does data reconciliation do in waste flow studies?',
      },
      options: {
        ELEMENTARY: ['To learn how to make less trash', 'To make more trash', 'To win a prize for the biggest pile', 'For no reason'],
        MIDDLE_SCHOOL: ['Sorting and weighing waste to find out what is thrown away', 'Checking a bank account', 'Counting garbage trucks on the road', 'Painting recycling bins'],
        HIGH_SCHOOL: ['The share of waste sent to recycling, composting or reuse instead of disposal', 'The number of roads trucks take', 'The weight of a garbage truck', 'The total amount of all waste'],
        UNDERGRADUATE: ['Rates measured at collection include material later rejected or not recycled', 'All measurement points give the same result', 'Only the landfill gate matters', 'Measurement point only affects costs'],
        GRADUATE: ['A method tracking flows and stocks of materials through a system using mass balance', 'A study of water in pipes', 'A traffic survey of trucks', 'A survey of public opinion'],
        PHD: ['Adjusts conflicting measurements to satisfy mass balance while weighting their reliability', 'Deletes data that disagrees', 'Adds random noise to results', 'Replaces data with guesses'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Counting shows us what we throw away most, so we can make a plan to make less.',
        MIDDLE_SCHOOL: 'A waste audit sorts and weighs waste by category to see what materials are being thrown away.',
        HIGH_SCHOOL: 'Diversion rate is the percentage kept out of landfill or incineration through recycling, composting and reuse.',
        UNDERGRADUATE: 'Collected material includes contaminants and rejects, so rates measured closer to reprocessing are lower but more honest.',
        GRADUATE: 'MFA maps processes and quantifies flows between them, using mass balance to expose gaps.',
        PHD: 'Reconciliation uses mass balance constraints and relative data reliability to resolve inconsistent measurements.',
      },
    },
    {
      id: 'zwdataq2',
      question: {
        ELEMENTARY: 'What tool helps you find out how heavy your trash piles are?',
        MIDDLE_SCHOOL: 'A school makes 100 kg of waste: 30 kg recycled, 20 kg composted. What is its diversion rate?',
        HIGH_SCHOOL: 'What does a waste characterization study find out?',
        UNDERGRADUATE: 'Why can a small number of composition samples give unreliable results?',
        GRADUATE: 'Why can weight-based recycling targets distort priorities?',
        PHD: 'What is dynamic stock modeling used for?',
      },
      options: {
        ELEMENTARY: ['A ruler', 'A scale', 'A clock', 'A paintbrush'],
        MIDDLE_SCHOOL: ['20 percent', '50 percent', '30 percent', '100 percent'],
        HIGH_SCHOOL: ['How fast trucks drive', 'What materials make up a waste stream', 'How many bins a city owns', 'Who owns the landfill'],
        UNDERGRADUATE: ['Waste is always the same everywhere', 'Composition varies greatly between loads, giving wide confidence intervals', 'Samples are too heavy to weigh', 'Scales are never accurate'],
        GRADUATE: ['Weight is impossible to measure', 'Heavy materials lift rates while lighter, high-impact materials get less attention', 'Light materials always dominate weight', 'Weight targets ban recycling'],
        PHD: ['Estimating future waste flows from products in use and their lifetimes', 'Counting animals in landfills', 'Measuring stock market prices', 'Forecasting the weather'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'A scale tells you how heavy something is, so you can compare the weight of each trash pile.',
        MIDDLE_SCHOOL: '30 plus 20 equals 50 kg diverted. 50 out of 100 is 50 percent.',
        HIGH_SCHOOL: 'Characterization studies sample and sort waste to estimate its composition by material.',
        UNDERGRADUATE: 'Because loads vary so much, more samples and stratified sampling are needed for precise estimates.',
        GRADUATE: 'Glass and construction waste are heavy, so they can raise rates while plastics and electronics are neglected.',
        PHD: 'Dynamic stock models use past inflows and lifetime distributions to project when durable goods become waste.',
      },
    },
    {
      id: 'zwdataq3',
      question: {
        ELEMENTARY: 'After you make a plan to waste less, what should you do?',
        MIDDLE_SCHOOL: 'What is a baseline?',
        HIGH_SCHOOL: 'What is a contamination rate?',
        UNDERGRADUATE: 'What is mass balance in waste accounting?',
        GRADUATE: 'Why do official statistics often miss informal waste recovery?',
        PHD: 'What does a Monte Carlo simulation do?',
      },
      options: {
        ELEMENTARY: ['Never look at your trash again', 'Throw away the chart', 'Do another trash check later to see if it worked', 'Make the biggest pile bigger'],
        MIDDLE_SCHOOL: ['The bottom of a trash can', 'The last measurement taken', 'The first measurement, used to compare later results', 'A type of recycling bin'],
        HIGH_SCHOOL: ['How fast waste rots', 'The number of bins in a city', 'The share of material in a recycling or compost stream that does not belong there', 'The speed of a sorting belt'],
        UNDERGRADUATE: ['Weighing only the heaviest items', 'Balancing a scale with weights', 'The principle that inputs equal outputs plus changes in stock', 'A balance sheet of costs'],
        GRADUATE: ['Informal recovery does not happen', 'Informal workers report every tonne', 'Waste pickers recover significant volumes that rarely appear in official data', 'Statistics include everything automatically'],
        PHD: ['Picks one best guess for every input', 'Removes all uncertainty', 'Repeatedly samples uncertain inputs to estimate the distribution of outputs', 'Tests casino games'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Checking again shows whether your biggest pile got smaller, just like a detective checking their work.',
        MIDDLE_SCHOOL: 'A baseline is the starting measurement you compare against to see if things are improving.',
        HIGH_SCHOOL: 'Contamination rate measures wrong items in a recycling or compost stream, which lowers its quality.',
        UNDERGRADUATE: 'Mass balance says what goes into a process must equal what comes out plus any change in stored material.',
        GRADUATE: 'Informal recovery is large in many places but is rarely recorded, creating data gaps and fairness concerns.',
        PHD: 'Monte Carlo simulation runs a model many times with randomly sampled inputs to show the range of possible results.',
      },
    },
    {
      id: 'zwdataq4',
      question: {
        ELEMENTARY: 'If your biggest trash pile is food scraps, what could you try?',
        MIDDLE_SCHOOL: 'Why do experts track waste per person as well as diversion rate?',
        HIGH_SCHOOL: 'Why should you be careful comparing diversion rates between cities?',
        UNDERGRADUATE: 'What does a confidence interval express?',
        GRADUATE: 'Which indicator type best signals future outcomes?',
        PHD: 'Why is measuring waste prevention methodologically difficult?',
      },
      options: {
        ELEMENTARY: ['Buy more snacks in wrappers', 'Throw food in the recycling bin', 'Leave food on the floor', 'Compost or take smaller portions'],
        MIDDLE_SCHOOL: ['Diversion rate is always wrong', 'People like bigger numbers', 'Per person data is easier to sort', 'A good rate can hide growing total waste'],
        HIGH_SCHOOL: ['All cities use identical definitions', 'Diversion rates are secret', 'Cities never measure waste', 'They may count different materials, such as construction debris or energy recovery'],
        UNDERGRADUATE: ['The exact true value', 'The weight of the sample bag', 'The cost of the study', 'A range showing how precise a sampled estimate is likely to be'],
        GRADUATE: ['Disposal per capita last year', 'Total tonnes landfilled in the past', 'The number of landfills closed', 'A leading indicator, such as the share of products designed for reuse'],
        PHD: ['Prevention is always zero', 'Prevented waste is easy to weigh', 'Only landfills can measure it', 'It requires counterfactual baselines that cannot be directly observed'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Composting food scraps and taking smaller portions both shrink the food pile.',
        MIDDLE_SCHOOL: 'If total waste doubles, the landfill pile can grow even when the diversion rate stays the same.',
        HIGH_SCHOOL: 'Different definitions, like including construction debris, can make rates look very different.',
        UNDERGRADUATE: 'A confidence interval gives the range within which the true value likely lies, given sampling uncertainty.',
        GRADUATE: 'Leading indicators signal future change, unlike outcome indicators that report what already happened.',
        PHD: 'Prevented waste never appears, so measuring it requires estimating what would have happened otherwise.',
      },
    },
    {
      id: 'zwdataq5',
      question: {
        ELEMENTARY: 'What is a chart?',
        MIDDLE_SCHOOL: 'In a waste audit, why collect waste without warning people first?',
        HIGH_SCHOOL: 'What is a weighbridge used for?',
        UNDERGRADUATE: 'Why should reports separate measured values from estimated values?',
        GRADUATE: 'What is a perverse incentive in waste policy?',
        PHD: 'Which issue is raised by new sensor and computer vision waste data?',
      },
      options: {
        ELEMENTARY: ['A picture of boxes or bars that shows numbers so they are easy to compare', 'A type of trash bag', 'A recycling truck', 'A compost pile'],
        MIDDLE_SCHOOL: ['So they do not change their habits and the results stay realistic', 'Because audits are secret forever', 'To make the trash heavier', 'So nobody recycles'],
        HIGH_SCHOOL: ['Weighing trucks entering and leaving a facility', 'Crossing rivers with trash', 'Sorting plastic by color', 'Measuring rainfall'],
        UNDERGRADUATE: ['Readers can judge reliability and spot method-driven changes', 'Estimates are always more accurate', 'Measured values are never needed', 'It makes reports shorter'],
        GRADUATE: ['A signal that unintentionally rewards behavior contrary to the policy goal', 'A reward for reducing waste', 'A tax on recycling', 'A fine for littering'],
        PHD: ['Classification error and representativeness of instrumented sites', 'Sensors make all data perfect', 'There are no privacy questions', 'Manual sorting is no longer needed for validation'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Charts turn numbers into pictures so you can quickly see which trash pile is biggest.',
        MIDDLE_SCHOOL: 'If people know an audit is coming, they may sort better than usual, so results would not be realistic.',
        HIGH_SCHOOL: 'A weighbridge is a large scale that records truck weights, giving accurate tonnages.',
        UNDERGRADUATE: 'Separating measured from modeled values shows reliability and prevents method changes looking like real trends.',
        GRADUATE: 'Perverse incentives reward the wrong behavior, such as exporting waste to meet disposal targets.',
        PHD: 'Algorithmic errors and unrepresentative instrumented sites mean new data still need validation against manual methods.',
      },
    },
  ],
}

export default expansion
