import type { ExpandedExodologyLesson } from './types'

const lesson: ExpandedExodologyLesson = {
  id: 'a-m2-l1',
  title: 'Designing Parallel Systems',
  duration: '22 min',
  type: 'instruction',
  content: {
    introduction: `Exit without an alternative is just chaos. The practical work of Exodology is building parallel systems—alternatives that can meet needs currently served by systems you're exiting.

The previous lesson set out principles for decentralizing food systems. This lesson steps back to the general method that the rest of the Applied path uses again and again: how to design an alternative that works now, alongside the system it may one day replace. Food is the first application, and the same method returns in the water and energy modules. The glossary defines **parallel systems** as alternative infrastructure built alongside existing systems to enable future exit. The emphasis on "alongside" matters. A parallel system is not a protest or a plan on paper; it is something that already meets real needs for real people.

This lesson explains what parallel systems are, the design principles that make them durable, the idea of the minimum viable system, and how to plan the points where old and new systems meet. Throughout, the guiding question is the one Foundations asked of every exit: when should we leave, how do we leave well, and what comes after?`,

    sections: [
      {
        title: 'What Are Parallel Systems?',
        content: `Systems built alongside existing ones that can eventually replace them. The parallel system operates now, meeting real needs, while the old system continues. This allows gradual transition rather than sudden rupture.

Three features in this definition deserve attention.

**Built alongside.** A parallel system does not require the old system to fail first. It is built while the old system still works, which means people can try it, test it and improve it without betting their survival on it. This is the practical form of a **soft exodus**: a gradual, partial exit that maintains some connections while building alternatives.

**Operates now.** A parallel system is judged by what it delivers today, not by what it promises. A community garden that produces vegetables this summer is a parallel system; a design for a regional food network that has not yet fed anyone is not, however good the design.

**Can eventually replace.** Replacement is a possibility, not an obligation. Many parallel systems will only ever supply part of a need, and that can still raise **exit capability**, the structural capacity to leave a system when needed without catastrophic loss.

The alternative to gradual transition is a **hard exodus**: a complete, rapid departure, typically in response to crisis or failure. Hard exits happen when people are forced out of a system before anything else exists to meet their needs. Building parallel systems in advance is how communities avoid having to improvise under pressure, and it is the most direct answer to the warning in this lesson's first sentence.`
      },
      {
        title: 'Design Principles',
        content: `Start with function, not form. Community-owned solar isn't interesting because it's solar—it's interesting because it provides energy without fossil fuels. Design for resilience over optimization. Optimize for maintainability by the community that will use it.

Each of these three principles guards against a common failure.

**Function, not form.** Designers often fall in love with a technology or a model and then look for a place to apply it. Starting with function reverses the order. Ask first what need must be met (calories through winter, safe drinking water, heat in a cold snap), in what quantity and at what times. Only then compare the forms that could meet it. Several forms usually can, and the best choice depends on local conditions rather than on which option is most fashionable.

**Resilience over optimization.** Systems scientist Donella Meadows observed that systems tuned for maximum efficiency or productivity often lose resilience, the capacity to absorb shocks and keep functioning. Industrial supply chains illustrate the point: holding little inventory lowers costs in normal times but leaves no buffer when supply is interrupted. A parallel system meant to raise exit capability should accept some redundancy and spare capacity, such as several growers instead of one, stored reserves, and more than one way to perform each critical function.

**Maintainability by the community.** A system that only an outside contractor can repair recreates the dependence it was meant to reduce. Prefer equipment that can be repaired locally, documentation written for the people who will run the system, and skills spread across several people rather than held by one. If the person who built a system leaves and nobody else can keep it running, the community has simply exchanged one form of **structural dependence** for another.`
      },
      {
        title: 'The Minimum Viable System',
        content: `Like minimum viable products, start with the smallest system that actually functions. A CSA with 10 members is a minimum viable food system. One home with solar and batteries is a minimum viable energy system. Start small, learn, expand.

The term comes from product development. Entrepreneur Eric Ries popularized the "minimum viable product": the smallest version of a product that lets a team learn from real users. The Exodological version keeps the emphasis on learning but changes the test. The question is not whether customers will buy, but whether the system **actually functions**: does it reliably deliver the function it was designed for, at a small but real scale?

Starting small has several advantages:

- **Low cost of failure.** If a ten-member CSA struggles, the losses are modest and the lessons are cheap. If a large system fails, people who depended on it may be harmed.
- **Fast learning.** Small systems reveal practical problems (pests, scheduling, maintenance, conflict) quickly, while they can still be fixed.
- **Earned trust.** People join systems they have seen working. A visible, functioning small system is often the most persuasive argument for expansion.

Systems writer John Gall made a related observation that is often quoted: a complex system that works is usually found to have grown from a simple system that worked, while a complex system designed from scratch rarely works. Community supported agriculture itself followed this path. It grew from small consumer-farmer partnerships in Japan in the 1970s, often called teikei, and in the United States from a few farms in the mid-1980s, into a widely used model.

"Start small, learn, expand" also implies a discipline: expand only after the small system works, and expand by a step the community can absorb.`
      },
      {
        title: 'Integration Points',
        content: `Where will the parallel system connect to the existing one during transition? How will people move between systems? Design for graceful interoperability.

Integration points are the places where old and new systems meet. They deserve deliberate design because transitions are usually long, and for most of that time people will use both systems at once.

**Physical connections.** A home solar system may be connected to the grid so that it can export surplus and import shortfall; a rainwater system may be plumbed so that mains water tops up the tank in a dry month. Connections like these let a parallel system be smaller and cheaper than a fully independent one, at the cost of continuing some dependence.

**Economic and administrative connections.** A CSA may accept public food assistance benefits so that lower-income households can join; a cooperative may keep accounts in a form that banks and regulators accept. These connections often decide who can actually use the parallel system.

**Movement between systems.** People should be able to join the new system without losing access to the old one, and return if the new system fails them. A design that forces an all-or-nothing choice raises **exit friction** for exactly the people with the least margin for risk.

**Graceful interoperability** means that the two systems can work together without either one breaking the other, and that failure in the new system degrades service rather than ending it. In practice, the existing system is often the backup for the parallel system during its early years. Integration points therefore deserve the same care as the parallel system itself.`
      },
      {
        title: 'Implications for Exit',
        content: `Parallel systems change the meaning of exit. Without them, leaving a system means losing what it provides. With them, exit becomes a gradual transfer of reliance from one system to another, paced by evidence about what works.

Three implications follow for practice.

**When to shift reliance.** Move essential needs onto a parallel system only after it has proven itself through ordinary use and through at least some stress, such as a bad season, an equipment failure or a key volunteer leaving. Until then, keep the old system available.

**How to leave well.** Many parallel systems are built by people who have more time, money and skills than their neighbors. Designing for inclusion from the start (affordable entry, flexible participation, plain-language information) keeps a parallel system from becoming a private exit for the few.

**Duties to those who stay.** Shifting demand away from a shared system can weaken it for those who remain, for example when fewer customers share the fixed costs of a utility. The glossary calls the continuing obligation to them **residual duty**. Practitioners should notice these effects and, where possible, design parallel systems that also strengthen the wider community rather than drain it.`
      }
    ],

    keyTakeaways: [
      'Parallel systems operate alongside existing systems',
      'Design for function, resilience, and maintainability',
      'Start with minimum viable systems',
      'Plan integration with existing systems',
      'Shift reliance onto a parallel system only after it has proven itself, and keep a path back to the old system',
      'Design parallel systems to include those with the least margin for risk and to honor residual duty to those who stay'
    ],

    references: [
      {
        author: 'Meadows, Donella H.',
        title: 'Thinking in Systems: A Primer',
        year: 2008,
        publisher: 'Chelsea Green Publishing',
        relevance: 'Explains feedback, resilience and the trade-off between efficiency and resilience that underlies designing for resilience over optimization.',
        url: 'https://openlibrary.org/works/OL3737036W'
      },
      {
        author: 'Ries, Eric',
        title: 'The Lean Startup',
        year: 2011,
        publisher: 'Crown Business',
        relevance: 'Source of the minimum viable product idea that the minimum viable system adapts: build the smallest working version and learn from real use.',
        url: 'https://openlibrary.org/works/OL16086010W'
      },
      {
        author: 'Gall, John',
        title: 'Systemantics: How Systems Work and Especially How They Fail',
        year: 1977,
        publisher: 'Quadrangle/The New York Times Book Company',
        relevance: 'Classic, informal study of system failure, known for the observation that working complex systems grow from simple systems that worked.',
        url: 'https://openlibrary.org/works/OL5286182W'
      }
    ]
  },
  learningObjectives: [
    'Design parallel systems for common needs',
    'Apply minimum viable system thinking',
    'Plan integration and transition',
    'Judge when a parallel system is ready to carry essential needs'
  ],
  keyTerms: [
    { term: 'Parallel Systems', definition: 'Alternative infrastructure built alongside existing systems to enable future exit.' },
    { term: 'Minimum Viable System', definition: 'The smallest version of an alternative system that actually performs its function, used to learn before expanding.' },
    { term: 'Soft Exodus', definition: 'A gradual, partial exit that maintains some connections while building alternatives.' },
    { term: 'Hard Exodus', definition: 'A complete, rapid departure from a system, typically in response to crisis or failure.' },
    { term: 'Integration Point', definition: 'A place where a parallel system connects to the existing system, physically, economically or administratively, during transition.' },
    { term: 'Exit Capability', definition: 'The structural capacity of individuals or communities to leave a system when needed without catastrophic loss.' }
  ]
}

export default lesson
