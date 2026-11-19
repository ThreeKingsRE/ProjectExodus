import type { ModuleExpansion } from '../types'

// Rewritten with its own angle: saving water across whole cities and farms.
// Chapter 5 covers water conservation basics at home.
const expansion: ModuleExpansion = {
  topicId: 'water-systems',
  moduleKey: 'water-conservation~2',
  title: 'Water Conservation at Scale: Cities and Farms',
  description: {
    ELEMENTARY: 'How whole towns and farms save water by fixing leaks, watering smartly and sharing what they have.',
    MIDDLE_SCHOOL: 'How cities cut water waste and farms grow more food with less water.',
    HIGH_SCHOOL: 'Large-scale water conservation: leak control, pricing and outdoor rules in cities, and efficient irrigation on farms.',
    UNDERGRADUATE: 'Urban and agricultural water conservation: non-revenue water, demand management and irrigation efficiency.',
    GRADUATE: 'Designing conservation programmes for utilities and irrigation districts: evaluation, rebound and allocation.',
    PHD: 'Research on water conservation at scale: paradoxes of efficiency, behavioural response and governance.',
  },
  lessons: [
    {
      id: 'ws-cons-1',
      title: 'Water Conservation at Scale: Cities and Farms',
      content: {
        ELEMENTARY: `
<h2>Saving Water Together</h2>
<p>You might turn off the tap while you brush your teeth. That is a great habit! But what if a whole town worked together to save water? Or a farm that grows food for thousands of people? When big places save water, the savings are huge, like filling a swimming pool every few minutes.</p>

<h3>How Towns Save Water</h3>
<p>Water travels to our homes through long pipes under the streets. Some pipes are old and have tiny cracks that leak. Towns send workers with special listening tools to find the leaks and fix them. Towns also ask people to water their lawns only on certain days, and some plant gardens that need very little water.</p>
<ul>
<li><strong>Leak:</strong> a crack or hole where water escapes by accident</li>
<li><strong>Water pipe:</strong> a tube that carries water under the ground</li>
<li><strong>Drought:</strong> a long time with very little rain</li>
<li><strong>Drip irrigation:</strong> watering plants slowly, drop by drop, right at their roots</li>
<li><strong>Water meter:</strong> a tool that measures how much water is used</li>
</ul>

<h3>How Farms Save Water</h3>
<p>Farms use more water than anything else. Some farmers use drip irrigation, which gives each plant just the water it needs. Others use sensors in the soil that tell them when plants are thirsty, so they do not water too much.</p>

<h3>Why It Matters</h3>
<p>When towns and farms save water, rivers and lakes stay fuller, fish have homes and there is enough water for everyone, even during a drought. Every drop saved by a town or a farm is a drop that can stay in nature for plants and animals.</p>
`,
        MIDDLE_SCHOOL: `
<h2>Saving Water Across Cities and Farms</h2>
<p>Individual habits like shorter showers matter, but the biggest water savings come from changing how whole systems work. A city might lose a fifth of its treated water through leaky pipes before it ever reaches a tap. Farms, which use about 70 percent of the fresh water people take worldwide, can often grow the same crops with much less. This chapter looks at conservation on that big scale.</p>

<h3>In the City</h3>
<p>Cities save water by finding and fixing leaks in their pipe networks, installing smart meters that spot unusual use, and setting rules during droughts, such as limiting lawn watering to certain days. Many cities pay residents rebates to replace thirsty lawns with native plants or to buy efficient toilets and washing machines. Water prices can also encourage saving: some cities charge more per gallon for very high use.</p>
<ul>
<li><strong>Water loss:</strong> treated water that leaks or disappears before reaching customers</li>
<li><strong>Smart meter:</strong> a meter that sends frequent readings and can flag leaks</li>
<li><strong>Tiered pricing:</strong> charging a higher price per unit as water use goes up</li>
<li><strong>Turf replacement:</strong> swapping grass lawns for plants that need little water</li>
<li><strong>Soil moisture sensor:</strong> a device that measures how wet the soil is</li>
</ul>

<h3>On the Farm</h3>
<p>Farmers can switch from flooding fields to sprinklers or drip lines, which deliver water more precisely. Soil moisture sensors and weather data help them water only when crops need it. Choosing crops that suit the local climate, and practices that keep soil spongy and full of organic matter, also help hold water in the ground.</p>

<h3>Working Together</h3>
<p>Rivers are shared by cities, farms and nature. In dry regions, cities and farmers sometimes make deals where cities help pay for farm efficiency upgrades and share the water saved. Done fairly, this keeps farms in business, keeps taps running and leaves more water in rivers.</p>
`,
        HIGH_SCHOOL: `
<h2>Conservation as a System</h2>
<p>When people hear "water conservation," they often picture turning off the tap. Household habits help, but most opportunities lie in systems: the pipes that carry water across a city, the way water is priced, the landscapes we choose and, above all, irrigation, which accounts for roughly 70 percent of global freshwater withdrawals. This chapter looks at conservation strategies used by utilities, cities and farmers.</p>

<h3>Cities: Losses, Meters and Landscapes</h3>
<p>Utilities track non-revenue water: water treated and pumped but never billed because it leaks, is stolen or is measured wrongly. In many systems this is 20 to 30 percent of supply. Acoustic leak detection, pressure management (lowering pressure at night reduces leaks) and pipe replacement cut losses. Smart meters give hourly data so households can spot leaks quickly. In dry cities, outdoor irrigation can be half of summer demand, so turf-replacement rebates, watering-day schedules and drought-tolerant landscaping deliver big savings.</p>
<ul>
<li><strong>Non-revenue water:</strong> water a utility produces but does not bill, mainly due to leaks and metering errors</li>
<li><strong>Pressure management:</strong> lowering water pressure in pipes to reduce leaks and bursts</li>
<li><strong>Conservation pricing:</strong> water rates designed to encourage efficient use, such as increasing block rates</li>
<li><strong>Irrigation efficiency:</strong> the share of applied water that crops actually use</li>
<li><strong>Deficit irrigation:</strong> deliberately giving crops slightly less water than full demand at less sensitive growth stages</li>
</ul>

<h3>Farms: More Crop Per Drop</h3>
<p>Flood irrigation can lose much of its water to evaporation and runoff. Drip and micro-sprinkler systems apply water directly to roots, often achieving efficiencies of 85 to 95 percent. Scheduling with soil moisture sensors, weather stations or satellite estimates of crop water use avoids over-watering. Deficit irrigation, used at growth stages when crops tolerate stress, can save water with little yield loss for crops like grapes and almonds.</p>

<h3>A Surprising Catch</h3>
<p>Efficiency does not always mean less water used overall. If a farmer saves water with drip irrigation and then plants more acres, total consumption can rise. That is why basins that want real savings pair efficiency upgrades with limits on total water use.</p>

<h3>Sharing Savings</h3>
<p>In some regions, cities fund farm efficiency projects in exchange for some of the conserved water, or pay farmers to fallow fields temporarily in droughts. Fair deals protect farm communities while keeping rivers and cities supplied.</p>
`,
        UNDERGRADUATE: `
<h2>Water Conservation at Utility and Basin Scale</h2>
<p>Water conservation is most effective when treated as a resource strategy rather than a set of household tips. Utilities increasingly compare conservation with new supply options on a cost-per-acre-foot basis, and basin managers recognise that agricultural efficiency, which dominates consumptive use in many regions, determines how much water remains for cities and ecosystems. This chapter covers urban demand management, water loss control and agricultural efficiency, along with the hydrological subtleties that complicate them.</p>

<h3>Urban Demand Management</h3>
<p>Demand management combines price signals, regulations, incentives and information. Increasing block rates raise marginal prices for high users; price elasticity of residential demand is typically low (around −0.1 to −0.4) but higher for outdoor use. Codes requiring efficient fixtures lock in savings in new buildings, while rebates accelerate replacement in existing ones. Programmes are evaluated by comparing participants with matched non-participants, accounting for weather and economic conditions.</p>
<ul>
<li><strong>Price elasticity of water demand:</strong> the percentage change in water use for a one percent change in price</li>
<li><strong>Infrastructure leakage index:</strong> a performance indicator comparing actual leakage to an unavoidable minimum</li>
<li><strong>Consumptive use:</strong> water evaporated, transpired or incorporated into products, no longer available downstream</li>
<li><strong>Return flow:</strong> applied water that returns to rivers or aquifers and can be reused downstream</li>
<li><strong>Water budget:</strong> an allocation of water to a customer based on household size, landscape area and weather</li>
</ul>

<h3>Water Loss Control</h3>
<p>The International Water Association water balance distinguishes real losses (leaks and bursts) from apparent losses (metering inaccuracies and theft). The infrastructure leakage index benchmarks performance. Active leak detection, district metered areas, pressure management and asset renewal reduce real losses; meter replacement and data analytics reduce apparent losses.</p>

<h3>Agricultural Efficiency and the Paradox</h3>
<p>Field application efficiency rises from roughly 40 to 60 percent for surface irrigation to 85 to 95 percent for drip. However, much of the "lost" water in inefficient systems returns to rivers and aquifers as return flow and is reused downstream. Efficiency upgrades often increase consumptive use by enabling crops to use more water or expanding irrigated area. Real savings therefore require caps on consumptive use or water rights adjustments alongside technology.</p>

<h3>Urban-Agricultural Partnerships</h3>
<p>Arrangements such as conservation-for-transfer agreements and rotational fallowing programmes let cities compensate farmers for conserved or forgone water. Their success depends on measuring consumptive use reductions (often by satellite evapotranspiration estimates) and on protecting third parties and rural economies.</p>
`,
        GRADUATE: `
<h2>Designing Conservation Programmes for Utilities and Irrigation Districts</h2>
<p>As climate change intensifies droughts and new supply becomes costlier and more contested, conservation has become a core resource for water utilities and irrigation districts. Yet programmes are frequently evaluated poorly, and agricultural efficiency investments can fail to deliver basin-level savings. This chapter examines programme design, evaluation methods, rebound and paradox effects, and the allocation frameworks that determine whether conservation translates into real water left in rivers and aquifers.</p>

<h3>Programme Portfolios and Evaluation</h3>
<p>Utilities assemble portfolios of measures (fixture rebates, landscape transformation, leak alerts, pricing, outreach) and compare their cost-effectiveness against supply alternatives using levelised cost per volume saved. Credible evaluation requires counterfactuals: difference-in-differences designs with matched comparison groups, randomised trials for behavioural interventions such as social-comparison reports, and correction for free riders who would have acted anyway. Persistence of savings matters, since behavioural effects can decay while hardware savings persist.</p>
<ul>
<li><strong>Levelised cost of conserved water:</strong> lifetime programme cost divided by lifetime volume saved</li>
<li><strong>Free rider:</strong> a participant who receives an incentive for an action they would have taken anyway</li>
<li><strong>Difference-in-differences:</strong> an evaluation method comparing changes over time in treated and comparison groups</li>
<li><strong>Paradox of irrigation efficiency:</strong> efficiency gains that increase rather than decrease total consumptive use</li>
<li><strong>Prior appropriation:</strong> a water rights system in which earlier rights holders have priority in shortages</li>
</ul>

<h3>Revenue and Equity Impacts</h3>
<p>Because utility costs are largely fixed, successful conservation can reduce revenue and force rate increases, which may frustrate customers who saved. Rate designs that separate fixed and variable cost recovery, and drought surcharges designed in advance, stabilise finances. Equity analysis checks that conservation pricing does not burden large low-income households, for example through water budgets based on household size.</p>

<h3>Agriculture: Accounting for Consumptive Use</h3>
<p>Evidence from many basins shows that subsidised drip irrigation often increased consumptive use through expanded area or intensified cropping. Policy responses include tying subsidies to reductions in water rights or consumptive use, basin-level caps and remote-sensing-based accounting of evapotranspiration. Within prior-appropriation systems, "use it or lose it" rules can discourage conservation; reforms allow conserved water to be leased or banked without forfeiting rights.</p>

<h3>Drought Response</h3>
<p>Drought contingency plans define staged restrictions, communication strategies and triggers based on storage or streamflow. Combining long-term efficiency with short-term curtailment, and planning them together, avoids "demand hardening," where efficient customers have little left to cut in emergencies.</p>

<h3>Data and Digital Tools</h3>
<p>Advanced metering infrastructure, customer portals and leak alerts have changed what utilities can do. Hourly data allow targeted outreach to the highest outdoor users, early detection of customer-side leaks and better demand forecasting. Irrigation districts use telemetry on canals and satellite crop-water estimates to manage deliveries more precisely. Realising these benefits requires investment in data systems, staff skills and privacy safeguards.</p>
`,
        PHD: `
<h2>Research Frontiers in Water Conservation at Scale</h2>
<p>Water conservation research has moved from engineering estimates of potential savings toward questions about realised outcomes in coupled human-water systems. Central puzzles include why efficiency gains often fail to reduce basin-level consumption, how behaviour responds to prices and information over time, and which institutions convert conservation into reallocated water for cities and ecosystems. This chapter surveys those frontiers.</p>

<h3>Efficiency Paradoxes and Hydrological Accounting</h3>
<p>The paradox of irrigation efficiency, documented across basins in South Asia, the Middle East, Spain and the western United States, arises because field-scale "losses" are often recoverable return flows. Rigorous assessment requires basin-scale water accounting that tracks consumptive and non-consumptive fractions, return flow pathways and timing. Remote sensing of evapotranspiration has advanced accounting, but uncertainties in energy-balance models, especially in heterogeneous landscapes, remain significant. Socio-hydrological models that represent farmer decisions about cropping and expansion help explain when efficiency translates into savings.</p>
<ul>
<li><strong>Socio-hydrology:</strong> the study of co-evolving interactions between human and water systems</li>
<li><strong>Evapotranspiration:</strong> water evaporated from soil and transpired by plants, the main consumptive use in agriculture</li>
<li><strong>Rebound effect:</strong> an increase in use that offsets part of the savings from an efficiency improvement</li>
<li><strong>Demand hardening:</strong> reduced capacity to cut use in emergencies after routine efficiency gains</li>
<li><strong>Polycentric governance:</strong> governance by multiple, overlapping decision-making centres</li>
</ul>

<h3>Behaviour, Prices and Information</h3>
<p>Field experiments with social-comparison reports show modest, often persistent reductions, with heterogeneous effects across households. Studies of drought pricing and restrictions find that mandates and moral suasion can produce rapid reductions but that rebound follows when restrictions lift. Open questions concern long-run elasticity, interactions between pricing and non-price measures, and how smart metering data, combined with machine learning, can personalise interventions without compromising privacy or equity.</p>

<h3>Institutions and Reallocation</h3>
<p>Whether conserved water benefits other users depends on property rights and governance. Research compares water markets, administrative reallocation and polycentric arrangements, evaluating transaction costs, third-party effects and outcomes for rural communities. Environmental water acquisition programmes test whether conservation can be directed to restoring flows. Comparative institutional analysis across basins suggests that secure, well-defined rights to consumptive use, combined with monitoring, are prerequisites for effective reallocation.</p>

<h3>Climate and Equity</h3>
<p>Climate change raises crop water demand and intensifies droughts, raising the stakes of conservation policy. Distributional analysis examines who bears the costs of conservation (through prices, fallowing or restrictions) and who benefits. Integrated assessment that links hydrology, agronomy, behaviour and institutions, with explicit attention to equity, is a key research need.</p>

<h3>Methodological Directions</h3>
<p>Advances will come from combining high-resolution metering and satellite data with causal inference methods, coupling hydrological and agent-based models, and long-term monitoring of conservation programmes beyond their initial evaluation periods, so that persistence and rebound can be measured directly.</p>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'ws-cons2-q1',
      question: {
        ELEMENTARY: 'What uses more water than anything else?',
        MIDDLE_SCHOOL: 'About what share of the fresh water people take worldwide do farms use?',
        HIGH_SCHOOL: 'What is non-revenue water?',
        UNDERGRADUATE: 'What is consumptive use?',
        GRADUATE: 'What is a free rider in conservation programme evaluation?',
        PHD: 'What is socio-hydrology?',
      },
      options: {
        ELEMENTARY: ['Fish tanks', 'Farms', 'Toothbrushes', 'Swimming pools'],
        MIDDLE_SCHOOL: ['About 5 percent', 'About 70 percent', 'Exactly half', 'Almost none'],
        HIGH_SCHOOL: ['Bottled water', 'Water a utility produces but does not bill', 'Free drinking fountains', 'Rainwater'],
        UNDERGRADUATE: ['Water sold to customers', 'Water evaporated, transpired or incorporated, no longer available downstream', 'Water returned to rivers', 'Water stored in tanks'],
        GRADUATE: ['Someone who rides bikes for free', 'A participant rewarded for an action they would have taken anyway', 'A utility worker', 'A customer who never pays'],
        PHD: ['Water in social media', 'The study of co-evolving human and water systems', 'Hydropower economics', 'Ocean chemistry'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Farms use the most water, to grow our food.',
        MIDDLE_SCHOOL: 'Farms use about 70 percent of the fresh water people withdraw.',
        HIGH_SCHOOL: 'Non-revenue water is produced but not billed, mostly due to leaks and meter errors.',
        UNDERGRADUATE: 'Consumptive use leaves the local system through evaporation, transpiration or products.',
        GRADUATE: 'Free riders would have acted without the incentive, so they inflate apparent savings.',
        PHD: 'Socio-hydrology studies how human and water systems shape each other over time.',
      },
    },
    {
      id: 'ws-cons2-q2',
      question: {
        ELEMENTARY: 'How do towns find leaks in pipes under the street?',
        MIDDLE_SCHOOL: 'What is tiered pricing for water?',
        HIGH_SCHOOL: 'How does pressure management save water?',
        UNDERGRADUATE: 'What does the infrastructure leakage index measure?',
        GRADUATE: 'Why can successful conservation create financial problems for utilities?',
        PHD: 'What explains the paradox of irrigation efficiency?',
      },
      options: {
        ELEMENTARY: ['They ask the fish', 'They guess', 'They use special listening tools', 'They dig up every street'],
        MIDDLE_SCHOOL: ['A cake recipe', 'The same price for everyone forever', 'Charging more per unit as use goes up', 'Free water for big users'],
        HIGH_SCHOOL: ['It raises pressure to push leaks out', 'It adds more pipes', 'Lower pressure reduces leaks and bursts', 'It stops all water flow'],
        UNDERGRADUATE: ['Water quality', 'Customer satisfaction', 'Actual leakage compared with an unavoidable minimum', 'Pipe colour'],
        GRADUATE: ['Water becomes free', 'Pipes break more', 'Costs are largely fixed, so lower sales cut revenue', 'Customers stop paying'],
        PHD: ['Drip lines always leak', 'Farmers ignore technology', 'Field losses are often recoverable return flows, and savings fund expansion', 'Rain increases with drip irrigation'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Workers use tools that listen for the sound of water escaping.',
        MIDDLE_SCHOOL: 'Tiered pricing charges more per unit for higher use.',
        HIGH_SCHOOL: 'Lowering pressure, especially at night, means less water escapes through cracks.',
        UNDERGRADUATE: 'The ILI compares real leakage with the minimum unavoidable level.',
        GRADUATE: 'Most utility costs are fixed, so selling less water lowers revenue and can force rate increases.',
        PHD: 'What looks like loss often returns to rivers, and efficiency enables more consumption.',
      },
    },
    {
      id: 'ws-cons2-q3',
      question: {
        ELEMENTARY: 'What is drip irrigation?',
        MIDDLE_SCHOOL: 'What does a soil moisture sensor do?',
        HIGH_SCHOOL: 'About how efficient are drip and micro-sprinkler systems?',
        UNDERGRADUATE: 'What is return flow?',
        GRADUATE: 'What does "demand hardening" mean?',
        PHD: 'What happens after drought restrictions are lifted, according to studies?',
      },
      options: {
        ELEMENTARY: ['Watering plants slowly at their roots', 'Spraying water into the sky', 'Pouring buckets on roads', 'Watering only the leaves'],
        MIDDLE_SCHOOL: ['Measures how wet the soil is', 'Counts worms', 'Measures sunlight', 'Plants seeds'],
        HIGH_SCHOOL: ['About 85 to 95 percent', 'About 10 percent', 'About 30 percent', 'Exactly 50 percent'],
        UNDERGRADUATE: ['Applied water that returns to rivers or aquifers for reuse', 'Water sold back to utilities', 'Water flowing uphill', 'Rain that falls twice'],
        GRADUATE: ['Less ability to cut use in emergencies after routine efficiency gains', 'Pipes becoming harder', 'Prices rising during floods', 'Soil becoming compacted'],
        PHD: ['Use rebounds as restrictions lift', 'Use falls to zero', 'Nothing changes', 'Prices drop permanently'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Drip irrigation gives water drop by drop right at the roots.',
        MIDDLE_SCHOOL: 'Soil moisture sensors tell farmers when the soil is dry.',
        HIGH_SCHOOL: 'Drip and micro-sprinklers deliver about 85 to 95 percent of water to crops.',
        UNDERGRADUATE: 'Return flow is water that goes back to rivers or aquifers and can be reused.',
        GRADUATE: 'Once everyone is efficient, there is less easy water to cut in a crisis.',
        PHD: 'Studies find use rebounds after restrictions end.',
      },
    },
    {
      id: 'ws-cons2-q4',
      question: {
        ELEMENTARY: 'What is a drought?',
        MIDDLE_SCHOOL: 'What is turf replacement?',
        HIGH_SCHOOL: 'How can saving water with drip irrigation sometimes increase total water use?',
        UNDERGRADUATE: 'Typical residential price elasticity of water demand is about:',
        GRADUATE: 'How can "use it or lose it" water rights rules discourage conservation?',
        PHD: 'What institutional conditions appear to be prerequisites for effective reallocation of conserved water?',
      },
      options: {
        ELEMENTARY: ['A big flood', 'A snowstorm', 'A sunny afternoon', 'A long time with very little rain'],
        MIDDLE_SCHOOL: ['Painting grass green', 'Planting more lawns', 'Mowing more often', 'Swapping grass lawns for low-water plants'],
        HIGH_SCHOOL: ['Drip lines leak more', 'Farmers stop farming', 'Rain stops', 'Farmers may plant more acres with the saved water'],
        UNDERGRADUATE: ['−5 to −10', 'Exactly zero', '+1 to +2', '−0.1 to −0.4'],
        GRADUATE: ['They make water free', 'They require meters', 'They ban irrigation', 'Saving water can forfeit rights to it'],
        PHD: ['No monitoring', 'Unclear rights', 'Open access with no rules', 'Secure, well-defined rights to consumptive use plus monitoring'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'A drought is a long time with very little rain.',
        MIDDLE_SCHOOL: 'Turf replacement swaps thirsty lawns for plants that need little water.',
        HIGH_SCHOOL: 'If the saved water is used on more land, total use can go up.',
        UNDERGRADUATE: 'Residential demand responds weakly to price, around −0.1 to −0.4.',
        GRADUATE: 'If unused water rights are lost, users have reason to keep using water.',
        PHD: 'Clear rights to consumptive use and monitoring make reallocation work.',
      },
    },
    {
      id: 'ws-cons2-q5',
      question: {
        ELEMENTARY: 'What does a water meter do?',
        MIDDLE_SCHOOL: 'How can cities and farmers work together in dry regions?',
        HIGH_SCHOOL: 'What do basins that want real savings pair with efficiency upgrades?',
        UNDERGRADUATE: 'How are reductions in consumptive use often measured for urban-agricultural deals?',
        GRADUATE: 'Which method compares changes over time in treated and comparison groups?',
        PHD: 'Which environmental policy tests whether conservation can restore river flows?',
      },
      options: {
        ELEMENTARY: ['Measures how much water is used', 'Makes water colder', 'Cleans the water', 'Plays a song'],
        MIDDLE_SCHOOL: ['Cities help pay for farm upgrades and share the saved water', 'Cities buy all farms', 'Farmers move to cities', 'They stop using rivers'],
        HIGH_SCHOOL: ['Limits on total water use', 'More flood irrigation', 'Bigger lawns', 'Lower prices'],
        UNDERGRADUATE: ['Satellite estimates of evapotranspiration', 'Counting tractors', 'Phone surveys of farmers only', 'Measuring rainfall in cities'],
        GRADUATE: ['Difference-in-differences', 'Simple averages', 'Asking participants how they feel', 'Counting rebates issued'],
        PHD: ['Environmental water acquisition programmes', 'Building more dams', 'Expanding irrigated area', 'Removing all meters'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'A water meter measures how much water a home or farm uses.',
        MIDDLE_SCHOOL: 'Cities can fund farm efficiency and share the water saved.',
        HIGH_SCHOOL: 'Caps on total use stop saved water from being used elsewhere.',
        UNDERGRADUATE: 'Satellites estimate evapotranspiration to measure consumptive use.',
        GRADUATE: 'Difference-in-differences compares before-and-after changes against a comparison group.',
        PHD: 'Environmental water acquisition directs conserved water to river flows.',
      },
    },
  ],
}

export default expansion
