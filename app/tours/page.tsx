import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star, Clock, Users } from "lucide-react"

export default function ToursPage() {
  const tours = [
    {
      id: 1,
      title: "Dubai City Explorer",
      description: "Discover the modern marvels and traditional charm of Dubai in this comprehensive city tour.",
      image: "/placeholder.svg?height=300&width=400&text=Dubai+City+Explorer",
      price: "From $299",
      duration: "8 hours",
      groupSize: "2-15 people",
      rating: 4.9,
      highlights: ["Burj Khalifa", "Dubai Mall", "Gold Souk", "Dubai Creek"],
    },
    {
      id: 2,
      title: "Desert Safari Adventure",
      description: "Experience the magic of the Arabian desert with camel rides, dune bashing, and traditional BBQ.",
      image: "/placeholder.svg?height=300&width=400&text=Desert+Safari",
      price: "From $149",
      duration: "6 hours",
      groupSize: "4-20 people",
      rating: 4.8,
      highlights: ["Dune Bashing", "Camel Riding", "BBQ Dinner", "Cultural Show"],
    },
    {
      id: 3,
      title: "Mountain Hiking Expedition",
      description: "Challenge yourself with breathtaking mountain trails and spectacular panoramic views.",
      image: "/placeholder.svg?height=300&width=400&text=Mountain+Hiking",
      price: "From $199",
      duration: "Full day",
      groupSize: "4-12 people",
      rating: 4.7,
      highlights: ["Scenic Trails", "Mountain Peaks", "Wildlife Spotting", "Photography"],
    },
    {
      id: 4,
      title: "Island Hopping Tour",
      description: "Explore pristine islands and crystal-clear waters in this tropical paradise adventure.",
      image: "/placeholder.svg?height=300&width=400&text=Island+Hopping",
      price: "From $399",
      duration: "2 days",
      groupSize: "6-16 people",
      rating: 4.9,
      highlights: ["Multiple Islands", "Snorkeling", "Beach Time", "Local Cuisine"],
    },
    {
      id: 5,
      title: "Cultural Heritage Walk",
      description: "Immerse yourself in local history and culture with guided walks through historic districts.",
      image: "/placeholder.svg?height=300&width=400&text=Cultural+Heritage",
      price: "From $89",
      duration: "4 hours",
      groupSize: "2-10 people",
      rating: 4.6,
      highlights: ["Historic Sites", "Local Markets", "Traditional Crafts", "Cultural Stories"],
    },
    {
      id: 6,
      title: "Luxury Yacht Experience",
      description: "Sail in style aboard a luxury yacht with premium amenities and stunning coastal views.",
      image: "/placeholder.svg?height=300&width=400&text=Luxury+Yacht",
      price: "From $599",
      duration: "Half day",
      groupSize: "2-12 people",
      rating: 5.0,
      highlights: ["Luxury Yacht", "Gourmet Dining", "Water Activities", "Sunset Views"],
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
