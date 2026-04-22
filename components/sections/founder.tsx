"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function Founder() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square max-w-md mx-auto lg:mx-0"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent" />
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Julian Vane, CFA, CFP - Founder of Vane & Co."
              width={500}
              height={500}
              className="rounded-2xl object-cover w-full h-full"
              priority
            />
            {/* Floating credential badge */}
            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3">
              <p className="text-sm font-semibold text-foreground">Julian Vane</p>
              <p className="text-xs text-muted-foreground">CFA, CFP</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-sm text-primary font-medium uppercase tracking-wider">
              Meet Your Advisor
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
              Wealth Management Built on Trust, Not Transactions
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                After 15 years at major financial institutions, I founded Vane & Co. 
                with a simple belief: wealth management should be personal, not 
                transactional. My clients deserve an advisor who knows their names, 
                their families, and their dreams.
              </p>
              <p>
                As a fee-only fiduciary, I have no hidden incentives. My success is 
                measured solely by yours. Whether you&apos;re planning for retirement, 
                preserving wealth for future generations, or navigating a complex 
                financial transition, I provide the white-glove service you deserve.
              </p>
              <p>
                I work with a select group of families with $250K to $5M in investable 
                assets, ensuring each client receives the attention and expertise 
                their financial future demands.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex flex-wrap gap-4">
                <div className="glass rounded-lg px-4 py-2">
                  <span className="text-sm text-foreground">CFA Charterholder</span>
                </div>
                <div className="glass rounded-lg px-4 py-2">
                  <span className="text-sm text-foreground">CFP Certified</span>
                </div>
                <div className="glass rounded-lg px-4 py-2">
                  <span className="text-sm text-foreground">SEC Registered</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
