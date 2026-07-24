/**
 * Motion tokens mirrored from the Product Bible's `AppMotion` design tokens,
 * so web animation timing feels like the same product as the app.
 */
export const DURATION = {
  fast: 0.14,
  base: 0.22,
  slow: 0.34,
  section: 0.6,
} as const;

export const EASE = {
  enter: [0.16, 1, 0.3, 1] as const, // easeOutCubic-ish
  exit: [0.55, 0, 0.85, 0.35] as const, // easeInCubic-ish
  spring: { type: "spring" as const, stiffness: 260, damping: 22 },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.section, ease: EASE.enter },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: DURATION.section, ease: EASE.enter } },
};

export const stagger = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
});

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.section, ease: EASE.enter },
  },
};
