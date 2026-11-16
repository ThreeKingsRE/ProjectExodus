import type { NewExodologyLesson } from './types'

const lesson: NewExodologyLesson = {
  id: 's-m5-n3',
  title: 'Coordination at Scale',
  duration: '20 min',
  type: 'instruction',
  content: {
    introduction: `When a single household exits a system, coordination is a private matter. When thousands of households, firms, municipalities and public agencies move at once, as in a regional energy transition or a national shift away from a dominant food or transport system, coordination becomes one of the central problems of the whole exit. The Scaling Exodology lesson noted that the coordination burden grows rapidly with scale. This lesson asks how that burden can be carried.

The tempting answer is a single authority that plans and directs every move. In practice no one actor has the knowledge, legitimacy or capacity to direct a mass exit in detail, and attempts to do so often produce the very failures they were meant to prevent. Yet leaving coordination entirely to chance invites bottlenecks, duplication, free riding and an exit that serves the best organized while leaving others behind.

This lesson examines the space between those extremes: how many actors can align their actions through shared rules, common standards, focal points, transparent information and nested forms of governance. It draws on political science, economics and commons research rather than on any single Exodological model, and it treats the limits and power dynamics of distributed coordination as seriously as its strengths.`,

    sections: [
      {
        title: 'Why Central Control Falls Short',
        content: `Large exits involve an enormous amount of local, specific knowledge: which buildings can take heat pumps, which farmers are ready to change practices, which neighborhoods depend on a bus route that is about to change. Economists have long argued that much of this knowledge is dispersed among many people and cannot be gathered into one plan without losing what makes it useful. The political scientist James C. Scott, in Seeing Like a State, documented how ambitious state schemes failed when planners replaced practical local knowledge with simplified models that looked tidy from above.

For Exodology this is a warning, not a slogan. Central actors still do things nobody else can: they set legal frameworks, raise and distribute public funds, protect rights, guarantee essential services and hold the system accountable. The problem is not central action as such but **central control of detail** in a system too complex to be seen whole.

The Principle of Procedural Justice points in the same direction. It asks practitioners to respect diverse forms of knowledge, including experiential and indigenous knowledge, and to design processes that allow ongoing input and course correction. A mass exit run entirely from the top struggles to meet that standard, because those affected become recipients of the plan rather than participants in it.

The practical question is therefore which decisions need to be made centrally, which are better made close to the people affected, and how the two levels stay connected.`
      },
      {
        title: 'Polycentric Coordination',
        content: `Elinor Ostrom and colleagues used the term **polycentric governance** for arrangements in which many decision centers, each with some independent authority, operate under an overarching set of shared rules and adjust to one another. Ostrom's research on commons, introduced in the Applied path's lesson on commons governance, found that communities often manage shared resources well when rules fit local conditions, users take part in making them, and smaller units are nested within larger ones.

Applied to a mass exit, polycentric coordination might look like this:

- **Local units** (households, cooperatives, neighborhood groups, municipalities) decide how to exit in their own context, using the dependency mapping and transition path design skills of the Applied path.
- **Intermediate bodies** (regional networks, associations of cooperatives, sector councils) share learning, pool scarce resources such as trained installers, and spot bottlenecks that no single local unit can see.
- **Overarching institutions** set the minimum rules that everyone must follow, fund what local units cannot, and protect those who lack exit capability.

The strengths of this arrangement are redundancy, experimentation and local fit: if one unit makes a mistake, others can learn from it without the whole transition failing. Its weaknesses are slower agreement, uneven capacity between units, and the risk that responsibilities fall between levels. Polycentric coordination is not a free lunch; it is a deliberate design that has to be maintained.`
      },
      {
        title: 'Shared Rules, Standards and Focal Points',
        content: `Many actors can coordinate without talking to each other if they share a few clear reference points. The economist Thomas Schelling showed that people facing a coordination problem often converge on a **focal point**: an option that stands out as the obvious one, such as a round number, a public date or an established convention. Transitions can create focal points deliberately: a public phase-out date, a common technical standard, or a widely announced milestone gives thousands of actors something to plan around.

**Standards** play a similar role. When independent producers and users agree on how components connect, they can act separately and still build a system that works together. The internet is a widely documented case: its core protocols were developed largely through open, voluntary processes such as those of the Internet Engineering Task Force, and countless organizations adopted them without a central owner directing each step.

Some transitions, however, cannot be gradual. When Sweden switched from driving on the left to driving on the right in 1967, the change had to happen for everyone at the same moment, so a single date, extensive public preparation and temporary restrictions on traffic were essential. The lesson for Exodology is to ask which parts of an exit require **synchronized cutover** and which can proceed through **voluntary, staggered adoption**. Most mass exits contain both, and treating one as the other is a common source of failure.`
      },
      {
        title: 'Collective Action and the First-Mover Problem',
        content: `Coordination is not only a matter of information. Even when everyone knows what to do, each actor may wait for others to move first. Mancur Olson's classic analysis of collective action argued that in large groups individuals often have weak incentives to contribute to shared goals, because the benefits are spread widely while the costs fall on whoever acts. Ostrom's later work showed that communities can overcome this problem under the right conditions, which is one reason her findings matter so much to Exodology.

In a mass exit the problem often appears as a **first-mover penalty**. The first households to leave a system pay the highest costs for immature alternatives; the first municipality to change suppliers carries the risk alone; the first cooperative to build a parallel system finds no network to join. If everyone waits, the exit window may close and the response spectrum shifts toward collapse.

Practical responses include:

1. **Conditional commitments**, in which actors pledge to move once a stated number of others have also committed, so no one is exposed alone.
2. **Anchor actors**, such as public institutions or large cooperatives, who move early because they can absorb the risk and whose move signals viability to others.
3. **Shared early-mover support**, so that the extra costs of going first are spread rather than borne by those who happen to act.
4. **Visible progress**, which turns individual decisions into a collective story that others can join.

None of these tools works if people do not trust each other or the process, which is why legitimacy is a coordination resource and not only an ethical concern.`
      },
      {
        title: 'Information, Feedback and Bottlenecks',
        content: `Distributed actors can only adjust to one another if they can see what is happening. Coordination at scale therefore depends on **shared information**: who has moved, where alternatives are working, where queues are forming, and which groups are falling behind. The core principle of adaptive management, learning while doing, depends on this feedback being timely and honest.

Mass transitions tend to jam at **bottlenecks**: a shortage of skilled workers, a single supplier of critical components, a permitting office that cannot keep up, or a grid connection queue. Bottlenecks are rarely visible from inside any one local unit, because each sees only its own delay. Intermediate bodies and open data make them visible early enough to respond, for example by training more workers, pooling orders, or staging demand so that everyone does not try to move in the same month. The Mass Transition Simulation at the end of this module lets you explore how such bottlenecks form and spread.

Two cautions apply. First, information systems can become instruments of control or surveillance; the data collected should be the minimum needed and governed transparently. Second, metrics shape behavior. If coordination bodies track only the number of exits completed, they may neglect quality, safety and the people who have not yet been reached. Good feedback tracks who is being left behind as carefully as how fast the transition is moving.`
      },
      {
        title: 'Power and Justice in Distributed Coordination',
        content: `Distributed coordination is not automatically fair. Actors with money, time, professional networks and legal expertise coordinate easily; people with fewer resources often cannot attend the meetings, read the standards or carry the risk of moving early. Without attention, a decentralized exit can reproduce the lifeboat problem at scale: the well-resourced leave smoothly while others are left in a weakening system.

Several questions help keep coordination aligned with the Principle of Distributive Justice and the Charter's commitment to centering marginalized communities:

- **Who sets the shared rules and standards?** Standards embed choices about cost, compatibility and access.
- **Who is represented in intermediate bodies?** Networks of cooperatives and associations can become exclusive clubs.
- **Who carries first-mover costs?** Support for early movers should not flow only to those who need it least.
- **Who coordinates on behalf of those who stay?** Residual duty at scale includes keeping the remaining system viable and creating on-ramps for those who cannot yet leave.

There is also an honest tension here. Centralized coordination can sometimes protect the vulnerable more reliably than a patchwork of local initiatives, and local control can sometimes entrench local power. The strategic exodologist does not choose a side in advance. The task is to design arrangements in which central and distributed coordination check and complement each other, and to keep asking who gains and who loses as the arrangements evolve.`
      }
    ],

    keyTakeaways: [
      'No single actor has the knowledge or legitimacy to direct a mass exit in detail, but central institutions remain essential for rules, funding and protection',
      'Polycentric coordination combines local decision-making, intermediate networks and overarching rules, trading speed for redundancy and local fit',
      'Focal points and shared standards let many actors align without constant negotiation; some parts of an exit still require synchronized cutover',
      'First-mover penalties and bottlenecks can stall mass exits; conditional commitments, anchor actors and shared information help overcome them',
      'Distributed coordination must be designed for justice, or it will favor the best-resourced and leave others in a weakening system'
    ],

    references: [
      {
        author: 'Scott, James C.',
        title: 'Seeing Like a State: How Certain Schemes to Improve the Human Condition Have Failed',
        year: 1998,
        publisher: 'Yale University Press',
        relevance: 'Documents how centrally planned schemes failed when they ignored practical local knowledge, a key caution for coordinating mass transitions.',
        url: 'https://openlibrary.org/works/OL26241985W'
      },
      {
        author: 'Schelling, Thomas C.',
        title: 'The Strategy of Conflict',
        year: 1960,
        publisher: 'Harvard University Press',
        relevance: 'Introduces focal points, explaining how people coordinate on shared expectations without direct communication.',
        url: 'https://openlibrary.org/works/OL2259845W'
      },
      {
        author: 'Olson, Mancur',
        title: 'The Logic of Collective Action: Public Goods and the Theory of Groups',
        year: 1965,
        publisher: 'Harvard University Press',
        relevance: 'Classic analysis of why large groups struggle to act together, underpinning the first-mover and free-riding problems in mass exits.',
        url: 'https://openlibrary.org/works/OL108561W'
      }
    ]
  },
  learningObjectives: [
    'Explain why central control of detail tends to fail in large transitions while central institutions remain necessary',
    'Describe how polycentric arrangements distribute coordination across local, intermediate and overarching levels',
    'Distinguish parts of an exit that require synchronized cutover from those suited to staggered voluntary adoption',
    'Identify first-mover penalties and bottlenecks in a mass exit and propose responses to them',
    'Evaluate a coordination arrangement for who it includes, who carries its costs and who it leaves behind'
  ],
  keyTerms: [
    { term: 'Polycentric Governance', definition: 'An arrangement, described by Elinor Ostrom and colleagues, in which many semi-independent decision centers operate within shared overarching rules and adjust to one another.' },
    { term: 'Focal Point', definition: 'An option that many people expect others to choose, allowing coordination without direct communication; a concept introduced by Thomas Schelling.' },
    { term: 'Collective Action Problem', definition: 'A situation in which individuals have weak incentives to contribute to a shared goal because benefits are widely spread while costs fall on those who act.' },
    { term: 'First-Mover Penalty', definition: 'The extra cost and risk carried by those who exit a system before alternatives and support networks have matured.' },
    { term: 'Synchronized Cutover', definition: 'A change that must happen for all participants at the same moment, as opposed to staggered, voluntary adoption.' }
  ]
}

export default lesson
