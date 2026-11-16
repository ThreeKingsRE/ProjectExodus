import type { NewExodologyLesson } from './types'

const lesson: NewExodologyLesson = {
  id: 'a-m6-n4',
  title: 'Failure Scenario Analysis',
  duration: '25 min',
  type: 'interactive',
  content: {
    introduction: `This exercise brings the Failure Modes module together. You will take one alternative you run, belong to or are planning, imagine specific ways it could fail, trace what would happen, and design responses for prevention, graceful degradation and re-entry.

Choose a real alternative where possible: a household water or energy setup, a community garden, a buying club, a cooperative, a mutual aid network, or the parallel system you designed earlier in the Applied path. If you are not yet part of one, use a clearly hypothetical alternative and describe it concretely enough to analyze. Keep your dependency map from earlier modules at hand, and where the alternative is shared, consider working through the exercise with other members, since failures are rarely visible from one person's position alone.`,
    gameType: 'guided-exercise',
    steps: [
      {
        instruction: 'Describe the alternative and its purpose',
        prompt: 'Name the alternative, the needs it meets and for whom, and the dominant system it reduces dependence on. List its essential functions and the people, money, equipment and agreements it relies on. Mark any critical nodes, including key people.'
      },
      {
        instruction: 'Screen for failure modes',
        prompt: 'Using Common Exit System Failures, go through each category: capacity (key-person dependence, burnout, financial exhaustion, maintenance neglect), governance (unresolved conflict, hidden power, unclear decision rules), design (hidden dependence on the exited system, complexity, scale mismatch, over-optimization) and drift (mission drift, capture, exclusion). For each, note whether it applies and any warning signs already visible.'
      },
      {
        instruction: 'Write three concrete failure scenarios',
        prompt: 'Write one sudden scenario (for example, the person who manages the accounts leaves without notice), one slow scenario (for example, reserves are drawn down over a year for routine costs) and one external scenario (for example, a supplier or regulator controlled by the dominant system changes its terms). Be specific about timing, scale and conditions.'
      },
      {
        instruction: 'Trace the consequences',
        prompt: 'For each scenario, trace what fails first, what fails next because of it, and what happens after a day, a week and a month. Who is affected first and most? Who would have to fall back on the dominant system, and could they? Note where the scenario reveals a dependency missing from your map.'
      },
      {
        instruction: 'Design prevention and resilience responses',
        prompt: 'For each scenario, propose at least one change drawn from Designing for Resilience: redundancy or training at a critical node, reserves, diversity of sources or skills, modularity, or a governance fix. Estimate what each change would cost in money, time and attention, and say which you would do first and why.'
      },
      {
        instruction: 'Plan graceful degradation and re-entry',
        prompt: 'Sort the essential functions into essential, important and deferrable tiers and state what would be shed first if capacity fell. Then, using Re-entry Planning, set at least two re-entry triggers, say whether each would lead to partial, temporary or full re-entry, and list the bridges that must be kept open so members can return with dignity.'
      },
      {
        instruction: 'Check for justice and set a review',
        prompt: 'Review your responses: do they protect the most exposed members, avoid shifting risk onto those outside the alternative, and share the costs of resilience fairly? Name who is responsible for watching each warning sign, and set a date to revisit this analysis.'
      }
    ],
    completionRequirement: 'Complete all seven steps, including three written scenarios, at least one resilience response per scenario, a tiered degradation plan, two re-entry triggers and a review date'
  },
  learningObjectives: [
    'Apply the categories of exit system failure to a specific alternative',
    'Construct sudden, slow and external failure scenarios with concrete timing and conditions',
    'Trace cascading consequences of a failure scenario using a dependency map',
    'Design prevention, graceful degradation and re-entry responses for each scenario',
    'Evaluate failure responses for their effects on the most exposed members'
  ],
  keyTerms: [
    { term: 'Failure Scenario', definition: 'A concrete, written description of how a specific alternative could fail, including timing, scale and conditions.' },
    { term: 'Consequence Tracing', definition: 'Following a failure step by step through a dependency map to see what fails next and who is affected.' },
    { term: 'Graceful Degradation', definition: 'An engineering term for a system that continues to provide reduced service when parts of it fail, instead of stopping entirely.' },
    { term: 'Re-entry Trigger', definition: 'A condition, agreed in advance, that prompts a decision about returning to a system.' }
  ]
}

export default lesson
