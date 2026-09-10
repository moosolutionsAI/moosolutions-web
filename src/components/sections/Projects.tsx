'use client'

import FadeIn from '@/components/animations/FadeIn'

/**
 * Current projects. One card per product; the whole card is the link.
 * The shipped launcher icon is drawn the way a launcher draws it, so it
 * reads as "an app you can tap" rather than a decorative mark.
 */
export default function Projects() {
  return (
    <section id="projects" className="py-28 md:py-36 px-6 bg-cream">
      <div className="mx-auto max-w-4xl text-center">
        <FadeIn>
          <p className="text-sm text-warmgray tracking-wide mb-8">Current projects</p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium text-charcoal leading-[1.15] text-balance">
            What I&rsquo;m working on.
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-14 flex justify-center">
            <a
              href="https://quietkey.ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open quietkey.ai"
              className="group inline-flex flex-col items-center gap-6 px-12 py-10 sm:px-20 sm:py-12 rounded-[2.5rem] bg-sand border border-beige/70 transition-all duration-300 hover:bg-white hover:border-beige hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-24px_rgba(42,44,47,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-4 focus-visible:ring-offset-cream cursor-pointer"
            >
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
                QuietKey
              </span>
              <span className="text-warmgray max-w-xs text-balance">
                A voice-to-text keyboard for Android, Windows and macOS.
              </span>
              <span className="inline-flex items-center gap-2.5 text-base font-medium text-cream bg-charcoal px-7 py-3.5 rounded-full transition-colors duration-300 group-hover:bg-charcoal-light">
                Open quietkey.ai
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
