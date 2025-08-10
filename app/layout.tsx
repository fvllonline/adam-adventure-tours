import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Adam Adventure Tours & Tourism LLC",
  description: "Your gateway to unforgettable experiences in Dubai and the UAE - Adam Adventure Tours & Tourism LLC",
  generator: 'v0.dev',
  icons: {
    icon: '/images/favicon_aatt.png',
    shortcut: '/favicon_att.png',
    apple: '/favicon_att.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
