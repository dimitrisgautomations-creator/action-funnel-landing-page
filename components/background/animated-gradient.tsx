'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function AnimatedGradientBackground() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const gradientVariants = {
    animate: prefersReducedMotion ? {} : {
      backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
      transition: {
        duration: 15,
        ease: 'linear',
        repeat: Infinity,
      },
    },
  }

  const gradientVariants2 = {
    animate: prefersReducedMotion ? {} : {
      backgroundPosition: ['100% 100%', '0% 0%', '100% 100%'],
      transition: {
        duration: 20,
        ease: 'linear',
        repeat: Infinity,
      },
    },
  }

  const gradientVariants3 = {
    animate: prefersReducedMotion ? {} : {
      backgroundPosition: ['50% 50%', '0% 100%', '50% 50%'],
      transition: {
        duration: 25,
        ease: 'linear',
        repeat: Infinity,
      },
    },
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Base layer - deep background */}
      <div className="absolute inset-0 bg-background" />

      {/* Layer 1 - Primary gradient mesh */}
      <motion.div
        variants={gradientVariants}
        animate={prefersReducedMotion ? 'initial' : 'animate'}
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `linear-gradient(135deg, 
            rgba(45, 90, 39, 0.3) 0%, 
            rgba(10, 10, 10, 0.2) 25%, 
            rgba(30, 30, 35, 0.3) 50%, 
            rgba(45, 90, 39, 0.2) 75%, 
            rgba(10, 10, 10, 0.3) 100%)`,
          backgroundSize: '200% 200%',
        }}
      />

      {/* Layer 2 - Secondary gradient mesh */}
      <motion.div
        variants={gradientVariants2}
        animate={prefersReducedMotion ? 'initial' : 'animate'}
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `linear-gradient(-45deg, 
            rgba(30, 30, 35, 0.2) 0%, 
            rgba(45, 90, 39, 0.25) 33%, 
            rgba(10, 10, 10, 0.15) 66%, 
            rgba(30, 30, 35, 0.2) 100%)`,
          backgroundSize: '200% 200%',
        }}
      />

      {/* Layer 3 - Accent gradient mesh */}
      <motion.div
        variants={gradientVariants3}
        animate={prefersReducedMotion ? 'initial' : 'animate'}
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, 
            rgba(45, 90, 39, 0.15) 0%, 
            transparent 50%),
            radial-gradient(circle at 80% 80%, 
            rgba(30, 30, 35, 0.15) 0%, 
            transparent 50%)`,
          backgroundSize: '200% 200%',
        }}
      />

      {/* Overlay - ensure content readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/50" />
    </div>
  )
}
