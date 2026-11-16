import type { NewExodologyLesson } from './types'

const lesson: NewExodologyLesson = {
  id: 'a-m2-n2',
  title: 'Distribution and Access Design',
  duration: '20 min',
  type: 'instruction',
  content: {
    introduction: `Growing food locally is only half of a decentralized food system. The other half is getting that food to every household, fairly, in every season, and during disruptions as well as in normal times. Many alternative food initiatives succeed at production and struggle at distribution: the vegetables exist, but they reach only the people with the time, money, transport and confidence to go and get them.

For Exodology this is not a secondary, logistical concern. If a parallel food system serves mainly those who were already well fed, it has reproduced the **lifeboat problem**: exit for the privileged, with everyone else left more dependent on a system that may be weakened by their departure. The **principle of distributive justice** asks who gains and who loses; distribution design is where that question becomes concrete.

This lesson explains why availability is not the same as access, sets out the dimensions of access a design must address, and describes practical approaches to distribution, affordability and inclusion, along with the trade-offs each involves.`,

    sections: [
      {
        title: 'Availability Is Not Access',
        content: `Economist **Amartya Sen** transformed the study of famine by showing that hunger often results not from a lack of food in a region, but from people losing the ability to obtain it. In his analysis of several twentieth-century famines, including the Bengal famine of 1943, he argued that large-scale starvation occurred without a correspondingly large fall in overall food availability. What collapsed was people's **entitlements**: the wages, prices, ownership and social arrangements through which they could command food.

This insight is central to distribution design. A decentralized food system can raise the amount of food produced locally and still leave some households hungry if they cannot afford it, cannot reach it, or are excluded from the arrangements through which it is shared.

For the exodologist, Sen's work carries two lessons:

1. **Measure access, not just output.** Success is not tons grown or members recruited, but whether every household that depends on the system can reliably obtain enough suitable food.

2. **Watch entitlements during transition.** Exit changes prices, jobs and supply routes. A transition that reduces a group's ability to obtain food, even while local production rises, has harmed that group. This is a form of transition burden that must be anticipated, not discovered afterwards.`
      },
      {
        title: 'The Dimensions of Access',
        content: `Access has several dimensions, and a design must address all of them. A useful checklist:

**Economic**: Can households afford the food? This includes price, but also payment terms. A share paid months in advance is unaffordable to someone paid weekly, even if the total cost is reasonable.

**Physical**: Can people reach it? Distance, public transport, opening locations and the needs of people with limited mobility all matter. The term "food desert" is widely used for areas with poor access to fresh food, though researchers and community advocates have debated it, noting that the problem often reflects decisions about investment rather than natural absence.

**Temporal**: Is it available when people can get it, and across the year? Distribution only on weekday mornings excludes many workers; supply that disappears in winter leaves gaps.

**Social and cultural**: Is the food appropriate to the diets, traditions and religious practices of the people it serves? Is the setting welcoming, or does it signal that some people do not belong?

**Informational**: Do people know the option exists and how it works? Foundations noted that information gaps keep people in existing systems; they also keep people out of alternatives.

Mapping these dimensions for each group in a community, especially those most dependent on existing systems, is the access equivalent of dependency mapping.`
      },
      {
        title: 'The Distribution Layer: Aggregation, Storage and the Last Mile',
        content: `Between producer and household sit several functions that centralized systems perform at large scale and decentralized systems must rebuild.

**Aggregation**: Collecting food from many small producers into quantities that can be distributed efficiently. Food hubs and producer cooperatives often perform this role, reducing the burden on each grower.

**Storage and processing**: Cold storage, dry storage and basic processing extend shelf life and smooth seasonal supply. These facilities frequently become **critical nodes**; a single shared cold store can be as much a point of failure as a supermarket distribution center. Applying redundancy here matters.

**Transport**: Moving food from aggregation points to distribution points. Shared logistics among several initiatives can cut costs and emissions compared with every farm making its own deliveries.

**The last mile**: Getting food from distribution points into households. Options include markets, cooperative shops, collection points at workplaces, schools, clinics or places of worship, delivery for those who cannot travel, and public kitchens.

Each channel suits different households. CSA schemes give farmers financial security but ask members to commit in advance. Markets offer choice but limited hours. Cooperatives can combine affordability and governance but need sustained volunteer or staff effort. A resilient distribution design usually combines several channels, so that no group depends on a single route.`
      },
      {
        title: 'Designing for Affordability Without Shifting the Burden',
        content: `Affordability is where the tension between fair prices for producers and fair access for households is sharpest. Lowering prices by squeezing growers simply moves the transition burden from eaters to farmers, many of whom already work on thin margins.

Approaches that alternative food initiatives have used include:

- **Sliding-scale or solidarity pricing**, where members who can pay more cross-subsidize those who cannot
- **Flexible payment terms**, such as weekly or monthly instalments instead of a single advance payment
- **Accepting public food benefits** where these exist, and taking part in programs in several countries that match the value of benefits spent on fresh produce
- **Work-for-share arrangements**, where labor substitutes for some of the cost, with care that this does not exclude people with caring duties or disabilities
- **Public procurement**, such as school or hospital meals sourced from local producers, which spreads costs through public budgets and reaches people regardless of income
- **Community kitchens and shared meals**, which lower per-person cost and build social ties

Each has trade-offs. Cross-subsidy depends on enough better-off members; benefit schemes depend on public policy that may change; public procurement brings administrative requirements small producers may struggle to meet. Transparency about these trade-offs, and about who pays, is part of the commitment to intellectual honesty.`
      },
      {
        title: 'Designing for Inclusion and Dignity',
        content: `Affordable food can still be inaccessible if people feel unwelcome or have no say. Anti-hunger advocate **Mark Winne**, drawing on decades of work in Hartford, Connecticut, criticized both the tendency of alternative food movements to serve mainly affluent customers and the growth of emergency food provision as a permanent substitute for fair access. His work highlights the need to design inclusion in from the start.

Practical design questions include:

1. **Who was involved in the design?** Procedural justice requires that the households most affected help shape locations, hours, products and rules, not merely receive the result.

2. **Does the system offer choice?** Models that let people choose their own food, rather than receive a fixed parcel, tend to respect dignity and reduce waste.

3. **Does it avoid stigma?** Mixing paying and subsidized members in the same channel, without visible distinction, reduces the stigma that keeps people away.

4. **Is it culturally responsive?** Growing and stocking foods that reflect the community's diets is both fairer and more likely to be used.

5. **Does governance reflect membership?** Cooperatives and food councils whose boards look nothing like their members tend to drift toward the priorities of those who govern.

Inclusion is not only an ethical add-on. A system used by a broad cross-section of a community has more members, more political support and more resilience than one confined to a niche.`
      },
      {
        title: 'Distribution Under Stress and Duties to Those Who Stay',
        content: `A decentralized food system proves its worth when the dominant system is disrupted. That is also when distribution decisions become hardest.

**Agree allocation rules in advance.** If supply falls short, who receives food first? Deciding this during a crisis invites conflict and favors the well connected. Rules agreed beforehand, through an inclusive process, are more likely to be fair and accepted. The ethics guidelines advise that when trade-offs are unavoidable, priority goes to those with less power.

**Coordinate with existing safety nets.** Food banks, public assistance and emergency services remain essential. A parallel food system should connect to them, not compete with them or undermine their support.

**Avoid weakening what others depend on.** If an alternative draws enough custom away from a local shop that it closes, neighbors who relied on that shop may lose access. This is residual duty in practice: considering the effects of exit on those who remain in the existing system.

**Keep on-ramps open.** Distribution design should make it easy for newcomers to join, including those who arrive in a crisis without having contributed beforehand. A system that closes its doors when demand rises is a lifeboat, not an alternative.

Fair distribution is ultimately what distinguishes a managed, ethical food transition from a scramble in which those with resources exit and others are left behind.`
      }
    ],

    keyTakeaways: [
      'Following Amartya Sen, availability of food is not the same as access; success should be measured by whether every household can obtain enough suitable food',
      'Access has economic, physical, temporal, social and cultural, and informational dimensions, each needing deliberate design',
      'Decentralized systems must rebuild aggregation, storage, transport and last-mile functions, applying redundancy to shared facilities',
      'Affordability measures should not shift the transition burden onto producers; every approach involves trade-offs that should be made transparent',
      'Inclusive governance, dignity, pre-agreed allocation rules and open on-ramps keep a food alternative from becoming a lifeboat'
    ],

    references: [
      {
        author: 'Sen, Amartya',
        title: 'Poverty and Famines: An Essay on Entitlement and Deprivation',
        year: 1981,
        publisher: 'Clarendon Press (Oxford University Press)',
        relevance: 'Introduces the entitlement approach, showing that hunger results from failures of access rather than only failures of supply.',
        url: 'https://openlibrary.org/works/OL116532W'
      },
      {
        author: 'Winne, Mark',
        title: 'Closing the Food Gap: Resetting the Table in the Land of Plenty',
        year: 2008,
        publisher: 'Beacon Press',
        relevance: 'Examines unequal food access in the United States and the limits of both alternative food movements and emergency food provision.',
        url: 'https://openlibrary.org/works/OL3515778W'
      },
      {
        author: 'Patel, Raj',
        title: 'Stuffed and Starved: Markets, Power and the Hidden Battle for the World Food System',
        year: 2007,
        publisher: 'Portobello Books',
        relevance: 'Shows how power in the food system shapes who eats well and who does not, framing access as a question of control.',
        url: 'https://openlibrary.org/works/OL9896495W'
      }
    ]
  },
  learningObjectives: [
    'Explain the difference between food availability and food access using the entitlement approach',
    'Assess a community food system against economic, physical, temporal, social and cultural, and informational dimensions of access',
    'Design a multi-channel distribution layer that avoids single points of failure in aggregation, storage and the last mile',
    'Compare affordability strategies and identify who bears their costs',
    'Formulate allocation rules and inclusion practices that fulfil distributive justice and residual duty'
  ],
  keyTerms: [
    { term: 'Entitlement', definition: 'In Amartya Sen\'s work, the set of means, such as wages, prices, ownership and social arrangements, through which a person can obtain food.' },
    { term: 'Food Access', definition: 'The ability of a household to reliably obtain enough suitable food, as distinct from the availability of food in a region.' },
    { term: 'Last Mile', definition: 'The final stage of distribution, from a distribution point into the household.' },
    { term: 'Solidarity Pricing', definition: 'A pricing arrangement in which those able to pay more help cover the cost for those who can pay less.' },
    { term: 'Transition Burden', definition: 'The costs, difficulties, and risks borne by those undergoing system transition.' }
  ]
}

export default lesson
