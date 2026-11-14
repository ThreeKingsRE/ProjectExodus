import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'renewable-energy',
  moduleKey: 'energy-efficiency',
  lessons: [
    {
      id: 're-eff-1',
      title: 'Doing More with Less',
      content: {
        ELEMENTARY: `
<h2>Doing More with Less Energy</h2>
<p>Imagine you want to fill a bucket with water, but the bucket has a hole in it. You would have to pour and pour and pour! If you fix the hole, you need much less water to fill it. Using energy is a lot like that. When we stop energy from leaking away, we can stay warm, see in the dark and play games while using less of it. That is called <em>energy efficiency</em>.</p>

<h3>What Does Efficient Mean?</h3>
<p>Something is efficient when it does a job without wasting much. An old-style light bulb gets very hot when it is on. That heat is wasted energy, because we only wanted light! An LED bulb stays cool and gives the same bright light using much less electricity.</p>
<ul>
<li><strong>Energy:</strong> the power that makes things move, light up, heat up or cool down</li>
<li><strong>Efficient:</strong> doing a job well while wasting as little energy as possible</li>
<li><strong>LED bulb:</strong> a modern light bulb that makes bright light while staying cool and saving electricity</li>
<li><strong>Insulation:</strong> a fluffy or thick layer inside walls and roofs that keeps warmth from escaping</li>
<li><strong>Draft:</strong> a sneaky stream of cold air that slips in around doors and windows</li>
</ul>

<h3>Where Does Energy Leak Away?</h3>
<p>Homes can leak energy in lots of places. Warm air can slip out through gaps under doors. Heat can escape through thin windows. A fridge door left open lets cold air spill out. Screens and game boxes left on standby keep sipping power even when nobody is using them.</p>

<h3>Be an Energy Detective</h3>
<p>You can help your family find and fix energy leaks. Here are some missions to try:</p>
<ol>
<li>Switch off lights and screens when you leave a room.</li>
<li>Close the fridge door quickly after you take out a snack.</li>
<li>Put on a cozy sweater before asking to turn up the heat.</li>
<li>Feel around doors and windows for cold drafts and tell a grown-up.</li>
<li>Open curtains on sunny winter days to let free warmth in, and close them at night.</li>
</ol>

<h3>Why It Matters</h3>
<p>Every bit of energy we do not waste is energy that power plants do not have to make. That means cleaner air, less pollution and more money left over for your family. Saving energy is like finding a secret treasure in your own home, and you can start hunting today!</p>
`,
        MIDDLE_SCHOOL: `
<h2>Energy Efficiency: The Hidden Power Source</h2>
<p>When people talk about clean energy, they usually think of solar panels and wind turbines. But there is another clean energy "source" that is often the cheapest of all: the energy we never have to use in the first place. Energy efficiency means getting the same result, such as a warm room, a bright light or a cold drink, while using less energy. Because saved energy produces no pollution and costs nothing to deliver, experts sometimes call efficiency the <em>first fuel</em>.</p>

<h3>Where Does Wasted Energy Go?</h3>
<p>Energy cannot be destroyed, but it can turn into forms we did not want. Most wasted energy ends up as unwanted heat. An old incandescent bulb turns most of its electricity into heat instead of light. A car engine sends much of its fuel energy out the tailpipe and radiator as heat. A drafty house lets the heat from its furnace leak outdoors. Efficiency is about capturing more of the useful part.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Energy efficiency:</strong> using less energy to provide the same service or result</li>
<li><strong>Energy conservation:</strong> choosing to use less energy, such as turning off lights or lowering the heat</li>
<li><strong>Insulation:</strong> material in walls, roofs and floors that slows heat moving in or out of a building</li>
<li><strong>Standby power:</strong> electricity used by devices that are switched off but still plugged in</li>
<li><strong>Energy label:</strong> a sticker on appliances that shows how much energy they typically use</li>
<li><strong>Heat pump:</strong> a machine that moves heat from one place to another instead of making it by burning fuel</li>
</ul>

<h3>Efficient Choices Compared</h3>
<table>
<thead><tr><th>Job to do</th><th>Less efficient way</th><th>More efficient way</th></tr></thead>
<tbody>
<tr><td>Lighting a room</td><td>Incandescent bulb</td><td>LED bulb, which uses a fraction of the electricity and lasts much longer</td></tr>
<tr><td>Keeping a home warm</td><td>Drafty walls and single-pane windows</td><td>Good insulation, sealed gaps and double-pane windows</td></tr>
<tr><td>Heating a home</td><td>Electric resistance heater</td><td>Heat pump, which moves heat and can deliver several times more heat than the electricity it uses</td></tr>
<tr><td>Washing clothes</td><td>Hot water every time</td><td>Cold water wash with a full load</td></tr>
</tbody>
</table>

<h3>Efficiency and Conservation Work Together</h3>
<p>Efficiency is about better equipment and buildings. Conservation is about our choices and habits. Both matter. An efficient fridge saves energy every hour of every day for years. Turning off a game console when you are done is a free habit that adds up over a whole school year.</p>

<h3>Why It Matters for the Planet</h3>
<p>Most electricity in many places still comes partly from burning fossil fuels. Every kilowatt-hour we save means less carbon dioxide in the air. Efficiency also makes it easier to switch to renewable energy, because a smaller, smarter energy demand needs fewer solar panels and wind turbines to meet it.</p>
`,
        HIGH_SCHOOL: `
<h2>Energy Efficiency in Buildings, Appliances and Behavior</h2>
<p>Buildings account for a large share of energy use and greenhouse gas emissions in most countries, mainly through heating, cooling, hot water, lighting and appliances. Improving efficiency in these areas is one of the fastest and most affordable ways to cut emissions, lower bills and reduce strain on the electricity grid. This lesson looks at how efficiency works, where the biggest savings are and how to judge whether an upgrade is worth it.</p>

<h3>The Building Envelope</h3>
<p>The <em>building envelope</em> is the boundary between inside and outside: walls, roof, floor, windows and doors. Heat moves through it in three ways: conduction through solid materials, convection as air leaks through gaps, and radiation through glass. A well-designed envelope slows all three.</p>
<ul>
<li><strong>R-value:</strong> a measure of how well a material resists heat flow, where a higher number means better insulation</li>
<li><strong>Air sealing:</strong> closing gaps and cracks so warm or cool air cannot leak through the envelope</li>
<li><strong>Thermal bridge:</strong> a path of conductive material, such as a metal frame, that lets heat bypass insulation</li>
<li><strong>Energy audit:</strong> a professional checkup that finds where a building wastes energy and recommends fixes</li>
<li><strong>Coefficient of performance:</strong> the ratio of useful heat delivered by a heat pump to the electricity it consumes</li>
<li><strong>Simple payback period:</strong> the upfront cost of an upgrade divided by the money it saves each year</li>
</ul>

<h3>Equipment and Appliances</h3>
<p>Inside the envelope, efficient equipment does the work. Heat pumps are a standout: instead of generating heat by burning fuel or using resistance coils, they use a refrigerant cycle to move heat from outdoors to indoors, often delivering two to four units of heat for every unit of electricity. LED lighting, efficient refrigerators, induction cooktops and variable-speed motors all reduce demand. Appliance standards set by governments steadily remove the least efficient models from store shelves.</p>

<h3>Comparing Common Upgrades</h3>
<table>
<thead><tr><th>Upgrade</th><th>Typical upfront cost</th><th>Typical payback</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>LED lighting</td><td>Low</td><td>Short, often within a few years</td><td>Also lasts much longer than older bulbs</td></tr>
<tr><td>Air sealing and weatherstripping</td><td>Low to moderate</td><td>Short to medium</td><td>Improves comfort by removing drafts</td></tr>
<tr><td>Attic and wall insulation</td><td>Moderate</td><td>Medium</td><td>Biggest gains in older, poorly insulated homes</td></tr>
<tr><td>Heat pump heating and cooling</td><td>High</td><td>Medium to long</td><td>Large savings when replacing oil, propane or resistance heat</td></tr>
<tr><td>Window replacement</td><td>High</td><td>Often long</td><td>Comfort benefits may matter more than bill savings</td></tr>
</tbody>
</table>

<h3>Behavioral Strategies</h3>
<p>Technology is only half the story. Smart thermostats that lower temperatures at night, feedback that shows households how their use compares with neighbors, and simple habits like full dishwasher loads all reduce consumption. Behavioral savings are cheap, but they can fade if habits slip, so they work best alongside equipment upgrades.</p>

<h3>Trade-offs and Barriers</h3>
<p>If efficiency saves money, why is it not everywhere? Upfront costs can be a barrier, especially for low-income households. Renters often cannot upgrade a building they do not own, while landlords may not benefit from lower tenant bills; this is called the <em>split incentive</em>. Many people also lack information about where their energy goes. Programs such as rebates, low-interest loans, building codes and free audits help overcome these barriers.</p>

<h3>Solutions in Action</h3>
<ol>
<li>Start with an energy audit to find the biggest losses.</li>
<li>Seal and insulate first, so heating and cooling equipment can be sized smaller.</li>
<li>Replace failing equipment with efficient electric options such as heat pumps.</li>
<li>Add controls and good habits to lock in the savings.</li>
</ol>
`,
        UNDERGRADUATE: `
<h2>Efficiency Economics, Program Design and Measurement</h2>
<p>Energy efficiency is often described as a resource that utilities and governments can "procure" just like generation. A kilowatt-hour avoided through a lighting retrofit or a better motor has value to the customer, to the utility system and to society. Treating efficiency as a resource raises analytical questions: how to measure something that did not happen, how to compare it fairly with supply options and how to design programs that actually change decisions. This lesson introduces the core economic tools and the discipline of measurement and verification.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Levelized cost of saved energy:</strong> the annualized cost of an efficiency measure divided by the energy it saves each year, comparable to a generation cost per kilowatt-hour</li>
<li><strong>Baseline:</strong> the estimate of what energy use would have been without the efficiency measure</li>
<li><strong>Additionality:</strong> the extent to which savings would not have happened without a program, excluding free riders</li>
<li><strong>Free rider:</strong> a participant who receives a program incentive but would have installed the measure anyway</li>
<li><strong>Persistence:</strong> how long savings continue after installation, accounting for equipment life and behavior</li>
<li><strong>Total resource cost test:</strong> a cost-effectiveness test comparing all costs of a program with the avoided supply costs it produces</li>
</ul>

<h3>Quantitative Reasoning</h3>
<p>The cost of saved energy annualizes an upfront investment using a capital recovery factor that depends on the discount rate and measure life. A measure with a long life and modest cost can show a very low cost of saved energy, often well below the cost of new generation. Simple payback ignores the time value of money and measure life, so it can understate long-lived measures like insulation and overstate short-lived ones. Net present value and internal rate of return provide a fuller picture. Importantly, the value of savings depends on <em>when</em> they occur: a kilowatt-hour saved on a hot summer afternoon, when the grid is stretched, can be worth far more than one saved at night.</p>

<h3>Cost-Effectiveness Tests</h3>
<table>
<thead><tr><th>Test</th><th>Perspective</th><th>Main question</th></tr></thead>
<tbody>
<tr><td>Participant cost test</td><td>The customer</td><td>Do bill savings and incentives exceed my costs?</td></tr>
<tr><td>Program administrator cost test</td><td>The utility or program</td><td>Do avoided supply costs exceed what the program spends?</td></tr>
<tr><td>Total resource cost test</td><td>Participants plus utility</td><td>Do total avoided costs exceed total measure and program costs?</td></tr>
<tr><td>Societal cost test</td><td>Society as a whole</td><td>Including environmental and health benefits, is the program worthwhile?</td></tr>
<tr><td>Ratepayer impact measure</td><td>Non-participating customers</td><td>Will rates rise for those who do not participate?</td></tr>
</tbody>
</table>
<p>Different tests can give different answers for the same program, and the choice of test is ultimately a policy decision about whose costs and benefits count.</p>

<h3>Program Design</h3>
<p>Common program types include prescriptive rebates for standard equipment, custom incentives for complex industrial projects, upstream incentives paid to manufacturers or distributors, behavioral programs using feedback reports, and low-income weatherization. Upstream designs can reach many customers cheaply but make attribution harder. Well-designed programs target market barriers explicitly: information gaps, split incentives, high upfront costs and hassle.</p>

<h3>Measurement and Verification</h3>
<p>Because savings are the difference between actual use and a counterfactual baseline, they cannot be metered directly. Measurement and verification (M and V) protocols offer several options: isolating a single measure and metering key parameters, metering the whole facility and adjusting for weather and occupancy, or using calibrated simulation where no reliable pre-installation data exist. Large behavioral programs often use randomized control trials, which give highly credible estimates.</p>

<h3>Applied Checklist</h3>
<ol>
<li>Define the baseline and the adjustment variables, such as weather and production levels.</li>
<li>Estimate gross savings, then net savings after removing free riders.</li>
<li>Value savings by time of use and include capacity and transmission benefits.</li>
<li>Run more than one cost-effectiveness test and explain any differences.</li>
<li>Plan for persistence by tracking savings across the measure's life.</li>
</ol>
`,
        GRADUATE: `
<h2>Efficiency Policy, Market Transformation and Integrated Resource Planning</h2>
<p>At the policy level, energy efficiency raises a puzzle often called the <em>energy efficiency gap</em>: many measures appear cost-effective on engineering analysis, yet households and firms do not adopt them. Explanations range from genuine market failures to hidden costs and measurement error. How one explains the gap shapes which policies are justified. This lesson examines the main policy instruments, the logic of market transformation and how efficiency is integrated into utility and system planning.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Energy efficiency gap:</strong> the difference between the efficiency investments that appear cost-effective and those actually made</li>
<li><strong>Market transformation:</strong> a lasting shift in markets so that efficient products and practices become standard without ongoing subsidies</li>
<li><strong>Energy efficiency resource standard:</strong> a requirement that utilities achieve a set level of savings over time</li>
<li><strong>Decoupling:</strong> a regulatory mechanism that separates utility revenue from sales volume so utilities do not lose money when customers save energy</li>
<li><strong>Integrated resource planning:</strong> a process in which utilities compare supply and demand-side options on equal terms to meet future needs at least cost</li>
<li><strong>Split incentive:</strong> a situation where the party paying for an upgrade is not the party that receives the savings</li>
</ul>

<h3>Explaining the Gap</h3>
<p>Market failure explanations include imperfect information, split incentives between landlords and tenants, unpriced pollution and limited access to capital. Behavioral explanations include present bias, inattention and the salience of upfront costs over future savings. Skeptical explanations point to hidden costs such as disruption and installation hassle, heterogeneity across users, and engineering estimates that overstate realized savings. Rigorous evaluations have found that realized savings sometimes fall short of projections, which strengthens the case for careful verification rather than abandoning efficiency policy.</p>

<h3>Policy Instruments</h3>
<table>
<thead><tr><th>Instrument</th><th>Mechanism</th><th>Strengths</th><th>Limitations</th></tr></thead>
<tbody>
<tr><td>Appliance and equipment standards</td><td>Remove least efficient products from the market</td><td>Broad reach, low administrative cost</td><td>Must be updated as technology improves</td></tr>
<tr><td>Building energy codes</td><td>Set minimum performance for new construction and major renovation</td><td>Locks in savings for decades</td><td>Enforcement and compliance can be weak; slow to affect existing stock</td></tr>
<tr><td>Building performance standards</td><td>Require existing buildings to meet energy or emissions targets</td><td>Addresses the existing stock</td><td>Compliance costs and equity concerns for owners</td></tr>
<tr><td>Utility programs</td><td>Incentives, audits and financing funded by ratepayers</td><td>Targets specific barriers</td><td>Attribution and free-ridership challenges</td></tr>
<tr><td>Labels and disclosure</td><td>Make energy performance visible at purchase or sale</td><td>Corrects information gaps</td><td>Impact depends on whether people use the information</td></tr>
<tr><td>Carbon pricing</td><td>Raises the price of fossil energy</td><td>Economy-wide signal</td><td>Weak response where barriers are non-price</td></tr>
</tbody>
</table>

<h3>Market Transformation</h3>
<p>Market transformation strategies combine instruments in sequence. Voluntary labels and incentives build early markets for a new technology; manufacturers scale up and costs fall; codes and standards then make the technology the minimum requirement. The transition of lighting markets toward LEDs illustrates this pattern. Evaluating market transformation is difficult because the goal is spillover beyond direct participants, which conventional program evaluation does not capture well.</p>

<h3>Efficiency in Integrated Resource Planning</h3>
<p>In integrated resource planning, efficiency is modeled as a resource with a supply curve: increasing amounts of savings available at rising costs. Its value includes avoided energy, avoided generation capacity, deferred transmission and distribution upgrades, reduced line losses and lower emissions. As grids add more variable renewables, the time and location of savings matter more. Efficiency that reduces winter peak demand from electrified heating, for example, may be especially valuable. Utility business models matter too: without decoupling or performance incentives, utilities may resist programs that reduce sales.</p>

<h3>Equity and Governance</h3>
<p>Low-income households often spend a larger share of income on energy and live in less efficient housing, yet they participate less in many programs because of upfront costs and renter status. Dedicated weatherization programs, on-bill financing with tenant protections, and engagement with community organizations improve reach. Programs should also avoid pushing up rents after upgrades, which can displace the people they aimed to help.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Identify the specific barrier the policy targets and the evidence for it.</li>
<li>Estimate net savings with credible counterfactuals and realistic persistence.</li>
<li>Value savings by time, location and avoided infrastructure.</li>
<li>Assess distributional impacts on participants, non-participants and renters.</li>
<li>Plan the path from incentives to standards for durable market transformation.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: Efficiency Potential, Rebound and Cost-Effectiveness</h2>
<p>Energy efficiency research sits at the intersection of engineering, economics and behavioral science. Three debates dominate: how much efficiency potential really exists, how much of it is eroded by rebound effects, and how cost-effectiveness should be measured when savings are counterfactual, time-varying and entangled with other benefits. This lesson surveys methods and contested questions in each area and identifies open research directions.</p>

<h3>Efficiency Potential Studies</h3>
<p>Potential studies estimate how much energy could be saved, typically in nested layers: technical potential (all feasible measures), economic potential (those passing a cost-effectiveness screen) and achievable potential (what programs can realistically deliver given adoption behavior). Bottom-up engineering models sum measure-level savings across building and equipment stocks; top-down econometric models infer responsiveness from historical data. The two approaches often diverge substantially.</p>
<ul>
<li><strong>Technical potential:</strong> the savings available if every technically feasible efficiency measure were installed regardless of cost</li>
<li><strong>Achievable potential:</strong> the portion of economic potential that can realistically be captured given adoption rates and program constraints</li>
<li><strong>Direct rebound:</strong> increased use of an energy service because efficiency has lowered its effective cost</li>
<li><strong>Indirect rebound:</strong> energy used when money saved through efficiency is spent on other goods and services</li>
<li><strong>Economy-wide rebound:</strong> macroeconomic adjustments in prices, productivity and growth that change total energy demand after efficiency improvements</li>
<li><strong>Backfire:</strong> the theoretical case in which rebound exceeds the original savings so total energy use rises</li>
</ul>

<h3>The Rebound Debate</h3>
<p>The idea that efficiency can increase total energy use is often traced to nineteenth-century observations about coal and steam engines. Modern research distinguishes the channels above. Empirical estimates of direct rebound for household services such as heating and driving are generally partial rather than total, though they vary by service, income level and context; rebound can be larger where energy services are unmet, such as in under-heated homes, where increased consumption reflects improved welfare rather than waste. Economy-wide rebound is much harder to identify, relying on computable general equilibrium models whose results are sensitive to assumptions about substitution elasticities and productivity. Whether backfire occurs at scale remains contested.</p>

<h3>Methodological Challenges</h3>
<table>
<thead><tr><th>Challenge</th><th>Why it matters</th><th>Methodological responses</th></tr></thead>
<tbody>
<tr><td>Counterfactual baselines</td><td>Savings are unobservable directly</td><td>Randomized trials, quasi-experimental designs, interval-meter comparison groups</td></tr>
<tr><td>Engineering versus realized savings</td><td>Projected savings may differ from what is actually achieved</td><td>Ex post evaluation, realization rate studies, calibrated models</td></tr>
<tr><td>Self-selection</td><td>Participants differ systematically from non-participants</td><td>Matching methods, instrumental variables, encouragement designs</td></tr>
<tr><td>Spillover and market effects</td><td>Benefits extend beyond participants</td><td>Market-level panel studies, diffusion models</td></tr>
<tr><td>Time-varying value</td><td>Savings at peak hours are worth more</td><td>Hourly load shapes from smart meter data</td></tr>
</tbody>
</table>

<h3>Rethinking Cost-Effectiveness</h3>
<p>Standard cost-effectiveness tests were developed for utility-scale programs in an era of stable, fossil-dominated grids. Researchers question how to value non-energy benefits such as health, comfort and productivity; how to treat discount rates that may differ sharply between private and social perspectives; and how to integrate efficiency with flexibility, since a building that can shift load may be more valuable than one that only reduces it. Frameworks that value efficiency, demand response, storage and electrification jointly are an active area of work.</p>

<h3>Data and Modeling Frontiers</h3>
<p>Smart meter data enable high-frequency evaluation and machine learning baselines, but raise questions about interpretability, overfitting and privacy. Building stock models increasingly combine physics-based simulation with statistical calibration. Agent-based models explore how adoption spreads through social networks and supply chains, linking micro-level behavior to market transformation.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Credible identification of economy-wide rebound using natural experiments and improved general equilibrium models.</li>
<li>Methods to value efficiency jointly with flexibility in high-renewable, electrified systems.</li>
<li>Robust machine learning baselines for measurement and verification with transparent uncertainty.</li>
<li>Integration of distributional outcomes and energy poverty into potential and cost-effectiveness studies.</li>
<li>Reconciling engineering and econometric estimates of efficiency potential.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'reffq1',
      question: {
        ELEMENTARY: 'Which light bulb saves the most energy?',
        MIDDLE_SCHOOL: 'Why is energy efficiency sometimes called the "first fuel"?',
        HIGH_SCHOOL: 'What is the simple payback period of an efficiency upgrade?',
        UNDERGRADUATE: 'What does the total resource cost test compare?',
        GRADUATE: 'What is market transformation?',
        PHD: 'What is direct rebound?',
      },
      options: {
        ELEMENTARY: ['An LED bulb', 'An old-style bulb that gets very hot', 'A bulb left on all night', 'A broken bulb'],
        MIDDLE_SCHOOL: ['Saved energy is cheap and clean because it never has to be produced', 'It is used first every morning', 'It is the hottest kind of fuel', 'It was the first fuel ever discovered'],
        HIGH_SCHOOL: ['The upfront cost divided by the money saved each year', 'The time it takes to install the upgrade', 'The first monthly bill after an upgrade', 'The number of years a warranty lasts'],
        UNDERGRADUATE: ['All program and measure costs against the avoided supply costs they produce', 'Only the price of a new car', 'The cost of extracting fossil fuels', 'Only the utility marketing budget'],
        GRADUATE: ['A lasting shift so efficient products become standard without ongoing subsidies', 'Daily changes in stock prices', 'Moving a market to a new building', 'A one-time sale on appliances'],
        PHD: ['Increased use of an energy service because efficiency lowered its effective cost', 'Energy bouncing off walls', 'Recovery of a market after a recession', 'A spring returning to its shape'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'LED bulbs stay cool and give bright light using much less electricity than old-style bulbs.',
        MIDDLE_SCHOOL: 'Energy we never have to use produces no pollution and costs nothing to deliver.',
        HIGH_SCHOOL: 'Simple payback tells you roughly how many years it takes for savings to cover the cost.',
        UNDERGRADUATE: 'The TRC test looks at participants plus the utility, comparing total costs with avoided supply costs.',
        GRADUATE: 'Market transformation aims for durable change, often ending with codes and standards.',
        PHD: 'When a service gets cheaper per use, people may use more of it, offsetting part of the savings.',
      },
    },
    {
      id: 'reffq2',
      question: {
        ELEMENTARY: 'What does energy efficiency mean?',
        MIDDLE_SCHOOL: 'What is standby power?',
        HIGH_SCHOOL: 'What is the split incentive problem?',
        UNDERGRADUATE: 'Who is a free rider in an efficiency program?',
        GRADUATE: 'What does decoupling do for utilities?',
        PHD: 'What is achievable potential in an efficiency potential study?',
      },
      options: {
        ELEMENTARY: ['Making more energy at the power plant', 'Doing the same job while wasting less energy', 'Using no energy at all', 'Only using energy at night'],
        MIDDLE_SCHOOL: ['Power made by standing up', 'Electricity used by devices that are switched off but still plugged in', 'Backup power from a generator', 'Energy stored in batteries'],
        HIGH_SCHOOL: ['Splitting the bill evenly among roommates', 'The person paying for an upgrade is not the one who gets the savings', 'Sharing an appliance between homes', 'A discount for buying two products'],
        UNDERGRADUATE: ['A customer who refuses to join the program', 'A participant who gets an incentive but would have installed the measure anyway', 'A contractor who installs equipment for free', 'A utility that skips evaluation'],
        GRADUATE: ['It merges two utilities into one', 'It separates utility revenue from sales so saving energy does not cut utility income', 'It removes all regulation from utilities', 'It links electricity and gas prices'],
        PHD: ['All savings available regardless of cost', 'The share of economic potential that can realistically be captured given adoption and program limits', 'Savings already achieved in the past', 'Energy produced by new power plants'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Efficiency means getting the same light, warmth or fun while using less energy.',
        MIDDLE_SCHOOL: 'Many devices keep drawing a little power even when they look switched off.',
        HIGH_SCHOOL: 'For example, a landlord may pay for insulation while the tenant enjoys the lower bills.',
        UNDERGRADUATE: 'Free riders inflate gross savings, so evaluators subtract them to estimate net savings.',
        GRADUATE: 'Without decoupling, utilities lose revenue when customers save energy, so they may resist programs.',
        PHD: 'Achievable potential sits inside economic potential and reflects real-world adoption behavior.',
      },
    },
    {
      id: 'reffq3',
      question: {
        ELEMENTARY: 'What does insulation do?',
        MIDDLE_SCHOOL: 'How does a heat pump warm a home?',
        HIGH_SCHOOL: 'How can a heat pump deliver more heat than the electricity it uses?',
        UNDERGRADUATE: 'Why can simple payback understate the value of insulation?',
        GRADUATE: 'Which policy instrument directly addresses energy use in existing buildings?',
        PHD: 'Why can rebound in under-heated homes reflect improved welfare?',
      },
      options: {
        ELEMENTARY: ['It makes the lights brighter', 'It cools down the fridge', 'It keeps warmth from escaping through walls and roofs', 'It makes doors open faster'],
        MIDDLE_SCHOOL: ['By burning wood inside', 'By heating a metal coil until it glows', 'By moving heat from one place to another', 'By storing sunlight in the walls'],
        HIGH_SCHOOL: ['It breaks the laws of physics', 'It only works in hot climates', 'It moves existing heat from outdoors rather than creating heat', 'It burns fuel hidden inside the unit'],
        UNDERGRADUATE: ['Insulation has no savings', 'Payback ignores measure life and the time value of money', 'Insulation always costs nothing', 'Payback only applies to cars'],
        GRADUATE: ['Appliance standards for new products', 'Voluntary energy labels only', 'Building performance standards', 'Codes for new construction only'],
        PHD: ['Because comfort is never valuable', 'Because no extra energy is used', 'Because the extra energy meets a previously unmet need for warmth', 'Because rebound only applies to factories'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Insulation is a thick layer that keeps your home cozy by stopping heat from leaking out.',
        MIDDLE_SCHOOL: 'A heat pump moves heat instead of making it by burning fuel.',
        HIGH_SCHOOL: 'Moving heat takes less energy than generating it, so the coefficient of performance can exceed one.',
        UNDERGRADUATE: 'Long-lived measures keep saving for decades, which simple payback does not capture.',
        GRADUATE: 'Building performance standards require existing buildings to meet energy or emissions targets.',
        PHD: 'When households were cold before, using more heat afterward improves health and comfort.',
      },
    },
    {
      id: 'reffq4',
      question: {
        ELEMENTARY: 'Which is a good way to save energy at home?',
        MIDDLE_SCHOOL: 'Where does most wasted energy end up?',
        HIGH_SCHOOL: 'What is usually the best first step before replacing heating equipment?',
        UNDERGRADUATE: 'Why do randomized control trials suit evaluation of behavioral programs?',
        GRADUATE: 'What is the energy efficiency gap?',
        PHD: 'Why are economy-wide rebound estimates hard to pin down?',
      },
      options: {
        ELEMENTARY: ['Leave the fridge door open', 'Keep screens on when nobody is watching', 'Turn the heat up instead of wearing a sweater', 'Switch off lights when you leave a room'],
        MIDDLE_SCHOOL: ['As extra light', 'As new electricity', 'As sound only', 'As unwanted heat'],
        HIGH_SCHOOL: ['Buying the largest furnace available', 'Adding more windows', 'Turning off the thermostat forever', 'Sealing and insulating the building envelope'],
        UNDERGRADUATE: ['They need no data at all', 'They guarantee every household saves energy', 'They avoid having a baseline', 'Random assignment gives a credible comparison group for the counterfactual'],
        GRADUATE: ['The gap between walls in a house', 'The difference between gas and electricity prices', 'The time between audits', 'The difference between cost-effective efficiency investments and those actually made'],
        PHD: ['Because rebound never happens', 'Because only direct effects exist', 'Because there is plenty of data from controlled experiments on whole economies', 'Because general equilibrium results depend heavily on assumptions such as substitution elasticities'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Turning off lights you are not using saves energy right away.',
        MIDDLE_SCHOOL: 'Energy is not destroyed; wasted energy mostly turns into heat we did not want.',
        HIGH_SCHOOL: 'A tighter, better insulated home needs smaller and cheaper heating and cooling equipment.',
        UNDERGRADUATE: 'Randomly assigned control groups show what would have happened without the program.',
        GRADUATE: 'The gap is the puzzle of apparently cost-effective measures going unadopted.',
        PHD: 'Economy-wide effects are modeled rather than observed, so results vary with model assumptions.',
      },
    },
    {
      id: 'reffq5',
      question: {
        ELEMENTARY: 'What is a draft?',
        MIDDLE_SCHOOL: 'What is the difference between energy efficiency and energy conservation?',
        HIGH_SCHOOL: 'What is an energy audit?',
        UNDERGRADUATE: 'Why does the timing of energy savings matter?',
        GRADUATE: 'Why might utilities without decoupling resist efficiency programs?',
        PHD: 'What does technical potential measure?',
      },
      options: {
        ELEMENTARY: ['A sneaky stream of cold air slipping in around doors and windows', 'A drawing of a house', 'A kind of light bulb', 'A warm blanket'],
        MIDDLE_SCHOOL: ['Efficiency uses better equipment; conservation means choosing to use less', 'They mean exactly the same thing', 'Conservation only applies to animals', 'Efficiency means using more energy'],
        HIGH_SCHOOL: ['A checkup that finds where a building wastes energy and recommends fixes', 'A tax on electricity', 'A monthly energy bill', 'A financial review of a bank'],
        UNDERGRADUATE: ['Savings at peak times can be worth more because the grid is most stressed then', 'Savings are worth the same at every hour', 'Only nighttime savings count', 'Timing affects only water use'],
        GRADUATE: ['Lower sales reduce their revenue and profits', 'Efficiency programs are illegal', 'Customers always refuse to save energy', 'Efficiency increases fuel costs for utilities'],
        PHD: ['Savings if every technically feasible measure were installed regardless of cost', 'Savings already verified by meters', 'Only measures with short payback', 'The potential energy stored in a dam'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Drafts let cold air in, so sealing them keeps your home warm with less energy.',
        MIDDLE_SCHOOL: 'Both matter: efficient equipment plus good habits save the most.',
        HIGH_SCHOOL: 'An audit identifies losses such as air leaks and poor insulation and suggests upgrades.',
        UNDERGRADUATE: 'Peak-hour savings avoid expensive generation and network capacity.',
        GRADUATE: 'Decoupling removes the link between sales and revenue that makes utilities reluctant.',
        PHD: 'Technical potential is the outermost layer, before economic and achievable screens are applied.',
      },
    },
  ],
}

export default expansion
