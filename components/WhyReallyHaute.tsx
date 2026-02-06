'use client'

import { Sparkles, Shield, Heart } from 'lucide-react'
import { whyReallyHaute } from '@/lib/content'

// Icon mapping
const iconMap = {
    Sparkles,
    Shield,
    Heart,
} as const

type IconName = keyof typeof iconMap

export default function WhyReallyHaute() {
    return (
        <section id="why" className="section bg-onyx text-ivory relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 opacity-30">
                <div className="orb-gold w-[600px] h-[600px] top-0 left-1/4" />
                <div className="orb-wine w-[400px] h-[400px] bottom-0 right-1/4" />
            </div>

            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(250, 249, 247, 0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(250, 249, 247, 0.5) 1px, transparent 1px)`,
                    backgroundSize: '80px 80px',
                }}
            />

            <div className="container-narrow relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-24">
                    <span className="text-xs font-sans uppercase tracking-[0.2em] text-gold mb-4 block animate-fade-in">
                        Our Promise
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ivory mb-6 animate-slide-up">
                        {whyReallyHaute.headline}
                    </h2>
                    <div className="divider" />
                </div>

                {/* Pillars Grid */}
                <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-12 mb-20">
                    {whyReallyHaute.pillars.map((pillar, index) => {
                        const IconComponent = iconMap[pillar.icon as IconName]

                        return (
                            <div
                                key={pillar.title}
                                className="text-center group animate-fade-in"
                                style={{ animationDelay: `${(index + 1) * 150}ms` }}
                            >
                                {/* Icon with glow effect */}
                                <div className="relative inline-flex items-center justify-center w-24 h-24 mb-8">
                                    <div className="absolute inset-0 rounded-full bg-gold/10 group-hover:bg-gold/20 transition-colors duration-500" />
                                    <div className="absolute inset-2 rounded-full border border-gold/30 group-hover:border-gold/50 transition-colors duration-500" />
                                    {IconComponent && (
                                        <IconComponent className="w-10 h-10 text-gold" strokeWidth={1.5} />
                                    )}
                                </div>

                                {/* Title */}
                                <h3 className="font-serif text-2xl text-ivory mb-4">
                                    {pillar.title}
                                </h3>

                                {/* Description */}
                                <p className="font-sans text-ivory/60 leading-relaxed max-w-xs mx-auto">
                                    {pillar.description}
                                </p>
                            </div>
                        )
                    })}
                </div>

                {/* Editorial Paragraph - Centered quote */}
                <div className="max-w-3xl mx-auto text-center animate-fade-in delay-500">
                    <div className="relative">
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-6xl text-gold/20 font-serif">"</span>
                        <p className="font-serif text-2xl md:text-3xl text-ivory/80 italic leading-relaxed">
                            {whyReallyHaute.description}
                        </p>
                        <span className="absolute -bottom-8 right-1/4 text-6xl text-gold/20 font-serif">"</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
