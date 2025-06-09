import type { Metadata } from "next"
import AboutLayout from "@/components/about-layout"

export const metadata: Metadata = {
  title: "Accreditations - MM Solutions",
  description: "MM Solutions accreditations and certifications for ISO management systems.",
}

export default function AccreditationsPage() {
  return (
    <AboutLayout title="Accreditation" breadcrumb="Accreditations" pageId="WP680" lastUpdated="07 Jun, 2025, 06:35AM">
      <div className="space-y-6">
        <p className="text-gray-600 leading-relaxed">
          MM Solutions Limited is an accredited certification body with extensive experience in ISO management systems.
        </p>

        <p className="text-gray-600 leading-relaxed">
          MM Solutions Limited is Accredited Certification Body providing reliable and professional certification
          services across various ISO standards.
        </p>

        <div className="my-6">
          <h3 className="text-xl font-semibold text-[#033097] mb-4">ISO Standards We Certify:</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              • <span className="text-[#033097] font-semibold">ISO 9001</span> - Quality Management System
            </li>
            <li>
              • <span className="text-[#033097] font-semibold">ISO 14001</span> - Environmental Management System
            </li>
            <li>
              • <span className="text-[#033097] font-semibold">ISO 45001</span> - Occupational Health & Safety
              Management System
            </li>
            <li>
              • <span className="text-[#033097] font-semibold">ISO 22000</span> - Food Safety Management System
            </li>
            <li>
              • <span className="text-[#033097] font-semibold">ISO/IEC 27001</span> - Information Security Management
              System
            </li>
            <li>
              • <span className="text-[#033097] font-semibold">ISO/IEC 20000-1</span> - IT Management System
            </li>
            <li>
              • <span className="text-[#033097] font-semibold">ISO 13485</span> - Medical Devices, Quality Management
              System
            </li>
            <li>
              • <span className="text-[#033097] font-semibold">ISO 50001</span> - Energy Management System Certification
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mt-8 border border-blue-200">
          <h4 className="font-semibold text-[#033097] mb-2">Our Accreditation Commitment</h4>
          <p className="text-gray-600">
            We maintain the highest standards of certification integrity and are committed to providing internationally
            recognized certificates that add value to your business.
          </p>
        </div>
      </div>
    </AboutLayout>
  )
}
