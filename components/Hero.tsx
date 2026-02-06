'use client'

import { heroContent } from '@/lib/content'

interface HeroProps {
    onOpenWaitlist: (role: 'buyer' | 'seller') => void
}

export default function Hero({ onOpenWaitlist }: HeroProps) {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Animated gradient orbs */}
            <div className="orb-gold w-[600px] h-[600px] -top-40 -right-40 animate-float" />
            <div className="orb-wine w-[500px] h-[500px] bottom-0 -left-40 animate-float delay-300" />
            <div className="orb-gold w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50" />

            {/* Decorative grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(var(--color-onyx) 1px, transparent 1px),
                            linear-gradient(90deg, var(--color-onyx) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Top decorative line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

            <div className="container-narrow relative z-10 pt-32 pb-20">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Launching Soon Badge */}
                    <div className="animate-fade-in">
                        <span className="badge animate-glow">
                            {heroContent.badge}
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="mt-8 mb-8 font-serif text-onyx animate-slide-up delay-100" style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', lineHeight: 1.05, letterSpacing: '-0.03em' }}>
                        <span className="block">The Nigerian</span>
                        <span className="block text-gradient-gold">Luxury Archive.</span>
                    </h1>

                    {/* Subhead */}
                    <p className="text-lg md:text-xl lg:text-2xl text-onyx/60 font-sans font-light max-w-2xl mx-auto mb-12 animate-slide-up delay-200 leading-relaxed">
                        {heroContent.subhead}
                    </p>

                    {/* Split CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10 animate-slide-up delay-300">
                        <button
                            onClick={() => onOpenWaitlist('buyer')}
                            className="btn-primary w-full sm:w-auto min-w-[200px]"
                        >
                            {heroContent.cta.buyer}
                        </button>
                        <button
                            onClick={() => onOpenWaitlist('seller')}
                            className="btn-secondary w-full sm:w-auto min-w-[200px]"
                        >
                            {heroContent.cta.seller}
                        </button>
                    </div>

                    {/* Trust Line */}
                    <div className="animate-slide-up delay-400">
                        <p className="text-sm text-onyx/40 font-sans tracking-wide">
                            {heroContent.trustLine}
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in delay-600">
                <div className="flex flex-col items-center gap-2 text-onyx/30">
                    <span className="text-xs font-sans uppercase tracking-widest">Scroll</span>
                    <div className="w-px h-8 bg-gradient-to-b from-gold/50 to-transparent" />
                </div>
            </div>

            {/* Bottom decorative border */}
            <div className="absolute bottom-0 left-0 right-0">
                <div className="h-px bg-gradient-to-r from-transparent via-onyx/10 to-transparent" />
            </div>
        </section>
    )
}
