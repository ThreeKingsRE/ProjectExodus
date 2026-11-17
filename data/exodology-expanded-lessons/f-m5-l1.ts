import type { ExpandedExodologyLesson } from './types'

const lesson: ExpandedExodologyLesson = {
  id: 'f-m5-l1',
  title: 'Industrial Agriculture Dependencies',
  duration: '22 min',
  type: 'instruction',
  content: {
    introduction: `Industrial agriculture appears to be a marvel of efficiency, producing abundant food at low cost. But this efficiency is built on deep dependencies that create systemic vulnerability.

The efficiency is real. Over the twentieth century, yields of staple crops rose dramatically, the share of household income spent on food fell in many countries, and a small fraction of the workforce came to feed large urban populations. An honest analysis starts by acknowledging these achievements rather than dismissing them. The question this lesson asks is not whether industrial agriculture works, but what it depends on in order to keep working, and what happens to the people who rely on it when one of those dependencies fails.

Food is the clearest case of **structural dependence** in modern life: most households cannot meet basic needs without continued participation in the food system, and very few retain the land, skills or seed to do otherwise. The four sections below examine the main dependencies in turn: fossil fuels, seed and genetics, water and soil, and supply chains. Each one is also a place where exit capability has been lost, and a place where it can be rebuilt.`,

    sections: [
      {
        title: 'The Fossil Fuel Dependency',
        content: `Modern agriculture runs on oil: Nitrogen fertilizer is synthesized from natural gas. Pesticides are petroleum-derived. Machinery burns diesel. Food often travels long distances; a widely cited but contested estimate puts the average at about 1,500 miles. When oil becomes scarce or expensive, the entire system is stressed.

Each point in this list is a separate channel of dependence:

- **Fertilizer.** Almost all synthetic nitrogen fertilizer is made through the Haber-Bosch process, which combines nitrogen from the air with hydrogen. Most of that hydrogen is produced from natural gas, and the process itself is energy-intensive. The environmental scientist Vaclav Smil has argued that a large share of today's world population could not be fed without synthetic nitrogen. This makes fertilizer prices closely tied to gas prices: in 2021 and 2022, when European gas prices spiked, several European fertilizer producers cut ammonia output and fertilizer prices rose sharply worldwide.
- **Pesticides.** Most synthetic herbicides, insecticides and fungicides are made from petrochemical feedstocks, so their supply depends on the same industries.
- **Machinery.** Tractors, combines, irrigation pumps, grain dryers and refrigerated trucks all run on fuel or electricity. A modern grain farm cannot plant or harvest by hand at the same scale.
- **Distance.** Long-distance transport, processing, packaging and cold storage add further energy demands between the farm and the plate.

The mechanism that matters for exit is **coupling**. Because energy enters agriculture at so many points, an energy price shock does not raise one cost; it raises many costs at once, and it does so for nearly every farm at the same time. During the 2007 to 2008 world food price crisis, high oil prices were one of several widely cited contributors, alongside demand for biofuels, poor harvests and export restrictions.

For exit, this suggests that reducing fossil fuel dependence is less about a single dramatic switch and more about loosening many small couplings: building soil fertility through legumes, compost and manure; shortening distances; and favoring tools that can be maintained locally. A household or community that cannot leave the system entirely can still reduce how strongly an energy shock reaches its food supply.`
      },
      {
        title: 'The Seed and Genetic Dependency',
        content: `Hybrid seeds don't breed true—farmers must buy new seed annually. GMO patents prohibit seed saving. Genetic diversity has collapsed as industrial varieties focus on yield over resilience. A handful of corporations control most commercial seed.

Each of these points describes a different form of lock-in:

1. **Hybrids.** First-generation (F1) hybrid seed is produced by crossing two inbred parent lines. The resulting plants are vigorous and uniform, but their offspring do not reliably carry the same traits. Saving seed from a hybrid crop gives an unpredictable result, so farmers return to the seller each season. The dependence here is biological rather than legal.
2. **Patents and licenses.** Genetically engineered varieties are typically sold under patents and licensing agreements that forbid replanting saved seed. In the United States, the Supreme Court upheld this in Bowman v. Monsanto Co. (2013), ruling that a farmer who replanted patented soybeans infringed the patent. Here the dependence is legal.
3. **Loss of diversity.** When farmers across a region plant a small number of high-yielding varieties, the crop becomes genetically uniform. Uniformity makes harvesting and marketing easier, but it also means a single disease can spread through the whole crop. Two widely documented examples: the Irish potato famine of the 1840s, in which heavy reliance on a narrow range of potatoes left the crop exposed to late blight; and the 1970 southern corn leaf blight in the United States, which spread rapidly because much of the hybrid corn crop shared the same genetic trait.
4. **Concentration.** A series of mergers, including Dow and DuPont (whose agriculture business became Corteva), ChemChina's purchase of Syngenta and Bayer's purchase of Monsanto, left a small number of firms controlling much of the world's commercial seed and agrochemical markets.

Taken together, these turn seed, once a renewable resource that farmers reproduced themselves, into an annual purchase. In Exodology's terms, this raises **exit friction**: a farmer who wants to leave a given seed company may find few alternatives, little locally adapted seed and no recent experience of seed saving.

Exit in this domain is usually a **soft exodus**. Farmers and gardeners can keep buying some commercial seed while building a parallel system: open-pollinated and heirloom varieties, community seed banks and the skills to select and store seed. The work is slow, because seed adapted to a place takes years to develop, which is a reason to start before it is needed.`
      },
      {
        title: 'The Water and Soil Dependency',
        content: `Aquifer depletion, soil degradation, erosion, and salinization are mining the resource base. Industrial agriculture is consuming the foundations it depends on. This creates a slow-motion exit crisis.

The word "mining" is precise. A mine extracts a stock that does not refill on human timescales. Several farming practices treat water and soil the same way:

- **Aquifer depletion.** When groundwater is pumped faster than rain and rivers recharge it, the water table falls. The Ogallala Aquifer beneath the US High Plains is a widely studied example: in parts of Kansas and Texas, wells have dropped so far that irrigation has become uneconomic, and some farms have returned to dryland farming.
- **Soil degradation and erosion.** Repeated tillage, bare fields between crops and the loss of organic matter leave soil exposed to wind and water. The Dust Bowl of the 1930s on the US southern plains showed how quickly plowed grassland can blow away in drought, and soil scientists continue to report that many farmed soils are eroding faster than new soil forms.
- **Salinization.** Irrigation in dry climates brings salts to the surface as water evaporates. Without good drainage, salt builds up until crops fail. Historians have linked salt accumulation to declining yields in ancient southern Mesopotamia, and salinization remains a problem in irrigated regions today.

Why call this a **slow-motion exit crisis**? Because the decline is gradual, it does not trigger the alarm that a sudden shock would. Yields can be held up for years with more fertilizer, deeper wells or new varieties, which hides the loss of the underlying stock. By the time the problem is undeniable, the options are fewer and more expensive. In the language of earlier lessons, this is a case where the window for a planned, soft exit closes quietly, and what remains is a forced, hard one.

The implication for practice is timing. Exodologists ask not only whether a system is failing, but when it will have used up the reserves that make a gradual transition possible. Practices that rebuild the base, such as cover crops, reduced tillage, rotations, and water management that matches withdrawals to recharge, are ways of keeping that window open.`
      },
      {
        title: 'The Supply Chain Dependency',
        content: `Just-in-time delivery means grocery stores hold days of inventory, not weeks. Global sourcing means problems anywhere affect everywhere. Concentration means disruption at one facility affects millions.

Each of these features was adopted because it lowered cost:

- **Just-in-time delivery** keeps little stock on hand and relies on frequent, precise deliveries. It reduces waste and storage costs, but it also removes the buffer that would absorb a disruption. When demand jumps, as in the panic buying of March 2020 at the start of the COVID-19 pandemic, shelves empty quickly even when there is enough food in the wider system.
- **Global sourcing** lets buyers draw on the cheapest supplier anywhere. The trade-off is exposure: a drought, war or export ban in one region affects prices and supplies everywhere. When Russia's invasion of Ukraine in 2022 disrupted Black Sea grain exports, importing countries far from the conflict felt the effects.
- **Concentration** means a small number of very large plants, warehouses and firms handle much of the flow. In spring 2020, COVID-19 outbreaks forced temporary closures at several large US meatpacking plants, and because each plant processed a large share of national output, the closures disrupted supply and left farmers with animals they could not sell.

A useful way to see this is through redundancy. A system with spare capacity, multiple suppliers and local stocks costs more to run in normal times, but fails more gently. Industrial food supply chains have largely traded redundancy for efficiency. That trade-off is not irrational, but it is rarely made with the most vulnerable households in mind: those with little cash, no car and no space to store food are the first to feel empty shelves.

For exit, this points to rebuilding modest buffers and shorter links: household and community food stores, regional processing, direct relationships between farms and eaters, and more than one source for staples. These do not replace global supply chains, and pretending they could would be dishonest. They reduce how far a disruption elsewhere can reach.`
      },
      {
        title: 'Implications for Exit',
        content: `The four dependencies are not separate. Fertilizer depends on gas; irrigation pumps depend on energy; global supply chains depend on diesel and shipping; and depleted soils need more fertilizer to hold yields. Analyzing them together is an application of the core principle of systems thinking: a weakness in one dependency often increases the load on another.

This analysis supports several practical conclusions, consistent with earlier lessons:

1. **Map before acting.** Identify which dependencies matter most for a particular household, farm or community, and which would fail first. The interactive lesson in this module offers a structured way to do this.
2. **Prefer gradual, partial exit.** Very few people can leave the industrial food system entirely, and attempts to do so quickly can create new hardship. A soft exodus that builds parallel systems alongside existing supply is usually safer and more widely available.
3. **Mind who stays.** Most people will continue to rely on industrial food for the foreseeable future. Exodology's idea of **residual duty** means that those who build alternatives should also support measures that make the main system fairer and more resilient for everyone, rather than treating their own exit as the whole answer.
4. **Be honest about trade-offs.** Less dependent systems may cost more, require more labor or produce less per acre in some settings. These are real tensions to discuss openly, not to hide.

The next lesson examines how these dependencies turn into actual failures, and the lesson after that looks at movements that are building alternatives.`
      }
    ],

    keyTakeaways: [
      'Industrial agriculture depends on fossil fuels at every stage',
      'Seed and genetic dependencies create corporate control and fragility',
      'Industrial methods deplete soil and water—their own resource base',
      'Long, concentrated supply chains create systemic vulnerability',
      'The dependencies interact: a shock in one, such as energy prices, increases pressure on the others',
      'Slow depletion can close the window for a gradual exit before the crisis is visible'
    ],

    references: [
      {
        author: 'Smil, Vaclav',
        title: 'Enriching the Earth: Fritz Haber, Carl Bosch, and the Transformation of World Food Production',
        year: 2001,
        publisher: 'MIT Press',
        relevance: 'Explains how synthetic nitrogen fertilizer made from natural gas became a foundation of modern food production.',
        url: 'https://openlibrary.org/works/OL1855338W'
      },
      {
        author: 'Roberts, Paul',
        title: 'The End of Food',
        year: 2008,
        publisher: 'Houghton Mifflin',
        relevance: 'Examines the energy, ecological and supply chain dependencies of the global industrial food economy.',
        url: 'https://openlibrary.org/works/OL3647459W'
      },
      {
        author: 'Patel, Raj',
        title: 'Stuffed and Starved: Markets, Power and the Hidden Battle for the World Food System',
        year: 2007,
        publisher: 'Portobello Books',
        relevance: 'Analyzes how concentration in seed, processing and retail shapes who controls the food system and who bears its risks.',
        url: 'https://openlibrary.org/works/OL9896495W'
      }
    ]
  },
  learningObjectives: [
    'Identify key dependencies in industrial agriculture',
    'Analyze supply chain vulnerabilities',
    'Understand how industrial methods undermine their foundations',
    'Explain how the main dependencies interact and what that means for the timing of exit'
  ],
  keyTerms: [
    { term: 'Structural Dependence', definition: 'A condition where survival or basic functioning requires continued participation in a specific system.' },
    { term: 'Exit Friction', definition: 'The resistance, costs, and barriers that make leaving a system difficult or costly.' },
    { term: 'Haber-Bosch Process', definition: 'The industrial method of making ammonia for nitrogen fertilizer from atmospheric nitrogen and hydrogen, usually derived from natural gas.' },
    { term: 'Hybrid Seed', definition: 'Seed produced by crossing two parent lines; its plants are uniform and vigorous, but seed saved from them does not reliably reproduce the same traits.' },
    { term: 'Just-in-Time Delivery', definition: 'A supply method that keeps minimal stock on hand and relies on frequent deliveries, lowering costs but reducing buffers against disruption.' },
    { term: 'Soft Exodus', definition: 'A gradual, partial exit that maintains some connections while building alternatives.' }
  ]
}

export default lesson
