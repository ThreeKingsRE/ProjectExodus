import type { NewExodologyLesson } from './types'

const lesson: NewExodologyLesson = {
  id: 'a-m3-n4',
  title: 'Commons-Based Water Governance',
  duration: '20 min',
  type: 'instruction',
  content: {
    introduction: `The earlier lessons in this module treated water autonomy largely as a design problem: how to collect rain, store it, treat it, and reuse wastewater safely. But once more than one household shares a tank, a well, a spring, an irrigation channel or a treatment system, the hardest questions stop being technical. Who decides how much each person may draw? What happens in a drought? Who pays for repairs, and what happens to someone who does not? These are questions of **governance**, and they decide whether a shared water system becomes a durable alternative or quietly collapses.

Water Commons and Exit Alternatives in the Foundations path introduced the idea of the **water commons**: water managed collectively by the people who use it, rather than solely by a state agency or a private company. This lesson turns that idea into practice. It explains why water is so often governed as a shared resource, looks at long-lived, well-documented water commons, applies the commons design principles identified by Elinor Ostrom to water, and examines the equity and conflict problems that every shared water system eventually faces.

For Exodology, commons-based governance matters for a specific reason. Individual water autonomy is expensive and tends to favor those with land, roofs and savings, which is the **lifeboat problem** in its sharpest form. A well-governed commons is one of the main ways to make exit capability collective rather than private. It is also, as the final section shows, a system that people may one day need to leave, and leaving it well is part of the same ethical practice.`,

    sections: [
      {
        title: 'Water as a Shared Resource',
        content: `Economists and political scientists describe many water sources as **common-pool resources**. Two features define them. First, it is difficult or costly to exclude people from using them: an aquifer extends under many properties, and a river passes many intakes. Second, use is subtractable: water one person pumps or diverts is not available to the next user. Together these features create a familiar risk. Each user gains the full benefit of taking a little more, while the cost of depletion or pollution is spread across everyone.

Garrett Hardin's 1968 essay on the "tragedy of the commons" argued that such resources would be overused unless they were privatized or placed under central state control. That argument was influential and is still often repeated, but it has been widely contested. Elinor Ostrom's research, summarized in Governing the Commons (1990), documented many communities that had managed common-pool resources sustainably for generations through rules they devised and enforced themselves. Many of her cases were irrigation systems and groundwater basins. Her work showed that the choice is not simply between market and state; user communities can be effective governors when certain conditions are met.

For exit planning this matters in two ways. Shared water is unavoidable, since even a household rain tank changes runoff that others use. And the most robust forms of water autonomy are often collective: a neighborhood cistern, a cooperative well, a shared treatment system. The governance question therefore cannot be skipped. A shared system without agreed rules is not a commons; it is an unmanaged resource waiting for a dispute.`
      },
      {
        title: 'Learning From Long-Lived Water Commons',
        content: `Following the methodological principle of historical grounding, practitioners can learn a great deal from water commons that have lasted for centuries. A few widely documented examples:

**The Water Tribunal of Valencia, Spain.** Farmers on the irrigation canals of the Valencia plain elect representatives who sit as a tribunal and settle water disputes in weekly public sessions held outside the city's cathedral. Proceedings are oral and quick. The tribunal is many centuries old and was inscribed on UNESCO's list of the Intangible Cultural Heritage of Humanity in 2009. Ostrom discusses the Spanish irrigation communities (huertas) as examples of durable self-governance.

**The acequias of New Mexico, United States.** These community irrigation ditches, with roots in Spanish colonial and earlier traditions, are governed by their members, who elect commissioners and a mayordomo responsible for distributing water and organizing the annual cleaning of the ditch. Members share water in dry years according to locally agreed customs, and New Mexico law recognizes acequias as local governing bodies.

**The subak of Bali, Indonesia.** Rice farmers belong to subak associations that share water from common channels, coordinated through a network of water temples. The anthropologist J. Stephen Lansing argued in Priests and Programmers that this temple network coordinated irrigation and planting schedules across whole watersheds, and that disrupting it during the Green Revolution period contributed to water and pest problems. The subak landscape was inscribed as a UNESCO World Heritage site in 2012.

These cases share features worth noticing: rules made by users, visible and regular meetings, someone responsible for distribution, shared maintenance labor, and quick, local conflict resolution. None of them is a story of individual self-sufficiency.`
      },
      {
        title: 'Applying Commons Design Principles to Water',
        content: `Ostrom identified eight design principles common to long-lasting commons, which you will study in general form later, in the Community-Scale Application module. Here they are applied specifically to a community water system such as a shared cistern, cooperative well or small irrigation scheme.

1. **Clear boundaries.** Define both the water (which source, which catchment, which tank) and the members (who holds a right to draw, and how new households join).
2. **Rules that fit local conditions.** Allocation and contribution rules should match the real hydrology and the community. A rule designed for a wet year may be useless in a drought.
3. **Collective choice.** Those affected by the rules should be able to take part in changing them, through regular meetings with clear decision procedures.
4. **Monitoring.** Meters, tank-level records and water quality tests make use visible. Monitors should be accountable to members, and ideally be members themselves.
5. **Graduated sanctions.** Responses to rule-breaking start small, such as a reminder or a modest fee, and escalate only for repeated or serious breaches. Harsh first penalties destroy trust.
6. **Accessible conflict resolution.** A low-cost, quick way to settle disputes, like the Valencia tribunal, prevents small disagreements from becoming feuds.
7. **Recognition by external authorities.** The commons needs legal standing, for example as a registered association, cooperative or recognized water user group, and its water rights should be secure under local law.
8. **Nested governance.** Household systems sit within neighborhood systems, which sit within a watershed. Each level should coordinate with the ones above and below it.

A practical exercise is to take any shared water arrangement you know, even an informal one between two neighbors, and ask which of these eight are present, which are missing, and which missing one would cause the first serious conflict.`
      },
      {
        title: 'Organizational Forms and the Public System',
        content: `Water commons take several legal and organizational forms, and the right one depends on scale, law and the community's capacity.

**Informal agreements** between a few households can work well for small shared tanks, but they rarely survive changes in membership or a serious dispute. Writing down even simple rules is a significant step.

**Water user associations and committees** are widely used for irrigation and for rural drinking water supply. In many countries, community water committees manage village handpumps, springs or piped schemes. Experience in the water, sanitation and hygiene sector has shown that construction is the easy part; many community systems fail after a few years because funds for repairs, spare parts or trained caretakers were never secured. Governance and finance for maintenance are not extras.

**Cooperatives and mutual water companies**, owned by their members, operate many small rural water systems in the United States and elsewhere. They bring formal accounting, elected boards and legal standing, at the cost of more administration.

It is important not to set commons against public water as if they were opponents. Public utilities are accountable, at least in principle, to all residents, and many communities have chosen to strengthen public control rather than exit it. Paris, for example, returned its water services to a public operator in 2010 after decades of private management. From an Exodological perspective, community governance, public management and hybrid arrangements are all positions on the response spectrum. A commons is most appropriate where public service is absent or unreliable, or where a local system can serve a function better, and it should coordinate with the public system rather than undermine it.`
      },
      {
        title: 'Scarcity, Equity and Conflict',
        content: `Every shared water system eventually faces a shortage. How it allocates water when there is not enough is the real test of its governance, and of its justice.

**Priority by need.** The water need tiers from the first lesson of this module offer a principled starting point: drinking and cooking water first, then hygiene and sanitation, then productive uses. Many communities write this ordering into their rules before a drought, when it is easier to agree.

**Proportional versus priority shares.** Some systems cut every member's share by the same proportion in a shortage; others protect earlier or larger rights holders first. Each approach has a logic, and each creates winners and losers. The Principle of Distributive Justice asks practitioners to make these effects explicit and to protect those with the least capacity to cope.

**Elite capture.** Water committees can be dominated by the most powerful members, who may then direct repairs, extensions or exemptions to themselves. Rotation of roles, open accounts and public decisions reduce this risk.

**Who sits at the table.** In many places the people who carry, use and manage household water day to day are not the people who sit on water committees. Development practice has documented that women in particular are often under-represented in water governance despite bearing much of the burden of water collection. The Principle of Procedural Justice calls for deliberate inclusion, not just open invitations.

Consider a hypothetical case: twelve households share a neighborhood cistern fed by roof catchment. In a dry summer, two households with large gardens continue irrigating while others ration drinking water. Without an agreed shortage rule, the dispute becomes personal. With one, it becomes a matter of applying a decision everyone has already made.`
      },
      {
        title: 'Exit, Voice and Leaving a Commons Well',
        content: `Albert Hirschman's Exit, Voice, and Loyalty offers a useful caution for water commons. When the members most able to leave a declining organization do so, they often take with them the voice that might have repaired it. In water, a common pattern is for wealthier households to install private tanks or filters when public supply deteriorates, which can weaken political pressure to fix the shared system. Commons-based governance is partly an answer to this problem: it keeps exit collective and keeps voice inside the group. But the same dynamic can occur within a commons, if its most capable members drift away and leave others with failing infrastructure.

Three practices help a water commons honor its responsibilities to those who stay:

- **Clear terms for leaving.** Rules should state what a departing member owes, for example a share of outstanding repair costs, and what they may take or must leave behind. This prevents exit from becoming extraction.
- **Succession and knowledge transfer.** Operation, testing and repair knowledge should not live in one person's head. Written procedures and trained deputies protect the system when key people leave.
- **Managed wind-down or handover.** Sometimes a community system should end, perhaps because a reliable public connection has become available or the source is no longer safe. Ending it well means a planned transfer of users, assets and records, with safe decommissioning of wells and tanks, rather than letting it decay until it fails. This is the difference between managed exit and collapse, applied to the alternative itself.

Residual duty applies in both directions. Members of a water commons retain obligations to the wider public system and to downstream users, and the commons retains obligations to any member who cannot easily leave it.`
      }
    ],

    keyTakeaways: [
      'Many water sources are common-pool resources, so shared water systems need agreed rules to avoid overuse, neglect and conflict',
      'Long-lived water commons such as the Valencia tribunal, New Mexico acequias and Balinese subak show that user communities can govern water durably',
      'Ostrom\'s design principles, applied to water, give a practical checklist for boundaries, allocation, monitoring, sanctions, conflict resolution and legal recognition',
      'Shortage rules decided in advance, inclusive participation and safeguards against elite capture are central to water justice',
      'A commons should coordinate with public systems, set clear terms for leaving, and be wound down deliberately rather than allowed to collapse'
    ],

    references: [
      {
        author: 'Ostrom, Elinor; Gardner, Roy; Walker, James',
        title: 'Rules, Games, and Common-Pool Resources',
        year: 1994,
        publisher: 'University of Michigan Press',
        relevance: 'Builds on Ostrom\'s earlier Governing the Commons with experimental and field studies, including irrigation systems, of how user-made rules shape the use of common-pool resources.',
        url: 'https://openlibrary.org/works/OL3956151W'
      },
      {
        author: 'Lansing, J. Stephen',
        title: 'Priests and Programmers: Technologies of Power in the Engineered Landscape of Bali',
        year: 1991,
        publisher: 'Princeton University Press',
        relevance: 'An influential study of the Balinese subak and water temple network, showing how community institutions coordinate water across a whole watershed.',
        url: 'https://openlibrary.org/works/OL7992005W'
      },
      {
        author: 'Hirschman, Albert O.',
        title: 'Exit, Voice, and Loyalty: Responses to Decline in Firms, Organizations, and States',
        year: 1970,
        publisher: 'Harvard University Press',
        relevance: 'Explains how the exit of the most capable members can weaken voice, a dynamic that affects both public water systems and community water commons.',
        url: 'https://openlibrary.org/works/OL2745855W'
      }
    ]
  },
  learningObjectives: [
    'Explain why many water sources are common-pool resources and why shared water systems require governance',
    'Compare documented water commons and identify the governance features they share',
    'Apply Ostrom\'s commons design principles to evaluate a community water arrangement',
    'Design shortage allocation rules that address distributive and procedural justice',
    'Describe how members can leave, and communities can wind down, a water commons without harming those who stay'
  ],
  keyTerms: [
    { term: 'Common-Pool Resource', definition: 'A term from economics and political science for a resource, such as an aquifer or river, from which it is hard to exclude users and where one person\'s use reduces what is available to others.' },
    { term: 'Water Commons', definition: 'Water resources managed collectively by the communities that use them, rather than solely by states or markets.' },
    { term: 'Water User Association', definition: 'A formal or informal organization of water users that sets rules, allocates water and maintains a shared system.' },
    { term: 'Graduated Sanctions', definition: 'In commons governance, responses to rule-breaking that begin mildly and escalate only for repeated or serious violations.' },
    { term: 'Elite Capture', definition: 'A situation, described in development studies, where the most powerful members of a group take control of shared resources or decisions for their own benefit.' },
    { term: 'Residual Duty', definition: 'Continuing ethical obligations to those who remain in systems we have left.' }
  ]
}

export default lesson
