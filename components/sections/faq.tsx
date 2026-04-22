"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What does 'white-glove service' mean?",
    answer: "White-glove service means you receive personalized, hands-on attention at every step. Unlike large firms where you might be passed between multiple advisors, at Vane & Co. you work directly with me. I'm available for calls, handle all aspects of your financial planning, and proactively reach out when opportunities or concerns arise. Your financial wellbeing is my priority, not a quota.",
  },
  {
    question: "How is a boutique firm different from a large institution?",
    answer: "At a large institution, you're often one of hundreds of clients per advisor, managed by algorithms and junior associates. At Vane & Co., I work with a deliberately small number of families, allowing me to deeply understand your situation, respond quickly to your needs, and craft truly personalized strategies. You'll never feel like just another account number.",
  },
  {
    question: "What portfolio size do you work with?",
    answer: "I work with families who have $250,000 to $5 million in investable assets. This range allows me to provide the level of personalized attention my clients expect while ensuring my services deliver meaningful value. If you're below this threshold, I'm happy to recommend resources to help you grow your wealth until we're a good fit.",
  },
  {
    question: "What does 'fee-only' mean?",
    answer: "Fee-only means my compensation comes exclusively from the advisory fee you pay—not from commissions, product sales, or third-party incentives. This structure eliminates conflicts of interest that exist at commission-based firms. My advice is always in your best interest because my success is tied directly to yours.",
  },
  {
    question: "How often will we meet?",
    answer: "We conduct formal portfolio reviews quarterly, but I'm available whenever you need me. Major life events, market volatility, or simply a question on your mind—reach out anytime. Many clients also appreciate our proactive outreach when tax-saving opportunities or portfolio adjustments arise.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-background">
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
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-4 text-balance">
            Questions? We Have Answers.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about working with Vane & Co.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-muted border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-foreground py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
