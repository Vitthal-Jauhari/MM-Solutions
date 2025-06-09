import type { Metadata } from "next"
import AboutLayout from "@/components/about-layout"

export const metadata: Metadata = {
  title: "Corporate Profile - MM Solutions",
  description: "Learn about MM Solutions corporate profile and our commitment to ISO certification excellence.",
}

export default function CorporateProfilePage() {
  return (
    <AboutLayout
      title="MM Solutions Corporate Profile"
      breadcrumb="Corporate Profile"
      pageId="WP679"
      lastUpdated="07 Jun, 2025, 09:12AM"
    >
      <div className="space-y-6">
        <p className="text-gray-600 leading-relaxed">
          MM Solutions Limited has implemented a documented management system, meeting the requirements of various
          international standards for providing 3rd party management system certification services since 2009. We have
          added comprehensive ISO certification services into our product portfolio and proudly announce that we are
          supporting and handholding our various clients across multiple industries.
        </p>

        <p className="text-gray-600 leading-relaxed">
          MM Solutions is a reputed certification body, recognized for providing ISO certification consulting and
          training services for various industries including Manufacturing, IT, Healthcare, Food Safety, and many more
          sectors. MM Solutions is committed to adding value through comprehensive certification services across all ISO
          standards by introducing experts in the field and trained professionals.
        </p>

        <div className="my-6">
          <p className="text-gray-600 font-semibold mb-3 text-[#033097]">MM Solutions maintains</p>
          <ul className="space-y-2 text-gray-600">
            <li>• customer focus,</li>
            <li>• service credibility and</li>
            <li>
              • provide independent, impartial, dynamic, value-added, and cost-effective certification and assessment
              services.
            </li>
          </ul>
        </div>

        <p className="text-gray-600 leading-relaxed">
          MM Solutions understands the importance of impartiality and manages conflict of interest and ensures the
          objectivity of its management system certification activities.
        </p>
      </div>
    </AboutLayout>
  )
}
