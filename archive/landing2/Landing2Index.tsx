'use client'

import { useState, useRef } from 'react'
import { landing2Config } from '@/lib/landing2-content'

export default function Landing2Index() {
    const { index } = landing2Config
    const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const containerRef = useRef<HTMLDivElement>(null)

    const handleMouseMove = (e: React.MouseEvent, categoryId: string) => {
        const card = e.currentTarget as HTMLElement
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        setMousePosition({ x, y })
        setHoveredCategory(categoryId)
    }

    return (
        <section className="relative py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-24">
            {/* Background accent - dark theme */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate via-slate-light/30 to-slate pointer-events-none" />

            <div className="relative max-w-6xl mx-auto" ref={containerRef}>
                {/* Section header */}
                <div className="flex items-center justify-between gap-6 mb-16 md:mb-20">
                    <div className="flex items-center gap-6">
                        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-cream/40">
                            {index.sectionTitle}
                        </span>
                        <div className="w-24 h-[1px] bg-gradient-to-r from-cream/20 to-transparent" />
                    </div>
                    <span className="hidden sm:block font-sans text-[10px] uppercase tracking-[0.2em] text-cream/20">
                        04 Categories
                    </span>
                </div>

                {/* Categories grid - Bento style dark theme */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {index.categories.map((category, idx) => (
                        <a
                            key={category.id}
                            href={`#${category.id}`}
                            onMouseMove={(e) => handleMouseMove(e, category.id)}
                            onMouseLeave={() => setHoveredCategory(null)}
                            className={`
                                group relative overflow-hidden
                                rounded-2xl p-8 md:p-10 lg:p-12
                                bg-slate-light border border-cream/[0.06]
                                transition-all duration-500 ease-out cursor-pointer
                                hover:border-copper/30 hover:shadow-2xl hover:shadow-copper/[0.08]
                                ${idx === 0 || idx === 3 ? 'md:row-span-1' : ''}
                            `}
                            style={{
                                animationDelay: `${idx * 100}ms`,
                            }}
                        >
                            {/* Spotlight effect following cursor - copper tinted */}
                            <div
                                className={`
                                    absolute inset-0 opacity-0 transition-opacity duration-500
                                    ${hoveredCategory === category.id ? 'opacity-100' : ''}
                                `}
                                style={{
                                    background: hoveredCategory === category.id
                                        ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(196, 135, 61, 0.1), transparent 40%)`
                                        : 'none',
                                }}
                            />

                            {/* Card content */}
                            <div className="relative">
                                {/* Top row: Number + Arrow */}
                                <div className="flex items-center justify-between mb-6">
                                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-copper/60">
                                        {String(idx + 1).padStart(2, '0')}
                                    </span>
                                    <div
                                        className={`
                                            flex items-center justify-center w-10 h-10
                                            rounded-full border border-cream/10
                                            transition-all duration-500
                                            ${hoveredCategory === category.id
                                                ? 'bg-copper border-copper/30 scale-110'
                                                : 'bg-transparent'}
                                        `}
                                    >
                                        <svg
                                            className={`
                                                w-4 h-4 transition-all duration-500
                                                ${hoveredCategory === category.id
                                                    ? 'text-slate translate-x-0.5 -translate-y-0.5'
                                                    : 'text-cream/30'}
                                            `}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M7 17L17 7M17 7H7M17 7V17"
                                            />
                                        </svg>
                                    </div>
                                </div>

                                {/* Category name */}
                                <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-cream transition-colors duration-300 group-hover:text-copper">
                                    {category.name}
                                </h3>

                                {/* Description */}
                                <p className="mt-4 font-sans text-sm md:text-base text-cream/40 max-w-xs leading-relaxed">
                                    {category.description}
                                </p>

                                {/* Tagline - premium reveal effect */}
                                <div className="mt-6 overflow-hidden">
                                    <div
                                        className={`
                                            flex items-center gap-3
                                            transition-all duration-500 ease-out
                                            ${hoveredCategory === category.id
                                                ? 'translate-y-0 opacity-100'
                                                : 'translate-y-4 opacity-0'}
                                        `}
                                    >
                                        <div className="w-6 h-[1px] bg-copper/60" />
                                        <span className="font-sans text-xs uppercase tracking-[0.15em] text-copper/80">
                                            {category.tagline}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom border glow on hover */}
                            <div
                                className={`
                                    absolute bottom-0 left-0 right-0 h-[2px]
                                    bg-gradient-to-r from-transparent via-copper/50 to-transparent
                                    transition-opacity duration-500
                                    ${hoveredCategory === category.id ? 'opacity-100' : 'opacity-0'}
                                `}
                            />
                        </a>
                    ))}
                </div>

                {/* Bottom accent text */}
                <div className="mt-12 md:mt-16 flex items-center justify-center gap-4">
                    <div className="w-12 h-[1px] bg-cream/10" />
                    <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-cream/20">
                        More categories coming soon
                    </span>
                    <div className="w-12 h-[1px] bg-cream/10" />
                </div>
            </div>
        </section>
    )
}
