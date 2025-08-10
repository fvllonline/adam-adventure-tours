import Image from "next/image"
import { Users, Globe, Award, Heart, Shield, Clock } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="relative h-96 flex items-center justify-center">
        {/* Replace with actual about header image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=400&width=1920&text=About+Us+Header+Image"
            alt="About Us Header"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl">Discover the story behind Adam Adventure Tours & Tourism LLC</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-[#002D62] mb-6">Your Gateway to Unforgettable Experiences</h2>
              <p className="text-gray-600 text-lg mb-6">
                Welcome to Adam Adventure Tours & Tourism LLC, your gateway to unforgettable experiences in Dubai
                and the United Arab Emirates. With our deep understanding of the tourism industry and our passion
                for creating extraordinary journeys, we are your trusted partner for exceptional vacations.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                From visa processing to deep desert adventures, we offer a comprehensive range of services tailored
                to the diverse needs of our clients. Our experienced professionals are committed to providing
                personalized attention and superior quality services that exceed your expectations.
              </p>
              <p className="text-gray-600 text-lg">
                Whether you are an individual traveler, a family seeking adventure, or a corporate group looking
                for team building activities, Adam Adventure Tours transforms your dreams into reality.
              </p>
            </div>
            <div className="relative">
              {/* Replace with actual team/office image */}
              <Image
                src="/images/favicon_aatt.png"
                alt="Our Team"
                width={500}
                height={500}
                className=""
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
            <div className="text-center">
              <Users className="text-[#D7AF6A] mx-auto mb-4" size={48} />
              <div className="text-3xl font-bold text-[#002D62] mb-2">1000+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <Globe className="text-[#D7AF6A] mx-auto mb-4" size={48} />
              <div className="text-3xl font-bold text-[#002D62] mb-2">UAE</div>
              <div className="text-gray-600">Dubai Specialist</div>
            </div>
            <div className="text-center">
              <Award className="text-[#D7AF6A] mx-auto mb-4" size={48} />
              <div className="text-3xl font-bold text-[#002D62] mb-2">DMC</div>
              <div className="text-gray-600">Best DMC</div>
            </div>
            <div className="text-center">
              <Heart className="text-[#D7AF6A] mx-auto mb-4" size={48} />
              <div className="text-3xl font-bold text-[#002D62] mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <Shield className="text-[#D7AF6A] mr-4" size={40} />
                <h3 className="text-2xl font-bold text-[#002D62]">Our Mission</h3>
              </div>
              <p className="text-gray-600 text-lg">
                To design personalized journeys that meet the unique preferences of our clients, with impeccable
                service and particular attention to detail. We are committed to providing exceptional experiences
                that create lasting memories and foster cultural understanding.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <Clock className="text-[#D7AF6A] mr-4" size={40} />
                <h3 className="text-2xl font-bold text-[#002D62]">Our Vision</h3>
              </div>
              <p className="text-gray-600 text-lg">
                To become the preferred choice for travelers seeking exceptional adventures in Dubai, recognized
                as the best DMC through our innovative and client-centered approach. Offering unique experiences
                that blend adventure, culture and luxury while promoting sustainable tourism.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
