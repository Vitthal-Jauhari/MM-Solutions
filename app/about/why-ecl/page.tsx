import type { Metadata } from "next"
import AboutLayout from "@/components/about-layout"

export const metadata: Metadata = {
  title: "Why MM Solutions - MM Solutions",
  description: "Discover why MM Solutions is the right choice for your ISO certification needs.",
}

export default function WhyMMSolutionsPage() {
  return (
    <AboutLayout
      title="Why MM Solutions"
      breadcrumb="Why MM Solutions"
      pageId="WP692"
      lastUpdated="07 Jun, 2025, 03:13AM"
    >
      <div className="space-y-6">
        <p className="text-gray-600 leading-relaxed">
          MM Solutions gives value-added assessment by its trained, quality-conscious, experienced auditors & technical
          experts.
        </p>

        <p className="text-gray-600 leading-relaxed">
          MM Solutions provides unbiased auditing services with a wide range of scopes to its clients. It also helps to
          explore Management System benefits in a friendly manner so that our esteemed client can optimize their
          organizations performance.
        </p>

        <div className="my-8">
          <h3 className="text-xl font-semibold text-[#033097] mb-4">Our Key Advantages:</h3>
          <ul className="space-y-3 text-gray-600">
            <li>
              • <strong className="text-[#033097]">Expert Team:</strong> Trained and experienced auditors with deep
              industry knowledge
            </li>
            <li>
              • <strong className="text-[#033097]">Quality Focus:</strong> Quality-conscious approach in all our
              certification processes
            </li>
            <li>
              • <strong className="text-[#033097]">Unbiased Service:</strong> Independent and impartial assessment
              services
            </li>
            <li>
              • <strong className="text-[#033097]">Wide Scope:</strong> Comprehensive range of certification services
            </li>
            <li>
              • <strong className="text-[#033097]">Client-Friendly:</strong> Supportive approach to help optimize
              organizational performance
            </li>
            <li>
              • <strong className="text-[#033097]">Value Addition:</strong> Focus on adding real value to your business
              processes
            </li>
          </ul>
        </div>

        <p className="text-gray-600 leading-relaxed">
          We believe in building long-term partnerships with our clients, ensuring that the certification process not
          only meets compliance requirements but also drives continuous improvement and business excellence.
        </p>
      </div>
    </AboutLayout>
  )
}
