const sampleListings = [
  {
    "title": "Cozy Mountain Cabin",
    "description": "A warm wooden cabin surrounded by pine trees and fresh air.",
    "image": {
      "filename": "mountain_cabin.jpg",
      "url": "https://picsum.photos/seed/mountain1/400/300"
    },
    "price": 75,
    "location": "Aspen",
    "country": "USA",
    "category": "mountain",
    "geometry": {
      "type": "Point",
      "coordinates": [-106.8186, 39.1911]
    }
  },
  {
    "title": "Modern City Apartment",
    "description": "Stylish apartment with city skyline views.",
    "image": {
      "filename": "city_apartment.jpg",
      "url": "https://picsum.photos/seed/city1/400/300"
    },
    "price": 120,
    "location": "New York",
    "country": "USA",
    "category": "city",
    "geometry": {
      "type": "Point",
      "coordinates": [-74.006, 40.7128]
    }
  },
  {
    "title": "Beachfront Villa",
    "description": "Luxurious villa right on the sandy beach.",
    "image": {
      "filename": "beach_villa.jpg",
      "url": "https://picsum.photos/seed/beach1/400/300"
    },
    "price": 250,
    "location": "Goa",
    "country": "India",
    "category": "beach",
    "geometry": {
      "type": "Point",
      "coordinates": [73.985, 15.2993]
    }
  },
  {
    "title": "Rustic Farmhouse",
    "description": "Traditional farmhouse with peaceful countryside views.",
    "image": {
      "filename": "farmhouse.jpg",
      "url": "https://picsum.photos/seed/farm1/400/300"
    },
    "price": 60,
    "location": "Provence",
    "country": "France",
    "category": "countryside",
    "geometry": {
      "type": "Point",
      "coordinates": [5.3698, 43.2965]
    }
  },
  {
    "title": "Desert Tent Stay",
    "description": "Unique stay in a luxury desert tent under the stars.",
    "image": {
      "filename": "desert_tent.jpg",
      "url": "https://picsum.photos/seed/desert1/400/300"
    },
    "price": 95,
    "location": "Dubai",
    "country": "UAE",
    "category": "desert",
    "geometry": {
      "type": "Point",
      "coordinates": [55.2708, 25.2048]
    }
  },
  {
    "title": "Forest Treehouse",
    "description": "Live among the treetops in this beautiful treehouse.",
    "image": {
      "filename": "treehouse.jpg",
      "url": "https://picsum.photos/seed/tree1/400/300"
    },
    "price": 110,
    "location": "Vancouver",
    "country": "Canada",
    "category": "forest",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.1216, 49.2827]
    }
  },
  {
    "title": "Ski Lodge Retreat",
    "description": "A cozy lodge near top ski resorts with snowy views.",
    "image": {
      "filename": "ski_lodge.jpg",
      "url": "https://picsum.photos/seed/ski1/400/300"
    },
    "price": 180,
    "location": "Zermatt",
    "country": "Switzerland",
    "category": "ski",
    "geometry": {
      "type": "Point",
      "coordinates": [7.7491, 46.0207]
    }
  },
  {
    "title": "Tropical Bungalow",
    "description": "Relax in a hammock in this tropical beach bungalow.",
    "image": {
      "filename": "tropical_bungalow.jpg",
      "url": "https://picsum.photos/seed/tropical1/400/300"
    },
    "price": 140,
    "location": "Bali",
    "country": "Indonesia",
    "category": "island",
    "geometry": {
      "type": "Point",
      "coordinates": [115.1889, -8.4095]
    }
  },
  {
    "title": "Historic Castle Stay",
    "description": "Sleep in a medieval castle with modern comforts.",
    "image": {
      "filename": "castle.jpg",
      "url": "https://picsum.photos/seed/castle1/400/300"
    },
    "price": 300,
    "location": "Edinburgh",
    "country": "Scotland",
    "category": "historic",
    "geometry": {
      "type": "Point",
      "coordinates": [-3.1883, 55.9533]
    }
  },
  {
    "title": "Countryside Cottage",
    "description": "A small cottage with a garden and quiet surroundings.",
    "image": {
      "filename": "cottage.jpg",
      "url": "https://picsum.photos/seed/cottage1/400/300"
    },
    "price": 70,
    "location": "Cotswolds",
    "country": "England",
    "category": "countryside",
    "geometry": {
      "type": "Point",
      "coordinates": [-1.7201, 51.833]
    }
  },
  {
    "title": "Floating House",
    "description": "Unique stay in a floating house on the river.",
    "image": {
      "filename": "floating_house.jpg",
      "url": "https://picsum.photos/seed/float1/400/300"
    },
    "price": 130,
    "location": "Amsterdam",
    "country": "Netherlands",
    "category": "waterfront",
    "geometry": {
      "type": "Point",
      "coordinates": [4.9041, 52.3676]
    }
  },
  {
    "title": "Jungle Lodge",
    "description": "Immersive jungle experience in a private lodge.",
    "image": {
      "filename": "jungle_lodge.jpg",
      "url": "https://picsum.photos/seed/jungle1/400/300"
    },
    "price": 85,
    "location": "Amazon",
    "country": "Brazil",
    "category": "jungle",
    "geometry": {
      "type": "Point",
      "coordinates": [-60.025, -3.4653]
    }
  },
  {
    "title": "Igloo Experience",
    "description": "Stay in a glass igloo with northern lights view.",
    "image": {
      "filename": "igloo.jpg",
      "url": "https://picsum.photos/seed/igloo1/400/300"
    },
    "price": 200,
    "location": "Lapland",
    "country": "Finland",
    "category": "arctic",
    "geometry": {
      "type": "Point",
      "coordinates": [27.6835, 67.9222]
    }
  },
  {
    "title": "Luxury Penthouse",
    "description": "Top-floor penthouse with panoramic city views.",
    "image": {
      "filename": "penthouse.jpg",
      "url": "https://picsum.photos/seed/pent1/400/300"
    },
    "price": 400,
    "location": "Dubai",
    "country": "UAE",
    "category": "luxury",
    "geometry": {
      "type": "Point",
      "coordinates": [55.2708, 25.2048]
    }
  },
  {
    "title": "Cave House",
    "description": "Traditional cave house built into the mountainside.",
    "image": {
      "filename": "cave_house.jpg",
      "url": "https://picsum.photos/seed/cave1/400/300"
    },
    "price": 90,
    "location": "Cappadocia",
    "country": "Turkey",
    "category": "cave",
    "geometry": {
      "type": "Point",
      "coordinates": [34.8271, 38.6431]
    }
  },
  {
    "title": "Safari Tent",
    "description": "Luxury tent stay in a safari wildlife reserve.",
    "image": {
      "filename": "safari_tent.jpg",
      "url": "https://picsum.photos/seed/safari1/400/300"
    },
    "price": 150,
    "location": "Serengeti",
    "country": "Tanzania",
    "category": "safari",
    "geometry": {
      "type": "Point",
      "coordinates": [34.6857, -2.3333]
    }
  },
  {
    "title": "Riverfront Cabin",
    "description": "Wooden cabin located right on the riverbank.",
    "image": {
      "filename": "river_cabin.jpg",
      "url": "https://picsum.photos/seed/river1/400/300"
    },
    "price": 95,
    "location": "Colorado",
    "country": "USA",
    "category": "river",
    "geometry": {
      "type": "Point",
      "coordinates": [-105.7821, 39.5501]
    }
  },
  {
    "title": "Wine Country Villa",
    "description": "Stay in a vineyard villa with private wine tasting.",
    "image": {
      "filename": "wine_villa.jpg",
      "url": "https://picsum.photos/seed/wine1/400/300"
    },
    "price": 220,
    "location": "Tuscany",
    "country": "Italy",
    "category": "vineyard",
    "geometry": {
      "type": "Point",
      "coordinates": [11.2558, 43.7699]
    }
  },
  {
    "title": "Secluded Island Hut",
    "description": "Private hut on a small, secluded tropical island.",
    "image": {
      "filename": "island_hut.jpg",
      "url": "https://picsum.photos/seed/island1/400/300"
    },
    "price": 160,
    "location": "Maldives",
    "country": "Maldives",
    "category": "island",
    "geometry": {
      "type": "Point",
      "coordinates": [73.2207, 3.2028]
    }
  },
  {
    "title": "Zen Garden House",
    "description": "Traditional Japanese-style house with a zen garden.",
    "image": {
      "filename": "zen_house.jpg",
      "url": "https://picsum.photos/seed/zen1/400/300"
    },
    "price": 180,
    "location": "Kyoto",
    "country": "Japan",
    "category": "traditional",
    "geometry": {
      "type": "Point",
      "coordinates": [135.7681, 35.0116]
    }
  }
];

module.exports = { data: sampleListings };