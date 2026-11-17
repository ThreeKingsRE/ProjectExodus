import type { ExpandedExodologyLesson } from './types'

const lesson: ExpandedExodologyLesson = {
  id: 'a-m3-l1',
  title: 'Transition Path Design',
  duration: '22 min',
  type: 'instruction',
  content: {
    introduction: `The transition itself—moving from current systems to alternatives—is often the most challenging part. This lesson teaches transition path design.

The previous lessons in this module showed that most exits are partial, that hybrid arrangements need deliberate design, and that living with dual dependencies has real costs. Those lessons describe the condition of being between systems. This lesson turns to the route: how to plan the sequence of moves that takes a household, group or community from where it is now to where it wants to be, without being stranded halfway.

A transition path is not a promise that the destination will be reached on schedule. Exodology's principle of non-linearity reminds us that change is rarely smooth, and the principle of adaptive management asks us to learn while doing. A good path therefore does two jobs at once: it makes progress as efficient as possible, and it makes every point along the way survivable if progress stops. The four sections below follow that logic, from mapping the gap, to ordering the steps, to timing resources, to designing places where the transition can safely pause.`,

    sections: [
      {
        title: 'Mapping the Gap',
        content: `Current state → desired state. What's the gap? Resources needed, skills to develop, infrastructure to build, relationships to form. Map the gap comprehensively.

A gap map starts with two honest descriptions. The **current state** describes how a function is actually met today: where water, food, energy, income or care comes from, who controls it, and what it costs. The **desired state** describes how the same function should be met after the transition, in equally concrete terms. Vague destinations ("more self-reliant") produce vague paths; a specific destination ("half of household vegetables from a shared garden, with a winter store") can be planned toward.

The gap is then broken into the four categories the original names, because each behaves differently:

- **Resources needed**: money, land, equipment and materials. These can often be estimated in advance and saved for.
- **Skills to develop**: these take time that money cannot shorten. Learning to maintain a solar installation or keep accurate cooperative accounts is measured in seasons, not days.
- **Infrastructure to build**: physical systems such as storage tanks, growing beds or shared workshops, which usually depend on the resources and skills above.
- **Relationships to form**: suppliers, neighbors, mentors, co-members and institutions whose cooperation the alternative will rely on. These are the slowest to build and the easiest to forget in a plan.

"Comprehensively" matters because the items left off the map are the ones that stall transitions later. The earlier lessons on dependency mapping apply here: an alternative often has hidden dependencies of its own, such as a single supplier of spare parts or one person who knows how the system works. A useful test is to ask, for each item on the map, "what would we need in order to have this?" and keep asking until the answers are things that can be acted on directly. The map should also note who in the household or community carries each part of the gap, since a plan that quietly assigns most of the new work to one person is not yet a fair plan.`
      },
      {
        title: 'Sequencing',
        content: `What must happen first? Dependencies between steps. Critical path analysis. Some steps unlock others; identify these enablers.

Once the gap is mapped, its items become steps, and the steps have an order. A **dependency** exists when one step cannot start, or cannot finish, until another is done: a rainwater tank cannot be filled until gutters and a first-flush diverter are installed, and a buying cooperative cannot place bulk orders until it has members, a bank account and agreed rules.

**Critical path analysis** is a planning technique from project management, developed in the late 1950s for large engineering projects. It lists each step with its expected duration and its dependencies, then finds the longest chain of dependent steps from start to finish. That chain, the critical path, sets the minimum time the whole transition can take. Any delay on the critical path delays everything; steps off the critical path have some slack and can move without changing the finish date. For a household or community, the value of the method is less in exact calculation than in the question it forces: which steps actually control our timeline?

**Enablers** are steps that unlock several others. Typical enablers in exit work include:

- A basic skill that many later tasks depend on, such as bookkeeping or basic plumbing.
- A legal or organizational form that allows a group to hold money, sign contracts or own property.
- A trusted relationship with a supplier, landowner or local institution.
- A small financial reserve that lets later steps be taken without new debt.

Because enablers multiply progress, they generally belong early in the sequence, even when they are less visible than the "real" infrastructure. A practical rule is to sequence first for dependencies, then for learning: where two orders are possible, prefer the one that tests the riskiest assumption soonest, so that the path can be corrected before much has been committed.`
      },
      {
        title: 'Resource Staging',
        content: `When will resources be needed? Financial planning for transition costs. Skill development timing. Material acquisition sequence.

Resource staging connects the sequence to the calendar. Every step on the path draws on resources at a particular time, and the question is whether those resources will be ready when they are needed, not merely whether they exist in total.

**Financial planning for transition costs.** The previous lesson on dual dependencies showed that transitions often involve paying for two systems at once. A staged financial plan shows when those overlapping costs peak and makes sure reserves are largest at that point. It also distinguishes one-time costs (equipment, fees, training) from recurring costs (maintenance, membership, replacement parts), since an alternative that is affordable to build but not to run will fail later. The lesson on personal economic transition later in this module develops the household side of this planning.

**Skill development timing.** Skills should be learned slightly before they are needed, and practiced while the existing system is still available as a backup. Learning to preserve food during a harvest glut, with a grocery store still nearby, is very different from learning it when the store has closed. Skills that take long to acquire belong near the start of the plan even if they are used late.

**Material acquisition sequence.** Materials are best acquired in the order they will be used, with attention to lead times, seasonal prices and storage. Buying everything at once ties up money, exposes materials to damage or theft, and locks in choices before earlier steps have shown whether the design works. Buying too late risks delays on the critical path.

The ethical side of staging is fairness in who carries the cost at each stage. In a group transition, members with savings can often contribute early while others can contribute only later or in labor. Staging contributions so that people with fewer resources are not excluded from the early, decision-shaping stages is part of designing a just path.`
      },
      {
        title: 'Fallback Points',
        content: `What if transition stalls? Identify stable intermediate states. Design off-ramps where you can pause. Never burn bridges before alternatives are proven.

Transitions stall for many reasons: money runs short, a key person leaves, a season fails, a regulation changes or the alternative simply does not work as expected. A path designed only for success has no answer to these events. A path designed with fallback points does.

A **stable intermediate state** is a point on the path where the household or community could remain for some time without loss: essential needs are met, costs are sustainable and nothing is decaying while progress waits. In the language of this module, it is usually a deliberate partial exit or a well-designed hybrid. A family that has installed rooftop solar while staying connected to the grid, or a food network that supplies part of its members' needs while they still shop elsewhere, has reached such a state. Good paths are built as a series of these states joined by short, manageable moves, rather than one long leap.

An **off-ramp** is a designed way to pause or step back. It answers in advance: if we stop here, what do we keep running, what do we put into storage, what do we tell members, and who decides when to resume? The lessons on re-entry planning in the next module develop the case where stepping back becomes returning.

"Never burn bridges before alternatives are proven" is the most important line in this lesson. Ending a utility connection, a job, a lease or a supplier relationship is often hard or costly to reverse. Such steps should come only after the alternative has worked through a realistic test, ideally including a difficult season or a period of stress. Proven means demonstrated in practice, not promised on paper.

This rule also protects others. Burning a bridge can close a door for neighbors and family who depend on the same relationships, and leaving abruptly can raise costs for those who remain in the shared system. Exodology's idea of residual duty, the continuing obligations we owe to those who stay, applies at every off-ramp: leaving step by step gives others time to adjust.`
      },
      {
        title: 'Putting the Path Together',
        content: `The four parts of transition path design work as one tool. The gap map says what must change; the sequence says in what order; resource staging says when each resource must be ready; and fallback points say where the path can safely pause. A path is complete when each step on it has a known dependency, a resource plan and a nearby stable state to fall back to.

A short hypothetical shows how this fits together. A group of twelve households wants to move most of its vegetable supply from supermarkets to a shared garden over three years. Its gap map lists land access, tools, growing and storage skills, a watering system and an agreed way to share work and harvest. Its critical path runs through securing land, because nothing else can be built without it, so a land agreement and the group's simple governance rules are the first enablers. Money for tools and the watering system is staged to arrive just before the first full season. Growing skills are practiced in a small trial bed in year one, while everyone still shops normally. The first stable intermediate state is "the garden supplies summer salads and herbs"; the group stays there until it has come through one difficult season before planning winter storage. No household cancels any existing arrangement until the garden has met its target for a full year.

The interactive lesson that follows, on transition timeline development, asks you to apply these ideas to your own exit: defining the end state, listing and sequencing milestones, identifying the critical path, and adding buffer and fallbacks.`
      }
    ],

    keyTakeaways: [
      'Map the gap between current and desired states',
      'Sequence steps based on dependencies',
      'Stage resources for when they are needed',
      'Design fallback points for stalled transitions',
      'Treat steps that are hard to reverse as the last steps, taken only once the alternative is proven in practice'
    ],

    references: [
      {
        author: 'Herminia Ibarra',
        title: 'Working Identity: Unconventional Strategies for Reinventing Your Career',
        year: 2003,
        publisher: 'Harvard Business School Press',
        relevance: 'Studies people changing careers and shows that successful transitions usually proceed through small experiments and intermediate steps rather than a single planned leap.',
        url: 'https://openlibrary.org/works/OL8927744W'
      },
      {
        author: 'Rob Hopkins',
        title: 'The Transition Handbook: From Oil Dependency to Local Resilience',
        year: 2008,
        publisher: 'Green Books',
        relevance: 'Describes how community groups plan staged transitions away from dependence on oil, including the practice of drafting step-by-step plans for reducing that dependence.',
        url: 'https://openlibrary.org/works/OL12011785W'
      },
      {
        author: 'Donella H. Meadows',
        title: 'Thinking in Systems: A Primer',
        year: 2008,
        publisher: 'Chelsea Green Publishing',
        relevance: 'Explains stocks, flows, delays and feedback, which help in seeing why transition steps depend on one another and why some resources must be built up long before they are used.',
        url: 'https://openlibrary.org/works/OL3737036W'
      }
    ]
  },

  learningObjectives: [
    'Map transition gaps',
    'Sequence transition steps',
    'Stage resources appropriately',
    'Design fallback positions',
    'Identify stable intermediate states and off-ramps for a specific exit'
  ],

  keyTerms: [
    { term: 'Critical Path', definition: 'From project management: the longest chain of dependent steps in a plan, which sets the minimum time the whole plan can take.' },
    { term: 'Enabler', definition: 'A step that unlocks several later steps, such as a core skill, a legal form or a trusted relationship.' },
    { term: 'Stable Intermediate State', definition: 'A point in a transition that can be held for some time if progress stalls; a fallback point.' },
    { term: 'Off-ramp', definition: 'A designed way to pause or step back from a transition without losing what has been built.' },
    { term: 'Soft Exodus', definition: 'A gradual, partial exit that maintains some connections while building alternatives.' },
    { term: 'Residual Duty', definition: 'Continuing ethical obligations to those who remain in systems we have left.' }
  ]
}

export default lesson
