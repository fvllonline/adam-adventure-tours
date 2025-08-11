import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star, Clock, Users } from "lucide-react"

export default function ToursPage() {
  const tours = [
    {
      id: 1,
      title: "Dubai City Tour",
      description: "Explore Dubai's iconic landmarks including Burj Khalifa, Dubai Mall, and Palm Jumeirah.",
      image: "/placeholder.svg?height=300&width=400&text=Dubai+City+Tour",
      price: "From 199 AED",
      duration: "8 hours",
      groupSize: "2-15 people",
      rating: 4.9,
      highlights: ["Burj Khalifa", "Dubai Mall", "Palm Jumeirah", "Dubai Marina"],
    },
    {
      id: 2,
      title: "Desert Safari with BBQ Dinner",
      description: "Thrilling dune bashing, camel riding, and traditional BBQ dinner under the stars.",
      image: "/placeholder.svg?height=300&width=400&text=Desert+Safari",
      price: "From 299 AED",
      duration: "6 hours",
      groupSize: "4-20 people",
      rating: 4.8,
      highlights: ["Dune Bashing", "Camel Riding", "BBQ Dinner", "Cultural Show"],
    },
    {
      id: 3,
      title: "Dhow Cruise Marina",
      description: "Romantic dinner cruise along Dubai Marina with stunning city skyline views.",
      image: "/placeholder.svg?height=300&width=400&text=Dhow+Cruise",
      price: "From 149 AED",
      duration: "3 hours",
      groupSize: "2-50 people",
      rating: 4.7,
      highlights: ["Marina Views", "Buffet Dinner", "Live Entertainment", "City Skyline"],
    },
    {
      id: 4,
      title: "Burj Khalifa At The Top",
      description: "Visit the world's tallest building and enjoy breathtaking views from the observation deck.",
      image: "/placeholder.svg?height=300&width=400&text=Burj+Khalifa",
      price: "From 179 AED",
      duration: "2 hours",
      groupSize: "1-20 people",
      rating: 4.9,
      highlights: ["World's Tallest Building", "Observation Deck", "City Views", "Photo Opportunities"],
    },
    {
      id: 5,
      title: "Dubai Aquarium & Underwater Zoo",
      description: "Walk through the underwater tunnel and discover marine life at Dubai Mall.",
      image: "/placeholder.svg?height=300&width=400&text=Dubai+Aquarium",
      price: "From 129 AED",
      duration: "2 hours",
      groupSize: "1-30 people",
      rating: 4.6,
      highlights: ["Underwater Tunnel", "Marine Life", "Shark Encounters", "Interactive Exhibits"],
    },
    {
      id: 6,
      title: "IMG Worlds of Adventure",
      description: "World's largest indoor theme park with thrilling rides and attractions.",
      image: "/placeholder.svg?height=300&width=400&text=IMG+Worlds",
      price: "From 349 AED",
      duration: "Full day",
      groupSize: "1-50 people",
      rating: 4.8,
      highlights: ["Indoor Theme Park", "Thrilling Rides", "Marvel Zone", "Cartoon Network Zone"],
    },
    {
      id: 7,
      title: "Dubai Frame",
      description: "Iconic golden frame offering panoramic views of old and new Dubai.",
      image: "/placeholder.svg?height=300&width=400&text=Dubai+Frame",
      price: "From 89 AED",
      duration: "1.5 hours",
      groupSize: "1-25 people",
      rating: 4.5,
      highlights: ["Panoramic Views", "Old vs New Dubai", "Sky Bridge", "Museum"],
    },
    {
      id: 8,
      title: "Global Village",
      description: "Cultural and entertainment destination featuring pavilions from around the world.",
      image: "/placeholder.svg?height=300&width=400&text=Global+Village",
      price: "From 25 AED",
      duration: "4 hours",
      groupSize: "1-100 people",
      rating: 4.4,
      highlights: ["Cultural Pavilions", "International Cuisine", "Shopping", "Entertainment Shows"],
    },
    {
      id: 9,
      title: "Dubai Miracle Garden",
      description: "World's largest natural flower garden with over 50 million flowers.",
      image: "/placeholder.svg?height=300&width=400&text=Miracle+Garden",
      price: "From 75 AED",
      duration: "2 hours",
      groupSize: "1-50 people",
      rating: 4.6,
      highlights: ["50 Million Flowers", "Floral Displays", "Butterfly Garden", "Photo Opportunities"],
    },
    {
      id: 10,
      title: "Atlantis Aquaventure",
      description: "Thrilling water park with slides, marine encounters, and beach access.",
      image: "/placeholder.svg?height=300&width=400&text=Aquaventure",
      price: "From 299 AED",
      duration: "Full day",
      groupSize: "1-40 people",
      rating: 4.7,
      highlights: ["Water Slides", "Marine Encounters", "Private Beach", "Aquarium Access"],
    },
    {
      id: 11,
      title: "Dubai Parks and Resorts",
      description: "Multiple theme parks including Motiongate, Bollywood Parks, and Legoland.",
      image: "/placeholder.svg?height=300&width=400&text=Dubai+Parks",
      price: "From 279 AED",
      duration: "Full day",
      groupSize: "1-50 people",
      rating: 4.5,
      highlights: ["Multiple Theme Parks", "Motiongate", "Bollywood Parks", "Legoland"],
    },
    {
      id: 12,
      title: "Ski Dubai",
      description: "Indoor ski resort with real snow, skiing, snowboarding, and penguin encounters.",
      image: "/placeholder.svg?height=300&width=400&text=Ski+Dubai",
      price: "From 199 AED",
      duration: "3 hours",
      groupSize: "1-30 people",
      rating: 4.6,
      highlights: ["Real Snow", "Skiing & Snowboarding", "Penguin Encounters", "Snow Park"],
    },
    {
      id: 13,
      title: "Dubai Fountain Show",
      description: "World's largest choreographed fountain system with music and lights.",
      image: "/placeholder.svg?height=300&width=400&text=Dubai+Fountain",
      price: "Free",
      duration: "30 minutes",
      groupSize: "Unlimited",
      rating: 4.8,
      highlights: ["Choreographed Fountains", "Music & Lights", "Burj Khalifa Views", "Free Experience"],
    },
    {
      id: 14,
      title: "La Mer Beach",
      description: "Trendy beachfront destination with dining, shopping, and water sports.",
      image: "/placeholder.svg?height=300&width=400&text=La+Mer",
      price: "From 50 AED",
      duration: "Half day",
      groupSize: "1-20 people",
      rating: 4.4,
      highlights: ["Beach Activities", "Water Sports", "Dining Options", "Shopping"],
    },
    {
      id: 15,
      title: "Dubai Marina Walk",
      description: "Waterfront promenade with dining, shopping, and stunning marina views.",
      image: "/placeholder.svg?height=300&width=400&text=Marina+Walk",
      price: "Free",
      duration: "2 hours",
      groupSize: "Unlimited",
      rating: 4.3,
      highlights: ["Marina Views", "Waterfront Dining", "Shopping", "Yacht Watching"],
    },
    {
      id: 16,
      title: "Jumeirah Beach",
      description: "Beautiful white sand beach with clear waters and Burj Al Arab views.",
      image: "/placeholder.svg?height=300&width=400&text=Jumeirah+Beach",
      price: "Free",
      duration: "Half day",
      groupSize: "Unlimited",
      rating: 4.5,
      highlights: ["White Sand Beach", "Burj Al Arab Views", "Swimming", "Beach Activities"],
    },
  ]

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=400&width=1920&text=Tours+Header+Image"
            alt="Tours Header"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Our Tours</h1>
          <p className="text-xl">Discover amazing destinations with our expertly guided tours</p>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#002D62] mb-4">Available Tours</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose from our carefully curated selection of tours designed to create unforgettable memories and unique
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <div key={tour.id} className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
                <Image
                  src={tour.image || "/placeholder.svg"}
                  alt={tour.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(tour.rating) ? "text-[#D7AF6A] fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-1">({tour.rating})</span>
                    </div>
                    <span className="text-[#D7AF6A] font-bold text-lg">{tour.price}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-[#002D62] mb-3">{tour.title}</h3>
                  <p className="text-gray-600 mb-4">{tour.description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {tour.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {tour.groupSize}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-[#002D62] mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {tour.highlights.map((highlight, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/tours/${tour.id}`}
                    className="bg-[#D7AF6A] text-[#002D62] px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[#002D62] hover:text-white hover:shadow-lg transform hover:-translate-y-1 w-full text-center block"
                  >
                    View Details <ArrowRight className="inline ml-1" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
