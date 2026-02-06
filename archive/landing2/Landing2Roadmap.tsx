'use client'

import { useEffect, useRef, useState } from 'react'
import { landing2Config } from '@/lib/landing2-content'

const featureIcons = [
    // WhatsApp icon
    <path key="whatsapp" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />,
    // AI/Sparkle icon
    <path key="ai" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />,
    // Shield/Protection icon
    <path key="shield" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />,
    // Truck/Logistics icon
    <path key="truck" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />,
]

export default function Landing2Roadmap() {
    const { roadmap } = landing2Config
    const sectionRef = useRef<HTMLElement>(null)
    const [isInView, setIsInView] = useState(false)
    const [hoveredItem, setHoveredItem] = useState<number | null>(null)

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
            className="relative py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-24 overflow-hidden"
        >
            {/* Background elements - dark theme */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-copper/[0.04] rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-teal/[0.04] rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-6xl mx-auto">
                {/* Section header */}
                <div
                    className={`
                        flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20
                        transition-all duration-700
                        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                    `}
                >
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-cream/40">
                                {roadmap.sectionTitle}
                            </span>
                            <div className="w-16 h-[1px] bg-gradient-to-r from-cream/20 to-transparent" />
                        </div>
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream">
                            Building the future of
                            <br />
                            <span className="text-copper">Nigerian fashion resale</span>
                        </h2>
                    </div>

                    <p className="font-sans text-sm text-cream/40 max-w-xs">
                        Features in active development. Join the waitlist for early access.
                    </p>
                </div>

                {/* Roadmap grid - Timeline style dark theme */}
                <div className="relative">
                    {/* Connecting line - desktop only */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-cream/10 via-copper/30 to-cream/10 -translate-y-1/2" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {roadmap.items.map((item, idx) => (
                            <div
                                key={idx}
                                onMouseEnter={() => setHoveredItem(idx)}
                                onMouseLeave={() => setHoveredItem(null)}
                                className={`
                                    group relative
                                    transition-all duration-700
                                    ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                                `}
                                style={{ transitionDelay: `${200 + idx * 100}ms` }}
                            >
                                {/* Timeline dot - desktop */}
                                <div className="hidden lg:block absolute -top-3 left-1/2 -translate-x-1/2 -translate-y-full">
                                    <div
                                        className={`
                                            w-3 h-3 rounded-full border-2 bg-slate
                                            transition-all duration-300
                                            ${hoveredItem === idx
                                                ? 'border-copper scale-150'
                                                : 'border-cream/20'}
                                        `}
                                    />
                                </div>

                                {/* Card */}
                                <div
                                    className={`
                                        relative p-6 md:p-8 rounded-2xl
                                        bg-slate-light border border-cream/[0.06]
                                        transition-all duration-500 cursor-default
                                        ${hoveredItem === idx
                                            ? 'border-copper/30 shadow-xl shadow-copper/[0.08] -translate-y-2'
                                            : 'hover:border-cream/10'}
                                    `}
                                >
                                    {/* Glow effect */}
                                    <div
                                        className={`
                                            absolute inset-0 rounded-2xl
                                            bg-gradient-to-br from-copper/10 to-transparent
                                            transition-opacity duration-500
                                            ${hoveredItem === idx ? 'opacity-100' : 'opacity-0'}
                                        `}
                                    />

                                    <div className="relative">
                                        {/* Number badge */}
                                        <div className="flex items-center justify-between mb-6">
                                            <span className="font-mono text-[10px] text-copper/60 tracking-wider">
                                                PHASE 0{idx + 1}
                                            </span>
                                            {/* Status indicator */}
                                            <div className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-copper/60 animate-pulse" />
                                                <span className="font-sans text-[9px] uppercase tracking-wider text-cream/30">
                                                    Soon
                                                </span>
                                            </div>
                                        </div>

                                        {/* Icon */}
                                        <div
                                            className={`
                                                flex items-center justify-center
                                                w-14 h-14 rounded-xl mb-5
                                                border transition-all duration-500
                                                ${hoveredItem === idx
                                                    ? 'bg-copper/15 border-copper/30'
                                                    : 'bg-cream/[0.02] border-cream/[0.06]'}
                                            `}
                                        >
                                            <svg
                                                className={`
                                                    w-6 h-6 transition-colors duration-300
                                                    ${hoveredItem === idx ? 'text-copper' : 'text-cream/40'}
                                                `}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                {featureIcons[idx]}
                                            </svg>
                                        </div>

                                        {/* Feature name */}
                                        <h3 className="font-serif text-xl md:text-2xl text-cream mb-2 transition-colors duration-300 group-hover:text-copper">
                                            {item}
                                        </h3>

                                        {/* Description line reveal */}
                                        <div className="overflow-hidden">
                                            <div
                                                className={`
                                                    flex items-center gap-2 pt-4 border-t border-cream/5
                                                    transition-all duration-500
                                                    ${hoveredItem === idx
                                                        ? 'opacity-100 translate-y-0'
                                                        : 'opacity-0 translate-y-2'}
                                                `}
                                            >
                                                <svg
                                                    className="w-4 h-4 text-copper/60"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span className="font-sans text-xs text-cream/40">
                                                    In development
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div
                    className={`
                        mt-16 md:mt-20 text-center
                        transition-all duration-700 delay-700
                        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                    `}
                >
                    <p className="font-sans text-sm text-cream/40 mb-6">
                        Want to shape the product?
                    </p>
                    <a
                        href="#waitlist"
                        className="
                            inline-flex items-center gap-3 px-6 py-3
                            rounded-full border border-cream/10
                            font-sans text-sm text-cream/60
                            transition-all duration-300
                            hover:border-copper/30 hover:text-copper hover:bg-copper/[0.05]
                            cursor-pointer
                        "
                    >
                        <span>Join as early adopter</span>
                        <svg
                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}
