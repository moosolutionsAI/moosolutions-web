'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import FadeIn from '@/components/animations/FadeIn'
import Image from 'next/image'

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!sectionRef.current) return

      const cards = sectionRef.current.querySelectorAll('.product-card')
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })
    },
    { scope: sectionRef }
  )

  return (
    <section id="portfolio" ref={sectionRef} className="py-32 md:py-44 px-6 bg-sand">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-sm text-warmgray tracking-wide mb-4">Our work</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium text-charcoal leading-tight mb-20 max-w-2xl text-balance">
            Products built to prove it.
          </h2>
        </FadeIn>

        <div className="space-y-32">
          {/* QuietKey AI — with demo video */}
          <div className="product-card">
            <div className="relative w-full aspect-[16/9] md:aspect-[2.2/1] rounded-2xl overflow-hidden mb-8 bg-charcoal">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/images/products/quietkey-demo.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="max-w-xl">
                <div className="flex items-center gap-4 mb-3">
                  <h3 className="font-heading text-2xl md:text-3xl font-medium text-charcoal">
                    QuietKey AI
                  </h3>
                  <span className="text-xs text-warmgray border border-beige px-3 py-1 rounded-full">
                    Available
                  </span>
                </div>
                <p className="text-lg text-warmgray italic mb-4">
                  Speak a thought. Get a paragraph.
                </p>
                <p className="text-warmgray leading-relaxed text-[15px]">
                  An AI voice-to-text keyboard that keeps up with how fast your brain moves.
                  Available on Android and Windows. Never lose an idea to typing speed again.
                </p>
              </div>
              <button className="text-sm text-charcoal hover:text-warmgray transition-colors mt-2 md:mt-3 flex items-center gap-2 shrink-0">
                Learn more <span>&rarr;</span>
              </button>
            </div>

            {/* Secondary product images */}
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="rounded-xl overflow-hidden bg-cream">
                <Image
                  src="/images/products/quietkey-hero.png"
                  alt="QuietKey AI on mobile"
                  width={700}
                  height={394}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-xl overflow-hidden bg-cream">
                <Image
                  src="/images/products/quietkey-keyboard-3d.png"
                  alt="QuietKey AI keyboard concept"
                  width={700}
                  height={394}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Excel Simulator */}
          <div className="product-card">
            <div className="relative w-full aspect-[16/9] md:aspect-[2.2/1] rounded-2xl overflow-hidden mb-8 bg-cream">
              <Image
                src="/images/products/excel-simulator-hero.png"
                alt="Excel Simulator — gamified spreadsheet training"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="max-w-xl">
                <div className="flex items-center gap-4 mb-3">
                  <h3 className="font-heading text-2xl md:text-3xl font-medium text-charcoal">
                    Excel Simulator
                  </h3>
                  <span className="text-xs text-warmgray border border-beige px-3 py-1 rounded-full">
                    Coming Soon
                  </span>
                </div>
                <p className="text-lg text-warmgray italic mb-4">
                  What if Excel was a game you actually wanted to play?
                </p>
                <p className="text-warmgray leading-relaxed text-[15px]">
                  You just got hired. Your desk is ready. Now level up your spreadsheet skills
                  through quests, XP, and real challenges — inside a beautiful 3D world.
                  Master VLOOKUP, pivot tables, and formulas by living the job, not watching tutorials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
