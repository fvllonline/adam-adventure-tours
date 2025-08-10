import { Mail, MapPin, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#002D62] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[#D7AF6A] rounded-lg flex items-center justify-center">
                <span className="text-[#002D62] font-bold text-xl">A</span>
              </div>
              <span className="text-white font-bold text-lg">Adam Adventure Tours</span>
            </div>
            <p className="text-gray-300 mb-4">
              Discover the world with premium travel experiences and unforgettable adventures.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#D7AF6A] font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MessageCircle className="text-[#D7AF6A]" size={20} />
                <a href="https://wa.me/971551316730" className="hover:text-[#D7AF6A] transition-colors">
                  +971 55 13 16 730
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-[#D7AF6A]" size={20} />
                <a href="mailto:Youness@adamadventuretours.com" className="hover:text-[#D7AF6A] transition-colors">
                  Youness@adamadventuretours.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-[#D7AF6A] mt-1" size={20} />
                <span className="text-gray-300">
                  Building 9 Office N°20
                  <br />
                  Jebel Ali First Dubai UAE
                </span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-[#D7AF6A] font-semibold text-lg mb-4">Follow Us</h3>
            <div className="space-y-3">
              <a
                href="https://www.tiktok.com/@adamadventuretours"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#D7AF6A] transition-colors"
              >
                TikTok: @adamadventuretours
              </a>
              <a
                href="https://www.instagram.com/adamadventuretours"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#D7AF6A] transition-colors"
              >
                Instagram: @adamadventuretours
              </a>
              <a
                href="https://www.facebook.com/share/1AanxYhXJY/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#D7AF6A] transition-colors"
              >
                Facebook Page
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Adam Adventure Tours & Tourism. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
