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
          <p className="text-xl">Discover the story behind Adam Adventure Tours & Tourism</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-[#002D62] mb-6">Your Gateway to Extraordinary Adventures</h2>
              <p className="text-gray-600 text-lg mb-6">
                Adam Adventure Tours & Tourism was founded with a simple yet powerful vision: to make the world more
                accessible and to create travel experiences that inspire, educate, and transform. Based in the heart of
                Dubai, UAE, we have been crafting exceptional journeys for travelers from around the globe.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Our team of passionate travel experts brings together decades of experience in the tourism industry. We
                understand that every traveler is unique, and we take pride in creating personalized itineraries that
                match your interests, budget, and travel style.
              </p>
              <p className="text-gray-600 text-lg">
                From thrilling desert safaris to luxurious city tours, from cultural immersions to adventure
                expeditions, we offer a comprehensive range of services designed to make your travel dreams come true.
              </p>
            </div>
            <div className="relative">
              {/* Replace with actual team/office image */}
              <Image
                src="/placeholder.svg?height=500&width=600&text=Our+Team+Image"
                alt="Our Team"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
            <div className="text-center">
              <Users className="text-[#D7AF6A] mx-auto mb-4" size={48} />
              <div className="text-3xl font-bold text-[#002D62] mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <Globe className="text-[#D7AF6A] mx-auto mb-4" size={48} />
              <div className="text-3xl font-bold text-[#002D62] mb-2">50+</div>
              <div className="text-gray-600">Destinations</div>
            </div>
            <div className="text-center">
              <Award className="text-[#D7AF6A] mx-auto mb-4" size={48} />
              <div className="text-3xl font-bold text-[#002D62] mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <Heart className="text-[#D7AF6A] mx-auto mb-4" size={48} />
              <div className="text-3xl font-bold text-[#002D62] mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
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
                To provide exceptional travel experiences that create lasting memories, foster cultural understanding,
                and inspire a love for exploration. We are committed to delivering personalized service, ensuring
                safety, and promoting sustainable tourism practices.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <Clock className="text-[#D7AF6A] mr-4" size={40} />
                <h3 className="text-2xl font-bold text-[#002D62]">Our Vision</h3>
              </div>
              <p className="text-gray-600 text-lg">
                To become the leading travel agency in the region, recognized for our innovation, reliability, and
                commitment to excellence. We envision a world where travel brings people together, breaks down barriers,
                and creates a more connected global community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
