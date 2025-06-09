import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle } from "lucide-react"
import { Phone } from "lucide-react" // Import Phone component

export const metadata: Metadata = {
  title: "Enquire Now - MM Solutions",
  description: "Request a quote for ISO certification services from MM Solutions. Fast and professional service.",
}

export default function EnquirePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#033097] via-blue-600 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Enquire Now</h1>
            <p className="text-xl text-blue-100">Get a personalized quote for your certification needs</p>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enquiry Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#033097] mb-2">Request a Quote</h2>
                <p className="text-gray-600">
                  Fill out the form below and our team will provide you with a customized quote for your certification
                  needs.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    type="text"
                    placeholder="Company Name *"
                    className="border-gray-300 focus:border-[#033097] focus:ring-[#033097]"
                    required
                  />
                  <Input
                    type="text"
                    placeholder="Contact Person *"
                    className="border-gray-300 focus:border-[#033097] focus:ring-[#033097]"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    type="email"
                    placeholder="Email Address *"
                    className="border-gray-300 focus:border-[#033097] focus:ring-[#033097]"
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number *"
                    className="border-gray-300 focus:border-[#033097] focus:ring-[#033097]"
                    required
                  />
                </div>

                <Select>
                  <SelectTrigger className="border-gray-300 focus:border-[#033097] focus:ring-[#033097]">
                    <SelectValue placeholder="Certification Type *" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="iso-9001">ISO 9001 - Quality Management</SelectItem>
                    <SelectItem value="iso-14001">ISO 14001 - Environmental Management</SelectItem>
                    <SelectItem value="iso-22000">ISO 22000 - Food Safety Management</SelectItem>
                    <SelectItem value="iso-27001">ISO 27001 - Information Security</SelectItem>
                    <SelectItem value="iso-28000">ISO 28000 - Supply Chain Security</SelectItem>
                    <SelectItem value="iso-31000">ISO 31000 - Risk Management</SelectItem>
                    <SelectItem value="iso-20000">ISO 20000 - IT Service Management</SelectItem>
                    <SelectItem value="iso-50001">ISO 50001 - Energy Management</SelectItem>
                    <SelectItem value="iso-45001">ISO 45001 - Occupational Health & Safety</SelectItem>
                    <SelectItem value="haccp">HACCP - Food Safety</SelectItem>
                    <SelectItem value="gmp">GMP - Good Manufacturing Practice</SelectItem>
                    <SelectItem value="glp">GLP - Good Laboratory Practice</SelectItem>
                    <SelectItem value="ohsas-18001">OHSAS 18001 - Occupational Health & Safety</SelectItem>
                    <SelectItem value="sa-8000">SA 8000 - Social Accountability</SelectItem>
                  </SelectContent>
                </Select>

                <Input
                  type="text"
                  placeholder="Company Address"
                  className="border-gray-300 focus:border-[#033097] focus:ring-[#033097]"
                />

                <Select>
                  <SelectTrigger className="border-gray-300 focus:border-[#033097] focus:ring-[#033097]">
                    <SelectValue placeholder="Number of Employees" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1-10 employees</SelectItem>
                    <SelectItem value="11-50">11-50 employees</SelectItem>
                    <SelectItem value="51-100">51-100 employees</SelectItem>
                    <SelectItem value="101-250">101-250 employees</SelectItem>
                    <SelectItem value="251-500">251-500 employees</SelectItem>
                    <SelectItem value="501+">501+ employees</SelectItem>
                  </SelectContent>
                </Select>

                <Textarea
                  placeholder="Additional Information or Requirements"
                  className="border-gray-300 focus:border-[#033097] focus:ring-[#033097] min-h-[150px]"
                />

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="recaptcha" className="w-4 h-4 text-[#033097]" required />
                  <label htmlFor="recaptcha" className="text-sm text-gray-600">
                    I'm not a robot
                  </label>
                </div>

                <Button
                  type="submit"
                  className="bg-gradient-to-r from-[#033097] to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Submit Enquiry
                </Button>
              </form>
            </div>

            {/* Benefits and Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-[#033097] mb-6">Why Choose MM Solutions?</h2>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Expert Consultation</h3>
                      <p className="text-gray-600">
                        Our team of experienced consultants provides personalized guidance throughout the certification
                        process.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Competitive Pricing</h3>
                      <p className="text-gray-600">
                        We offer cost-effective certification solutions without compromising on quality or service.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Quick Turnaround</h3>
                      <p className="text-gray-600">
                        Efficient certification process with minimal disruption to your business operations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Comprehensive Support</h3>
                      <p className="text-gray-600">
                        End-to-end assistance from initial consultation to successful certification.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Post-Certification Services</h3>
                      <p className="text-gray-600">
                        Ongoing support for maintaining compliance and handling surveillance audits.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#033097] to-blue-600 rounded-lg shadow-lg p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Get a Fast Response</h2>
                <p className="mb-6">
                  Our team typically responds to all enquiries within 24 hours. For urgent matters, please call us
                  directly.
                </p>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span className="font-semibold">+91 8506070721</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
