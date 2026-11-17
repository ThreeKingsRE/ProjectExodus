import type { ExpandedExodologyLesson } from './types'

const lesson: ExpandedExodologyLesson = {
  id: 'f-m6-l1',
  title: 'Water System Dependencies',
  duration: '20 min',
  type: 'instruction',
  content: {
    introduction: `Modern water systems seem invisible—turn the tap, water flows. But this invisibility masks deep dependencies and vulnerabilities.

Behind every tap stands a chain of sources, treatment plants, pumps, pipes, chemicals, power supplies, skilled workers, budgets and regulators. Most households never see that chain, so they rarely ask what it depends on. Exodology begins its study of water the same way it began its study of food: by mapping structural dependence before asking whether, when and how exit is possible.

This lesson examines four layers of dependency: the centralized infrastructure itself, the link between water and energy, the supplies that keep treatment running, and the climate the whole system was designed around. The aim is not to make tap water seem frightening. Centralized water systems are one of the great public health achievements of the modern era. The aim is to see clearly where they are strong, where they are fragile, and what that means for exit capability.`,

    sections: [
      {
        title: 'Centralized Water Infrastructure',
        content: `Source dependency on limited rivers or aquifers, treatment requiring power and chemicals, distribution through aging pipes, pressure requiring pumps, and centralized control by utilities and governments.

Each item in this list is a link in a single chain, and a failure at any link reaches every household downstream.

**Source dependency.** Most cities draw on one or a few sources, such as a river, a reservoir or an aquifer. When that source shrinks or becomes contaminated, there may be no quick substitute. Cities in the American Southwest, for example, depend heavily on the Colorado River, whose flows have been declining for years and which is shared by several states and Mexico under long-running agreements.

**Treatment requiring power and chemicals.** Raw water must be filtered and disinfected before it is safe. Treatment plants run on electricity and consume a steady stream of chemicals.

**Aging pipes.** Much of the distribution network in older cities was laid generations ago. Leaks waste treated water, main breaks interrupt service, and older systems may still include lead service lines.

**Pressure requiring pumps.** Water reaches upper floors and distant neighborhoods because pumps keep the system pressurized. When pressure drops, contaminants can enter the pipes, which is why utilities issue boil-water notices after outages.

**Centralized control.** Decisions about sources, rates, maintenance and treatment are made by utilities and governments. Households have little direct say, and little ability to act alone if the institution fails.

Centralization brings real efficiency: economies of scale, professional operators and consistent public health standards. The same features concentrate risk. For Exodology, this is a classic case of structural dependence: daily life requires continued participation in a system few people can influence or replace.`
      },
      {
        title: 'Energy-Water Nexus',
        content: `Pumping and treating water uses 2-3% of US electricity. Power plants need water for cooling. Climate change stresses both systems simultaneously.

The term **energy-water nexus** describes this two-way dependence. Water systems need energy to move and clean water; many energy systems need water to produce electricity.

**Water depends on power.** Pumps lift water from wells and rivers, push it through treatment and keep distribution lines pressurized. When the grid fails, water systems can fail with it unless they have backup generators and fuel. During the February 2021 winter storm in Texas, power outages and frozen equipment left millions of people under boil-water notices, a vivid example of an energy failure becoming a water failure.

**Power depends on water.** Thermal power plants, whether fueled by coal, gas or nuclear energy, use large volumes of water for cooling. Hydroelectric dams depend directly on river flows. During the 2003 European heat wave, several French nuclear plants had to reduce output because river water was too warm to cool them safely, and similar curtailments have occurred in later heat waves.

**Simultaneous stress.** Heat waves raise demand for both water and electricity at the very moment that warm, low rivers reduce cooling capacity and hydropower. Droughts lower reservoirs that supply both drinking water and dams. This is why the original text stresses that climate change stresses both systems at once: the failures are correlated, not independent.

For exit planning, the nexus means that water autonomy cannot be planned in isolation. A household well with an electric pump still depends on the grid; a community treatment system still needs power. Any honest dependency map draws the line from the tap to the power plant and back again.`
      },
      {
        title: 'Supply Dependencies',
        content: `Treatment requires chemicals, replacement parts, trained expertise, testing capacity, and continuous funding.

These are the less visible inputs that keep a water system safe from one day to the next.

- **Chemicals.** Disinfectants such as chlorine, along with chemicals used to remove particles and to control pipe corrosion, are produced by a small number of industrial suppliers and delivered on regular schedules. A disruption at a supplier, or along the transport route, can force utilities to ration or seek emergency substitutes.
- **Replacement parts.** Pumps, valves, meters and control systems wear out. Specialized parts may come from distant manufacturers with long lead times.
- **Trained expertise.** Licensed operators run treatment plants and interpret test results. Many utilities report difficulty replacing experienced staff as they retire, and small rural systems often depend on very few people.
- **Testing capacity.** Safe water requires regular laboratory testing for bacteria, lead and other contaminants. Without testing, a system cannot know whether its water is safe.
- **Continuous funding.** All of the above depends on rate revenue and public budgets. When a city loses population or tax base, deferred maintenance accumulates quietly until it becomes a crisis, a pattern explored in the next lesson.

The common thread is that a water system is not only pipes and plants. It is an ongoing flow of materials, knowledge and money. Each of these is a dependency, and each can become a critical node in a dependency map. Recognizing them helps distinguish between a short disruption that a system can ride out and a slow erosion of capacity that may eventually make exit, or at least backup, necessary.`
      },
      {
        title: 'Climate Dependencies',
        content: `Systems were designed for historical precipitation. Climate change is shifting patterns. Snowpack is declining. Aquifers recharge slowly.

Water infrastructure is built to last for decades, and its designers sized reservoirs, pipes and treatment plants using records of past rainfall, river flows and floods. Hydrologists call the assumption that the future will resemble the past **stationarity**, and many now argue that it no longer holds.

**Shifting patterns.** Some regions face longer droughts; others face heavier downpours that overwhelm drainage and treatment. The same system may need to handle both.

**Declining snowpack.** In mountain regions such as the western United States, winter snow acts as a natural reservoir, melting gradually to feed rivers through the dry season. Warmer winters mean more rain and less snow, and earlier melt, so water arrives when it is least needed and is harder to store.

**Slow aquifer recharge.** Groundwater can take decades or centuries to replenish. Where pumping exceeds recharge, as in parts of the Ogallala Aquifer beneath the US Great Plains, water tables fall and wells must be drilled deeper. In this sense groundwater can be mined like a non-renewable resource, which connects to the slow-motion exit crisis described in the food module.

For Exodology, climate is a landscape pressure: a broad force largely outside the control of the water regime. Utilities can adapt, but their infrastructure is locked in by past design decisions, a clear case of path dependence. Recognizing this mismatch early widens the exit window and allows gradual, planned responses instead of emergency ones.`
      },
      {
        title: 'Implications for Exit',
        content: `Mapping water dependencies does not lead to a simple conclusion that people should leave municipal water. Centralized systems protect public health on a scale households cannot match, and many people, especially renters and those in dense housing, have little practical ability to build alternatives. A sound exit analysis therefore asks several questions.

1. **Which dependencies are most fragile where I live?** A city drawing on a declining river faces different risks from one with aging pipes or a shrinking budget.
2. **What is the realistic form of exit?** For most households, exit means a soft exodus: adding storage, conservation and backup capacity alongside the municipal supply, not disconnecting from it.
3. **What do we owe those who remain?** When wealthier households invest in private alternatives and reduce their engagement, the shared system can lose political support and revenue. Residual duty asks those with more exit capability to keep supporting investment in public water that everyone depends on.

The following lessons examine what happens when these dependencies fail, and then turn to household and community alternatives.`
      }
    ],
    keyTakeaways: [
      'Centralized infrastructure creates efficiency and vulnerability',
      'Water and energy are deeply interdependent',
      'Climate change threatens water systems',
      'Treatment depends on a continuous flow of chemicals, parts, expertise, testing and funding',
      'For most people, water exit means building backup and resilience alongside public systems while continuing to support them'
    ],
    references: [
      {
        author: 'Reisner, Marc',
        title: 'Cadillac Desert: The American West and Its Disappearing Water',
        year: 1986,
        publisher: 'Viking',
        relevance: 'Classic history of how large dams and centralized water projects created the dependencies of the American West.',
        url: 'https://openlibrary.org/works/OL4037585W'
      },
      {
        author: 'Fishman, Charles',
        title: 'The Big Thirst: The Secret Life and Turbulent Future of Water',
        year: 2011,
        publisher: 'Free Press',
        relevance: 'Accessible account of the hidden infrastructure, energy use and economics behind everyday water supply.',
        url: 'https://openlibrary.org/works/OL15444827W'
      },
      {
        author: 'Pearce, Fred',
        title: 'When the Rivers Run Dry: Water, the Defining Crisis of the Twenty-First Century',
        year: 2006,
        publisher: 'Beacon Press',
        relevance: 'Documents river depletion and groundwater overpumping worldwide, illustrating source and climate dependencies.',
        url: 'https://openlibrary.org/works/OL2270802W'
      }
    ]
  },
  learningObjectives: [
    'Identify key dependencies in centralized water systems',
    'Understand the energy-water nexus',
    'Connect climate change to water system stress',
    'Assess which water dependencies are most relevant to exit capability in a given place'
  ],
  keyTerms: [
    { term: 'Structural Dependence', definition: 'A condition where survival or basic functioning requires continued participation in a specific system.' },
    { term: 'Energy-Water Nexus', definition: 'The two-way dependence in which water systems need energy to pump and treat water, and energy systems need water, for example for cooling.' },
    { term: 'Critical Node', definition: 'A point in a dependency chain whose failure would cause system breakdown.' },
    { term: 'Aquifer Recharge', definition: 'The natural replenishment of underground water, which can take decades or centuries.' },
    { term: 'Stationarity', definition: 'The assumption, from hydrology and engineering, that future rainfall and river flows will resemble past records.' }
  ]
}

export default lesson
