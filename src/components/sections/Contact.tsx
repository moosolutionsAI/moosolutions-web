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
            Ready to build something that actually works?
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-6 text-warmgray text-lg max-w-md mx-auto">
            Get early access to what&apos;s next — or tell us what&apos;s still broken.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-12 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="flex-1 bg-sand border border-beige px-5 py-3.5 rounded-full text-charcoal placeholder:text-warmgray/50 focus:border-charcoal focus:outline-none text-sm transition-colors"
            />
            <button
              type="submit"
              className="bg-charcoal text-cream text-sm font-medium px-7 py-3.5 rounded-full hover:bg-charcoal-light transition-colors whitespace-nowrap cursor-pointer"
            >
              Keep me posted
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  )
}
