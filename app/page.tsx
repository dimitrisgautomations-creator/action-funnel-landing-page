"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { TrustBar } from "@/components/sections/trust-bar"
import { Founder } from "@/components/sections/founder"
import { Roadmap } from "@/components/sections/roadmap"
import { Services } from "@/components/sections/services"
import { Testimonials } from "@/components/sections/testimonials"
import { FAQ } from "@/components/sections/faq"
import { FinalCTA } from "@/components/sections/final-cta"
import { ContactModal } from "@/components/contact-modal"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <Header onOpenModal={openModal} />
      
      <main>
        <Hero onOpenModal={openModal} />
        <TrustBar />
        <Founder />
        <Roadmap />
        <Services />
        <Testimonials />
        <FAQ />
        <FinalCTA onOpenModal={openModal} />
      </main>

      <Footer />

      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}
