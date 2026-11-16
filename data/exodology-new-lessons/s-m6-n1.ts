import type { NewExodologyLesson } from './types'

const lesson: NewExodologyLesson = {
  id: 's-m6-n1',
  title: 'Institutional Lock-in Analysis',
  duration: '20 min',
  type: 'instruction',
  content: {
    introduction: `Individuals and communities rarely stay in failing systems because they want to. Very often they stay because the institutions around them make leaving slow, costly, or nearly impossible. Contracts, regulations, professional norms, financing arrangements and shared expectations can all turn an ordinary dependency into **structural dependence**, where basic functioning requires continued participation.

The Style Guide defines **lock-in** as the condition in which systems resist change because of accumulated advantages and interdependencies. At the Strategic level, the question is no longer only "what do I depend on?" but "which institutions keep this dependency in place, who benefits from it, and who carries the cost of leaving?" Answering it is the first step toward the exit-compatible institutions this module is about.

This lesson extends dependency mapping from households and communities to institutions. It explains the main ways institutions entrench dependency, shows how to analyze lock-in without reducing it to a villain story, and connects the analysis to the exit window and the justice commitments of the discipline.`,

    sections: [
      {
        title: 'Why Institutions Entrench Dependency',
        content: `Institutions are the rules, organizations and shared expectations that structure behavior: laws and regulations, firms and agencies, standards, professional norms, and taken-for-granted ways of doing things. They exist to make cooperation predictable, and that predictability is valuable. The same features that make institutions useful also make them sticky.

Researchers in institutional economics and political science describe several mechanisms. W. Brian Arthur showed that technologies and arrangements can benefit from **increasing returns**: large set-up costs, learning effects, coordination benefits and self-reinforcing expectations make the established option more attractive the longer it dominates. Douglass North argued that whole institutional frameworks behave similarly, because organizations grow up around the existing rules and gain a stake in keeping them. Paul Pierson applied these ideas to politics, showing how early choices become harder to reverse over time.

For Exodology, this is the core principle of **Path Dependence** in institutional form. Lock-in is rarely the product of a single bad decision. It is accumulated: each reasonable step makes the next alternative a little more expensive, until exit friction is high enough that people stay in a system they would not choose today.`
      },
      {
        title: 'The Main Forms of Institutional Lock-in',
        content: `When analyzing a specific institution, it helps to distinguish the forms lock-in can take. These categories are drawn from the lock-in literature and overlap in practice:

**Technical and infrastructural**: Physical assets and standards that only work within the existing system, such as a grid designed around large central plants or software that only reads one proprietary format.

**Economic**: Sunk costs, long-term contracts, debt, and pricing that rewards continued participation and penalizes departure, such as termination fees or loyalty discounts.

**Legal and regulatory**: Rules written around incumbent arrangements, licensing requirements, or monopoly rights that make alternatives unlawful or uneconomic. The Policy Levers lesson called these exit-blocking policies.

**Political**: Organized interests whose income, jobs or status depend on the system and who can block reform or exit. Gregory Unruh's analysis of carbon lock-in described how technologies and institutions co-evolve into a mutually reinforcing complex.

**Cognitive and cultural**: Habits, professional training and shared assumptions that make the current arrangement feel natural and alternatives feel risky or unthinkable.

**Social**: Relationships, identities and obligations bound up with participation, so that leaving the institution feels like leaving a community.`
      },
      {
        title: 'Analyzing Lock-in: A Practical Method',
        content: `Institutional lock-in analysis builds directly on the dependency mapping method from the Applied path. The difference is that the map now includes the rules and organizations that hold dependencies in place, not only the flows of goods and services. A careful analysis works through a sequence of questions:

1. **Identify the core function.** What need does the institution actually meet for its participants? Lock-in persists partly because the need is real.

2. **Map the dependency chain.** Trace who depends on the institution and what it depends on in turn, marking critical nodes where no alternative path exists.

3. **Classify the lock-in.** For each critical node, ask which forms of lock-in are operating: technical, economic, legal, political, cognitive, social. Most nodes involve several.

4. **Estimate exit friction.** For each node, how costly, slow and risky would replacement be, and for whom? Exit friction is rarely equal across participants.

5. **Identify maintainers and beneficiaries.** Who benefits from the current arrangement, and who has the power to keep it in place? This is the **Political Embeddedness** principle applied.

6. **Locate leverage points.** Where would a change in rules, standards or contracts reduce several forms of lock-in at once? These are candidates for exit-enabling reform or parallel systems.`
      },
      {
        title: 'Reading Lock-in Through Exit and Voice',
        content: `Albert Hirschman's "Exit, Voice, and Loyalty" offers a useful lens for interpreting a lock-in analysis. Hirschman argued that members of a declining organization can respond by leaving (exit) or by speaking up to change it (voice), and that loyalty shapes which they choose. He also observed that the two interact: when exit is easy, organizations receive a clear signal of decline, but the most quality-conscious members may leave before their voice can improve things. When exit is impossible, voice may be the only option, but it can also be ignored because the institution knows members cannot go.

This matters for interpreting lock-in. High exit friction can weaken accountability, because the institution has little to lose by ignoring complaints. It can also push dissatisfaction underground until it surfaces as crisis, which is one route by which the response spectrum slides from reform toward **collapse**. Low exit friction, on the other hand, can drain an institution of the members most able to reform it.

A good lock-in analysis therefore does not assume that all lock-in is harmful or that all exit is beneficial. It asks whether the current balance of exit and voice allows the institution to learn, and whether people can leave before the exit window closes.`
      },
      {
        title: 'Justice and the Uneven Distribution of Lock-in',
        content: `Lock-in is not experienced equally. A household with savings can pay a termination fee or invest in an alternative; a household living month to month cannot. A large firm can lobby for an exemption; a small cooperative may not even know the rule exists. The Strategic justice lesson called this unequal distribution of **exit capability**, and lock-in analysis should make it visible.

Practically, this means every lock-in analysis should ask three additional questions. First, which groups face the highest exit friction, and why? Second, if some participants do leave, does the cost of the institution shift onto those who remain? A utility losing its wealthier customers to private alternatives, for example, may need to spread fixed costs over a poorer remaining base. Third, what does **residual duty** require of those who exit first?

These questions connect institutional analysis to the ethics guidelines. The Principle of Distributive Justice asks practitioners to analyze who gains and who loses; lock-in analysis is one of the most concrete ways to do so. An analysis that identifies lock-in but ignores who is trapped by it is incomplete by the discipline's own standards.`
      },
      {
        title: 'Common Errors in Lock-in Analysis',
        content: `Several errors recur when practitioners first analyze institutional lock-in:

**The villain narrative.** It is tempting to explain lock-in entirely by the bad intentions of incumbents. Interests matter, but much lock-in is the unplanned result of many reasonable decisions. The Style Guide warns against hero narratives; villain narratives are their mirror image.

**Treating all lock-in as illegitimate.** Some stability is what makes an institution worth having. Building codes, safety standards and pension systems are deliberately hard to change. The question is whether the lock-in still serves the institution's purpose.

**Ignoring the contested evidence.** Well-known examples of lock-in, such as the persistence of the QWERTY keyboard layout, are debated by economists. Use examples carefully and acknowledge where the evidence is disputed, as the Principle of Intellectual Honesty requires.

**Stopping at diagnosis.** A lock-in analysis is only useful if it informs action: reform, exit-enabling governance, parallel systems, or a decision to stay and use voice.

**Analyzing from outside.** Participants often understand lock-in better than outside analysts. Participatory methods are a commitment of the Charter, not an optional extra.`
      }
    ],

    keyTakeaways: [
      'Institutions turn ordinary dependencies into structural dependence through technical, economic, legal, political, cognitive and social lock-in',
      'Lock-in usually accumulates through path dependence rather than a single decision, so analysis should avoid villain narratives',
      'Institutional lock-in analysis extends dependency mapping by adding the rules and organizations that hold dependencies in place',
      'The balance of exit and voice determines whether a locked-in institution can still learn before the exit window closes',
      'Lock-in is unevenly distributed, so every analysis must ask who is trapped and who bears the cost when others leave'
    ],

    references: [
      {
        author: 'North, Douglass C.',
        title: 'Institutions, Institutional Change and Economic Performance',
        year: 1990,
        publisher: 'Cambridge University Press',
        relevance: 'Explains how institutional frameworks become self-reinforcing as organizations grow up around existing rules.',
        url: 'https://openlibrary.org/works/OL2095641W'
      },
      {
        author: 'Arthur, W. Brian',
        title: 'Increasing Returns and Path Dependence in the Economy',
        year: 1994,
        publisher: 'University of Michigan Press',
        relevance: 'Sets out how increasing returns produce path dependence and lock-in of technologies and arrangements.',
        url: 'https://openlibrary.org/works/OL3466925W'
      },
      {
        author: 'Hirschman, Albert O.',
        title: 'Exit, Voice, and Loyalty: Responses to Decline in Firms, Organizations, and States',
        year: 1970,
        publisher: 'Harvard University Press',
        relevance: 'Provides the exit and voice lens used to interpret how lock-in affects accountability and decline.',
        url: 'https://openlibrary.org/works/OL2745855W'
      },
      {
        author: 'Pierson, Paul',
        title: 'Politics in Time: History, Institutions, and Social Analysis',
        year: 2004,
        publisher: 'Princeton University Press',
        relevance: 'Applies path dependence to political institutions and explains why early choices become hard to reverse.',
        url: 'https://openlibrary.org/works/OL3951702W'
      }
    ]
  },
  learningObjectives: [
    'Explain the mechanisms through which institutions entrench dependency',
    'Classify the forms of lock-in operating at critical nodes of an institutional dependency map',
    'Conduct a structured lock-in analysis that identifies maintainers, beneficiaries and leverage points',
    'Interpret lock-in using the interaction of exit and voice',
    'Evaluate how lock-in distributes exit friction unevenly across groups'
  ],
  keyTerms: [
    { term: 'Lock-in', definition: 'Condition where systems resist change due to accumulated advantages and interdependencies.' },
    { term: 'Structural Dependence', definition: 'A condition where survival or basic functioning requires continued participation in a specific system.' },
    { term: 'Increasing Returns', definition: 'A dynamic, described in economics, in which an option becomes more attractive the more widely it is already used.' },
    { term: 'Exit Friction', definition: 'The resistance, costs, and barriers that make leaving a system difficult or costly.' },
    { term: 'Voice', definition: 'In Hirschman\'s terms, the attempt to change a declining organization from within rather than leaving it.' }
  ]
}

export default lesson
