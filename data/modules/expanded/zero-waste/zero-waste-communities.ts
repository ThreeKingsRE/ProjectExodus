import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'zero-waste',
  moduleKey: 'zero-waste-communities',
  lessons: [
    {
      id: 'zw-comm-1',
      title: 'Towns Without Trash',
      content: {
        ELEMENTARY: `
<h2>A Whole Town on One Team</h2>
<p>Imagine a town where the big trash truck hardly has anything to carry. That is the dream of a zero waste town! No single person can do it alone, but when families, schools, shops and the town leaders all work together, the trash pile gets smaller and smaller.</p>

<h3>Where Does Town Trash Go?</h3>
<p>Every week, trucks collect bags from houses and schools. In many places, those bags go to a landfill, which is a giant hole where trash is buried. Landfills fill up, and buried food can make gases that warm the planet. A zero waste town tries to send almost nothing there.</p>
<ul>
<li><strong>Landfill:</strong> a huge place in the ground where trash is buried and stays for a very long time</li>
<li><strong>Recycling:</strong> turning used things like cans and paper into new things</li>
<li><strong>Compost:</strong> rich soil made when food scraps and leaves slowly break down</li>
<li><strong>Reuse:</strong> using something again instead of throwing it away</li>
<li><strong>Zero waste:</strong> a goal where a family or town sends almost nothing to the landfill</li>
</ul>

<h3>Helpers Everywhere</h3>
<p>In a zero waste town, everyone has a job. Families sort their bins. Schools collect lunch scraps for compost. Shops let you bring your own bags and jars. Town leaders set up the trucks and the special places where recycling and compost go. Some towns even have a swap shop where people leave toys and clothes they no longer need, and others take them home for free!</p>

<h3>Things You Can Do</h3>
<ol>
<li>Learn which bin is for recycling, which is for compost and which is for trash.</li>
<li>Bring a lunch box and a water bottle you can use again.</li>
<li>Give outgrown toys and clothes to friends or a swap shop.</li>
<li>Ask your class to start a compost bucket for fruit peels.</li>
</ol>

<h3>Think About It</h3>
<p>Pip the Raccoon used to find lots of yummy scraps in the town trash. Now the scraps go to compost, so Pip finds them in the garden instead! What could your street or school do together to make the trash truck's job a little lighter?</p>
`,
        MIDDLE_SCHOOL: `
<h2>How Communities Work Toward Zero Waste</h2>
<p>A zero waste community is a town, city or neighborhood that sets a goal to send as little as possible to landfills and incinerators. It does not mean literally zero trash. It means changing how a whole place buys, uses and handles materials, so that most things are reduced, reused, recycled or composted. Communities around the world, from tiny mountain villages to big cities, have taken on this goal.</p>

<h3>Why a Community Approach?</h3>
<p>One family can cut its own waste, but many decisions are made at the community level. The town decides what bins people get, what the trucks collect, whether there is a compost site and what rules shops must follow. When these systems make the right choice easy, everyone wastes less without having to try so hard.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Diversion:</strong> keeping waste out of the landfill by recycling, composting or reusing it</li>
<li><strong>Source separation:</strong> sorting waste into different bins right where it is created, such as at home</li>
<li><strong>Organics:</strong> food scraps and yard waste that can be turned into compost</li>
<li><strong>Waste hierarchy:</strong> a ranking that puts preventing waste first and landfilling last</li>
<li><strong>Repair cafe:</strong> a community event where volunteers help people fix broken items for free</li>
<li><strong>Contamination:</strong> the wrong items ending up in a recycling or compost bin and spoiling the batch</li>
</ul>

<h3>Famous Examples</h3>
<p>Kamikatsu, a small town in Japan, became well known for asking residents to sort their waste into dozens of categories and for running a shop where people leave and take reusable goods. San Francisco in the United States became known for requiring homes and businesses to separate recycling and compost, with three color-coded bins. These places show that both small and large communities can make big changes.</p>

<h3>Tools Communities Use</h3>
<table>
<thead><tr><th>Tool</th><th>How it helps</th></tr></thead>
<tbody>
<tr><td>Three-bin collection</td><td>Makes recycling and composting as easy as throwing away trash</td></tr>
<tr><td>Compost program</td><td>Turns food scraps into soil instead of landfill gas</td></tr>
<tr><td>Swap shops and reuse centers</td><td>Give usable items a second home</td></tr>
<tr><td>Repair cafes</td><td>Keep electronics, clothes and bikes in use longer</td></tr>
<tr><td>Education campaigns</td><td>Teach people what goes in each bin</td></tr>
</tbody>
</table>

<h3>Why It Matters</h3>
<p>Less landfill waste means less pollution, less land used for dumps and less methane, a strong greenhouse gas made when food rots without air. Zero waste programs can also create local jobs in repair, sorting and composting. You can help by learning your local sorting rules, asking your school about composting, and joining or starting a swap event.</p>
`,
        HIGH_SCHOOL: `
<h2>Zero Waste Cities: Strategy and Behavior Change</h2>
<p>When a city declares a zero waste goal, it is committing to redesign the systems that move materials through its streets, homes and businesses. Success depends on infrastructure, rules, pricing and, above all, the daily habits of thousands of people. This lesson looks at the main strategies cities use and why some work better than others.</p>

<h3>The Building Blocks of a Zero Waste Plan</h3>
<ul>
<li><strong>Pay-as-you-throw:</strong> a pricing system where households pay more for putting out more trash, while recycling and compost cost less or nothing</li>
<li><strong>Mandatory separation:</strong> a rule requiring residents and businesses to sort recyclables and organics from trash</li>
<li><strong>Organics collection:</strong> curbside pickup of food scraps and yard waste for composting or digestion</li>
<li><strong>Disposal ban:</strong> a rule that forbids sending certain materials, such as cardboard or food, to landfill</li>
<li><strong>Reuse infrastructure:</strong> facilities like reuse centers, refill stations and repair cafes that keep products in use</li>
<li><strong>Diversion rate:</strong> the share of discarded material kept out of landfill and incineration</li>
</ul>

<h3>Why Behavior Change Is the Hard Part</h3>
<p>Even the best bins fail if people do not use them correctly. Research on recycling behavior points to a few reliable drivers: convenience, clear information, social norms and fair price signals. People recycle more when bins are close by and labeled with pictures, when neighbors visibly participate, and when trash costs more than recycling. Confusing rules lead to contamination, which can spoil whole truckloads.</p>

<h3>Comparing Strategies</h3>
<table>
<thead><tr><th>Strategy</th><th>Strength</th><th>Trade-off</th></tr></thead>
<tbody>
<tr><td>Pay-as-you-throw</td><td>Strong incentive to reduce trash</td><td>Can encourage illegal dumping if enforcement is weak; may burden low-income households</td></tr>
<tr><td>Mandatory separation</td><td>Raises participation quickly</td><td>Needs outreach and enforcement staff</td></tr>
<tr><td>Organics collection</td><td>Targets the heaviest, most polluting part of trash</td><td>Requires composting capacity and odor control</td></tr>
<tr><td>Education campaigns</td><td>Cheap and builds support</td><td>Effects fade without convenient infrastructure</td></tr>
<tr><td>Single-use item bans</td><td>Removes hard-to-recycle items</td><td>Substitutes may have their own impacts</td></tr>
</tbody>
</table>

<h3>Beyond Recycling</h3>
<p>Recycling alone cannot deliver zero waste because some products are not designed to be recycled. Leading cities also work upstream: buying reusable goods for city offices, supporting refill and repair businesses, and pushing manufacturers to take back products. Community gardens use local compost, and libraries lend tools and kitchen gear. These moves reduce waste before it exists.</p>

<h3>Getting Involved</h3>
<ol>
<li>Audit your school's waste: sort a day's trash and find the biggest category.</li>
<li>Propose a fix that targets that category, such as lunch composting or a bottle refill station.</li>
<li>Measure before and after to show results to school leaders.</li>
<li>Share the results so other classes or schools can copy the idea.</li>
</ol>
`,
        UNDERGRADUATE: `
<h2>Analyzing Municipal Zero Waste Systems</h2>
<p>Municipal solid waste systems are networks of collection routes, transfer stations, sorting facilities, composting sites and disposal sites, governed by contracts, ordinances and budgets. Analyzing a zero waste program means asking what is in the waste stream, where it goes, what each pathway costs, and which interventions change those flows most efficiently. This lesson introduces the core metrics and an applied planning method.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Waste characterization:</strong> a study that samples and sorts waste to measure the share of each material category in the stream</li>
<li><strong>Generation rate:</strong> the amount of waste produced per person or per household over a set period</li>
<li><strong>Capture rate:</strong> the share of a recyclable or compostable material that is actually collected in the right stream</li>
<li><strong>Residual waste:</strong> the material left over after recycling and composting that still requires disposal</li>
<li><strong>Material recovery facility:</strong> a plant that sorts mixed recyclables into marketable commodity bales</li>
<li><strong>Avoided disposal cost:</strong> the landfill or incineration fees a city saves for each tonne diverted</li>
</ul>

<h3>Why Diversion Rate Is Not Enough</h3>
<p>Diversion rate is the most commonly reported metric, but it can mislead. It rises if a city starts counting construction debris or uses residue as landfill cover, even when household behavior has not changed. It also says nothing about prevention: a city that halves its waste generation might see its diversion rate fall. Analysts therefore pair diversion with per capita generation, per capita residual waste and contamination rates. Residual waste per person is often the clearest indicator of zero waste progress because it captures both prevention and recovery.</p>

<h3>Where the Leverage Is</h3>
<p>Characterization studies in many cities find that organics, mostly food and yard waste, make up a large share of residual waste, often the single biggest category. Paper and packaging come next. This pattern explains why organics collection and packaging policy are usually the highest-impact steps after basic recycling.</p>
<table>
<thead><tr><th>Intervention</th><th>Main metric affected</th><th>Typical cost driver</th></tr></thead>
<tbody>
<tr><td>Organics collection</td><td>Residual waste, methane emissions</td><td>Extra collection routes and processing capacity</td></tr>
<tr><td>Pay-as-you-throw</td><td>Generation rate and capture rate</td><td>Billing systems, container tracking, enforcement</td></tr>
<tr><td>Recycling cart upgrade</td><td>Capture rate</td><td>Carts and sorting facility upgrades</td></tr>
<tr><td>Contamination outreach</td><td>Contamination rate, bale value</td><td>Staff for cart tagging and feedback</td></tr>
<tr><td>Reuse and repair support</td><td>Generation rate</td><td>Grants, space and staff</td></tr>
</tbody>
</table>

<h3>Quantitative Reasoning</h3>
<p>Comparing options requires a consistent unit, such as cost per tonne diverted or emissions avoided per tonne. Because collection is usually the largest cost in the system, adding a new stream is cheapest when trash collection frequency can be reduced at the same time. For example, weekly organics with every-other-week trash can roughly hold truck costs steady while shifting tonnage.</p>

<h3>Applied Method: Building a Zero Waste Plan</h3>
<ol>
<li>Run a waste characterization study for residential and commercial streams.</li>
<li>Set baseline metrics: generation, residual waste per person, capture and contamination rates.</li>
<li>Rank material categories by tonnage, environmental impact and feasibility.</li>
<li>Match interventions to each priority category and estimate cost per tonne.</li>
<li>Pilot, monitor and repeat characterization every few years to track change.</li>
</ol>
`,
        GRADUATE: `
<h2>Zero Waste Policy, Informal Workers and Just Transitions</h2>
<p>Zero waste is as much a governance project as a technical one. Municipal plans must reconcile contracts with private haulers and disposal operators, budgets built on tipping fees, the livelihoods of informal waste workers, and the uneven siting of waste facilities. This lesson examines the policy instruments available to cities, the role of informal recyclers, and how to evaluate whether a transition is fair as well as effective.</p>

<h3>Policy Instruments at the Municipal Level</h3>
<ul>
<li><strong>Flow control:</strong> municipal authority to direct where collected waste is taken, which shapes facility finance and competition</li>
<li><strong>Put-or-pay contract:</strong> an agreement requiring a city to deliver a minimum tonnage to a facility or pay for the shortfall</li>
<li><strong>Green procurement:</strong> using public purchasing to favor reusable, repairable and recycled-content products</li>
<li><strong>Informal sector:</strong> waste pickers and small traders who collect and sell recyclables outside formal contracts</li>
<li><strong>Just transition:</strong> a change in an economic system that protects the livelihoods and rights of affected workers and communities</li>
<li><strong>Environmental justice:</strong> the principle that pollution burdens and environmental benefits should not fall unfairly on marginalized groups</li>
</ul>

<h3>Contracts and Lock-in</h3>
<p>Long-term disposal contracts with minimum tonnage guarantees can penalize a city for succeeding at waste reduction. Similarly, hauler contracts paid per tonne collected reward volume rather than diversion. Cities pursuing zero waste increasingly redesign contracts around performance: payments tied to contamination rates, diversion targets or service quality, and shorter terms that preserve flexibility.</p>

<h3>Integrating Informal Waste Workers</h3>
<p>In many cities of the Global South, informal waste pickers recover a large share of recyclables, often at little or no cost to the municipality and under hazardous conditions. Modernization programs that introduce mechanized collection or incineration can displace them overnight. Integration approaches include recognizing cooperatives as service providers, paying for collection services, granting access to sorting spaces, and providing protective equipment and social protection. Organized waste picker movements have argued that integration should be designed with workers, not for them.</p>
<table>
<thead><tr><th>Approach</th><th>Benefit</th><th>Risk</th></tr></thead>
<tbody>
<tr><td>Contracting cooperatives for door-to-door collection</td><td>Stable income, better source separation</td><td>Payments may be delayed or set below cost</td></tr>
<tr><td>Licensing and identification cards</td><td>Legal recognition and access to waste</td><td>Can exclude the most vulnerable if requirements are strict</td></tr>
<tr><td>Inclusion in EPR systems</td><td>Producer funding reaches collectors</td><td>Formal recyclers may capture most of the value</td></tr>
<tr><td>Privatized mechanized collection</td><td>Uniform coverage</td><td>Displacement and loss of livelihoods</td></tr>
</tbody>
</table>

<h3>Equity in High-Income Contexts</h3>
<p>Equity concerns are not limited to informal economies. Pay-as-you-throw can be regressive without discounts; multifamily buildings often have poorer recycling access than detached homes; and landfills, transfer stations and incinerators have historically been sited near low-income communities and communities of color. A zero waste plan should map who receives services and who hosts facilities.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Effectiveness: change in residual waste per person and in upstream generation.</li>
<li>Cost and fiscal stability: how budgets adapt when tipping fee revenue falls.</li>
<li>Labor: number and quality of jobs, including informal workers' incomes and safety.</li>
<li>Distribution: access to services and siting of burdens across neighborhoods.</li>
<li>Participation: whether residents and workers shaped the plan and its monitoring.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: Urban Metabolism, Waste Governance and Social Practice</h2>
<p>Doctoral research on zero waste communities sits at the intersection of industrial ecology, political ecology and the sociology of everyday life. Three bodies of work dominate: quantitative accounts of material flows through cities, analyses of how waste is governed and by whom, and theories of how routine practices change. Each offers tools and blind spots, and the most productive research often combines them.</p>

<h3>Urban Metabolism</h3>
<ul>
<li><strong>Urban metabolism:</strong> the study of material and energy flows into, within and out of a city, by analogy with the metabolism of an organism</li>
<li><strong>Material flow analysis:</strong> a mass-balance method that traces quantities of materials through processes and stocks in a defined system</li>
<li><strong>In-use stock:</strong> materials accumulated in buildings, infrastructure and durable goods that may become future waste or resources</li>
<li><strong>Consumption-based accounting:</strong> attributing upstream impacts of imported goods to the place where they are consumed</li>
<li><strong>Socio-technical regime:</strong> the stable configuration of technologies, rules, markets and practices that shapes how a system operates</li>
<li><strong>Social practice theory:</strong> an approach that studies routines as combinations of materials, competences and meanings rather than individual choices</li>
</ul>
<p>Urban metabolism studies reveal that household waste is a small fraction of a city's total material throughput, much of which is construction material and imported goods with impacts elsewhere. This raises a boundary question: a city can reach high diversion while its consumption-based material footprint grows. Researchers debate whether zero waste targets should be framed around territorial waste, consumption footprints or in-use stocks.</p>

<h3>Waste Governance</h3>
<p>Political ecology approaches treat waste as a site of power: who defines something as waste, who profits from managing it, and who bears its burdens. Work in this tradition examines the privatization of municipal services, the rise of global scrap trade, and the knowledge claims of waste pickers who contest official definitions of value. Governance scholars analyze polycentric arrangements in which municipalities, producers, cooperatives and residents share authority, asking when such arrangements improve outcomes and when they diffuse responsibility.</p>

<h3>Social Practice Change</h3>
<p>Behavioral economics treats sorting and consumption as individual decisions responsive to prices and nudges. Practice theory argues that this misses how routines are anchored in kitchens, shopping infrastructures, time pressures and shared meanings of cleanliness and convenience. From this view, interventions succeed when they reconfigure the elements of a practice, for example by changing bin design, collection timing and social norms together.</p>
<table>
<thead><tr><th>Lens</th><th>Unit of analysis</th><th>Typical method</th><th>Blind spot</th></tr></thead>
<tbody>
<tr><td>Urban metabolism</td><td>Material flows and stocks</td><td>Material flow analysis, input-output models</td><td>Agency, power and meaning</td></tr>
<tr><td>Behavioral economics</td><td>Individual decisions</td><td>Field experiments, surveys</td><td>Infrastructure and routine</td></tr>
<tr><td>Social practice theory</td><td>Shared practices</td><td>Ethnography, diaries, interviews</td><td>Quantification and scaling</td></tr>
<tr><td>Political ecology</td><td>Power relations</td><td>Case studies, historical analysis</td><td>Generalizable prediction</td></tr>
</tbody>
</table>

<h3>Contested Questions</h3>
<p>Is zero waste a meaningful target or a rhetorical device that obscures trade-offs? Do diversion metrics systematically overstate progress? Can community-led initiatives scale without losing the participatory qualities that make them work? How should informal recovery be counted in official statistics, and does counting it change policy? These questions remain open, partly because data are fragmented and definitions vary between jurisdictions.</p>

<h3>Methodological Challenges</h3>
<p>Waste data suffer from inconsistent categories, missing commercial streams and limited time series. Mixed methods designs that link material flow accounts with qualitative study of practices are promising but demanding. Attribution is difficult: when residual waste falls, separating the effect of a policy from economic cycles, packaging lightweighting or demographic change requires careful quasi-experimental design.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Linking territorial waste metrics with consumption-based material footprints at the city scale.</li>
<li>Comparative studies of informal sector integration and its effect on livelihoods and recovery.</li>
<li>Longitudinal research on how sorting and reuse practices form, persist or decay.</li>
<li>Quasi-experimental evaluation of pay-as-you-throw, organics mandates and contract redesign.</li>
<li>Governance analysis of how producer responsibility interacts with municipal zero waste plans.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'zwcommq1',
      question: {
        ELEMENTARY: 'How do towns make less trash?',
        MIDDLE_SCHOOL: 'Which two places are well known for their zero waste efforts?',
        HIGH_SCHOOL: 'What is pay-as-you-throw?',
        UNDERGRADUATE: 'What is a waste characterization study?',
        GRADUATE: 'Why do many zero waste advocates call for integrating informal waste workers?',
        PHD: 'What does urban metabolism research study?',
      },
      options: {
        ELEMENTARY: ['Everyone works together to reuse, recycle and compost', 'Everyone buys more things', 'They hide trash under the streets', 'They stop collecting trash at all'],
        MIDDLE_SCHOOL: ['Kamikatsu in Japan and San Francisco in the United States', 'Only cities with no people', 'Only cities that burn everything', 'No place has ever tried'],
        HIGH_SCHOOL: ['Households pay more when they put out more trash', 'Trash collection is always free', 'People pay only for recycling', 'Everyone pays the same no matter what'],
        UNDERGRADUATE: ['Sampling and sorting waste to measure the share of each material', 'Describing the color of trash cans', 'Naming each landfill in a region', 'Counting the number of garbage trucks'],
        GRADUATE: ['They already recover valuable materials and deserve recognition, pay and safety', 'They slow down recycling', 'They should be replaced by machines overnight', 'They have no connection to waste systems'],
        PHD: ['Flows of materials and energy into, within and out of cities', 'What city residents eat for dinner', 'How fast buildings are painted', 'Only traffic patterns'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'When families, schools, shops and leaders all reuse, recycle and compost, very little trash goes to the landfill.',
        MIDDLE_SCHOOL: 'Kamikatsu asks residents to sort into dozens of categories, and San Francisco uses three color-coded bins with required sorting.',
        HIGH_SCHOOL: 'Pay-as-you-throw makes trash cost more than recycling or compost, giving people a reason to reduce it.',
        UNDERGRADUATE: 'Characterization tells planners which materials make up the waste stream so they can target the biggest categories.',
        GRADUATE: 'Informal workers often recover a large share of recyclables; integration protects their livelihoods and improves the system.',
        PHD: 'Urban metabolism traces material and energy flows through a city much like nutrients through an organism.',
      },
    },
    {
      id: 'zwcommq2',
      question: {
        ELEMENTARY: 'What is compost?',
        MIDDLE_SCHOOL: 'What does "diversion" mean in a zero waste community?',
        HIGH_SCHOOL: 'Why can confusing recycling rules cause problems?',
        UNDERGRADUATE: 'Why is residual waste per person often a better indicator than diversion rate?',
        GRADUATE: 'Why can a put-or-pay disposal contract work against zero waste goals?',
        PHD: 'What is a key boundary problem raised by urban metabolism studies?',
      },
      options: {
        ELEMENTARY: ['A kind of plastic toy', 'Rich soil made from food scraps and leaves', 'A shiny metal can', 'A type of garbage truck'],
        MIDDLE_SCHOOL: ['Building a bigger landfill', 'Keeping waste out of the landfill by reusing, recycling or composting', 'Driving trucks a different way', 'Mixing all waste together'],
        HIGH_SCHOOL: ['They make bins look nicer', 'They lead to contamination that can spoil whole truckloads', 'They make people recycle more of everything', 'They lower the cost of collection'],
        UNDERGRADUATE: ['It is easier to spell', 'It captures both waste prevention and recovery, unlike diversion rate', 'It ignores food waste', 'It always rises when waste increases'],
        GRADUATE: ['It forbids recycling entirely', 'The city must pay for a minimum tonnage even if waste falls', 'It lowers disposal costs as waste drops', 'It only applies to compost'],
        PHD: ['Cities have no material flows', 'A city can reach high diversion while its consumption-based material footprint grows', 'Household waste is the largest material flow in every city', 'Imports never create impacts elsewhere'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Compost is dark, rich soil that forms when food scraps and leaves break down. Plants love it!',
        MIDDLE_SCHOOL: 'Diversion means sending materials somewhere useful instead of to the landfill.',
        HIGH_SCHOOL: 'When people are unsure, the wrong items end up in bins, and contamination can make a load unrecyclable.',
        UNDERGRADUATE: 'Diversion rate can fall when prevention succeeds; residual waste per person rewards both reducing and recovering.',
        GRADUATE: 'Minimum tonnage guarantees penalize the city for reducing waste, creating lock-in.',
        PHD: 'Territorial waste metrics can improve while upstream impacts of imported consumption rise.',
      },
    },
    {
      id: 'zwcommq3',
      question: {
        ELEMENTARY: 'What can you do with toys you have outgrown?',
        MIDDLE_SCHOOL: 'What happens at a repair cafe?',
        HIGH_SCHOOL: 'What is a possible downside of pay-as-you-throw?',
        UNDERGRADUATE: 'Which category is often the largest part of residual municipal waste?',
        GRADUATE: 'Which is an equity concern for zero waste programs in high-income cities?',
        PHD: 'How does social practice theory explain waste behavior?',
      },
      options: {
        ELEMENTARY: ['Throw them in the trash', 'Hide them in the closet forever', 'Give them to friends or a swap shop', 'Bury them in the yard'],
        MIDDLE_SCHOOL: ['People buy new electronics', 'Trash is burned for energy', 'Volunteers help people fix broken items for free', 'Recycling is sorted by machines'],
        HIGH_SCHOOL: ['It makes recycling harder to find', 'It removes all trash bins', 'It can encourage illegal dumping and burden low-income households', 'It makes trash free'],
        UNDERGRADUATE: ['Glass bottles', 'Batteries', 'Organics such as food and yard waste', 'Aluminum cans'],
        GRADUATE: ['All neighborhoods have equal access and burdens', 'Equity only matters in rural areas', 'Facilities such as landfills and incinerators have often been sited near marginalized communities', 'Multifamily buildings always have better recycling access'],
        PHD: ['As purely individual price-driven choices', 'As random acts with no pattern', 'As routines built from materials, competences and shared meanings', 'As something that never changes'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Giving toys to someone else means they get played with again instead of becoming trash.',
        MIDDLE_SCHOOL: 'Repair cafes keep things in use longer by helping people fix them.',
        HIGH_SCHOOL: 'Without enforcement and discounts, some people may dump trash illegally or struggle to pay.',
        UNDERGRADUATE: 'Characterization studies in many cities find organics are often the single biggest residual category.',
        GRADUATE: 'Mapping who hosts waste facilities and who receives services is essential to a fair plan.',
        PHD: 'Practice theory looks at routines anchored in infrastructure and meaning, not just individual decisions.',
      },
    },
    {
      id: 'zwcommq4',
      question: {
        ELEMENTARY: 'What is a landfill?',
        MIDDLE_SCHOOL: 'Why is rotting food in a landfill a problem?',
        HIGH_SCHOOL: 'Why can recycling alone not deliver zero waste?',
        UNDERGRADUATE: 'How can a city add organics collection without large increases in truck costs?',
        GRADUATE: 'What is one way to redesign hauler contracts for zero waste?',
        PHD: 'Why is evaluating zero waste policies with quasi-experimental methods difficult?',
      },
      options: {
        ELEMENTARY: ['A park for playing', 'A kind of compost bin', 'A recycling factory', 'A huge place where trash is buried'],
        MIDDLE_SCHOOL: ['It turns into new plastic', 'It makes the landfill smell nice', 'It cleans the air', 'It makes methane, a strong greenhouse gas'],
        HIGH_SCHOOL: ['Recycling is always banned', 'Nothing can ever be recycled', 'Recycling trucks are too slow', 'Some products are not designed to be recycled, so upstream changes are needed'],
        UNDERGRADUATE: ['By collecting trash every day', 'By banning compost', 'By building a new landfill', 'By reducing trash collection frequency at the same time'],
        GRADUATE: ['Pay haulers more for every tonne of trash', 'Lengthen contracts to fifty years', 'Remove all service standards', 'Tie payments to diversion, contamination or service quality'],
        PHD: ['Waste data are always perfect', 'There are no policies to study', 'Results never vary', 'Effects must be separated from economic cycles, packaging changes and demographic shifts'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'A landfill is a giant hole where trash is buried and stays for a very long time.',
        MIDDLE_SCHOOL: 'Food rotting without air releases methane, which warms the planet strongly.',
        HIGH_SCHOOL: 'Cities also need reuse, repair, green purchasing and producer take-back to stop waste before it exists.',
        UNDERGRADUATE: 'Shifting trash to every other week while adding weekly organics can keep truck costs roughly steady.',
        GRADUATE: 'Performance-based contracts reward the outcomes a zero waste plan wants rather than tonnage.',
        PHD: 'Many factors change waste at once, so isolating a policy effect requires careful design and good data.',
      },
    },
    {
      id: 'zwcommq5',
      question: {
        ELEMENTARY: 'What can your class do to help make less trash?',
        MIDDLE_SCHOOL: 'What is contamination in recycling?',
        HIGH_SCHOOL: 'What is a good first step for a school waste project?',
        UNDERGRADUATE: 'Why can diversion rate rise even if household behavior has not changed?',
        GRADUATE: 'What is a just transition in the context of zero waste?',
        PHD: 'What does a socio-technical regime refer to?',
      },
      options: {
        ELEMENTARY: ['Start a compost bucket for fruit peels', 'Use a new plastic cup every day', 'Throw away every paper', 'Mix all the bins together'],
        MIDDLE_SCHOOL: ['Wrong items in a recycling or compost bin that spoil the batch', 'Clean cans in the recycling bin', 'Leaves in a compost bin', 'Paper in a paper bin'],
        HIGH_SCHOOL: ['Audit the school waste to find the biggest category', 'Buy more trash bins without looking', 'Ban all lunches', 'Stop measuring anything'],
        UNDERGRADUATE: ['The city may start counting new streams such as construction debris', 'Diversion rate can never change', 'Households always recycle the same amount', 'Diversion rate only measures landfill size'],
        GRADUATE: ['A change that protects the livelihoods and rights of affected workers and communities', 'A quick switch with no planning', 'A move that ignores workers', 'A transition paid for only by waste pickers'],
        PHD: ['The stable mix of technologies, rules, markets and practices shaping how a system works', 'A single recycling machine', 'A diet plan for city residents', 'A type of landfill liner'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'A compost bucket turns fruit peels into soil instead of trash!',
        MIDDLE_SCHOOL: 'Contamination happens when the wrong things go in a bin, which can ruin the whole load.',
        HIGH_SCHOOL: 'Knowing what makes up most of the waste helps you pick the fix that will matter most.',
        UNDERGRADUATE: 'Changes in what is counted can raise diversion rate without any real change in behavior.',
        GRADUATE: 'A just transition makes sure workers, including informal ones, are not left behind by new systems.',
        PHD: 'Regimes are stable configurations that resist change, which is why zero waste transitions are hard.',
      },
    },
  ],
}

export default expansion
