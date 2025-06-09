import type { Metadata } from "next"
import AboutLayout from "@/components/about-layout"

export const metadata: Metadata = {
  title: "ISO 14001 Certification - MM Solutions",
  description:
    "Get ISO 14001:2015 Environmental Management System certification. Protect environment and improve sustainability.",
}

export default function ISO14001Page() {
  return (
    <AboutLayout
      title="ISO 14001 Certification"
      breadcrumb="ISO 14001 Certification"
      pageId="WP702"
      lastUpdated="07 Jun, 2025, 10:45AM"
    >
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-[#033097]">ISO 14001:2015 Environmental Management System</h3>
        <p className="text-gray-600 leading-relaxed">
          ISO 14001 2015 is an environmental management standard that defines the environmental policy of an
          organization. This standard helps organizations to protect the environment, check pollution, and improve their
          overall environmental performance. ISO 14001 is a useful tool for an organization to step up from just
          maintaining regulatory compliance to an organization with improved productivity and enhanced competitive
          advantage.
        </p>

        <p className="text-gray-600 leading-relaxed">
          ISO 14001:2015 is applicable to any business that wishes to establish, implement, maintain and improve an
          environmental management system and conform to its stated environmental policy.
        </p>

        <p className="text-gray-600 leading-relaxed">
          ISO 14001:2015 is the perfect certification for companies seeking an internationally recognized environmental
          management system. This certification can help companies create a structure for managing environmental
          operations. ISO 14001:2015 is applicable to all types and sizes of manufacturing and service operations
          throughout the world.
        </p>

        <p className="text-gray-600 leading-relaxed">
          ISO 14001:2015 specifies environmental requirements that the organization identifies as those which it can
          control and influence. It does not itself state specific environmental performance criteria. ISO 14001 is
          flexible - it is as applicable to both the small business and the multinational organization.
        </p>

        <p className="text-gray-600 leading-relaxed">
          The extent of the application depends on factors like the environmental policy of the organization, the nature
          of its activities, products and services, the location and the conditions in which the company functions.
        </p>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">BENEFITS</h3>
        <p className="text-gray-600 leading-relaxed">
          A well-defined environmental management system is essential for an organization to manage environmental
          aspects like emission and handling of waste. It is important for the efficient utilization of resources and
          energy. Some of the benefits of the ISO 14001 certification are:
        </p>
        <ul className="space-y-2 text-gray-600 mt-4">
          <li>• Environmental legal liability</li>
          <li>• Reduction in insurance premiums; waste handling costs; water and air permitting fees</li>
          <li>• Improved corporate image; strategic investment; improved regulatory relations</li>
          <li>• Evaluates system performance through management review and correct management system deficiencies</li>
        </ul>
      </div>
    </AboutLayout>
  )
}
