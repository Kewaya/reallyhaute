'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'
import SectionReveal from './SectionReveal'
import { X, Check, AlertCircle, Sparkles } from 'lucide-react'

export default function ProblemFix() {
    const problems = [
        "Fake listings and 'too good to be true' prices",
        "No consistency in quality or sizing details",
        "Endless DMs, delays, and flaky sellers"
    ]

    const fixes = [
        "Curated seller quality + listing standards",
        "Verification flow + authenticity checks",
        "Smooth buying with clear delivery expectations"
    ]

    return (
        <SectionReveal className="py-20 md:py-28">
            {/* Section header */}
            <div className="text-center mb-12 md:mb-16">
                <motion.p
                    variants={fadeUp()}
                    className="text-sm uppercase tracking-[0.2em] text-[rgb(var(--accent))] mb-4"
                >
                    The Problem & Solution
                </motion.p>
                <motion.h2
                    variants={fadeUp()}
                    className="text-3xl md:text-4xl lg:text-5xl font-medium text-[rgb(var(--text))]"
                    style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                >
                    Resale shouldn't feel risky
                </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">

                {/* Problem Card - Soft muted styling */}
                <motion.div
                    variants={fadeUp()}
                    className="flex flex-col p-8 md:p-10 rounded-[var(--radius)] bg-[rgb(var(--bg-subtle))] relative overflow-hidden"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-full bg-[rgb(var(--muted))]/10 flex items-center justify-center">
                            <AlertCircle className="w-5 h-5 text-[rgb(var(--muted))]" />
                        </div>
                        <h3
                            className="text-xl font-medium text-[rgb(var(--text))]"
                            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                        >
                            Current marketplaces
                        </h3>
                    </div>

                    <ul className="space-y-4 flex-1">
                        {problems.map((item, i) => (
                            <li key={i} className="flex gap-3 text-[rgb(var(--muted))]">
                                <div className="mt-1 w-5 h-5 rounded-full bg-[rgb(var(--muted))]/10 flex items-center justify-center shrink-0">
                                    <X className="w-3 h-3 text-[rgb(var(--muted))]" />
                                </div>
                                <span className="leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Fix Card - Premium gold accent */}
                <motion.div
                    variants={fadeUp()}
                    className="flex flex-col p-8 md:p-10 rounded-[var(--radius)] bg-[rgb(var(--card))] relative overflow-hidden"
                    style={{ boxShadow: 'var(--shadow-elevated)' }}
                >
                    {/* Subtle gold glow */}
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[rgb(var(--accent))] opacity-[0.03] blur-[100px] rounded-full -ml-20 -mb-20"></div>

                    <div className="flex items-center gap-3 mb-6 relative z-10">
                        <div className="w-10 h-10 rounded-full bg-[rgb(var(--accent))]/10 flex items-center justify-center">
                            <Sparkles className="w-5 h-5 text-[rgb(var(--accent))]" />
                        </div>
                        <h3
                            className="text-xl font-medium text-[rgb(var(--text))]"
                            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                        >
                            The ReallyHaute way
                        </h3>
                    </div>

                    <ul className="space-y-4 flex-1 relative z-10">
                        {fixes.map((item, i) => (
                            <li key={i} className="flex gap-3 text-[rgb(var(--text))]">
                                <div className="mt-1 w-5 h-5 rounded-full bg-[rgb(var(--accent))]/10 flex items-center justify-center shrink-0">
                                    <Check className="w-3 h-3 text-[rgb(var(--accent))]" />
                                </div>
                                <span className="leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Bottom accent line */}
                    <div className="mt-8 pt-6 border-t border-[rgb(var(--border-soft))] relative z-10">
                        <p className="text-sm text-[rgb(var(--accent))] font-medium">
                            Designed for peace of mind
                        </p>
                    </div>
                </motion.div>

            </div>
        </SectionReveal>
    )
}
