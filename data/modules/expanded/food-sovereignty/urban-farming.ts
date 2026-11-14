import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'food-sovereignty',
  moduleKey: 'urban-farming',
  lessons: [
    {
      id: 'fs-urban-1',
      title: 'City Farms',
      content: {
        ELEMENTARY: `
<h2>Farms in the City!</h2>
<p>When you think of a farm, you might picture a red barn, big fields and cows far out in the countryside. But did you know that food can grow right in the middle of a busy city? Tomatoes can grow on a balcony, lettuce can grow on a rooftop, and a whole vegetable garden can grow on an empty lot between two buildings. Let's go on a city farm adventure!</p>

<h3>Where Can Food Grow in a City?</h3>
<p>City farmers are very good at finding space. They look up, down and all around. A sunny windowsill can hold a pot of herbs. A flat rooftop can hold rows of boxes full of soil. A school yard can have raised garden beds. Even a wall can hold plants that climb up strings and fences.</p>
<ul>
<li><strong>Rooftop garden:</strong> a garden planted on top of a building where the sun shines all day</li>
<li><strong>Community garden:</strong> a shared garden where neighbors each look after a small patch</li>
<li><strong>Raised bed:</strong> a big wooden box filled with good soil so plants can grow above the ground</li>
<li><strong>Container:</strong> a pot, bucket or box that holds soil so a plant can grow almost anywhere</li>
<li><strong>Compost:</strong> old food scraps and leaves that rot into rich soil that feeds plants</li>
</ul>

<h3>What Do Plants Need?</h3>
<p>Plants in the city need the same things as plants in the country. They need sunlight, water, good soil and some care. City farmers check which spots get the most sun. They water their plants when the soil feels dry. They pull out weeds and watch for hungry bugs.</p>

<h3>Why Are City Farms Great?</h3>
<p>Food grown nearby is fresh and tasty because it does not have to travel far in a truck. City gardens give bees and butterflies flowers to visit. They make gray places green and cool. And they bring neighbors together to plant, share and eat!</p>

<h3>You Can Be a City Farmer Too</h3>
<ol>
<li>Plant a seed in a cup of soil and put it on a sunny windowsill.</li>
<li>Grow herbs like basil or mint in a small pot.</li>
<li>Save fruit and vegetable peels for a compost bin with a grown-up.</li>
<li>Visit a community garden and ask what the gardeners are growing.</li>
</ol>

<h3>Think About It</h3>
<p>Look out your window. Is there a sunny spot where something could grow? Every city farm starts with one small seed and one person who wants to try.</p>
`,
        MIDDLE_SCHOOL: `
<h2>How Cities Grow Their Own Food</h2>
<p>More than half of the world's people now live in cities, and most of their food travels a long way to reach them. Urban farming, also called urban agriculture, means growing food and sometimes raising animals inside or right next to cities. It happens in surprising places: on rooftops, in old warehouses, in empty lots, along railways and even inside shipping containers.</p>

<h3>Different Kinds of City Farms</h3>
<p>Urban farms come in many shapes and sizes. Some are tiny backyard plots, and some are businesses that sell food to restaurants and grocery stores.</p>
<table>
<thead><tr><th>Type of city farm</th><th>Where it grows</th><th>What it often grows</th></tr></thead>
<tbody>
<tr><td>Community garden</td><td>Shared plots on public or donated land</td><td>Vegetables, herbs and flowers for families</td></tr>
<tr><td>Rooftop farm</td><td>Flat roofs of schools, stores or apartments</td><td>Salad greens, tomatoes, peppers, herbs</td></tr>
<tr><td>Vertical farm</td><td>Indoors, in stacked layers under lights</td><td>Lettuce, microgreens and herbs</td></tr>
<tr><td>Urban market farm</td><td>Larger lots on the city edge</td><td>Many vegetables sold at markets</td></tr>
</tbody>
</table>

<h3>How Does Vertical Farming Work?</h3>
<p>In a vertical farm, plants grow on shelves stacked on top of each other, often indoors. Instead of sunlight, they get light from special LED lamps. Many vertical farms do not use soil at all. Plant roots sit in water mixed with nutrients, a method called hydroponics. Because the room is closed, farmers can control temperature and keep many pests out. The downside is that the lights and fans use a lot of electricity.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Urban agriculture:</strong> growing food or raising animals in and around cities</li>
<li><strong>Vertical farming:</strong> growing plants in stacked layers, usually indoors under lamps</li>
<li><strong>Hydroponics:</strong> growing plants with their roots in nutrient-rich water instead of soil</li>
<li><strong>Food miles:</strong> the distance food travels from the farm to the person who eats it</li>
<li><strong>Vacant lot:</strong> an empty piece of city land with no building on it</li>
<li><strong>Soil testing:</strong> checking soil in a lab to see if it is healthy and free of harmful metals</li>
</ul>

<h3>Challenges for City Farmers</h3>
<p>City land is expensive, and owners may want to build on it instead. Old city soil can contain lead or other pollution from past paint, traffic or factories, so farmers test it and often grow in raised beds with clean soil. Water, tools and time all cost money too.</p>

<h3>Why It Matters</h3>
<p>Urban farms give people fresh vegetables close to home, teach kids where food comes from, cool hot streets, soak up rainwater and create places where neighbors meet. They cannot feed a whole city alone, but they make the city's food system stronger and greener.</p>
`,
        HIGH_SCHOOL: `
<h2>Urban Agriculture: Techniques, Technology and City Food Systems</h2>
<p>Cities depend on long supply chains to feed millions of people every day. Urban agriculture adds a local layer to that system. It ranges from a balcony herb pot to commercial greenhouses on supermarket roofs. Understanding the main techniques, and their trade-offs, helps explain why urban farming is growing and what it can and cannot do.</p>

<h3>Main Growing Techniques</h3>
<ul>
<li><strong>Soil-based beds:</strong> traditional growing in ground or raised beds, usually with imported clean soil and compost</li>
<li><strong>Hydroponics:</strong> growing plants in water with dissolved nutrients and no soil at all</li>
<li><strong>Aquaponics:</strong> a linked system where fish waste fertilizes plants and the plants help clean the water for the fish</li>
<li><strong>Controlled environment agriculture:</strong> indoor growing where light, heat, humidity and carbon dioxide are managed</li>
<li><strong>Green roof farming:</strong> growing crops on a building's roof using lightweight soil mixes</li>
<li><strong>Season extension:</strong> using hoop houses, cold frames and row covers to grow earlier and later in the year</li>
</ul>

<h3>Comparing Approaches</h3>
<table>
<thead><tr><th>Approach</th><th>Strengths</th><th>Weaknesses</th></tr></thead>
<tbody>
<tr><td>Community and backyard gardens</td><td>Low cost, builds community, teaches skills</td><td>Small harvests, depends on volunteers and land access</td></tr>
<tr><td>Rooftop soil farms</td><td>Uses unused space, cools buildings, absorbs stormwater</td><td>Weight limits, wind, costly to install</td></tr>
<tr><td>Rooftop greenhouses</td><td>Year-round growing, can capture building heat</td><td>High building and energy costs</td></tr>
<tr><td>Indoor vertical farms</td><td>Very high yield per square meter, little water, no weather risk</td><td>Heavy electricity use, limited to leafy crops and herbs</td></tr>
</tbody>
</table>

<h3>Real-World Benefits</h3>
<p>Urban farms supply fresh produce to neighborhoods that may lack grocery stores. Green spaces reduce the urban heat island effect, where pavement and buildings make cities hotter than the countryside. Planted areas soak up rain, easing pressure on storm drains. Farms create jobs and training programs, especially for young people. Composting turns city food scraps into soil instead of sending them to landfill.</p>

<h3>Challenges and Trade-offs</h3>
<p>The biggest barrier is land. Urban land is valuable, and farms on borrowed lots can be removed when developers buy them. Soil contamination from lead, past industry or traffic is common, so testing and raised beds are essential. Water access, zoning rules that may not mention farming, and the high cost of indoor technology all limit growth. Staple crops like wheat, rice and beans need large areas, so cities will still rely on rural farms for most calories.</p>

<h3>Solutions That Work</h3>
<ol>
<li><strong>Land access programs:</strong> cities can lease vacant lots to gardeners for long periods.</li>
<li><strong>Soil safety:</strong> testing, clean soil, compost and raised beds protect growers and eaters.</li>
<li><strong>Integrated design:</strong> new buildings can include roofs designed to carry farms.</li>
<li><strong>Waste loops:</strong> collecting food scraps for compost closes the nutrient cycle.</li>
<li><strong>Community leadership:</strong> farms run by local residents are more likely to meet local needs.</li>
</ol>
`,
        UNDERGRADUATE: `
<h2>Urban Farm Economics, Policy Support and City Planning</h2>
<p>Urban agriculture sits at the intersection of food systems, land use and municipal policy. Analysts evaluate it not only as a food source but as multifunctional infrastructure producing social, ecological and economic value. Viability depends on land tenure, production model, market channels and how well farms are written into city plans.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Multifunctionality:</strong> the idea that urban farms deliver food plus other services such as education, stormwater management and social cohesion</li>
<li><strong>Land tenure:</strong> the legal terms under which a farmer occupies land, such as ownership, long-term lease or short-term permission</li>
<li><strong>Value-added production:</strong> turning raw crops into products such as sauces or prepared salads that earn more per unit</li>
<li><strong>Zoning:</strong> local rules that decide which activities are allowed on each parcel of city land</li>
<li><strong>Controlled environment agriculture:</strong> indoor production where light, temperature, humidity and nutrients are managed precisely</li>
<li><strong>Ecosystem services:</strong> benefits people get from ecological processes, such as cooling, pollination and water infiltration</li>
</ul>

<h3>The Economics of Urban Farms</h3>
<p>Urban farms face higher land and labor costs than rural farms, so commercial operations tend to choose high-value, perishable crops: salad greens, herbs, microgreens, tomatoes and specialty produce. These crops sell at premium prices and benefit most from short travel times. Many operations combine several income streams, including direct sales to restaurants, community supported agriculture shares, farmers markets, workshops, events and grants. Nonprofit farms often rely heavily on philanthropy and public funding, which makes them vulnerable when grants end.</p>
<p>Indoor vertical farms illustrate the trade-off between yield and cost. Output per square meter can be many times higher than field farming, but the business depends on electricity prices and capital costs. Several well-funded vertical farm companies have struggled or closed in recent years, showing that technical productivity does not guarantee profitability.</p>

<h3>Comparing Business Models</h3>
<table>
<thead><tr><th>Model</th><th>Main revenue</th><th>Key risk</th></tr></thead>
<tbody>
<tr><td>Nonprofit community farm</td><td>Grants, donations, program fees</td><td>Funding instability</td></tr>
<tr><td>Small commercial market farm</td><td>Direct sales, CSA shares, restaurants</td><td>Land loss, thin margins</td></tr>
<tr><td>Rooftop greenhouse business</td><td>Wholesale to grocers, subscriptions</td><td>High capital and building costs</td></tr>
<tr><td>Indoor vertical farm</td><td>Retail and wholesale leafy greens</td><td>Energy costs and investor expectations</td></tr>
</tbody>
</table>

<h3>Policy Support Tools</h3>
<p>Cities support urban agriculture through zoning amendments that explicitly permit farming, rules for keeping bees and small livestock, land banks that lease vacant parcels, water access arrangements, composting permits, and property tax incentives for land kept in production. Planning departments increasingly include urban agriculture in comprehensive plans and food policy council recommendations, so farms are treated as long-term land uses rather than temporary placeholders.</p>

<h3>Applied Checklist: Assessing an Urban Farm Site</h3>
<ol>
<li>Is tenure secure for long enough to pay back investments in soil and infrastructure?</li>
<li>Has the soil been tested, and is there a plan for contamination?</li>
<li>How many hours of direct sun does the site receive in the growing season?</li>
<li>Is there reliable, affordable water access?</li>
<li>Does zoning permit the intended activities, including sales on site?</li>
<li>Who are the customers, and is there demand for the planned crops?</li>
<li>Will local residents be involved in governance and benefit from the farm?</li>
</ol>
`,
        GRADUATE: `
<h2>Urban Agriculture as Food Justice and Community Development</h2>
<p>At the graduate level, urban agriculture is best analyzed not simply as a production technique but as a social and political practice. Community-led farms in disinvested neighborhoods often aim to build local power, jobs and health, and to reclaim land for residents. Whether urban agriculture advances justice or reinforces inequality depends on who controls land, who governs projects and who benefits from the value they create.</p>

<h3>Food Access and Beyond</h3>
<p>Urban farms are frequently promoted as a response to low food access in so-called food deserts. Many scholars and organizers prefer terms such as food apartheid or food inequity because they highlight that unequal access results from policy choices such as redlining, retail disinvestment and land use decisions, not natural conditions. Urban farms alone rarely supply a large share of a neighborhood's food, but they can provide fresh produce, nutrition education, youth employment and a base for broader organizing around food, housing and land.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Food apartheid:</strong> a term emphasizing that unequal food access is produced by structural racism and policy decisions</li>
<li><strong>Green gentrification:</strong> rising property values and displacement that can follow new green amenities in a neighborhood</li>
<li><strong>Community land trust:</strong> a nonprofit that holds land permanently for community benefit, separating land ownership from use</li>
<li><strong>Community development:</strong> collective efforts by residents to improve economic, social and environmental conditions in their area</li>
<li><strong>Participatory governance:</strong> decision-making structures where community members hold real authority over a project</li>
<li><strong>Social enterprise:</strong> an organization that uses business revenue to pursue social goals</li>
</ul>

<h3>Institutional Barriers</h3>
<p>Farms on vacant land often hold only temporary permission and can be displaced once a neighborhood becomes attractive to developers. Ironically, farms that make a neighborhood greener and safer can contribute to the rising land values that push them and their neighbors out. Funding often flows to well-connected organizations rather than to residents of color who have led farming in their own communities. Grant cycles emphasize short-term outputs, while soil building and leadership development take years.</p>

<h3>Planning and Policy Levers</h3>
<table>
<thead><tr><th>Lever</th><th>Equity potential</th><th>Risk if poorly designed</th></tr></thead>
<tbody>
<tr><td>Long-term leases or land transfers to community groups</td><td>Secures tenure for resident-led farms</td><td>Transfers favor established nonprofits only</td></tr>
<tr><td>Community land trusts</td><td>Removes land from speculation permanently</td><td>Requires sustained capacity and funding</td></tr>
<tr><td>Tax incentives for agricultural use</td><td>Encourages owners to allow farming</td><td>Can become tax shelters for speculators</td></tr>
<tr><td>Procurement by public institutions</td><td>Creates stable markets for urban growers</td><td>Volume and certification demands exclude small farms</td></tr>
<tr><td>Workforce and youth programs</td><td>Builds skills and income locally</td><td>Short-term jobs without career pathways</td></tr>
</tbody>
</table>

<h3>Evaluation Framework</h3>
<p>Evaluating urban agriculture as community development requires indicators beyond pounds of produce. A balanced framework asks:</p>
<ol>
<li><strong>Control:</strong> do residents most affected by food inequity lead decisions and own assets?</li>
<li><strong>Access:</strong> is food distributed affordably and in culturally appropriate forms?</li>
<li><strong>Economic benefit:</strong> are wages, skills and enterprise opportunities captured locally?</li>
<li><strong>Tenure:</strong> is the land protected from displacement over the long term?</li>
<li><strong>Health and environment:</strong> are soil safety, green space and wellbeing improving?</li>
<li><strong>Anti-displacement:</strong> are greening efforts paired with housing protections?</li>
</ol>
<p>Viewed this way, urban agriculture becomes one part of a broader strategy that links food, land, housing and economic democracy rather than a stand-alone fix for complex structural problems.</p>
`,
        PHD: `
<h2>Research Frontiers in Urban Agriculture: Productivity, Services and Policy Effectiveness</h2>
<p>Research on urban agriculture has grown quickly, yet the evidence base remains uneven. Claims about how much food cities could produce, how much carbon urban farms save and how much policy changes help often rest on small case studies, modeled estimates or optimistic assumptions. Doctoral-level work focuses on measurement, scaling, comparative analysis and the politics embedded in what gets counted.</p>

<h3>Measuring Productivity</h3>
<p>Yield data from urban farms are scarce and inconsistent. Many gardens do not record harvests, and those that do use different units, crop categories and time frames. Intensive, well-managed urban plots can match or exceed conventional yields for some vegetables, but averages across many gardens vary widely. Citizen science harvest logging, standardized protocols and multi-year panels are emerging methods to close this gap. Another strand estimates city-wide potential using remote sensing and geographic information systems to map rooftops, vacant land and solar exposure, then applying yield assumptions. These scenario studies are sensitive to assumptions about which spaces are actually available and how productive they would be.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Life cycle assessment:</strong> a method that accounts for environmental impacts across all stages of a product, from inputs to disposal</li>
<li><strong>Ecosystem service valuation:</strong> methods that estimate the economic or social value of benefits such as cooling and stormwater retention</li>
<li><strong>Urban metabolism:</strong> a framework that studies cities as systems of flows of energy, water, nutrients and materials</li>
<li><strong>Counterfactual:</strong> the outcome that would have occurred without an intervention, needed to estimate causal effects</li>
<li><strong>Political ecology:</strong> an approach that studies how power, economics and history shape environmental outcomes</li>
<li><strong>Spatial potential modeling:</strong> using mapping data to estimate how much land or roof area could support food production</li>
</ul>

<h3>Environmental Services and Life Cycle Questions</h3>
<p>Life cycle assessments show mixed results. Soil-based urban gardens that use compost and rainwater can have low impacts, while heated greenhouses and lit indoor farms may have higher carbon footprints than field-grown produce shipped long distances, depending heavily on the electricity mix. Transport often accounts for a smaller share of food's footprint than production, so food miles alone are a weak indicator. Studies of cooling, biodiversity and stormwater benefits are promising but often site specific and difficult to generalize.</p>

<table>
<thead><tr><th>Research question</th><th>Common method</th><th>Main limitation</th></tr></thead>
<tbody>
<tr><td>How much food can cities produce?</td><td>GIS mapping with yield assumptions</td><td>Overestimates available space and yields</td></tr>
<tr><td>What are the climate impacts?</td><td>Life cycle assessment</td><td>Results depend on system boundaries and energy source</td></tr>
<tr><td>Do farms improve diets and health?</td><td>Surveys and quasi-experimental designs</td><td>Self-selection of participants</td></tr>
<tr><td>Do policies increase urban farming?</td><td>Comparative city case studies</td><td>Few cities, many confounding factors</td></tr>
</tbody>
</table>

<h3>Policy Effectiveness</h3>
<p>Many cities have adopted urban agriculture zoning, land programs or tax incentives, but rigorous evaluation of their effects is rare. Researchers face small samples, diverse policy designs and the difficulty of building credible counterfactuals. Mixed-methods designs that combine administrative data, interviews and spatial analysis offer more robust insights than single-method studies. Implementation research asks why similar policies succeed in one city and stall in another, pointing to the role of community organizing, agency capacity and land markets.</p>

<h3>Contested Questions</h3>
<ul>
<li>Is high-tech indoor farming a meaningful contribution to sustainability or mainly a niche for premium greens?</li>
<li>Does urban agriculture challenge inequitable land relations, or can it be absorbed into gentrification and city branding?</li>
<li>Should success be measured by food output, by social outcomes, or by shifts in power and land control?</li>
<li>How should researchers handle health risks from contaminated soils without discouraging community growing?</li>
</ul>

<h3>Open Research Directions</h3>
<ol>
<li>Long-term, standardized productivity datasets across diverse urban farm types.</li>
<li>Integrated assessments that combine life cycle, social and economic indicators.</li>
<li>Causal evaluation of land access, zoning and procurement policies.</li>
<li>Participatory research co-designed with community growers who control data use.</li>
<li>Modeling of urban agriculture within regional food systems rather than in isolation.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'fuq1',
      question: {
        ELEMENTARY: 'Where can you grow food in a city?',
        MIDDLE_SCHOOL: 'What is vertical farming?',
        HIGH_SCHOOL: 'What is the biggest barrier for many urban farms?',
        UNDERGRADUATE: 'Which policy tool helps urban farms get started and stay viable?',
        GRADUATE: 'Why do many organizers prefer the term "food apartheid" to "food desert"?',
        PHD: 'What is a key research gap in urban agriculture?',
      },
      options: {
        ELEMENTARY: ['Rooftops, balconies and empty lots', 'Only far away in the country', 'Nowhere at all', 'Only inside the fridge'],
        MIDDLE_SCHOOL: ['Growing plants in stacked layers, usually indoors under lamps', 'Farming only on steep hills', 'Planting trees in a straight line', 'Digging very deep holes for seeds'],
        HIGH_SCHOOL: ['Access to affordable, secure land', 'Too much open space', 'Too many customers', 'Rain that never stops'],
        UNDERGRADUATE: ['Zoning amendments and land leasing programs', 'Banning sales of produce', 'Removing all water access', 'Taxing gardens more heavily than parking lots'],
        GRADUATE: ['It stresses that unequal access is produced by policy and structural racism', 'It means there is no food anywhere', 'It refers only to rural farmland', 'It describes a type of farm building'],
        PHD: ['Long-term, standardized data on urban farm productivity', 'How seeds germinate', 'Whether plants need light', 'What color soil is'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Cities have lots of growing spaces: rooftops, balconies, windowsills and empty lots!',
        MIDDLE_SCHOOL: 'Vertical farms stack plants on shelves and use LED lights, often with hydroponics.',
        HIGH_SCHOOL: 'Urban land is valuable, so farms often lack secure, affordable places to grow.',
        UNDERGRADUATE: 'Zoning that permits farming and land programs that lease vacant parcels make farms possible and stable.',
        GRADUATE: 'Food apartheid highlights that low access comes from decisions like redlining and disinvestment, not nature.',
        PHD: 'Many gardens do not record harvests, and those that do use inconsistent methods.',
      },
    },
    {
      id: 'fuq2',
      question: {
        ELEMENTARY: 'What is compost?',
        MIDDLE_SCHOOL: 'What is hydroponics?',
        HIGH_SCHOOL: 'How does aquaponics work?',
        UNDERGRADUATE: 'Why do commercial urban farms often grow salad greens and herbs?',
        GRADUATE: 'What is green gentrification?',
        PHD: 'What do life cycle assessments often show about lit indoor farms?',
      },
      options: {
        ELEMENTARY: ['Plastic toys for the garden', 'A kind of fence', 'Old food scraps and leaves that turn into rich soil', 'Rain water in a bucket'],
        MIDDLE_SCHOOL: ['Growing plants in sand only', 'Growing plants on a mountain', 'Growing plants with roots in nutrient-rich water instead of soil', 'Growing plants in the dark with no water'],
        HIGH_SCHOOL: ['Fish and plants compete for food', 'Plants grow on top of fish tanks with no connection', 'Fish waste fertilizes plants and plants help clean the water', 'Fish are fed with fresh vegetables only'],
        UNDERGRADUATE: ['They are the cheapest crops to ship long distances', 'They need the most land', 'They are high-value, perishable crops that benefit from short travel', 'They cannot be grown anywhere else'],
        GRADUATE: ['Painting buildings green', 'A farming method for city roofs', 'Rising land values and displacement that can follow new green amenities', 'A government grant for gardens'],
        PHD: ['They always have the lowest footprint of any food', 'They use no electricity', 'Their footprint can be high and depends strongly on the electricity mix', 'They cannot be measured with life cycle methods'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Compost is made when food scraps and leaves rot into dark, rich soil that feeds plants.',
        MIDDLE_SCHOOL: 'In hydroponics, roots sit in water mixed with nutrients, and no soil is needed.',
        HIGH_SCHOOL: 'Aquaponics links fish and plants in one loop that recycles nutrients and water.',
        UNDERGRADUATE: 'High land and labor costs push urban farms toward premium crops that are best when fresh.',
        GRADUATE: 'New parks and farms can raise property values, which may push out the residents they were meant to serve.',
        PHD: 'Electricity for lights and climate control can make indoor farm footprints higher than field production.',
      },
    },
    {
      id: 'fuq3',
      question: {
        ELEMENTARY: 'What do plants in a city need to grow?',
        MIDDLE_SCHOOL: 'Why do city farmers test their soil?',
        HIGH_SCHOOL: 'What is the urban heat island effect?',
        UNDERGRADUATE: 'What does land tenure describe?',
        GRADUATE: 'What does a community land trust do?',
        PHD: 'Why is "food miles" considered a weak indicator of climate impact?',
      },
      options: {
        ELEMENTARY: ['Only loud music', 'Sunlight, water, good soil and care', 'Only plastic pots', 'Snow every day'],
        MIDDLE_SCHOOL: ['To find buried treasure', 'To check for harmful metals like lead', 'To make the soil a different color', 'To count the worms for fun only'],
        HIGH_SCHOOL: ['Islands that form in city rivers', 'Cities being hotter than the countryside due to pavement and buildings', 'A type of greenhouse', 'Heat made by compost piles'],
        UNDERGRADUATE: ['The type of crops planted', 'The legal terms under which a farmer occupies land', 'The amount of rain a site gets', 'The number of workers on a farm'],
        GRADUATE: ['Sells land to the highest bidder', 'Holds land permanently for community benefit, away from speculation', 'Builds parking garages', 'Manages only national parks'],
        PHD: ['Transport is usually a smaller share of food emissions than production', 'Food never travels', 'Miles cannot be measured', 'Transport is the only source of emissions'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'City plants need the same things as country plants: sun, water, soil and someone to care for them.',
        MIDDLE_SCHOOL: 'Old city soil can contain lead from paint, traffic or factories, so testing keeps people safe.',
        HIGH_SCHOOL: 'Pavement and buildings absorb heat, and green spaces like farms help cool things down.',
        UNDERGRADUATE: 'Tenure, such as ownership or a long lease, determines whether investments in a site can pay off.',
        GRADUATE: 'Land trusts keep land in community hands for the long term, protecting farms from displacement.',
        PHD: 'How food is produced usually matters more for emissions than how far it travels.',
      },
    },
    {
      id: 'fuq4',
      question: {
        ELEMENTARY: 'Why is food from a city farm so fresh?',
        MIDDLE_SCHOOL: 'What is one downside of vertical farms?',
        HIGH_SCHOOL: 'Why will cities still rely on rural farms for most calories?',
        UNDERGRADUATE: 'What lesson do struggles of some vertical farm companies teach?',
        GRADUATE: 'Which indicator best fits an equity-focused evaluation of an urban farm?',
        PHD: 'Why is it hard to evaluate the effects of urban agriculture policies?',
      },
      options: {
        ELEMENTARY: ['It is painted to look fresh', 'It is kept in a freezer for a year', 'It is made in a factory', 'It does not travel far in a truck'],
        MIDDLE_SCHOOL: ['They cannot grow lettuce', 'They need giant fields', 'They must be on mountains', 'Their lights and fans use a lot of electricity'],
        HIGH_SCHOOL: ['City soil cannot grow anything', 'Rural farms are always closer', 'Cities have banned all farming', 'Staple crops like grains and beans need large areas'],
        UNDERGRADUATE: ['Indoor farming is always the most profitable', 'Electricity is free', 'Vertical farms need no investment', 'High yields do not guarantee profitability'],
        GRADUATE: ['Only the total weight of vegetables harvested', 'The size of the farm sign', 'The number of photos posted online', 'Whether affected residents lead decisions and own assets'],
        PHD: ['Policies never change', 'Cities refuse to share their names', 'There is too much perfect data', 'Small samples, diverse policies and weak counterfactuals'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'City farm food is grown close by, so it gets to your plate quickly and tastes fresh.',
        MIDDLE_SCHOOL: 'Indoor lamps and climate control need lots of electricity, which costs money and can add pollution.',
        HIGH_SCHOOL: 'Grains, rice and beans need big fields, so cities still depend on rural farms for most calories.',
        UNDERGRADUATE: 'Energy and capital costs mean that technical productivity alone does not make a business viable.',
        GRADUATE: 'Equity-focused evaluation asks who controls the project and who captures its benefits.',
        PHD: 'Few cities, many confounding factors and hard-to-build counterfactuals limit causal evaluation.',
      },
    },
    {
      id: 'fuq5',
      question: {
        ELEMENTARY: 'Which animals visit city gardens to help flowers?',
        MIDDLE_SCHOOL: 'What are food miles?',
        HIGH_SCHOOL: 'How do planted areas help with heavy rain?',
        UNDERGRADUATE: 'What does multifunctionality mean for urban farms?',
        GRADUATE: 'Why do short grant cycles challenge community farms?',
        PHD: 'What does spatial potential modeling estimate?',
      },
      options: {
        ELEMENTARY: ['Sharks and whales', 'Bees and butterflies', 'Elephants', 'Penguins'],
        MIDDLE_SCHOOL: ['How far a farmer walks each day', 'The distance food travels from farm to eater', 'The size of a farm field', 'How many miles a tractor can drive'],
        HIGH_SCHOOL: ['They make storm drains overflow faster', 'They soak up rainwater and ease pressure on drains', 'They turn rain into snow', 'They have no effect on water'],
        UNDERGRADUATE: ['Farms that only grow one crop', 'Farms that deliver food plus services like education and stormwater control', 'Farms with many owners', 'Farms that work only at night'],
        GRADUATE: ['They give too much money', 'Soil building and leadership development take years', 'Grants require no reports', 'Farms do not need funding'],
        PHD: ['The weight of a single tomato', 'How much land or roof area could support food production', 'The price of seeds', 'The number of farmers markets'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Bees and butterflies visit garden flowers and help them make fruit and seeds.',
        MIDDLE_SCHOOL: 'Food miles measure how far food travels before it reaches your plate.',
        HIGH_SCHOOL: 'Soil and plants absorb rain, so less water rushes into storm drains at once.',
        UNDERGRADUATE: 'Urban farms are valued for many functions at once, not only for the food they grow.',
        GRADUATE: 'Grants often demand quick results, while the real work of building soil and leaders is slow.',
        PHD: 'These models use maps of rooftops, vacant land and sunlight to estimate production potential.',
      },
    },
  ],
}

export default expansion
