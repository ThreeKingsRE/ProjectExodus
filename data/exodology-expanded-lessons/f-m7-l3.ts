import type { ExpandedExodologyLesson } from './types'

const lesson: ExpandedExodologyLesson = {
  id: 'f-m7-l3',
  title: 'Microgrids and Energy Independence',
  duration: '20 min',
  type: 'instruction',
  content: {
    introduction: `Decentralized energy alternatives offer exit from grid dependence. Microgrids represent a middle path between complete grid dependence and full off-grid living.

The previous lessons showed that the large grid is vulnerable at every level, from fuel supply to the neighborhood pole, and that failures far away can cascade quickly. One response is to leave the grid entirely, but full off-grid living is expensive, demands a great deal of skill and storage, and gives up the real benefits of sharing power across a wide area. A microgrid takes a different approach: it keeps the connection when the grid is working and lets a building, campus or community keep essential power when it is not.

In Exodology's terms, a microgrid is a clear example of **parallel systems** and of a **soft exodus**: alternative capacity built alongside the existing system, reducing dependence step by step rather than in one abrupt break. This lesson explains what a microgrid is, what it offers, the main ways microgrids are built, and the challenges that any honest assessment must include.`,

    sections: [
      {
        title: 'What is a Microgrid?',
        content: `A local energy system that can operate independently or connected to the main grid. Includes generation (solar, wind, batteries), storage, distribution, and controls.

The defining feature is the ability to switch between two modes. In **grid-connected mode**, the microgrid exchanges power with the main grid, buying when local supply is short and, where rules allow, selling when it has a surplus. In **island mode**, it disconnects at a single point of connection and runs on its own resources. The United States Department of Energy describes a microgrid in similar terms: a group of connected loads and energy resources within clear electrical boundaries that acts as a single controllable unit and can connect to or disconnect from the grid.

Each component has a distinct role:

- **Generation** may include solar panels, small wind turbines, small hydropower, or generators running on natural gas, diesel or biofuels. Many existing microgrids still rely partly on fossil-fueled generators, so a microgrid is not automatically a renewable system.
- **Storage**, most often batteries today, smooths out the variability of solar and wind and supplies power during the first moments of an outage.
- **Distribution** is the local wiring that links generation, storage and buildings within the microgrid.
- **Controls** are the computer systems that balance supply and demand, decide when to island and reconnect, and protect equipment.

It is worth noting what a microgrid is not. Ordinary rooftop solar connected to the grid is usually designed to switch off automatically during an outage, so that it does not send power into lines that repair crews believe are dead. Without storage and the right controls, a solar home loses power along with its neighbors.`
      },
      {
        title: 'Microgrid Benefits',
        content: `Resilience through islanding during outages. Local control over energy. Integration of renewables. Reduced transmission losses. Community economic benefits.

Each benefit connects to themes earlier in this module:

1. **Resilience through islanding.** When the main grid fails, a microgrid can disconnect and keep its critical loads running. During Hurricane Sandy in 2012, Princeton University's campus energy system islanded from the grid and kept power flowing to much of the campus while surrounding areas were dark, a widely reported example that encouraged interest in microgrids in the northeastern United States.
2. **Local control over energy.** Decisions about which loads to protect, which sources to use and how costs are shared can be made by the people who depend on the system, rather than solely by distant operators.
3. **Integration of renewables.** Because a microgrid has its own controls and storage, it can manage variable solar and wind output locally.
4. **Reduced transmission losses.** Some electricity is lost as heat whenever it travels long distances. Producing power close to where it is used avoids part of these losses.
5. **Community economic benefits.** Money spent on energy can stay in the local economy through local ownership, local jobs in installation and maintenance, and, in cooperative models, shared savings.

These benefits are real but conditional. A microgrid only improves resilience if it has enough generation, storage and fuel for the length of outages it may face, and only delivers local control if its governance actually gives local people a say.`
      },
      {
        title: 'Implementation Approaches',
        content: `Campus microgrids (universities, hospitals), community microgrids (neighborhoods, villages), commercial/industrial microgrids, and emergency/military microgrids.

Each approach reflects a different owner and purpose:

- **Campus microgrids** serve a single institution that controls many buildings on one site. Universities and hospitals were early adopters because they have steady, large energy demand, central plants they already operate, and strong reasons to stay powered. A hospital that keeps operating during a regional outage serves the whole community.
- **Community microgrids** serve a neighborhood, town or village, linking homes, shops and public buildings. They raise the hardest governance questions: who owns the system, how costs and benefits are shared, and who decides which loads come first. After Hurricane Maria in Puerto Rico, community organizations, such as Casa Pueblo in the mountain town of Adjuntas, expanded solar power and storage for local services, showing how communities can build their own capacity when the main system fails them.
- **Commercial and industrial microgrids** protect businesses whose losses from an outage are high, such as data centers and factories with continuous processes.
- **Emergency and military microgrids** keep critical facilities running regardless of grid conditions. Military bases have invested in microgrids for energy security, and emergency shelters and fire stations use smaller systems to remain operational during disasters.

A common path is to start small, with a single critical facility such as a clinic, school or community center, and extend the system over time. This staged approach is consistent with the Principle of Precaution, which favors reversible, incremental steps when outcomes are uncertain.`
      },
      {
        title: 'Challenges',
        content: `High upfront costs, technical complexity, regulatory barriers, utility resistance, and intermittency management.

Honest assessment requires taking each challenge seriously:

- **High upfront costs**: generation, batteries, switching equipment and controls require substantial investment before any savings arrive. This favors well-funded institutions and risks leaving low-income communities behind unless public funding, cooperative finance or shared ownership fill the gap.
- **Technical complexity**: switching smoothly between connected and island modes, protecting equipment and keeping voltage and frequency stable all require skilled design and ongoing maintenance. A poorly maintained microgrid may fail exactly when it is needed.
- **Regulatory barriers**: in many places, rules were written for a world of large utilities. Selling electricity to neighbors, or running wires across a public street, can trigger requirements meant for utilities, and interconnection approval can be slow.
- **Utility resistance**: utilities may see microgrids as a loss of customers and revenue, or as a technical complication for the grid they must keep safe. Some of this resistance protects business interests; some reflects genuine concerns about safety and about who pays for the shared grid.
- **Intermittency management**: solar produces nothing at night and less in winter, and wind varies. Batteries commonly provide hours of storage, not weeks, so long outages may still require backup generators, careful load reduction or both.

These challenges are a reminder that exit has costs, a theme captured in the term **exit friction**. They do not make microgrids impractical, but they shape who can build them and how.`
      },
      {
        title: 'Implications for Exit',
        content: `Microgrids show what a well-designed partial exit can look like. The connection to the main grid is kept, so the community still shares in its benefits, while the most important needs gain protection against its failures. The result is greater **exit capability**: the ability to step away from the grid temporarily without catastrophic loss.

Exiting well also means attending to those who stay. The costs of maintaining the main grid are shared among its customers, so when wealthier institutions and neighborhoods reduce their dependence, remaining customers may face higher bills or less attention. A community planning a microgrid can honor its **residual duty** by prioritizing shared facilities that serve everyone, such as shelters and clinics, by including low-income households in ownership and benefits, and by continuing to support affordable, reliable service on the main grid. The next lesson puts these ideas into practice through a guided energy exit planning exercise.`
      }
    ],
    keyTakeaways: [
      'Microgrids offer middle path between grid dependence and off-grid',
      'Multiple implementation approaches exist',
      'Challenges include cost, complexity, and regulation',
      'A microgrid protects people only if its storage, fuel and governance match the outages and needs it must serve'
    ],
    references: [
      {
        author: 'Lovins, Amory B.; Lovins, L. Hunter',
        title: 'Brittle Power: Energy Strategy for National Security',
        year: 1982,
        publisher: 'Brick House Publishing',
        relevance: 'Early, influential argument that decentralized, diverse energy systems are more resilient than centralized ones.',
        url: 'https://openlibrary.org/works/OL5898356W'
      },
      {
        author: 'Lovins, Amory B., et al.',
        title: 'Small Is Profitable: The Hidden Economic Benefits of Making Electrical Resources the Right Size',
        year: 2002,
        publisher: 'Rocky Mountain Institute',
        relevance: 'Detailed analysis of the economic and reliability benefits of distributed generation, the building blocks of microgrids.',
        url: 'https://openlibrary.org/works/OL19014639W'
      },
      {
        author: 'Bakke, Gretchen',
        title: 'The Grid: The Fraying Wires Between Americans and Our Energy Future',
        year: 2016,
        publisher: 'Bloomsbury USA',
        relevance: 'Discusses how distributed generation, storage and local systems are changing the relationship between communities and the central grid.',
        url: 'https://openlibrary.org/works/OL20030969W'
      }
    ]
  },
  learningObjectives: [
    'Understand microgrid architecture',
    'Identify implementation approaches',
    'Recognize challenges and barriers',
    'Evaluate how a microgrid project can share its benefits with those who remain dependent on the main grid'
  ],
  keyTerms: [
    { term: 'Microgrid', definition: 'A local energy system with its own generation, storage, distribution and controls that can run connected to the main grid or on its own.' },
    { term: 'Islanding', definition: 'Disconnecting a microgrid from the main grid so it can keep supplying its own loads during an outage.' },
    { term: 'Intermittency', definition: 'The variation in output of sources such as solar and wind with time of day, season and weather.' },
    { term: 'Parallel Systems', definition: 'Alternative infrastructure built alongside existing systems to enable future exit.' },
    { term: 'Exit Friction', definition: 'The resistance, costs, and barriers that make leaving a system difficult or costly.' }
  ]
}

export default lesson
