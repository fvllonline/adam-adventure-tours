import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star, Calendar, Users, Award } from "lucide-react"

export default function PackagesPage() {
  const packages = [
    {
      id: 1,
      title: "7-Day UAE Discovery",
      description: "Complete UAE experience including Dubai, Abu Dhabi, and hidden gems across the Emirates.",
      image: "/placeholder.svg?height=300&width=400&text=UAE+Discovery",
      duration: "7 Days / 6 Nights",
      groupSize: "2-20 people",
      rating: 4.9,
      category: "Cultural",
      highlights: ["Dubai & Abu Dhabi", "Desert Safari", "Cultural Sites", "Luxury Hotels"],
    },
    {
      id: 2,
      title: "European Grand Tour",
      description: "Visit multiple European capitals in one amazing journey through history, culture, and cuisine.",
      image: "/placeholder.svg?height=300&width=400&text=European+Tour",
      duration: "14 Days / 13 Nights",
      groupSize: "4-25 people",
      rating: 4.8,
      category: "Cultural",
      highlights: ["5 Countries", "Historic Cities", "Museums", "Local Cuisine"],
    },
    {
      id: 3,
      title: "Asian Adventure Package",
      description: "Explore the diverse cultures and landscapes of Asia in this comprehensive adventure tour.",
      image: "/placeholder.svg?height=300&width=400&text=Asian+Adventure",
      duration: "10 Days / 9 Nights",
      groupSize: "6-18 people",
      rating: 4.7,
      category: "Adventure",
      highlights: ["Multiple Countries", "Adventure Activities", "Cultural Immersion", "Local Experiences"],
    },
    {
      id: 4,
      title: "Luxury Honeymoon Escape",
      description: "Romantic getaway to the world's most beautiful destinations with premium accommodations.",
      image: "/placeholder.svg?height=300&width=400&text=Honeymoon+Escape",
      duration: "12 Days / 11 Nights",
      groupSize: "2 people",
      rating: 5.0,
      category: "Luxury",
      highlights: ["Private Experiences", "5-Star Resorts", "Romantic Dinners", "Spa Treatments"],
    },
    {
      id: 5,
      title: "Family Fun Adventure",
      description: "Perfect family package with activities suitable for all ages and family-friendly accommodations.",
      image: "/placeholder.svg?height=300&width=400&text=Family+Adventure",
      duration: "5 Days / 4 Nights",
      groupSize: "2-12 people",
      rating: 4.6,
      category: "Family",
      highlights: ["Kid-Friendly Activities", "Family Hotels", "Educational Tours", "Entertainment"],
    },
    {
      id: 6,
      title: "Spiritual Journey Package",
      description:
        "Meaningful spiritual experiences visiting sacred sites and participating in traditional ceremonies.",
      image: "/placeholder.svg?height=300&width=400&text=Spiritual+Journey",
      duration: "8 Days / 7 Nights",
      groupSize: "4-15 people",
      rating: 4.8,
      category: "Spiritual",
      highlights: ["Sacred Sites", "Meditation Sessions", "Cultural Learning", "Peaceful Settings"],
    },
  ]

  const categories = ["All", "Cultural", "Adventure", "Luxury", "Family", "Spiritual"]

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=400&width=1920&text=Travel+Packages+Header"
            alt="Travel Packages Header"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Travel Packages</h1>
          <p className="text-xl">Complete travel experiences designed for unforgettable journeys</p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#002D62] mb-4">Our Travel Packages</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Carefully curated travel packages that combine the best destinations, accommodations, and experiences for
              maximum value and enjoyment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
                <div className="relative">
                  <Image
                    src={pkg.image || "/placeholder.svg"}
                    alt={pkg.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#D7AF6A] text-[#002D62] px-3 py-1 rounded-full text-sm font-semibold">
                      {pkg.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center bg-white/90 px-2 py-1 rounded">
                      <Star className="text-[#D7AF6A] fill-current w-4 h-4 mr-1" />
                      <span className="text-sm font-semibold">{pkg.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#002D62] mb-3">{pkg.title}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {pkg.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {pkg.groupSize}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-[#002D62] mb-2">Package Highlights:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {pkg.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-[#D7AF6A] rounded-full mr-2"></span>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-end mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Award className="w-4 h-4 mr-1" />
                      <span>Premium</span>
                    </div>
                  </div>

                  <Link
                    href={`/packages/${pkg.id}`}
                    className="bg-[#D7AF6A] text-[#002D62] px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[#002D62] hover:text-white hover:shadow-lg transform hover:-translate-y-1 w-full text-center block"
                  >
                    View Package <ArrowRight className="inline ml-1" size={16} />
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
