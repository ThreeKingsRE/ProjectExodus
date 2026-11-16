import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'food-sovereignty',
  moduleKey: 'urban-farming~2',
  lessons: [
    {
      id: 'fs-urban-1',
      title: 'Rooftop Gardens and City Farms',
      content: {
        ELEMENTARY: `
<h2>Gardens in the Sky!</h2>
<p>Look up! In many cities, there are gardens growing on top of buildings. Tomatoes, lettuce, herbs and even bees can live up there. City people are also turning empty lots into green, leafy farms. Let's climb the stairs and explore a rooftop garden together.</p>

<h3>How Does a Garden Get on a Roof?</h3>
<p>A roof is not like the ground. It has no soil, and rain usually runs right off it. So city gardeners bring the garden up with them. They use raised boxes, pots and big grow bags filled with special light soil. Light soil is important because a roof can only hold so much weight.</p>
<ul>
<li><strong>Rooftop garden:</strong> a garden built on the flat top of a building where food or flowers can grow</li>
<li><strong>Raised bed:</strong> a big box filled with soil that sits above the ground or roof</li>
<li><strong>Green roof:</strong> a roof covered with living plants that help keep the building cool</li>
<li><strong>Empty lot:</strong> a piece of city land with no building on it that can become a garden</li>
<li><strong>Pollinator:</strong> a bee, butterfly or other helper that carries pollen so plants can make fruit</li>
</ul>

<h3>Why Are Roof Gardens So Cool?</h3>
<p>Plants on a roof work like a shady hat for the building. They keep it cooler in summer. They also soak up rain, so less water rushes into the streets during a storm. Bees and butterflies get a place to rest and eat. And people who live nearby get fresh food that only traveled down a few flights of stairs!</p>

<h3>Rooftop Gardening Rules</h3>
<ol>
<li>Always go up with a grown-up, and stay away from the edge.</li>
<li>Choose plants that like sun and wind, like herbs, beans and cherry tomatoes.</li>
<li>Water often, because roofs get hot and pots dry out fast.</li>
<li>Share the harvest with neighbors!</li>
</ol>

<h3>Start Your Own Mini Sky Garden</h3>
<p>You do not need a roof to begin. A sunny windowsill or balcony works too. Plant a few herb seeds in a pot, give them water and light, and watch them grow. You will be a city farmer in no time.</p>

<h3>Think About It</h3>
<p>If you could plant a garden on top of your school, what would you grow first?</p>
`,
        MIDDLE_SCHOOL: `
<h2>From Rooftops to Vertical Farms: Growing Food in the City</h2>
<p>More than half of the world's people live in cities, and most of their food is grown far away. Urban farmers are bringing some of that growing back home. They use rooftops, walls, empty lots and even indoor rooms stacked with plants. Each technique solves a different city problem: not much space, no good soil, or not enough sunlight.</p>

<h3>Ways to Farm in a City</h3>
<ul>
<li><strong>Rooftop farm:</strong> a garden or greenhouse on top of a building, using containers or a layer of growing material</li>
<li><strong>Vertical farm:</strong> an indoor farm that grows plants in stacked layers under artificial lights</li>
<li><strong>Hydroponics:</strong> growing plants with their roots in water mixed with nutrients instead of soil</li>
<li><strong>Aquaponics:</strong> a system where fish waste feeds plants and the plants help clean the water for the fish</li>
<li><strong>Growing medium:</strong> the material that roots grow in, such as soil, compost, coconut fiber or lightweight mixes</li>
<li><strong>Load capacity:</strong> how much weight a roof can safely hold</li>
</ul>

<h3>Comparing City Farming Techniques</h3>
<table>
<thead><tr><th>Technique</th><th>Where it happens</th><th>Good for</th><th>Challenge</th></tr></thead>
<tbody>
<tr><td>Rooftop soil garden</td><td>Flat roofs</td><td>Vegetables, herbs, flowers</td><td>Weight limits, wind and heat</td></tr>
<tr><td>Rooftop greenhouse</td><td>Strong flat roofs</td><td>Growing all year</td><td>Costly to build</td></tr>
<tr><td>Vertical farm</td><td>Indoor rooms or warehouses</td><td>Leafy greens and herbs</td><td>Uses a lot of electricity for lights</td></tr>
<tr><td>Community lot garden</td><td>Empty city land</td><td>Many crops, gathering space</td><td>Soil may need testing; land may not be secure</td></tr>
</tbody>
</table>

<h3>Why Roofs Need Special Planning</h3>
<p>Wet soil is very heavy. Before anyone builds a rooftop farm, an engineer checks how much weight the roof can carry. Gardeners use lightweight growing mixes and place heavy planters over strong supports. They also protect the roof with a waterproof layer so water and roots do not leak into the building below.</p>

<h3>What Cities Gain</h3>
<p>Green roofs help cool buildings and neighborhoods, which matters because cities are often hotter than the countryside around them. They hold rainwater during storms, give homes to pollinators, and let people learn where food comes from. Rooftop and vertical farms will not feed a whole city, but they can add fresh, local food and bring neighbors together.</p>
`,
        HIGH_SCHOOL: `
<h2>Urban Agriculture Models, Zoning and Community Benefits</h2>
<p>Urban agriculture ranges from a few planters on an apartment roof to commercial greenhouses and warehouse-sized indoor farms. Each model has different costs, rules and benefits. This lesson focuses on the built environment: how buildings and city land are adapted for growing food, which rules shape what is possible, and who benefits.</p>

<h3>Models of Urban Food Production</h3>
<ul>
<li><strong>Intensive green roof:</strong> a roof with a deep growing layer that can support vegetables, shrubs and even small trees</li>
<li><strong>Extensive green roof:</strong> a roof with a thin, light growing layer, usually planted with hardy groundcovers rather than food crops</li>
<li><strong>Building-integrated agriculture:</strong> food production designed into a building so it can share heat, water or space with the building</li>
<li><strong>Controlled environment agriculture:</strong> growing crops indoors or in greenhouses where light, temperature and humidity are managed</li>
<li><strong>Zoning:</strong> local rules that divide land into areas and say what activities are allowed in each</li>
<li><strong>Building code:</strong> rules about construction safety, including how much load a roof can carry and how people can access it</li>
</ul>

<h3>Comparing Models</h3>
<table>
<thead><tr><th>Model</th><th>Start-up cost</th><th>Main products</th><th>Main benefit</th><th>Main limitation</th></tr></thead>
<tbody>
<tr><td>Community rooftop garden</td><td>Low to moderate</td><td>Vegetables, herbs</td><td>Education and social connection</td><td>Small harvests; roof access rules</td></tr>
<tr><td>Commercial rooftop farm</td><td>Moderate to high</td><td>Greens, tomatoes, herbs</td><td>Fresh local sales to restaurants and markets</td><td>Structural upgrades and insurance</td></tr>
<tr><td>Rooftop greenhouse</td><td>High</td><td>Year-round greens and vine crops</td><td>Long season; can use building heat</td><td>Capital cost and permits</td></tr>
<tr><td>Indoor vertical farm</td><td>Very high</td><td>Leafy greens, herbs, microgreens</td><td>Very high output per area</td><td>Heavy electricity use for lighting and cooling</td></tr>
</tbody>
</table>

<h3>How Rules Shape Urban Farms</h3>
<p>Zoning can allow or block farming on vacant lots, limit whether farm products can be sold on site, and restrict structures like greenhouses, hoop houses or compost bins. Building codes determine whether a roof can host people and planters, often requiring guardrails, safe stairs and engineering approval. Some cities have updated their codes to explicitly permit urban agriculture, while others still treat it as an unclear or unpermitted use.</p>

<h3>Community Benefits and Concerns</h3>
<p>Urban farms can provide fresh produce in neighborhoods with few grocery stores, create jobs and training, and offer green space. Green roofs reduce stormwater runoff and help moderate building temperatures. However, high-tech farms often sell premium greens that low-income residents may not be able to afford, and new green amenities can raise property values in ways that contribute to displacement. Projects designed with residents tend to deliver more lasting benefits.</p>

<h3>Solutions and Good Practices</h3>
<ol>
<li>Have a structural engineer assess any roof before installing soil or greenhouses.</li>
<li>Test vacant-lot soil for contaminants such as lead, and use raised beds with clean soil if needed.</li>
<li>Work with neighbors to decide what to grow and how produce will be shared or sold.</li>
<li>Advocate for zoning and code updates that clearly allow food growing and on-site sales.</li>
</ol>
`,
        UNDERGRADUATE: `
<h2>Economics, Policy and Design of Urban Food Production</h2>
<p>Urban agriculture is often discussed as if it were one thing, but rooftop beds, rooftop greenhouses and indoor vertical farms have very different cost structures, design requirements and policy needs. Analyzing them requires attention to the building as a system, the economics of high-value crops on expensive land, and the regulatory frameworks that enable or block production.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Dead load and live load:</strong> the permanent weight of a structure and its materials versus the variable weight of people, water and equipment, both of which a roof must carry</li>
<li><strong>Saturated weight:</strong> the weight of growing media when fully soaked with water, which is the design case for rooftop loads</li>
<li><strong>Yield per unit area:</strong> the quantity of produce harvested from a given growing area over a period, used to compare systems</li>
<li><strong>Capital expenditure:</strong> upfront spending on structures, equipment and installation</li>
<li><strong>Operating expenditure:</strong> recurring costs such as labor, energy, water, seeds and nutrients</li>
<li><strong>Land value capture:</strong> the way public or private actors benefit from increases in property value created by improvements nearby</li>
</ul>

<h3>Designing for the Roof</h3>
<p>Because saturated growing media is heavy, roof capacity is the first design constraint. Retrofitting an existing building often limits growers to shallow, lightweight systems, while new buildings can be designed with farms in mind. Other design factors include waterproofing and root barriers, drainage, wind exposure (which increases water loss and can damage plants), safe access for workers and deliveries, and irrigation that can cope with fast drying on hot, sunny roofs.</p>

<h3>The Economics of Urban Farms</h3>
<p>Urban land and building space are expensive, so most commercial urban farms grow high-value, perishable crops such as salad greens, herbs and microgreens, which benefit from short distribution distances. Staple crops like grains rarely make economic sense in cities. Labor is typically a major operating cost for soil-based rooftop farms, while energy for lighting and climate control dominates in indoor vertical farms. Many urban farms combine revenue streams, such as produce sales, education programs, events, rooftop rent arrangements and grants.</p>
<table>
<thead><tr><th>System</th><th>Capital cost</th><th>Dominant operating cost</th><th>Typical revenue strategy</th></tr></thead>
<tbody>
<tr><td>Rooftop soil farm</td><td>Moderate</td><td>Labor</td><td>Restaurant sales, community supported agriculture, education</td></tr>
<tr><td>Rooftop hydroponic greenhouse</td><td>High</td><td>Labor and heating</td><td>Year-round retail contracts</td></tr>
<tr><td>Indoor vertical farm</td><td>Very high</td><td>Electricity for lighting and cooling</td><td>Premium greens sold at scale</td></tr>
<tr><td>Nonprofit community garden</td><td>Low</td><td>Volunteer coordination</td><td>Grants, donations, shared harvest</td></tr>
</tbody>
</table>

<h3>Policy Frameworks</h3>
<p>Supportive policies include zoning that names agriculture as a permitted use, clear building-code pathways for rooftop farms, access to municipal water at reasonable rates, tax incentives or density bonuses for green roofs, and stormwater fee credits when green roofs reduce runoff. Land access tools such as long-term leases on public land and community land trusts help non-commercial growers who cannot compete on price.</p>

<h3>Applied Checklist: Evaluating a Rooftop Farm Proposal</h3>
<ol>
<li>Confirm roof load capacity, waterproofing condition and safe access with a qualified engineer.</li>
<li>Match the growing system to the load limit: shallow beds, containers or a greenhouse.</li>
<li>Estimate yield, labor and water needs using realistic assumptions for exposure and climate.</li>
<li>Identify revenue streams and check zoning for on-site sales and events.</li>
<li>Assess stormwater, cooling and community benefits that might qualify for incentives.</li>
<li>Plan for who will benefit, including affordability of produce for nearby residents.</li>
</ol>
`,
        GRADUATE: `
<h2>Urban Food Systems, Controlled Environment Agriculture and Food Planning</h2>
<p>For planners and policymakers, rooftop and indoor farms are pieces of a larger urban food system that includes retail, distribution, waste, land use and public health. The key questions are what role urban production should play, how controlled environment agriculture fits with energy and climate goals, and how food can be integrated into city planning processes that have historically ignored it.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Urban food system:</strong> the full set of activities and actors that produce, process, distribute, sell, consume and dispose of food in a city region</li>
<li><strong>Food planning:</strong> integrating food production, access and waste into land-use, transport and public health planning</li>
<li><strong>Food policy council:</strong> a body of stakeholders that advises governments on food system issues and coordinates across sectors</li>
<li><strong>Controlled environment agriculture:</strong> production in greenhouses or indoor facilities where climate and light are actively managed to increase control and yield</li>
<li><strong>Building-integrated agriculture:</strong> designing farms into buildings to exchange heat, water, carbon dioxide or space with building systems</li>
<li><strong>Green gentrification:</strong> displacement pressure created when environmental amenities raise property values and rents</li>
</ul>

<h3>Controlled Environment Agriculture in the City</h3>
<p>Controlled environment agriculture promises reliable, year-round production with high yields per area, low water use through recirculation and little or no pesticide use. Its weaknesses are energy demand and capital cost. Fully indoor vertical farms replace sunlight with electric light, so their climate performance depends heavily on electricity sources and lighting efficiency. Rooftop greenhouses use daylight and can capture waste heat from the buildings below, which some studies suggest can improve energy performance, though results depend strongly on climate and building type. Several high-profile indoor farming companies have struggled financially, highlighting how sensitive the model is to energy prices and financing.</p>

<table>
<thead><tr><th>Approach</th><th>Energy profile</th><th>Water profile</th><th>Planning implication</th></tr></thead>
<tbody>
<tr><td>Open rooftop farm</td><td>Low; sunlight driven</td><td>Moderate; high evaporation on exposed roofs</td><td>Fits green roof and stormwater policies</td></tr>
<tr><td>Rooftop greenhouse</td><td>Moderate; can share building heat</td><td>Low with recirculation</td><td>Needs code pathways for rooftop structures</td></tr>
<tr><td>Indoor vertical farm</td><td>High; electric lighting and cooling</td><td>Very low with recirculation</td><td>Interacts with grid planning and industrial zoning</td></tr>
</tbody>
</table>

<h3>Integrating Food into Urban Planning</h3>
<p>Comprehensive plans, zoning codes and capital budgets have traditionally treated food as a private market matter. Food planning places it alongside housing, transport and parks. Tools include food system assessments, urban agriculture zoning overlays, requirements or incentives for rooftop growing space in new development, inclusion of food infrastructure such as aggregation hubs and composting facilities, and procurement policies that buy from local growers for schools and public institutions.</p>

<h3>Institutional Barriers</h3>
<ol>
<li>Fragmented authority across planning, buildings, health, environment and economic development departments.</li>
<li>Insurance and liability concerns for rooftop access and public programs.</li>
<li>Short-term leases that deter investment in soil, structures and equipment.</li>
<li>Funding streams that favor capital projects over long-term operating support.</li>
<li>Limited data on outcomes, making it harder to justify public support.</li>
</ol>

<h3>Equity and Evaluation</h3>
<p>Planners should ask who controls urban farms, who works on them and who eats their produce. Community-led gardens may generate fewer marketable crops but strong social outcomes, while commercial controlled environment farms may produce more food with fewer local benefits. Evaluation frameworks should combine production metrics with indicators of food access, employment quality, environmental services and community governance, and should monitor displacement risk near new green amenities.</p>
`,
        PHD: `
<h2>Research Frontiers: Productivity, Resilience and Social Outcomes of Urban Agriculture</h2>
<p>Research on urban agriculture spans agronomy, building science, ecology, economics and social science. Claims about its potential range from transformative to marginal, partly because studies use different system boundaries, scales and metrics. This lesson reviews methods for assessing productivity and environmental performance, debates about resilience contributions, and approaches to measuring social outcomes, with emphasis on rooftop and building-integrated systems.</p>

<h3>Measuring Productivity and Potential</h3>
<ul>
<li><strong>Self-sufficiency estimate:</strong> the share of a city's demand for a food group that could be met by local production under stated assumptions</li>
<li><strong>Geospatial potential analysis:</strong> using remote sensing and building data to estimate rooftop and vacant land area suitable for growing</li>
<li><strong>Life cycle assessment:</strong> quantifying environmental impacts across construction, operation and end of life per unit of produce</li>
<li><strong>Functional unit:</strong> the reference quantity, such as a kilogram of lettuce or a square meter of roof, against which impacts are compared</li>
<li><strong>Ecosystem services:</strong> benefits people obtain from ecosystems, including stormwater retention, cooling, habitat and recreation</li>
<li><strong>Social-ecological system:</strong> a framework treating people and ecosystems as interlinked components with feedbacks</li>
</ul>
<p>Geospatial studies typically find that suitable rooftop and vacant area could supply a meaningful share of some vegetables in certain cities but only a small share of total dietary energy. Results are sensitive to assumptions about structural capacity, shading, access, yield and crop mix, so ranges are wide. Yield data from real urban farms remain scarce relative to modeled estimates, and reported yields from intensive plots may not scale to whole-city potential.</p>

<h3>Environmental Performance</h3>
<p>Life cycle studies of rooftop farms often find that infrastructure, such as structures, growing media and irrigation equipment, contributes a large share of impacts per kilogram, so lifespan and productivity strongly affect results. Avoided transport is usually a smaller benefit than commonly assumed. For indoor farms, electricity source and lighting efficiency dominate. Including co-benefits such as stormwater retention and building energy savings can change conclusions, but how to allocate impacts among multiple functions remains contested.</p>

<h3>Contested Questions</h3>
<table>
<thead><tr><th>Question</th><th>Why it is contested</th></tr></thead>
<tbody>
<tr><td>Does urban agriculture increase food system resilience?</td><td>Local production is small relative to demand, but may matter for specific foods, social networks and response capacity during disruptions</td></tr>
<tr><td>Are indoor vertical farms environmentally favorable?</td><td>Outcomes depend on grid carbon intensity, crop choice and what production they displace</td></tr>
<tr><td>Should success be judged by yield or by social outcomes?</td><td>Different actors value food quantity, education, health, cohesion and political empowerment differently</td></tr>
<tr><td>Does greening drive displacement?</td><td>Causal attribution is difficult among many drivers of neighborhood change</td></tr>
</tbody>
</table>

<h3>Resilience and Social Outcomes</h3>
<p>Resilience arguments rest less on tonnage than on diversity, redundancy, skills and social capital. Community gardens can function as hubs for mutual aid and knowledge exchange during crises, but evidence is often qualitative and context specific. Social outcome research examines effects on diet, mental health, civic participation and food sovereignty, yet faces selection bias because participants choose to engage. Critical scholarship asks whether urban agriculture addresses structural causes of food insecurity, such as low wages and land markets, or shifts responsibility onto communities.</p>

<h3>Methodological Challenges</h3>
<p>Comparability is limited by inconsistent functional units, system boundaries and reporting. Many studies examine single sites over short periods. Quasi-experimental designs, longitudinal cohorts and participatory action research each address different weaknesses, and mixed-method approaches are increasingly used to connect biophysical and social outcomes.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Standardized protocols for measuring and reporting urban farm yields and inputs.</li>
<li>Coupled building-energy and crop models for rooftop greenhouses across climates.</li>
<li>Multi-functional life cycle methods that credit stormwater, cooling and biodiversity consistently.</li>
<li>Longitudinal studies of health, social cohesion and displacement around urban farms.</li>
<li>Analysis of how governance and land tenure shape who benefits from urban agriculture.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'furbanq1',
      question: {
        ELEMENTARY: 'Where can you grow food in a city?',
        MIDDLE_SCHOOL: 'What is a vertical farm?',
        HIGH_SCHOOL: 'What is zoning?',
        UNDERGRADUATE: 'Why is saturated weight the key design case for rooftop farms?',
        GRADUATE: 'What is a food policy council?',
        PHD: 'Which ecosystem services can rooftop and urban farms provide?',
      },
      options: {
        ELEMENTARY: ['On rooftops, in yards and in empty lots', 'Only far away in the country', 'Nowhere in cities', 'Only inside stores'],
        MIDDLE_SCHOOL: ['An indoor farm that grows plants in stacked layers under lights', 'Any tall building', 'A farm on a mountain', 'A very wide field'],
        HIGH_SCHOOL: ['Local rules that say what activities are allowed on different land', 'Time zones around the world', 'Weather zones for planting', 'A rule that bans all gardens'],
        UNDERGRADUATE: ['Growing media is heaviest when fully soaked, so the roof must carry that load', 'Dry soil is always heavier than wet soil', 'Plants weigh nothing on roofs', 'Water drains instantly so weight never matters'],
        GRADUATE: ['A body of stakeholders that advises governments on food system issues', 'A council of restaurant owners only', 'A food court in a mall', 'A committee that runs one kitchen'],
        PHD: ['Stormwater retention, cooling, habitat and recreation', 'No services at all', 'Food only and nothing else', 'Decoration only'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'City people grow food on rooftops, in backyards and in empty lots.',
        MIDDLE_SCHOOL: 'Vertical farms stack layers of plants indoors and use artificial lights instead of sunlight.',
        HIGH_SCHOOL: 'Zoning divides land into areas and says what activities, like farming, are allowed in each.',
        UNDERGRADUATE: 'Engineers design for the heaviest realistic condition, which is soaked growing media plus people and equipment.',
        GRADUATE: 'Food policy councils bring people together across sectors to advise and coordinate on food policy.',
        PHD: 'Urban farms and green roofs retain stormwater, cool surroundings, support habitat and offer recreation.',
      },
    },
    {
      id: 'furbanq2',
      question: {
        ELEMENTARY: 'Why do rooftop gardeners use light soil?',
        MIDDLE_SCHOOL: 'What is hydroponics?',
        HIGH_SCHOOL: 'How does an extensive green roof differ from an intensive one?',
        UNDERGRADUATE: 'Which crops do most commercial urban farms grow, and why?',
        GRADUATE: 'What is the main weakness of fully indoor vertical farms?',
        PHD: 'In life cycle studies of rooftop farms, what often contributes a large share of impacts per kilogram?',
      },
      options: {
        ELEMENTARY: ['Light soil tastes better', 'Light soil is a brighter color', 'A roof can only hold so much weight', 'Light soil never needs water'],
        MIDDLE_SCHOOL: ['Growing plants in sand only', 'Growing plants in the dark', 'Growing plants with roots in nutrient-rich water instead of soil', 'Growing plants on mountains'],
        HIGH_SCHOOL: ['Extensive roofs have deeper soil for trees', 'They are exactly the same', 'Extensive roofs have a thin, light layer with hardy groundcovers rather than food crops', 'Extensive roofs have no plants'],
        UNDERGRADUATE: ['Grains, because they need the most space', 'Large orchards of fruit trees', 'High-value perishable crops such as greens and herbs, because land is expensive', 'Cotton, because it sells well'],
        GRADUATE: ['They use too much soil', 'They cannot grow leafy greens', 'High energy demand for lighting and climate control, plus high capital cost', 'They need very large amounts of pesticide'],
        PHD: ['Transport of produce across continents', 'Customer car trips only', 'Infrastructure such as structures, growing media and irrigation equipment', 'Nothing measurable'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Wet soil is heavy, so light soil keeps the roof safe.',
        MIDDLE_SCHOOL: 'In hydroponics, roots get nutrients from water mixed with plant food, not from soil.',
        HIGH_SCHOOL: 'Extensive green roofs are shallow and light; intensive roofs are deeper and can support food crops.',
        UNDERGRADUATE: 'Expensive urban space favors valuable, perishable crops that benefit from short distribution.',
        GRADUATE: 'Replacing sunlight with electric light makes energy cost and electricity source critical.',
        PHD: 'Because infrastructure dominates, a farm\'s lifespan and productivity strongly shape its footprint.',
      },
    },
    {
      id: 'furbanq3',
      question: {
        ELEMENTARY: 'How does a green roof help the building?',
        MIDDLE_SCHOOL: 'Why must an engineer check a roof before building a rooftop farm?',
        HIGH_SCHOOL: 'Why should vacant-lot soil be tested before planting food?',
        UNDERGRADUATE: 'Which is typically the dominant operating cost for an indoor vertical farm?',
        GRADUATE: 'How can rooftop greenhouses improve energy performance compared with fully indoor farms?',
        PHD: 'Why is avoided transport often a smaller benefit than people assume?',
      },
      options: {
        ELEMENTARY: ['It makes the building taller', 'It keeps the building cooler like a shady hat', 'It makes the building louder', 'It paints the building green'],
        MIDDLE_SCHOOL: ['To choose the color of the plants', 'Wet soil is heavy, and the roof must be strong enough to hold it', 'To count the windows', 'Engineers grow all the food'],
        HIGH_SCHOOL: ['To check if it is too sandy for flowers', 'It may contain contaminants such as lead', 'To measure how pretty it is', 'Soil testing is never needed'],
        UNDERGRADUATE: ['Seeds', 'Electricity for lighting and cooling', 'Pots', 'Signage'],
        GRADUATE: ['They avoid any need for water', 'They use daylight and can capture waste heat from the building below', 'They grow only grains', 'They never need permits'],
        PHD: ['Transport has no environmental impact', 'Infrastructure and production impacts usually outweigh transport savings', 'Urban produce is always shipped overseas', 'Studies never consider transport'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Plants on the roof shade the building and keep it cooler in summer.',
        MIDDLE_SCHOOL: 'Engineers make sure the roof can safely carry the weight of wet soil, planters and people.',
        HIGH_SCHOOL: 'Old city land can contain lead and other contaminants, so raised beds with clean soil may be needed.',
        UNDERGRADUATE: 'Indoor farms replace sunlight with electric light, so electricity is the major running cost.',
        GRADUATE: 'Daylight cuts lighting needs, and building waste heat can reduce heating demand in some climates.',
        PHD: 'Transport is often a small share of a food\'s footprint compared with how it is produced.',
      },
    },
    {
      id: 'furbanq4',
      question: {
        ELEMENTARY: 'What is the most important rule when visiting a rooftop garden?',
        MIDDLE_SCHOOL: 'How does aquaponics work?',
        HIGH_SCHOOL: 'What is a concern about high-tech urban farms in low-income neighborhoods?',
        UNDERGRADUATE: 'Which policy tool rewards green roofs for reducing runoff?',
        GRADUATE: 'What is green gentrification?',
        PHD: 'Why is selection bias a problem in research on social outcomes of urban gardens?',
      },
      options: {
        ELEMENTARY: ['Run as fast as you can', 'Lean over the edge to look down', 'Go alone at night', 'Go with a grown-up and stay away from the edge'],
        MIDDLE_SCHOOL: ['Fish eat all the plants', 'Plants grow in dry sand next to fish', 'Fish live in soil', 'Fish waste feeds the plants and plants help clean the water for the fish'],
        HIGH_SCHOOL: ['They always give food away free', 'They grow only staple grains', 'They are banned everywhere', 'Premium greens may be unaffordable and green amenities can raise rents'],
        UNDERGRADUATE: ['A ban on rooftop access', 'A tax on all vegetables', 'Higher water rates for gardens', 'Stormwater fee credits'],
        GRADUATE: ['Painting buildings green', 'A program that plants trees in rural areas', 'A way to grow food faster', 'Displacement pressure when environmental amenities raise property values and rents'],
        PHD: ['Gardens have no participants', 'Selection bias only affects soil samples', 'Researchers never survey people', 'Participants choose to engage, so differences may reflect who joins rather than the garden itself'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Roofs can be dangerous, so always go with an adult and stay away from the edge.',
        MIDDLE_SCHOOL: 'In aquaponics, fish and plants help each other in a shared water system.',
        HIGH_SCHOOL: 'Without community planning, expensive produce and rising rents can mean nearby residents do not benefit.',
        UNDERGRADUATE: 'Some cities lower stormwater fees for properties whose green roofs reduce runoff.',
        GRADUATE: 'New green amenities can increase property values and push out long-time residents.',
        PHD: 'People who choose to garden may already differ in health or civic engagement, confounding comparisons.',
      },
    },
    {
      id: 'furbanq5',
      question: {
        ELEMENTARY: 'Which plants like a sunny, windy roof?',
        MIDDLE_SCHOOL: 'Why are cities often hotter than the countryside, and how do green roofs help?',
        HIGH_SCHOOL: 'What is building-integrated agriculture?',
        UNDERGRADUATE: 'What is the first design constraint when planning a rooftop farm?',
        GRADUATE: 'Which is an institutional barrier to urban agriculture?',
        PHD: 'What do geospatial studies typically find about rooftop and vacant-land potential?',
      },
      options: {
        ELEMENTARY: ['Big shade-loving ferns only', 'Herbs, beans and cherry tomatoes', 'Plants that need deep forest soil', 'Giant oak trees'],
        MIDDLE_SCHOOL: ['Cities are colder; green roofs warm them up', 'Buildings and pavement hold heat; plants on roofs help cool', 'Cities are never hotter', 'Green roofs make cities hotter'],
        HIGH_SCHOOL: ['Farming only on rural land', 'Food production designed into a building to share heat, water or space', 'Building a farmhouse', 'Selling food inside a building'],
        UNDERGRADUATE: ['The color of the planters', 'The roof load capacity', 'The name of the farm', 'The number of customers'],
        GRADUATE: ['Long secure leases', 'Short-term leases that deter investment', 'Clear zoning for agriculture', 'Coordinated city departments'],
        PHD: ['Cities could meet all their dietary energy needs', 'A meaningful share of some vegetables but only a small share of total dietary energy', 'No rooftop area is ever suitable', 'Results do not depend on assumptions'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Herbs, beans and cherry tomatoes enjoy sun and can handle a breezy roof.',
        MIDDLE_SCHOOL: 'Pavement and buildings soak up heat; green roofs shade and cool buildings and neighborhoods.',
        HIGH_SCHOOL: 'Building-integrated agriculture links farms to building systems like heating and water.',
        UNDERGRADUATE: 'Load capacity decides what kind of growing system a roof can safely support.',
        GRADUATE: 'Growers rarely invest in soil and structures if they might lose the site soon.',
        PHD: 'Urban production can supply some vegetables meaningfully, but staples and total calories mostly come from elsewhere.',
      },
    },
  ],
}

export default expansion
