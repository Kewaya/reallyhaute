'use client'

import { useState } from 'react'
import Link from 'next/link'
import { landing2Config } from '@/lib/landing2-content'

export default function Landing2Footer() {
    const { footer } = landing2Config
    const [hoveredLink, setHoveredLink] = useState<string | null>(null)

    return (
        <footer className="relative pt-20 pb-8 px-6 md:px-12 lg:px-24 overflow-hidden">
            {/* Top border gradient */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cream/10 to-transparent" />

            {/* Background decorative element */}
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-copper/[0.02] rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-6xl mx-auto">
                {/* Main footer content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    {/* Brand column */}
                    <div className="lg:col-span-5">
                        {/* Logo */}
                        <Link
                            href="/landing2"
                            className="group inline-block mb-6 cursor-pointer"
                        >
                            <span className="font-serif text-2xl md:text-3xl text-cream transition-colors duration-300 group-hover:text-copper">
                                Really Haute
                            </span>
                        </Link>

                        {/* Tagline */}
                        <p className="font-sans text-base text-cream/40 max-w-sm leading-relaxed mb-8">
                            {footer.tagline}
                        </p>

                        {/* Newsletter hint - dark theme */}
                        <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-light/50 border border-cream/[0.04] max-w-sm">
                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-copper/15">
                                <svg
                                    className="w-5 h-5 text-copper"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-sans text-sm text-cream/60">Stay updated</p>
                                <a
                                    href="#waitlist"
                                    className="font-sans text-xs text-copper hover:text-copper-light transition-colors cursor-pointer"
                                >
                                    Join the waitlist
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Links columns */}
                    <div className="lg:col-span-4 lg:col-start-7">
                        <div className="grid grid-cols-2 gap-8">
                            {/* Quick links */}
                            <div>
                                <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-cream/30 mb-6">
                                    Quick Links
                                </h4>
                                <nav className="flex flex-col gap-4">
                                    {footer.links.map((link, idx) => (
                                        <Link
                                            key={idx}
                                            href={link.href}
                                            onMouseEnter={() => setHoveredLink(link.label)}
                                            onMouseLeave={() => setHoveredLink(null)}
                                            className="
                                                group flex items-center gap-2
                                                font-sans text-sm text-cream/50
                                                transition-colors duration-200
                                                hover:text-cream
                                                cursor-pointer
                                            "
                                        >
                                            <span
                                                className={`
                                                    w-0 h-[1px] bg-copper transition-all duration-300
                                                    ${hoveredLink === link.label ? 'w-3' : ''}
                                                `}
                                            />
                                            <span>{link.label}</span>
                                        </Link>
                                    ))}
                                </nav>
                            </div>

                            {/* Social */}
                            <div>
                                <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-cream/30 mb-6">
                                    Follow Us
                                </h4>
                                <div className="flex flex-col gap-4">
                                    <a
                                        href={footer.social.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            group flex items-center gap-3
                                            font-sans text-sm text-cream/50
                                            transition-colors duration-200
                                            hover:text-cream
                                            cursor-pointer
                                        "
                                        aria-label="Instagram"
                                    >
                                        <div className="flex items-center justify-center w-8 h-8 rounded-lg border border-cream/10 transition-all duration-300 group-hover:border-copper/30 group-hover:bg-copper/10">
                                            <svg
                                                className="w-4 h-4 transition-colors duration-300 group-hover:text-copper"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <span>Instagram</span>
                                    </a>
                                    <a
                                        href={footer.social.tiktok}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            group flex items-center gap-3
                                            font-sans text-sm text-cream/50
                                            transition-colors duration-200
                                            hover:text-cream
                                            cursor-pointer
                                        "
                                        aria-label="TikTok"
                                    >
                                        <div className="flex items-center justify-center w-8 h-8 rounded-lg border border-cream/10 transition-all duration-300 group-hover:border-copper/30 group-hover:bg-copper/10">
                                            <svg
                                                className="w-4 h-4 transition-colors duration-300 group-hover:text-copper"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                                            </svg>
                                        </div>
                                        <span>TikTok</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Location hint */}
                    <div className="lg:col-span-3">
                        <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-cream/30 mb-6">
                            Based In
                        </h4>
                        <div className="flex items-start gap-3">
                            <div className="mt-1">
                                <svg
                                    className="w-4 h-4 text-copper/60"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-sans text-sm text-cream/50">Lagos, Nigeria</p>
                                <p className="font-sans text-xs text-cream/30 mt-1">Serving globally</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-cream/5">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        {/* Copyright */}
                        <p className="font-sans text-xs text-cream/30">
                            {footer.copyright}
                        </p>

                        {/* Made with love */}
                        <div className="flex items-center gap-2">
                            <span className="font-sans text-xs text-cream/20">Made with</span>
                            <svg
                                className="w-3 h-3 text-wine"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                            </svg>
                            <span className="font-sans text-xs text-cream/20">in Lagos</span>
                        </div>

                        {/* Back to top */}
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="
                                group flex items-center gap-2
                                font-sans text-xs text-cream/30
                                transition-colors duration-200
                                hover:text-copper
                                cursor-pointer
                            "
                            aria-label="Scroll to top"
                        >
                            <span>Back to top</span>
                            <svg
                                className="w-3 h-3 transition-transform duration-300 group-hover:-translate-y-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
