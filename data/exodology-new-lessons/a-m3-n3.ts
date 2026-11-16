import type { NewExodologyLesson } from './types'

const lesson: NewExodologyLesson = {
  id: 'a-m3-n3',
  title: 'Greywater and Blackwater Management',
  duration: '20 min',
  type: 'instruction',
  content: {
    introduction: `Water autonomy is usually discussed in terms of supply: where clean water comes from. But every litre that enters a household also leaves it, and the wastewater side of the system is just as much a dependency. Sewers and treatment plants are critical nodes that most people never see. When they fail, the consequences for public health are immediate and shared by everyone nearby.

Water System Alternatives introduced the idea of **closing loops**: reusing greywater for irrigation, using composting toilets, and treating wastewater in constructed wetlands. This lesson develops those ideas into design principles. It distinguishes the different streams of household wastewater, explains how each can be reused or treated safely, and examines the nutrient value that conventional systems often discard.

This is the area of water autonomy where the **Principle of Precaution** matters most. Human waste carries pathogens that cause serious disease. Poorly designed reuse systems can harm the household, its neighbours and the wider environment. The aim is not to bypass public health systems but to understand when local alternatives can be safe, and what it takes to make them so.`,

    sections: [
      {
        title: 'Separating the Streams',
        content: `Household wastewater is not one thing. Separating it into streams is the foundation of safe reuse, because each stream carries different risks and different value.

**Greywater** is wastewater from showers, baths, bathroom sinks and washing machines. It contains soap, skin cells, hair, lint and some bacteria, but far fewer pathogens than toilet waste. It is typically the largest volume of household wastewater and the easiest to reuse.

**Kitchen sink and dishwasher water** is often classed separately, or as "dark" greywater, because food particles and fats raise its organic load and make it spoil faster. Many codes treat it as blackwater.

**Blackwater** is wastewater containing human excreta, mainly toilet waste. It carries the highest pathogen load and needs the most careful treatment.

Within blackwater, **urine** and **faeces** are themselves very different. Urine from healthy people contains few pathogens and much of the nitrogen and a large share of the phosphorus and potassium that people excrete. Faeces contain most of the pathogens. Some sanitation designs keep these apart for that reason.

Mixing all streams into one pipe, as conventional plumbing does, is convenient but means that a large volume of relatively clean water is turned into hazardous waste. Separation is what makes safe local reuse possible.`
      },
      {
        title: 'Greywater Reuse Design',
        content: `The most common and lowest-risk use of greywater is **subsurface irrigation** of plants, especially trees, shrubs and perennials. Widely taught design principles include:

- **Do not store untreated greywater.** Within about a day it can turn anaerobic and foul-smelling as bacteria multiply. Simple systems send it straight to the landscape.
- **Keep it below the surface.** Discharging into mulch basins or under a layer of wood chips prevents people and pets from contacting it and lets soil organisms break down organic matter.
- **Avoid spraying.** Sprinklers create aerosols that can carry bacteria. Drip systems for greywater need filtration and frequent maintenance.
- **Do not irrigate the edible parts of root crops or leafy greens** that are eaten raw. Fruit trees are a common, lower-risk choice.
- **Choose compatible products.** Many soaps and detergents contain salts or boron that build up in soil and harm plants. Plant-friendly products are an essential part of the system.
- **Provide a diversion valve** so that greywater can be sent to the sewer or septic system when it contains bleach, when the soil is saturated, or when someone in the household is ill.

Common configurations include laundry-to-landscape systems that use the washing machine pump, branched drains that split flow by gravity between several mulch basins, and constructed wetlands or filters where treatment beyond direct irrigation is needed.`
      },
      {
        title: 'Blackwater: Composting and Container-Based Sanitation',
        content: `Blackwater can be handled in several ways outside a central sewer. Each has trade-offs that should be assessed honestly.

**Septic systems** are the most familiar decentralised option in many rural areas. A tank settles solids and the liquid passes to a soil drainage field. They are proven and widely regulated, but they discard nutrients, require periodic pumping, and can contaminate groundwater if poorly sited or maintained.

**Composting toilets** collect excreta, usually with a carbon-rich cover material such as sawdust, and break it down biologically. They save the large volume of water used for flushing. Safety depends on time and, in some approaches, heat: pathogen reduction is reliable only when material is held long enough under the right conditions. Guidance from public health bodies sets out retention times and handling practices. Finished material is most safely used around trees and ornamental plants rather than vegetables, unless treatment has been verified.

**Urine-diverting toilets** separate urine at the source. Stored urine can, after a holding period recommended in sanitation guidance, be diluted and used as a fertiliser. Faeces are dried or composted separately.

**Container-based sanitation**, in which sealed containers are collected and processed centrally, is used in some cities where sewers are absent. It shows that the choice is not simply between a household system and a city sewer.

Every option requires maintenance. A neglected composting toilet is worse than a well-run sewer.`
      },
      {
        title: 'Nutrient Recovery and Closing Loops',
        content: `Conventional sanitation treats human waste as something to be removed and diluted. Ecological sanitation, a field within environmental engineering and public health, treats it as a resource that is in the wrong place.

The reasoning is straightforward. Food grown on farms takes nitrogen, phosphorus and potassium from the soil. People eat the food and excrete most of those nutrients. In a conventional system those nutrients go to treatment plants and, often, to rivers and seas, where they can contribute to algal blooms. Meanwhile farms buy synthetic fertiliser, much of it produced with fossil energy or mined from finite phosphate deposits.

Recovering nutrients from wastewater, through urine diversion, composting, or nutrient recovery at treatment plants, can reduce both pollution and fertiliser dependence. From an Exodological perspective this is a **dependency link between two systems**: food autonomy and water autonomy are connected through the nutrient cycle. A dependency map of a household's food system that ends at "fertiliser" can, in principle, loop back to its own sanitation.

This connection should not be oversold. Recovered nutrients must be handled safely, regulations on using human-derived fertiliser vary widely, and social acceptance can be a real form of exit friction. Pilot projects at community scale, with clear safety protocols, are a more realistic path than individual experimentation with food crops.`
      },
      {
        title: 'Health, Regulation and Residual Duty',
        content: `Wastewater management is one of the places where individual exit most directly affects other people, so ethical and legal care is not optional.

**Public health**: The World Health Organization publishes guidelines on the safe use of wastewater, excreta and greywater, built around a multi-barrier approach: treatment, restrictions on which crops are irrigated, application methods that limit contact, and hygiene practices. These guidelines are a sound starting point for any design, and they reflect decades of experience in public health.

**Regulation**: Rules vary greatly. Some jurisdictions actively permit simple greywater systems without a permit; others prohibit any reuse or require engineered systems. Composting toilets may be allowed only with a backup sewer or septic connection. Working within the law, and pursuing reform through voice where rules are outdated, protects both the practitioner and the credibility of alternatives.

**Neighbours and downstream users**: Wastewater that pools on the surface, runs onto another property or reaches a well affects people who did not choose the risk. Siting and setbacks matter.

**Residual duty to the shared system**: Households that reduce their use of public sewers still benefit from them, especially during illness or system failure. Continuing to support well-functioning public sanitation, rather than treating it as someone else's problem, is part of exiting well.`
      },
      {
        title: 'Choosing a Path: Partial and Staged Approaches',
        content: `As with supply, a soft exodus is usually the wise path for wastewater. A practical sequence for a household or community might be:

1. **Understand your current system.** Map where wastewater goes, what it passes through, and what would happen during a power cut or sewer failure.
2. **Reduce volume.** Efficient fixtures shrink both supply and wastewater flows.
3. **Begin with laundry or shower greywater** to subsurface irrigation, with a diversion valve back to the sewer or septic system. This is low risk, legal in many places, and builds practical knowledge.
4. **Consider a backup sanitation option**, such as a properly managed composting or container toilet, for use when the sewer or water supply fails. This alone adds real exit capability for a critical function.
5. **Explore nutrient recovery at community scale**, where shared facilities, testing and regulation can be handled properly.

At each step, keep the connection to the public system until the alternative has been proven over time. In sanitation, the cost of a failed experiment falls on others as well as on yourself. That asymmetry is why precaution, testing and humility are central to this part of water autonomy.`
      }
    ],

    keyTakeaways: [
      'Separating greywater, kitchen water, urine and faeces is the foundation of safe reuse',
      'Greywater is best used promptly in subsurface irrigation with compatible products and a diversion valve',
      'Composting, urine-diverting and container-based sanitation can work, but only with proper retention, handling and maintenance',
      'Nutrient recovery links water autonomy to food autonomy, but must be approached cautiously and at suitable scale',
      'Public health guidance, regulation and residual duty to neighbours and the shared system shape every design'
    ],

    references: [
      {
        author: 'Ludwig, Art',
        title: 'The New Create an Oasis with Greywater: Choosing, Building and Using Greywater Systems',
        year: 2006,
        publisher: 'Oasis Design',
        relevance: 'A widely used practical manual on designing simple, safe greywater irrigation systems and avoiding common failures.',
        url: 'https://openlibrary.org/works/OL8801864W'
      },
      {
        author: 'Jenkins, Joseph C.',
        title: 'The Humanure Handbook: A Guide to Composting Human Manure',
        year: 1994,
        publisher: 'Jenkins Publishing',
        relevance: 'A well-known guide to composting toilets and the case for treating human waste as a resource, useful alongside public health guidance.',
        url: 'https://openlibrary.org/works/OL12078342W'
      },
      {
        author: 'George, Rose',
        title: 'The Big Necessity: The Unmentionable World of Human Waste and Why It Matters',
        year: 2008,
        publisher: 'Metropolitan Books',
        relevance: 'Surveys sanitation systems around the world, showing both the achievements of sewers and the range of alternatives where they are absent.',
        url: 'https://openlibrary.org/works/OL5869546W'
      }
    ]
  },
  learningObjectives: [
    'Distinguish greywater, kitchen wastewater and blackwater, and explain the risks of each stream',
    'Apply core design principles for safe subsurface greywater irrigation',
    'Compare septic, composting, urine-diverting and container-based sanitation options',
    'Explain how nutrient recovery links water and food dependencies',
    'Evaluate a wastewater plan against public health guidance, regulation and residual duty'
  ],
  keyTerms: [
    { term: 'Greywater', definition: 'Household wastewater from showers, baths, bathroom sinks and laundry, excluding toilet waste.' },
    { term: 'Blackwater', definition: 'Wastewater containing human excreta, mainly from toilets, with a high pathogen load.' },
    { term: 'Subsurface Irrigation', definition: 'Delivering greywater beneath mulch or soil so that people do not contact it and soil organisms can break it down.' },
    { term: 'Urine Diversion', definition: 'Separating urine from faeces at the toilet so that each can be managed and, where safe, reused.' },
    { term: 'Nutrient Recovery', definition: 'Returning nitrogen, phosphorus and potassium from human waste to productive use instead of discharging them.' },
    { term: 'Closing Loops', definition: 'Reusing outputs of a system, such as wastewater or nutrients, as inputs to reduce demand and dependence.' }
  ]
}

export default lesson
