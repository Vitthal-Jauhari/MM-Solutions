import type { Metadata } from "next"
import AboutLayout from "@/components/about-layout"

export const metadata: Metadata = {
  title: "HACCP Certification - MM Solutions",
  description: "Get HACCP (Hazard Analysis Critical Control Points) certification. Ensure food safety and quality.",
}

export default function HACCPPage() {
  return (
    <AboutLayout
      title="HACCP Certification"
      breadcrumb="HACCP Certification"
      pageId="WP707"
      lastUpdated="07 Jun, 2025, 12:00PM"
    >
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-[#033097]">HACCP (Hazard Analysis Critical Control Points)</h3>
        <p className="text-gray-600 leading-relaxed">
          HACCP is a systematic preventive approach to food safety that addresses physical, chemical, and biological
          hazards as a means of prevention rather than finished product inspection. It is used in the food industry to
          identify potential food safety hazards, so that key actions can be taken to reduce or eliminate the risk of
          the hazards being realized.
        </p>

        <p className="text-gray-600 leading-relaxed">
          The HACCP system is based on seven principles that provide the foundation for developing a HACCP plan. This
          science-based system enables operators to identify problems and take corrective action before problems occur,
          rather than relying on spot-checks of manufacturing processes and random sampling of finished products.
        </p>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Seven HACCP Principles:</h3>
        <ol className="space-y-2 text-gray-600 ml-4">
          <li>1. Conduct a hazard analysis</li>
          <li>2. Determine Critical Control Points (CCPs)</li>
          <li>3. Establish critical limits</li>
          <li>4. Establish monitoring procedures</li>
          <li>5. Establish corrective actions</li>
          <li>6. Establish verification procedures</li>
          <li>7. Establish record-keeping and documentation procedures</li>
        </ol>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Benefits:</h3>
        <ul className="space-y-3 text-gray-600">
          <li>
            • <strong className="text-[#033097]">Food Safety Assurance:</strong> Systematic approach to preventing food
            safety hazards
          </li>
          <li>
            • <strong className="text-[#033097]">Legal Compliance:</strong> Meet regulatory requirements for food safety
          </li>
          <li>
            • <strong className="text-[#033097]">Cost Reduction:</strong> Prevent costly recalls and product losses
          </li>
          <li>
            • <strong className="text-[#033097]">Customer Confidence:</strong> Demonstrate commitment to food safety
          </li>
          <li>
            • <strong className="text-[#033097]">Market Access:</strong> Meet customer and export requirements
          </li>
          <li>
            • <strong className="text-[#033097]">Continuous Improvement:</strong> Ongoing monitoring and improvement of
            food safety processes
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Industries Applicable:</h3>
        <p className="text-gray-600 leading-relaxed">
          HACCP is applicable to all segments of the food industry including primary production, processing,
          manufacturing, distribution, retail, and food service operations.
        </p>
      </div>
    </AboutLayout>
  )
}
