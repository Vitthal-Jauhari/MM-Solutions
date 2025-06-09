import type React from "react"
import Header from "@/components/header"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import { Phone } from "lucide-react"

interface AboutLayoutProps {
  title: string
  breadcrumb: string
  children: React.ReactNode
  pageId?: string
  lastUpdated?: string
  certificationType?: string
}

export default function AboutLayout({
  title,
  breadcrumb,
  children,
  pageId = "WP679",
  lastUpdated = "07 Jun, 2025, 09:12AM",
  certificationType,
}: AboutLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#033097] via-blue-600 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <nav className="text-sm text-blue-200 mb-4">
              <span>Home</span>
              <span className="mx-2">•</span>
              <span>{breadcrumb}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-start gap-12">
            {/* Page Info */}
            <div className="w-full md:w-auto md:flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 pb-4 border-b border-gray-200">
                <div className="flex items-center text-gray-700 mb-2 md:mb-0">
                  <Phone className="w-4 h-4 mr-2 text-[#033097]" />
                  <span className="font-semibold">+918506070721</span>
                </div>
                <span className="text-sm text-[#033097] font-medium">
                  Page ID: {pageId} | Last Updated {lastUpdated}
                </span>
              </div>

              {/* Dynamic Content */}
              <div className="prose prose-gray max-w-none">{children}</div>
            </div>

            {/* Contact Form Sidebar */}
            <div className="w-full md:w-96 lg:w-[400px] flex-shrink-0">
              <div className="sticky top-8">
                <ContactForm certificationType={certificationType} />

                {/* Image below contact form for About pages only */}
                {!certificationType && (
                  <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="/placeholder.svg?height=300&width=400"
                      alt="MM Solutions Team"
                      className="w-full h-auto"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
