import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'green-building',
  moduleKey: 'building-retrofits',
  lessons: [
    {
      id: 'gb-ret-1',
      title: 'Making Existing Buildings Better',
      content: {
        ELEMENTARY: `
<h2>Giving Old Buildings a Green Makeover</h2>
<p>Most of the buildings we will live and learn in tomorrow are already standing today. Your home, your school and your library might be many years old. Instead of knocking them down, we can fix them up so they use less energy and feel more comfortable. Fixing up an old building is called a <em>retrofit</em>.</p>

<h3>Be a Building Detective</h3>
<p>Before fixing anything, grown-up experts act like detectives. They walk around the building looking for clues. Is cold air sneaking in under the door? Is the attic missing its warm blanket of insulation? Are the light bulbs old ones that get hot? Each clue tells them what to fix first.</p>
<ul>
<li><strong>Retrofit:</strong> fixing up an old building so it works better and wastes less energy</li>
<li><strong>Insulation:</strong> a fluffy layer inside walls and roofs that keeps heat where we want it</li>
<li><strong>Draft:</strong> a sneaky stream of outside air that leaks in through cracks and gaps</li>
<li><strong>Energy audit:</strong> a careful check of a building to find where energy is being wasted</li>
<li><strong>Weatherstripping:</strong> soft strips placed around doors and windows to stop drafts</li>
</ul>

<h3>Easy Fixes That Help a Lot</h3>
<p>Some fixes are small and quick. Others are big jobs for builders. All of them help!</p>
<ol>
<li>Seal cracks around windows and doors so warm air stays inside in winter.</li>
<li>Add more insulation in the attic, like putting a hat on the house.</li>
<li>Swap old bulbs for LED bulbs that use much less electricity.</li>
<li>Replace a very old heater with a newer, more efficient one.</li>
</ol>

<h3>Why Not Just Build a New One?</h3>
<p>Building something new uses lots of bricks, concrete, steel and trucks. Fixing an old building saves all those materials. It also keeps the places people love, like an old school with a special history.</p>

<h3>You Can Help Too</h3>
<p>Hold a feather or a strip of tissue near a closed window on a windy day. If it wiggles, you found a draft! Tell a grown-up so they can seal it. Closing curtains at night and turning off lights also helps your building stay green.</p>
`,
        MIDDLE_SCHOOL: `
<h2>Upgrading the Buildings We Already Have</h2>
<p>New green buildings get a lot of attention, but most buildings that will exist in the coming decades have already been built. Many were built before people cared much about saving energy. That means one of the biggest ways to cut energy waste is to improve existing buildings. This process is called a <em>retrofit</em>.</p>

<h3>Step One: The Energy Audit</h3>
<p>A good retrofit starts by finding out where energy is going. An energy auditor looks at utility bills, checks insulation, inspects heating and cooling equipment and measures how leaky the building is. The audit produces a list of recommended improvements, ranked by how much they save and how much they cost.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Retrofit:</strong> adding new features or upgrades to a building that already exists</li>
<li><strong>Energy audit:</strong> an inspection that finds where a building wastes energy and how to fix it</li>
<li><strong>Weatherization:</strong> sealing and insulating a building to protect it from outdoor weather</li>
<li><strong>Building envelope:</strong> the outer shell of a building, including walls, roof, windows and floor</li>
<li><strong>Payback period:</strong> how long it takes for energy savings to cover the cost of an upgrade</li>
<li><strong>Thermal camera:</strong> a camera that shows warm and cool spots, revealing hidden heat leaks</li>
</ul>

<h3>Common Retrofit Upgrades</h3>
<table>
<thead><tr><th>Upgrade</th><th>What it does</th><th>Typical cost</th></tr></thead>
<tbody>
<tr><td>Air sealing</td><td>Stops drafts through cracks and gaps</td><td>Low</td></tr>
<tr><td>LED lighting</td><td>Uses far less electricity than old bulbs</td><td>Low</td></tr>
<tr><td>Attic insulation</td><td>Keeps heat in during winter and out in summer</td><td>Low to medium</td></tr>
<tr><td>New windows</td><td>Reduces heat loss and improves comfort</td><td>High</td></tr>
<tr><td>Heat pump</td><td>Heats and cools efficiently using electricity</td><td>Medium to high</td></tr>
</tbody>
</table>

<h3>Why Order Matters</h3>
<p>Experts usually fix the cheap, simple things first, such as sealing leaks and adding insulation. Once the building holds heat better, it needs a smaller heating system, which costs less to buy and run. Doing things in the wrong order can mean buying equipment that is bigger than needed.</p>

<h3>More Than Energy</h3>
<p>Retrofits also make buildings quieter, less drafty and healthier, especially when they include better ventilation. Reusing a building also avoids the materials and pollution that come with building a brand-new one.</p>
`,
        HIGH_SCHOOL: `
<h2>Building Retrofits: Audits, Weatherization and Upgrades</h2>
<p>Retrofitting means improving a building that already exists. Because buildings last for many decades and new construction adds only a small share to the total stock each year, upgrading existing buildings is essential for cutting energy use and emissions. A well-run retrofit follows a clear process: diagnose, prioritize, upgrade and verify.</p>

<h3>Diagnosing the Building</h3>
<p>An energy audit combines paperwork and field testing. Auditors review a year or more of utility bills, inspect the envelope and equipment, and use diagnostic tools.</p>
<ul>
<li><strong>Blower door test:</strong> a test that uses a powerful fan in a doorway to depressurize the building and measure air leakage</li>
<li><strong>Infrared thermography:</strong> using a thermal camera to spot missing insulation and air leaks by temperature differences</li>
<li><strong>Combustion safety test:</strong> a check that gas or oil appliances vent their exhaust safely after the building is sealed</li>
<li><strong>Baseline:</strong> the energy use of the building before upgrades, used to measure later savings</li>
<li><strong>Weatherization:</strong> air sealing, insulation and related work that protects a building from outdoor conditions</li>
<li><strong>Load reduction:</strong> lowering the heating and cooling a building needs before upgrading equipment</li>
</ul>

<h3>Levels of Audit</h3>
<table>
<thead><tr><th>Audit type</th><th>What happens</th><th>Best for</th></tr></thead>
<tbody>
<tr><td>Walk-through</td><td>Quick visual inspection and bill review</td><td>Finding obvious low-cost fixes</td></tr>
<tr><td>Detailed audit</td><td>Testing, measurements and cost estimates for each measure</td><td>Planning a full upgrade package</td></tr>
<tr><td>Investment-grade audit</td><td>In-depth engineering analysis with savings guarantees in mind</td><td>Large projects needing financing</td></tr>
</tbody>
</table>

<h3>Weatherization Before Equipment</h3>
<p>Air sealing and insulation reduce the building load, so a new furnace or heat pump can be smaller and cheaper. Sealing a building also changes how air moves, which is why auditors check combustion safety and ventilation. A tight building needs planned fresh air, often from mechanical ventilation, to keep indoor air healthy.</p>

<h3>System Upgrades</h3>
<p>After the envelope is improved, common upgrades include efficient heat pumps, heat-pump water heaters, LED lighting with controls, and smart thermostats. Many retrofits time these upgrades to match when old equipment would need replacing anyway, which lowers the extra cost.</p>

<h3>Trade-offs and Challenges</h3>
<ul>
<li>Upfront cost can be high even when long-term savings are larger.</li>
<li>Occupants may be disrupted during construction.</li>
<li>Older buildings may contain hazards such as asbestos or lead paint that must be handled safely.</li>
<li>Savings depend on good installation and on how people use the building.</li>
</ul>
<p>Verifying results with a post-retrofit test and comparing bills to the baseline shows whether the upgrades delivered what was promised.</p>
`,
        UNDERGRADUATE: `
<h2>Deep Retrofits: Analysis, Economics and Project Planning</h2>
<p>Retrofit projects range from single measures, like a lighting swap, to deep retrofits that overhaul the envelope and systems together. Choosing between them requires analysis of energy savings, interactions between measures, costs over the building's life and the practicalities of construction in an occupied building. This lesson treats the retrofit as an engineering and investment project.</p>

<h3>Shallow, Moderate and Deep</h3>
<table>
<thead><tr><th>Retrofit depth</th><th>Typical scope</th><th>Energy reduction</th></tr></thead>
<tbody>
<tr><td>Shallow</td><td>Lighting, controls, air sealing, tune-ups</td><td>Modest</td></tr>
<tr><td>Moderate</td><td>Adds insulation, equipment replacement</td><td>Meaningful</td></tr>
<tr><td>Deep</td><td>Comprehensive envelope and system overhaul, often with electrification</td><td>Large, commonly defined as roughly half or more</td></tr>
</tbody>
</table>
<p>Deep retrofits capture interactive effects: a better envelope shrinks the heating plant, which saves capital that helps pay for the envelope. Doing measures one at a time can lock in oversized equipment and miss these savings.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Deep retrofit:</strong> a comprehensive upgrade combining envelope and system measures to cut energy use by roughly half or more</li>
<li><strong>Interactive effects:</strong> the way one measure changes the savings of another, such as insulation reducing the value of a bigger boiler</li>
<li><strong>Life-cycle cost analysis:</strong> comparing options by all costs over their life, including purchase, energy, maintenance and replacement</li>
<li><strong>Net present value:</strong> the value today of future savings minus costs, after discounting future cash flows</li>
<li><strong>Measurement and verification:</strong> the methods used to estimate actual savings by comparing performance to an adjusted baseline</li>
<li><strong>Lost opportunity:</strong> a chance to upgrade efficiently that disappears if equipment is replaced like-for-like</li>
</ul>

<h3>Thinking Quantitatively</h3>
<p>Simple payback divides upfront cost by annual savings, but it ignores savings after payback and the time value of money. Life-cycle methods discount future savings and include avoided replacement costs. For example, if a boiler must be replaced soon anyway, only the extra cost of a heat pump over a new boiler should be charged against the retrofit. Weather normalization adjusts bills for colder or milder years so savings are not overstated or hidden.</p>

<h3>A Retrofit Planning Checklist</h3>
<ol>
<li>Establish a weather-normalized baseline from at least a year of data.</li>
<li>Audit and model the building to estimate savings for each measure and for packages.</li>
<li>Screen for hazards, structural limits and moisture risks in walls being insulated.</li>
<li>Align measures with equipment end of life and planned renovations.</li>
<li>Evaluate packages using life-cycle cost, not single-measure payback.</li>
<li>Plan phasing to minimize disruption to occupants.</li>
<li>Commission systems and run measurement and verification after completion.</li>
</ol>

<h3>Practical Risks</h3>
<p>Adding interior insulation to old masonry can trap moisture if vapor behavior is not considered. Savings predictions often overestimate results when models assume ideal operation. Contractor skill matters greatly for air sealing and heat pump installation. Good projects build in testing and feedback loops so problems are caught early.</p>
`,
        GRADUATE: `
<h2>Retrofit Portfolios, Finance and Policy Drivers</h2>
<p>Individual retrofits are engineering projects, but decarbonizing the building stock is a problem of scale, capital and institutions. Owners with many buildings, governments and utilities need ways to prioritize across portfolios, mobilize finance for investments with long paybacks, and design policies that overcome persistent market barriers. This lesson examines those levers.</p>

<h3>Portfolio Approaches</h3>
<p>Large owners such as universities, public agencies and real estate firms manage retrofits as a portfolio. They benchmark buildings against peers, rank them by energy intensity and capital needs, and schedule work to match equipment replacement cycles. Bundling similar buildings lowers transaction costs and lets owners standardize designs and procurement.</p>
<ul>
<li><strong>Benchmarking:</strong> comparing a building's energy use with similar buildings to find poor performers</li>
<li><strong>Capital planning:</strong> scheduling major repairs and replacements so retrofit measures can ride along with them</li>
<li><strong>PACE financing:</strong> property assessed clean energy, where upgrade costs are repaid through an assessment on the property tax bill</li>
<li><strong>On-bill financing:</strong> repaying upgrade costs through regular utility bill charges tied to the meter or account</li>
<li><strong>Split incentive:</strong> a barrier where the party paying for upgrades is not the party receiving the energy savings</li>
<li><strong>Building performance standard:</strong> a policy requiring existing buildings to meet energy or emissions targets over time</li>
</ul>

<h3>Financing Mechanisms</h3>
<table>
<thead><tr><th>Mechanism</th><th>How it works</th><th>Key strength</th><th>Key limitation</th></tr></thead>
<tbody>
<tr><td>PACE</td><td>Assessment repaid with property taxes</td><td>Long terms, can transfer with the property</td><td>Requires enabling legislation; consumer protection concerns in residential markets</td></tr>
<tr><td>On-bill financing or repayment</td><td>Charges added to utility bills</td><td>Familiar payment channel</td><td>Utility administration and credit risk</td></tr>
<tr><td>Energy performance contract</td><td>Contractor finances and guarantees savings</td><td>Shifts performance risk</td><td>Complex, best for large buildings</td></tr>
<tr><td>Green bank lending</td><td>Public capital leverages private loans</td><td>Lowers cost of capital</td><td>Depends on public funding</td></tr>
</tbody>
</table>

<h3>Policy Drivers</h3>
<p>Disclosure and benchmarking ordinances make energy use visible to buyers and tenants. Building performance standards go further by requiring improvement over time, giving owners a clear signal for capital planning. Incentives and rebates reduce upfront costs, while point-of-sale or renovation triggers require upgrades at natural intervention points. Codes for alterations ensure that renovation work meets efficiency requirements.</p>

<h3>Equity and Distribution</h3>
<p>Low-income households often live in the least efficient housing and spend a larger share of income on energy. Weatherization assistance programs target these households, but retrofits can also raise rents and contribute to displacement. Designing programs with tenant protections, community engagement and accessible financing helps ensure benefits reach those who need them most.</p>

<h3>Institutional Barriers</h3>
<ul>
<li>Split incentives between owners and tenants in rental buildings.</li>
<li>High transaction costs and fragmented contractor markets.</li>
<li>Limited workforce capacity for skilled envelope and heat pump work.</li>
<li>Uncertainty in savings that makes lenders cautious.</li>
</ul>

<h3>Evaluating Programs</h3>
<p>Program evaluators distinguish gross savings from net savings that would not have happened anyway, and they examine cost-effectiveness from the perspectives of participants, utilities and society. Good evaluation also tracks non-energy benefits such as comfort, health and reduced arrears.</p>
`,
        PHD: `
<h2>Research Frontiers in Retrofit Effectiveness and Scaling</h2>
<p>Despite decades of programs, retrofit rates in most countries remain far below what decarbonization scenarios require, and realized savings often fall short of predictions. Research now focuses on why: how well savings are estimated, how decisions are made by owners and occupants, what tools support better choices and which institutional models can scale. This lesson surveys methods, contested findings and open directions.</p>

<h3>Measuring Effectiveness</h3>
<p>Engineering estimates and measured outcomes frequently diverge. Quasi-experimental and randomized evaluations of some residential programs have found realized savings well below engineering projections, while other studies find closer agreement. Explanations include optimistic models, installation quality, behavioral responses and selection effects in who participates.</p>
<ul>
<li><strong>Prebound effect:</strong> the tendency of inefficient homes to use less energy than models predict because occupants already ration heating</li>
<li><strong>Rebound effect:</strong> increased energy service use, such as warmer indoor temperatures, after efficiency makes it cheaper</li>
<li><strong>Selection bias:</strong> distortion of results when program participants differ systematically from non-participants</li>
<li><strong>Difference-in-differences:</strong> an evaluation design comparing changes over time between treated and comparison groups</li>
<li><strong>Calibrated simulation:</strong> a building energy model tuned to match measured data before predicting retrofit savings</li>
<li><strong>Urban building energy modeling:</strong> simulation of many buildings at district or city scale using archetypes or individual geometry</li>
</ul>

<h3>Decision Support</h3>
<p>Decision support tools range from simple calculators to multi-objective optimization that searches combinations of measures for trade-offs among cost, carbon and comfort. Stock models built from archetypes help governments estimate the impact of policy, but archetype simplification can hide heterogeneity. Machine learning on smart meter data offers scalable screening but raises questions about interpretability, data access and privacy.</p>

<h3>Contested Questions</h3>
<table>
<thead><tr><th>Question</th><th>Why it is contested</th></tr></thead>
<tbody>
<tr><td>Size of the energy efficiency gap</td><td>Hidden costs and measurement error may explain part of apparent underinvestment</td></tr>
<tr><td>Deep versus staged retrofits</td><td>One-step depth avoids lock-in, but staged paths fit capital and disruption limits</td></tr>
<tr><td>Valuing non-energy benefits</td><td>Health and comfort gains are real but hard to monetize consistently</td></tr>
<tr><td>Comfort taking versus savings</td><td>Rebound may reflect welfare gains rather than program failure</td></tr>
</tbody>
</table>

<h3>Scaling Strategies</h3>
<p>Industrialized retrofit approaches, such as prefabricated facade panels installed over existing walls, aim to cut on-site time, disruption and cost through standardization. Aggregation models bundle many similar homes to attract finance and build supply chains. Research questions include whether learning curves materialize, how to handle building heterogeneity and how procurement can create stable demand.</p>

<h3>Behavioral and Social Dimensions</h3>
<p>Owner decisions are shaped by trust in contractors, hassle, timing around moves or renovations and social networks. Research from behavioral economics and sociology suggests that one-stop shops and trusted intermediaries can reduce barriers, though evidence on their cost-effectiveness is still developing.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Large-scale measured evaluations linking retrofit packages to realized savings and health outcomes.</li>
<li>Methods that combine physics-based and data-driven models while quantifying uncertainty.</li>
<li>Evidence on industrialized retrofit costs, quality and learning rates.</li>
<li>Policy designs that avoid displacement while accelerating rental housing upgrades.</li>
<li>Integration of retrofit planning with grid flexibility and district energy transitions.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'gbretq1',
      question: {
        ELEMENTARY: "How can you make an old building greener?",
        MIDDLE_SCHOOL: "What is the first step in a good retrofit?",
        HIGH_SCHOOL: "What does a blower door test measure?",
        UNDERGRADUATE: "What is a deep retrofit?",
        GRADUATE: "What is PACE financing?",
        PHD: "What is the prebound effect?",
      },
      options: {
        ELEMENTARY: ["Seal drafts and add insulation", "Knock it down right away", "Paint the outside walls green", "Leave all the lights on"],
        MIDDLE_SCHOOL: ["An energy audit to find where energy is wasted", "Buying the biggest heater available", "Adding more rooms to the building", "Replacing the front door color"],
        HIGH_SCHOOL: ["How much air leaks into or out of the building", "The water pressure in the pipes", "The strength of the foundation", "The height of the roof"],
        UNDERGRADUATE: ["A comprehensive envelope and system upgrade cutting energy use by roughly half or more", "Replacing a single light bulb", "Only upgrading the lighting", "Only cleaning the air filters"],
        GRADUATE: ["Financing repaid through an assessment on the property tax bill", "A grant that never needs repayment", "A personal credit card loan", "A tax on new construction only"],
        PHD: ["Inefficient homes using less energy than models predict because occupants already ration heating", "Savings that appear before a retrofit is installed", "Energy used during construction", "A rise in energy prices after a retrofit"],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: "Sealing drafts and adding insulation keeps warm air inside, so the building uses less energy.",
        MIDDLE_SCHOOL: "An energy audit shows where energy is being wasted so the best fixes can be chosen first.",
        HIGH_SCHOOL: "A blower door depressurizes the building with a fan so testers can measure air leakage.",
        UNDERGRADUATE: "Deep retrofits combine envelope and system upgrades to reach large savings, commonly defined as roughly half or more.",
        GRADUATE: "PACE lets owners repay upgrade costs through a property assessment collected with property taxes.",
        PHD: "When occupants of inefficient homes already under-heat, actual baseline use is lower than modeled, shrinking measured savings.",
      },
    },
    {
      id: 'gbretq2',
      question: {
        ELEMENTARY: "What is insulation?",
        MIDDLE_SCHOOL: "What is weatherization?",
        HIGH_SCHOOL: "Why do auditors run a combustion safety test after air sealing?",
        UNDERGRADUATE: "Why is simple payback a weak way to compare retrofit options?",
        GRADUATE: "What is a split incentive?",
        PHD: "What does a difference-in-differences evaluation compare?",
      },
      options: {
        ELEMENTARY: ["A shiny paint for roofs", "A fluffy layer in walls and roofs that keeps heat where we want it", "A kind of light bulb", "A machine that pumps water"],
        MIDDLE_SCHOOL: ["Checking the weather forecast", "Painting a building to match the weather", "Sealing and insulating a building to protect it from outdoor weather", "Building a weather station on the roof"],
        HIGH_SCHOOL: ["To check the paint is dry", "To measure the size of the windows", "To make sure sealed buildings still vent appliance exhaust safely", "To test the water heater temperature"],
        UNDERGRADUATE: ["It ignores savings after payback and the time value of money", "It always overstates upfront cost", "It requires a blower door test", "It can only be used for lighting"],
        GRADUATE: ["Two owners sharing one building", "A discount for buying two upgrades", "When the party paying for upgrades does not receive the energy savings", "Dividing a retrofit into two phases"],
        PHD: ["Changes over time between treated and comparison groups", "Two engineering models of the same building", "Energy prices in two countries", "Costs before and after inflation only"],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: "Insulation is like a warm blanket for a building that keeps heat in during winter and out in summer.",
        MIDDLE_SCHOOL: "Weatherization means sealing leaks and adding insulation so outdoor weather affects the inside less.",
        HIGH_SCHOOL: "Sealing changes air movement, so auditors confirm gas or oil appliances still vent exhaust safely.",
        UNDERGRADUATE: "Simple payback stops counting once costs are recovered and does not discount future cash flows, unlike life-cycle methods.",
        GRADUATE: "In rentals, owners often pay for upgrades while tenants pay the bills, so neither has a full incentive to invest.",
        PHD: "Difference-in-differences compares changes over time in treated buildings against a comparison group to isolate the effect.",
      },
    },
    {
      id: 'gbretq3',
      question: {
        ELEMENTARY: "How can you find a draft at home?",
        MIDDLE_SCHOOL: "Why do experts usually seal leaks and insulate before buying a new heater?",
        HIGH_SCHOOL: "Which audit type is used for large projects that need financing?",
        UNDERGRADUATE: "What are interactive effects in a retrofit?",
        GRADUATE: "What does a building performance standard do?",
        PHD: "What do industrialized retrofit approaches such as prefabricated facade panels aim to achieve?",
      },
      options: {
        ELEMENTARY: ["Hold a feather or tissue near a closed window and see if it wiggles", "Turn up the television", "Look at the ceiling lights", "Count the doors in your home"],
        MIDDLE_SCHOOL: ["Because the building then needs a smaller, cheaper heating system", "Because heaters only work in sealed rooms", "Because insulation is always free", "Because new heaters make drafts worse"],
        HIGH_SCHOOL: ["An investment-grade audit", "A walk-through audit", "A paint audit", "A fire drill"],
        UNDERGRADUATE: ["One measure changing the savings of another", "Effects of retrofits on the internet connection", "Meetings between contractors", "The color of new equipment"],
        GRADUATE: ["Requires existing buildings to meet energy or emissions targets over time", "Sets the height limit for new towers", "Rates the appearance of buildings", "Bans all renovation work"],
        PHD: ["Less on-site time, disruption and cost through standardization", "More disruption for occupants", "Unique custom designs for every home", "Removing insulation from walls"],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: "If the feather or tissue moves, outside air is leaking in. Tell a grown-up so it can be sealed.",
        MIDDLE_SCHOOL: "A tighter, better insulated building needs less heat, so a smaller and cheaper system is enough.",
        HIGH_SCHOOL: "Investment-grade audits provide detailed engineering analysis that lenders and contractors can rely on.",
        UNDERGRADUATE: "Measures interact; for example, insulation lowers the load and changes the value of heating upgrades.",
        GRADUATE: "Building performance standards require existing buildings to improve over time toward set targets.",
        PHD: "Standardized, factory-made components aim to cut cost, time on site and disruption, though learning rates are still studied.",
      },
    },
    {
      id: 'gbretq4',
      question: {
        ELEMENTARY: "Why can fixing an old building be better than building a new one?",
        MIDDLE_SCHOOL: "What is a payback period?",
        HIGH_SCHOOL: "What is a baseline in a retrofit project?",
        UNDERGRADUATE: "What risk comes with adding interior insulation to old masonry walls?",
        GRADUATE: "Why do weatherization programs focus on low-income households?",
        PHD: "What is the rebound effect?",
      },
      options: {
        ELEMENTARY: ["New buildings are always too small", "Old buildings never need fixing", "It saves bricks, concrete and steel", "Fixing makes buildings taller"],
        MIDDLE_SCHOOL: ["How long a building has been standing", "The time it takes to paint a house", "How long savings take to cover the cost of an upgrade", "The time between utility bills"],
        HIGH_SCHOOL: ["The basement floor", "The cheapest upgrade available", "Energy use before upgrades, used to measure savings", "The height of the ground floor"],
        UNDERGRADUATE: ["The walls become too thin to stand", "Lighting stops working", "Moisture can become trapped if vapor behavior is ignored", "Heat pumps cannot be installed"],
        GRADUATE: ["They use the most energy-efficient housing", "They never pay energy bills", "They often live in less efficient housing and spend more of their income on energy", "They own most commercial buildings"],
        PHD: ["Equipment bouncing back to factory settings", "Energy prices returning to normal", "More use of energy services, such as warmer rooms, after efficiency makes them cheaper", "Contractors returning to fix mistakes"],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: "Fixing an old building keeps using what is already there, saving lots of new materials.",
        MIDDLE_SCHOOL: "The payback period is the time it takes for energy savings to add up to the cost of the upgrade.",
        HIGH_SCHOOL: "The baseline is pre-retrofit energy use; comparing later bills to it shows how much was saved.",
        UNDERGRADUATE: "Interior insulation changes wall temperatures and drying, which can trap moisture in old masonry.",
        GRADUATE: "Lower-income households often face high energy burdens in inefficient homes, so retrofits help them most.",
        PHD: "Rebound is when cheaper energy services lead people to use more, offsetting part of the predicted savings.",
      },
    },
    {
      id: 'gbretq5',
      question: {
        ELEMENTARY: "Which light bulbs use much less electricity?",
        MIDDLE_SCHOOL: "What can a thermal camera show?",
        HIGH_SCHOOL: "Why does a tightly sealed building need planned ventilation?",
        UNDERGRADUATE: "What is a lost opportunity in retrofit planning?",
        GRADUATE: "What is on-bill financing?",
        PHD: "What is a known limitation of archetype-based stock models?",
      },
      options: {
        ELEMENTARY: ["Old hot bulbs", "Candles", "Flashlights with no batteries", "LED bulbs"],
        MIDDLE_SCHOOL: ["How tall a building is", "The age of the windows", "The color of the paint", "Warm and cool spots that reveal hidden heat leaks"],
        HIGH_SCHOOL: ["To make it louder inside", "To keep the doors open", "To lower the cost of paint", "To bring in fresh air and keep indoor air healthy"],
        UNDERGRADUATE: ["Losing receipts for equipment", "A contractor missing a meeting", "A building with no tenants", "A chance to upgrade efficiently that disappears when equipment is replaced like-for-like"],
        GRADUATE: ["A grant paid by the national government", "A bill for new construction", "A fee to read the meter", "Repaying upgrade costs through regular utility bill charges"],
        PHD: ["They cannot estimate policy impacts at all", "They require smart meter data for every home", "They only work for one building", "Simplifying buildings into archetypes can hide real heterogeneity"],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: "LED bulbs give the same light while using much less electricity than old bulbs.",
        MIDDLE_SCHOOL: "Thermal cameras show temperature differences, revealing missing insulation and air leaks.",
        HIGH_SCHOOL: "Once leaks are sealed, fresh air must be supplied on purpose, often by mechanical ventilation.",
        UNDERGRADUATE: "If old equipment is replaced with the same type, the chance for an efficient upgrade is lost for years.",
        GRADUATE: "On-bill financing collects repayments through utility bills, a familiar payment channel.",
        PHD: "Archetypes make stock modeling tractable but can mask the variety of real buildings and occupants.",
      },
    },
  ],
}

export default expansion
