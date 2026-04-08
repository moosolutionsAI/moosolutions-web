// Motion language: "Liquid Gravity"
// Underdamped springs as backbone — everything arrives with intention

export const springs = {
  primary: { type: "spring" as const, stiffness: 100, damping: 15, mass: 1 },
  soft: { type: "spring" as const, stiffness: 50, damping: 20, mass: 1.5 },
  snap: { type: "spring" as const, stiffness: 400, damping: 25, mass: 0.5 },
}

// Standard entrance variant
export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      ...springs.primary,
      delay: i * 0.08,
    },
  }),
}

// Stagger container
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}
