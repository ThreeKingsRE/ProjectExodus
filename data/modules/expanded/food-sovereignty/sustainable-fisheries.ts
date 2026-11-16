import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'food-sovereignty',
  moduleKey: 'sustainable-fisheries',
  lessons: [
    {
      id: 'fs-fish-1',
      title: 'Fish for the Future',
      content: {
        ELEMENTARY: `
<h2>Fish for Today and Tomorrow</h2>
<p>Oceans, rivers and lakes are full of life. Fish, clams, shrimp and even seaweed give food to millions of families around the world. If we take care of the water and the creatures in it, there will be fish to eat for a very, very long time.</p>

<h3>Why Leave Some Fish in the Water?</h3>
<p>Fish grow up and have babies, just like other animals. If people catch too many fish, there are not enough grown-up fish left to have babies. Then, little by little, the fish could disappear. Good fishers always leave enough fish so the group can grow back.</p>
<ul>
<li><strong>Fisher:</strong> a person who catches fish to eat or to sell</li>
<li><strong>Net:</strong> a tool made of strings tied together that fishers use to catch fish</li>
<li><strong>Fish farm:</strong> a place where people raise fish in ponds or tanks, a bit like a farm for animals</li>
<li><strong>Ocean:</strong> the huge salty water that covers most of our planet</li>
<li><strong>Seaweed:</strong> a plant-like living thing that grows in the sea and can be eaten</li>
</ul>

<h3>Little Fish Go Back</h3>
<p>Many fishers put baby fish back into the water so they can grow bigger. Some use special nets with bigger holes so small fish can swim away. That way, fish have a chance to grow up and have their own babies.</p>

<h3>Farming Fish</h3>
<p>Some people raise fish on farms. Fish farms can make lots of food, but farmers need to keep the water clean and give the fish good food. Farms that grow clams, mussels or seaweed can even help clean the water around them!</p>

<h3>How You Can Help</h3>
<ol>
<li>Never throw trash into rivers, lakes or the ocean.</li>
<li>Pick up litter when you visit the beach, with a grown-up.</li>
<li>Ask your family to choose fish that are caught or farmed in a careful way.</li>
<li>Learn the names of fish that live near where you live.</li>
</ol>

<h3>Think About It</h3>
<p>If you were a fish, what would you want people to do to keep your home clean and safe?</p>
`,
        MIDDLE_SCHOOL: `
<h2>Sustainable Ways to Catch and Raise Fish</h2>
<p>Seafood is an important source of protein and nutrients for people all over the world, especially in coastal communities. But fish populations are not endless. Sustainable fishing and fish farming mean producing food from the water in ways that keep fish populations and ecosystems healthy for future generations.</p>

<h3>What Is Overfishing?</h3>
<p>Overfishing happens when people catch fish faster than the population can replace itself through reproduction. If too few adult fish are left, the population shrinks. Over time, some fisheries have collapsed, meaning there were so few fish left that fishing had to stop, sometimes for many years.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Overfishing:</strong> catching fish faster than the population can reproduce and replace itself</li>
<li><strong>Bycatch:</strong> animals caught by accident, such as turtles, dolphins or young fish, while fishing for something else</li>
<li><strong>Aquaculture:</strong> the farming of fish, shellfish and seaweed in ponds, tanks or ocean pens</li>
<li><strong>Fish stock:</strong> a group of fish of one species living in a particular area</li>
<li><strong>Habitat:</strong> the natural home of an animal, such as a coral reef, seagrass bed or riverbed</li>
<li><strong>Marine protected area:</strong> a part of the ocean where fishing and other activities are limited to protect nature</li>
</ul>

<h3>Ways to Fish Sustainably</h3>
<ol>
<li><strong>Catch limits:</strong> rules about how many fish can be caught each season</li>
<li><strong>Size limits:</strong> letting small, young fish go so they can grow and reproduce</li>
<li><strong>Seasons:</strong> not fishing during the time when fish lay their eggs</li>
<li><strong>Better gear:</strong> nets and hooks designed to reduce bycatch</li>
<li><strong>Protected areas:</strong> places where fish can breed safely and then spread to nearby waters</li>
</ol>

<h3>Comparing Ways to Get Seafood</h3>
<table>
<thead><tr><th>Method</th><th>How it works</th><th>A concern to watch</th></tr></thead>
<tbody>
<tr><td>Hook and line</td><td>Fish are caught one at a time</td><td>Usually low bycatch</td></tr>
<tr><td>Bottom trawling</td><td>Heavy nets are dragged along the sea floor</td><td>Can damage habitats and catch many unwanted animals</td></tr>
<tr><td>Shellfish farming</td><td>Mussels, oysters or clams grow on ropes or in bags</td><td>Needs clean water; the shellfish filter water as they feed</td></tr>
<tr><td>Fish pens in the ocean</td><td>Fish are raised in large nets in the sea</td><td>Waste, disease and escaped fish can affect wild fish</td></tr>
<tr><td>Seaweed farming</td><td>Seaweed grows on lines in the water</td><td>Needs no feed and can take up extra nutrients</td></tr>
</tbody>
</table>

<h3>Why It Matters</h3>
<p>Many small-scale fishers depend on healthy fish populations for their food and income. When fish disappear, communities lose both. Choosing seafood from well-managed fisheries and responsible farms, wasting less fish, and keeping waterways clean all help keep the oceans full of life.</p>
`,
        HIGH_SCHOOL: `
<h2>Fisheries Management, Aquaculture and Marine Conservation</h2>
<p>Seafood, sometimes called "blue food," feeds billions of people and supports the livelihoods of many millions, most of them in small-scale fisheries. Wild fish populations are a renewable resource: if harvested carefully, they can provide food indefinitely. If harvested too heavily, they can decline or collapse. Meanwhile, aquaculture has grown rapidly and now supplies roughly half of the aquatic animal food people eat. This lesson explores how both are managed.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Catch limit:</strong> the maximum amount of a species that may legally be caught in an area during a period of time</li>
<li><strong>Maximum sustainable yield:</strong> the largest catch that can in theory be taken from a stock year after year without reducing it</li>
<li><strong>Bycatch:</strong> non-target species or undersized fish caught unintentionally during fishing</li>
<li><strong>Illegal fishing:</strong> fishing that breaks laws, including fishing without permits or in closed areas, which undermines management</li>
<li><strong>Aquaculture:</strong> the controlled farming of fish, shellfish and aquatic plants for food</li>
<li><strong>Marine protected area:</strong> a defined ocean area where human activities are restricted to conserve ecosystems</li>
</ul>

<h3>How Fisheries Are Managed</h3>
<p>Scientists estimate how many fish are in a stock and how fast it grows. Managers use this information to set rules. Common tools include total catch limits, limits on the number of boats or days at sea, gear restrictions, closed seasons during spawning and minimum size limits. Some fisheries divide the total catch into shares held by fishers or communities, which can reduce the "race to fish" where everyone rushes to catch as much as possible before the limit is reached.</p>

<h3>Wild Capture Versus Aquaculture</h3>
<table>
<thead><tr><th>System</th><th>Benefits</th><th>Trade-offs</th></tr></thead>
<tbody>
<tr><td>Well-managed wild fisheries</td><td>No feed or fertilizer needed; supports coastal livelihoods</td><td>Limited by natural productivity; vulnerable to overfishing</td></tr>
<tr><td>Shellfish and seaweed farming</td><td>Usually no added feed; can improve local water quality</td><td>Needs clean water; space conflicts with other users</td></tr>
<tr><td>Pond aquaculture of plant-eating fish</td><td>Efficient, often low-cost protein</td><td>Land use, water quality and disease management</td></tr>
<tr><td>Open-net pens for carnivorous fish</td><td>High production of popular species</td><td>Waste, parasites, escapes and reliance on feed made partly from wild fish</td></tr>
<tr><td>Recirculating tank systems</td><td>Water is treated and reused; waste can be captured</td><td>High energy use and costs</td></tr>
</tbody>
</table>

<h3>Threats Beyond Fishing</h3>
<p>Fish populations are also affected by pollution, loss of habitats such as mangroves and seagrasses, dams that block migratory fish, and climate change. Warming waters are shifting where many species live, often toward the poles or into deeper water, while ocean acidification makes it harder for shellfish and corals to build shells and skeletons.</p>

<h3>Solutions in Action</h3>
<ol>
<li>Science-based catch limits that are enforced and respected.</li>
<li>Gear changes, such as escape panels in nets and devices that let turtles out of trawl nets.</li>
<li>Co-management, where fishing communities share decisions with governments.</li>
<li>Restoring habitats like mangroves, oyster reefs and river passages for fish.</li>
<li>Improving aquaculture feeds and farming more low-impact species like mussels and seaweed.</li>
<li>Tracking seafood from catch to plate to fight illegal fishing.</li>
</ol>
`,
        UNDERGRADUATE: `
<h2>Fisheries Economics, Aquaculture Technology and Certification</h2>
<p>Fisheries are a classic example of a common-pool resource: it is hard to exclude people from fishing, and every fish caught by one boat is unavailable to others. Without effective rules, this structure tends to produce overexploitation. Aquaculture, by contrast, converts feed, water and space into seafood under more direct control, but brings its own environmental and economic trade-offs. This lesson builds the analytical tools to compare them.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Common-pool resource:</strong> a resource where exclusion is difficult and use by one person reduces availability for others</li>
<li><strong>Open access:</strong> a situation where anyone can fish without limits, which tends to drive effort up until profits disappear</li>
<li><strong>Individual transferable quota:</strong> a share of the total allowable catch assigned to a fisher or firm that can be bought or sold</li>
<li><strong>Feed conversion ratio:</strong> the amount of feed needed to produce a unit of weight gain in farmed animals</li>
<li><strong>Fish-in fish-out ratio:</strong> a measure comparing wild fish used in feed with the farmed fish produced</li>
<li><strong>Eco-certification:</strong> a third-party label indicating that a fishery or farm meets defined sustainability standards</li>
</ul>

<h3>The Economics of Overfishing</h3>
<p>Under open access, new boats keep entering a fishery as long as fishing is profitable. As the stock shrinks, each boat catches less and costs rise, until revenues just cover costs. At that point, the fishery may support far more boats than needed, and the stock can be well below the level that would maximize long-term catch. Economists note that the catch level maximizing profit is usually reached with less fishing effort than the level producing maximum sustainable yield, because fewer boats can catch the same fish at lower cost from a larger stock. Subsidies that lower fuel or vessel costs can worsen overcapacity by keeping unprofitable fishing going.</p>

<h3>Management Instruments Compared</h3>
<table>
<thead><tr><th>Instrument</th><th>How it works</th><th>Strengths</th><th>Concerns</th></tr></thead>
<tbody>
<tr><td>Total allowable catch</td><td>Sets an overall limit</td><td>Directly caps mortality</td><td>Can trigger a race to fish</td></tr>
<tr><td>Catch shares or quotas</td><td>Allocates portions of the limit</td><td>Slows the race, improves efficiency</td><td>May concentrate ownership and exclude small fishers</td></tr>
<tr><td>Territorial use rights</td><td>Gives communities rights to an area</td><td>Encourages local stewardship</td><td>Needs strong local institutions</td></tr>
<tr><td>Effort controls</td><td>Limits boats, days or gear</td><td>Simple to monitor</td><td>Fishers may increase efficiency and catch more anyway</td></tr>
<tr><td>Spatial closures</td><td>Protects areas from fishing</td><td>Protects habitat and spawning stock</td><td>Benefits depend on design and enforcement</td></tr>
</tbody>
</table>

<h3>Aquaculture Technology</h3>
<p>Aquaculture ranges from extensive ponds with little added feed to intensive systems. Key technologies include recirculating aquaculture systems, which filter and reuse water in tanks; integrated multi-trophic aquaculture, which grows fish alongside shellfish and seaweed that use their waste; and improvements in feed formulation that replace some fishmeal and fish oil with plant, algae, insect or by-product ingredients. Species choice matters enormously: farming filter-feeding shellfish or seaweed requires no feed at all, while carnivorous fish depend on protein-rich feed.</p>

<h3>Certification and Its Limits</h3>
<p>Eco-labels for wild-caught and farmed seafood aim to reward good practice through consumer choice. They can encourage improvements and provide traceability. Critics note that certification costs can be hard for small-scale and developing-country fisheries to bear, and that standards and auditing vary in rigor.</p>

<h3>Applied Checklist: Assessing a Seafood Source</h3>
<ol>
<li>What is the status of the stock, and is there a scientific assessment?</li>
<li>Are catch limits set, monitored and enforced?</li>
<li>What gear is used, and what are its bycatch and habitat impacts?</li>
<li>For farmed seafood, what is the feed source and feed conversion ratio?</li>
<li>How are waste, disease and escapes managed?</li>
<li>Who benefits, and are small-scale fishers and workers treated fairly?</li>
</ol>
`,
        GRADUATE: `
<h2>Fisheries Policy, Aquaculture Sustainability and Blue Food Systems</h2>
<p>Blue foods, the animals, plants and algae harvested or farmed from fresh and marine waters, are increasingly recognized as central to food security and nutrition rather than a niche sector. They are rich in protein, omega-3 fatty acids and micronutrients such as iron, zinc, vitamin A and vitamin B12. Yet fisheries policy has historically focused on stocks and profits more than on nutrition, equity and small-scale producers. This lesson examines policy design and governance across the blue food system.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Blue foods:</strong> foods derived from aquatic animals, plants and algae, whether wild-caught or farmed</li>
<li><strong>Small-scale fisheries:</strong> fisheries using smaller vessels and local gear that employ most of the world's fishers and supply local markets</li>
<li><strong>Ecosystem-based fisheries management:</strong> management that considers habitats, predators, prey and human impacts rather than single species alone</li>
<li><strong>Co-management:</strong> a governance arrangement in which governments and resource users share authority and responsibility</li>
<li><strong>Harmful subsidies:</strong> public payments, such as fuel support, that increase fishing capacity and encourage overfishing</li>
<li><strong>Marine spatial planning:</strong> a process for allocating ocean space among uses such as fishing, aquaculture, shipping and conservation</li>
</ul>

<h3>Policy Architecture</h3>
<p>Fisheries are governed at several scales. Coastal states manage fisheries within their exclusive economic zones, while regional fisheries management organizations coordinate on shared and high-seas stocks such as tunas. International agreements address illegal fishing, port inspections and, more recently, harmful subsidies. Enforcement gaps, especially on the high seas and in waters of states with limited monitoring capacity, remain a central problem.</p>

<h3>Aquaculture Governance</h3>
<table>
<thead><tr><th>Issue</th><th>Policy tools</th><th>Tensions</th></tr></thead>
<tbody>
<tr><td>Siting and space</td><td>Marine spatial planning, zoning, carrying-capacity assessment</td><td>Conflicts with fishers, tourism and Indigenous rights</td></tr>
<tr><td>Environmental impact</td><td>Discharge limits, benthic monitoring, area-based management</td><td>Cumulative impacts across many farms are hard to regulate</td></tr>
<tr><td>Disease and parasites</td><td>Biosecurity rules, fallowing, coordinated treatment</td><td>Spread between farms and to wild fish</td></tr>
<tr><td>Feed sourcing</td><td>Standards for marine ingredients, support for alternatives</td><td>Feed fish may be nutritious foods for low-income people elsewhere</td></tr>
<tr><td>Labor and social standards</td><td>Certification, labor law enforcement, supply chain due diligence</td><td>Weak oversight in some supply chains</td></tr>
</tbody>
</table>

<h3>Nutrition, Equity and Distribution</h3>
<p>A nutrition-sensitive view of fisheries asks not only how much fish is caught but who eats it. Small pelagic fish, such as sardines and anchovies, are highly nutritious and affordable, yet large volumes are reduced to fishmeal and fish oil for aquaculture and livestock feed, or exported. Policies that redirect some of these fish toward direct human consumption, support processing and preservation by small-scale actors, and protect access for local fishers can improve nutrition. Women play major roles in post-harvest processing and trading, but are often overlooked in policy and data.</p>

<h3>Rights and Sovereignty</h3>
<p>Food sovereignty perspectives emphasize the rights of fishing communities, including Indigenous peoples, to access and manage aquatic resources. Market-based quota systems can improve economic efficiency but may concentrate ownership and erode community access. Some jurisdictions have responded with community quotas, owner-operator rules or reserved allocations for small-scale fleets. Respecting customary tenure and traditional management systems is increasingly recognized in international guidance on small-scale fisheries.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Assess stock status and ecosystem health, including uncertainty.</li>
<li>Evaluate governance capacity: monitoring, enforcement and participation.</li>
<li>Trace distribution: who catches, processes, trades and eats the fish.</li>
<li>Measure nutrition outcomes alongside economic and ecological indicators.</li>
<li>Identify harmful subsidies and options for reform.</li>
<li>Consider climate change impacts on species distribution and allocation agreements.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in Fisheries Modeling, Aquaculture Innovation and Ocean Food Security</h2>
<p>Research on aquatic food systems spans population dynamics, ecosystem modeling, economics, nutrition and governance. Central open questions include how to assess the many stocks that lack data, how climate change will reshape productivity and distribution, how aquaculture can grow without shifting burdens elsewhere, and how blue foods can contribute to nutrition security for those who need them most.</p>

<h3>Analytical Constructs</h3>
<ul>
<li><strong>Stock assessment:</strong> the use of data and models to estimate population size, productivity and sustainable harvest levels</li>
<li><strong>Surplus production model:</strong> a model relating stock biomass to growth, used to estimate yields under different harvest levels</li>
<li><strong>Age-structured model:</strong> a model tracking numbers of fish by age to capture recruitment, growth and mortality</li>
<li><strong>Data-limited methods:</strong> approaches that estimate stock status from catch, length or other limited information</li>
<li><strong>Management strategy evaluation:</strong> simulation testing of management rules against many plausible versions of reality</li>
<li><strong>Ecosystem model:</strong> a model representing interactions among many species, habitats and fisheries</li>
</ul>

<h3>Stock Assessment and Uncertainty</h3>
<p>Formal assessments exist mainly for commercially valuable stocks in well-resourced countries. Many stocks, especially in tropical small-scale fisheries, lack formal assessment. Data-limited methods attempt to fill this gap but rest on strong assumptions about life history and fishing patterns. Recruitment, the number of young fish entering a stock, is highly variable and often weakly related to spawning stock size, which complicates prediction. Management strategy evaluation has grown as a way to identify harvest rules that perform robustly across uncertainty rather than relying on a single best estimate.</p>

<h3>Climate Change and Shifting Stocks</h3>
<p>Species distribution models and coupled physical-biological models project that warming will shift many stocks poleward and alter productivity, with potential losses in some tropical regions and gains in some higher latitudes. Shifts across national boundaries strain existing allocation agreements. Research challenges include separating climate signals from fishing effects, representing evolutionary and behavioral adaptation, and translating ecological projections into economic and nutritional outcomes for specific communities.</p>

<h3>Contested Questions</h3>
<table>
<thead><tr><th>Question</th><th>Why it is contested</th></tr></thead>
<tbody>
<tr><td>Is maximum sustainable yield an appropriate target?</td><td>Single-species targets may ignore ecosystem effects and economic optimality</td></tr>
<tr><td>Do large protected areas increase fisheries yields?</td><td>Spillover benefits depend on species mobility, design and enforcement</td></tr>
<tr><td>Should forage fish be used for feed or eaten directly?</td><td>Trade-offs between aquaculture growth and direct nutrition for low-income consumers</td></tr>
<tr><td>Can aquaculture relieve pressure on wild stocks?</td><td>Effects depend on species, feed sources and market substitution</td></tr>
<tr><td>Rights-based management and equity</td><td>Efficiency gains may come with consolidation and loss of community access</td></tr>
</tbody>
</table>

<h3>Aquaculture Innovation</h3>
<p>Research frontiers include alternative feed ingredients such as microalgae, insects, single-cell proteins and processing by-products; selective breeding for growth and disease resistance; offshore systems in more exposed waters; and recirculating systems that decouple production from coastal waters. Life cycle assessment is used to compare environmental impacts across species and systems, but results are sensitive to system boundaries, allocation methods and which impact categories are included. Low-trophic aquaculture of bivalves and seaweeds is attracting attention for potentially low environmental footprints, though claims about carbon or nutrient removal require careful verification.</p>

<h3>Ocean Food Security and Nutrition</h3>
<p>Integrating nutrition into fisheries science is a growing field. Researchers model how changes in catch, trade and aquaculture affect micronutrient supply to vulnerable populations, and how retaining more fish for local consumption could address deficiencies. These analyses face data gaps in small-scale catch, informal trade and household consumption.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Robust assessment methods for data-limited and multispecies tropical fisheries.</li>
<li>Coupled climate-ecosystem-economic models that project nutritional outcomes for specific communities.</li>
<li>Comparative life cycle and social assessment of emerging aquaculture systems and feeds.</li>
<li>Governance research on allocation of shifting transboundary stocks.</li>
<li>Methods integrating Indigenous and local ecological knowledge with scientific assessment.</li>
<li>Improved monitoring of small-scale catch and trade using participatory and digital tools.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'ffishq1',
      question: {
        ELEMENTARY: 'Why do fishers leave some fish in the water?',
        MIDDLE_SCHOOL: 'What is overfishing?',
        HIGH_SCHOOL: 'What is a catch limit?',
        UNDERGRADUATE: 'Why are fisheries called a common-pool resource?',
        GRADUATE: 'What are blue foods?',
        PHD: 'What is stock assessment?',
      },
      options: {
        ELEMENTARY: ['So they can grow up and have babies', 'There is no reason', 'Fish like being alone', 'The ocean is too big to fish'],
        MIDDLE_SCHOOL: ['Catching fish faster than the population can replace itself', 'Catching one fish for dinner', 'Not fishing at all', 'Fish swimming over a boat'],
        HIGH_SCHOOL: ['The maximum amount of a species that may legally be caught in an area and period', 'A rule with no limits', 'A law requiring fishers to catch everything', 'A count of fishing boats in a harbor'],
        UNDERGRADUATE: ['Exclusion is difficult and fish caught by one boat are unavailable to others', 'Every fish is privately owned', 'Fish never run out', 'Only governments are allowed to fish'],
        GRADUATE: ['Foods from aquatic animals, plants and algae, wild-caught or farmed', 'Foods that are blue in color', 'Frozen foods only', 'Foods sold near the ocean'],
        PHD: ['Using data and models to estimate population size, productivity and sustainable harvest', 'Counting one fish', 'Guessing catches at random', 'Measuring water temperature only'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Leaving enough grown-up fish means they can have babies and keep the group healthy.',
        MIDDLE_SCHOOL: 'Overfishing leaves too few adults to reproduce, so the population shrinks.',
        HIGH_SCHOOL: 'Catch limits cap how much can be taken so stocks can replenish.',
        UNDERGRADUATE: 'Because exclusion is hard and use is rival, open access tends to cause overexploitation.',
        GRADUATE: 'Blue foods include fish, shellfish and seaweed from fresh and marine waters, wild or farmed.',
        PHD: 'Stock assessments combine data and models to estimate stock status and sustainable harvest levels.',
      },
    },
    {
      id: 'ffishq2',
      question: {
        ELEMENTARY: 'What is a fish farm?',
        MIDDLE_SCHOOL: 'What is bycatch?',
        HIGH_SCHOOL: 'Which farmed seafood usually needs no added feed?',
        UNDERGRADUATE: 'What does the feed conversion ratio measure?',
        GRADUATE: 'What is ecosystem-based fisheries management?',
        PHD: 'What is management strategy evaluation?',
      },
      options: {
        ELEMENTARY: ['A boat that sinks', 'A shop that sells toys', 'A place where people raise fish in ponds or tanks', 'A beach for swimming'],
        MIDDLE_SCHOOL: ['The fish you meant to catch', 'A type of fishing boat', 'Animals caught by accident while fishing for something else', 'A seafood restaurant'],
        HIGH_SCHOOL: ['Salmon in open-net pens', 'Tuna in sea cages', 'Shellfish and seaweed', 'Trout in tanks'],
        UNDERGRADUATE: ['The price of fish feed', 'The speed of fish growth in the wild', 'The amount of feed needed per unit of weight gain', 'The number of fish per tank'],
        GRADUATE: ['Managing only one species at a time', 'Letting fishers fish without rules', 'Management that considers habitats, predators, prey and human impacts together', 'Banning all fishing forever'],
        PHD: ['Ranking managers by performance', 'Picking one best estimate and ignoring uncertainty', 'Simulation testing of management rules against many plausible versions of reality', 'Auditing fishing company finances'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'A fish farm is where people raise fish, a bit like a farm for animals but in water.',
        MIDDLE_SCHOOL: 'Bycatch is turtles, dolphins, young fish or other animals caught by accident.',
        HIGH_SCHOOL: 'Shellfish filter food from the water and seaweed uses sunlight and nutrients, so neither needs feed.',
        UNDERGRADUATE: 'A lower feed conversion ratio means less feed is needed to grow each kilogram of fish.',
        GRADUATE: 'Ecosystem-based management looks beyond single species to the whole ecosystem and its human uses.',
        PHD: 'Management strategy evaluation tests harvest rules across uncertainty to find robust strategies.',
      },
    },
    {
      id: 'ffishq3',
      question: {
        ELEMENTARY: 'How can you help keep oceans and rivers healthy?',
        MIDDLE_SCHOOL: 'Which fishing method can damage the sea floor?',
        HIGH_SCHOOL: 'How is climate change affecting where fish live?',
        UNDERGRADUATE: 'Why can fuel subsidies worsen overfishing?',
        GRADUATE: 'Why are small pelagic fish important for nutrition policy?',
        PHD: 'Why is recruitment hard to predict in stock assessment?',
      },
      options: {
        ELEMENTARY: ['Throw trash in the water', 'Never throw trash into water and pick up litter', 'Catch every fish you see', 'Pour paint into rivers'],
        MIDDLE_SCHOOL: ['Hook and line', 'Bottom trawling', 'Seaweed farming', 'Shellfish farming on ropes'],
        HIGH_SCHOOL: ['Fish are not affected at all', 'Many species are shifting toward the poles or deeper water', 'All fish are moving to rivers', 'Fish are moving closer to the equator only'],
        UNDERGRADUATE: ['They raise fishing costs', 'They lower costs and keep unprofitable fishing going, adding to overcapacity', 'They reduce the number of boats', 'They pay fishers to stop fishing'],
        GRADUATE: ['They are inedible', 'They are nutritious and affordable, yet much is turned into feed or exported', 'They are only used for bait', 'They contain no nutrients'],
        PHD: ['Recruitment is constant every year', 'Recruitment is highly variable and often weakly related to spawning stock size', 'Recruitment can be counted exactly from boats', 'Recruitment has no effect on stocks'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Keeping trash out of the water protects fish and the places they live.',
        MIDDLE_SCHOOL: 'Bottom trawls drag heavy nets along the sea floor, harming habitats and catching unwanted animals.',
        HIGH_SCHOOL: 'Warming waters push many species toward the poles or into deeper, cooler water.',
        UNDERGRADUATE: 'By lowering costs, subsidies let more boats keep fishing even when the stock is depleted.',
        GRADUATE: 'Sardines and anchovies are rich in nutrients and cheap, but much of the catch goes to feed rather than people.',
        PHD: 'Environmental conditions drive large swings in young fish survival, making recruitment hard to forecast.',
      },
    },
    {
      id: 'ffishq4',
      question: {
        ELEMENTARY: 'Why do some fishers use nets with bigger holes?',
        MIDDLE_SCHOOL: 'What is a marine protected area?',
        HIGH_SCHOOL: 'What is a trade-off of open-net pens for carnivorous fish?',
        UNDERGRADUATE: 'What is integrated multi-trophic aquaculture?',
        GRADUATE: 'What is co-management?',
        PHD: 'Why are life cycle assessment results for aquaculture often hard to compare?',
      },
      options: {
        ELEMENTARY: ['To catch more baby fish', 'To make the net heavier', 'To scare big fish away', 'So small fish can swim away and grow up'],
        MIDDLE_SCHOOL: ['A beach with lifeguards', 'A harbor for big ships', 'An underwater fish farm', 'A part of the ocean where fishing and other activities are limited to protect nature'],
        HIGH_SCHOOL: ['They need no feed', 'They always clean the water', 'They produce no waste', 'Waste, parasites, escapes and reliance on feed made partly from wild fish'],
        UNDERGRADUATE: ['Farming only one fish species', 'Fishing at many depths', 'Moving fish between countries', 'Growing fish with shellfish and seaweed that use their waste'],
        GRADUATE: ['Governments managing fisheries alone', 'Companies owning all fishing rights', 'Fishers ignoring rules together', 'Governments and resource users sharing authority and responsibility'],
        PHD: ['All studies use identical methods', 'Life cycle assessment cannot measure impacts', 'Aquaculture has no environmental impacts', 'Results depend on system boundaries, allocation methods and impact categories chosen'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Bigger holes let little fish escape so they can grow up and have babies.',
        MIDDLE_SCHOOL: 'Marine protected areas give fish safe places to breed and grow.',
        HIGH_SCHOOL: 'Open-net pens can release waste and parasites, lose escaped fish and rely on wild fish in feed.',
        UNDERGRADUATE: 'In multi-trophic systems, shellfish and seaweed use nutrients from fish farming.',
        GRADUATE: 'Co-management shares decision-making between governments and fishing communities.',
        PHD: 'Different boundaries and allocation choices can produce very different results for similar systems.',
      },
    },
    {
      id: 'ffishq5',
      question: {
        ELEMENTARY: 'What can farms that grow clams, mussels or seaweed do for the water?',
        MIDDLE_SCHOOL: 'Why is not fishing during spawning season helpful?',
        HIGH_SCHOOL: 'How do shared catch quotas help reduce the race to fish?',
        UNDERGRADUATE: 'What is a concern about eco-certification?',
        GRADUATE: 'What is a risk of market-based quota systems for fishing communities?',
        PHD: 'What is a key debate about forage fish such as anchovies?',
      },
      options: {
        ELEMENTARY: ['Help clean it', 'Make it dirtier', 'Turn it into ice', 'Make it disappear'],
        MIDDLE_SCHOOL: ['It lets fish lay eggs so the population can grow', 'It makes fish easier to catch', 'It changes the water color', 'It has no effect'],
        HIGH_SCHOOL: ['Fishers no longer need to rush to catch as much as possible before the limit is reached', 'They remove all limits', 'They require every boat to fish faster', 'They ban all fishing'],
        UNDERGRADUATE: ['Costs can be hard for small-scale and developing-country fisheries to bear', 'It is always free for everyone', 'It eliminates all fishing', 'It only applies to freshwater fish'],
        GRADUATE: ['Ownership may concentrate and erode community access', 'They always give equal shares forever', 'They prevent anyone from selling quota', 'They require all fish to be exported'],
        PHD: ['Whether they should be used for feed or eaten directly by people', 'Whether they exist at all', 'Whether they can swim', 'Whether they live in freshwater only'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Clams, mussels and seaweed can take things out of the water and help keep it cleaner.',
        MIDDLE_SCHOOL: 'Closed seasons protect fish while they reproduce, helping the population recover.',
        HIGH_SCHOOL: 'With a guaranteed share, fishers can fish when it makes sense instead of racing others.',
        UNDERGRADUATE: 'Certification and auditing costs can exclude small-scale producers from labeled markets.',
        GRADUATE: 'Tradable quotas can be bought up by larger firms, reducing access for small-scale and community fishers.',
        PHD: 'Using forage fish for aquaculture feed competes with eating them directly as affordable nutritious food.',
      },
    },
  ],
}

export default expansion
