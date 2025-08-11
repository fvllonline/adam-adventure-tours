import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Star, Clock, Users, Phone, MessageCircle } from "lucide-react"
import { FaTiktok, FaInstagram, FaFacebookF } from 'react-icons/fa'
import { tours } from '@/data/tours'

// Legacy tours data for backward compatibility
const toursData = {
  1: {
    title: "Dubai City Tour",
    description:
      "Explore Dubai's iconic landmarks including Burj Khalifa, Dubai Mall, and Palm Jumeirah.",
    image: "/placeholder.svg?height=500&width=800&text=Dubai+City+Tour",
    duration: "8 hours",
    groupSize: "2-15 people",
    rating: 4.9,
    highlights: ["Burj Khalifa", "Dubai Mall", "Palm Jumeirah", "Dubai Marina"],
    fullDescription: `Experience the best of Dubai in this comprehensive full-day tour that combines modern attractions with iconic landmarks. Start your journey at the world-famous Burj Khalifa, the tallest building in the world, where you'll enjoy breathtaking views from the observation deck.

    Continue to the Dubai Mall, one of the world's largest shopping destinations, where you can witness the spectacular Dubai Fountain show. Explore the man-made wonder of Palm Jumeirah, an artificial archipelago that's home to luxury resorts and stunning beaches.

    Visit Dubai Marina, a stunning waterfront development with impressive skyscrapers and yacht-filled waters. Take photos at the iconic Atlantis The Palm and enjoy the beautiful coastline views.

    The tour includes comfortable air-conditioned transportation, professional English-speaking guide, and entrance fees to major attractions. Lunch at a premium restaurant is included, offering you a taste of international cuisine with Dubai flair.`,
    itinerary: [
      "9:00 AM - Hotel pickup and departure",
      "9:30 AM - Burj Khalifa visit and observation deck",
      "11:00 AM - Dubai Mall and Dubai Fountain show",
      "12:30 PM - Lunch at premium restaurant",
      "2:00 PM - Palm Jumeirah monorail and Atlantis photo stop",
      "3:30 PM - Dubai Marina walk and yacht viewing",
      "4:30 PM - JBR Beach and The Walk",
      "5:30 PM - Return to hotel",
    ],
    included: [
      "Professional English-speaking guide",
      "Comfortable air-conditioned transportation",
      "Burj Khalifa At The Top tickets",
      "Premium lunch at Dubai Mall",
      "Palm Jumeirah monorail tickets",
      "Dubai Marina guided walk",
      "Hotel pickup and drop-off",
      "Bottled water throughout the tour",
    ],
  },
  2: {
    title: "Desert Safari with BBQ Dinner",
    description:
      "Thrilling dune bashing, camel riding, and traditional BBQ dinner under the stars.",
    image: "/images/tourdesert.webp",
    duration: "6 hours",
    groupSize: "4-20 people",
    rating: 4.8,
    highlights: ["Dune Bashing", "Camel Riding", "BBQ Dinner", "Cultural Show"],
    fullDescription: `Embark on an unforgettable desert adventure that combines thrilling activities with authentic cultural experiences. Your journey begins with an exciting dune bashing session in a 4WD vehicle, navigating the golden sand dunes of the Arabian desert with experienced drivers.

    Experience the traditional mode of desert transportation with a camel ride, offering you a unique perspective of the vast desert landscape. Try sandboarding down the dunes for an adrenaline rush, or simply relax and enjoy the serene beauty of the desert sunset.

    As the sun sets, arrive at a traditional Bedouin-style camp where you'll be welcomed with Arabic coffee, dates, and traditional hospitality. Enjoy henna painting, try on traditional Arabic costumes for memorable photos, and watch mesmerizing belly dance and Tanoura shows under the starlit sky.

    The evening culminates with a delicious BBQ dinner featuring grilled meats, fresh salads, and traditional Arabic dishes. Vegetarian and special dietary options are available upon request. Enjoy unlimited soft drinks, water, Arabic tea, and coffee throughout the evening.

    All safety equipment and experienced drivers ensure your dune bashing experience is both thrilling and safe. The camp provides comfortable seating areas with cushions and low tables in traditional Arabic majlis style.`,
    itinerary: [
      "3:00 PM - Hotel pickup in 4WD vehicle",
      "4:00 PM - Arrive at desert and safety briefing",
      "4:15 PM - Dune bashing adventure session",
      "5:15 PM - Camel riding and sandboarding",
      "6:00 PM - Sunset photography and relaxation",
      "6:30 PM - Arrive at traditional Bedouin camp",
      "7:00 PM - Welcome drinks, henna painting, costume photos",
      "8:00 PM - Cultural shows (belly dance, Tanoura, fire show)",
      "8:30 PM - Traditional BBQ dinner under the stars",
      "9:30 PM - Return journey to hotel",
    ],
    included: [
      "4WD vehicle transportation with experienced driver",
      "Thrilling dune bashing adventure session",
      "Camel riding experience (15 minutes)",
      "Sandboarding equipment and instruction",
      "Welcome refreshments at desert camp",
      "Henna painting and Arabic costume photos",
      "Cultural entertainment shows",
      "Traditional BBQ dinner with unlimited beverages",
      "Hotel pickup and drop-off in Dubai",
    ],
  },
  3: {
    title: "Dhow Cruise Marina",
    description:
      "Romantic dinner cruise along Dubai Marina with stunning city skyline views.",
    image: "/placeholder.svg?height=500&width=800&text=Dhow+Cruise",
    duration: "3 hours",
    groupSize: "2-50 people",
    rating: 4.7,
    highlights: ["Marina Views", "Buffet Dinner", "Live Entertainment", "City Skyline"],
    fullDescription: `Experience the magic of Dubai Marina aboard a traditional wooden dhow while enjoying a delicious buffet dinner and stunning city views. This romantic cruise offers the perfect blend of traditional Arabian hospitality and modern luxury.

    Sail through the heart of Dubai Marina, one of the world's most impressive waterfront developments, surrounded by towering skyscrapers and luxury yachts. The traditional dhow has been beautifully restored with modern amenities while maintaining its authentic Arabian charm.

    Enjoy a sumptuous international buffet dinner featuring Arabic, Continental, and Asian cuisines, along with fresh salads, desserts, and beverages. The cruise includes live entertainment with traditional music and dance performances.

    The open-air upper deck provides perfect photo opportunities of the illuminated Dubai skyline, while the air-conditioned lower deck offers comfortable seating for dinner. This cruise is perfect for couples, families, and groups looking for a memorable evening experience.`,
    itinerary: [
      "7:00 PM - Arrival at Dubai Marina boarding point",
      "7:30 PM - Welcome aboard and safety briefing",
      "8:00 PM - Dhow cruise departure from marina",
      "8:15 PM - Welcome drinks and appetizers served",
      "8:30 PM - International buffet dinner service begins",
      "9:00 PM - Live entertainment and traditional shows",
      "9:30 PM - Open deck time for photography and views",
      "10:00 PM - Return to marina and disembarkation",
    ],
    included: [
      "Traditional dhow cruise experience",
      "International buffet dinner",
      "Welcome drinks and refreshments",
      "Live entertainment and cultural shows",
      "Air-conditioned lower deck seating",
      "Open upper deck for photography",
      "Professional crew and service",
      "Marina pickup point transfers available",
    ],
  },
  4: {
    title: "Burj Khalifa At The Top",
    description:
      "Visit the world's tallest building and enjoy breathtaking views from the observation deck.",
    image: "/placeholder.svg?height=500&width=800&text=Burj+Khalifa",
    duration: "2 hours",
    groupSize: "1-20 people",
    rating: 4.9,
    highlights: ["World's Tallest Building", "Observation Deck", "City Views", "Photo Opportunities"],
    fullDescription: `Experience the pinnacle of human achievement at Burj Khalifa, the world's tallest building standing at 828 meters. This iconic skyscraper offers unparalleled views of Dubai from its observation decks on levels 124, 125, and 148.

    Your journey begins with a high-speed elevator ride that takes you to the observation deck in just 60 seconds. From this vantage point, you'll enjoy 360-degree panoramic views of Dubai's stunning skyline, coastline, and desert landscape.

    The experience includes access to outdoor terraces where you can feel the height and take incredible photos. Interactive displays and telescopes help you identify landmarks and learn about Dubai's remarkable transformation from a small fishing village to a global metropolis.

    Visit during sunset for the most spectacular views as the city lights begin to twinkle below. The experience includes access to the Dubai Mall and Dubai Fountain area, making it perfect for a complete Dubai experience.`,
    itinerary: [
      "Flexible timing - Choose your preferred slot",
      "Arrival at Burj Khalifa entrance in Dubai Mall",
      "Security check and ticket validation",
      "High-speed elevator ride to observation deck",
      "Level 124 & 125 outdoor terrace experience",
      "360-degree panoramic city views",
      "Photo opportunities and interactive displays",
      "Optional visit to Dubai Mall and Fountain",
    ],
    included: [
      "Burj Khalifa At The Top tickets (Level 124 & 125)",
      "High-speed elevator access",
      "Outdoor terrace experience",
      "Interactive displays and telescopes",
      "Professional photography opportunities",
      "Access to Dubai Mall",
      "Complimentary WiFi",
      "Souvenir photo options available",
    ],
  },
  5: {
    title: "Dubai Aquarium & Underwater Zoo",
    description:
      "Walk through the underwater tunnel and discover marine life at Dubai Mall.",
    image: "/placeholder.svg?height=500&width=800&text=Dubai+Aquarium",
    duration: "2 hours",
    groupSize: "1-30 people",
    rating: 4.6,
    highlights: ["Underwater Tunnel", "Marine Life", "Shark Encounters", "Interactive Exhibits"],
    fullDescription: `Dive into an underwater world at Dubai Aquarium & Underwater Zoo, one of the largest suspended aquariums in the world. Home to over 140 species of marine life, including 400 sharks and rays, this attraction offers an immersive aquatic experience.

    Walk through the spectacular 48-meter underwater tunnel surrounded by millions of liters of water and thousands of aquatic animals. Get up close with sand tiger sharks, giant groupers, and graceful stingrays as they glide overhead and around you.

    The Underwater Zoo on Level 2 features three ecological zones: Rainforest, Rocky Shore, and Living Ocean. Discover fascinating creatures like crocodiles, otters, penguins, and piranhas in carefully recreated natural habitats.

    Interactive experiences include glass-bottom boat rides, shark diving for certified divers, and behind-the-scenes tours. Educational presentations and feeding shows provide insights into marine conservation and the fascinating world of aquatic life.`,
    itinerary: [
      "Flexible timing - Open daily 10:00 AM to 12:00 AM",
      "Entry through Dubai Mall, Ground Level",
      "Main aquarium viewing from outside (free)",
      "Tunnel experience with 270-degree views",
      "Underwater Zoo exploration on Level 2",
      "Interactive exhibits and touch tanks",
      "Educational presentations and feeding shows",
      "Optional glass-bottom boat ride",
    ],
    included: [
      "Dubai Aquarium tunnel experience",
      "Underwater Zoo access",
      "Interactive exhibits and displays",
      "Educational presentations",
      "Touch tank experiences",
      "Access to all three ecological zones",
      "Professional staff guidance",
      "Photography opportunities",
    ],
  },
  6: {
    title: "IMG Worlds of Adventure",
    description:
      "World's largest indoor theme park with thrilling rides and attractions.",
    image: "/placeholder.svg?height=500&width=800&text=IMG+Worlds",
    duration: "Full day",
    groupSize: "1-50 people",
    rating: 4.8,
    highlights: ["Indoor Theme Park", "Thrilling Rides", "Marvel Zone", "Cartoon Network Zone"],
    fullDescription: `Enter the world's largest indoor theme park spanning 1.5 million square feet of immersive entertainment. IMG Worlds of Adventure features four epic zones: Marvel, Cartoon Network, Lost Valley - Dinosaur Adventure, and IMG Boulevard.

    Experience heart-pounding rides and attractions featuring your favorite superheroes and cartoon characters. Meet Spider-Man, The Hulk, and other Marvel heroes, or join the Powerpuff Girls and Ben 10 in the Cartoon Network zone.

    The Lost Valley takes you back to prehistoric times with life-like animatronic dinosaurs and thrilling rides. IMG Boulevard offers shopping, dining, and entertainment in a vibrant atmosphere inspired by classic Hollywood.

    With over 20 rides and attractions, including roller coasters, 4D experiences, and interactive shows, there's something for every age and thrill level. The climate-controlled environment ensures year-round comfort regardless of Dubai's weather.`,
    itinerary: [
      "Flexible timing - Park open 12:00 PM to 10:00 PM",
      "Entry through main entrance and security check",
      "Marvel Zone - Superhero rides and meet & greets",
      "Cartoon Network Zone - Family-friendly attractions",
      "Lost Valley - Dinosaur adventures and rides",
      "IMG Boulevard - Shopping and dining",
      "4D cinema experiences and interactive shows",
      "Full day of unlimited rides and attractions",
    ],
    included: [
      "Full day admission to IMG Worlds",
      "Access to all four themed zones",
      "Unlimited rides and attractions",
      "4D cinema experiences",
      "Character meet and greet opportunities",
      "Interactive shows and entertainment",
      "Climate-controlled indoor environment",
      "Free WiFi throughout the park",
    ],
  },
  7: {
    title: "Dubai Frame",
    description:
      "Iconic golden frame offering panoramic views of old and new Dubai.",
    image: "/placeholder.svg?height=500&width=800&text=Dubai+Frame",
    duration: "1.5 hours",
    groupSize: "1-25 people",
    rating: 4.5,
    highlights: ["Panoramic Views", "Old vs New Dubai", "Sky Bridge", "Museum"],
    fullDescription: `Experience Dubai's past, present, and future at the iconic Dubai Frame, a magnificent 150-meter high architectural landmark that perfectly frames the city's contrasting landscapes. This golden rectangular structure offers unique perspectives of both historic and modern Dubai.

    Begin your journey at the ground floor museum, which showcases Dubai's transformation from a small fishing village to a global metropolis through interactive exhibits, virtual reality experiences, and historical artifacts.

    Take the high-speed elevator to the Sky Bridge on the 48th floor, featuring a thrilling glass floor walkway that offers breathtaking 360-degree views. On one side, see Old Dubai with its traditional souks and heritage sites, while the other side reveals the futuristic skyline of New Dubai.

    The experience concludes with a visit to the Future Dubai gallery, where you can explore the city's ambitious plans and upcoming projects through immersive displays and interactive presentations.`,
    itinerary: [
      "Flexible timing - Open 9:00 AM to 9:00 PM",
      "Entry and security check at ground level",
      "Ground floor museum and historical exhibits",
      "Virtual reality experience of old Dubai",
      "High-speed elevator to Sky Bridge",
      "Glass floor walkway and panoramic views",
      "Photography session with city views",
      "Future Dubai gallery exploration",
    ],
    included: [
      "Dubai Frame admission ticket",
      "Ground floor museum access",
      "Sky Bridge experience with glass floor",
      "Virtual reality historical journey",
      "Future Dubai gallery visit",
      "Professional photography opportunities",
      "Interactive exhibits and displays",
      "Multilingual audio guide available",
    ],
  },
  8: {
    title: "Global Village",
    description:
      "Cultural and entertainment destination featuring pavilions from around the world.",
    image: "/images/tourgv.webp",
    duration: "4 hours",
    groupSize: "1-100 people",
    rating: 4.4,
    highlights: ["Cultural Pavilions", "International Cuisine", "Shopping", "Entertainment Shows"],
    fullDescription: `Embark on a journey around the world in one evening at Global Village, Dubai's premier cultural and entertainment destination. This seasonal attraction features pavilions representing over 75 countries, offering authentic cultural experiences, shopping, and dining.

    Explore pavilions showcasing traditional architecture, handicrafts, and cultural artifacts from Asia, Africa, Europe, and the Americas. Each pavilion offers unique shopping opportunities with authentic products, textiles, jewelry, and souvenirs directly from their respective countries.

    Enjoy international cuisine from food stalls and restaurants representing different cultures. From Indian street food to Turkish delights, Mexican tacos to Italian gelato, Global Village offers a culinary journey around the world.

    The entertainment program includes cultural shows, live performances, and spectacular fireworks displays. Enjoy traditional dances, music performances, and acrobatic shows from different countries throughout the evening.`,
    itinerary: [
      "Seasonal operation: November to April",
      "Entry gates open at 4:00 PM",
      "Cultural pavilions exploration",
      "International shopping experience",
      "Traditional food tasting tour",
      "Cultural shows and performances",
      "Fireworks display (weekends)",
      "Park closes at 12:00 AM (weekdays) / 1:00 AM (weekends)",
    ],
    included: [
      "Global Village entry ticket",
      "Access to all cultural pavilions",
      "Cultural shows and entertainment",
      "Shopping opportunities",
      "Food court access",
      "Fireworks display (weekends)",
      "Free parking",
      "Family-friendly environment",
    ],
  },
  9: {
    title: "Dubai Miracle Garden",
    description:
      "World's largest natural flower garden with over 50 million flowers.",
    image: "/placeholder.svg?height=500&width=800&text=Miracle+Garden",
    duration: "2 hours",
    groupSize: "1-50 people",
    rating: 4.6,
    highlights: ["50 Million Flowers", "Floral Displays", "Butterfly Garden", "Photo Opportunities"],
    fullDescription: `Step into a floral wonderland at Dubai Miracle Garden, the world's largest natural flower garden featuring over 50 million flowers and 250 million plants. This seasonal attraction transforms the desert landscape into a colorful paradise of artistic floral displays.

    Marvel at incredible flower sculptures and installations, including life-size houses, cars, and even an Emirates A380 aircraft made entirely of fresh flowers. The garden features over 120 different flower varieties arranged in stunning patterns and designs.

    Explore themed areas including the Butterfly Garden, where you can walk among thousands of colorful butterflies in a climate-controlled dome. The Aromatic Garden offers a sensory experience with fragrant herbs and flowers.

    The garden's innovative irrigation system uses treated wastewater, making it an environmentally sustainable attraction. Visit during the cooler months (November to May) when the flowers are in full bloom and the weather is perfect for outdoor exploration.`,
    itinerary: [
      "Seasonal operation: November to May",
      "Garden opens at 9:00 AM",
      "Main entrance and floral displays",
      "Emirates A380 flower installation",
      "Butterfly Garden experience",
      "Aromatic Garden exploration",
      "Photography session throughout garden",
      "Garden closes at 9:00 PM (weekdays) / 11:00 PM (weekends)",
    ],
    included: [
      "Dubai Miracle Garden entry ticket",
      "Access to all floral displays",
      "Butterfly Garden experience",
      "Aromatic Garden visit",
      "Photography opportunities",
      "Garden map and information",
      "Rest areas and facilities",
      "Free parking",
    ],
  },
  10: {
    title: "Atlantis Aquaventure",
    description:
      "Thrilling water park with slides, marine encounters, and beach access.",
    image: "/images/touratlantis.jpg",
    duration: "Full day",
    groupSize: "1-40 people",
    rating: 4.7,
    highlights: ["Water Slides", "Marine Encounters", "Private Beach", "Aquarium Access"],
    fullDescription: `Experience the ultimate aquatic adventure at Atlantis Aquaventure Waterpark, one of the most exciting water parks in the world. Located at the iconic Atlantis The Palm resort, this waterpark offers thrilling slides, marine encounters, and pristine beach access.

    Challenge yourself on record-breaking water slides including the Leap of Faith, a near-vertical drop through a shark-filled lagoon, and the Poseidon's Revenge, featuring a trap door that drops you into a high-speed water slide.

    Enjoy the private beach with crystal-clear waters and stunning views of Dubai's skyline. Relax on comfortable loungers or participate in various beach activities and water sports.

    The experience includes access to The Lost Chambers Aquarium, where you can explore underwater ruins and encounter over 65,000 marine animals including sharks, rays, and colorful tropical fish.`,
    itinerary: [
      "Open daily 10:00 AM to sunset",
      "Entry through Atlantis The Palm resort",
      "Aquaventure Waterpark access",
      "Thrilling water slides and attractions",
      "Private beach and water sports",
      "Lost Chambers Aquarium visit",
      "Marine animal encounters",
      "Beach relaxation and dining options",
    ],
    included: [
      "Full day Aquaventure Waterpark access",
      "All water slides and attractions",
      "Private beach access",
      "Lost Chambers Aquarium entry",
      "Marine animal encounters",
      "Beach loungers and facilities",
      "Shower and changing facilities",
      "Life jackets and safety equipment",
    ],
  },
  11: {
    title: "Dubai Parks and Resorts",
    description:
      "Multiple theme parks including Motiongate, Bollywood Parks, and Legoland.",
    image: "/placeholder.svg?height=500&width=800&text=Dubai+Parks",
    duration: "Full day",
    groupSize: "1-50 people",
    rating: 4.5,
    highlights: ["Multiple Theme Parks", "Motiongate", "Bollywood Parks", "Legoland"],
    fullDescription: `Discover the magic of Dubai Parks and Resorts, the largest integrated theme park destination in the Middle East. This entertainment complex features three world-class theme parks: Motiongate Dubai, Bollywood Parks Dubai, and Legoland Dubai.

    Motiongate Dubai brings Hollywood to life with attractions based on popular movies like Shrek, Madagascar, and The Hunger Games. Experience thrilling rides, live shows, and meet your favorite movie characters.

    Bollywood Parks Dubai celebrates the vibrant world of Indian cinema with colorful attractions, live performances, and authentic Indian cuisine. Enjoy Bollywood-themed rides and spectacular dance shows.

    Legoland Dubai is perfect for families with children aged 2-12, featuring over 40 rides, shows, and attractions. Build and play with millions of LEGO bricks in this interactive theme park.`,
    itinerary: [
      "Open daily 10:00 AM to 8:00 PM (varies by season)",
      "Entry through main gate and park selection",
      "Motiongate Dubai - Hollywood movie attractions",
      "Bollywood Parks Dubai - Indian cinema experience",
      "Legoland Dubai - Family-friendly LEGO fun",
      "Riverland Dubai - Dining and entertainment",
      "Live shows and character meet & greets",
      "Shopping and dining throughout the parks",
    ],
    included: [
      "Access to selected theme park(s)",
      "All rides and attractions",
      "Live shows and entertainment",
      "Character meet and greet opportunities",
      "Riverland Dubai access",
      "Free parking",
      "Family-friendly facilities",
      "Safety equipment for all rides",
    ],
  },
  12: {
    title: "Ski Dubai",
    description:
      "Indoor ski resort with real snow, skiing, snowboarding, and penguin encounters.",
    image: "/placeholder.svg?height=500&width=800&text=Ski+Dubai",
    duration: "3 hours",
    groupSize: "1-30 people",
    rating: 4.6,
    highlights: ["Real Snow", "Skiing & Snowboarding", "Penguin Encounters", "Snow Park"],
    fullDescription: `Experience winter wonderland in the heart of the desert at Ski Dubai, the first indoor ski resort in the Middle East. This 22,500 square meter snow park maintains a temperature of -1°C to -2°C year-round, featuring real snow and alpine atmosphere.

    Enjoy skiing and snowboarding on five slopes of varying difficulty levels, from beginner-friendly areas to challenging black runs. Professional instructors are available for lessons, and all equipment is provided including skis, boots, and winter clothing.

    Meet the adorable King and Gentoo penguins during the daily Penguin Encounter sessions. Watch these amazing creatures play in their sub-zero habitat and learn about their behavior from expert handlers.

    The Snow Park area offers fun activities for non-skiers including tobogganing, snowball fights, and building snowmen. The chairlift provides scenic views of the entire snow park and Dubai skyline.`,
    itinerary: [
      "Open daily 10:00 AM to 11:00 PM",
      "Entry and equipment fitting",
      "Ski/snowboard lessons (if required)",
      "Slope time and winter activities",
      "Penguin Encounter session",
      "Snow Park activities",
      "Chairlift ride and views",
      "Warm-up at Alpine Café",
    ],
    included: [
      "Ski Dubai entry ticket",
      "Winter clothing (jacket, pants, gloves, hat)",
      "Ski or snowboard equipment",
      "Boots and safety equipment",
      "Penguin Encounter experience",
      "Snow Park access",
      "Chairlift rides",
      "Professional instruction available",
    ],
  },
  13: {
    title: "Dubai Fountain Show",
    description:
      "World's largest choreographed fountain system with music and lights.",
    image: "/placeholder.svg?height=500&width=800&text=Dubai+Fountain",
    duration: "30 minutes",
    groupSize: "Unlimited",
    rating: 4.8,
    highlights: ["Choreographed Fountains", "Music & Lights", "Burj Khalifa Views", "Free Experience"],
    fullDescription: `Witness the spectacular Dubai Fountain show, the world's largest choreographed fountain system located at the base of Burj Khalifa. This mesmerizing water, music, and light show takes place on the 30-acre Burj Khalifa Lake.

    The fountain shoots water up to 500 feet in the air, equivalent to a 50-story building, synchronized to a range of classical, contemporary, and world music. The show features over 6,600 lights and 25 colored projectors.

    Shows run every 20 minutes in the evening and every 30 minutes during the day, with each performance lasting approximately 5 minutes. The best viewing spots are from the Dubai Mall waterfront promenade, Souk Al Bahar, or the Burj Khalifa observation deck.

    This free attraction draws millions of visitors annually and offers perfect photo opportunities with the illuminated Burj Khalifa as a backdrop. The fountain system uses recycled water and is environmentally sustainable.`,
    itinerary: [
      "Daily shows from 1:00 PM to 1:30 PM",
      "Evening shows every 20 minutes from 6:00 PM to 11:00 PM",
      "Best viewing from Dubai Mall waterfront",
      "Alternative viewing from Souk Al Bahar",
      "Photography opportunities throughout",
      "Combine with Dubai Mall shopping",
      "Dining options with fountain views",
      "Free experience for all ages",
    ],
    included: [
      "Free admission to fountain shows",
      "Multiple daily performances",
      "Best viewing locations access",
      "Photography opportunities",
      "Family-friendly experience",
      "Accessible viewing areas",
      "Nearby dining and shopping",
      "Public facilities and amenities",
    ],
  },
  14: {
    title: "La Mer Beach",
    description:
      "Trendy beachfront destination with dining, shopping, and water sports.",
    image: "/placeholder.svg?height=500&width=800&text=La+Mer",
    duration: "Half day",
    groupSize: "1-20 people",
    rating: 4.4,
    highlights: ["Beach Activities", "Water Sports", "Dining Options", "Shopping"],
    fullDescription: `Experience the vibrant atmosphere of La Mer, Dubai's trendy beachfront destination that combines pristine beaches with contemporary dining, shopping, and entertainment. This Instagram-worthy location offers a perfect blend of relaxation and activity.

    Enjoy the beautiful sandy beach with crystal-clear waters, perfect for swimming, sunbathing, and beach games. The beach features comfortable loungers, umbrellas, and professional lifeguard services for a safe and relaxing experience.

    Try exciting water sports including kayaking, paddleboarding, and jet skiing. The calm waters make it perfect for beginners, while equipment rental and instruction are readily available.

    Explore the colorful street art, boutique shops, and diverse dining options ranging from casual beachside cafes to upscale restaurants. The area features unique architecture and Instagram-worthy murals perfect for social media photos.`,
    itinerary: [
      "Open daily 24/7 (shops and restaurants vary)",
      "Beach access and setup",
      "Swimming and sunbathing",
      "Water sports activities",
      "Street art and photography tour",
      "Shopping at boutique stores",
      "Dining at beachfront restaurants",
      "Sunset viewing and relaxation",
    ],
    included: [
      "Beach access",
      "Basic beach facilities",
      "Water sports equipment rental",
      "Shopping area access",
      "Dining options",
      "Street art viewing",
      "Photography opportunities",
      "Public facilities and parking",
    ],
  },
  15: {
    title: "Dubai Marina Walk",
    description:
      "Waterfront promenade with dining, shopping, and stunning marina views.",
    image: "/placeholder.svg?height=500&width=800&text=Marina+Walk",
    duration: "2 hours",
    groupSize: "Unlimited",
    rating: 4.3,
    highlights: ["Marina Views", "Waterfront Dining", "Shopping", "Yacht Watching"],
    fullDescription: `Stroll along Dubai Marina Walk, a beautiful waterfront promenade that offers stunning views of luxury yachts, impressive skyscrapers, and the sparkling marina waters. This 7-kilometer walkway is perfect for leisurely walks, dining, and people-watching.

    Admire the impressive architecture of the Marina district, featuring some of the world's tallest residential buildings. The area showcases modern urban planning with its mix of residential towers, hotels, and commercial spaces.

    Enjoy diverse dining options from casual cafes to fine dining restaurants, many with outdoor terraces offering marina views. The area comes alive in the evening with vibrant nightlife and entertainment options.

    Watch luxury yachts and boats in the marina while enjoying the cool breeze from the water. The walk connects to JBR Beach and offers easy access to shopping malls, making it a perfect starting point for exploring the area.`,
    itinerary: [
      "Open 24/7 - Best visited in evening",
      "Start at Marina Mall or JBR",
      "Waterfront promenade walk",
      "Marina and yacht viewing",
      "Photography opportunities",
      "Dining at waterfront restaurants",
      "Shopping at Marina Walk shops",
      "Evening entertainment and nightlife",
    ],
    included: [
      "Free access to Marina Walk",
      "Waterfront promenade",
      "Marina and yacht views",
      "Dining options",
      "Shopping opportunities",
      "Photography spots",
      "Public facilities",
      "Connection to JBR Beach",
    ],
  },
  16: {
    title: "Jumeirah Beach",
    description:
      "Beautiful white sand beach with clear waters and Burj Al Arab views.",
    image: "/placeholder.svg?height=500&width=800&text=Jumeirah+Beach",
    duration: "Half day",
    groupSize: "Unlimited",
    rating: 4.5,
    highlights: ["White Sand Beach", "Burj Al Arab Views", "Swimming", "Beach Activities"],
    fullDescription: `Relax at Jumeirah Beach, one of Dubai's most beautiful and popular public beaches offering pristine white sand, crystal-clear waters, and iconic views of the Burj Al Arab hotel. This free public beach provides a perfect escape from the city's hustle and bustle.

    The beach stretches for several kilometers along Dubai's coastline, providing ample space for sunbathing, beach games, and water activities. The gentle waves make it perfect for swimming and suitable for families with children.

    Enjoy unobstructed views of the iconic Burj Al Arab, Dubai's sail-shaped luxury hotel, which provides a stunning backdrop for photos. The beach is particularly beautiful during sunset when the sky creates a magical atmosphere.

    The area features excellent facilities including showers, changing rooms, and nearby cafes and restaurants. Beach volleyball courts and jogging tracks are available for more active visitors.`,
    itinerary: [
      "Open 24/7 - Best visited morning or evening",
      "Beach access and setup",
      "Swimming in clear waters",
      "Sunbathing on white sand",
      "Burj Al Arab photography",
      "Beach volleyball or activities",
      "Sunset viewing",
      "Nearby dining options",
    ],
    included: [
      "Free beach access",
      "White sand beach",
      "Swimming facilities",
      "Burj Al Arab views",
      "Beach volleyball courts",
      "Jogging tracks",
      "Public facilities (showers, changing rooms)",
      "Nearby dining and shopping",
    ],
  },
}

