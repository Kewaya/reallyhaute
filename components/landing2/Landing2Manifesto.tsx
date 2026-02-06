'use client'

import { useEffect, useRef, useState } from 'react'
import { landing2Config } from '@/lib/landing2-content'

export default function Landing2Manifesto() {
    const { manifesto } = landing2Config
    const sectionRef = useRef<HTMLElement>(null)
    const [isInView, setIsInView] = useState(false)
    const [hoveredPillar, setHoveredPillar] = useState<number | null>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true)
                }
            },
            { threshold: 0.2 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
        >
            {/* Darker background with subtle texture */}
            <div className="absolute inset-0 bg-slate-dark">
                {/* Subtle noise texture overlay */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }} />
                {/* Gradient overlay with runway colors */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-dark via-slate-dark to-teal/10" />
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-copper/[0.04] rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal/[0.05] rounded-full blur-3xl" />

            <div className="relative px-6 md:px-12 lg:px-24">
                <div className="max-w-6xl mx-auto">
                    {/* Section label */}
                    <div
                        className={`
                            flex items-center gap-6 mb-16 md:mb-24
                            transition-all duration-700
                            ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                        `}
                    >
                        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-cream/30">
                            {manifesto.sectionTitle}
                        </span>
                        <div className="flex-1 h-[1px] bg-gradient-to-r from-cream/10 to-transparent" />
                        <span className="hidden md:block font-mono text-[10px] text-copper/50">
                            003
                        </span>
                    </div>

                    {/* Main content grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                        {/* Left column - Headline */}
                        <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
                            <div
                                className={`
                                    transition-all duration-700 delay-100
                                    ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                                `}
                            >
                                {/* Large decorative quote */}
                                <div className="mb-6 overflow-hidden">
                                    <span className="block font-serif text-[120px] md:text-[160px] leading-none text-copper/15 select-none">
                                        &ldquo;
                                    </span>
                                </div>

                                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] text-cream -mt-16 md:-mt-24">
                                    {manifesto.headline.split(' ').map((word, idx) => (
                                        <span
                                            key={idx}
                                            className={`
                                                inline-block mr-3
                                                ${word === 'luxury' || word === 'second'
                                                    ? 'text-copper'
                                                    : ''}
                                            `}
                                        >
                                            {word}
                                        </span>
                                    ))}
                                </h2>

                                {/* Accent line */}
                                <div className="mt-8 w-16 h-[2px] bg-gradient-to-r from-copper to-transparent" />
                            </div>
                        </div>

                        {/* Right column - Body & Pillars */}
                        <div className="lg:col-span-7">
                            {/* Body text */}
                            <div
                                className={`
                                    transition-all duration-700 delay-200
                                    ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                                `}
                            >
                                <p className="font-sans text-lg md:text-xl text-cream/50 leading-relaxed max-w-xl">
                                    {manifesto.body}
                                </p>
                            </div>

                            {/* Pillars - Redesigned as cards */}
                            <div className="mt-16 md:mt-20 space-y-4">
                                {manifesto.pillars.map((pillar, idx) => (
                                    <div
                                        key={idx}
                                        onMouseEnter={() => setHoveredPillar(idx)}
                                        onMouseLeave={() => setHoveredPillar(null)}
                                        className={`
                                            group relative p-6 md:p-8 rounded-xl
                                            border border-cream/[0.06]
                                            bg-cream/[0.02] backdrop-blur-sm
                                            transition-all duration-500 cursor-default
                                            ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                                            ${hoveredPillar === idx
                                                ? 'border-copper/30 bg-copper/[0.05]'
                                                : 'hover:border-cream/10'}
                                        `}
                                        style={{
                                            transitionDelay: `${300 + idx * 100}ms`,
                                        }}
                                    >
                                        {/* Number indicator */}
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-4 mb-3">
                                                    {/* Animated line */}
                                                    <div
                                                        className={`
                                                            h-[2px] bg-copper transition-all duration-500
                                                            ${hoveredPillar === idx ? 'w-10' : 'w-6'}
                                                        `}
                                                    />
                                                    <span className="font-mono text-[10px] text-copper/60">
                                                        0{idx + 1}
                                                    </span>
                                                </div>

                                                <h3 className="font-serif text-xl md:text-2xl text-cream mb-2 transition-colors duration-300 group-hover:text-copper">
                                                    {pillar.title}
                                                </h3>
                                                <p className="font-sans text-sm text-cream/40 leading-relaxed max-w-md">
                                                    {pillar.description}
                                                </p>
                                            </div>

                                            {/* Icon placeholder */}
                                            <div
                                                className={`
                                                    hidden md:flex items-center justify-center
                                                    w-12 h-12 rounded-full border border-cream/10
                                                    transition-all duration-500
                                                    ${hoveredPillar === idx
                                                        ? 'bg-copper/15 border-copper/30'
                                                        : ''}
                                                `}
                                            >
                                                <svg
                                                    className={`
                                                        w-5 h-5 transition-colors duration-300
                                                        ${hoveredPillar === idx ? 'text-copper' : 'text-cream/30'}
                                                    `}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                >
                                                    {idx === 0 && (
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                                    )}
                                                    {idx === 1 && (
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                                    )}
                                                    {idx === 2 && (
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                                    )}
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
