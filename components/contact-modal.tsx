"use client"

import { useState } from "react"
import { X, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission (no actual submission)
    setIsSubmitted(true)
  }

  const handleClose = () => {
    // Reset state when closing
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", message: "" })
    }, 300)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl text-foreground">
                Book Your Free Financial Review
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Fill out the form below and we&apos;ll be in touch within 24 hours.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              {/* Name */}
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

              {/* Email */}
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

              {/* Phone */}
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

              {/* Message */}
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
                  placeholder="Tell us about your financial goals or concerns..."
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-muted border-border text-foreground placeholder:text-muted-foreground resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Request My Free Review
              </Button>

              {/* Privacy note */}
              <p className="text-xs text-muted-foreground text-center">
                Your information is secure and will never be shared.
              </p>
            </form>
          </>
        ) : (
          /* Success State */
          <div className="py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Thank You!
            </h3>
            <p className="text-muted-foreground mb-6">
              We&apos;ve received your request. Julian will reach out within 24 
              hours to schedule your complimentary financial review.
            </p>
            <Button
              onClick={handleClose}
              variant="outline"
              className="border-border text-foreground hover:bg-muted"
            >
              Close
            </Button>
          </div>
        )}

        {/* Close button (visible when not submitted) */}
        {!isSubmitted && (
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            aria-label="Close"
          >
            <X className="h-4 w-4 text-foreground" />
          </button>
        )}
      </DialogContent>
    </Dialog>
  )
}
