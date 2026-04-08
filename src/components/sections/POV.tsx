'use client'

import FadeIn from '@/components/animations/FadeIn'

export default function POV() {
  return (
    <section id="about" className="py-32 md:py-44 px-6 bg-cream">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <p className="text-sm text-warmgray tracking-wide mb-12">
            Our philosophy
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium text-charcoal leading-[1.2] text-balance">
            The best technology is the kind you never notice. We start with friction — the moment your tools slow you down — and we build until it disappears.
          </h2>
        </FadeIn>

        <div className="mt-20 grid md:grid-cols-3 gap-12">
          {[
            {
              title: 'Invisible AI',
              body: 'Intelligence woven into the tools you already use. No learning curve, no setup — just better results.',
            },
            {
              title: 'Real utility',
              body: 'Not demos. Not concepts. Products you open every day that save you hours every week.',
            },
            {
              title: 'Human-first',
              body: 'Built for how brains work, not how screens work. Every interaction feels effortless.',
            },
          ].map((item, i) => (
            <FadeIn key={item.title} delay={0.2 + i * 0.1}>
              <div>
                <h3 className="font-heading text-lg font-medium text-charcoal mb-3">
                  {item.title}
                </h3>
                <p className="text-warmgray leading-relaxed text-[15px]">
                  {item.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
