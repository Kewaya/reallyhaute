'use client'

import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { container, fadeOnly } from '@/lib/motion'
import LoaderOverlay from './LoaderOverlay'

interface EnterProps {
    children: React.ReactNode
}

export default function Enter({ children }: EnterProps) {
    const [isReady, setIsReady] = useState(false)
    const shouldReduceMotion = useReducedMotion()

    useEffect(() => {
        // Immediate ready if reduced motion
        if (shouldReduceMotion) {
            setIsReady(true)
            return
        }

        const handleReady = () => {
            // Small delay to ensure smooth transition
            requestAnimationFrame(() => {
                setIsReady(true)
            })
        }

        // Check if fonts are ready
        if (document.fonts?.ready) {
            document.fonts.ready.then(handleReady)
        } else {
            // Fallback
            if (document.readyState === 'complete') {
                handleReady()
            } else {
                window.addEventListener('load', handleReady)
                return () => window.removeEventListener('load', handleReady)
            }
        }
    }, [shouldReduceMotion])

    return (
        <>
            <LoaderOverlay isReady={isReady} />
            <motion.div
                initial="hidden"
                animate={isReady ? 'show' : 'hidden'}
                variants={shouldReduceMotion ? fadeOnly : container(0.085, 0.12)}
            >
                {children}
            </motion.div>
        </>
    )
}
