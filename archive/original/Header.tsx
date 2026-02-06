'use client'

import { useState, useEffect, useCallback } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, siteConfig, heroContent } from '@/lib/content'

interface HeaderProps {
    onOpenWaitlist: (role?: 'buyer' | 'seller') => void
}

export default function Header({ onOpenWaitlist }: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const handleScroll = useCallback(() => {
        setIsScrolled(window.scrollY > 50)
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [handleScroll])

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' })
        }
        setIsMobileMenuOpen(false)
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'py-3 bg-ivory/80 backdrop-blur-xl border-b border-gold/10 shadow-soft'
                    : 'py-5 bg-transparent'
                }`}
        >
            <nav className="container-narrow">
                <div className="flex items-center justify-between">
                    {/* Wordmark */}
                    <a
                        href="/"
                        className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-onyx cursor-pointer hover:text-gold transition-colors duration-400"
                    >
                        {siteConfig.name}
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="relative text-sm font-sans uppercase tracking-widest text-onyx/60 hover:text-onyx transition-colors duration-300 cursor-pointer group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-400" />
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:block">
                        <button
                            onClick={() => onOpenWaitlist()}
                            className="px-6 py-2.5 font-sans text-xs font-semibold uppercase tracking-widest text-ivory bg-onyx hover:bg-gold transition-all duration-400 cursor-pointer rounded-sm"
                        >
                            {heroContent.cta.waitlist}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 text-onyx cursor-pointer"
                        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 right-0 bg-ivory/95 backdrop-blur-xl border-b border-gold/10 animate-fade-in">
                        <div className="container-narrow py-8 space-y-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="block py-2 text-lg font-serif text-onyx/70 hover:text-gold transition-colors duration-300 cursor-pointer"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <button
                                onClick={() => {
                                    onOpenWaitlist()
                                    setIsMobileMenuOpen(false)
                                }}
                                className="btn-primary w-full mt-6"
                            >
                                {heroContent.cta.waitlist}
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}
