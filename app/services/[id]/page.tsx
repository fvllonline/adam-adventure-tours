import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Phone, Mail, MessageCircle, MapPin } from "lucide-react"

const services = {
  1: {
    title: "Flight Booking",
    description:
      "Book your flights with ease through our comprehensive flight booking service. We offer competitive rates and flexible options for domestic and international travel with 24/7 support.",
    image: "/images/serviceflight.jpg",
    features: ["Domestic Flights", "International Flights", "Competitive Rates", "Flexible Options"],
    fullDescription: `Our flight booking service provides you with access to the best flight deals and options worldwide. We work with major airlines and travel partners to ensure you get competitive rates and flexible booking options that suit your travel needs.

    Whether you're planning a business trip, family vacation, or solo adventure, our experienced travel consultants will help you find the perfect flights. We handle everything from simple one-way tickets to complex multi-city itineraries with multiple stops.

    Our advanced booking system allows us to compare prices across multiple airlines and find the best deals available. We also provide flexible booking options, including refundable tickets, seat upgrades, and special meal requests to make your journey as comfortable as possible.`,
    included: [
      "Access to competitive flight rates worldwide",
      "Flexible booking and cancellation policies",
      "24/7 customer support and assistance",
      "Seat selection and upgrade options",
      "Special meal and accessibility requests",
      "Travel insurance options",
    ],
  },
  2: {
    title: "Hotel Booking",
    description:
      "Find and book the perfect accommodation for your stay. From luxury resorts to budget-friendly hotels, we have options for every traveler and budget with guaranteed best rates.",
    image: "/images/servicehotel.jpg",
    features: ["Luxury Resorts", "Budget Hotels", "City Center Locations", "Beach Resorts"],
    fullDescription: `Our hotel booking service provides access to thousands of accommodations worldwide, from luxury 5-star resorts to comfortable budget hotels. We work directly with hotel partners to secure the best rates and exclusive deals for our clients.

    Whether you're looking for a beachfront resort, a city center business hotel, or a cozy boutique property, our travel specialists will help you find the perfect accommodation that matches your preferences and budget. We consider factors like location, amenities, guest reviews, and special requirements.

    Our extensive network of hotel partners allows us to offer competitive rates and exclusive perks such as room upgrades, late checkout, complimentary breakfast, and spa credits. We also provide detailed information about each property to help you make informed decisions.`,
    included: [
      "Access to thousands of hotels worldwide",
      "Guaranteed best rate matching",
      "Room upgrades and special perks when available",
      "Flexible booking and cancellation policies",
      "24/7 reservation support",
      "Detailed property information and reviews",
    ],
  },
  3: {
    title: "Umrah",
    description:
      "Complete Umrah packages with guided spiritual journeys. We provide comprehensive services including accommodation, transportation, and religious guidance for a meaningful pilgrimage experience.",
    image: "/images/serviceumrah.jpg",
    features: ["Complete Packages", "Religious Guidance", "Sacred Transportation", "Spiritual Support"],
    fullDescription: `Our Umrah packages are designed to provide a spiritually enriching and hassle-free pilgrimage experience. We understand the sacred nature of this journey and ensure every aspect is handled with the utmost care and respect.

    Our comprehensive packages include flights, accommodation near the Holy Mosques, ground transportation, and experienced religious guides who will assist you throughout your spiritual journey. We offer various package options to suit different budgets and preferences.

    We work with trusted partners in Saudi Arabia to ensure high-quality services and accommodations. Our team includes experienced Umrah guides who provide religious guidance, help with rituals, and ensure you have a meaningful and comfortable pilgrimage experience.`,
    included: [
      "Round-trip flights to Saudi Arabia",
      "Accommodation near Masjid al-Haram and Masjid an-Nabawi",
      "Ground transportation between holy sites",
      "Experienced religious guide and support",
      "Visa processing assistance",
      "24/7 support during your pilgrimage",
    ],
  },
  4: {
    title: "Visa Issuance",
    description:
      "Professional visa processing services for all destinations. We handle all documentation and ensure smooth visa approval for your travel needs with expert guidance and fast processing.",
    image: "/images/servicevisa.jpg",
    features: ["Tourist Visas", "Business Visas", "Document Processing", "Fast Track Service"],
    fullDescription: `Our visa processing service takes the complexity out of visa applications. We have extensive experience with visa requirements for destinations worldwide and provide expert guidance throughout the entire process.

    Our team of visa specialists stays updated with the latest visa regulations and requirements for different countries. We handle all types of visas including tourist, business, transit, and family visit visas, ensuring your application is complete and accurate.

    We offer fast-track processing for urgent travel needs and provide regular updates on your application status. Our high success rate and efficient processing times make us the preferred choice for visa services.`,
    included: [
      "Complete visa application assistance",
      "Document review and verification",
      "Fast-track processing options",
      "Regular application status updates",
      "Expert guidance on visa requirements",
      "Support for visa interviews when required",
    ],
  },
  5: {
    title: "Travel Packages",
    description:
      "Customized travel packages tailored to your preferences. Complete vacation solutions including flights, hotels, tours, and activities all in one comprehensive package.",
    image: "/images/servicetravel.png",
    features: ["Custom Packages", "All-Inclusive Options", "Group Discounts", "Flexible Itineraries"],
    fullDescription: `Our travel packages offer complete vacation solutions that combine flights, accommodation, tours, and activities into one convenient and cost-effective package. We create customized itineraries based on your interests, budget, and travel preferences.

    Whether you're planning a romantic getaway, family vacation, adventure trip, or cultural exploration, our travel specialists will design the perfect package for you. We handle all the details so you can focus on enjoying your journey.

    Our packages include carefully selected accommodations, transportation, guided tours, and activities that showcase the best of each destination. We also offer flexible options that allow you to customize your itinerary and add or remove components as needed.`,
    included: [
      "Customized itinerary planning",
      "Flight and accommodation bookings",
      "Guided tours and activities",
      "Ground transportation arrangements",
      "24/7 travel support during your trip",
      "Flexible package modifications",
    ],
  },
  6: {
    title: "Tours & Activities",
    description:
      "Discover amazing destinations with our curated tours and activities. From cultural experiences to adventure tours, we offer unforgettable experiences for every type of traveler.",
    image: "/images/servicetours.jpg",
    features: ["Cultural Tours", "Adventure Activities", "City Sightseeing", "Desert Safaris"],
    fullDescription: `Our tours and activities showcase the best of each destination through carefully curated experiences. We offer a wide range of options from cultural immersion tours to thrilling adventure activities, ensuring there's something for every traveler.

    Our experienced local guides provide insider knowledge and authentic experiences that you won't find in guidebooks. Whether you're interested in historical sites, natural wonders, local cuisine, or adrenaline-pumping adventures, we have the perfect tour for you.

    All our tours are designed with safety, comfort, and enjoyment in mind. We use quality transportation, provide professional guides, and include all necessary equipment and entrance fees. Our small group sizes ensure personalized attention and flexibility.`,
    included: [
      "Professional local guides",
      "Quality transportation and transfers",
      "All entrance fees and permits",
      "Safety equipment when required",
      "Small group sizes for personalized experience",
      "Flexible itineraries and customization options",
    ],
  },
}

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const serviceId = Number.parseInt(params.id)
  const service = services[serviceId as keyof typeof services]

  if (!service) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#002D62] mb-4">Service Not Found</h1>
          <Link
            href="/services"
            className="inline-block bg-[#002D62] hover:bg-[#D7AF6A] text-white hover:text-[#002D62] font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            Back to Services
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
          <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">{service.title}</h1>
          <p className="text-xl max-w-2xl mx-auto">{service.description}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/services"
              className="inline-flex items-center text-[#D7AF6A] hover:text-[#002D62] transition-colors"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Services
            </Link>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <div className="whitespace-pre-line text-gray-600 text-lg leading-relaxed">{service.fullDescription}</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-[#002D62] mb-6">What's Included</h3>
              <ul className="space-y-3">
                {service.included.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-[#D7AF6A] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#002D62] mb-6">Key Features</h3>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-[#D7AF6A] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-[#002D62] mb-6 text-center">Interested in this service?</h3>
            <p className="text-gray-600 text-center mb-8">
              Contact us today to learn more about this service and get a personalized quote.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <a
                href="https://wa.me/971551316730"
                className="flex items-center justify-center space-x-2 bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition-colors"
              >
                <MessageCircle size={20} />
                <span>WhatsApp</span>
              </a>

              <a
                href="tel:+971551316730"
                className="flex items-center justify-center space-x-2 bg-[#002D62] text-white px-4 py-3 rounded-lg hover:bg-[#D7AF6A] hover:text-[#002D62] transition-colors"
              >
                <Phone size={20} />
                <span>Call Us</span>
              </a>

              <a
                href="mailto:Youness@adamadventuretours.com"
                className="flex items-center justify-center space-x-2 bg-[#D7AF6A] text-[#002D62] px-4 py-3 rounded-lg hover:bg-[#002D62] hover:text-white transition-colors"
              >
                <Mail size={20} />
                <span>Email</span>
              </a>

              <Link
                href="/contact"
                className="flex items-center justify-center space-x-2 bg-gray-600 text-white px-4 py-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <MapPin size={20} />
                <span>Visit Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
