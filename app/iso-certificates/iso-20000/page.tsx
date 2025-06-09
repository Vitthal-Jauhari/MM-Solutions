import type { Metadata } from "next"
import AboutLayout from "@/components/about-layout"

export const metadata: Metadata = {
  title: "ISO 20000 Certification - MM Solutions",
  description:
    "Get ISO 20000 IT Service Management certification. Improve IT service delivery and customer satisfaction.",
}

export default function ISO20000Page() {
  return (
    <AboutLayout
      title="ISO 20000 Certification"
      breadcrumb="ISO 20000 Certification"
      pageId="WP712"
      lastUpdated="07 Jun, 2025, 01:30PM"
      certificationType="ISO 20000"
    >
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-[#033097]">Overview:</h3>
        <p className="text-gray-600 leading-relaxed">
          ISO 20000 is the international standard for IT Service Management (ITSM). It ensures that IT services are
          designed, implemented, and managed to meet business and customer needs efficiently.
        </p>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Benefits:</h3>
        <ul className="space-y-3 text-gray-600">
          <li>
            • <strong className="text-[#033097]">Better service delivery and consistency:</strong> Standardized approach
            to IT service management
          </li>
          <li>
            • <strong className="text-[#033097]">Increased user and customer satisfaction:</strong> Improved service
            quality and reliability
          </li>
          <li>
            • <strong className="text-[#033097]">Improved incident and change management:</strong> Faster resolution and
            better change control
          </li>
          <li>
            • <strong className="text-[#033097]">Competitive edge in the IT sector:</strong> Differentiation through
            certified service management
          </li>
          <li>
            • <strong className="text-[#033097]">Aligned IT goals with business strategy:</strong> Better integration of
            IT services with business objectives
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Key Service Management Processes:</h3>
        <ul className="space-y-2 text-gray-600">
          <li>• Service level management</li>
          <li>• Incident and problem management</li>
          <li>• Change and release management</li>
          <li>• Configuration management</li>
          <li>• Capacity and availability management</li>
          <li>• IT service continuity management</li>
          <li>• Supplier management</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Who Should Get Certified?</h3>
        <p className="text-gray-600 leading-relaxed">
          ISO 20000 is ideal for IT service providers, internal IT departments, cloud service providers, and any
          organization that delivers IT services to internal or external customers.
        </p>
      </div>
    </AboutLayout>
  )
}
