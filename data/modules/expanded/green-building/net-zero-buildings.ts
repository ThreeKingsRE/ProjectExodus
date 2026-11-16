import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'green-building',
  moduleKey: 'net-zero-buildings',
  lessons: [
    {
      id: 'gb-nz-1',
      title: 'Zero Energy Buildings',
      content: {
        ELEMENTARY: `
<h2>Buildings That Make Their Own Energy</h2>
<p>Imagine a house that is like a little power station. It collects sunshine on its roof and turns it into electricity. Over a whole year, it makes as much energy as the family inside uses. Buildings like this are called <em>net zero</em> buildings, and they are one of the coolest ideas in green building!</p>

<h3>Step One: Use Less</h3>
<p>Making energy is great, but first a net zero building tries hard not to waste any. It is wrapped in thick insulation like a cozy sleeping bag. Its windows are placed to let in sunshine for light and warmth. It uses LED lights and efficient machines. When a building needs less energy, it is much easier to make all it needs.</p>
<ul>
<li><strong>Net zero:</strong> making as much energy as you use over a whole year</li>
<li><strong>Solar panel:</strong> a flat panel that turns sunlight into electricity</li>
<li><strong>Insulation:</strong> a warm layer in walls and roofs that stops heat from escaping</li>
<li><strong>Efficient:</strong> doing the same job while using less energy</li>
<li><strong>Power grid:</strong> the big network of wires that carries electricity to homes and schools</li>
</ul>

<h3>Step Two: Make Clean Energy</h3>
<p>After saving energy, the building makes its own with solar panels. On sunny days it often makes more than it needs. The extra electricity flows out through the wires to help neighbors. At night, when the sun is down, the building borrows electricity back. Over the year, it all evens out to zero!</p>

<h3>A Seesaw of Energy</h3>
<p>Think of a seesaw. On one side is the energy the building uses. On the other side is the energy it makes. A net zero building keeps the seesaw balanced over a whole year.</p>

<h3>How You Can Help</h3>
<ol>
<li>Turn off lights and screens when nobody is using them.</li>
<li>Open curtains on sunny winter days to let warmth in.</li>
<li>Close curtains on hot summer afternoons to keep rooms cool.</li>
<li>Look for solar panels on roofs in your neighborhood and count them!</li>
</ol>
<p>Every little bit of energy you save makes it easier for buildings to reach net zero.</p>
`,
        MIDDLE_SCHOOL: `
<h2>Producing as Much Energy as You Use</h2>
<p>A net zero energy building produces as much renewable energy as it uses over a year. Notice the word <em>net</em>: the building does not have to make exactly the right amount every minute. It can make extra on sunny days and use grid electricity at night. When you add up a whole year, energy in and energy out balance.</p>

<h3>The Two-Part Recipe</h3>
<p>Designers follow a simple order. First, cut energy demand as much as possible. Second, meet the remaining demand with renewable energy, usually solar panels. Doing it the other way around would require a huge, expensive solar system to power a wasteful building.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Net zero energy building:</strong> a building that produces as much renewable energy as it uses each year</li>
<li><strong>Energy efficiency:</strong> using less energy to get the same comfort, light or service</li>
<li><strong>Passive design:</strong> using the building shape, windows and shading to heat, cool and light it naturally</li>
<li><strong>Heat pump:</strong> an efficient electric machine that moves heat into or out of a building</li>
<li><strong>Renewable energy:</strong> energy from sources that do not run out, such as sunlight and wind</li>
<li><strong>Net metering:</strong> a billing setup that credits a building for electricity it sends to the grid</li>
</ul>

<h3>Where the Energy Goes and Where It Comes From</h3>
<table>
<thead><tr><th>Energy uses to reduce</th><th>How to reduce them</th></tr></thead>
<tbody>
<tr><td>Heating and cooling</td><td>Insulation, airtight construction, shading and heat pumps</td></tr>
<tr><td>Lighting</td><td>Daylight and LED lights with sensors</td></tr>
<tr><td>Hot water</td><td>Efficient fixtures and heat-pump water heaters</td></tr>
<tr><td>Plug loads</td><td>Efficient appliances and turning devices off</td></tr>
</tbody>
</table>

<h3>Why Solar Panels Fit So Well</h3>
<p>Solar panels can be placed on roofs, over parking areas or on walls. They are quiet and have no moving parts. Small and low buildings, like houses and schools, usually have enough roof area to reach net zero. Very tall buildings have lots of floors but only one roof, so they find it harder.</p>

<h3>Why It Matters</h3>
<p>Buildings use a large share of the world's energy. Net zero buildings show that homes, schools and offices can be comfortable while producing as much energy as they need. They also tend to have lower energy bills and stay more comfortable during hot and cold spells.</p>
`,
        HIGH_SCHOOL: `
<h2>Designing for Net Zero Energy</h2>
<p>A net zero energy building balances its annual energy use with renewable energy, usually generated on site. Achieving that balance is a design challenge that starts on day one: the shape of the building, the quality of its envelope, the efficiency of its systems and the size of its solar array all have to work together. This lesson explores the strategies and technologies involved.</p>

<h3>Efficiency First</h3>
<p>The first and most cost-effective step is to reduce demand. Designers often set a target energy use intensity and then work down toward it.</p>
<ul>
<li><strong>Energy use intensity:</strong> a building's yearly energy use divided by its floor area, used to compare buildings</li>
<li><strong>Airtightness:</strong> how well the building envelope stops uncontrolled air leaks</li>
<li><strong>Heat recovery ventilation:</strong> a system that brings in fresh air while recovering heat from outgoing stale air</li>
<li><strong>Photovoltaics:</strong> solar panels that convert sunlight directly into electricity</li>
<li><strong>All-electric building:</strong> a building that uses no fossil fuels on site, powering everything with electricity</li>
<li><strong>Zero energy ready:</strong> a very efficient building designed so renewable energy can be added later</li>
</ul>

<h3>Strategy Layers</h3>
<table>
<thead><tr><th>Layer</th><th>Strategies</th><th>Why it comes in this order</th></tr></thead>
<tbody>
<tr><td>Passive design</td><td>Orientation, shading, daylight, thermal mass, natural ventilation</td><td>Reduces loads at little ongoing cost</td></tr>
<tr><td>High-performance envelope</td><td>Continuous insulation, high-performance windows, airtight details</td><td>Shrinks heating and cooling needs</td></tr>
<tr><td>Efficient systems</td><td>Heat pumps, heat recovery, LED lighting, controls</td><td>Meets remaining loads with less energy</td></tr>
<tr><td>Renewable generation</td><td>Rooftop or canopy solar, sometimes wind or solar thermal</td><td>Covers what is left</td></tr>
</tbody>
</table>

<h3>Real-World Trade-offs</h3>
<ul>
<li>Roof area limits on-site solar, which makes net zero harder for tall or densely packed buildings.</li>
<li>Plug loads from computers and appliances can be large and depend on occupant behavior.</li>
<li>Extra insulation and better windows cost more up front but reduce solar and equipment costs.</li>
<li>Climate matters: buildings in very cold or very hot places need stronger envelopes.</li>
</ul>

<h3>Applications</h3>
<p>Schools are a common net zero building type because they have large roofs, are often unoccupied in summer when solar output is high, and can use the building as a teaching tool. Many homes, offices and community centers have also reached net zero.</p>

<h3>Living With the Grid</h3>
<p>Most net zero buildings stay connected to the grid. They export surplus solar electricity during sunny hours and import power at night or in winter. Batteries can store some daytime energy, and smart controls can shift loads such as water heating to times when solar is plentiful. Monitoring energy use after move-in helps confirm the building really reaches net zero.</p>
`,
        UNDERGRADUATE: `
<h2>Net Zero Pathways, Economics and Grid Interaction</h2>
<p>Net zero energy is easy to state and surprisingly hard to define precisely. What is counted, where the renewable energy comes from and when energy is exchanged with the grid all change both the engineering and the economics. This lesson analyzes definitions, the cost logic of reaching net zero and the growing importance of how buildings interact with the electricity system.</p>

<h3>Definitions and Boundaries</h3>
<table>
<thead><tr><th>Definition</th><th>What is balanced</th><th>Implication</th></tr></thead>
<tbody>
<tr><td>Site energy</td><td>Energy measured at the building meter</td><td>Simple, but treats electricity and gas as equal</td></tr>
<tr><td>Source energy</td><td>Energy including generation and delivery losses</td><td>Reflects upstream impact; depends on conversion factors</td></tr>
<tr><td>Energy cost</td><td>Bills paid versus credits earned</td><td>Depends on tariffs, which change</td></tr>
<tr><td>Emissions</td><td>Carbon from imports versus carbon avoided by exports</td><td>Depends on grid emission factors, often by hour</td></tr>
</tbody>
</table>
<ul>
<li><strong>Site energy:</strong> the energy a building consumes as measured at its own meters</li>
<li><strong>Source energy:</strong> site energy plus the losses involved in producing and delivering it</li>
<li><strong>Load matching:</strong> the degree to which on-site generation coincides in time with on-site demand</li>
<li><strong>Grid interaction:</strong> the pattern of importing and exporting electricity between a building and the grid</li>
<li><strong>Time-of-use tariff:</strong> an electricity rate that changes by time of day to reflect system costs</li>
<li><strong>Levelized cost:</strong> the average cost per unit of energy over a system's life, including capital and operation</li>
</ul>

<h3>The Economics of Getting to Zero</h3>
<p>Think of reaching zero as buying down a load with the cheapest option at each step. Early efficiency measures, like air sealing and right-sized equipment, cost little per unit of energy saved. Further efficiency gets more expensive. At some point, adding another solar panel becomes cheaper than squeezing out more savings. The economic optimum is where the marginal cost of efficiency meets the marginal cost of renewable generation. In practice, falling solar costs have moved this point, but envelope measures remain valuable because they also improve comfort and resilience and last for decades.</p>

<h3>Grid Interaction</h3>
<p>An annual balance can hide large daily swings. A solar-heavy net zero building may export heavily at midday and import in the evening, when many grids face peak demand. When many such buildings cluster, utilities may see steep evening ramps. As a result, attention is shifting from annual energy balance to hourly behavior, flexibility and peak demand.</p>

<h3>A Net Zero Design Method</h3>
<ol>
<li>Choose the definition and boundary that fit the project goals.</li>
<li>Set an energy use intensity target based on climate and building type.</li>
<li>Model passive and envelope options and select a cost-effective package.</li>
<li>Right-size all-electric systems to the reduced loads.</li>
<li>Size the renewable system to the remaining annual demand with a margin.</li>
<li>Add storage or load flexibility where tariffs or grid needs reward it.</li>
<li>Meter end uses and verify performance over the first full year.</li>
</ol>

<h3>Common Pitfalls</h3>
<p>Underestimating plug loads, poor commissioning and occupant changes are frequent causes of missing the target. Sizing a modest solar margin and providing occupants with feedback on energy use help close the gap.</p>
`,
        GRADUATE: `
<h2>Net Zero Carbon: Definitions, Policy and Portfolios</h2>
<p>As climate policy has matured, many organizations have moved from net zero energy to net zero carbon. The shift recognizes that what ultimately matters is greenhouse gas emissions, that not every building can generate enough energy on site, and that materials and construction carry significant emissions. It also introduces new questions about offsets, renewable procurement and accountability.</p>

<h3>From Energy to Carbon</h3>
<p>A net zero carbon building is commonly described as highly efficient, fully powered by renewable energy from on-site or off-site sources, and with any remaining emissions addressed. Frameworks differ on whether embodied carbon is included and how off-site renewables and offsets may be used.</p>
<ul>
<li><strong>Operational carbon:</strong> emissions from the energy used to heat, cool, light and power a building in use</li>
<li><strong>Embodied carbon:</strong> emissions from extracting, manufacturing, transporting and installing building materials</li>
<li><strong>Power purchase agreement:</strong> a long-term contract to buy electricity from a specific renewable project</li>
<li><strong>Renewable energy certificate:</strong> a tradable instrument representing the environmental attributes of renewable electricity</li>
<li><strong>Carbon offset:</strong> a credit for emissions reduced or removed elsewhere, used to compensate for remaining emissions</li>
<li><strong>Additionality:</strong> whether a renewable project or offset would not have happened without the buyer</li>
</ul>

<h3>Renewable Procurement Options</h3>
<table>
<thead><tr><th>Option</th><th>Strength</th><th>Concern</th></tr></thead>
<tbody>
<tr><td>On-site generation</td><td>Direct, visible, reduces imports</td><td>Limited by roof and site area</td></tr>
<tr><td>Off-site power purchase agreement</td><td>Can add new renewable capacity at scale</td><td>Contract complexity; geographic mismatch</td></tr>
<tr><td>Unbundled certificates</td><td>Simple and inexpensive</td><td>Often weak additionality</td></tr>
<tr><td>Green utility tariffs</td><td>Accessible to smaller buyers</td><td>Quality varies by program</td></tr>
</tbody>
</table>

<h3>Policy Approaches</h3>
<p>Governments use several tools to push toward net zero: increasingly stringent energy codes with stretch codes for early adopters, requirements for all-electric new construction in some jurisdictions, building performance standards for existing buildings, and public commitments for government-owned buildings. Disclosure rules and green procurement extend the signal to private owners.</p>

<h3>Portfolio Approaches</h3>
<p>Owners with many buildings rarely make every building net zero on its own. Instead they set portfolio targets: deep efficiency and electrification everywhere, on-site renewables where suitable, and shared off-site procurement for the remainder. Portfolio planning aligns retrofits with capital cycles and lease events, and it can prioritize buildings where emissions cuts are cheapest.</p>

<h3>Equity and Governance</h3>
<p>Net zero mandates can raise construction costs, so affordable housing may need targeted support. All-electric transitions raise questions about who bears the costs of remaining gas networks as customers leave. Credible claims require transparent accounting, clear boundaries and third-party verification to avoid greenwashing.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Is the definition explicit about scope, including embodied carbon?</li>
<li>Does it prioritize efficiency and electrification before procurement and offsets?</li>
<li>Are renewable claims additional and matched reasonably in time and location?</li>
<li>Is performance verified with measured data each year?</li>
<li>Who bears the costs, and are vulnerable groups protected?</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in Net Zero Measurement and Scalability</h2>
<p>Net zero building research has moved beyond demonstrating feasibility toward harder questions: how to measure and verify net zero claims credibly, how to account for time-varying grid emissions, how buildings should interact with decarbonizing power systems and whether net zero can scale from exemplar projects to entire building stocks. This lesson surveys methods, debates and open directions.</p>

<h3>Measurement and Verification</h3>
<p>Annual net balances depend on metering boundaries, weather, occupancy and the accounting conventions applied. The performance gap, the difference between predicted and measured performance, is widely documented and arises from modeling assumptions, construction quality, commissioning and occupant behavior.</p>
<ul>
<li><strong>Performance gap:</strong> the difference between energy use predicted at design and energy use measured in operation</li>
<li><strong>Marginal emission factor:</strong> the emissions change caused by a small change in grid demand at a given time</li>
<li><strong>Average emission factor:</strong> total grid emissions divided by total generation over a period</li>
<li><strong>Hourly matching:</strong> pairing consumption with clean generation in the same hour rather than over a year</li>
<li><strong>Bayesian calibration:</strong> a method that updates uncertain model parameters using measured data and prior knowledge</li>
<li><strong>Demand flexibility:</strong> a building's ability to shift or reduce load in response to grid conditions</li>
</ul>

<h3>Temporal Carbon Accounting</h3>
<p>Annual accounting treats a midday export as cancelling an evening import, but their emissions effects can differ widely. Researchers compare average and marginal emission factors, short-run and long-run marginal effects, and the consequences for design choices such as battery sizing or orientation of panels. The choice of metric can change which strategies appear best, and there is no consensus on a single correct approach.</p>

<h3>Contested Questions</h3>
<table>
<thead><tr><th>Question</th><th>Why it is contested</th></tr></thead>
<tbody>
<tr><td>Should net zero be judged annually or hourly?</td><td>Hourly matching better reflects grid impacts but raises cost and data demands</td></tr>
<tr><td>Should embodied carbon be inside the boundary?</td><td>Including it changes rankings of designs but relies on uncertain life cycle data</td></tr>
<tr><td>Is building-level net zero the right unit?</td><td>District or portfolio balances may be cheaper and more scalable</td></tr>
<tr><td>What role for offsets?</td><td>Permanence, additionality and verification of offsets remain debated</td></tr>
</tbody>
</table>

<h3>Scalability Challenges</h3>
<p>Dense urban buildings cannot generate enough on site, so scaling depends on off-site procurement, district systems and grid decarbonization. Stock-level modeling explores how many buildings can reach net zero under different definitions and how clustering affects distribution networks. Supply chains for heat pumps, skilled labor and high-performance components are further constraints, as is the slow turnover of existing buildings.</p>

<h3>Modeling Methods</h3>
<p>Researchers combine physics-based simulation with data-driven models, apply uncertainty and sensitivity analysis, and use co-simulation to link building and grid models. Model predictive control research examines how buildings can respond to price and carbon signals while maintaining comfort. Validation against long-term measured datasets remains limited, partly because of data access constraints.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Standardized, time-resolved carbon accounting methods for building claims.</li>
<li>Large measured datasets that characterize the performance gap across building types and climates.</li>
<li>Coordinated control of many flexible buildings in high-renewable grids.</li>
<li>Comparative evaluation of building, district and portfolio net zero boundaries.</li>
<li>Integration of embodied and operational carbon in early design decision tools.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'gbnzq1',
      question: {
        ELEMENTARY: "What does a net zero building do?",
        MIDDLE_SCHOOL: "What makes a building net zero energy?",
        HIGH_SCHOOL: "What is the first step toward net zero?",
        UNDERGRADUATE: "What is grid interaction?",
        GRADUATE: "What is embodied carbon?",
        PHD: "What is the performance gap?",
      },
      options: {
        ELEMENTARY: ["Makes as much energy as it uses in a year", "Uses no electricity ever", "Has no windows at all", "Is painted bright green"],
        MIDDLE_SCHOOL: ["It produces as much renewable energy as it uses over a year", "It uses only candles", "It has no heating", "It is built underground"],
        HIGH_SCHOOL: ["Reduce energy demand through efficiency", "Add as many solar panels as possible first", "Remove the insulation", "Use more energy"],
        UNDERGRADUATE: ["The pattern of importing and exporting electricity between a building and the grid", "Having no grid connection at all", "Only importing electricity", "The layout of the parking grid"],
        GRADUATE: ["Emissions from extracting, making, transporting and installing materials", "Emissions from heating only", "Carbon stored in the soil", "Carbon in the air inside rooms"],
        PHD: ["The difference between predicted and measured energy use", "A gap in the building envelope", "The time between design and occupancy", "Perfect prediction of performance"],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: "Over a whole year, a net zero building makes as much energy as it uses, like a balanced seesaw.",
        MIDDLE_SCHOOL: "Net zero means renewable production equals use when added up over a full year.",
        HIGH_SCHOOL: "Cutting demand first makes the renewable system smaller and cheaper.",
        UNDERGRADUATE: "Net zero buildings export surplus electricity and import when they need it; that exchange is grid interaction.",
        GRADUATE: "Embodied carbon comes from materials and construction, separate from operational carbon.",
        PHD: "The performance gap is the difference between design predictions and measured performance in operation.",
      },
    },
    {
      id: 'gbnzq2',
      question: {
        ELEMENTARY: "What does a solar panel do?",
        MIDDLE_SCHOOL: "What is net metering?",
        HIGH_SCHOOL: "What is energy use intensity?",
        UNDERGRADUATE: "What does a source energy definition of net zero include?",
        GRADUATE: "What is a power purchase agreement?",
        PHD: "What is a marginal emission factor?",
      },
      options: {
        ELEMENTARY: ["Keeps rain off the roof", "Makes the house heavier", "Turns sunlight into electricity", "Pumps water into the bath"],
        MIDDLE_SCHOOL: ["Measuring how tall a building is", "A fence around the solar panels", "A billing setup that credits a building for electricity sent to the grid", "Counting the number of light bulbs"],
        HIGH_SCHOOL: ["How bright the lights are", "The number of people in a building", "Yearly energy use divided by floor area", "The speed of the wind on the roof"],
        UNDERGRADUATE: ["Only the energy used by lights", "Only gas used on site", "Site energy plus losses from producing and delivering it", "The energy stored in batteries"],
        GRADUATE: ["A rule banning solar panels", "A short-term discount on gas", "A long-term contract to buy electricity from a specific renewable project", "A lease for office furniture"],
        PHD: ["Total yearly emissions divided by generation", "Emissions from building materials", "The emissions change caused by a small change in grid demand at a given time", "The emissions from one appliance"],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: "Solar panels catch sunlight and turn it into electricity for the building.",
        MIDDLE_SCHOOL: "Net metering gives credit for exported electricity, which can offset electricity bought at night.",
        HIGH_SCHOOL: "Energy use intensity lets you compare buildings of different sizes fairly.",
        UNDERGRADUATE: "Source energy adds upstream generation and delivery losses to what is measured at the meter.",
        GRADUATE: "A PPA is a long-term contract for power from a particular renewable project, often off site.",
        PHD: "Marginal factors capture what changes when demand changes at the margin, unlike averages.",
      },
    },
    {
      id: 'gbnzq3',
      question: {
        ELEMENTARY: "What happens to extra solar electricity on a sunny day?",
        MIDDLE_SCHOOL: "Why do very tall buildings find net zero harder?",
        HIGH_SCHOOL: "What does heat recovery ventilation do?",
        UNDERGRADUATE: "Where is the economic optimum between efficiency and solar?",
        GRADUATE: "What is a common concern with unbundled renewable energy certificates?",
        PHD: "Why is annual net zero accounting debated?",
      },
      options: {
        ELEMENTARY: ["It flows out through the wires to help neighbors", "It disappears into the sky", "It turns into rain", "It makes the roof melt"],
        MIDDLE_SCHOOL: ["They have many floors but only one roof for solar panels", "Tall buildings cannot have windows", "Solar panels do not work up high", "Tall buildings use no energy"],
        HIGH_SCHOOL: ["Brings in fresh air while recovering heat from outgoing air", "Heats water for showers using gas", "Opens all windows automatically", "Turns lights off at night"],
        UNDERGRADUATE: ["Where the marginal cost of efficiency meets the marginal cost of renewable generation", "Where no efficiency measures are used", "Where solar is never added", "Where the building is as large as possible"],
        GRADUATE: ["They often have weak additionality", "They always add new wind farms", "They are illegal everywhere", "They make buildings use more energy"],
        PHD: ["A midday export may not cancel the emissions of an evening import", "Buildings cannot be metered annually", "Weather has no effect on energy", "Annual totals are always identical to hourly totals"],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: "Extra electricity goes out to the grid so other people can use it.",
        MIDDLE_SCHOOL: "A tall building has a lot of floor area to power but limited roof space for panels.",
        HIGH_SCHOOL: "Heat recovery ventilation supplies fresh air while keeping most of the heat inside.",
        UNDERGRADUATE: "Keep investing in whichever option is cheaper per unit until the marginal costs are equal.",
        GRADUATE: "Unbundled certificates may not cause any new renewable capacity to be built.",
        PHD: "Grid emissions vary by hour, so annual netting can misrepresent real climate impact.",
      },
    },
    {
      id: 'gbnzq4',
      question: {
        ELEMENTARY: "Why does a net zero building use thick insulation?",
        MIDDLE_SCHOOL: "What is passive design?",
        HIGH_SCHOOL: "What is an all-electric building?",
        UNDERGRADUATE: "What is load matching?",
        GRADUATE: "What should a credible net zero carbon strategy do before buying offsets?",
        PHD: "What is demand flexibility?",
      },
      options: {
        ELEMENTARY: ["To make the walls look pretty", "To make the building heavier", "To hide the solar panels", "To keep heat in so it needs less energy"],
        MIDDLE_SCHOOL: ["Using extra machines to cool a building", "Choosing a design without any windows", "Painting a building white only", "Using shape, windows and shading to heat, cool and light naturally"],
        HIGH_SCHOOL: ["A building with electric fences", "A building with no electricity", "A building that runs only on gas", "A building that uses no fossil fuels on site"],
        UNDERGRADUATE: ["Matching furniture to the floor plan", "Balancing the weight of the roof", "Splitting electricity bills evenly", "How well on-site generation coincides in time with demand"],
        GRADUATE: ["Buy as many offsets as possible first", "Ignore efficiency entirely", "Remove all meters", "Prioritize efficiency and electrification, then renewable procurement"],
        PHD: ["Bending solar panels into new shapes", "Changing the building's floor plan", "Making tariffs fixed for all hours", "A building's ability to shift or reduce load in response to grid conditions"],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: "Insulation keeps warmth inside, so the building needs less energy and can make all it needs.",
        MIDDLE_SCHOOL: "Passive design uses the building itself, like windows and shading, to save energy.",
        HIGH_SCHOOL: "All-electric buildings use electricity for everything, so renewable power can supply them fully.",
        UNDERGRADUATE: "Load matching describes how closely generation and use line up hour by hour.",
        GRADUATE: "Credible strategies reduce and electrify first, then procure renewables, using offsets only for what remains.",
        PHD: "Flexible buildings can move loads like water heating to times when clean power is plentiful.",
      },
    },
    {
      id: 'gbnzq5',
      question: {
        ELEMENTARY: "Where does a net zero building get electricity at night?",
        MIDDLE_SCHOOL: "Which is a good way to reduce lighting energy?",
        HIGH_SCHOOL: "Why are schools a common net zero building type?",
        UNDERGRADUATE: "Why can many solar-heavy net zero buildings cause problems for utilities?",
        GRADUATE: "Why do large owners often set portfolio-level net zero targets?",
        PHD: "Why is district or portfolio net zero discussed as an alternative boundary?",
      },
      options: {
        ELEMENTARY: ["From the moon", "It borrows it back from the power grid", "From the garden hose", "It never uses electricity at night"],
        MIDDLE_SCHOOL: ["Leaving lights on all day", "Daylight and LED lights with sensors", "Using more old bulbs", "Painting the windows black"],
        HIGH_SCHOOL: ["They have no roofs", "They have large roofs and are often empty in summer", "They never use electricity", "They are always underground"],
        UNDERGRADUATE: ["They never export electricity", "Many export at midday and import in the evening, creating steep ramps", "They use no electricity at all", "They reduce midday solar output"],
        GRADUATE: ["Because every building is identical", "Not every building can reach net zero on its own, so measures are combined", "Because portfolios use no energy", "Because codes forbid building-level targets"],
        PHD: ["Buildings cannot be measured individually", "District balances may be cheaper and more scalable than building-level balances", "It removes all need for efficiency", "It guarantees zero emissions every hour"],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: "At night the building borrows electricity from the grid and pays it back with sunny-day extra.",
        MIDDLE_SCHOOL: "Daylight plus efficient LEDs with sensors cuts lighting energy a lot.",
        HIGH_SCHOOL: "Large roofs fit lots of solar, and low summer use leaves extra energy to balance the year.",
        UNDERGRADUATE: "Clusters of solar buildings shift grid demand to the evening, creating steep ramps.",
        GRADUATE: "Portfolio targets combine efficiency everywhere, on-site solar where possible, and shared procurement.",
        PHD: "Pooling generation and demand across buildings can be cheaper and work for dense sites that cannot balance alone.",
      },
    },
  ],
}

export default expansion
