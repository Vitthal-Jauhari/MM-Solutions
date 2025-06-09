import type { Metadata } from "next"
import AboutLayout from "@/components/about-layout"

export const metadata: Metadata = {
  title: "ISO 50001 Certification - MM Solutions",
  description: "Get ISO 50001 Energy Management System certification. Improve energy efficiency and reduce costs.",
}

export default function ISO50001Page() {
  return (
    <AboutLayout
      title="ISO 50001 Certification"
      breadcrumb="ISO 50001 Certification"
      pageId="WP708"
      lastUpdated="07 Jun, 2025, 12:15PM"
      certificationType="ISO 50001"
    >
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-[#033097]">Overview:</h3>
        <p className="text-gray-600 leading-relaxed">
          ISO 50001 provides a framework for Energy Management Systems (EnMS), guiding organizations to reduce energy
          use and improve energy efficiency in a structured way.
        </p>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Benefits:</h3>
        <ul className="space-y-3 text-gray-600">
          <li>
            • <strong className="text-[#033097]">Lower energy bills and resource waste:</strong> Significant reduction
            in energy costs through improved efficiency
          </li>
          <li>
            • <strong className="text-[#033097]">Decreased greenhouse gas emissions:</strong> Reduced environmental
            footprint and carbon impact
          </li>
          <li>
            • <strong className="text-[#033097]">Supports environmental compliance:</strong> Meet energy efficiency
            regulations and requirements
          </li>
          <li>
            • <strong className="text-[#033097]">Boosts sustainable operations:</strong> Enhanced sustainability
            performance and reporting
          </li>
          <li>
            • <strong className="text-[#033097]">Improved corporate image and responsibility:</strong> Enhanced
            reputation and market positioning
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Key Requirements:</h3>
        <ul className="space-y-2 text-gray-600">
          <li>• Energy policy development</li>
          <li>• Energy planning and baseline establishment</li>
          <li>• Energy objectives and targets</li>
          <li>• Energy performance indicators</li>
          <li>• Operational controls for energy use</li>
          <li>• Monitoring and measurement</li>
          <li>• Internal audit and management review</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Implementation Benefits:</h3>
        <p className="text-gray-600 leading-relaxed">
          Organizations typically see energy cost reductions of 10-20% within the first few years of implementing ISO
          50001. The standard provides a framework for integrating energy efficiency into management practices and
          normalizing energy improvements.
        </p>
      </div>
    </AboutLayout>
  )
}
