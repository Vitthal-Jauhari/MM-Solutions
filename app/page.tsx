import type { Metadata } from "next"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import MainContent from "@/components/main-content"
import ProcessSteps from "@/components/process-steps"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "MM Solutions - ISO Certification Services",
  description: "Professional ISO certification services including ISO 9001, ISO 14001, ISO 45001 and more.",
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <MainContent />
      <ProcessSteps />
      <Footer />
    </div>
  )
}
