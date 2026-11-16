import type { NewExodologyLesson } from './types'

const lesson: NewExodologyLesson = {
  id: 'a-m6-n2',
  title: 'Designing for Resilience',
  duration: '20 min',
  type: 'instruction',
  content: {
    introduction: `The previous lesson described how exit systems fail. This lesson asks how to design them so that failure, when it comes, is partial, visible and recoverable rather than sudden and total. Designing Parallel Systems already gave the instruction to design for resilience over optimization. Here that instruction becomes concrete design practice.

Resilience matters to Exodology for a specific reason. The whole discipline rests on the difference between managed exit and collapse. An alternative that cannot absorb a shock can collapse in miniature, pushing its members back into dependence in a hurry and with little choice about the terms. A resilient alternative bends instead: it loses some function, keeps what matters most, and gives people time to respond.

The lesson covers five design strategies drawn from engineering and resilience research: redundancy, diversity, graceful degradation, modularity and reserves. It then addresses the trade-offs these strategies involve and the justice questions they raise. Resilience Assessment Methods, later in the Applied path, shows how to test whether these designs actually work; this lesson concerns building them in from the start.`,

    sections: [
      {
        title: 'Resilience Versus Efficiency',
        content: `Most dominant systems are designed for efficiency: the lowest cost per unit of output under normal conditions. Efficiency is not a vice, but it has a characteristic weakness. An efficient system usually removes slack, meaning spare capacity, stored reserves, duplicate parts and extra people, because slack looks like waste when nothing is going wrong. Many of the failures studied in Foundations, from supply chain disruptions to grid cascades, are failures of systems with very little slack.

Resilience researchers such as Brian Walker and David Salt describe resilience as the capacity of a system to absorb disturbance and still keep its basic function and identity. They caution that optimizing a system for one set of conditions often reduces its resilience to others.

For an exit system, this produces an honest trade-off. Resilience costs something: money, space, time and attention. An alternative with no reserves and no backups will look cheaper on paper than one with them. The practitioner's job is to decide, explicitly and with the people affected, how much resilience is worth paying for in each function. Critical needs such as water, heat, food and medical care usually justify more slack than conveniences do.

The strategies that follow are ways of buying resilience. None is free, and none should be applied everywhere.`
      },
      {
        title: 'Redundancy and Reserves',
        content: `**Redundancy** means having more than one way to perform a critical function, so that the failure of one does not stop the function. It can take several forms:

- **Duplication**: two of the same thing, such as two water filters or two people trained to run the accounts
- **Backup**: a different means held ready, such as stored water alongside a rainwater system
- **Spare capacity**: a system sized above normal demand, so that it can carry extra load when another part fails

**Reserves** are stored stocks that let a system keep running while a flow is interrupted: stored food, water, fuel, money, spare parts, or simply time built into a schedule. Donella Meadows described how stocks act as buffers, allowing inflows and outflows to differ for a while without disaster. A reserve fund that covers three months of costs turns a funding gap from a crisis into a problem.

Where should redundancy go? Return to your dependency map. The **critical nodes** you identified, where no alternative path exists and failure cascades, are where redundancy pays most. Redundancy elsewhere may be a reasonable choice, but it is a lower priority.

Two cautions. First, redundancy only helps if the duplicates do not fail together; the independence testing covered in Designing Hybrid Arrangements applies here. Second, people are the most important place for redundancy. The key-person dependence described in the previous lesson is addressed by training, documentation and shared roles far more than by equipment.`
      },
      {
        title: 'Diversity',
        content: `Redundancy duplicates; **diversity** varies. A system that meets a need in several different ways is less likely to be defeated by a single shock, because different approaches tend to be vulnerable to different things.

Resilience ecologists distinguish two related ideas that are useful here. One is having several different elements that perform the same function. The other, sometimes called **response diversity**, is having elements that perform the same function but respond differently to the same disturbance. A garden with many crop varieties, some drought-tolerant and some frost-tolerant, will rarely lose everything in one bad season.

A widely documented historical warning is the Irish famine of the 1840s. Much of the rural population depended heavily on potatoes, largely of a narrow range of varieties, and potato blight destroyed crops across the country in successive years. Historians emphasise that the scale of death and emigration was also shaped by political and economic decisions, including land tenure and the response of the government of the day. The lesson for Exodology is double: low diversity created the biological vulnerability, and unjust institutions turned that vulnerability into catastrophe.

Diversity in exit systems can include:
- Several sources for critical inputs, rather than one supplier
- A mix of technologies, such as solar with a small amount of stored fuel
- Diverse skills spread across many members
- Diverse income streams, as discussed in Personal Economic Transition
- Diverse membership, which brings varied knowledge and perspectives to problems

Diversity has costs too: more things to learn, maintain and coordinate. The aim is enough diversity in critical functions, not variety for its own sake.`
      },
      {
        title: 'Graceful Degradation',
        content: `**Graceful degradation** is an engineering term for systems that keep providing reduced service when parts of them fail, rather than stopping entirely. A building whose lights fail but whose emergency lighting stays on degrades gracefully. A system that goes completely dark when one component fails does not.

For exit systems, graceful degradation is the small-scale version of the managed exit Exodology prefers to collapse. It can be designed in by deciding, in advance, what the system will do when it cannot do everything.

A practical method is to sort functions into **tiers**:

1. **Essential**: functions that must continue in any disruption, such as drinking water, warmth, medicine and care for dependent people
2. **Important**: functions that can be reduced for a period, such as full meals rather than basic meals, or regular meetings
3. **Deferrable**: functions that can pause entirely, such as expansion projects, events and non-urgent maintenance

When capacity drops, the system deliberately sheds the lower tiers first so that the essential tier can continue. A community energy cooperative might agree that in a shortage its stored power goes first to refrigerated medicine and communication, then to heating, then to everything else.

The key is that these choices are made before the crisis, through a fair process, and written down. Decisions about who and what gets protected are much harder and less just when made in a hurry by whoever happens to be present.`
      },
      {
        title: 'Modularity and Loose Coupling',
        content: `Charles Perrow, in his study of accidents in complex technologies, distinguished **tightly coupled** systems, where a change in one part rapidly affects others with little time to intervene, from **loosely coupled** systems, where parts have buffers and slack between them. He argued that tightly coupled, complex systems are especially prone to cascading failures. Foundations described such cascades in energy grids, where one failure redistributes load and causes others.

**Modularity** is a design response. A modular system is built from units that can work on their own, so that a failure in one does not spread to all. Examples include:

- Several household-scale water systems rather than one shared system with a single pump
- A food network of several small growing sites rather than one large farm
- A federation of small cooperatives that support each other rather than one large organization

Modularity creates natural firebreaks. It also makes systems easier to understand and repair, which supports the maintainability principle from Designing Parallel Systems.

The trade-off is real. Larger, integrated systems can be cheaper per unit and can support more specialised equipment. Community scale often enables solutions that individual households cannot afford, as the water alternatives lesson noted. A common compromise is a modular design with shared support: units that can operate independently in a disruption but share knowledge, spare parts and maintenance in normal times.`
      },
      {
        title: 'Resilience for Whom?',
        content: `Every resilience strategy involves choices about what to protect, and therefore about whom to protect. The Principle of Distributive Justice asks who gains and who loses; in resilience design, this becomes the question of whose needs are placed in the essential tier, whose skills are duplicated, and whose homes the backups actually reach.

Some practical commitments follow:

**Design around those most exposed.** People who depend on powered medical equipment, older people living alone, people with disabilities, children and households with little savings are often affected first and recover last. A resilient system plans for them by name, with their participation, rather than assuming average needs.

**Avoid resilience that shifts risk onto others.** A household or group that stockpiles scarce supplies during a shortage may increase its own resilience while reducing everyone else's. Resilience designed this way is the lifeboat problem in another form.

**Share the cost of slack fairly.** Reserves and redundancy cost money and time. Decide openly who pays for them and who benefits.

**Keep resilience in use.** Backups, skills and agreements that are never practised tend to fail when needed. Regular drills, rotating roles and keeping alternatives in occasional use are part of the design, not extras.

Resilience is ultimately a property of relationships as much as of equipment. Many documented disasters suggest that communities where people know and check on each other cope better. Designing for resilience therefore includes the slow work of building trust.`
      }
    ],

    keyTakeaways: [
      'Resilience trades some efficiency for the capacity to absorb shocks; decide openly how much slack each function deserves',
      'Redundancy and reserves belong first at critical nodes, and especially in people and skills',
      'Diversity, including diverse responses to the same disturbance, protects against single shocks defeating a whole system',
      'Graceful degradation, planned through essential, important and deferrable tiers, is managed exit at small scale',
      'Resilience design is a justice question: plan around those most exposed and avoid shifting risk onto others'
    ],

    references: [
      {
        author: 'Walker, Brian & Salt, David',
        title: 'Resilience Thinking: Sustaining Ecosystems and People in a Changing World',
        year: 2006,
        publisher: 'Island Press',
        relevance: 'Accessible account of resilience as the capacity to absorb disturbance, and of how optimization can reduce it.',
        url: 'https://openlibrary.org/works/OL18760646W'
      },
      {
        author: 'Perrow, Charles',
        title: 'Normal Accidents: Living with High-Risk Technologies',
        year: 1984,
        publisher: 'Basic Books',
        relevance: 'Source of the distinction between tight and loose coupling that underlies the case for modular, buffered design.',
        url: 'https://openlibrary.org/works/OL4468929W'
      },
      {
        author: 'Meadows, Donella H.',
        title: 'Thinking in Systems: A Primer',
        year: 2008,
        publisher: 'Chelsea Green Publishing',
        relevance: 'Explains stocks as buffers and resilience as arising from multiple feedback loops, grounding the use of reserves and redundancy.',
        url: 'https://openlibrary.org/works/OL3737036W'
      }
    ]
  },
  learningObjectives: [
    'Explain the trade-off between efficiency and resilience in the design of exit systems',
    'Apply redundancy, reserves and diversity to the critical nodes of a dependency map',
    'Design a tiered graceful degradation plan that separates essential, important and deferrable functions',
    'Compare modular and integrated designs in terms of cascading failure, cost and maintainability',
    'Evaluate a resilience design for its distributional effects on the most exposed members'
  ],
  keyTerms: [
    { term: 'Redundancy', definition: 'More than one way to perform a critical function, so that one failure does not stop the function.' },
    { term: 'Reserves', definition: 'Stored stocks of goods, money, parts or time that let a system keep running while a flow is interrupted.' },
    { term: 'Response Diversity', definition: 'A term from resilience ecology for elements that perform the same function but respond differently to the same disturbance.' },
    { term: 'Graceful Degradation', definition: 'An engineering term for a system that continues to provide reduced service when parts of it fail, instead of stopping entirely.' },
    { term: 'Loose Coupling', definition: 'A design in which parts have buffers and slack between them, so failures spread slowly or not at all.' }
  ]
}

export default lesson
