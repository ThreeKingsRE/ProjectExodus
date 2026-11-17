import type { ExpandedExodologyLesson } from './types'

const lesson: ExpandedExodologyLesson = {
  id: 'a-m3-l2',
  title: 'Managing Transition Risk',
  duration: '20 min',
  type: 'instruction',
  content: {
    introduction: `Transitions are inherently risky. Understanding and managing these risks is essential for successful exit.

The previous lesson described how alternative systems fail: through shortfalls of people, money and maintenance, through governance breakdowns, through hidden dependencies and through drift or capture. This lesson asks the forward-looking question. Before and during a transition, how can a household or community see which risks matter most, decide what to do about each, and adjust as its commitment to the new path deepens?

Risk management in this sense is not a promise to remove uncertainty. Exodology's principle of humility acknowledges the limits of prediction and control in complex systems. The aim is more modest and more useful: to make risks visible, to weigh them honestly, to prepare responses before they are needed, and to be explicit about the risks that are being accepted. That honesty is also an ethical duty, because the people who join or depend on a transition deserve to know what they are taking on.`,

    sections: [
      {
        title: 'Types of Transition Risk',
        content: `Technical risk: Will the alternative work? Financial risk: Can we afford transition? Social risk: Will relationships survive? Timing risk: Will the window stay open?

Each of these four questions points to a different kind of uncertainty, and each calls for a different kind of evidence.

**Technical risk** concerns whether the alternative performs as intended under real conditions. A rainwater system may work in a wet year and fall short in a dry one; a shared bookkeeping tool may work for ten members and fail at fifty. Technical risk is reduced by testing in conditions close to the real ones, and by learning from others who have run the same system for several years.

**Financial risk** concerns whether the transition can be paid for, including the period of paying for two systems at once, the cost of maintenance and replacement, and the cost of failure. A transition that is affordable only if everything goes to plan carries high financial risk, because things rarely go fully to plan.

**Social risk** concerns relationships: within a household, among members of a group, and with neighbors, employers, family and institutions in the system being left. Exits can strain relationships when people move at different speeds or disagree about goals, and they can damage relationships with those who stay if the exit is handled carelessly.

**Timing risk** concerns windows of opportunity. Land may be available only for a period, a grant program may close, a supportive regulation may change, or the people willing to join may move on. A transition can be technically, financially and socially sound and still fail because it moved too slowly, or because it moved before conditions were ready.

These risks interact. A technical shortfall often becomes a financial problem, and a financial problem often becomes a social one. Listing them separately is a starting point for analysis, not a claim that they are independent.`
      },
      {
        title: 'Risk Assessment',
        content: `For each risk: What's the probability? What's the impact? What's the detection time? Prioritize by expected impact (probability × impact).

**Probability** is the likelihood that a risk occurs within the period being planned. For household and community transitions there is rarely enough data for precise numbers, so simple bands (unlikely, possible, likely) are usually more honest than false precision. The estimate should be grounded in evidence where possible: the experience of similar projects, local records, or a small trial.

**Impact** is how much harm the risk would cause if it occurred, including harm to essential needs, money, relationships and the people who depend on the transition. Impact should be judged from the point of view of the most exposed participants, not the average one: a loss that a well-off member can absorb may be a crisis for someone with no savings.

**Detection time** is how long it would take to notice that the risk is happening. A broken pump is noticed in hours; slowly falling membership, a souring relationship with a landowner or a gradual decline in soil fertility may go unnoticed for a season or more. The longer the detection time, the more damage accumulates before anyone responds, which is why the previous lesson's warning signs matter.

**Expected impact** multiplies probability by impact to give a single score for comparing risks. It helps a group spend its limited attention where it matters most. Two cautions apply. First, a risk with low probability but catastrophic impact, such as the total loss of a water supply, deserves attention even if its score looks modest, because some harms cannot be recovered from. Second, detection time is not part of the product; a practical approach is to use it as a tie-breaker, giving extra weight to risks that would be noticed late. A similar idea appears in failure mode and effects analysis, an engineering method that rates failures by severity, likelihood of occurrence and ease of detection.

A simple risk register, a table with one row per risk and columns for probability, impact, detection time, expected impact and planned response, is often enough. What matters most is that it is written down, shared with everyone affected and revisited regularly.`
      },
      {
        title: 'Risk Mitigation',
        content: `Reduce probability through preparation. Reduce impact through fallbacks. Reduce detection time through monitoring. Accept some risks consciously.

Each of the four strategies acts on a different part of the assessment.

**Reduce probability through preparation.** Training, testing, good design and strong relationships make problems less likely. Learning to maintain equipment before it is relied on, piloting a system at small scale, and agreeing on decision rules before money is pooled all lower the chance that a risk occurs.

**Reduce impact through fallbacks.** Fallbacks do not prevent problems but limit the harm they cause. Keeping a connection to the existing system, holding a financial reserve, having a second source of a critical input, or agreeing in advance how losses will be shared all fall in this category. The next lesson, on designing for resilience, develops these ideas through redundancy, reserves and graceful degradation.

**Reduce detection time through monitoring.** Monitoring turns slow, invisible risks into visible ones. Useful measures are few, simple and checked on a schedule: water levels, reserve balances, meeting attendance, maintenance logs, member feedback. Someone must be responsible for looking at them, and the group should agree in advance what reading would trigger a response.

**Accept some risks consciously.** No transition can mitigate every risk, and trying to do so can consume the resources the transition needs. Some risks are accepted because they are unlikely, cheap to recover from, or too costly to prevent. The key word is "consciously": an accepted risk is named, recorded and agreed by those who would bear it. A risk that is ignored is not accepted; it is simply hidden. This distinction matters ethically, because risks are often accepted by organizers but borne by others, and the principle of transparency requires that those others know and have a say.`
      },
      {
        title: 'The Commitment Curve',
        content: `Risk changes as commitment deepens. Early stages are low commitment, easy reversal. Later stages are high commitment, difficult reversal. Manage risk differently at each stage.

At the start of a transition, most steps are cheap and reversible: reading, visiting working examples, talking with neighbors, trying a small pilot. Mistakes cost little and teach a great deal. As the transition proceeds, steps become larger and harder to undo: money is spent on equipment, land is leased, people leave jobs or end service contracts, and others come to depend on the new system. The cost of being wrong rises with each step.

Managing risk differently at each stage means matching behavior to reversibility:

- **Early, low-commitment stages** are the time to explore widely, test the riskiest assumptions and be willing to change direction or stop. Uncertainty is highest here, but so is freedom to learn.
- **Middle stages** are the time to confirm that the alternative works under realistic conditions, build reserves and fallbacks, and set clear conditions for moving forward.
- **Later, high-commitment stages** are the time for careful execution, close monitoring and protection of everyone who now depends on the system, because reversal is costly and the consequences of failure are wide.

The researcher Bent Flyvbjerg, who has studied large infrastructure projects, makes a related argument: plan slowly while change is still cheap, then deliver quickly once commitment is high, because the risks of the delivery period grow the longer it lasts. The same logic applies to small exits.

The commitment curve also helps guard against a well-documented trap. Organizational research describes escalation of commitment, the tendency to keep investing in a failing course of action because of what has already been invested. Agreeing on stop or re-entry conditions before commitment deepens makes it easier to act on them later, when sunk costs make stepping back feel like failure. The lesson on re-entry planning later in this module develops this point.`
      },
      {
        title: 'Risk, Fairness and Those Who Stay',
        content: `Transition risk is never only a technical matter of probabilities. It is also a question of who bears the risk, who decides, and who benefits if the gamble pays off. In a group transition, organizers often have more information and more resources than other participants, so they can be tempted to accept risks that others will carry. Exodology's justice orientation asks who gains and who loses, and that question applies to risk as much as to costs.

Three practices help. First, share the risk register openly with everyone who would be affected, in plain language. Second, give those who bear a risk a voice in deciding whether to accept it. Third, design protections for the most exposed participants, such as keeping their fallback options open longer or creating a shared reserve that they can draw on first.

Risk also extends beyond the people making the transition. When members leave a shared system, those who remain may face higher costs, weaker services or uncertainty about the future. Considering those effects, and timing the exit to limit them, is part of residual duty. A well-managed transition risk is one that the people affected understood, agreed to and were protected from as far as reasonably possible.`
      }
    ],

    keyTakeaways: [
      'Multiple risk types in transitions',
      'Assess probability, impact, and detection time',
      'Mitigate through preparation, fallbacks, monitoring',
      'Risk profile changes with commitment depth',
      'Accepted risks should be named, shared and agreed by those who would bear them'
    ],

    references: [
      {
        author: 'Peter L. Bernstein',
        title: 'Against the Gods: The Remarkable Story of Risk',
        year: 1996,
        publisher: 'John Wiley & Sons',
        relevance: 'A history of how probability and risk measurement developed, giving background to assessing risks by their likelihood and consequences.',
        url: 'https://openlibrary.org/works/OL3294011W'
      },
      {
        author: 'Daniel Kahneman',
        title: 'Thinking, Fast and Slow',
        year: 2011,
        publisher: 'Farrar, Straus and Giroux',
        relevance: 'Summarizes research on judgment under uncertainty, including the planning fallacy and the pull of sunk costs, which bias how people estimate and respond to transition risk.',
        url: 'https://openlibrary.org/works/OL15992072W'
      },
      {
        author: 'Bent Flyvbjerg and Dan Gardner',
        title: 'How Big Things Get Done',
        year: 2023,
        publisher: 'Currency',
        relevance: 'Draws on a large database of projects to argue for careful, iterative planning while change is cheap and swift delivery once commitments are made.',
        url: 'https://openlibrary.org/works/OL28442176W'
      }
    ]
  },

  learningObjectives: [
    'Identify transition risk types',
    'Assess risks quantitatively',
    'Apply mitigation strategies',
    'Navigate commitment curve',
    'Explain who bears transition risks and how to involve them in decisions about those risks'
  ],

  keyTerms: [
    { term: 'Expected Impact', definition: 'The probability of a risk multiplied by its impact, used to compare and prioritize risks.' },
    { term: 'Detection Time', definition: 'How long it would take to notice that a risk is occurring, during which harm can accumulate unseen.' },
    { term: 'Risk Register', definition: 'A shared table listing each identified risk with its assessment, planned response and the person responsible.' },
    { term: 'Commitment Curve', definition: 'The pattern in which steps become larger and harder to reverse as a transition proceeds.' },
    { term: 'Escalation of Commitment', definition: 'A pattern documented in organizational research in which people keep investing in a failing course of action because of past investment.' },
    { term: 'Transition Burden', definition: 'The costs, difficulties, and risks borne by those undergoing system transition.' }
  ]
}

export default lesson
