import type { Metadata } from "next"
import AboutLayout from "@/components/about-layout"

export const metadata: Metadata = {
  title: "SA 8000 Certification - MM Solutions",
  description: "Get SA 8000 Social Accountability certification. Ensure ethical business practices and worker rights.",
}

export default function SA8000Page() {
  return (
    <AboutLayout
      title="SA 8000 Certification"
      breadcrumb="SA 8000 Certification"
      pageId="WP706"
      lastUpdated="07 Jun, 2025, 11:45AM"
    >
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-[#033097]">SA 8000 Social Accountability Certification</h3>
        <p className="text-gray-600 leading-relaxed">
          The SA 8000 Certification is the Social Accountability System standard. It is applicable to companies of any
          size that wish to address the social and ethical aspects of their business. A Social Accountability System
          proves to customers that the company holds adequate provisions for the protection of workers rights. Further,
          it ensures the ethical production of all goods manufactured by the company.
        </p>

        <p className="text-gray-600 leading-relaxed">
          SA 8000 is the first auditable standard in this field. The initiative is based on the well-known ISO 9001/ISO
          14001 certification structure, conventions of the International Labor Organization (ILO), the Universal
          Declaration of Human Rights, and the UN Convention on the Rights of the Child.
        </p>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Key Elements:</h3>
        <ul className="space-y-2 text-gray-600">
          <li>• Child labor prohibition</li>
          <li>• Forced and compulsory labor elimination</li>
          <li>• Health and safety standards</li>
          <li>• Freedom of association and collective bargaining</li>
          <li>• Discrimination prevention</li>
          <li>• Disciplinary practices guidelines</li>
          <li>• Working hours regulation</li>
          <li>• Compensation standards</li>
          <li>• Management systems requirements</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Benefits:</h3>
        <ul className="space-y-3 text-gray-600">
          <li>
            • <strong className="text-[#033097]">Enhanced Brand Reputation:</strong> Demonstrate commitment to ethical
            business practices
          </li>
          <li>
            • <strong className="text-[#033097]">Market Access:</strong> Meet customer and stakeholder expectations for
            social responsibility
          </li>
          <li>
            • <strong className="text-[#033097]">Risk Management:</strong> Reduce risks associated with labor practices
            and supply chain issues
          </li>
          <li>
            • <strong className="text-[#033097]">Employee Satisfaction:</strong> Improve working conditions and employee
            morale
          </li>
          <li>
            • <strong className="text-[#033097]">Competitive Advantage:</strong> Differentiate your organization in
            socially conscious markets
          </li>
          <li>
            • <strong className="text-[#033097]">Legal Compliance:</strong> Ensure compliance with international labor
            standards
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Who Should Get Certified?</h3>
        <p className="text-gray-600 leading-relaxed">
          SA 8000 is particularly relevant for manufacturing companies, suppliers to multinational corporations, and
          organizations operating in global supply chains where social accountability is a key concern.
        </p>
      </div>
    </AboutLayout>
  )
}
