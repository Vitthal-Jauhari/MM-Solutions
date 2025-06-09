"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import SuccessAnimation from "@/components/success-animation"

interface ContactFormProps {
  variant?: "default" | "sidebar"
  certificationType?: string
  isHomepage?: boolean
  hideDropdown?: boolean
}

export default function ContactForm({
  variant = "default",
  certificationType,
  isHomepage = false,
  hideDropdown = false,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    address: "",
    isoCertification: "",
    selectedCertification: "",
  })

  const [captchaCode, setCaptchaCode] = useState("")
  const [inputCaptcha, setInputCaptcha] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    generateCaptcha()
  }, [])

  const generateCaptcha = () => {
    const newCaptcha = Math.random().toString(36).substring(2, 8).toUpperCase()
    setCaptchaCode(newCaptcha)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputCaptcha !== captchaCode) {
      alert("Captcha code is incorrect. Please try again.")
      generateCaptcha()
      setInputCaptcha("")
      return
    }

    setIsSubmitting(true)

    // Simulate API call with timeout
    setTimeout(() => {
      console.log("Form submitted:", formData)
      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          address: "",
          isoCertification: "",
          selectedCertification: "",
        })
        setInputCaptcha("")
        generateCaptcha()
      }, 5000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleCaptchaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCaptcha(e.target.value)
  }

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      selectedCertification: value,
    })
  }

  // Dynamic form title based on certification type
  const getFormTitle = () => {
    if (certificationType) {
      return `Let's get you an ${certificationType} Certification!`
    }
    return "Need ISO Certification?"
  }

  const getFormSubtitle = () => {
    if (certificationType) {
      return `Fill Below Details For ${certificationType} Certification or Call +91 8506070721`
    }
    return "Fill Below Details For Call Back or Call +91 8506070721"
  }

  const certificationOptions = [
    { value: "iso-9001", label: "ISO 9001 - Quality Management" },
    { value: "iso-14001", label: "ISO 14001 - Environmental Management" },
    { value: "iso-22000", label: "ISO 22000 - Food Safety Management" },
    { value: "iso-27001", label: "ISO 27001 - Information Security" },
    { value: "iso-28000", label: "ISO 28000 - Supply Chain Security" },
    { value: "iso-31000", label: "ISO 31000 - Risk Management" },
    { value: "iso-20000", label: "ISO 20000 - IT Service Management" },
    { value: "iso-50001", label: "ISO 50001 - Energy Management" },
    { value: "iso-45001", label: "ISO 45001 - Occupational Health & Safety" },
    { value: "haccp", label: "HACCP - Food Safety" },
    { value: "gmp", label: "GMP - Good Manufacturing Practice" },
    { value: "glp", label: "GLP - Good Laboratory Practice" },
    { value: "ohsas-18001", label: "OHSAS 18001 - Occupational Health & Safety" },
    { value: "sa-8000", label: "SA 8000 - Social Accountability" },
  ]

  // Show dropdown when certification type is not specified and not explicitly hidden
  const shouldShowDropdown = !certificationType && !hideDropdown

  return (
    <Card className="border-2 border-gray-200 shadow-xl bg-white">
      <CardHeader className="bg-gradient-to-r from-[#033097] to-blue-600 text-white">
        <CardTitle className="text-xl font-bold text-white">{getFormTitle()}</CardTitle>
        <p className="text-sm text-blue-100">{getFormSubtitle()}</p>
      </CardHeader>

      <CardContent className="p-6 space-y-4">
        {isSuccess ? (
          <SuccessAnimation message="Your form has been submitted successfully!" />
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              name="name"
              placeholder="Enter Your Name *"
              value={formData.name}
              onChange={handleChange}
              required
              className="border-gray-300 focus:border-[#033097] focus:ring-[#033097]"
              disabled={isSubmitting}
            />

            <Input
              type="email"
              name="email"
              placeholder="Enter Your Email *"
              value={formData.email}
              onChange={handleChange}
              required
              className="border-gray-300 focus:border-[#033097] focus:ring-[#033097]"
              disabled={isSubmitting}
            />

            <Input
              type="tel"
              name="phone"
              placeholder="Enter Your Phone No *"
              value={formData.phone}
              onChange={handleChange}
              required
              className="border-gray-300 focus:border-[#033097] focus:ring-[#033097]"
              disabled={isSubmitting}
            />

            {/* Show certification dropdown when appropriate */}
            {shouldShowDropdown && (
              <Select onValueChange={handleSelectChange} disabled={isSubmitting}>
                <SelectTrigger className="border-gray-300 focus:border-[#033097] focus:ring-[#033097]">
                  <SelectValue placeholder="Select Certification Type *" />
                </SelectTrigger>
                <SelectContent>
                  {certificationOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}

            <Textarea
              name="message"
              placeholder="Message For Us *"
              value={formData.message}
              onChange={handleChange}
              required
              className="border-gray-300 focus:border-[#033097] focus:ring-[#033097] min-h-[100px]"
              disabled={isSubmitting}
            />

            <div className="flex items-center gap-4">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="recaptcha"
                  className="w-4 h-4 text-[#033097]"
                  required
                  disabled={isSubmitting}
                />
                <label htmlFor="recaptcha" className="text-sm text-gray-600">
                  I'm not a robot
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <Input
                  type="text"
                  placeholder="Enter Captcha"
                  value={inputCaptcha}
                  onChange={handleCaptchaChange}
                  className="border-gray-300 focus:border-[#033097] focus:ring-[#033097] w-32"
                  required
                  disabled={isSubmitting}
                />
                <div className="bg-yellow-400 px-4 py-2 rounded text-gray-800 font-bold">{captchaCode}</div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-semibold py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
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
                "Submit →"
              )}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
