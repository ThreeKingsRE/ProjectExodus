import type { ExpandedExodologyLesson } from './types'

const lesson: ExpandedExodologyLesson = {
  id: 'a-m2-l2',
  title: 'Food System Alternatives',
  duration: '20 min',
  type: 'instruction',
  content: {
    introduction: `Food is the most fundamental human need and one of the most actionable areas for building parallel systems.

It is actionable because food alternatives can start at almost any scale and any budget: a few containers on a balcony, a shared plot, a buying club of six households. Results arrive within a season, so people can learn quickly and see the value of what they are building. The previous lesson set out the general method for designing parallel systems: start with function, design for resilience and maintainability, begin with a minimum viable system, and plan integration points. This lesson applies that method to food by surveying the alternatives available at each stage of the food chain.

A food system is more than farming. Food has to be produced, moved to the people who eat it, preserved and processed so that it lasts, and renewed each year through seed and knowledge. A dependency map that looks only at production misses most of the places where households and communities depend on distant, concentrated systems. The four sections below follow those stages. The lessons that follow go deeper into fair distribution and access, and into documented community food networks.`,

    sections: [
      {
        title: 'Production Alternatives',
        content: `Home gardens, community gardens, urban farms, small-scale farms, agroforestry, permaculture systems. Each provides food production at different scales with different resource requirements.

The options form a rough ladder of scale:

- **Home gardens** need little money but steady time, some space and access to sunlight and water. They suit fresh vegetables and herbs better than staple calories.
- **Community gardens** share land, water and tools among many households, which helps renters and people without yards. They depend on land tenure: many have been lost when the owner sold or redeveloped the site.
- **Urban farms** produce at a larger scale within cities, often as social enterprises, and raise questions about soil contamination, water costs and secure leases.
- **Small-scale farms** can supply staple crops, meat, dairy and eggs in quantities that gardens rarely reach. They require land, capital and full-time skill, and their viability depends heavily on how they sell, which is the subject of the next section.
- **Agroforestry** combines trees with crops or livestock on the same land, trading slower establishment for long-lived yields and soil protection.
- **Permaculture systems** apply a design approach, developed by Bill Mollison and David Holmgren in Australia in the 1970s, that arranges plants, animals, water and buildings to support one another with fewer outside inputs.

Historical experience shows how much small-scale production can contribute. During the Second World War, governments in the United States and the United Kingdom encouraged "victory gardens" and "Dig for Victory" plots, and household and allotment gardens supplied a substantial share of fresh vegetables. They did not replace farms for grains and other staples, which is a useful reminder: matching each food need to the right scale of production matters more than choosing a favorite method.`
      },
      {
        title: 'Distribution Alternatives',
        content: `CSAs, farmers markets, food hubs, community buying clubs, food cooperatives. These connect producers to consumers outside industrial supply chains.

Each model shifts power and risk in a different way:

- **Community supported agriculture (CSA)**: members pay a farm in advance for a share of the season's harvest. The farm gains working capital and a guaranteed market; members share the risk of a poor season. This direct sharing of risk is what makes CSA a genuine alternative rather than just another sales channel.
- **Farmers markets**: producers sell directly to the public at regular markets, keeping a larger share of the price. They depend on producers' time and on customers able to shop at set times and places.
- **Food hubs**: organizations that gather produce from many small farms, store it, and sell it on to schools, hospitals, restaurants and stores. They solve the problem that small farms cannot each meet large buyers' volume and delivery requirements.
- **Community buying clubs**: households pool orders to buy in bulk at wholesale prices, often for staples that cannot be grown locally. They require little infrastructure, which makes them a strong minimum viable system.
- **Food cooperatives**: member-owned stores in which shoppers, workers or both share ownership and decide policy democratically.

The phrase "outside industrial supply chains" should be read with care. Most of these models still depend on roads, fuel, refrigeration and payment systems, and buying clubs often buy from the same wholesalers as conventional stores. Their main contribution to exit is **diversification and control**: more paths between producers and eaters, with more decisions made by the people involved. Whether those paths reach everyone, including households with low incomes or limited mobility, is the subject of the next lesson on distribution and access design.`
      },
      {
        title: 'Preservation and Processing',
        content: `Canning, fermenting, drying, freezing, root cellaring. Community kitchens for shared processing. These reduce dependence on industrial processing and extend seasons.

Local production is seasonal; eating is not. Without preservation, a community that grows much of its food in summer still depends on industrial supply chains for the rest of the year. Each method has its own requirements:

- **Canning** stores food at room temperature for long periods but requires correct technique. Low-acid foods such as beans and most vegetables must be pressure canned, because the bacterium that causes botulism can survive ordinary boiling-water processing.
- **Fermenting** uses beneficial microbes, often with salt, to preserve vegetables, dairy and other foods, and needs little energy or equipment. Writer Sandor Katz has documented how fermentation traditions exist in nearly every food culture.
- **Drying** removes moisture and can use sun, air or low heat. It is one of the oldest and least energy-intensive methods.
- **Freezing** preserves quality well but depends on continuous electricity, which ties food security to the energy system.
- **Root cellaring** stores potatoes, roots, squash and apples in cool, humid conditions with no energy input once the cellar is built.

**Community kitchens** make these methods accessible. Pressure canners, dehydrators and commercial-grade kitchens are expensive for one household but affordable when shared, and shared kitchens also make it possible for small producers to process food for sale under health regulations. They are a clear example of the third key takeaway: community infrastructure enables what individuals cannot.

For exit planning, preservation also determines how long a household or community can manage during a disruption. A full pantry and root cellar are a buffer that buys time, which is exactly what a well-designed exit needs.`
      },
      {
        title: 'Seed and Knowledge Systems',
        content: `Seed libraries, seed exchanges, community seed banks. Farming knowledge sharing, mentorship programs. These preserve the foundational resources of food sovereignty.

Seed is the point where a food system renews itself. A household that grows its own food but buys new seed each year from a few large companies still has a significant dependence. Many modern varieties are hybrids whose seed does not reliably reproduce the parent plant, so saving seed works best with open-pollinated varieties.

- **Seed libraries** lend seed to members, who are asked to return seed saved from their harvest.
- **Seed exchanges** connect growers who trade varieties. In the United States, Seed Savers Exchange, founded in 1975, grew from a small network of gardeners into a large nonprofit that maintains thousands of heirloom varieties.
- **Community seed banks** store local varieties as a reserve against crop failure and loss, and are widely used by farming communities in parts of Asia, Africa and Latin America.

Seed saving is itself a skill, and the knowledge needed to grow, preserve and save food is just as foundational as the seed. Much of it lives in people rather than in books: when to plant in a particular valley, how to manage a local pest, which varieties survive a dry year. Knowledge sharing and **mentorship programs** pass that knowledge on before it is lost.

**Food sovereignty**, a term associated with the international peasant movement La Via Campesina, refers to the right of peoples to define their own food and agriculture systems. Seed and knowledge are its foundations because without them, every other part of a local food system depends on outside suppliers each season. For exit planning, they are also the hardest resources to rebuild once lost, which argues for protecting them early.`
      },
      {
        title: 'Building an Integrated Local Food System',
        content: `The four stages work only when they are connected. A community with many gardens but no way to preserve the harvest still depends on supermarkets each winter. A food hub without enough local farms has nothing to distribute. Integration means mapping each stage and identifying where the weakest link lies.

A practical sequence, consistent with the minimum viable system approach, is:

1. **Map current dependence** at each stage: where food comes from, how it arrives, how it is stored, and where seed and know-how come from.
2. **Match alternatives to community capacity.** Consider the land, money, time, skills and organizational experience actually available. A community with little land but strong organizations might begin with a buying club and a community kitchen rather than a farm.
3. **Start where a small system can work** and where it addresses a real gap.
4. **Connect stages over time**, for example by linking a CSA to a shared kitchen so that surplus can be preserved.

Two cautions apply. First, local food systems can reproduce exclusion if they serve only those with time and money; the next lesson takes up that challenge directly. Second, no community is fully self-sufficient in food, and most will continue to rely on wider systems for some staples. The aim is greater exit capability, not complete separation.`
      }
    ],

    keyTakeaways: [
      'Food alternatives span production, distribution, processing, and knowledge',
      'Different scales require different approaches',
      'Community infrastructure enables what individuals cannot',
      'Preservation and seed systems determine whether local production can sustain a community beyond a single season'
    ],

    references: [
      {
        author: 'Mollison, Bill',
        title: 'Permaculture: A Designers\' Manual',
        year: 1988,
        publisher: 'Tagari Publications',
        relevance: 'The core reference for permaculture design, one of the production alternatives surveyed in this lesson.',
        url: 'https://openlibrary.org/works/OL3898650W'
      },
      {
        author: 'Katz, Sandor Ellix',
        title: 'The Art of Fermentation',
        year: 2012,
        publisher: 'Chelsea Green Publishing',
        relevance: 'Comprehensive guide to fermentation as a low-energy preservation method and to the food traditions that sustain it.',
        url: 'https://openlibrary.org/works/OL16461965W'
      },
      {
        author: 'Ashworth, Suzanne',
        title: 'Seed to Seed',
        year: 1991,
        publisher: 'Seed Saver Publications',
        relevance: 'Widely used practical manual on saving seed from vegetable crops, the basis of community seed libraries and exchanges.',
        url: 'https://openlibrary.org/works/OL4486429W'
      }
    ]
  },
  learningObjectives: [
    'Identify food system alternatives at each stage',
    'Match alternatives to community capacity',
    'Design integrated local food systems'
  ],
  keyTerms: [
    { term: 'Parallel Systems', definition: 'Alternative infrastructure built alongside existing systems to enable future exit.' },
    { term: 'Community Supported Agriculture (CSA)', definition: 'An arrangement in which members pay a farm in advance for a share of its harvest, sharing the risks and rewards of the season.' },
    { term: 'Food Hub', definition: 'An organization that gathers, stores and distributes food from many local producers to larger buyers.' },
    { term: 'Food Sovereignty', definition: 'The right of peoples to define their own food and agriculture systems, including control over seed, land and knowledge.' },
    { term: 'Open-Pollinated Variety', definition: 'A plant variety whose saved seed reliably grows plants like the parent, making seed saving possible.' }
  ]
}

export default lesson
