import type { ModuleExpansion } from '../types'

const expansion: ModuleExpansion = {
  topicId: 'regenerative-agriculture',
  moduleKey: 'pollinator-health',
  lessons: [
    {
      id: 'ra-poll-1',
      title: 'Keeping Pollinators Healthy',
      content: {
        ELEMENTARY: `
<h2>Healthy Bees, Healthy Food</h2>
<p>Hi, I am Pip the bumble bee! Every day I fly from flower to flower. I sip sweet nectar and pick up a yellow dust called pollen. When I carry pollen to the next flower, I help that plant make fruits and seeds. But to do my job, I need to stay healthy, just like you do!</p>

<h3>What Pollinators Do</h3>
<p>Bees, butterflies, moths, flies, beetles and even some birds and bats are pollinators. They help plants make apples, strawberries, pumpkins, almonds and many other foods. Without healthy pollinators, many of our favorite fruits would be small, misshapen or missing.</p>
<ul>
<li><strong>Pollen:</strong> a fine yellow powder made by flowers that plants need to make seeds</li>
<li><strong>Nectar:</strong> a sweet juice inside flowers that gives pollinators energy to fly</li>
<li><strong>Pollinator:</strong> an animal that carries pollen from one flower to another</li>
</ul>

<h3>What Makes a Bee Sick or Weak?</h3>
<p>Just like people, bees can get sick. Some tiny pests and germs can make them weak. Bees also get hungry if there are not enough flowers. Some sprays used to kill bugs can hurt bees too. And very hot or strange weather can make flowers bloom at the wrong time.</p>
<ul>
<li><strong>Mite:</strong> a tiny creature, smaller than a sesame seed, that can bother bees and spread germs</li>
<li><strong>Pesticide:</strong> a spray or powder used to kill bugs or weeds that can also harm helpful insects</li>
<li><strong>Healthy diet:</strong> eating many different kinds of food so a body grows strong</li>
</ul>

<h3>A Balanced Meal for Bees</h3>
<p>You feel best when you eat lots of different foods. Bees are the same! Pollen from many kinds of flowers gives bees a balanced meal. A garden with only one kind of flower is like eating only crackers every day.</p>

<h3>How You Can Help</h3>
<ol>
<li>Plant many kinds of flowers that bloom from spring to fall.</li>
<li>Leave some clover and dandelions in the grass for bees to visit.</li>
<li>Put out a shallow dish of water with pebbles so bees can land and drink.</li>
<li>Ask a grown-up to avoid spraying bug killers on flowers.</li>
</ol>

<h3>Think About It</h3>
<p>Next time you bite into a crunchy apple, say a quiet thank you to the bees. A healthy bee helped make it!</p>
`,
        MIDDLE_SCHOOL: `
<h2>Why Pollinator Health Matters</h2>
<p>Pollinators are animals that move pollen between flowers so plants can make seeds and fruit. Roughly a third of the food we eat comes from crops that benefit from animal pollination, including many fruits, nuts, vegetables and oil seeds. When pollinators are sick, hungry or poisoned, farms produce less and wild plants struggle to reproduce. That is why scientists and farmers pay close attention to pollinator health.</p>

<h3>Managed and Wild Pollinators</h3>
<p>Honey bees are managed: beekeepers keep them in hives and move them to farms. But thousands of wild bee species also pollinate crops, along with flies, butterflies, moths and beetles. Most wild bees live alone rather than in hives, and many nest in the ground. Both kinds matter, and both can have health problems.</p>

<h3>The Main Threats</h3>
<table>
<thead><tr><th>Threat</th><th>How it harms pollinators</th></tr></thead>
<tbody>
<tr><td>Poor nutrition</td><td>Too few flowers, or only one kind, leaves bees hungry and weak</td></tr>
<tr><td>Parasites and diseases</td><td>Mites and viruses weaken bees and can wipe out colonies</td></tr>
<tr><td>Pesticides</td><td>Some chemicals kill bees or confuse their ability to find food and home</td></tr>
<tr><td>Habitat loss</td><td>Fewer places to nest and feed</td></tr>
<tr><td>Climate change</td><td>Flowers may bloom before or after pollinators are active</td></tr>
</tbody>
</table>
<p>These threats often act together. A bee that is already hungry is less able to fight off a disease, and a bee weakened by disease may be harmed more by a pesticide.</p>

<h3>Key Words</h3>
<ul>
<li><strong>Varroa mite:</strong> a tiny parasite that feeds on honey bees and spreads harmful viruses</li>
<li><strong>Colony:</strong> a large family of social bees living together in a hive or nest</li>
<li><strong>Forage:</strong> the flowers that pollinators visit to collect food</li>
<li><strong>Systemic pesticide:</strong> a chemical taken up inside a plant that can end up in its pollen and nectar</li>
<li><strong>Solitary bee:</strong> a bee that builds its own nest and raises young without a colony</li>
</ul>

<h3>How Farms Protect Pollinator Health</h3>
<ol>
<li>Planting strips of mixed wildflowers so bees eat a varied diet all season.</li>
<li>Spraying only when needed, choosing safer products and avoiding crops in bloom.</li>
<li>Leaving undisturbed ground and hedges for nesting.</li>
<li>Working with beekeepers to check hives for mites and disease.</li>
</ol>
<p>Healthy pollinators mean better harvests, so caring for them is good for farmers, nature and everyone who eats.</p>
`,
        HIGH_SCHOOL: `
<h2>Pollinator Biology and the Health Crisis</h2>
<p>Reports of honey bee colony losses and declines in many wild bee and butterfly populations have made pollinator health a major agricultural and conservation issue. Researchers broadly agree that no single cause explains these declines. Instead, several stressors act together: poor nutrition, parasites and pathogens, pesticide exposure, habitat loss and climate change. Understanding how each works helps farmers choose practices that keep pollinators healthy.</p>

<h3>How a Bee Stays Healthy</h3>
<p>Bees get carbohydrates from nectar and protein, fats, vitamins and minerals from pollen. Pollen quality varies widely between plant species, so a diverse diet tends to support better development and immune function. Social bees also have colony-level defenses: workers groom each other, remove sick larvae and collect plant resins that have antimicrobial properties.</p>
<ul>
<li><strong>Social immunity:</strong> group behaviors in a colony, such as grooming and hygiene, that limit disease spread</li>
<li><strong>Pathogen:</strong> a virus, bacterium, fungus or other microbe that causes disease</li>
<li><strong>Sublethal effect:</strong> harm that does not kill directly but impairs behavior, learning or reproduction</li>
<li><strong>Floral resource:</strong> the pollen and nectar supply available to pollinators across a season</li>
<li><strong>Pathogen spillover:</strong> the spread of disease from one population, such as managed bees, to another, such as wild bees</li>
</ul>

<h3>The Major Stressors</h3>
<table>
<thead><tr><th>Stressor</th><th>Mechanism</th><th>Who is most affected</th></tr></thead>
<tbody>
<tr><td>Varroa mites and viruses</td><td>Mites feed on bees and spread viruses such as deformed wing virus</td><td>Honey bees, with some viruses found in wild bees too</td></tr>
<tr><td>Nutritional stress</td><td>Large single-crop fields bloom briefly, then leave little food</td><td>All pollinators, especially during gaps between blooms</td></tr>
<tr><td>Insecticides</td><td>Direct toxicity plus sublethal effects on navigation and foraging</td><td>Bees foraging in or near treated crops</td></tr>
<tr><td>Fungicide mixtures</td><td>Some combinations can increase insecticide toxicity</td><td>Bees exposed to tank mixes or residues</td></tr>
<tr><td>Climate shifts</td><td>Timing mismatches between flowers and insects; heat stress</td><td>Species with narrow ranges or short flight seasons</td></tr>
</tbody>
</table>

<h3>Interacting Stressors</h3>
<p>Stressors rarely act alone. A colony carrying many mites may collapse after a pesticide exposure that a healthy colony would survive. Hungry bees may have weaker immune responses. This is why single fixes, like changing one pesticide, help but rarely solve the whole problem.</p>

<h3>Farm-Level Solutions</h3>
<ol>
<li><strong>Diverse forage:</strong> flowering cover crops, hedgerows and wildflower strips fill gaps between crop blooms.</li>
<li><strong>Integrated pest management:</strong> scout first, spray only above thresholds, and avoid applications during bloom or when bees are flying.</li>
<li><strong>Communication:</strong> farmers and beekeepers share spray schedules so hives can be protected.</li>
<li><strong>Hive care:</strong> beekeepers monitor mite levels and treat when needed.</li>
<li><strong>Nesting habitat:</strong> bare ground, stems and undisturbed margins support wild bees.</li>
</ol>
<p>Regenerative farms that combine diverse plantings with careful pest management create conditions in which both managed and wild pollinators can thrive.</p>
`,
        UNDERGRADUATE: `
<h2>Pollinator Health: Ecology, Stressors and Ecosystem Service Value</h2>
<p>Pollination is an ecosystem service that links wild biodiversity to agricultural yields. Most leading crop types benefit to some degree from animal pollination, although staple grains such as wheat, rice and maize are wind-pollinated. The health of pollinator populations therefore affects the yield, quality and stability of many nutritionally important foods. This lesson analyzes the determinants of pollinator health, how pollination services are valued and how habitat management can be designed to support healthy populations rather than merely attracting insects.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Pollination dependence:</strong> the proportion of a crop's yield that would be lost without animal pollinators</li>
<li><strong>Multiple stressor hypothesis:</strong> the view that declines result from interacting pressures rather than one dominant cause</li>
<li><strong>Nutritional ecology:</strong> the study of how the quantity, quality and diversity of food shape an organism's fitness</li>
<li><strong>Pollination deficit:</strong> the gap between actual yield and the yield achievable with adequate pollination</li>
<li><strong>Replacement cost:</strong> a valuation method estimating what it would cost to substitute a natural service with human inputs</li>
<li><strong>Exposure route:</strong> the pathway, such as nectar, pollen, dust or water, by which a pollinator contacts a chemical</li>
</ul>

<h3>Determinants of Population Health</h3>
<p>Health can be assessed at several scales: individual condition (body size, fat reserves, pathogen load), colony or nest performance (brood production, overwintering success) and population trends. For honey bees, the parasitic mite Varroa destructor and the viruses it transmits are widely regarded as a leading cause of colony losses in many regions. For wild bees, habitat and forage availability are often the dominant constraints, while pathogen spillover from managed bees is a growing concern. Pesticide exposure varies with crop type, application method and the landscape around fields.</p>

<h3>Valuing Pollination Services</h3>
<table>
<thead><tr><th>Approach</th><th>What it measures</th><th>Limitations</th></tr></thead>
<tbody>
<tr><td>Dependence ratio method</td><td>Crop value multiplied by its pollination dependence</td><td>Overstates value if wild pollinators would not all disappear</td></tr>
<tr><td>Production function</td><td>Yield response to measured pollinator visitation</td><td>Data-intensive and site-specific</td></tr>
<tr><td>Replacement cost</td><td>Cost of renting hives or hand pollination</td><td>Assumes substitutes are feasible and equivalent</td></tr>
<tr><td>Yield gap studies</td><td>Difference between open and supplemented pollination</td><td>Captures only current deficits, not resilience</td></tr>
</tbody>
</table>
<p>Valuation results differ by method, so analysts should report assumptions explicitly. A key insight from field studies is that wild pollinators often improve fruit set even where honey bees are abundant, suggesting that diverse pollinator communities provide value beyond what managed hives supply.</p>

<h3>Managing Habitat for Health</h3>
<p>Habitat designed for health emphasizes nutrition and safety, not only flower counts. A good design provides overlapping bloom from early spring to late fall, a mix of plant families with varied pollen protein content, clean water sources and nesting sites, all located where pesticide drift is minimal. Placing a flower strip directly beside a frequently sprayed crop can create an ecological trap if pollinators are drawn into exposure.</p>

<h3>Applied Assessment Checklist</h3>
<ol>
<li>Identify which crops depend on pollinators and when they bloom.</li>
<li>Map forage gaps across the season, including the period after crop bloom.</li>
<li>Review pesticide use for timing, toxicity, drift and tank-mix interactions.</li>
<li>Locate nesting habitat and water away from spray zones.</li>
<li>Coordinate with beekeepers on hive placement and mite monitoring.</li>
<li>Monitor visitation or fruit set over several years to detect change.</li>
</ol>
`,
        GRADUATE: `
<h2>Pollinator Health Policy and Landscape-Scale Conservation Planning</h2>
<p>Pollinator health is shaped by decisions far beyond any single farm: pesticide regulation, agricultural subsidies, land-use planning, trade in managed bees and climate policy. Because many pollinators forage and disperse across hundreds of meters to several kilometers, the habitat and exposure conditions of an entire landscape determine whether local populations persist. This lesson examines the policy instruments, landscape approaches and planning frameworks used to protect pollinator health, along with the governance and equity issues they raise.</p>

<h3>Policy Instruments</h3>
<ul>
<li><strong>Pesticide risk assessment:</strong> regulatory evaluation of a product's hazard and likely exposure to pollinators before approval</li>
<li><strong>Agri-environment scheme:</strong> a program that pays farmers to adopt practices such as flower strips or reduced spraying</li>
<li><strong>Precautionary restriction:</strong> limiting a product's use when evidence of harm is strong but not complete</li>
<li><strong>Movement controls:</strong> rules on transporting managed bees to limit the spread of pests and pathogens</li>
<li><strong>Pollinator strategy:</strong> a coordinated government plan setting habitat, research and monitoring goals for pollinators</li>
<li><strong>Bee-safe labeling:</strong> product instructions that restrict application timing or methods to reduce exposure</li>
</ul>

<h3>Why Landscape Approaches Matter</h3>
<p>Flower strips on a few farms can boost local bee activity, but whether they raise population sizes depends on the surrounding landscape. Ecological theory and field evidence suggest that habitat additions often have the greatest relative effect in simple landscapes with moderate remaining habitat, and less effect where landscapes are either very cleared or already rich in habitat. Coordinating plantings across neighboring farms, roadsides, utility corridors and public land can create connected forage networks that individual efforts cannot achieve.</p>
<table>
<thead><tr><th>Scale</th><th>Typical action</th><th>Health benefit</th><th>Main barrier</th></tr></thead>
<tbody>
<tr><td>Field</td><td>Spray timing, bloom avoidance</td><td>Lower acute exposure</td><td>Pest pressure and timing constraints</td></tr>
<tr><td>Farm</td><td>Flower strips, hedgerows, nesting areas</td><td>Better nutrition and nesting</td><td>Land taken from production</td></tr>
<tr><td>Landscape</td><td>Coordinated corridors and refuges</td><td>Population persistence and connectivity</td><td>Coordination across many owners</td></tr>
<tr><td>National</td><td>Regulation, monitoring, subsidies</td><td>System-wide exposure reduction</td><td>Political trade-offs and evidence disputes</td></tr>
</tbody>
</table>

<h3>Economics and Incentives</h3>
<p>Pollination is a classic positive externality: a farmer who maintains habitat benefits neighbors whose crops are also pollinated, but bears the full cost. Payments for ecosystem services, cost-share programs and collective agri-environment contracts attempt to correct this. Results-based payments, which reward measured outcomes such as flower abundance rather than actions, are being tested as a way to improve effectiveness. Meanwhile, high demand for rented hives in some crops concentrates colonies in large numbers, increasing pathogen transmission and stress.</p>

<h3>Equity and Knowledge</h3>
<p>Smallholders and beekeepers often bear losses from decisions made by others, such as neighbors' spraying. Indigenous and local communities may hold detailed knowledge of native pollinators and flowering plants, and inclusive planning recognizes this knowledge with consent and fair benefit sharing. Monitoring capacity is also unequal globally, leaving large data gaps for tropical and dryland pollinators.</p>

<h3>Conservation Planning Framework</h3>
<ol>
<li>Define target pollinator groups and the services and species of concern.</li>
<li>Assess landscape habitat, forage continuity and exposure hotspots.</li>
<li>Choose a mix of regulatory, incentive and voluntary instruments.</li>
<li>Coordinate actors across ownership boundaries through local partnerships.</li>
<li>Set measurable indicators of pollinator health, not only acres planted.</li>
<li>Monitor, evaluate and adapt as evidence accumulates.</li>
</ol>
`,
        PHD: `
<h2>Research Frontiers in Pollinator Health and Population Dynamics</h2>
<p>Pollinator health research has moved from documenting declines toward explaining them mechanistically and predicting responses to management. The central challenge is causal inference in a multi-stressor system: nutrition, pathogens, pesticides, habitat and climate interact across individuals, colonies, populations and communities, while long-term data for most species remain sparse. This lesson surveys the models, methods and debates at the frontier, with an emphasis on population dynamics, community ecology and restoration outcomes.</p>

<h3>Key Concepts and Methods</h3>
<ul>
<li><strong>Stressor interaction:</strong> a combined effect of two pressures that is greater or smaller than the sum of their separate effects</li>
<li><strong>Colony dynamics model:</strong> a simulation of brood, workers and resources used to project colony survival under stress</li>
<li><strong>Occupancy modeling:</strong> a statistical approach estimating where species occur while accounting for imperfect detection</li>
<li><strong>Disease ecology:</strong> the study of how pathogens spread among hosts and how host communities shape transmission</li>
<li><strong>Effective population size:</strong> the size of an idealized population that would show the same genetic drift as the real one</li>
<li><strong>Dose-response relationship:</strong> how the magnitude of an effect changes with the amount of exposure</li>
</ul>

<h3>Population Dynamics and Detection</h3>
<p>Estimating trends for wild pollinators is hard because many species are patchily distributed, fluctuate strongly between years and are difficult to identify. Occupancy models applied to museum records and citizen-science data have expanded coverage but raise questions about sampling bias and changes in recording effort. For social bees, the relevant demographic unit is the colony, so the number of reproductive colonies, rather than the number of workers seen, determines population size. This distinction complicates interpretation of field counts after management interventions.</p>

<h3>Multi-Stressor Interactions</h3>
<p>Laboratory studies have reported synergistic interactions, for example between certain fungicides and insecticides, and between nutritional stress and pathogen infection. However, extrapolating from controlled exposures to field outcomes is contested. Field studies face realistic but variable exposure, confounding landscape effects and limited replication. Factorial designs, semi-field experiments and mechanistic models that link individual physiology to colony and population outcomes are being combined to bridge this gap.</p>
<table>
<thead><tr><th>Debate</th><th>Why it is contested</th></tr></thead>
<tbody>
<tr><td>Field realism of laboratory doses</td><td>Exposure in the field varies widely in time, dose and route</td></tr>
<tr><td>Honey bees as surrogates</td><td>Regulatory tests rely on honey bees, but solitary and bumble bees differ in biology and exposure</td></tr>
<tr><td>Role of managed bees in wild bee decline</td><td>Competition and spillover are documented locally but hard to quantify at scale</td></tr>
<tr><td>Habitat creation versus population growth</td><td>Plantings may concentrate existing individuals rather than increase numbers</td></tr>
</tbody>
</table>

<h3>Community Ecology and Disease</h3>
<p>Plant-pollinator networks are also transmission networks: flowers serve as shared surfaces where pathogens can pass between species. Floral community composition may therefore alter disease dynamics, with some studies suggesting that flower diversity can dilute transmission while others find amplification. Host range, viral adaptation and the role of managed colonies as reservoirs are active research areas, aided by molecular tools that detect pathogens in pollen, nectar and environmental samples.</p>

<h3>Restoration Outcomes</h3>
<p>Restoration studies increasingly ask whether interventions improve demographic rates, such as nesting success and offspring production, rather than only visitation. Before-after-control-impact designs and long-term monitoring are needed because pollinator populations fluctuate naturally and responses may lag by several years.</p>

<h3>Open Research Directions</h3>
<ol>
<li>Mechanistic models linking individual physiology, colony performance and landscape population dynamics.</li>
<li>Risk assessment frameworks covering non-Apis bees, chronic exposure and chemical mixtures.</li>
<li>Pathogen surveillance across managed and wild communities to quantify spillover direction.</li>
<li>Robust trend estimation from heterogeneous data, including citizen science.</li>
<li>Demographic evaluation of restoration and its interaction with climate change.</li>
</ol>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'rpollq1',
      question: {
        ELEMENTARY: 'What do bees do for plants?',
        MIDDLE_SCHOOL: 'Roughly how much of our food comes from crops that benefit from pollinators?',
        HIGH_SCHOOL: 'Why do researchers say no single cause explains pollinator declines?',
        UNDERGRADUATE: 'What does pollination dependence describe?',
        GRADUATE: 'Why are landscape approaches needed for pollinator health?',
        PHD: 'What is a stressor interaction?',
      },
      options: {
        ELEMENTARY: ['Carry pollen so plants can make fruits and seeds', 'Eat all the leaves', 'Make flowers smaller', 'Dig holes for roots'],
        MIDDLE_SCHOOL: ['About one-third', 'Almost none', 'All of it', 'Only honey'],
        HIGH_SCHOOL: ['Several stressors like nutrition, parasites, pesticides and climate act together', 'Only cold winters cause declines', 'Pollinators are not declining anywhere', 'Only bears raid hives'],
        UNDERGRADUATE: ['The share of a crop yield that would be lost without animal pollinators', 'The number of hives a farm owns', 'How much honey a colony makes', 'The distance a bee can fly'],
        GRADUATE: ['Many pollinators forage and disperse beyond single farms, so the whole landscape matters', 'Single farms always provide everything bees need', 'Landscapes have no effect on exposure', 'Only home gardens matter'],
        PHD: ['A combined effect of two pressures that differs from the sum of their separate effects', 'A stressor that only affects plants', 'A single pesticide tested alone', 'A habitat with no stress'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Bees carry pollen from flower to flower, which helps plants make fruits and seeds.',
        MIDDLE_SCHOOL: 'Roughly a third of what we eat comes from crops that benefit from animal pollination.',
        HIGH_SCHOOL: 'Nutrition, parasites, pesticides, habitat loss and climate interact, so declines have multiple causes.',
        UNDERGRADUATE: 'Pollination dependence is the fraction of yield that relies on animal pollinators.',
        GRADUATE: 'Pollinators range across many properties, so habitat and exposure must be managed at landscape scale.',
        PHD: 'Interactions can be synergistic or antagonistic, which makes single-stressor tests incomplete.',
      },
    },
    {
      id: 'rpollq2',
      question: {
        ELEMENTARY: 'Why do bees need many kinds of flowers?',
        MIDDLE_SCHOOL: 'What is a Varroa mite?',
        HIGH_SCHOOL: 'What is a sublethal effect of a pesticide?',
        UNDERGRADUATE: 'Why can a flower strip next to a heavily sprayed crop become an ecological trap?',
        GRADUATE: 'Why is pollination described as a positive externality?',
        PHD: 'Why is using honey bees as surrogates in risk assessment contested?',
      },
      options: {
        ELEMENTARY: ['Bees only like one color', 'Different pollen gives bees a balanced meal', 'Flowers are too heavy', 'Bees need flowers to sleep in'],
        MIDDLE_SCHOOL: ['A flower that bees love', 'A tiny parasite that feeds on honey bees and spreads viruses', 'A type of honey', 'A wild bee that lives alone'],
        HIGH_SCHOOL: ['An effect that makes bees bigger', 'Harm that does not kill directly but impairs behavior or reproduction', 'A pesticide that only kills weeds', 'Any effect that happens in winter'],
        UNDERGRADUATE: ['Flowers always repel bees', 'It draws pollinators into areas where they are exposed to chemicals', 'Traps are used to catch pests', 'Flower strips never attract insects'],
        GRADUATE: ['Pollinators only help the farmer who plants habitat', 'Habitat on one farm also benefits neighbors who do not pay for it', 'Pollination always costs money', 'Externalities only apply to pollution'],
        PHD: ['Honey bees are not insects', 'Solitary and bumble bees differ in biology and exposure from honey bees', 'Honey bees are never exposed to pesticides', 'Regulators never use honey bees'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Pollen from many flowers gives bees a balanced meal, just like eating many foods helps you.',
        MIDDLE_SCHOOL: 'Varroa mites feed on honey bees and spread viruses that can weaken whole colonies.',
        HIGH_SCHOOL: 'Sublethal effects such as poorer navigation or foraging can harm colonies even without direct deaths.',
        UNDERGRADUATE: 'Attractive habitat placed in a spray zone can increase exposure instead of improving health.',
        GRADUATE: 'The farmer bears the cost while neighbors share the pollination benefits, so incentives are needed.',
        PHD: 'Life history, nesting and foraging differ among bee groups, so honey bee results may not transfer.',
      },
    },
    {
      id: 'rpollq3',
      question: {
        ELEMENTARY: 'Which of these helps bees stay healthy?',
        MIDDLE_SCHOOL: 'Where do many wild bees build their nests?',
        HIGH_SCHOOL: 'What is social immunity in a bee colony?',
        UNDERGRADUATE: 'What is a pollination deficit?',
        GRADUATE: 'What do results-based payments reward?',
        PHD: 'Why can counting worker bees mislead population estimates for social bees?',
      },
      options: {
        ELEMENTARY: ['Spraying bug killer on flowers', 'Mowing every flower', 'Planting flowers that bloom from spring to fall', 'Taking away all water'],
        MIDDLE_SCHOOL: ['Only in wooden hives', 'In clouds', 'In the ground', 'Inside fruits'],
        HIGH_SCHOOL: ['Vaccines given by beekeepers', 'A bee that lives alone', 'Group behaviors like grooming and hygiene that limit disease spread', 'Bees refusing to fly'],
        UNDERGRADUATE: ['Extra pollen left on flowers', 'The cost of renting hives', 'The gap between actual yield and yield with adequate pollination', 'A shortage of beekeepers'],
        GRADUATE: ['The number of meetings attended', 'Buying new tractors', 'Measured outcomes such as flower abundance', 'Total pesticide purchased'],
        PHD: ['Workers are never seen in the field', 'Workers are always larger', 'The number of reproductive colonies, not workers, determines population size', 'Counting is illegal'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'Flowers blooming all season give bees food whenever they need it.',
        MIDDLE_SCHOOL: 'Many wild bees are solitary and dig their nests in the ground.',
        HIGH_SCHOOL: 'Workers groom each other, remove sick larvae and collect antimicrobial resins.',
        UNDERGRADUATE: 'A pollination deficit is yield lost because pollination was not adequate.',
        GRADUATE: 'Results-based schemes pay for measured outcomes rather than for actions alone.',
        PHD: 'Many workers can come from few colonies, so worker counts can overstate population size.',
      },
    },
    {
      id: 'rpollq4',
      question: {
        ELEMENTARY: 'What can you put out to give bees a drink?',
        MIDDLE_SCHOOL: 'What is a systemic pesticide?',
        HIGH_SCHOOL: 'Which farm practice best reduces bee exposure to insecticides?',
        UNDERGRADUATE: 'What is a weakness of the dependence ratio method of valuation?',
        GRADUATE: 'Why can high demand for rented hives harm bee health?',
        PHD: 'What does occupancy modeling account for?',
      },
      options: {
        ELEMENTARY: ['A tall bucket with no place to land', 'A bottle of juice', 'A glass of milk', 'A shallow dish of water with pebbles'],
        MIDDLE_SCHOOL: ['A pesticide that only works on rainy days', 'A spray that smells like flowers', 'A tool used by beekeepers', 'A chemical taken up inside a plant that can reach its pollen and nectar'],
        HIGH_SCHOOL: ['Spraying during full bloom at midday', 'Mixing as many products as possible', 'Removing all flowers from the farm', 'Scouting first and avoiding sprays during bloom'],
        UNDERGRADUATE: ['It ignores crop prices', 'It only applies to wheat', 'It is too simple to calculate', 'It can overstate value if not all pollinators would disappear'],
        GRADUATE: ['Rented hives never move', 'Bees dislike rented land', 'Rental prices are too low', 'Crowding many colonies together increases pathogen transmission and stress'],
        PHD: ['The color of flowers', 'Honey production', 'Pesticide prices', 'Imperfect detection when estimating where species occur'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Pebbles give bees a safe place to land while they sip water.',
        MIDDLE_SCHOOL: 'Systemic pesticides move inside the plant and can end up in pollen and nectar.',
        HIGH_SCHOOL: 'Integrated pest management and avoiding bloom-time sprays cut exposure the most.',
        UNDERGRADUATE: 'It assumes all pollination would be lost, which can exaggerate the service value.',
        GRADUATE: 'Concentrating many colonies helps pests and diseases spread and adds stress from transport.',
        PHD: 'Occupancy models separate true absence from simply failing to detect a species.',
      },
    },
    {
      id: 'rpollq5',
      question: {
        ELEMENTARY: 'What is nectar?',
        MIDDLE_SCHOOL: 'Why do threats to pollinators often make each other worse?',
        HIGH_SCHOOL: 'What is pathogen spillover?',
        UNDERGRADUATE: 'Which kind of crop does NOT need animal pollinators?',
        GRADUATE: 'What is an agri-environment scheme?',
        PHD: 'Why do restoration studies need long-term before-after-control-impact designs?',
      },
      options: {
        ELEMENTARY: ['A sweet juice in flowers that gives pollinators energy', 'A type of mite', 'A bee house', 'A kind of leaf'],
        MIDDLE_SCHOOL: ['A hungry or sick bee is less able to cope with other stresses', 'Threats always cancel each other out', 'Only one threat exists at a time', 'Threats only affect butterflies'],
        HIGH_SCHOOL: ['Disease spreading from one population, such as managed bees, to another such as wild bees', 'Honey spilling from a hive', 'Pollen falling on the ground', 'Water overflowing a dish'],
        UNDERGRADUATE: ['Wind-pollinated grains such as wheat and maize', 'Almonds', 'Apples', 'Pumpkins'],
        GRADUATE: ['A program that pays farmers to adopt practices such as flower strips', 'A ban on all farming', 'A tax on honey', 'A weather forecast service'],
        PHD: ['Populations fluctuate naturally and responses may lag for years', 'Pollinators never change', 'Short studies are always more accurate', 'Control sites are unnecessary'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Nectar is the sweet energy drink pollinators sip from flowers.',
        MIDDLE_SCHOOL: 'Hunger weakens a bee, so diseases or pesticides can hurt it more.',
        HIGH_SCHOOL: 'Spillover moves pathogens between populations, often from dense managed colonies to wild bees.',
        UNDERGRADUATE: 'Wheat, rice and maize are wind-pollinated, unlike many fruits and nuts.',
        GRADUATE: 'Agri-environment schemes pay farmers for environmental practices on their land.',
        PHD: 'Natural variability and lagged responses mean short or uncontrolled studies can mislead.',
      },
    },
  ],
}

export default expansion
