'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { overlayFade } from '@/lib/motion'

interface LoaderOverlayProps {
    isReady: boolean
}

export default function LoaderOverlay({ isReady }: LoaderOverlayProps) {
    const shouldReduceMotion = useReducedMotion()

    // If reduced motion is preferred, we don't show the overlay at all
    if (shouldReduceMotion) return null

    return (
        <motion.div
            initial="visible"
            animate={isReady ? 'hidden' : 'visible'}
            variants={overlayFade}
            className="fixed inset-0 z-50 bg-[rgb(var(--bg))] pointer-events-none"
            style={{
                pointerEvents: isReady ? 'none' : 'auto',
            }}
            aria-hidden="true"
        />
    )
}
