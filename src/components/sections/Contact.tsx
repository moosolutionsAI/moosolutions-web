'use client'

import FadeIn from '@/components/animations/FadeIn'

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-44 px-6 bg-cream">
      <div className="mx-auto max-w-4xl text-center">
        <FadeIn>
          <p className="text-sm text-warmgray tracking-wide mb-8">
            Get in touch
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-charcoal leading-[1.15] text-balance">
            Want to reach out?
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-6 text-warmgray text-lg max-w-md mx-auto">
            Drop me a line directly.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <a
            href="mailto:scott@moosolutions.ai"
            className="mt-12 inline-block font-heading text-2xl sm:text-3xl md:text-4xl text-charcoal hover:text-charcoal-light transition-colors underline underline-offset-8 decoration-1"
          >
            scott@moosolutions.ai
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
