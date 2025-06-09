"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import EnquireModal from "@/components/enquire-modal"
import MobileMenu from "@/components/mobile-menu"

export default function Header() {
  const [isEnquireModalOpen, setIsEnquireModalOpen] = useState(false)

  return (
    <>
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Link href="/" className="text-2xl font-bold">
                <span className="text-[#033097]">MM</span>
                <div className="text-sm text-[#033097] font-normal">Solutions</div>
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-[#033097] font-medium">
                HOME
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger
                  className="text-gray-700 hover:text-[#033097] font-medium flex items-center gap-1"
                  asChild
                >
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-gray-700 hover:text-[#033097] hover:bg-transparent font-medium justify-start"
                  >
                    ABOUT US
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuItem className="p-0">
                    <Link href="/about/corporate-profile" className="w-full h-full px-2 py-1.5 block hover:bg-gray-50">
                      Corporate Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-0">
                    <Link href="/about/accreditations" className="w-full h-full px-2 py-1.5 block hover:bg-gray-50">
                      Accreditations
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-0">
                    <Link href="/about/why-ecl" className="w-full h-full px-2 py-1.5 block hover:bg-gray-50">
                      Why MM Solutions
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-0">
                    <Link href="/about/policy" className="w-full h-full px-2 py-1.5 block hover:bg-gray-50">
                      Policy
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-0">
                    <Link href="/about/training" className="w-full h-full px-2 py-1.5 block hover:bg-gray-50">
                      Training
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-0">
                    <Link
                      href="/about/certifications-methodology"
                      className="w-full h-full px-2 py-1.5 block hover:bg-gray-50"
                    >
                      Certifications Methodology
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger
                  className="text-gray-700 hover:text-[#033097] font-medium flex items-center gap-1"
                  asChild
                >
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-gray-700 hover:text-[#033097] hover:bg-transparent font-medium justify-start"
                  >
                    ISO CERTIFICATES
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuItem className="p-0">
                    <Link
                      href="/iso-certificates/iso-9001"
                      className="w-full h-full px-2 py-1.5 block hover:bg-gray-50"
                    >
                      ISO 9001 Certification
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-0">
                    <Link
                      href="/iso-certificates/iso-14001"
                      className="w-full h-full px-2 py-1.5 block hover:bg-gray-50"
                    >
                      ISO 14001 Certification
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-0">
                    <Link
                      href="/iso-certificates/iso-22000"
                      className="w-full h-full px-2 py-1.5 block hover:bg-gray-50"
                    >
                      ISO 22000 Certification
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-0">
                    <Link
                      href="/iso-certificates/iso-27001"
                      className="w-full h-full px-2 py-1.5 block hover:bg-gray-50"
                    >
                      ISO 27001 Certification
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-0">
                    <Link
                      href="/iso-certificates/iso-28000"
                      className="w-full h-full px-2 py-1.5 block hover:bg-gray-50"
                    >
                      ISO 28000 Certification
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-0">
                    <Link
                      href="/iso-certificates/iso-31000"
                      className="w-full h-full px-2 py-1.5 block hover:bg-gray-50"
                    >
                      ISO 31000 Certification
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-0">
                    <Link
                      href="/iso-certificates/iso-20000"
                      className="w-full h-full px-2 py-1.5 block hover:bg-gray-50"
                    >
                      ISO 20000 Certification
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-0">
                    <Link
                      href="/iso-certificates/iso-50001"
                      className="w-full h-full px-2 py-1.5 block hover:bg-gray-50"
                    >
                      ISO 50001 Certification
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-0">
                    <Link
                      href="/iso-certificates/iso-45001"
                      className="w-full h-full px-2 py-1.5 block hover:bg-gray-50"
                    >
                      ISO 45001 Certification
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger
                  className="text-gray-700 hover:text-[#033097] font-medium flex items-center gap-1"
                  asChild
                >
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-gray-700 hover:text-[#033097] hover:bg-transparent font-medium justify-start"
                  >
                    OTHER CERTIFICATES
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuItem className="p-0">
                    <Link href="/other-certificates/haccp" className="w-full h-full px-2 py-1.5 block hover:bg-gray-50">
                      HACCP Certification
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-0">
                    <Link href="/other-certificates/gmp" className="w-full h-full px-2 py-1.5 block hover:bg-gray-50">
                      GMP Certification
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-0">
                    <Link href="/other-certificates/glp" className="w-full h-full px-2 py-1.5 block hover:bg-gray-50">
                      GLP Certification
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-0">
                    <Link
                      href="/other-certificates/ohsas-18001"
                      className="w-full h-full px-2 py-1.5 block hover:bg-gray-50"
                    >
                      OHSAS 18001 Certification
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-0">
                    <Link
                      href="/other-certificates/sa-8000"
                      className="w-full h-full px-2 py-1.5 block hover:bg-gray-50"
                    >
                      SA 8000 Certification
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link href="/contact" className="text-gray-700 hover:text-[#033097] font-medium">
                CONTACT US
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                onClick={() => setIsEnquireModalOpen(true)}
                className="bg-gradient-to-r from-[#033097] to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white px-6 py-2 rounded-full"
              >
                Enquire Now
              </Button>
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>

      <EnquireModal isOpen={isEnquireModalOpen} onClose={() => setIsEnquireModalOpen(false)} />
    </>
  )
}
