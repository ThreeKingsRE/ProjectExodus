import type { NewExodologyLesson } from './types'

const lesson: NewExodologyLesson = {
  id: 'a-m7-n3',
  title: 'Tracking Progress Over Time',
  duration: '20 min',
  type: 'instruction',
  content: {
    introduction: `A single autonomy profile or resilience assessment is a snapshot. Exits, however, unfold over months and years. The Charter commits Exodology to a **longitudinal orientation**, studying transitions over their full arc rather than as isolated moments, and the core principle of **adaptive management** asks practitioners to learn while doing. Both require a way of tracking change over time.

Tracking progress sounds simple, but it is where many well-meaning projects go wrong. Measures chosen in enthusiasm become burdensome and are abandoned. Numbers that are easy to collect crowd out the ones that matter. Worse, once people are judged by a number, they can start improving the number rather than the reality it was meant to describe.

This lesson shows how to build simple, honest measures of progress toward autonomy: setting a baseline, choosing a small set of indicators of different kinds, reviewing on a steady rhythm, guarding against the distortions measurement can create, and using what you learn to adjust your transition plan.`,

    sections: [
      {
        title: 'Start with a Baseline',
        content: `Progress only means something relative to a starting point. Before a transition begins in earnest, record a **baseline**: your first autonomy profile, your first resilience assessment and a short written description of the current situation.

A good baseline has four parts:

1. **Scores**: the coverage, duration, redundancy and exit friction scores for each essential system, using criteria written in advance.
2. **Evidence**: what each score rests on, such as inventories, bills, test results or scenario notes.
3. **Context**: conditions that might change independently of your efforts, such as the season, current prices or household size.
4. **Date and authors**: when the baseline was taken and who took part.

Context is easy to forget and important to keep. If your food coverage rises between winter and summer, that may reflect the season rather than progress. If your energy costs fall, that may reflect a change in market prices rather than reduced dependence. Recording context at the baseline lets you separate what you changed from what simply changed around you, which is the heart of honest evaluation in any field.

Keep the baseline even after you improve on it. Looking back at where you started is often the clearest evidence that a transition is real, and it is valuable documentation for others, as the lesson on Documenting and Sharing emphasises.`
      },
      {
        title: 'Choose Indicators of Different Kinds',
        content: `An indicator is a specific, observable sign of change. Programme evaluators commonly distinguish between kinds of indicators; three are especially useful for exit work.

**Activity indicators** show that work is happening: workshops held, beds planted, meetings attended, panels installed. They are easy to count and useful for coordination, but they do not show that dependence has fallen.

**Capacity indicators** show that the ability to meet needs has grown: number of people who can maintain the water filter, litres of rainwater storage, months of reserve funds, number of households in the buying club. These are closer to exit capability.

**Outcome indicators** show that structural dependence has actually changed: share of food from community sources over a season, days the household could manage without grid power in a real outage, proportion of income from more than one source.

A practical tracking system uses a few of each, weighted toward capacity and outcomes. Keep the total small: often five to eight indicators for a household and perhaps ten to fifteen for a community project. A long list that nobody updates is worse than a short list that is kept honestly.

Some outcomes change slowly. Capacity indicators often move first and can act as early signs that outcomes will follow; if capacity rises for a year without any change in outcomes, that is a signal to look more closely.`
      },
      {
        title: 'Rhythm and Review',
        content: `Indicators are only useful if someone looks at them, and looks at them together. Set a regular **review rhythm** that matches how quickly things change.

- **Monthly or seasonally** for activity and capacity indicators, which move relatively quickly
- **Yearly** for a full autonomy profile and resilience assessment, ideally in the same season as the baseline so comparisons are fair
- **After any real disruption**, when an actual outage, shortage or loss gives you the best evidence you will get

Each review should ask the same few questions:

1. What changed since last time, and why do we think it changed?
2. Which changes came from our efforts and which from outside conditions?
3. Are we moving toward the end state defined in our transition plan, and at what pace?
4. What surprised us?
5. What will we do differently before the next review?

The last question links tracking to action. Adaptive management means that reviews lead to adjustments: resequencing steps, reallocating resources, or using one of the **fallback points** designed in Transition Path Design. A review that never changes anything is a ritual, not a learning process.

For community projects, hold reviews openly. The Principle of Procedural Justice asks for ongoing input and course correction, and the people affected by a transition are often the first to notice what the numbers miss.`
      },
      {
        title: 'When Measures Distort',
        content: `Measurement changes behaviour. The economist Charles Goodhart gave his name to a well-known observation, usually paraphrased as: when a measure becomes a target, it ceases to be a good measure. The historian Jerry Muller, in The Tyranny of Metrics, documents how organisations that reward people for hitting numbers often get the numbers without the underlying improvement.

Exit work is vulnerable to the same problem. Some common distortions:

- **Counting what is easy.** Panels installed are easy to count; whether anyone can repair them is not. The easy measure quietly becomes the goal.
- **Gaming the definition.** A buying club reports rising food coverage by redefining "community-sourced" to include anything bought in bulk.
- **Hiding setbacks.** A cooperative stops reporting membership after numbers fall, so the problem is noticed only when it is serious.
- **Displacing judgement.** A community focuses on raising its average autonomy score and loses sight of the households whose exit capability has not changed at all.

Three habits reduce these risks. Pair every number with a short narrative explaining it. Review the indicators themselves each year and retire any that have started to drive the wrong behaviour. And avoid tying rewards, status or funding to a single indicator, which gives people the strongest incentive to bend it.`
      },
      {
        title: 'Reading the Trajectory',
        content: `Over several reviews, individual numbers form a **trajectory**: the direction and pace of change. Reading it well draws on concepts from across the curriculum.

**Progress is rarely smooth.** The core principle of non-linearity applies. Transitions often show long periods of little visible change followed by rapid movement, and setbacks are normal. A single bad review is information, not failure.

**Watch the commitment curve.** As a transition moves from low-commitment early stages to high-commitment later ones, the cost of reversal rises. Tracking should become more careful as commitment deepens; this is when you most need to know whether the parallel system really works before you depend on it.

**Watch the signals.** The response spectrum lesson described signals of reform exhaustion, of an opening exit window and of collapse risk. Add a few of these to your reviews. If repeated efforts to reduce a dependency produce less and less, the strategy may need to change rather than intensify.

**Watch those who stay.** Residual duty does not end when your own numbers improve. Where it can be done respectfully, note how your exit affects others still in the system: whether costs have shifted onto them, whether your experience has created on-ramps they can use.

A trajectory read this way tells a story that no single score can: where you are heading, how fast, and at whose expense or to whose benefit.`
      }
    ],

    keyTakeaways: [
      'Record a baseline of scores, evidence, context, date and authors before a transition begins in earnest',
      'Use a small set of activity, capacity and outcome indicators, weighted toward capacity and outcomes',
      'Review on a steady rhythm and after real disruptions, and let reviews lead to adjustments in the transition plan',
      'Measures distort when they become targets; pair numbers with narrative and review the indicators themselves',
      'Read the trajectory over time, expecting non-linearity and attending to effects on those who stay'
    ],

    references: [
      {
        author: 'Muller, Jerry Z.',
        title: 'The Tyranny of Metrics',
        year: 2018,
        publisher: 'Princeton University Press',
        relevance: 'Documents how measurement used as a target can distort behaviour, a key caution for anyone tracking transitions.',
        url: 'https://openlibrary.org/works/OL17859730W'
      },
      {
        author: 'Schön, Donald A.',
        title: 'The Reflective Practitioner: How Professionals Think in Action',
        year: 1983,
        publisher: 'Basic Books',
        relevance: 'Describes learning through cycles of action and reflection, the stance that regular progress reviews are meant to support.',
        url: 'https://openlibrary.org/works/OL3466056W'
      },
      {
        author: 'Meadows, Donella H.',
        title: 'Thinking in Systems: A Primer',
        year: 2008,
        publisher: 'Chelsea Green Publishing',
        relevance: 'Explains delays and non-linear behaviour, which shape how progress in a system appears over time.',
        url: 'https://openlibrary.org/works/OL3737036W'
      }
    ]
  },
  learningObjectives: [
    'Construct a baseline that records scores, evidence and context',
    'Classify indicators as activity, capacity or outcome measures and select a balanced set',
    'Design a review rhythm that connects tracking to adjustments in a transition plan',
    'Identify ways in which measures can distort behaviour and apply safeguards',
    'Interpret a progress trajectory in light of non-linearity, the commitment curve and residual duty'
  ],
  keyTerms: [
    { term: 'Baseline', definition: 'A dated record of scores, evidence and context taken before a transition, against which later progress is compared.' },
    { term: 'Indicator', definition: 'A specific, observable sign of change, such as an activity, capacity or outcome measure.' },
    { term: 'Capacity Indicator', definition: 'A measure of the ability to meet needs outside a dominant system, such as skills, storage or reserves.' },
    { term: 'Outcome Indicator', definition: 'A measure showing that structural dependence has actually changed, such as the share of a need met from community sources.' },
    { term: "Goodhart's Law", definition: 'The observation, from economics, that a measure tends to lose its usefulness once it becomes a target.' },
    { term: 'Trajectory', definition: 'The direction and pace of change shown by indicators across several reviews.' }
  ]
}

export default lesson
