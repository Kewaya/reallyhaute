'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'
import SectionReveal from './SectionReveal'

export default function SocialProof() {
    const testimonials = [
        {
            quote: "Finally—resale that feels premium. No more sifting through junk to find one gem.",
            author: "Early Community Member",
            role: "Fashion Collector"
        },
        {
            quote: "I'd rather sell here than juggle 40 DMs on Instagram asking 'is this still available?'",
            author: "Sarah K.",
            role: "Boutique Owner"
        }
    ]

    return (
        <SectionReveal className="py-20 md:py-28">
            {/* Section header */}
            <div className="text-center mb-12 md:mb-16">
                <motion.p
                    variants={fadeUp()}
                    className="text-sm uppercase tracking-[0.2em] text-[rgb(var(--accent))] mb-4"
                >
                    What People Say
                </motion.p>
                <motion.h2
                    variants={fadeUp()}
                    className="text-3xl md:text-4xl font-medium text-[rgb(var(--text))]"
                    style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                >
                    From our early community
                </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {testimonials.map((item, i) => (
                    <motion.div
                        key={i}
                        variants={fadeUp()}
                        className="bg-[rgb(var(--card))] p-8 md:p-10 rounded-[var(--radius)] relative"
                        style={{ boxShadow: 'var(--shadow-card)' }}
                    >
                        {/* Large decorative quote mark */}
                        <div className="absolute top-6 left-8 text-[rgb(var(--accent))]/10 pointer-events-none">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                        </div>

                        <blockquote
                            className="text-lg md:text-xl leading-relaxed mb-8 text-[rgb(var(--text))] relative z-10"
                            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                        >
                            "{item.quote}"
                        </blockquote>

                        <div className="flex items-center gap-3 pt-6 border-t border-[rgb(var(--border-soft))]">
                            <div className="w-10 h-10 rounded-full bg-[rgb(var(--accent))]/10 flex items-center justify-center text-[rgb(var(--accent))] font-medium">
                                {item.author.charAt(0)}
                            </div>
                            <div>
                                <cite className="not-italic text-sm font-medium text-[rgb(var(--text))] block">
                                    {item.author}
                                </cite>
                                <span className="text-xs text-[rgb(var(--muted))]">
                                    {item.role}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionReveal>
    )
}
