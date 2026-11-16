import type { NewExodologyLesson } from './types'

const lesson: NewExodologyLesson = {
  id: 'a-m4-n4',
  title: 'Microgrid Economics and Governance',
  duration: '20 min',
  type: 'instruction',
  content: {
    introduction: `The earlier lessons in this module treated the microgrid as a technical system: how it islands, what generates its power, how it stores and distributes energy. This lesson turns to the questions that most often decide whether a microgrid succeeds or fails over the long term: who pays for it, who owns it, and who decides how it is run.

These questions are not secondary. Documented community energy projects tend to struggle less with hardware than with finance, maintenance funding, regulation and governance. A technically excellent microgrid that is owned by a distant investor, financed on terms the community cannot meet, or governed by a small group that others do not trust may simply replace one form of dependence with another. In Exodology terms, it would be a change of landlord rather than an increase in exit capability.

The lesson builds on the cooperative and commons governance lessons elsewhere in the Applied path rather than repeating them. It applies their ideas to the specific features of shared energy: high upfront costs, long asset lives, scarce supply during outages, and a continuing relationship with the larger grid and the people who remain fully dependent on it.`,

    sections: [
      {
        title: 'The Economic Shape of a Microgrid',
        content: `Microgrids have a distinctive cost profile. Most of the cost comes **at the start**: generation, storage, inverters, controllers, protection equipment, distribution lines, design and permitting. Operating costs are comparatively low, since sun, wind and water are free, but they are not zero. Monitoring, insurance, maintenance and, above all, **replacement** of components with shorter lives than the project itself must be planned for. Batteries and inverters typically need replacing well before panels or lines wear out.

This shape has three consequences for exit planning:

**The cost of capital matters enormously.** When most costs are paid upfront, the interest rate on borrowed money can determine whether a project is affordable. The same microgrid can be viable with low-cost public or cooperative finance and unaffordable with expensive private loans.

**Reserves must be built from the start.** A project that spends all its income on day-to-day costs will face a crisis when the batteries reach end of life. A dedicated replacement reserve, funded steadily from revenue, is the financial equivalent of the fallback points described in transition path design.

**Resilience value is real but hard to price.** A microgrid earns measurable value through lower bills or payments for exported power. Its most important value, keeping critical loads running during a grid failure, appears only in rare events. Funders and members can underestimate this in normal years. Making the resilience case explicit, for example by naming the clinic, water pump or shelter it protects, helps keep support steady between crises.`
      },
      {
        title: 'Financing Options and What They Cost in Control',
        content: `Every source of money brings conditions, and some conditions shift control. Choosing finance is therefore also a governance decision.

**Grants and public programs**: Public funding for resilience, rural electrification or clean energy can cover upfront costs without repayment. It often comes with reporting requirements, restrictions on use, and timelines that suit the funder rather than the community. Dependence on grants can leave a project without a plan for replacement costs.

**Member equity and community shares**: Members invest directly, often in small amounts, and receive a modest return or a share in governance. In the United Kingdom, community benefit societies have raised money for local energy projects through community share offers. This keeps ownership local but limits the capital available, and it can exclude people who cannot afford to invest unless there are deliberate alternatives.

**Loans**: Debt from banks, credit unions, cooperative lenders or public agencies preserves ownership but creates repayment obligations. The history of rural electrification in the United States is instructive: beginning in the 1930s, federal loans through the Rural Electrification Administration allowed farmers to form electric cooperatives and build lines into areas private utilities had not served. Many of those cooperatives still operate.

**Third-party ownership and power purchase agreements**: A developer owns the equipment and sells power or services to the community. This lowers the upfront burden but places a key asset in outside hands, often for many years. In Exodology terms, a critical node may move from one external actor to another.

A useful question for each option is the one the dependency map always asks: if this financier withdrew or changed its terms, could the community still meet its essential needs?`
      },
      {
        title: 'Ownership Models',
        content: `Ownership determines who carries risk, who receives benefits and, usually, who decides. Common models include:

**Utility ownership**: the incumbent utility builds and runs the microgrid, often to serve critical facilities. This brings expertise and access to capital, but the community gains resilience rather than control.

**Municipal or public ownership**: a local government owns the system as public infrastructure. Accountability runs through elections and public procedures, which can be legitimate but slow.

**Cooperative ownership**: the users own the system and govern it democratically, following the cooperative principles covered in the Cooperative Structures lesson. US rural electric cooperatives are a long-established example at large scale.

**Community or nonprofit ownership**: a community trust or nonprofit owns the system on behalf of residents. On the Isle of Eigg in Scotland, the community-owned island has run its own renewable electricity grid since 2008, combining hydro, wind and solar with battery storage and backup generation.

**Private or third-party ownership**: as described above, an outside company owns and operates the assets.

**Hybrid models**: many projects combine forms. In Denmark, which has a long tradition of cooperative wind ownership, the Middelgrunden offshore wind farm near Copenhagen is roughly half owned by a cooperative of local investors and half by a utility.

A notable example of citizens taking over distribution itself comes from Schönau in Germany, where residents organized after the Chernobyl disaster and, following local referendums, took over the town's power grid in the late 1990s. These are well-documented cases, but each grew from particular laws, histories and local conditions. Practitioners should study them for patterns rather than copy them as templates.`
      },
      {
        title: 'Governance: The Decisions Shared Energy Requires',
        content: `Governance is the set of rules about who decides what, and how. Elinor Ostrom's institutional research distinguishes between day-to-day **operational rules** (how things are done) and **collective-choice rules** (how the operational rules themselves are made and changed). Both are needed. For a community microgrid, the decisions that recur most often include:

**Tariffs and cost sharing**: How are costs divided among members? Flat fees, charges per kilowatt-hour, time-of-use prices that encourage load shifting, or a low-cost basic allowance with higher prices above it? Each has different effects on fairness and on behavior.

**Allocation during scarcity**: When the system islands and storage is limited, who gets power? The load tiers from the previous lesson need a legitimate decision process behind them. Eigg, for example, caps the amount of power each household and business can draw at one time, a rule that shares a limited supply and is widely understood by residents.

**Investment and expansion**: Who decides when to add capacity, admit new members or extend lines? Expansion can strengthen a project or overstretch it.

**Maintenance duties**: Who is responsible for routine checks, repairs and emergency response? Unclear duties are a common cause of slow decline.

**Data and privacy**: Meter data reveals when people are home and what they do. Rules on who may see it protect trust.

**Disputes**: Disagreements over bills, outages or priorities are inevitable. A known, fair process for resolving them, available before conflict arises, is far cheaper than improvising one during a dispute.

These decisions are where the **Principle of Procedural Justice** becomes concrete: those affected should be able to participate, decisions should be transparent, and processes should allow ongoing input and course correction.`
      },
      {
        title: 'Exit and Voice Within the Alternative',
        content: `Albert Hirschman's analysis of exit and voice applies not only to the systems people leave but to the alternatives they build. A microgrid that members cannot leave, and in which they cannot be heard, risks becoming the very kind of system Exodology studies people exiting.

**Voice inside the project**: Members need meaningful ways to raise problems and influence decisions: regular meetings, accessible information, elected boards with real authority, and responsiveness to complaints. When voice is ignored, frustration accumulates and trust erodes, often well before anyone leaves.

**Exit from the project**: Members should be able to leave on fair terms. Clear rules on how shares are redeemed, how outstanding costs are settled, and how a departing household reconnects to the main grid protect individual exit capability. Rules that make leaving prohibitively expensive or practically impossible create new lock-in.

**Exit of the project itself**: Alternatives can fail. Funding may run out, key volunteers may move away, or equipment may reach the end of its life without replacement. A responsible governance framework includes a plan for that outcome: how members are kept supplied, how assets are transferred or sold, and how the community returns to the main grid with dignity. This connects to the re-entry planning taught in the module on designing for failure.

**Keeping the grid connection as a fallback**: For most community microgrids, the main grid connection is both a source of revenue and a safety net. Maintaining it, and maintaining a working relationship with the utility, keeps options open. This is the soft exodus in practice: building a functional alternative without burning bridges before it is proven.`
      },
      {
        title: 'Justice and Those Who Stay',
        content: `The Microgrid Fundamentals lesson raised the concern that energy exit by better-resourced households can shift shared grid costs onto those who remain. Economics and governance are where that concern is either addressed or ignored.

**Who can join?** If membership requires owning a roof, a building or capital to invest, renters and low-income households are excluded by design. Options that widen access include subscription arrangements in which members share the output of a common array without owning equipment, reserved places or reduced fees for low-income households, and siting shared assets at facilities everyone uses.

**Who benefits in a crisis?** The **lifeboat problem** is sharpest during outages. A microgrid that protects a clinic, a cooling or warming center, a water pump or a shelter extends its benefit to people who are not members. Many projects make serving such facilities part of their founding purpose.

**What is owed to the wider system?** Residual duty can take concrete economic forms: continuing to pay a fair share of grid costs, exporting surplus power, sharing designs and lessons openly, and supporting policies that protect customers who remain fully dependent on the main grid.

**Being honest about trade-offs**: Equity measures cost money and can slow projects down. A project that tries to serve everyone may never be built; one that serves only those who can pay may deepen inequality. There is no formula that resolves this. The founding ethics guidance asks practitioners to identify the stakes clearly, look for solutions that honor several principles at once and, where trade-offs are unavoidable, give priority to protecting those with less power.

Shared energy is ultimately a social arrangement that happens to use electrical equipment. Its economics and governance decide whether it increases exit capability for a whole community or only for some.`
      }
    ],

    keyTakeaways: [
      'Microgrids are front-loaded investments: the cost of capital and a steady replacement reserve often decide long-term viability',
      'Every financing source carries conditions; choosing finance is also a decision about who controls a critical asset',
      'Ownership models range from utility and municipal to cooperative, community and third-party, each with different trade-offs in control, capital and accountability',
      'Good governance covers tariffs, allocation during scarcity, maintenance, data, disputes, and fair terms for members to leave',
      'Economic and governance design determine whether a microgrid widens exit capability for a whole community or concentrates it among the few'
    ],

    references: [
      {
        author: 'Hirschman, Albert O.',
        title: 'Exit, Voice, and Loyalty: Responses to Decline in Firms, Organizations, and States',
        year: 1970,
        publisher: 'Harvard University Press',
        relevance: 'Provides the exit and voice framework applied here to members of community energy projects as well as to the grid they partly leave.',
        url: 'https://openlibrary.org/works/OL2745855W'
      },
      {
        author: 'Ostrom, Elinor',
        title: 'Understanding Institutional Diversity',
        year: 2005,
        publisher: 'Princeton University Press',
        relevance: 'Develops the analysis of operational and collective-choice rules used to structure decision-making in shared resource systems such as microgrids.',
        url: 'https://openlibrary.org/works/OL3956154W'
      },
      {
        author: 'Schumacher, E. F.',
        title: 'Small Is Beautiful: A Study of Economics As If People Mattered',
        year: 1973,
        publisher: 'Blond & Briggs',
        relevance: 'Classic argument for human-scale, locally controlled economic and technical arrangements, relevant to choosing ownership and financing for community energy.',
        url: 'https://openlibrary.org/works/OL1622912W'
      }
    ]
  },
  learningObjectives: [
    'Explain how the front-loaded cost profile of microgrids affects financing and replacement planning',
    'Compare grants, member equity, loans and third-party ownership in terms of cost and control',
    'Evaluate ownership models for a community microgrid against criteria of control, accountability and access',
    'Design governance rules for tariffs, allocation during scarcity, maintenance, disputes and member exit',
    'Assess whether a microgrid proposal fulfills residual duty to those who remain on the main grid'
  ],
  keyTerms: [
    { term: 'Cost of Capital', definition: 'The price of the money used to fund a project, such as interest on loans or returns promised to investors; it strongly affects the viability of front-loaded projects.' },
    { term: 'Replacement Reserve', definition: 'Funds set aside steadily from revenue to replace components, such as batteries and inverters, that wear out before the project ends.' },
    { term: 'Power Purchase Agreement', definition: 'A contract under which an outside owner of generation equipment sells its output to a customer at agreed terms over many years.' },
    { term: 'Collective-Choice Rules', definition: 'In institutional analysis, the rules that determine how operational rules are made and changed, and by whom.' },
    { term: 'Tariff Design', definition: 'The structure of charges members pay for energy and services, which shapes fairness, cost recovery and energy use behavior.' }
  ]
}

export default lesson
