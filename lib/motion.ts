'use client'

// Motion system for Landing3 - single source of truth for animations
// Ease curve: custom "glide" feel
export const EASE = [0.22, 1, 0.36, 1] as const

// Container variant for staggered children
export const container = (stagger = 0.085, delay = 0.12) => ({
    hidden: { opacity: 1 },
    show: {
        opacity: 1,
        transition: { staggerChildren: stagger, delayChildren: delay },
    },
})

// Fade up with blur - for normal motion users
export const fadeUp = (y = 18) => ({
    hidden: { opacity: 0, y, filter: 'blur(6px)' },
    show: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.65, ease: EASE },
    },
})

// Fade only - for reduced motion users (no y translation or blur)
export const fadeOnly = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.35, ease: EASE } },
}

// Overlay fade out
export const overlayFade = {
    visible: { opacity: 1 },
    hidden: {
        opacity: 0,
        transition: { duration: 0.45, ease: EASE }
    },
}

// Viewport settings for scroll reveal
export const viewportSettings = {
    once: true,
    amount: 0.25,
    margin: '0px 0px -10% 0px',
}
