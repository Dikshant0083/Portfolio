// Shared animation settings
export const EASE = [0.22, 1, 0.36, 1];

/** Parent variants for staggered lists. */
export const stagger = (gap = 0.06, delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
});

/** Child variant: fade and rise into place. */
export const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};
