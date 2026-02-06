'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'
import SectionReveal from './SectionReveal'
import { Shirt, BadgeCheck, TrendingUp, HandHeart } from 'lucide-react'

export default function Features() {
    const features = [
        {
            icon: <Shirt className="w-6 h-6" />,
            title: "Curated drops, not clutter",
            desc: "We prioritize quality pieces and brands people actually want."
        },
        {
            icon: <BadgeCheck className="w-6 h-6" />,
            title: "Verification that matters",
            desc: "Smart checks + human review for high-risk categories."
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Fair pricing, less guessing",
            desc: "Price guidance based on demand and condition."
        },
        {
            icon: <HandHeart className="w-6 h-6" />,
            title: "Buy with confidence",
            desc: "Clear condition grading, photos, and dispute support."
        }
    ]

    return (
        <SectionReveal className="py-16 md:py-24">
            {/* Section header */}
            <div className="text-center mb-12 md:mb-16">
                <motion.p
                    variants={fadeUp()}
                    className="text-sm uppercase tracking-[0.2em] text-[rgb(var(--accent))] mb-4"
                >
                    Why ReallyHaute
                </motion.p>
                <motion.h2
                    variants={fadeUp()}
                    className="text-3xl md:text-4xl font-medium text-[rgb(var(--text))]"
                    style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                >
                    Premium by design
                </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                {features.map((item, i) => (
                    <motion.div
                        key={i}
                        variants={fadeUp()}
                        className="group p-8 md:p-10 rounded-[var(--radius)] bg-[rgb(var(--card))] cursor-default transition-all duration-500 hover:-translate-y-1"
                        style={{ boxShadow: 'var(--shadow-card)' }}
                    >
                        <div className="w-12 h-12 rounded-full bg-[rgb(var(--accent))]/8 flex items-center justify-center text-[rgb(var(--accent))] mb-6 transition-all duration-500 group-hover:bg-[rgb(var(--accent))]/12">
                            {item.icon}
                        </div>

                        <h3
                            className="text-xl font-medium mb-3 text-[rgb(var(--text))]"
                            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                        >
                            {item.title}
                        </h3>
                        <p className="text-[rgb(var(--muted))] leading-relaxed">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </SectionReveal>
    )
}
