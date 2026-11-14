import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'water-systems',
  moduleKey: 'water-economics',
  lessons: [
    {
      id: 'ws-econ-1',
      title: 'Water Has Value: Pricing and Economics',
      content: {
        ELEMENTARY: `
<h2>Water Has Value</h2>
<p>Rain falls from the sky for free, so why do grown-ups get a water bill? The water itself is a gift from nature, but getting clean water to your tap takes a lot of work. People, machines and pipes all help, and that work costs money. Let's follow the water and see where the money goes!</p>

<h3>The Journey of Your Water</h3>
<p>Before you can fill a glass, water has to be collected from a river, lake or well. Then it is cleaned at a treatment plant, pumped through long pipes under the streets and checked to make sure it is safe. After you use it, the dirty water has to be cleaned again before it goes back to nature.</p>
<ul>
<li><strong>Water bill:</strong> a paper or message that tells a family how much water they used and how much to pay</li>
<li><strong>Water meter:</strong> a little machine that counts how much water flows into a home</li>
<li><strong>Treatment plant:</strong> a big building where water is cleaned so it is safe to drink</li>
<li><strong>Pipe:</strong> a long tube under the ground that carries water to houses and schools</li>
<li><strong>Value:</strong> how important or useful something is to people</li>
</ul>

<h3>Who Does All the Work?</h3>
<p>Many helpers keep water flowing. Workers fix broken pipes, scientists test water in labs, and engineers run the pumps. The money from water bills pays these helpers and keeps all the machines working. It also pays for new pipes when old ones wear out.</p>

<h3>Why Using Less Helps</h3>
<p>The more water a family uses, the bigger the water bill usually is. Using water wisely saves money and also leaves more water in rivers and lakes for fish, plants and other people. That is a win for everyone!</p>
<ol>
<li>Turn off the tap while you brush your teeth.</li>
<li>Tell a grown-up if you hear a toilet running or see a drippy tap.</li>
<li>Use a bucket, not a running hose, to wash a bike.</li>
<li>Water plants in the cool morning so less water dries up in the sun.</li>
</ol>

<h3>Think About It</h3>
<p>Water is one of the most valuable things in the world because no one can live without it. Even though it seems cheap and easy to get, every drop took work to reach you. Treat it like a treasure!</p>
`,
        MIDDLE_SCHOOL: `
<h2>How Water Prices Shape the Way We Use Water</h2>
<p>Here is a puzzle economists love: water is essential for life, yet it often costs far less than bottled drinks, phone plans or candy. Diamonds, which nobody needs to survive, cost a fortune. Why? Price usually reflects how scarce something is and what it costs to provide, not how important it is. Understanding water prices helps explain why people use water the way they do.</p>

<h3>What Your Water Bill Pays For</h3>
<p>Water utilities are the organizations that deliver water. They charge customers to cover their costs, which include:</p>
<ol>
<li>Building and repairing dams, treatment plants, tanks and pipes</li>
<li>Electricity for pumps and chemicals for cleaning water</li>
<li>Workers who test, treat and deliver water</li>
<li>Collecting and treating wastewater after it leaves homes</li>
<li>Saving money for future repairs and emergencies</li>
</ol>

<h3>Key Words</h3>
<ul>
<li><strong>Utility:</strong> an organization that provides a basic service like water or electricity to a community</li>
<li><strong>Rate:</strong> the price charged for each unit of water, such as each thousand gallons or cubic meter</li>
<li><strong>Fixed charge:</strong> a part of the bill that stays the same no matter how much water is used</li>
<li><strong>Infrastructure:</strong> the pipes, plants and other structures needed to deliver a service</li>
<li><strong>Scarcity:</strong> when there is not enough of something for everyone who wants it</li>
<li><strong>Conservation:</strong> using less of a resource to protect it for the future</li>
</ul>

<h3>Different Ways to Charge for Water</h3>
<table>
<thead><tr><th>Pricing style</th><th>How it works</th><th>Effect on water use</th></tr></thead>
<tbody>
<tr><td>Flat fee</td><td>Same price no matter how much you use</td><td>Little reason to save</td></tr>
<tr><td>Uniform rate</td><td>Same price for every unit used</td><td>Using less saves money</td></tr>
<tr><td>Tiered rates</td><td>Price per unit goes up as you use more</td><td>Strong reason to avoid heavy use</td></tr>
<tr><td>Seasonal rates</td><td>Higher prices in hot, dry months</td><td>Encourages saving when water is scarce</td></tr>
</tbody>
</table>

<h3>Price and Conservation</h3>
<p>When water costs more, people tend to use somewhat less, especially for things like lawn watering that they can cut back on. They use less for drinking and cooking only a little, because those needs are essential. Homes without meters, which pay a flat fee, often use more water than metered homes because saving water does not change their bill.</p>

<h3>Keeping Water Fair</h3>
<p>Everyone needs water, so utilities try to keep basic amounts affordable. Some charge a low price for the first block of water a family uses and offer help to households that struggle to pay. Good water pricing balances three goals: paying for the system, encouraging conservation and making sure everyone can afford what they need.</p>
`,
        HIGH_SCHOOL: `
<h2>Water Rates, Affordability and Conservation Pricing</h2>
<p>Water pricing sits at the crossroads of engineering, economics and fairness. Utilities need steady revenue to maintain expensive, aging infrastructure. Communities want water to be conserved, especially during droughts. And because water is a human necessity, prices must stay affordable for everyone. Designing rates that satisfy all three goals is one of the most practical problems in water management.</p>

<h3>Why Water Is Underpriced</h3>
<p>In many places the price of water covers only part of the full cost of providing it. Raw water is often treated as free, and the environmental cost of taking water from rivers or aquifers is rarely included. Some utilities also delay rate increases for political reasons, leaving too little money to replace old pipes. When prices are too low, people have weak signals to conserve, and infrastructure can fall into disrepair.</p>

<h3>Key Terms</h3>
<ul>
<li><strong>Volumetric charge:</strong> the part of a bill based on how much water is actually used</li>
<li><strong>Increasing block rates:</strong> a structure where the price per unit rises as monthly use moves into higher tiers</li>
<li><strong>Decreasing block rates:</strong> a structure where the price per unit falls for higher use, which can discourage conservation</li>
<li><strong>Revenue stability:</strong> a utility's ability to collect enough money to cover costs even when water sales change</li>
<li><strong>Affordability:</strong> whether households can pay for essential water without giving up other necessities</li>
<li><strong>Lifeline rate:</strong> a low price for a basic essential amount of water to protect low-income households</li>
</ul>

<h3>Comparing Rate Structures</h3>
<table>
<thead><tr><th>Structure</th><th>Strength</th><th>Weakness</th></tr></thead>
<tbody>
<tr><td>Flat fee (unmetered)</td><td>Simple and predictable</td><td>No incentive to conserve; unfair to light users</td></tr>
<tr><td>Uniform volumetric</td><td>Easy to understand, links bill to use</td><td>Moderate conservation signal</td></tr>
<tr><td>Increasing block</td><td>Strong conservation signal for heavy use</td><td>Can penalize large low-income households</td></tr>
<tr><td>Seasonal or drought surcharge</td><td>Targets use when water is scarcest</td><td>Revenue swings with weather</td></tr>
<tr><td>High fixed charge</td><td>Stable revenue for the utility</td><td>Weak conservation signal, burdens small users</td></tr>
</tbody>
</table>

<h3>The Conservation Paradox</h3>
<p>Most of a water utility's costs are fixed: pipes and plants cost about the same whether customers use a lot of water or a little. Yet much of the revenue often comes from volumetric charges. When customers successfully conserve, such as during a drought campaign, revenue falls while costs stay nearly the same, and the utility may have to raise rates. Customers sometimes feel punished for saving. Utilities manage this with reserve funds, carefully balanced fixed charges and clear communication.</p>

<h3>Affordability Solutions</h3>
<ol>
<li><strong>Lifeline blocks:</strong> keeping the first essential tier inexpensive.</li>
<li><strong>Customer assistance programs:</strong> discounts or credits for eligible households.</li>
<li><strong>Household-size adjustments:</strong> widening tiers for larger families so they are not unfairly charged.</li>
<li><strong>Leak repair help:</strong> fixing leaks in low-income homes saves both water and money.</li>
<li><strong>Payment plans:</strong> preventing shutoffs by spreading overdue bills over time.</li>
</ol>
<p>Fair, transparent pricing helps people see water as valuable without making essential use a burden.</p>
`,
        UNDERGRADUATE: `
<h2>Water Utility Finance, Rate Design and Economic Efficiency</h2>
<p>Water utilities are capital-intensive natural monopolies. A single network of mains and treatment plants serves a community, so competition is impractical, and prices are set administratively by public boards or regulators rather than by markets. Rate design therefore has to do deliberately what competitive markets do automatically: recover costs, signal scarcity and allocate resources efficiently, while respecting legal and social constraints. This lesson introduces the main analytical steps and the economic principles behind them.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Revenue requirement:</strong> the total annual amount a utility must collect to cover operations, maintenance, debt service and capital needs</li>
<li><strong>Cost of service analysis:</strong> a method that allocates a utility's costs to customer classes according to how each class uses the system</li>
<li><strong>Peaking factor:</strong> the ratio of maximum day or hour demand to average demand, which drives the size and cost of infrastructure</li>
<li><strong>Marginal cost:</strong> the cost of supplying one additional unit of water, which often exceeds average cost when new sources are expensive</li>
<li><strong>Natural monopoly:</strong> an industry where one provider can serve the market at lower cost than several competing networks</li>
<li><strong>Non-revenue water:</strong> water produced but not billed, due to leaks, theft, metering errors or unbilled uses</li>
</ul>

<h3>The Rate-Setting Process</h3>
<ol>
<li><strong>Determine the revenue requirement</strong> for a test year, using either a cash-needs approach (common for public utilities) or a utility approach that includes depreciation and a return on investment (common for investor-owned utilities).</li>
<li><strong>Allocate costs to functions</strong> such as source of supply, treatment, transmission, storage, customer service and fire protection.</li>
<li><strong>Allocate functional costs to customer classes</strong> such as residential, commercial, industrial and irrigation, based on their average and peak demands.</li>
<li><strong>Design rates</strong> that recover each class's costs while meeting policy goals such as conservation and affordability.</li>
</ol>

<h3>Efficiency Principles</h3>
<p>Economic theory suggests that efficient prices reflect marginal cost: customers should pay, at the margin, what it costs society to supply the next unit, including the scarcity value of raw water and environmental impacts. Water utilities often price closer to historical average cost, which can be well below the marginal cost of new supply such as desalination or long-distance transfers. Underpricing leads to overuse and premature expansion. However, because utilities have high fixed costs and falling average costs over some ranges, pure marginal cost pricing may not recover total costs, so a two-part tariff with a fixed charge and a volumetric charge is common.</p>

<table>
<thead><tr><th>Cost type</th><th>Behavior</th><th>Typical recovery</th></tr></thead>
<tbody>
<tr><td>Customer costs (meters, billing)</td><td>Vary with number of accounts</td><td>Fixed monthly charge</td></tr>
<tr><td>Base capacity and debt service</td><td>Largely fixed in the short run</td><td>Mix of fixed and volumetric charges</td></tr>
<tr><td>Peak capacity</td><td>Driven by maximum demand</td><td>Seasonal or tiered volumetric rates</td></tr>
<tr><td>Energy and chemicals</td><td>Vary with volume produced</td><td>Volumetric charge</td></tr>
</tbody>
</table>

<h3>Demand Response to Price</h3>
<p>Empirical studies consistently find residential water demand to be price inelastic, meaning use falls proportionally less than price rises. Demand is typically more responsive in the long run, as households replace appliances and landscapes, and for discretionary outdoor use than for indoor essentials. Price is therefore a real but modest lever, most effective when combined with information, rebates and regulations.</p>

<h3>Checklist for Evaluating a Rate Structure</h3>
<ul>
<li>Does projected revenue cover the full revenue requirement, including asset renewal?</li>
<li>Are costs allocated to classes in proportion to their demands, including peaks?</li>
<li>Does the marginal price send a meaningful conservation signal?</li>
<li>Is an essential quantity affordable for low-income households?</li>
<li>How sensitive is revenue to wet years, droughts and conservation success?</li>
<li>Is the structure legally defensible and understandable to customers?</li>
</ul>
`,
        GRADUATE: `
<h2>Water Markets, Pricing Theory and Equity</h2>
<p>Most water is allocated not by price but by administrative rules: legal rights, permits and utility service obligations. Economists have long argued that such allocations can be inefficient, leaving water in low-value uses while high-value users go short. Two broad reforms address this: better pricing of water services and tradable water rights that let water move between users. Both raise difficult questions about equity, environmental protection and the social meaning of water. This lesson examines these instruments and the conditions under which they work.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Water market:</strong> a system in which water rights or allocations can be bought, sold or leased between users</li>
<li><strong>Scarcity rent:</strong> the value water holds because supply is limited, beyond the cost of delivering it</li>
<li><strong>Opportunity cost:</strong> the value of the best alternative use of water that is given up when it is used one way</li>
<li><strong>Third-party effects:</strong> impacts of a water transfer on people not part of the trade, such as downstream users or rural economies</li>
<li><strong>Return flow:</strong> the portion of diverted water that returns to a river or aquifer and is relied on by other users</li>
<li><strong>Human right to water:</strong> the principle that everyone is entitled to sufficient, safe, acceptable, accessible and affordable water for personal and domestic uses</li>
</ul>

<h3>How Water Markets Work</h3>
<p>Markets require clearly defined, secure and transferable rights, along with infrastructure to physically move water and institutions to approve trades. Well-known examples include temporary allocation trading and permanent entitlement trading in parts of Australia, rights transfers and leases in the western United States, and the tradable rights system in Chile. Trades can move water from low-value crops to higher-value crops, cities or environmental flows, and temporary leases offer flexibility during droughts.</p>

<table>
<thead><tr><th>Design feature</th><th>Why it matters</th></tr></thead>
<tbody>
<tr><td>Definition by consumptive use</td><td>Prevents trades from transferring return flows other users rely on</td></tr>
<tr><td>Environmental cap</td><td>Limits total extraction so trading reallocates rather than expands use</td></tr>
<tr><td>Third-party review</td><td>Protects downstream users and communities from harm</td></tr>
<tr><td>Transparent registers and prices</td><td>Reduces transaction costs and speculation concerns</td></tr>
<tr><td>Environmental water holders</td><td>Allows public agencies to buy water back for ecosystems</td></tr>
</tbody>
</table>

<h3>Critiques and Limits</h3>
<p>Markets can concentrate rights among wealthy buyers, and rural communities may decline when water moves to cities, a concern sometimes called "buy and dry." Physical constraints mean water cannot always move where buyers are. Where rights were issued in excess of sustainable supply, trading can activate previously unused "sleeper" rights and increase total extraction. Indigenous communities whose claims were excluded from historical allocations may be further disadvantaged unless reforms recognize their rights. Markets are therefore most defensible within a framework of caps, environmental protection and strong regulation.</p>

<h3>Pricing Theory and Equity</h3>
<p>For urban services, efficient pricing implies marginal cost or scarcity pricing, possibly varying with drought conditions. The equity-efficiency trade-off arises because higher marginal prices place a larger burden on low-income households, for whom water is a bigger share of income. Policy responses aim to separate the two goals: keep marginal prices high enough to signal scarcity while protecting essential use through lifeline blocks, income-based discounts or direct assistance. Recognition of water as a human right reinforces the need for such protections.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Are rights clearly defined, capped at sustainable levels and based on consumptive use?</li>
<li>Do prices or trades reflect scarcity and environmental values?</li>
<li>How are third parties, ecosystems and communities protected?</li>
<li>Who gains and who loses, and are Indigenous and historical claims recognized?</li>
<li>Is essential household use affordable regardless of income?</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: Optimal Pricing, Behavioral Economics and Market Design</h2>
<p>Water economics research has moved beyond the textbook prescription to price at marginal cost. Scholars now ask how to define marginal cost when supply is stochastic, how real people respond to complicated bills, and how to design markets that perform well with imperfect information, physical complexity and contested rights. This lesson surveys the methods and debates that define the field and highlights directions for new research.</p>

<h3>Key Research Concepts</h3>
<ul>
<li><strong>Scarcity pricing:</strong> prices that rise when storage is low or drought is declared, reflecting the changing value of water over time</li>
<li><strong>Price elasticity of demand:</strong> the percentage change in water use associated with a one percent change in price</li>
<li><strong>Salience:</strong> how noticeable a price or cost is to consumers when they make decisions</li>
<li><strong>Social norm intervention:</strong> giving households feedback comparing their use with similar neighbors to encourage conservation</li>
<li><strong>Smart market:</strong> a computer-assisted auction that clears trades while respecting physical and hydrological constraints</li>
<li><strong>Welfare analysis:</strong> evaluating policies by their effects on the total wellbeing of consumers, producers and society</li>
</ul>

<h3>Optimal Pricing Under Uncertainty</h3>
<p>The marginal cost of water depends on hydrology. In a wet year, the opportunity cost of raw water may be near zero; in a deep drought, it can be very high. Theoretical work frames optimal pricing as a dynamic problem in which the price reflects the shadow value of stored water. In practice, most utilities rely on quantity restrictions during droughts rather than price, which economists argue imposes hidden costs by ignoring differences in how much users value water. Research compares the welfare costs of rationing and pricing, while also noting the political and equity reasons utilities prefer restrictions.</p>

<h3>Behavioral Economics of Water Use</h3>
<p>Classical models assume consumers respond to marginal price, yet many respond to average price or total bill, partly because complex tiered structures are hard to understand and bills arrive long after use. Research explores whether more frequent billing, real-time feedback from smart meters, clearer bill design and social comparison reports change behavior. Social norm interventions have produced measurable reductions in many trials, though effects can fade and vary across groups.</p>

<table>
<thead><tr><th>Research method</th><th>Strength</th><th>Limitation</th></tr></thead>
<tbody>
<tr><td>Panel regressions on billing data</td><td>Large samples, long time series</td><td>Price endogeneity, coarse timing</td></tr>
<tr><td>Natural experiments from rate changes</td><td>Credible causal identification</td><td>Limited generalizability</td></tr>
<tr><td>Randomized field trials</td><td>Strong internal validity for behavioral nudges</td><td>Short duration, possible fading effects</td></tr>
<tr><td>Structural demand models</td><td>Support welfare and counterfactual analysis</td><td>Depend on strong assumptions</td></tr>
</tbody>
</table>

<h3>Market Design Challenges</h3>
<p>Water markets face thin trading, high transaction costs and complex hydrological interdependence. Return flows, groundwater-surface water connections and timing constraints mean that a trade's effects depend on location. Market design research explores smart markets, exchange rates between zones, and rules defining rights by consumptive use. Debates continue over speculation, the role of non-water-user investors and how markets interact with environmental flow targets and Indigenous rights.</p>

<h3>Contested Questions</h3>
<ul>
<li>Do estimated price elasticities reflect true behavioral responses, or artifacts of how prices are measured?</li>
<li>Should drought allocation rely on scarcity pricing, rationing or a combination?</li>
<li>How should markets value environmental flows and cultural uses of water?</li>
<li>Can decoupling utility revenue from sales resolve the conservation paradox without weakening price signals?</li>
</ul>

<h3>Open Research Directions</h3>
<ol>
<li>Using high-frequency smart meter data to identify short-run behavioral responses.</li>
<li>Integrating distributional analysis into optimal pricing models.</li>
<li>Designing water markets that incorporate hydrological models directly.</li>
<li>Evaluating the long-term persistence of behavioral interventions.</li>
<li>Analyzing how climate change alters the value and timing of scarcity rents.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'weconq1',
      question: {
        ELEMENTARY: 'Why do families pay for water?',
        MIDDLE_SCHOOL: 'What usually happens when water costs more?',
        HIGH_SCHOOL: 'What are increasing block rates?',
        UNDERGRADUATE: 'What is cost of service analysis?',
        GRADUATE: 'What is a water market?',
        PHD: 'What does scarcity pricing aim to reflect?',
      },
      options: {
        ELEMENTARY: ['To pay for cleaning water and bringing it through pipes', 'Because rain is not free', 'To buy toys for the plant', 'So the water turns blue'],
        MIDDLE_SCHOOL: ['People tend to use somewhat less', 'People always use more', 'Nothing ever changes', 'Water starts falling from the sky'],
        HIGH_SCHOOL: ['The price per unit rises as use moves into higher tiers', 'The price per unit falls for heavy users', 'Everyone pays the same flat fee', 'Prices are chosen at random'],
        UNDERGRADUATE: ['Allocating a utility\'s costs to customer classes by how they use the system', 'Giving water away for free', 'Surveying customers about their favorite color', 'Counting the number of pipes only'],
        GRADUATE: ['A system for buying, selling or leasing water rights or allocations', 'A store that sells bottled water', 'A fish market by the river', 'A swimming pool fee'],
        PHD: ['The changing value of water over time, rising when storage is low', 'Only the cost of printing bills', 'A fixed price that never changes', 'The color of reservoir water'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Water is free from nature, but cleaning it and pumping it to homes takes work, machines and pipes.',
        MIDDLE_SCHOOL: 'Higher prices encourage people to cut back, especially on things like lawn watering.',
        HIGH_SCHOOL: 'Each higher tier costs more per unit, which encourages households to avoid heavy use.',
        UNDERGRADUATE: 'Cost of service analysis assigns costs to classes such as residential and industrial based on average and peak demand.',
        GRADUATE: 'Markets let water move between users, for example from low-value crops to cities or environmental flows.',
        PHD: 'Scarcity pricing raises prices during drought to reflect the shadow value of stored water.',
      },
    },
    {
      id: 'weconq2',
      question: {
        ELEMENTARY: 'What does a water meter do?',
        MIDDLE_SCHOOL: 'What is a fixed charge on a water bill?',
        HIGH_SCHOOL: 'What is the conservation paradox for water utilities?',
        UNDERGRADUATE: 'What does it mean that residential water demand is price inelastic?',
        GRADUATE: 'Why should water rights be defined by consumptive use when traded?',
        PHD: 'What is a social norm intervention?',
      },
      options: {
        ELEMENTARY: ['It makes water colder', 'It counts how much water flows into a home', 'It cleans water', 'It plays music'],
        MIDDLE_SCHOOL: ['A charge that changes every minute', 'A part of the bill that stays the same no matter how much water is used', 'A fine for using too little water', 'A charge only for swimming pools'],
        HIGH_SCHOOL: ['Saving water always lowers costs for utilities', 'When customers conserve, revenue falls while mostly fixed costs stay the same', 'Conservation makes pipes break', 'Utilities earn more when people save'],
        UNDERGRADUATE: ['Demand does not exist', 'Use falls proportionally less than price rises', 'Use doubles when price rises', 'Price has no connection to use at all'],
        GRADUATE: ['It makes trades faster', 'It prevents trades from transferring return flows that other users rely on', 'It raises the price for buyers', 'It is required for bottled water'],
        PHD: ['A law banning lawn watering', 'Feedback comparing a household\'s use with similar neighbors', 'A tax on swimming pools', 'A meter that turns off water'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'A water meter counts the water a home uses, so the bill matches the water used.',
        MIDDLE_SCHOOL: 'Fixed charges help pay for meters, billing and pipes that cost the same no matter how much water flows.',
        HIGH_SCHOOL: 'Because most costs are fixed, successful conservation can force rate increases, which can feel unfair.',
        UNDERGRADUATE: 'Inelastic demand means a price increase reduces use, but by a smaller percentage than the price change.',
        GRADUATE: 'If only diverted volume were counted, a trade could move water that downstream users relied on as return flow.',
        PHD: 'Comparison reports use social norms to motivate conservation and have reduced use in many trials.',
      },
    },
    {
      id: 'weconq3',
      question: {
        ELEMENTARY: 'Which is a good way to save water and money?',
        MIDDLE_SCHOOL: 'Why do unmetered homes often use more water?',
        HIGH_SCHOOL: 'What is a lifeline rate?',
        UNDERGRADUATE: 'Why do many utilities use a two-part tariff?',
        GRADUATE: 'What does the term "buy and dry" describe?',
        PHD: 'Why do economists say drought rationing can carry hidden costs?',
      },
      options: {
        ELEMENTARY: ['Leave the hose running all day', 'Let a toilet keep running', 'Turn off the tap while brushing teeth', 'Fill the bath twice'],
        MIDDLE_SCHOOL: ['Their water is dirtier', 'Their pipes are bigger', 'Saving water does not change their bill', 'They live closer to rivers'],
        HIGH_SCHOOL: ['A price that rises during holidays', 'A charge for emergency calls', 'A low price for a basic essential amount of water', 'A fee for fixing leaks'],
        UNDERGRADUATE: ['To make bills harder to read', 'Because water has no fixed costs', 'Because pure marginal cost pricing may not recover high fixed costs', 'To discourage all water use'],
        GRADUATE: ['Drying fruit for export', 'Buying bottled water during droughts', 'Rural communities declining when their water is sold to cities', 'Storing water in dry tanks'],
        PHD: ['Rationing is always more expensive to administer than pricing', 'Rationing ignores differences in how much users value water', 'Rationing increases total supply', 'Rationing has no costs at all'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Turning off the tap saves water, and saving water can make the bill smaller too.',
        MIDDLE_SCHOOL: 'With a flat fee, families pay the same whether they save or waste, so there is little reason to save.',
        HIGH_SCHOOL: 'Lifeline rates keep the first essential block cheap so low-income households can afford basic needs.',
        UNDERGRADUATE: 'A fixed charge recovers fixed costs while a volumetric charge keeps a price signal on each unit used.',
        GRADUATE: 'When farm water rights are sold to cities, local farm economies and communities may decline.',
        PHD: 'Uniform restrictions cut use equally regardless of value, so water may not go where it is valued most.',
      },
    },
    {
      id: 'weconq4',
      question: {
        ELEMENTARY: 'Who does the money from water bills help pay?',
        MIDDLE_SCHOOL: 'What is infrastructure?',
        HIGH_SCHOOL: 'What is a weakness of a high fixed charge?',
        UNDERGRADUATE: 'What is non-revenue water?',
        GRADUATE: 'What is the equity-efficiency trade-off in water pricing?',
        PHD: 'What is a smart market in water trading?',
      },
      options: {
        ELEMENTARY: ['Pirates', 'Movie stars', 'Ice cream trucks', 'Workers who fix pipes and test water'],
        MIDDLE_SCHOOL: ['A type of fish', 'A water flavor', 'A cloud shape', 'The pipes, plants and structures needed to deliver a service'],
        HIGH_SCHOOL: ['It makes bills unpredictable', 'It sends a strong conservation signal', 'It reduces utility revenue', 'It weakens the conservation signal and burdens small users'],
        UNDERGRADUATE: ['Bottled water sold in stores', 'Water used in fountains only', 'Rainwater on rooftops', 'Water produced but not billed, due to leaks, theft or metering errors'],
        GRADUATE: ['Efficient prices and equity never conflict', 'Only equity matters in pricing', 'Only efficiency matters in pricing', 'Higher marginal prices that signal scarcity burden low-income households more'],
        PHD: ['A grocery store selling water', 'A phone app for paying bills', 'A market with no rules', 'A computer-assisted auction that clears trades within hydrological constraints'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Bills pay the workers, scientists and engineers who keep water clean and flowing.',
        MIDDLE_SCHOOL: 'Infrastructure includes dams, treatment plants, tanks and pipes.',
        HIGH_SCHOOL: 'If most of the bill is fixed, using less saves little, and light users pay a large share.',
        UNDERGRADUATE: 'Non-revenue water is a cost without income, so reducing it improves both finances and conservation.',
        GRADUATE: 'Policies like lifeline blocks and assistance aim to keep efficient price signals while protecting essential use.',
        PHD: 'Smart markets use optimization so that trades respect physical limits such as flows and connections.',
      },
    },
    {
      id: 'weconq5',
      question: {
        ELEMENTARY: 'Why is water so valuable?',
        MIDDLE_SCHOOL: 'Which pricing style charges more in hot, dry months?',
        HIGH_SCHOOL: 'Why is water often underpriced?',
        UNDERGRADUATE: 'What does a peaking factor measure?',
        GRADUATE: 'Why are caps on total extraction important in water markets?',
        PHD: 'What is a known limitation of randomized field trials of conservation nudges?',
      },
      options: {
        ELEMENTARY: ['No one can live without it', 'It is shiny', 'It is very loud', 'It is made in factories only'],
        MIDDLE_SCHOOL: ['Seasonal rates', 'Flat fees', 'Free water days', 'Decreasing rates'],
        HIGH_SCHOOL: ['Raw water and environmental costs are rarely included in the price', 'Water costs nothing to deliver', 'Pipes never need replacing', 'Everyone uses the same amount'],
        UNDERGRADUATE: ['The ratio of maximum demand to average demand', 'The height of the water tower', 'The number of customers', 'The temperature of tap water'],
        GRADUATE: ['So trading reallocates water instead of expanding total use', 'So prices always fall', 'So only cities can buy water', 'So no one can trade'],
        PHD: ['Short durations and effects that may fade over time', 'They cannot measure anything', 'They always use fake data', 'They are illegal'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Every living thing needs water, which makes it one of the most valuable things in the world.',
        MIDDLE_SCHOOL: 'Seasonal rates encourage saving when water is scarcest.',
        HIGH_SCHOOL: 'When prices leave out raw water and environmental costs, people get weak signals to conserve.',
        UNDERGRADUATE: 'Peak demand drives the size and cost of pipes, pumps and plants.',
        GRADUATE: 'Without a sustainable cap, trading can activate unused rights and increase total extraction.',
        PHD: 'Trials have strong internal validity but often run briefly, and effects of nudges can weaken over time.',
      },
    },
  ],
}

export default expansion
