import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Star, Calendar, Users, MapPin, Phone, MessageCircle, Award } from "lucide-react"

const packages = {
  1: {
    title: "7-Day UAE Discovery",
    description:
      "Complete UAE experience including Dubai, Abu Dhabi, and hidden gems across the Emirates in this comprehensive week-long journey.",
    image: "/placeholder.svg?height=500&width=800&text=UAE+Discovery+Detail",
    duration: "7 Days / 6 Nights",
    groupSize: "2-20 people",
    rating: 4.9,
    category: "Cultural",
    highlights: ["Dubai & Abu Dhabi", "Desert Safari", "Cultural Sites", "Luxury Hotels"],
    fullDescription: `Discover the magic of the United Arab Emirates in this comprehensive 7-day package that showcases the best of this fascinating country. From the glittering skyscrapers of Dubai to the cultural treasures of Abu Dhabi, experience the perfect blend of modernity and tradition.

    Your journey begins in Dubai, where you'll explore iconic landmarks like the Burj Khalifa, Dubai Mall, and the historic Gold Souk. Experience the thrill of a desert safari with dune bashing, camel riding, and a traditional Bedouin dinner under the stars.

    Continue to Abu Dhabi, the capital city, where you'll visit the magnificent Sheikh Zayed Grand Mosque, one of the world's most beautiful mosques. Explore the Louvre Abu Dhabi and enjoy the cultural district on Saadiyat Island.

    The package includes visits to lesser-known gems like Al Ain Oasis, the traditional markets of Sharjah, and the stunning Hajar Mountains. All accommodations are in luxury 4-5 star hotels with breakfast included.`,
    itinerary: [
      "Day 1: Arrival in Dubai - Airport transfer, hotel check-in, Dubai Marina evening cruise",
      "Day 2: Dubai City Tour - Burj Khalifa, Dubai Mall, Gold Souk, Dubai Museum",
      "Day 3: Desert Safari Adventure - Dune bashing, camel riding, BBQ dinner",
      "Day 4: Travel to Abu Dhabi - Sheikh Zayed Grand Mosque, Corniche walk",
      "Day 5: Abu Dhabi Exploration - Louvre Abu Dhabi, Heritage Village, Ferrari World",
      "Day 6: Al Ain Day Trip - Al Ain Oasis, Jebel Hafeet, traditional markets",
      "Day 7: Departure - Last-minute shopping, airport transfer",
    ],
    included: [
      "6 nights accommodation in 4-5 star hotels",
      "Daily breakfast at hotels",
      "Airport transfers and all transportation",
      "Professional English-speaking guide",
      "All entrance fees and attraction tickets",
      "Desert safari with BBQ dinner",
      "Dubai Marina cruise",
      "Traditional lunch experiences",
      "24/7 customer support",
    ],
    accommodations: [
      "Dubai: 5-star hotel in Downtown Dubai (3 nights)",
      "Abu Dhabi: 4-star hotel on Corniche (2 nights)",
      "Al Ain: Traditional heritage hotel (1 night)",
    ],
  },
  2: {
    title: "European Grand Tour",
    description:
      "Visit multiple European capitals in one amazing journey through history, culture, and cuisine across 14 unforgettable days.",
    image: "/placeholder.svg?height=500&width=800&text=European+Tour+Detail",
    duration: "14 Days / 13 Nights",
    groupSize: "4-25 people",
    rating: 4.8,
    category: "Cultural",
    highlights: ["5 Countries", "Historic Cities", "Museums", "Local Cuisine"],
    fullDescription: `Embark on the ultimate European adventure visiting five magnificent countries and their capital cities. This grand tour combines the best of European history, culture, art, and cuisine in a carefully planned 14-day journey.

    Begin in London, exploring the British Museum, Tower of London, and enjoying traditional afternoon tea. Continue to Paris, the City of Light, where you'll visit the Louvre, climb the Eiffel Tower, and stroll along the Champs-Élysées.

    Travel through the romantic landscapes to Rome, the Eternal City, where ancient history comes alive at the Colosseum, Vatican City, and Roman Forum. Experience the Renaissance beauty of Florence before concluding in Amsterdam with its charming canals and world-class museums.

    Each destination includes guided tours, cultural experiences, and free time for personal exploration. All accommodations are centrally located 4-star hotels, and the package includes high-speed train travel between cities for comfort and scenic views.`,
    itinerary: [
      "Days 1-3: London - British Museum, Tower of London, Thames cruise, West End show",
      "Days 4-6: Paris - Louvre Museum, Eiffel Tower, Versailles day trip, Seine cruise",
      "Days 7-9: Rome - Colosseum, Vatican City, Roman Forum, Trastevere food tour",
      "Days 10-11: Florence - Uffizi Gallery, Duomo, Tuscan countryside tour",
      "Days 12-14: Amsterdam - Anne Frank House, Van Gogh Museum, canal cruise, departure",
    ],
    included: [
      "13 nights in 4-star centrally located hotels",
      "Daily breakfast and 8 dinners",
      "High-speed train travel between cities",
      "Professional local guides in each city",
      "All museum and attraction entrance fees",
      "Cultural experiences and food tours",
      "Airport transfers in each city",
      "Small group sizes for personalized experience",
      "Travel insurance included",
    ],
    accommodations: [
      "London: 4-star hotel in Covent Garden area (3 nights)",
      "Paris: 4-star hotel near Champs-Élysées (3 nights)",
      "Rome: 4-star hotel near Spanish Steps (3 nights)",
      "Florence: 4-star hotel in historic center (2 nights)",
      "Amsterdam: 4-star hotel in canal district (2 nights)",
    ],
  },
  3: {
    title: "Asian Adventure Package",
    description:
      "Explore the diverse cultures and landscapes of Asia in this comprehensive adventure tour spanning three fascinating countries.",
    image: "/placeholder.svg?height=500&width=800&text=Asian+Adventure+Detail",
    duration: "10 Days / 9 Nights",
    groupSize: "6-18 people",
    rating: 4.7,
    category: "Adventure",
    highlights: ["Multiple Countries", "Adventure Activities", "Cultural Immersion", "Local Experiences"],
    fullDescription: `Discover the incredible diversity of Asia in this action-packed 10-day adventure that takes you through Thailand, Vietnam, and Cambodia. Experience bustling cities, ancient temples, pristine beaches, and rich cultural traditions.

    Start in Bangkok, Thailand's vibrant capital, exploring ornate temples, floating markets, and enjoying authentic street food. Take a cooking class and learn to prepare traditional Thai dishes from local chefs.

    Continue to Vietnam, where you'll cruise through the stunning limestone karsts of Halong Bay and explore the charming streets of Hanoi's Old Quarter. Experience local life with a homestay in a traditional village.

    Conclude in Cambodia at the magnificent Angkor Wat temple complex, one of the world's most impressive archaeological sites. Explore the temples at sunrise and learn about the ancient Khmer civilization from expert guides.

    This adventure package includes a mix of cultural experiences, outdoor activities, and authentic local encounters that provide deep insights into Asian cultures and traditions.`,
    itinerary: [
      "Days 1-3: Bangkok, Thailand - Temple tours, floating market, cooking class, street food tour",
      "Days 4-5: Northern Thailand - Elephant sanctuary, hill tribe village visit, jungle trekking",
      "Days 6-7: Hanoi & Halong Bay, Vietnam - Old Quarter tour, bay cruise, cave exploration",
      "Days 8-9: Siem Reap, Cambodia - Angkor Wat sunrise, temple complex exploration, local village visit",
      "Day 10: Departure - Last-minute shopping, airport transfer",
    ],
    included: [
      "9 nights accommodation (mix of hotels and authentic homestays)",
      "All meals as specified in itinerary",
      "Domestic flights between countries",
      "Professional local guides and interpreters",
      "All entrance fees and permits",
      "Adventure activities and cultural experiences",
      "Cooking classes and food tours",
      "Traditional performances and shows",
      "Comprehensive travel insurance",
    ],
    accommodations: [
      "Bangkok: 4-star hotel in Sukhumvit area (2 nights)",
      "Northern Thailand: Eco-lodge in mountains (1 night)",
      "Hanoi: Boutique hotel in Old Quarter (1 night)",
      "Halong Bay: Traditional junk boat (1 night)",
      "Siem Reap: 4-star resort near temples (4 nights)",
    ],
  },
  4: {
    title: "Luxury Honeymoon Escape",
    description:
      "Romantic getaway to the world's most beautiful destinations with premium accommodations and intimate experiences for couples.",
    image: "/placeholder.svg?height=500&width=800&text=Honeymoon+Escape+Detail",
    duration: "12 Days / 11 Nights",
    groupSize: "2 people",
    rating: 5.0,
    category: "Luxury",
    highlights: ["Private Experiences", "5-Star Resorts", "Romantic Dinners", "Spa Treatments"],
    fullDescription: `Celebrate your love with this ultimate luxury honeymoon package designed for couples seeking romance, privacy, and unforgettable experiences. This 12-day journey takes you to three of the world's most romantic destinations.

    Begin in the Maldives, where you'll stay in an overwater villa with direct access to crystal-clear lagoons. Enjoy private beach dinners, couples' spa treatments, and sunset dolphin cruises in complete privacy and luxury.

    Continue to Santorini, Greece, where you'll stay in a cliff-top suite with panoramic views of the Aegean Sea. Experience private wine tastings, romantic sunset dinners, and explore charming villages hand-in-hand.

    Conclude in Bali, Indonesia, staying in a luxury resort surrounded by rice terraces and tropical gardens. Enjoy couples' yoga sessions, traditional Balinese spa treatments, and private temple visits with blessing ceremonies.

    Every detail is carefully planned to create magical moments, from champagne welcomes to private photography sessions capturing your special memories. All accommodations feature the finest amenities and personalized service.`,
    itinerary: [
      "Days 1-4: Maldives - Overwater villa, private beach dinners, spa treatments, water activities",
      "Days 5-8: Santorini, Greece - Cliff-top suite, wine tastings, sunset dinners, island exploration",
      "Days 9-12: Bali, Indonesia - Luxury resort, couples' yoga, temple visits, cultural experiences",
    ],
    included: [
      "11 nights in luxury 5-star accommodations",
      "All meals including private romantic dinners",
      "First-class flights between destinations",
      "Private transfers and transportation",
      "Couples' spa treatments and wellness activities",
      "Private excursions and cultural experiences",
      "Professional photography sessions",
      "Champagne and romantic amenities",
      "24/7 concierge service",
      "Honeymoon celebration arrangements",
    ],
    accommodations: [
      "Maldives: Overwater villa at 5-star resort (4 nights)",
      "Santorini: Cliff-top suite with caldera views (4 nights)",
      "Bali: Luxury resort villa with private pool (3 nights)",
    ],
  },
  5: {
    title: "Family Fun Adventure",
    description:
      "Perfect family package with activities suitable for all ages and family-friendly accommodations designed for memorable family bonding.",
    image: "/placeholder.svg?height=500&width=800&text=Family+Adventure+Detail",
    duration: "5 Days / 4 Nights",
    groupSize: "2-12 people",
    rating: 4.6,
    category: "Family",
    highlights: ["Kid-Friendly Activities", "Family Hotels", "Educational Tours", "Entertainment"],
    fullDescription: `Create lasting family memories with this specially designed 5-day package that combines fun, education, and adventure for all family members. Every activity is carefully selected to ensure both children and adults have an amazing time.

    The package includes visits to interactive museums, theme parks, and educational centers where children can learn while having fun. Parents will appreciate the well-planned itinerary that balances active adventures with relaxing family time.

    Stay in family-friendly hotels with connecting rooms, kids' clubs, and swimming pools. All meals are included with options for different dietary requirements and preferences, including kid-friendly menus at every restaurant.

    Professional family guides ensure safety and engagement for all age groups. The itinerary includes backup indoor activities in case of weather changes, and flexible timing to accommodate nap times and family needs.

    Special touches include welcome gifts for children, family photo sessions, and souvenir packages to commemorate your family adventure.`,
    itinerary: [
      "Day 1: Arrival and theme park visit - Welcome activities, rides suitable for all ages",
      "Day 2: Educational adventure - Interactive science museum, hands-on workshops",
      "Day 3: Outdoor exploration - Nature park, easy hiking trails, picnic lunch",
      "Day 4: Cultural experience - Traditional village visit, craft workshops, cultural show",
      "Day 5: Beach day and departure - Beach activities, family photos, departure",
    ],
    included: [
      "4 nights in family-friendly hotels with connecting rooms",
      "All meals with kid-friendly options",
      "Theme park and attraction tickets for all family members",
      "Professional family guide",
      "Educational workshops and activities",
      "Transportation in comfortable family vehicles",
      "Welcome gifts for children",
      "Family photography session",
      "Travel insurance for all family members",
      "24/7 family support hotline",
    ],
    accommodations: ["Family resort with kids' club and pool (2 nights)", "Beach hotel with family suites (2 nights)"],
  },
  6: {
    title: "Spiritual Journey Package",
    description:
      "Meaningful spiritual experiences visiting sacred sites and participating in traditional ceremonies for inner peace and cultural understanding.",
    image: "/placeholder.svg?height=500&width=800&text=Spiritual+Journey+Detail",
    duration: "8 Days / 7 Nights",
    groupSize: "4-15 people",
    rating: 4.8,
    category: "Spiritual",
    highlights: ["Sacred Sites", "Meditation Sessions", "Cultural Learning", "Peaceful Settings"],
    fullDescription: `Embark on a transformative spiritual journey that combines visits to sacred sites with meaningful cultural experiences and personal reflection. This 8-day package is designed for travelers seeking inner peace, spiritual growth, and deeper cultural understanding.

    Visit ancient temples, monasteries, and sacred sites where you'll participate in traditional ceremonies and meditation sessions led by experienced spiritual guides. Learn about different spiritual traditions and their practices in authentic settings.

    The journey includes stays in peaceful retreat centers and traditional accommodations that provide a serene environment for reflection and spiritual practice. Daily meditation sessions, yoga classes, and spiritual discussions are included.

    Experience local spiritual traditions through participation in ceremonies, blessing rituals, and community gatherings. Meet with spiritual leaders and learn about their teachings and way of life.

    All accommodations are chosen for their peaceful settings and spiritual significance. Vegetarian meals are provided throughout the journey, prepared according to traditional methods and spiritual dietary guidelines.`,
    itinerary: [
      "Day 1: Arrival and orientation - Welcome ceremony, introduction to spiritual practices",
      "Day 2-3: Mountain monastery - Meditation retreats, spiritual teachings, nature walks",
      "Day 4-5: Sacred temple complex - Traditional ceremonies, cultural learning, blessing rituals",
      "Day 6-7: Spiritual community visit - Community life experience, service activities, reflection time",
      "Day 8: Departure - Final meditation session, sharing circle, departure",
    ],
    included: [
      "7 nights in spiritual retreat centers and traditional accommodations",
      "All vegetarian meals prepared according to spiritual guidelines",
      "Daily meditation and yoga sessions",
      "Spiritual guide and cultural interpreter",
      "Participation in traditional ceremonies",
      "Spiritual teachings and workshops",
      "Sacred site entrance fees and donations",
      "Traditional spiritual items and books",
      "Transportation to all spiritual sites",
      "Personal spiritual consultation sessions",
    ],
    accommodations: [
      "Mountain monastery guest house (2 nights)",
      "Temple retreat center (3 nights)",
      "Spiritual community accommodation (2 nights)",
    ],
  },
}

