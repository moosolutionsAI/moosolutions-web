# Art Director Pitch: Obsidian Signal

## Concept
MooSolutions.ai is not a software company — it is a signal in the noise. The concept "Obsidian Signal" positions the brand as a dark, precision-crafted intelligence studio: deep black foundations with fractured light, as if each product is a gemstone refracting a single source of energy. The visual language borrows from high-end hardware photography, cinematic title sequences, and editorial luxury — think A24 meets Teenage Engineering. Every pixel earns its place. The user should feel they've arrived somewhere that was built for people who notice things.

## Visual Identity

- **Color Palette**
  - `#09090B` — Void Black (primary background, near-pure)
  - `#141417` — Surface Dark (card/section backgrounds)
  - `#1E1E24` — Elevated Surface (hover states, overlays)
  - `#7C3AED` — Deep Violet (primary accent — energy, AI, intelligence)
  - `#A78BFA` — Soft Violet (glow halos, text highlights)
  - `#E4E4F0` — Ghost White (primary body text, refined not harsh)
  - `#6B6B7A` — Muted Steel (secondary text, captions)
  - `#2A1F3D` — Violet Shadow (subtle gradient fills, depth layers)
  - `#F0F0FF` — Luminance White (hero headline, key callouts only)

- **Typography Recommendations**
  - **Display / Hero Headlines**: [Neue Montreal](https://pangrampangram.com/products/neue-montreal) or [Cabinet Grotesk](https://fontshare.com/fonts/cabinet-grotesk) — wide tracking, heavy weight, modern grotesque with personality
  - **Secondary Headlines / Section Labels**: [Geist](https://vercel.com/font) Mono — signals technical precision, tight and authoritative
  - **Body / Supporting Copy**: [Inter](https://rsms.me/inter/) Variable — invisible when it needs to be, legible always
  - **Accent / Eyebrow Labels**: Geist Mono at `letter-spacing: 0.2em` in `#7C3AED` — minimal, clinical, cool
  - **Size Scale**: Aggressive contrast — hero at 96–120px, body at 16–18px, nothing in between gets to be ordinary

- **Mood / Atmosphere**
  Cinematic restraint. The site should feel like the opening shot of a prestige film — unhurried, confident, slightly unknowable. Long breathing room, deliberate reveals. Darkness is not emptiness here; it is weight. Every interaction should feel like touching something physical and expensive.

- **Key Visual Elements**
  - Fractured light refractions / chromatic aberration on hover states
  - Noise grain texture overlaid at 3–5% opacity on all dark surfaces
  - Violet radial glow emanations behind product screenshots and hero elements
  - Thin 1px borders in `rgba(124, 58, 237, 0.15)` to define cards without heaviness
  - Subtle scanline or grid overlay at ultra-low opacity — technical, not retro
  - Motion: slow-burn reveals (GSAP SplitText on headlines, staggered 80ms), not instant pops

## Section-by-Section Breakdown

| Section | Visual Direction | Key Elements |
|---------|-----------------|--------------|
| Hero | Full-viewport dark stage. A single large headline enters in two stages: first the eyebrow label slides in from left in violet mono, then the main headline splits word-by-word with a slight blur-to-sharp entrance. A abstract 3D object (crystalline geometry or floating keyboard form) rotates slowly center-right, casting a violet light bloom on the background. No nav on load — it fades in at 800ms. | SplitText GSAP animation, 3D WebGL or Spline object, radial violet glow, Lenis scroll hint arrow that pulses once then disappears |
| Services | Two-column layout that inverts the expectation: text on the left is sparse and large, the right column is a stacked vertical list of services that cascade in on scroll. Each service item has a thin left border in violet that "charges" (scaleY from 0 to 1) as it enters viewport. Background shifts very slightly lighter (`#141417`) to signal a new zone without a hard break. | ScrollTrigger stagger reveals, animated left-border charge effect, monospace category labels, no icons — words do the work |
| Portfolio | The showpiece. Products displayed as large-format "cards" that are actually full-bleed horizontal panels — each one takes 60–70vh of height. QuietKey AI gets dark keyboard photography with violet backlight bleeding through the keys. The Excel simulator gets a terminal/spreadsheet aesthetic with glowing cell selections. Cards have a parallax depth effect where the product visual moves at a different rate than the text. | Horizontal scroll OR vertical panels with ScrollTrigger pinning, parallax layers, product-specific accent colors nested within the global palette, subtle hover state that pushes a violet glow behind the card |
| Contact/CTA | Near-black section that feels like stepping into a quieter room. A single large question as headline: "What are you building?" — set at 72px. Below, a minimal two-field form (name + email or just email) with a brutalist-refined submit button — full-width, violet fill, white text, no border-radius. Footer below in muted steel text. A faint horizontal rule in violet at `0.1` opacity separates sections. | Large rhetorical headline, minimal form, full-width CTA button, ambient violet floor glow on the section background, Lenis deceleration into this section |

## The "Wow Moment"

The Portfolio panel entrance. As the user scrolls into the QuietKey AI product card, the keyboard visual is initially dark — and then a violet backlight "powers on" across the keys in a left-to-right sweep, triggered by ScrollTrigger. It takes 1.2 seconds. The light bloom expands from the keys outward, pushing a soft glow into the surrounding darkness. It is product theater: the device waking up because you arrived. No one will scroll past it without stopping.

## 15-Second Impression

Dark. Precise. Something violet glows behind a keyboard. The words are huge and confident. This is not a SaaS startup template — this is a studio that sweats details. The person leaves with one feeling: these people are serious.

## Wild Card

A cursor-reactive particle field in the hero section — not cheap sparkles, but a sparse constellation of violet micro-dots (~200 particles) that slowly drift and loosely follow the cursor with a 600ms lag, like iron filings pulled by a magnet. On desktop only, this makes the hero feel alive and breathing without ever distracting from the headline. The density increases subtly near the glowing 3D object, as if the object is pulling the field toward itself. Built with a lightweight canvas element — no Three.js required, pure `requestAnimationFrame` at ~0.5% CPU cost. If it ever hurts performance, it cuts at `prefers-reduced-motion`. The risk is worth it: it is the detail people describe to their friends.
