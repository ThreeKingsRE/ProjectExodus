import type { NewExodologyLesson } from './types'

const lesson: NewExodologyLesson = {
  id: 'a-m7-n1',
  title: 'Autonomy Metrics Framework',
  duration: '20 min',
  type: 'instruction',
  content: {
    introduction: `Earlier in the Applied path you mapped your dependencies, designed parallel systems and planned transitions. Each of those steps rests on a claim that is easy to make and hard to check: that your exit capability is growing. This module asks how you would know. Without some form of measurement, a household or community can mistake activity for progress, buying equipment or holding meetings while its structural dependence on the systems it means to leave stays exactly where it was.

In Exodology, **autonomy** is not isolation or total self-sufficiency. It is the degree to which a household or community can meet an essential need without being forced to remain in a particular system. It is the practical expression of exit capability. A household that grows a fifth of its vegetables, shares a well with neighbours and keeps two weeks of stored food is more autonomous in food and water than one that does none of these things, even though it still shops at a supermarket.

This lesson sets out a simple, transparent way to describe autonomy across essential systems: which systems to measure, which dimensions of autonomy to look at, how to turn observations into scores, and what such scores can and cannot tell you. It is a way of organising questions you already know from dependency mapping, not a new theory, and it prepares you for the Autonomy Calculator at the end of this module.`,

    sections: [
      {
        title: 'Why Measure Autonomy at All?',
        content: `Measurement serves three purposes in exit work.

**1. Seeing clearly.** Dependency maps show how you are connected to systems. A measure summarises how exposed you are, so that you can compare systems and decide where effort matters most. It turns the question "where are we vulnerable?" into something you can discuss with others.

**2. Choosing well.** Exodology repeatedly asks whether optimisation, reform or exit is the right response on the response spectrum. Honest measures help you see whether reform is actually reducing dependence or only making it more comfortable. Recall the test from the Foundations path: if the original system disappeared tomorrow, would you be fine or in crisis? A measure is a structured way of answering that question in advance.

**3. Being accountable.** The Charter commits practitioners to transparency and accountability. When you advise a community or ask people to invest time and money in a parallel system, you owe them a way of seeing whether it is working.

Measurement also has limits. The Charter's principle of humility applies: numbers simplify complex systems, and a score is a conversation starter, never a verdict.`
      },
      {
        title: 'Essential Systems: What to Measure',
        content: `Start from the needs that, if unmet, quickly turn a managed exit into a crisis. The Foundations and Applied paths have focused on a core set:

- **Food**: calories, protein and nutrients across the year, including storage and preservation
- **Water**: safe drinking water and water for sanitation and cooking
- **Energy**: heat, cooking, refrigeration, lighting and power for communication
- **Shelter**: secure housing that you cannot easily be forced out of
- **Income and exchange**: the means to obtain what you do not produce
- **Health and care**: basic first aid, medicines and people able to give care
- **Knowledge and skills**: the capacity to maintain and repair what you depend on
- **Social support**: relationships that provide help when systems fail

You do not need to measure everything at once. Begin with the systems your dependency map flagged as containing critical nodes. A household on a private well in a rural area faces a very different water picture from a tenant in a city apartment, and the list should reflect real conditions rather than an ideal checklist.

Notice that several of these systems are social rather than technical. The mapping mistake of **ignoring soft dependencies** applies here too: a household with solar panels but no one who can repair them is less autonomous than it looks.`
      },
      {
        title: 'Four Dimensions of Autonomy',
        content: `For each essential system, look at autonomy along four plain dimensions. These are not a new model; they restate questions from dependency mapping and transition risk in a form you can score.

**1. Coverage.** What share of the need can be met from sources you control or govern together with others, such as a garden, a shared well, a cooperative or a community energy scheme? Coverage is about everyday supply.

**2. Duration.** If the dominant system stopped providing this need today, how long could you continue? The Foundations food exercise asked you to imagine a two-week supply disruption; duration generalises that question to every system.

**3. Redundancy.** How many independent ways do you have to meet the need? One source, however reliable, is a critical node. Two sources that both depend on the same grid or the same supplier are not truly independent.

**4. Exit friction.** How hard would it be to increase coverage if you had to? This draws on the friction ratings you made in dependency mapping: cost, knowledge, time and social factors.

The dimensions can disagree, and that is useful. A household might have high duration for food (a full pantry) but low coverage (it grows nothing) and low redundancy (one shop). The pattern tells you more than any single number.`
      },
      {
        title: 'From Observations to Scores',
        content: `A simple ordinal scale works best. For each dimension of each system, give a score from 0 to 4 with written criteria, for example for duration:

- **0**: less than a day without the dominant system
- **1**: a few days
- **2**: about two weeks
- **3**: one to three months
- **4**: indefinitely, or at least a full season

Write criteria like these for every dimension before you score, and keep them with your results. Criteria written in advance stop you from adjusting the scale to flatter your situation.

Three practices keep scoring honest:

**Score the weakest link.** If your water depends on an electric pump, your water duration cannot exceed your energy duration. Trace the dependency before you write the number.

**Record evidence.** Next to each score, note what supports it: "pantry inventory, March", "tested the pump on battery for six hours". A score without evidence is a guess.

**Avoid a single total too early.** It is tempting to add everything into one autonomy number. Totals hide the pattern: a high food score cannot compensate for having no safe water. Keep a profile across systems first, and if you do summarise, report the lowest system score alongside any average.`
      },
      {
        title: 'Autonomy, Interdependence and Justice',
        content: `Measuring autonomy carries a risk that Exodology takes seriously: it can drift toward the survivalism the Foundations path rejects. Exodology is not about individual escape. A household that scores high by hoarding while neighbours have nothing has not achieved an ethical exit; it has illustrated the **lifeboat problem**.

Three habits keep measurement aligned with the discipline's commitments.

**Count shared capacity.** A community well, a tool library or a cooperative counts toward autonomy because it is governed by the people who use it. Interdependence with peers you can hold accountable is different from structural dependence on systems you cannot influence.

**Ask who is being measured.** Averages across a community hide the households with the least exit capability: renters, people with disabilities, low-income families, people who need medical equipment that runs on grid power. The Principle of Distributive Justice asks you to look at the distribution, not only the mean.

**Remember residual duty.** If your autonomy rises because you have left a system, ask what happened to the people who remained. Did your exit raise costs for them or remove resources they relied on? A complete picture of progress includes your obligations to those who stay.`
      }
    ],

    keyTakeaways: [
      'Autonomy is the practical expression of exit capability: meeting an essential need without being forced to remain in a particular system',
      'Measure essential systems, including social and knowledge systems, starting with those your dependency map flagged as critical',
      'Coverage, duration, redundancy and exit friction describe different aspects of autonomy and should be read together as a profile',
      'Honest scoring uses criteria written in advance, evidence for each score, and attention to the weakest link',
      'Autonomy measures must count shared capacity and the distribution across households, or they drift toward survivalism'
    ],

    references: [
      {
        author: 'Meadows, Donella H.',
        title: 'Thinking in Systems: A Primer',
        year: 2008,
        publisher: 'Chelsea Green Publishing',
        relevance: 'Explains stocks, flows, buffers and feedback, which underlie measures of duration and redundancy in essential systems.',
        url: 'https://openlibrary.org/works/OL3737036W'
      },
      {
        author: 'Raworth, Kate',
        title: 'Doughnut Economics: Seven Ways to Think Like a 21st-Century Economist',
        year: 2017,
        publisher: 'Chelsea Green Publishing',
        relevance: 'Frames wellbeing around meeting essential needs within limits, a useful counterweight to measuring progress by income or output alone.',
        url: 'https://openlibrary.org/works/OL18139098W'
      },
      {
        author: 'Hirschman, Albert O.',
        title: 'Exit, Voice, and Loyalty: Responses to Decline in Firms, Organizations, and States',
        year: 1970,
        publisher: 'Harvard University Press',
        relevance: 'Shows that the availability of exit shapes power within systems, which is why the capacity to leave is worth measuring.',
        url: 'https://openlibrary.org/works/OL2745855W'
      }
    ]
  },
  learningObjectives: [
    'Define autonomy as an expression of exit capability rather than isolation',
    'Select the essential systems to measure for a given household or community',
    'Assess a system along coverage, duration, redundancy and exit friction',
    'Construct an ordinal scoring scale with written criteria and supporting evidence',
    'Evaluate an autonomy profile for distributional and residual-duty concerns'
  ],
  keyTerms: [
    { term: 'Autonomy', definition: 'The degree to which a household or community can meet an essential need without being forced to remain in a particular system; the practical expression of exit capability.' },
    { term: 'Coverage', definition: 'The share of an essential need met from sources a household or community controls or governs together.' },
    { term: 'Duration', definition: 'How long a household or community could continue to meet a need if the dominant system stopped providing it.' },
    { term: 'Redundancy', definition: 'The number of genuinely independent ways of meeting a need; a single source is a critical node.' },
    { term: 'Autonomy Profile', definition: 'A set of scores across essential systems and dimensions, read together rather than collapsed into a single total.' }
  ]
}

export default lesson
