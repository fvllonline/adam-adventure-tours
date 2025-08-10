import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Phone, Mail, MessageCircle, MapPin } from "lucide-react"

const services = {
  1: {
    title: "Adventure Tours",
    description:
      "Embark on thrilling adventures and outdoor experiences designed for the brave at heart. Our adventure tours combine excitement with safety, offering you the chance to push your limits while exploring some of the world's most spectacular destinations.",
    image: "/placeholder.svg?height=500&width=800&text=Adventure+Tours+Detail",
    features: ["Mountain Climbing", "Desert Expeditions", "Water Sports", "Wildlife Safaris"],
    fullDescription: `Our adventure tours are carefully crafted to provide you with unforgettable experiences while ensuring your safety at all times. Whether you're scaling mountain peaks, exploring vast deserts, or diving into crystal-clear waters, our expert guides will be with you every step of the way.

    We offer a wide range of adventure activities suitable for different skill levels, from beginner-friendly excursions to challenging expeditions for experienced adventurers. All our tours include professional equipment, safety briefings, and comprehensive insurance coverage.

    Our adventure packages can be customized to match your preferences and fitness level. We work with certified local guides who have extensive knowledge of the terrain and can provide insights into the local culture and environment.`,
    included: [
      "Professional guide and safety equipment",
      "All necessary permits and entrance fees",
      "Transportation to and from adventure sites",
      "Emergency medical support",
      "Comprehensive insurance coverage",
      "Photography service for memorable moments",
    ],
  },
  2: {
    title: "Cultural Experiences",
    description:
      "Immerse yourself in authentic local cultures and traditions around the world. Our cultural experiences go beyond typical tourist attractions to provide genuine connections with local communities and their way of life.",
    image: "/placeholder.svg?height=500&width=800&text=Cultural+Experiences+Detail",
    features: ["Local Festivals", "Traditional Crafts", "Culinary Tours", "Historical Sites"],
    fullDescription: `Our cultural experience programs are designed to provide authentic interactions with local communities, allowing you to gain deep insights into different ways of life, traditions, and customs.

    We partner with local communities to ensure that our cultural tours are respectful, sustainable, and beneficial to the local population. You'll have opportunities to participate in traditional ceremonies, learn local crafts, taste authentic cuisine, and visit historical sites with knowledgeable local guides.

    Each cultural experience is carefully curated to provide educational value while being enjoyable and memorable. We believe that travel should be transformative, and our cultural programs are designed to broaden your perspective and create lasting connections.`,
    included: [
      "Local community guide and cultural interpreter",
      "Participation in traditional activities and ceremonies",
      "Authentic local meals and cooking demonstrations",
      "Visits to historical and cultural sites",
      "Traditional craft workshops",
      "Cultural performance shows",
    ],
  },
  3: {
    title: "Luxury Travel",
    description:
      "Experience the pinnacle of luxury travel with our premium services. From world-class accommodations to exclusive access to the finest destinations, we ensure every detail of your journey exceeds expectations.",
    image: "/placeholder.svg?height=500&width=800&text=Luxury+Travel+Detail",
    features: ["5-Star Hotels", "Private Jets", "Exclusive Access", "Personal Concierge"],
    fullDescription: `Our luxury travel services are designed for discerning travelers who appreciate the finest things in life. We provide access to exclusive destinations, premium accommodations, and personalized services that create truly extraordinary experiences.

    Every aspect of your luxury journey is meticulously planned and executed by our team of luxury travel specialists. From private jet transfers to exclusive dining experiences, from personal shopping assistants to private museum tours, we ensure that every moment of your trip is exceptional.

    We work with the world's finest hotels, resorts, and service providers to offer you unparalleled comfort and exclusivity. Our luxury packages can be completely customized to your preferences and desires.`,
    included: [
      "Luxury accommodation in 5-star properties",
      "Private transportation and transfers",
      "Personal concierge service 24/7",
      "Exclusive access to private events and venues",
      "Fine dining reservations at top restaurants",
      "VIP treatment at all destinations",
    ],
  },
  4: {
    title: "Group Tours",
    description:
      "Join our expertly organized group tours with professional guides and carefully planned itineraries. Perfect for families, friends, or corporate groups looking for hassle-free travel experiences.",
    image: "/placeholder.svg?height=500&width=800&text=Group+Tours+Detail",
    features: ["Expert Guides", "Planned Itineraries", "Group Discounts", "Transportation"],
    fullDescription: `Our group tours offer the perfect balance of structured itineraries and flexibility, allowing you to explore destinations with like-minded travelers while enjoying the expertise of professional guides.

    We organize groups of various sizes, from intimate small groups to larger parties, ensuring that each tour maintains a personal touch while benefiting from group dynamics and cost savings. Our experienced tour leaders handle all logistics, allowing you to focus on enjoying your journey.

    All our group tours include comprehensive itineraries that cover must-see attractions, cultural experiences, and hidden gems that only locals know about. We also build in free time for personal exploration and relaxation.`,
    included: [
      "Professional tour guide throughout the journey",
      "All transportation and transfers",
      "Accommodation in quality hotels",
      "Daily breakfast and selected meals",
      "Entrance fees to attractions and sites",
      "Group activities and entertainment",
    ],
  },
  5: {
    title: "Business Travel",
    description:
      "Professional travel services tailored for corporate clients with a focus on efficiency, comfort, and cost-effectiveness. We understand the unique needs of business travelers.",
    image: "/placeholder.svg?height=500&width=800&text=Business+Travel+Detail",
    features: ["Corporate Rates", "24/7 Support", "Expense Management", "Travel Policy"],
    fullDescription: `Our business travel services are designed to meet the specific needs of corporate travelers and companies. We provide efficient, reliable, and cost-effective travel solutions that allow business professionals to focus on their work while we handle all travel arrangements.

    We offer comprehensive travel management services including booking, expense tracking, policy compliance, and 24/7 support. Our corporate rates and partnerships with airlines and hotels ensure that you get the best value for your travel budget.

    Our dedicated business travel consultants understand the urgency and precision required for corporate travel and are available around the clock to assist with any changes or emergencies.`,
    included: [
      "Dedicated corporate travel consultant",
      "24/7 emergency support and assistance",
      "Flexible booking and change policies",
      "Comprehensive expense reporting",
      "Corporate rates and negotiated discounts",
      "Travel policy compliance monitoring",
    ],
  },
  6: {
    title: "Honeymoon Packages",
    description:
      "Romantic getaways designed for couples celebrating their special moments. Our honeymoon packages feature intimate settings, couple activities, and luxurious amenities.",
    image: "/placeholder.svg?height=500&width=800&text=Honeymoon+Packages+Detail",
    features: ["Romantic Settings", "Couple Activities", "Special Amenities", "Privacy"],
    fullDescription: `Our honeymoon packages are specially crafted to celebrate love and create unforgettable memories for newlyweds. We understand that your honeymoon is a once-in-a-lifetime experience, and we ensure every detail is perfect.

    From romantic beachfront resorts to cozy mountain retreats, we offer a variety of destinations and accommodations that provide the perfect setting for romance. Our packages include special amenities like couples' spa treatments, private dinners, and romantic excursions.

    We work closely with couples to understand their preferences and create personalized itineraries that reflect their unique love story. Every honeymoon package includes special touches that make the experience truly magical.`,
    included: [
      "Romantic accommodation with special amenities",
      "Couples' spa treatments and wellness activities",
      "Private romantic dinners and experiences",
      "Champagne and special welcome gifts",
      "Photography sessions to capture memories",
      "Flexible itinerary with privacy options",
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
