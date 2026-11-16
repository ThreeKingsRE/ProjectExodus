import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'regenerative-agriculture',
  moduleKey: 'landscape-integration',
  lessons: [
    {
      id: 'ra-land-1',
      title: 'Connected Landscapes',
      content: {
        ELEMENTARY: `
<h2>Farms Are Part of a Big Neighborhood</h2>
<p>Pretend you are a bird flying high above the ground. Look down! You see farm fields, a forest, a winding stream, a pond and a little town. From up here, it all looks like one big patchwork quilt. That is a <em>landscape</em>, and a farm is just one patch in it. Farms work best when they get along with their wild neighbors.</p>

<h3>Wild Neighbors Help Farms</h3>
<p>Forests and meadows are homes for bees that visit crop flowers. Birds that live in hedges eat bugs that munch on crops. Wetlands soak up extra rain like a sponge, so fields do not flood as badly. When farms have wild neighbors nearby, the whole neighborhood is healthier.</p>
<ul>
<li><strong>Landscape:</strong> everything you can see across a big area, like fields, forests, rivers and towns</li>
<li><strong>Stream:</strong> a small river of moving water that flows across the land</li>
<li><strong>Hedgerow:</strong> a long line of bushes and small trees along the edge of a field</li>
<li><strong>Wetland:</strong> a soggy place like a marsh or swamp that holds lots of water</li>
<li><strong>Wildlife:</strong> wild animals such as birds, frogs, foxes and insects</li>
</ul>

<h3>Animal Pathways</h3>
<p>Animals need to travel to find food and friends. But a big open field can feel scary for a small animal like a hedgehog or a frog. Lines of trees and bushes give them a safe path to follow, like a hidden hallway. Scientists call these paths <em>corridors</em>.</p>

<h3>Keeping Streams Clean</h3>
<p>When rain falls on a farm, some water runs into the stream. Farmers plant strips of grass and trees beside the stream. These plants catch soil and keep the water clean for fish, frogs and people downstream.</p>

<h3>Ways You Can Help</h3>
<ol>
<li>Look at a map of your town. Can you find green areas that connect to each other?</li>
<li>Plant native flowers or bushes in a corner of your yard or schoolyard.</li>
<li>Keep litter out of streams and drains.</li>
<li>Make a small brush pile where little animals can hide.</li>
</ol>

<h3>Think About It</h3>
<p>Your backyard or school garden is a patch in the landscape quilt too. What could you add to make it a friendlier stop for a traveling bee or bird?</p>
`,
        MIDDLE_SCHOOL: `
<h2>How Farms Fit into the Bigger Landscape</h2>
<p>A single farm can do a lot of good, but nature does not stop at fence lines. Birds fly between farms, water flows from one property to the next, and insects travel for kilometers. That is why regenerative farmers think about the whole <em>landscape</em>, not just their own fields. When farms connect with forests, wetlands and streams, everyone benefits.</p>

<h3>Patches, Edges and Corridors</h3>
<p>Ecologists describe landscapes using a few simple ideas. A <em>patch</em> is an area of one kind of habitat, like a woodland or a meadow. An <em>edge</em> is where two patches meet. A <em>corridor</em> is a strip of habitat that links patches together. When habitat is broken into small, isolated patches, it is called <em>fragmentation</em>, and it makes life hard for many species.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Habitat patch:</strong> an area of one type of habitat, such as a woodland, pond or meadow</li>
<li><strong>Wildlife corridor:</strong> a strip of habitat that connects larger natural areas so animals can move</li>
<li><strong>Fragmentation:</strong> when large habitats are broken into small, separated pieces</li>
<li><strong>Watershed:</strong> all the land that drains water into the same stream, river or lake</li>
<li><strong>Riparian buffer:</strong> a strip of trees, shrubs and grass along a stream that protects the water</li>
<li><strong>Ecosystem services:</strong> the benefits people get from nature, like clean water and pollination</li>
</ul>

<h3>Landscape Features on and Around Farms</h3>
<table>
<thead><tr><th>Feature</th><th>What it does</th></tr></thead>
<tbody>
<tr><td>Hedgerows</td><td>Shelter birds and insects; act as corridors; block wind</td></tr>
<tr><td>Riparian buffers</td><td>Filter soil and nutrients; shade streams to keep them cool</td></tr>
<tr><td>Wetlands</td><td>Store floodwater; clean water; provide homes for frogs and birds</td></tr>
<tr><td>Woodlots</td><td>Provide habitat, shade, wood and carbon storage</td></tr>
<tr><td>Flower strips</td><td>Feed pollinators and pest-eating insects</td></tr>
</tbody>
</table>

<h3>The Watershed Connection</h3>
<p>Every farm sits in a watershed. If one farm upstream lets soil wash away, the muddy water affects farms, towns and fish downstream. If many farms protect their streams, the whole river gets cleaner. This shows why farmers, towns and conservation groups often work together.</p>

<h3>Why It Matters</h3>
<p>Thinking at the landscape scale helps wildlife survive, keeps water clean and makes farms more resilient to floods and droughts. One farm is a good start, but a connected landscape is far stronger.</p>
`,
        HIGH_SCHOOL: `
<h2>Landscape Ecology, Corridors and Watersheds</h2>
<p>Landscape ecology studies how the arrangement of habitats across large areas affects ecological processes. For agriculture, it explains why the same farming practice can have different results depending on what surrounds the field. Regenerative farmers use these ideas to place hedgerows, buffers and habitat where they do the most good.</p>

<h3>Core Ideas of Landscape Ecology</h3>
<ul>
<li><strong>Matrix:</strong> the dominant land cover in a landscape, such as cropland, within which habitat patches sit</li>
<li><strong>Connectivity:</strong> how easily organisms, water or nutrients can move between parts of a landscape</li>
<li><strong>Edge effect:</strong> changes in conditions and species where two habitats meet, such as more light and wind at a forest edge</li>
<li><strong>Stepping stones:</strong> small habitat patches spaced so animals can hop between larger areas</li>
<li><strong>Source and sink habitats:</strong> places where a population grows and sends out individuals versus places where it declines without immigration</li>
<li><strong>Nonpoint source pollution:</strong> pollution that comes from many diffuse places, such as runoff from many fields</li>
</ul>

<h3>Why Connectivity Matters</h3>
<p>Fragmentation reduces habitat area and isolates populations. Small, isolated populations are more vulnerable to local extinction because they cannot easily be rescued by newcomers and can lose genetic diversity. Corridors and stepping stones restore movement. Connectivity also matters for climate change: as conditions warm, many species need to shift their ranges, and connected landscapes make that possible.</p>

<h3>Comparing Landscape Features</h3>
<table>
<thead><tr><th>Feature</th><th>Main ecological function</th><th>Farm trade-off</th></tr></thead>
<tbody>
<tr><td>Hedgerows</td><td>Corridors, nesting, natural enemies</td><td>Shade field edges; need maintenance</td></tr>
<tr><td>Riparian buffers</td><td>Filter sediment and nutrients, shade streams</td><td>Take some land out of production</td></tr>
<tr><td>Restored wetlands</td><td>Flood storage, nutrient removal, habitat</td><td>May occupy wet, low-yield areas</td></tr>
<tr><td>Grassed waterways</td><td>Prevent gully erosion in drainage paths</td><td>Must be crossed carefully by machinery</td></tr>
<tr><td>Field-margin flower strips</td><td>Support pollinators and pest predators</td><td>Need establishment and weed control</td></tr>
</tbody>
</table>

<h3>Watershed Management</h3>
<p>Nitrogen and phosphorus washing off farmland can cause algal blooms in lakes and low-oxygen "dead zones" in coastal waters. Because this pollution comes from many farms, no single farm can solve it. Watershed management targets the places that contribute most, such as steep slopes near streams, and coordinates actions across many landowners. Placing a buffer or wetland where runoff concentrates can be far more effective than spreading measures evenly.</p>

<h3>Real-World Applications</h3>
<p>Many countries run programs that pay farmers to establish buffers, hedgerows or wetlands. Some regions organize farmer-led watershed groups that share monitoring data and plan improvements together. Conservation organizations work with farmers to create corridors linking protected areas through farmland.</p>

<h3>Solutions at the Landscape Scale</h3>
<ol>
<li>Protect existing habitat first, since it is hard to replace.</li>
<li>Connect patches with hedgerows, buffers and stepping stones.</li>
<li>Target runoff hotspots for buffers and wetlands.</li>
<li>Coordinate with neighbors so features link across property lines.</li>
</ol>
`,
        UNDERGRADUATE: `
<h2>Landscape-Scale Planning, Connectivity and Green Infrastructure</h2>
<p>Landscape integration asks how farmland, natural habitat and infrastructure can be arranged so a region produces food while sustaining biodiversity, water quality and climate resilience. This lesson introduces the analytical concepts used in landscape planning, contrasts the land sparing and land sharing frameworks, and presents a method for prioritizing interventions.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Structural connectivity:</strong> the physical continuity of habitat across a landscape, measured from maps</li>
<li><strong>Functional connectivity:</strong> how easily a particular species actually moves through a landscape, given its behavior and dispersal ability</li>
<li><strong>Green infrastructure:</strong> a planned network of natural and semi-natural areas that delivers ecosystem services such as flood control and habitat</li>
<li><strong>Multifunctional landscape:</strong> a landscape managed to provide several outcomes at once, such as food, water quality and biodiversity</li>
<li><strong>Land sparing:</strong> concentrating high-yield farming on less land to set aside more area for nature</li>
<li><strong>Land sharing:</strong> integrating wildlife-friendly practices and habitat within farmed land</li>
</ul>

<h3>Measuring Connectivity</h3>
<p>Structural connectivity can look good on a map while functional connectivity is poor: a narrow hedgerow may serve birds well but be avoided by forest-interior species. Analysts use tools such as resistance surfaces, where each land cover is assigned a cost of movement for a target species, and graph models that treat patches as nodes linked by possible movement paths. The key insight, in words, is that connectivity is species-specific, so planning should start by asking which organisms and processes the network is meant to serve.</p>

<h3>Sparing Versus Sharing</h3>
<table>
<thead><tr><th>Dimension</th><th>Land sparing</th><th>Land sharing</th></tr></thead>
<tbody>
<tr><td>Strategy</td><td>Intensify farmland, protect separate reserves</td><td>Wildlife-friendly farming across the matrix</td></tr>
<tr><td>Favors</td><td>Species that need large undisturbed habitat</td><td>Species that tolerate or rely on farmland mosaics</td></tr>
<tr><td>Risks</td><td>Intensification can increase pollution; yield gains may not translate into spared land</td><td>Lower yields may push farming into other natural areas</td></tr>
<tr><td>Ecosystem services in farmland</td><td>Often reduced</td><td>Often enhanced, such as pollination and pest control</td></tr>
</tbody>
</table>
<p>Many researchers now see the two as ends of a spectrum. Real landscapes often combine protected cores, connecting corridors and farmland managed for biodiversity, with the best mix depending on species, region and how yields and land use respond to markets.</p>

<h3>Green Infrastructure in Agricultural Regions</h3>
<p>Green infrastructure includes riparian corridors, floodplains reconnected to rivers, wetland networks and hedgerow systems. Compared with gray infrastructure such as levees and concrete channels, it can provide multiple benefits simultaneously, although outcomes depend on placement, scale and maintenance. Floodplain reconnection, for example, can lower downstream flood peaks while creating habitat and depositing fertile sediment.</p>

<h3>Prioritization Method</h3>
<ol>
<li>Define objectives: which species, water quality targets and services matter?</li>
<li>Map existing habitat, land use, soils, slopes and drainage.</li>
<li>Identify critical areas: corridors, runoff hotspots, flood-prone zones.</li>
<li>Estimate the benefit and cost of candidate interventions in each area.</li>
<li>Rank options by benefit per unit cost and by contribution to connectivity.</li>
<li>Engage landowners early, since implementation depends on their participation.</li>
</ol>
`,
        GRADUATE: `
<h2>Landscape Governance and Multi-Stakeholder Coordination</h2>
<p>Most ecological processes that matter to agriculture, from pollinator movement to nutrient runoff, operate at scales larger than any single farm. Yet land decisions are made by many separate owners under different rules. Landscape governance is the set of institutions and processes through which these actors coordinate. This lesson examines governance models, conservation networks, incentive design and the equity questions they raise.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Landscape governance:</strong> the arrangements through which multiple actors coordinate land management across ownership boundaries</li>
<li><strong>Collective action problem:</strong> a situation where individuals acting in self-interest produce outcomes that are worse for the group</li>
<li><strong>Agglomeration payment:</strong> an incentive bonus paid when neighboring landowners enroll adjacent land in conservation</li>
<li><strong>Conservation easement:</strong> a legal agreement that limits certain uses of land to protect conservation values while ownership stays private</li>
<li><strong>Boundary organization:</strong> an intermediary that connects farmers, scientists, agencies and communities</li>
<li><strong>Polycentric governance:</strong> a system with multiple, overlapping centers of decision-making rather than one central authority</li>
</ul>

<h3>Why Coordination Is Hard</h3>
<p>Benefits of habitat and water protection spill over to neighbors and downstream users, while costs fall on the landowner who acts. This creates under-provision. Transaction costs of negotiating among many owners are high, and trust may be limited. Landowners also differ in goals, finances and tenure, so a one-size program rarely fits.</p>

<h3>Governance Models</h3>
<table>
<thead><tr><th>Model</th><th>How it works</th><th>Strengths and limits</th></tr></thead>
<tbody>
<tr><td>Top-down regulation</td><td>Rules on buffers or drainage set by government</td><td>Clear standards; may face resistance and enforcement gaps</td></tr>
<tr><td>Voluntary incentive programs</td><td>Payments for practices on individual farms</td><td>Popular; enrollment often scattered and poorly connected</td></tr>
<tr><td>Collective agri-environment schemes</td><td>Groups of farmers apply and manage jointly</td><td>Better spatial coherence; needs strong local facilitation</td></tr>
<tr><td>Watershed partnerships</td><td>Farmers, cities and agencies share goals and monitoring</td><td>Builds trust; dependent on long-term funding</td></tr>
<tr><td>Land trusts and easements</td><td>Secure long-term protection of key parcels</td><td>Durable; can be costly and slow to assemble networks</td></tr>
</tbody>
</table>

<h3>Designing Incentives for Connectivity</h3>
<p>Individual-farm payments tend to produce a scattered pattern of habitat. Mechanisms that reward spatial coordination, such as agglomeration bonuses, collective contracts or auctions that score contiguity, can produce more connected networks. Payments based on measured outcomes, like water quality improvements, align incentives with results but transfer risk to farmers when outcomes depend on weather or neighbors.</p>

<h3>Equity and Inclusion</h3>
<p>Landscape initiatives can sideline tenants, small farmers and Indigenous communities if participation requires ownership, capital or technical capacity. Indigenous land stewardship has shaped many landscapes over long periods, and inclusive governance recognizes rights and knowledge rather than consulting communities only after plans are set. Benefit sharing, accessible processes and attention to who bears restrictions are central to legitimacy.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Clarify shared goals and the spatial scale at which they operate.</li>
<li>Map actors, rights, interests and existing institutions.</li>
<li>Choose instruments that reward spatial coordination where connectivity matters.</li>
<li>Establish shared monitoring and adaptive review.</li>
<li>Assess fairness of participation, costs and benefits.</li>
<li>Secure long-term funding and facilitation capacity.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: Landscape Ecology and Social-Ecological Systems</h2>
<p>Integrating agriculture into landscapes is a problem of spatial ecology, optimization and human behavior at once. Research asks how landscape pattern governs ecological processes, how to choose spatial configurations that balance multiple objectives, and how social and ecological dynamics co-evolve. This lesson surveys theories, methods, debates and open directions.</p>

<h3>Theoretical Foundations</h3>
<ul>
<li><strong>Social-ecological system:</strong> a coupled system in which human and ecological components interact and shape each other over time</li>
<li><strong>Metapopulation:</strong> a set of local populations linked by dispersal, persisting through a balance of local extinction and recolonization</li>
<li><strong>Extinction debt:</strong> future species losses that are expected because of past habitat loss but have not yet occurred</li>
<li><strong>Composition versus configuration:</strong> the distinction between how much of each land cover exists and how it is spatially arranged</li>
<li><strong>Spatial prioritization:</strong> algorithms that select sets of sites to meet conservation targets efficiently</li>
<li><strong>Telecoupling:</strong> interactions between distant places through trade, migration or information flows</li>
</ul>

<h3>Pattern and Process</h3>
<p>A central question is whether landscape composition or configuration matters more. Habitat amount often explains much of the variation in species richness, and some researchers argue that configuration effects are secondary once amount is accounted for. Others find configuration matters for particular processes, such as edge-dependent pest control or dispersal-limited species. Disentangling these is difficult because amount and fragmentation are correlated in real landscapes.</p>

<h3>Spatial Optimization Methods</h3>
<table>
<thead><tr><th>Method</th><th>Use</th><th>Limitation</th></tr></thead>
<tbody>
<tr><td>Systematic conservation planning algorithms</td><td>Select efficient site portfolios for targets</td><td>Often static; may ignore landowner behavior</td></tr>
<tr><td>Multi-objective spatial optimization</td><td>Trace trade-off frontiers among food, water and biodiversity</td><td>Requires credible production functions for each service</td></tr>
<tr><td>Circuit theory connectivity models</td><td>Estimate movement probability across resistance surfaces</td><td>Resistance values often based on expert opinion</td></tr>
<tr><td>Agent-based land-use models</td><td>Simulate landowner decisions and emergent patterns</td><td>Hard to parameterize and validate behavior</td></tr>
<tr><td>Coupled hydrological-economic models</td><td>Target nutrient reductions across watersheds</td><td>Uncertainty in fate and transport of nutrients</td></tr>
</tbody>
</table>

<h3>Social-Ecological Dynamics</h3>
<p>Landscapes are shaped by feedbacks: degraded water quality may trigger regulation, which changes land use, which alters ecological outcomes and public perceptions. Frameworks for analyzing social-ecological systems emphasize resource systems, users, governance and outcomes, and how their interactions produce sustainability or collapse. Telecoupling adds that land use in one region responds to demand elsewhere, so local sparing can drive distant conversion, a form of leakage that complicates landscape-level evaluation.</p>

<h3>Contested Questions</h3>
<p>Debates include whether land sparing or sharing better conserves biodiversity at regional scales, how to value services that do not enter markets, and whether optimization outputs are legitimate guides when landowners and communities hold differing values. Methodologically, scholars debate the transferability of ecosystem service models between regions and the appropriate scale for evaluation, given that conclusions can change with the chosen extent and resolution.</p>

<h3>Methodological Challenges</h3>
<p>Landscape-scale experiments are rare because the units are large and owned by many people, so most evidence is observational and prone to confounding. Time lags such as extinction debt mean current patterns may reflect past landscapes. Integrating qualitative social data with quantitative ecological models remains difficult, yet both are required to understand coupled dynamics.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Quasi-experimental designs that exploit policy changes to estimate landscape effects causally.</li>
<li>Connectivity models validated with movement data from tracking and genetics.</li>
<li>Optimization methods that include landowner behavior, equity and uncertainty.</li>
<li>Accounting for telecoupled leakage in landscape and regional assessments.</li>
<li>Participatory modeling that combines scientific and local or Indigenous knowledge.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'rlandq1',
      question: {
        ELEMENTARY: 'Why should farms connect to nature around them?',
        MIDDLE_SCHOOL: 'What is a wildlife corridor?',
        HIGH_SCHOOL: 'What is landscape connectivity?',
        UNDERGRADUATE: 'What is green infrastructure?',
        GRADUATE: 'What is landscape governance?',
        PHD: 'What is a social-ecological system?',
      },
      options: {
        ELEMENTARY: ['So animals, plants and farms can thrive together', 'Farms should be kept far from nature', 'Nature is not important', 'Only big farms matter'],
        MIDDLE_SCHOOL: ['A strip of habitat connecting natural areas so animals can move', 'A road built for cars', 'A tall fence', 'A border between countries'],
        HIGH_SCHOOL: ['How easily organisms, water or nutrients move between parts of a landscape', 'The number of roads in a region', 'How many phones work in a field', 'The size of a single farm'],
        UNDERGRADUATE: ['A planned network of natural areas that delivers ecosystem services', 'Concrete pipes and levees only', 'Painted buildings', 'Green-colored machinery'],
        GRADUATE: ['Arrangements to coordinate land management across ownership boundaries', 'Rules that apply to one farm only', 'Having no rules at all', 'Decisions made only by one government office'],
        PHD: ['A coupled system in which human and ecological parts shape each other', 'A purely ecological system with no people', 'A purely social system with no nature', 'Two systems that never interact'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Wild neighbors give homes to bees and birds that help farms, so everyone is healthier together.',
        MIDDLE_SCHOOL: 'Corridors are strips of habitat that link larger natural areas so wildlife can travel safely.',
        HIGH_SCHOOL: 'Connectivity describes how well parts of a landscape are linked for movement.',
        UNDERGRADUATE: 'Green infrastructure uses natural systems for services like flood control and habitat.',
        GRADUATE: 'Landscape governance coordinates many landowners and agencies around shared goals.',
        PHD: 'Social-ecological systems recognize that people and nature are deeply interconnected.',
      },
    },
    {
      id: 'rlandq2',
      question: {
        ELEMENTARY: 'What is a hedgerow?',
        MIDDLE_SCHOOL: 'What is a watershed?',
        HIGH_SCHOOL: 'What is nonpoint source pollution?',
        UNDERGRADUATE: 'How does functional connectivity differ from structural connectivity?',
        GRADUATE: 'What is an agglomeration payment?',
        PHD: 'What is extinction debt?',
      },
      options: {
        ELEMENTARY: ['A kind of tractor', 'A line of bushes and small trees along a field edge', 'A deep hole in the ground', 'A cloud full of rain'],
        MIDDLE_SCHOOL: ['A shed for storing water', 'All the land that drains into the same stream, river or lake', 'A type of fish', 'A water bottle factory'],
        HIGH_SCHOOL: ['Pollution from one single factory pipe', 'Pollution from many diffuse places like runoff from many fields', 'Noise from machines', 'Light from cities'],
        UNDERGRADUATE: ['They are identical', 'Functional connectivity is how easily a particular species actually moves', 'Functional connectivity only counts roads', 'Structural connectivity measures animal behavior'],
        GRADUATE: ['A fine for polluting', 'A bonus paid when neighbors enroll adjacent land in conservation', 'A tax on farm machinery', 'A loan for buying land'],
        PHD: ['Money owed for buying habitat', 'Future species losses expected from past habitat loss that have not yet happened', 'Extinctions that are already complete', 'A debt farmers pay to governments'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Hedgerows line field edges and give birds and small animals shelter and safe paths.',
        MIDDLE_SCHOOL: 'A watershed is all the land that drains water into the same body of water.',
        HIGH_SCHOOL: 'Nonpoint pollution comes from many scattered sources, so no single farm can solve it alone.',
        UNDERGRADUATE: 'A map may show continuous habitat, yet a species may still avoid using it.',
        GRADUATE: 'Agglomeration bonuses reward neighbors for creating connected habitat.',
        PHD: 'Species may persist for a while after habitat loss, but their eventual decline is already set in motion.',
      },
    },
    {
      id: 'rlandq3',
      question: {
        ELEMENTARY: 'How do plants beside a stream help?',
        MIDDLE_SCHOOL: 'What is fragmentation?',
        HIGH_SCHOOL: 'Why are small, isolated populations at greater risk?',
        UNDERGRADUATE: 'What does land sparing mean?',
        GRADUATE: 'Why do individual-farm payments often produce poorly connected habitat?',
        PHD: 'What is the composition versus configuration distinction?',
      },
      options: {
        ELEMENTARY: ['They make the water muddy', 'They scare the fish away', 'They catch soil and keep the water clean', 'They dry up the stream'],
        MIDDLE_SCHOOL: ['Planting many trees together', 'Joining two parks into one', 'Breaking large habitats into small, separated pieces', 'Cleaning a river'],
        HIGH_SCHOOL: ['They have too much food', 'They are always larger than expected', 'They cannot easily be rescued by newcomers and may lose genetic diversity', 'They never move'],
        UNDERGRADUATE: ['Spreading farming evenly across all land', 'Planting spare crops for later', 'Concentrating high-yield farming to set aside more land for nature', 'Leaving all farms unused'],
        GRADUATE: ['Payments are always too high', 'Farmers refuse all payments', 'Each farm enrolls separately, so habitat ends up scattered', 'Governments forbid connected habitat'],
        PHD: ['Soil texture versus soil color', 'Music versus art', 'How much of each land cover exists versus how it is spatially arranged', 'Crop type versus crop price'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Grass and trees by the stream catch soil before it washes into the water.',
        MIDDLE_SCHOOL: 'Fragmentation splits habitat into isolated pieces that are harder for wildlife to live in.',
        HIGH_SCHOOL: 'Isolation prevents new individuals from arriving, raising the risk of local extinction.',
        UNDERGRADUATE: 'Land sparing intensifies farming on less land so separate areas can be protected for nature.',
        GRADUATE: 'Without rewards for coordination, enrolled land is often patchy and disconnected.',
        PHD: 'Composition is the amount of each cover type; configuration is its spatial arrangement.',
      },
    },
    {
      id: 'rlandq4',
      question: {
        ELEMENTARY: 'What is a wetland?',
        MIDDLE_SCHOOL: 'What does a riparian buffer do?',
        HIGH_SCHOOL: 'Why can placing buffers where runoff concentrates be more effective?',
        UNDERGRADUATE: 'What is a resistance surface in connectivity analysis?',
        GRADUATE: 'What is a boundary organization?',
        PHD: 'What is telecoupling?',
      },
      options: {
        ELEMENTARY: ['A dry, sandy desert', 'A tall mountain', 'A paved parking lot', 'A soggy place like a marsh that holds lots of water'],
        MIDDLE_SCHOOL: ['Speeds up floods', 'Removes all trees near streams', 'Warms the stream water', 'Filters soil and nutrients and shades the stream'],
        HIGH_SCHOOL: ['Runoff is spread evenly everywhere', 'Buffers work only on flat land', 'It costs more than any other option', 'A few hotspots often contribute most of the pollution'],
        UNDERGRADUATE: ['A wall that stops animals', 'An electrical circuit in a tractor', 'A list of farm prices', 'A map assigning each land cover a cost of movement for a species'],
        GRADUATE: ['A fence between two farms', 'A national border agency', 'A group that only sells seeds', 'An intermediary connecting farmers, scientists, agencies and communities'],
        PHD: ['A phone network for farms', 'Linking two tractors together', 'Pairing species in a zoo', 'Interactions between distant places through trade, migration or information'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Wetlands soak up water like a sponge and are homes for frogs and birds.',
        MIDDLE_SCHOOL: 'Riparian buffers protect streams by filtering runoff and providing shade.',
        HIGH_SCHOOL: 'Targeting the places that send the most runoff gives the biggest improvement for the effort.',
        UNDERGRADUATE: 'Resistance surfaces estimate how hard it is for a species to cross each type of land.',
        GRADUATE: 'Boundary organizations build trust and share knowledge among different groups.',
        PHD: 'Telecoupling links distant regions, so land decisions in one place respond to demand elsewhere.',
      },
    },
    {
      id: 'rlandq5',
      question: {
        ELEMENTARY: 'Why do animals need pathways like lines of trees?',
        MIDDLE_SCHOOL: 'Why do farmers, towns and conservation groups often work together on rivers?',
        HIGH_SCHOOL: 'Why does connectivity matter more as the climate changes?',
        UNDERGRADUATE: 'Why are many researchers now treating sparing and sharing as a spectrum?',
        GRADUATE: 'What is a key trade-off of outcome-based payments?',
        PHD: 'Why is most landscape-scale evidence observational?',
      },
      options: {
        ELEMENTARY: ['To travel safely to find food and friends', 'To play hide and seek only', 'To get away from all other animals forever', 'Animals never need to move'],
        MIDDLE_SCHOOL: ['What happens upstream affects everyone downstream', 'Rivers belong to only one farm', 'Water never moves', 'It makes rivers longer'],
        HIGH_SCHOOL: ['Many species need to shift ranges as conditions warm', 'Animals stop moving in warm weather', 'Climate change makes habitat larger', 'Connectivity only matters in winter'],
        UNDERGRADUATE: ['Real landscapes often combine reserves, corridors and wildlife-friendly farmland', 'Neither idea has any evidence', 'Sharing always wins everywhere', 'Sparing always wins everywhere'],
        GRADUATE: ['They align pay with results but shift weather and neighbor risk onto farmers', 'They remove all risk from farmers', 'They ignore results completely', 'They only pay for paperwork'],
        PHD: ['Landscapes are large and owned by many people, so experiments are rare', 'Landscapes are too small to study', 'Observation is always unbiased', 'Experiments are banned by law'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Corridors are like hidden hallways that help small animals move without danger.',
        MIDDLE_SCHOOL: 'Because a watershed connects everyone, working together keeps the whole river cleaner.',
        HIGH_SCHOOL: 'Connected landscapes let species move to places where conditions suit them.',
        UNDERGRADUATE: 'The best mix depends on species, region and how land use responds to yields and markets.',
        GRADUATE: 'Outcomes depend partly on factors farmers cannot control, so they carry more risk.',
        PHD: 'Large, multi-owner units make controlled experiments difficult, so studies rely on observation.',
      },
    },
  ],
}

export default expansion
