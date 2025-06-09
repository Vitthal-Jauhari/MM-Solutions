import type { Metadata } from "next"
import AboutLayout from "@/components/about-layout"

export const metadata: Metadata = {
  title: "About Us - MM Solutions",
  description: "Learn about MM Solutions, our mission, vision, and commitment to ISO certification excellence.",
}

export default function AboutPage() {
  return (
    <AboutLayout title="About Company" breadcrumb="About Us">
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-[#033097]">MM Solutions</h3>
        </div>

        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed text-lg">
            MM Solutions is a Delhi-based consultancy offering ISO certifications, process implementation, and company
            registration services at competitive rates.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            With strong ties to experienced certification bodies across India, we bring deep expertise in audits,
            implementation, and multi-industry standards—serving both micro and macro clients.
          </p>

          <div className="space-y-4 pl-4 border-l-4 border-[#033097]">
            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-[#033097]">We provide end-to-end consultancy for:</span>
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-[#033097] mr-2">•</span>
                <span className="text-gray-700">
                  <span className="font-semibold">ISO Standards:</span> ISO 9001, 14001, 22000, 27001, 45001, HACCP
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#033097] mr-2">•</span>
                <span className="text-gray-700">
                  <span className="font-semibold">Services:</span> ISO documentation, implementation, and certification
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#033097] mr-2">•</span>
                <span className="text-gray-700">
                  <span className="font-semibold">Company Registrations:</span> Pvt Ltd, LLP, OPC, Partnership, and GST
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-bold text-[#033097] text-lg mb-2">Our Mission</h4>
            <p className="text-gray-600">
              To provide world-class certification and consultancy services that help organizations achieve excellence
              and compliance with international standards.
            </p>
          </div>

          <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-bold text-[#033097] text-lg mb-2">Our Vision</h4>
            <p className="text-gray-600">
              To be the leading certification body in India, recognized for our expertise, integrity, and commitment to
              client success.
            </p>
          </div>

          <div className="text-center p-6 bg-purple-50 rounded-lg border border-purple-200 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-bold text-[#033097] text-lg mb-2">Our Values</h4>
            <p className="text-gray-600">
              Integrity, Excellence, Innovation, and Customer Focus drive everything we do in our certification and
              consultancy services.
            </p>
          </div>
        </div>
      </div>
    </AboutLayout>
  )
}
