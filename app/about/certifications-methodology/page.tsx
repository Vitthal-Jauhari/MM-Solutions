import type { Metadata } from "next"
import AboutLayout from "@/components/about-layout"

export const metadata: Metadata = {
  title: "Certifications Methodology - MM Solutions",
  description: "Learn about MM Solutions systematic approach to ISO certification processes.",
}

export default function CertificationsMethodologyPage() {
  return (
    <AboutLayout
      title="Certifications Methodology"
      breadcrumb="Certifications Methodology"
      pageId="WP695"
      lastUpdated="07 Jun, 2025, 12:15AM"
    >
      <div className="space-y-6">
        <p className="text-gray-600 leading-relaxed">
          MM Solutions Limited follows a systematic and comprehensive methodology for all certification processes,
          ensuring consistency, reliability, and adherence to international standards.
        </p>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Our Certification Process</h3>

        <div className="space-y-6 mt-6">
          <div className="flex items-start space-x-4">
            <div className="bg-[#033097] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
              1
            </div>
            <div>
              <h4 className="font-semibold text-[#033097]">Application Review</h4>
              <p className="text-gray-600 text-sm mt-1">
                Comprehensive review of application and documentation to ensure completeness and scope clarity.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
              2
            </div>
            <div>
              <h4 className="font-semibold text-[#033097]">Stage 1 Audit</h4>
              <p className="text-gray-600 text-sm mt-1">
                Document review and readiness assessment to evaluate system documentation and implementation status.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
              3
            </div>
            <div>
              <h4 className="font-semibold text-[#033097]">Stage 2 Audit</h4>
              <p className="text-gray-600 text-sm mt-1">
                On-site assessment to verify effective implementation and operation of the management system.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
              4
            </div>
            <div>
              <h4 className="font-semibold text-[#033097]">Certification Decision</h4>
              <p className="text-gray-600 text-sm mt-1">
                Independent review and certification decision based on audit findings and evidence.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
              5
            </div>
            <div>
              <h4 className="font-semibold text-[#033097]">Certificate Issuance</h4>
              <p className="text-gray-600 text-sm mt-1">
                Issuance of certificate and inclusion in certified organizations directory.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
              6
            </div>
            <div>
              <h4 className="font-semibold text-[#033097]">Surveillance Audits</h4>
              <p className="text-gray-600 text-sm mt-1">
                Regular surveillance audits to ensure continued compliance and system effectiveness.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Key Principles</h3>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h4 className="font-semibold text-[#033097] mb-2">Impartiality</h4>
            <p className="text-gray-600 text-sm">
              Maintaining independence and objectivity throughout the certification process.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-[#033097] mb-2">Competence</h4>
            <p className="text-gray-600 text-sm">Ensuring auditors have appropriate qualifications and experience.</p>
          </div>
          <div>
            <h4 className="font-semibold text-[#033097] mb-2">Consistency</h4>
            <p className="text-gray-600 text-sm">
              Applying standardized procedures across all certification activities.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-[#033097] mb-2">Transparency</h4>
            <p className="text-gray-600 text-sm">Clear communication of requirements, processes, and decisions.</p>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mt-8 border border-blue-200">
          <h4 className="font-semibold text-[#033097] mb-2">Quality Assurance</h4>
          <p className="text-gray-600 text-sm">
            Our methodology is regularly reviewed and updated to ensure alignment with international standards and best
            practices. We maintain continuous improvement through internal audits, management reviews, and stakeholder
            feedback.
          </p>
        </div>
      </div>
    </AboutLayout>
  )
}
