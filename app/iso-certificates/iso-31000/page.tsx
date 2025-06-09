import type { Metadata } from "next"
import AboutLayout from "@/components/about-layout"

export const metadata: Metadata = {
  title: "ISO 31000 Certification - MM Solutions",
  description:
    "Get ISO 31000 Risk Management certification. Improve decision-making and manage uncertainty effectively.",
}

export default function ISO31000Page() {
  return (
    <AboutLayout
      title="ISO 31000 Certification"
      breadcrumb="ISO 31000 Certification"
      pageId="WP711"
      lastUpdated="07 Jun, 2025, 01:15PM"
      certificationType="ISO 31000"
    >
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-[#033097]">Overview:</h3>
        <p className="text-gray-600 leading-relaxed">
          ISO 31000 provides guidelines for risk management, helping organizations of any size make informed decisions,
          manage uncertainty, and improve performance by embedding risk thinking into leadership and culture.
        </p>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Benefits:</h3>
        <ul className="space-y-3 text-gray-600">
          <li>
            • <strong className="text-[#033097]">Robust risk identification and control:</strong> Systematic approach to
            identifying and managing risks
          </li>
          <li>
            • <strong className="text-[#033097]">Proactive decision-making:</strong> Better informed strategic and
            operational decisions
          </li>
          <li>
            • <strong className="text-[#033097]">Improved stakeholder confidence:</strong> Enhanced trust through
            transparent risk management
          </li>
          <li>
            • <strong className="text-[#033097]">Better allocation of resources:</strong> Optimized resource deployment
            based on risk priorities
          </li>
          <li>
            • <strong className="text-[#033097]">Strengthened governance practices:</strong> Enhanced organizational
            governance and accountability
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Key Principles:</h3>
        <ul className="space-y-2 text-gray-600">
          <li>• Risk management creates and protects value</li>
          <li>• Risk management is an integral part of all organizational processes</li>
          <li>• Risk management is part of decision making</li>
          <li>• Risk management explicitly addresses uncertainty</li>
          <li>• Risk management is systematic, structured and timely</li>
          <li>• Risk management is based on the best available information</li>
          <li>• Risk management is tailored to the organization</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Implementation Benefits:</h3>
        <p className="text-gray-600 leading-relaxed">
          Organizations implementing ISO 31000 typically experience improved strategic planning, better crisis
          management, enhanced operational efficiency, and increased stakeholder confidence in their ability to manage
          risks effectively.
        </p>
      </div>
    </AboutLayout>
  )
}
