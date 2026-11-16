import type { NewExodologyLesson } from './types'

const lesson: NewExodologyLesson = {
  id: 's-m5-n1',
  title: 'Mass Transition Dynamics',
  duration: '20 min',
  type: 'instruction',
  content: {
    introduction: `Most of the Exodology curriculum so far has treated exit as a decision: an individual, household or community weighs the costs of staying against the costs of leaving, maps its dependencies and builds alternatives. When many people leave a system at roughly the same time, something new appears. Each person's decision now depends on what others are doing, the alternatives they are moving toward can become congested, and the system they are leaving changes shape as its participants depart. A mass transition is not simply many individual exits added together.

This lesson examines those dynamics. It draws on work from sociology, economics and the study of innovation that explains why large-scale movement often starts slowly, accelerates suddenly and then levels off, and why the same process can produce either a managed exit or a disorderly flight. It connects these ideas to concepts already familiar from the Foundations path: the response spectrum, the exit window, non-linearity and responsibilities to those who stay.

The aim is not to predict when a mass transition will happen. The Charter asks for humility about prediction in complex systems. The aim is to help strategic practitioners recognize the patterns that make large transitions easier or harder to steward, so that they can pace, support and shape them rather than simply react.`,

    sections: [
      {
        title: 'From Individual Exit to Mass Exit',
        content: `At the individual scale, the main question is whether exit is right for a particular person or community. At scale, three additional features dominate.

**Interdependent decisions.** People rarely decide to leave in isolation. They watch neighbors, colleagues, relatives and institutions. The more others leave, the lower the social and practical cost of leaving becomes, because information, networks and services follow the people who have already moved. The reverse is also true: if few have left, leaving can feel risky, strange or disloyal.

**Feedback on the system left behind.** Hirschman observed in "Exit, Voice, and Loyalty" that exit sends a signal to an organization in decline, and that the members most able to leave are often those whose voice could have pushed for improvement. At mass scale this effect intensifies. Departures reduce revenue, skills and political weight in the remaining system, which can make staying worse and prompt further departures.

**Capacity limits on the alternatives.** Parallel systems that work well for an early group may not absorb a large influx. Housing, trained installers, local food supply, governance capacity and trust all take time to grow.

Together these features make mass transitions **non-linear**: the second core principle of Exodology. Small changes in conditions can produce large changes in movement, and periods of apparent stability can end abruptly.`
      },
      {
        title: 'Thresholds and Tipping',
        content: `Social scientists have offered useful ways to think about why collective movement can suddenly accelerate.

Thomas Schelling, in "Micromotives and Macrobehavior," showed how individual preferences that seem mild can combine into large, sometimes unintended collective outcomes. His models of neighborhood change illustrated **tipping**: once a certain share of people had moved, others who would not have moved on their own chose to follow, and the pattern became self-reinforcing.

The sociologist Mark Granovetter developed a related idea of **individual thresholds**. Each person has a point at which enough others have acted that they will act too. Some will move first with no one else, many will move once a modest share has gone, and some will only move when nearly everyone has. The distribution of these thresholds, not just their average, determines whether a movement spreads or stalls. Two populations with similar overall attitudes can behave very differently if one has a chain of people whose thresholds link up and the other has a gap in that chain.

For strategic exodologists, two lessons follow. First, a long period of slow uptake is not proof that a transition has failed; it may be building toward a threshold. Second, and more cautionary, a threshold can be crossed faster than alternatives can absorb newcomers. Tipping is not automatically good. Whether it produces a managed exit or a disorderly one depends on preparation that happens before it occurs.`
      },
      {
        title: 'Diffusion: How Alternatives Spread',
        content: `Everett Rogers' "Diffusion of Innovations" synthesized decades of research on how new practices spread through societies. Adoption commonly follows an S-shaped curve: slow at first, faster as adoption becomes visible and networks carry it, then slower again as the remaining population is the hardest to reach. Rogers distinguished adopter groups, from innovators and early adopters to the early and late majority and those who adopt last or not at all, and stressed that factors such as perceived advantage, compatibility with existing practices, simplicity, the chance to try before committing, and visible results all influence the speed of spread.

These ideas map closely onto the multi-level perspective used throughout the Strategic path. Alternatives begin in **niches**, protected spaces where they can be tested. They spread when landscape pressures and regime weaknesses open opportunities and when the alternative has become reliable enough for people with less tolerance for risk.

Two cautions apply. Diffusion research has been criticized, including by Rogers himself, for a pro-innovation bias: assuming that spread is good and that those who do not adopt are simply lagging. Exodology must avoid this **teleological framing**, as the Style Guide warns. Late adopters often have good reasons, such as fewer resources, greater exposure to risk or obligations that keep them in place. Their hesitation is information about the alternative, not a defect in them.`
      },
      {
        title: 'Bottlenecks and the Changing System Left Behind',
        content: `Mass transitions are often limited less by willingness to move than by bottlenecks. Common ones include:

1. **Absorptive capacity**: the alternative cannot take in people as fast as they arrive. A cooperative with a waiting list, an energy program short of trained installers or a town without housing for newcomers all face this limit.
2. **Skills and knowledge**: the people who know how to operate the new arrangements are few, and training takes time.
3. **Finance and materials**: up-front costs and supply chains for the alternative may tighten as demand rises.
4. **Governance capacity**: decision-making processes that worked for a small group may strain or fracture as membership grows.

At the same time, the system being left behind changes. Many systems have high fixed costs, such as networks, buildings and administration, that are shared among users. As users depart, the remaining participants may face higher costs or worse service, which can push more of them to leave. Energy economists have discussed this pattern for electricity utilities as more customers generate their own power, sometimes calling it a "utility death spiral," although whether and how it unfolds depends heavily on regulation and pricing.

This combination is dangerous. The rate of departure from the old system can outpace the rate at which the new one can serve people, leaving a gap in which neither works well. On the response spectrum, that gap is where a managed exit can slide toward collapse.`
      },
      {
        title: 'A Historical Illustration: The Great Migration',
        content: `The Foundations path introduced the Great Migration as a historical example of exit: between roughly 1916 and 1970, about six million African Americans left the rural South for cities in the North and West, departing a system of racial oppression. Isabel Wilkerson's "The Warmth of Other Suns" documents it through the lives of individual migrants.

Several mass transition dynamics are visible in this widely studied case:

- **Push and pull together.** Segregation, disenfranchisement and racial violence in the South combined with industrial labor demand in northern cities, notably during the labor shortages of the First World War.
- **Networks and chain migration.** Migrants commonly followed relatives and neighbors who had gone before, who sent letters, money and information about jobs and housing. Each departure lowered the threshold for the next.
- **Resistance from the system being left.** Some Southern authorities and employers tried to discourage or obstruct departure, a reminder that exit is contested, in line with the principle of political embeddedness.
- **Absorption and its limits.** Arriving migrants often met discrimination, overcrowded and restricted housing, and hostility in destination cities. Leaving one system did not guarantee a just alternative.

Historians debate the causes and consequences of the migration, and no single case should be stretched into a general law. The value of the example is that it shows interdependent decisions, networks and bottlenecks operating over decades, and it reminds us that mass exits are lived by people, not just modeled.`
      },
      {
        title: 'Stewarding Mass Dynamics',
        content: `Strategic exodologists cannot and should not control when large numbers of people decide to leave a system. Respect for autonomy, emphasized in the stewardship lessons, applies at scale as much as one-to-one. What practitioners can do is influence the conditions under which movement happens.

**Watch the gap between departure and capacity.** The most useful single indicator is often the difference between how fast people are leaving and how fast alternatives can serve them. Where departure outpaces capacity, effort belongs in expanding capacity, pacing or bridging arrangements rather than in further encouraging exit.

**Prepare before thresholds are crossed.** Training, financing, governance and support networks take years to build. The exit window is the time to build them; once movement accelerates, it is usually too late to start.

**Notice who moves first.** Early movers tend to have more resources and options. Without deliberate attention, mass transitions can leave the least advantaged in a declining system, which is the lifeboat problem at scale. Creating on-ramps for others is one of the concrete forms of residual duty.

**Distinguish planned transition from flight.** The response spectrum lists "exit becomes desperate flight rather than planned transition" as a collapse warning signal. Rapid acceleration is not success if it is driven by fear, failing services or coercion.

The next lessons in this module address how to keep essential services stable while systems change, how to coordinate many actors without central control, and how to protect critical infrastructure. All of them build on the dynamics described here.`
      }
    ],

    keyTakeaways: [
      'Mass transitions are non-linear because each decision to leave depends on what others do and feeds back on both the old and new systems',
      'Thresholds and tipping can accelerate movement suddenly, and tipping is only beneficial if alternatives are ready to absorb newcomers',
      'Diffusion often follows an S-shaped curve, but late adopters usually have real reasons that the transition must address rather than dismiss',
      'The gap between the rate of departure and the capacity of alternatives is where managed exit can slide toward collapse',
      'Stewards shape the conditions of movement, pay attention to who moves first, and keep responsibilities to those who stay in view'
    ],

    references: [
      {
        author: 'Schelling, Thomas C.',
        title: 'Micromotives and Macrobehavior',
        year: 1978,
        publisher: 'W. W. Norton',
        relevance: 'Shows how individual choices combine into collective outcomes, including tipping dynamics, that no individual intended.',
        url: 'https://openlibrary.org/works/OL2259853W'
      },
      {
        author: 'Rogers, Everett M.',
        title: 'Diffusion of Innovations',
        year: 1962,
        publisher: 'Free Press',
        relevance: 'Classic synthesis of how new practices spread through populations over time, including adopter groups and the S-shaped adoption curve.',
        url: 'https://openlibrary.org/works/OL718011W'
      },
      {
        author: 'Wilkerson, Isabel',
        title: 'The Warmth of Other Suns: The Epic Story of America\'s Great Migration',
        year: 2010,
        publisher: 'Random House',
        relevance: 'Documents the Great Migration through individual lives, illustrating networks, push and pull factors, and the limits of absorption in a mass exit.',
        url: 'https://openlibrary.org/works/OL15380640W'
      },
      {
        author: 'Hirschman, Albert O.',
        title: 'Exit, Voice, and Loyalty: Responses to Decline in Firms, Organizations, and States',
        year: 1970,
        publisher: 'Harvard University Press',
        relevance: 'Explains how exit feeds back on a declining organization and how the departure of some members affects voice for those who remain.',
        url: 'https://openlibrary.org/works/OL2745855W'
      }
    ]
  },
  learningObjectives: [
    'Explain why mass transitions behave differently from the sum of individual exits',
    'Describe how thresholds, tipping and diffusion shape the pace of large-scale movement',
    'Identify common bottlenecks that limit the absorptive capacity of alternatives',
    'Analyze a historical mass transition using push and pull factors, networks and bottlenecks',
    'Assess whether a period of rapid movement reflects a managed exit or a slide toward flight and collapse'
  ],
  keyTerms: [
    { term: 'Mass Transition', definition: 'A transition in which large numbers of people leave a system over a similar period, so that their decisions interact and reshape both the old and new systems.' },
    { term: 'Tipping', definition: 'A self-reinforcing shift, described by Thomas Schelling, in which movement by some people prompts others to follow once a certain share has acted.' },
    { term: 'Individual Threshold', definition: 'In sociology, the share of others who must act before a given person will act; the distribution of thresholds shapes whether movement spreads or stalls.' },
    { term: 'Diffusion', definition: 'The process, studied by Everett Rogers, by which a new practice spreads through a population over time.' },
    { term: 'Absorptive Capacity', definition: 'In this lesson, the ability of an alternative system to take in and serve newcomers at the pace they arrive.' },
    { term: 'Exit Window', definition: 'The period when exit is possible before collapse becomes inevitable.' }
  ]
}

export default lesson