export default function PackageDetailPage({ params }: { params: { id: string } }) {
  const packageId = Number.parseInt(params.id)
  const pkg = packages[packageId as keyof typeof packages]

  if (!pkg) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#002D62] mb-4">Package Not Found</h1>
          <Link href="/packages" className="btn-primary">
            Back to Packages
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
          <Image src={pkg.image || "/placeholder.svg"} alt={pkg.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white">
          <div className="mb-4">
            <span className="bg-[#D7AF6A] text-[#002D62] px-4 py-2 rounded-full text-sm font-semibold">
              {pkg.category}
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-4">{pkg.title}</h1>
          <div className="flex items-center justify-center space-x-6 text-lg">
            <div className="flex items-center">
              <Calendar className="mr-2" size={20} />
              {pkg.duration}
            </div>
            <div className="flex items-center">
              <Users className="mr-2" size={20} />
              {pkg.groupSize}
            </div>
            <div className="flex items-center">
              <Star className="mr-2 fill-current" size={20} />
              {pkg.rating}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/packages"
              className="inline-flex items-center text-[#D7AF6A] hover:text-[#002D62] transition-colors"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Packages
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none mb-8">
                <div className="whitespace-pre-line text-gray-600 text-lg leading-relaxed">{pkg.fullDescription}</div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#002D62] mb-6">Package Itinerary</h3>
                <div className="space-y-4">
                  {pkg.itinerary.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <span className="w-8 h-8 bg-[#D7AF6A] text-[#002D62] rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                        {index + 1}
                      </span>
                      <div className="flex-1">
                        <span className="text-gray-600 text-lg">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#002D62] mb-6">What's Included</h3>
                  <ul className="space-y-3">
                    {pkg.included.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-[#D7AF6A] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#002D62] mb-6">Accommodations</h3>
                  <ul className="space-y-3">
                    {pkg.accommodations.map((accommodation, index) => (
                      <li key={index} className="flex items-start">
                        <MapPin className="text-[#D7AF6A] mr-3 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-600">{accommodation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Group Size:</span>
                    <span className="font-semibold">{pkg.groupSize}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-semibold">{pkg.category}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Rating:</span>
                    <div className="flex items-center">
                      <Star className="text-[#D7AF6A] fill-current w-4 h-4 mr-1" />
                      <span className="font-semibold">{pkg.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="bg-[#D7AF6A] text-[#002D62] px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[#002D62] hover:text-white hover:shadow-lg transform hover:-translate-y-1 w-full text-center block"
                  >
                    Book This Package
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

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-[#002D62] mb-3">Package Highlights</h4>
                  <div className="space-y-2">
                    {pkg.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center">
                        <Award className="text-[#D7AF6A] w-4 h-4 mr-2" />
                        <span className="text-sm text-gray-700">{highlight}</span>
                      </div>
                    ))}
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
