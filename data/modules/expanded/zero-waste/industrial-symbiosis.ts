import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'zero-waste',
  moduleKey: 'industrial-symbiosis',
  lessons: [
    {
      id: 'zw-symb-1',
      title: 'Sharing Waste Between Factories',
      content: {
        ELEMENTARY: `
<h2>When Factories Become Friends</h2>
<p>In a forest, nothing goes to waste. Fallen leaves feed the soil, the soil feeds the trees, and the trees make new leaves. Some clever factories copy this idea. They become friends and share their leftovers, so one factory's waste becomes another factory's useful stuff. Grown-ups call this <em>industrial symbiosis</em>. It is a big name for a friendly idea!</p>

<h3>What Is a Leftover?</h3>
<p>When a factory makes something, there are often bits left over. A bakery might have extra bread crusts. A sawmill has piles of sawdust. A power plant makes lots of warm water and heat. If nobody uses these leftovers, they might be thrown away. But many leftovers are still useful to someone else!</p>
<ul>
<li><strong>Factory:</strong> a big building where people and machines make things</li>
<li><strong>Leftover:</strong> something extra that is not needed after a job is done</li>
<li><strong>Symbiosis:</strong> when two living things help each other to live and grow</li>
</ul>

<h3>Sharing Leftovers</h3>
<p>Here are some ways factories can help each other:</p>
<ul>
<li><strong>Sawdust:</strong> tiny bits of wood from cutting logs that can be pressed into boards or used as animal bedding</li>
<li><strong>Spare heat:</strong> warmth from a factory that can be piped to heat homes and greenhouses</li>
<li><strong>Food scraps:</strong> leftover bits of food that farms can feed to animals or turn into compost</li>
</ul>
<p>When factories share, they save money and keep waste out of the trash. It is like a team where everyone passes the ball!</p>

<h3>Nature Did It First</h3>
<p>In nature, bees and flowers help each other. The bee gets sweet nectar, and the flower gets help spreading its pollen. Factories that share leftovers are doing the same kind of teamwork. That is why we borrow the word symbiosis from nature.</p>

<h3>You Can Try It Too</h3>
<ol>
<li>Use the back of paper for drawing before recycling it.</li>
<li>Give vegetable peels to a compost bin so they can feed the garden.</li>
<li>Save empty jars and boxes for craft projects at school.</li>
<li>Ask your class to share leftover supplies with another class.</li>
</ol>

<h3>Think About It</h3>
<p>What leftovers does your home or school make? Who could use them? When you find a way to share, you are thinking just like an industrial symbiosis team!</p>
`,
        MIDDLE_SCHOOL: `
<h2>Industrial Symbiosis: Turning Waste Into Value</h2>
<p>Every factory takes in materials, water and energy and sends out products. But it also sends out things it does not want: scraps, wastewater, heat and gases. Usually these by-products cost money to throw away. <em>Industrial symbiosis</em> is when nearby companies trade these by-products so that one company's waste becomes another company's raw material. Both sides can win, and the environment wins too.</p>

<h3>Why Companies Exchange Waste</h3>
<ul>
<li><strong>Saving money:</strong> companies pay less to dispose of waste and less to buy new materials.</li>
<li><strong>Using fewer resources:</strong> fewer new materials have to be mined, pumped or grown.</li>
<li><strong>Less pollution:</strong> less waste goes to landfills, and less heat and wastewater are dumped.</li>
<li><strong>New business:</strong> sometimes a whole new company starts because a useful by-product is available.</li>
</ul>

<h3>What Can Be Shared?</h3>
<table>
<thead><tr><th>By-product</th><th>Who makes it</th><th>Who can use it</th></tr></thead>
<tbody>
<tr><td>Waste heat and steam</td><td>Power plants, factories</td><td>Greenhouses, fish farms, homes</td></tr>
<tr><td>Brewery grain</td><td>Breweries</td><td>Farms, as animal feed</td></tr>
<tr><td>Wood chips and sawdust</td><td>Sawmills, furniture makers</td><td>Board makers, heating plants</td></tr>
<tr><td>Cleaned wastewater</td><td>Treatment plants</td><td>Factories that need cooling water</td></tr>
<tr><td>Ash and slag</td><td>Furnaces, steelworks</td><td>Cement and road builders</td></tr>
</tbody>
</table>

<h3>A Famous Example</h3>
<p>One of the best-known examples is in the town of Kalundborg in Denmark. Over many years, a power station, an oil refinery, a pharmaceutical company, a plasterboard maker and the town itself started trading steam, water, gas and by-products with each other. Nobody planned the whole system at the start. It grew step by step as managers noticed that their neighbors could use what they had left over.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Industrial symbiosis:</strong> companies working together to exchange materials, energy, water and by-products</li>
<li><strong>By-product:</strong> a useful material made while producing something else</li>
<li><strong>Raw material:</strong> a basic material used to make a product, like wood, metal or sand</li>
<li><strong>Waste heat:</strong> heat made by machines or factories that would usually escape into the air or water</li>
<li><strong>Landfill:</strong> a large site where waste is buried in the ground</li>
</ul>

<h3>Why It Is Not Always Easy</h3>
<p>Trading waste needs trust. A company has to be sure its partner will keep supplying the by-product. The material must be clean enough to use, and moving it can be expensive if the companies are far apart. That is why symbiosis works best when companies are close together and talk to each other often.</p>
`,
        HIGH_SCHOOL: `
<h2>Industrial Symbiosis and Eco-Industrial Parks</h2>
<p>Traditional industry follows a straight line: take resources, make products, dispose of waste. <em>Industrial symbiosis</em> bends that line into loops by connecting separate companies so that the outputs of one become the inputs of another. These exchanges can involve materials, energy, water and even shared services. When many companies cluster to make such exchanges, the area may be called an <em>eco-industrial park</em>. Symbiosis is a practical application of the wider field of industrial ecology, focused on relationships between firms.</p>

<h3>Three Kinds of Exchange</h3>
<ul>
<li><strong>By-product exchange:</strong> one firm's leftover material, such as gypsum, ash or spent grain, becomes another firm's input</li>
<li><strong>Utility sharing:</strong> companies share infrastructure like steam networks, water treatment or energy supply</li>
<li><strong>Joint services:</strong> firms share services like waste collection, transport, training or emergency response</li>
<li><strong>Cascading:</strong> using energy or water several times in order of decreasing quality, such as high-temperature steam then low-temperature heating</li>
<li><strong>Eco-industrial park:</strong> an industrial area where companies are located and managed to exchange resources and share infrastructure</li>
<li><strong>Anchor tenant:</strong> a large facility, like a power plant or refinery, whose flows make many exchanges possible</li>
</ul>

<h3>Self-Organized or Planned?</h3>
<table>
<thead><tr><th>Approach</th><th>How it starts</th><th>Strengths</th><th>Weaknesses</th></tr></thead>
<tbody>
<tr><td>Self-organized</td><td>Companies discover exchanges on their own over time</td><td>Exchanges are economically sound and trusted</td><td>Slow and depends on chance contacts</td></tr>
<tr><td>Facilitated</td><td>An organization helps firms find and set up exchanges</td><td>Speeds up matching across a region</td><td>Needs ongoing funding</td></tr>
<tr><td>Planned park</td><td>Designers choose tenants and infrastructure from the start</td><td>Can build shared utilities in from day one</td><td>Hard to find tenants that fit together exactly</td></tr>
</tbody>
</table>

<h3>Benefits and Trade-offs</h3>
<p>Well-designed symbiosis can reduce landfill, cut the use of virgin materials and fuels, and lower costs. But it brings trade-offs. Companies become dependent on each other, so if one partner closes or changes its process, the others lose a supply or an outlet. Some by-products contain contaminants that must be checked carefully. And symbiosis can lock in polluting facilities: a city heated by a fossil-fuel plant's waste heat may find it harder to close that plant.</p>

<h3>Real-World Applications</h3>
<ol>
<li><strong>District heating:</strong> waste heat from industry warms homes and buildings through networks of insulated pipes.</li>
<li><strong>Construction materials:</strong> fly ash and steel slag can partly replace cement or gravel in concrete and roads.</li>
<li><strong>Agriculture:</strong> food industry by-products become animal feed or fertilizer.</li>
<li><strong>Water reuse:</strong> treated wastewater from one site supplies cooling or process water to another.</li>
</ol>

<h3>What Makes It Work</h3>
<p>Successful symbiosis usually depends on companies being close together, on good communication and trust between managers, on clear rules about whether a by-product counts as waste, and sometimes on an organization that helps match partners. Technology matters, but relationships often matter more.</p>
`,
        UNDERGRADUATE: `
<h2>Developing Industrial Symbiosis: Models, Economics and Barriers</h2>
<p>Industrial symbiosis (IS) refers to collective approaches in which traditionally separate firms exchange materials, energy, water and services to gain competitive and environmental advantage. Studies of IS ask three linked questions: how exchanges come into being, how they create and share value, and what prevents promising exchanges from happening. This lesson examines development pathways, business models and implementation barriers.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Symbiosis facilitator:</strong> an organization that identifies possible exchanges, connects firms and helps overcome barriers between them</li>
<li><strong>Synergy:</strong> a specific exchange or shared resource between two or more firms</li>
<li><strong>End-of-waste status:</strong> a legal determination that a processed material is no longer waste and can be traded as a product</li>
<li><strong>Transaction costs:</strong> the costs of finding partners, negotiating contracts, testing materials and monitoring supply</li>
<li><strong>Asset specificity:</strong> investment that is valuable only within a particular relationship, such as a pipeline between two plants</li>
<li><strong>Proximity:</strong> closeness between firms, whether geographic, organizational or cognitive, that makes exchange easier</li>
</ul>

<h3>Development Pathways</h3>
<p>Research commonly distinguishes between symbiosis that emerges spontaneously, symbiosis that is uncovered and then extended, and symbiosis that is designed. Spontaneous exchanges arise when managers act on economic self-interest and local contacts. Facilitation programs speed up discovery by running matchmaking workshops, maintaining databases of available by-products and offering technical advice. Designed parks attempt to engineer complementary flows from the outset but often find that markets and technologies change faster than plans.</p>

<h3>The Economics of an Exchange</h3>
<p>An exchange makes economic sense when the combined savings of supplier and user exceed the costs of making it work. The supplier saves disposal fees and may earn revenue; the user avoids buying virgin inputs. Against this, the partners must pay for processing, transport, testing, contracts and any dedicated infrastructure. Heavy, low-value materials like ash or aggregates are viable only over short distances, while higher-value flows can travel further. Heat is especially distance-sensitive, because pipes are costly and heat losses grow with length.</p>
<table>
<thead><tr><th>Factor</th><th>Favors exchange</th><th>Hinders exchange</th></tr></thead>
<tbody>
<tr><td>Disposal costs</td><td>High landfill fees or taxes</td><td>Cheap disposal</td></tr>
<tr><td>Virgin material prices</td><td>High or volatile</td><td>Low and stable</td></tr>
<tr><td>Distance</td><td>Short, with existing infrastructure</td><td>Long, needing new pipes or trucking</td></tr>
<tr><td>Material quality</td><td>Consistent and well characterized</td><td>Variable or contaminated</td></tr>
<tr><td>Regulation</td><td>Clear rules for by-product use</td><td>Ambiguous waste classification and permits</td></tr>
</tbody>
</table>

<h3>Business Models</h3>
<ol>
<li><strong>Bilateral contract:</strong> two firms agree on price, volume and quality for a by-product.</li>
<li><strong>Shared utility company:</strong> partners jointly own a steam, water or energy system.</li>
<li><strong>Intermediary processor:</strong> a third firm collects, upgrades and resells by-products from several sources.</li>
<li><strong>Park management model:</strong> an operator runs shared infrastructure and services for tenants.</li>
</ol>

<h3>Implementation Barriers</h3>
<ul>
<li>Lack of information about what by-products exist nearby and who might use them.</li>
<li>Low trust and concern about sharing commercially sensitive process data.</li>
<li>Regulatory uncertainty over whether a by-product is legally a waste.</li>
<li>Mismatch in timing, volume or quality between supply and demand.</li>
<li>Dependence risk when a key partner might close or change its process.</li>
</ul>

<h3>Applied Checklist</h3>
<p>To screen a candidate exchange: list the by-product's quantity, composition and variability; identify potential users within a realistic transport radius; estimate the net saving after processing and logistics; check the regulatory status; and assess the environmental benefit compared with the current disposal route and the virgin material it replaces.</p>
`,
        GRADUATE: `
<h2>Policy, Facilitation and the Economic Geography of Symbiosis</h2>
<p>For policymakers, industrial symbiosis offers a way to reduce waste, emissions and resource dependence while supporting regional industry. Yet exchanges rarely appear at the scale their technical potential suggests. Graduate analysis focuses on the institutional conditions that enable symbiosis networks, the role of public and private facilitators, and how geography, industrial structure and regional policy shape what is possible.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Network facilitation:</strong> deliberate brokering of connections among firms to accelerate the discovery and implementation of exchanges</li>
<li><strong>Embeddedness:</strong> the degree to which economic exchanges depend on social relationships, trust and shared norms</li>
<li><strong>Agglomeration economies:</strong> benefits firms gain from locating near each other, such as shared suppliers, labor and knowledge</li>
<li><strong>Regional resource governance:</strong> coordination of material and energy flows at the scale of a city region or industrial cluster</li>
<li><strong>Policy mix:</strong> the combination of regulations, taxes, subsidies and information programs acting together on a problem</li>
<li><strong>Lock-in:</strong> a situation in which existing investments and relationships make it costly to change to better alternatives</li>
</ul>

<h3>What Enables Symbiosis Networks</h3>
<p>Studies repeatedly point to three enabling conditions. First, <em>trust</em>: firms must be willing to depend on partners and share information about their processes. Second, <em>information</em>: someone must know what flows exist and where they might be used. Third, <em>supportive policy</em>: regulations and prices must make reuse more attractive than disposal. Facilitators can address the first two directly, while public authorities control the third.</p>

<h3>Facilitation Models</h3>
<table>
<thead><tr><th>Model</th><th>Who leads</th><th>Strength</th><th>Risk</th></tr></thead>
<tbody>
<tr><td>National or regional program</td><td>Public agency or funded body</td><td>Broad reach and neutral broker role</td><td>Vulnerable to funding cuts</td></tr>
<tr><td>Park operator</td><td>Industrial park manager</td><td>Deep local knowledge and shared infrastructure</td><td>Limited to one site</td></tr>
<tr><td>Industry association</td><td>Sector body</td><td>Trust among members</td><td>May overlook cross-sector links</td></tr>
<tr><td>Digital matchmaking platform</td><td>Private or public provider</td><td>Low-cost discovery at scale</td><td>Data alone rarely builds trust</td></tr>
</tbody>
</table>

<h3>Policy Instruments</h3>
<ol>
<li><strong>Landfill and disposal taxes:</strong> raise the cost of the alternative, improving exchange economics.</li>
<li><strong>Clear by-product and end-of-waste rules:</strong> reduce legal uncertainty and permitting delays.</li>
<li><strong>Spatial and land-use planning:</strong> co-locate compatible industries and reserve corridors for pipes.</li>
<li><strong>Infrastructure finance:</strong> support shared heat, water or steam networks with long payback periods.</li>
<li><strong>Public procurement:</strong> create demand for products made with recovered materials.</li>
<li><strong>Data and reporting:</strong> require or encourage reporting of waste flows so facilitators can find opportunities.</li>
</ol>

<h3>Economic Geography</h3>
<p>Symbiosis is strongly shaped by place. Heavy industrial clusters, such as chemical complexes and port zones, have dense, diverse flows that favor exchange. Dispersed small and medium enterprises have smaller, more variable flows and less capacity to engage. Regional economic restructuring also matters: when a large anchor facility closes, dependent exchanges can collapse. Planners therefore weigh not only the immediate benefits of a synergy but also its resilience to industrial change and its compatibility with decarbonization.</p>

<h3>Equity and Local Impact</h3>
<p>Industrial zones are often located near lower-income communities that already bear pollution burdens. Symbiosis can reduce local pollution, but it can also extend the life of polluting plants or bring new waste-processing activities into the same neighborhoods. Credible programs involve local residents in decisions and track local environmental outcomes, not only regional totals.</p>

<h3>Evaluation Framework</h3>
<ul>
<li>Measure avoided disposal, avoided virgin inputs and net emissions against a clear baseline.</li>
<li>Assess additionality: would the exchange have happened without facilitation or policy support?</li>
<li>Examine resilience to partner closure and compatibility with long-term decarbonization.</li>
<li>Consider who bears local environmental and economic impacts.</li>
<li>Review institutional sustainability, including funding and governance of facilitators.</li>
</ul>
`,
        PHD: `
<h2>Research Frontiers: Network Dynamics and Optimization of Symbiosis</h2>
<p>Industrial symbiosis research has evolved from descriptive case studies of exemplary sites toward network science, simulation and optimization. Researchers now ask how symbiotic networks form and change, which structural properties make them resilient, how emergent behavior arises from local decisions, and how optimization tools can identify promising configurations without ignoring the social processes that determine whether exchanges actually happen.</p>

<h3>Analytical Concepts</h3>
<ul>
<li><strong>Emergent properties:</strong> system-level behaviors, such as resilience or vulnerability, that arise from interactions among firms rather than from any single firm</li>
<li><strong>Network topology:</strong> the pattern of connections among firms, including density, centrality and modularity</li>
<li><strong>Hub dependence:</strong> reliance of many exchanges on one highly connected actor, which raises vulnerability to its failure</li>
<li><strong>Superstructure optimization:</strong> a mathematical approach that enumerates all possible exchanges and selects the best subset under constraints</li>
<li><strong>Agent-based model:</strong> a simulation in which individual firms follow decision rules, producing network patterns over time</li>
<li><strong>Path dependence:</strong> the way early exchanges and investments constrain which later configurations are feasible</li>
</ul>

<h3>Network Dynamics</h3>
<p>Longitudinal studies of mature sites show networks growing incrementally, with new exchanges attaching to existing hubs, and occasionally contracting when partners close or processes change. This pattern resembles preferential attachment, but the analogy is imperfect: exchanges are constrained by physical compatibility, distance and regulation, not only by connectivity. Ecological network metrics, borrowed from food-web studies, have been used to compare industrial networks with natural ecosystems, but researchers debate whether such comparisons reveal causal principles or only descriptive similarities.</p>

<h3>Resilience and Vulnerability</h3>
<p>A network dominated by a single anchor tenant may be efficient but fragile: if the anchor closes, multiple exchanges fail together. Redundancy, diversity of partners and modular structure can improve resilience but may reduce efficiency. Decarbonization creates a particular challenge, because many classic synergies are built around fossil-fueled power plants and refineries whose closure is a policy goal. Research is exploring how networks can be reconfigured around renewable energy, hydrogen, biorefineries and carbon capture.</p>

<h3>Modeling Approaches</h3>
<table>
<thead><tr><th>Approach</th><th>Strength</th><th>Limitation</th></tr></thead>
<tbody>
<tr><td>Mathematical optimization</td><td>Identifies cost- or emissions-minimizing configurations</td><td>Assumes cooperation and full information that rarely exist</td></tr>
<tr><td>Agent-based modeling</td><td>Captures decentralized decisions, trust and learning</td><td>Behavioral parameters are hard to calibrate</td></tr>
<tr><td>Social network analysis</td><td>Describes structure and change over time</td><td>Explains less about why links form</td></tr>
<tr><td>Game theory</td><td>Analyzes how partners divide benefits and whether cooperation is stable</td><td>Simplified strategic settings</td></tr>
<tr><td>Life-cycle assessment of synergies</td><td>Quantifies environmental benefit relative to alternatives</td><td>Allocation of burdens between partners is contested</td></tr>
</tbody>
</table>

<h3>Contested Questions</h3>
<ol>
<li><strong>Allocation:</strong> how should environmental burdens and credits be divided between the firm supplying a by-product and the firm using it?</li>
<li><strong>Self-organization versus design:</strong> can symbiosis be engineered, or only nurtured through facilitation and institutional support?</li>
<li><strong>Scale:</strong> is symbiosis primarily local, or can regional and national networks capture comparable benefits?</li>
<li><strong>Environmental net benefit:</strong> do some synergies merely shift impacts, for example by legitimizing contaminated material in products?</li>
</ol>

<h3>Optimization Meets Social Process</h3>
<p>A recurring finding is a gap between technical potential identified by models and exchanges realized in practice. Closing that gap requires integrating optimization with social and institutional analysis: multi-agent formulations in which each firm maximizes its own objective, mechanisms for fair benefit sharing, and attention to trust and information asymmetry. Coupling such models with spatial data on waste flows is an active research area.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Longitudinal network datasets that capture the formation and dissolution of exchanges over decades.</li>
<li>Resilience metrics for symbiosis networks under industrial closure and decarbonization scenarios.</li>
<li>Methods for fair allocation of costs, benefits and environmental credits among partners.</li>
<li>Integration of agent-based and optimization models with geospatial waste-flow data.</li>
<li>Comparative studies of facilitation models and their long-term effectiveness.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'zwsymbq1',
      question: {
        ELEMENTARY: 'What is industrial symbiosis?',
        MIDDLE_SCHOOL: 'Why do companies exchange waste?',
        HIGH_SCHOOL: 'What is an eco-industrial park?',
        UNDERGRADUATE: 'What does a symbiosis facilitator do?',
        GRADUATE: 'Which three conditions repeatedly enable symbiosis networks?',
        PHD: 'What are emergent properties in a symbiosis network?',
      },
      options: {
        ELEMENTARY: ['Factories sharing leftovers so less is thrown away', 'Factories fighting over who is biggest', 'Factories working all alone', 'Factories making more trash'],
        MIDDLE_SCHOOL: ['To save money, use fewer resources and reduce pollution', 'Because the law forces every company to swap waste', 'To make more waste on purpose', 'Because waste is always worthless'],
        HIGH_SCHOOL: ['An industrial area where companies exchange resources and share infrastructure', 'A park for wild animals', 'A shopping mall', 'A factory that works alone'],
        UNDERGRADUATE: ['Identifies possible exchanges, connects firms and helps overcome barriers', 'Collects taxes from factories', 'Builds every factory in a region', 'Randomly assigns waste to companies'],
        GRADUATE: ['Trust, information and supportive policy', 'Only new technology', 'Only cheap land', 'Only government ownership'],
        PHD: ['System-level behaviors that arise from interactions among firms', 'The sum of each firm acting in isolation', 'Outcomes that are always fully predictable', 'Properties of a single machine'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'In industrial symbiosis, one factory leftovers become useful stuff for another factory.',
        MIDDLE_SCHOOL: 'Trading by-products cuts disposal costs, saves raw materials and keeps waste out of landfills.',
        HIGH_SCHOOL: 'Eco-industrial parks cluster companies so they can exchange materials, energy and water.',
        UNDERGRADUATE: 'Facilitators lower information and trust barriers so firms can find and set up exchanges.',
        GRADUATE: 'Trust, information about flows and policies that make reuse attractive are the core enablers.',
        PHD: 'Resilience and vulnerability emerge from the pattern of interactions, not from any single firm.',
      },
    },
    {
      id: 'zwsymbq2',
      question: {
        ELEMENTARY: 'What can spare heat from a factory be used for?',
        MIDDLE_SCHOOL: 'What is a by-product?',
        HIGH_SCHOOL: 'What is cascading in industrial symbiosis?',
        UNDERGRADUATE: 'What is end-of-waste status?',
        GRADUATE: 'Why can a disposal or landfill tax encourage symbiosis?',
        PHD: 'Why is hub dependence a concern for symbiosis networks?',
      },
      options: {
        ELEMENTARY: ['Making ice cubes', 'Heating homes and greenhouses', 'Building sandcastles', 'Painting pictures'],
        MIDDLE_SCHOOL: ['The main product a company sells', 'A useful material made while producing something else', 'A machine in a factory', 'A worker who moves boxes'],
        HIGH_SCHOOL: ['Throwing waste down a waterfall', 'Using energy or water several times in order of decreasing quality', 'Stacking products in tall piles', 'Buying only new materials'],
        UNDERGRADUATE: ['A tax on all products', 'A legal determination that a processed material is no longer waste', 'The final day a factory operates', 'A label meaning a product is broken'],
        GRADUATE: ['It makes landfills larger', 'It raises the cost of disposal, so reusing by-products becomes more attractive', 'It bans all industry', 'It lowers the price of virgin materials'],
        PHD: ['Hubs always make networks stronger', 'Many exchanges can fail together if one highly connected actor closes', 'Hubs cannot exist in industry', 'Hub dependence only affects small firms'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Warm water or steam from factories can be piped to keep homes and greenhouses warm.',
        MIDDLE_SCHOOL: 'By-products like sawdust or spent grain are made alongside the main product and can be useful.',
        HIGH_SCHOOL: 'Cascading uses high-quality energy first and lower-quality leftovers for less demanding jobs.',
        UNDERGRADUATE: 'Once a material has end-of-waste status it can be traded as a product, easing exchange.',
        GRADUATE: 'Making disposal costly improves the economics of finding another use for by-products.',
        PHD: 'When exchanges cluster around one anchor, its closure can cause several synergies to collapse together.',
      },
    },
    {
      id: 'zwsymbq3',
      question: {
        ELEMENTARY: 'Where did the word symbiosis come from?',
        MIDDLE_SCHOOL: 'How did the Kalundborg symbiosis grow?',
        HIGH_SCHOOL: 'What is a risk of companies depending on each other in symbiosis?',
        UNDERGRADUATE: 'Why are heavy, low-value by-products like ash usually exchanged only over short distances?',
        GRADUATE: 'What is lock-in?',
        PHD: 'What is the allocation question in symbiosis research?',
      },
      options: {
        ELEMENTARY: ['From a type of car', 'From a song', 'From nature, where living things help each other', 'From a computer game'],
        MIDDLE_SCHOOL: ['A government drew the whole plan on day one', 'It was built in a single week', 'Step by step, as managers found neighbors who could use their leftovers', 'It was copied from a textbook'],
        HIGH_SCHOOL: ['They will make too much money', 'Their workers will get confused', 'If one partner closes or changes its process, others lose a supply or outlet', 'Their buildings will shrink'],
        UNDERGRADUATE: ['They are illegal to move', 'They are invisible', 'Transport costs quickly exceed the value of the material', 'They evaporate in trucks'],
        GRADUATE: ['A security system on factory gates', 'A rule that bans all exchanges', 'When existing investments and relationships make it costly to change to better alternatives', 'A type of shipping container'],
        PHD: ['Deciding which firm gets the biggest building', 'Choosing where to put parking lots', 'How to divide environmental burdens and credits between supplier and user of a by-product', 'Deciding which workers get holidays'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Symbiosis is a nature word for living things helping each other, like bees and flowers.',
        MIDDLE_SCHOOL: 'Kalundborg grew gradually as companies noticed their neighbors could use their by-products.',
        HIGH_SCHOOL: 'Interdependence means a closure or process change at one firm can disrupt the others.',
        UNDERGRADUATE: 'For low-value bulky materials, transport costs rise with distance and erase the savings.',
        GRADUATE: 'For example, a district heating system built on a fossil plant waste heat can make that plant harder to close.',
        PHD: 'How burdens and credits are allocated changes the reported environmental benefit for each partner.',
      },
    },
    {
      id: 'zwsymbq4',
      question: {
        ELEMENTARY: 'Which leftover from a sawmill can be used again?',
        MIDDLE_SCHOOL: 'What can ash and slag from furnaces be used for?',
        HIGH_SCHOOL: 'What is an anchor tenant?',
        UNDERGRADUATE: 'What is asset specificity?',
        GRADUATE: 'Why can symbiosis raise equity concerns?',
        PHD: 'What is a key limitation of mathematical optimization for symbiosis?',
      },
      options: {
        ELEMENTARY: ['Rainbows', 'Snowflakes', 'Seashells', 'Sawdust'],
        MIDDLE_SCHOOL: ['Making clothes', 'Baking bread', 'Feeding fish', 'Building roads and making cement'],
        HIGH_SCHOOL: ['The smallest shop in a park', 'A visitor who stays one day', 'A park security guard', 'A large facility whose flows make many exchanges possible'],
        UNDERGRADUATE: ['A product sold everywhere', 'Money kept in a bank', 'A type of recycling bin', 'Investment that is valuable only within a particular relationship'],
        GRADUATE: ['Symbiosis always raises wages for everyone', 'It only happens in wealthy areas', 'It has no local effects', 'It can extend polluting plants or bring waste processing near communities already burdened'],
        PHD: ['It is too simple to calculate', 'It cannot use numbers', 'It ignores costs entirely', 'It assumes cooperation and full information that rarely exist'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Sawdust can be pressed into boards or used as animal bedding.',
        MIDDLE_SCHOOL: 'Ash and slag can partly replace cement or gravel in construction.',
        HIGH_SCHOOL: 'Anchor tenants like power plants have large flows that many neighbors can use.',
        UNDERGRADUATE: 'A dedicated pipeline between two plants loses value if either partner leaves.',
        GRADUATE: 'Industrial zones are often near lower-income communities, so local impacts must be tracked.',
        PHD: 'Optimization finds ideal configurations, but real firms act in their own interest with limited information.',
      },
    },
    {
      id: 'zwsymbq5',
      question: {
        ELEMENTARY: 'How is factory sharing like bees and flowers?',
        MIDDLE_SCHOOL: 'Why does symbiosis work best when companies are close together?',
        HIGH_SCHOOL: 'What is district heating?',
        UNDERGRADUATE: 'Which situation favors a by-product exchange?',
        GRADUATE: 'What does additionality ask about a facilitated exchange?',
        PHD: 'Why does decarbonization challenge many classic synergies?',
      },
      options: {
        ELEMENTARY: ['Both help each other and both get something good', 'Both are very loud', 'Both live underground', 'Both make honey'],
        MIDDLE_SCHOOL: ['Moving materials is cheaper and partners can talk and build trust', 'Close companies never compete', 'Far-away companies cannot use waste', 'Laws require companies to be neighbors'],
        HIGH_SCHOOL: ['Waste heat warming homes and buildings through networks of insulated pipes', 'Heating only one room with a fireplace', 'A heat wave in a city district', 'Cooling buildings with ice'],
        UNDERGRADUATE: ['High disposal fees and short distances between partners', 'Cheap disposal and long distances', 'Highly variable, contaminated material', 'Unclear rules about waste status'],
        GRADUATE: ['Whether the exchange would have happened without facilitation or policy support', 'Whether the exchange adds more trucks', 'Whether extra factories were built', 'Whether the exchange uses addition in its accounts'],
        PHD: ['Many synergies are built around fossil-fueled plants whose closure is a policy goal', 'Renewable energy makes all exchanges impossible', 'Decarbonization has no link to industry', 'Carbon has no role in industrial flows'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Like bees and flowers, factories that share leftovers both get something they need.',
        MIDDLE_SCHOOL: 'Short distances keep transport cheap, and nearby managers can build the trust exchanges need.',
        HIGH_SCHOOL: 'District heating networks carry spare industrial heat to homes and buildings.',
        UNDERGRADUATE: 'High disposal costs and short distances make reuse cheaper than the alternatives.',
        GRADUATE: 'Additionality checks whether facilitation or policy actually caused the benefit.',
        PHD: 'Networks built on fossil anchors must be reconfigured as those facilities close.',
      },
    },
  ],
}

export default expansion
