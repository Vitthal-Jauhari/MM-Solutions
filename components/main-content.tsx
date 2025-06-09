import ContactForm from "@/components/contact-form"
import { Button } from "@/components/ui/button"

export default function MainContent() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#033097] mb-6">ISO Certification</h2>

            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed mb-4">
                At MM Solutions, we follow ISO 9001 standards to ensure our quality management system delivers
                consistent value to our clients. ISO 9001 is the globally recognized benchmark for quality, trusted by
                over a million organizations across more than 170 countries.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                Our commitment to ISO 9001 reflects our focus on customer satisfaction, leadership-driven quality,
                streamlined processes, and a culture of continuous improvement. By aligning with these principles, MM
                Solutions guarantees reliable, high-quality certification services that drive business excellence.
              </p>
            </div>

            <Button className="bg-gradient-to-r from-[#033097] to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
              Contact Now →
            </Button>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-[#033097] mb-4">ISO Certification Cost</h3>
              <p className="text-gray-600 leading-relaxed">
                Various factors decide cost of certification like accreditation, board, certification body etc. We deal
                in both IAF (International Accreditation Forum) and Non-IAF certificates. IAF accredited certificates
                are valid for international recognition and compliance.
              </p>
            </div>
          </div>

          <div className="lg:pl-8">
            <ContactForm isHomepage={true} />
          </div>
        </div>
      </div>
    </section>
  )
}
