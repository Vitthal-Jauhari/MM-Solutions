import type { Metadata } from "next"
import AboutLayout from "@/components/about-layout"

export const metadata: Metadata = {
  title: "Policy - MM Solutions",
  description: "MM Solutions policies for quality, impartiality, and certification standards.",
}

export default function PolicyPage() {
  return (
    <AboutLayout title="MM Solutions Policy" breadcrumb="Policy" pageId="WP693" lastUpdated="07 Jun, 2025, 02:45AM">
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-[#033097]">Quality Policy</h3>
        <p className="text-gray-600 leading-relaxed">
          MM Solutions Limited is committed to providing high-quality certification and assessment services that meet
          international standards and exceed client expectations. We strive for continuous improvement in all our
          processes and maintain the highest levels of integrity and professionalism.
        </p>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Impartiality Policy</h3>
        <p className="text-gray-600 leading-relaxed">
          MM Solutions maintains strict impartiality in all certification activities. We ensure that our certification
          decisions are based solely on objective evidence and are free from any commercial, financial, or other
          pressures that could compromise our independence.
        </p>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Confidentiality Policy</h3>
        <p className="text-gray-600 leading-relaxed">
          We are committed to protecting the confidentiality of all information obtained during the certification
          process. Client information is treated with the utmost confidentiality and is not disclosed to any third party
          without explicit written consent.
        </p>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Complaints and Appeals Policy</h3>
        <p className="text-gray-600 leading-relaxed">
          MM Solutions has established procedures for handling complaints and appeals in a fair, transparent, and timely
          manner. We encourage feedback from our clients and stakeholders to continuously improve our services.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg mt-8 border border-blue-200">
          <h4 className="font-semibold text-[#033097] mb-2">Our Commitment</h4>
          <p className="text-gray-600">
            We are dedicated to maintaining the trust and confidence of our clients, regulatory bodies, and the market
            through consistent application of our policies and adherence to international best practices.
          </p>
        </div>
      </div>
    </AboutLayout>
  )
}
