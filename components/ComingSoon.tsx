'use client'

import { comingSoon } from '@/lib/content'

export default function ComingSoon() {
    return (
        <section className="py-16 md:py-20 bg-gradient-to-r from-onyx via-onyx to-onyx relative overflow-hidden">
            {/* Animated gradient border top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent animate-shimmer" />

            <div className="container-narrow relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-6">
                    {/* Label */}
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-px bg-gold/50" />
                        <span className="font-sans text-xs text-ivory/40 uppercase tracking-[0.2em]">
                            Coming Soon
                        </span>
                        <div className="w-8 h-px bg-gold/50" />
                    </div>

                    {/* Feature Chips */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {comingSoon.map((feature, index) => (
                            <span
                                key={feature}
                                className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-sans text-ivory/70 transition-all duration-400 cursor-default hover:text-ivory hover:bg-gold/10"
                                style={{
                                    background: 'rgba(250, 249, 247, 0.03)',
                                    border: '1px solid rgba(250, 249, 247, 0.08)',
                                    animationDelay: `${index * 100}ms`
                                }}
                            >
                                {feature}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Animated gradient border bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent animate-shimmer" />
        </section>
    )
}
