import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Custom Tours & Activities",
      description:
        "Discover the best of Dubai with carefully crafted tours: iconic landmarks, luxury experiences, desert adventures and local culture immersion.",
      image: "/placeholder.svg?height=300&width=400&text=Custom+Tours",
      features: ["Iconic Landmarks", "Luxury Experiences", "Desert Adventures", "Local Culture"],
    },
    {
      id: 2,
      title: "Adventure Experiences",
      description:
        "Dune bashing, desert safaris, water sports, skydiving, hot air balloon rides... a wide choice for thrill-seekers and adventure enthusiasts.",
      image: "/placeholder.svg?height=300&width=400&text=Desert+Adventures",
      features: ["Dune Bashing", "Water Sports", "Skydiving", "Hot Air Balloon"],
    },
    {
      id: 3,
      title: "Cultural Immersion",
      description:
        "Explore traditional souks, historical sites, local traditions and authentic cuisine for a true immersion in Emirati culture.",
      image: "/placeholder.svg?height=300&width=400&text=Local+Culture",
      features: ["Traditional Souks", "Historical Sites", "Local Traditions", "Authentic Cuisine"],
    },
    {
      id: 4,
      title: "Theme Park Excursions",
      description:
        "Dubai Parks and Resorts, Underwater Aquarium and Zoo, and much more for all ages. Perfect for families and groups.",
      image: "/placeholder.svg?height=300&width=400&text=Theme+Parks",
      features: ["Dubai Parks", "Underwater Aquarium", "Family Activities", "All Ages"],
    },
    {
      id: 5,
      title: "Luxury & VIP Experiences",
      description:
        "Private yachts, helicopter flights, bespoke dining and personalized shopping for an exclusive and unforgettable experience.",
      image: "/placeholder.svg?height=300&width=400&text=Luxury+VIP",
      features: ["Private Yachts", "Helicopter Flights", "Bespoke Dining", "VIP Shopping"],
    },
    {
      id: 6,
      title: "Visa Services & Assistance",
      description:
        "From visa processing to comprehensive assistance services, we facilitate all administrative aspects of your journey.",
      image: "/placeholder.svg?height=300&width=400&text=Visa+Services",
      features: ["Visa Processing", "24/7 Assistance", "Administrative Services", "Multilingual Support"],
    },
  ]

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=400&width=1920&text=Services+Header+Image"
            alt="Services Header"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl">Comprehensive travel solutions for every type of traveler</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#002D62] mb-4">What We Offer</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From adventure tours to luxury experiences, we provide a comprehensive range of services to make
              your journey to Dubai and the UAE absolutely unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#002D62] mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-[#002D62] mb-2">Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-[#D7AF6A] rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/services/${service.id}`}
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
