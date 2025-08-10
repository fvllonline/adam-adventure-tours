import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Adventure Tours",
      description:
        "Thrilling adventures and outdoor experiences for the brave at heart. From mountain climbing to desert expeditions, we offer adrenaline-pumping activities.",
      image: "/placeholder.svg?height=300&width=400&text=Adventure+Tours",
      features: ["Mountain Climbing", "Desert Expeditions", "Water Sports", "Wildlife Safaris"],
    },
    {
      id: 2,
      title: "Cultural Experiences",
      description:
        "Immerse yourself in local cultures and traditions around the world. Discover authentic experiences and connect with local communities.",
      image: "/placeholder.svg?height=300&width=400&text=Cultural+Experiences",
      features: ["Local Festivals", "Traditional Crafts", "Culinary Tours", "Historical Sites"],
    },
    {
      id: 3,
      title: "Luxury Travel",
      description:
        "Premium travel experiences with world-class accommodations and exclusive access to the finest destinations.",
      image: "/placeholder.svg?height=300&width=400&text=Luxury+Travel",
      features: ["5-Star Hotels", "Private Jets", "Exclusive Access", "Personal Concierge"],
    },
    {
      id: 4,
      title: "Group Tours",
      description:
        "Organized group tours with expert guides and planned itineraries. Perfect for families, friends, or corporate groups.",
      image: "/placeholder.svg?height=300&width=400&text=Group+Tours",
      features: ["Expert Guides", "Planned Itineraries", "Group Discounts", "Transportation"],
    },
    {
      id: 5,
      title: "Business Travel",
      description:
        "Professional travel services for corporate clients with focus on efficiency, comfort, and cost-effectiveness.",
      image: "/placeholder.svg?height=300&width=400&text=Business+Travel",
      features: ["Corporate Rates", "24/7 Support", "Expense Management", "Travel Policy"],
    },
    {
      id: 6,
      title: "Honeymoon Packages",
      description:
        "Romantic getaways designed for couples celebrating their special moments with intimate and luxurious experiences.",
      image: "/placeholder.svg?height=300&width=400&text=Honeymoon+Packages",
      features: ["Romantic Settings", "Couple Activities", "Special Amenities", "Privacy"],
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
              From adventure tours to luxury travel, we provide a comprehensive range of services to make your journey
              unforgettable.
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
