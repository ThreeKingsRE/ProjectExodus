import type { NewExodologyLesson } from './types'

const lesson: NewExodologyLesson = {
  id: 's-m9-n3',
  title: 'Scoping Your Plan',
  duration: '20 min',
  type: 'instruction',
  content: {
    introduction: `With a focus chosen and an evidence base growing, you now need to decide exactly what your transition plan will and will not cover. Scoping is often treated as an administrative step. In Exodology it is more than that: where you draw the boundary determines whose dependence you analyze, whose transition burden you count, and who falls outside your plan altogether.

This lesson covers four elements of a sound scope: boundaries, assumptions, success criteria, and the position your plan takes on the response spectrum. It closes with guidance on writing a scope statement that others can review and challenge.

A well-scoped plan is honest about its limits. It tells readers what has been left out and why, so that no one mistakes a partial plan for a complete one.`,

    sections: [
      {
        title: 'Why Scope Is an Ethical Decision',
        content: `Systems thinking teaches that boundaries are not found in nature; analysts choose them to suit the question being asked. A watershed, a city limit, a utility service area and a labor market all describe different boundaries around what may be "the same" system. Each choice brings some people and effects into view and pushes others out.

For an Exodologist this has direct ethical consequences:

- If your boundary covers only those who can exit, you will overlook the people to whom residual duty is owed.
- If your time horizon ends when the exit is complete, you will miss post-exit precarity and the persistence of the alternatives.
- If you leave out effects beyond your region, you may export transition burdens to places your plan never mentions.

The principle of systemic responsibility asks us to consider effects across scales and over extended time horizons. You cannot analyze everything in a capstone, but you can make your boundary choices deliberately, and you can name the significant effects that fall outside them. A boundary that is stated and justified invites scrutiny; a boundary that is merely assumed hides it.`
      },
      {
        title: 'Setting Boundaries',
        content: `Define your scope along five dimensions:

**1. System.** Which system or subsystem, precisely? "The regional food system" is still vague; "the supply of fresh produce to low-income neighborhoods in one city" is a workable boundary.

**2. Geography and scale.** Your primary scale and the physical area it covers, plus the adjacent scales your plan will affect.

**3. Population.** Which groups are within the plan? State explicitly how the plan treats those who cannot or will not leave the current system.

**4. Functions.** Which critical functions from your dependency map does the plan address? A plan might focus on energy supply while noting, but not designing for, related effects on employment.

**5. Time horizon.** How far ahead does the plan look? Include at least the phases of a transition you have studied: building parallel systems, any period of soft exodus or hybrid operation, the transition itself and the period after it.

For each dimension, write one sentence on what is **out of scope** and why. Out-of-scope items with major consequences, such as job losses outside your region, should be carried forward as risks in your equity analysis rather than silently dropped.`
      },
      {
        title: 'Naming Your Assumptions',
        content: `Every plan rests on assumptions about how the world will behave. The Charter's commitment to transparency asks Exodologists to be explicit about assumptions, uncertainties and the values embedded in analysis.

Sort your assumptions into categories:

- **System assumptions:** how the current system will behave, for example that a utility will keep providing service during a transition.
- **Behavioral assumptions:** how people will respond, for example that households will join a cooperative if costs are comparable.
- **Policy assumptions:** which rules will hold or change.
- **Resource assumptions:** what funding, skills, land or materials will be available.
- **Landscape assumptions:** broader conditions outside anyone's control, such as prices, climate or national politics.

For each, note your **confidence** (how likely it is to hold) and its **impact** (what happens to the plan if it fails). Assumptions with low confidence and high impact deserve special attention: they belong in your risk analysis and may justify preferring reversible steps, as the principle of precaution recommends.

Research in psychology and planning offers a further caution. Kahneman and others have documented the **planning fallacy**, the tendency to underestimate time, cost and risk, and Flyvbjerg's studies of large projects found the same pattern repeatedly. A practical correction is to compare your estimates with what actually happened in similar past efforts, rather than relying on your plan's internal logic alone.`
      },
      {
        title: 'Defining Success Criteria',
        content: `How will anyone know whether your plan has worked? The Style Guide asks for outcomes to be assessed against multiple criteria, including effectiveness, equity and sustainability. A plan judged on one measure will tend to sacrifice the others.

Define criteria in four areas:

**Effectiveness.** Has structural dependence fallen? Has exit capability increased? Are critical functions now met reliably by alternatives?

**Equity.** How are the transition burden and the benefits distributed? Has exit equity improved, or do only the better-resourced participate? Are those who remain in the original system better off, or at least protected?

**Durability.** Do the alternatives persist? Your earlier study of resilience across time points to diversity, redundancy, institutional memory and succession as signs of persistence.

**Process.** Did affected people have a real voice? Were decisions transparent? Could course correction happen?

For each criterion, specify an **indicator** you could observe, and distinguish early indicators (such as participation rates in a pilot) from later ones (such as long-term reductions in dependence). Where a criterion cannot be measured precisely, describe what qualitative evidence would count. Success criteria should be set before you design your strategy, so that the strategy is tested against them rather than the other way round.`
      },
      {
        title: 'Placing the Plan on the Response Spectrum',
        content: `Your scope should state clearly where your plan sits on the response spectrum, and under what conditions that might change.

Many strategic plans turn out to be **hybrids**: reforming parts of the existing system while building parallel systems that enable later exit. This is often the most responsible position, because it protects people who depend on the current system while exit capability grows. If your plan is a hybrid, say which elements are reform and which are exit.

Your scope should also include **decision points**: the conditions under which the plan would move along the spectrum. For example:

- Signals that would show reform has become exhausted and that a shift toward exit is warranted.
- Signals that the exit window is narrowing, such as cascading failures or declining trust, which would call for faster action.
- Signals that exit is no longer appropriate, such as successful reform or evidence that alternatives are harming those who remain.

Including the conditions under which you would recommend **not** pursuing exit is a mark of a mature plan. It shows that your analysis is driven by evidence rather than by a commitment to leaving. It also protects against the collapse trap, in which a decision is postponed until only desperate flight remains.`
      },
      {
        title: 'Writing a Scope Statement',
        content: `Bring the elements together in a short scope statement, usually one page. It should include:

1. **Focus:** the system, place and primary scale, in one or two sentences.
2. **Purpose:** the transition question the plan addresses.
3. **Boundaries:** the five dimensions, each with what is in and out of scope.
4. **Key assumptions:** the five to eight most important, with confidence and impact.
5. **Success criteria:** effectiveness, equity, durability and process, with indicators.
6. **Response position:** where the plan sits on the response spectrum, with decision points.

Test the statement against the capstone timeframe. If you cannot complete a credible diagnosis, strategy, equity analysis and governance plan within three to four weeks for this scope, narrow it now.

Finally, share the scope statement with at least one peer, and if possible with someone who lives with the system. Ask them three questions: What is missing? Which assumption seems weakest? Who is left out? Peer review is one of the accountability mechanisms named in the ethics guidelines, and it is far more useful at this stage than after the plan is written.`
      }
    ],

    keyTakeaways: [
      'Boundaries determine whose dependence and burden the plan counts, so scoping is an ethical decision',
      'Define scope by system, geography, population, functions and time horizon, and justify what is left out',
      'Make assumptions explicit, rate their confidence and impact, and correct for the planning fallacy',
      'Set success criteria for effectiveness, equity, durability and process before designing the strategy',
      'State the plan\'s position on the response spectrum and the decision points that would change it'
    ],

    references: [
      {
        author: 'Meadows, Donella H.',
        title: 'Thinking in Systems: A Primer',
        year: 2008,
        publisher: 'Chelsea Green Publishing',
        relevance: 'Discusses how system boundaries are drawn by the analyst for a purpose, and how poorly chosen boundaries hide important effects.',
        url: 'https://openlibrary.org/works/OL3737036W'
      },
      {
        author: 'Kahneman, Daniel',
        title: 'Thinking, Fast and Slow',
        year: 2011,
        publisher: 'Farrar, Straus and Giroux',
        relevance: 'Describes the planning fallacy and the value of comparing plans with outcomes of similar past efforts when setting assumptions.',
        url: 'https://openlibrary.org/works/OL15992072W'
      },
      {
        author: 'Flyvbjerg, Bent; Bruzelius, Nils; Rothengatter, Werner',
        title: 'Megaprojects and Risk: An Anatomy of Ambition',
        year: 2003,
        publisher: 'Cambridge University Press',
        relevance: 'Documents how large infrastructure projects repeatedly underestimate cost and risk, a caution for scoping any large-scale transition.',
        url: 'https://openlibrary.org/works/OL21373690W'
      }
    ]
  },
  learningObjectives: [
    'Define the boundaries of a transition plan across system, geography, population, functions and time horizon',
    'Justify boundary choices and identify significant effects that fall outside them',
    'Classify plan assumptions and assess each for confidence and impact',
    'Formulate success criteria with observable indicators for effectiveness, equity, durability and process',
    'Specify a plan\'s position on the response spectrum together with the decision points that would change it'
  ],
  keyTerms: [
    { term: 'Scope Statement', definition: 'A short document setting out a plan\'s focus, purpose, boundaries, key assumptions, success criteria and position on the response spectrum.' },
    { term: 'System Boundary', definition: 'The line an analyst draws around a system for a given question, determining which people, functions and effects are included.' },
    { term: 'Planning Fallacy', definition: 'A tendency, documented in psychology and planning research, to underestimate the time, cost and risk of planned actions.' },
    { term: 'Success Criteria', definition: 'Pre-defined standards, with observable indicators, used to judge whether a transition plan has achieved its aims.' },
    { term: 'Decision Point', definition: 'A stated condition under which a plan would move along the response spectrum, for example from reform toward exit.' }
  ]
}

export default lesson
