import type { NewExodologyLesson } from './types'

const lesson: NewExodologyLesson = {
  id: 'a-m1-n2',
  title: 'Prioritizing Exit Targets',
  duration: '20 min',
  type: 'instruction',
  content: {
    introduction: `A completed dependency map is usually sobering. It shows dozens of dependencies, many of them critical, several of them locked in, and far more than any household or community can address at once. Without a way to choose, people tend either to freeze or to start with whatever is most visible or most interesting. Neither approach reliably builds **exit capability**.

This lesson teaches how to decide which dependencies to address first, and why. It draws together tools you already have: criticality and critical nodes, exit friction, exit leverage points, the lock-in mechanisms identified in the previous lesson, and the exit window from Foundations. It adds ideas from resilience thinking and systems analysis, and it places ethical considerations, especially the question of who bears the risk, at the center of prioritization rather than at the end.

Prioritization is not a formula. It is a structured judgment that should be written down, explained, and revisited as conditions change. The following exercise in this module asks you to classify dependencies by criticality and friction; this lesson explains the reasoning behind that classification and what to do with it.`,

    sections: [
      {
        title: 'Why Prioritization Matters',
        content: `Exit efforts fail for predictable reasons when priorities are poorly chosen.

**Starting with the hardest problem**: A community that begins with its most critical, most locked-in dependency, such as full energy independence, often exhausts its money, time and goodwill before achieving anything. Early failure can produce the learned helplessness described in Foundations.

**Starting with the most visible problem**: Some dependencies attract attention because they are symbolic or fashionable. Others matter more but are less visible, such as the single water pump, the one person who knows how to repair the equipment, or a supply route with no alternative.

**Spreading too thin**: Addressing every dependency a little leaves none of them meaningfully reduced. Partial effort across everything can produce drift rather than deliberate exit.

**Ignoring timing**: Some exits are possible only within an exit window. A dependency that can be addressed cheaply now may become much harder later as lock-in deepens or alternatives disappear.

Good prioritization concentrates limited resources where they increase exit capability the most, in an order that builds confidence and capacity for the harder work that follows.`
      },
      {
        title: 'Core Criteria: Criticality, Friction and Leverage',
        content: `Three criteria from dependency mapping form the backbone of prioritization.

**Criticality**: How serious would failure of this dependency be? A dependency that supports health, shelter, water or food for vulnerable people is more critical than one supporting convenience. Critical nodes, where failure would cascade to many functions, deserve particular attention.

**Exit friction**: How hard is the dependency to replace? The lock-in mechanisms from the previous lesson explain the score: a dependency held by a single contract is lower friction than one held by infrastructure, law and lost skills.

**Leverage**: Does addressing this dependency reduce several others at once? An exit leverage point might be a shared skill, a piece of community infrastructure, or an alternative that serves several functions.

Combining criticality and friction gives the four categories used in this module's classification exercise:

- **Critical and low friction**: urgent and addressable; usually the first priority
- **Non-critical and low friction**: easy wins that build skills, trust and momentum
- **Critical and high friction**: the most important long-term work; begin preparation early, but rarely as the first project
- **Non-critical and high friction**: defer until resources and capacity allow

Leverage then acts as a tie-breaker and sometimes as an override: a high-friction dependency may still deserve early effort if addressing it unlocks many others.`
      },
      {
        title: 'Timing, Reversibility and Sequence',
        content: `Criticality, friction and leverage describe the dependency. Three further questions describe the moment.

**Is the window closing?** Some dependencies become harder to exit over time. Knowledge held by older community members can be lost; land available today may be developed; a supplier relationship may end. Lock-in that is still forming is easier to prevent than lock-in that has set. Time-sensitive targets may justify moving up the list.

**Is the step reversible?** The **principle of precaution** asks practitioners to prefer reversible interventions when outcomes are uncertain. Early priorities should usually be steps that can be paused or undone if they do not work, such as building a parallel system alongside the existing one, rather than steps that burn bridges. Transition path design reinforces this: never leave a system before the alternative is proven.

**What does this step unlock?** Some actions are enablers. Building a transition team, gaining a key skill, securing a shared space or establishing trust between households makes later exits possible. Sequencing by dependency between steps, as in transition path design, often reveals that the right first priority is not a dependency at all but the capacity to address several of them.

These questions help explain why the classification categories are a starting point rather than a verdict.`
      },
      {
        title: 'Coupling and Buffers',
        content: `Sociologist **Charles Perrow**, studying accidents in high-risk technologies, distinguished systems that are **tightly coupled**, where a failure spreads quickly with little time or slack to respond, from systems that are **loosely coupled**, where there is time and flexibility to absorb problems. Resilience researchers such as **Brian Walker and David Salt** similarly emphasize that systems can cross thresholds into different states, and that keeping a safe distance from those thresholds matters.

Applied to exit planning, these ideas suggest a distinct priority: before replacing a tightly coupled dependency, add **buffers** that loosen the coupling. Examples include stored water, food reserves, backup power for medical equipment, or a second supplier for a critical input. A buffer does not exit the dependency, but it buys time, which turns a potential collapse into a manageable disruption.

This is why many sensible exit plans begin with modest reserves and redundancy rather than ambitious replacement projects. Buffers are usually low friction, reversible, and protective of the most vulnerable. They also create the breathing room in which a managed exit, rather than a hard exodus forced by crisis, becomes possible.

Buffers have limits. They can become a substitute for genuine alternatives, and a community that only stores supplies has not built exit capability; it has postponed the moment of dependence.`
      },
      {
        title: 'Who Bears the Risk? Prioritization as an Ethical Act',
        content: `Choosing priorities is also choosing whose needs come first. The **principle of distributive justice** asks practitioners to analyze who gains and who loses, and the ethics guidelines advise that when trade-offs are unavoidable, priority goes to protecting those with less power.

Several questions bring this into prioritization:

1. **Whose dependency is it?** A household dependency and a community dependency may look similar, but if elderly residents, disabled people or low-income households depend most heavily on a critical node, its priority should rise.

2. **Who can exit without help?** Dependencies that wealthier members can already escape on their own may be lower priority for collective effort than those that only collective action can address. Otherwise the plan risks the lifeboat problem.

3. **Who bears the transition burden?** Some exits shift costs onto others, for example by reducing the customer base that keeps a public service viable for those who remain. Residual duty asks you to consider these effects before acting.

4. **Who decided?** The **principle of procedural justice** requires that affected people participate in setting priorities. A list drawn up by a few organizers, however well informed, may miss dependencies that matter most to others.

Prioritization that ignores these questions may be efficient, but it is not ethical exit.`
      },
      {
        title: 'Writing and Revisiting the Priority List',
        content: `A useful priority list is short, explained and dated. A practical approach:

1. **Shortlist** the dependencies that are critical, low friction, high leverage, time-sensitive or tightly coupled.

2. **Explain each choice** in one or two sentences, naming the criteria and the lock-in mechanism involved. This makes the reasoning open to challenge and fulfils the commitment to transparency.

3. **Choose a small number of active targets**, often one or two buffers, one or two easy wins and one enabling step, plus early preparation for one critical, high-friction dependency.

4. **Name what is deliberately deferred**, and why. Deferral is a decision, not neglect.

5. **Set review points.** Conditions change: a new alternative appears, a price rises, an exit window opens or closes. The principle of **adaptive management** asks you to learn while doing and adjust.

Common mistakes to avoid include treating scores as precise when they are estimates, prioritizing only what the most active members care about, forgetting soft dependencies such as knowledge and relationships, and never revisiting the list once written. The goal is not a perfect ranking, but a defensible, shared order of work that steadily increases exit capability for everyone involved.`
      }
    ],

    keyTakeaways: [
      'Poor prioritization, such as starting with the hardest or most visible problem, is a common cause of failed exits',
      'Criticality, exit friction and leverage form the core criteria; timing, reversibility and sequence refine them',
      'Buffers that loosen tightly coupled dependencies are often a wise first priority, though not a substitute for alternatives',
      'Prioritization is an ethical act: give weight to the most vulnerable, avoid the lifeboat problem and decide inclusively',
      'A good priority list is short, explained, includes deliberate deferrals and is revisited as conditions change'
    ],

    references: [
      {
        author: 'Perrow, Charles',
        title: 'Normal Accidents: Living with High-Risk Technologies',
        year: 1984,
        publisher: 'Basic Books',
        relevance: 'Introduces tight and loose coupling, which helps identify dependencies where failures spread fastest and buffers matter most.',
        url: 'https://openlibrary.org/works/OL4468929W'
      },
      {
        author: 'Walker, Brian & Salt, David',
        title: 'Resilience Thinking: Sustaining Ecosystems and People in a Changing World',
        year: 2006,
        publisher: 'Island Press',
        relevance: 'Explains thresholds and resilience in social-ecological systems, informing which dependencies to protect first.',
        url: 'https://openlibrary.org/works/OL21006148W'
      },
      {
        author: 'Meadows, Donella H.',
        title: 'Thinking in Systems: A Primer',
        year: 2008,
        publisher: 'Chelsea Green Publishing',
        relevance: 'Discusses leverage points and buffers in systems, supporting the use of leverage and stocks as prioritization criteria.',
        url: 'https://openlibrary.org/works/OL3737036W'
      }
    ]
  },
  learningObjectives: [
    'Explain common ways that poor prioritization undermines exit efforts',
    'Apply criticality, exit friction and leverage to rank dependencies on a map',
    'Evaluate how timing, reversibility and sequencing modify an initial ranking',
    'Identify tightly coupled dependencies where buffers should come first',
    'Construct a short, justified and reviewable priority list that addresses distributive and procedural justice'
  ],
  keyTerms: [
    { term: 'Critical Node', definition: 'A point in a dependency chain whose failure would cause system breakdown.' },
    { term: 'Exit Leverage Point', definition: 'A dependency that can be addressed to increase exit capability significantly.' },
    { term: 'Tight Coupling', definition: 'A term from Charles Perrow\'s study of high-risk technologies: a condition in which failures spread quickly with little slack or time to respond.' },
    { term: 'Buffer', definition: 'A reserve or redundancy, such as stored water or a second supplier, that buys time when a dependency fails without removing the dependency itself.' },
    { term: 'Exit Window', definition: 'The period when exit is possible before collapse becomes inevitable.' }
  ]
}

export default lesson
