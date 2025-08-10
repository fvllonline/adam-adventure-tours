import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Star, Users, Globe, Award } from "lucide-react"

export default function HomePage() {
  const services = [
    {
      id: 1,
      title: "Custom Tours & Activities",
      description: "Discover the best of Dubai with carefully crafted tours: iconic landmarks, luxury experiences, and local culture immersion.",
      image: "/placeholder.svg?height=300&width=400&text=Custom+Tours",
    },
    {
      id: 2,
      title: "Adventure Experiences",
      description: "Dune bashing, desert safaris, water sports, skydiving, hot air balloon rides... for thrill-seekers and adventure lovers.",
      image: "/placeholder.svg?height=300&width=400&text=Desert+Adventures",
    },
    {
      id: 3,
      title: "Cultural Immersion",
      description: "Explore traditional souks, historical sites, local traditions, and authentic Emirati cuisine for a true cultural experience.",
      image: "/placeholder.svg?height=300&width=400&text=Local+Culture",
    },
    {
      id: 4,
      title: "Luxury & VIP Experiences",
      description: "Private yachts, helicopter flights, bespoke dining, and personalized shopping for an exclusive and unforgettable experience.",
      image: "/placeholder.svg?height=300&width=400&text=Luxury+VIP",
    },
  ]

  const tours = [
    {
      id: 1,
      title: "Desert Safari Adventure",
      description: "Experience the magic of the Arabian desert with dune bashing, camel rides, and traditional BBQ dinner.",
      image: "/placeholder.svg?height=300&width=400&text=Desert+Safari",
      price: "From 299 AED",
    },
    {
      id: 2,
      title: "Modern Dubai City Tour",
      description: "Discover Dubai's modern marvels: Burj Khalifa, Dubai Mall, and iconic landmarks of the city.",
      image: "/placeholder.svg?height=300&width=400&text=Modern+Dubai",
      price: "From 199 AED",
    },
    {
      id: 3,
      title: "Traditional Dhow Cruise",
      description: "Sail along Dubai Creek or Marina aboard a traditional dhow with buffet dinner and entertainment.",
      image: "/placeholder.svg?height=300&width=400&text=Dhow+Cruise",
      price: "From 149 AED",
    },
    {
      id: 4,
      title: "Theme Parks Experience",
      description: "Explore Dubai Parks and Resorts, Underwater Aquarium and Zoo - perfect for the whole family.",
      image: "/placeholder.svg?height=300&width=400&text=Theme+Parks",
      price: "From 399 AED",
    },
  ]

  const packages = [
    {
      id: 1,
      title: "UAE Discovery - 7 Days",
      description: "Complete Emirates experience including Dubai, Abu Dhabi, and must-see attractions across the UAE.",
      image: "/placeholder.svg?height=300&width=400&text=UAE+Discovery",
      price: "From 4,999 AED",
      duration: "7 Days",
    },
    {
      id: 2,
      title: "Dubai Luxury Adventure",
      description: "Premium package with private yacht, helicopter tours, and exclusive VIP experiences.",
      image: "/placeholder.svg?height=300&width=400&text=Dubai+Luxury",
      price: "From 8,999 AED",
      duration: "5 Days",
    },
    {
      id: 3,
      title: "Family & Adventure Package",
      description: "Family-friendly package with theme parks, safaris, and activities suitable for all ages.",
      image: "/placeholder.svg?height=300&width=400&text=Family+Adventure",
      price: "From 3,499 AED",
      duration: "4 Days",
    },
    {
      id: 4,
      title: "Romantic Honeymoon Escape",
      description: "Romantic getaway with private dinners, spa treatments, and intimate experiences in Dubai.",
      image: "/placeholder.svg?height=300&width=400&text=Honeymoon+Escape",
      price: "From 6,999 AED",
      duration: "6 Days",
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Gateway to Unforgettable Experiences in <span className="text-[#D7AF6A]">Dubai & UAE</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Adam Adventure Tours & Tourism - Extraordinary journeys that transform your dreams into reality
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
              <h2 className="text-4xl font-bold text-[#002D62] mb-6">Adam Adventure Tours & Tourism</h2>
              <p className="text-gray-600 text-lg mb-6">
                Your gateway to unforgettable experiences in Dubai and the United Arab Emirates. With our deep
                understanding of the tourism industry and our passion for creating extraordinary journeys, we are
                your trusted partner for exceptional vacations.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                From visa processing to deep desert adventures, we offer a comprehensive range of services tailored
                to the diverse needs of our clients. Our experienced professionals are committed to providing
                personalized attention and superior quality services that exceed your expectations.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <Users className="text-[#D7AF6A] mx-auto mb-2" size={40} />
                  <div className="text-2xl font-bold text-[#002D62]">1000+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <Globe className="text-[#D7AF6A] mx-auto mb-2" size={40} />
                  <div className="text-2xl font-bold text-[#002D62]">UAE</div>
                  <div className="text-gray-600">Dubai Specialist</div>
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
                src="/images/favicon_aatt.png"
                alt="About Us"
                width={500}
                height={500}
                className=""
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
