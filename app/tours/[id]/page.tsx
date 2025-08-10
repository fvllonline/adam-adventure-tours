import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Star, Clock, Users, Phone, MessageCircle } from "lucide-react"

const tours = {
  1: {
    title: "Dubai City Explorer",
    description:
      "Discover the modern marvels and traditional charm of Dubai in this comprehensive city tour that showcases the best of this incredible city.",
    image: "/placeholder.svg?height=500&width=800&text=Dubai+City+Explorer+Detail",
    price: "From $299",
    duration: "8 hours",
    groupSize: "2-15 people",
    rating: 4.9,
    highlights: ["Burj Khalifa", "Dubai Mall", "Gold Souk", "Dubai Creek"],
    fullDescription: `Experience the best of Dubai in this comprehensive full-day tour that combines modern attractions with traditional culture. Start your journey at the iconic Burj Khalifa, the world's tallest building, where you'll enjoy breathtaking views from the observation deck.

    Continue to the Dubai Mall, one of the world's largest shopping destinations, where you can witness the spectacular Dubai Fountain show. Explore the historic Gold Souk and Spice Souk, where you can bargain for precious metals and aromatic spices.

    Take an abra (traditional boat) ride across Dubai Creek to experience the city's maritime heritage. Visit the Dubai Museum to learn about the emirate's fascinating transformation from a fishing village to a global metropolis.

    The tour includes comfortable transportation, professional guide, and entrance fees to major attractions. Lunch at a traditional restaurant is included, offering you a taste of authentic Emirati cuisine.`,
    itinerary: [
      "9:00 AM - Hotel pickup and departure",
      "9:30 AM - Burj Khalifa visit and observation deck",
      "11:00 AM - Dubai Mall and Dubai Fountain",
      "12:30 PM - Traditional lunch at local restaurant",
      "2:00 PM - Gold Souk and Spice Souk exploration",
      "3:30 PM - Abra ride across Dubai Creek",
      "4:00 PM - Dubai Museum visit",
      "5:00 PM - Return to hotel",
    ],
    included: [
      "Professional English-speaking guide",
      "Comfortable air-conditioned transportation",
      "Burj Khalifa observation deck tickets",
      "Traditional lunch at local restaurant",
      "Abra ride across Dubai Creek",
      "Dubai Museum entrance fee",
      "Hotel pickup and drop-off",
    ],
  },
  2: {
    title: "Desert Safari Adventure",
    description:
      "Experience the magic of the Arabian desert with camel rides, dune bashing, and traditional BBQ dinner under the stars.",
    image: "/placeholder.svg?height=500&width=800&text=Desert+Safari+Detail",
    price: "From $149",
    duration: "6 hours",
    groupSize: "4-20 people",
    rating: 4.8,
    highlights: ["Dune Bashing", "Camel Riding", "BBQ Dinner", "Cultural Show"],
    fullDescription: `Embark on an unforgettable desert adventure that combines thrilling activities with cultural experiences. Your journey begins with an exciting dune bashing session in a 4WD vehicle, navigating the golden sand dunes of the Arabian desert.

    Experience the traditional mode of desert transportation with a camel ride, offering you a unique perspective of the vast desert landscape. Try sandboarding down the dunes for an adrenaline rush, or simply relax and enjoy the serene beauty of the desert.

    As the sun sets, arrive at a traditional Bedouin-style camp where you'll be welcomed with Arabic coffee and dates. Enjoy henna painting, try on traditional Arabic costumes for photos, and watch a mesmerizing belly dance and Tanoura show under the starlit sky.

    The evening culminates with a delicious BBQ dinner featuring grilled meats, fresh salads, and traditional Arabic dishes. Vegetarian options are also available. Enjoy unlimited soft drinks, water, tea, and coffee throughout the evening.

    All safety equipment and experienced drivers ensure your dune bashing experience is both thrilling and safe. The camp provides comfortable seating areas with cushions and low tables in traditional Arabic style.`,
    itinerary: [
      "3:00 PM - Hotel pickup in 4WD vehicle",
      "4:00 PM - Arrive at desert and dune bashing session",
      "5:00 PM - Camel riding and sandboarding",
      "6:00 PM - Sunset photography and relaxation",
      "6:30 PM - Arrive at Bedouin camp",
      "7:00 PM - Welcome drinks, henna, and costume photos",
      "8:00 PM - Cultural shows (belly dance, Tanoura)",
      "8:30 PM - BBQ dinner under the stars",
      "9:30 PM - Return journey to hotel",
    ],
    included: [
      "4WD vehicle transportation with experienced driver",
      "Dune bashing adventure session",
      "Camel riding experience",
      "Sandboarding equipment",
      "Welcome refreshments at camp",
      "Henna painting and Arabic costume photos",
      "Cultural entertainment shows",
      "BBQ dinner with unlimited beverages",
      "Hotel pickup and drop-off",
    ],
  },
  3: {
    title: "Mountain Hiking Expedition",
    description:
      "Challenge yourself with breathtaking mountain trails and spectacular panoramic views in this full-day hiking adventure.",
    image: "/placeholder.svg?height=500&width=800&text=Mountain+Hiking+Detail",
    price: "From $199",
    duration: "Full day",
    groupSize: "4-12 people",
    rating: 4.7,
    highlights: ["Scenic Trails", "Mountain Peaks", "Wildlife Spotting", "Photography"],
    fullDescription: `Embark on an exhilarating mountain hiking expedition that takes you through some of the most spectacular landscapes in the region. This full-day adventure is designed for hiking enthusiasts who want to challenge themselves while enjoying breathtaking natural beauty.

    The expedition begins early morning with a drive to the mountain base, where you'll meet your experienced hiking guide and receive a safety briefing. The trail winds through diverse terrain, from rocky paths to lush valleys, offering constantly changing scenery.

    Along the way, you'll have opportunities to spot local wildlife and learn about the unique ecosystem of the mountain region. Your guide will share knowledge about local flora, fauna, and geological formations, making this both an adventure and educational experience.

    The highlight of the hike is reaching the summit, where you'll be rewarded with panoramic views that stretch for miles. This is the perfect spot for photography and a well-deserved rest while enjoying a packed lunch with a view.`,
    itinerary: [
      "6:00 AM - Hotel pickup and drive to mountain base",
      "7:30 AM - Safety briefing and equipment check",
      "8:00 AM - Begin hiking expedition",
      "10:00 AM - First rest stop and wildlife spotting",
      "12:00 PM - Summit arrival and lunch break",
      "1:00 PM - Photography session and exploration",
      "2:00 PM - Begin descent",
      "4:00 PM - Return to base and refreshments",
      "5:30 PM - Return journey to hotel",
    ],
    included: [
      "Professional mountain guide",
      "Transportation to and from mountain base",
      "Hiking equipment (poles, safety gear)",
      "Packed lunch and snacks",
      "First aid kit and emergency equipment",
      "Photography assistance",
      "Refreshments at base camp",
      "Certificate of completion",
    ],
  },
  4: {
    title: "Island Hopping Tour",
    description:
      "Explore pristine islands and crystal-clear waters in this tropical paradise adventure spanning two unforgettable days.",
    image: "/placeholder.svg?height=500&width=800&text=Island+Hopping+Detail",
    price: "From $399",
    duration: "2 days",
    groupSize: "6-16 people",
    rating: 4.9,
    highlights: ["Multiple Islands", "Snorkeling", "Beach Time", "Local Cuisine"],
    fullDescription: `Discover the beauty of pristine islands in this two-day island hopping adventure that combines relaxation with exploration. Visit multiple islands, each with its own unique character and natural beauty, from secluded beaches to vibrant coral reefs.

    Day one begins with a boat ride to the first island, where you'll enjoy snorkeling in crystal-clear waters teeming with colorful marine life. The afternoon is spent on a pristine beach with white sand and turquoise waters, perfect for swimming and sunbathing.

    Day two takes you to more remote islands where you can explore hidden coves, enjoy beach picnics, and experience the local island culture. Meet friendly locals, taste traditional island cuisine, and learn about the sustainable fishing practices that have been passed down through generations.

    All meals are included, featuring fresh seafood and local specialties prepared by island chefs. Accommodation is provided in comfortable beachfront bungalows with stunning ocean views.`,
    itinerary: [
      "Day 1: 8:00 AM - Departure by boat to first island",
      "Day 1: 10:00 AM - Snorkeling session at coral reef",
      "Day 1: 12:00 PM - Beach lunch and relaxation",
      "Day 1: 3:00 PM - Island exploration and swimming",
      "Day 1: 6:00 PM - Sunset dinner at beachfront restaurant",
      "Day 1: 8:00 PM - Overnight at island accommodation",
      "Day 2: 9:00 AM - Breakfast and boat to second island",
      "Day 2: 11:00 AM - Cultural village visit",
      "Day 2: 1:00 PM - Traditional lunch with locals",
      "Day 2: 3:00 PM - Beach activities and free time",
      "Day 2: 5:00 PM - Return journey",
    ],
    included: [
      "Boat transportation between islands",
      "Professional guide and boat crew",
      "Snorkeling equipment and instruction",
      "All meals (6 meals total)",
      "One night accommodation in beachfront bungalow",
      "Cultural village visit",
      "Beach activities and equipment",
      "Underwater photography service",
    ],
  },
  5: {
    title: "Cultural Heritage Walk",
    description:
      "Immerse yourself in local history and culture with guided walks through historic districts and traditional markets.",
    image: "/placeholder.svg?height=500&width=800&text=Cultural+Heritage+Detail",
    price: "From $89",
    duration: "4 hours",
    groupSize: "2-10 people",
    rating: 4.6,
    highlights: ["Historic Sites", "Local Markets", "Traditional Crafts", "Cultural Stories"],
    fullDescription: `Step back in time with this immersive cultural heritage walk that takes you through the historic heart of the city. This intimate tour is designed to provide deep insights into local traditions, architecture, and way of life.

    Your journey begins in the old quarter, where narrow alleyways and traditional buildings tell stories of centuries past. Visit historic mosques, traditional houses, and ancient fortifications while learning about the architectural styles and cultural significance of each site.

    Explore bustling local markets where artisans still practice traditional crafts passed down through generations. Watch skilled craftsmen at work, from metalworkers to textile weavers, and have the opportunity to purchase authentic handmade souvenirs.

    The tour includes visits to local homes where you'll experience traditional hospitality and learn about daily life in the historic district. Enjoy traditional refreshments and engage with local families who are proud to share their heritage.`,
    itinerary: [
      "2:00 PM - Meet at historic district entrance",
      "2:15 PM - Walking tour of old quarter begins",
      "2:45 PM - Visit to historic mosque and architecture tour",
      "3:30 PM - Traditional crafts market exploration",
      "4:15 PM - Local home visit and refreshments",
      "5:00 PM - Artisan workshop demonstrations",
      "5:30 PM - Traditional tea ceremony",
      "6:00 PM - Tour conclusion at central square",
    ],
    included: [
      "Professional cultural guide",
      "Historic sites entrance fees",
      "Traditional refreshments and tea",
      "Local home visit experience",
      "Artisan workshop demonstrations",
      "Small group personalized attention",
      "Cultural information booklet",
      "Traditional souvenir",
    ],
  },
  6: {
    title: "Luxury Yacht Experience",
    description:
      "Sail in style aboard a luxury yacht with premium amenities and stunning coastal views in this exclusive half-day experience.",
    image: "/placeholder.svg?height=500&width=800&text=Luxury+Yacht+Detail",
    price: "From $599",
    duration: "Half day",
    groupSize: "2-12 people",
    rating: 5.0,
    highlights: ["Luxury Yacht", "Gourmet Dining", "Water Activities", "Sunset Views"],
    fullDescription: `Indulge in the ultimate luxury experience aboard a premium yacht equipped with world-class amenities and professional crew. This exclusive half-day charter offers unparalleled comfort and service while exploring stunning coastal waters.

    The luxury yacht features spacious decks, comfortable seating areas, air-conditioned cabins, and state-of-the-art navigation systems. Enjoy panoramic views from multiple vantage points, including the sun deck and shaded lounge areas.

    Your experience includes gourmet dining prepared by an onboard chef, featuring fresh seafood, premium ingredients, and international cuisine. The fully stocked bar offers premium beverages, champagne, and signature cocktails served by professional staff.

    Take advantage of water activities including snorkeling, swimming, and fishing equipment. The yacht anchors at secluded bays where you can enjoy crystal-clear waters away from crowds. The experience concludes with a spectacular sunset viewing from the best vantage point on the water.`,
    itinerary: [
      "2:00 PM - Welcome aboard and safety briefing",
      "2:30 PM - Departure and coastal cruise begins",
      "3:00 PM - First swimming and snorkeling stop",
      "4:00 PM - Gourmet lunch service on deck",
      "5:00 PM - Cruise to sunset viewing location",
      "5:30 PM - Water activities and relaxation",
      "6:30 PM - Sunset cocktails and appetizers",
      "7:30 PM - Return to marina",
      "8:00 PM - Disembarkation",
    ],
    included: [
      "Luxury yacht charter with professional crew",
      "Gourmet lunch prepared by onboard chef",
      "Premium beverages and cocktails",
      "Snorkeling and swimming equipment",
      "Fishing equipment and instruction",
      "Towels and sun protection amenities",
      "Professional photography service",
      "Sunset champagne toast",
    ],
  },
}

export default function TourDetailPage({ params }: { params: { id: string } }) {
  const tourId = Number.parseInt(params.id)
  const tour = tours[tourId as keyof typeof tours]

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
                <div className="whitespace-pre-line text-gray-600 text-lg leading-relaxed">{tour.fullDescription}</div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#002D62] mb-6">Tour Itinerary</h3>
                <div className="space-y-3">
                  {tour.itinerary.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <span className="w-6 h-6 bg-[#D7AF6A] text-[#002D62] rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#002D62] mb-6">What's Included</h3>
                <ul className="space-y-3">
                  {tour.included.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-[#D7AF6A] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-[#D7AF6A] mb-2">{tour.price}</div>
                  <div className="text-gray-600">per person</div>
                </div>

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

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-[#002D62] mb-3">Tour Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {tour.highlights.map((highlight, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {highlight}
                      </span>
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
