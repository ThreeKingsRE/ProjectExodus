import type { NewExodologyLesson } from './types'

const lesson: NewExodologyLesson = {
  id: 's-m2-n1',
  title: 'Exit-Compatible Policy Design',
  duration: '20 min',
  type: 'instruction',
  content: {
    introduction: `The previous lessons in this module examined policy levers that enable or block exit, and governance models suited to transition. This lesson moves from reacting to existing policy to designing it. The question is practical: when a public body, an organization or a community writes rules, how can those rules keep exit possible and fair, both now and in the future?

Exit-compatible policy is not policy that encourages everyone to leave. It is policy that avoids trapping people in systems they cannot leave when those systems fail them, while protecting the people who stay. In the language of the Foundations path, it lowers unnecessary exit friction, preserves exit capability, and keeps the exit window from closing before people can use it.

Designing such policy involves real tensions. Making exit easy can weaken the incentive to reform from within, and those best able to leave are often the first to go. This lesson treats those tensions as design problems rather than reasons to give up.`,

    sections: [
      {
        title: 'Why Policy Design Shapes Exit Capability',
        content: `Most dependencies that matter at scale are created or reinforced by rules. Contracts determine how long people are bound. Standards determine whether equipment from one provider works with another. Licensing determines who may offer an alternative. Subsidies determine which systems are cheap and which are expensive. Each of these choices adds to or subtracts from exit friction.

Policies also tend to outlive the conditions that justified them. A long-term contract that made sense when only one supplier existed may become a trap once alternatives emerge. This is path dependence in practice: early decisions constrain later options, and the people who bear the constraint are often not those who made the decision.

For the strategic exodologist, the lesson is that **lock-in is often designed, even when no one intended it**. Policy review should therefore ask not only "does this rule achieve its goal?" but also "does this rule make it harder for people to leave if the system stops serving them, and is that difficulty justified?" Some exit friction is legitimate, such as notice periods that protect those who remain. The aim is to remove friction that serves no purpose other than keeping people captive.`
      },
      {
        title: 'Design Features That Keep Exit Possible',
        content: `Several policy features, drawn from established practice in regulation and public administration, tend to keep exit possible:

1. **Portability**: People can take what they have built with them when they leave. Telephone number portability, which many countries require, and the right to data portability in the European Union's General Data Protection Regulation are familiar examples.
2. **Interoperability and open standards**: Alternatives can connect to existing infrastructure. Rules that let small generators connect to the electricity grid are a classic case from the energy domain.
3. **Reasonable contract terms**: Limits on contract length, exit penalties and automatic renewal reduce lock-in without banning commitments.
4. **Review and sunset clauses**: Policies expire or must be reviewed unless renewed, so that temporary arrangements do not quietly become permanent dependencies.
5. **Low barriers to forming alternatives**: Simple, affordable legal forms for cooperatives, community enterprises and commons arrangements make parallel systems easier to build.
6. **Default settings**: Behavioral research shows that defaults strongly shape what people do. A default that enrolls people in a system, with a genuine and easy route out, behaves very differently from one that requires effort to leave.

None of these features is neutral. Each redistributes power between those who run a system and those who depend on it, which is exactly why they are contested.`
      },
      {
        title: 'Fair Exit: Protecting Those Who Stay',
        content: `Easy exit is not the same as fair exit. Albert Hirschman's analysis of exit and voice observed that the members most sensitive to decline, often those with the most resources and options, tend to leave first. When they go, the system loses the people most able to press for improvement, and those who remain may face a worse system with less voice.

Exit-compatible policy therefore pairs exit rights with protections for those who stay. This reflects the Exodological concern with residual duty and the lifeboat problem:

- **Notice and phasing**: Requirements that large exits (a major employer leaving a region, a utility withdrawing a service) be announced in advance and phased, so that remaining users can adapt.
- **Service obligations**: Universal service rules that prevent a provider from abandoning less profitable users as others leave.
- **Shared costs of legacy systems**: Mechanisms that prevent early leavers from walking away from costs they helped create, such as the remaining costs of shared infrastructure, without making those costs an unfair barrier to leaving.
- **Voice channels**: Exit options work best alongside meaningful voice, so that the possibility of leaving strengthens rather than replaces the ability to reform.

The design task is a balance. Too little protection turns exit into abandonment. Too much makes leaving so costly that exit capability disappears.`
      },
      {
        title: 'Designing for Reversibility and Learning',
        content: `The Principle of Precaution in the Ethics Guidelines asks practitioners to prefer reversible interventions when outcomes are uncertain and to build in monitoring and adaptation. Applied to policy, this means designing rules that can themselves be exited if they prove harmful.

Practical techniques include:

**Pilots before mandates.** Testing a policy in one area or for a limited time generates evidence before a whole population is committed. Many energy and social programs begin this way.

**Sunset and review provisions.** As noted above, these force a deliberate decision to continue rather than allowing inertia to decide.

**Staged commitments.** Large irreversible investments, such as long-lived infrastructure, can be staged so that later phases depend on the results of earlier ones.

**Monitoring tied to triggers.** Policies can specify in advance what evidence would lead to adjustment, so that course correction is expected rather than treated as failure.

Systems thinkers such as Donella Meadows warned that interventions in complex systems often produce effects no one intended. Reversibility is a form of humility built into the rules. It does not guarantee good outcomes, but it keeps the cost of mistakes from becoming permanent.`
      },
      {
        title: 'Tensions and Trade-offs',
        content: `Exit-compatible policy design involves honest trade-offs that should be named rather than hidden:

**Exit versus investment.** Long-term commitments sometimes make investment possible. A community energy project may need members to commit for years so that it can borrow money. Shortening every commitment can starve parallel systems of the stability they need.

**Exit versus collective goods.** Some systems only work if most people stay in them, such as risk-pooling in insurance or the shared costs of a water network. Unlimited exit can unravel these systems and harm those who cannot leave.

**Speed versus fairness.** Rapid policy change can open exit windows quickly, but may leave little time for those affected to prepare.

**Simplicity versus fit.** Uniform national rules are easier to administer; rules adapted to local conditions fit better but are harder to coordinate. The principle of subsidiarity, discussed in the previous lesson, offers one guide.

There is no formula that resolves these tensions. The Ethics Guidelines suggest a process: identify the stakes, seek solutions that honor several principles at once, give priority to those with less power when trade-offs are unavoidable, and use inclusive processes so that the choice is legitimate.`
      }
    ],

    keyTakeaways: [
      'Rules create or reinforce many dependencies, so lock-in is often designed even when no one intended it',
      'Portability, interoperability, fair contract terms, review clauses and low barriers to alternatives help keep exit possible',
      'Fair exit pairs exit rights with protections for those who stay, such as notice, service obligations and voice channels',
      'Reversible, monitored policy reflects the Principle of Precaution and keeps mistakes from becoming permanent',
      'Exit-compatible design involves real trade-offs between exit, investment and collective goods that must be resolved through inclusive processes'
    ],

    references: [
      {
        author: 'Hirschman, Albert O.',
        title: 'Exit, Voice, and Loyalty: Responses to Decline in Firms, Organizations, and States',
        year: 1970,
        publisher: 'Harvard University Press',
        relevance: 'Classic analysis of how exit and voice interact, including why the most sensitive members leave first.',
        url: 'https://openlibrary.org/works/OL2745855W'
      },
      {
        author: 'Meadows, Donella H.',
        title: 'Thinking in Systems: A Primer',
        year: 2008,
        publisher: 'Chelsea Green Publishing',
        relevance: 'Explains feedback, delays and unintended consequences that make reversible policy design important.',
        url: 'https://openlibrary.org/works/OL3737036W'
      },
      {
        author: 'Thaler, Richard H. & Sunstein, Cass R.',
        title: 'Nudge: Improving Decisions About Health, Wealth, and Happiness',
        year: 2008,
        publisher: 'Yale University Press',
        relevance: 'Shows how default settings and choice design shape whether people stay in or leave systems.',
        url: 'https://openlibrary.org/works/OL3936258W'
      }
    ]
  },
  learningObjectives: [
    'Identify policy features that create or reduce unnecessary exit friction',
    'Apply portability, interoperability, review clauses and default design to a policy proposal',
    'Design protections that make exit fair for those who remain in a system',
    'Evaluate trade-offs between exit rights, long-term investment and collective goods'
  ],
  keyTerms: [
    { term: 'Exit Friction', definition: 'The resistance, costs and barriers that make leaving a system difficult or costly.' },
    { term: 'Exit Capability', definition: 'The structural capacity of individuals or communities to leave a system when needed.' },
    { term: 'Portability', definition: 'The ability to take accumulated assets, records or identifiers with you when leaving a provider or system.' },
    { term: 'Sunset Clause', definition: 'A provision that makes a policy expire on a set date unless it is deliberately renewed.' },
    { term: 'Lock-in', definition: 'The condition in which a system resists change because of accumulated advantages and interdependencies.' }
  ]
}

export default lesson
