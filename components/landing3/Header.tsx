'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'

export default function Header() {
    const scrollToWaitlist = () => {
        document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <motion.header
            variants={fadeUp(10)}
            className="flex items-center justify-between py-6 md:py-8"
        >
            <Link
                href="/landing3"
                className="text-xl md:text-2xl font-semibold tracking-tight text-white hover:text-[rgb(var(--accent))] transition-colors duration-300 drop-shadow-md"
                style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
            >
                ReallyHaute
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
                <Link
                    href="#how-it-works"
                    className="hover:text-white transition-colors duration-300"
                >
                    How it works
                </Link>
                <Link
                    href="#authenticity"
                    className="hover:text-white transition-colors duration-300"
                >
                    Authenticity
                </Link>
                <Link
                    href="#faq"
                    className="hover:text-white transition-colors duration-300"
                >
                    FAQ
                </Link>
            </nav>

            <button
                onClick={scrollToWaitlist}
                className="group px-5 py-2.5 text-sm font-medium bg-[rgb(var(--accent))] text-white rounded-[var(--radius-sm)] hover:bg-[rgb(var(--accent-dark))] transition-all duration-300 cursor-pointer shadow-[var(--shadow-soft)]"
            >
                <span className="flex items-center gap-2">
                    Join waitlist
                    <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </span>
            </button>
        </motion.header>
    )
}
