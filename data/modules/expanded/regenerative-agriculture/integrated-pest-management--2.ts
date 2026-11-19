import type { ModuleExpansion } from '../types'

// Rewritten with its own angle: designing farms so beneficial insects do the pest
// control. Chapter 9 covers integrated pest management as a decision process.
const expansion: ModuleExpansion = {
  topicId: 'regenerative-agriculture',
  moduleKey: 'integrated-pest-management~2',
  title: 'Beneficial Insects and Habitat Design',
  description: {
    ELEMENTARY: 'Meet the helpful bugs that eat crop pests, and learn how farmers plant flowers to invite them in.',
    MIDDLE_SCHOOL: 'How ladybirds, wasps and other helpers control pests, and how farms create homes for them.',
    HIGH_SCHOOL: 'Conservation biological control: attracting predators and parasitoids with flower strips, hedgerows and beetle banks.',
    UNDERGRADUATE: 'Designing farm habitat for natural enemies: resources, landscape context and evidence for pest suppression.',
    GRADUATE: 'Conservation biological control in practice: habitat design, landscape effects, trade-offs and incentives.',
    PHD: 'Research on natural enemies and farm habitat: landscape ecology, inconsistent outcomes and ecosystem service modelling.',
  },
  lessons: [
    {
      id: 'ra-ipm-1',
      title: 'Beneficial Insects and Habitat Design',
      content: {
        ELEMENTARY: `
<h2>Bugs That Help Farmers</h2>
<p>Some bugs munch on crops, like aphids that suck juice from leaves. But other bugs are farmers' friends! Ladybirds can eat dozens of aphids every day. Tiny wasps lay eggs inside caterpillars, and spiders catch pests in their webs. These helpful bugs are called beneficial insects, and farmers can invite them to live on the farm.</p>

<h3>Building Bug Homes</h3>
<p>Helpful bugs need food and shelter, just like us. Many grown-up helper bugs drink nectar from flowers. So farmers plant strips of flowers along the edges of fields. They also grow hedges and leave grassy strips where beetles can hide in winter. These bug homes keep the helpers close to the crops.</p>
<ul>
<li><strong>Pest:</strong> a bug or animal that damages crops</li>
<li><strong>Beneficial insect:</strong> a helpful bug that eats or attacks pests</li>
<li><strong>Ladybird:</strong> a spotted beetle that eats aphids</li>
<li><strong>Flower strip:</strong> a row of flowers planted to feed helpful bugs</li>
<li><strong>Hedgerow:</strong> a line of bushes and small trees along a field</li>
</ul>

<h3>Why Not Just Spray?</h3>
<p>Bug sprays kill pests, but they often kill the helper bugs too. Then pests can come back even worse, because nobody is left to eat them. Farmers who protect helper bugs often need to spray much less.</p>

<h3>A Team in the Field</h3>
<p>When there are lots of different flowers, bugs, birds and plants, the farm becomes like a busy town where everyone has a job. Keeping that team healthy helps the crops grow. You can help too, by planting flowers in a garden or a window box for the helper bugs near your home.</p>
`,
        MIDDLE_SCHOOL: `
<h2>Natural Pest Control With Beneficial Insects</h2>
<p>Every crop field is a battleground between pests and their natural enemies. Ladybirds, lacewings, hoverflies, ground beetles, spiders and tiny parasitic wasps all attack crop pests. Farmers can make these natural enemies more effective by giving them food and shelter, an approach called conservation biological control. It is one of the key tools of regenerative farming.</p>

<h3>Who the Helpers Are</h3>
<p>Predators, like ladybirds and ground beetles, eat many pests during their lives. Parasitoids, like many small wasps, lay eggs in or on a pest; the young wasp grows inside and kills it. Some adult helpers, such as hoverflies and parasitic wasps, need nectar and pollen from flowers to live longer and lay more eggs, even though their young eat pests.</p>
<ul>
<li><strong>Natural enemy:</strong> a predator, parasitoid or disease that attacks pests</li>
<li><strong>Predator:</strong> an animal that hunts and eats other animals</li>
<li><strong>Parasitoid:</strong> an insect whose young develop inside or on a pest and kill it</li>
<li><strong>Beetle bank:</strong> a raised grassy strip in a field where ground beetles shelter</li>
<li><strong>Nectar:</strong> sugary liquid made by flowers that feeds many insects</li>
</ul>

<h3>Designing Habitat</h3>
<p>Farmers plant flower strips with plants that bloom at different times, so there is food all season. Hedgerows and beetle banks give shelter in winter. Leaving some areas unmown and reducing pesticide sprays help helpers survive.</p>

<h3>Does It Work?</h3>
<p>Studies show that flower strips often bring more natural enemies into fields and can reduce pests on nearby crops. The results vary, though. Helpers work best when habitat is close to the crop, flowers match the helpers' needs, and sprays are used only when truly needed. Flower strips also feed bees and butterflies, so one planting helps several kinds of wildlife at once, and the farm looks beautiful too, all summer long.</p>
`,
        HIGH_SCHOOL: `
<h2>Conservation Biological Control</h2>
<p>Biological control uses living organisms to suppress pests. Classical biological control introduces natural enemies from a pest's native range; augmentative control releases mass-reared helpers. Conservation biological control takes a different approach: it changes the farm environment so naturally occurring predators and parasitoids thrive. It fits regenerative agriculture because it works with existing biodiversity rather than adding inputs.</p>

<h3>What Natural Enemies Need</h3>
<p>Natural enemies need several resources, often summarised as "SNAP": shelter, nectar, alternative prey and pollen. Many parasitoid wasps and hoverflies live longer and lay more eggs when they can feed on flowers with accessible nectar. Ground beetles and spiders need undisturbed refuges to survive winter and pesticide sprays. Alternative prey keeps predators around before pests arrive.</p>
<ul>
<li><strong>Conservation biological control:</strong> managing habitat to support naturally occurring natural enemies</li>
<li><strong>SNAP:</strong> shelter, nectar, alternative prey and pollen, the resources natural enemies need</li>
<li><strong>Insectary plant:</strong> a plant grown to feed and attract beneficial insects</li>
<li><strong>Economic threshold:</strong> the pest level at which control is worth its cost</li>
<li><strong>Landscape complexity:</strong> how much natural and semi-natural habitat surrounds farmland</li>
</ul>

<h3>Habitat Designs</h3>
<p>Flower strips use insectary plants with open flowers, such as buckwheat, phacelia and native wildflowers, chosen to bloom across the season. Beetle banks are grassy ridges across large fields that shelter ground beetles, which then spread into the crop. Hedgerows provide shelter, alternative prey and corridors for movement. Intercropping and cover crops can add habitat within the field itself.</p>

<h3>Making It Work</h3>
<p>Habitat helps most when it is close to crops, since many natural enemies travel only tens of metres. Pesticide use must be reduced, especially broad-spectrum insecticides that kill helpers. Farmers monitor pests and treat only when they exceed economic thresholds. Results also depend on the surrounding landscape: farms in diverse landscapes often have plenty of natural enemies already, while those in vast monocultures may gain the most from added habitat. Many habitat plantings also support pollinators and protect soil, adding value beyond pest control and making the farm more resilient.</p>
`,
        UNDERGRADUATE: `
<h2>Designing Farm Habitat for Natural Enemies</h2>
<p>Conservation biological control (CBC) seeks to enhance the abundance and effectiveness of naturally occurring natural enemies through habitat management and reduced disturbance. It has strong theoretical foundations and growing empirical support, yet outcomes vary. This chapter examines the resources natural enemies require, habitat design principles, landscape context and the evidence for pest suppression and yield effects.</p>

<h3>Resources and Functional Traits</h3>
<p>Adult parasitoids and many predators benefit from floral resources: nectar extends parasitoid longevity and fecundity, pollen supports egg production in hoverflies and lacewings. Floral architecture matters; short-tubed, open flowers (Apiaceae, Polygonaceae) provide accessible nectar to small parasitoids. Overwintering refuges reduce mortality for carabid beetles and spiders. Alternative hosts and prey maintain populations between pest outbreaks. Selecting plants by functional traits, not just general attractiveness, improves targeting.</p>
<ul>
<li><strong>Floral resource:</strong> nectar and pollen provided by flowering plants</li>
<li><strong>Fecundity:</strong> the number of offspring an organism produces</li>
<li><strong>Functional trait:</strong> a characteristic that affects an organism's role, such as flower depth or body size</li>
<li><strong>Spillover:</strong> movement of organisms from habitat patches into adjacent crops</li>
<li><strong>Intermediate landscape hypothesis:</strong> the idea that local habitat management has most effect in moderately simple landscapes</li>
</ul>

<h3>Habitat Design Principles</h3>
<p>Effective designs ensure continuous bloom, place habitat within the foraging range of target natural enemies, avoid plants that also support pests, and integrate with farm operations. Field margins, in-field strips and beetle banks increase spillover into crops. Reducing broad-spectrum insecticides and using selective products are prerequisites, since habitat cannot compensate for sprays that kill natural enemies.</p>

<h3>Landscape Context</h3>
<p>Natural enemy populations are shaped at landscape scale. The intermediate landscape hypothesis proposes that local habitat has the largest effect in simple, but not extremely cleared, landscapes; in complex landscapes natural enemies are already abundant, and in extremely simplified ones source populations are too small. Coordinated habitat across farms can scale benefits.</p>

<h3>Evidence</h3>
<p>Meta-analyses show that flower strips generally increase natural enemy abundance and often increase pest control services in adjacent fields, though effects on pest densities and yields are less consistent. Well-designed strips can also benefit pollinators, contributing to yield in pollinator-dependent crops. Establishment takes time: perennial strips and hedgerows may need two or three years before natural enemy populations build up, so evaluations should run long enough to capture mature effects.</p>
`,
        GRADUATE: `
<h2>Conservation Biological Control in Practice</h2>
<p>Conservation biological control is widely advocated as a pillar of sustainable intensification and regenerative farming, but translating ecological principles into reliable on-farm outcomes is challenging. Effects vary among crops, pests, natural enemy guilds and landscapes, and farmers face costs and trade-offs in adopting habitat measures. This chapter examines practical design, landscape effects, trade-offs and the policy incentives that shape adoption.</p>

<h3>From Principles to Prescriptions</h3>
<p>Targeted habitat design starts by identifying key pests and their most effective natural enemies, then selecting plants that supply those enemies' resources at the right time and place. Trait-based seed mixtures, tailored flower strips and perennial habitat such as hedgerows deliver more consistent results than generic mixes. Monitoring natural enemy activity, using sentinel prey or pest exclusion experiments, helps evaluate whether habitat translates into pest suppression.</p>
<ul>
<li><strong>Sentinel prey:</strong> pests or eggs placed in fields to measure predation rates</li>
<li><strong>Exclusion experiment:</strong> blocking natural enemies from some plants to measure their effect on pests</li>
<li><strong>Disservice:</strong> a negative effect of habitat, such as harbouring pests or weeds</li>
<li><strong>Agri-environment scheme:</strong> a public programme paying farmers for environmental practices</li>
<li><strong>Result-based payment:</strong> paying farmers for measured environmental outcomes rather than actions</li>
</ul>

<h3>Landscape and Spatial Scale</h3>
<p>Natural enemy communities respond to the amount and configuration of semi-natural habitat at scales of hundreds of metres to kilometres. Landscape-scale coordination, such as networks of habitat across neighbouring farms, may deliver benefits individual farms cannot. Synthesis of global datasets has shown that landscape simplification reduces natural pest control, with effects mediated by natural enemy richness and abundance.</p>

<h3>Trade-offs and Disservices</h3>
<p>Habitat occupies land, requires establishment and maintenance costs and may harbour pests, weeds or crop diseases. Benefits may accrue to neighbouring farms or society rather than the farmer who pays. Combining pest control with other services, such as pollination, soil protection and water quality, can improve the overall value proposition.</p>

<h3>Incentives and Adoption</h3>
<p>Agri-environment schemes in Europe and conservation programmes elsewhere fund flower strips and hedgerows, though outcomes depend on design and management quality. Result-based payment schemes and advisory support improve effectiveness. Farmer knowledge, peer networks and demonstration sites influence adoption as much as payments.</p>

<h3>Integration With IPM</h3>
<p>Habitat measures work best within integrated pest management: monitoring pests and natural enemies, using thresholds that account for natural enemy presence, and choosing selective pesticides when intervention is needed. Without this integration, routine spraying can cancel out habitat benefits. Updating thresholds to account for natural enemy counts lets farmers skip treatments when helpers are already controlling pests. Decision-support tools and field scouting apps are making this easier to apply in practice, even on large farms with many fields.</p>
`,
        PHD: `
<h2>Research on Natural Enemies and Farm Habitat</h2>
<p>Despite decades of research, the effect of habitat management on pest control and crop yield remains inconsistent across studies. Understanding why requires integrating community ecology, landscape ecology, behaviour and agricultural economics. This chapter surveys research frontiers in explaining variable outcomes, scaling from local to landscape, and modelling natural pest control as an ecosystem service.</p>

<h3>Explaining Inconsistent Outcomes</h3>
<p>Meta-analyses find that habitat consistently increases natural enemy abundance but has weaker and more variable effects on pest densities, crop damage and yield. Proposed explanations include intraguild predation (natural enemies eating each other), mismatch between enemies attracted and pests present, habitat that supports pests, insufficient spatial or temporal overlap, and the dominance of landscape effects over local measures. Trait-based and food-web approaches seek mechanistic explanations for when increased enemy abundance translates into suppression.</p>
<ul>
<li><strong>Intraguild predation:</strong> predation among natural enemies that compete for the same prey</li>
<li><strong>Food web:</strong> the network of feeding relationships among organisms in an ecosystem</li>
<li><strong>Metacommunity:</strong> a set of local communities linked by dispersal of multiple species</li>
<li><strong>Ecosystem service:</strong> a benefit people obtain from ecosystems, such as natural pest control</li>
<li><strong>Effect size:</strong> a standardised measure of the magnitude of an intervention's effect</li>
</ul>

<h3>Landscape Ecology and Scale</h3>
<p>Global syntheses demonstrate that landscape simplification reduces natural pest control, but relationships vary with crop, region and natural enemy guild. Metacommunity and movement ecology approaches examine how dispersal between habitat patches and crops shapes natural enemy dynamics. Research questions include the optimal amount and configuration of habitat, the role of crop diversity and field size, and whether coordinated landscape planning yields non-linear benefits.</p>

<h3>Modelling Natural Pest Control as an Ecosystem Service</h3>
<p>Ecosystem service models attempt to predict natural pest control from landscape data to inform land-use planning and payments. Validation against field measurements reveals substantial uncertainty, partly because models rely on proxies such as habitat cover rather than mechanistic processes. Integrating spatially explicit population models, remote sensing of habitat quality and farmer pesticide behaviour may improve predictions.</p>

<h3>Socio-Economic Dimensions</h3>
<p>Adoption depends on farmer perceptions, risk, advisory systems and policy. Research combining ecological experiments with economic analysis estimates the value of natural pest control and the conditions under which habitat investment pays off for farmers versus society. Collective action institutions for landscape-scale habitat remain understudied.</p>

<h3>Methodological Priorities</h3>
<p>Long-term, landscape-replicated experiments with standardised measures of pest control, yield and profitability are needed to move beyond short-term, local studies. Open data sharing and coordinated distributed experiments across regions would allow robust tests of mechanisms and generalisations.</p>

<h3>Climate Change Interactions</h3>
<p>Warming alters the timing of pest and natural enemy life cycles and may decouple them, while shifting ranges bring new pests and enemies into contact. Research on how habitat diversity buffers these changes, for example by providing resources across a longer season, is still emerging, as is work on how extreme weather affects natural enemy survival in different habitat types.</p>
`,
      },
    },
  ],
  quiz: [
    {
      id: 'ra-ipm2-q1',
      question: {
        ELEMENTARY: 'Which bug is a farmer\'s friend that eats aphids?',
        MIDDLE_SCHOOL: 'What is a parasitoid?',
        HIGH_SCHOOL: 'What does conservation biological control do?',
        UNDERGRADUATE: 'Why do short-tubed, open flowers suit small parasitoids?',
        GRADUATE: 'What is a sentinel prey method used for?',
        PHD: 'What is intraguild predation?',
      },
      options: {
        ELEMENTARY: ['A ladybird', 'A mosquito', 'A housefly', 'A cockroach'],
        MIDDLE_SCHOOL: ['An insect whose young develop inside a pest and kill it', 'A type of flower', 'A pesticide', 'A kind of tractor'],
        HIGH_SCHOOL: ['Manages habitat to support naturally occurring natural enemies', 'Imports new pests', 'Sprays more insecticide', 'Removes all hedges'],
        UNDERGRADUATE: ['Their nectar is accessible to small insects', 'They are the tallest', 'They bloom only at night', 'They have no nectar'],
        GRADUATE: ['Measuring predation rates in fields', 'Feeding livestock', 'Counting tractors', 'Testing soil pH'],
        PHD: ['Predation among natural enemies competing for the same prey', 'Predators eating crops', 'Pests eating flowers', 'Birds eating seeds'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'Ladybirds can eat dozens of aphids every day.',
        MIDDLE_SCHOOL: 'A parasitoid\'s young grow inside or on a pest and kill it.',
        HIGH_SCHOOL: 'It changes the farm so existing helpers thrive.',
        UNDERGRADUATE: 'Open flowers let tiny wasps reach the nectar they need.',
        GRADUATE: 'Sentinel prey placed in fields show how much predation occurs.',
        PHD: 'Intraguild predation is natural enemies eating each other, which can weaken control.',
      },
    },
    {
      id: 'ra-ipm2-q2',
      question: {
        ELEMENTARY: 'Why do farmers plant strips of flowers?',
        MIDDLE_SCHOOL: 'What is a beetle bank?',
        HIGH_SCHOOL: 'What does SNAP stand for?',
        UNDERGRADUATE: 'What does the intermediate landscape hypothesis propose?',
        GRADUATE: 'What is a "disservice" of farm habitat?',
        PHD: 'What do meta-analyses find about habitat effects on natural enemies versus pests?',
      },
      options: {
        ELEMENTARY: ['To scare away birds', 'To make the field slippery', 'To hide the crops', 'To feed helpful bugs'],
        MIDDLE_SCHOOL: ['A place to sell beetles', 'A beetle museum', 'A bank for money', 'A raised grassy strip where ground beetles shelter'],
        HIGH_SCHOOL: ['Sun, nitrogen, air and phosphorus', 'Seeds, nets, ants and plants', 'Soil, nutrients, acid and potash', 'Shelter, nectar, alternative prey and pollen'],
        UNDERGRADUATE: ['Habitat never matters', 'Habitat matters most in complex forests', 'Habitat matters only in deserts', 'Local habitat has most effect in moderately simple landscapes'],
        GRADUATE: ['A guided farm tour', 'A free service', 'A government payment', 'A negative effect, such as harbouring pests or weeds'],
        PHD: ['Habitat reduces both', 'Habitat has no effect on either', 'Habitat reliably eliminates pests', 'Habitat increases enemies consistently, but pest effects vary'],
      },
      correctIndex: 3,
      explanation: {
        ELEMENTARY: 'Flowers give helpful bugs the food they need.',
        MIDDLE_SCHOOL: 'Beetle banks are grassy ridges that shelter ground beetles in fields.',
        HIGH_SCHOOL: 'SNAP is shelter, nectar, alternative prey and pollen.',
        UNDERGRADUATE: 'In simple but not extremely cleared landscapes, local habitat helps most.',
        GRADUATE: 'Habitat can sometimes harbour pests, weeds or diseases.',
        PHD: 'Natural enemies increase reliably; effects on pests and yields are less consistent.',
      },
    },
    {
      id: 'ra-ipm2-q3',
      question: {
        ELEMENTARY: 'Why can bug spray make pest problems worse?',
        MIDDLE_SCHOOL: 'Why do adult hoverflies and parasitic wasps need flowers?',
        HIGH_SCHOOL: 'Why should habitat be placed close to crops?',
        UNDERGRADUATE: 'What is spillover?',
        GRADUATE: 'Why might habitat benefits accrue to others rather than the farmer who pays?',
        PHD: 'Why do natural pest control models show substantial uncertainty?',
      },
      options: {
        ELEMENTARY: ['It makes crops grow too fast', 'It kills the helper bugs too', 'It turns pests into butterflies', 'It is too colourful'],
        MIDDLE_SCHOOL: ['To build nests in them', 'For nectar and pollen to live longer and lay more eggs', 'To hide from rain only', 'They do not need flowers'],
        HIGH_SCHOOL: ['Crops like shade', 'Many natural enemies travel only tens of metres', 'Flowers need tractors', 'Habitat must be far from fields'],
        UNDERGRADUATE: ['Spilling pesticide', 'Movement of organisms from habitat into adjacent crops', 'Overflowing irrigation', 'A type of weed'],
        GRADUATE: ['Pests stay put', 'Natural enemies and pest control move across farm boundaries', 'Habitat is invisible', 'Farmers own all land'],
        PHD: ['Models use perfect data', 'They rely on proxies like habitat cover rather than mechanisms', 'Pest control does not exist', 'Insects never move'],
      },
      correctIndex: 1,
      explanation: {
        ELEMENTARY: 'Sprays can kill helpers, so pests come back with no one to eat them.',
        MIDDLE_SCHOOL: 'Nectar and pollen help these adults live longer and lay more eggs.',
        HIGH_SCHOOL: 'Many helpers do not travel far, so habitat must be nearby.',
        UNDERGRADUATE: 'Spillover is when natural enemies move from habitat into crops.',
        GRADUATE: 'Natural enemies move freely, so neighbours can share the benefits.',
        PHD: 'Proxies like habitat cover miss the processes that actually drive pest control.',
      },
    },
    {
      id: 'ra-ipm2-q4',
      question: {
        ELEMENTARY: 'What is a hedgerow?',
        MIDDLE_SCHOOL: 'How can farmers make sure helpers have food all season?',
        HIGH_SCHOOL: 'What is an economic threshold?',
        UNDERGRADUATE: 'Why is reducing broad-spectrum insecticide a prerequisite for CBC?',
        GRADUATE: 'What is a result-based payment?',
        PHD: 'Which approach studies how dispersal between habitat patches and crops shapes natural enemies?',
      },
      options: {
        ELEMENTARY: ['A road for cars', 'A pond', 'A line of bushes and small trees along a field', 'A garden gnome'],
        MIDDLE_SCHOOL: ['Plant only one flower type', 'Mow all flowers weekly', 'Plant flowers that bloom at different times', 'Use more sprays'],
        HIGH_SCHOOL: ['The price of seed', 'The weight of a tractor', 'The pest level at which control is worth its cost', 'The date of harvest'],
        UNDERGRADUATE: ['Insecticides improve habitat', 'It is not needed', 'Habitat cannot compensate for sprays that kill natural enemies', 'Natural enemies are immune'],
        GRADUATE: ['Paying for buying seed', 'Paying farmers a flat fee for any action', 'Paying farmers for measured environmental outcomes', 'Paying for crop yields only'],
        PHD: ['Single-field surveys', 'Soil chemistry', 'Metacommunity and movement ecology', 'Weather forecasting'],
      },
      correctIndex: 2,
      explanation: {
        ELEMENTARY: 'A hedgerow is a line of bushes and small trees along a field.',
        MIDDLE_SCHOOL: 'Flowers blooming at different times give food all season.',
        HIGH_SCHOOL: 'An economic threshold is the pest level at which treatment pays off.',
        UNDERGRADUATE: 'Sprays that kill helpers cancel out any habitat benefit.',
        GRADUATE: 'Result-based payments reward measured outcomes rather than actions.',
        PHD: 'Metacommunity and movement ecology examine dispersal among patches and crops.',
      },
    },
    {
      id: 'ra-ipm2-q5',
      question: {
        ELEMENTARY: 'What is a pest?',
        MIDDLE_SCHOOL: 'What is a natural enemy?',
        HIGH_SCHOOL: 'Which farms may gain the most from added habitat?',
        UNDERGRADUATE: 'Besides pest control, what other service can well-designed flower strips provide?',
        GRADUATE: 'What makes habitat measures work best within IPM?',
        PHD: 'What kind of experiments are needed to move beyond short-term local studies?',
      },
      options: {
        ELEMENTARY: ['A bug or animal that damages crops', 'A helpful worm', 'A farmer\'s dog', 'A kind of flower'],
        MIDDLE_SCHOOL: ['A predator, parasitoid or disease that attacks pests', 'A weed', 'A farmer\'s rival', 'A type of fertiliser'],
        HIGH_SCHOOL: ['Those in vast monocultures with little habitat', 'Those surrounded by forests', 'Those with no crops', 'Every farm equally'],
        UNDERGRADUATE: ['Pollination for pollinator-dependent crops', 'Irrigation', 'Fertiliser production', 'Weed spreading'],
        GRADUATE: ['Monitoring, thresholds that count natural enemies, and selective pesticides', 'Routine calendar spraying', 'Removing all hedges', 'Ignoring pests'],
        PHD: ['Long-term, landscape-replicated experiments with standardised measures', 'One-day surveys', 'Lab studies only', 'Opinion polls'],
      },
      correctIndex: 0,
      explanation: {
        ELEMENTARY: 'A pest damages crops.',
        MIDDLE_SCHOOL: 'Natural enemies are predators, parasitoids or diseases that attack pests.',
        HIGH_SCHOOL: 'Farms in simplified landscapes often have fewer helpers, so added habitat helps most.',
        UNDERGRADUATE: 'Flower strips can also support pollinators that boost yields.',
        GRADUATE: 'Monitoring and selective control protect the natural enemies habitat supports.',
        PHD: 'Long-term, replicated, standardised experiments are needed for robust conclusions.',
      },
    },
  ],
}

export default expansion
