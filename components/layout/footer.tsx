import Link from "next/link"
import { Linkedin, Twitter, Mail } from "lucide-react"

const socialLinks = [
  { href: "#", icon: Linkedin, label: "LinkedIn" },
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "mailto:contact@vaneandco.com", icon: Mail, label: "Email" },
]

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#services", label: "Services" },
  { href: "#faq", label: "FAQ" },
  { href: "/contact#top", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-semibold text-foreground tracking-tight">
                Vane & Co.
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Boutique fee-only wealth management for high-net-worth families. 
              Personalized strategies, fiduciary advice, and white-glove service.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Contact
            </h3>
            <address className="not-italic text-sm text-muted-foreground space-y-3">
              <p>123 Financial District</p>
              <p>San Francisco, CA 94111</p>
              <p>
                <Link
                  href="mailto:contact@vaneandco.com"
                  className="hover:text-foreground transition-colors"
                >
                  contact@vaneandco.com
                </Link>
              </p>
              <p>
                <Link
                  href="tel:+14155551234"
                  className="hover:text-foreground transition-colors"
                >
                  (415) 555-1234
                </Link>
              </p>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mt-12 pt-8">
          {/* Legal Disclaimer */}
          <p className="text-xs text-muted-foreground leading-relaxed mb-6">
            Vane & Co. Wealth Management is a registered investment adviser. 
            Information presented is for educational purposes only and does not 
            constitute investment advice. Past performance is not indicative of 
            future results. Investment involves risk, including the possible loss 
            of principal. Please consult with a qualified financial professional 
            before making any investment decisions.
          </p>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Vane & Co. Wealth Management. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                ADV Disclosure
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
