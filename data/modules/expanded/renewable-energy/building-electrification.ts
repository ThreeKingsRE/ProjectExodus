import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'renewable-energy',
  moduleKey: 'building-electrification',
  lessons: [
    {
      id: 're-elec-1',
      title: 'All-Electric Buildings',
      content: {
        ELEMENTARY: `
<h2>Homes That Run on Electricity</h2>
<p>Many homes and schools burn gas to stay warm, heat water and cook food. Burning gas makes smoke and gases that are not good for the air or the planet. But there is another way! Buildings can use electricity for all of these jobs. When a building uses only electricity, we call it an <em>all-electric</em> building.</p>

<h3>The Magic Heat Mover</h3>
<p>The star of an all-electric home is a machine called a <em>heat pump</em>. A heat pump does not make heat by burning anything. Instead, it moves heat from one place to another. Even on a chilly day, the outside air has a little bit of warmth in it. The heat pump gathers that warmth and carries it inside. In summer, it works backwards and carries heat out of the house to keep it cool. Your fridge is a kind of heat pump too: it moves heat out of the food and into your kitchen!</p>
<ul>
<li><strong>Heat pump:</strong> a machine that moves heat into a building in winter and out in summer</li>
<li><strong>Electricity:</strong> a kind of energy that travels through wires to power lights and machines</li>
<li><strong>Furnace:</strong> an older heater that burns gas or oil to make a building warm</li>
</ul>

<h3>Cooking Without Flames</h3>
<p>An <em>induction</em> stove cooks food using electricity and magnets. The pan gets hot, but there is no flame. It is fast, and it keeps the kitchen air cleaner because nothing is burning.</p>
<ul>
<li><strong>Induction stove:</strong> a stove that uses magnets and electricity to heat the pan directly</li>
<li><strong>Clean air:</strong> air without smoke or harmful gases, which is better for our lungs</li>
</ul>

<h3>Why It Helps the Planet</h3>
<p>When the electricity comes from the sun, the wind or rushing water, an all-electric building can keep people warm and fed without adding pollution. And because a heat pump moves heat instead of making it, it uses much less energy than you might think.</p>

<h3>Things You Can Do</h3>
<ol>
<li>Close doors and windows when the heat or air conditioning is on.</li>
<li>Wear a cozy sweater on cold days instead of turning the heat way up.</li>
<li>Ask your family if your home uses gas or electricity for heating and cooking.</li>
</ol>

<h3>Think About It</h3>
<p>Next time you feel the warm air on the back of a fridge, remember: that is heat being moved. The same idea can keep a whole house warm!</p>
`,
        MIDDLE_SCHOOL: `
<h2>Replacing Fossil Fuels in Buildings</h2>
<p>Buildings use a lot of energy for space heating, water heating and cooking. In many places, much of that energy comes from burning natural gas, oil or propane right inside the building. <em>Building electrification</em> means switching those jobs to efficient electric machines. As the electric grid gets cleaner, electrified buildings get cleaner too.</p>

<h3>How a Heat Pump Works</h3>
<p>A heat pump uses a special fluid called a <em>refrigerant</em> that boils at very low temperatures. Here is the cycle:</p>
<ol>
<li>Outside, the cold refrigerant soaks up heat from the air or ground and turns into a gas.</li>
<li>A compressor squeezes the gas, which makes it much hotter.</li>
<li>Inside, the hot gas gives its heat to the room and turns back into a liquid.</li>
<li>The liquid passes through a valve that lowers its pressure and makes it cold again, and the cycle repeats.</li>
</ol>
<p>Because a heat pump moves heat rather than creating it, it can deliver two to four times more heat energy than the electricity it uses. A gas furnace can never deliver more heat than the fuel it burns.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Electrification:</strong> switching a machine or system from burning fuel to using electricity</li>
<li><strong>Refrigerant:</strong> a fluid inside a heat pump that carries heat as it changes between liquid and gas</li>
<li><strong>Compressor:</strong> the part of a heat pump that squeezes refrigerant gas to raise its temperature</li>
<li><strong>Induction cooking:</strong> heating a pan directly with a changing magnetic field instead of a flame</li>
<li><strong>Heat pump water heater:</strong> a water tank that uses a small heat pump to warm the water</li>
<li><strong>Insulation:</strong> material in walls and roofs that slows heat from escaping</li>
</ul>

<h3>Gas Appliances and Their Electric Partners</h3>
<table>
<thead><tr><th>Job</th><th>Fossil fuel appliance</th><th>Electric replacement</th></tr></thead>
<tbody>
<tr><td>Space heating</td><td>Gas furnace or oil boiler</td><td>Air-source or ground-source heat pump</td></tr>
<tr><td>Water heating</td><td>Gas water heater</td><td>Heat pump water heater</td></tr>
<tr><td>Cooking</td><td>Gas stove</td><td>Induction cooktop</td></tr>
<tr><td>Clothes drying</td><td>Gas dryer</td><td>Heat pump or electric dryer</td></tr>
</tbody>
</table>

<h3>Why It Matters</h3>
<p>Electrification cuts carbon emissions, especially as more electricity comes from wind and solar. It also improves indoor air, since gas stoves release pollutants such as nitrogen dioxide into the kitchen. The biggest challenge is cost: new equipment can be expensive to buy, and some older homes need electrical upgrades. Sealing air leaks and adding insulation first makes the switch easier and cheaper.</p>
`,
        HIGH_SCHOOL: `
<h2>Building Electrification: Technology, Economics and Impact</h2>
<p>Burning fossil fuels in buildings for heat, hot water and cooking is a major source of greenhouse gas emissions in many countries. Unlike power plants, these emissions come from millions of individual furnaces, boilers and stoves. Electrifying buildings turns a scattered problem into one that can be solved by cleaning up the electric grid.</p>

<h3>Efficiency: Moving Heat Beats Making Heat</h3>
<p>A gas furnace converts fuel to heat, and even the best models deliver slightly less heat than the fuel's energy content. An electric resistance heater converts electricity to heat one-to-one. A heat pump does better than both because it moves existing heat. Engineers measure this with the <em>coefficient of performance</em>, the ratio of heat delivered to electricity used.</p>
<table>
<thead><tr><th>Technology</th><th>Heat delivered per unit of energy input</th><th>On-site combustion</th></tr></thead>
<tbody>
<tr><td>Gas furnace</td><td>A bit less than one</td><td>Yes</td></tr>
<tr><td>Electric resistance heater</td><td>About one</td><td>No</td></tr>
<tr><td>Air-source heat pump</td><td>Typically two to four, lower in very cold weather</td><td>No</td></tr>
<tr><td>Ground-source heat pump</td><td>Often higher and steadier, since ground temperature is stable</td><td>No</td></tr>
</tbody>
</table>

<h3>Key Terms</h3>
<ul>
<li><strong>Coefficient of performance:</strong> heat delivered by a heat pump divided by the electricity it consumes</li>
<li><strong>Air-source heat pump:</strong> a heat pump that exchanges heat with outdoor air</li>
<li><strong>Ground-source heat pump:</strong> a heat pump that exchanges heat with the ground through buried pipes</li>
<li><strong>Cold-climate heat pump:</strong> a heat pump designed to keep working efficiently at well below freezing</li>
<li><strong>Decarbonization:</strong> reducing the carbon dioxide emissions produced by an activity</li>
<li><strong>Electrical panel:</strong> the box that distributes electricity to a building's circuits and limits total load</li>
</ul>

<h3>Economics</h3>
<p>The upfront price of heat pumps and heat pump water heaters is often higher than gas equivalents, though installing a heat pump can replace both a furnace and an air conditioner. Operating costs depend on local electricity and gas prices: where electricity is cheap relative to gas, savings come quickly; where it is expensive, savings may be small. New buildings are usually cheapest to electrify because they avoid gas pipes entirely. Retrofits may need panel upgrades or new wiring.</p>

<h3>Climate and Health Benefits</h3>
<ul>
<li>Emissions fall as the grid adds renewable electricity, so an electric building gets cleaner over time.</li>
<li>Removing gas stoves reduces indoor pollutants linked to breathing problems such as asthma.</li>
<li>No on-site combustion means no carbon monoxide risk from heating equipment.</li>
</ul>

<h3>Challenges and Solutions</h3>
<ol>
<li><strong>Cold weather:</strong> modern cold-climate heat pumps keep working at low temperatures, though efficiency drops.</li>
<li><strong>Grid demand:</strong> many electric heaters running on cold mornings raise peak demand, which efficiency and smart controls can soften.</li>
<li><strong>Skilled workers:</strong> installers need training in sizing and installing heat pumps correctly.</li>
<li><strong>Cost:</strong> rebates, financing and bulk purchasing programs help households afford the switch.</li>
</ol>
`,
        UNDERGRADUATE: `
<h2>Heat Pumps, Retrofit Strategies and Grid Impacts</h2>
<p>Electrifying buildings is a systems problem. Equipment performance depends on climate and building envelope; household economics depend on tariffs; and aggregate adoption reshapes electricity demand. This lesson builds the tools to analyze each layer and connect them.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Seasonal performance factor:</strong> the average efficiency of a heat pump over a full heating season rather than at one test condition</li>
<li><strong>Balance point:</strong> the outdoor temperature at which a heat pump's output just matches a building's heat loss</li>
<li><strong>Design load:</strong> the heat a building needs on a cold design day, used to size equipment</li>
<li><strong>Building envelope:</strong> the walls, roof, windows and foundation that separate conditioned space from outdoors</li>
<li><strong>Coincident peak:</strong> the highest total demand when many loads operate simultaneously, such as heating on a cold morning</li>
<li><strong>Load factor:</strong> average demand divided by peak demand, a measure of how evenly a system is used</li>
</ul>

<h3>Thermodynamics in Brief</h3>
<p>A heat pump's ideal efficiency depends on the temperature difference it must lift heat across. The smaller the lift, the higher the coefficient of performance. That explains three practical results: heat pumps lose efficiency as outdoor temperatures fall; ground-source systems perform steadily because ground temperatures vary little; and low-temperature distribution, such as larger radiators or underfloor heating, raises efficiency compared with very hot water systems. Variable-speed compressors improve seasonal performance by matching output to load instead of cycling on and off.</p>

<h3>Retrofit Pathways Compared</h3>
<table>
<thead><tr><th>Strategy</th><th>Advantages</th><th>Drawbacks</th></tr></thead>
<tbody>
<tr><td>Envelope first, then heat pump</td><td>Smaller, cheaper equipment and lower peak load</td><td>Higher total upfront project cost and disruption</td></tr>
<tr><td>Heat pump at furnace replacement</td><td>Uses natural replacement timing</td><td>Equipment may be oversized for a future improved envelope</td></tr>
<tr><td>Hybrid system with gas backup</td><td>Covers coldest hours without large grid impact</td><td>Keeps gas connection and its fixed costs</td></tr>
<tr><td>Whole-home all-electric retrofit</td><td>Eliminates gas service and on-site combustion</td><td>May require panel and wiring upgrades</td></tr>
</tbody>
</table>

<h3>Grid Impacts</h3>
<p>In regions that currently peak in summer, heating electrification can shift the system peak to winter. Because heat pump efficiency falls in the coldest weather, demand rises steeply just when it matters most. Distribution transformers on residential streets may need upgrades as many homes electrify. Mitigation options include envelope improvements, high-efficiency cold-climate equipment, thermal storage in water heaters and building mass, and smart thermostats that pre-heat before peak hours.</p>

<h3>Quantitative Reasoning</h3>
<p>To estimate operating cost change, compare the annual heat requirement divided by furnace efficiency times the gas price against the same heat divided by the seasonal performance factor times the electricity price. Emissions comparisons follow the same structure using emission factors. Because grid emission factors vary by hour and season, winter marginal emissions may differ substantially from annual averages.</p>

<h3>Applied Checklist</h3>
<ol>
<li>Estimate the building's design load and identify cost-effective envelope improvements.</li>
<li>Select equipment rated for the local climate and size it to the improved load.</li>
<li>Check electrical panel capacity and consider load-management devices before upgrading.</li>
<li>Compare operating costs under current and expected tariffs.</li>
<li>Plan controls that shift heating and water heating away from peak hours.</li>
</ol>
`,
        GRADUATE: `
<h2>Electrification Policy, Gas Utility Transition and Equity</h2>
<p>As buildings electrify, the gas distribution system faces a structural problem: its costs are largely fixed, but its customer base may shrink. How policymakers manage that transition will determine whether electrification is fair, affordable and fast. This lesson examines policy instruments, gas system economics and equity safeguards.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Stranded asset:</strong> infrastructure that loses economic value before the end of its expected life because of policy or market change</li>
<li><strong>Accelerated depreciation:</strong> recovering an asset's cost over a shorter period to reduce the risk of stranding</li>
<li><strong>Rate base:</strong> the value of utility investments on which a regulated utility is allowed to earn a return</li>
<li><strong>Targeted electrification:</strong> converting entire neighborhoods together so that gas mains can be retired rather than maintained</li>
<li><strong>Building performance standard:</strong> a regulation that sets emissions or energy limits for existing buildings over time</li>
<li><strong>Energy burden:</strong> the share of household income spent on energy bills</li>
</ul>

<h3>Policy Instruments</h3>
<table>
<thead><tr><th>Instrument</th><th>Mechanism</th><th>Key design question</th></tr></thead>
<tbody>
<tr><td>All-electric codes for new construction</td><td>Avoids new gas connections</td><td>Legal authority and exemptions</td></tr>
<tr><td>Appliance emissions standards</td><td>Phases out sales of combustion equipment</td><td>Timeline aligned with replacement cycles</td></tr>
<tr><td>Rebates and tax credits</td><td>Lowers upfront cost</td><td>Reaching renters and low-income households</td></tr>
<tr><td>Building performance standards</td><td>Requires existing buildings to cut emissions</td><td>Compliance flexibility and enforcement</td></tr>
<tr><td>Tariff reform</td><td>Aligns electricity prices with marginal cost</td><td>Avoiding bill shock for vulnerable customers</td></tr>
</tbody>
</table>

<h3>The Gas Utility Death Spiral</h3>
<p>Gas networks recover pipe, maintenance and safety costs through customer rates. If wealthier households electrify first, remaining customers, often lower-income renters, shoulder a growing share of fixed costs. Rising rates encourage further departures, which can accelerate the cycle. Regulatory responses include stopping automatic pipe replacement where electrification is cheaper, accelerated depreciation, securitization of remaining costs, and planned neighborhood-scale transitions that allow whole segments of the network to be decommissioned.</p>

<h3>Equity Considerations</h3>
<p>Low-income households often live in older, leakier buildings and face higher energy burdens. Renters face a split incentive: landlords pay for equipment while tenants pay bills. Without targeted programs, electrification can widen gaps. Effective approaches include direct installation programs, landlord incentives tied to tenant protections, on-bill financing, workforce programs in affected communities, and safeguards against displacement after upgrades raise property values.</p>

<h3>Institutional Barriers</h3>
<p>Electric and gas utilities are often regulated separately, and few jurisdictions plan their networks jointly. Utility business models reward capital investment, which can favor continued pipe replacement. Installer workforces are fragmented, and permitting processes can slow adoption. Integrated planning that coordinates gas retirement, electric distribution upgrades and customer programs addresses several barriers at once.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Map current gas and electric network investments and their remaining lifetimes.</li>
<li>Model customer adoption under different policy mixes and price scenarios.</li>
<li>Estimate distributional impacts on energy burden across income groups and tenure types.</li>
<li>Identify candidate areas for targeted electrification and gas retirement.</li>
<li>Design cost recovery that avoids concentrating legacy costs on remaining customers.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: Electrification Pathways, Load Flexibility and System Optimization</h2>
<p>Building electrification links millions of heterogeneous buildings to a power system that is itself transforming. Research questions span engineering, economics and behavior: how fast adoption will occur, how much flexibility electrified buildings can provide, and how to co-optimize building investments with grid expansion. This lesson surveys methods, contested questions and open directions.</p>

<h3>Modeling Methods</h3>
<ul>
<li><strong>Building stock models:</strong> simulations of representative buildings scaled to a region to estimate aggregate energy use and retrofit potential</li>
<li><strong>Physics-based thermal models:</strong> detailed simulations of heat transfer through envelopes, used to evaluate retrofits and controls</li>
<li><strong>Reduced-order models:</strong> simplified resistance-capacitance representations of building thermal behavior that are tractable for control and optimization</li>
<li><strong>Model predictive control:</strong> a control strategy that optimizes future operation using forecasts of weather, prices and occupancy</li>
<li><strong>Capacity expansion models:</strong> optimization models that choose generation, storage and network investments over decades</li>
<li><strong>Technology diffusion models:</strong> models that describe how adoption spreads through populations over time</li>
</ul>

<h3>Load Flexibility</h3>
<p>Electrified buildings can shift demand using thermal mass, hot water tanks and dedicated thermal storage. Pre-heating before a peak can reduce demand during it, though at some efficiency cost and with limits set by occupant comfort. The aggregate flexibility of a building fleet depends on envelope quality, control technology, occupant acceptance and how many devices are enrolled. Characterizing that flexibility, including the rebound peak that can follow coordinated load shifting, is an active research area.</p>

<h3>Contested Questions</h3>
<table>
<thead><tr><th>Question</th><th>Why it is contested</th></tr></thead>
<tbody>
<tr><td>Role of hybrid heat pumps versus full electrification</td><td>Trade-off between winter peak reduction and retaining gas network costs</td></tr>
<tr><td>Role of low-carbon gases in buildings</td><td>Competing claims for limited biomethane and hydrogen supply versus higher-value uses</td></tr>
<tr><td>Envelope-first versus equipment-first sequencing</td><td>Depends on discount rates, replacement timing and grid peak costs</td></tr>
<tr><td>Marginal versus average emission factors</td><td>Choice changes estimated emission benefits, especially for winter loads</td></tr>
<tr><td>Reliability of behavioral flexibility</td><td>Field evidence on persistence and participation remains limited</td></tr>
</tbody>
</table>

<h3>System Co-Optimization</h3>
<p>Traditional planning treats building demand as an input to grid models. Co-optimization instead lets models choose envelope retrofits, equipment and grid investments together, revealing when it is cheaper to insulate than to build peaking capacity. Doing so requires fine temporal resolution to capture cold snaps, spatial detail to capture distribution constraints, and representation of building heterogeneity. Weather-year selection matters: rare multi-day cold events can drive capacity needs that typical years obscure.</p>

<h3>Methodological Debates</h3>
<p>Researchers debate how to represent consumer decisions: optimization assumes cost-minimizing households, while empirical studies show strong roles for upfront cost, installer recommendations, information and social influence. Calibrating stock models against measured data reveals performance gaps between modeled and actual savings. Climate change also shifts heating and cooling demand, so historical weather may poorly represent future loads.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Co-optimization of building retrofits, electrification and grid investment under extreme weather scenarios.</li>
<li>Empirical measurement of fleet-scale load flexibility and occupant acceptance.</li>
<li>Planning methods for coordinated gas network decommissioning.</li>
<li>Integration of equity metrics into electrification optimization models.</li>
<li>Low-global-warming-potential refrigerants and their effect on heat pump performance and life-cycle emissions.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'relecq1',
      question: {
        ELEMENTARY: 'What can replace gas for heating a building?',
        MIDDLE_SCHOOL: 'How does a heat pump warm a home?',
        HIGH_SCHOOL: 'Why does electrification improve indoor air quality?',
        UNDERGRADUATE: 'What is a heat pump\'s balance point?',
        GRADUATE: 'What is a stranded asset?',
        PHD: 'What is model predictive control in electrified buildings?',
      },
      options: {
        ELEMENTARY: ['A heat pump that runs on electricity', 'More gas', 'A coal fire', 'An oil lamp'],
        MIDDLE_SCHOOL: ['It moves heat from outside to inside instead of making it', 'It burns natural gas', 'It makes cold air disappear', 'It uses sunlight through the window'],
        HIGH_SCHOOL: ['No combustion means no pollutants like nitrogen dioxide from burning gas indoors', 'Electric appliances make more smoke', 'Air quality stays exactly the same', 'Electricity adds oxygen to the air'],
        UNDERGRADUATE: ['The outdoor temperature where heat pump output just matches building heat loss', 'The point where the electrical panel is full', 'The cost at which gas equals electricity', 'The time of day with highest demand'],
        GRADUATE: ['Infrastructure that loses value before the end of its expected life', 'An asset that floats on water', 'A building with no tenants', 'A power plant under construction'],
        PHD: ['A strategy that optimizes future operation using forecasts of weather, prices and occupancy', 'A rule that turns heating on at a fixed time', 'A model of utility rate cases', 'A manual thermostat setting'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'A heat pump uses electricity to move warmth into the house, so no gas is needed.',
        MIDDLE_SCHOOL: 'Refrigerant absorbs heat outside and releases it inside, moving heat rather than creating it.',
        HIGH_SCHOOL: 'Gas stoves release pollutants indoors; electric appliances burn nothing.',
        UNDERGRADUATE: 'Below the balance point, the heat pump alone cannot meet the full heating load.',
        GRADUATE: 'Gas pipes may become stranded if customers electrify before the pipes are paid off.',
        PHD: 'Model predictive control uses forecasts to plan operation, for example pre-heating before price peaks.',
      },
    },
    {
      id: 'relecq2',
      question: {
        ELEMENTARY: 'What kind of stove cooks with magnets instead of flames?',
        MIDDLE_SCHOOL: 'What does a heat pump\'s compressor do?',
        HIGH_SCHOOL: 'What does the coefficient of performance measure?',
        UNDERGRADUATE: 'Why does heating electrification often raise winter peak demand steeply?',
        GRADUATE: 'What is targeted electrification?',
        PHD: 'What problem can follow coordinated load shifting in a building fleet?',
      },
      options: {
        ELEMENTARY: ['A campfire', 'An induction stove', 'A wood oven', 'A candle'],
        MIDDLE_SCHOOL: ['It cools the refrigerant to freezing', 'It squeezes refrigerant gas, making it much hotter', 'It cleans the air filters', 'It burns fuel for extra heat'],
        HIGH_SCHOOL: ['The price of a heat pump', 'Heat delivered divided by electricity used', 'How loud a heat pump is', 'The size of the outdoor unit'],
        UNDERGRADUATE: ['Heat pumps work best in the coldest weather', 'Heat pump efficiency falls just as heating demand rises on cold mornings', 'Winter has fewer hours', 'Lights are turned off in winter'],
        GRADUATE: ['Rebates for single appliances anywhere', 'Converting whole neighborhoods together so gas mains can be retired', 'Electrifying only commercial buildings', 'Adding gas backup to every heat pump'],
        PHD: ['Demand disappears forever', 'A rebound peak when many devices resume at once', 'Heat pumps stop working permanently', 'Electricity prices always fall to zero'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'An induction stove uses magnets and electricity to heat the pan directly with no flame.',
        MIDDLE_SCHOOL: 'Compressing the refrigerant gas raises its temperature so it can release heat indoors.',
        HIGH_SCHOOL: 'A coefficient of performance of three means three units of heat for each unit of electricity.',
        UNDERGRADUATE: 'Cold weather both increases heat demand and lowers efficiency, compounding the peak.',
        GRADUATE: 'Coordinated conversion lets utilities retire whole pipe segments rather than maintaining them for few customers.',
        PHD: 'If many devices delay heating and then restart together, a new peak can form after the event.',
      },
    },
    {
      id: 'relecq3',
      question: {
        ELEMENTARY: 'What helps keep warm air inside your home?',
        MIDDLE_SCHOOL: 'How much heat can a heat pump deliver compared with the electricity it uses?',
        HIGH_SCHOOL: 'Why do ground-source heat pumps often perform more steadily than air-source ones?',
        UNDERGRADUATE: 'Why does an envelope-first retrofit reduce equipment cost?',
        GRADUATE: 'What drives the gas utility "death spiral"?',
        PHD: 'Why does weather-year selection matter in electrification planning models?',
      },
      options: {
        ELEMENTARY: ['Leaving the door wide open', 'Opening all the windows', 'Closing doors and windows', 'Turning on a fan'],
        MIDDLE_SCHOOL: ['Exactly the same amount', 'Less than half', 'About two to four times more', 'Ten thousand times more'],
        HIGH_SCHOOL: ['They burn gas underground', 'Ground temperature is cold and unstable', 'Ground temperature stays fairly stable year-round', 'They do not use electricity'],
        UNDERGRADUATE: ['Insulation makes heat pumps run backwards', 'Envelope work removes the need for wiring', 'A lower heat load allows smaller, cheaper equipment', 'Envelope work raises the design load'],
        GRADUATE: ['Gas prices falling to zero', 'New customers joining the gas network', 'Fixed network costs spread over fewer remaining customers, raising rates', 'Electric rates rising faster than gas'],
        PHD: ['Weather has no effect on heating', 'Every year is identical', 'Rare multi-day cold events can drive capacity needs that typical years hide', 'Models only use summer data'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Closing doors and windows keeps the warm air in so the heater does less work.',
        MIDDLE_SCHOOL: 'Because it moves heat, a heat pump typically delivers two to four units of heat per unit of electricity.',
        HIGH_SCHOOL: 'The ground stays at a fairly constant temperature, so the heat pump has an easier, steadier job.',
        UNDERGRADUATE: 'Reducing heat loss first shrinks the design load, so smaller equipment suffices.',
        GRADUATE: 'As customers leave, fixed costs fall on fewer people, raising rates and encouraging more departures.',
        PHD: 'Extreme cold snaps set peak needs, so typical weather years can understate required capacity.',
      },
    },
    {
      id: 'relecq4',
      question: {
        ELEMENTARY: 'What household machine is a kind of heat pump?',
        MIDDLE_SCHOOL: 'What is a refrigerant?',
        HIGH_SCHOOL: 'Why are new buildings usually the cheapest to electrify?',
        UNDERGRADUATE: 'Why do low-temperature distribution systems raise heat pump efficiency?',
        GRADUATE: 'What is the split incentive problem for renters?',
        PHD: 'Why do researchers debate marginal versus average emission factors for heating loads?',
      },
      options: {
        ELEMENTARY: ['A bicycle', 'A toaster', 'A flashlight', 'A refrigerator'],
        MIDDLE_SCHOOL: ['A type of insulation', 'A gas burner', 'A kind of electrical wire', 'A fluid that carries heat as it changes between liquid and gas'],
        HIGH_SCHOOL: ['They have no windows', 'They need no heating', 'They are always smaller', 'They can avoid gas pipes entirely from the start'],
        UNDERGRADUATE: ['They use no electricity', 'They require hotter water', 'They make the compressor larger', 'A smaller temperature lift means a higher coefficient of performance'],
        GRADUATE: ['Tenants own the building', 'Gas is cheaper than electricity', 'Renters cannot use heat pumps', 'Landlords pay for equipment while tenants pay the energy bills'],
        PHD: ['They are always identical', 'Average factors include no power plants', 'Marginal factors are illegal to use', 'The choice changes estimated emission benefits, especially in winter'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'A refrigerator moves heat out of the food and into the kitchen, just like a heat pump.',
        MIDDLE_SCHOOL: 'Refrigerant absorbs heat when it evaporates and releases heat when it condenses.',
        HIGH_SCHOOL: 'Building all-electric from the start avoids the cost of gas connections and later retrofits.',
        UNDERGRADUATE: 'Heat pumps are most efficient when the temperature difference they lift heat across is small.',
        GRADUATE: 'Because the landlord does not pay the bills, there is little reason to invest in efficient equipment.',
        PHD: 'The generators that respond to added winter load may be dirtier or cleaner than the annual average.',
      },
    },
    {
      id: 'relecq5',
      question: {
        ELEMENTARY: 'When is an all-electric home the cleanest?',
        MIDDLE_SCHOOL: 'What should usually be done before installing a heat pump in an older home?',
        HIGH_SCHOOL: 'Why does an electrified building get cleaner over time?',
        UNDERGRADUATE: 'What is a seasonal performance factor?',
        GRADUATE: 'What is a building performance standard?',
        PHD: 'What are reduced-order building models used for?',
      },
      options: {
        ELEMENTARY: ['When its electricity comes from sun, wind or water', 'When it burns lots of coal', 'When all the lights stay on', 'When the windows are open in winter'],
        MIDDLE_SCHOOL: ['Seal air leaks and add insulation', 'Remove all the windows', 'Install a bigger gas furnace', 'Paint the walls a darker color'],
        HIGH_SCHOOL: ['The grid adds more renewable electricity', 'Heat pumps grow stronger with age', 'Gas prices go up', 'Buildings shrink over time'],
        UNDERGRADUATE: ['Average heat pump efficiency over a full heating season', 'The maximum output at one test point', 'The cost of electricity in winter', 'The number of days a heat pump runs'],
        GRADUATE: ['A regulation setting emissions or energy limits for existing buildings over time', 'A rule about building height', 'A fire safety code', 'A tax credit for new roofs'],
        PHD: ['Tractable thermal representations for control and optimization', 'Designing building facades', 'Pricing gas utility assets', 'Measuring refrigerant leaks'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'An all-electric home powered by clean energy keeps people warm without pollution.',
        MIDDLE_SCHOOL: 'Sealing leaks and insulating first makes the switch easier and lets a smaller heat pump do the job.',
        HIGH_SCHOOL: 'As wind and solar replace fossil power, the electricity used by the building gets cleaner.',
        UNDERGRADUATE: 'Seasonal performance captures real conditions across a whole season, not one test point.',
        GRADUATE: 'Building performance standards require existing buildings to reduce emissions or energy use on a schedule.',
        PHD: 'Simplified resistance-capacitance models are fast enough for predictive control and fleet optimization.',
      },
    },
  ],
}

export default expansion
