import type { CoreTopic } from '@/types/modules'
import type { LearningLevel } from '@/types/learning'

/**
 * The quick pitch for each Digital Scroll as a whole, written at each reading
 * level: what the whole book covers, in words that fit that reader. Shown on
 * the topic page under the book (not inside the scroll).
 */
export const BOOK_PITCHES: Record<CoreTopic, Record<LearningLevel, string>> = {
  'renewable-energy': {
    ELEMENTARY:
      'The sun, the wind and moving water can all make electricity, and they never run out! In this book you will find out how solar panels catch sunlight, how wind turbines spin, and where we keep energy for later. You will also see how families and towns can use clean energy to keep the lights on and the air clean.',
    MIDDLE_SCHOOL:
      'Where does your electricity come from, and could it come from somewhere cleaner? This book explains how solar panels, wind turbines, dams and ocean waves turn natural forces into power, and how batteries and the grid store and share it. You will also learn how cars, buildings and whole communities are switching to clean energy, and why it matters for the future.',
    HIGH_SCHOOL:
      'This book follows clean energy from the source to the socket. You will learn how solar, wind, hydro, ocean, geothermal, biomass and hydrogen systems produce power, how storage and smart grids balance supply and demand, and how transport and buildings cut their energy use. It ends with the people side: the policies, money and community choices that decide how fast, and how fairly, the world moves off fossil fuels.',
    UNDERGRADUATE:
      'A complete introduction to renewable energy systems, from photovoltaic physics and wind aerodynamics to hydro, ocean, geothermal, bioenergy and hydrogen. The book covers storage technologies, grid integration, microgrids and distributed generation, then efficiency in transport and buildings. The final parts examine energy policy, project finance and equity, and the planning challenges of a resilient transition.',
    GRADUATE:
      'This volume treats renewable energy as an integrated system. It moves from resource assessment and conversion technologies (solar, wind, hydro, marine, geothermal, bioenergy, hydrogen) to storage economics, grid stability, distributed and microgrid architectures, and demand-side efficiency in transport and buildings. It closes with policy design, financing structures, distributional equity and resilience planning for the energy transition.',
    PHD:
      'An advanced survey of renewable energy science, engineering and governance. It examines conversion limits and resource variability across solar, wind, hydro, marine, geothermal, bioenergy and hydrogen pathways; storage and flexibility in high-renewable grids; and decarbonisation of transport and the built environment. The closing parts address open research questions in market design, finance, energy justice and resilient transition modelling.',
  },
  'water-systems': {
    ELEMENTARY:
      'Every drop of water goes on a journey! In this book you will follow rain as it falls on roofs, fills barrels, soaks into the ground and flows into rivers. You will learn how people clean water, use it to grow food, and take care of the streams and wetlands where animals live.',
    MIDDLE_SCHOOL:
      'Where does your water come from, and where does it go when it drains away? This book follows water from rain barrels and storm drains to treatment plants, farms and fish ponds. You will learn how wetlands and rivers keep water clean, how sensors help us save it, and how towns decide who gets water and how much it costs.',
    HIGH_SCHOOL:
      'Water is the one resource every community depends on. This book follows it from harvesting rain and managing storm water, through treatment, reuse and groundwater, into irrigation and aquaculture. Then it looks at the ecosystems that clean water naturally, the monitoring technology that protects it, the policies and prices that share it, and the challenges water systems face as the climate changes.',
    UNDERGRADUATE:
      'An introduction to sustainable water management across the full cycle: rainwater harvesting, storm water and green infrastructure, treatment and reuse, and groundwater. The book covers irrigation efficiency and aquaculture, watershed ecosystems and conservation, sensing and data systems, and water policy, economics and governance. It ends with integrated approaches to water security, climate adaptation and urban water futures.',
    GRADUATE:
      'This volume treats water as a coupled human and natural system. It covers decentralised supply and green infrastructure, treatment and reuse technologies, groundwater management, agricultural water efficiency and aquaculture, ecosystem services, and monitoring and data infrastructure. Its final parts address pricing, allocation and governance, the water–energy–food nexus, traditional knowledge, and planning for water security under climate change.',
    PHD:
      'An advanced treatment of water systems science and governance. It examines hydrological processes and decentralised supply, advanced treatment and potable reuse, aquifer management, irrigation and aquaculture efficiency, and ecosystem services. The closing parts take up open questions in water economics and institutional design, nexus modelling, the integration of traditional knowledge, and resilience of water systems under climate uncertainty.',
  },
  'regenerative-agriculture': {
    ELEMENTARY:
      'Healthy food starts with healthy dirt! In this book you will meet the tiny living things in soil, learn why farmers plant different crops in turns, and see how old food scraps become compost. You will also find out how trees, animals and bugs can all help a farm grow good food.',
    MIDDLE_SCHOOL:
      'Some farms make their soil weaker every year. Regenerative farms make it stronger. This book shows you how: covering the ground with plants, rotating crops, making compost, planting trees among crops, and moving animals so the land can rest. You will also learn how farmers protect crops from pests naturally and earn a living doing it.',
    HIGH_SCHOOL:
      'Regenerative agriculture rebuilds the soil instead of using it up. This book starts with soil health, then covers cover crops, rotation and reduced tillage, composting, agroforestry and perennial crops, and livestock grazing that works with the land. It finishes with natural pest and water management, biodiversity, and the economics, seeds and carbon that keep regenerative farms going.',
    UNDERGRADUATE:
      'An introduction to regenerative agricultural systems, grounded in soil science. The book covers soil biology and structure, cover cropping, rotation and conservation tillage, composting and organic matter, agroforestry and perennial systems, and managed grazing. Later parts examine integrated pest and water management, biodiversity, farm economics, seed systems, carbon accounting and landscape-scale design.',
    GRADUATE:
      'This volume examines regenerative agriculture as an ecological and economic system. It covers soil biogeochemistry and structure, cover crop and rotation design, tillage regimes, compost and organic matter dynamics, agroforestry and perennial polycultures, and adaptive grazing. It closes with integrated pest and water management, on-farm biodiversity, enterprise economics, seed sovereignty, soil carbon measurement and landscape planning.',
    PHD:
      'An advanced survey of regenerative agriculture research. It examines soil microbial ecology and carbon dynamics, cropping-system design, tillage effects, organic amendments, agroforestry and perennial systems, and grazing management. The closing parts address open questions in biodiversity outcomes, pest ecology, farm economics, seed systems, soil carbon verification and the scaling of regenerative practice across landscapes.',
  },
  'zero-waste': {
    ELEMENTARY:
      'What happens to things after we throw them away? In this book you will learn how food scraps turn into compost, how bottles and cans get recycled, and how we can make less trash in the first place. You will find easy ways to reuse things at home and at school.',
    MIDDLE_SCHOOL:
      'When we throw something away, it doesn\'t really go "away". This book follows what we use, from food and plastic to clothes and phones, and shows how to waste less. You will learn about composting, recycling the right way, designing products that last, and how businesses and towns are building a world with less trash.',
    HIGH_SCHOOL:
      'This book follows what we use from design to disposal and shows how to close the loop. It covers composting and food waste, recycling and materials like plastics, designing waste out from the start, and the circular economy of reuse. It also looks at electronics and textiles, then the community action, policy, data and careers that turn good habits into whole systems.',
    UNDERGRADUATE:
      'An introduction to zero-waste systems and the circular economy. The book covers organics and food waste, materials recovery and plastics, design for prevention, reuse and circular business models, and waste streams from industry, electronics and textiles. It closes with community programmes, policy instruments, safety, data and system-level strategies for moving beyond linear production.',
    GRADUATE:
      'This volume treats waste as a design and systems failure. It covers organics management, materials recovery and polymer streams, prevention through design, circular business models and reuse systems, and industrial, electronic and textile waste. Its final parts address extended producer responsibility and other policy tools, data and measurement, occupational safety, and systems thinking for circular transitions.',
    PHD:
      'An advanced examination of zero-waste and circular-economy research. It covers material flows, organics and polymer recovery, design for prevention and disassembly, circular business models, and industrial, electronic and textile waste streams. The closing parts take up open questions in policy instruments, measurement and data, rebound effects and the systemic conditions for circular transitions.',
  },
  'green-building': {
    ELEMENTARY:
      'Houses and schools can be built to help the planet! In this book you will find out how sunshine and fresh air can warm and cool a building, which materials are good for the Earth, and how buildings can save water and energy. You will also learn what makes a building a healthy, happy place to be.',
    MIDDLE_SCHOOL:
      'The buildings we live and learn in use a lot of energy. This book shows how they can use much less. You will learn how windows, walls and sunshine keep a building comfortable, which materials are better for the planet, how buildings save water and electricity, and why fresh air and daylight matter for our health.',
    HIGH_SCHOOL:
      'The buildings we live and work in shape our energy use, our health and the climate. This book starts with passive design that heats, cools and lights a building with the sun and air, then covers sustainable materials, efficient energy systems and net-zero buildings, water-wise landscaping and indoor health. It ends with certification, embodied carbon, and renovating the buildings we already have.',
    UNDERGRADUATE:
      'An introduction to sustainable building design and performance. The book covers passive design principles, material selection and embodied carbon, energy systems, efficiency and net-zero strategies, water and landscape design, and indoor environmental quality. Its final parts examine certification frameworks, life-cycle carbon, renovation, resilience and building operations.',
    GRADUATE:
      'This volume treats the building as a system across its whole life. It covers climate-responsive passive design, materials and embodied carbon, building energy systems and net-zero design, water and landscape integration, and indoor environmental quality. It closes with rating systems, whole-life carbon assessment, deep retrofit, resilience, preservation and performance in operation.',
    PHD:
      'An advanced survey of building science and sustainable design research. It examines passive and climate-responsive design, material life-cycle impacts, energy systems and net-zero performance, water and landscape systems, and indoor environmental quality. The closing parts address open questions in performance gaps, whole-life carbon methods, retrofit at scale, resilience and the evaluation of certification frameworks.',
  },
  'food-sovereignty': {
    ELEMENTARY:
      'Where does your food come from? In this book you will learn how people grow food in cities, save seeds to plant again, and share food at local markets. You will also hear how families and communities have grown and cooked food together for a very long time.',
    MIDDLE_SCHOOL:
      'Who decides what food grows near you and what ends up on your plate? This book explores how communities take charge of their own food: growing it in cities, saving seeds, running markets and co-ops, and preserving harvests. You will also learn about the food traditions of Indigenous peoples and the rules that shape what we eat.',
    HIGH_SCHOOL:
      'Food sovereignty is the right of communities to shape their own food systems. This book starts with its ideas about justice and equity, then covers urban agriculture, seed saving and agroecology, local markets and cooperatives, and preserving and processing food. It ends with Indigenous and cultural knowledge and the policies, education and plans that help a place feed itself.',
    UNDERGRADUATE:
      'An introduction to food sovereignty as a framework and a practice. The book covers its foundations in food justice and equity, urban agriculture, seed systems and agroecological production, local markets and cooperatives, and food preservation and processing. It closes with Indigenous and cultural food knowledge and the policy, education, climate and finance questions that shape local food systems.',
    GRADUATE:
      'This volume examines food sovereignty as a political, ecological and economic project. It covers its theoretical foundations and equity claims, urban and agroecological production, seed systems, cooperative and local market structures, and food preservation and processing. Its final parts address Indigenous food systems, policy and governance, education, and climate, biodiversity and finance in food system planning.',
    PHD:
      'An advanced treatment of food sovereignty scholarship and practice. It examines the concept\'s theoretical lineage and justice claims, agroecological and urban production, seed governance, cooperative economics and local markets, and food processing systems. The closing parts take up open questions in Indigenous food sovereignty, policy design, food system resilience and the financing of community-controlled food systems.',
  },
}
