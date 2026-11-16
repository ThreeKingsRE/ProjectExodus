import type { NewExodologyLesson } from './types'

const lesson: NewExodologyLesson = {
  id: 's-m3-n3',
  title: 'Protecting Vulnerable Populations',
  duration: '20 min',
  type: 'instruction',
  content: {
    introduction: `Justice Frameworks for Exit opened with three questions: who gets to exit, who bears the costs, and how do we protect those who cannot leave? The previous two lessons addressed the first two. This lesson addresses the third. Even the most inclusive transition will leave some people inside the old system for longer, or move them before they are ready, and these are often the people least able to cope if something goes wrong.

The ethics guidelines are direct on this point. When trade-offs cannot be avoided, priority goes to protecting those with less power, and practitioners should identify potential unintended consequences before acting. The Foundations path adds the idea of residual duty: obligations to those who remain in systems we have left. At the scale of Strategic Exodology, residual duty becomes a design responsibility for whole populations.

This lesson explains what vulnerability means in a transition, how transitions harm the most exposed, what safeguards can protect them, how precaution applies, and how to protect people without taking away their voice.`,

    sections: [
      {
        title: 'Understanding Vulnerability in Transitions',
        content: `In disaster and development research, vulnerability is usually understood not as a personal weakness but as a condition produced by social, economic and political circumstances. The book At Risk, by Piers Blaikie, Terry Cannon, Ian Davis and Ben Wisner, argued that disasters happen when hazards meet people whose circumstances leave them exposed and with little capacity to cope or recover, and that those circumstances have causes that can be traced and changed.

Applied to transitions, this suggests three questions about any group:

- **Exposure**: how directly will the change affect them? People who depend heavily on a service that is being replaced are more exposed than those who use it occasionally.
- **Sensitivity**: how much harm would a disruption cause? A day without power is an inconvenience for many households and a medical emergency for someone who relies on powered equipment.
- **Capacity to cope**: what savings, networks, information and alternatives can they draw on? This is closely related to exit capability.

Groups often at risk include older people living alone, disabled people, people with serious health conditions, children, people on low or insecure incomes, people with insecure legal status, and people in remote places. But vulnerability is not a fixed list. It changes as a transition unfolds, and a group that is secure under the old system can become vulnerable during the handover to the new one.`
      },
      {
        title: 'How Transitions Harm the Most Exposed',
        content: `Two well-documented studies show how harm concentrates on the vulnerable even when a system as a whole appears to function.

In Poverty and Famines, Amartya Sen argued that several major famines occurred without a large fall in overall food supply. People starved because their **entitlements**, their ability to obtain food through wages, production or trade, collapsed while food was still available to others. The lesson for transitions is that aggregate measures can look healthy while particular groups lose the means to meet basic needs, for example when wages in a declining industry fall faster than prices.

In Heat Wave, the sociologist Eric Klinenberg examined the 1995 Chicago heat wave, in which hundreds of people died. He found that deaths were concentrated among older, poorer and socially isolated residents, and in neighborhoods where public life and local services had declined. His account shows how social isolation and weakened institutions turn an external shock into a disaster for particular people.

Transitions create similar risks in several ways:

- **Handover gaps**, when the old system winds down before the new one works reliably.
- **Collapsing entitlements**, when incomes, prices or eligibility rules change faster than people can adjust.
- **Invisible dependence**, when those most reliant on a service are not known to the people planning its change.
- **Erosion of support**, when the transition weakens the local institutions people turn to in a crisis.`
      },
      {
        title: 'Safeguards for Those Most Exposed',
        content: `Safeguards are measures that limit how badly the most exposed people can be harmed while a system changes. Common approaches in public policy and just transition practice include:

**Continuity of essential services.** The Foundations lessons describe parallel systems, in which alternatives are built while the old system still operates. For essential services such as water, energy, health care and food, the old arrangement should not be removed until the new one has been shown to work for the people who depend on it most.

**Minimum guarantees.** Floors on income, service levels or affordability give people a level they cannot fall below during the transition, such as protection from disconnection of heating in winter or guaranteed access to a basic quantity of water.

**Knowing who is at risk.** Some systems keep voluntary registers of people who need extra help. In Great Britain, for example, energy and water companies operate a Priority Services Register for customers in vulnerable circumstances. Such registers allow planners to contact people before a change and during an outage, though they depend on people knowing about them and choosing to sign up.

**Targeted and proactive support.** Outreach, advice and practical help delivered through trusted local organizations, rather than relying on people to request help when they are already in crisis.

**Retaining an opt-out where possible.** Keeping a simple version of the old option available for people who cannot yet move, for a defined period, reduces the risk of forcing people into arrangements that fail them.

**Grievance and redress.** Clear ways to report harm and obtain a remedy quickly, so that problems are found and fixed while the transition is still under way.`
      },
      {
        title: 'Precaution, Testing and Reversibility',
        content: `The Principle of Precaution asks practitioners to identify potential unintended consequences before acting, to prefer reversible interventions when outcomes are uncertain, and to build in monitoring and adaptation. For vulnerable populations, precaution has specific practical meanings.

**Design for the margin, not the average.** Test every major change against the circumstances of the most exposed household rather than the typical one. A new digital service that works for most users may fail entirely for someone without internet access or with limited sight.

**Pilot before scaling.** Trying a change in a limited area, with close attention to how it affects vulnerable groups, reveals problems while they can still be corrected. Niches play this role in transition theory: they are protected spaces where new configurations can be tested.

**Set pause conditions in advance.** Agree before the transition begins which signs of harm will cause it to be slowed, paused or reversed, and who has the authority to decide. Without this, momentum and sunk costs make it hard to stop even when harm becomes visible.

**Monitor outcomes by group.** Average indicators can hide concentrated harm, as Sen's work on famines shows. Monitoring should track outcomes for the groups identified as most exposed.

Precaution has costs. It can slow a transition, and delay can itself harm vulnerable people who are trapped in a failing system. The response spectrum is a reminder that collapse is what happens when exit and reform are blocked, so precaution should shape how a transition proceeds rather than becoming a reason never to proceed.`
      },
      {
        title: 'Protection Without Paternalism',
        content: `Protection can go wrong. Measures meant to shield people can take decisions away from them, label them in ways that stigmatize, or treat them as passive recipients rather than participants. A Strategic Exodologist has to hold two commitments together: protecting those most at risk, and respecting their agency.

Several practices help:

- **Ask, do not assume.** People are usually the best judges of their own needs and risks. The Principle of Informed Engagement calls for clear communication and meaningful consent from affected parties where possible.
- **Let people define their own needs.** Self-identification, as in voluntary registers, respects dignity better than categorizing people without their knowledge, although it can miss those who are unaware or distrustful.
- **Include vulnerable groups in governance.** The Principle of Procedural Justice calls for meaningful participation and respect for experiential knowledge. Organizations led by disabled people, older people or low-income communities can identify risks that planners would not.
- **Avoid trapping people in protection.** Safeguards should keep the door to exit open. A protection that only preserves people's position in a failing system can become another form of lock-in.

There are genuine tensions here. Respecting someone's choice to stay in a declining system may expose them to harm; pressing them to move may override their judgment. There is no formula that resolves this. What the ethics guidelines ask is that such choices be made openly, with those affected, and documented so that practice can learn from them.`
      }
    ],

    keyTakeaways: [
      'Vulnerability is a condition produced by circumstances, shaped by exposure, sensitivity and capacity to cope, and it can change during a transition',
      'Harm often concentrates on particular groups even when aggregate measures look healthy, as studies of famines and the 1995 Chicago heat wave show',
      'Safeguards include continuity of essential services, minimum guarantees, knowing who is at risk, proactive support, opt-outs and redress',
      'Precaution means designing for the most exposed, piloting, agreeing pause conditions and monitoring outcomes by group, without becoming a reason never to act',
      'Protection must respect agency and keep the door to exit open rather than creating a new form of lock-in'
    ],

    references: [
      {
        author: 'Blaikie, Piers; Cannon, Terry; Davis, Ian & Wisner, Ben',
        title: 'At Risk: Natural Hazards, People\'s Vulnerability and Disasters',
        year: 1994,
        publisher: 'Routledge',
        relevance: 'Influential account of vulnerability as a socially produced condition, useful for identifying who is most exposed when systems change.',
        url: 'https://openlibrary.org/works/OL19228959W'
      },
      {
        author: 'Sen, Amartya',
        title: 'Poverty and Famines: An Essay on Entitlement and Deprivation',
        year: 1981,
        publisher: 'Clarendon Press',
        relevance: 'Shows how particular groups can lose access to basic needs even when aggregate supply is adequate, a key risk in transitions.',
        url: 'https://openlibrary.org/works/OL116532W'
      },
      {
        author: 'Klinenberg, Eric',
        title: 'Heat Wave: A Social Autopsy of Disaster in Chicago',
        year: 2002,
        publisher: 'University of Chicago Press',
        relevance: 'Demonstrates how social isolation and weakened institutions concentrate the harm of a shock on vulnerable people.',
        url: 'https://openlibrary.org/works/OL17735369W'
      }
    ]
  },
  learningObjectives: [
    'Explain vulnerability in terms of exposure, sensitivity and capacity to cope',
    'Analyze how handover gaps, collapsing entitlements and invisible dependence concentrate transition harm',
    'Select safeguards appropriate to the groups most exposed in a given transition',
    'Apply the Principle of Precaution through piloting, pause conditions and group-level monitoring',
    'Evaluate protective measures for the risk of paternalism and new lock-in'
  ],
  keyTerms: [
    { term: 'Vulnerability', definition: 'A condition, produced by social, economic and political circumstances, in which people are exposed to harm and have limited capacity to cope or recover.' },
    { term: 'Residual Duty', definition: 'Ongoing obligations to those who remain in systems we have left.' },
    { term: 'Safeguard', definition: 'A measure that limits how badly the most exposed people can be harmed while a system changes.' },
    { term: 'Entitlement', definition: 'A person\'s ability to obtain essentials through wages, production, trade or support (a term from Amartya Sen\'s work on famines).' },
    { term: 'Handover Gap', definition: 'A period in which an old system has been withdrawn before its replacement works reliably for those who depend on it.' }
  ]
}

export default lesson
