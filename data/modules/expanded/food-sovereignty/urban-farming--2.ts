import type { ModuleExpansion } from '../types'

// Rewritten with its own angle: farming on roofs and indoors in stacked layers.
// The first urban farming chapter covers community and backyard growing.
const expansion: ModuleExpansion = {
  topicId: 'food-sovereignty',
  moduleKey: 'urban-farming~2',
  title: 'Rooftop and Vertical Farms',
  description: {
    ELEMENTARY: 'Farms on top of buildings and inside warehouses, where plants grow in stacks under special lights.',
    MIDDLE_SCHOOL: 'How rooftop gardens, greenhouses and vertical farms grow food in cities, and their pros and cons.',
    HIGH_SCHOOL: 'Rooftop and indoor vertical farming: growing systems, energy and water use, crops and who benefits.',
    UNDERGRADUATE: 'Engineering and economics of rooftop and controlled-environment farms, and their role in city food systems.',
    GRADUATE: 'Assessing rooftop and vertical farms: life cycle impacts, business models, policy and food justice.',
    PHD: 'Research on building-integrated and vertical agriculture: energy, resource flows, systems roles and equity.',
  },
  lessons: [
    {
      id: 'fs-urban-1',
      title: 'Rooftop and Vertical Farms',
      content: {
        ELEMENTARY: `
<h2>Farms Up High and Indoors</h2>
<p>In big cities, there isn't much open land for farms. So people are getting creative! They grow vegetables on the flat roofs of buildings, and inside big rooms where plants grow on shelves stacked high like a bookcase. These are called rooftop farms and vertical farms.</p>

<h3>Rooftop Farms</h3>
<p>On a rooftop farm, soil is spread in beds or boxes on top of a strong building. Plants like tomatoes, herbs, lettuce and peppers grow in the sunshine. Some rooftops have greenhouses, glass houses that keep plants warm all year. Bees can even live on rooftops and help flowers make fruit!</p>

<h3>Vertical Farms</h3>
<p>A vertical farm is inside a building. Plants grow on many shelves, one on top of another. Instead of the sun, special LED lights shine on them. Many vertical farms don't use soil at all. The plants' roots sit in water mixed with plant food. This is called hydroponics.</p>
<ul>
<li><strong>Rooftop farm:</strong> a farm on top of a building</li>
<li><strong>Vertical farm:</strong> a farm where plants grow on stacked shelves indoors</li>
<li><strong>Greenhouse:</strong> a glass or plastic building that keeps plants warm</li>
<li><strong>Hydroponics:</strong> growing plants in water with plant food instead of soil</li>
<li><strong>LED light:</strong> a bright light that uses little electricity</li>
</ul>

<h3>Why Grow Food in Cities?</h3>
<p>Food from a city farm doesn't have to travel far, so it's very fresh when it reaches your plate. City farms also let kids see where food comes from. But indoor farms need lots of electricity for their lights, so they mostly grow small, leafy plants like lettuce and herbs.</p>

<h3>Imagine!</h3>
<p>If your school had a rooftop farm, what would you plant? Draw a picture of your dream city farm!</p>
`,
        MIDDLE_SCHOOL: `
<h2>Growing Up: Rooftop and Vertical Farms</h2>
<p>As more people live in cities, some growers are finding ways to farm in places without open fields: on rooftops and inside buildings. Rooftop farms and vertical farms can grow fresh food close to where people live. But they also have costs and limits. Let's look at how they work and what they can and can't do.</p>

<h3>Rooftop Farms and Greenhouses</h3>
<p>Rooftop farms use soil beds or containers on roofs strong enough to hold the weight of wet soil. They use sunlight, and many collect rainwater. Rooftop greenhouses add a glass or plastic cover so crops can grow year-round, and they can use heat escaping from the building below. Rooftop farms also cool buildings, absorb rain and create habitat for pollinators.</p>

<h3>Vertical Farms</h3>
<p>Vertical farms grow plants indoors in stacked layers under LED lights, with computers controlling temperature, humidity, light and nutrients. Most use hydroponics or aeroponics, where roots are misted with nutrient water. Because the water is recycled, they can use far less water than field farms. They grow quickly, without pesticides, all year, but the lights and air conditioning use a lot of electricity.</p>
<ul>
<li><strong>Controlled environment agriculture:</strong> growing crops indoors with controlled light, temperature and nutrients</li>
<li><strong>Aeroponics:</strong> growing plants with roots hanging in air and misted with nutrient water</li>
<li><strong>Load capacity:</strong> how much weight a roof can safely hold</li>
<li><strong>Leafy greens:</strong> plants grown for their leaves, like lettuce, kale and spinach</li>
<li><strong>Pollinator:</strong> an animal like a bee that carries pollen between flowers</li>
<li><strong>Yield:</strong> the amount of food a farm produces</li>
</ul>

<h3>What Grows Best?</h3>
<p>Vertical farms mostly grow leafy greens, herbs and microgreens because they grow fast and stay small. Grains like wheat and rice need too much light and space to make sense indoors. Rooftop farms can grow a wider range of vegetables.</p>

<h3>Who Benefits?</h3>
<p>City farms can provide fresh food, jobs and education. But some vertical farm produce is expensive and sold in fancy stores. Community-run rooftop gardens can help make sure neighbourhoods that need fresh food the most actually get it.</p>
`,
        HIGH_SCHOOL: `
<h2>Rooftop and Indoor Vertical Farming</h2>
<p>Building-integrated agriculture brings food production into cities by using rooftops, walls and indoor spaces. It ranges from community rooftop gardens to large commercial greenhouses and high-tech indoor vertical farms. Supporters highlight fresh local food, water savings and year-round production; critics point to high energy use, costs and a narrow range of crops. Understanding the trade-offs helps judge where these farms fit in a city's food system.</p>

<h3>Rooftop Systems</h3>
<p>Open-air rooftop farms use lightweight growing media in beds or containers, designed within the roof's structural load capacity, with waterproofing and drainage. They provide stormwater retention, building cooling, habitat and community space. Rooftop greenhouses can be integrated with the building's heating, ventilation and water systems, using waste heat and capturing carbon dioxide from the building to boost plant growth.</p>

<h3>Indoor Vertical Farms</h3>
<p>Indoor vertical farms use stacked growing racks with LED lighting tuned to the wavelengths plants use most. Hydroponic or aeroponic systems recirculate nutrient solution, cutting water use dramatically compared with field farming. Climate control enables consistent, pesticide-free production all year. However, replacing sunlight with electric light makes energy the largest operating cost, and several well-funded vertical farming companies have struggled financially.</p>
<ul>
<li><strong>Building-integrated agriculture:</strong> growing food on or within buildings using their structure and systems</li>
<li><strong>Growing medium:</strong> the material, such as soil or coir, that plant roots grow in</li>
<li><strong>Nutrient solution:</strong> water mixed with the minerals plants need</li>
<li><strong>Photosynthetically active radiation:</strong> the wavelengths of light plants use for photosynthesis</li>
<li><strong>Operating cost:</strong> the ongoing cost of running a farm, such as electricity and labour</li>
<li><strong>Food miles:</strong> the distance food travels from farm to consumer</li>
</ul>

<h3>Crops and Productivity</h3>
<p>Vertical farms produce very high yields per square metre of floor area for leafy greens and herbs. Fruiting crops like tomatoes and strawberries are possible but need more light. Staple crops remain impractical indoors because their energy requirements are enormous.</p>

<h3>Environmental Balance</h3>
<p>Food miles are only a small part of most foods' carbon footprints. If indoor farms use fossil-fuel electricity, their carbon footprint can exceed that of field-grown or greenhouse produce. Renewable power, efficient lighting and smart siting improve the balance.</p>

<h3>Equity</h3>
<p>Benefits depend on who owns and eats from these farms. Community and nonprofit rooftop farms often focus on education, jobs and access in underserved neighbourhoods.</p>
`,
        UNDERGRADUATE: `
<h2>Engineering and Economics of Urban Building Farms</h2>
<p>Rooftop farms, rooftop greenhouses and indoor vertical farms represent different points on a spectrum of controlled environment agriculture (CEA) in cities. Each makes different trade-offs between natural and artificial inputs, capital and operating costs, crop range and integration with buildings. This chapter examines their engineering, resource use and economics, and their role in urban food systems.</p>

<h3>Rooftop Engineering</h3>
<p>Rooftop agriculture requires structural assessment of load capacity, including saturated growing media, people and equipment; waterproofing and root barriers; drainage and irrigation; wind exposure; and safe access. Retrofitting existing roofs is often limited by load capacity, favouring lightweight media or containers. Rooftop greenhouses can exchange heat, carbon dioxide and water with the host building, improving overall resource efficiency.</p>

<h3>Indoor Vertical Farm Design</h3>
<p>Indoor farms are designed around light, climate and nutrient control. LED efficacy, measured in micromoles of photons per joule, has improved substantially, but lighting and the cooling needed to remove its heat still dominate energy use. Heating, ventilation and air conditioning manage temperature, humidity and carbon dioxide. Hydroponic systems such as nutrient film technique and deep water culture, or aeroponics, recirculate water and nutrients. Automation and sensors reduce labour and increase consistency.</p>
<ul>
<li><strong>Controlled environment agriculture:</strong> crop production in enclosed, environmentally controlled facilities</li>
<li><strong>Photon efficacy:</strong> the amount of plant-usable light an LED produces per unit of electricity</li>
<li><strong>Nutrient film technique:</strong> a hydroponic method where a thin film of nutrient solution flows past roots</li>
<li><strong>Daily light integral:</strong> the total amount of photosynthetic light a plant receives per day</li>
<li><strong>Capital expenditure:</strong> upfront investment in buildings and equipment</li>
<li><strong>Resource use efficiency:</strong> output produced per unit of input such as water, land or energy</li>
</ul>

<h3>Resource Use</h3>
<p>Indoor farms achieve very high land and water use efficiency but low energy efficiency compared with sunlight-based systems. Energy needs scale with crop daily light integral: leafy greens need far less light than fruiting crops, and staples are impractical. Greenhouses, including rooftop greenhouses, use sunlight and offer a middle path.</p>

<h3>Economics</h3>
<p>High capital costs, energy prices and labour make indoor farm economics challenging; many firms rely on premium pricing for freshness, consistency and pesticide-free claims. Rooftop farms face high costs for structural work and access but may generate value from stormwater credits, education, events and building amenity.</p>

<h3>Role in Urban Food Systems</h3>
<p>Building-integrated farms can supply a meaningful share of a city's leafy greens and herbs, but only a small share of total calories. Their greatest value may lie in fresh produce, education, jobs and resilience rather than replacing rural agriculture.</p>
`,
        GRADUATE: `
<h2>Assessing Rooftop and Vertical Farms</h2>
<p>Rooftop and vertical farms attract investment, media attention and policy support as solutions for urban food security and sustainability. Rigorous assessment shows a more nuanced picture: strong performance on some metrics, weak performance on others, and outcomes highly dependent on context. This chapter examines life cycle impacts, business models, policy instruments and food justice.</p>

<h3>Life Cycle Impacts</h3>
<p>Life cycle assessments of indoor vertical farms consistently find low land and water use and no pesticide use, but high electricity demand. Their carbon footprint depends strongly on the electricity grid: on fossil-heavy grids, footprints for leafy greens can exceed those of field or greenhouse production, while renewable electricity and efficient lighting can make them competitive. Rooftop greenhouses integrated with buildings can reduce impacts through waste heat use and avoided transport. Infrastructure, such as building construction and equipment, also contributes significantly.</p>

<h3>Business Models</h3>
<p>Commercial vertical farming has seen rapid growth followed by high-profile bankruptcies, as energy costs, capital intensity and competition from field and greenhouse produce strained margins. Surviving models include smaller, efficient farms, farms co-located with retailers or restaurants, and those growing high-value crops. Rooftop farms often blend revenue from produce with education, events, consulting and building services.</p>
<ul>
<li><strong>Life cycle assessment:</strong> an evaluation of environmental impacts across a product's whole life</li>
<li><strong>Grid carbon intensity:</strong> the emissions per unit of electricity from a power grid</li>
<li><strong>Co-location:</strong> placing a farm next to a user or source of resources, like a store or waste heat</li>
<li><strong>Zoning:</strong> rules that govern how land and buildings may be used</li>
<li><strong>Food justice:</strong> fair access to healthy food and fair conditions in food systems</li>
<li><strong>Greenwashing:</strong> making misleading environmental claims about a product or company</li>
</ul>

<h3>Policy Instruments</h3>
<p>Cities support building-integrated agriculture through zoning changes, green roof requirements or incentives, stormwater credits, property tax relief and procurement. Building codes may need adapting for rooftop occupancy and greenhouses. Policies can prioritise community benefit by supporting nonprofit and cooperative farms and linking them to food access programmes.</p>

<h3>Food Justice</h3>
<p>Critics argue that high-tech farms often serve affluent consumers and may contribute to gentrification or divert attention from structural causes of food insecurity, such as poverty and land access. Community rooftop farms can provide jobs, education and food access when residents shape their goals. Assessments should consider who controls, works at and benefits from these farms.</p>

<h3>Labour and Skills</h3>
<p>Building farms create jobs ranging from horticulture and maintenance to engineering and data analysis. Automation may reduce entry-level jobs while raising demand for technical skills. Training programmes linked to community colleges and workforce agencies can help local residents access these roles, and job quality, wages and safety deserve attention alongside environmental metrics.</p>

<h3>Avoiding Overstated Claims</h3>
<p>Claims about feeding cities or eliminating food miles should be examined carefully. Honest communication about crop range, energy use and costs avoids greenwashing and builds public trust.</p>
`,
        PHD: `
<h2>Research on Building-Integrated and Vertical Agriculture</h2>
<p>Urban building-integrated agriculture raises research questions spanning plant science, engineering, energy systems, urban metabolism, economics and social justice. Researchers seek to reduce energy demand, understand resource flows between buildings and farms, define the appropriate role of these systems in urban food provisioning and examine their social consequences. This chapter outlines these frontiers.</p>

<h3>Energy and Plant Science</h3>
<p>Research aims to reduce energy per unit of food through improved LED efficacy, light recipes tuned to crop needs, dynamic lighting that follows electricity prices or renewable availability, and plant breeding for indoor conditions, such as compact architecture and high light use efficiency. Studies examine how spectrum and photoperiod affect yield, nutrition and flavour, and whether gains justify energy use.</p>

<h3>Urban Metabolism and Symbiosis</h3>
<p>Urban metabolism research tracks flows of energy, water, nutrients and carbon through cities. Building-integrated farms can use waste heat, carbon dioxide from occupants, greywater or recovered nutrients from wastewater, a form of industrial symbiosis. Modelling and pilot projects quantify these exchanges and their effects on overall building and city resource efficiency, along with risks such as contamination.</p>
<ul>
<li><strong>Urban metabolism:</strong> the study of material and energy flows through cities</li>
<li><strong>Industrial symbiosis:</strong> exchanges where one facility's waste becomes another's input</li>
<li><strong>Light recipe:</strong> a tailored combination of light spectrum, intensity and duration for a crop</li>
<li><strong>Demand flexibility:</strong> shifting electricity use in time to match supply or prices</li>
<li><strong>Green gentrification:</strong> rising property values and displacement linked to green amenities</li>
<li><strong>Techno-optimism:</strong> belief that technology alone will solve social and environmental problems</li>
</ul>

<h3>System Roles</h3>
<p>Research uses spatial modelling and scenario analysis to estimate how much of a city's demand building-integrated farms could meet, which crops make sense indoors versus in greenhouses or fields, and how these systems contribute to resilience during supply chain disruptions. Comparisons with peri-urban agriculture and improved regional supply chains help determine where investment yields the greatest benefit.</p>

<h3>Economics and Innovation</h3>
<p>Studies analyse the boom-and-bust trajectory of vertical farming investment, cost structures and the conditions under which business models are viable. Innovation research examines how technology hype, venture capital and policy shape adoption.</p>

<h3>Social Dimensions and Equity</h3>
<p>Critical scholarship examines techno-optimistic narratives, the risk of green gentrification, labour conditions in automated farms, and whose knowledge and priorities shape urban agriculture. Comparative studies of community-led and commercial farms analyse differences in access, governance and benefits.</p>

<h3>Health and Nutrition</h3>
<p>Research examines whether indoor-grown produce differs nutritionally from field produce and how lighting can enhance nutrient content. Food safety research addresses pathogen risks in recirculating systems, while public health studies ask whether proximity to urban farms changes diets, especially in neighbourhoods with poor access to fresh produce. Evidence that urban farms improve diet quality at population scale remains limited and calls for longer, better-controlled studies.</p>

<h3>Open Questions</h3>
<p>Priorities include energy-efficient production, integrated urban resource models, robust life cycle comparisons and frameworks ensuring building-integrated agriculture advances food justice.</p>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'fsurban2-q1',
      question: {
        ELEMENTARY: 'What is a vertical farm?',
        MIDDLE_SCHOOL: 'What is aeroponics?',
        HIGH_SCHOOL: 'What is the largest operating cost for indoor vertical farms?',
        UNDERGRADUATE: 'What dominates indoor vertical farm energy use?',
        GRADUATE: 'What strongly determines an indoor farm\'s carbon footprint?',
        PHD: 'What is industrial symbiosis?',
      },
      options: {
        ELEMENTARY: ['A farm on a mountain', 'A farm with only tall trees', 'A farm in the ocean', 'A farm where plants grow on stacked shelves indoors'],
        MIDDLE_SCHOOL: ['Growing plants in airplanes', 'Flying seeds with drones', 'Growing plants only in soil', 'Growing plants with roots misted with nutrient water'],
        HIGH_SCHOOL: ['Seeds', 'Packaging', 'Soil', 'Energy'],
        UNDERGRADUATE: ['Watering cans', 'Paper records', 'Delivery bikes', 'Lighting and the cooling to remove its heat'],
        GRADUATE: ['The colour of the building', 'The number of shelves', 'The farm\'s name', 'The carbon intensity of the electricity grid'],
        PHD: ['Two factories competing', 'A factory with no waste', 'Music made by machines', 'Exchanges where one facility\'s waste becomes another\'s input'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Vertical farms stack plants on shelves indoors.',
        MIDDLE_SCHOOL: 'Aeroponics mists roots with nutrient water.',
        HIGH_SCHOOL: 'Replacing sunlight with electric light makes energy the biggest cost.',
        UNDERGRADUATE: 'Lights and cooling use most of the energy.',
        GRADUATE: 'Fossil-heavy grids raise the footprint.',
        PHD: 'Symbiosis turns wastes like heat and CO2 into inputs.',
      },
    },
    {
      id: 'fsurban2-q2',
      question: {
        ELEMENTARY: 'What is hydroponics?',
        MIDDLE_SCHOOL: 'Why can vertical farms use less water than field farms?',
        HIGH_SCHOOL: 'How can rooftop greenhouses use the building below?',
        UNDERGRADUATE: 'What is daily light integral?',
        GRADUATE: 'Which vertical farm business models have tended to survive?',
        PHD: 'What is demand flexibility for indoor farms?',
      },
      options: {
        ELEMENTARY: ['Growing plants in water with plant food instead of soil', 'Growing plants in sand', 'Watering plants with juice', 'Growing plants on the moon'],
        MIDDLE_SCHOOL: ['They recycle the water', 'They never water plants', 'Plants drink less indoors', 'They use rain only'],
        HIGH_SCHOOL: ['Using waste heat and CO2 from the building', 'Taking the building\'s furniture', 'Blocking the building\'s windows', 'Using the elevator for plants'],
        UNDERGRADUATE: ['Total photosynthetic light a plant receives per day', 'Hours of darkness', 'Number of lamps', 'Electricity bill per day'],
        GRADUATE: ['Smaller efficient farms, co-located farms and high-value crops', 'The largest farms growing wheat', 'Farms with no customers', 'Farms with the most debt'],
        PHD: ['Shifting electricity use in time to match supply or prices', 'Growing more crops on demand only', 'Turning lights on all the time', 'Selling flexible plants'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Hydroponics grows plants in nutrient water.',
        MIDDLE_SCHOOL: 'Recirculating systems reuse water.',
        HIGH_SCHOOL: 'Greenhouses can use the building\'s heat and CO2.',
        UNDERGRADUATE: 'DLI totals the plant\'s daily usable light.',
        GRADUATE: 'Lean, co-located and high-value models have fared better.',
        PHD: 'Flexible lighting can follow cheap or renewable power.',
      },
    },
    {
      id: 'fsurban2-q3',
      question: {
        ELEMENTARY: 'What do indoor farms use instead of the sun?',
        MIDDLE_SCHOOL: 'What must a roof have to hold a rooftop farm?',
        HIGH_SCHOOL: 'Why are food miles a weak argument on their own?',
        UNDERGRADUATE: 'Why do rooftop retrofits often use lightweight media or containers?',
        GRADUATE: 'What is greenwashing?',
        PHD: 'What is green gentrification?',
      },
      options: {
        ELEMENTARY: ['Candles', 'Flashlights', 'Special LED lights', 'Fireworks'],
        MIDDLE_SCHOOL: ['A swimming pool', 'A painted logo', 'Enough load capacity to hold wet soil', 'A chimney'],
        HIGH_SCHOOL: ['Food never travels', 'Food miles are always huge', 'Transport is only a small part of most foods\' carbon footprints', 'Trucks use no fuel'],
        UNDERGRADUATE: ['Heavy soil is illegal', 'Plants prefer plastic', 'Existing roofs often have limited load capacity', 'They are cheaper to ship'],
        GRADUATE: ['Painting things green', 'Growing more greens', 'Making misleading environmental claims', 'Washing vegetables'],
        PHD: ['Painting houses green', 'Planting gardens everywhere', 'Rising property values and displacement linked to green amenities', 'Recycling buildings'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'LED lights replace sunlight indoors.',
        MIDDLE_SCHOOL: 'Wet soil is heavy, so roofs must be strong.',
        HIGH_SCHOOL: 'Production methods usually matter more than transport.',
        UNDERGRADUATE: 'Load limits favour lightweight systems.',
        GRADUATE: 'Greenwashing overstates environmental benefits.',
        PHD: 'Green amenities can raise rents and displace residents.',
      },
    },
    {
      id: 'fsurban2-q4',
      question: {
        ELEMENTARY: 'What plants do indoor farms mostly grow?',
        MIDDLE_SCHOOL: 'Why do vertical farms not grow wheat or rice?',
        HIGH_SCHOOL: 'What is photosynthetically active radiation?',
        UNDERGRADUATE: 'What is photon efficacy?',
        GRADUATE: 'What is a food justice concern about high-tech farms?',
        PHD: 'What is a light recipe?',
      },
      options: {
        ELEMENTARY: ['Giant oak trees', 'Small leafy plants like lettuce and herbs', 'Pumpkins only', 'Coconut palms'],
        MIDDLE_SCHOOL: ['They are not food', 'They need too much light and space', 'They grow too fast', 'They only grow in snow'],
        HIGH_SCHOOL: ['Radio signals', 'Light wavelengths plants use for photosynthesis', 'Heat from soil', 'Sound waves'],
        UNDERGRADUATE: ['How bright a lamp looks to people', 'Plant-usable light produced per unit of electricity', 'The colour of a lamp', 'The price of a lamp'],
        GRADUATE: ['They grow too much food for everyone', 'They often serve affluent consumers', 'They are always free', 'They only hire experts'],
        PHD: ['A cooking recipe with light ingredients', 'A tailored mix of light spectrum, intensity and duration for a crop', 'A low-calorie meal', 'A lamp design'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Indoor farms grow small leafy plants.',
        MIDDLE_SCHOOL: 'Staple crops need far too much light indoors.',
        HIGH_SCHOOL: 'PAR is the light plants use.',
        UNDERGRADUATE: 'Efficacy measures plant light per unit of electricity.',
        GRADUATE: 'Benefits may flow mainly to wealthier buyers.',
        PHD: 'Light recipes tune light to crop needs.',
      },
    },
    {
      id: 'fsurban2-q5',
      question: {
        ELEMENTARY: 'Why is food from a city farm very fresh?',
        MIDDLE_SCHOOL: 'What benefits do rooftop farms give buildings?',
        HIGH_SCHOOL: 'What improves the environmental balance of indoor farms?',
        UNDERGRADUATE: 'Where might building-integrated farms add the most value?',
        GRADUATE: 'Which city policy supports building-integrated agriculture?',
        PHD: 'What do comparisons with peri-urban agriculture help determine?',
      },
      options: {
        ELEMENTARY: ['It is frozen', 'It is made in a factory', 'It is very old', 'It does not have to travel far'],
        MIDDLE_SCHOOL: ['More noise', 'Higher heating bills', 'Leaky roofs', 'Cooling, absorbing rain and habitat for pollinators'],
        HIGH_SCHOOL: ['More fossil fuel power', 'Older lights', 'Longer delivery trips', 'Renewable power, efficient lighting and smart siting'],
        UNDERGRADUATE: ['Replacing all rural farms', 'Supplying all calories', 'Growing grains', 'Fresh produce, education, jobs and resilience'],
        GRADUATE: ['Banning rooftop access', 'Taxing gardens heavily', 'Forbidding greenhouses', 'Zoning changes and stormwater credits'],
        PHD: ['Which city has tallest buildings', 'Which crops taste sweetest', 'How many farmers own cars', 'Where investment yields the greatest benefit'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Short distances mean fresher food.',
        MIDDLE_SCHOOL: 'Rooftop farms cool roofs, hold rain and support pollinators.',
        HIGH_SCHOOL: 'Clean power and efficiency cut the carbon footprint.',
        UNDERGRADUATE: 'Their value is fresh produce and community benefits, not calories.',
        GRADUATE: 'Zoning and stormwater credits make rooftop farms easier.',
        PHD: 'Comparisons guide where to invest.',
      },
    },
  ],
}

export default expansion
