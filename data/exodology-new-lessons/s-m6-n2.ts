import type { NewExodologyLesson } from './types'

const lesson: NewExodologyLesson = {
  id: 's-m6-n2',
  title: 'Exit-Enabling Governance',
  duration: '20 min',
  type: 'instruction',
  content: {
    introduction: `The previous lesson analyzed how institutions entrench dependency. This lesson turns to design: how can institutions be governed so that exit options stay open, without making them so fragile that no one can rely on them? The glossary calls the result **exit-compatible governance**: institutional structures designed to enable rather than prevent system departure.

Exit-compatible governance does not mean encouraging people to leave. An institution that its members can leave has to keep earning their participation, and that pressure tends to make voice more effective. People who know they are not trapped are often more willing to commit, invest and speak up. The aim is an institution that people stay in because it serves them, not because they cannot get out.

This lesson sets out the main design features of exit-enabling governance, draws on documented practice from cooperatives, commons and digital systems, and examines the real tensions between keeping exit open and sustaining the commitment that shared institutions require.`,

    sections: [
      {
        title: 'Exit and Voice as Complements',
        content: `Albert Hirschman's analysis of exit and voice is the natural starting point for governance design. Exit gives members a way to signal that an institution is failing them and protects them when reform is impossible. Voice gives them a way to improve the institution from within. Each works best when the other is available. A credible exit option makes leaders take voice seriously; effective voice gives members a reason to stay and repair rather than leave.

Governance that blocks exit tends to weaken voice over time, because those in charge have little to lose by ignoring complaints. Governance that makes exit effortless but offers no voice can lose its most committed members at the first sign of trouble. Exit-compatible governance therefore designs both channels together.

This connects to the **response spectrum**. Optimization and reform depend on voice. Exit depends on alternatives and low enough exit friction. Collapse becomes more likely when both are blocked. Governance that keeps both channels open widens the range of responses available when an institution starts to fail and helps keep the exit window open long enough for a managed transition.`
      },
      {
        title: 'Design Feature: Low-Friction Membership and Portability',
        content: `The most direct way to keep exit open is to reduce the cost of leaving without destroying what members have built. Several well-documented practices show how:

**Voluntary and open membership.** The International Co-operative Alliance's Statement on the Cooperative Identity lists voluntary and open membership as the first cooperative principle. Members join by choice and can withdraw, typically under rules set out in advance.

**Portability of what members bring.** Many jurisdictions require telephone number portability, so that customers can change provider without losing their number. The European Union's General Data Protection Regulation includes a right to data portability. In each case, governance reduces lock-in by letting people take an essential asset with them.

**Clear and fair exit terms.** Notice periods, rules for the return of shares or deposits, and reasonable limits on termination fees make exit predictable for both sides.

**Open standards.** When the tools of participation follow shared standards, members can move to alternatives without rebuilding everything. This is the institutional version of avoiding technical lock-in.

In dependency mapping terms, each of these features lowers exit friction at a critical node.`
      },
      {
        title: 'Design Feature: Distributed and Nested Decision-Making',
        content: `Exit is easier when power is not concentrated in a single point. Elinor Ostrom's research on long-enduring commons, summarized in her design principles for common-pool resource institutions, found that durable self-governance usually involves clearly defined boundaries, rules matched to local conditions, collective-choice arrangements in which those affected can help change the rules, monitoring, graduated sanctions, accessible conflict resolution, recognition of the right to organize, and, for larger systems, nested enterprises. Her later work describes such arrangements as **polycentric**: many centers of decision-making, each with real authority, linked by shared rules.

For Exodology, polycentric and nested structures matter because they allow partial exit. A local unit can change course, leave a federation or join another without the whole system breaking apart. The Governance Models lesson introduced **subsidiarity**, deciding at the lowest appropriate level; subsidiarity also keeps exit possible at that level.

Open-source software offers a documented example from another domain. Because the code is openly licensed, a community dissatisfied with a project's governance can copy the code and continue separately, as happened when LibreOffice was created from OpenOffice.org in 2010. The possibility of such a fork is widely regarded as a check on how open-source projects are governed.`
      },
      {
        title: 'Design Feature: Built-in Review and Course Correction',
        content: `Institutions do not only trap individual members; they can trap whole communities in arrangements that once made sense. Exit-enabling governance therefore includes ways for the institution itself to change course, so that exit is not the only remedy.

**Sunset clauses and periodic review.** As the Governance Models lesson noted, temporary structures with sunset clauses prevent transition arrangements from becoming permanent by default. Requiring a rule or contract to be renewed forces a fresh decision.

**Review triggers.** Agreeing in advance on the conditions that will prompt a formal review, such as a sustained fall in member satisfaction or the emergence of a viable alternative, makes it easier to act before the exit window closes.

**Amendable founding documents.** Rules that can be changed through a fair process avoid the trap in which only exit or rupture can bring change. The Charter of Exodology itself provides for refinement through review and amendment.

**Transparency about performance.** Members can only judge whether to stay, speak up or leave if they can see how the institution is doing.

These features apply the **Adaptive Management** principle to governance: institutions should be able to learn and correct course as conditions change.`
      },
      {
        title: 'Protecting Those Who Stay',
        content: `Exit-compatible governance must also consider the people who remain. When members leave, the remaining members may face higher costs, thinner services or a weaker voice. The justice lesson's lifeboats critique applies to institutions as much as to individuals.

Several governance practices help. **Fair division of shared assets** ensures that departing members take what is theirs without stripping assets that others depend on. **Notice periods and transition obligations** give the institution time to adjust. **Cross-subsidy safeguards** prevent fixed costs from falling entirely on those least able to leave. **Ongoing voice for those who remain** ensures that departures do not leave a hollowed-out institution run by a narrow few.

These practices express **residual duty** in institutional form: continuing obligations to those who remain in systems we have left. They also reflect the Principle of Distributive Justice, which asks practitioners to analyze who gains and who loses. A governance design that makes exit easy for the well-resourced while concentrating costs on those who cannot leave is not exit-compatible in the sense the discipline intends; it simply relocates lock-in to the most vulnerable.`
      },
      {
        title: 'Tensions and Trade-offs',
        content: `Keeping exit open is not costless, and honest design acknowledges the tensions:

**Commitment versus flexibility.** Some institutions only work if members stay through hard times. A commons that members abandon during a drought may not recover. Ostrom's work shows that durable commons often have clear boundaries and real obligations. Exit-compatibility has to be balanced against the commitment that makes collective action possible.

**Stability versus responsiveness.** Investors, lenders and partners rely on predictability. Very easy exit can raise the cost of capital or discourage long-term investment.

**Free riding.** If members can leave whenever obligations become inconvenient, some may take benefits and depart before contributing their share.

**Exit of the most capable.** As Hirschman observed, easy exit can drain an institution of the members most able to reform it.

There is no formula that resolves these tensions. A practical approach is to match exit terms to the function being protected: low friction for services people can easily replace, more structured exit where shared resources or long-term investments are at stake, and in all cases transparent terms agreed through a fair process.`
      }
    ],

    keyTakeaways: [
      'Exit-compatible governance keeps exit open so that participation reflects real benefit rather than entrapment',
      'Exit and voice work best together: credible exit strengthens voice, and effective voice gives reason to stay',
      'Key design features include low-friction membership, portability, open standards, nested decision-making and built-in review',
      'Governance must protect those who stay, expressing residual duty through fair exit terms and shared-asset safeguards',
      'Exit-compatibility must be balanced against the commitment and stability that collective institutions need'
    ],

    references: [
      {
        author: 'Hirschman, Albert O.',
        title: 'Exit, Voice, and Loyalty: Responses to Decline in Firms, Organizations, and States',
        year: 1970,
        publisher: 'Harvard University Press',
        relevance: 'Establishes how exit and voice interact and why governance should design both channels together.',
        url: 'https://openlibrary.org/works/OL2745855W'
      },
      {
        author: 'Ostrom, Elinor',
        title: 'Understanding Institutional Diversity',
        year: 2005,
        publisher: 'Princeton University Press',
        relevance: 'Develops the analysis of rules and polycentric, nested governance underlying durable self-governing institutions.',
        url: 'https://openlibrary.org/works/OL3956154W'
      },
      {
        author: 'Sen, Amartya',
        title: 'Development as Freedom',
        year: 1999,
        publisher: 'Alfred A. Knopf',
        relevance: 'Frames freedom as real capability, supporting the view that exit options matter only when people can actually use them.',
        url: 'https://openlibrary.org/works/OL116534W'
      }
    ]
  },
  learningObjectives: [
    'Explain why exit and voice should be designed together in institutional governance',
    'Identify governance features that lower exit friction without destroying shared value',
    'Apply polycentric and nested decision-making to keep partial exit possible',
    'Design safeguards that protect members who remain when others leave',
    'Evaluate trade-offs between exit-compatibility, commitment and stability in a specific institution'
  ],
  keyTerms: [
    { term: 'Exit-Compatible Governance', definition: 'Institutional structures designed to enable rather than prevent system departure.' },
    { term: 'Portability', definition: 'The ability of members to take an essential asset, such as data, a phone number or a share, with them when they leave.' },
    { term: 'Polycentric Governance', definition: 'A term from Ostrom\'s work for systems with many centers of decision-making, each with real authority, linked by shared rules.' },
    { term: 'Subsidiarity', definition: 'The practice of making decisions at the lowest appropriate level.' },
    { term: 'Residual Duty', definition: 'Continuing ethical obligations to those who remain in systems we have left.' }
  ]
}

export default lesson
