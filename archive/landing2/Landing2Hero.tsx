'use client'

import { useEffect, useRef, useState } from 'react'
import { landing2Config } from '@/lib/landing2-content'
import InlineWaitlistForm from './InlineWaitlistForm'

export default function Landing2Hero() {
    const { hero } = landing2Config
    const heroRef = useRef<HTMLElement>(null)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    // Subtle parallax effect on mouse move
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!heroRef.current) return
            const rect = heroRef.current.getBoundingClientRect()
            const x = (e.clientX - rect.left - rect.width / 2) / rect.width
            const y = (e.clientY - rect.top - rect.height / 2) / rect.height
            setMousePosition({ x, y })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <section
            ref={heroRef}
            id="waitlist"
            className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden"
        >
            {/* Animated gradient orbs - runway colors */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Primary orb - copper */}
                <div
                    className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full opacity-[0.15]"
                    style={{
                        background: 'radial-gradient(circle, var(--color-copper) 0%, transparent 70%)',
                        transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
                        transition: 'transform 0.5s ease-out',
                    }}
                />
                {/* Secondary orb - teal */}
                <div
                    className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.1]"
                    style={{
                        background: 'radial-gradient(circle, var(--color-teal) 0%, transparent 70%)',
                        transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
                        transition: 'transform 0.6s ease-out',
                    }}
                />
                {/* Tertiary orb - wine */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.08]"
                    style={{
                        background: 'radial-gradient(circle, var(--color-wine-deep) 0%, transparent 70%)',
                        transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
                        transition: 'transform 0.7s ease-out',
                    }}
                />
            </div>

            {/* Subtle grid pattern overlay */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, var(--color-cream) 1px, transparent 1px),
                        linear-gradient(to bottom, var(--color-cream) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Content */}
            <div className="relative px-6 md:px-12 lg:px-24 pt-32 pb-16">
                <div className="max-w-6xl mx-auto">
                    {/* Eyebrow text */}
                    <div className="flex items-center gap-4 mb-8 animate-fade-in">
                        <div className="w-8 h-[1px] bg-copper" />
                        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-copper">
                            Pre-loved Luxury
                        </span>
                    </div>

                    {/* Main headline - dramatic split typography */}
                    <div className="relative">
                        <h1 className="font-serif text-[clamp(3rem,12vw,9rem)] leading-[0.9] tracking-tight text-cream">
                            {/* Animated reveal for each word */}
                            <span className="block overflow-hidden">
                                <span className="block animate-slide-up" style={{ animationDelay: '100ms' }}>
                                    The Nigerian
                                </span>
                            </span>
                            <span className="block overflow-hidden">
                                <span className="block animate-slide-up" style={{ animationDelay: '200ms' }}>
                                    Luxury
                                </span>
                            </span>
                            <span className="block overflow-hidden">
                                <span
                                    className="block animate-slide-up bg-gradient-to-r from-copper via-copper-light to-copper bg-clip-text text-transparent"
                                    style={{ animationDelay: '300ms' }}
                                >
                                    Archive.
                                </span>
                            </span>
                        </h1>

                        {/* Decorative accent line */}
                        <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden xl:block">
                            <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-copper/40 to-transparent" />
                        </div>
                    </div>

                    {/* Subheadline with elegant styling */}
                    <p className="mt-8 md:mt-12 font-sans text-lg md:text-xl lg:text-2xl text-cream/50 tracking-wide max-w-xl leading-relaxed animate-fade-in" style={{ animationDelay: '400ms' }}>
                        {hero.subheadline}
                    </p>

                    {/* Waitlist form with premium container */}
                    <div className="mt-12 md:mt-16 animate-fade-in" style={{ animationDelay: '500ms' }}>
                        {/* Glass container for form - dark theme */}
                        <div className="relative p-6 md:p-8 rounded-2xl bg-slate-light/50 border border-cream/[0.08] backdrop-blur-sm max-w-2xl">
                            <InlineWaitlistForm />
                        </div>
                    </div>

                    {/* Trust indicators */}
                    <div className="mt-16 md:mt-20 flex flex-wrap items-center gap-6 md:gap-10 animate-fade-in" style={{ animationDelay: '600ms' }}>
                        {hero.trustLine.split(' • ').map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 group cursor-default">
                                <span className="w-1 h-1 rounded-full bg-copper/60 group-hover:scale-150 transition-transform duration-300" />
                                <span className="font-sans text-xs uppercase tracking-[0.2em] text-cream/30 group-hover:text-cream/50 transition-colors duration-300">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll indicator - redesigned */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-fade-in" style={{ animationDelay: '800ms' }}>
                <span className="font-sans text-[9px] uppercase tracking-[0.35em] text-cream/20">
                    Explore
                </span>
                {/* Animated scroll line */}
                <div className="relative w-[1px] h-12 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-cream/30 via-copper/50 to-transparent animate-scroll-line" />
                </div>
            </div>
        </section>
    )
}
