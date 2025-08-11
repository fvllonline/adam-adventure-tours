import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star, Clock, Users } from "lucide-react"
import { tours as toursData } from '@/data/tours'

// Function to convert tour title to URL slug
function titleToSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim()
    .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
}

export default function ToursPage() {
  // Use only tours with complete data from data/tours.ts
  const tours = toursData.map(tour => ({
    id: tour.id,
    title: tour.title,
    description: tour.description,
    image: tour.image,
    duration: tour.duration,
    groupSize: tour.groupSize,
    rating: tour.rating,
    highlights: tour.tags || []
  }))

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="relative h-96 flex items-center justify-center">
        <Image
          src="/images/tourbg.jpg"
          alt="Dubai Tours"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl font-bold mb-4">Our Tours</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover the best of Dubai with our carefully curated selection of tours and experiences
          </p>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <div key={tour.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover"
                  />

                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#002D62] mb-2">{tour.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{tour.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{tour.groupSize}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                      <span>{tour.rating}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {tour.highlights.slice(0, 3).map((highlight, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <Link 
                    href={`/tours/${titleToSlug(tour.title)}`}
                    className="inline-flex items-center text-[#D7AF6A] hover:text-[#002D62] font-semibold transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
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
