export interface Tour {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  price?: string
  duration: string
  groupSize: string
  rating: number
  location: string
  tags?: string[]
  included?: string[]
  highlights?: Array<{
    title: string
    description: string
  }>
  itinerary?: Array<{
    title: string
    description: string
  }>
}

export const tours: Tour[] = [
  {
    id: "museum-of-the-future",
    title: "Museum of the Future",
    description: "Explore tomorrow's innovations today at Dubai's most iconic architectural marvel",
    longDescription: "Step into the future at Dubai's Museum of the Future, an architectural masterpiece that showcases cutting-edge innovations and technologies. This iconic torus-shaped building offers immersive experiences that explore how technology will shape our world in the coming decades.",
    image: "/images/tourfuture.jpg",
    price: "149",
    duration: "2-3 hours",
    groupSize: "1-25 people",
    rating: 4.6,
    location: "Financial District, Dubai",
    tags: ["Innovation", "Technology", "Architecture", "Future"],
    included: [
      "Entry ticket to Museum of the Future",
      "Access to all exhibition floors",
      "Interactive experiences and displays",
      "Augmented reality experiences",
      "Future technology demonstrations",
      "Gift shop access"
    ],
    highlights: [
      {
        title: "Architectural Marvel",
        description: "Admire the stunning torus-shaped building with Arabic calligraphy facade"
      },
      {
        title: "Future Technologies",
        description: "Experience cutting-edge innovations and emerging technologies"
      },
      {
        title: "Interactive Exhibits",
        description: "Engage with immersive displays and augmented reality experiences"
      }
    ]
  },
  {
    id: "dubai-desert-safari-quad-bike-camel-ride-al-khayma-camp",
    title: "Dubai Desert Safari, Quad Bike, Camel Ride & Al Khayma Camp",
    description: "Ultimate desert adventure with dune bashing, quad biking, camel rides, and traditional Bedouin camp experience",
    longDescription: "Experience the magic of the Arabian desert with this comprehensive safari package. Enjoy thrilling dune bashing, exciting quad bike rides, traditional camel experiences, and an authentic Bedouin camp with BBQ dinner and entertainment.",
    image: "/images/tourdesert.webp",
    price: "299",
    duration: "6 hours",
    groupSize: "2-30 people",
    rating: 4.7,
    location: "Dubai Desert Conservation Reserve",
    tags: ["Desert Safari", "Adventure", "Cultural Experience", "BBQ Dinner"],
    included: [
      "Hotel pickup and drop-off",
      "Dune bashing in 4x4 vehicle",
      "Quad bike riding (30 minutes)",
      "Camel riding experience",
      "Sandboarding",
      "Henna painting",
      "Traditional BBQ buffet dinner",
      "Live entertainment shows",
      "Unlimited soft drinks and water"
    ],
    itinerary: [
      {
        title: "3:00 PM - Hotel Pickup",
        description: "Pickup from your Dubai hotel in comfortable 4x4 vehicle"
      },
      {
        title: "4:00 PM - Dune Bashing",
        description: "Thrilling ride over the golden sand dunes"
      },
      {
        title: "5:00 PM - Quad Biking",
        description: "30-minute quad bike adventure in the desert"
      },
      {
        title: "6:00 PM - Camel Riding",
        description: "Traditional camel ride and photo opportunities"
      },
      {
        title: "7:00 PM - Al Khayma Camp",
        description: "Arrive at traditional Bedouin camp for dinner and shows"
      },
      {
        title: "9:30 PM - Return Journey",
        description: "Transfer back to your Dubai hotel"
      }
    ]
  },
  {
    id: "burj-khalifa-level-124-125-entry-ticket-daytime",
    title: "Burj Khalifa Level 124 & 125 Entry Ticket - Daytime",
    description: "Visit the world's tallest building and enjoy breathtaking panoramic views of Dubai",
    longDescription: "Ascend to the observation decks of the world's tallest building, the iconic Burj Khalifa. Experience breathtaking 360-degree views of Dubai's skyline, desert, and coastline from levels 124 and 125.",
    image: "/images/tourburj.jpg",
    price: "179",
    duration: "1-2 hours",
    groupSize: "1-30 people",
    rating: 4.8,
    location: "Downtown Dubai",
    tags: ["Iconic Landmark", "City Views", "Architecture", "Photography"],
    included: [
      "Fast-track entry to Burj Khalifa",
      "Access to Level 124 observation deck",
      "Access to Level 125 observation deck",
      "High-speed elevator ride",
      "Multimedia presentation",
      "Telescope access",
      "Gift shop access"
    ],
    highlights: [
      {
        title: "World's Tallest Building",
        description: "Visit the iconic 828-meter tall architectural masterpiece"
      },
      {
        title: "Panoramic Views",
        description: "360-degree views of Dubai's skyline, desert, and Arabian Gulf"
      },
      {
        title: "Fast-Track Access",
        description: "Skip the lines with priority access to observation decks"
      }
    ]
  },
  {
    id: "atlantis-aquaventure-waterpark-admission-ticket",
    title: "Atlantis Aquaventure Waterpark Admission Ticket",
    description: "World-class waterpark with thrilling slides, marine encounters, and private beach access",
    longDescription: "Experience the ultimate aquatic adventure at Atlantis Aquaventure Waterpark, one of the world's most exciting waterparks. Featuring record-breaking slides, marine animal encounters, and access to a pristine private beach.",
    image: "/images/touratlantis.jpg",
    price: "299",
    duration: "Full day",
    groupSize: "1-30 people",
    rating: 4.5,
    location: "Atlantis The Palm",
    tags: ["Waterpark", "Marine Life", "Adventure", "Family Fun"],
    included: [
      "Full-day access to Aquaventure Waterpark",
      "Access to all water slides and attractions",
      "Private beach access",
      "The Lost Chambers Aquarium access",
      "Changing rooms and lockers",
      "Life jackets and safety equipment"
    ],
    highlights: [
      {
        title: "Record-Breaking Slides",
        description: "Experience the world's largest waterslide and other thrilling attractions"
      },
      {
        title: "Marine Encounters",
        description: "Get up close with sharks, rays, and other marine life"
      },
      {
        title: "Private Beach",
        description: "Relax on the exclusive private beach with stunning views"
      }
    ]
  },
  {
    id: "dubai-luxury-yacht-tour-burj-al-arab-bbq-lunch",
    title: "Dubai Luxury Yacht Tour with Burj Al Arab & BBQ Lunch",
    description: "Luxury yacht experience with iconic Burj Al Arab views and gourmet BBQ lunch",
    longDescription: "Sail in style aboard a luxury yacht while enjoying breathtaking views of Dubai's iconic skyline, including the world-famous Burj Al Arab. This premium experience includes a gourmet BBQ lunch and professional crew service.",
    image: "/placeholder.svg?height=300&width=400&text=Luxury+Yacht",
    price: "599",
    duration: "4 hours",
    groupSize: "2-12 people",
    rating: 4.9,
    location: "Dubai Marina",
    tags: ["Luxury", "Yacht", "BBQ Lunch", "Burj Al Arab"],
    included: [
      "Luxury yacht charter",
      "Professional crew and captain",
      "Gourmet BBQ lunch",
      "Soft drinks and water",
      "Safety equipment",
      "Towels and amenities",
      "Photo opportunities"
    ],
    highlights: [
      {
        title: "Luxury Yacht Experience",
        description: "Sail aboard a premium yacht with top-class amenities"
      },
      {
        title: "Iconic Views",
        description: "Spectacular views of Burj Al Arab and Dubai coastline"
      },
      {
        title: "Gourmet BBQ",
        description: "Enjoy freshly prepared BBQ lunch onboard"
      }
    ]
  },
  {
    id: "dubai-red-dune-safari-quad-bike-camel-ride-bbq-dinner-tanura-show",
    title: "Dubai Red Dune Safari, Quad Bike, Camel Ride, BBQ Dinner & Tanura Show",
    description: "Complete desert experience with red dunes, quad biking, and cultural entertainment",
    longDescription: "Experience the ultimate desert adventure in Dubai's famous red dunes. This comprehensive package includes thrilling quad biking, traditional camel rides, authentic BBQ dinner, and mesmerizing Tanura dance performances in a traditional Bedouin camp setting.",
    image: "/images/tourdesert.webp",
    price: "329",
    duration: "6 hours",
    groupSize: "4-20 people",
    rating: 4.8,
    location: "Lahbab Red Dunes",
    tags: ["Red Dunes", "Quad Biking", "BBQ Dinner", "Tanura Show"],
    included: [
      "Hotel pickup and drop-off",
      "Dune bashing in red dunes",
      "Quad bike riding (45 minutes)",
      "Camel riding experience",
      "Sandboarding",
      "Henna painting",
      "Traditional BBQ buffet dinner",
      "Tanura dance show",
      "Belly dance performance",
      "Unlimited soft drinks and water"
    ],
    highlights: [
      {
        title: "Red Dunes Experience",
        description: "Explore the unique red sand dunes of Lahbab desert"
      },
      {
        title: "Cultural Entertainment",
        description: "Enjoy traditional Tanura dance and belly dance performances"
      },
      {
        title: "Adventure Activities",
        description: "Thrilling quad biking and camel riding experiences"
      }
    ]
  },
  {
    id: "dubai-marina-yacht-tour-with-gourmet-breakfast-or-bbq",
    title: "Dubai Marina Yacht Tour with Gourmet Breakfast or BBQ",
    description: "Luxury yacht cruise through Dubai Marina with gourmet dining options",
    longDescription: "Sail through the stunning Dubai Marina aboard a luxury yacht while enjoying either a gourmet breakfast or BBQ lunch. This premium experience offers spectacular views of Dubai's modern skyline and iconic landmarks from the water.",
    image: "/placeholder.svg?height=300&width=400&text=Marina+Yacht",
    price: "449",
    duration: "3 hours",
    groupSize: "2-15 people",
    rating: 4.7,
    location: "Dubai Marina",
    tags: ["Marina Cruise", "Gourmet Dining", "Luxury Yacht", "City Skyline"],
    included: [
      "Luxury yacht charter",
      "Professional crew and captain",
      "Choice of gourmet breakfast or BBQ",
      "Soft drinks and water",
      "Safety equipment",
      "Towels and amenities",
      "Photo opportunities",
      "Marina sightseeing"
    ],
    highlights: [
      {
        title: "Dubai Marina Views",
        description: "Spectacular views of the modern marina and skyscrapers"
      },
      {
        title: "Gourmet Dining",
        description: "Choice between gourmet breakfast or BBQ lunch onboard"
      },
      {
        title: "Luxury Experience",
        description: "Premium yacht with professional crew and top amenities"
      }
    ]
  },
  {
    id: "dubai-the-view-at-the-palm-observatory-entry-ticket",
    title: "Dubai The View At The Palm Observatory Entry Ticket",
    description: "Spectacular 360-degree views from the highest point on Palm Jumeirah",
    longDescription: "Experience breathtaking panoramic views of Dubai from The View at The Palm, the highest observation deck on Palm Jumeirah. This architectural marvel offers 360-degree views of the city, coastline, and iconic landmarks.",
    image: "/placeholder.svg?height=300&width=400&text=Palm+View",
    price: "105",
    duration: "1.5 hours",
    groupSize: "1-25 people",
    rating: 4.6,
    location: "Palm Jumeirah",
    tags: ["Observatory", "Palm Jumeirah", "City Views", "Photography"],
    included: [
      "Entry ticket to The View at The Palm",
      "Access to observation deck",
      "360-degree panoramic views",
      "Interactive displays",
      "Photo opportunities",
      "Gift shop access"
    ],
    highlights: [
      {
        title: "Highest Viewpoint",
        description: "The highest observation point on Palm Jumeirah island"
      },
      {
        title: "360-Degree Views",
        description: "Complete panoramic views of Dubai's skyline and coastline"
      },
      {
        title: "Iconic Location",
        description: "Located on the world-famous Palm Jumeirah artificial island"
      }
    ]
  },
  {
    id: "dubai-miracle-garden-entry-ticket",
    title: "Dubai Miracle Garden Entry Ticket",
    description: "World's largest natural flower garden with over 50 million flowers",
    longDescription: "Discover the wonder of Dubai Miracle Garden, the world's largest natural flower garden featuring over 50 million flowers and 250 million plants. This spectacular garden showcases incredible floral displays and artistic arrangements.",
    image: "/placeholder.svg?height=300&width=400&text=Miracle+Garden",
    price: "75",
    duration: "2-3 hours",
    groupSize: "1-50 people",
    rating: 4.3,
    location: "Dubailand",
    tags: ["Flower Garden", "Family Friendly", "Photography", "Seasonal"],
    included: [
      "Entry ticket to Dubai Miracle Garden",
      "Access to all themed areas",
      "Emirates A380 flower display",
      "Floral castle and heart tunnel",
      "Disney Avenue displays",
      "Aromatic and medicinal garden",
      "Gift shop access",
      "Free parking"
    ],
    highlights: [
      {
        title: "50 Million Flowers",
        description: "World's largest natural flower garden with stunning displays"
      },
      {
        title: "Emirates A380 Display",
        description: "Life-size replica of Emirates aircraft covered in flowers"
      },
      {
        title: "Themed Areas",
        description: "Multiple themed sections including Disney characters and castles"
      }
    ]
  },
  {
    id: "dubai-aquarium-underwater-zoo-entry-ticket",
    title: "Dubai Aquarium & Underwater Zoo Entry Ticket",
    description: "One of the world's largest suspended aquariums with over 33,000 marine animals",
    longDescription: "Dive into an underwater world at Dubai Aquarium & Underwater Zoo, located in The Dubai Mall. Home to over 33,000 aquatic animals representing 85 species, featuring one of the world's largest suspended aquariums.",
    image: "/placeholder.svg?height=300&width=400&text=Dubai+Aquarium",
    price: "149",
    duration: "2-3 hours",
    groupSize: "1-40 people",
    rating: 4.4,
    location: "The Dubai Mall",
    tags: ["Marine Life", "Underwater Tunnel", "Shark Encounters", "Family Friendly"],
    included: [
      "Entry to Dubai Aquarium & Underwater Zoo",
      "Access to 48-meter underwater tunnel",
      "Underwater Zoo with 3 ecological zones",
      "Shark and ray encounters",
      "King Croc encounter",
      "Interactive touch tanks",
      "Educational presentations",
      "Gift shop access"
    ],
    highlights: [
      {
        title: "Underwater Tunnel",
        description: "48-meter acrylic tunnel offering 270-degree views of marine life"
      },
      {
        title: "33,000 Marine Animals",
        description: "Incredible diversity of aquatic life from around the world"
      },
      {
        title: "King Croc",
        description: "Meet one of the largest crocodiles in captivity"
      }
    ]
  },
  {
    id: "dubai-global-village-entry-ticket",
    title: "Dubai Global Village Entry Ticket",
    description: "World's largest tourism, leisure, shopping and entertainment project",
    longDescription: "Experience the world in one destination at Dubai Global Village, featuring pavilions from over 90 countries. This multicultural festival park offers visitors a unique opportunity to explore different cultures, cuisines, and traditions.",
    image: "/placeholder.svg?height=300&width=400&text=Global+Village",
    price: "25",
    duration: "4-6 hours",
    groupSize: "1-50 people",
    rating: 4.3,
    location: "Dubailand",
    tags: ["Cultural Experience", "Shopping", "Entertainment", "International Cuisine"],
    included: [
      "Entry ticket to Dubai Global Village",
      "Access to all country pavilions",
      "Cultural shows and performances",
      "Carnival rides and attractions",
      "International food courts",
      "Shopping at global markets",
      "Live entertainment shows",
      "Free parking"
    ],
    highlights: [
      {
        title: "90+ Countries",
        description: "Explore pavilions from over 90 countries showcasing authentic products"
      },
      {
        title: "Cultural Shows",
        description: "Traditional performances, music, and dance from around the world"
      },
      {
        title: "International Cuisine",
        description: "Taste authentic dishes from different countries"
      }
    ]
  },
  {
    id: "dubai-img-worlds-of-adventure-entry-ticket",
    title: "Dubai IMG Worlds of Adventure Entry Ticket",
    description: "World's largest indoor theme park with Marvel and Cartoon Network zones",
    longDescription: "Step into the world's largest indoor theme park at IMG Worlds of Adventure, featuring four epic themed zones with Marvel superheroes, Cartoon Network characters, and thrilling rides in a climate-controlled environment.",
    image: "/placeholder.svg?height=300&width=400&text=IMG+Worlds",
    price: "299",
    duration: "Full day",
    groupSize: "1-40 people",
    rating: 4.4,
    location: "City of Arabia, Dubailand",
    tags: ["Marvel Zone", "Cartoon Network", "Thrill Rides", "Indoor Theme Park"],
    included: [
      "Full-day access to IMG Worlds of Adventure",
      "Access to all four themed zones",
      "Unlimited rides and attractions",
      "Marvel and Cartoon Network experiences",
      "Live shows and entertainment",
      "Character meet and greets",
      "Shopping and dining areas",
      "Free parking"
    ],
    highlights: [
      {
        title: "Marvel Zone",
        description: "Join your favorite superheroes in action-packed rides"
      },
      {
        title: "Cartoon Network Zone",
        description: "Experience adventures with beloved cartoon characters"
      },
      {
        title: "World's Largest Indoor Theme Park",
        description: "1.5 million square feet of climate-controlled entertainment"
      }
    ]
  },
  {
    id: "dubai-mall-of-emirates-ski-dubai-snow-classic-pass",
    title: "Dubai Mall of Emirates: Ski Dubai Snow Classic Pass",
    description: "Experience real snow and winter activities in the heart of the desert",
    longDescription: "Experience the magic of winter in the desert at Ski Dubai, the Middle East's first indoor ski resort. This snow-covered wonderland offers real snow experiences, winter activities, and penguin encounters.",
    image: "/placeholder.svg?height=300&width=400&text=Ski+Dubai",
    price: "199",
    duration: "2 hours",
    groupSize: "1-20 people",
    rating: 4.5,
    location: "Mall of the Emirates",
    tags: ["Indoor Skiing", "Snow Activities", "Penguin Encounters", "Winter Experience"],
    included: [
      "2-hour access to Snow Classic experience",
      "Winter clothing (jacket, trousers, boots, gloves)",
      "Access to Snow Park activities",
      "Toboggan and sledding",
      "Snow cavern exploration",
      "Penguin encounter experience",
      "Chairlift rides",
      "Hot beverages at Alpine Café"
    ],
    highlights: [
      {
        title: "Real Snow Experience",
        description: "Play in real snow maintained at sub-zero temperatures"
      },
      {
        title: "Penguin Encounters",
        description: "Meet and interact with Gentoo and King penguins"
      },
      {
        title: "Winter Activities",
        description: "Tobogganing, sledding, and snowball fights"
      }
    ]
  },
  {
    id: "from-dubai-abu-dhabi-premium-full-day-sightseeing-tour",
    title: "From Dubai Abu Dhabi Premium Full-Day Sightseeing Tour",
    description: "Comprehensive day trip to Abu Dhabi featuring Sheikh Zayed Mosque and Emirates Palace",
    longDescription: "Discover the capital of the UAE with this comprehensive full-day tour from Dubai to Abu Dhabi. Visit iconic landmarks including the magnificent Sheikh Zayed Grand Mosque and the luxurious Emirates Palace.",
    image: "/placeholder.svg?height=300&width=400&text=Abu+Dhabi+Tour",
    price: "349",
    duration: "10 hours",
    groupSize: "4-45 people",
    rating: 4.6,
    location: "Abu Dhabi, UAE",
    tags: ["Sheikh Zayed Mosque", "Emirates Palace", "Abu Dhabi Corniche", "Full-day Experience"],
    included: [
      "Hotel pickup and drop-off in Dubai",
      "Luxury air-conditioned transportation",
      "Professional English-speaking guide",
      "Entry to Sheikh Zayed Grand Mosque",
      "Emirates Palace visit and photo stop",
      "Abu Dhabi Corniche drive",
      "Heritage Village visit",
      "Lunch at local restaurant (optional)"
    ],
    itinerary: [
      {
        title: "7:00 AM - Dubai Pickup",
        description: "Pickup from your Dubai hotel in luxury vehicle"
      },
      {
        title: "9:00 AM - Sheikh Zayed Grand Mosque",
        description: "Visit the magnificent mosque, one of the world's largest"
      },
      {
        title: "11:00 AM - Emirates Palace",
        description: "Photo stop at the luxurious Emirates Palace hotel"
      },
      {
        title: "12:30 PM - Lunch Break",
        description: "Enjoy lunch at a local restaurant (optional)"
      },
      {
        title: "2:00 PM - Abu Dhabi Corniche",
        description: "Drive along the beautiful waterfront corniche"
      },
      {
        title: "6:00 PM - Dubai Drop-off",
        description: "Return to your Dubai hotel"
      }
    ]
  },
  {
    id: "the-green-planet-dubais-tropical-bio-rainforest",
    title: "The Green Planet - Dubai's Tropical Bio-Rainforest",
    description: "Immersive indoor rainforest experience with exotic wildlife and tropical plants",
    longDescription: "Step into Dubai's very own tropical rainforest at The Green Planet, a unique bio-dome that recreates a lush rainforest ecosystem. Home to over 3,000 plants and animals across four distinct levels.",
    image: "/placeholder.svg?height=300&width=400&text=Green+Planet",
    price: "99",
    duration: "2 hours",
    groupSize: "1-25 people",
    rating: 4.4,
    location: "City Walk, Dubai",
    tags: ["Indoor Rainforest", "Exotic Wildlife", "Tropical Plants", "Educational Experience"],
    included: [
      "Entry ticket to The Green Planet",
      "Access to all four rainforest levels",
      "Interactive animal encounters",
      "Educational presentations",
      "Guided tour (optional)",
      "Access to the canopy walkway",
      "Gift shop access",
      "Climate-controlled environment"
    ],
    highlights: [
      {
        title: "Four Rainforest Levels",
        description: "Explore forest floor, understory, canopy, and emergent layers"
      },
      {
        title: "3,000+ Species",
        description: "Incredible diversity of plants and animals from tropical regions"
      },
      {
        title: "Interactive Experience",
        description: "Get up close with exotic wildlife in their natural habitat"
      }
    ]
  },
  {
    id: "dubai-luxury-yacht-tour-with-burj-al-arab-bbq-lunch",
    title: "Dubai Luxury Yacht Tour with Burj Al Arab & BBQ Lunch",
    description: "Luxury yacht experience with iconic Burj Al Arab views and gourmet BBQ lunch",
    longDescription: "Sail in style aboard a luxury yacht while enjoying breathtaking views of Dubai's iconic skyline, including the world-famous Burj Al Arab. This premium experience includes a gourmet BBQ lunch and professional crew service.",
    image: "/placeholder.svg?height=300&width=400&text=Luxury+Yacht",
    price: "599",
    duration: "4 hours",
    groupSize: "2-12 people",
    rating: 4.9,
    location: "Dubai Marina",
    tags: ["Luxury", "Yacht", "BBQ Lunch", "Burj Al Arab"],
    included: [
      "Luxury yacht charter",
      "Professional crew and captain",
      "Gourmet BBQ lunch",
      "Soft drinks and water",
      "Safety equipment",
      "Towels and amenities",
      "Photo opportunities"
    ],
    highlights: [
      {
        title: "Luxury Yacht Experience",
        description: "Sail aboard a premium yacht with top-class amenities"
      },
      {
        title: "Iconic Views",
        description: "Spectacular views of Burj Al Arab and Dubai coastline"
      },
      {
        title: "Gourmet BBQ",
        description: "Enjoy freshly prepared BBQ lunch onboard"
      }
    ]
  },
  {
    id: "aquaventure-red-sharks-levels-2x-1x1-combo-ticket",
    title: "Aquaventure & Red Sharks Levels 2x 1x1 Combo Ticket",
    description: "Ultimate aquatic adventure combining Aquaventure waterpark with shark encounters",
    longDescription: "Experience the ultimate aquatic adventure with this exclusive combo ticket that combines the thrills of Aquaventure Waterpark with the excitement of Red Sharks encounters at Atlantis The Palm.",
    image: "/images/touratlantis.jpg",
    price: "399",
    duration: "Full day",
    groupSize: "1-30 people",
    rating: 4.8,
    location: "Atlantis The Palm",
    tags: ["Aquaventure Access", "Shark Encounters", "Water Adventures", "Marine Life"],
    included: [
      "Full-day access to Aquaventure Waterpark",
      "Red Sharks Level 2 experience",
      "Access to all water slides and attractions",
      "Shark encounter experience",
      "Private beach access",
      "The Lost Chambers Aquarium access",
      "Safety equipment and life jackets",
      "Changing rooms and lockers"
    ],
    highlights: [
      {
        title: "Aquaventure Waterpark",
        description: "Access to all thrilling water slides including The Leap of Faith"
      },
      {
        title: "Red Sharks Experience",
        description: "Get up close with sharks in a safe and controlled environment"
      },
      {
        title: "Marine Life Encounters",
        description: "Explore The Lost Chambers Aquarium with over 65,000 marine animals"
      }
    ]
  },
  {
    id: "entry-ticket-to-the-dubai-frame-with-hotel-access",
    title: "Entry Ticket to the Dubai Frame with Hotel Access",
    description: "Visit Dubai's iconic golden frame with convenient hotel transfer included",
    longDescription: "Experience Dubai's iconic golden frame with this convenient package that includes entry tickets and hotel transfers. The Dubai Frame offers spectacular panoramic views of both old and new Dubai.",
    image: "/placeholder.svg?height=300&width=400&text=Dubai+Frame",
    price: "89",
    duration: "2 hours",
    groupSize: "1-25 people",
    rating: 4.5,
    location: "Zabeel Park, Dubai",
    tags: ["Dubai Frame", "Hotel Transfers", "Panoramic Views", "Museum Experience"],
    included: [
      "Entry ticket to Dubai Frame",
      "Hotel pickup and drop-off",
      "Access to ground floor museum",
      "Sky bridge experience",
      "Panoramic views of Dubai",
      "Interactive displays",
      "Professional guide (optional)",
      "Gift shop access"
    ],
    highlights: [
      {
        title: "Golden Frame Architecture",
        description: "Admire the stunning 150-meter tall golden frame structure"
      },
      {
        title: "Old vs New Dubai",
        description: "See the contrast between historic and modern Dubai"
      },
      {
        title: "Sky Bridge",
        description: "Walk across the transparent glass bridge for stunning views"
      }
    ]
  },
  {
    id: "dubai-ice-park-by-dragone-arena-ticket",
    title: "Dubai: Ice Park by Dragone Arena Ticket",
    description: "Spectacular ice show featuring world-class performances in a unique arena setting",
    longDescription: "Experience the magic of ice and artistry at Dubai's Ice Park by Dragone Arena. This spectacular show combines world-class ice skating performances with cutting-edge technology and storytelling.",
    image: "/placeholder.svg?height=300&width=400&text=Ice+Park+Dragone",
    price: "199",
    duration: "2 hours",
    groupSize: "1-50 people",
    rating: 4.7,
    location: "Dubai",
    tags: ["Ice Performances", "Dragone Arena", "World-class Shows", "Unique Experience"],
    included: [
      "Entry ticket to Ice Park by Dragone Arena",
      "Access to the ice show performance",
      "Premium seating arrangement",
      "World-class ice skating performances",
      "State-of-the-art sound and lighting",
      "Interactive elements and storytelling",
      "Climate-controlled venue",
      "Refreshments available (additional cost)"
    ],
    highlights: [
      {
        title: "Dragone Entertainment",
        description: "Created by the world-renowned Dragone company"
      },
      {
        title: "Ice Skating Artistry",
        description: "Professional ice skaters perform breathtaking routines"
      },
      {
        title: "Immersive Technology",
        description: "Cutting-edge lighting, sound, and visual effects"
      }
    ]
  },
  {
    id: "dubai-butterfly-garden-entry-ticket",
    title: "Dubai Butterfly Garden Entry Ticket",
    description: "World's largest covered butterfly garden with over 15,000 butterflies",
    longDescription: "Discover the enchanting world of butterflies at Dubai Butterfly Garden, the world's largest covered butterfly garden. Home to over 15,000 butterflies from 26 different species in climate-controlled domes.",
    image: "/placeholder.svg?height=300&width=400&text=Butterfly+Garden",
    price: "65",
    duration: "1-2 hours",
    groupSize: "1-30 people",
    rating: 4.2,
    location: "Dubailand, Dubai",
    tags: ["Butterfly Garden", "Family Friendly", "Educational", "Climate Controlled"],
    included: [
      "Entry ticket to Dubai Butterfly Garden",
      "Access to all 9 custom-built domes",
      "Butterfly Museum visit",
      "Educational displays and information",
      "Interactive butterfly experiences",
      "Photography opportunities",
      "Gift shop access",
      "Free parking"
    ],
    highlights: [
      {
        title: "15,000 Butterflies",
        description: "Over 15,000 butterflies from 26 different species"
      },
      {
        title: "9 Custom Domes",
        description: "Each dome recreates different natural habitats"
      },
      {
        title: "Educational Experience",
        description: "Learn about butterfly life cycles and conservation"
      }
    ]
  },
  {
    id: "dubai-motiongate-theme-park-entry-ticket",
    title: "Dubai MotionGate Theme Park Entry Ticket",
    description: "Hollywood-inspired theme park with DreamWorks, Columbia Pictures, and Lionsgate attractions",
    longDescription: "Experience the magic of Hollywood at MotionGate Dubai, the region's largest Hollywood-inspired theme park featuring attractions based on blockbuster movies from major studios.",
    image: "/placeholder.svg?height=300&width=400&text=MotionGate",
    price: "299",
    duration: "Full day",
    groupSize: "1-50 people",
    rating: 4.3,
    location: "Dubai Parks and Resorts",
    tags: ["Hollywood Movies", "DreamWorks", "Thrill Rides", "Live Shows"],
    included: [
      "Full-day access to MotionGate Dubai",
      "Access to all themed zones",
      "Unlimited rides and attractions",
      "DreamWorks character experiences",
      "Live entertainment shows",
      "Character meet and greets",
      "Dining and shopping areas",
      "Free parking"
    ],
    highlights: [
      {
        title: "DreamWorks Zone",
        description: "Meet Shrek, Madagascar characters, and How to Train Your Dragon"
      },
      {
        title: "Columbia Pictures Zone",
        description: "Experience Ghostbusters and Cloudy with a Chance of Meatballs"
      },
      {
        title: "Hollywood Magic",
        description: "Behind-the-scenes movie magic and special effects"
      }
    ]
  }
]