// Function to convert tour title to URL slug (same as in tours page)
function titleToSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim()
    .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
}

export default function TourDetailPage({ params }: { params: { id: string } }) {
  const slug = params.id

  // Find tour by matching slug from new data structure
  let tour = tours.find(t => titleToSlug(t.title) === slug)

  // Fallback to legacy data if not found in new structure
  if (!tour) {
    tour = Object.values(toursData).find(t => titleToSlug(t.title) === slug)
  }

  if (!tour) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#002D62] mb-4">Tour Not Found</h1>
          <Link href="/tours" className="btn-primary">
            Back to Tours
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image src={tour.image || "/placeholder.svg"} alt={tour.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">{tour.title}</h1>
          <div className="flex items-center justify-center space-x-6 text-lg">
            <div className="flex items-center">
              <Clock className="mr-2" size={20} />
              {tour.duration}
            </div>
            <div className="flex items-center">
              <Users className="mr-2" size={20} />
              {tour.groupSize}
            </div>
            <div className="flex items-center">
              <Star className="mr-2 fill-current" size={20} />
              {tour.rating}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/tours"
              className="inline-flex items-center text-[#D7AF6A] hover:text-[#002D62] transition-colors"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Tours
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none mb-8">
                <div className="whitespace-pre-line text-gray-600 text-lg leading-relaxed">
                  {(tour as any).fullDescription || (tour as any).longDescription || tour.description}
                </div>
              </div>

              {tour.itinerary && tour.itinerary.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#002D62] mb-6">Tour Itinerary</h3>
                  <div className="space-y-3">
                    {tour.itinerary.map((item: any, index: number) => (
                      <div key={index} className="flex items-start">
                        <span className="w-6 h-6 bg-[#D7AF6A] text-[#002D62] rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                          {index + 1}
                        </span>
                        <div className="text-gray-600">
                          {typeof item === 'string' ? item : (
                            <div>
                              <div className="font-semibold">{item.title}</div>
                              <div>{item.description}</div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {tour.included && tour.included.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-[#002D62] mb-6">What's Included</h3>
                  <ul className="space-y-3">
                    {tour.included.map((item: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-[#D7AF6A] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">{tour.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Group Size:</span>
                    <span className="font-semibold">{tour.groupSize}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Rating:</span>
                    <div className="flex items-center">
                      <Star className="text-[#D7AF6A] fill-current w-4 h-4 mr-1" />
                      <span className="font-semibold">{tour.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="bg-[#D7AF6A] text-[#002D62] px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[#002D62] hover:text-white hover:shadow-lg transform hover:-translate-y-1 w-full text-center block"
                  >
                    Book This Tour
                  </Link>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href="https://wa.me/971551316730"
                      className="flex items-center justify-center space-x-1 bg-green-500 text-white px-3 py-2 rounded text-sm hover:bg-green-600 transition-colors"
                    >
                      <MessageCircle size={16} />
                      <span>WhatsApp</span>
                    </a>

                    <a
                      href="tel:+971551316730"
                      className="flex items-center justify-center space-x-1 bg-[#002D62] text-white px-3 py-2 rounded text-sm hover:bg-[#D7AF6A] hover:text-[#002D62] transition-colors"
                    >
                      <Phone size={16} />
                      <span>Call</span>
                    </a>
                  </div>
                </div>

                {tour.highlights && tour.highlights.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-[#002D62] mb-3">Tour Highlights</h4>
                    <div className="flex flex-wrap gap-2">
                      {tour.highlights.map((highlight: any, index: number) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {typeof highlight === 'string' ? highlight : highlight.title}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Social Media */}
                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                  <h4 className="text-xl font-semibold text-[#002D62] mb-4">Follow Us</h4>
                  <div className="flex justify-center space-x-4">
                    <a
                      href="https://www.tiktok.com/@adamadventuretours"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
                    >
                      <FaTiktok size={20} />
                    </a>
                    <a
                      href="https://www.instagram.com/adamadventuretours"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white hover:from-purple-600 hover:to-pink-600 transition-colors"
                    >
                      <FaInstagram size={20} />
                    </a>
                    <a
                      href="https://www.facebook.com/share/1AanxYhXJY/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                    >
                      <FaFacebookF size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
