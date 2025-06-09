import type { Metadata } from "next"
import AboutLayout from "@/components/about-layout"

export const metadata: Metadata = {
  title: "ISO 22000 Certification - MM Solutions",
  description: "Get ISO 22000 Food Safety Management System certification. Ensure food safety from farm to fork.",
}

export default function ISO22000Page() {
  return (
    <AboutLayout
      title="ISO 22000 Certification"
      breadcrumb="ISO 22000 Certification"
      pageId="WP703"
      lastUpdated="07 Jun, 2025, 11:00AM"
    >
      <div className="space-y-6">
        <p className="text-gray-600 leading-relaxed">
          ISO 22000 is an international standard that defines the requirements of a food safety management system
          covering all organizations in the food chain from "farm to fork".
        </p>

        <p className="text-gray-600 leading-relaxed">
          The standard combines generally recognized key elements to ensure food safety along the food chain, including:
        </p>
        <ul className="space-y-2 text-gray-600 ml-4">
          <li>• Interactive communication</li>
          <li>• System management</li>
          <li>• Control of food safety hazards through pre-requisite programmes and HACCP plans</li>
          <li>• Continual improvement and updating of the food safety management system</li>
        </ul>

        <p className="text-gray-600 leading-relaxed">
          HACCP provides businesses with a cost-effective system for control of food safety, from ingredients right
          through to production, storage, and distribution to sale and service of the final consumer. The preventive
          approach of HACCP not only improves food safety management but also complements other quality management
          systems. Food safety management systems built in accordance with the principles of HACCP have a clearly
          defined structure.
        </p>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Key Benefits:</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-[#033097]">Process-Based System:</h4>
            <p className="text-gray-600">
              Businesses will benefit from a clear definition of processes and procedures. Effective communication and
              continual process improvement are the cornerstones of a functioning management system.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#033097]">Customer and Consumer Confidence:</h4>
            <p className="text-gray-600">
              A controlled food operating environment and an effectively implemented and applied food safety system will
              improve customer and consumer confidence in the safety of food.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#033097]">Risk Management:</h4>
            <p className="text-gray-600">
              It uses a systematic approach covering all aspects of food production from raw materials, processing,
              distribution, point of sale to consumers, and beyond. It moves a company from a solely retrospective
              end-product testing and sampling approach towards a preventative approach that is designed to reduce
              product losses and liabilities.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#033097]">Legal Protection:</h4>
            <p className="text-gray-600">
              It has been widely accepted that HACCP-based systems present the food industry with the most effective
              management tool to enable the production and supply of safe food. As such, the adoption of this approach
              can offer a legal defense in the event of an outbreak of food-borne diseases.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Seven Basic Principles of HACCP</h3>
        <p className="text-gray-600 leading-relaxed">
          The seven principles are: (1) hazard analysis, (2) critical control point identification, (3) establishment of
          critical limits, (4) monitoring procedures, (5) corrective actions, (6) record-keeping, and (7) verification
          procedures.
        </p>
      </div>
    </AboutLayout>
  )
}
