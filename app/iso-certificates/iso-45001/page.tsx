import type { Metadata } from "next"
import AboutLayout from "@/components/about-layout"

export const metadata: Metadata = {
  title: "ISO 45001 Certification - MM Solutions",
  description: "Get ISO 45001 Occupational Health and Safety Management System certification. Ensure workplace safety.",
}

export default function ISO45001Page() {
  return (
    <AboutLayout
      title="ISO 45001 Certification"
      breadcrumb="ISO 45001 Certification"
      pageId="WP705"
      lastUpdated="07 Jun, 2025, 11:30AM"
      certificationType="ISO 45001"
    >
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-[#033097]">Overview:</h3>
        <p className="text-gray-600 leading-relaxed">
          ISO 45001 focuses on Occupational Health and Safety. It enables organizations to manage risks and create safer
          workplace environments, replacing the older OHSAS 18001 standard.
        </p>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Benefits:</h3>
        <ul className="space-y-3 text-gray-600">
          <li>
            • <strong className="text-[#033097]">Reduced workplace injuries:</strong> Systematic approach to identifying
            and controlling health and safety risks
          </li>
          <li>
            • <strong className="text-[#033097]">Increased worker engagement:</strong> Enhanced employee participation
            in safety programs
          </li>
          <li>
            • <strong className="text-[#033097]">Legal compliance assurance:</strong> Ensure compliance with health and
            safety legislation and regulations
          </li>
          <li>
            • <strong className="text-[#033097]">Fewer downtime and insurance claims:</strong> Reduced costs associated
            with workplace incidents and insurance premiums
          </li>
          <li>
            • <strong className="text-[#033097]">Global recognition for safety standards:</strong> International
            recognition for commitment to worker safety
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Key Requirements:</h3>
        <ul className="space-y-2 text-gray-600">
          <li>• Leadership and worker participation</li>
          <li>• Hazard identification and risk assessment</li>
          <li>• Legal and other requirements compliance</li>
          <li>• OH&S objectives and planning</li>
          <li>• Emergency preparedness and response</li>
          <li>• Performance monitoring and measurement</li>
          <li>• Internal audit and management review</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Implementation Process:</h3>
        <p className="text-gray-600 leading-relaxed">
          MM Solutions provides comprehensive support for ISO 45001 implementation, including gap analysis, policy
          development, risk assessment, training, and certification audit preparation.
        </p>
      </div>
    </AboutLayout>
  )
}
