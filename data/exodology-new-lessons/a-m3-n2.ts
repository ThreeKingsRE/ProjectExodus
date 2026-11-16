import type { NewExodologyLesson } from './types'

const lesson: NewExodologyLesson = {
  id: 'a-m3-n2',
  title: 'Rainwater Harvesting Systems',
  duration: '20 min',
  type: 'instruction',
  content: {
    introduction: `Rainwater harvesting is the most widely applicable water alternative, which is why Water System Alternatives described it as "universally applicable but volume-limited". Almost every building has a roof, and almost every place receives some rain. Collecting it is an old practice found in many cultures, and modern materials have made it easier to do safely at household and community scale.

From an Exodological perspective, a rainwater system is a **parallel system** for water: it operates now, meeting real needs, while the mains continues to run. Designed well, it reduces demand on the public supply, provides a buffer during outages and droughts, and builds the practical skills a community needs for greater water autonomy. Designed poorly, it breeds mosquitoes, grows bacteria, runs dry when most needed, and can make people ill.

This lesson walks through the design of a rainwater system as a chain of four parts (catchment, conveyance, storage and treatment) and then turns to sizing, community-scale systems, and the legal and ethical questions harvesting raises. The figures here are illustrative; the Water System Calculator later in the module will let you size a system for your own conditions.`,

    sections: [
      {
        title: 'Catchment and Conveyance',
        content: `The **catchment** is the surface that collects rain, usually a roof. Its material determines both how much water you collect and how clean it is.

**Good catchment surfaces** are smooth, hard and inert: metal roofing with suitable coatings, glazed tiles and some membrane roofs. They shed water efficiently and do not leach much into it.

**Problem surfaces** include roofs with lead flashing or lead-based paint, treated timber, old asbestos-cement sheets, bitumen or tar products that leach hydrocarbons, and surfaces under overhanging trees that drop leaves and attract birds. Water from these may still be usable for irrigation, but not as a source of drinking water without careful assessment.

**Conveyance** carries water from catchment to storage: gutters, downpipes and pipes. Design points include:
- Gutter guards or leaf screens to keep coarse debris out
- A **first-flush diverter** that sends the first portion of each rainfall, which carries most of the dust, droppings and debris from the roof, to waste before water reaches the tank
- Pipes sized for heavy rain so that gutters do not overflow
- Materials rated for potable water where the water will be drunk

Most contamination in rainwater systems enters at the catchment. Keeping it clean is the cheapest form of treatment.`
      },
      {
        title: 'Storage Design',
        content: `Storage is usually the most expensive part of a rainwater system and the one that determines how much exit capability it actually provides. Rain arrives in pulses; demand is steady. The tank bridges the gap.

**Materials**: Common options include polyethylene, steel with food-grade liners, ferrocement, concrete and fibreglass. Each has trade-offs in cost, lifespan, ease of repair and suitability for local skills. Ferrocement, for example, can be built with local labour, which may matter more for a community than the lowest purchase price.

**Placement**: Tanks are heavy when full (one cubic metre of water weighs about a tonne), so foundations must be designed for the load. Raised tanks provide gravity pressure; buried tanks save space and keep water cooler but are harder to inspect.

**Protecting stored water**:
- Keep light out to prevent algae growth
- Screen every inlet and overflow to exclude mosquitoes and small animals
- Use a calmed inlet that releases water at the bottom without stirring settled sediment
- Draw water from just above the bottom, not from the sludge layer
- Provide an overflow that discharges safely away from foundations

**Redundancy**: Two smaller tanks can be safer than one large one, because one can be cleaned or repaired while the other stays in service. This is a small-scale example of designing for resilience rather than optimisation.`
      },
      {
        title: 'Treatment for Different Uses',
        content: `Treatment should match the intended use, following the water need tiers introduced in the previous lesson.

**Irrigation and toilet flushing**: Usually require only screening and a first-flush diverter. This is the lowest-risk place to begin and often the best first stage of a soft exodus from mains water.

**Washing and bathing**: Benefit from sediment filtration and a well-maintained tank. Local health guidance varies, and some jurisdictions require disinfection for any indoor use.

**Drinking and cooking**: Require a **multi-barrier** design, the approach recommended in public health practice, in which several independent steps each reduce risk:
1. A clean catchment and first-flush diversion
2. Settling in a protected tank
3. Filtration to remove particles (for example sediment and then finer cartridge or ceramic filters)
4. Disinfection, commonly ultraviolet light, chlorination or boiling, to inactivate pathogens

Some households also use activated carbon to improve taste and reduce certain chemicals. No single device makes water safe on its own, and every device needs maintenance: filters clog, UV lamps lose output, and chlorine doses must be checked. Periodic laboratory testing is the only reliable way to know whether drinking water is safe. If a system cannot be tested and maintained, it should not supply drinking water.`
      },
      {
        title: 'Sizing a Rainwater System',
        content: `Sizing starts from a simple relationship: **one millimetre of rain falling on one square metre of catchment yields about one litre of water**. Real systems collect less, because of evaporation, splash and first-flush losses, so designers multiply by a runoff coefficient, often in the range of 0.8 to 0.9 for smooth roofs.

Potential annual yield (litres) is roughly: **catchment area (m²) × annual rainfall (mm) × runoff coefficient**.

A hypothetical example: a 100 m² metal roof in a place with 600 mm of rain per year and a coefficient of 0.85 could yield about 51,000 litres a year. A household of three using 5 litres per person per day for drinking and cooking needs about 5,500 litres a year, so the roof can comfortably cover potable needs. Covering all household use at, say, 100 litres per person per day would need over 100,000 litres, far beyond what this roof provides.

**Annual totals hide the real constraint.** If most rain falls in a few months, storage must carry the household through the dry season. The tank size needed depends on the longest dry spell you plan for and the daily demand you intend to cover. This is a stock-and-flow problem: inflows arrive in pulses, outflows are steady, and the tank must never empty when it matters.

The practical lesson is to decide which tiers of need the system will cover, size for the dry season rather than the yearly average, and reduce demand before adding storage.`
      },
      {
        title: 'Community-Scale Harvesting',
        content: `Household tanks are not the only model. Rainwater can be harvested from community buildings, schools, clinics and shared roofs, and stored in larger cisterns serving several households.

**Advantages of community scale**:
- Lower cost per litre of storage, because large tanks are cheaper per unit volume
- Better treatment, since a shared system can justify more reliable equipment and regular testing
- Shared maintenance skills, so a system does not fail when one household loses interest
- Inclusion of households that rent, lack roof space or cannot afford a tank

**Challenges**:
- Someone must be responsible for cleaning, testing and repairs
- Rules are needed for allocation during dry periods
- Contamination of a shared tank affects everyone at once, raising the stakes of maintenance

Rainwater harvesting at community scale has a long history in water-scarce regions. In parts of India, for example, traditional systems of tanks and ponds that capture monsoon rain have been studied and, in some places, revived by local organisations. You do not need to copy a specific model; the transferable point is that shared storage brings governance questions with it, which are the subject of the final lesson in this module.

From an Exodological perspective, community systems also address the lifeboat problem: they extend water autonomy to people who could not build it alone.`
      },
      {
        title: 'Legal, Ecological and Ethical Considerations',
        content: `Harvesting rain looks like an unambiguously good act, but it carries considerations that a careful practitioner should check.

**Legal rules**: In most places rooftop harvesting is legal and often encouraged, but some jurisdictions regulate it, especially where water rights are allocated by law. Some states in the western United States, for example, have historically limited rainwater capture because of downstream water rights, and have since relaxed those limits to different degrees. Building, plumbing and health codes often govern tank installation, cross-connections with mains plumbing, and indoor use. Check before you build.

**Cross-connection risk**: A rainwater system must never be able to flow back into the public supply. Backflow prevention protects everyone else who depends on the mains, an obligation that follows directly from residual duty.

**Ecological effects**: At a single household, the effect on streams and groundwater is small. At catchment scale, very widespread harvesting could change how much water reaches rivers or recharges aquifers. In many urban areas, by contrast, capturing roof runoff reduces stormwater flooding and pollution. The effect depends on place, and is worth considering when promoting harvesting at scale.

**Honesty about limits**: Rainwater rarely supplies all of a household's water. Presenting it as complete water independence risks people dismantling backups they still need. Never burn bridges before alternatives are proven.`
      }
    ],

    keyTakeaways: [
      'A rainwater system is a parallel water system built from catchment, conveyance, storage and treatment',
      'Clean catchments, first-flush diversion and protected storage prevent most contamination',
      'Treatment must match use: simple screening for irrigation, multi-barrier treatment and testing for drinking',
      'Size for the dry season using area times rainfall times runoff coefficient, and reduce demand first',
      'Community-scale systems lower costs and widen access but require clear maintenance and allocation rules'
    ],

    references: [
      {
        author: 'Lancaster, Brad',
        title: 'Rainwater Harvesting for Drylands and Beyond, Volume 1: Guiding Principles to Welcome Rain into Your Life and Landscape',
        year: 2006,
        publisher: 'Rainsource Press',
        relevance: 'A widely used practical guide to observing a site and designing rainwater capture, emphasising low-cost, place-based approaches.',
        url: 'https://openlibrary.org/works/OL8846715W'
      },
      {
        author: 'Ludwig, Art',
        title: 'Water Storage: Tanks, Cisterns, Aquifers, and Ponds for Domestic Supply, Fire and Emergency Use',
        year: 2005,
        publisher: 'Oasis Design',
        relevance: 'Covers the design, materials and maintenance of water storage, the most expensive and safety-critical part of a rainwater system.',
        url: 'https://openlibrary.org/works/OL8801867W'
      },
      {
        author: 'Meadows, Donella H.',
        title: 'Thinking in Systems: A Primer',
        year: 2008,
        publisher: 'Chelsea Green Publishing',
        relevance: 'Explains stocks and flows, the reasoning behind sizing storage to carry demand through dry periods.',
        url: 'https://openlibrary.org/works/OL3737036W'
      }
    ]
  },
  learningObjectives: [
    'Describe the four components of a rainwater harvesting system and the role of each',
    'Evaluate catchment materials and storage designs for contamination risk',
    'Select treatment steps appropriate to irrigation, washing and drinking uses',
    'Calculate approximate rainwater yield and explain why storage must be sized for dry periods',
    'Assess the legal, ecological and equity implications of household versus community harvesting'
  ],
  keyTerms: [
    { term: 'Catchment', definition: 'The surface, usually a roof, that collects rainfall for a harvesting system.' },
    { term: 'First-Flush Diverter', definition: 'A device that sends the first, most contaminated portion of each rainfall away from the storage tank.' },
    { term: 'Runoff Coefficient', definition: 'The fraction of rain falling on a catchment that actually reaches storage, used in estimating yield.' },
    { term: 'Multi-Barrier Treatment', definition: 'A sequence of independent protection and treatment steps so that drinking water stays safe if one step fails.' },
    { term: 'Backflow Prevention', definition: 'Plumbing measures that stop water from a private system flowing into the public supply.' },
    { term: 'Parallel Systems', definition: 'Systems built alongside existing ones that can eventually replace them.' }
  ]
}

export default lesson
