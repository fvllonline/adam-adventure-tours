"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You can integrate with your backend or email service here
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=400&width=1920&text=Contact+Us+Header"
            alt="Contact Us Header"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">Get in touch with our travel experts to plan your perfect journey</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#002D62] mb-6">Send us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our travel experts will get back to you within 24 hours to help plan your
                perfect adventure.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="w-full"
                      placeholder="Enter your first name"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="w-full"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="service">Service Inquiry</SelectItem>
                      <SelectItem value="tours">Tours Information</SelectItem>
                      <SelectItem value="packages">Travel Packages</SelectItem>
                      <SelectItem value="general">General Question</SelectItem>
                      <SelectItem value="booking">Booking Assistance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="w-full h-32"
                    placeholder="Tell us about your travel plans, questions, or how we can help you..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#D7AF6A] text-[#002D62] px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[#002D62] hover:text-white hover:shadow-lg transform hover:-translate-y-1"
                >
                  Send Message
                  <Send className="ml-2" size={16} />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#002D62] mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Ready to start your adventure? Contact us through any of the following methods. Our team is available to
                assist you with all your travel needs.
              </p>

              <div className="space-y-6">
                {/* WhatsApp */}
                <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                    <p className="text-gray-600 mb-2">Quick responses and instant communication</p>
                    <a
                      href="https://wa.me/971551316730"
                      className="text-green-600 hover:text-green-700 font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +971 55 13 16 730
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-[#002D62] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600 mb-2">Speak directly with our travel experts</p>
                    <a href="tel:+971551316730" className="text-[#002D62] hover:text-[#D7AF6A] font-medium">
                      +971 55 13 16 730
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-lg">
                  <div className="w-12 h-12 bg-[#D7AF6A] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#002D62]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600 mb-2">Detailed inquiries and documentation</p>
                    <a
                      href="mailto:Youness@adamadventuretours.com"
                      className="text-[#D7AF6A] hover:text-[#002D62] font-medium"
                    >
                      Youness@adamadventuretours.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Visit Our Office</h3>
                    <p className="text-gray-600 mb-2">Meet us in person for personalized service</p>
                    <address className="text-gray-700 not-italic">
                      Building 9 Office N°20
                      <br />
                      Jebel Ali First
                      <br />
                      Dubai, UAE
                    </address>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-[#002D62] mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.tiktok.com/@adamadventuretours"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
                  >
                    <span className="text-sm font-bold">TT</span>
                  </a>
                  <a
                    href="https://www.instagram.com/adamadventuretours"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white hover:from-purple-600 hover:to-pink-600 transition-colors"
                  >
                    <span className="text-sm font-bold">IG</span>
                  </a>
                  <a
                    href="https://www.facebook.com/share/1AanxYhXJY/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  >
                    <span className="text-sm font-bold">FB</span>
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-8 p-4 bg-[#002D62] rounded-lg text-white">
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
                <p className="text-xs text-gray-300 mt-4">* Emergency support available 24/7 for active bookings</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
