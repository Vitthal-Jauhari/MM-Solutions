import type { Metadata } from "next"
import AboutLayout from "@/components/about-layout"

export const metadata: Metadata = {
  title: "ISO 28000 Certification - MM Solutions",
  description: "Get ISO 28000 Supply Chain Security Management certification. Secure your supply chain operations.",
}

export default function ISO28000Page() {
  return (
    <AboutLayout
      title="ISO 28000 Certification"
      breadcrumb="ISO 28000 Certification"
      pageId="WP710"
      lastUpdated="07 Jun, 2025, 01:00PM"
      certificationType="ISO 28000"
    >
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-[#033097]">Overview:</h3>
        <p className="text-gray-600 leading-relaxed">
          ISO 28000 sets requirements for security management systems in the supply chain. It helps businesses identify
          potential security risks, including threats like theft, terrorism, or smuggling, and implement measures to
          address them proactively.
        </p>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Benefits:</h3>
        <ul className="space-y-3 text-gray-600">
          <li>
            • <strong className="text-[#033097]">Improved supply chain visibility and control:</strong> Enhanced
            oversight of entire supply chain operations
          </li>
          <li>
            • <strong className="text-[#033097]">Enhanced cargo and transport security:</strong> Better protection for
            goods in transit
          </li>
          <li>
            • <strong className="text-[#033097]">Reduced disruption from security threats:</strong> Proactive risk
            management and mitigation
          </li>
          <li>
            • <strong className="text-[#033097]">Better global trade facilitation:</strong> Streamlined international
            trade processes
          </li>
          <li>
            • <strong className="text-[#033097]">Builds international credibility:</strong> Recognition as a secure and
            reliable supply chain partner
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Key Components:</h3>
        <ul className="space-y-2 text-gray-600">
          <li>• Security risk assessment and management</li>
          <li>• Supply chain security planning</li>
          <li>• Security incident response procedures</li>
          <li>• Personnel security measures</li>
          <li>• Physical and information security controls</li>
          <li>• Business partner security requirements</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Industries Applicable:</h3>
        <p className="text-gray-600 leading-relaxed">
          ISO 28000 is particularly relevant for logistics companies, shipping organizations, port operators,
          manufacturers with complex supply chains, and any organization involved in international trade.
        </p>
      </div>
    </AboutLayout>
  )
}
