'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'
import { ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react'

export default function Hero() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', role: 'buyer' })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch('https://formspree.io/f/xjgeblaz', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            if (!response.ok) throw new Error('Failed to submit')

            setStatus('success')
            setFormData({ name: '', email: '', phone: '', role: 'buyer' })
        } catch (error) {
            console.error('Submission error:', error)
            setStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start py-20 md:py-24 lg:py-32 max-w-content mx-auto px-6">
            {/* Left Column */}
            <div className="flex flex-col gap-6 md:gap-8">
                <motion.div variants={fadeUp()}>
                    <h1
                        className="text-display font-medium text-balance text-white drop-shadow-lg"
                        style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                    >
                        Luxury pieces.{' '}
                        <br className="hidden sm:block" />
                        Verified.{' '}
                        <br className="hidden sm:block" />
                        <span className="text-[rgb(var(--accent))]">Priced right.</span>
                    </h1>
                </motion.div>

                <motion.p
                    variants={fadeUp()}
                    className="text-body-hero max-w-prose text-white/90 drop-shadow-md"
                >
                    ReallyHaute is a curated marketplace for premium fashion—
                    <span className="text-white font-medium">authenticated listings, fair pricing, and fast buying</span> without the chaos.
                </motion.p>

                <motion.div variants={fadeUp()} className="flex flex-col gap-4">
                    <p className="text-sm font-medium text-[rgb(var(--accent))] flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[rgb(var(--accent))] opacity-60"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[rgb(var(--accent))]"></span>
                        </span>
                        Launching soon — limited early access
                    </p>
                </motion.div>

                <motion.div
                    variants={fadeUp()}
                    className="flex flex-wrap gap-4 md:gap-5 pt-2"
                >
                    {[
                        { icon: ShieldCheck, label: "Authentication-first" },
                        { icon: Sparkles, label: "Curated drops" },
                        { icon: CheckCircle2, label: "Buyer protection" },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-body-sm text-white/80">
                            <item.icon className="w-4 h-4 text-[rgb(var(--accent))]" />
                            <span>{item.label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Right Column - Waitlist Card */}
            <motion.div
                variants={fadeUp(25)}
                className="relative"
            >
                <div
                    className="bg-[rgb(var(--card))] rounded-[var(--radius-lg)] p-8 md:p-10 relative z-10 overflow-hidden shadow-elevated"
                >
                    {/* Soft gradient overlay */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-[rgb(var(--accent))] opacity-[0.04] blur-[80px] rounded-full -mr-16 -mt-16"></div>

                    {status === 'success' ? (
                        <div className="text-center py-6">
                            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[rgb(var(--accent))]/10 flex items-center justify-center">
                                <CheckCircle2 className="w-6 h-6 text-[rgb(var(--accent))]" />
                            </div>
                            <h4 className="text-lg font-medium text-[rgb(var(--text))] mb-1">You're on the list!</h4>
                            <p className="text-sm text-[rgb(var(--muted))]">We'll be in touch soon.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <input
                                type="text"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                className="w-full px-4 py-4 text-body bg-[rgb(var(--bg-subtle))] border border-[rgb(var(--border))] rounded-xl text-[rgb(var(--text))] placeholder:text-[rgb(var(--text-muted))] focus:outline-none focus:border-[rgb(var(--accent))] focus:ring-2 focus:ring-[rgb(var(--accent))]/10 transition-all"
                            />

                            <input
                                type="email"
                                placeholder="your@email.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                                className="w-full px-4 py-4 text-body bg-[rgb(var(--bg-subtle))] border border-[rgb(var(--border))] rounded-xl text-[rgb(var(--text))] placeholder:text-[rgb(var(--text-muted))] focus:outline-none focus:border-[rgb(var(--accent))] focus:ring-2 focus:ring-[rgb(var(--accent))]/10 transition-all"
                            />

                            <input
                                type="tel"
                                placeholder="+234 800 123 4567"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                required
                                className="w-full px-4 py-4 text-body bg-[rgb(var(--bg-subtle))] border border-[rgb(var(--border))] rounded-xl text-[rgb(var(--text))] placeholder:text-[rgb(var(--text-muted))] focus:outline-none focus:border-[rgb(var(--accent))] focus:ring-2 focus:ring-[rgb(var(--accent))]/10 transition-all"
                            />

                            <div className="flex gap-2">
                                {['buyer', 'seller', 'both'].map((role) => (
                                    <label key={role} className="flex-1 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="role"
                                            value={role}
                                            checked={formData.role === role}
                                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                            className="sr-only"
                                        />
                                        <div className={`px-3 py-2.5 text-center text-body-sm rounded-xl transition-all cursor-pointer ${formData.role === role
                                                ? 'bg-[rgb(var(--accent))] text-white'
                                                : 'bg-[rgb(var(--bg-subtle))] text-[rgb(var(--text))] border border-[rgb(var(--border))]'
                                            }`}>
                                            {role.charAt(0).toUpperCase() + role.slice(1)}
                                        </div>
                                    </label>
                                ))}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-8 py-4 text-button font-medium bg-[rgb(var(--accent))] text-white rounded-xl border border-[rgb(var(--accent-dark))]/20 hover:bg-[rgb(var(--accent-dark))] hover:shadow-cta-hover hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 cursor-pointer shadow-cta"
                            >
                                {isSubmitting ? 'Joining...' : 'Join waitlist →'}
                            </button>

                            {status === 'error' && (
                                <p className="text-sm text-red-500 text-center">Something went wrong. Please try again.</p>
                            )}

                            <p className="text-xs text-[rgb(var(--muted))] text-center pt-1">
                                We'll only message you about launch + your access.
                            </p>
                        </form>
                    )}
                </div>

                {/* Subtle decorative ring */}
                <div className="absolute -inset-px bg-gradient-to-br from-[rgb(var(--accent))]/10 to-transparent rounded-[calc(var(--radius-lg)+1px)] z-0"></div>
            </motion.div>
        </div>
    )
}
