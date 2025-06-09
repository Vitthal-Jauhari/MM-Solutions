import type { Metadata } from "next"
import AboutLayout from "@/components/about-layout"

export const metadata: Metadata = {
  title: "ISO 9001 Certification - MM Solutions",
  description:
    "Get ISO 9001:2015 Quality Management System certification with MM Solutions. Improve quality, efficiency and customer satisfaction.",
}

export default function ISO9001Page() {
  return (
    <AboutLayout
      title="ISO 9001 Certification"
      breadcrumb="ISO 9001 Certification"
      pageId="WP701"
      lastUpdated="07 Jun, 2025, 10:30AM"
    >
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-[#033097]">Overview</h3>
        <p className="text-gray-600 leading-relaxed">
          We are living in the most competitive World of compliance of International standards and everything is
          measured by its quality & one cannot survive without quality upgradation. Quality management system is must
          for every successful organization.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Any organization who wish to improve in whatever manner, expanding market, higher customer satisfaction,
          bigger market share, cutting down the cost, continual improvement, build their brand & so on, have to follow
          Quality Management System.
        </p>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">ISO 9001:2015 (QUALITY MANAGEMENT SYSTEMS)</h3>
        <p className="text-gray-600 leading-relaxed">
          The ISO 9001 Quality Management System is the worlds most popular quality improvement standard, with over one
          million certified organizations worldwide. It is the only standard in the 9000 family of standards published
          by the International Organization for Standardization (ISO) that can be used for the purpose of conformity
          assessment. ISO 9001 also serves as the basis for many other important sector-specific standards, including
          ISO 13485 medical devices, as well as widely used management system standards such as OHSAS 18001 and ISO
          14001.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Facilitating evolving market demands, the quality management system ISO 9001 was revised in 2015.
          Organizations that are currently certified to ISO 9001:2008 need to complete the transition to the revised
          standard by September 15, 2018.
        </p>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Benefits:</h3>
        <ul className="space-y-3 text-gray-600">
          <li>
            • <strong className="text-[#033097]">Save money and time</strong> - through quality management practices
            that increase your organizational efficiency, productivity and profitability.
          </li>
          <li>
            • <strong className="text-[#033097]">Minimize risk</strong> - by consistently achieving a level of quality
            defined by the standard, thus ensuring your products and services are less likely to fall short of customer
            expectations.
          </li>
          <li>
            • <strong className="text-[#033097]">Profit from an expert partnership</strong> - with an internationally
            recognized and respected brand.
          </li>
          <li>
            • <strong className="text-[#033097]">Increase your competitiveness</strong> - with a quality management
            system certified by MM Solutions that attracts investors and lowers trade barriers to your business.
          </li>
          <li>
            • <strong className="text-[#033097]">Gain market recognition</strong> - with the worlds most widely known
            quality management system, which can help establish your presence as a supplier when entering a new market.
          </li>
        </ul>
      </div>
    </AboutLayout>
  )
}
