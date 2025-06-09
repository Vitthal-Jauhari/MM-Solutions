"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Menu } from "lucide-react"
import EnquireModal from "@/components/enquire-modal"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [isEnquireModalOpen, setIsEnquireModalOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle className="text-left">
              <span className="text-[#033097]">MM</span>
              <span className="text-sm text-[#033097] block font-normal">Solutions</span>
            </SheetTitle>
          </SheetHeader>

          <div className="mt-6 space-y-4">
            <Link href="/" className="block py-2 text-gray-700 hover:text-[#033097] font-medium" onClick={closeMenu}>
              HOME
            </Link>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="about">
                <AccordionTrigger className="text-gray-700 hover:text-[#033097] font-medium">ABOUT US</AccordionTrigger>
                <AccordionContent className="space-y-2 pl-4">
                  <Link
                    href="/about/corporate-profile"
                    className="block py-2 text-gray-600 hover:text-[#033097]"
                    onClick={closeMenu}
                  >
                    Corporate Profile
                  </Link>
                  <Link
                    href="/about/accreditations"
                    className="block py-2 text-gray-600 hover:text-[#033097]"
                    onClick={closeMenu}
                  >
                    Accreditations
                  </Link>
                  <Link
                    href="/about/why-ecl"
                    className="block py-2 text-gray-600 hover:text-[#033097]"
                    onClick={closeMenu}
                  >
                    Why MM Solutions
                  </Link>
                  <Link
                    href="/about/policy"
                    className="block py-2 text-gray-600 hover:text-[#033097]"
                    onClick={closeMenu}
                  >
                    Policy
                  </Link>
                  <Link
                    href="/about/training"
                    className="block py-2 text-gray-600 hover:text-[#033097]"
                    onClick={closeMenu}
                  >
                    Training
                  </Link>
                  <Link
                    href="/about/certifications-methodology"
                    className="block py-2 text-gray-600 hover:text-[#033097]"
                    onClick={closeMenu}
                  >
                    Certifications Methodology
                  </Link>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="iso-certificates">
                <AccordionTrigger className="text-gray-700 hover:text-[#033097] font-medium">
                  ISO CERTIFICATES
                </AccordionTrigger>
                <AccordionContent className="space-y-2 pl-4">
                  <Link
                    href="/iso-certificates/iso-9001"
                    className="block py-2 text-gray-600 hover:text-[#033097]"
                    onClick={closeMenu}
                  >
                    ISO 9001 Certification
                  </Link>
                  <Link
                    href="/iso-certificates/iso-14001"
                    className="block py-2 text-gray-600 hover:text-[#033097]"
                    onClick={closeMenu}
                  >
                    ISO 14001 Certification
                  </Link>
                  <Link
                    href="/iso-certificates/iso-22000"
                    className="block py-2 text-gray-600 hover:text-[#033097]"
                    onClick={closeMenu}
                  >
                    ISO 22000 Certification
                  </Link>
                  <Link
                    href="/iso-certificates/iso-27001"
                    className="block py-2 text-gray-600 hover:text-[#033097]"
                    onClick={closeMenu}
                  >
                    ISO 27001 Certification
                  </Link>
                  <Link
                    href="/iso-certificates/iso-28000"
                    className="block py-2 text-gray-600 hover:text-[#033097]"
                    onClick={closeMenu}
                  >
                    ISO 28000 Certification
                  </Link>
                  <Link
                    href="/iso-certificates/iso-31000"
                    className="block py-2 text-gray-600 hover:text-[#033097]"
                    onClick={closeMenu}
                  >
                    ISO 31000 Certification
                  </Link>
                  <Link
                    href="/iso-certificates/iso-20000"
                    className="block py-2 text-gray-600 hover:text-[#033097]"
                    onClick={closeMenu}
                  >
                    ISO 20000 Certification
                  </Link>
                  <Link
                    href="/iso-certificates/iso-50001"
                    className="block py-2 text-gray-600 hover:text-[#033097]"
                    onClick={closeMenu}
                  >
                    ISO 50001 Certification
                  </Link>
                  <Link
                    href="/iso-certificates/iso-45001"
                    className="block py-2 text-gray-600 hover:text-[#033097]"
                    onClick={closeMenu}
                  >
                    ISO 45001 Certification
                  </Link>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="other-certificates">
                <AccordionTrigger className="text-gray-700 hover:text-[#033097] font-medium">
                  OTHER CERTIFICATES
                </AccordionTrigger>
                <AccordionContent className="space-y-2 pl-4">
                  <Link
                    href="/other-certificates/haccp"
                    className="block py-2 text-gray-600 hover:text-[#033097]"
                    onClick={closeMenu}
                  >
                    HACCP Certification
                  </Link>
                  <Link
                    href="/other-certificates/gmp"
                    className="block py-2 text-gray-600 hover:text-[#033097]"
                    onClick={closeMenu}
                  >
                    GMP Certification
                  </Link>
                  <Link
                    href="/other-certificates/glp"
                    className="block py-2 text-gray-600 hover:text-[#033097]"
                    onClick={closeMenu}
                  >
                    GLP Certification
                  </Link>
                  <Link
                    href="/other-certificates/ohsas-18001"
                    className="block py-2 text-gray-600 hover:text-[#033097]"
                    onClick={closeMenu}
                  >
                    OHSAS 18001 Certification
                  </Link>
                  <Link
                    href="/other-certificates/sa-8000"
                    className="block py-2 text-gray-600 hover:text-[#033097]"
                    onClick={closeMenu}
                  >
                    SA 8000 Certification
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Link
              href="/contact"
              className="block py-2 text-gray-700 hover:text-[#033097] font-medium"
              onClick={closeMenu}
            >
              CONTACT US
            </Link>

            <Button
              onClick={() => {
                closeMenu()
                setIsEnquireModalOpen(true)
              }}
              className="w-full bg-gradient-to-r from-[#033097] to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white mt-4"
            >
              Enquire Now
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <EnquireModal isOpen={isEnquireModalOpen} onClose={() => setIsEnquireModalOpen(false)} />
    </>
  )
}
