import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'renewable-energy',
  moduleKey: 'biomass-energy',
  lessons: [
    {
      id: 're-bio-1',
      title: 'Energy from Plants and Waste',
      content: {
        ELEMENTARY: `
<h2>Plant Power: Energy from Living Things</h2>
<p>Did you know a pile of leaves, a log or even a banana peel holds energy from the Sun? Plants catch sunlight and store it inside themselves as they grow. When we use plants, wood or food scraps to make heat or electricity, we call it <em>biomass energy</em>. Let's find out how it works!</p>

<h3>Plants Are Sunshine Batteries</h3>
<p>Plants make their own food using sunlight, water and air. This is called photosynthesis. The energy from the sunlight gets packed into leaves, stems, wood and seeds. When we burn wood in a fireplace, we are letting out sunshine that a tree saved up over many years.</p>
<ul>
<li><strong>Biomass:</strong> plants, wood, animal waste and food scraps that hold stored energy</li>
<li><strong>Photosynthesis:</strong> the way plants use sunlight, water and air to make food and grow</li>
<li><strong>Fuel:</strong> anything we can use to make heat, light or movement</li>
</ul>

<h3>Ways to Get Energy Out</h3>
<p>There is more than one way to use biomass. People have burned wood for warmth and cooking for thousands of years. Today we also have clever new ways.</p>
<ul>
<li><strong>Burning:</strong> wood or crop leftovers are burned to make heat or to boil water for electricity</li>
<li><strong>Biogas:</strong> a gas made when tiny living things called microbes eat food scraps and manure</li>
<li><strong>Biofuel:</strong> a liquid fuel made from plants, like corn or used cooking oil, that can run cars</li>
</ul>

<h3>Is It Good for the Planet?</h3>
<p>Biomass can be a helpful kind of energy because new plants can grow back. Using food scraps and farm waste is especially smart, because those things would otherwise just rot. But we have to be careful. If people cut down forests too fast, or burn wood in smoky stoves, it can hurt nature and our lungs. Using biomass wisely means planting again and using waste first.</p>

<h3>What You Can Do</h3>
<ol>
<li>Put fruit and vegetable scraps in a compost bin or green waste bin.</li>
<li>Help plant a tree with your class or family.</li>
<li>Ask if your town turns food waste into biogas.</li>
<li>Never burn trash or plastic, because it makes harmful smoke.</li>
</ol>

<h3>Think About It</h3>
<p>The next time you see a pile of fallen leaves, remember: there is sunshine energy hiding inside!</p>
`,
        MIDDLE_SCHOOL: `
<h2>How Organic Materials Become Renewable Power</h2>
<p>Biomass is any material that comes from living or recently living things, such as wood, crops, grass, manure and food waste. It is one of the oldest energy sources people have used, and it is still one of the largest renewable sources in the world. Let's explore how it works and why it needs careful management.</p>

<h3>Where the Energy Comes From</h3>
<p>Through photosynthesis, plants turn sunlight, water and carbon dioxide into sugars and other carbon-rich materials. That stored chemical energy can be released later. When biomass is burned or broken down, the carbon goes back into the air as carbon dioxide, which new plants can absorb again. This is why biomass is called a <em>renewable</em> energy source, as long as plants are allowed to regrow.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Feedstock:</strong> the raw material, like wood chips or manure, that is turned into energy</li>
<li><strong>Combustion:</strong> burning a fuel with oxygen to release heat</li>
<li><strong>Anaerobic digestion:</strong> microbes breaking down waste without oxygen to make biogas</li>
<li><strong>Biogas:</strong> a gas mixture, mostly methane, that can be burned for heat or electricity</li>
<li><strong>Ethanol:</strong> an alcohol fuel made by fermenting sugars from crops like corn or sugarcane</li>
<li><strong>Carbon cycle:</strong> the movement of carbon between plants, animals, air, soil and oceans</li>
</ul>

<h3>Turning Biomass into Energy</h3>
<table>
<thead><tr><th>Method</th><th>What goes in</th><th>What comes out</th></tr></thead>
<tbody>
<tr><td>Burning</td><td>Wood, pellets, crop leftovers</td><td>Heat and steam for electricity</td></tr>
<tr><td>Anaerobic digestion</td><td>Manure, food scraps, sewage sludge</td><td>Biogas and a fertilizer called digestate</td></tr>
<tr><td>Fermentation</td><td>Corn, sugarcane, other sugary or starchy crops</td><td>Ethanol for vehicles</td></tr>
<tr><td>Oil processing</td><td>Vegetable oils, used cooking oil</td><td>Biodiesel</td></tr>
</tbody>
</table>

<h3>Benefits</h3>
<p>Biomass can provide energy any time of day, unlike solar and wind, because the fuel can be stored. It can also turn waste into something useful. Landfills and manure ponds release methane, a powerful greenhouse gas, but capturing that gas in a digester stops it from escaping and makes fuel at the same time.</p>

<h3>Challenges</h3>
<p>Biomass is not automatically clean. Growing energy crops can take land away from food or forests. Burning wood releases smoke and particles that can harm health, especially from open fires and old stoves indoors. And if forests are cut faster than they regrow, more carbon ends up in the air. The best biomass uses waste and leftovers, and grows new plants to replace what is used.</p>
`,
        HIGH_SCHOOL: `
<h2>Biomass Energy: Technologies, Feedstocks and Sustainability</h2>
<p>Biomass energy comes from organic matter that captured solar energy through photosynthesis. It powers everything from traditional cooking fires to modern power stations and aircraft fuel trials. Because it can be stored and used on demand, biomass fills a different role than solar or wind. But its climate and environmental benefits depend heavily on what is used and how.</p>

<h3>Feedstocks</h3>
<p>The type of feedstock shapes cost, emissions and environmental impact:</p>
<ul>
<li><strong>Forestry residues:</strong> branches, bark and sawdust left over from logging and sawmills</li>
<li><strong>Agricultural residues:</strong> stalks, husks and straw left after harvesting food crops</li>
<li><strong>Energy crops:</strong> fast-growing plants such as switchgrass, miscanthus or willow grown mainly for fuel</li>
<li><strong>Wet wastes:</strong> manure, food waste and sewage sludge, best suited to biological processing</li>
<li><strong>Lignocellulose:</strong> the tough, woody structure of plants made of cellulose, hemicellulose and lignin</li>
<li><strong>Moisture content:</strong> the share of water in biomass, which lowers usable energy and raises transport costs</li>
</ul>

<h3>Conversion Technologies</h3>
<p>Conversion routes fall into two families: thermochemical (using heat) and biochemical (using microbes or enzymes).</p>
<table>
<thead><tr><th>Process</th><th>Conditions</th><th>Main product</th></tr></thead>
<tbody>
<tr><td>Combustion</td><td>Plenty of oxygen, high temperature</td><td>Heat and steam</td></tr>
<tr><td>Gasification</td><td>Limited oxygen, high temperature</td><td>Syngas (carbon monoxide and hydrogen)</td></tr>
<tr><td>Pyrolysis</td><td>No oxygen, moderate to high temperature</td><td>Bio-oil, biochar and gases</td></tr>
<tr><td>Anaerobic digestion</td><td>No oxygen, microbes, warm temperatures</td><td>Biogas (methane and carbon dioxide)</td></tr>
<tr><td>Fermentation</td><td>Yeast or bacteria acting on sugars</td><td>Ethanol</td></tr>
</tbody>
</table>
<p>Syngas from gasification is more versatile than heat alone: it can run engines, be cleaned and turned into liquid fuels, or be upgraded to hydrogen.</p>

<h3>Efficiency and Energy Density</h3>
<p>Dry wood holds noticeably less energy per kilogram than coal, and fresh wood holds even less because of its water. Power plants that make only electricity from biomass are usually less efficient than large fossil plants. Combined heat and power (CHP) plants that use the leftover heat for buildings or industry can capture far more of the fuel's energy.</p>

<h3>Is Biomass Carbon Neutral?</h3>
<p>Biomass is sometimes described as carbon neutral because regrowing plants reabsorb the carbon released. In reality, timing and land use matter. Burning a whole tree releases its carbon immediately, while regrowing a similar tree can take decades. Residues that would rot anyway have a much quicker payback. Clearing forests or grasslands for energy crops can release large amounts of stored carbon from soils and vegetation.</p>

<h3>Making Biomass Sustainable</h3>
<ol>
<li>Prioritize wastes and residues over purpose-grown crops on prime farmland.</li>
<li>Use CHP or heat-only systems where heat is needed nearby.</li>
<li>Replace smoky open fires with clean cookstoves to protect health.</li>
<li>Protect soil by leaving enough residue on fields to maintain fertility.</li>
<li>Certify that forest feedstocks come from well-managed, regrowing forests.</li>
</ol>
`,
        UNDERGRADUATE: `
<h2>Analyzing Biomass Supply Chains and Lifecycle Emissions</h2>
<p>Biomass energy systems are supply chains as much as technologies. Their performance depends on how feedstock is grown or collected, how it is handled, how efficiently it is converted and what the system displaces. This lesson develops an analytical framework for evaluating biomass pathways across those stages, with emphasis on conversion efficiency and lifecycle greenhouse gas accounting.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Lower heating value:</strong> the usable energy released by burning a fuel when the heat in water vapor is not recovered</li>
<li><strong>Bulk density:</strong> the mass of loose biomass per unit volume, which drives storage and transport cost</li>
<li><strong>Conversion efficiency:</strong> the share of feedstock energy delivered as useful heat, power or fuel</li>
<li><strong>Carbon payback period:</strong> the time needed for regrowth or avoided emissions to offset the initial carbon released</li>
<li><strong>Counterfactual:</strong> what would have happened to the biomass and land without the energy project</li>
<li><strong>Indirect land-use change:</strong> land conversion elsewhere caused when energy crops displace food or feed production</li>
</ul>

<h3>The Supply Chain</h3>
<p>Biomass is bulky, often wet and geographically dispersed. Harvesting, collection, drying, size reduction and transport can consume a meaningful fraction of the delivered energy and dominate cost. Densification into pellets or briquettes raises energy density and makes long-distance shipping feasible, but drying and pelletizing require energy themselves. As a result, most biomass plants draw feedstock from a limited radius, and plant size is constrained by the economics of collection.</p>
<table>
<thead><tr><th>Stage</th><th>Main cost and emissions drivers</th><th>Key levers</th></tr></thead>
<tbody>
<tr><td>Production or collection</td><td>Fertilizer, machinery fuel, yield per hectare</td><td>Residue use, perennial crops, low-input management</td></tr>
<tr><td>Preprocessing</td><td>Drying energy, chipping, pelletizing</td><td>Waste-heat drying, appropriate particle size</td></tr>
<tr><td>Transport</td><td>Distance, bulk density, mode</td><td>Densification, rail or ship for long hauls</td></tr>
<tr><td>Conversion</td><td>Plant efficiency, parasitic loads</td><td>CHP, scale, technology choice</td></tr>
<tr><td>End use</td><td>Which fuel or service is displaced</td><td>Target high-carbon displacement</td></tr>
</tbody>
</table>

<h3>Conversion Efficiency in Practice</h3>
<p>Electricity-only steam plants burning solid biomass typically convert well under half of the fuel energy into electricity, because smaller plants and wetter fuel limit steam conditions. Heat-only boilers and CHP systems can deliver most of the fuel energy as useful output when there is a steady heat demand. Anaerobic digestion converts only the biodegradable fraction of wet feedstocks, but adds value by treating waste and returning nutrients as digestate.</p>

<h3>Lifecycle Greenhouse Gas Accounting</h3>
<p>A lifecycle assessment sums emissions from cultivation, processing, transport and conversion, and compares them with a reference fossil system. For biomass, the critical and contested terms are biogenic carbon and land use. Residues that would decay within a few years have short payback periods; slow-growing stemwood harvested for fuel may have payback periods of decades. Methane capture from manure or landfill-bound waste can produce large net benefits because the counterfactual is methane release.</p>

<h3>An Applied Checklist</h3>
<ol>
<li>Define the functional unit, such as one megawatt-hour of electricity or one gigajoule of heat.</li>
<li>Specify the feedstock and its counterfactual fate.</li>
<li>Account for moisture, transport distance and preprocessing energy.</li>
<li>Use realistic conversion efficiencies for the actual plant scale.</li>
<li>Include land-use change, direct and indirect, where crops are purpose-grown.</li>
<li>Report results over several time horizons to reveal carbon timing.</li>
</ol>
`,
        GRADUATE: `
<h2>Advanced Biofuels, Biorefineries and Bioenergy Policy</h2>
<p>At the graduate level, biomass is best understood as a scarce, multi-use resource. The same hectare or tonne of residue can supply food, materials, soil carbon, heat, power or liquid fuels. Planning and policy must decide where biomass delivers the most value, given that solar, wind and electrification now compete in many end uses. This lesson examines advanced conversion routes, the biorefinery concept and the policy frameworks that shape investment.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Advanced biofuel:</strong> a fuel made from non-food feedstocks such as residues, wastes or lignocellulosic crops</li>
<li><strong>Biorefinery:</strong> a facility that converts biomass into several products, such as fuels, chemicals, materials and power</li>
<li><strong>Cascading use:</strong> using biomass first for higher-value products and only later, at end of life, for energy</li>
<li><strong>Drop-in fuel:</strong> a biofuel chemically similar enough to petroleum fuels to use existing engines and infrastructure</li>
<li><strong>Low-carbon fuel standard:</strong> a policy that requires declining average carbon intensity of transport fuels and credits cleaner fuels</li>
<li><strong>Sustainability criteria:</strong> rules on land, emissions and biodiversity that feedstocks must meet to qualify for support</li>
</ul>

<h3>Advanced Conversion Routes</h3>
<p>First-generation biofuels rely on sugars, starches and vegetable oils that overlap with food markets. Advanced routes target lignocellulose, which is abundant but resistant to breakdown. Biochemical routes use pretreatment and enzymes to release sugars for fermentation; thermochemical routes gasify biomass to syngas for catalytic synthesis, or pyrolyze it to bio-oil for upgrading. Hydroprocessing of waste fats and oils has scaled fastest because it uses refinery-style processes and yields drop-in diesel and jet fuel.</p>
<table>
<thead><tr><th>Pathway</th><th>Feedstock</th><th>Main challenge</th></tr></thead>
<tbody>
<tr><td>Cellulosic ethanol</td><td>Residues, energy grasses</td><td>Pretreatment and enzyme costs, scale-up</td></tr>
<tr><td>Gasification plus synthesis</td><td>Woody biomass, wastes</td><td>Syngas cleanup, capital intensity</td></tr>
<tr><td>Pyrolysis and upgrading</td><td>Woody biomass</td><td>Bio-oil instability, hydrogen demand</td></tr>
<tr><td>Hydroprocessed oils and fats</td><td>Used cooking oil, tallow, vegetable oils</td><td>Limited waste supply, crop oil competition</td></tr>
</tbody>
</table>

<h3>Where Biomass Adds Most Value</h3>
<p>Because sustainable biomass supply is finite, many energy system analyses steer it toward uses that are hard to electrify, such as aviation fuel, some industrial heat and chemical feedstocks, and toward applications that can pair with carbon capture. Using biomass for light-duty vehicle fuel or low-temperature heat increasingly competes with more efficient electric options.</p>

<h3>Policy Frameworks</h3>
<p>Bioenergy markets are largely policy-created. Common instruments include blending mandates, renewable fuel credits, low-carbon fuel standards, feed-in support for biomass power, and carbon pricing. Their design determines which pathways win: volume mandates reward cheap gallons, while carbon-intensity standards reward low lifecycle emissions. Sustainability criteria and default emission values for indirect land-use change are among the most politically contested parameters, because small changes can make or break entire feedstock categories.</p>

<h3>Equity and Governance</h3>
<p>Bioenergy policy interacts with rural livelihoods, land tenure and food security. Large plantations can displace smallholders or customary land users, while well-designed residue and waste markets can add farm income. Traditional biomass use for cooking remains a major source of household air pollution in many low-income regions, so access to clean cooking is a distinct policy priority from modern bioenergy.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Assess sustainable supply realistically, after food, materials and soil needs.</li>
<li>Compare the pathway against the best alternative, including electrification.</li>
<li>Test lifecycle results against land-use and carbon-timing assumptions.</li>
<li>Examine how policy instruments value carbon intensity versus volume.</li>
<li>Identify who controls land and benefits from the value chain.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: Conversion, Negative Emissions and Land Trade-offs</h2>
<p>Bioenergy research sits at the intersection of chemical engineering, ecology, agronomy and energy systems modeling. Its central questions have shifted from whether biomass can replace fossil fuels to how a finite, land-intensive resource should be used in a decarbonizing system, and whether bioenergy with carbon capture can deliver durable carbon removal at scale without unacceptable land, water and biodiversity costs.</p>

<h3>Methods and Concepts</h3>
<ul>
<li><strong>BECCS:</strong> bioenergy with carbon capture and storage, which can remove carbon dioxide if biogenic emissions are captured and stored durably</li>
<li><strong>Consequential LCA:</strong> lifecycle assessment that models market responses and system changes caused by a decision</li>
<li><strong>Attributional LCA:</strong> lifecycle assessment that allocates a share of existing system flows to a product</li>
<li><strong>Integrated assessment model:</strong> a model linking economy, energy, land and climate to explore long-term pathways</li>
<li><strong>Biochar:</strong> a stable carbon-rich solid from pyrolysis that may store carbon in soils for long periods</li>
<li><strong>Techno-economic analysis:</strong> combined process modeling and cost estimation used to screen conversion routes</li>
</ul>

<h3>Conversion Science</h3>
<p>Lignin recalcitrance remains a core barrier for biochemical routes. Research directions include lignin-first fractionation, engineered microbes that tolerate inhibitors, consolidated bioprocessing that combines enzyme production and fermentation, and catalytic upgrading of lignin to aromatics. On the thermochemical side, work focuses on catalytic fast pyrolysis, tar reduction in gasification and co-processing bio-intermediates in petroleum refineries. A recurring finding is that process intensification and coproduct valorization matter as much as yield improvements.</p>

<h3>Negative Emissions</h3>
<p>Many modeled pathways consistent with ambitious temperature goals rely on carbon removal, and BECCS has featured prominently in integrated assessment scenarios. Its net removal depends on the full chain: feedstock carbon payback, supply chain emissions, capture rate, transport and storage permanence. Fermentation produces a nearly pure carbon dioxide stream, making capture comparatively cheap, while capture from biomass combustion flue gas is more energy-intensive. Biochar offers an alternative removal route whose permanence and soil effects vary with feedstock, pyrolysis conditions and soil type.</p>

<h3>Contested Questions</h3>
<table>
<thead><tr><th>Question</th><th>Why it is contested</th></tr></thead>
<tbody>
<tr><td>Carbon neutrality of forest bioenergy</td><td>Results depend on counterfactual harvest, forest growth models and time horizon</td></tr>
<tr><td>Scale of sustainable biomass supply</td><td>Estimates span a wide range depending on diet, yields, land protection and residue assumptions</td></tr>
<tr><td>Indirect land-use change values</td><td>Model-dependent, hard to validate, but decisive for policy eligibility</td></tr>
<tr><td>Reliance on BECCS in scenarios</td><td>Large modeled deployment raises concerns about land, biodiversity and moral hazard</td></tr>
</tbody>
</table>

<h3>Modeling Debates</h3>
<p>Attributional and consequential LCA can reach opposite conclusions about the same pathway because they answer different questions. Integrated assessment models capture land competition but at coarse spatial resolution, while spatially explicit ecosystem models capture biodiversity and soil carbon but lack economic feedbacks. Coupling these scales, and representing uncertainty in yields and forest dynamics, is an active area of methodological work.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Robust measurement, reporting and verification for biogenic carbon removal.</li>
<li>Spatially explicit assessment of land trade-offs with food, water and biodiversity.</li>
<li>Low-cost conversion of lignin and mixed wastes into fuels and chemicals.</li>
<li>Comparative analysis of BECCS, biochar and non-biological removal options.</li>
<li>Governance models that protect land rights and community benefit in bioeconomy expansion.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'rbq1',
      question: {
        ELEMENTARY: 'Where does the energy inside plants come from?',
        MIDDLE_SCHOOL: 'What does anaerobic digestion produce?',
        HIGH_SCHOOL: 'Which conversion technology produces syngas?',
        UNDERGRADUATE: 'Why do most biomass plants draw feedstock from a limited radius?',
        GRADUATE: 'What is a biorefinery?',
        PHD: 'What does BECCS need in order to remove carbon dioxide on net?',
      },
      options: {
        ELEMENTARY: ['The Sun', 'The Moon', 'Rocks in the ground', 'Ocean waves'],
        MIDDLE_SCHOOL: ['Biogas, mostly methane', 'Solar electricity', 'Pure oxygen', 'Salt water'],
        HIGH_SCHOOL: ['Gasification', 'Fermentation', 'Anaerobic digestion', 'Composting'],
        UNDERGRADUATE: ['Bulky, wet biomass makes collection and transport costly', 'Laws forbid moving biomass', 'Biomass loses all energy after one day', 'Plants can only burn local wood'],
        GRADUATE: ['A facility that converts biomass into several products such as fuels, chemicals and power', 'A plant that only burns wood for heat', 'An oil refinery that ignores biomass', 'A greenhouse for growing energy crops'],
        PHD: ['Biogenic carbon dioxide must be captured and stored durably across a low-emission supply chain', 'Any biomass combustion is automatically negative', 'Only fossil carbon must be stored', 'Storage permanence does not matter'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Plants catch sunlight and store its energy as they grow. Biomass energy is saved-up sunshine!',
        MIDDLE_SCHOOL: 'Microbes break down waste without oxygen and release biogas, which is mostly methane.',
        HIGH_SCHOOL: 'Gasification heats biomass with limited oxygen, producing syngas made of carbon monoxide and hydrogen.',
        UNDERGRADUATE: 'Low bulk density and moisture make collection and transport expensive, which limits plant size and supply radius.',
        GRADUATE: 'Like an oil refinery, a biorefinery produces a range of products from one feedstock stream.',
        PHD: 'Net removal depends on capture rate, storage permanence, carbon payback and supply chain emissions.',
      },
    },
    {
      id: 'rbq2',
      question: {
        ELEMENTARY: 'Which of these is a smart way to use biomass?',
        MIDDLE_SCHOOL: 'Why is biomass called a renewable energy source?',
        HIGH_SCHOOL: 'What is pyrolysis?',
        UNDERGRADUATE: 'What is the carbon payback period?',
        GRADUATE: 'Why do many analyses steer limited biomass toward aviation fuel and industry?',
        PHD: 'Why can attributional and consequential LCA reach different conclusions about the same pathway?',
      },
      options: {
        ELEMENTARY: ['Burning plastic trash', 'Turning food scraps into biogas', 'Cutting down a whole forest', 'Leaving lights on'],
        MIDDLE_SCHOOL: ['It never releases carbon dioxide', 'New plants can grow back and absorb carbon again', 'It comes from deep underground', 'It is always free'],
        HIGH_SCHOOL: ['Burning biomass with plenty of air', 'Heating biomass without oxygen to make bio-oil, biochar and gas', 'Using yeast to make ethanol', 'Composting leaves in a garden'],
        UNDERGRADUATE: ['The time to pay off a biomass loan', 'The time for regrowth or avoided emissions to offset carbon released', 'How long a pellet stays dry', 'The lifespan of a boiler'],
        GRADUATE: ['Biomass is cheaper than all other fuels there', 'These uses are hard to electrify, so biomass adds more value there', 'Cars cannot burn biofuels', 'Aviation needs no fuel standards'],
        PHD: ['They use different units', 'They answer different questions: allocating existing flows versus modeling system responses to a decision', 'One ignores carbon entirely', 'They always agree in practice'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Food scraps would just rot, so making biogas from them turns waste into useful energy.',
        MIDDLE_SCHOOL: 'As long as plants regrow, they reabsorb the carbon dioxide released when biomass is used.',
        HIGH_SCHOOL: 'Pyrolysis heats biomass in the absence of oxygen, producing bio-oil, biochar and gases.',
        UNDERGRADUATE: 'Payback depends on feedstock: residues that would rot pay back fast, while stemwood can take decades.',
        GRADUATE: 'Where electric options exist, biomass competes poorly; hard-to-electrify uses get more value from scarce supply.',
        PHD: 'Attributional LCA assigns shares of current flows; consequential LCA models market and land responses to a change.',
      },
    },
    {
      id: 'rbq3',
      question: {
        ELEMENTARY: 'What should you never burn?',
        MIDDLE_SCHOOL: 'Which method turns sugary crops into a fuel for cars?',
        HIGH_SCHOOL: 'How does a combined heat and power plant improve biomass efficiency?',
        UNDERGRADUATE: 'Why can manure digesters produce large net climate benefits?',
        GRADUATE: 'What is a drop-in fuel?',
        PHD: 'Why is capturing carbon dioxide from ethanol fermentation comparatively cheap?',
      },
      options: {
        ELEMENTARY: ['Nothing, everything is fine to burn', 'Dry leaves in a lab', 'Trash and plastic', 'Sunlight'],
        MIDDLE_SCHOOL: ['Anaerobic digestion', 'Combustion', 'Fermentation', 'Freezing'],
        HIGH_SCHOOL: ['It burns more fuel faster', 'It removes all moisture from wood', 'It uses leftover heat for buildings or industry', 'It stores electricity in batteries'],
        UNDERGRADUATE: ['Manure contains no carbon', 'They need no equipment', 'The counterfactual is methane release, which capture avoids', 'Digesters run on solar power'],
        GRADUATE: ['A fuel that must be dropped into special tanks', 'A fuel used only in tractors', 'A biofuel close enough to petroleum fuels to use existing engines and infrastructure', 'A fuel banned by blending mandates'],
        PHD: ['Fermentation releases no carbon dioxide', 'Ethanol plants are always next to oil fields', 'Fermentation yields a nearly pure carbon dioxide stream', 'Capture is required by every law'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Burning trash and plastic makes harmful smoke that hurts people and nature.',
        MIDDLE_SCHOOL: 'Yeast ferments sugars from crops like corn or sugarcane into ethanol.',
        HIGH_SCHOOL: 'CHP plants put waste heat to use, capturing far more of the fuel energy than electricity-only plants.',
        UNDERGRADUATE: 'Without a digester, manure would release methane; capturing it avoids that and makes fuel.',
        GRADUATE: 'Drop-in fuels such as hydroprocessed diesel and jet fuel work in existing engines and pipelines.',
        PHD: 'A concentrated stream needs little separation, unlike dilute combustion flue gas.',
      },
    },
    {
      id: 'rbq4',
      question: {
        ELEMENTARY: 'What do plants use to make their own food?',
        MIDDLE_SCHOOL: 'What is a problem with burning wood in old stoves or open fires indoors?',
        HIGH_SCHOOL: 'Why is burning a whole tree not instantly carbon neutral?',
        UNDERGRADUATE: 'What is indirect land-use change?',
        GRADUATE: 'How does a low-carbon fuel standard differ from a volume mandate?',
        PHD: 'Why are estimates of sustainable biomass supply so wide?',
      },
      options: {
        ELEMENTARY: ['Plastic, glue and paint', 'Toys, games and books', 'Snow, ice and wind', 'Sunlight, water and air'],
        MIDDLE_SCHOOL: ['It makes the wood grow back faster', 'It removes carbon from the air', 'It makes the room colder', 'Smoke and particles can harm health'],
        HIGH_SCHOOL: ['Trees contain no carbon', 'Burning trees cools the planet', 'Wood cannot be burned', 'The carbon is released at once, but regrowing a similar tree can take decades'],
        UNDERGRADUATE: ['Changing land deeds for biomass plants', 'Moving a plant to a new site', 'Paving land for roads', 'Land conversion elsewhere when energy crops displace food or feed production'],
        GRADUATE: ['It bans all biofuels', 'It only counts gallons sold', 'It sets no targets at all', 'It rewards lower lifecycle carbon intensity rather than just volume'],
        PHD: ['Every study uses identical assumptions', 'Biomass supply has been measured exactly', 'Only one crop is ever considered', 'They depend on diets, yields, land protection and residue assumptions'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Plants use sunlight, water and air in photosynthesis to make food and grow.',
        MIDDLE_SCHOOL: 'Smoky stoves and fires release particles that can damage our lungs.',
        HIGH_SCHOOL: 'Timing matters: the release is immediate, while reabsorption by regrowth is slow.',
        UNDERGRADUATE: 'If energy crops push food production onto new land elsewhere, that conversion can release stored carbon.',
        GRADUATE: 'Carbon-intensity standards credit fuels by lifecycle emissions, favoring cleaner pathways.',
        PHD: 'Supply depends on many uncertain assumptions about food systems, land protection and agricultural productivity.',
      },
    },
    {
      id: 'rbq5',
      question: {
        ELEMENTARY: 'How can you help keep biomass energy good for the planet?',
        MIDDLE_SCHOOL: 'Which is an advantage of biomass compared with solar and wind?',
        HIGH_SCHOOL: 'Which feedstock is best suited to anaerobic digestion?',
        UNDERGRADUATE: 'Why should lifecycle results be reported over several time horizons?',
        GRADUATE: 'What is cascading use of biomass?',
        PHD: 'What is a key research challenge for biochemical conversion of lignocellulose?',
      },
      options: {
        ELEMENTARY: ['Cut down every tree nearby', 'Help plant trees and compost food scraps', 'Throw food in the trash', 'Burn old toys'],
        MIDDLE_SCHOOL: ['It can be stored and used any time of day', 'It never needs land', 'It produces no smoke ever', 'It works only at night'],
        HIGH_SCHOOL: ['Dry hardwood logs', 'Manure and food waste', 'Coal', 'Sand and gravel'],
        UNDERGRADUATE: ['To make reports longer', 'To reveal how carbon timing changes the result', 'Because emissions never change', 'Because regulators ignore time'],
        GRADUATE: ['Burning biomass several times', 'Using biomass for higher-value products first and for energy at end of life', 'Shipping biomass down rivers', 'Growing crops in terraces'],
        PHD: ['Lignin is too easy to break down', 'Lignin recalcitrance resists breakdown into fermentable sugars', 'Lignocellulose contains no carbon', 'Enzymes are not used at all'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Planting trees and using food waste helps biomass stay renewable and kind to nature.',
        MIDDLE_SCHOOL: 'Biomass fuel can be stored, so it can make energy whenever it is needed.',
        HIGH_SCHOOL: 'Wet wastes like manure and food scraps suit microbes that make biogas.',
        UNDERGRADUATE: 'Short and long horizons can give very different answers when carbon release and uptake happen at different times.',
        GRADUATE: 'Cascading gets more value from scarce biomass by using it as materials before energy.',
        PHD: 'Lignin protects cellulose, so pretreatment, enzymes and engineered microbes are active research areas.',
      },
    },
  ],
}

export default expansion
