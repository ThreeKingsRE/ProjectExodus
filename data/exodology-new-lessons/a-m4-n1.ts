import type { NewExodologyLesson } from './types'

const lesson: NewExodologyLesson = {
  id: 'a-m4-n1',
  title: 'Microgrid Fundamentals',
  duration: '20 min',
  type: 'instruction',
  content: {
    introduction: `Foundations introduced the microgrid as a middle path between complete grid dependence and full off-grid living. This module turns that idea into design practice. Before comparing generation technologies, sizing batteries or choosing an ownership model, a practitioner needs a clear picture of what a microgrid actually is, how it behaves when the wider grid fails, and what kind of exit it represents.

That last question matters most for Exodology. Electricity is one of the deepest structural dependencies in modern life: water pumping, refrigeration, heating controls, communications, medical devices and payment systems all rely on it. A community that cannot keep critical loads running during a grid outage has very low exit capability in energy, whatever its values or intentions. A well-designed microgrid raises that capability without forcing anyone into a hard exodus from the grid.

This lesson explains how microgrids work, where they sit on the response spectrum, what documented cases show, and what responsibilities come with building one. The lessons that follow examine generation options, storage and distribution, and the economics and governance of shared energy.`,

    sections: [
      {
        title: 'What a Microgrid Is',
        content: `The United States Department of Energy describes a microgrid as a group of interconnected loads and distributed energy resources within clearly defined electrical boundaries that acts as a single controllable entity with respect to the grid, and that can connect and disconnect from the grid so that it can operate either grid-connected or in "island mode". Each part of that definition carries meaning for exit planning:

**Loads**: the buildings, pumps, refrigerators and devices that use electricity. Some are critical, some can wait.

**Distributed energy resources**: local generation (solar arrays, wind turbines, micro-hydro, generators) and local storage (batteries, thermal storage).

**Clearly defined boundaries**: the microgrid knows where it begins and ends. Usually there is a single **point of common coupling**, a switch where it meets the wider grid.

**A single controllable entity**: a controller coordinates generation, storage and loads so that the whole behaves as one system rather than many unrelated devices.

**Connect and disconnect**: this is the defining feature. A building with rooftop solar is not automatically a microgrid; a fully off-grid cabin is not one either. A microgrid can do both: share power with the main grid in normal times and stand alone when needed.

Microgrids exist at many scales: a single hospital or military base, a university campus, a neighborhood, a village, or a small island. The principles are the same; the governance questions grow with the number of people involved.`
      },
      {
        title: 'How Islanding Works',
        content: `Understanding the sequence of an outage helps explain why microgrids are more than "solar plus batteries".

1. **Normal operation**: the microgrid is connected. It may use its own generation, import power when local supply is short and export surplus. The main grid sets the frequency and voltage that every device follows.

2. **Disturbance**: the grid fails or becomes unstable. The controller detects the change and opens the switch at the point of common coupling, separating the microgrid.

3. **Island operation**: someone now has to set frequency and voltage locally. This job falls to a **grid-forming** source, typically a battery inverter designed for the purpose or a generator. Ordinary grid-following inverters, like those on most rooftop solar systems, can only follow a signal that already exists.

4. **Load management**: local supply is limited, so the controller may shed deferrable loads and protect critical ones. The dependency map tells designers in advance which is which.

5. **Reconnection**: when the grid returns, the microgrid synchronizes with it before closing the switch again.

This explains a common surprise. Standard grid-tied solar systems are required to shut down when the grid goes down, so that they do not energize lines that utility workers believe are dead. Interconnection standards such as IEEE 1547 in the United States set these safety requirements. A household with rooftop solar but no islanding capability is therefore often without power in a blackout. Generation alone does not create exit capability; the ability to island safely does.`
      },
      {
        title: 'Microgrids on the Response Spectrum',
        content: `Where does a microgrid sit on the response spectrum of optimization, reform, exit and collapse? The answer depends on design.

Foundations offered a test for distinguishing reform from exit: if the original system disappeared tomorrow, would participants be fine or in crisis? Apply it to energy:

- A building that installs efficient lighting has **optimized**. It remains entirely dependent on the grid.
- A building with grid-tied solar and no storage has partly reduced its consumption but, as the previous section showed, may still go dark in an outage. Its dependence is lower in cost terms but almost unchanged in resilience terms.
- A microgrid that can carry its critical loads through an extended outage passes the test for those loads. It is a **partial exit**: a soft exodus that keeps the grid connection while building a functional alternative.
- A fully off-grid system is a **hard exodus** from the grid, with all the costs and risks that implies.

Most communities will find the soft exodus most appropriate. It follows the principle from transition planning of never burning bridges before alternatives are proven. The microgrid is a **parallel system**: it is built alongside the existing grid, tested during normal times, and relied on when the regime fails.

Dependency mapping keeps the analysis honest. A microgrid reduces dependence on the transmission system, but it introduces or retains others: manufacturers and supply chains for panels, inverters and batteries; fuel for backup generators; software and replacement parts; and the skills to maintain everything. Energy exit is never total. The question is which dependencies are critical and whether the new ones are more distributed, more local and more governable than the old ones.`
      },
      {
        title: 'What Documented Cases Show',
        content: `Several widely reported cases illustrate both the promise and the limits of microgrids. They are summarized briefly here; practitioners should read fuller accounts before drawing detailed conclusions.

**Princeton University and Hurricane Sandy (2012)**: When the storm caused widespread outages in New Jersey, Princeton's campus energy plant, which combines on-site generation with the ability to separate from the utility grid, kept much of the campus powered. The university was able to offer power and shelter to emergency workers and community members. This case is often cited to show the value of islanding for institutions that serve wider communities.

**Puerto Rico after Hurricane Maria (2017)**: Damage to the island's centralized grid left many residents without electricity for months. In the aftermath, community organizations, including Casa Pueblo in the mountain town of Adjuntas, expanded solar and battery systems to keep critical services such as a community center and local businesses running. The case shows how centralized failure can push communities from reform toward exit, and how local capacity built before a crisis is worth far more than capacity built after.

**Isolated community grids**: Many island and remote communities, such as those in parts of Alaska, have always operated their own small grids, often relying on imported diesel. Several have added hydro, wind and storage to reduce that dependence. They show that small grids can be run reliably for decades, and that the hardest part is usually long-term maintenance and finance rather than the technology itself.

The common lesson is that microgrids prove their worth during failures of the larger system, which means their value is easy to underestimate in normal times.`
      },
      {
        title: 'Exiting Well: Responsibilities to Those Who Stay',
        content: `Energy exit raises the ethical questions explored in the Ethics of Exit module in a particularly sharp form, because the grid is a shared system with large fixed costs.

**Who pays for the grid that remains?** Transmission lines, substations and poles must be paid for whether or not customers buy much electricity. If wealthier households and institutions reduce their purchases or leave entirely, those costs may be spread over fewer remaining customers, who are often less able to pay. Energy economists sometimes call the extreme version of this a "utility death spiral". Whether it happens depends heavily on rate design and regulation, but the concern is real and is the **lifeboat problem** in electrical form.

**Residual duty in practice**: Responsible microgrid projects can keep their grid connection, continue to contribute to shared costs, export surplus power, and support policies that protect low-income customers. Exit from dependence does not have to mean withdrawal of contribution.

**Designing for the vulnerable**: The **justice orientation** principle asks who benefits. A microgrid that powers a gated development during outages serves few. One that powers a clinic, a cooling center, a water pump or a shelter extends its benefits to people who could never build their own. Many community microgrid projects deliberately start with such facilities.

**Procedural justice**: Siting batteries, generators and lines affects neighbors. Those affected deserve a voice in the decision, and meaningful consent where possible. The governance lesson later in this module develops this further.`
      },
      {
        title: 'Limits, Barriers and Honest Expectations',
        content: `Microgrids are not a universal answer, and Exodology's commitment to **intellectual honesty** requires naming their limits.

**Cost**: Islanding capability, controllers, protection equipment and storage add substantial cost compared with simple grid-tied generation. For some communities, investment in efficiency or in shared emergency facilities may raise exit capability more per dollar spent.

**Regulation**: In many jurisdictions, selling electricity to neighbors or running private lines across public streets is restricted to licensed utilities. Rules vary widely and change over time. Navigating them is a political as well as technical task, an example of the principle of **political embeddedness**: incumbent actors may resist arrangements that reduce their role.

**Complexity and skills**: A microgrid needs people who understand its controls, protection and maintenance. If that knowledge sits with one contractor or one volunteer, the project has simply created a new critical node. Training and documentation are part of the design.

**Limited supply in island mode**: An islanded microgrid usually cannot supply everything it supplies when connected. Expectations must be set in advance, so that load shedding during an outage is understood rather than resented.

**Avoiding technological determinism**: Hardware enables exit but does not determine its character. Two microgrids with identical equipment can produce very different outcomes depending on who owns them, who decides, and whom they serve. The remaining lessons in this module treat generation, storage and governance as one design problem rather than three separate ones.`
      }
    ],

    keyTakeaways: [
      'A microgrid is a bounded, controllable local energy system that can operate both connected to the grid and in island mode',
      'Exit capability in energy comes from the ability to island safely and carry critical loads, not from generation alone',
      'Most community microgrids are a soft exodus: parallel systems that keep the grid connection while reducing critical dependence',
      'Responsible energy exit attends to those who stay, including shared grid costs and access for vulnerable people',
      'Cost, regulation, skills and governance limit what microgrids can do and must be addressed in design'
    ],

    references: [
      {
        author: 'Lovins, Amory B.',
        title: 'Soft Energy Paths: Toward a Durable Peace',
        year: 1977,
        publisher: 'Ballinger / Friends of the Earth',
        relevance: 'Influential early argument for diverse, distributed, human-scale energy systems as an alternative to centralized supply.',
        url: 'https://openlibrary.org/works/OL5898369W'
      },
      {
        author: 'Lovins, Amory B. et al.',
        title: 'Small Is Profitable: The Hidden Economic Benefits of Making Electrical Resources the Right Size',
        year: 2002,
        publisher: 'Rocky Mountain Institute',
        relevance: 'Detailed analysis of the reliability, resilience and economic value of distributed electrical resources.',
        url: 'https://openlibrary.org/works/OL19014639W'
      },
      {
        author: 'Hirschman, Albert O.',
        title: 'Exit, Voice, and Loyalty: Responses to Decline in Firms, Organizations, and States',
        year: 1970,
        publisher: 'Harvard University Press',
        relevance: 'Foundational account of exit as a response to decline, useful for weighing grid defection against staying and advocating for reform.',
        url: 'https://openlibrary.org/works/OL2745855W'
      }
    ]
  },
  learningObjectives: [
    'Define a microgrid and identify its main components, including the point of common coupling and controller',
    'Explain the sequence of islanding and why grid-tied solar alone does not provide outage resilience',
    'Classify energy projects on the response spectrum using the reform-versus-exit test',
    'Analyze the responsibilities of microgrid builders to customers who remain on the main grid',
    'Evaluate the cost, regulatory and skills barriers that limit microgrid projects'
  ],
  keyTerms: [
    { term: 'Microgrid', definition: 'A group of interconnected loads and local energy resources within defined boundaries that is controlled as one system and can operate connected to the grid or in island mode.' },
    { term: 'Islanding', definition: 'Intentionally disconnecting a microgrid from the wider grid and continuing to supply its loads from local resources.' },
    { term: 'Point of Common Coupling', definition: 'The point, usually a switch, where a microgrid connects to and separates from the wider grid.' },
    { term: 'Grid-Forming Source', definition: 'A generator or inverter able to set frequency and voltage for an islanded system, rather than only following a signal from the grid.' },
    { term: 'Critical Load', definition: 'An electrical use that must continue during an outage, such as medical equipment, water pumping or refrigeration of medicines.' }
  ]
}

export default lesson
