# Motion Director Pitch: Gravity & Release

## Concept

The motion language for MooSolutions.ai is built on a single physical metaphor: **weight, then weightlessness**. Every element enters with a sense of mass — it falls, snaps, settles — and then, at the moment of revelation, it releases into something effortless and floating. The overall rhythm mirrors a great music drop: tension is built through scroll, held just a beat longer than comfortable, then released into cinematic clarity. This is not a site that bounces things in cheerfully. It is a site that *arrives*. Each section has a build phase, a hold, and a breathe — like a conductor counting before the downbeat. The result is a premium, slightly editorial feeling that signals craft without screaming it.

## Animation Architecture

- **Easing philosophy**: Spring physics are the primary tool for any element that has *presence* — headings, product cards, the hero lockup. Use `stiffness: 120, damping: 14, mass: 1` as the base spring — it's snappy but not toy-like. For ambient/continuous motion (floating particles, subtle background shimmer) use pure sine curves. For scroll-driven reveals, use a custom GSAP ease: `"power3.out"` for the entry snap and `"expo.out"` for the final settle. Never use linear. Never use bounce on anything structural.

- **Timing strategy**: Fast-in, slow-out is the law. Every enter animation starts at 70–80% of its final velocity and decelerates into place. Stagger patterns follow a "golden stagger": first element is immediate, subsequent elements add `0.07s` per step with a `0.04s` acceleration falloff — so a 5-item list staggers at `0, 0.07, 0.13, 0.18, 0.22s`, not a flat `0.1s` increment. This makes group reveals feel like a wave, not a grid loading. Duration sweet spot: `0.55s` for micro-interactions, `0.85s` for section reveals, `1.2s` for hero statements.

- **Scroll choreography approach**: The page is divided into **acts**, not just sections. Act 1 (Hero) is declaration — motion is fast, confident, arrives at you. Act 2 (Services) is explanation — motion slows, breathes, items unfold horizontally. Act 3 (Portfolio) is demonstration — motion becomes tactile, cards have drag-shadow depth. Act 4 (Contact) is invitation — motion is minimal, almost still, letting the call-to-action breathe. Lenis drives everything with a `lerp: 0.075` for a heavy, expensive-feeling scroll weight. ScrollTrigger scrub values increase section by section: `0.5 → 0.75 → 1.0 → 1.5`, making the end of the page feel slower and more deliberate.

## Section-by-Section Animation Plan

| Section | Animation | Timing | GSAP/Framer |
|---------|-----------|--------|-------------|
| **Hero** | Wordmark assembles character-by-character from a 6px vertical stagger, each letter entering from `y: 40, opacity: 0` with a spring snap. Subheadline fades up after a `0.4s` hold. Background: a slow-moving mesh gradient (CSS `hue-rotate` keyframe, `8s` loop). CTA button pulses a single time with a `scale: 1.04` spring on mount, then idles. | Wordmark: `0.85s` total, stagger `0.04s`. Subhead: delays `0.9s`, duration `0.6s`. CTA pulse: `0.3s` spring on `1.8s` delay. | Framer Motion `motion.span` per character with `initial/animate` variants. GSAP for background gradient rotation. |
| **Services** | Section title pins for `100vh` of scroll. As user scrolls, three service cards slide in from the right in sequence — each card's entry is physically weighted: starts at `x: 120`, snaps to rest, then the card's icon counter-animates `scale: 0 → 1` with a slight overshoot spring. Cards exit upward on scroll-past with `y: -60, opacity: 0`. | Card enter: `0.7s, power3.out`. Icon spring: `stiffness: 200, damping: 12`. Stagger between cards: `0.13s`. ScrollTrigger scrub: `0.75`. | GSAP ScrollTrigger for pin + scrub. Framer Motion for icon spring on card visibility. |
| **Portfolio** | Product cards enter with a 3D card-flip reveal: `rotateY: -15deg → 0deg` combined with `y: 30 → 0, opacity: 0 → 1`. On hover, cards lift with `y: -8px`, cast a deeper box-shadow (CSS transition `0.25s`), and a subtle inner-glow border pulses once. The QuietKey product gets a special entrance: keyboard keys animate in staggered rows, each row dropping from `y: -20`. | Card flip: `1.0s, expo.out`. Hover lift: `0.25s ease`. Key row stagger: `0.06s` per row, `0.035s` per key within row. Total keyboard animation: `~1.4s`. | GSAP ScrollTrigger for viewport trigger. Framer Motion `whileHover` for card lift. GSAP stagger timeline for keyboard key rows. |
| **Contact** | Near-stillness as a design choice. The CTA headline fades up in a single motion (`y: 20 → 0, opacity: 0 → 1`). An ambient particle field (20–30 small dots) drifts extremely slowly, each on an independent `Math.random() * 6 + 4s` sine loop. The submit/contact button has a magnetic cursor effect — on `mousemove`, the button follows the cursor by `12%` of the distance delta, snapping back on `mouseleave` with a spring. | Headline: `0.9s, power2.out`, delay `0.2s`. Particles: `4–10s` per loop, staggered offsets. Magnetic snap-back: `stiffness: 150, damping: 20`. | Framer Motion for headline and magnetic button. Pure CSS keyframes for ambient particles. Lenis `lerp: 0.12` override for this section (slower scroll feel). |

