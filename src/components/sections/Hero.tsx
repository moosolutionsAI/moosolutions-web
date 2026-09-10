'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'

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
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="mx-auto max-w-4xl px-6 w-full text-center">
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
            className="font-heading text-5xl sm:text-6xl lg:text-7xl font-medium text-charcoal leading-[1.1] tracking-tight text-balance"
          >
            We build tools that get out of the way.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-lg text-warmgray max-w-md mx-auto leading-relaxed"
          >
            Makers of QuietKey AI, a voice-to-text keyboard for Android and Windows.
          </motion.p>

          {/* Product card: the whole thing is the link. Mark on top, name under
              it, then the destination spelled out so nobody has to guess. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex flex-col items-center gap-10"
          >
            <a
              href="https://quietkey.ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open quietkey.ai"
              className="group inline-flex flex-col items-center gap-6 px-12 py-10 sm:px-20 sm:py-12 rounded-[2.5rem] bg-sand border border-beige/70 transition-all duration-300 hover:bg-white hover:border-beige hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-24px_rgba(42,44,47,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-4 focus-visible:ring-offset-cream cursor-pointer"
            >
              {/* The shipped app icon, drawn the way a launcher draws it, so it
                  reads as "an app you can tap" rather than a decorative mark. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/quietkey-icon.png"
                alt=""
                width={512}
                height={512}
                draggable={false}
                className="h-44 w-44 sm:h-56 sm:w-56 rounded-[22%] shadow-[0_12px_30px_-12px_rgba(42,44,47,0.45),0_0_0_1px_rgba(42,44,47,0.06)] transition-transform duration-300 group-hover:scale-[1.04]"
              />
              <span className="font-heading text-4xl sm:text-5xl font-medium tracking-tight text-charcoal">
                QuietKey AI
              </span>
              <span className="inline-flex items-center gap-2.5 text-base font-medium text-cream bg-charcoal px-7 py-3.5 rounded-full transition-colors duration-300 group-hover:bg-charcoal-light">
                Open quietkey.ai
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </span>
            </a>

            <button
              onClick={() =>
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="text-sm text-warmgray hover:text-charcoal transition-colors duration-300 cursor-pointer"
            >
              Contact &darr;
            </button>
          </motion.div>
        </div>
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
