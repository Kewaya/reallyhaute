'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp } from '@/lib/motion'
import SectionReveal from './SectionReveal'
import { waitlistSchema, type WaitlistFormData, cityOptions, roleOptions } from '@/lib/waitlistSchema'
import { Loader2, CheckCircle2, Sparkles } from 'lucide-react'

export default function Waitlist() {
    const [isSuccess, setIsSuccess] = useState(false)
    const [serverError, setServerError] = useState<string | null>(null)

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        watch,
    } = useForm<WaitlistFormData>({
        resolver: zodResolver(waitlistSchema),
    })

    const selectedRole = watch('role')

    const onSubmit = async (data: WaitlistFormData) => {
        setServerError(null)

        try {
            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })

            const result = await response.json()

            if (!response.ok) {
                throw new Error(result.error || 'Something went wrong')
            }

            setIsSuccess(true)
            reset()
        } catch (err: any) {
            setServerError(err.message)
        }
    }

    const inputClasses = "w-full px-4 py-3.5 rounded-[var(--radius-sm)] bg-[rgb(var(--bg))] border border-[rgb(var(--border))] text-[rgb(var(--text))] placeholder:text-[rgb(var(--muted))]/60 focus:outline-none focus:border-[rgb(var(--accent))] focus:ring-2 focus:ring-[rgb(var(--accent))]/10 transition-all duration-300"

    return (
        <SectionReveal id="waitlist" className="py-20 md:py-32">
            <div className="max-w-xl mx-auto">
                <div className="text-center mb-10 md:mb-12">
                    <motion.p
                        variants={fadeUp()}
                        className="text-sm uppercase tracking-[0.2em] text-[rgb(var(--accent))] mb-4"
                    >
                        Join the Waitlist
                    </motion.p>
                    <motion.h2
                        variants={fadeUp()}
                        className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 text-[rgb(var(--text))]"
                        style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                    >
                        Get invited to the first drop
                    </motion.h2>
                    <motion.p
                        variants={fadeUp()}
                        className="text-base text-[rgb(var(--muted))]"
                    >
                        Early access and exclusive seller perks await.
                    </motion.p>
                </div>

                <motion.div
                    variants={fadeUp()}
                    className="bg-[rgb(var(--card))] rounded-[var(--radius-lg)] p-8 md:p-10 relative overflow-hidden"
                    style={{ boxShadow: 'var(--shadow-elevated)' }}
                >
                    {/* Subtle decorative glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[rgb(var(--accent))] opacity-[0.03] blur-[100px] rounded-full -mr-20 -mt-20 pointer-events-none"></div>

                    <AnimatePresence mode="wait">
                        {isSuccess ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="flex flex-col items-center justify-center text-center py-12 relative z-10"
                            >
                                <div className="w-16 h-16 rounded-full bg-[rgb(var(--accent))]/10 flex items-center justify-center mb-6">
                                    <CheckCircle2 className="w-8 h-8 text-[rgb(var(--accent))]" />
                                </div>
                                <h3
                                    className="text-2xl font-medium mb-3 text-[rgb(var(--text))]"
                                    style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                                >
                                    You're on the list
                                </h3>
                                <p className="text-[rgb(var(--muted))] mb-8">
                                    Keep an eye on your inbox. We'll be in touch soon.
                                </p>
                                <button
                                    onClick={() => setIsSuccess(false)}
                                    className="text-sm font-medium text-[rgb(var(--accent))] hover:underline underline-offset-4 cursor-pointer transition-all"
                                >
                                    Register another email
                                </button>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onSubmit={handleSubmit(onSubmit)}
                                className="space-y-5 relative z-10"
                            >
                                {/* Honeypot */}
                                <input type="text" {...register('website')} className="hidden" aria-hidden="true" autoComplete="off" />

                                <div className="space-y-5">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-[rgb(var(--text))]">Name</label>
                                        <input
                                            id="name"
                                            type="text"
                                            autoComplete="name"
                                            {...register('name')}
                                            className={inputClasses}
                                            placeholder="Jane Doe"
                                        />
                                        {errors.name && (
                                            <p className="mt-2 text-sm text-red-600 flex items-center gap-1.5">
                                                <span className="inline-block w-1 h-1 rounded-full bg-red-600"></span>
                                                {errors.name.message}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-[rgb(var(--text))]">Email</label>
                                        <input
                                            id="email"
                                            type="email"
                                            autoComplete="email"
                                            {...register('email')}
                                            className={inputClasses}
                                            placeholder="jane@example.com"
                                        />
                                        {errors.email && (
                                            <p className="mt-2 text-sm text-red-600 flex items-center gap-1.5">
                                                <span className="inline-block w-1 h-1 rounded-full bg-red-600"></span>
                                                {errors.email.message}
                                            </p>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="whatsapp" className="block text-sm font-medium mb-2 text-[rgb(var(--text))]">
                                                WhatsApp <span className="text-[rgb(var(--muted))] font-normal">(Optional)</span>
                                            </label>
                                            <input
                                                id="whatsapp"
                                                type="tel"
                                                autoComplete="tel"
                                                {...register('whatsapp')}
                                                className={inputClasses}
                                                placeholder="+234..."
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="city" className="block text-sm font-medium mb-2 text-[rgb(var(--text))]">City</label>
                                            <div className="relative">
                                                <select
                                                    id="city"
                                                    {...register('city')}
                                                    className={`${inputClasses} appearance-none cursor-pointer pr-10`}
                                                >
                                                    {cityOptions.map(opt => (
                                                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                                                    ))}
                                                </select>
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[rgb(var(--muted))]">
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-3 text-[rgb(var(--text))]">You're joining as:</label>
                                        <div className="grid grid-cols-3 gap-3">
                                            {roleOptions.map((option) => (
                                                <label
                                                    key={option.value}
                                                    className={`
                                                        relative cursor-pointer rounded-[var(--radius-sm)] border p-3.5 text-center transition-all duration-300
                                                        ${selectedRole === option.value
                                                            ? 'bg-[rgb(var(--accent))] border-[rgb(var(--accent))] text-white'
                                                            : 'bg-[rgb(var(--bg))] border-[rgb(var(--border))] text-[rgb(var(--text))] hover:border-[rgb(var(--accent))]/50'
                                                        }
                                                    `}
                                                >
                                                    <input
                                                        type="radio"
                                                        value={option.value}
                                                        {...register('role')}
                                                        className="sr-only"
                                                    />
                                                    <span className="text-sm font-medium block w-full h-full">
                                                        {option.label}
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                        {errors.role && (
                                            <p className="mt-2 text-sm text-red-600 flex items-center gap-1.5">
                                                <span className="inline-block w-1 h-1 rounded-full bg-red-600"></span>
                                                {errors.role.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {serverError && (
                                    <div className="p-4 rounded-[var(--radius-sm)] bg-red-50 text-red-700 text-sm border border-red-100">
                                        {serverError}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full flex items-center justify-center gap-2.5 py-4 bg-[rgb(var(--accent))] text-white font-medium rounded-[var(--radius-sm)] hover:bg-[rgb(var(--accent-dark))] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed mt-6 cursor-pointer shadow-[0_4px_20px_rgba(176,141,87,0.25)] hover:shadow-[0_8px_30px_rgba(176,141,87,0.35)]"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            <span>Joining...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Sparkles className="w-4 h-4" />
                                            <span>Join the waitlist</span>
                                        </>
                                    )}
                                </button>

                                <p className="text-center text-xs text-[rgb(var(--muted))] mt-4">
                                    No spam. 2–4 messages max per month.
                                </p>

                                <div aria-live="polite" className="sr-only">
                                    {isSubmitting ? 'Submitting form...' : ''}
                                    {serverError ? `Error: ${serverError}` : ''}
                                </div>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </SectionReveal>
    )
}
