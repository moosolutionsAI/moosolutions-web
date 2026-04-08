'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import Image from 'next/image'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!sectionRef.current) return

      gsap.to('.hero-content', {
        y: -60,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      })

      // Parallax the hero image slower than scroll
      gsap.to('.hero-image', {
        y: 80,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.3,
        },
      })
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="mx-auto max-w-6xl px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left — copy */}
        <div className="hero-content">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm text-warmgray tracking-wide mb-6"
          >
            AI Product Studio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium text-charcoal leading-[1.1] tracking-tight text-balance"
          >
            We build tools that get out of the way.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-lg text-warmgray max-w-md leading-relaxed"
          >
            AI-powered products designed for how you actually think and work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex items-center gap-6"
          >
            <button
              onClick={() =>
                document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="text-sm font-medium bg-charcoal text-cream px-7 py-3.5 rounded-full hover:bg-charcoal-light transition-colors duration-300 cursor-pointer"
            >
              See our work
            </button>
            <button
              onClick={() =>
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="text-sm text-warmgray hover:text-charcoal transition-colors duration-300 cursor-pointer"
            >
              Learn more &darr;
            </button>
          </motion.div>
        </div>

        {/* Right — hero product image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hero-image relative"
        >
          <Image
            src="/images/products/quietkey-keyboard-3d.png"
            alt="QuietKey AI — voice-to-text keyboard"
            width={800}
            height={450}
            priority
            className="w-full h-auto"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-beige to-warmgray"
        />
      </motion.div>
    </section>
  )
}
