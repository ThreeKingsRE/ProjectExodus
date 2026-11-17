import type { ExpandedExodologyLesson } from './types'

const lesson: ExpandedExodologyLesson = {
  id: 's-m4-l1',
  title: 'Designing Regional Transitions',
  duration: '25 min',
  type: 'instruction',
  content: {
    introduction: `Regional transitions—at the city, county, or bioregional level—require different approaches than individual or community exits.

The previous lesson, Scaling Exodology, placed the region in the middle of the scale spectrum: large enough to involve governance, public infrastructure and diverse stakeholders, yet small enough that people still share a place, a landscape and often a sense of identity. It also argued that regional transitions can work "middle-out", spreading horizontally to other regions while influencing both individuals and nations. This lesson turns that idea into a design practice.

A region is where many of the dependencies mapped in the Foundations and Applied paths actually live. Households depend on a regional grid, a regional water utility, a regional food distribution network and a regional labor market. A household can reduce some of these dependencies on its own, and a community can build some shared alternatives, but many exits only become possible when someone builds at regional scale. The lesson follows the four tasks that original practice identifies: assessing the region, setting a strategy, planning infrastructure and working through regional politics.`,

    sections: [
      {
        title: 'Regional Assessment',
        content: `Regional dependency mapping. Critical infrastructure analysis. Stakeholder mapping. Political landscape assessment. What are the unique vulnerabilities and opportunities of this region?

**Regional dependency mapping** applies the dependency mapping you practiced at household and community scale to a whole region. The questions are the same (what does this place depend on, how critical is each dependency, and how easily could it be replaced?), but the answers are aggregated. A region may import most of its food, rely on a single transmission line for electricity, or depend on one large employer for a large share of its jobs. Each of these is a form of structural dependence: if the system it relies on fails or turns harmful, the region has little exit capability.

**Critical infrastructure analysis** looks at the physical systems that everything else rests on: power, water, wastewater, transport corridors, communications and food distribution. For each, ask who owns and operates it, how old it is, what single points of failure exist, and what it would take to build a parallel system. Infrastructure is usually where exit friction is highest at this scale, because it is expensive, long-lived and often governed by regulated monopolies.

**Stakeholder mapping** identifies everyone with an interest in the transition: residents, local governments, utilities, major employers, unions, farmers, faith communities, community organizations, and groups who are often overlooked, such as renters, people with disabilities and residents with limited English. Following the Principle of Distributive Justice, the map should show not only who has power but who would bear the transition burden.

**Political landscape assessment** asks who makes the relevant decisions, under what rules, and on what timelines. Which bodies control land use, utilities and budgets? When are elections? Which coalitions are already active? The final question in the original text, about unique vulnerabilities and opportunities, is the point of the whole assessment: two regions with similar maps can face very different possibilities because of their history, geography and politics.`
      },
      {
        title: 'Regional Strategy',
        content: `Identify early adopter communities. Build demonstration projects. Create regional networks. Develop scalable models. Sequence interventions for cascade effects.

These five moves describe a deliberate way of spreading exit across a region rather than attempting it everywhere at once.

**Early adopter communities** are places, organizations or neighborhoods already motivated and able to move. Research on the diffusion of innovations, associated above all with the sociologist Everett Rogers, found that new practices typically spread through a population in stages, starting with a small group of innovators and early adopters whose visible experience helps others decide. Starting where readiness is highest is not favoritism, but it does raise a justice question: early adopters are often better resourced. A regional strategy should plan from the start how later and less advantaged communities will be included.

**Demonstration projects** make an alternative concrete. A working community energy scheme, a regional food hub or a restored watershed answers practical doubts more convincingly than any plan. Demonstrations should be honest: show the costs and problems as well as the successes, so that others can learn rather than merely be persuaded.

**Regional networks** link early adopters so that they share knowledge, tools and people. The Transition Towns movement, which began in Totnes, England, in 2006, is a widely documented example of local initiatives forming a wider network that shares methods across places.

**Scalable models** are approaches that can be replicated or adapted elsewhere without starting from scratch: standard legal templates, financing structures, training materials and operating procedures.

**Sequencing for cascade effects** means ordering interventions so that each one makes the next easier. For example, a regional energy program that builds local installation skills can later support building retrofits, and a food hub that secures reliable buyers can make it easier for new farms to start. Because cascades are non-linear, they cannot be fully predicted, so sequencing should be revised as results come in, in line with the Core Principle of adaptive management.`
      },
      {
        title: 'Infrastructure Planning',
        content: `Regional energy systems, water systems, food networks. Transportation alternatives. Communication infrastructure. Build what individuals and communities cannot.

The last sentence is the key to this section. Regional infrastructure is justified when it does something that individual and community exits cannot do alone: achieve economies of scale, connect many local systems, manage a shared resource such as a watershed, or provide backup when local systems fail.

**Energy systems.** Individual households can install solar panels, but balancing supply and demand, storing energy and maintaining reliable service across a region requires regional coordination. In California, community choice aggregation allows local governments to buy electricity on behalf of residents while the existing utility continues to deliver it; Marin Clean Energy, which began service in 2010, was the first such program in the state. It is an example of a region changing where its energy comes from without first building an entirely new grid.

**Water systems.** Water is organized by watersheds, which rarely match political boundaries. In the 1990s New York City chose to protect the rural Catskill and Delaware watersheds that supply much of its drinking water, through land acquisition and agreements with upstate communities, rather than build a very large filtration plant. The case is widely cited because it shows a region investing in an ecological system instead of a purely technical one, and because it required negotiation between city and rural interests whose priorities differed.

**Food networks.** Regional food hubs, shared processing facilities, cold storage and distribution let small producers reach regional markets that no single farm could supply.

**Transportation and communication.** Public transit, safe cycling networks, rail links and broadband all shape whether people can actually use local alternatives. A household that cannot reach a regional food market or work remotely without reliable internet has low exit capability regardless of its own intentions.

Infrastructure is also where lock-in begins. Assets built today will shape choices for decades, so regional planners should prefer designs that keep future exits possible: modular systems, open standards and governance that allows communities to leave or change providers.`
      },
      {
        title: 'Political Strategy',
        content: `Engage local government. Build relationships with key actors. Navigate political opposition. Create policy frameworks. Work within and outside formal channels.

Regional transitions are political because they redistribute money, jobs, land use and authority. The Core Principle of political embeddedness reminds us that transitions are contested, not merely technical.

**Engaging local government** matters because councils, county boards and regional authorities control zoning, permitting, public procurement, utility franchises and budgets. Many regional exits depend on a single local decision, such as allowing a community energy project or changing a land-use rule.

**Building relationships with key actors** means investing in trust before it is needed: with officials and their staff, utility managers, business associations, unions and community leaders. Relationships make it possible to resolve disputes informally and to learn early about obstacles.

**Navigating political opposition** begins with understanding it. Opposition may come from incumbent organizations whose business model is threatened, from workers who fear for their jobs, or from residents who were not consulted. Some objections reveal real costs the transition must address. Treating every opponent as an obstacle to be defeated tends to harden resistance; treating legitimate concerns as design input is both more ethical and often more effective.

**Creating policy frameworks** turns one-off projects into lasting rules: local climate or resilience plans, procurement standards, community ownership requirements or transition funds. Frameworks make progress less dependent on particular individuals or election results.

**Working within and outside formal channels** acknowledges that formal processes are necessary but not sufficient. Public pressure, community organizing, demonstrations of alternatives and independent research can open possibilities that formal channels alone would not. The tension here is real: working closely with officials can limit a group's willingness to criticize them, while pure outside pressure can cut off access. Many effective regional efforts combine both, with different organizations playing different roles.`
      },
      {
        title: 'Implications for Exit',
        content: `Regional design changes the meaning of the core Exodology questions.

**When to leave.** At regional scale, the decision to exit a system is rarely made by one person. It emerges through public processes, votes and negotiations. The assessment phase is what makes this decision informed: it shows which dependencies are most harmful or fragile, and which alternatives are realistic.

**How to leave well.** A regional exit is well designed when it is sequenced (alternatives built before old systems are retired), inclusive (people with the least exit capability are reached, not only early adopters) and accountable (decisions can be reviewed and corrected). Parallel systems are especially important at this scale, because essential services such as water and power cannot simply stop.

**What comes after.** Regional alternatives need durable governance, maintenance funding and skilled people. A region that builds new infrastructure without planning who will own and run it in twenty years risks creating a new dependency rather than ending an old one.

**Duties to those who stay.** Not every community, business or household in a region will join a transition at the same time, and some will not join at all. Residual duty applies: those who exit should consider the effects on people still relying on the old system, such as rising costs for remaining customers of a shrinking utility, and work to keep essential services affordable and reliable for them.`
      }
    ],

    keyTakeaways: [
      'Regional transitions require systematic assessment',
      'Strategy should create cascade effects',
      'Regional infrastructure enables local exits',
      'Political engagement is essential',
      'Early adopters can lead, but a regional strategy must plan from the start how communities with less exit capability will be included'
    ],

    references: [
      {
        author: 'Hopkins, Rob',
        title: 'The Transition Handbook: From Oil Dependency to Local Resilience',
        year: 2008,
        publisher: 'Green Books',
        relevance: 'Practical account of the Transition Towns approach, including how local initiatives form networks that spread across a region.',
        url: 'https://openlibrary.org/works/OL12011785W'
      },
      {
        author: 'Rogers, Everett M.',
        title: 'Diffusion of Innovations',
        year: 1962,
        publisher: 'Free Press',
        relevance: 'Classic study of how new practices spread through populations, underpinning strategies that start with early adopters and demonstration projects.',
        url: 'https://openlibrary.org/works/OL718011W'
      }
    ]
  },
  learningObjectives: [
    'Conduct regional assessments',
    'Design regional transition strategies',
    'Plan regional infrastructure',
    'Navigate regional politics'
  ],
  keyTerms: [
    { term: 'Structural Dependence', definition: 'A condition where survival or basic functioning requires continued participation in a specific system; at regional scale, a reliance shared by a whole place.' },
    { term: 'Parallel Systems', definition: 'Alternative infrastructure built alongside existing systems to enable future exit.' },
    { term: 'Early Adopter Community', definition: 'A place or group already motivated and able to begin a transition, whose visible experience helps others decide whether to follow.' },
    { term: 'Cascade Effect', definition: 'A chain of changes in which one intervention makes the next easier, so that progress spreads beyond the original project.' },
    { term: 'Lock-in', definition: 'Condition where systems resist change due to accumulated advantages and interdependencies.' }
  ]
}

export default lesson
