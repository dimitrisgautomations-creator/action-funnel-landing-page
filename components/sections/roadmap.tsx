"use client"

import { motion } from "framer-motion"
import { Phone, FileText, Cog, RefreshCw } from "lucide-react"

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Discovery Call",
    description: "We start with a complimentary conversation to understand your goals, concerns, and financial situation.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Custom Plan",
    description: "Receive a personalized wealth strategy tailored to your unique circumstances and objectives.",
  },
  {
    icon: Cog,
    step: "03",
    title: "Implementation",
    description: "We execute your plan with precision, handling every detail from portfolio construction to tax optimization.",
  },
  {
    icon: RefreshCw,
    step: "04",
    title: "Ongoing Support",
    description: "Continuous monitoring, quarterly reviews, and proactive adjustments as your life evolves.",
  },
]

export function Roadmap() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-muted">
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
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-4 text-balance">
            A Clear Path to Financial Clarity
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our proven four-step process ensures your wealth strategy is built 
            on a foundation of understanding, precision, and ongoing care.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-xl p-6 hover:bg-white/10 transition-colors group"
            >
              {/* Step number */}
              <span className="text-xs text-primary font-medium">
                Step {step.step}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mt-4 mb-4 group-hover:bg-primary/20 transition-colors">
                <step.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
