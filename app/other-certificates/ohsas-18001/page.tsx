import type { Metadata } from "next"
import AboutLayout from "@/components/about-layout"

export const metadata: Metadata = {
  title: "OHSAS 18001 Certification - MM Solutions",
  description:
    "Get OHSAS 18001 Occupational Health and Safety certification. Foundation for workplace safety management.",
}

export default function OHSAS18001Page() {
  return (
    <AboutLayout
      title="OHSAS 18001 Certification"
      breadcrumb="OHSAS 18001 Certification"
      pageId="WP714"
      lastUpdated="07 Jun, 2025, 02:15PM"
      certificationType="OHSAS 18001"
    >
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-[#033097]">Overview:</h3>
        <p className="text-gray-600 leading-relaxed">
          OHSAS 18001 is an older occupational health and safety standard, now replaced by ISO 45001. However, it laid
          the groundwork for many safety systems still used today.
        </p>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Benefits:</h3>
        <ul className="space-y-3 text-gray-600">
          <li>
            • <strong className="text-[#033097]">Framework for managing workplace hazards:</strong> Systematic approach
            to identifying and controlling safety risks
          </li>
          <li>
            • <strong className="text-[#033097]">Compliance with old safety benchmarks:</strong> Meet established safety
            standards and requirements
          </li>
          <li>
            • <strong className="text-[#033097]">Reduced accidents and health risks:</strong> Improved workplace safety
            and reduced incident rates
          </li>
          <li>
            • <strong className="text-[#033097]">Transition-ready for ISO 45001:</strong> Foundation for upgrading to
            the current ISO 45001 standard
          </li>
          <li>
            • <strong className="text-[#033097]">Employee well-being focus:</strong> Enhanced focus on worker health and
            safety
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Key Elements:</h3>
        <ul className="space-y-2 text-gray-600">
          <li>• OH&S policy development</li>
          <li>• Hazard identification and risk assessment</li>
          <li>• Legal and other requirements</li>
          <li>• Objectives and management programs</li>
          <li>• Implementation and operation</li>
          <li>• Checking and corrective action</li>
          <li>• Management review</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Transition to ISO 45001:</h3>
        <p className="text-gray-600 leading-relaxed">
          Organizations currently certified to OHSAS 18001 should consider transitioning to ISO 45001, which provides
          enhanced requirements for worker participation, leadership engagement, and risk-based thinking. MM Solutions
          can assist with this transition process.
        </p>
      </div>
    </AboutLayout>
  )
}
