import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'green-building',
  moduleKey: 'green-retrofits',
  lessons: [
    {
      id: 'gb-rt-1',
      title: 'Make Old Buildings New',
      content: {
        ELEMENTARY: `
<h2>Old Buildings, New Green Superpowers</h2>
<p>Lots of the buildings around you are older than your grown-ups! Schools, libraries and houses can be very old. Old buildings are not bad. They just need some new tricks so they stay warm, cool and comfy without wasting energy. Giving an old building those tricks is called a <em>retrofit</em>.</p>

<h3>Start With a Cozy Coat</h3>
<p>Think about going outside on a cold day. First you put on a warm coat and a hat, right? Buildings need a coat too. The walls, roof, windows and doors are the building's coat. If the coat has holes, warm air leaks out in winter and hot air sneaks in during summer.</p>
<ul>
<li><strong>Insulation:</strong> fluffy or foamy material inside walls and roofs that keeps heat where we want it</li>
<li><strong>Draft:</strong> a little stream of air that sneaks in through gaps around doors and windows</li>
<li><strong>Double window:</strong> a window with two layers of glass and a gap that helps keep heat in</li>
</ul>

<h3>Then Swap the Old Machines</h3>
<p>Once the coat is fixed, the building does not need such a big heater. Old heaters that burn fuel can be swapped for a <em>heat pump</em>. A heat pump is a clever machine that moves heat from outside to inside in winter, and from inside to outside in summer. Old light bulbs can be swapped for LED bulbs that use much less electricity.</p>
<ul>
<li><strong>Heat pump:</strong> a machine that moves heat around to warm or cool a building using electricity</li>
<li><strong>LED bulb:</strong> a light bulb that glows brightly but uses only a little electricity</li>
</ul>

<h3>Why Not Knock It Down?</h3>
<p>Building a brand-new building uses lots of bricks, steel and concrete. Making all those things uses energy and makes pollution. Fixing up an old building keeps all that material in use. It is a bit like fixing your bike instead of buying a new one!</p>

<h3>Be a Retrofit Helper</h3>
<ol>
<li>Feel for cold air near windows and doors on a chilly day, and tell a grown-up.</li>
<li>Close curtains on hot sunny afternoons and cold nights.</li>
<li>Switch off lights when you leave a room.</li>
<li>Keep doors closed when the heating or cooling is on.</li>
</ol>
<p>Every little fix helps an old building become a green building!</p>
`,
        MIDDLE_SCHOOL: `
<h2>Upgrading Existing Buildings for Efficiency and Comfort</h2>
<p>Most of the buildings people will live and work in over the next few decades already exist today. That means making new buildings green is not enough. We also need to upgrade the buildings we already have. An upgrade that improves an existing building's energy use and comfort is called a <em>green retrofit</em>.</p>

<h3>How Buildings Waste Energy</h3>
<p>Heat always flows from warm places to cooler places. In winter, heat escapes from a warm house to the cold outdoors. In summer, heat flows in. It travels in three main ways:</p>
<ol>
<li><strong>Conduction</strong> through solid materials such as walls, glass and roofs</li>
<li><strong>Air leakage</strong> through cracks, gaps and holes in the building</li>
<li><strong>Radiation</strong> from sunshine pouring through windows</li>
</ol>
<p>Old buildings often have thin walls, single-pane windows and lots of gaps, so they lose heat quickly. Then old, inefficient heaters and air conditioners work extra hard to keep up.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Retrofit:</strong> adding new parts or upgrades to an existing building to improve how it works</li>
<li><strong>Building envelope:</strong> the outer shell of a building, including walls, roof, floor, windows and doors</li>
<li><strong>Air sealing:</strong> closing gaps and cracks so outside air cannot leak in or out</li>
<li><strong>Heat pump:</strong> an electric machine that moves heat into a building in winter and out in summer</li>
<li><strong>Electrification:</strong> switching equipment that burns fuel to equipment that runs on electricity</li>
<li><strong>Payback period:</strong> how long it takes for energy savings to cover the cost of an upgrade</li>
</ul>

<h3>The Envelope-First Rule</h3>
<p>Retrofit experts like to fix the envelope first. If you seal leaks and add insulation before buying a new heating system, the building needs less heating and cooling. Then you can buy a smaller, cheaper heat pump. If you do it the other way around, you might buy a machine that is far too big.</p>

<h3>Common Upgrades Compared</h3>
<table>
<thead><tr><th>Upgrade</th><th>What it does</th><th>Typical cost</th></tr></thead>
<tbody>
<tr><td>LED lighting</td><td>Uses much less electricity for the same light</td><td>Low</td></tr>
<tr><td>Air sealing</td><td>Stops drafts and heat loss</td><td>Low</td></tr>
<tr><td>Attic insulation</td><td>Keeps heat in or out through the roof</td><td>Low to medium</td></tr>
<tr><td>New windows</td><td>Reduces heat flow and drafts through glass</td><td>Medium to high</td></tr>
<tr><td>Heat pump</td><td>Efficient electric heating and cooling</td><td>Medium to high</td></tr>
</tbody>
</table>

<h3>More Than Saving Money</h3>
<p>Retrofits make buildings quieter, less drafty and more comfortable. They can also improve air quality when good ventilation is added. And because the building uses less energy, it causes less pollution from power plants and furnaces. A well-planned retrofit helps the people inside and the planet outside.</p>
`,
        HIGH_SCHOOL: `
<h2>Deep Energy Retrofits: Envelope and Systems Together</h2>
<p>A light retrofit might swap bulbs or add a smart thermostat. A <em>deep energy retrofit</em> goes much further, treating the building as a connected system and cutting its energy use dramatically, often by half or more. Because most existing buildings will still be standing in the middle of this century, deep retrofits are one of the biggest climate opportunities in the built environment.</p>

<h3>Thinking of the Building as a System</h3>
<p>Every part of a building affects the others. Better insulation lowers the heating load. Tighter air sealing changes how moisture moves and how much fresh air is needed. Efficient lighting gives off less waste heat, which slightly reduces cooling. Good retrofit design accounts for these interactions instead of upgrading parts one at a time.</p>
<ul>
<li><strong>Heating and cooling load:</strong> the amount of heat that must be added or removed to keep a space comfortable</li>
<li><strong>Thermal bridge:</strong> a part of the envelope, such as a steel beam or concrete balcony, that conducts heat much faster than the surrounding insulation</li>
<li><strong>Airtightness:</strong> how well the building envelope resists unwanted air leaking through it</li>
<li><strong>Mechanical ventilation with heat recovery:</strong> a fan system that brings in fresh air while transferring heat between outgoing and incoming air streams</li>
<li><strong>Right-sizing:</strong> choosing equipment matched to the reduced load after envelope improvements</li>
</ul>

<h3>Envelope Improvements</h3>
<p>Envelope measures include insulating attics, walls and basements, air sealing, replacing or upgrading windows, and adding exterior insulation that wraps the whole building and covers thermal bridges. Exterior insulation is effective but changes the look of a building, so it may not suit historic facades. Interior insulation preserves the exterior but takes up floor space and can create moisture risks in some masonry walls.</p>

<h3>System Upgrades</h3>
<table>
<thead><tr><th>System</th><th>Old approach</th><th>Retrofit upgrade</th></tr></thead>
<tbody>
<tr><td>Space heating</td><td>Fuel-burning furnace or boiler</td><td>Air-source or ground-source heat pump</td></tr>
<tr><td>Water heating</td><td>Gas or resistance tank</td><td>Heat pump water heater</td></tr>
<tr><td>Ventilation</td><td>Leaky envelope, no control</td><td>Heat or energy recovery ventilator</td></tr>
<tr><td>Lighting</td><td>Fluorescent or incandescent</td><td>LED with occupancy and daylight controls</td></tr>
<tr><td>Controls</td><td>Manual thermostats</td><td>Programmable or smart controls and monitoring</td></tr>
</tbody>
</table>

<h3>Trade-offs and Challenges</h3>
<p>Deep retrofits have high upfront costs, and savings arrive slowly over many years. Construction can disrupt people living or working inside. Tightening a building without adding ventilation can trap moisture and pollutants, so ventilation is part of the package. Owners who rent out buildings may not benefit from lower bills paid by tenants, which reduces their motivation to invest.</p>

<h3>Real-World Solutions</h3>
<ol>
<li><strong>Prefabricated facade panels:</strong> insulated wall and window panels built in a factory and attached outside, shortening disruption.</li>
<li><strong>Staged retrofits:</strong> doing measures at natural moments, such as re-roofing or replacing a broken boiler.</li>
<li><strong>Bundled programs:</strong> combining audits, contractors and financing so owners face fewer barriers.</li>
<li><strong>Measurement:</strong> tracking energy use after the retrofit to confirm that savings are real.</li>
</ol>
`,
        UNDERGRADUATE: `
<h2>Retrofit Assessment, Financing and Implementation</h2>
<p>Retrofitting is an engineering and an economic problem at once. A technically excellent package that no one can finance will not be built, and a cheap package that misses the largest savings wastes the one opportunity to intervene in a building for a decade or more. This lesson develops an analytical approach to assessing buildings, selecting measures, financing them and verifying results.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Energy audit:</strong> a structured assessment of how a building uses energy and where savings can be found</li>
<li><strong>Energy use intensity:</strong> annual energy use divided by floor area, used to compare buildings of different sizes</li>
<li><strong>Baseline:</strong> the measured or modeled energy use before a retrofit, against which savings are judged</li>
<li><strong>Interactive effects:</strong> the way one measure changes the savings of another, so savings cannot simply be added together</li>
<li><strong>Net present value:</strong> the sum of future savings and costs discounted to today, used to judge whether a project pays off</li>
<li><strong>Measurement and verification:</strong> the methods used to estimate savings actually achieved after installation</li>
</ul>

<h3>Levels of Assessment</h3>
<table>
<thead><tr><th>Level</th><th>Activities</th><th>Typical use</th></tr></thead>
<tbody>
<tr><td>Benchmarking</td><td>Compare utility bills and energy use intensity with similar buildings</td><td>Screening a portfolio for poor performers</td></tr>
<tr><td>Walk-through audit</td><td>Site visit, visual inspection, low-cost measure list</td><td>Quick wins and scoping</td></tr>
<tr><td>Detailed audit</td><td>Equipment inventory, blower door testing, end-use breakdown</td><td>Capital planning for a measure package</td></tr>
<tr><td>Investment-grade audit</td><td>Calibrated modeling, detailed cost estimates, risk analysis</td><td>Financing and performance contracts</td></tr>
</tbody>
</table>

<h3>Thinking Quantitatively</h3>
<p>Savings estimates must account for interactions. Suppose insulation cuts the heating load substantially, and a heat pump is several times more efficient than a gas boiler. The heat pump's savings are then calculated on the smaller post-insulation load, not the original load, so the combined savings are less than the two separate estimates added together. Simple payback (cost divided by annual savings) is easy to communicate but ignores measure lifetime and the time value of money. Net present value and life-cycle cost analysis compare options fairly, especially when long-lived envelope measures are paired with shorter-lived equipment.</p>

<h3>Financing Options</h3>
<ul>
<li>Owner capital or internal budgets, often limited by competing priorities.</li>
<li>Loans, including low-interest public or green bank loans.</li>
<li>On-bill financing, where repayment is added to the utility bill.</li>
<li>Property-assessed financing, where repayment is attached to the property tax bill.</li>
<li>Energy performance contracts, where savings repay the investment.</li>
<li>Utility rebates and public incentives that reduce upfront cost.</li>
</ul>

<h3>Implementation Checklist</h3>
<ol>
<li>Establish a baseline with at least a full year of weather-normalized energy data.</li>
<li>Audit at the depth the decision requires.</li>
<li>Model the package with interactive effects and right-sized equipment.</li>
<li>Evaluate life-cycle cost, carbon and non-energy benefits such as comfort.</li>
<li>Plan for ventilation, moisture control and occupant disruption.</li>
<li>Commission systems after installation so they work as designed.</li>
<li>Verify savings and adjust operations.</li>
</ol>

<h3>Common Pitfalls</h3>
<p>Engineering models frequently overpredict savings because they assume ideal installation and behavior. Poor workmanship in air sealing or insulation, controls left in override, and occupants who take back some savings as extra comfort all erode results. Verification and commissioning are the main defenses.</p>
`,
        GRADUATE: `
<h2>Portfolio Retrofits, Performance Contracts and Policy</h2>
<p>At scale, retrofit is a capital allocation and governance problem. Large owners such as public agencies, universities, housing providers and commercial landlords hold hundreds of buildings and must decide which to upgrade, in what order and how to pay. Governments, meanwhile, shape these choices through codes, performance standards and incentives. This lesson examines portfolio planning, energy performance contracting and the policy environment.</p>

<h3>Portfolio Planning</h3>
<ul>
<li><strong>Portfolio approach:</strong> planning retrofits across many buildings to balance cost, savings, risk and timing rather than treating each building alone</li>
<li><strong>Capital planning alignment:</strong> timing energy measures to coincide with scheduled replacement of roofs, boilers or facades</li>
<li><strong>Abatement cost curve:</strong> a ranking of measures by cost per unit of carbon or energy saved</li>
<li><strong>Building performance standard:</strong> a policy that requires existing buildings to meet energy or emissions targets that tighten over time</li>
<li><strong>Split incentive:</strong> a situation where the party paying for a retrofit is not the party receiving the savings</li>
<li><strong>Additionality:</strong> the extent to which savings would not have occurred without the program or incentive</li>
</ul>
<p>A portfolio view lets owners pair quick-payback measures with deeper, slower-payback ones so the package as a whole meets financial thresholds. It also reveals where equipment is near end of life, which is when switching to electric heat pumps costs least relative to like-for-like replacement.</p>

<h3>Energy Performance Contracting</h3>
<p>An Energy Service Company (ESCO) designs, installs and often maintains a retrofit package, typically guaranteeing a level of savings. In a common structure, the owner finances the project and the ESCO guarantees that savings will cover repayments; if savings fall short, the ESCO pays the difference. Performance contracts are widely used in public buildings because they shift performance risk away from the owner.</p>
<table>
<thead><tr><th>Feature</th><th>Advantage</th><th>Limitation</th></tr></thead>
<tbody>
<tr><td>Guaranteed savings</td><td>Owner protected against underperformance</td><td>ESCO may favor low-risk, shallow measures</td></tr>
<tr><td>Bundled design and delivery</td><td>One accountable party</td><td>Less competitive pricing on individual measures</td></tr>
<tr><td>Measurement and verification</td><td>Savings are documented</td><td>Transaction and monitoring costs are significant</td></tr>
<tr><td>Long contract terms</td><td>Allows deeper packages to pay back</td><td>Reduced flexibility if building use changes</td></tr>
</tbody>
</table>

<h3>Policy Incentives and Mandates</h3>
<p>Policy instruments span information (benchmarking and disclosure), incentives (rebates, tax credits, grants), finance (green banks, on-bill and property-assessed schemes) and mandates (building performance standards, minimum rental efficiency rules, appliance standards). Evidence suggests information alone moves only part of the market, and that mandates paired with finance and technical support are more effective at driving deep retrofits.</p>

<h3>Equity and Institutional Barriers</h3>
<p>Low-income households often live in the least efficient buildings and spend a larger share of income on energy, yet face the greatest barriers to financing. Retrofit programs can also raise rents or trigger displacement if not paired with tenant protections. Institutional barriers include fragmented ownership, limited contractor workforce, procurement rules that favor lowest first cost, and separate budgets for capital and operations.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Define portfolio goals in energy, carbon, cost and health terms.</li>
<li>Benchmark and segment buildings by performance and equipment age.</li>
<li>Build measure packages aligned with capital cycles.</li>
<li>Choose delivery and finance models suited to risk tolerance.</li>
<li>Verify savings and evaluate distributional outcomes, including tenants.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in Retrofit Optimization and Decarbonization Pathways</h2>
<p>Retrofit research now asks not only which measures save energy, but in what sequence, at what pace and under what uncertainty a building stock can reach deep decarbonization. Because each building is touched only a few times per century, sequencing decisions create lock-in, and optimization must reflect changing grid carbon intensity, climate, prices and technology. This lesson surveys modeling methods, contested questions and open directions.</p>

<h3>Retrofit Sequencing and Staged Approaches</h3>
<ul>
<li><strong>Retrofit sequencing:</strong> choosing the order of measures over time so that each step enables, rather than undermines, later steps</li>
<li><strong>Staged deep retrofit:</strong> reaching deep performance through planned steps tied to natural intervention points instead of a single project</li>
<li><strong>Lock-in:</strong> a decision that makes later improvement more costly, such as installing an oversized fossil boiler just before envelope upgrades</li>
<li><strong>Building renovation passport:</strong> a long-term, building-specific roadmap that records planned measures and their order</li>
<li><strong>Performance gap:</strong> the difference between predicted and measured energy use after a retrofit</li>
<li><strong>Prebound effect:</strong> the tendency of inefficient homes to use less energy than models predict because occupants already ration heating</li>
</ul>
<p>A recurring question is whether envelope-first sequencing is always optimal. Envelope-first reduces loads and allows smaller heat pumps, but where grids are decarbonizing quickly, earlier electrification can capture carbon benefits sooner, provided equipment remains adequate after later envelope work. The answer depends on climate, equipment lifetimes and grid trajectories.</p>

<h3>Modeling Methods</h3>
<table>
<thead><tr><th>Method</th><th>Strength</th><th>Limitation</th></tr></thead>
<tbody>
<tr><td>Archetype-based stock models</td><td>Scale to national building stocks</td><td>Hide heterogeneity within archetypes</td></tr>
<tr><td>Calibrated physics-based simulation</td><td>Detailed interactions within one building</td><td>Data-hungry and sensitive to calibration choices</td></tr>
<tr><td>Multi-objective optimization</td><td>Reveals cost, carbon and comfort trade-off frontiers</td><td>Computationally heavy; results depend on objective weighting</td></tr>
<tr><td>Dynamic programming over time</td><td>Represents sequencing and timing explicitly</td><td>State-space growth limits measure detail</td></tr>
<tr><td>Data-driven and surrogate models</td><td>Fast prediction using smart meter data</td><td>Limited physical interpretability and extrapolation</td></tr>
</tbody>
</table>

<h3>Uncertainty and Robustness</h3>
<p>Retrofit pathways face deep uncertainty in future energy prices, grid emissions, climate (heating loads may fall and cooling loads rise), and technology costs. Robust and adaptive approaches seek strategies that perform acceptably across many futures and identify decision points where pathways should be revisited. Real options analysis treats the ability to defer or stage measures as a source of value.</p>

<h3>Contested Questions</h3>
<ul>
<li>How large is the performance gap after retrofits, and how much is due to modeling, workmanship or occupant behavior?</li>
<li>Should policy target energy use, operational carbon or whole-life carbon including embodied emissions of retrofit materials?</li>
<li>Are deep single-step retrofits or staged approaches more effective at scale, given workforce and financing constraints?</li>
<li>How should rebound and prebound effects be treated when estimating program benefits?</li>
</ul>

<h3>Decarbonization Pathways</h3>
<p>Stock-level pathways combine envelope improvements, electrification, distributed generation and flexible demand. Research increasingly couples building stock models with power system models, because mass heat pump adoption reshapes winter peak demand, and envelope improvements can reduce that peak and the grid investment required. Embodied carbon of insulation and equipment also matters as operational emissions fall.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Sequencing models that integrate grid decarbonization, equipment lifetimes and whole-life carbon.</li>
<li>Large-sample empirical studies of measured retrofit outcomes using smart meter data.</li>
<li>Methods to quantify and reduce the performance gap through better workmanship and commissioning.</li>
<li>Coupled building-grid models of electrification and envelope trade-offs at peak.</li>
<li>Equity-aware optimization that weights health, affordability and displacement risk.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'gbrtq1',
      question: {
        ELEMENTARY: 'How can we make old buildings greener?',
        MIDDLE_SCHOOL: 'What does a green retrofit do?',
        HIGH_SCHOOL: 'What is the envelope-first approach?',
        UNDERGRADUATE: 'What is an energy audit?',
        GRADUATE: 'What is an ESCO?',
        PHD: 'What is retrofit sequencing?',
      },
      options: {
        ELEMENTARY: ['Add insulation and better windows', 'Paint them green', 'Add plants only', 'Make them smaller'],
        MIDDLE_SCHOOL: ['Upgrades an existing building to save energy and improve comfort', 'Tears the building down', 'Makes the building taller', 'Adds more parking spaces'],
        HIGH_SCHOOL: ['Fix insulation, air sealing and windows before replacing systems', 'Only upgrade the heating and cooling', 'Only add solar panels', 'Replace systems first and never touch the shell'],
        UNDERGRADUATE: ['A structured assessment of how a building uses energy and where savings can be found', 'A sound check of the building', 'A fire safety inspection only', 'A review of paint colors'],
        GRADUATE: ['An Energy Service Company that delivers retrofits, often with guaranteed savings', 'An emergency services office', 'An electrical supply store', 'An equipment storage company'],
        PHD: ['Choosing the order of measures over time so each step enables later steps', 'Installing measures in random order', 'Doing every measure at once without planning', 'Replacing a building rather than upgrading it'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Insulation and better windows are like a warm coat that keeps heat inside.',
        MIDDLE_SCHOOL: 'A green retrofit adds upgrades like insulation, air sealing and heat pumps to an existing building.',
        HIGH_SCHOOL: 'Fixing the shell first lowers the load, so smaller and cheaper equipment can be installed.',
        UNDERGRADUATE: 'An audit studies energy use and identifies improvement opportunities, at a depth matched to the decision.',
        GRADUATE: 'ESCOs design and install retrofit packages, and savings are often guaranteed to cover repayments.',
        PHD: 'Sequencing avoids lock-in and aligns each measure with natural intervention points and later steps.',
      },
    },
    {
      id: 'gbrtq2',
      question: {
        ELEMENTARY: 'What does a heat pump do?',
        MIDDLE_SCHOOL: 'What is the building envelope?',
        HIGH_SCHOOL: 'What is a thermal bridge?',
        UNDERGRADUATE: 'Why can retrofit savings not simply be added together?',
        GRADUATE: 'What is a split incentive?',
        PHD: 'What is the prebound effect?',
      },
      options: {
        ELEMENTARY: ['It pumps water into the bath', 'It blows up balloons', 'It moves heat to warm or cool a building', 'It turns on the lights'],
        MIDDLE_SCHOOL: ['The mailbox outside the building', 'The heating system in the basement', 'The outer shell, including walls, roof, windows and doors', 'The paperwork for a building permit'],
        HIGH_SCHOOL: ['A bridge built over a hot spring', 'A heater that connects two rooms', 'A part of the envelope that conducts heat much faster than the insulation around it', 'A thick layer of insulation in the attic'],
        UNDERGRADUATE: ['Because of interactive effects, where one measure changes the savings of another', 'Because savings are always zero', 'Because audits are not allowed to add numbers', 'Because every measure saves exactly the same amount'],
        GRADUATE: ['When the party paying for a retrofit is not the party receiving the savings', 'When a building is split into two apartments', 'When savings are shared equally by everyone', 'When an incentive is paid in two installments'],
        PHD: ['Energy savings that occur before a retrofit is announced', 'Pre-installation testing of equipment', 'Inefficient homes using less energy than models predict because occupants already ration heating', 'A discount offered before construction begins'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'A heat pump moves heat inside in winter and outside in summer using electricity.',
        MIDDLE_SCHOOL: 'The envelope is the outer shell that separates inside from outside.',
        HIGH_SCHOOL: 'Things like steel beams and concrete balconies let heat bypass the insulation.',
        UNDERGRADUATE: 'For example, a heat pump saves less after insulation has already reduced the heating load.',
        GRADUATE: 'Landlords often pay for upgrades while tenants receive lower bills, weakening the motivation to invest.',
        PHD: 'Because occupants already under-heat, measured savings can be smaller than models expect.',
      },
    },
    {
      id: 'gbrtq3',
      question: {
        ELEMENTARY: 'Why can fixing an old building be better than knocking it down?',
        MIDDLE_SCHOOL: 'Why do experts fix the envelope before buying a new heat pump?',
        HIGH_SCHOOL: 'Why must ventilation be part of a deep retrofit?',
        UNDERGRADUATE: 'What is a weakness of simple payback as a decision tool?',
        GRADUATE: 'What is a known limitation of guaranteed-savings performance contracts?',
        PHD: 'What is lock-in in the context of retrofits?',
      },
      options: {
        ELEMENTARY: ['Old buildings are always the tallest', 'It keeps bricks, steel and concrete in use instead of making new ones', 'Knocking down buildings is quiet', 'New buildings never have windows'],
        MIDDLE_SCHOOL: ['Because heat pumps only work in summer', 'Because a smaller heat pump is enough once leaks are sealed and insulation is added', 'Because envelopes are cheaper to paint', 'Because heat pumps cannot be installed in old buildings'],
        HIGH_SCHOOL: ['Ventilation makes buildings leakier on purpose', 'A tighter building without ventilation can trap moisture and pollutants', 'Ventilation replaces the need for insulation', 'Ventilation is only needed in new buildings'],
        UNDERGRADUATE: ['It is too hard to explain', 'It ignores measure lifetime and the time value of money', 'It always overstates costs', 'It requires calibrated simulation'],
        GRADUATE: ['ESCOs may favor low-risk, shallow measures', 'Owners carry all of the performance risk', 'Savings are never measured', 'Contracts cannot include lighting'],
        PHD: ['Locking doors during construction', 'A decision that makes later improvement more costly, such as an oversized boiler before envelope work', 'Securing financing at a fixed interest rate', 'Sealing all air leaks in one visit'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Making new building materials uses energy and causes pollution, so reusing a building helps the planet.',
        MIDDLE_SCHOOL: 'A tighter, better insulated building needs less heating and cooling, so the machine can be smaller.',
        HIGH_SCHOOL: 'Air sealing reduces natural air leakage, so controlled ventilation keeps indoor air healthy.',
        UNDERGRADUATE: 'Net present value and life-cycle cost compare long-lived and short-lived measures more fairly.',
        GRADUATE: 'Because the ESCO carries the risk, it may avoid deeper measures with uncertain savings.',
        PHD: 'Lock-in commits a building to a path that raises the cost of later deep improvements.',
      },
    },
    {
      id: 'gbrtq4',
      question: {
        ELEMENTARY: 'What can you do to help an old building save energy?',
        MIDDLE_SCHOOL: 'Which upgrade is usually low cost?',
        HIGH_SCHOOL: 'How do prefabricated facade panels help retrofits?',
        UNDERGRADUATE: 'What is a baseline in retrofit analysis?',
        GRADUATE: 'What does a building performance standard do?',
        PHD: 'Why couple building stock models with power system models?',
      },
      options: {
        ELEMENTARY: ['Leave the door open all day', 'Turn on every light', 'Open windows when the heater is on', 'Close curtains on cold nights and switch off lights'],
        MIDDLE_SCHOOL: ['Replacing every window', 'Building a new wing', 'Moving the building', 'Air sealing gaps and cracks'],
        HIGH_SCHOOL: ['They make the building look older', 'They remove all the windows', 'They are only used inside bathrooms', 'They are built in a factory and attached outside, shortening disruption'],
        UNDERGRADUATE: ['The lowest floor of the building', 'The cost of the cheapest measure', 'The final energy use after the retrofit', 'Energy use before the retrofit, against which savings are judged'],
        GRADUATE: ['Sets rules only for new buildings', 'Measures the height of buildings', 'Gives every owner a free retrofit', 'Requires existing buildings to meet energy or emissions targets that tighten over time'],
        PHD: ['Power systems do not affect buildings', 'To avoid modeling heat pumps', 'Because building models already include all grid effects', 'Mass heat pump adoption reshapes winter peaks, which envelope upgrades can reduce'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Curtains help keep heat in, and switching off lights saves electricity.',
        MIDDLE_SCHOOL: 'Air sealing is one of the cheapest ways to stop drafts and heat loss.',
        HIGH_SCHOOL: 'Factory-built panels speed installation and reduce disruption for the people inside.',
        UNDERGRADUATE: 'Savings can only be judged against a well-established, weather-normalized baseline.',
        GRADUATE: 'Performance standards push existing buildings toward deeper improvements over time.',
        PHD: 'Coupled models show how envelope and electrification choices affect grid peaks and investment.',
      },
    },
    {
      id: 'gbrtq5',
      question: {
        ELEMENTARY: 'What is a draft?',
        MIDDLE_SCHOOL: 'What is electrification?',
        HIGH_SCHOOL: 'What does right-sizing mean?',
        UNDERGRADUATE: 'What is measurement and verification?',
        GRADUATE: 'Why do retrofit programs need tenant protections?',
        PHD: 'What is the performance gap?',
      },
      options: {
        ELEMENTARY: ['A little stream of air sneaking in through gaps', 'A kind of drawing', 'A warm blanket', 'A new light bulb'],
        MIDDLE_SCHOOL: ['Switching fuel-burning equipment to equipment that runs on electricity', 'Adding more power lines to a city', 'Turning off all electricity', 'Painting wires a bright color'],
        HIGH_SCHOOL: ['Choosing equipment matched to the reduced load after envelope work', 'Buying the largest equipment available', 'Making rooms all the same size', 'Measuring windows before ordering curtains'],
        UNDERGRADUATE: ['Methods used to estimate savings actually achieved after installation', 'Checking the size of new equipment boxes', 'Measuring the length of pipes', 'Verifying contractor licenses only'],
        GRADUATE: ['Upgrades can raise rents or cause displacement of low-income residents', 'Tenants always pay for all retrofits', 'Retrofits never affect rents', 'Tenants are not allowed in retrofitted buildings'],
        PHD: ['The difference between predicted and measured energy use after a retrofit', 'A gap in the wall left for ventilation', 'The time between audit and construction', 'The cost difference between two contractors'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Drafts let warm air out and cold air in, so sealing them keeps buildings cozy.',
        MIDDLE_SCHOOL: 'Electrification, such as swapping a gas furnace for a heat pump, lets buildings use cleaner electricity.',
        HIGH_SCHOOL: 'After the envelope improves, the building needs smaller heating and cooling equipment.',
        UNDERGRADUATE: 'Verification confirms real savings and reveals problems like poor installation or overridden controls.',
        GRADUATE: 'Pairing retrofits with protections helps ensure residents benefit rather than being pushed out.',
        PHD: 'Modeling assumptions, workmanship and occupant behavior can all create a performance gap.',
      },
    },
  ],
}

export default expansion
