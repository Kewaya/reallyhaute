'use client'

import Link from 'next/link'
import { Mail, Instagram } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="py-12 md:py-16 border-t border-[rgb(var(--border-soft))] mt-12 bg-[rgb(var(--bg-subtle))]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <span
                            className="text-xl font-medium text-[rgb(var(--text))]"
                            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                        >
                            ReallyHaute
                        </span>
                        <span className="text-sm text-[rgb(var(--muted))]">
                            Luxury resale, reimagined.
                        </span>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="mailto:hello@reallyhaute.com"
                            className="w-10 h-10 rounded-full bg-[rgb(var(--card))] flex items-center justify-center text-[rgb(var(--muted))] hover:text-[rgb(var(--accent))] hover:bg-[rgb(var(--accent))]/5 transition-all duration-300"
                            style={{ boxShadow: 'var(--shadow-soft)' }}
                            aria-label="Email us"
                        >
                            <Mail className="w-4 h-4" />
                        </Link>
                        <Link
                            href="#"
                            className="w-10 h-10 rounded-full bg-[rgb(var(--card))] flex items-center justify-center text-[rgb(var(--muted))] hover:text-[rgb(var(--accent))] hover:bg-[rgb(var(--accent))]/5 transition-all duration-300"
                            style={{ boxShadow: 'var(--shadow-soft)' }}
                            aria-label="Follow on Instagram"
                        >
                            <Instagram className="w-4 h-4" />
                        </Link>
                        <Link
                            href="#"
                            className="w-10 h-10 rounded-full bg-[rgb(var(--card))] flex items-center justify-center text-[rgb(var(--muted))] hover:text-[rgb(var(--accent))] hover:bg-[rgb(var(--accent))]/5 transition-all duration-300"
                            style={{ boxShadow: 'var(--shadow-soft)' }}
                            aria-label="Follow on TikTok"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-10 pt-6 border-t border-[rgb(var(--border-soft))] flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[rgb(var(--muted))]">
                    <span>© 2026 ReallyHaute. All rights reserved.</span>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="hover:text-[rgb(var(--text))] transition-colors duration-300">
                            Privacy
                        </Link>
                        <Link href="#" className="hover:text-[rgb(var(--text))] transition-colors duration-300">
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
