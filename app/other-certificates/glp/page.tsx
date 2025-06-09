import type { Metadata } from "next"
import AboutLayout from "@/components/about-layout"

export const metadata: Metadata = {
  title: "GLP Certification - MM Solutions",
  description:
    "Get GLP (Good Laboratory Practice) certification. Ensure quality and reliability in laboratory studies.",
}

export default function GLPPage() {
  return (
    <AboutLayout
      title="GLP Certification"
      breadcrumb="GLP Certification"
      pageId="WP713"
      lastUpdated="07 Jun, 2025, 02:00PM"
      certificationType="GLP"
    >
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-[#033097]">Overview:</h3>
        <p className="text-gray-600 leading-relaxed">
          Good Laboratory Practice (GLP) governs the quality systems for non-clinical lab studies. It ensures the
          reliability, integrity, and traceability of research data used for regulatory purposes.
        </p>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Benefits:</h3>
        <ul className="space-y-3 text-gray-600">
          <li>
            • <strong className="text-[#033097]">Accurate and reproducible data:</strong> Ensures reliability and
            consistency of laboratory results
          </li>
          <li>
            • <strong className="text-[#033097]">Improved lab process standardization:</strong> Standardized procedures
            for consistent operations
          </li>
          <li>
            • <strong className="text-[#033097]">Stronger regulatory acceptance:</strong> Enhanced credibility with
            regulatory authorities
          </li>
          <li>
            • <strong className="text-[#033097]">Better research credibility:</strong> Increased trust in research
            findings and data
          </li>
          <li>
            • <strong className="text-[#033097]">Reduces experimental risks:</strong> Minimized risks of data integrity
            issues and study failures
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Key Principles:</h3>
        <ul className="space-y-2 text-gray-600">
          <li>• Test facility organization and personnel</li>
          <li>• Quality assurance program</li>
          <li>• Facilities and equipment standards</li>
          <li>• Test and reference item handling</li>
          <li>• Standard operating procedures</li>
          <li>• Study conduct and data integrity</li>
          <li>• Reporting and record keeping</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Industries Applicable:</h3>
        <p className="text-gray-600 leading-relaxed">
          GLP is essential for pharmaceutical companies, contract research organizations, toxicology laboratories, and
          any facility conducting non-clinical safety studies for regulatory submission.
        </p>
      </div>
    </AboutLayout>
  )
}
