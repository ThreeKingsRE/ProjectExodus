import type { NewExodologyLesson } from './types'

const lesson: NewExodologyLesson = {
  id: 'a-m2-n1',
  title: 'Principles of Food System Decentralization',
  duration: '20 min',
  type: 'instruction',
  content: {
    introduction: `Food is the dependency most people map first, and for good reason: it is fundamental, it is needed every day, and it is one of the most actionable areas for building alternatives. Foundations described the dependencies of industrial agriculture and the ways food systems fail. This module turns to design. Its starting question is structural: what would it mean for a food system to be **distributed** rather than **centralized**, and why would that matter for exit?

The answer is not simply "grow your own" or "buy local". Decentralization is a set of design principles about how many nodes a system has, how they connect, who controls them, and how failure in one place affects others. Applied carefully, these principles reduce concentration risk and increase exit capability. Applied carelessly, they can produce systems that are less efficient, less fair and no more resilient than the ones they replace.

This lesson sets out those principles and their limits. The lessons that follow build on them: designing parallel systems, surveying food alternatives at each stage, designing fair distribution and access, and learning from documented community food networks.`,

    sections: [
      {
        title: 'Why Food Systems Centralized, and What It Cost',
        content: `Modern food systems did not centralize by accident. Concentrating processing, distribution and retail in large facilities brought real benefits: economies of scale, lower prices for many foods, year-round availability, and the ability to move food from regions with surpluses to regions with shortages. Intellectual honesty requires acknowledging these gains before criticising the arrangement.

The costs appear in the dependency map. Writer and activist **Raj Patel** described the global food system as an hourglass: very many farmers at one end, very many eaters at the other, and a narrow waist of a relatively small number of firms that buy, process, trade and sell. From an Exodological perspective, that narrow waist is a cluster of **critical nodes**. Disruption at one processing plant, port or distribution centre can affect very large numbers of people, and the actors at the waist hold considerable power over both farmers and consumers.

Architect **Carolyn Steel** has shown how the feeding of cities has shaped urban form throughout history, and how modern supply chains have made food's journey largely invisible to city dwellers. Invisibility is itself a form of dependence: people cannot plan an exit from a system they cannot see.

Centralization, in short, trades resilience and control for efficiency. Decentralization asks whether some of that trade can be reversed without losing what was gained.`
      },
      {
        title: 'Centralized, Decentralized and Distributed',
        content: `It helps to borrow a distinction from network design. In early work on communication networks, engineer **Paul Baran** contrasted three structures:

**Centralized**: all connections run through one hub. If the hub fails, everything fails.

**Decentralized**: several hubs, each serving its own cluster. Failure of one hub affects one cluster, not the whole network.

**Distributed**: many nodes connected by many paths, so that traffic can route around failures.

Food systems can be described in the same terms. A region supplied through one wholesale market and two supermarket chains is close to centralized. A region with several food hubs, cooperatives and markets, each linked to many growers, is decentralized. A region where households, community gardens, small farms, shops, cooperatives and public kitchens all exchange food along many routes approaches a distributed system.

Two clarifications prevent common misunderstandings:

1. **Decentralization is not isolation.** A distributed food system still trades with other regions. Its distinguishing feature is that no single node or route is indispensable.

2. **Decentralization is not self-sufficiency.** The goal is exit capability, the ability to keep functioning if a major node fails, not the elimination of every outside connection.`
      },
      {
        title: 'Design Principles for Distributed Food Systems',
        content: `Several principles, drawn from resilience thinking and from the curriculum's existing lessons, guide decentralization.

**Diversity**: Many crops, many producers, many channels. Diversity reduces the chance that one pest, price shock or business failure removes a large share of supply.

**Redundancy**: More than one way to meet each critical need. Two supply routes, two storage sites, two people who know how to run the mill. Redundancy looks wasteful in normal times and essential in a crisis.

**Modularity**: Parts that can fail without bringing down the whole. A network of small processing kitchens can lose one and continue; a single large plant cannot.

**Proximity where it matters**: Shortening supply chains for perishable, essential foods reduces exposure to transport disruption and makes the system visible to the people who rely on it.

**Appropriate scale**: Economist **E. F. Schumacher** argued for technology and organisation at a human scale that communities can understand, maintain and control. In food systems, this means matching each function to the smallest scale at which it works well. Growing vegetables works at household scale; milling grain, cold storage or slaughter may need shared community or regional facilities.

**Maintainability**: As the parallel systems lesson emphasises, design for the people who will run it. A distributed system that depends on rare expertise has simply moved the critical node.`
      },
      {
        title: 'Control: Food Security and Food Sovereignty',
        content: `Decentralization concerns not only where food moves but who decides. Foundations distinguished **food security**, having enough food, from **food sovereignty**, the right of peoples to define their own food systems. A highly centralized system can deliver food security in normal times while leaving communities with almost no control.

Decentralizing control means asking who sets the rules at each stage: who owns the land and seed, who sets prices, who decides what is grown, who governs shared infrastructure. Political scientists **Vincent and Elinor Ostrom** used the term **polycentric governance** for arrangements with many overlapping centres of decision-making rather than a single authority. Food systems lend themselves to this: household gardens, farmer cooperatives, consumer cooperatives, municipal food policy and national regulation can each govern what they are best placed to govern.

This links decentralization to the principle of **political embeddedness**. Shifting control away from the narrow waist of the hourglass is contested; actors who benefit from concentration may resist. It also links to **procedural justice**: a decentralized system run by a small, unrepresentative group is not more just than a centralized one. Decentralization of control has to come with fair participation.`
      },
      {
        title: 'Limits and Trade-offs of Going Local',
        content: `Decentralization is a means, not an end, and it has real limits.

**The local trap**: Planning scholars **Branden Born and Mark Purcell** warned against assuming that the local scale is inherently more sustainable, just or democratic. Local systems can be exclusive, exploitative or ecologically poor. Scale is a design choice, and its outcomes depend on who controls it and for what purpose.

**Distance is only one factor**: Studies of the environmental footprint of food have generally found that how food is produced often matters more than how far it travels. A local system is not automatically a lower-impact one.

**Local harvests can fail**: Trade between regions is one of the oldest buffers against local crop failure. A region that cuts its external links entirely may be more vulnerable to drought or pests, not less.

**Cost and access**: Small-scale food can cost more per unit. Without deliberate design, decentralized food systems can become a premium option for those who can afford it, which is the lifeboat problem in food form. The distribution and access lesson in this module addresses this directly.

**Labour and skills**: Distributed systems need more people with more skills. Where food-growing knowledge has faded, rebuilding it takes time.

The Exodological position is therefore not "local is good" but "no single point of failure, and fair control". Sometimes the best decentralization strategy keeps regional and global links while adding local capacity.`
      },
      {
        title: 'Decentralization as an Exit Strategy',
        content: `Seen through the response spectrum, food system decentralization usually takes the form of a **soft exodus**: building alternatives alongside the existing system and shifting the balance over time, rather than a sudden break.

In practice this means:

1. **Start from the dependency map.** Identify which food dependencies sit at the narrow waist, and which are critical for the most vulnerable members of your community.

2. **Add nodes and paths before removing old ones.** A new cooperative, food hub or community kitchen adds capacity without forcing anyone to abandon the supermarket. Exit friction falls as alternatives prove themselves.

3. **Prioritize distributed capacity for critical functions.** Staple foods, storage and processing often deserve attention before specialty products.

4. **Keep bridges open.** Hybrid arrangements, such as farmers selling to both cooperatives and conventional buyers, protect livelihoods during the transition.

5. **Remember those who stay.** Residual duty applies: if new systems draw customers away from shops that low-income neighbours depend on, the transition may leave some people worse off. Designing on-ramps and keeping public food assistance strong are part of exiting well.

In multi-level terms, decentralized food initiatives often begin as **niches**, protected spaces where alternatives can develop, which may over time influence the dominant regime. The next lessons turn these principles into concrete designs.`
      }
    ],

    keyTakeaways: [
      'Centralized food systems brought real efficiency gains but concentrated critical nodes and control at a narrow waist',
      'Decentralization means no single node or route is indispensable; it is not isolation or self-sufficiency',
      'Diversity, redundancy, modularity, appropriate scale and maintainability guide distributed food system design',
      'Decentralizing control, from food security toward food sovereignty, requires fair participation as well as new structures',
      'Local is not automatically better; the aim is resilience and fair control, often through a soft exodus that keeps useful links'
    ],

    references: [
      {
        author: 'Patel, Raj',
        title: 'Stuffed and Starved: Markets, Power and the Hidden Battle for the World Food System',
        year: 2007,
        publisher: 'Portobello Books',
        relevance: 'Describes the concentration of power in the global food system, the narrow waist that decentralization seeks to bypass.',
        url: 'https://openlibrary.org/works/OL9896495W'
      },
      {
        author: 'Steel, Carolyn',
        title: 'Hungry City: How Food Shapes Our Lives',
        year: 2008,
        publisher: 'Chatto & Windus',
        relevance: 'Shows how feeding cities has shaped urban life and how modern supply chains have made food dependence invisible.',
        url: 'https://openlibrary.org/works/OL13601921W'
      },
      {
        author: 'Schumacher, E. F.',
        title: 'Small Is Beautiful: A Study of Economics As If People Mattered',
        year: 1973,
        publisher: 'Blond & Briggs',
        relevance: 'Classic argument for human-scale, appropriate technology and organisation, underpinning the principle of appropriate scale.',
        url: 'https://en.wikipedia.org/wiki/Small_Is_Beautiful'
      }
    ]
  },
  learningObjectives: [
    'Explain the benefits and costs of centralized food systems using the concept of critical nodes',
    'Distinguish centralized, decentralized and distributed system structures and apply them to a regional food system',
    'Apply diversity, redundancy, modularity, appropriate scale and maintainability to food system design',
    'Differentiate decentralization of logistics from decentralization of control, with reference to food sovereignty',
    'Evaluate the limits of local food strategies, including the local trap and access concerns'
  ],
  keyTerms: [
    { term: 'Distributed System', definition: 'A network with many nodes connected by many paths, so that no single node or route is indispensable.' },
    { term: 'Concentration Risk', definition: 'Vulnerability that arises when many functions or people depend on a single source, facility or route.' },
    { term: 'Appropriate Scale', definition: 'Matching each function to the smallest scale at which it works well and can be maintained and governed by those who rely on it.' },
    { term: 'Food Sovereignty', definition: 'The right of peoples to define their own food systems, including control over how food is produced, distributed and consumed.' },
    { term: 'Polycentric Governance', definition: 'A term associated with Vincent and Elinor Ostrom for governance with many overlapping centres of decision-making rather than a single authority.' },
    { term: 'Soft Exodus', definition: 'A gradual, partial exit that maintains some connections while building alternatives.' }
  ]
}

export default lesson
