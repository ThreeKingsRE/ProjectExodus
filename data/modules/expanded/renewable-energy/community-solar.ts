import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'renewable-energy',
  moduleKey: 'community-solar',
  lessons: [
    {
      id: 're-cs-1',
      title: 'Sharing Solar',
      content: {
        ELEMENTARY: `
<h2>A Solar Garden for the Whole Neighborhood</h2>
<p>Have you ever seen a community garden, where neighbors share one big patch of land and everybody grows vegetables together? A solar garden is a lot like that, but instead of carrots and tomatoes, it grows electricity from sunshine! Lots of families can share one big group of solar panels, even if they cannot put panels on their own homes.</p>

<h3>Why Can't Every Home Have Solar Panels?</h3>
<p>Some homes have roofs that are too shady because of tall trees. Some people live in apartments, so they do not have their own roof at all. Some families rent their homes and cannot change the roof. A solar garden lets all of these families enjoy sunshine power too.</p>
<ul>
<li><strong>Solar panel:</strong> a flat sheet that turns sunlight into electricity</li>
<li><strong>Solar garden:</strong> a big group of solar panels that many families share</li>
<li><strong>Neighbor:</strong> a person who lives close to you in your town or building</li>
</ul>

<h3>How Does Sharing Work?</h3>
<p>The solar garden sits in a sunny field or on top of a big building. It sends its electricity into the power lines that carry electricity all over town. Each family that joins gets a share of the garden. The electricity company keeps track of each share and takes a little money off that family's electric bill. It is like each family owns a few panels, even though the panels are far away.</p>
<ul>
<li><strong>Power lines:</strong> wires on poles or under the ground that carry electricity to homes</li>
<li><strong>Share:</strong> a piece of something that belongs to you when a group splits it up</li>
<li><strong>Electric bill:</strong> the paper or message that tells a family how much to pay for electricity</li>
</ul>

<h3>Why Solar Gardens Are Great</h3>
<ol>
<li>More families can use clean energy from the sun.</li>
<li>Families can save money on their electric bills.</li>
<li>Sunny land or big flat roofs get put to good use.</li>
<li>Neighbors work together on something good for the planet.</li>
</ol>

<h3>A Story to Imagine</h3>
<p>Maya lives in an apartment on the fifth floor. She cannot put solar panels on her window. But her family joined a solar garden just outside town. Now, every sunny day, the garden's panels make electricity, and Maya's family gets a little credit on their bill. Maya likes to say that the sun is helping her family even when she is at school!</p>

<h3>What You Can Do</h3>
<p>Look around your town for big fields or roofs covered in panels. Ask a grown-up if there is a solar garden nearby that families can join. And remember, turning off lights you are not using is a great way to help too!</p>
`,
        MIDDLE_SCHOOL: `
<h2>Solar Power for People Without Sunny Roofs</h2>
<p>Rooftop solar is a great choice for some homes, but many people cannot use it. Renters, people in apartments, homes with shady or old roofs, and families who cannot afford the upfront cost are often left out. Community solar is a way to fix that. It lets many people share the benefits of one larger solar project located somewhere else in the same area.</p>

<h3>How Community Solar Works</h3>
<ol>
<li>A developer, utility or community group builds a solar array on a sunny field, parking lot or large roof.</li>
<li>The array connects to the local electricity grid and sends its power into it.</li>
<li>Households and businesses sign up as subscribers or buy a share of the project.</li>
<li>The utility measures how much electricity the array produces each month.</li>
<li>Each subscriber gets a bill credit based on their share of that production.</li>
</ol>
<p>The electricity from the array does not travel directly into a subscriber's home. Instead, it mixes into the grid like water poured into a lake, and the credit on the bill is how subscribers receive the benefit.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Community solar:</strong> a shared solar project whose benefits go to many local subscribers</li>
<li><strong>Subscriber:</strong> a person or business that signs up to receive part of a shared solar project's output</li>
<li><strong>Bill credit:</strong> money or energy taken off a customer's electric bill for their share of solar production</li>
<li><strong>Solar array:</strong> a large group of solar panels connected together</li>
<li><strong>Developer:</strong> the company or group that plans, builds and runs a solar project</li>
<li><strong>Upfront cost:</strong> money that must be paid at the start before any savings arrive</li>
</ul>

<h3>Rooftop Solar Versus Community Solar</h3>
<table>
<thead><tr><th>Question</th><th>Rooftop solar</th><th>Community solar</th></tr></thead>
<tbody>
<tr><td>Need your own sunny roof?</td><td>Yes</td><td>No</td></tr>
<tr><td>Works for renters?</td><td>Usually not</td><td>Often yes</td></tr>
<tr><td>Upfront cost</td><td>Often high unless leased</td><td>Often low or none for subscriptions</td></tr>
<tr><td>Can you take it with you when you move?</td><td>No, it stays on the house</td><td>Often yes, within the same utility area</td></tr>
<tr><td>Size of project</td><td>Small</td><td>Larger, which can lower cost per panel</td></tr>
</tbody>
</table>

<h3>Why It Matters</h3>
<p>Community solar spreads clean energy and savings to more people. Larger arrays can be cheaper per panel than many small ones. It also gives towns, schools, churches and local groups a way to work together on clean energy. Not every place has community solar yet, because it depends on local rules that allow shared projects and bill credits.</p>
`,
        HIGH_SCHOOL: `
<h2>Community Solar Models and Virtual Net Metering</h2>
<p>Roughly half of households in many countries cannot host rooftop solar because they rent, live in multi-unit buildings, have unsuitable roofs or lack access to financing. Community solar addresses this access gap by separating where solar is generated from who benefits. Making that separation work requires specific program designs and billing rules. This lesson explores the main models, how virtual net metering works and what trade-offs program designers face.</p>

<h3>Ownership and Participation Models</h3>
<table>
<thead><tr><th>Model</th><th>How participants join</th><th>Trade-off</th></tr></thead>
<tbody>
<tr><td>Subscription</td><td>Pay a monthly fee or a share of credits for a portion of output</td><td>Low upfront cost, but savings depend on the contract terms</td></tr>
<tr><td>Ownership (purchase)</td><td>Buy panels or shares in the project upfront</td><td>Larger long-term savings, but needs capital</td></tr>
<tr><td>Utility-sponsored</td><td>Sign up through the utility's own program</td><td>Simple and trusted, but options may be limited</td></tr>
<tr><td>Cooperative or nonprofit</td><td>Become a member of a community-owned project</td><td>Local control and benefits, but harder to finance</td></tr>
</tbody>
</table>

<h3>Virtual Net Metering</h3>
<p>Regular net metering credits a solar owner for electricity their own panels send back to the grid through their own meter. Virtual net metering extends this idea: the solar project has its own meter, and the utility divides the credits for that production among subscribers' accounts according to their shares. Subscribers see these credits on their regular bills even though the panels are miles away.</p>
<ul>
<li><strong>Net metering:</strong> a billing rule that credits customers for solar electricity their system sends to the grid</li>
<li><strong>Virtual net metering:</strong> a billing rule that splits credits from one off-site solar project among many customer accounts</li>
<li><strong>Credit rate:</strong> the value assigned to each kilowatt-hour of shared solar on a subscriber's bill</li>
<li><strong>Enabling legislation:</strong> a law that permits shared solar projects and sets the rules for them</li>
<li><strong>Anchor subscriber:</strong> a large customer, such as a school or business, that takes a big share and steadies the project</li>
<li><strong>Interconnection:</strong> the approval and equipment needed to connect a project safely to the grid</li>
</ul>

<h3>Real-World Applications</h3>
<p>Community solar arrays may be built on farmland, closed landfills, brownfield sites, parking canopies and warehouse roofs. Some projects pair solar with grazing or pollinator-friendly plants underneath. Schools and local governments often join as anchor subscribers, while households fill smaller shares.</p>

<h3>Trade-offs and Challenges</h3>
<ol>
<li><strong>Credit value:</strong> if the credit rate is low, subscribers may see little savings and developers may struggle to finance projects.</li>
<li><strong>Customer protection:</strong> long contracts, cancellation fees or confusing terms can hurt subscribers, so clear disclosure matters.</li>
<li><strong>Land use:</strong> large ground-mounted arrays can compete with farming or habitat unless sited carefully.</li>
<li><strong>Grid capacity:</strong> local power lines may need upgrades to accept new projects.</li>
<li><strong>Who benefits:</strong> without targeted rules, subscriptions may go mainly to households that already had other options.</li>
</ol>

<h3>Solutions</h3>
<p>Well-designed programs set fair credit rates, require plain-language contracts, encourage siting on rooftops and disturbed lands, and reserve a portion of capacity for lower-income households with guaranteed savings.</p>
`,
        UNDERGRADUATE: `
<h2>Community Solar Economics, Policy and Project Development</h2>
<p>Community solar sits between utility-scale and rooftop solar in size, cost and complexity. Its economics depend less on panel prices, which are broadly similar across segments, and more on the policy rules that convert generation into subscriber value. Understanding those rules, the developer's financial model and the project development pipeline is essential for evaluating any program.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Bill credit value:</strong> the monetary value assigned per kilowatt-hour of subscribed generation, set by policy or tariff</li>
<li><strong>Subscriber discount:</strong> the percentage by which a subscriber's payment is lower than the credit they receive</li>
<li><strong>Customer acquisition cost:</strong> the cost of marketing, enrolling and verifying subscribers for a project</li>
<li><strong>Churn:</strong> the rate at which subscribers leave and must be replaced to keep a project fully subscribed</li>
<li><strong>Power purchase agreement:</strong> a contract to buy electricity or credits at a set price over many years</li>
<li><strong>Value of distributed energy resources:</strong> a compensation approach that prices credits by components such as energy, capacity and environmental value</li>
</ul>

<h3>The Value Chain</h3>
<p>In a typical subscription model, the project generates credits worth a set amount per kilowatt-hour. The subscriber pays the developer slightly less than the credit, for example a fixed percentage discount, so the subscriber's net savings equal the credit minus the payment. The developer's revenue equals subscriber payments plus any incentives or renewable energy certificate sales, minus costs for capital, land lease, operation, billing administration and customer acquisition. Because the subscriber discount comes out of the credit value, a lower credit rate squeezes either developer margins or subscriber savings.</p>

<h3>Cost Drivers Compared</h3>
<table>
<thead><tr><th>Cost element</th><th>Rooftop residential</th><th>Community solar</th><th>Utility scale</th></tr></thead>
<tbody>
<tr><td>Hardware per watt</td><td>Higher, small volume</td><td>Moderate</td><td>Lowest</td></tr>
<tr><td>Installation labor per watt</td><td>Highest</td><td>Moderate</td><td>Lowest</td></tr>
<tr><td>Customer acquisition</td><td>High per customer</td><td>Significant, many small subscribers</td><td>Minimal, one buyer</td></tr>
<tr><td>Interconnection</td><td>Usually simple</td><td>Can be costly at distribution level</td><td>Transmission-level studies</td></tr>
<tr><td>Billing and administration</td><td>Minimal</td><td>Ongoing, per subscriber</td><td>Minimal</td></tr>
</tbody>
</table>

<h3>Policy Frameworks</h3>
<p>Programs differ on several design levers: whether a statewide program exists or projects are utility-by-utility, project size caps, total program capacity, credit rate methodology, subscriber eligibility and location rules, minimum numbers of subscribers per project, and carve-outs for low- and moderate-income participants. Credit rates tied to the full retail rate are simple and generous; rates tied to value-based components are more cost-reflective but can be harder to forecast and finance.</p>

<h3>Project Development Pipeline</h3>
<ol>
<li><strong>Site control:</strong> secure land or roof rights, checking zoning, setbacks and environmental constraints.</li>
<li><strong>Interconnection application:</strong> enter the utility queue and complete studies on feeder capacity.</li>
<li><strong>Program enrollment:</strong> obtain a capacity allocation under the community solar program.</li>
<li><strong>Financing:</strong> combine equity, debt and incentives; lenders scrutinize subscriber credit and churn.</li>
<li><strong>Subscriber acquisition:</strong> enroll enough subscribers, often with an anchor customer.</li>
<li><strong>Construction and operation:</strong> build, then manage billing, replacements and maintenance for decades.</li>
</ol>

<h3>Analytical Checklist</h3>
<p>To evaluate a program, estimate the credit value over time, the subscriber's net savings under realistic terms, the developer's internal rate of return under different churn assumptions, and the share of participants who could not have accessed solar otherwise. A program that is profitable but enrolls mostly households with rooftop options delivers less additional access than its capacity suggests.</p>
`,
        GRADUATE: `
<h2>Equitable Access and Innovative Finance in Community Solar</h2>
<p>Community solar is often promoted as the equity solution for clean energy, but access does not automatically mean benefit. Lower-income households face credit screening, distrust of energy contracts, language barriers and high energy burdens. Graduate analysis focuses on how program design, finance and governance determine who actually participates and who captures value.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Energy burden:</strong> the share of household income spent on energy bills, which is typically highest for low-income households</li>
<li><strong>Low-income carve-out:</strong> a requirement that a portion of program capacity serves income-qualified subscribers</li>
<li><strong>Consolidated billing:</strong> a system where the utility bills both the credit and the subscription fee on one statement</li>
<li><strong>Credit screening:</strong> checking a customer's credit history before enrollment, which can exclude low-income households</li>
<li><strong>Community ownership:</strong> a structure where residents or local organizations hold equity and share in returns</li>
<li><strong>Guaranteed savings:</strong> a contract term ensuring subscribers always pay less than the credit they receive</li>
</ul>

<h3>Barriers to Equitable Participation</h3>
<table>
<thead><tr><th>Barrier</th><th>Effect</th><th>Design response</th></tr></thead>
<tbody>
<tr><td>Credit score requirements</td><td>Excludes many lower-income and younger households</td><td>Use utility payment history or remove screening</td></tr>
<tr><td>Separate bills from developer and utility</td><td>Confusion and risk of missed payments</td><td>Consolidated or net-crediting billing</td></tr>
<tr><td>Long contracts and exit fees</td><td>Risk for households that move frequently</td><td>Portable subscriptions, no-penalty exit</td></tr>
<tr><td>High customer acquisition cost</td><td>Developers avoid harder-to-reach communities</td><td>Automatic enrollment through assistance programs, trusted local partners</td></tr>
<tr><td>Small or uncertain savings</td><td>Weak value for households with high energy burden</td><td>Minimum guaranteed discount for income-qualified subscribers</td></tr>
</tbody>
</table>

<h3>Innovative Financing Models</h3>
<ol>
<li><strong>Public or green bank financing</strong> can lower capital costs and accept credit risks private lenders avoid.</li>
<li><strong>Anchor tenant structures</strong> use public buildings or institutions to stabilize revenue, letting the rest of the project serve households without screening.</li>
<li><strong>Utility-administered programs</strong> can enroll customers already receiving bill assistance, reducing acquisition costs.</li>
<li><strong>Cooperative ownership</strong> lets members capture returns locally rather than only receiving a discount.</li>
<li><strong>Philanthropic or public grants</strong> can buy down costs to deepen savings for low-income participants.</li>
</ol>

<h3>Governance and Community Benefit</h3>
<p>Beyond bill savings, community solar can provide local jobs, workforce training, lease income for landowners and revenue for local governments. Projects on Tribal lands can support energy sovereignty when Tribal nations own and govern them on their own terms. Meaningful engagement means involving communities in siting, ownership and benefit decisions, not only marketing subscriptions to them.</p>

<h3>Utility and Ratepayer Impacts</h3>
<p>Critics argue that generous credits may shift some fixed grid costs to non-participants, while supporters note that distributed generation can reduce line losses and defer upgrades. The answer depends on the credit rate relative to the value the project actually provides, and on whether low-income customers are participants or merely non-participating ratepayers. Equity analysis must therefore examine both sides of the ledger.</p>

<h3>Evaluation Framework</h3>
<p>Assess programs on access (who enrolls compared with the eligible population), benefit (net savings relative to energy burden), protection (contract terms and complaint rates), ownership (who holds equity), and system effects (cost shifts and grid value). Tracking these consistently over time is what distinguishes genuine equity programs from those that only label themselves as such.</p>
`,
        PHD: `
<h2>Research Frontiers: Siting, Subscriber Management and Policy Effectiveness</h2>
<p>Community solar research draws on power systems engineering, spatial analysis, behavioral economics and policy evaluation. The key questions are where projects should go to maximize grid and social value, how subscriber portfolios can be managed efficiently and fairly, and whether programs actually deliver their stated goals. Each area involves methodological challenges that doctoral work can address.</p>

<h3>Optimal Siting</h3>
<p>Siting decisions can be framed as multi-criteria or optimization problems that balance hosting capacity on distribution feeders, land cost and suitability, ecological and agricultural constraints, proximity to subscribers or disadvantaged communities, and interconnection cost. Techniques include geospatial suitability analysis, power flow modeling of feeder impacts, and mixed-integer optimization of project portfolios.</p>
<ul>
<li><strong>Hosting capacity:</strong> the amount of generation a distribution feeder can accept without violating voltage, thermal or protection limits</li>
<li><strong>Geospatial suitability analysis:</strong> layering spatial data such as slope, land cover and grid proximity to rank candidate sites</li>
<li><strong>Locational value:</strong> the grid benefit of generation at a specific location, such as deferring upgrades or reducing losses</li>
<li><strong>Agrivoltaics:</strong> combining solar arrays with crops or grazing on the same land</li>
<li><strong>Difference-in-differences:</strong> a causal method comparing changes over time between affected and unaffected groups</li>
<li><strong>Selection bias:</strong> distortion that arises when participants differ systematically from non-participants</li>
</ul>

<h3>Subscriber Management</h3>
<p>Developers manage portfolios of many subscribers with differing loads, credit profiles and churn probabilities. Allocating shares so credits do not exceed each subscriber's bill, while minimizing unsubscribed capacity, is an assignment problem that becomes harder with variable production and seasonal loads. Research applies stochastic optimization and churn prediction, but raises ethical concerns if predictive models systematically screen out lower-income or minority households. Fairness-constrained allocation is an open area.</p>

<h3>Evaluating Policy Effectiveness</h3>
<table>
<thead><tr><th>Research question</th><th>Methodological challenge</th></tr></thead>
<tbody>
<tr><td>Do programs expand access to new populations?</td><td>Requires subscriber demographics, which are often private or incomplete</td></tr>
<tr><td>Do credit rates drive deployment or just raise profits?</td><td>Separating policy effects from cost declines and other incentives</td></tr>
<tr><td>Do low-income carve-outs deliver real savings?</td><td>Linking billing data with income data while protecting privacy</td></tr>
<tr><td>What are the cost shifts to non-participants?</td><td>Depends on contested assumptions about avoided grid costs</td></tr>
<tr><td>Does participation change energy behavior?</td><td>Self-selection makes participants differ from non-participants</td></tr>
</tbody>
</table>
<p>Quasi-experimental designs such as difference-in-differences across jurisdictions with different program rules, regression discontinuity around eligibility thresholds and synthetic control methods offer ways to estimate causal effects, but each relies on assumptions that must be defended.</p>

<h3>Contested Questions</h3>
<ol>
<li>Is community solar the most cost-effective route to equitable clean energy access, compared with direct bill assistance funded by utility-scale procurement?</li>
<li>Should credits reflect full retail value, avoided cost or locational value, and how should uncertainty in those values be treated?</li>
<li>How should land-use trade-offs between ground-mounted solar, agriculture and habitat be weighed?</li>
<li>What counts as community benefit, and who decides?</li>
</ol>

<h3>Emerging Directions</h3>
<p>Researchers are exploring community solar paired with storage for resilience hubs, dynamic credits that reflect time and location, and integration with distribution system planning so projects are sited where they relieve constraints. There is also growing interest in procedural justice: how decision processes, not just outcomes, affect trust and participation.</p>

<h3>Open Research Directions</h3>
<ul>
<li>Open, privacy-preserving datasets on subscriber demographics and savings.</li>
<li>Co-optimization of siting for grid value and equity in a single framework.</li>
<li>Fairness-aware subscriber allocation algorithms.</li>
<li>Comparative causal evaluation of program designs across jurisdictions.</li>
<li>Long-term studies of community ownership outcomes.</li>
</ul>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'rcsq1',
      question: {
        ELEMENTARY: 'What is a solar garden?',
        MIDDLE_SCHOOL: 'How do community solar subscribers receive their benefit?',
        HIGH_SCHOOL: 'What does virtual net metering do?',
        UNDERGRADUATE: 'How are a subscriber net savings calculated in a typical subscription model?',
        GRADUATE: 'What is energy burden?',
        PHD: 'What is hosting capacity?',
      },
      options: {
        ELEMENTARY: ['A big group of solar panels that many families share', 'A garden where only sunflowers grow', 'A playground with lights', 'A greenhouse for tomatoes'],
        MIDDLE_SCHOOL: ['Through a bill credit based on their share of production', 'Through wires running straight from the panels to their home', 'Through free panels on their roof', 'Through a monthly delivery of batteries'],
        HIGH_SCHOOL: ['Splits credits from one off-site solar project among many customer accounts', 'Lets meters work without electricity', 'Measures sunlight in the sky', 'Stores solar power in the meter'],
        UNDERGRADUATE: ['The bill credit received minus the payment made to the developer', 'The panel price divided by roof size', 'The total project cost times the number of subscribers', 'The utility profit plus taxes'],
        GRADUATE: ['The share of household income spent on energy bills', 'The weight of a solar panel', 'The amount of fuel in a power plant', 'The number of appliances in a home'],
        PHD: ['The generation a feeder can accept without violating voltage, thermal or protection limits', 'The number of subscribers in a project', 'The roof area available for panels', 'The storage size of a battery'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'A solar garden is a shared group of solar panels that many families can join, even without their own sunny roof.',
        MIDDLE_SCHOOL: 'The power mixes into the grid, and subscribers get a credit on their bill for their share.',
        HIGH_SCHOOL: 'Virtual net metering divides the project production credits among subscribers according to their shares.',
        UNDERGRADUATE: 'Subscribers receive a credit and pay the developer somewhat less, so the difference is their savings.',
        GRADUATE: 'Energy burden is typically highest for low-income households, which is why savings matter most for them.',
        PHD: 'Hosting capacity limits where projects can connect without costly feeder upgrades.',
      },
    },
    {
      id: 'rcsq2',
      question: {
        ELEMENTARY: 'Who can a solar garden help?',
        MIDDLE_SCHOOL: 'What is one advantage of community solar over rooftop solar for renters?',
        HIGH_SCHOOL: 'What is an anchor subscriber?',
        UNDERGRADUATE: 'Why can a lower credit rate be a problem for community solar?',
        GRADUATE: 'Why can credit score requirements undermine equitable access?',
        PHD: 'Why is selection bias a challenge when evaluating community solar participation?',
      },
      options: {
        ELEMENTARY: ['Only people who live on farms', 'Families who cannot put panels on their own home, like apartment dwellers', 'Only people with big houses', 'Only power companies'],
        MIDDLE_SCHOOL: ['Renters must buy their building first', 'Renters can often join without owning a roof', 'Renters get panels for free on their windows', 'Renters are not allowed to join'],
        HIGH_SCHOOL: ['A metal post holding panels', 'A large customer like a school that takes a big share and steadies the project', 'The first panel installed', 'A person who anchors boats near solar farms'],
        UNDERGRADUATE: ['It increases panel efficiency', 'It squeezes developer margins or subscriber savings because the discount comes from the credit', 'It makes interconnection free', 'It guarantees full subscription'],
        GRADUATE: ['They speed up enrollment for everyone', 'They exclude many lower-income and younger households', 'They lower energy burden automatically', 'They are required by physics'],
        PHD: ['Participants are randomly assigned', 'Participants may differ systematically from non-participants, confounding comparisons', 'Selection bias only affects panel quality', 'There is no data on participants'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Solar gardens help families in apartments, rented homes or shady houses use sunshine power too.',
        MIDDLE_SCHOOL: 'Community solar does not need your own roof, so renters can often participate.',
        HIGH_SCHOOL: 'Anchor subscribers take large shares, making the project easier to finance.',
        UNDERGRADUATE: 'All value flows from the credit, so a lower rate leaves less to share between developer and subscriber.',
        GRADUATE: 'Screening on credit history keeps out many households who would benefit most.',
        PHD: 'Self-selection means simple comparisons can mistake pre-existing differences for program effects.',
      },
    },
    {
      id: 'rcsq3',
      question: {
        ELEMENTARY: 'How does a family in a solar garden save money?',
        MIDDLE_SCHOOL: 'Why can large community solar arrays be cheaper per panel?',
        HIGH_SCHOOL: 'Which is a common place to build a community solar array?',
        UNDERGRADUATE: 'What is churn in a community solar project?',
        GRADUATE: 'What does consolidated billing do?',
        PHD: 'What is agrivoltaics?',
      },
      options: {
        ELEMENTARY: ['They get paid in candy', 'They get a free car', 'They get a little money taken off their electric bill', 'They stop using electricity'],
        MIDDLE_SCHOOL: ['They use smaller panels', 'They do not need the sun', 'Building bigger projects spreads costs over more panels', 'They avoid the grid completely'],
        HIGH_SCHOOL: ['Inside a basement', 'Under the ocean', 'A closed landfill or brownfield site', 'Inside a tunnel'],
        UNDERGRADUATE: ['The noise of inverters', 'The cleaning of panels', 'The rate at which subscribers leave and must be replaced', 'The speed of panel rotation'],
        GRADUATE: ['Combines several utilities into one', 'Removes all bill credits', 'Puts the credit and the subscription fee on one statement', 'Sends bills only by mail'],
        PHD: ['Painting panels green', 'Building solar inside farm buildings only', 'Combining solar arrays with crops or grazing on the same land', 'Using crops to power panels'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'The electricity company takes a little money off the family bill for their share of the garden.',
        MIDDLE_SCHOOL: 'Larger projects can lower the cost per panel compared with many small rooftop systems.',
        HIGH_SCHOOL: 'Closed landfills, brownfields, rooftops and parking canopies are good places that avoid using farmland.',
        UNDERGRADUATE: 'High churn raises acquisition costs and risk, which lenders watch closely.',
        GRADUATE: 'One bill reduces confusion and missed payments, especially for lower-income households.',
        PHD: 'Agrivoltaics lets land produce food and electricity together, easing land-use trade-offs.',
      },
    },
    {
      id: 'rcsq4',
      question: {
        ELEMENTARY: 'Why can some homes not have solar panels on the roof?',
        MIDDLE_SCHOOL: 'Does electricity from a community solar array travel directly into a subscriber home?',
        HIGH_SCHOOL: 'Which protects subscribers in well-designed programs?',
        UNDERGRADUATE: 'Which step usually comes first in community solar project development?',
        GRADUATE: 'How can community ownership differ from a simple subscription?',
        PHD: 'Which method compares changes over time between affected and unaffected groups?',
      },
      options: {
        ELEMENTARY: ['Their roof is painted blue', 'Their roof is too sunny', 'They have a cat', 'Their roof is too shady or they live in an apartment'],
        MIDDLE_SCHOOL: ['Yes, through a special private cable', 'Yes, it is delivered in boxes', 'Only on weekends', 'No, it flows into the grid and subscribers get bill credits'],
        HIGH_SCHOOL: ['Long contracts with high exit fees', 'Hidden terms', 'Credit screening', 'Plain-language contracts and clear disclosure'],
        UNDERGRADUATE: ['Selling credits', 'Paying subscribers', 'Replacing panels', 'Securing site control of land or roof rights'],
        GRADUATE: ['Owners never receive savings', 'Ownership is illegal', 'It always costs more', 'Residents hold equity and share in returns locally'],
        PHD: ['Rainflow counting', 'Power flow modeling', 'Geospatial suitability analysis', 'Difference-in-differences'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Shady roofs, apartments and rented homes make rooftop panels hard, so solar gardens help.',
        MIDDLE_SCHOOL: 'The power joins the grid like water poured into a lake, and the benefit arrives as a bill credit.',
        HIGH_SCHOOL: 'Clear, plain-language terms protect subscribers from confusing or unfair contracts.',
        UNDERGRADUATE: 'Developers first secure land or roof rights, then apply for interconnection and program capacity.',
        GRADUATE: 'Community ownership keeps returns in the community rather than only giving a discount.',
        PHD: 'Difference-in-differences compares before-and-after changes across groups to estimate causal effects.',
      },
    },
    {
      id: 'rcsq5',
      question: {
        ELEMENTARY: 'Where does the solar garden send its electricity?',
        MIDDLE_SCHOOL: 'What is a subscriber?',
        HIGH_SCHOOL: 'What is enabling legislation for community solar?',
        UNDERGRADUATE: 'Which cost is notably higher for community solar than for utility-scale solar?',
        GRADUATE: 'What is a low-income carve-out?',
        PHD: 'What ethical concern arises with predictive churn models in subscriber management?',
      },
      options: {
        ELEMENTARY: ['Into the power lines that carry electricity all over town', 'Into the sky', 'Into a big jar', 'Into the river'],
        MIDDLE_SCHOOL: ['A person or business that signs up for part of a shared solar project output', 'A worker who cleans panels', 'A type of solar panel', 'A power line'],
        HIGH_SCHOOL: ['A law that permits shared solar projects and sets their rules', 'A rule that bans solar panels', 'A tax on sunlight', 'A building permit for houses'],
        UNDERGRADUATE: ['Customer acquisition and per-subscriber billing administration', 'Sunlight', 'Panel color', 'Land in the desert'],
        GRADUATE: ['A requirement that part of program capacity serves income-qualified subscribers', 'A discount on solar panels for developers', 'A type of power line', 'A tax break for large companies only'],
        PHD: ['Models may systematically screen out lower-income or minority households', 'Models always improve fairness', 'Models remove the need for subscribers', 'Models cannot be used for allocation'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'The garden sends electricity into the power lines, and families get credit for their share.',
        MIDDLE_SCHOOL: 'Subscribers sign up to receive part of a shared project benefits.',
        HIGH_SCHOOL: 'Community solar usually depends on laws that allow shared projects and bill credits.',
        UNDERGRADUATE: 'Enrolling and billing many small subscribers adds costs utility-scale projects avoid.',
        GRADUATE: 'Carve-outs reserve capacity so income-qualified households can participate.',
        PHD: 'Predicting churn from personal data can reproduce exclusion, so fairness constraints are an open research area.',
      },
    },
  ],
}

export default expansion
