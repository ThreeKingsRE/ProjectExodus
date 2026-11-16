import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'renewable-energy',
  moduleKey: 'net-metering',
  lessons: [
    {
      id: 're-nm-1',
      title: 'Meter Magic',
      content: {
        ELEMENTARY: `
<h2>Meter Magic: When Sunshine Makes Extra Power</h2>
<p>Imagine your family has shiny solar panels on the roof. On a sunny afternoon, the panels make more electricity than your house can use. Where does all that extra power go? It goes out to the neighborhood, and your family can get credit for it. Let's discover this bit of meter magic!</p>

<h3>The Electric Meter</h3>
<p>Every house has an electric meter, usually on an outside wall. It counts how much electricity your family uses. The power company reads it to know how much to charge for the month.</p>
<ul>
<li><strong>Electric meter:</strong> a small machine that counts how much electricity a home uses</li>
<li><strong>Solar panel:</strong> a flat panel that turns sunshine into electricity</li>
<li><strong>Power company:</strong> the business that brings electricity to homes through wires</li>
</ul>

<h3>Running Backwards</h3>
<p>When the solar panels make more power than the house needs, the extra electricity flows out through the wires to neighbors' homes. Some older meters would actually spin backwards when this happened! Newer meters are digital, but they keep track in the same way. The idea is called <em>net metering</em>.</p>
<ul>
<li><strong>Net metering:</strong> a way of counting that gives a home credit for the extra solar power it shares</li>
<li><strong>Credit:</strong> points saved up that lower what you pay later</li>
<li><strong>Grid:</strong> the giant web of wires that carries electricity to everyone</li>
</ul>

<h3>Day and Night</h3>
<p>The sun does not shine at night. So in the evening, the house uses electricity from the grid, and the meter counts forward. During the sunny day, it counts backwards. At the end of the month, the power company looks at the difference. If the house shared a lot, the bill can be very small!</p>

<h3>Think Like an Energy Saver</h3>
<ol>
<li>Find your home's electric meter with a grown-up. Is it a dial meter or a digital one?</li>
<li>Look for solar panels on roofs in your neighborhood.</li>
<li>Turn off lights you are not using, so even more solar power can be shared.</li>
<li>Draw a picture of sunshine traveling from a roof, through the wires, to a neighbor's house.</li>
</ol>

<h3>Think About It</h3>
<p>When one house shares its sunshine power, the neighbors use clean energy too. Net metering turns sunny roofs into tiny power plants that help the whole street!</p>
`,
        MIDDLE_SCHOOL: `
<h2>How Solar Homes Share Power With the Grid</h2>
<p>Rooftop solar panels produce the most electricity at midday, but families often use the most electricity in the morning and evening. That mismatch could be a problem, but the electric grid solves it. Net metering is a set of rules that decides how solar owners are paid for the power they send to the grid.</p>

<h3>Following the Electricity</h3>
<ol>
<li>Solar panels make direct current (DC) electricity from sunlight.</li>
<li>An <strong>inverter</strong> changes it into alternating current (AC), the kind your home uses.</li>
<li>Your home uses as much as it needs right then.</li>
<li>Any extra flows out through the meter into the grid, where neighbors use it.</li>
<li>At night, electricity flows the other way, from the grid into your home.</li>
</ol>

<h3>Key Words</h3>
<ul>
<li><strong>Net metering:</strong> a billing rule that credits solar owners for electricity they send to the grid</li>
<li><strong>Inverter:</strong> a device that changes solar DC power into the AC power homes use</li>
<li><strong>Kilowatt-hour:</strong> the unit used to measure how much electricity is used or made</li>
<li><strong>Bidirectional meter:</strong> a meter that measures electricity flowing both into and out of a home</li>
<li><strong>Excess generation:</strong> electricity a home makes but does not use at that moment</li>
<li><strong>Utility:</strong> the company that runs the local electric grid and sends bills</li>
</ul>

<h3>A Sample Month</h3>
<table>
<thead><tr><th>What happened</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Electricity taken from the grid (mostly evenings)</td><td>500 kilowatt-hours</td></tr>
<tr><td>Extra solar sent to the grid (mostly midday)</td><td>350 kilowatt-hours</td></tr>
<tr><td>Net amount billed</td><td>500 minus 350 = 150 kilowatt-hours</td></tr>
</tbody>
</table>
<p>With simple net metering, the family pays for only the "net" 150 kilowatt-hours, plus any fixed monthly fees. This example uses made-up numbers to show the idea.</p>

<h3>Why It Matters</h3>
<p>Net metering made rooftop solar more affordable for many families, because every kilowatt-hour shared is worth about the same as one bought. That helped solar spread quickly. But some people worry that if solar owners pay very little, the cost of maintaining poles and wires shifts to people without solar. Because of this debate, many places are changing their rules, for example paying less for exported power or encouraging batteries.</p>

<h3>Try This</h3>
<p>Look at a home electricity bill with an adult. Find the number of kilowatt-hours used. Then imagine the home had solar: how might the bill change in summer compared with winter?</p>
`,
        HIGH_SCHOOL: `
<h2>Net Metering Policies, Rate Structures and Grid Economics</h2>
<p>Net metering began as a simple idea: let a customer's meter run backwards when their solar panels export power. It became one of the most important, and most argued-about, policies in clean energy. To understand why, we need to look at how electricity rates are built and what the grid actually costs to run.</p>

<h3>How Net Metering Works</h3>
<p>Under classic net metering, each kilowatt-hour exported earns a credit equal to the retail price the customer pays for electricity. Credits are "netted" against usage over a billing period. If a customer exports more than they use, leftover credits may roll over to the next month, be paid out at a lower rate at the end of the year, or expire, depending on local rules.</p>

<h3>What Is in an Electricity Rate?</h3>
<ul>
<li><strong>Energy costs:</strong> the fuel and generation costs that rise and fall with how much electricity is used</li>
<li><strong>Transmission and distribution:</strong> the cost of building and maintaining high-voltage lines, substations, poles and wires</li>
<li><strong>Fixed customer charge:</strong> a flat monthly fee that covers metering, billing and part of grid costs</li>
<li><strong>Time-of-use rate:</strong> a price that changes by time of day, usually higher in the late afternoon and evening</li>
<li><strong>Cost shift:</strong> the concern that costs avoided by solar owners are paid instead by other customers</li>
</ul>
<p>Many residential rates recover most grid costs through the per-kilowatt-hour price. So when a solar customer offsets their usage, they also avoid paying some grid costs, even though they still use the grid every night.</p>

<h3>Comparing Compensation Designs</h3>
<table>
<thead><tr><th>Design</th><th>How exports are valued</th><th>Effect on solar payback</th></tr></thead>
<tbody>
<tr><td>Classic net metering</td><td>Full retail rate</td><td>Fastest payback</td></tr>
<tr><td>Net billing</td><td>Exports credited at a lower export rate; imports at retail</td><td>Slower; rewards using solar on-site</td></tr>
<tr><td>Buy-all, sell-all</td><td>All output sold at a set rate; all usage bought at retail</td><td>Depends on the set rate</td></tr>
<tr><td>Value of solar tariff</td><td>Rate based on calculated benefits of solar to the grid</td><td>Varies with assumptions</td></tr>
</tbody>
</table>

<h3>The Two Sides of the Debate</h3>
<p>Supporters argue rooftop solar provides real value: it reduces the need for power plants and long-distance lines, cuts pollution, and produces power close to where it is used. Critics argue retail-rate credits overpay for midday solar, especially where midday power is already abundant and cheap, and that grid costs shift to customers who cannot afford panels. Both sides agree that the answer depends heavily on local conditions.</p>

<h3>Where Policy Is Heading</h3>
<ol>
<li>Moving from retail-rate credits toward export rates closer to the grid value of power at that hour.</li>
<li>Pairing solar with batteries so homes store midday power for the evening peak.</li>
<li>Adding time-of-use rates that reward shifting demand.</li>
<li>Protecting low-income customers through community solar and targeted programs.</li>
</ol>
`,
        UNDERGRADUATE: `
<h2>Valuing Net Metering: Cost Shifts and Successor Tariffs</h2>
<p>Net energy metering (NEM) is a compensation mechanism for behind-the-meter generation. Its economic significance comes from a mismatch between how utilities incur costs and how they recover them. This lesson builds the tools to evaluate what exported solar is worth, whether and how much cost shifting occurs, and how successor tariffs try to fix the mismatch.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Behind-the-meter generation:</strong> electricity produced on the customer side of the utility meter, such as rooftop solar</li>
<li><strong>Netting interval:</strong> the time period over which imports and exports are offset, ranging from instantaneous to monthly or annual</li>
<li><strong>Avoided cost:</strong> the cost a utility does not incur because distributed generation displaces energy, capacity or grid investment</li>
<li><strong>Volumetric rate:</strong> a price charged per kilowatt-hour that often bundles fixed grid costs with variable energy costs</li>
<li><strong>Revenue requirement:</strong> the total amount a regulated utility is allowed to collect to cover costs and a return on investment</li>
<li><strong>Successor tariff:</strong> a compensation design that replaces classic net metering, such as net billing or a value-based export rate</li>
</ul>

<h3>Why the Netting Interval Matters</h3>
<p>The longer the netting interval, the more exported energy is effectively valued at the retail rate. With monthly netting, midday exports offset evening imports one for one, even though their market values can differ sharply. With instantaneous netting, only self-consumed solar saves the retail rate, and every exported kilowatt-hour is valued at the export rate. Shortening the interval is therefore one of the most powerful, and least visible, levers in tariff design.</p>

<h3>Estimating the Value of Exports</h3>
<table>
<thead><tr><th>Value component</th><th>What it captures</th><th>Key driver</th></tr></thead>
<tbody>
<tr><td>Avoided energy</td><td>Wholesale energy not purchased</td><td>Hourly prices when solar exports</td></tr>
<tr><td>Avoided generation capacity</td><td>Power plants not needed for peak</td><td>Solar output at the system peak</td></tr>
<tr><td>Avoided transmission and distribution</td><td>Deferred grid upgrades</td><td>Location and local peak timing</td></tr>
<tr><td>Avoided line losses</td><td>Less energy lost moving power long distances</td><td>Proximity of generation to load</td></tr>
<tr><td>Environmental value</td><td>Emissions avoided</td><td>Marginal generator and carbon price</td></tr>
<tr><td>Integration costs</td><td>Added grid management needs (a negative value)</td><td>Solar penetration level</td></tr>
</tbody>
</table>
<p>As solar penetration rises, avoided energy and capacity values typically fall, because additional solar produces when power is already plentiful and pushes the net peak later into the evening. This declining marginal value is central to arguments for reform.</p>

<h3>Measuring Cost Shift</h3>
<p>Cost shift is estimated by comparing the bill savings solar customers receive with the costs the utility actually avoids. If bill savings exceed avoided costs, the gap must be recovered from all customers through higher rates. The size of the gap depends on rate design, solar penetration and which benefits are counted, which is why estimates vary widely and are contested in regulatory proceedings.</p>

<h3>Applied Checklist: Assessing a Tariff</h3>
<ol>
<li>Identify the netting interval and the rate applied to exports.</li>
<li>Separate fixed grid costs from variable energy costs in the retail rate.</li>
<li>Estimate hourly avoided costs over the solar production profile.</li>
<li>Compare customer bill savings with avoided costs to estimate any cost shift.</li>
<li>Check how the design affects incentives for batteries and load shifting.</li>
<li>Consider effects on customers without access to rooftop solar.</li>
</ol>
`,
        GRADUATE: `
<h2>Distributed Generation Compensation, Rate Design and Utility Impacts</h2>
<p>Compensating distributed generation sits at the intersection of regulatory economics, utility business models and energy justice. Decisions about net metering shape adoption rates, utility revenues and who pays for the grid. This lesson treats compensation as a rate design problem with multiple, sometimes conflicting objectives.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Cost-of-service regulation:</strong> a framework where rates are set to recover a utility's prudent costs plus an allowed return on capital</li>
<li><strong>Lost revenue:</strong> revenue a utility no longer collects when customers generate their own power, which can pressure rates between rate cases</li>
<li><strong>Decoupling:</strong> a mechanism that separates utility revenue from sales volume, reducing the incentive to oppose distributed generation</li>
<li><strong>Grandfathering:</strong> allowing existing customers to keep previous compensation terms for a set period after rules change</li>
<li><strong>Demand charge:</strong> a fee based on a customer's highest power draw, intended to reflect capacity costs</li>
<li><strong>Rate design principles:</strong> long-standing goals such as cost causation, revenue sufficiency, fairness, simplicity and efficient price signals</li>
</ul>

<h3>Competing Objectives</h3>
<p>Regulators balance goals that pull in different directions. Efficient prices should reflect marginal costs by time and location; fair prices should not shift costs between groups; stable prices should avoid stranding customers who invested under old rules; and public policy may seek rapid clean energy deployment. Classic net metering scores well on simplicity and deployment, but poorly on cost causation at high penetration.</p>
<table>
<thead><tr><th>Reform option</th><th>Goal served</th><th>Concern raised</th></tr></thead>
<tbody>
<tr><td>Higher fixed charges</td><td>Recover grid costs from all customers</td><td>Weakens conservation and efficiency incentives; burdens low users</td></tr>
<tr><td>Export rates tied to avoided cost</td><td>Cost causation</td><td>Slows rooftop adoption; avoided-cost methods are contested</td></tr>
<tr><td>Time-varying rates</td><td>Efficient price signals</td><td>Complexity; customers with less flexibility may pay more</td></tr>
<tr><td>Minimum bills</td><td>Ensure contribution to grid costs</td><td>Smaller effect than fixed charges; design details matter</td></tr>
<tr><td>Storage incentives</td><td>Shift solar to evening peak</td><td>Upfront cost limits access</td></tr>
</tbody>
</table>

<h3>Utility Business Model Impacts</h3>
<p>Under cost-of-service regulation, utilities earn returns on capital invested, not on energy sold, but between rate cases falling sales reduce revenue. Distributed generation also reduces opportunities for new utility-owned generation. These incentives help explain utility opposition to net metering in some places. Decoupling, performance-based regulation and allowing utilities to earn returns on grid modernization or distributed energy programs can realign interests.</p>

<h3>Equity Considerations</h3>
<p>Rooftop solar adoption has historically skewed toward homeowners with higher incomes and suitable roofs. If compensation exceeds avoided costs, non-adopters, including renters, subsidize adopters. Yet poorly designed reforms such as large fixed charges can also fall hardest on low-income, low-usage households. Equitable approaches include community solar with income-qualified subscriptions, targeted incentives, on-bill financing and protection for existing low-income adopters.</p>

<h3>Evaluation Framework for a Successor Tariff</h3>
<ol>
<li>State objectives explicitly: deployment, cost causation, equity, simplicity and reliability.</li>
<li>Quantify avoided costs with transparent, regularly updated methods.</li>
<li>Model customer economics for solar, solar plus storage and non-adopters.</li>
<li>Assess utility revenue effects and any need for decoupling.</li>
<li>Design transitions, including grandfathering periods, to preserve investor confidence.</li>
<li>Monitor adoption across income groups and adjust.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: Optimal DER Compensation and Tariff Reform</h2>
<p>Research on distributed energy resource (DER) compensation asks how prices should be set when generation, storage and flexible demand sit inside customer premises. The questions bridge public economics, power systems engineering and political economy: what is the efficient price, how large are cross-subsidies in practice, and how can reform succeed politically?</p>

<h3>Theoretical Foundations</h3>
<ul>
<li><strong>Locational marginal value:</strong> the value of energy or capacity at a specific node and time, including congestion and losses</li>
<li><strong>Two-part tariff:</strong> a price structure combining a fixed fee for access with a marginal price for usage, used to reconcile efficiency with cost recovery</li>
<li><strong>Ramsey pricing:</strong> recovering fixed costs by marking up prices most where demand is least responsive, minimizing efficiency loss</li>
<li><strong>Cross-subsidization:</strong> a situation where one customer group pays more than its cost of service to support another</li>
<li><strong>Grid defection:</strong> customers leaving the grid entirely using solar and storage, potentially raising costs for those who remain</li>
<li><strong>Distribution locational marginal price:</strong> an extension of nodal pricing to the distribution network to value DERs by location and time</li>
</ul>
<p>In theory, efficient compensation would price exports at the locational, time-varying marginal value, while fixed network costs would be recovered in ways that minimally distort behavior. In practice, distribution-level prices are rarely computed, customer response is limited, and fairness norms constrain fixed charges.</p>

<h3>Methods for Measuring Cross-Subsidies</h3>
<table>
<thead><tr><th>Method</th><th>Approach</th><th>Limitation</th></tr></thead>
<tbody>
<tr><td>Cost-of-service studies</td><td>Allocate embedded costs to customer classes</td><td>Allocation choices drive results</td></tr>
<tr><td>Marginal cost analysis</td><td>Compare compensation with avoided marginal costs</td><td>Sensitive to forecasts and penetration</td></tr>
<tr><td>Interval meter microdata</td><td>Compute bills and costs at hourly resolution for real customers</td><td>Data access and privacy constraints</td></tr>
<tr><td>Structural adoption models</td><td>Simulate household choices under alternative tariffs</td><td>Requires strong behavioral assumptions</td></tr>
</tbody>
</table>
<p>Empirical work using interval data has shown that cross-subsidy estimates depend strongly on rate structure and correlations between consumption and wholesale prices, and that existing volumetric rates create subsidies beyond solar, for example among customers with different load shapes.</p>

<h3>Feedback Dynamics</h3>
<p>Tariffs and adoption interact dynamically. Higher volumetric rates increase the attractiveness of solar, and more adoption may raise rates further, a feedback sometimes called the utility death spiral. Modeling studies disagree about its likelihood, since it depends on demand elasticity, storage costs, rate reform and regulatory response. Agent-based and system dynamics models are used to explore these pathways.</p>

<h3>Contested Questions</h3>
<ul>
<li>Which avoided-cost components, such as resilience or environmental benefits, belong in compensation rather than separate policy.</li>
<li>Whether distribution-level locational pricing is computationally and politically feasible.</li>
<li>How to weigh efficiency against procedural fairness for customers who invested under prior rules.</li>
<li>Whether storage paired with time-varying export rates captures most of the efficiency gains.</li>
</ul>

<h3>Open Research Directions</h3>
<ol>
<li>Tractable distribution-level pricing using optimal power flow approximations.</li>
<li>Causal estimates of adoption responses to tariff changes using quasi-experimental designs.</li>
<li>Distributional analysis linking tariff reforms to household income and housing tenure.</li>
<li>Compensation frameworks for aggregated DERs participating in wholesale markets.</li>
<li>Political economy studies of why some reforms succeed and others are reversed.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'rnmq1',
      question: {
        ELEMENTARY: 'What does an electric meter do?',
        MIDDLE_SCHOOL: 'What does an inverter do in a solar home?',
        HIGH_SCHOOL: 'Under classic net metering, how is each exported kilowatt-hour credited?',
        UNDERGRADUATE: 'What is behind-the-meter generation?',
        GRADUATE: 'What does decoupling do?',
        PHD: 'What is a two-part tariff?',
      },
      options: {
        ELEMENTARY: ['Counts how much electricity a home uses', 'Makes sunshine', 'Cooks dinner', 'Waters the plants'],
        MIDDLE_SCHOOL: ['Changes solar DC power into the AC power homes use', 'Cleans the solar panels', 'Stores water for the house', 'Turns lights on at night'],
        HIGH_SCHOOL: ['At the full retail price the customer pays', 'At zero', 'At double the retail price', 'Only in winter'],
        UNDERGRADUATE: ['Electricity produced on the customer side of the meter, such as rooftop solar', 'Power plants owned by the utility', 'Transmission lines behind substations', 'Generators used only by hospitals'],
        GRADUATE: ['Separates utility revenue from sales volume', 'Disconnects solar homes from the grid', 'Removes meters from homes', 'Splits a utility into two companies'],
        PHD: ['A fixed access fee combined with a marginal price for usage', 'Two different meters on one house', 'A rate that charges double on weekends', 'A tariff for two customers sharing a roof'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'The meter counts the electricity a home uses so the power company knows what to charge.',
        MIDDLE_SCHOOL: 'Solar panels make DC; the inverter turns it into AC for the home and grid.',
        HIGH_SCHOOL: 'Classic net metering credits exports at the same retail rate the customer pays for imports.',
        UNDERGRADUATE: 'Behind-the-meter generation sits on the customer side, like rooftop solar panels.',
        GRADUATE: 'Decoupling breaks the link between sales and revenue, so utilities lose less when customers generate their own power.',
        PHD: 'Two-part tariffs recover fixed costs through a fee while keeping the marginal price close to marginal cost.',
      },
    },
    {
      id: 'rnmq2',
      question: {
        ELEMENTARY: 'Where does extra solar power go when a house cannot use it all?',
        MIDDLE_SCHOOL: 'A home took 500 kWh from the grid and sent 350 kWh back. With simple net metering, how much is billed?',
        HIGH_SCHOOL: 'What is the "cost shift" concern about net metering?',
        UNDERGRADUATE: 'Why does a shorter netting interval reduce the value of exports?',
        GRADUATE: 'Why can large fixed charges raise equity concerns?',
        PHD: 'What is grid defection?',
      },
      options: {
        ELEMENTARY: ['Into the bathtub', 'Out through the wires to neighbors', 'Up into the clouds', 'Into the refrigerator'],
        MIDDLE_SCHOOL: ['850 kWh', '150 kWh', '500 kWh', '350 kWh'],
        HIGH_SCHOOL: ['Solar panels cost more each year', 'Grid costs avoided by solar owners may be paid by other customers', 'Meters become too expensive', 'Utilities stop selling electricity'],
        UNDERGRADUATE: ['It makes solar panels produce less', 'Fewer imports are offset at retail, so more exports earn the lower export rate', 'It raises the retail price of imports', 'It eliminates fixed charges'],
        GRADUATE: ['They reward high electricity use', 'They can fall hardest on low-income, low-usage households', 'They only apply to businesses', 'They lower bills for everyone'],
        PHD: ['Customers leaving the grid entirely using solar and storage', 'Utilities disconnecting late payers', 'A blackout caused by solar', 'Moving a meter to a new house'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Extra solar power flows out through the wires so neighbors can use it.',
        MIDDLE_SCHOOL: '500 minus 350 equals 150 kWh, the net amount billed.',
        HIGH_SCHOOL: 'Because many rates bundle grid costs into the per-kWh price, solar owners can avoid grid costs others then pay.',
        UNDERGRADUATE: 'With short netting intervals, only on-site use saves the retail rate; exports get the export rate.',
        GRADUATE: 'A large flat fee is a bigger share of a small bill and weakens incentives to conserve.',
        PHD: 'If many customers defect, fixed grid costs fall on fewer remaining customers.',
      },
    },
    {
      id: 'rnmq3',
      question: {
        ELEMENTARY: 'Why does a solar house use grid electricity at night?',
        MIDDLE_SCHOOL: 'What is a bidirectional meter?',
        HIGH_SCHOOL: 'How does net billing differ from classic net metering?',
        UNDERGRADUATE: 'Why does the avoided energy value of solar usually fall as solar penetration rises?',
        GRADUATE: 'What is grandfathering in tariff reform?',
        PHD: 'What does Ramsey pricing aim to do?',
      },
      options: {
        ELEMENTARY: ['The panels are too tired', 'The neighbors asked nicely', 'The sun is not shining', 'The grid closes in the day'],
        MIDDLE_SCHOOL: ['A meter that measures only water', 'A meter with two screens', 'A meter that measures electricity flowing both into and out of a home', 'A meter that turns off at night'],
        HIGH_SCHOOL: ['Net billing pays more for exports', 'Net billing does not use meters', 'Net billing credits exports at a lower export rate while imports cost retail', 'Net billing only works at night'],
        UNDERGRADUATE: ['Solar panels wear out faster', 'Retail prices always fall', 'Extra solar produces when power is already plentiful and cheap', 'Wholesale markets close at midday'],
        GRADUATE: ['Charging older customers higher rates', 'Giving solar panels to grandparents', 'Letting existing customers keep previous terms for a set period', 'Removing rules for new customers only'],
        PHD: ['Set all prices equal', 'Charge the most to the most price-sensitive users', 'Recover fixed costs with the least efficiency loss by marking up prices where demand is least responsive', 'Eliminate fixed costs'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Solar panels need sunlight, so at night the house uses electricity from the grid.',
        MIDDLE_SCHOOL: 'A bidirectional meter counts electricity in both directions.',
        HIGH_SCHOOL: 'Net billing values exports below retail, which rewards using solar on-site.',
        UNDERGRADUATE: 'More solar at the same hours lowers midday prices and pushes the net peak into the evening.',
        GRADUATE: 'Grandfathering protects customers who invested under earlier rules.',
        PHD: 'Ramsey pricing minimizes distortion by loading markups onto less elastic demand.',
      },
    },
    {
      id: 'rnmq4',
      question: {
        ELEMENTARY: 'What is net metering?',
        MIDDLE_SCHOOL: 'Why do some people want to change net metering rules?',
        HIGH_SCHOOL: 'What is a time-of-use rate?',
        UNDERGRADUATE: 'How is cost shift estimated?',
        GRADUATE: 'Why might utilities under cost-of-service regulation oppose net metering?',
        PHD: 'What feedback is described as the utility "death spiral"?',
      },
      options: {
        ELEMENTARY: ['A fishing net for meters', 'A game played with nets', 'A way to stop solar power', 'A way of counting that gives credit for shared solar power'],
        MIDDLE_SCHOOL: ['Solar panels are too heavy', 'Meters are too colorful', 'The sun is getting weaker', 'Grid maintenance costs may shift to people without solar'],
        HIGH_SCHOOL: ['A rate that is the same all day', 'A rate only for businesses', 'A rate charged per meter', 'A price that changes by time of day, usually higher in the evening'],
        UNDERGRADUATE: ['By counting solar panels', 'By measuring roof sizes', 'By surveying customer opinions', 'By comparing solar customers\' bill savings with the costs the utility actually avoids'],
        GRADUATE: ['They earn returns on energy sold only', 'They are forbidden to own wires', 'They never invest in capital', 'Falling sales cut revenue between rate cases and reduce opportunities for utility-owned investment'],
        PHD: ['Meters spinning too fast', 'Solar panels overheating', 'Prices falling until utilities give power away', 'Higher rates drive more self-generation, which pushes rates higher still'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Net metering counts the extra solar power a home shares and gives credit for it.',
        MIDDLE_SCHOOL: 'If solar owners pay very little, others may pay more for poles and wires.',
        HIGH_SCHOOL: 'Time-of-use rates charge more when demand is high, often late afternoon and evening.',
        UNDERGRADUATE: 'If bill savings exceed avoided costs, the difference is recovered from all customers.',
        GRADUATE: 'Lost sales reduce revenue, and distributed generation can displace capital investments that earn returns.',
        PHD: 'The death spiral is a self-reinforcing loop between rising rates and adoption; its likelihood is debated.',
      },
    },
    {
      id: 'rnmq5',
      question: {
        ELEMENTARY: 'What can you do to help share more solar power?',
        MIDDLE_SCHOOL: 'What unit measures how much electricity is used or made?',
        HIGH_SCHOOL: 'Why is pairing solar with batteries a common reform goal?',
        UNDERGRADUATE: 'Which value component captures power plants not needed at peak?',
        GRADUATE: 'Which approach helps low-income customers access solar benefits?',
        PHD: 'What is a main barrier to using interval meter microdata for cross-subsidy studies?',
      },
      options: {
        ELEMENTARY: ['Turn off lights you are not using', 'Leave the TV on all day', 'Open the fridge often', 'Cover the solar panels'],
        MIDDLE_SCHOOL: ['Kilowatt-hour', 'Liter', 'Kilometer', 'Degree'],
        HIGH_SCHOOL: ['Batteries store midday solar for the evening peak', 'Batteries make panels shinier', 'Batteries remove the need for meters', 'Batteries produce electricity from nothing'],
        UNDERGRADUATE: ['Avoided generation capacity', 'Avoided line losses', 'Integration costs', 'Environmental value'],
        GRADUATE: ['Community solar with income-qualified subscriptions', 'Removing all solar incentives', 'Higher fixed charges for everyone', 'Banning rooftop solar on rentals'],
        PHD: ['Data access and privacy constraints', 'Interval meters do not exist', 'Hourly data is never accurate', 'Bills cannot be calculated hourly'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Using less electricity means more solar power can be shared with neighbors.',
        MIDDLE_SCHOOL: 'Electricity use and production are measured in kilowatt-hours.',
        HIGH_SCHOOL: 'Storing solar for evening use moves power to the hours when it is most valuable.',
        UNDERGRADUATE: 'Avoided capacity value depends on how much solar produces during the system peak.',
        GRADUATE: 'Community solar lets renters and others without suitable roofs benefit, especially with income-qualified programs.',
        PHD: 'Customer-level hourly data is powerful but hard to obtain because of privacy and access limits.',
      },
    },
  ],
}

export default expansion
