const itineraries = [
  {
    slug: "chinungu-hill-trooper-estate-tour",
    title: "Chinungu Hill Hike & Trooper Estate Tour",
    durationDays: 1,
    category: "hiking",
    priceRange: "USD 45 - 85",
    highlights: [
      "Scenic hill views",
      "Trooper Estate tour",
      "Macadamia, nuts, and paprika farming",
    ],
    description:
      "A rewarding day trip that combines a guided climb up Chinungu Hill with a relaxed Trooper Estate tour. Enjoy scenic views, learn more about macadamia, nuts, and paprika farming, and spend the day in a beautiful outdoor setting.",
    itineraryDays: [
      {
        day: 1,
        title: "Hill Hike & Estate Visit",
        activities: [
          "Pickup and transfer to Chinung'u Hill",
          "Guided hike for scenic views and fresh air",
          "Trooper Estate tour and farm learning experience",
          "Return drive after the tour",
        ],
        meals: ["Lunch", "Snacks"],
        images: [
          "/images/gallery/itineraries/chinungu.jpg",
          "/images/gallery/itineraries/chinungu (2).jpg",
          "/images/gallery/itineraries/chinungu (3).jpg",
          "/images/gallery/itineraries/chinungu (4).jpg",
          "/images/gallery/itineraries/chinungu (5).jpg",
          "/images/gallery/itineraries/chinungu (6).jpg",
        ],
      },
    ],
    included: ["Transportation", "Meals and snacks", "Permit fees"],
    excluded: ["Personal equipment", "Alcoholic beverages", "Personal snacks"],
    mainImage: "/images/gallery/itineraries/chinungu.jpg",
  },
  {
    slug: "kanin-gina-kavuzi-falls-hike",
    title: "Kaning'ina Mountain & Kavuzi Falls Hike",
    durationDays: 1,
    category: "hiking",
    priceRange: "USD 50 - 95",
    highlights: [
      "Mountain climb",
      "Kavuzi Falls stopover",
      "Cold drink and braai break",
    ],
    description:
      "A full day hike that starts with a climb up Kaning'ina Mountain and ends with a relaxed drive to Kavuzi Falls. Unwind with a cold drink and a bite from the braai after the hike.",
    itineraryDays: [
      {
        day: 1,
        title: "Kanin'ina Hike & Kavuzi Falls",
        activities: [
          "Stopover to climb Kanin'ina Mountain",
          "Drive to Kavuzi Falls after the hike",
          "Relax at the falls with a cold drink",
          "Enjoy a bite from the braai",
        ],
        meals: ["Lunch", "Beverages"],
        images: [
          "/images/gallery/itineraries/kani.jpg",
          "/images/gallery/itineraries/kani (2).jpg",
          "/images/gallery/itineraries/kani (3).jpg",
          "/images/gallery/itineraries/kani (4).jpg",
          "/images/gallery/itineraries/kani (5).jpg",
          "/images/gallery/itineraries/kavuzifalls.jpg",
          "/images/gallery/itineraries/kavuzifalls (2).jpg",
          "/images/gallery/itineraries/kavuzifalls (3).jpg",
        ],
      },
    ],
    included: ["Transportation", "Meals and beverages", "Permit fees"],
    excluded: ["Personal equipment", "Alcoholic beverages", "Personal snacks"],
    mainImage: "/images/gallery/itineraries/kani.jpg",
  },
  {
    slug: "kamuzu-view-elephant-rock-hike",
    title: "Kamuzu View & Elephant Rock Hike",
    durationDays: 1,
    category: "hiking",
    priceRange: "USD 40 - 80",
    highlights: [
      "Scenic city view",
      "Chikangawa forest drive",
      "Mountain and forest landscapes",
    ],
    description:
      "A scenic drive-through hiking experience that passes through Chikangawa Forest and continues along the old M1 road to Kamuzu View Point. Enjoy wide views of the city, forest, and surrounding mountains, with a visit to Elephant Rock along the way.",
    itineraryDays: [
      {
        day: 1,
        title: "Drive, Viewpoint & Elephant Rock",
        activities: [
          "Drive through Chikangawa Forest",
          "Turn onto the old M1 road to Kamuzu View Point",
          "Enjoy scenic views of the city, forest, and mountains",
          "Continue to Elephant Rock for a nature stop",
        ],
        meals: ["Lunch", "Snacks"],
        images: [
          "/images/gallery/itineraries/kamuzuview.jpg",
          "/images/gallery/itineraries/kamuzuview (2).jpg",
          "/images/gallery/itineraries/kamuzuview (3).jpg",
          "/images/gallery/itineraries/kamuzuview (4).jpg",
          "/images/gallery/itineraries/kamuzuview (5).jpg",
        ],
      },
    ],
    included: ["Transportation", "Meals and snacks", "Permit fees"],
    excluded: ["Personal equipment", "Alcoholic beverages", "Personal snacks"],
    mainImage: "/images/gallery/itineraries/kamuzuview.jpg",
  },
  {
    slug: "mzuzu-city-tour",
    title: "Mzuzu City Tour",
    durationDays: 1,
    category: "city",
    priceRange: "USD 30 - 60",
    highlights: [
      "Market visit",
      "Street food tasting",
      "Best restaurants & coffee shops",
      "Banking & shopping",
      "Accommodation recommendations",
    ],
    description:
      "Discover the vibrant city of Mzuzu with a guided tour that includes a market visit, street food tasting, top restaurants, coffee shops, banking facilities, shopping malls, and accommodation recommendations. Perfect for travelers wanting to experience the local culture and amenities.",
    itineraryDays: [
      {
        day: 1,
        title: "Mzuzu City Exploration",
        activities: [
          "Market visit to experience local produce and crafts",
          "Street food tasting (samosas, roasted corn, etc.)",
          "Lunch at a recommended local restaurant",
          "Coffee break at Mzuzu Coffee (famous local coffee)",
          "Quick stops at banks and shopping malls",
          "Optional accommodation recommendations",
        ],
        meals: ["Lunch", "Coffee/Snacks"],
        images: [
          "/images/gallery/itineraries/mzuzu-city.jpg",
          "/images/gallery/itineraries/mzuzu-market.jpg",
          "/images/gallery/itineraries/mzuzu-street-food.jpg",
        ],
      },
    ],
    included: ["Transportation", "Guided tour", "Lunch", "Coffee/Snacks"],
    excluded: ["Personal shopping", "Alcoholic beverages", "Accommodation"],
    mainImage: "/images/gallery/itineraries/mzuzu-city.jpg",
  },
  // NEW: Traditional Beer Tour (Cultural)
  {
    slug: "traditional-beer-tour",
    title: "Traditional Beer Tour (Thobwa, Chibuku & Kachasu)",
    durationDays: 1,
    category: "cultural",
    priceRange: "USD 25 - 50",
    highlights: [
      "Visit local villages near Mzimba and Mzuzu",
      "Learn traditional brewing of Thobwa, Chibuku, and Kachasu",
      "Taste authentic traditional beverages",
      "Experience fermentation process with millet and maize",
    ],
    description:
      "Immerse yourself in the rich cultural heritage of traditional beer making. Visit local households in the Mzimba and Mzuzu areas to witness the fermentation process using millet and maize flour. Taste naturally produced beverages like Thobwa (sweet beer), Chibuku (sorghum beer), and Kachasu (distilled maize spirit). This tour offers a unique insight into local customs and community life.",
    itineraryDays: [
      {
        day: 1,
        title: "Traditional Brewing Experience",
        activities: [
          "Pickup from your accommodation in Mzuzu",
          "Drive to local village near Mzimba",
          "Introduction to traditional brewing methods",
          "Observe fermentation of Thobwa and Chibuku",
          "Learn about Kachasu distillation process",
          "Tasting session of traditional beverages",
          "Lunch with local family",
          "Return to Mzuzu",
        ],
        meals: ["Lunch", "Snacks", "Beverage samples"],
        images: [
          "/images/gallery/itineraries/thobwa.jpg",
          "/images/gallery/itineraries/chibuku.jpg",
          "/images/gallery/itineraries/kachasu.jpg",
          "/images/gallery/itineraries/village-brewing.jpg",
        ],
      },
    ],
    included: ["Transportation", "Local guide", "Lunch", "Tasting samples", "Permit fees"],
    excluded: ["Personal equipment", "Alcoholic beverages (outside tasting)", "Personal shopping"],
    mainImage: "/images/gallery/itineraries/thobwa.jpg",
  },
];

export default itineraries;