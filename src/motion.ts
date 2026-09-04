export const premiumEase = [0.16, 1, 0.3, 1] as const

export const revealViewport = {
  once: true,
  amount: 0.22,
} as const

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export const fadeUpTransition = {
  duration: 0.65,
  ease: premiumEase,
}

export const sectionSequence = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}
