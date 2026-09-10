import type Lenis from 'lenis'

/**
 * In-page navigation that cooperates with Lenis. Native scrollIntoView and
 * Lenis both try to own scrollTop, and Lenis wins, so anchor clicks went
 * nowhere. Lenis registers itself here on mount; callers never touch it.
 */
let lenis: Lenis | null = null

export function registerLenis(instance: Lenis | null) {
  lenis = instance
}

export function scrollToSection(selector: string) {
  const el = document.querySelector<HTMLElement>(selector)
  if (!el) return
  if (lenis) lenis.scrollTo(el, { offset: -72 })
  else el.scrollIntoView({ behavior: 'smooth' })
}
