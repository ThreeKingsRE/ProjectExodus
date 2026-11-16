import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'renewable-energy',
  moduleKey: 'biomass-biofuels',
  lessons: [
    {
      id: 're-bio-1',
      title: 'Plants to Power: Biomass and Biofuels',
      content: {
        ELEMENTARY: `
<h2>From Plants and Leftovers to Fuel</h2>
<p>Did you know that a corn plant, a pile of old leaves or even used cooking oil can help make fuel? Fuel is anything we use to make energy, like the gas that makes a car go. Some fuels can be made from plants and food scraps. We call these fuels <em>biofuels</em>. Let's see how they work!</p>

<h3>Plants Catch Sunshine</h3>
<p>Plants are amazing. They use sunlight, air and water to grow. While they grow, they store some of the sun's energy inside their leaves, stems and seeds. When we turn plants into fuel, we are really using that stored sunshine. Anything that comes from living things, like plants, wood or food scraps, is called <em>biomass</em>.</p>
<ul>
<li><strong>Biomass:</strong> plants, wood, food scraps and other things that come from living things</li>
<li><strong>Fuel:</strong> something we use to make heat, light or movement</li>
<li><strong>Biofuel:</strong> a fuel made from plants, food waste or animal fats</li>
</ul>

<h3>Three Kinds of Biofuel</h3>
<p>People make biofuels in different ways. Here are three you might hear about:</p>
<ul>
<li><strong>Ethanol:</strong> a fuel made from sugary or starchy plants like corn or sugarcane, often mixed into car fuel</li>
<li><strong>Biodiesel:</strong> a fuel for trucks and buses made from plant oils or old cooking oil</li>
<li><strong>Biogas:</strong> a gas made when tiny living things called microbes eat food scraps or manure</li>
</ul>
<p>Biogas is made in big closed tanks with no air inside. The microbes munch on the scraps and give off a gas that can be burned for cooking or for making electricity.</p>

<h3>Is It Good for the Earth?</h3>
<p>Biofuels can be helpful, especially when they are made from leftovers that would be thrown away. But we have to be careful. If we cut down forests or use land that should grow food just to make fuel, that is not good for people or animals. The best biofuels come from waste and from farms that take good care of the soil.</p>

<h3>Things You Can Do</h3>
<ol>
<li>Put food scraps in a compost bin or a green waste bin instead of the trash.</li>
<li>Ask a grown-up if your town turns food waste into biogas.</li>
<li>Never pour cooking oil down the sink. Some places collect it to make biodiesel!</li>
</ol>

<h3>Think About It</h3>
<p>Next time you see a banana peel, remember: it held a little bit of sunshine. With the right tools, even leftovers can help power our world.</p>
`,
        MIDDLE_SCHOOL: `
<h2>How Organic Materials Become Fuel</h2>
<p>Biomass is any material that comes from living or recently living things, such as crops, wood, grass, manure and food waste. Biofuels are fuels made from biomass. Some are liquids, like ethanol and biodiesel, and some are gases, like biogas. They matter because they can replace part of the gasoline, diesel and natural gas we use, especially in vehicles and machines that are hard to run on electricity.</p>

<h3>Where the Energy Comes From</h3>
<p>Plants use <em>photosynthesis</em> to turn sunlight, carbon dioxide and water into sugars. Those sugars are stored as starch, oils and tough fibers called cellulose. When biofuel burns, it releases energy and gives carbon dioxide back to the air. In a well-managed system, new plants absorb that carbon dioxide again as they grow. That is why biofuels are called renewable, although making them still uses energy for farming, transport and factories.</p>

<h3>How Each Fuel Is Made</h3>
<ol>
<li><strong>Ethanol:</strong> corn or sugarcane is ground up, its starch is turned into sugar, yeast ferments the sugar into alcohol, and the alcohol is distilled to make fuel.</li>
<li><strong>Biodiesel:</strong> vegetable oil, used cooking oil or animal fat is reacted with an alcohol to make a fuel that diesel engines can burn.</li>
<li><strong>Biogas:</strong> food waste or manure sits in a sealed tank called a digester, where microbes break it down without oxygen and release methane.</li>
</ol>

<h3>Key Words</h3>
<ul>
<li><strong>Photosynthesis:</strong> the process plants use to turn sunlight, water and carbon dioxide into food</li>
<li><strong>Fermentation:</strong> when yeast or bacteria turn sugars into alcohol or other products</li>
<li><strong>Anaerobic digestion:</strong> breaking down organic material without oxygen to make biogas</li>
<li><strong>Feedstock:</strong> the raw material, such as corn or used oil, that a fuel is made from</li>
<li><strong>Methane:</strong> the main burnable gas in both natural gas and biogas</li>
<li><strong>Blend:</strong> a mix of biofuel with regular fuel, such as gasoline containing some ethanol</li>
</ul>

<h3>Comparing Biofuels</h3>
<table>
<thead><tr><th>Biofuel</th><th>Made from</th><th>Used for</th></tr></thead>
<tbody>
<tr><td>Ethanol</td><td>Corn, sugarcane, other starchy or sugary crops</td><td>Mixed into gasoline for cars</td></tr>
<tr><td>Biodiesel</td><td>Plant oils, used cooking oil, animal fats</td><td>Trucks, buses, tractors</td></tr>
<tr><td>Biogas</td><td>Manure, food waste, sewage sludge</td><td>Heat, cooking, electricity</td></tr>
</tbody>
</table>

<h3>Benefits and Worries</h3>
<p>Biofuels made from waste are a win: they reduce trash, cut methane escaping from landfills and make useful energy. Biofuels made from food crops are more debated. Growing fuel crops can use land, water and fertilizer that could grow food, and clearing forests for fuel crops releases large amounts of carbon. Scientists are working on fuels from non-food plants, like grasses and crop leftovers, to avoid these problems.</p>
`,
        HIGH_SCHOOL: `
<h2>Biofuel Production: Technologies and Trade-offs</h2>
<p>Biofuels are among the few renewable options for liquid fuels, which still power most trucks, ships and aircraft. Yet they are also one of the most debated parts of the clean energy transition. Understanding how biofuels are made, and what they cost the land, helps explain why some are celebrated and others criticized.</p>

<h3>Generations of Biofuels</h3>
<p>Biofuels are often grouped into "generations" based on their feedstock:</p>
<ul>
<li><strong>First-generation biofuel:</strong> fuel made from food crops, such as corn ethanol, sugarcane ethanol and biodiesel from soybean or rapeseed oil</li>
<li><strong>Second-generation biofuel:</strong> fuel made from non-food material such as crop residues, wood waste and grasses, also called cellulosic or advanced biofuel</li>
<li><strong>Third-generation biofuel:</strong> fuel made from algae, which can grow fast on land that is not used for farming</li>
<li><strong>Waste-based biofuel:</strong> fuel made from used cooking oil, animal fats, manure or municipal organic waste</li>
<li><strong>Drop-in fuel:</strong> a biofuel chemically similar enough to petroleum fuel that it works in existing engines and pipelines without changes</li>
</ul>

<h3>Conversion Pathways</h3>
<table>
<thead><tr><th>Pathway</th><th>How it works</th><th>Main products</th></tr></thead>
<tbody>
<tr><td>Fermentation</td><td>Microbes convert sugars into alcohol</td><td>Ethanol</td></tr>
<tr><td>Transesterification</td><td>Oils react with alcohol and a catalyst</td><td>Biodiesel and glycerin</td></tr>
<tr><td>Hydrotreating</td><td>Oils and fats react with hydrogen</td><td>Renewable diesel and jet fuel</td></tr>
<tr><td>Anaerobic digestion</td><td>Microbes break down wet waste without oxygen</td><td>Biogas and digestate fertilizer</td></tr>
<tr><td>Pyrolysis</td><td>Biomass is heated without oxygen</td><td>Bio-oil, syngas and biochar</td></tr>
<tr><td>Gasification</td><td>Biomass is heated with limited oxygen</td><td>Syngas for power or fuel synthesis</td></tr>
</tbody>
</table>
<p>Cellulosic ethanol is harder to make than corn ethanol because cellulose is locked inside tough plant walls bound with lignin. It needs pretreatment and enzymes to free the sugars, which has kept costs high.</p>

<h3>Is It Really Low-Carbon?</h3>
<p>The carbon released when a biofuel burns was recently absorbed by plants, but that is only part of the story. Fertilizer production, farm machinery, fuel processing and transport all add emissions. The biggest wildcard is land: if forests or grasslands are cleared to grow fuel crops, the carbon stored in trees and soil can outweigh the savings for decades. Waste-based fuels and residues usually perform best because they need no extra land.</p>

<h3>Real-World Uses</h3>
<ul>
<li>Many countries blend ethanol into gasoline, and some, such as Brazil, use high ethanol blends widely.</li>
<li>Renewable diesel and sustainable aviation fuel are growing because they can drop into existing engines.</li>
<li>Farms and wastewater plants use digesters to turn manure and sludge into biogas, which can be cleaned into renewable natural gas.</li>
</ul>

<h3>Making Biofuels Better</h3>
<ol>
<li>Prioritize wastes and residues over food crops.</li>
<li>Protect forests and peatlands with strong sustainability rules.</li>
<li>Use biofuels where electricity struggles, such as aviation and shipping.</li>
<li>Improve farming practices to cut fertilizer emissions and protect soil.</li>
</ol>
`,
        UNDERGRADUATE: `
<h2>Biofuel Feedstocks, Conversion Pathways and Lifecycle Impacts</h2>
<p>Evaluating a biofuel requires following carbon, energy and land through its whole supply chain. Two fuels with the same chemical formula can have very different climate effects depending on feedstock, process energy and land history. This lesson develops the core concepts and analytical steps used to compare biofuel pathways.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Carbon intensity:</strong> lifecycle greenhouse gas emissions per unit of fuel energy, typically grams of carbon dioxide equivalent per megajoule</li>
<li><strong>Energy return on investment:</strong> the ratio of usable energy delivered by a fuel to the energy spent producing it</li>
<li><strong>Direct land use change:</strong> emissions from converting the specific land where the feedstock is grown, such as clearing forest for a plantation</li>
<li><strong>Indirect land use change:</strong> emissions from land converted elsewhere when fuel crops displace food production and markets respond</li>
<li><strong>Co-product allocation:</strong> the rule used to divide emissions between the fuel and by-products such as animal feed or glycerin</li>
<li><strong>Lignocellulose:</strong> the structural material of plants, made of cellulose, hemicellulose and lignin, which resists breakdown</li>
</ul>

<h3>Feedstock Comparison</h3>
<table>
<thead><tr><th>Feedstock</th><th>Yield and land</th><th>Typical lifecycle concern</th></tr></thead>
<tbody>
<tr><td>Corn (starch)</td><td>Productive, but uses prime cropland</td><td>Fertilizer, process heat, indirect land use change</td></tr>
<tr><td>Sugarcane</td><td>High yields in tropical climates</td><td>Land expansion pressure; bagasse can supply process energy</td></tr>
<tr><td>Vegetable oils</td><td>Moderate yields per hectare</td><td>Deforestation risk, especially for palm and soy expansion</td></tr>
<tr><td>Wastes and residues</td><td>No new land required</td><td>Limited supply; residue removal can deplete soil carbon</td></tr>
<tr><td>Dedicated energy grasses</td><td>Can grow on marginal land</td><td>Establishment cost; conversion technology still costly</td></tr>
</tbody>
</table>

<h3>Reasoning About Carbon Intensity</h3>
<p>A lifecycle assessment sums emissions from cultivation, harvesting, transport, conversion and distribution, then subtracts nothing for combustion carbon if it is treated as biogenic. Several choices swing the result. If the conversion plant runs on coal, carbon intensity rises; if it burns its own residues or uses renewable electricity, it falls. Co-product allocation matters too: corn ethanol plants sell distillers grains as feed, and crediting that feed lowers the fuel's share of emissions. Land use change can dominate everything else. Because indirect effects arise through global markets, they are estimated with economic models and carry wide uncertainty bands.</p>

<h3>Energy Balance</h3>
<p>Energy return varies widely. Sugarcane ethanol tends to have a favorable balance because bagasse supplies process heat. Corn ethanol's balance is positive but narrower. Fuels from wastes often score well because much of the upstream energy is attributed to the original product. A low energy return means more fossil inputs per unit of fuel and greater sensitivity to input prices.</p>

<h3>Applied Method: Screening a Biofuel Pathway</h3>
<ol>
<li>Identify the feedstock and whether it competes with food, feed or existing uses.</li>
<li>Check land history: was the land recently forest, peatland or grassland?</li>
<li>Estimate cultivation inputs, especially nitrogen fertilizer and its nitrous oxide emissions.</li>
<li>Examine process energy sources and co-product handling.</li>
<li>Compare carbon intensity with the fossil fuel it replaces, including uncertainty ranges.</li>
<li>Consider the end use: does the fuel serve a sector with few alternatives?</li>
</ol>
`,
        GRADUATE: `
<h2>Bioenergy Policy, Advanced Biofuels and Carbon Accounting</h2>
<p>Biofuels exist at scale largely because of policy. Blending mandates, low-carbon fuel standards and tax credits create markets that would not otherwise exist. Designing these policies well depends on carbon accounting choices that are technically demanding and politically contested. This lesson examines policy instruments, advanced pathways and the accounting debates that shape them.</p>

<h3>Key Concepts</h3>
<ul>
<li><strong>Blending mandate:</strong> a requirement that fuel suppliers include a minimum volume or share of biofuel in transport fuels</li>
<li><strong>Low-carbon fuel standard:</strong> a performance policy that requires the average carbon intensity of fuels sold to decline, with tradable credits for low-intensity fuels</li>
<li><strong>Sustainability criteria:</strong> rules that exclude feedstocks from high-carbon or high-biodiversity land and require minimum emission savings</li>
<li><strong>Sustainable aviation fuel:</strong> jet fuel made from biomass, wastes or synthetic routes that meets aviation safety specifications</li>
<li><strong>Carbon debt:</strong> the upfront emissions from land clearing that must be repaid by fuel savings before a biofuel yields net climate benefit</li>
<li><strong>Bioenergy with carbon capture and storage:</strong> capturing carbon dioxide from biomass conversion and storing it underground, potentially yielding net removals</li>
</ul>

<h3>Comparing Policy Instruments</h3>
<table>
<thead><tr><th>Instrument</th><th>Strength</th><th>Weakness</th></tr></thead>
<tbody>
<tr><td>Volume mandate</td><td>Predictable demand that supports investment</td><td>Rewards volume rather than carbon performance</td></tr>
<tr><td>Carbon-intensity standard</td><td>Rewards lower lifecycle emissions continuously</td><td>Depends heavily on accounting assumptions</td></tr>
<tr><td>Production tax credit</td><td>Directly lowers producer cost</td><td>Fiscal cost; may subsidize low-value uses</td></tr>
<tr><td>Feedstock caps and exclusions</td><td>Limits food competition and deforestation risk</td><td>Hard to verify across global supply chains</td></tr>
</tbody>
</table>

<h3>Advanced Pathways</h3>
<p>Advanced biofuels aim to escape the food-versus-fuel trap. Options include cellulosic ethanol, hydrotreated fats and oils, gasification followed by Fischer-Tropsch synthesis, alcohol-to-jet conversion and upgraded pyrolysis oils. Hydrotreated waste oils are the most commercially mature route to renewable diesel and aviation fuel, but waste oil supply is limited, which raises fraud and diversion risks when credits are valuable. Lignocellulosic routes have faced repeated commercial setbacks due to feedstock logistics, pretreatment cost and scale-up difficulty.</p>

<h3>Accounting Debates</h3>
<p>Treating biogenic combustion emissions as zero assumes regrowth offsets them, but timing matters: forest biomass may take decades to reabsorb carbon, while annual crops recapture it within a season. Indirect land use change values derived from economic models vary widely, and regulators must choose a number despite that spread. Allocation methods, system boundaries and the counterfactual fate of wastes can each move a fuel's score substantially. Policies that ignore these choices risk rewarding fuels that do little for the climate.</p>

<h3>Equity and Governance</h3>
<p>Biofuel demand can affect food prices, land tenure and rural livelihoods, particularly where land rights are insecure. Smallholders and Indigenous communities may face pressure from plantation expansion. Credible governance includes transparent certification, independent auditing, protection of customary land rights and attention to who captures the economic value.</p>

<h3>Evaluation Framework</h3>
<ol>
<li>Define the end-use sector and its alternative decarbonization options.</li>
<li>Assess lifecycle carbon intensity, including land use change and its uncertainty.</li>
<li>Test supply limits for wastes and residues against projected demand.</li>
<li>Examine verification and fraud risk in credit markets.</li>
<li>Evaluate distributional effects on food prices and land rights.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers: Bioenergy Systems, Land Use and Mitigation Potential</h2>
<p>Bioenergy occupies a puzzling place in climate research. Many integrated assessment scenarios that limit warming rely on large amounts of biomass, often combined with carbon capture, yet field-level evidence and land-system constraints raise doubts about whether such quantities are achievable sustainably. This lesson surveys modeling methods, contested questions and open research directions.</p>

<h3>Modeling Approaches</h3>
<ul>
<li><strong>Integrated assessment models:</strong> frameworks linking energy, economy, land and climate to explore mitigation pathways and the role of biomass</li>
<li><strong>Computable general equilibrium models:</strong> economy-wide models used to estimate market-mediated effects such as indirect land use change</li>
<li><strong>Partial equilibrium land models:</strong> models of agricultural and forestry markets with detailed commodity and land representation</li>
<li><strong>Process-based crop and ecosystem models:</strong> biophysical simulations of plant growth, soil carbon and nutrient cycling under management and climate</li>
<li><strong>Consequential lifecycle assessment:</strong> an approach that estimates the change in emissions caused by a decision, including market responses</li>
<li><strong>Attributional lifecycle assessment:</strong> an approach that assigns a share of total emissions to a product based on its supply chain</li>
</ul>
<p>The choice between attributional and consequential framing alone can reverse conclusions about a feedstock, which is why policy and academic estimates frequently disagree.</p>

<h3>Biomass Potential Estimates</h3>
<p>Estimates of sustainable global biomass supply span a wide range because they depend on assumptions about yields, diets, land availability, protected areas, water and residue removal rates. Top-down potentials derived from land availability tend to exceed bottom-up estimates that account for logistics, soil health and competing demands. Reconciling these approaches remains an active area of study.</p>

<h3>Contested Questions</h3>
<table>
<thead><tr><th>Question</th><th>Why it is contested</th></tr></thead>
<tbody>
<tr><td>Carbon neutrality of forest biomass</td><td>Depends on harvest counterfactual, regrowth time and landscape versus stand accounting</td></tr>
<tr><td>Magnitude of indirect land use change</td><td>Model structure, elasticities and baseline assumptions drive large spreads</td></tr>
<tr><td>Scale of bioenergy with carbon capture</td><td>Land, water and biodiversity limits conflict with scenario demands</td></tr>
<tr><td>Best end use of scarce biomass</td><td>Competing claims from aviation, chemicals, power and long-lived materials</td></tr>
<tr><td>Soil carbon effects of residue removal</td><td>Site-specific and slow to measure, with limited long-term field data</td></tr>
</tbody>
</table>

<h3>Temporal Dynamics and Climate Metrics</h3>
<p>Standard accounting uses global warming potentials over a fixed horizon and treats biogenic carbon as neutral. Dynamic approaches track the timing of emissions and removals, revealing that carbon debts from land conversion or slow-growing forests can matter greatly for near-term warming. Choice of metric, discounting and time horizon remains a methodological debate with direct policy consequences.</p>

<h3>Systems Integration</h3>
<p>Biomass is increasingly viewed as a scarce carbon resource rather than simply an energy source. Research explores biorefineries that co-produce fuels, chemicals and materials, the value of biogenic carbon as a feedstock for synthetic fuels, and how bioenergy interacts with electrification and hydrogen. Optimizing allocation across sectors requires models that represent both energy system flexibility and land-system constraints.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Reconciling top-down biomass potentials with bottom-up supply chain and soil constraints.</li>
<li>Better empirical identification of indirect land use change using remote sensing and econometrics.</li>
<li>Long-term field measurement of soil carbon under residue removal and perennial energy crops.</li>
<li>Coupled models of biodiversity, water and food security alongside energy and climate outcomes.</li>
<li>Governance and monitoring systems for verifying negative emissions from bioenergy with carbon capture.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'rbioq1',
      question: {
        ELEMENTARY: 'What can become biofuel?',
        MIDDLE_SCHOOL: 'What is biogas?',
        HIGH_SCHOOL: 'What is pyrolysis?',
        UNDERGRADUATE: 'What is indirect land use change?',
        GRADUATE: 'What is bioenergy with carbon capture and storage?',
        PHD: 'Why do estimates of sustainable global biomass supply vary so widely?',
      },
      options: {
        ELEMENTARY: ['Plants and food scraps', 'Rocks', 'Glass bottles', 'Metal spoons'],
        MIDDLE_SCHOOL: ['Gas made when microbes break down organic matter without oxygen', 'Natural gas pumped from deep underground', 'Steam from boiling water', 'Air blown out by wind turbines'],
        HIGH_SCHOOL: ['Heating biomass without oxygen to make bio-oil, syngas and biochar', 'Burning biomass in an open fire', 'Freezing plants to store energy', 'Soaking crops in water'],
        UNDERGRADUATE: ['Emissions from land converted elsewhere when fuel crops displace food production', 'Emissions from the exact field where the crop grows', 'Land that never changes use', 'Improvements in soil caused by fertilizer'],
        GRADUATE: ['Capturing carbon dioxide from biomass conversion and storing it underground', 'Burning more biomass without any controls', 'A tax on biofuel imports', 'A method for drying wood chips'],
        PHD: ['They depend on assumptions about yields, diets, land, water and residue removal', 'Biomass supply is a fixed, precisely known number', 'All models use identical assumptions', 'Only weather affects the estimates'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Plants, food scraps, wood and used cooking oil can all be turned into biofuels.',
        MIDDLE_SCHOOL: 'In a sealed digester, microbes break down food waste or manure without oxygen and release methane-rich biogas.',
        HIGH_SCHOOL: 'Pyrolysis heats biomass in the absence of oxygen, producing bio-oil, syngas and solid biochar.',
        UNDERGRADUATE: 'When fuel crops take over cropland, food production can shift and cause land clearing somewhere else.',
        GRADUATE: 'Capturing and storing biogenic carbon dioxide could produce net removals if the whole system is sustainable.',
        PHD: 'Potential estimates rest on many uncertain assumptions, so top-down and bottom-up approaches give very different numbers.',
      },
    },
    {
      id: 'rbioq2',
      question: {
        ELEMENTARY: 'What is biodiesel?',
        MIDDLE_SCHOOL: 'How is ethanol made from corn?',
        HIGH_SCHOOL: 'What is a second-generation (cellulosic) biofuel?',
        UNDERGRADUATE: 'What does carbon intensity measure?',
        GRADUATE: 'How does a low-carbon fuel standard differ from a volume mandate?',
        PHD: 'What distinguishes consequential from attributional lifecycle assessment?',
      },
      options: {
        ELEMENTARY: ['A fuel for buses made from melted rocks', 'A fuel for trucks and buses made from plant oils or old cooking oil', 'A kind of breakfast cereal', 'A soap for washing cars'],
        MIDDLE_SCHOOL: ['Corn kernels are squeezed like oranges', 'Starch is turned into sugar, fermented by yeast into alcohol and then distilled', 'Corn is burned directly in car engines', 'Corn is frozen and melted into fuel'],
        HIGH_SCHOOL: ['Fuel made from corn kernels and sugar', 'Fuel made from non-food material such as crop residues, wood waste and grasses', 'Fuel made only from crude oil', 'A battery made of plant cells'],
        UNDERGRADUATE: ['The price of fuel per liter', 'Lifecycle greenhouse gas emissions per unit of fuel energy', 'The amount of carbon atoms in one molecule', 'How hot the fuel burns'],
        GRADUATE: ['It requires the average carbon intensity of fuels to decline instead of fixing a volume', 'It bans all biofuels', 'It only applies to electricity', 'It sets a minimum fuel price'],
        PHD: ['Consequential LCA estimates the change in emissions caused by a decision, including market responses', 'They are identical methods with different names', 'Attributional LCA always includes indirect land use change', 'Consequential LCA ignores supply chains entirely'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Biodiesel is made from plant oils, animal fats or used cooking oil and works in diesel engines.',
        MIDDLE_SCHOOL: 'Corn starch becomes sugar, yeast ferments it into alcohol, and distillation purifies the alcohol into fuel.',
        HIGH_SCHOOL: 'Second-generation fuels use non-food plant material, avoiding direct competition with food crops.',
        UNDERGRADUATE: 'Carbon intensity sums emissions across the whole supply chain per megajoule of fuel.',
        GRADUATE: 'A carbon-intensity standard rewards lower lifecycle emissions, while a volume mandate rewards gallons.',
        PHD: 'Consequential LCA models the effects of a choice, while attributional LCA assigns a share of existing emissions to a product.',
      },
    },
    {
      id: 'rbioq3',
      question: {
        ELEMENTARY: 'Where do plants get the energy they store?',
        MIDDLE_SCHOOL: 'What is a feedstock?',
        HIGH_SCHOOL: 'Why can clearing forests for fuel crops make biofuels worse for the climate?',
        UNDERGRADUATE: 'Why does sugarcane ethanol often have a favorable energy balance?',
        GRADUATE: 'What is carbon debt in biofuel policy?',
        PHD: 'Why do dynamic climate metrics matter for forest biomass?',
      },
      options: {
        ELEMENTARY: ['From the moon', 'From the dirt only', 'From sunshine', 'From the wind'],
        MIDDLE_SCHOOL: ['A machine that feeds animals', 'A kind of fuel tank', 'The raw material, like corn or used oil, that a fuel is made from', 'The exhaust from a car'],
        HIGH_SCHOOL: ['Trees make fuel crops grow slower', 'Forests block sunlight from farms', 'The carbon stored in trees and soil is released and can outweigh the fuel savings', 'Forests contain no carbon'],
        UNDERGRADUATE: ['It needs no harvesting', 'It is grown underground', 'Its residue, bagasse, can supply process heat', 'It contains no sugar'],
        GRADUATE: ['A loan used to build a biorefinery', 'The cost of carbon credits', 'Upfront land-clearing emissions that fuel savings must repay before net benefit', 'A tax paid by fossil fuel companies'],
        PHD: ['They make all biomass look carbon neutral', 'They ignore emissions timing', 'They reveal that slow regrowth creates carbon debts that matter for near-term warming', 'They only apply to annual crops'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Plants catch sunlight and store some of its energy in their leaves, stems and seeds.',
        MIDDLE_SCHOOL: 'A feedstock is the starting material for making a fuel, such as corn, manure or used cooking oil.',
        HIGH_SCHOOL: 'Land clearing releases stored carbon that may take decades of fuel savings to repay.',
        UNDERGRADUATE: 'Burning bagasse for process energy reduces fossil inputs and improves the energy return.',
        GRADUATE: 'Carbon debt is the emissions spike from land conversion that must be repaid by later savings.',
        PHD: 'Tracking timing shows that slow-growing forests can leave extra carbon in the air for decades.',
      },
    },
    {
      id: 'rbioq4',
      question: {
        ELEMENTARY: 'What is a good thing to do with food scraps?',
        MIDDLE_SCHOOL: 'What is anaerobic digestion?',
        HIGH_SCHOOL: 'What is a drop-in fuel?',
        UNDERGRADUATE: 'Why does co-product allocation affect a biofuel\'s carbon intensity?',
        GRADUATE: 'Why do valuable credits for waste oil create a governance risk?',
        PHD: 'Why is biomass increasingly treated as a scarce carbon resource?',
      },
      options: {
        ELEMENTARY: ['Throw them in the river', 'Pour them down the sink', 'Leave them on the sidewalk', 'Put them in a compost or green waste bin'],
        MIDDLE_SCHOOL: ['Burning biomass with lots of air', 'Freezing food waste', 'Drying grass in the sun', 'Breaking down organic material without oxygen to make biogas'],
        HIGH_SCHOOL: ['A fuel that must be dropped into a special new engine', 'A fuel that evaporates instantly', 'A fuel made only from coal', 'A biofuel similar enough to petroleum fuel to work in existing engines'],
        UNDERGRADUATE: ['It changes the fuel\'s chemical formula', 'It decides the price of corn', 'It has no effect on results', 'It decides how emissions are shared between the fuel and by-products like animal feed'],
        GRADUATE: ['Waste oil supply is unlimited', 'Credits make waste oil worthless', 'Waste oil cannot be made into fuel', 'Limited supply plus high value raises fraud and diversion risks'],
        PHD: ['It has no other possible uses', 'Electricity can easily replace all its uses', 'It is easily available in unlimited quantities', 'Aviation, chemicals, power and materials compete for limited sustainable supply'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Composting or collecting food scraps lets them become soil food or even biogas.',
        MIDDLE_SCHOOL: 'Without oxygen, microbes break down organic matter and release methane-rich biogas.',
        HIGH_SCHOOL: 'Drop-in fuels like renewable diesel can use existing engines, pipes and pumps.',
        UNDERGRADUATE: 'Crediting by-products such as distillers grains lowers the share of emissions assigned to the fuel.',
        GRADUATE: 'When supply is tight and credits are valuable, verification becomes critical to prevent mislabeling.',
        PHD: 'Because sustainable supply is limited, researchers ask which sector gains most from each unit of biomass.',
      },
    },
    {
      id: 'rbioq5',
      question: {
        ELEMENTARY: 'Which biofuel is made by tiny microbes eating scraps?',
        MIDDLE_SCHOOL: 'Which biofuel is usually mixed into gasoline for cars?',
        HIGH_SCHOOL: 'Where are biofuels especially useful in a clean energy future?',
        UNDERGRADUATE: 'What is a risk of removing too many crop residues for fuel?',
        GRADUATE: 'Why can biofuel expansion raise equity concerns?',
        PHD: 'Why is the carbon neutrality of forest biomass contested?',
      },
      options: {
        ELEMENTARY: ['Biogas', 'Gasoline', 'Coal', 'Sand'],
        MIDDLE_SCHOOL: ['Ethanol', 'Biogas', 'Glycerin', 'Methane'],
        HIGH_SCHOOL: ['Sectors where electricity struggles, like aviation and shipping', 'Replacing rooftop solar panels', 'Powering phone chargers', 'Heating swimming pools only'],
        UNDERGRADUATE: ['Depleting soil carbon and soil health', 'Making fields too fertile', 'Increasing crop yields forever', 'Turning residues into rocks'],
        GRADUATE: ['It can affect food prices and land rights, especially where tenure is insecure', 'It affects everyone exactly equally', 'It only concerns engineers', 'It always lowers food prices'],
        PHD: ['It depends on harvest counterfactuals, regrowth time and accounting scale', 'Forests contain no carbon', 'All scientists agree it is always neutral', 'Trees regrow instantly after harvest'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Microbes in a closed tank eat food scraps and manure and make biogas.',
        MIDDLE_SCHOOL: 'Ethanol is widely blended into gasoline to replace part of the petroleum.',
        HIGH_SCHOOL: 'Liquid biofuels are most valuable where batteries and electric motors are hard to use.',
        UNDERGRADUATE: 'Residues protect and feed soil, so removing too much can reduce soil carbon.',
        GRADUATE: 'Demand for fuel crops can push on food prices and on communities with insecure land rights.',
        PHD: 'Whether forest biomass is neutral depends on what would have happened otherwise and how long regrowth takes.',
      },
    },
  ],
}

export default expansion
