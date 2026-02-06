'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'
import SectionReveal from './SectionReveal'

export default function TrustedBy() {
    const pills = [
        "Stylists",
        "Boutiques",
        "Campus sellers",
        "Collectors",
        "Fashion Editors",
        "Personal Shoppers"
    ]

    return (
        <SectionReveal className="py-16 md:py-20">
            <div className="text-center mb-8">
                <motion.p
                    variants={fadeUp()}
                    className="text-sm md:text-base text-[rgb(var(--muted))] tracking-wide"
                >
                    Built with stylists, resellers, and buyers who actually care about quality.
                </motion.p>
            </div>

            <motion.div
                variants={fadeUp()}
                className="flex flex-wrap justify-center gap-3 md:gap-4"
            >
                {pills.map((pill, i) => (
                    <span
                        key={i}
                        className="inline-flex items-center px-5 py-2.5 rounded-full bg-[rgb(var(--card))] text-sm text-[rgb(var(--text))] transition-all duration-300 hover:bg-[rgb(var(--accent))]/5 cursor-default"
                        style={{ boxShadow: 'var(--shadow-soft)' }}
                    >
                        {pill}
                    </span>
                ))}
            </motion.div>

            {/* Subtle divider */}
            <div className="mt-16 md:mt-20 h-px w-full max-w-2xl mx-auto bg-gradient-to-r from-transparent via-[rgb(var(--border))] to-transparent"></div>
        </SectionReveal>
    )
}
