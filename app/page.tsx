import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Star, Users, Globe, Award } from "lucide-react"

export default function HomePage() {
  const services = [
    {
      id: 1,
      title: "Adventure Tours",
      description: "Thrilling adventures and outdoor experiences for the brave at heart.",
      image: "/placeholder.svg?height=300&width=400&text=Adventure+Tours",
    },
    {
      id: 2,
      title: "Cultural Experiences",
      description: "Immerse yourself in local cultures and traditions around the world.",
      image: "/placeholder.svg?height=300&width=400&text=Cultural+Experiences",
    },
    {
      id: 3,
      title: "Luxury Travel",
      description: "Premium travel experiences with world-class accommodations.",
      image: "/placeholder.svg?height=300&width=400&text=Luxury+Travel",
    },
    {
      id: 4,
      title: "Group Tours",
      description: "Organized group tours with expert guides and planned itineraries.",
      image: "/placeholder.svg?height=300&width=400&text=Group+Tours",
    },
  ]

  const tours = [
    {
      id: 1,
      title: "Dubai City Explorer",
      description: "Discover the modern marvels and traditional charm of Dubai.",
      image: "/placeholder.svg?height=300&width=400&text=Dubai+City+Explorer",
      price: "From $299",
    },
    {
      id: 2,
      title: "Desert Safari Adventure",
      description: "Experience the magic of the Arabian desert with camel rides and BBQ.",
      image: "/placeholder.svg?height=300&width=400&text=Desert+Safari",
      price: "From $149",
    },
    {
      id: 3,
      title: "Mountain Hiking Expedition",
      description: "Challenge yourself with breathtaking mountain trails and views.",
      image: "/placeholder.svg?height=300&width=400&text=Mountain+Hiking",
      price: "From $199",
    },
    {
      id: 4,
      title: "Island Hopping Tour",
      description: "Explore pristine islands and crystal-clear waters.",
      image: "/placeholder.svg?height=300&width=400&text=Island+Hopping",
      price: "From $399",
    },
  ]

  const packages = [
    {
      id: 1,
      title: "7-Day UAE Discovery",
      description: "Complete UAE experience including Dubai, Abu Dhabi, and more.",
      image: "/placeholder.svg?height=300&width=400&text=UAE+Discovery",
      price: "From $1,299",
      duration: "7 Days",
    },
    {
      id: 2,
      title: "European Grand Tour",
      description: "Visit multiple European capitals in one amazing journey.",
      image: "/placeholder.svg?height=300&width=400&text=European+Tour",
      price: "From $2,499",
      duration: "14 Days",
    },
    {
      id: 3,
      title: "Asian Adventure Package",
      description: "Explore the diverse cultures and landscapes of Asia.",
      image: "/placeholder.svg?height=300&width=400&text=Asian+Adventure",
      price: "From $1,899",
      duration: "10 Days",
    },
    {
      id: 4,
      title: "Luxury Honeymoon Escape",
      description: "Romantic getaway to the world's most beautiful destinations.",
      image: "/placeholder.svg?height=300&width=400&text=Honeymoon+Escape",
      price: "From $3,299",
      duration: "12 Days",
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Hero background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/herobg.jpg"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Discover the World with <span className="text-[#D7AF6A]">Adam Adventure Tours</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Premium travel experiences and unforgettable adventures await you
          </p>
          <Link
            href="/contact"
            className="bg-[#D7AF6A] text-[#002D62] px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-[#002D62] hover:text-white hover:shadow-lg transform hover:-translate-y-1 text-lg inline-block"
          >
            Book Now
            <ArrowRight className="inline ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#002D62] mb-6">About Adam Adventure Tours</h2>
              <p className="text-gray-600 text-lg mb-6">
                With years of experience in the travel industry, we specialize in creating extraordinary travel
                experiences that go beyond the ordinary. Our team of expert travel consultants is dedicated to crafting
                personalized journeys that match your dreams and exceed your expectations.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <Users className="text-[#D7AF6A] mx-auto mb-2" size={40} />
                  <div className="text-2xl font-bold text-[#002D62]">500+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <Globe className="text-[#D7AF6A] mx-auto mb-2" size={40} />
                  <div className="text-2xl font-bold text-[#002D62]">50+</div>
                  <div className="text-gray-600">Destinations</div>
                </div>
              </div>
              <Link
                href="/about"
                className="border-2 border-[#D7AF6A] text-[#D7AF6A] px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[#D7AF6A] hover:text-[#002D62]"
              >
                Learn More
              </Link>
            </div>
            <div className="relative">
              {/* Replace with actual about image */}
              <Image
                src="/placeholder.svg?height=500&width=600&text=About+Us+Image"
                alt="About Us"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#002D62] mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We offer a comprehensive range of travel services to make your journey seamless and memorable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <Link
                    href={`/services/${service.id}`}
                    className="text-[#D7AF6A] font-semibold hover:text-[#002D62] transition-colors"
                  >
                    View Details <ArrowRight className="inline ml-1" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="bg-[#D7AF6A] text-[#002D62] px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[#002D62] hover:text-white hover:shadow-lg transform hover:-translate-y-1"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Tours Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#002D62] mb-4">Popular Tours</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our most popular tours and activities designed to create unforgettable memories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <div className="flex items-center mb-2">
                    <Star className="text-[#D7AF6A] fill-current" size={16} />
                    <Star className="text-[#D7AF6A] fill-current" size={16} />
                    <Star className="text-[#D7AF6A] fill-current" size={16} />
                    <Star className="text-[#D7AF6A] fill-current" size={16} />
                    <Star className="text-[#D7AF6A] fill-current" size={16} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#002D62] mb-3">{tour.title}</h3>
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#D7AF6A] font-bold text-lg">{tour.price}</span>
                    <Link
                      href={`/tours/${tour.id}`}
                      className="text-[#002D62] font-semibold hover:text-[#D7AF6A] transition-colors"
                    >
                      View Details <ArrowRight className="inline ml-1" size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/tours"
              className="bg-[#D7AF6A] text-[#002D62] px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[#002D62] hover:text-white hover:shadow-lg transform hover:-translate-y-1"
            >
              View All Tours
            </Link>
          </div>
        </div>
      </section>

      {/* Travel Packages Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#002D62] mb-4">Travel Packages</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Complete travel packages designed to give you the best value and experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
                <Image
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-[#D7AF6A] text-[#002D62] px-2 py-1 rounded text-sm font-semibold">
                      {pkg.duration}
                    </span>
                    <div className="flex items-center">
                      <Award className="text-[#D7AF6A]" size={16} />
                      <span className="text-sm text-gray-600 ml-1">Premium</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#002D62] mb-3">{pkg.title}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#D7AF6A] font-bold text-lg">{pkg.price}</span>
                    <Link
                      href={`/packages/${pkg.id}`}
                      className="text-[#002D62] font-semibold hover:text-[#D7AF6A] transition-colors"
                    >
                      View Details <ArrowRight className="inline ml-1" size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/packages"
              className="bg-[#D7AF6A] text-[#002D62] px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[#002D62] hover:text-white hover:shadow-lg transform hover:-translate-y-1"
            >
              View All Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
