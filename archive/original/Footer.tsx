'use client'

import { useState } from 'react'
import { Instagram } from 'lucide-react'
import { siteConfig, footerContent } from '@/lib/content'

// TikTok icon (not in Lucide default set)
function TikTokIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            className={className}
            fill="currentColor"
        >
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
        </svg>
    )
}

interface FooterProps {
    onOpenWaitlist: () => void
}

export default function Footer({ onOpenWaitlist }: FooterProps) {
    const [email, setEmail] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!email.trim()) return

        // TODO: Replace with actual API endpoint
        const existingData = JSON.parse(localStorage.getItem('waitlist') || '[]')
        const newEntry = {
            email,
            role: 'subscriber',
            timestamp: new Date().toISOString(),
        }
        localStorage.setItem('waitlist', JSON.stringify([...existingData, newEntry]))

        setIsSubmitted(true)
        setEmail('')
    }

    return (
        <footer className="bg-onyx text-ivory relative overflow-hidden">
            {/* Gold accent line */}
            <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

            {/* Background decoration */}
            <div className="absolute inset-0 opacity-20">
                <div className="orb-gold w-[400px] h-[400px] -bottom-40 -right-40" />
            </div>

            <div className="container-narrow relative z-10 py-20 md:py-28">
                {/* Top Section */}
                <div className="grid md:grid-cols-2 gap-16 md:gap-20 mb-16">
                    {/* Brand Column */}
                    <div>
                        <a href="/" className="font-serif text-3xl md:text-4xl font-medium text-ivory hover:text-gold transition-colors duration-400 cursor-pointer">
                            {siteConfig.name}
                        </a>
                        <p className="font-sans text-ivory/50 mt-6 mb-8 max-w-sm text-lg leading-relaxed">
                            {footerContent.tagline}
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            <a
                                href={siteConfig.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center rounded-full border border-ivory/10 hover:border-gold hover:bg-gold/10 transition-all duration-400 cursor-pointer group"
                                aria-label="Follow us on Instagram"
                            >
                                <Instagram className="w-5 h-5 text-ivory/60 group-hover:text-gold transition-colors duration-400" />
                            </a>
                            <a
                                href={siteConfig.social.tiktok}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center rounded-full border border-ivory/10 hover:border-gold hover:bg-gold/10 transition-all duration-400 cursor-pointer group"
                                aria-label="Follow us on TikTok"
                            >
                                <TikTokIcon className="w-5 h-5 text-ivory/60 group-hover:text-gold transition-colors duration-400" />
                            </a>
                        </div>
                    </div>

                    {/* Newsletter Column */}
                    <div>
                        <h3 className="font-serif text-2xl text-ivory mb-6">
                            Stay Updated
                        </h3>
                        {isSubmitted ? (
                            <div className="glass-card p-6 bg-gold/10 border-gold/20">
                                <p className="font-sans text-gold text-lg">
                                    Thank you! We'll be in touch.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="flex-1 px-6 py-4 bg-ivory/5 border border-ivory/10 rounded-sm text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none focus:bg-ivory/10 transition-all duration-400"
                                    aria-label="Email for newsletter"
                                />
                                <button
                                    type="submit"
                                    className="px-8 py-4 bg-gold text-onyx font-sans font-semibold text-sm uppercase tracking-widest hover:bg-gold-light transition-all duration-400 cursor-pointer rounded-sm"
                                >
                                    Subscribe
                                </button>
                            </form>
                        )}
                        <p className="text-sm text-ivory/30 mt-4">
                            Get early access and exclusive updates.
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-ivory/10 to-transparent mb-10" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Copyright */}
                    <p className="font-sans text-sm text-ivory/30">
                        {footerContent.copyright}
                    </p>

                    {/* Legal Links */}
                    <div className="flex gap-8">
                        {footerContent.links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="font-sans text-sm text-ivory/30 hover:text-gold transition-colors duration-400 cursor-pointer"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
