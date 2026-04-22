"use client"

import { useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  navLinks: { href: string; label: string }[]
  onOpenModal: () => void
}

export function MobileNav({ isOpen, onClose, navLinks, onOpenModal }: MobileNavProps) {
  // Prevent body scroll when mobile nav is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const handleLinkClick = () => {
    onClose()
  }

  const handleCTAClick = () => {
    onClose()
    onOpenModal()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-background border-l border-border lg:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <span className="text-lg font-semibold">Menu</span>
                <button
                  onClick={onClose}
                  className="p-2 text-foreground hover:text-muted-foreground transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 p-4">
                <ul className="space-y-1">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={handleLinkClick}
                        className="block py-3 px-4 text-lg text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* CTA Button */}
              <div className="p-4 border-t border-border">
                <Button
                  onClick={handleCTAClick}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base"
                >
                  Book Your Free Review
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
