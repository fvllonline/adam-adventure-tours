import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Flight Booking",
      description:
        "Book your flights with ease through our comprehensive flight booking service. We offer competitive rates and flexible options for domestic and international travel.",
      image: "/images/serviceflight.jpg",
      features: ["Domestic Flights", "International Flights", "Competitive Rates", "Flexible Options"],
    },
    {
      id: 2,
      title: "Hotel Booking",
      description:
        "Find and book the perfect accommodation for your stay. From luxury resorts to budget-friendly hotels, we have options for every traveler and budget.",
      image: "/images/servicehotel.jpg",
      features: ["Luxury Resorts", "Budget Hotels", "City Center Locations", "Beach Resorts"],
    },
    {
      id: 3,
      title: "Umrah",
      description:
        "Complete Umrah packages with guided spiritual journeys. We provide comprehensive services including accommodation, transportation, and religious guidance.",
      image: "/images/serviceumrah.jpg",
      features: ["Complete Packages", "Religious Guidance", "Sacred Transportation", "Spiritual Support"],
    },
    {
      id: 4,
      title: "Visa Issuance",
      description:
        "Professional visa processing services for all destinations. We handle all documentation and ensure smooth visa approval for your travel needs.",
      image: "/images/servicevisa.jpg",
      features: ["Tourist Visas", "Business Visas", "Document Processing", "Fast Track Service"],
    },
    {
      id: 5,
      title: "Travel Packages",
      description:
        "Customized travel packages tailored to your preferences. Complete vacation solutions including flights, hotels, tours, and activities all in one package.",
      image: "/images/servicetravel.png",
      features: ["Custom Packages", "All-Inclusive Options", "Group Discounts", "Flexible Itineraries"],
    },
    {
      id: 6,
      title: "Tours & Activities",
      description:
        "Discover amazing destinations with our curated tours and activities. From cultural experiences to adventure tours, we offer unforgettable experiences.",
      image: "/images/servicetours.jpg",
      features: ["Cultural Tours", "Adventure Activities", "City Sightseeing", "Desert Safaris"],
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
