import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'renewable-energy',
  moduleKey: 'solar-plus-storage',
  lessons: [
    {
      id: 're-ss-1',
      title: 'Saving Sunshine for Later',
      content: {
        ELEMENTARY: `
<h2>Saving Sunshine for Nighttime</h2>
<p>The sun gives us lots of energy during the day. Solar panels catch that sunshine and turn it into electricity. But what happens when the sun goes down? Nobody wants their lights to switch off at bedtime! The answer is a battery that saves some of the sunshine for later.</p>

<h3>Solar Panels Catch the Sun</h3>
<p>Solar panels are flat, shiny boards. You may have seen them on roofs, on top of buildings or in big fields. When sunlight hits them, they make electricity. On a bright, sunny day they can make more electricity than a house needs right away.</p>
<ul>
<li><strong>Solar panel:</strong> a flat board that turns sunlight into electricity</li>
<li><strong>Electricity:</strong> the energy that runs lights, fridges, computers and toys</li>
<li><strong>Sunshine:</strong> light and warmth that comes to Earth from the sun</li>
</ul>

<h3>Batteries Save the Extra</h3>
<p>A battery is like a lunch box for energy. In the morning you pack your lunch, and you eat it later in the day. A home battery fills up with extra solar electricity at lunchtime. In the evening, when the sun sets, the battery gives the electricity back so the lights stay on.</p>
<ul>
<li><strong>Battery:</strong> a box that stores electricity so it can be used later</li>
<li><strong>Charging:</strong> filling a battery up with energy, like filling a cup with water</li>
<li><strong>Discharging:</strong> letting the energy back out of a battery to power things</li>
</ul>

<h3>A Day with Solar and a Battery</h3>
<ol>
<li>Morning: the sun rises and the panels start making electricity.</li>
<li>Midday: the sun is high, so there is extra energy. The battery fills up.</li>
<li>Evening: the sun sets. The battery starts giving back its saved energy.</li>
<li>Night: the battery keeps the fridge cold and the night light glowing.</li>
</ol>

<h3>Why This Is Great for Our Planet</h3>
<p>When we save sunshine in a battery, we do not need to burn as much coal or gas at night. That means cleaner air and less pollution that warms the Earth. A battery can also keep some lights on if the power goes out in a storm.</p>

<h3>Things You Can Do</h3>
<ol>
<li>Look for solar panels on roofs when you walk or ride in the car. Count how many you see!</li>
<li>Use toys with rechargeable batteries instead of throwing batteries away.</li>
<li>Try a small solar garden light. Watch it charge in the day and glow at night.</li>
</ol>
<p>Saving sunshine is like keeping a little piece of the day for the night. Pretty clever, right?</p>
`,
        MIDDLE_SCHOOL: `
<h2>How Batteries Store Solar Energy</h2>
<p>Solar panels are one of the cleanest ways to make electricity, but they have one big limitation: they only work when the sun is shining. People use the most electricity at home in the early evening, just as the sun is setting. Pairing solar panels with batteries solves this timing problem. This combination is called <em>solar plus storage</em>.</p>

<h3>The Timing Problem</h3>
<p>Imagine a graph of a sunny day. Solar output starts at zero at dawn, rises to a peak around midday and falls back to zero at sunset. Now imagine a graph of how much electricity a family uses. It is often low at midday when people are at school or work, and high in the evening when everyone is home cooking, washing and watching TV. The two curves do not line up. A battery moves energy from the time it is made to the time it is needed.</p>

<h3>How a Solar Battery Works</h3>
<ol>
<li><strong>Sunlight hits the panels,</strong> which produce direct current (DC) electricity.</li>
<li><strong>An inverter</strong> changes DC into alternating current (AC), the kind used by home outlets.</li>
<li><strong>Extra energy charges the battery.</strong> Inside, chemical reactions store the energy, most often in a lithium-ion battery.</li>
<li><strong>In the evening the battery discharges,</strong> sending power back through the inverter to the home.</li>
<li><strong>If the battery is full,</strong> any remaining solar power can flow to the grid for neighbors to use.</li>
</ol>

<h3>Key Words</h3>
<ul>
<li><strong>Solar plus storage:</strong> a solar power system paired with batteries that save energy for later</li>
<li><strong>Inverter:</strong> a device that converts direct current from panels and batteries into alternating current</li>
<li><strong>Lithium-ion battery:</strong> the rechargeable battery type used in phones, electric cars and most home storage</li>
<li><strong>Kilowatt-hour:</strong> a unit of energy, roughly the energy used by a hair dryer running for an hour or so</li>
<li><strong>Backup power:</strong> electricity from a battery that keeps important devices running during a blackout</li>
<li><strong>Grid:</strong> the network of power plants, wires and poles that delivers electricity across a region</li>
</ul>

<h3>Solar Alone vs. Solar Plus Storage</h3>
<table>
<thead><tr><th>Question</th><th>Solar alone</th><th>Solar plus storage</th></tr></thead>
<tbody>
<tr><td>Power at night?</td><td>No, uses the grid</td><td>Yes, from the battery</td></tr>
<tr><td>Power in a blackout?</td><td>Usually no, for safety</td><td>Yes, for chosen devices</td></tr>
<tr><td>Cost to install</td><td>Lower</td><td>Higher, because batteries cost extra</td></tr>
<tr><td>Uses more of its own solar</td><td>Less</td><td>More</td></tr>
</tbody>
</table>

<h3>Bigger Than a House</h3>
<p>Solar plus storage is not just for homes. Power companies build huge solar farms with rows of battery containers next to them. These big systems soak up solar power in the afternoon and release it during the evening peak, which means fewer gas plants need to switch on. Schools, hospitals and fire stations also use solar plus storage so they can keep working during storms.</p>

<h3>Why It Matters</h3>
<p>As more of our electricity comes from the sun, storage becomes the key that unlocks it after dark. Batteries are getting cheaper and better, which is why solar plus storage is one of the fastest-growing clean energy technologies in the world.</p>
`,
        HIGH_SCHOOL: `
<h2>Designing Solar-Plus-Storage Systems</h2>
<p>Pairing photovoltaic (PV) panels with batteries turns solar from a daytime-only resource into one that can deliver power when it is most valuable. Designing these systems means making choices about how components connect, how large each part should be and whether the investment pays off. This lesson covers the core design decisions, the economics and the real-world applications of solar plus storage.</p>

<h3>Power vs. Energy</h3>
<p>Every battery has two important ratings, and confusing them is a common mistake:</p>
<ul>
<li><strong>Power rating:</strong> how fast a battery can deliver electricity, measured in kilowatts or megawatts</li>
<li><strong>Energy capacity:</strong> how much electricity a battery can store in total, measured in kilowatt-hours or megawatt-hours</li>
<li><strong>Duration:</strong> energy capacity divided by power rating, telling how many hours the battery can run at full power</li>
<li><strong>Round-trip efficiency:</strong> the share of energy put into a battery that comes back out, typically high for lithium-ion</li>
<li><strong>Depth of discharge:</strong> how much of a battery's capacity is used in a cycle; deeper cycles usually wear it faster</li>
<li><strong>State of charge:</strong> how full the battery is at a given moment, expressed as a percentage</li>
</ul>
<p>A battery rated at 5 kilowatts and 10 kilowatt-hours can run at full output for about two hours. Many grid-scale batteries paired with solar have durations of roughly two to four hours, enough to cover the evening peak.</p>

<h3>AC Coupling vs. DC Coupling</h3>
<p>Solar panels and batteries both work with direct current, but homes and the grid use alternating current. How the two are connected affects efficiency and cost.</p>
<table>
<thead><tr><th>Design</th><th>How it connects</th><th>Strengths</th><th>Weaknesses</th></tr></thead>
<tbody>
<tr><td>AC coupling</td><td>Panels and battery each have their own inverter and meet on the AC side</td><td>Easy to add a battery to an existing solar system</td><td>Solar energy is converted DC to AC to DC to AC, losing a little at each step</td></tr>
<tr><td>DC coupling</td><td>Panels feed the battery directly on the DC side, sharing one inverter</td><td>Fewer conversions, can capture solar that would otherwise be clipped</td><td>Harder to retrofit, components must be compatible</td></tr>
</tbody>
</table>
<p><em>Clipping</em> happens when panels produce more DC power than the inverter can convert. In a DC-coupled system, that extra energy can go into the battery instead of being wasted.</p>

<h3>Sizing a System</h3>
<p>Designers start with goals. A household wanting backup power during outages sizes the battery to run critical loads like a fridge, lights and medical devices for a set number of hours. A household trying to cut bills sizes it to shift extra midday solar into the evening. A utility-scale project sizes storage to meet the hours of peak demand. Oversizing wastes money; undersizing leaves value on the table.</p>

<h3>Economics</h3>
<p>Batteries add significant upfront cost, so the question is what value they create. Common sources of value include avoiding expensive evening electricity under time-of-use rates, reducing demand charges for businesses, keeping power on during outages and, for large systems, selling energy and grid services. In places where utilities pay little for exported solar, storing that energy for self-use becomes more attractive. Battery prices have fallen dramatically over the past decade, which has made many projects viable that were not before.</p>

<h3>Trade-offs and Solutions</h3>
<ol>
<li><strong>Battery wear:</strong> every cycle ages a battery a little; smart controls avoid unnecessary deep cycles.</li>
<li><strong>Materials:</strong> lithium, cobalt and nickel mining raises environmental and human rights concerns; chemistries such as lithium iron phosphate avoid cobalt and nickel.</li>
<li><strong>Safety:</strong> batteries need proper installation, ventilation and fire protection.</li>
<li><strong>End of life:</strong> recycling and second-life uses help recover valuable materials.</li>
</ol>
<p>Solar plus storage now competes directly with gas peaker plants in many markets, which is why it has become a central part of clean energy plans.</p>
`,
        UNDERGRADUATE: `
<h2>Optimizing Hybrid Solar-Storage Systems</h2>
<p>At the undergraduate level, solar plus storage becomes an optimization problem. Given a PV array, a battery with physical limits and a set of price signals or service obligations, what is the best way to operate the system, and how should it be sized in the first place? This lesson frames those questions, introduces dispatch strategies and explains how value stacking determines project economics.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Dispatch strategy:</strong> the rules or optimization that decide when a battery charges, discharges or holds its energy</li>
<li><strong>Value stacking:</strong> combining several revenue or savings streams from one storage asset to improve its economics</li>
<li><strong>Energy arbitrage:</strong> buying or storing energy when prices are low and selling or using it when prices are high</li>
<li><strong>Inverter loading ratio:</strong> the ratio of PV array DC capacity to inverter AC capacity, often set above one</li>
<li><strong>Capacity credit:</strong> the share of a resource's nameplate rating that planners count on during peak demand</li>
<li><strong>Cycle degradation:</strong> the loss of battery capacity caused by charging and discharging, which depends on depth and frequency</li>
</ul>

<h3>The Dispatch Problem</h3>
<p>A dispatch problem chooses charge and discharge power in each time interval to maximize value subject to constraints. Constraints include the battery power limit, the energy capacity, the state-of-charge balance from one interval to the next (accounting for efficiency losses), interconnection limits on exports and any requirement to keep reserve energy for backup. The objective may be revenue from energy prices, avoided retail charges, or a weighted combination. With perfect foresight this is a linear program; in practice forecasts of solar output, load and prices are uncertain, so operators use rolling-horizon optimization or rule-based heuristics.</p>

<h3>Comparing Dispatch Approaches</h3>
<table>
<thead><tr><th>Approach</th><th>How it works</th><th>Strengths</th><th>Limitations</th></tr></thead>
<tbody>
<tr><td>Self-consumption rule</td><td>Charge from surplus solar, discharge to meet load</td><td>Simple, robust, no forecasts needed</td><td>Ignores prices; may empty battery before the true peak</td></tr>
<tr><td>Time-of-use schedule</td><td>Charge in low-price periods, discharge in fixed peak windows</td><td>Easy to align with retail tariffs</td><td>Inflexible when conditions change</td></tr>
<tr><td>Forecast-based optimization</td><td>Solve for the best schedule over a rolling horizon</td><td>Captures more value, handles multiple services</td><td>Sensitive to forecast error and model quality</td></tr>
<tr><td>Market bidding</td><td>Submit offers into wholesale energy and reserve markets</td><td>Access to the full range of grid revenues</td><td>Requires market access, telemetry and risk management</td></tr>
</tbody>
</table>

<h3>Value Stacking</h3>
<p>A single service rarely justifies a battery. A commercial customer might combine demand charge reduction, time-of-use arbitrage and backup power. A utility-scale hybrid might combine energy shifting, capacity value and frequency regulation. The challenge is that services compete for the same state of charge and power: energy committed to a reserve market cannot simultaneously be held for backup. Good value stacking therefore requires co-optimizing services rather than adding up their individual maximums, which would overstate value.</p>

<h3>Sizing Reasoning</h3>
<p>Consider a PV array whose output exceeds its inverter rating around midday. Raising the inverter loading ratio increases annual energy at low cost but increases clipping. A DC-coupled battery can absorb clipped energy, so the marginal value of extra panels rises when storage is added. Similarly, the capacity credit of solar falls as more solar is added to a grid, because the peak shifts into the evening; adding storage restores some of that capacity value. Sizing is an exercise in diminishing returns: each additional hour of duration captures fewer high-value hours than the one before.</p>

<h3>Applied Checklist</h3>
<ol>
<li>Define the services the system will provide and their priority order.</li>
<li>Gather load, solar resource and price or tariff data at hourly or finer resolution.</li>
<li>Model battery constraints, including efficiency and degradation costs.</li>
<li>Optimize dispatch for representative years, then test against forecast error.</li>
<li>Evaluate several sizes and inverter ratios using net present value and sensitivity analysis.</li>
</ol>
`,
        GRADUATE: `
<h2>Solar-Storage Policy, Markets and Grid Services</h2>
<p>Solar-plus-storage projects are shaped as much by market rules and policy as by technology. Whether a hybrid can earn revenue for a given service, how it is counted toward reliability, and how its interconnection is studied all depend on institutional design. This lesson examines the market structures, regulatory choices and equity questions that determine how solar plus storage contributes to a decarbonized grid.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Co-located resource:</strong> solar and storage sharing a site and interconnection but participating in markets as separate resources</li>
<li><strong>Hybrid resource:</strong> solar and storage modeled and dispatched as a single resource with one combined offer</li>
<li><strong>Resource adequacy:</strong> the requirement that enough capacity is available to meet demand with an acceptable reliability margin</li>
<li><strong>Effective load carrying capability:</strong> a probabilistic measure of how much additional load a resource allows the system to serve reliably</li>
<li><strong>Ancillary services:</strong> services such as frequency regulation and operating reserves that keep the grid stable</li>
<li><strong>Interconnection queue:</strong> the ordered list of projects awaiting studies and approval to connect to the transmission system</li>
</ul>

<h3>Market Participation Models</h3>
<p>Grid operators have developed different ways to represent hybrids. Treating the solar and battery as co-located but separate resources gives the operator visibility and control over each, but forces the owner to manage two offers. Treating them as one hybrid resource simplifies participation but hides internal state of charge from the operator, complicating reliability assessment. Rules on whether the battery may charge from the grid also matter: restrictions to solar-only charging were historically linked to tax credit eligibility in some jurisdictions and can reduce flexibility.</p>
<table>
<thead><tr><th>Design choice</th><th>Benefit</th><th>Cost or risk</th></tr></thead>
<tbody>
<tr><td>Separate co-located participation</td><td>Operator sees each component; full market access</td><td>More complex bidding for owners</td></tr>
<tr><td>Single hybrid participation</td><td>Simpler offers; internal optimization by owner</td><td>Less operator visibility of storage state</td></tr>
<tr><td>Grid charging allowed</td><td>Battery can arbitrage and support reliability year-round</td><td>Charging may draw on fossil power in some hours</td></tr>
<tr><td>Solar-only charging</td><td>Clear link to renewable energy</td><td>Lower utilization in cloudy seasons</td></tr>
</tbody>
</table>

<h3>Capacity Accreditation</h3>
<p>As solar penetration grows, net peak demand shifts to evening hours, and the marginal capacity value of solar declines. Four-hour storage can initially earn high capacity credit, but its marginal contribution also declines as storage fills the peak and the net peak broadens. Many system planners have moved toward probabilistic accreditation methods such as effective load carrying capability, which capture these declining marginal values but are harder for investors to forecast. Accreditation rules strongly influence what durations get built.</p>

<h3>Distribution-Level Policy</h3>
<p>Behind-the-meter solar plus storage is governed by retail tariffs, net metering or net billing rules, and utility programs. When export compensation falls, storage adoption tends to rise because self-consumption becomes more valuable. Virtual power plant programs aggregate many home batteries to provide grid services, raising questions about customer compensation, data access and utility control. Interconnection standards for inverters, including grid-support functions, determine whether distributed hybrids help or strain local feeders.</p>

<h3>Equity and Access</h3>
<p>Home batteries are expensive, so early adopters have tended to be higher-income homeowners. Backup power from storage is a resilience benefit that low-income households, renters and medically vulnerable residents may need most but can least afford. Policy responses include targeted incentives, community resilience hubs, storage at critical facilities and on-bill financing. Program evaluation should track who receives benefits, not only how many kilowatt-hours are installed.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Identify the services and markets the project can legally access.</li>
<li>Assess how accreditation rules will value capacity over the project lifetime.</li>
<li>Model revenue under alternative participation models and charging rules.</li>
<li>Analyze interconnection cost and timeline risk.</li>
<li>Evaluate distributional effects and resilience benefits for vulnerable groups.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in Solar-Plus-Storage</h2>
<p>Research on solar plus storage has moved beyond whether hybrids are economic toward how to operate, plan and finance them well under uncertainty. Three themes dominate: co-optimizing operation with battery degradation, managing forecast uncertainty across multiple time scales, and designing portfolios of hybrids at system scale. This lesson surveys the methods, debates and open problems in each area.</p>

<h3>Degradation-Aware Co-Optimization</h3>
<p>Battery aging couples short-term dispatch decisions to long-term asset value. Capacity fade depends on cycle depth, state-of-charge window, charge rate, temperature and calendar time, with interacting nonlinear effects. Incorporating degradation into dispatch requires a cost model that can be embedded in optimization.</p>
<ul>
<li><strong>Rainflow counting:</strong> an algorithm that decomposes an irregular state-of-charge profile into equivalent cycles of different depths</li>
<li><strong>Calendar aging:</strong> capacity loss that occurs over time regardless of cycling, accelerated by high temperature and high state of charge</li>
<li><strong>Marginal degradation cost:</strong> the estimated cost of capacity lost per unit of energy throughput, used as a penalty in dispatch</li>
<li><strong>Stochastic programming:</strong> optimization over a set of scenarios with probabilities, producing decisions that perform well on average</li>
<li><strong>Model predictive control:</strong> repeated optimization over a moving horizon, applying only the first decision before re-solving</li>
<li><strong>Probabilistic forecasting:</strong> forecasts that provide distributions or quantiles rather than single-point predictions</li>
</ul>
<p>Rainflow-based costs are non-convex, so researchers use piecewise-linear approximations, cycle-depth penalties or learned surrogates. A key debate is whether degradation should be priced at replacement cost, at the opportunity cost of future revenue, or through an augmentation strategy where capacity is topped up over time. Each implies different operating behavior.</p>

<h3>Forecasting Under Uncertainty</h3>
<p>Hybrid value depends on forecasts of irradiance, load and prices at horizons from minutes to days. Satellite imagery, sky cameras and numerical weather prediction serve different horizons. Errors are correlated: a cloudy afternoon both reduces solar output and may raise prices. Research compares deterministic, stochastic, robust and chance-constrained formulations, and increasingly uses end-to-end learning where forecasts are trained to minimize decision cost rather than statistical error.</p>

<h3>Methodological Comparison</h3>
<table>
<thead><tr><th>Method</th><th>Treats uncertainty by</th><th>Main challenge</th></tr></thead>
<tbody>
<tr><td>Deterministic rolling horizon</td><td>Re-solving with updated point forecasts</td><td>Can be overconfident; sensitive to forecast bias</td></tr>
<tr><td>Two-stage stochastic program</td><td>Optimizing expected value over scenarios</td><td>Scenario generation and computational burden</td></tr>
<tr><td>Robust optimization</td><td>Protecting against worst cases within an uncertainty set</td><td>Choosing set size without excessive conservatism</td></tr>
<tr><td>Reinforcement learning</td><td>Learning a policy from simulated or historical experience</td><td>Constraint satisfaction, sample efficiency, interpretability</td></tr>
<tr><td>Decision-focused learning</td><td>Training forecasts on downstream decision loss</td><td>Differentiating through optimization; generalization</td></tr>
</tbody>
</table>

<h3>Portfolio and System Design</h3>
<p>At system scale, the question shifts from optimizing one hybrid to designing portfolios: geographic diversity of PV, mixes of storage durations, and complementarity with wind and flexible demand. Capacity expansion models must represent chronological operation to capture storage value, but full hourly resolution over many years is computationally expensive. Representative-day selection, time-series clustering and decomposition methods are active areas, with debate about how much fidelity is lost when inter-day storage dynamics are approximated.</p>

<h3>Contested Questions</h3>
<ul>
<li>How should declining marginal capacity value of storage be represented in long-term planning?</li>
<li>Does co-location deliver real savings, or do interconnection limits reduce system-wide flexibility?</li>
<li>How should emissions accounting attribute grid-charged energy to hybrid systems?</li>
<li>What duration mix is optimal as solar penetration rises and seasonal gaps emerge?</li>
</ul>

<h3>Open Research Directions</h3>
<ol>
<li>Physics-informed degradation models that remain tractable inside market-scale optimization.</li>
<li>Decision-focused forecasting validated on real hybrid fleets rather than simulations.</li>
<li>Coordinated control of distributed hybrids that respects feeder constraints and customer preferences.</li>
<li>Planning methods that link short-duration hybrids with long-duration and seasonal storage.</li>
<li>Life-cycle and supply chain analysis that integrates material criticality, recycling and second-life use.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'rssq1',
      question: {
        ELEMENTARY: 'Why do people add batteries to solar panels?',
        MIDDLE_SCHOOL: 'What does an inverter do in a solar system?',
        HIGH_SCHOOL: 'What is DC coupling?',
        UNDERGRADUATE: 'What is a dispatch strategy?',
        GRADUATE: 'What is resource adequacy?',
        PHD: 'What does rainflow counting do in degradation modeling?',
      },
      options: {
        ELEMENTARY: ['To save sunshine power for nighttime', 'To make the panels shinier', 'To keep birds away', 'To make the sun brighter'],
        MIDDLE_SCHOOL: ['It converts direct current into alternating current for the home', 'It cools the solar panels', 'It measures how sunny it is', 'It stores energy as chemicals'],
        HIGH_SCHOOL: ['Panels feed the battery directly on the DC side, sharing one inverter', 'Each component has its own inverter and meets on the AC side', 'Using batteries only in Washington DC', 'Connecting two grids together'],
        UNDERGRADUATE: ['The rules or optimization deciding when a battery charges, discharges or holds', 'The choice of where to install the panels', 'The method used to clean solar panels', 'The shipping schedule for battery parts'],
        GRADUATE: ['The requirement that enough capacity is available to meet demand reliably', 'A rule that all power must come from solar', 'The price paid for exported solar energy', 'The number of batteries a home may own'],
        PHD: ['It breaks an irregular state-of-charge profile into equivalent cycles of different depths', 'It forecasts rainfall over solar farms', 'It measures panel soiling from rain', 'It counts how often panels are washed'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'The battery fills up with extra sunshine power in the day and gives it back at night.',
        MIDDLE_SCHOOL: 'Panels and batteries make DC power, but home outlets use AC, so the inverter converts it.',
        HIGH_SCHOOL: 'DC coupling avoids extra conversions and lets the battery capture energy that would be clipped.',
        UNDERGRADUATE: 'Dispatch strategy decides battery operation in each interval based on prices, load and constraints.',
        GRADUATE: 'Resource adequacy ensures there is enough capacity, with a margin, to meet demand reliably.',
        PHD: 'Rainflow counting turns messy cycling into cycle depths that degradation models can price.',
      },
    },
    {
      id: 'rssq2',
      question: {
        ELEMENTARY: 'When does a solar battery fill up with energy?',
        MIDDLE_SCHOOL: 'Why do solar output and home electricity use not line up?',
        HIGH_SCHOOL: 'A battery is rated 5 kilowatts and 10 kilowatt-hours. How long can it run at full power?',
        UNDERGRADUATE: 'Why does value stacking require co-optimization rather than adding up each service?',
        GRADUATE: 'Why does the marginal capacity value of solar decline as more solar is built?',
        PHD: 'What distinguishes decision-focused learning from standard forecasting?',
      },
      options: {
        ELEMENTARY: ['In the middle of the night', 'In the middle of a sunny day', 'Only when it rains', 'Only in winter'],
        MIDDLE_SCHOOL: ['Solar peaks at midday while home use is often highest in the evening', 'Homes use no electricity in the evening', 'Solar panels work best at night', 'Batteries only work at noon'],
        HIGH_SCHOOL: ['Half an hour', 'About two hours', 'Ten hours', 'Fifty hours'],
        UNDERGRADUATE: ['Services are illegal to combine', 'Services compete for the same state of charge and power', 'Each service pays the same amount', 'Batteries can only do one thing per year'],
        GRADUATE: ['Solar panels get less efficient each year', 'Net peak demand shifts into evening hours when solar produces little', 'Capacity markets ban solar', 'Solar output increases at night'],
        PHD: ['It uses no data at all', 'Forecasts are trained to minimize the cost of downstream decisions', 'It only predicts point values', 'It ignores optimization entirely'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Around midday there is lots of extra sunshine power, so the battery fills up.',
        MIDDLE_SCHOOL: 'Families use the most power in the evening, after solar output has fallen.',
        HIGH_SCHOOL: 'Duration is energy divided by power: 10 kWh divided by 5 kW is two hours.',
        UNDERGRADUATE: 'Energy held for one service cannot be used for another, so simply summing maximums overstates value.',
        GRADUATE: 'Once solar covers midday, the critical hours move to the evening, so extra solar adds little capacity.',
        PHD: 'Decision-focused learning judges forecasts by the quality of the decisions they lead to.',
      },
    },
    {
      id: 'rssq3',
      question: {
        ELEMENTARY: 'What can a battery do if the power goes out in a storm?',
        MIDDLE_SCHOOL: 'What happens to extra solar power when the home battery is already full?',
        HIGH_SCHOOL: 'What is clipping in a solar system?',
        UNDERGRADUATE: 'What is energy arbitrage?',
        GRADUATE: 'How does a hybrid resource differ from separate co-located resources in market participation?',
        PHD: 'What is calendar aging?',
      },
      options: {
        ELEMENTARY: ['Make the storm stop', 'Turn into a solar panel', 'Keep some lights and the fridge on', 'Make it sunny again'],
        MIDDLE_SCHOOL: ['It disappears forever', 'It breaks the panels', 'It can flow to the grid for others to use', 'It turns into heat inside the battery'],
        HIGH_SCHOOL: ['Cutting panels to fit the roof', 'Removing old batteries', 'Losing panel output that exceeds what the inverter can convert', 'Trimming trees near the panels'],
        UNDERGRADUATE: ['Building batteries in different countries', 'Repairing old inverters', 'Storing energy when prices are low and using or selling it when prices are high', 'Splitting a battery into smaller units'],
        GRADUATE: ['A hybrid cannot sell energy', 'A hybrid must use two separate offers', 'A hybrid is dispatched as one resource with a single combined offer', 'A hybrid never includes storage'],
        PHD: ['Capacity loss caused only by deep cycles', 'Faster charging in cold weather', 'Capacity loss over time regardless of cycling, accelerated by heat and high state of charge', 'An increase in capacity with age'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'A battery can keep important things like lights and the fridge running during a blackout.',
        MIDDLE_SCHOOL: 'When the battery is full, extra solar can be sent to the grid so neighbors can use it.',
        HIGH_SCHOOL: 'Clipping happens when DC output is larger than the inverter rating; DC-coupled batteries can capture it.',
        UNDERGRADUATE: 'Arbitrage earns value from the price difference between charging and discharging times.',
        GRADUATE: 'Hybrid participation bundles solar and storage into one offer, while co-located resources bid separately.',
        PHD: 'Calendar aging happens even when a battery sits idle, especially when it is warm and kept full.',
      },
    },
    {
      id: 'rssq4',
      question: {
        ELEMENTARY: 'How does saving sunshine in a battery help the planet?',
        MIDDLE_SCHOOL: 'Which type of battery is used most often for home solar storage?',
        HIGH_SCHOOL: 'What does round-trip efficiency measure?',
        UNDERGRADUATE: 'Why do designers often set the inverter loading ratio above one?',
        GRADUATE: 'Why might falling export compensation for rooftop solar increase battery adoption?',
        PHD: 'What is model predictive control?',
      },
      options: {
        ELEMENTARY: ['It makes the battery heavier', 'It makes the night shorter', 'It uses more coal', 'We burn less coal and gas at night, so the air is cleaner'],
        MIDDLE_SCHOOL: ['Potato batteries', 'Car tires', 'Water bottles', 'Lithium-ion batteries'],
        HIGH_SCHOOL: ['How far a battery can be shipped', 'How many panels fit on a roof', 'How hot a battery gets', 'The share of energy put into a battery that comes back out'],
        UNDERGRADUATE: ['To make the inverter last forever', 'To avoid all clipping', 'Because inverters cannot be smaller', 'Extra panels add annual energy cheaply even if some midday output is clipped'],
        GRADUATE: ['Batteries become free', 'Exporting becomes mandatory', 'Utilities ban solar panels', 'Storing solar for self-use becomes more valuable than exporting it'],
        PHD: ['A one-time optimization done at installation', 'A battery chemistry', 'A manual control panel', 'Repeated optimization over a moving horizon, applying only the first decision before re-solving'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Saved sunshine replaces some coal and gas power at night, which means less pollution.',
        MIDDLE_SCHOOL: 'Lithium-ion batteries power phones, electric cars and most home solar storage.',
        HIGH_SCHOOL: 'Round-trip efficiency compares energy out to energy in; lithium-ion is typically high.',
        UNDERGRADUATE: 'Oversizing the array relative to the inverter raises energy output at low cost, with modest clipping.',
        GRADUATE: 'If exported solar earns little, using it later through a battery saves more money.',
        PHD: 'MPC re-solves as new forecasts arrive, which helps handle uncertainty.',
      },
    },
    {
      id: 'rssq5',
      question: {
        ELEMENTARY: 'What is it called when you fill a battery up with energy?',
        MIDDLE_SCHOOL: 'Why do utilities build big batteries next to solar farms?',
        HIGH_SCHOOL: 'Which battery chemistry avoids using cobalt and nickel?',
        UNDERGRADUATE: 'How does adding storage affect the capacity credit of solar on a grid with lots of solar?',
        GRADUATE: 'Why are equity concerns raised about home battery programs?',
        PHD: 'Why are representative days used in capacity expansion models with storage?',
      },
      options: {
        ELEMENTARY: ['Charging', 'Painting', 'Freezing', 'Sleeping'],
        MIDDLE_SCHOOL: ['To release solar power during the evening peak so fewer gas plants switch on', 'To make solar panels spin', 'To store water for cleaning', 'To heat the solar farm in winter'],
        HIGH_SCHOOL: ['Lithium iron phosphate', 'Lead paint', 'Nickel cobalt only', 'Alkaline AA cells'],
        UNDERGRADUATE: ['It restores some capacity value by moving solar energy into the evening peak', 'It has no effect on capacity value', 'It always reduces capacity value to zero', 'It makes solar produce at night directly'],
        GRADUATE: ['Batteries are expensive, so benefits like backup power often go first to higher-income homeowners', 'Batteries are only sold to renters', 'Equity has nothing to do with energy', 'All households already have batteries'],
        PHD: ['Full hourly resolution over many years is computationally expensive', 'Storage has no daily pattern', 'Weather data does not exist', 'Representative days are required by law'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Filling a battery with energy is called charging. Letting it out is discharging.',
        MIDDLE_SCHOOL: 'Big batteries soak up afternoon solar and release it in the evening, replacing gas power.',
        HIGH_SCHOOL: 'Lithium iron phosphate batteries avoid cobalt and nickel, easing some mining concerns.',
        UNDERGRADUATE: 'Storage shifts solar energy into the hours of net peak demand, adding back capacity value.',
        GRADUATE: 'Without targeted programs, resilience benefits flow mostly to those who can afford batteries.',
        PHD: 'Clustering into representative days keeps models tractable, at some cost to inter-day storage fidelity.',
      },
    },
  ],
}

export default expansion
