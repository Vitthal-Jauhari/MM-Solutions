import type { Metadata } from "next"
import AboutLayout from "@/components/about-layout"

export const metadata: Metadata = {
  title: "GMP Certification - MM Solutions",
  description:
    "Get GMP (Good Manufacturing Practice) certification. Ensure quality in pharmaceutical and food manufacturing.",
}

export default function GMPPage() {
  return (
    <AboutLayout
      title="GMP Certification"
      breadcrumb="GMP Certification"
      pageId="WP709"
      lastUpdated="07 Jun, 2025, 12:30PM"
      certificationType="GMP"
    >
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-[#033097]">Overview:</h3>
        <p className="text-gray-600 leading-relaxed">
          Good Manufacturing Practice (GMP) certifies that manufacturing processes consistently produce safe and
          high-quality products. It's essential in food, pharma, and cosmetics industries.
        </p>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Benefits:</h3>
        <ul className="space-y-3 text-gray-600">
          <li>
            • <strong className="text-[#033097]">Minimizes contamination and errors:</strong> Systematic approach to
            preventing manufacturing defects
          </li>
          <li>
            • <strong className="text-[#033097]">Ensures product quality and safety:</strong> Consistent production of
            high-quality products
          </li>
          <li>
            • <strong className="text-[#033097]">Builds consumer trust:</strong> Enhanced confidence in product quality
            and safety
          </li>
          <li>
            • <strong className="text-[#033097]">Reduces regulatory non-compliance risk:</strong> Meet pharmaceutical
            and food safety regulations
          </li>
          <li>
            • <strong className="text-[#033097]">Promotes consistent manufacturing:</strong> Standardized processes for
            reliable production
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Key Elements:</h3>
        <ul className="space-y-2 text-gray-600">
          <li>• Quality management systems</li>
          <li>• Personnel qualifications and training</li>
          <li>• Buildings and facilities standards</li>
          <li>• Equipment maintenance and calibration</li>
          <li>• Production and process controls</li>
          <li>• Packaging and labeling controls</li>
          <li>• Laboratory controls and testing</li>
          <li>• Records and documentation</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Industries Applicable:</h3>
        <p className="text-gray-600 leading-relaxed">
          GMP is primarily applicable to pharmaceutical, biotechnology, medical device, food, and cosmetic manufacturing
          industries where product quality and safety are critical.
        </p>
      </div>
    </AboutLayout>
  )
}
