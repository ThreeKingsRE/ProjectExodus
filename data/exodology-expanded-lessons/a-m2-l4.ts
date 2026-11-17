import type { ExpandedExodologyLesson } from './types'

const lesson: ExpandedExodologyLesson = {
  id: 'a-m2-l4',
  title: 'Water System Alternatives',
  duration: '18 min',
  type: 'instruction',
  content: {
    introduction: `Water independence is challenging but essential for true resilience.

It is challenging for reasons the previous lesson on water autonomy principles set out. Water is needed every day in large volumes, unsafe water causes illness quickly, and the public systems that most people rely on are major public health achievements built on large shared infrastructure, trained operators and regulation. It is essential because a few days without safe water is a crisis, and because water supply depends on other systems, especially electricity for pumping and treatment, that can themselves fail.

This lesson surveys the alternatives available at each part of the water cycle: where water comes from, how it is made safe, how used water can be reused or treated, and how communities can share the work. It is an overview. Later lessons in this module go deeper into rainwater harvesting, greywater and blackwater management, and commons-based water governance. Throughout, keep in mind the tiers of water need from the previous lesson (drinking, hygiene, sanitation and productive water), since each alternative suits some tiers better than others.`,

    sections: [
      {
        title: 'Source Alternatives',
        content: `Rainwater harvesting, well drilling, spring development. Each requires different conditions and has different costs. Rainwater is universally applicable but volume-limited; wells require groundwater; springs need specific geography.

**Rainwater harvesting** collects rain from roofs or other surfaces and stores it in tanks or cisterns. Its volume is easy to estimate: each millimeter of rain falling on one square meter of roof yields about one liter. A 100-square-meter roof in a place with 600 millimeters of rain a year could in principle collect up to about 60,000 liters a year, less losses from evaporation, first-flush diversion and overflow. That is a meaningful supply, but it arrives unevenly, so storage size and seasonal rainfall patterns decide how much of it is usable. This is what volume-limited means in practice.

**Well drilling** reaches groundwater in an aquifer. Where groundwater is plentiful, a well can supply far more than a roof, but drilling is costly, the water must be tested, and pumping usually depends on electricity. Wells also draw on a shared resource: many aquifers are being pumped faster than they recharge, and a new well can lower the water available to neighbors.

**Spring development** captures water where groundwater emerges naturally at the surface, protecting it from contamination with a sealed collection box and piping. Where a reliable spring exists, it can supply water by gravity with no pumping at all, but such sites depend on specific geography.

Source decisions also depend on law. Rights to rainwater, groundwater and springs vary greatly between and within countries, and in some places collecting or diverting water requires permission. Checking these rules is part of exiting well rather than creating conflict with neighbors and downstream users.`
      },
      {
        title: 'Treatment Options',
        content: `Filtration (sediment, carbon, ceramic), UV sterilization, ozone, chlorination. Multi-barrier approaches provide redundancy. Match treatment to contamination risks.

Each treatment method addresses particular contaminants:

- **Sediment filtration** removes particles that make water cloudy and that can shield microbes from disinfection.
- **Activated carbon** improves taste and odor and reduces many organic chemicals, but does not reliably remove microbes.
- **Ceramic filters** strain out bacteria and protozoa through very fine pores and are used widely in low-cost household treatment.
- **Ultraviolet (UV) sterilization** inactivates microbes with ultraviolet light. It needs clear water and electricity, and provides no lasting protection once water leaves the lamp.
- **Ozone** is a strong disinfectant generated on site, more common in larger systems because the equipment is complex.
- **Chlorination** kills most microbes and leaves a small residual that continues to protect water in tanks and pipes, which is why it remains central to public water supply.

The **multi-barrier approach**, a standard principle in public health engineering, places several independent protections in sequence (protecting the source, filtering, disinfecting, and maintaining safe storage) so that the failure of one barrier does not make the water unsafe. The importance of every barrier was shown in Walkerton, Ontario, in 2000, where contamination of a town well combined with inadequate chlorination and monitoring: seven people died and thousands became ill.

Matching treatment to contamination risks means testing first. Roof water may carry bird droppings and debris; shallow wells may carry bacteria or nitrates from farming; some groundwater contains naturally occurring arsenic or fluoride that ordinary filters do not remove. Treatment designed without testing can create false confidence, which is more dangerous than no treatment at all.`
      },
      {
        title: 'Greywater and Blackwater',
        content: `Greywater reuse for irrigation. Composting toilets eliminate blackwater. Constructed wetlands for treatment. Closing loops reduces water demand.

Household wastewater has two main streams. **Greywater** is lightly used water from showers, baths, bathroom sinks and laundry. **Blackwater** is water from toilets, which carries human waste and the highest health risk; kitchen sink water is treated differently in different places because of its food and grease content.

**Greywater reuse for irrigation** sends greywater to gardens and trees instead of the sewer. Simple systems release it below mulch or soil rather than spraying it, to limit human contact, and avoid storing it for long because it quickly turns septic. Choosing plant-friendly soaps and keeping greywater off root vegetables that are eaten raw are common precautions.

**Composting toilets** manage human waste without flushing water, so no blackwater is produced. They do create a different responsibility: the composted material must be managed carefully so that pathogens are destroyed before it returns to the soil.

**Constructed wetlands** pass wastewater through planted gravel or soil beds where plants and microbes break down pollutants. They suit communities and institutions with enough land, and need ongoing maintenance to keep working.

**Closing loops** means treating used water and nutrients as resources rather than waste. Every liter of greywater reused on a garden is a liter that does not have to be collected, treated or bought, and toilets typically account for a substantial share of household water use, so removing flush water can reduce demand considerably. Lower demand in turn makes source alternatives such as rainwater far more practical. Because health and environmental rules for wastewater are strict in many places, these approaches should be designed within local regulations and with expert advice.`
      },
      {
        title: 'Community Scale',
        content: `Shared wells, community treatment, cooperative maintenance. Community scale reduces per-household cost and enables more sophisticated treatment.

Water alternatives built by individual households are often expensive and fragile. Each home needs its own tank, pump, filters and testing, and each depends on one household's knowledge and attention. Sharing changes that:

- **Shared wells** spread drilling and pumping costs among several households and can be more reliable than many shallow individual wells.
- **Community treatment** makes it affordable to use multiple barriers, continuous chlorination, regular laboratory testing and trained operators, the features that make public systems safe.
- **Cooperative maintenance** spreads skills and responsibilities so that the system does not fail when one person moves away or falls ill. Small member-owned water systems, including many rural water cooperatives and associations, operate in this way in many countries.

Community scale brings its own challenges, which the lesson on commons-based water governance examines in detail: agreeing on rules for use in dry periods, sharing costs fairly, keeping records, and resolving disputes. Political scientist Elinor Ostrom's research on long-lived irrigation systems showed that communities can govern shared water well over generations when they design clear rules and monitoring for themselves.

From an Exodological perspective, community scale is often the most realistic path to water autonomy. It sits between total reliance on a distant utility and the high cost and risk of each household going alone.`
      },
      {
        title: 'Implications for Exit',
        content: `Water is the dependency where the gap between a careless exit and a careful one is most dangerous. Three implications follow.

**Partial before complete.** Most households and communities are best served by a **soft exodus** in water: keeping the public supply for drinking water while using rainwater, greywater reuse and storage to cut demand and to provide a buffer during outages. Disconnecting entirely should come only after alternative sources and treatment have been tested through dry seasons and failures.

**Safety cannot be traded for independence.** Drinking water needs the highest standard of treatment and testing. Using alternative water for gardens and toilets first, and for drinking only when treatment is proven, keeps the risks where they are least harmful.

**Duties to those who stay.** Water is shared. Wells draw on aquifers neighbors use, and public utilities spread their fixed costs across all users. Exodology's **residual duty** asks those who build water alternatives to avoid harming others' supply, to support the public systems on which most people will continue to rely, and to share knowledge and capacity with neighbors who cannot build alternatives of their own.`
      }
    ],

    keyTakeaways: [
      'Multiple source options with different requirements',
      'Treatment must match contamination risks',
      'Closing loops reduces water demand',
      'Community scale enables better solutions',
      'Begin with partial water alternatives for lower-risk uses, and treat drinking water only after testing and multiple barriers are in place'
    ],

    references: [
      {
        author: 'Sedlak, David',
        title: 'Water 4.0: The Past, Present, and Future of the World\'s Most Vital Resource',
        year: 2014,
        publisher: 'Yale University Press',
        relevance: 'A history of urban water supply and treatment that explains why public systems developed and what alternatives may come next.',
        url: 'https://openlibrary.org/works/OL19667367W'
      },
      {
        author: 'Jenkins, Joseph C.',
        title: 'The Humanure Handbook: A Guide to Composting Human Manure',
        year: 1994,
        publisher: 'Jenkins Publishing',
        relevance: 'Widely used guide to composting toilets and the safe management of human waste without flush water.',
        url: 'https://openlibrary.org/works/OL12078342W'
      },
      {
        author: 'Walker, Brian, and David Salt',
        title: 'Resilience Thinking: Sustaining Ecosystems and People in a Changing World',
        year: 2006,
        publisher: 'Island Press',
        relevance: 'Accessible introduction to resilience in social-ecological systems, relevant to redundancy, multiple barriers and shared water governance.',
        url: 'https://openlibrary.org/works/OL18760646W'
      }
    ]
  },
  learningObjectives: [
    'Evaluate water source options',
    'Design appropriate treatment systems',
    'Apply water-loop closure principles',
    'Sequence a water exit so that lower-risk uses move to alternatives before drinking water'
  ],
  keyTerms: [
    { term: 'Multi-Barrier Approach', definition: 'Placing several independent protections (source protection, filtration, disinfection, safe storage) in sequence so that one failure does not make water unsafe.' },
    { term: 'Greywater', definition: 'Lightly used household water from showers, baths, sinks and laundry that can be reused, for example for irrigation.' },
    { term: 'Blackwater', definition: 'Wastewater from toilets, which carries human waste and requires the most careful treatment.' },
    { term: 'Closing Loops', definition: 'Reusing water and nutrients within a household or community instead of treating them as waste, which reduces demand on outside supply.' },
    { term: 'Structural Dependence', definition: 'A condition where survival or basic functioning requires continued participation in a specific system.' }
  ]
}

export default lesson
