'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Landing2Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            // Determine visibility based on scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }

            // Determine if scrolled for glass effect intensity
            setIsScrolled(currentScrollY > 50)
            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    return (
        <header
            className={`
                fixed top-0 left-0 right-0 z-50
                transition-all duration-500 ease-out
                ${isVisible ? 'translate-y-0' : '-translate-y-full'}
            `}
        >
            {/* Glass container - dark theme */}
            <div
                className={`
                    mx-4 md:mx-8 lg:mx-12 mt-4 md:mt-6
                    px-6 md:px-8 lg:px-10 py-4 md:py-5
                    rounded-2xl border
                    transition-all duration-500
                    ${isScrolled
                        ? 'bg-slate-light/80 backdrop-blur-xl border-cream/[0.08] shadow-lg shadow-black/20'
                        : 'bg-slate/60 backdrop-blur-md border-cream/[0.04]'}
                `}
            >
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    {/* Logo with animated underline */}
                    <Link
                        href="/landing2"
                        className="group relative font-serif text-lg md:text-xl text-cream transition-colors duration-300 cursor-pointer"
                    >
                        <span className="relative z-10">Really Haute</span>
                        {/* Animated copper underline */}
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-copper to-copper-light transition-all duration-500 ease-out group-hover:w-full" />
                    </Link>

                    {/* Center nav hint - desktop only */}
                    <div className="hidden lg:flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-copper/60 animate-pulse" />
                        <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-cream/40">
                            Coming Soon
                        </span>
                    </div>

                    {/* Right section */}
                    <div className="flex items-center gap-6">
                        {/* Established date */}
                        <span className="hidden sm:block font-sans text-[10px] uppercase tracking-[0.2em] text-cream/30">
                            Est. 2025
                        </span>

                        {/* CTA button with copper accent */}
                        <a
                            href="#waitlist"
                            className="
                                group relative px-5 py-2.5 overflow-hidden
                                font-sans text-xs uppercase tracking-[0.15em]
                                bg-copper text-slate rounded-full
                                transition-all duration-300
                                hover:shadow-lg hover:shadow-copper/30
                                cursor-pointer
                            "
                        >
                            {/* Shimmer effect on hover */}
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cream/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                            <span className="relative font-medium">Join</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}
