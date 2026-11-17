import type { ExpandedExodologyLesson } from './types'

const lesson: ExpandedExodologyLesson = {
  id: 'f-m5-l2',
  title: 'Food System Failure Modes',
  duration: '20 min',
  type: 'instruction',
  content: {
    introduction: `Understanding how food systems fail helps us anticipate crises and design resilient alternatives.

The previous lesson described the dependencies that industrial agriculture rests on. This lesson asks what happens when those dependencies are stressed. A "failure mode" is a term borrowed from engineering: it names a particular way in which a system can stop doing its job. Naming failure modes makes it possible to look for early warning signs, to compare cases and to design alternatives that do not fail in the same ways.

The lesson groups food system failures into four families: supply disruptions, economic failures, ecological failures and cascades that link them. They differ in speed, in visibility and in who notices first. They also matter for Exodology in different ways, because each one changes when exit is wise, how much time is left to prepare and who is most exposed if preparation does not happen.`,

    sections: [
      {
        title: 'Supply Disruption Failures',
        content: `Energy shocks, input unavailability, weather events, transportation collapse, and labor gaps reveal brittleness beneath apparent abundance.

These are the fastest and most visible failures. Each one interrupts the flow of food or of what is needed to grow it:

- **Energy shocks.** Because fuel and fertilizer costs are tied to energy prices, a sudden rise in oil or gas prices quickly raises the cost of farming, processing and transport.
- **Input unavailability.** Farms depend on a steady supply of fertilizer, seed, spare parts, veterinary drugs and packaging. When one is missing at the wrong moment, such as fertilizer at planting time, the loss shows up months later at harvest.
- **Weather events.** Droughts, floods and heat waves can destroy crops over large areas. In 2010, drought and wildfires in Russia damaged the wheat harvest and the government banned grain exports, which contributed to higher world wheat prices.
- **Transportation collapse.** Roads, ports, railways and fuel supplies link farms to eaters. When Hurricane Maria struck Puerto Rico in 2017, damage to ports, roads and the power grid made it very difficult to distribute food and water on an island that imports much of its food.
- **Labor gaps.** Planting, harvesting and processing still rely heavily on people. In 2020, COVID-19 travel restrictions limited the movement of seasonal farm workers into several European countries, and outbreaks closed meatpacking plants in the United States.

The phrase **brittleness beneath apparent abundance** is the key idea. Full shelves in normal times can hide how little buffer the system holds. A brittle system works well right up to the point where it breaks, with little warning in between. Supply disruptions are the moments when hidden dependencies become visible, which is why they are valuable for learning, even though they are costly for those who live through them.

For exit, supply disruptions are a test of preparation rather than a good time to begin it. Households and communities that already have food stores, local suppliers and shared plans can respond; those that do not are left competing for scarce goods.`
      },
      {
        title: 'Economic Failure Modes',
        content: `Price volatility, farm debt crisis, consolidation death spiral, market access collapse, and subsidy dependency often precede physical failure.

Economic failures are slower and less visible than supply shocks, but they shape who can keep farming and who can keep eating:

1. **Price volatility.** Sharp swings in food prices harm both poor consumers, who spend a large share of income on food, and farmers, who cannot plan or invest. The world food price spikes of 2007 to 2008 and 2010 to 2011 were followed by unrest in a number of countries.
2. **Farm debt crisis.** Farming often requires borrowing for land, machinery and inputs. In the United States in the early 1980s, high interest rates, falling land values and weak export prices combined into a farm debt crisis in which many family farms were foreclosed.
3. **Consolidation death spiral.** When margins are thin, farms survive by growing larger to spread costs, which pushes prices down further, which forces the next round of growth or exit. The phrase "get big or get out," associated with US Agriculture Secretary Earl Butz in the 1970s, captures the pressure. Each turn leaves fewer, larger farms and fewer local buyers and suppliers.
4. **Market access collapse.** A farm can be productive and still fail if there is no one nearby to buy, process or transport its output. When a regional slaughterhouse, creamery or grain elevator closes, small producers may lose their only practical route to market.
5. **Subsidy dependency.** When farm incomes rely heavily on government payments, the system becomes vulnerable to policy changes. During the US-China trade dispute of 2018 and 2019, the US government made large emergency payments to farmers hit by lost exports, illustrating how political decisions can determine farm survival.

Why do these **often precede physical failure**? Because farms, processors and rural communities usually disappear before food runs out. Each lost farm takes with it land in production, equipment, skills and relationships. The physical capacity to feed a region can erode quietly while supermarkets remain full, supplied from further and further away. This is an example of the core principle of path dependence: once local capacity is gone, rebuilding it is slow and expensive.

For Exodologists, economic warning signs are therefore early warnings. Rising farm debt, closing processors and the loss of local markets suggest that a region's exit capability is shrinking, and that building alternatives now will cost less than rebuilding them later.`
      },
      {
        title: 'Ecological Failure Modes',
        content: `Soil exhaustion, water depletion, pollinator collapse, pest explosions, and climate mismatch operate on longer timescales but are more fundamental.

These failures affect the living base on which every form of agriculture depends:

- **Soil exhaustion.** Loss of organic matter, nutrients and structure reduces a soil's ability to hold water and support crops. It can be masked for years by adding fertilizer.
- **Water depletion.** Falling aquifers and over-allocated rivers limit irrigation. Unlike a drought, depletion does not end when the rain returns.
- **Pollinator collapse.** Many fruits, vegetables and nuts depend on insect pollination. Beekeepers in the United States reported unusually heavy colony losses beginning in 2006, described at the time as colony collapse disorder, and researchers have also documented declines in many wild pollinators. Major staple grains such as wheat, rice and maize are wind-pollinated, so the main risk is to dietary diversity and nutrition rather than to total calories, a distinction worth keeping clear.
- **Pest explosions.** Heavy pesticide use can kill the predators that keep pests in check and select for resistant pests. In Indonesia in the 1980s, outbreaks of the brown planthopper in rice were linked to insecticide use that killed its natural enemies; the government restricted many insecticides and promoted integrated pest management. Herbicide-resistant weeds, such as glyphosate-resistant Palmer amaranth in the United States, are a more recent example.
- **Climate mismatch.** Crop varieties, planting calendars and irrigation systems were designed for past climates. As temperatures and rainfall patterns shift, crops may face heat during flowering, new pests or water shortages in critical weeks.

These failures **operate on longer timescales but are more fundamental** because supply chains can be repaired and debts restructured, but degraded soil, depleted aquifers and lost species recover slowly, if at all. In Exodology's terms, they are the clearest case where the Principle of Precaution applies: when consequences may be irreversible, waiting for certainty means waiting too long.

The challenge is that slow failures rarely trigger action. They need deliberate monitoring, such as soil tests, well levels and pollinator surveys, to make them visible before options close.`
      },
      {
        title: 'Cascade Failures',
        content: `Food-energy nexus, financial-physical nexus, ecological-economic nexus, and regional cascades are most dangerous because intervention points are unclear.

A cascade is a failure that spreads from one part of a system to another, often across sectors and borders. The sociologist Charles Perrow argued in his study of "normal accidents" that in tightly coupled, complex systems, small failures can interact in ways no one anticipated. Food systems show this pattern through several links:

- **Food-energy nexus.** Food depends on energy, and some energy depends on food crops. During the 2007 to 2008 crisis, high oil prices raised farm costs and also increased demand for crops used to make biofuels, so energy and food prices pushed each other up.
- **Financial-physical nexus.** Food is traded in financial markets as well as physical ones. Economists continue to debate how much financial speculation contributed to the price spikes of 2007 to 2011; what is clearer is that financial stress, such as the loss of credit to farmers or traders, can interrupt physical flows of food.
- **Ecological-economic nexus.** A drought reduces a harvest, which reduces income, which increases debt, which forces farmers to sell land or livestock, which reduces future production. An ecological shock becomes an economic one and then a lasting loss of capacity.
- **Regional cascades.** When a major exporter restricts exports, importing countries scramble for supply, and other exporters may restrict in turn. In 2008, rice export restrictions by several producing countries contributed to a sharp rise in world rice prices.

Cascades are **most dangerous because intervention points are unclear**. In a simple failure, it is obvious where to act: repair the road, deliver the fertilizer. In a cascade, causes and effects are spread across many actors, none of whom controls the whole, and an action that helps one part may harm another, as when an export ban protects domestic consumers while raising prices abroad.

For exit, cascades argue for reducing **coupling**: building local and regional food systems that can keep functioning partly on their own when wider links fail. This does not mean cutting all ties; it means ensuring that a failure elsewhere does not automatically become a failure here.`
      },
      {
        title: 'Implications for Exit',
        content: `Studying failure modes serves the three core questions of Exodology: when to leave, how to leave well and what comes after.

**When.** Economic and ecological warning signs usually appear well before a supply crisis. Watching for them, such as farm debt, lost processors, falling water tables and soil decline, gives communities time to choose a gradual, soft exodus rather than being forced into a hard one.

**How to leave well.** Exit from a failing food system can itself cause failure if it is done abruptly. A widely documented cautionary case is Sri Lanka in 2021, where the government suddenly banned imports of chemical fertilizers and pesticides in an attempt to move the country to organic farming. Farmers had little time, training or alternative inputs, rice and tea yields fell, and the policy was largely reversed within months. The lesson is not about the merits of organic farming; it is that a transition imposed without preparation, participation or parallel systems can create the very crisis it was meant to avoid.

**What comes after.** Alternatives should be designed against the failure modes in this lesson: diverse crops and seed against pests and climate mismatch, soil building against exhaustion, local processing against market access collapse, and modest stores against supply shocks.

Throughout, the core principle of justice orientation asks who is most exposed. Food failures fall first and hardest on low-income households, small farmers and farm workers, and on importing regions with little bargaining power. Planning for exit includes planning for them.`
      }
    ],

    keyTakeaways: [
      'Supply disruptions reveal hidden dependencies',
      'Economic failures often precede physical failures',
      'Ecological failures are slow but fundamental',
      'Cascade failures are most dangerous',
      'An abrupt, unprepared exit can itself trigger the failure it aims to avoid'
    ],

    references: [
      {
        author: 'Perrow, Charles',
        title: 'Normal Accidents: Living with High-Risk Technologies',
        year: 1984,
        publisher: 'Basic Books',
        relevance: 'Explains how tight coupling and complexity allow small failures to cascade, a pattern visible in food system crises.',
        url: 'https://openlibrary.org/works/OL4468929W'
      },
      {
        author: 'Roberts, Paul',
        title: 'The End of Food',
        year: 2008,
        publisher: 'Houghton Mifflin',
        relevance: 'Describes the economic, energy and ecological stresses that make the global food system prone to failure.',
        url: 'https://openlibrary.org/works/OL3647459W'
      },
      {
        author: 'Patel, Raj',
        title: 'Stuffed and Starved: Markets, Power and the Hidden Battle for the World Food System',
        year: 2007,
        publisher: 'Portobello Books',
        relevance: 'Examines how market concentration, farm debt and price shocks affect farmers and consumers worldwide.',
        url: 'https://openlibrary.org/works/OL9896495W'
      }
    ]
  },
  learningObjectives: [
    'Identify primary food system failure modes',
    'Distinguish between supply, economic, and ecological failures',
    'Understand cascade failure dynamics',
    'Use early warning signs to judge when a gradual exit is still possible'
  ],
  keyTerms: [
    { term: 'Failure Mode', definition: 'A particular way in which a system can stop performing its function, such as a supply disruption or an ecological decline.' },
    { term: 'Cascade Failure', definition: 'A failure that spreads from one part of a system to others, often across sectors or regions.' },
    { term: 'Tight Coupling', definition: 'A condition in which parts of a system are so closely linked that a problem in one quickly affects the others (a term from Charles Perrow\'s study of accidents).' },
    { term: 'Hard Exodus', definition: 'A complete, rapid departure from a system, typically in response to crisis or failure.' },
    { term: 'Exit Capability', definition: 'The structural capacity of individuals or communities to leave a system when needed without catastrophic loss.' }
  ]
}

export default lesson
