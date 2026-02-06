'use client'

import { fadeUp } from '@/lib/motion'
import SectionReveal from './SectionReveal'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
    const faqs = [
        {
            q: "When do you launch?",
            a: "Soon — waitlist members get first access. We're in the final stages of building and will start inviting early users in waves."
        },
        {
            q: "How does verification work?",
            a: "A mix of listing standards, risk scoring, and human review. High-value items go through additional authentication checks."
        },
        {
            q: "What brands will be available?",
            a: "Premium and luxury, with a focus on pieces that hold value. Think designer bags, watches, and sought-after fashion items."
        },
        {
            q: "Can I sell from day one?",
            a: "Yes—early sellers get priority onboarding, lower fees, and first access to our verification queue."
        }
    ]

    return (
        <SectionReveal id="faq" className="py-20 md:py-28 max-w-2xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-10 md:mb-12">
                <motion.p
                    variants={fadeUp()}
                    className="text-sm uppercase tracking-[0.2em] text-[rgb(var(--accent))] mb-4"
                >
                    FAQ
                </motion.p>
                <motion.h2
                    variants={fadeUp()}
                    className="text-3xl md:text-4xl font-medium text-[rgb(var(--text))]"
                    style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                >
                    Common Questions
                </motion.h2>
            </div>

            <div className="space-y-3">
                {faqs.map((item, i) => (
                    <motion.div
                        key={i}
                        variants={fadeUp()}
                    >
                        <details className="group bg-[rgb(var(--card))] rounded-[var(--radius)] overflow-hidden transition-all duration-300" style={{ boxShadow: 'var(--shadow-soft)' }}>
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none text-base font-medium text-[rgb(var(--text))] hover:text-[rgb(var(--accent))] transition-colors duration-300">
                                <span style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }} className="text-lg">
                                    {item.q}
                                </span>
                                <ChevronDown className="w-5 h-5 text-[rgb(var(--muted))] transition-transform duration-300 group-open:rotate-180 shrink-0 ml-4" />
                            </summary>
                            <div className="px-6 pb-6 text-[rgb(var(--muted))] leading-relaxed -mt-1">
                                {item.a}
                            </div>
                        </details>
                    </motion.div>
                ))}
            </div>
        </SectionReveal>
    )
}
