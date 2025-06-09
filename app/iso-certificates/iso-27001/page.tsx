import type { Metadata } from "next"
import AboutLayout from "@/components/about-layout"

export const metadata: Metadata = {
  title: "ISO 27001 Certification - MM Solutions",
  description: "Get ISO 27001 Information Security Management System certification. Protect your information assets.",
}

export default function ISO27001Page() {
  return (
    <AboutLayout
      title="ISO 27001 Certification"
      breadcrumb="ISO 27001 Certification"
      pageId="WP704"
      lastUpdated="07 Jun, 2025, 11:15AM"
      certificationType="ISO 27001"
    >
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-[#033097]">Overview:</h3>
        <p className="text-gray-600 leading-relaxed">
          ISO 27001 is the global standard for managing information security. It provides a framework to protect
          sensitive data, covering people, processes, and systems. The certification helps organizations systematically
          manage and mitigate risks related to information security.
        </p>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Benefits:</h3>
        <ul className="space-y-3 text-gray-600">
          <li>
            • <strong className="text-[#033097]">Secures confidential business data:</strong> Comprehensive protection
            for sensitive information assets
          </li>
          <li>
            • <strong className="text-[#033097]">Enhances trust with stakeholders:</strong> Demonstrates commitment to
            information security
          </li>
          <li>
            • <strong className="text-[#033097]">Complies with international regulations:</strong> Meet global data
            protection requirements
          </li>
          <li>
            • <strong className="text-[#033097]">Minimizes data breach risks:</strong> Proactive approach to preventing
            security incidents
          </li>
          <li>
            • <strong className="text-[#033097]">Strengthens incident response plans:</strong> Improved capability to
            respond to security threats
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Key Features:</h3>
        <ul className="space-y-2 text-gray-600">
          <li>• Risk-based approach to information security</li>
          <li>• Comprehensive security controls framework</li>
          <li>• Continuous improvement methodology</li>
          <li>• Legal and regulatory compliance</li>
          <li>• Business continuity planning</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Who Should Get Certified?</h3>
        <p className="text-gray-600 leading-relaxed">
          ISO 27001 is applicable to any organization that handles sensitive information, including financial services,
          healthcare, government agencies, technology companies, and any business that processes personal data.
        </p>
      </div>
    </AboutLayout>
  )
}