## Technical Specs

### GSAP ScrollTrigger — Core Configs

```js
// Services pin + card reveal
gsap.timeline({
  scrollTrigger: {
    trigger: "#services",
    start: "top top",
    end: "+=300%",
    pin: true,
    scrub: 0.75,
    anticipatePin: 1,
  }
})
.from(".service-card", {
  x: 120,
  opacity: 0,
  duration: 0.7,
  ease: "power3.out",
  stagger: { each: 0.13, ease: "power1.in" }
})

// Portfolio card flip
gsap.from(".portfolio-card", {
  scrollTrigger: {
    trigger: "#portfolio",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
  rotateY: -15,
  y: 30,
  opacity: 0,
  duration: 1.0,
  ease: "expo.out",
  stagger: { each: 0.15, from: "start" }
})

// Hero wordmark character stagger
gsap.from(".hero-char", {
  y: 40,
  opacity: 0,
  duration: 0.85,
  ease: "power3.out",
  stagger: { each: 0.04, from: "start" }
})
```

### Framer Motion — Spring Values

```js
// Base presence spring (headings, cards)
const presenceSpring = {
  type: "spring",
  stiffness: 120,
  damping: 14,
  mass: 1
}

// Icon overshoot spring
const iconSpring = {
  type: "spring",
  stiffness: 200,
  damping: 12,
  mass: 0.8
}

// Magnetic button snap-back
const magneticSpring = {
  type: "spring",
  stiffness: 150,
  damping: 20,
  mass: 1
}

// Card hover lift
const hoverVariants = {
  rest: { y: 0, boxShadow: "0 4px 24px rgba(0,0,0,0.12)" },
  hover: {
    y: -8,
    boxShadow: "0 20px 60px rgba(0,0,0,0.22)",
    transition: { duration: 0.25, ease: "easeOut" }
  }
}
```

### Lenis Smooth Scroll

```js
const lenis = new Lenis({
  lerp: 0.075,           // heavy, premium scroll weight
  smoothWheel: true,
  wheelMultiplier: 0.9,  // slightly resistant — feels expensive
  touchMultiplier: 1.5,
  infinite: false,
  orientation: "vertical",
})

// Override for Contact section — slower, more deliberate
// Applied via ScrollTrigger onEnter/onLeave callbacks:
// lenis.options.lerp = 0.12  (on enter)
// lenis.options.lerp = 0.075 (on leave)

// Connect Lenis to GSAP ticker
lenis.on("scroll", ScrollTrigger.update)
gsap.ticker.add((time) => lenis.raf(time * 1000))
gsap.ticker.lagSmoothing(0)
```

### Stagger Reference Table

| Context | Each | From | Ease |
|---|---|---|---|
| Hero characters | `0.04s` | `"start"` | `"power1.in"` |
| Service cards | `0.13s` | `"start"` | `"power1.in"` |
| Portfolio cards | `0.15s` | `"start"` | `"none"` |
| Keyboard rows | `0.06s` | `"start"` | `"power2.in"` |
| Keys within row | `0.035s` | `"center"` | `"power1.out"` |

## The "Wow Moment"

The QuietKey keyboard key animation. As the portfolio card enters the viewport, the keyboard SVG/HTML component animates its keys in staggered rows — row by row, each key dropping from `y: -20` with a tiny scale pop. The delay cascades from top-left to bottom-right in a wave, and the final key (spacebar) lands with a single, barely-perceptible screen shake (`gsap.to(window, { scrollY: "+=2", duration: 0.06, yoyo: true, repeat: 1 })`). It's the product itself performing, not just revealing. It makes the keyboard feel *alive* before the user has touched it — and it is the single most on-brand motion on the entire page.

## 15-Second Cut

If attention is scarce, three animations survive — everything else is `opacity: 0 → 1, y: 20 → 0` with a `0.6s ease-out`:

1. **Hero wordmark character stagger** — It's the first impression. If this doesn't land, nothing else matters. The `0.85s` snap arrival sets the entire tonal register.
2. **Portfolio card 3D flip reveal** — This is the product showcase. The `rotateY` entry communicates depth and craft in a single gesture. It sells the portfolio section without a word.
3. **Magnetic contact button** — Keeps the user *touching* the page on the way out. Interactive delight at the moment of conversion is the highest-ROI motion on the site.

## Wild Card

**Scroll-synced typewriter that writes and *deletes* itself.**

On the hero, instead of a static subheadline, a single rotating value prop cycles through three phrases using a cursor-blink typewriter that is entirely scroll-driven — not time-driven. As the user scrolls forward, characters appear. If they scroll backward, characters delete. The phrases:

> "AI tools that disappear into your workflow."
> "Keyboards that think. Spreadsheets that teach."
> "Built for the way you actually work."

The effect is achieved via `ScrollTrigger` with `scrub: true` driving a custom GSAP label timeline where each character's `opacity` and `width` are set at precise scroll percentages. It makes the scroll itself feel like an input device — the user is literally writing the brand's story. It might be too much on mobile and would need a graceful fallback. But on desktop, it would be the single most memorable thing on any portfolio site in this category right now.
