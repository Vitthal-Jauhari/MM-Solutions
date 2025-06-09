import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Contact Us - MM Solutions",
  description: "Get in touch with MM Solutions for all your ISO certification needs. We're here to help!",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#033097] via-blue-600 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-xl text-blue-100">Get in touch with our certification experts</p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#033097] mb-2">CONTACT NOW</h2>
                <p className="text-gray-600">Have Question? Write a Message</p>
                <p className="text-gray-500 text-sm">We will catch you as early as we receive the message</p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    type="text"
                    placeholder="Enter your name *"
                    className="border-gray-300 focus:border-[#033097] focus:ring-[#033097]"
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Enter your email *"
                    className="border-gray-300 focus:border-[#033097] focus:ring-[#033097]"
                    required
                  />
                </div>

                <Input
                  type="tel"
                  placeholder="Enter your phone *"
                  className="border-gray-300 focus:border-[#033097] focus:ring-[#033097]"
                  required
                />

                <Select>
                  <SelectTrigger className="border-gray-300 focus:border-[#033097] focus:ring-[#033097]">
                    <SelectValue placeholder="Select Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="iso-9001">ISO 9001 Certification</SelectItem>
                    <SelectItem value="iso-14001">ISO 14001 Certification</SelectItem>
                    <SelectItem value="iso-22000">ISO 22000 Certification</SelectItem>
                    <SelectItem value="iso-27001">ISO 27001 Certification</SelectItem>
                    <SelectItem value="iso-45001">ISO 45001 Certification</SelectItem>
                    <SelectItem value="other">Other Services</SelectItem>
                  </SelectContent>
                </Select>

                <Textarea
                  placeholder="Message *"
                  className="border-gray-300 focus:border-[#033097] focus:ring-[#033097] min-h-[150px]"
                  required
                />

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="recaptcha" className="w-4 h-4 text-[#033097]" required />
                  <label htmlFor="recaptcha" className="text-sm text-gray-600">
                    I'm not a robot
                  </label>
                </div>

                <div className="text-xs text-gray-500">reCAPTCHA Privacy - Terms</div>

                <Button
                  type="submit"
                  className="bg-gradient-to-r from-[#033097] to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Submit
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-[#033097] mb-6">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-[#033097]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Phone:</h3>
                      <p className="text-[#033097] font-semibold">+91 8506070721</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-[#033097]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Email:</h3>
                      <p className="text-gray-600">
                        Our support team will get back to you in 24-h during standard business hours.
                      </p>
                      <p className="text-[#033097] font-semibold">info@mmsolutions.co.in</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-[#033097]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Location:</h3>
                      <p className="text-gray-600">217, LSC, Jaina Tower-III, A1 Janakpuri, New Delhi-110058, India</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-[#033097]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Business Hours:</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-[#033097] mb-4">Our Location</h2>
                <div className="aspect-video w-full bg-gray-200 rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.246947699722!2d77.06850307550047!3d28.62235997567035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04c5a1bb3529%3A0xc1965ce118dae111!2sJaina%20Tower%20III!5e0!3m2!1sen!2sin!4v1749322424048!5m2!1sen!2sin"width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    >
                  </iframe>
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
