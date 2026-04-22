"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface FinalCTAProps {
  onOpenModal: () => void
}

export function FinalCTA({ onOpenModal }: FinalCTAProps) {
  return (
    <section className="py-20 lg:py-28 bg-muted border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Ready to Take Control of Your Financial Future?
          </h2>

          {/* Subtext */}
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Schedule your complimentary financial review and discover how 
            personalized wealth management can transform your relationship 
            with money.
          </p>

          {/* CTA Button */}
          <Button
            onClick={onOpenModal}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-base font-medium group"
          >
            Book Your Free Financial Review
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Reassurance */}
          <p className="text-sm text-muted-foreground mt-6">
            No obligation. No pressure. Just a conversation about your goals.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
