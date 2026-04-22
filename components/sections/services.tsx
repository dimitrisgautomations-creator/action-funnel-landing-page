"use client"

import { motion } from "framer-motion"
import { Calculator, Building2, ShieldCheck, PiggyBank } from "lucide-react"

const services = [
  {
    icon: Calculator,
    title: "Comprehensive Tax Planning",
    description: "Strategic tax optimization to minimize your burden and maximize wealth retention across all life stages.",
  },
  {
    icon: Building2,
    title: "Estate & Legacy Planning",
    description: "Preserve and transfer your wealth efficiently with thoughtful estate strategies and succession planning.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance Review & Optimization",
    description: "Ensure your coverage aligns with your needs—no more, no less. We analyze and optimize your protection.",
  },
  {
    icon: PiggyBank,
    title: "Retirement Income Strategy",
    description: "Create sustainable income streams that support your lifestyle while preserving capital for the future.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-primary font-medium uppercase tracking-wider">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-4 text-balance">
            Comprehensive Wealth Management
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every aspect of your financial life is interconnected. We provide 
            holistic guidance to ensure every piece works together seamlessly.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-muted rounded-xl p-6 border border-border hover:border-primary/30 transition-colors group"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Pricing Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12 pt-12 border-t border-border"
        >
          <p className="text-muted-foreground">
            <span className="text-foreground font-semibold">Simple, Transparent Pricing:</span>{" "}
            1% AUM fee-only model. No commissions, no hidden fees.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
