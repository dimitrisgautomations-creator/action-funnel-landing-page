"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, CheckCircle, MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MobileNav } from "@/components/layout/mobile-nav"
import { Footer } from "@/components/layout/footer"

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#process", label: "Process" },
  { href: "/#services", label: "Services" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#faq", label: "FAQ" },
]

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "123 Financial District\nSan Francisco, CA 94111",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(415) 555-1234",
    href: "tel:+14155551234",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@vaneandco.com",
    href: "mailto:contact@vaneandco.com",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon - Fri: 9:00 AM - 5:00 PM PST",
  },
]

export default function ContactPage() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    portfolioSize: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission (no actual submission)
    setIsSubmitted(true)
  }

  const handleOpenModal = () => {
    // Scroll to form section
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass py-3">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-semibold text-foreground tracking-tight">
              Vane & Co.
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              onClick={handleOpenModal}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Book Your Free Review
            </Button>
          </div>

          <button
            onClick={() => setIsMobileNavOpen(true)}
            className="lg:hidden p-2 text-foreground hover:text-muted-foreground transition-colors"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        navLinks={navLinks}
        onOpenModal={handleOpenModal}
      />

      {/* Hero Section */}
      <section id="top" className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ready to take the first step toward financial clarity? 
              We&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section id="contact-form" className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="glass rounded-lg p-6 sm:p-8">
                {!isSubmitted ? (
                  <>
                    <h2 className="text-2xl font-semibold text-foreground mb-2">
                      Book Your Free Financial Review
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Fill out the form and we&apos;ll be in touch within 24 hours.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label
                            htmlFor="name"
                            className="text-sm font-medium text-foreground"
                          >
                            Full Name <span className="text-destructive">*</span>
                          </label>
                          <Input
                            id="name"
                            type="text"
                            placeholder="John Smith"
                            required
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
                          />
                        </div>

                        <div className="space-y-2">
                          <label
                            htmlFor="email"
                            className="text-sm font-medium text-foreground"
                          >
                            Email <span className="text-destructive">*</span>
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            required
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label
                            htmlFor="phone"
                            className="text-sm font-medium text-foreground"
                          >
                            Phone <span className="text-muted-foreground">(Optional)</span>
                          </label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="(555) 123-4567"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
                          />
                        </div>

                        <div className="space-y-2">
                          <label
                            htmlFor="portfolioSize"
                            className="text-sm font-medium text-foreground"
                          >
                            Portfolio Size <span className="text-muted-foreground">(Optional)</span>
                          </label>
                          <Input
                            id="portfolioSize"
                            type="text"
                            placeholder="$500K - $1M"
                            value={formData.portfolioSize}
                            onChange={(e) =>
                              setFormData({ ...formData, portfolioSize: e.target.value })
                            }
                            className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium text-foreground"
                        >
                          What brings you here?{" "}
                          <span className="text-muted-foreground">(Optional)</span>
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your financial goals, concerns, or questions..."
                          rows={4}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          className="bg-muted border-border text-foreground placeholder:text-muted-foreground resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        Request My Free Review
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        Your information is secure and will never be shared.
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-2">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      We&apos;ve received your request. Julian will reach out within 24 
                      hours to schedule your complimentary financial review.
                    </p>
                    <Button
                      onClick={() => {
                        setIsSubmitted(false)
                        setFormData({ name: "", email: "", phone: "", portfolioSize: "", message: "" })
                      }}
                      variant="outline"
                      className="border-border text-foreground hover:bg-muted"
                    >
                      Submit Another Request
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="text-foreground hover:text-primary transition-colors whitespace-pre-line"
                        >
                          {item.value}
                        </Link>
                      ) : (
                        <p className="text-foreground whitespace-pre-line">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-10 p-6 rounded-lg border border-border bg-muted/50">
                <h3 className="text-lg font-medium text-foreground mb-3">
                  What to Expect
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">1.</span>
                    <span>We&apos;ll reach out within 24 hours to schedule a call</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">2.</span>
                    <span>A 30-minute discovery conversation about your goals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">3.</span>
                    <span>A personalized assessment of your financial situation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">4.</span>
                    <span>No obligation - just clarity on your next steps</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-muted border-t border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Prefer to Talk First?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Sometimes a quick call is the best way to get started. 
              Reach out directly and let&apos;s discuss your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              >
                <Link href="tel:+14155551234">
                  <Phone className="mr-2 h-4 w-4" />
                  Call (415) 555-1234
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-muted px-8"
              >
                <Link href="mailto:contact@vaneandco.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
