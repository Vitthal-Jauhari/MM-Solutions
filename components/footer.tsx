import Link from "next/link"
import { ArrowRight, Globe, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const certifications = [
  { label: "ISO 9001:2015", href: "/iso-certificates/iso-9001" },
  { label: "ISO 14001:2015", href: "/iso-certificates/iso-14001" },
  { label: "ISO 45001:2018", href: "/iso-certificates/iso-45001" },
  { label: "ISO 22000:2018", href: "/iso-certificates/iso-22000" },
  { label: "ISO 27001", href: "/iso-certificates/iso-27001" },
  { label: "ISO 50001", href: "/iso-certificates/iso-50001" },
]

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Other Certifications", href: "/other-certificates/haccp" },
  { label: "Enquire Now", href: "/enquire" },
  { label: "Contact Us", href: "/contact" },
]

const serviceRegions = ["India", "Middle East", "Rest of the World"]

const footerLinkClassName =
  "group inline-flex items-center gap-2 text-base text-slate-300 transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08172a]"

const contactLinkClassName =
  "group flex items-start gap-3 text-base text-slate-300 transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08172a]"

export default function Footer() {
  return (
    <footer aria-label="Site footer" className="text-white">
      <section
        aria-labelledby="footer-cta-title"
        className="bg-gradient-to-r from-[#063494] via-[#1556d7] to-[#2468ed]"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between md:py-14">
          <div className="max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-blue-100">
              Have questions?
            </p>
            <h2 id="footer-cta-title" className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Need help choosing the right ISO certification?
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-blue-100 md:text-lg">
              Talk to our experts and get a customized quote for your business needs.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 md:items-center">
            <Button
              asChild
              size="lg"
              className="h-14 w-full rounded-full bg-white px-8 text-base font-semibold text-[#033097] shadow-lg transition hover:bg-blue-50 hover:text-[#033097] sm:w-auto"
            >
              <Link href="/enquire">
                Get a Free Quote
                <ArrowRight aria-hidden="true" data-icon="inline-end" />
              </Link>
            </Button>
            <p className="text-sm text-blue-100">
              or call{" "}
              <a className="font-semibold text-white hover:underline" href="tel:+918506070721">
                +91 8506070721
              </a>
            </p>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-b from-[#0d1d31] to-[#071322]">
        <div className="mx-auto grid max-w-screen-2xl gap-x-8 gap-y-10 px-5 py-12 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.05fr_1fr_0.9fr_1.35fr] lg:gap-x-0 lg:py-14">
          <section aria-labelledby="footer-brand-title" className="lg:pr-8">
            <Link href="/" aria-label="MM Solutions home" className="inline-flex flex-col leading-none">
              <span id="footer-brand-title" className="sr-only">
                MM Solutions
              </span>
              <span aria-hidden="true" className="text-5xl font-extrabold tracking-tight text-white">
                MM
              </span>
              <span aria-hidden="true" className="mt-1 text-xl font-semibold text-emerald-400">
                Solutions
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-base leading-7 text-slate-300">
              IAF-accredited, non-IAF, and compliance certification services that help businesses build trust through
              globally recognized standards.
            </p>
            <div className="mt-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Connect with us</p>
              <div className="flex gap-3">
                <a
                  href="tel:+918506070721"
                  aria-label="Call MM Solutions"
                  className="inline-flex size-11 items-center justify-center rounded-full bg-blue-600 text-white transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1d31]"
                >
                  <Phone aria-hidden="true" className="size-4" />
                </a>
                <a
                  href="mailto:info@mmsolutions.co.in"
                  aria-label="Email MM Solutions"
                  className="inline-flex size-11 items-center justify-center rounded-full bg-slate-700 text-white transition-colors hover:bg-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1d31]"
                >
                  <Mail aria-hidden="true" className="size-4" />
                </a>
                <Link
                  href="/contact"
                  aria-label="Visit the MM Solutions contact page"
                  className="inline-flex size-11 items-center justify-center rounded-full bg-slate-700 text-white transition-colors hover:bg-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1d31]"
                >
                  <MapPin aria-hidden="true" className="size-4" />
                </Link>
              </div>
            </div>
          </section>

          <section
            aria-labelledby="footer-certifications-title"
            className="border-t border-white/10 pt-8 sm:border-t-0 sm:pt-0 lg:border-l lg:border-white/10 lg:pl-8 lg:pr-8 lg:pt-0"
          >
            <h2 id="footer-certifications-title" className="mb-5 text-lg font-semibold text-white xl:text-xl">
              ISO Certifications
            </h2>
            <ul className="flex flex-col gap-3">
              {certifications.map((certification) => (
                <li key={certification.href}>
                  <Link className={footerLinkClassName} href={certification.href}>
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 shrink-0 text-blue-400 transition-transform group-hover:translate-x-1"
                    />
                    <span>{certification.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <nav
            aria-labelledby="footer-quick-links-title"
            className="border-t border-white/10 pt-8 sm:border-t-0 sm:pt-0 lg:border-l lg:border-white/10 lg:pl-8 lg:pr-8 lg:pt-0"
          >
            <h2 id="footer-quick-links-title" className="mb-5 text-lg font-semibold text-white xl:text-xl">
              Quick Links
            </h2>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link className={footerLinkClassName} href={link.href}>
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 shrink-0 text-blue-400 transition-transform group-hover:translate-x-1"
                    />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section
            aria-labelledby="footer-contact-title"
            className="border-t border-white/10 pt-8 sm:border-t-0 sm:pt-0 lg:border-l lg:border-white/10 lg:pl-8 lg:pt-0"
          >
            <h2 id="footer-contact-title" className="mb-5 text-lg font-semibold text-white xl:text-xl">
              Contact Us
            </h2>
            <div className="flex flex-col gap-4">
              <a className={contactLinkClassName} href="tel:+918506070721">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-700 text-white">
                  <Phone aria-hidden="true" className="size-4" />
                </span>
                <span className="pt-0.5">
                  <span className="block font-medium text-slate-200">+91 8506070721</span>
                  <span className="mt-1 block text-sm text-slate-400">Call us</span>
                </span>
              </a>
              <a className={contactLinkClassName} href="mailto:info@mmsolutions.co.in">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-700 text-white">
                  <Mail aria-hidden="true" className="size-4" />
                </span>
                <span className="min-w-0 pt-0.5">
                  <span className="block break-all font-medium text-slate-200">info@mmsolutions.co.in</span>
                  <span className="mt-1 block text-sm text-slate-400">Email us</span>
                </span>
              </a>
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-700 text-white">
                  <MapPin aria-hidden="true" className="size-4" />
                </span>
                <address className="pt-0.5 not-italic leading-6">
                  217, LSC, Jaina Tower-III,
                  <br />
                  A1 Janakpuri, New Delhi-110058
                  <br />
                  India
                </address>
              </div>
            </div>

            <Separator className="my-5 bg-white/10" />

            <div>
              <h3 className="mb-3 text-sm font-semibold text-white">Where We Serve</h3>
              <ul aria-label="Service regions" className="flex flex-wrap gap-2">
                {serviceRegions.map((region) => (
                  <li
                    key={region}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-500/70 px-3 py-1.5 text-xs text-slate-200"
                  >
                    <Globe aria-hidden="true" className="size-3.5 text-blue-300" />
                    {region}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        <Separator className="bg-white/10" />

        <div className="mx-auto flex max-w-screen-2xl flex-col gap-3 px-5 py-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} MM Solutions. All rights reserved.</p>
          <nav aria-label="Footer legal links" className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/about/policy" className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
              Company Policy
            </Link>
            <Link href="/contact" className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
