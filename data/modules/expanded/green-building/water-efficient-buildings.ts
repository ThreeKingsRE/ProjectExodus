import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'green-building',
  moduleKey: 'water-efficient-buildings',
  lessons: [
    {
      id: 'gb-water-1',
      title: 'Saving Every Drop',
      content: {
        ELEMENTARY: `
<h2>Saving Every Drop in Our Buildings</h2>
<p>Water is one of the most important things in the world. We drink it, wash with it, cook with it and flush toilets with it. Every building, from your home to your school, uses water every single day. Green buildings are clever about water. They use only what they need and sometimes even catch rain to use again!</p>

<h3>Where Does Water Go in a Building?</h3>
<p>Think about all the places water comes out in your home. There is the kitchen tap, the bathroom sink, the shower or bath, the toilet and maybe a washing machine. Toilets and showers often use the most water of all.</p>
<ul>
<li><strong>Faucet:</strong> the tap where water comes out at a sink</li>
<li><strong>Low-flow toilet:</strong> a toilet that uses much less water each time you flush</li>
<li><strong>Leak:</strong> a small hole or crack where water drips out and gets wasted</li>
<li><strong>Rain barrel:</strong> a big container that catches rain from the roof to use later</li>
<li><strong>Drought:</strong> a long time with very little rain, when water becomes scarce</li>
</ul>

<h3>Clever Water-Saving Tricks</h3>
<p>Green buildings use special taps and showerheads that mix air into the water. You still get wet and clean, but less water flows out. Some toilets have two buttons: a small flush and a big flush. Some buildings catch rain from the roof and use it to water plants or flush toilets.</p>

<h3>Why Saving Water Matters</h3>
<p>Clean water does not just appear in our taps. It has to be cleaned and pumped through pipes, and that takes energy. Hot water takes even more energy to heat. So when we save water, we also save energy. Saving water also leaves more for rivers, fish, plants and animals.</p>

<h3>Be a Water Hero</h3>
<ol>
<li>Turn off the tap while you brush your teeth.</li>
<li>Take shorter showers. Try singing one song and finishing before it ends!</li>
<li>Tell a grown-up if you hear a tap dripping or a toilet running.</li>
<li>Use a watering can instead of a hose for plants.</li>
<li>Help set up a rain barrel at home or school.</li>
</ol>
<p>Every drop you save helps your building, your town and the planet.</p>
`,
        MIDDLE_SCHOOL: `
<h2>Fixtures and Systems That Use Less Water</h2>
<p>A typical building uses water in many ways: drinking, cooking, cleaning, flushing, cooling equipment and watering landscapes. Much of that water is treated to drinking quality even when it is used for flushing a toilet or watering grass. Water-efficient buildings cut waste by using better equipment and by matching the right kind of water to each job.</p>

<h3>Efficient Fixtures</h3>
<p>Fixtures are the devices where we use water. Newer, efficient models can use much less water than older ones while still doing the job well. Replacing old toilets, showerheads and faucets is often the easiest way to save water in a building.</p>
<table>
<thead><tr><th>Fixture</th><th>Water-saving version</th><th>How it saves</th></tr></thead>
<tbody>
<tr><td>Toilet</td><td>Dual-flush or high-efficiency toilet</td><td>Uses less water per flush</td></tr>
<tr><td>Showerhead</td><td>Low-flow showerhead</td><td>Mixes in air or narrows the spray</td></tr>
<tr><td>Faucet</td><td>Aerator or sensor tap</td><td>Reduces flow or turns off automatically</td></tr>
<tr><td>Washing machine</td><td>Efficient front-loading machine</td><td>Uses less water per load</td></tr>
<tr><td>Garden sprinklers</td><td>Drip irrigation</td><td>Delivers water straight to plant roots</td></tr>
</tbody>
</table>

<h3>Key Words</h3>
<ul>
<li><strong>Fixture:</strong> a device connected to the plumbing, such as a toilet, sink or shower</li>
<li><strong>Flow rate:</strong> how much water comes out of a fixture in a certain amount of time</li>
<li><strong>Aerator:</strong> a small screen on a faucet that mixes air into the water stream</li>
<li><strong>Potable water:</strong> water that is clean and safe enough to drink</li>
<li><strong>Rainwater harvesting:</strong> collecting rain from roofs and storing it to use later</li>
<li><strong>Drip irrigation:</strong> watering plants slowly through small tubes placed near their roots</li>
</ul>

<h3>Using the Right Water for the Job</h3>
<p>Not every use needs drinking-quality water. Flushing toilets and watering plants can be done with collected rainwater or lightly treated used water. This saves the cleanest water for drinking and cooking. Choosing native plants that are adapted to local rainfall also cuts outdoor watering.</p>

<h3>Finding Hidden Waste</h3>
<p>Leaks can waste a surprising amount of water. A toilet that keeps running or a faucet that drips day and night adds up quickly. Water meters help building managers spot unusual use. Some buildings have smart meters that send alerts when water keeps flowing at night when no one is there.</p>

<h3>Why It Matters</h3>
<p>Many regions face water shortages, and climate change is making droughts more frequent in some places. Every liter a building saves also saves the energy used to pump, treat and heat it.</p>
`,
        HIGH_SCHOOL: `
<h2>Water-Efficient Technologies, Rainwater and Greywater</h2>
<p>Water efficiency in buildings rests on three strategies: reduce demand with efficient fixtures and appliances, replace drinking water with alternative sources where quality allows, and reuse water that has already been used once. Together these can greatly reduce how much treated water a building draws from the municipal supply, and how much wastewater it sends to the sewer.</p>

<h3>Reducing Demand</h3>
<p>Efficient fixtures and appliances can substantially cut indoor water use compared with older models. Labeling programs in many countries rate fixtures by water use, which helps buyers choose. Outdoors, landscapes designed with native or drought-tolerant plants, mulch and drip irrigation controlled by weather-based sensors use far less water than conventional lawns with sprinklers. Cooling towers in large buildings can be major water users, and better water treatment lets them recirculate water longer before draining it.</p>

<h3>Alternative Water Sources</h3>
<ul>
<li><strong>Rainwater harvesting:</strong> collecting runoff from roofs, filtering out debris, and storing it in tanks or cisterns</li>
<li><strong>Greywater:</strong> lightly used wastewater from sinks, showers, baths and laundry that does not contain toilet waste</li>
<li><strong>Blackwater:</strong> wastewater from toilets and often kitchen sinks, which carries more pathogens and organic matter</li>
<li><strong>Condensate recovery:</strong> capturing the water that drips from air-conditioning coils for reuse</li>
<li><strong>Cistern:</strong> a storage tank, often underground, that holds collected rainwater</li>
<li><strong>First-flush diverter:</strong> a device that discards the first, dirtiest rainwater from a roof before storage</li>
</ul>

<h3>Matching Quality to Use</h3>
<table>
<thead><tr><th>Source</th><th>Typical treatment</th><th>Common uses</th></tr></thead>
<tbody>
<tr><td>Rainwater</td><td>Screening, first-flush diversion, filtration, sometimes disinfection</td><td>Irrigation, toilet flushing, laundry</td></tr>
<tr><td>Greywater</td><td>Filtration and disinfection; must be used promptly</td><td>Subsurface irrigation, toilet flushing</td></tr>
<tr><td>AC condensate</td><td>Minimal; fairly clean but may contain metals from coils</td><td>Cooling tower make-up, irrigation</td></tr>
<tr><td>Blackwater</td><td>Advanced biological and membrane treatment</td><td>Non-drinking uses in specialized systems</td></tr>
</tbody>
</table>

<h3>Trade-offs and Challenges</h3>
<p>Alternative systems need extra pipes, tanks, pumps and maintenance. Greywater cannot be stored for long because bacteria grow and it begins to smell. Rainwater supply varies with the seasons, so a tank sized for the dry season may be very large. Local health codes set rules on what water may be used for and how it must be treated, and some places do not allow certain uses at all. Dual plumbing must be clearly labeled so recycled water is never connected to drinking taps.</p>

<h3>Real-World Applications</h3>
<ol>
<li>Office buildings that flush toilets with stored rainwater.</li>
<li>Schools that irrigate playing fields with harvested water.</li>
<li>Homes with simple laundry-to-landscape greywater systems where permitted.</li>
<li>Hotels and campuses that reuse cooling condensate.</li>
</ol>
<p>The best results come from combining strategies: first cut demand, then supply what remains from the most appropriate source.</p>
`,
        UNDERGRADUATE: `
<h2>Water Balance and Net-Zero Water Buildings</h2>
<p>Designing a water-efficient building is fundamentally an accounting problem. The designer must know how much water enters, where it is used, what quality each use requires, and where it leaves. A water balance makes these flows explicit and is the basis for sizing systems and testing whether ambitious goals such as net-zero water are achievable on a given site.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Water balance:</strong> an accounting of all water entering, used within, stored and leaving a building or site over a period</li>
<li><strong>Fit-for-purpose water:</strong> supplying each end use with water treated only to the quality that use requires</li>
<li><strong>Net-zero water:</strong> a building or site whose water needs are met by captured precipitation and reused water, with used water returned to the same watershed</li>
<li><strong>End-use breakdown:</strong> the share of total water use attributable to each fixture or process</li>
<li><strong>Storage reliability:</strong> the fraction of time a storage system can meet demand without drawing on backup supply</li>
<li><strong>Cross-connection:</strong> an unsafe link between drinking water and non-drinking water piping that risks contamination</li>
</ul>

<h3>Building the Balance</h3>
<p>Demand is estimated from occupancy, fixture flow rates and usage patterns; in offices, toilet and urinal flushing often dominate indoor use, whereas in housing, showers, toilets and laundry are larger shares. Supply from rainfall depends on catchment area, a runoff coefficient that reflects losses from the roof surface, and local rainfall patterns. The key insight is timing: annual rainfall may exceed annual flushing demand, but long dry spells mean storage must bridge gaps. Designers therefore simulate tank behavior on a daily or monthly time step using historical rainfall rather than relying on annual totals.</p>

<h3>Comparing System Options</h3>
<table>
<thead><tr><th>Strategy</th><th>Water impact</th><th>Energy and cost considerations</th></tr></thead>
<tbody>
<tr><td>High-efficiency fixtures</td><td>Large, reliable reduction</td><td>Low cost, no added energy</td></tr>
<tr><td>Rainwater for flushing and irrigation</td><td>Moderate; depends on roof area and climate</td><td>Tanks and pumps add capital and some energy</td></tr>
<tr><td>Greywater reuse</td><td>Steady supply matched to occupancy</td><td>Treatment and maintenance requirements</td></tr>
<tr><td>On-site blackwater treatment</td><td>Enables near-closed loops</td><td>Highest complexity, energy and operating skill</td></tr>
</tbody>
</table>

<h3>Net-Zero Water in Practice</h3>
<p>Achieving net-zero water usually requires an aggressive reduction in demand first, then treating and reusing wastewater, with rainwater supplying make-up. Drinking water from rainfall requires more treatment and regulatory approval than non-drinking uses. Dense urban sites often lack sufficient roof area relative to occupants, so district-scale systems that share treatment between several buildings can be more practical than building-by-building closure.</p>

<h3>System Integration</h3>
<p>Water systems interact with energy, structure and landscape. Pumps and treatment add electricity demand. Tanks are heavy and need space and structural support. Green roofs reduce runoff volume but can lower rainwater harvesting yield and add color to collected water. Designers should coordinate these interactions early.</p>

<h3>Applied Method</h3>
<ol>
<li>Establish a baseline using fixture counts, flow rates and occupancy.</li>
<li>Apply efficiency measures and recalculate demand by end use.</li>
<li>Assign a fit-for-purpose source to each remaining end use.</li>
<li>Size storage with a time-step simulation using local rainfall records.</li>
<li>Check codes, treatment requirements and maintenance responsibilities.</li>
<li>Install sub-meters to verify performance after occupancy.</li>
</ol>
`,
        GRADUATE: `
<h2>Building-Scale Water: Energy, Regulation and Governance</h2>
<p>At the graduate level, water-efficient buildings are best understood as part of a larger urban water system. Decisions made inside a building change the loads on utility networks, the energy footprint of water service and the distribution of costs among users. This lesson examines the water-energy links at building scale, the regulatory frameworks that enable or block decentralized systems, and how to evaluate them fairly.</p>

<h3>The Water-Energy Nexus at Building Scale</h3>
<ul>
<li><strong>Energy intensity of water:</strong> the energy needed to supply, heat or treat a unit volume of water</li>
<li><strong>Hot water demand:</strong> the share of building water that is heated, which usually dominates the energy embedded in building water use</li>
<li><strong>Decentralized treatment:</strong> treating water or wastewater at or near the building instead of at a central plant</li>
<li><strong>Economies of scale:</strong> the tendency for larger treatment systems to cost and use less per unit volume</li>
<li><strong>Risk-based water quality framework:</strong> treatment requirements set according to the likely human exposure for each end use</li>
<li><strong>Utility revenue erosion:</strong> loss of income to water utilities when customers buy less water, while fixed network costs remain</li>
</ul>
<p>Saving hot water saves the most energy, because heating water typically requires far more energy than delivering it. Conversely, small on-site treatment plants can be more energy-intensive per unit volume than large central plants, so a net-zero water building is not automatically a low-energy one. Evaluations should compare the marginal energy of central supply avoided against the energy of the on-site alternative.</p>

<h3>Regulatory Frameworks</h3>
<p>Regulation of on-site water reuse varies widely between and within countries. Plumbing codes, health departments and environmental agencies may each have a role. Some jurisdictions have adopted risk-based frameworks that specify treatment targets for each end use, which provides clarity for designers. Elsewhere, unclear responsibility for permitting and monitoring has slowed adoption. Requirements to monitor system performance and assign a responsible operator are central to protecting public health.</p>

<h3>Economic Considerations</h3>
<table>
<thead><tr><th>Stakeholder</th><th>Potential benefits</th><th>Potential costs</th></tr></thead>
<tbody>
<tr><td>Building owner</td><td>Lower water and sewer bills, resilience during supply restrictions</td><td>Capital cost, maintenance, operator training</td></tr>
<tr><td>Water utility</td><td>Deferred capacity expansion, lower peak demand</td><td>Lost revenue while fixed costs remain</td></tr>
<tr><td>Other ratepayers</td><td>Shared savings if expansion is avoided</td><td>Higher rates if fixed costs are redistributed</td></tr>
<tr><td>Wider community</td><td>Reduced pressure on rivers and aquifers</td><td>Public health risk if systems are poorly managed</td></tr>
</tbody>
</table>

<h3>Equity Questions</h3>
<p>Decentralized systems are often adopted first by well-resourced owners. If utilities raise rates to recover fixed costs, households without access to efficiency upgrades may pay more. Programs that fund fixture replacement in low-income housing, or tariff designs that protect essential use, help distribute benefits more fairly. Water rights and the interests of downstream and Indigenous communities matter when buildings capture runoff that would otherwise reach streams.</p>

<h3>Governance and Institutional Barriers</h3>
<p>Barriers include unclear permitting, lack of trained operators, split incentives between developers and occupants, and utility business models tied to volume sold. District-scale approaches, where a utility or service company operates shared reuse infrastructure, can address operator capacity and economies of scale.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Define the boundary: building, district or utility service area.</li>
<li>Compare water, energy and cost per unit of service against the central alternative.</li>
<li>Assess public health safeguards and operator responsibility.</li>
<li>Identify who gains and who pays, including other ratepayers.</li>
<li>Test performance under drought restrictions and rainfall variability.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in Integrated Building Water Management</h2>
<p>Research on building water systems now spans engineering, public health, urban hydrology and institutional analysis. The core questions concern when decentralized systems outperform centralized ones, how to manage microbial and chemical risk in complex building plumbing, and how buildings can contribute to urban resilience under climate change. This lesson surveys methods, debates and open directions for advanced study.</p>

<h3>Emerging Technologies</h3>
<ul>
<li><strong>Atmospheric water harvesting:</strong> extracting water vapor from air through condensation or sorbent materials</li>
<li><strong>Membrane bioreactor:</strong> a treatment system combining biological degradation with membrane filtration in a compact footprint</li>
<li><strong>Source separation:</strong> collecting urine, feces and greywater separately to simplify treatment and recover nutrients</li>
<li><strong>Heat recovery from drainwater:</strong> capturing thermal energy from warm wastewater to preheat incoming water</li>
<li><strong>Premise plumbing:</strong> the pipes, tanks and fixtures inside a building, beyond the utility meter</li>
<li><strong>Water age:</strong> the time water spends in a pipe network, which influences disinfectant decay and microbial growth</li>
</ul>
<p>Atmospheric water harvesting is energetically demanding in dry air, and research focuses on sorbent materials that release water with low-grade heat. Its role in buildings is likely niche, but it is studied for remote and arid settings.</p>

<h3>A Key Tension: Efficiency and Water Quality</h3>
<p>Lower flows and larger storage volumes increase water age in premise plumbing. Longer residence times can reduce residual disinfectant and favor opportunistic pathogens in pipes and water heaters. This creates a tension between conservation and public health that researchers are investigating through field sampling, pipe-loop experiments and modeling. Design responses include right-sizing pipes for lower flows, managing hot water temperatures and periodic flushing, but each has energy or water costs.</p>

<h3>Modeling Approaches</h3>
<table>
<thead><tr><th>Approach</th><th>Purpose</th><th>Limitation</th></tr></thead>
<tbody>
<tr><td>Stochastic demand models</td><td>Generate realistic fixture-level use patterns</td><td>Need behavioral data that is often scarce</td></tr>
<tr><td>Tank and reuse simulation</td><td>Estimate yield and reliability of storage</td><td>Sensitive to rainfall series and climate change</td></tr>
<tr><td>Quantitative microbial risk assessment</td><td>Estimate infection risk for each exposure route</td><td>Dose-response and occurrence data uncertain</td></tr>
<tr><td>Urban water system models</td><td>Assess network effects of widespread adoption</td><td>Hard to represent many small heterogeneous systems</td></tr>
<tr><td>Life cycle assessment</td><td>Compare environmental impacts of central and decentralized options</td><td>Results depend strongly on scale and energy mix</td></tr>
</tbody>
</table>

<h3>Contested Questions</h3>
<p>The optimal scale of treatment is debated. Building-scale systems offer local resilience and avoid long pipes, but district scale may capture economies of scale while retaining many benefits. Widespread reuse lowers sewer flows, which may increase sewer blockages and corrosion in networks designed for higher flows. The resilience value of on-site water during emergencies is widely asserted but rarely quantified. Responsibility for monitoring decentralized systems remains a governance puzzle.</p>

<h3>Resilience Under Climate Change</h3>
<p>Climate change alters rainfall intensity and drought duration, affecting harvest reliability and stormwater loads. Buildings with storage and reuse may help cities endure supply interruptions, while rainwater capture can reduce peak runoff when tanks are managed to leave capacity before storms. Real-time control of tanks using forecasts is an active research area.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Field evidence on how conservation and storage affect microbial quality in premise plumbing.</li>
<li>Methods to compare building, district and centralized scales on cost, energy, risk and resilience together.</li>
<li>Forecast-based control of distributed storage for both supply and flood mitigation.</li>
<li>Low-energy sorbent materials and realistic performance data for atmospheric water harvesting.</li>
<li>Governance models for monitoring and accountability of many small reuse systems.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'gbwq1',
      question: {
        ELEMENTARY: 'How can buildings save water?',
        MIDDLE_SCHOOL: 'What does an aerator do?',
        HIGH_SCHOOL: 'What is greywater?',
        UNDERGRADUATE: 'What is net-zero water?',
        GRADUATE: 'Which building water use usually carries the most embedded energy?',
        PHD: 'What is atmospheric water harvesting?',
      },
      options: {
        ELEMENTARY: ['Low-flow toilets and taps', 'Running water all day', 'Bigger pipes everywhere', 'Adding more faucets'],
        MIDDLE_SCHOOL: ['Mixes air into the water stream to reduce flow', 'Heats the water', 'Adds soap to the water', 'Makes the water colder'],
        HIGH_SCHOOL: ['Lightly used water from sinks, showers and laundry', 'Water from toilets', 'Bottled drinking water', 'Seawater'],
        UNDERGRADUATE: ['Needs met by captured precipitation and reuse, with used water returned to the same watershed', 'Using only city water', 'Using as much water as possible', 'Having no water in the building'],
        GRADUATE: ['Hot water, because heating takes far more energy than delivery', 'Toilet flushing', 'Outdoor irrigation', 'Drinking fountains'],
        PHD: ['Extracting water vapor from air through condensation or sorbent materials', 'Collecting rain in barrels', 'Pumping well water', 'Desalinating seawater'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Low-flow toilets and taps clean just as well while using much less water.',
        MIDDLE_SCHOOL: 'An aerator mixes air into the stream so less water flows while it still feels strong.',
        HIGH_SCHOOL: 'Greywater does not contain toilet waste, so it can be treated for flushing or irrigation.',
        UNDERGRADUATE: 'Net-zero water closes the loop on site using rain and reused water.',
        GRADUATE: 'Heating water dominates the energy embedded in building water use, so saving hot water saves the most energy.',
        PHD: 'It pulls moisture from the air, and research focuses on low-energy sorbents for dry climates.',
      },
    },
    {
      id: 'gbwq2',
      question: {
        ELEMENTARY: 'What is a rain barrel for?',
        MIDDLE_SCHOOL: 'What is potable water?',
        HIGH_SCHOOL: 'What does a first-flush diverter do?',
        UNDERGRADUATE: 'Why do designers simulate rainwater tanks on a daily or monthly time step?',
        GRADUATE: 'What is utility revenue erosion?',
        PHD: 'Why can water conservation create a public health tension in premise plumbing?',
      },
      options: {
        ELEMENTARY: ['Storing toys', 'Catching rain from the roof to use later', 'Holding garbage', 'Keeping fish'],
        MIDDLE_SCHOOL: ['Water used in factories only', 'Water that is clean and safe enough to drink', 'Salty ocean water', 'Water with soap in it'],
        HIGH_SCHOOL: ['Heats rainwater', 'Discards the first, dirtiest rainwater before storage', 'Adds chlorine to drinking water', 'Pumps water to the roof'],
        UNDERGRADUATE: ['Annual totals are too small to calculate', 'Long dry spells mean storage must bridge gaps that annual totals hide', 'Tanks only fill once a year', 'Codes forbid annual calculations'],
        GRADUATE: ['Pipes rusting faster', 'Loss of utility income when customers buy less water while fixed costs remain', 'Damage from floods', 'Higher energy prices'],
        PHD: ['Conservation adds chlorine to water', 'Lower flows increase water age, reducing disinfectant and favoring pathogens', 'Efficient fixtures leak more', 'Conservation raises water temperature to boiling'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'A rain barrel catches rain so you can water plants without using tap water.',
        MIDDLE_SCHOOL: 'Potable water is safe to drink, so it should not be wasted on jobs that do not need it.',
        HIGH_SCHOOL: 'The first rain washes dust and debris off the roof, so diverting it keeps stored water cleaner.',
        UNDERGRADUATE: 'Timing matters: rainfall and demand do not line up, so storage behavior must be simulated over time.',
        GRADUATE: 'Utilities have high fixed network costs, so lower sales can lead to higher rates for everyone.',
        PHD: 'Water that sits longer in pipes loses disinfectant, which can allow opportunistic pathogens to grow.',
      },
    },
    {
      id: 'gbwq3',
      question: {
        ELEMENTARY: 'What should you do if you hear a toilet running?',
        MIDDLE_SCHOOL: 'Which outdoor method uses the least water?',
        HIGH_SCHOOL: 'Why cannot greywater be stored for long?',
        UNDERGRADUATE: 'What is fit-for-purpose water?',
        GRADUATE: 'Why is a net-zero water building not automatically a low-energy one?',
        PHD: 'What is source separation?',
      },
      options: {
        ELEMENTARY: ['Ignore it', 'Flush it many more times', 'Tell a grown-up so the leak can be fixed', 'Pour more water in'],
        MIDDLE_SCHOOL: ['Sprinklers in the middle of the day', 'Hosing the driveway', 'Drip irrigation near plant roots', 'Watering the sidewalk'],
        HIGH_SCHOOL: ['It freezes instantly', 'It turns into blackwater', 'Bacteria grow and it begins to smell', 'It evaporates in minutes'],
        UNDERGRADUATE: ['Using drinking water for every job', 'Water that is fit for swimming', 'Supplying each use with water treated only to the quality it requires', 'Water bought in bottles'],
        GRADUATE: ['On-site systems never use pumps', 'Water has no energy content', 'Small on-site treatment can use more energy per unit volume than large central plants', 'Rainwater is always heated'],
        PHD: ['Separating hot and cold pipes', 'Separating buildings by use type', 'Collecting urine, feces and greywater separately to simplify treatment and recover nutrients', 'Sorting recycling bins'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'A running toilet wastes lots of water, so a grown-up should fix it quickly.',
        MIDDLE_SCHOOL: 'Drip irrigation delivers water right to the roots, so little is lost to evaporation or runoff.',
        HIGH_SCHOOL: 'Greywater contains soap, skin cells and food bits that bacteria feed on, so it must be used promptly.',
        UNDERGRADUATE: 'Flushing and irrigation do not need drinking-quality water, so lower-quality sources can serve them.',
        GRADUATE: 'Evaluations must compare on-site treatment energy with the central supply energy avoided.',
        PHD: 'Separating streams makes each easier to treat and allows nutrients such as those in urine to be recovered.',
      },
    },
    {
      id: 'gbwq4',
      question: {
        ELEMENTARY: 'Why does saving water also save energy?',
        MIDDLE_SCHOOL: 'How can smart water meters help a building?',
        HIGH_SCHOOL: 'Why must dual plumbing be clearly labeled?',
        UNDERGRADUATE: 'What is a cross-connection?',
        GRADUATE: 'What does a risk-based water quality framework do?',
        PHD: 'What does quantitative microbial risk assessment estimate?',
      },
      options: {
        ELEMENTARY: ['Water makes lights brighter', 'Water is free to move', 'Energy is stored in taps', 'Water has to be cleaned, pumped and heated using energy'],
        MIDDLE_SCHOOL: ['They make water taste better', 'They heat the water', 'They change the water color', 'They send alerts when water keeps flowing when no one is there'],
        HIGH_SCHOOL: ['So plumbers can choose pipe colors', 'To make pipes stronger', 'To make water flow faster', 'So recycled water is never connected to drinking taps'],
        UNDERGRADUATE: ['A connection between two buildings', 'A pipe junction for hot water', 'A shared roof gutter', 'An unsafe link between drinking and non-drinking water piping'],
        GRADUATE: ['Bans all water reuse', 'Requires drinking-quality water for every use', 'Sets prices for water', 'Sets treatment targets according to likely human exposure for each use'],
        PHD: ['The price of treatment chemicals', 'Rainfall during storms', 'Energy use of pumps', 'Infection risk for each exposure route'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Pumps and heaters use energy, so less water used means less energy needed.',
        MIDDLE_SCHOOL: 'Unusual flow at night often means a leak, so alerts help managers fix it fast.',
        HIGH_SCHOOL: 'Labeling prevents recycled water from being accidentally piped to drinking fixtures.',
        UNDERGRADUATE: 'Cross-connections can let contaminated water enter the drinking supply.',
        GRADUATE: 'Uses with more human contact require higher treatment, giving designers clear targets.',
        PHD: 'QMRA estimates the chance of infection from each way people might be exposed to water.',
      },
    },
    {
      id: 'gbwq5',
      question: {
        ELEMENTARY: 'What is a drought?',
        MIDDLE_SCHOOL: 'Which kinds of water use do not need drinking-quality water?',
        HIGH_SCHOOL: 'What is the best order of water strategies?',
        UNDERGRADUATE: 'Why are district-scale systems often more practical than building-by-building net-zero water in dense cities?',
        GRADUATE: 'Which program helps distribute water efficiency benefits more fairly?',
        PHD: 'How might forecast-based tank control help cities?',
      },
      options: {
        ELEMENTARY: ['A long time with very little rain', 'A big storm', 'A type of faucet', 'A water park'],
        MIDDLE_SCHOOL: ['Flushing toilets and watering plants', 'Drinking and cooking', 'Brushing teeth', 'Making baby formula'],
        HIGH_SCHOOL: ['First cut demand, then supply what remains from the most appropriate source', 'Build the biggest tank first', 'Use drinking water for everything', 'Remove all fixtures'],
        UNDERGRADUATE: ['Dense sites often lack roof area relative to occupants, so shared treatment helps', 'Cities have no rainfall', 'District systems need no treatment', 'Buildings in cities never use water'],
        GRADUATE: ['Funding fixture replacement in low-income housing', 'Raising rates for all small users', 'Banning efficient fixtures', 'Reserving upgrades for new luxury buildings'],
        PHD: ['Emptying tanks before storms to cut peak runoff while still storing supply', 'Filling tanks with seawater', 'Turning off all pumps forever', 'Ignoring weather information'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'During a drought there is little rain, so saving water is extra important.',
        MIDDLE_SCHOOL: 'Collected rainwater or treated used water can flush toilets and water plants.',
        HIGH_SCHOOL: 'Reducing demand first makes every alternative system smaller and cheaper.',
        UNDERGRADUATE: 'Many occupants share little roof area, so pooling treatment across buildings is more workable.',
        GRADUATE: 'Targeted programs help households that cannot easily afford upgrades benefit from savings.',
        PHD: 'Using forecasts, tanks can leave room for storm water and still capture supply.',
      },
    },
  ],
}

export default expansion
