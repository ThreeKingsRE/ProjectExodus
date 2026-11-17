import type { ExpandedExodologyLesson } from './types'

const lesson: ExpandedExodologyLesson = {
  id: 'f-m7-l1',
  title: 'Grid Dependencies and Vulnerabilities',
  duration: '22 min',
  type: 'instruction',
  content: {
    introduction: `The electrical grid is perhaps the most critical infrastructure of modern life. Nearly everything depends on it.

For most people the grid is invisible until it fails. Electricity arrives at the flip of a switch, produced in distant power plants, carried across high-voltage transmission lines and stepped down through local distribution networks into homes, hospitals and water plants. Because it works so reliably most of the time, societies have built almost every other system on the assumption that it will always be there. That assumption is a clear example of **structural dependence**: basic functioning requires continued participation in one specific system.

This lesson maps what depends on the grid, where the grid is vulnerable, what documented failures show, and how small problems can cascade into large blackouts. For Exodology, the aim is not alarm but clarity. Knowing exactly how we depend on the grid is the first step in judging how much **exit capability** a household, institution or community has, and in deciding which parts of that dependence are worth reducing.`,

    sections: [
      {
        title: 'What Depends on the Grid',
        content: `Water systems, food refrigeration, communication, transportation (gas pumps need electricity), healthcare, finance, and heating/cooling. Modern life is electrified life.

Each item on this list is itself a system, and each one draws on the grid in a different way:

- **Water systems** use electric pumps to move water to treatment plants, through treatment and up to storage tanks, and to move wastewater away. Without power, pressure drops, and boil-water notices often follow. The previous module showed how fragile water systems already are; the grid is one of their hidden dependencies.
- **Food refrigeration** runs from the farm to the warehouse, the grocery store and the household refrigerator. A long outage can spoil food across a whole region at once.
- **Communication** relies on powered cell towers, data centers and home internet equipment. Many have backup batteries or generators, but these usually last hours or days, not weeks.
- **Transportation** depends on electricity in ways people rarely notice. As the original text points out, gas pumps need electricity, so a fuel-rich region can still run out of usable fuel in a blackout. Traffic signals, rail signaling and electric vehicles add further links.
- **Healthcare** depends on power for life-support equipment, refrigerated medicines and records. Hospitals have backup generators, but people using home oxygen concentrators or dialysis at home are directly exposed.
- **Finance** runs on electronic payment systems; without power, cards and cash machines stop working.
- **Heating and cooling** are increasingly electric, and even most gas furnaces need electricity for their controls and fans. In extreme heat or cold, loss of power quickly becomes a health emergency.

The key insight is that these dependencies are coupled. A blackout does not remove one service; it removes many at once, at the moment people most need them. This is why the grid sits near the center of any honest dependence map.`
      },
      {
        title: 'Grid Vulnerabilities',
        content: `Generation concentration, transmission bottlenecks, aging infrastructure, cybersecurity risks, physical attack vulnerability, weather exposure, and fuel dependence.

Each of these points of weakness can be explained in plain terms:

1. **Generation concentration**: much electricity comes from a relatively small number of large power plants. When one large unit trips offline, a big share of supply disappears at once.
2. **Transmission bottlenecks**: high-voltage lines carry power over long distances, and some corridors carry far more than others. If a key line is lost, power must reroute through lines that may not have room for it.
3. **Aging infrastructure**: many lines, transformers and substations were built decades ago. Older equipment fails more often, and some components, such as large power transformers, are custom-built and can take many months or longer to replace.
4. **Cybersecurity risks**: grids are run by computer control systems. In December 2015, a widely documented cyberattack on electricity distribution companies in Ukraine cut power to roughly 225,000 customers for several hours.
5. **Physical attack vulnerability**: substations are spread over large areas and are hard to guard. In December 2022, gunfire damaged two substations in Moore County, North Carolina, leaving tens of thousands of customers without power for several days.
6. **Weather exposure**: lines, poles and plants sit outdoors, exposed to wind, ice, heat, flooding and wildfire. Climate change is increasing the frequency of several of these extremes.
7. **Fuel dependence**: most generation still relies on fuel delivered by pipeline, rail or ship. If the fuel stops, the plant stops, even when the plant itself is undamaged.

For Exodology, the lesson is that vulnerability is distributed across the whole chain from fuel to outlet. A household that has secured one link, such as a rooftop solar panel, may still depend on others it has not examined.`
      },
      {
        title: 'Failure Examples',
        content: `Texas 2021: Cold caused gas failures, hundreds died. California rolling blackouts from heat and wildfire. Puerto Rico 2017: Hurricane destroyed grid, restoration took over a year. Northeast 2003: Software bug cascaded to 55 million affected.

These four cases show different paths to the same outcome:

**Texas, February 2021.** During Winter Storm Uri, extreme cold froze natural gas wells, gathering lines and processing equipment, and many power plants of several types also failed. The grid operator ordered rotating outages that left millions of customers without power, some for days, in freezing conditions. Because the Texas grid has limited connections to neighboring grids, it could import little help. The official investigations by federal regulators found that many failures came from equipment that had not been prepared for cold, a warning that had been raised after an earlier cold event in 2011.

**California.** In August 2020, during a severe heat wave, the state grid operator ordered rotating outages when demand exceeded available supply. Separately, utilities have deliberately cut power to large areas during high wind to reduce the risk that their lines ignite wildfires, after equipment fires such as the 2018 Camp Fire. Here the grid becomes both a victim of climate extremes and a cause of hazard.

**Puerto Rico, 2017.** Hurricane Maria destroyed much of the island's transmission and distribution network, producing the largest blackout in United States history. The public utility was already in deep financial trouble, and restoration was slow, uneven and especially hard for rural and mountain communities.

**Northeast, August 2003.** In Ohio, high-voltage lines sagged into trees and tripped offline. A software failure in the utility's alarm system meant operators did not see the problem in time. The failures spread across much of the northeastern United States and Ontario, Canada.

Across all four cases, the people with the fewest alternatives (no generator, no means to travel, medical needs at home) bore the heaviest burden. That pattern matters for exit planning: exit capability is unevenly distributed before any crisis begins.`
      },
      {
        title: 'Cascade Dynamics',
        content: `Initial failure causes load redistribution, which causes overload, which causes more failures, leading to blackout. Recovery is complex—"black start" capability is limited.

The mechanism follows from the physics of the grid. Electricity flows along every available path, and supply and demand must be balanced from moment to moment. When one line or plant drops out, its flow shifts automatically onto the remaining lines and plants. If those are already near their limits, protective relays switch them off to prevent damage, which shifts the load again. Within minutes, a single fault can spread across a wide area, as it did in 2003. Engineers design for the loss of any single major component, but several failures in quick succession, or operators who cannot see what is happening, can overwhelm those margins.

Recovery is harder than it sounds. Most large power plants need electricity from the grid to start their own pumps, fans and controls. After a full blackout, operators must rely on a limited number of **black start** units, such as hydroelectric plants or generators with their own small start-up engines, to energize lines step by step, rebuild small islands of supply, and then reconnect them carefully. This can take hours to days, and longer when equipment is physically damaged.

For Exodology, cascade dynamics explain why dependence on a large, tightly connected system carries a particular kind of risk: problems far away can reach you quickly, and you have little control over when service returns. This is the same tension studied in the sociology of technology, where Charles Perrow argued that tightly coupled, complex systems are prone to failures that spread in unexpected ways. It is also the background to the next two lessons, which examine failure patterns at each level of the grid and the role of microgrids as a partial exit.`
      },
      {
        title: 'Implications for Exit',
        content: `Understanding grid dependence does not mean that everyone should leave the grid. For most households and communities, a full and sudden departure (a **hard exodus**) would be costly and could reduce reliability rather than improve it. The more realistic questions are which dependencies matter most, and how to reduce them gradually.

A practical approach follows the logic of a **soft exodus**:

- **Map critical loads.** Identify the uses that must continue during an outage, such as medical devices, refrigeration of medicines, water pumping, heating or cooling for vulnerable people, and communication.
- **Build parallel capacity for those loads first.** Backup power, local storage and efficient appliances can keep essential services running while the grid connection remains in place for everything else.
- **Prefer shared solutions where possible.** A community resilience center with backup power can serve many households that could never afford their own systems.
- **Remember those who stay.** The grid is a shared system, and its costs are spread across all its users. As better-resourced customers reduce their dependence, the remaining customers may face higher costs or less political attention. This is a form of **residual duty**: continuing to support reliable, affordable service for everyone, especially those who cannot leave, is part of exiting well.`
      }
    ],
    keyTakeaways: [
      'Nearly every system depends on the grid',
      'Multiple vulnerability points exist',
      'Cascade dynamics mean small failures become large',
      'Vulnerability, and the ability to cope with it, is unevenly distributed across households and communities',
      'Reducing grid dependence works best as a gradual, shared process that starts with critical loads'
    ],
    references: [
      {
        author: 'Lovins, Amory B.; Lovins, L. Hunter',
        title: 'Brittle Power: Energy Strategy for National Security',
        year: 1982,
        publisher: 'Brick House Publishing',
        relevance: 'Classic analysis of how centralized energy systems create vulnerability to accidents, weather and attack, and how more distributed systems can reduce it.',
        url: 'https://openlibrary.org/works/OL5898356W'
      },
      {
        author: 'Perrow, Charles',
        title: 'Normal Accidents: Living with High-Risk Technologies',
        year: 1984,
        publisher: 'Basic Books',
        relevance: 'Explains why tightly coupled, complex technological systems are prone to cascading failures, a frame that applies directly to power grids.',
        url: 'https://openlibrary.org/works/OL4468929W'
      },
      {
        author: 'Koppel, Ted',
        title: 'Lights Out: A Cyberattack, A Nation Unprepared, Surviving the Aftermath',
        year: 2015,
        publisher: 'Crown Publishers',
        relevance: 'Journalistic investigation of grid vulnerability to cyberattack and of how poorly prepared societies are for a long, wide blackout.',
        url: 'https://openlibrary.org/works/OL20008564W'
      }
    ]
  },
  learningObjectives: [
    'Identify grid-dependent systems',
    'Analyze vulnerability points',
    'Understand cascade failure dynamics',
    'Evaluate which grid dependencies to reduce first when building exit capability'
  ],
  keyTerms: [
    { term: 'Structural Dependence', definition: 'A condition where survival or basic functioning requires continued participation in a specific system, as most modern services do with the electrical grid.' },
    { term: 'Cascading Failure', definition: 'A chain reaction in which one failure shifts load onto other components, which then fail in turn, spreading an outage across a wide area.' },
    { term: 'Black Start', definition: 'The process of restarting a power system after a full blackout using generating units that can start without power from the grid.' },
    { term: 'Critical Load', definition: 'An electricity use that must continue during an outage, such as medical equipment, water pumping or emergency communication.' },
    { term: 'Exit Capability', definition: 'The structural capacity of individuals or communities to leave a system when needed without catastrophic loss.' }
  ]
}

export default lesson
