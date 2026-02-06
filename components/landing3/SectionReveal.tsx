'use client'

import { motion } from 'framer-motion'
import { container, viewportSettings } from '@/lib/motion'

interface SectionRevealProps {
    children: React.ReactNode
    className?: string
    id?: string
}

export default function SectionReveal({ children, className = '', id }: SectionRevealProps) {
    return (
        <motion.section
            id={id}
            initial="hidden"
            whileInView="show"
            viewport={viewportSettings}
            variants={container(0.09, 0.05)}
            className={className}
        >
            {children}
        </motion.section>
    )
}
