import type { Metadata } from "next"
import AboutLayout from "@/components/about-layout"

export const metadata: Metadata = {
  title: "Training Services - MM Solutions",
  description: "Comprehensive ISO training programs and certification courses by MM Solutions.",
}

export default function TrainingPage() {
  return (
    <AboutLayout title="Training Services" breadcrumb="Training" pageId="WP694" lastUpdated="07 Jun, 2025, 01:30AM">
      <div className="space-y-6">
        <p className="text-gray-600 leading-relaxed">
          MM Solutions Limited offers comprehensive training programs designed to enhance understanding of management
          systems and prepare organizations for successful certification.
        </p>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">ISO Management System Training</h3>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h4 className="font-semibold text-[#033097] mb-2">Foundation Courses</h4>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>• ISO 9001 Awareness Training</li>
              <li>• ISO 14001 Foundation</li>
              <li>• ISO 45001 Basics</li>
              <li>• ISO 27001 Introduction</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#033097] mb-2">Advanced Courses</h4>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>• Internal Auditor Training</li>
              <li>• Lead Auditor Certification</li>
              <li>• Management System Implementation</li>
              <li>• Risk Management Training</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Specialized Training Programs</h3>
        <p className="text-gray-600 leading-relaxed">
          We provide specialized training in various industry-specific standards:
        </p>
        <ul className="space-y-2 text-gray-600 mt-4">
          <li>• Quality Management Systems</li>
          <li>• Environmental Management</li>
          <li>• Occupational Health & Safety</li>
          <li>• Information Security Management</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#033097] mt-8">Training Delivery Methods</h3>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-[#033097]">Classroom Training</h4>
            <p className="text-gray-600 text-sm mt-2">Interactive face-to-face sessions with expert trainers</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-[#033097]">Virtual Training</h4>
            <p className="text-gray-600 text-sm mt-2">Online sessions with live interaction and Q&A</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-[#033097]">On-site Training</h4>
            <p className="text-gray-600 text-sm mt-2">Customized training at your organization</p>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mt-8 border border-blue-200">
          <h4 className="font-semibold text-[#033097] mb-2">Why Choose Our Training?</h4>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li>• Experienced and certified trainers</li>
            <li>• Practical, hands-on approach</li>
            <li>• Customized content for your industry</li>
            <li>• Post-training support and guidance</li>
            <li>• Certification upon successful completion</li>
          </ul>
        </div>
      </div>
    </AboutLayout>
  )
}
