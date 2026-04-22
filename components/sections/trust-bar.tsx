"use client"

import { motion } from "framer-motion"

const credentials = [
  { label: "SEC", sublabel: "Registered" },
  { label: "CFA", sublabel: "Charterholder" },
  { label: "CFP", sublabel: "Certified" },
  { label: "Forbes", sublabel: "Featured" },
]

export function TrustBar() {
  return (
    <section className="py-12 bg-muted border-y border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {credentials.map((cred, index) => (
            <motion.div
              key={cred.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <span className="text-2xl font-bold text-muted-foreground/80">
                {cred.label}
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                {cred.sublabel}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
