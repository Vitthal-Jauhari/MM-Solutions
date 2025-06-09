"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import SuccessAnimation from "@/components/success-animation"

export default function Footer() {
  const [footerForm, setFooterForm] = useState({
    name: "",
    email: "",
    phone: "",
    captcha: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleFooterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call with timeout
    setTimeout(() => {
      console.log("Footer form submitted:", footerForm)
      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
        setFooterForm({
          name: "",
          email: "",
          phone: "",
          captcha: "",
        })
      }, 5000)
    }, 1000)
  }

  const handleFooterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFooterForm({
      ...footerForm,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Contact Form Section */}
      <div className="bg-gradient-to-r from-[#033097] via-blue-600 to-blue-800 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">
              Need ISO Certificate? Get a Quote Now or Call +91 8506070721
            </h2>
          </div>

          {isSuccess ? (
            <div className="max-w-md mx-auto bg-white rounded-lg p-6">
              <SuccessAnimation message="Your enquiry has been submitted successfully!" />
            </div>
          ) : (
            <form onSubmit={handleFooterSubmit} className="flex flex-wrap gap-4 justify-center items-end">
              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={footerForm.name}
                onChange={handleFooterChange}
                className="bg-white text-gray-800 max-w-xs"
                required
                disabled={isSubmitting}
              />
              <Input
                type="email"
                name="email"
                placeholder="Email Here"
                value={footerForm.email}
                onChange={handleFooterChange}
                className="bg-white text-gray-800 max-w-xs"
                required
                disabled={isSubmitting}
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={footerForm.phone}
                onChange={handleFooterChange}
                className="bg-white text-gray-800 max-w-xs"
                required
                disabled={isSubmitting}
              />
              <Input
                type="text"
                name="captcha"
                placeholder="Enter Captcha"
                value={footerForm.captcha}
                onChange={handleFooterChange}
                className="bg-white text-gray-800 max-w-xs"
                required
                disabled={isSubmitting}
              />
              <div className="bg-yellow-400 px-4 py-2 rounded text-gray-800 font-bold">7b6</div>
              <Button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 px-8 transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </div>
                ) : (
                  "Submit Now →"
                )}
              </Button>
            </form>
          )}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-[#033097]">MM</span>
                <div className="text-sm text-green-400 font-normal">Solutions</div>
              </div>
              <p className="text-gray-300 mb-4">
                We Deal In All Types Of IAF Accredited, Non - IAF, And Compliance Certificate.
              </p>
            </div>

            {/* ISO Certificates */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#ffffff]">ISO Certificates</h3>
              <ul className="space-y-2 text-gray-300">
                <li>→ ISO 9001:2015</li>
                <li>→ ISO 14001:2015</li>
                <li>→ ISO 45001:2018</li>
                <li>→ ISO 22000:2018</li>
                <li>→ ISO 27001:2013</li>
                <li>→ ISO 13485:2016</li>
              </ul>
            </div>

            {/* Location We Serve */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#ffffff]">Location We Serve</h3>
              <ul className="space-y-2 text-gray-300">
                <li>→ India</li>
                <li>→ Middle East</li>
                <li>→ Rest of the World</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#ffffff]">Contact info</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-2">
                  <span>📞</span>
                  <span className="text-[#033097]">+91 8506070721</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>✉️</span>
                  <span className="text-[#033097]">info@mmsolutions.co.in</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span>📍</span>
                  <div>
                    <p>217, LSC, Jaina Tower-III,</p>
                    <p>A1 Janakpuri,</p>
                    <p>New Delhi-110058</p>
                    <p>India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gradient-to-r from-[#033097] to-blue-600 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>Copyright © MM Solutions. All rights reserved.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <span>Privacy Policy</span>
              <span>|</span>
              <span>Terms & Conditions</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
