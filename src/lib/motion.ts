export const easeEmil = [0.16, 1, 0.3, 1] as const;

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeEmil } },
};

export const fadeUpSmall = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeEmil } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94, y: 12 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.55, ease: easeEmil } },
};

export const lineDraw = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: { scaleX: 1, opacity: 1, transition: { duration: 0.7, ease: easeEmil } },
};

export const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: { y: -6, scale: 1.01, transition: { type: "spring", stiffness: 300, damping: 20 } },
};
