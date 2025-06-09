"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"
import SuccessAnimation from "@/components/success-animation"

interface EnquireModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function EnquireModal({ isOpen, onClose }: EnquireModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call with timeout
    setTimeout(() => {
      console.log("Enquiry form submitted:", formData)
      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      })

      // Auto close modal after showing success for a few seconds
      setTimeout(() => {
        onClose()
        // Reset success state after modal is closed
        setTimeout(() => setIsSuccess(false), 300)
      }, 3000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
        <div className="bg-gradient-to-r from-[#033097] to-blue-600 text-white p-6">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-xl font-bold text-white">
                {isSuccess ? "Thank You!" : "Quick Enquiry"}
              </DialogTitle>
              <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20 h-8 w-8 p-0">
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-blue-100 text-sm">
              {isSuccess ? "We've received your enquiry" : "Get a quick quote for your certification needs"}
            </p>
          </DialogHeader>
        </div>

        <div className="p-6">
          {isSuccess ? (
            <SuccessAnimation message="Your enquiry has been submitted successfully!" />
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleChange}
                required
                className="border-gray-300 focus:border-[#033097] focus:ring-[#033097]"
                disabled={isSubmitting}
              />

              <Input
                type="email"
                name="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-gray-300 focus:border-[#033097] focus:ring-[#033097]"
                disabled={isSubmitting}
              />

              <Input
                type="tel"
                name="phone"
                placeholder="Your Phone Number *"
                value={formData.phone}
                onChange={handleChange}
                required
                className="border-gray-300 focus:border-[#033097] focus:ring-[#033097]"
                disabled={isSubmitting}
              />

              <Input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className="border-gray-300 focus:border-[#033097] focus:ring-[#033097]"
                disabled={isSubmitting}
              />

              <Textarea
                name="message"
                placeholder="Your Message *"
                value={formData.message}
                onChange={handleChange}
                required
                className="border-gray-300 focus:border-[#033097] focus:ring-[#033097] min-h-[100px]"
                disabled={isSubmitting}
              />

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="modal-recaptcha"
                  className="w-4 h-4 text-[#033097]"
                  required
                  disabled={isSubmitting}
                />
                <label htmlFor="modal-recaptcha" className="text-sm text-gray-600">
                  I'm not a robot
                </label>
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-[#033097] to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white"
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
                    "Submit Enquiry"
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
