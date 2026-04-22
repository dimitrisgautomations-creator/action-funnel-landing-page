"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "After years of feeling like just another account number at my old firm, Julian treats me like family. He actually listens and builds strategies around my life, not generic formulas.",
    name: "Dr. Sarah Mitchell",
    role: "Retired Physician",
    image: "/placeholder.svg?height=64&width=64",
  },
  {
    quote: "Julian simplified everything. My finances were a mess after selling my company, and he brought clarity and confidence back into my planning. Worth every penny.",
    name: "Michael Chen",
    role: "Business Owner",
    image: "/placeholder.svg?height=64&width=64",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-muted">
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
            Client Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-4 text-balance">
            Trusted by Families Like Yours
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our clients appreciate the personalized attention and expertise that 
            comes with boutique wealth management.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-xl p-8"
            >
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-primary/40 mb-4" />

              {/* Quote Text */}
              <blockquote className="text-foreground leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
