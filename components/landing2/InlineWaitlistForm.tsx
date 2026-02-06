'use client'

import { useState, useRef, useEffect } from 'react'
import { landing2Config } from '@/lib/landing2-content'

type Role = 'buyer' | 'seller'

interface FormState {
    email: string
    role: Role
    status: 'idle' | 'loading' | 'success' | 'error'
    errorMessage: string
}

export default function InlineWaitlistForm() {
    const { form } = landing2Config.hero
    const [formState, setFormState] = useState<FormState>({
        email: '',
        role: 'buyer',
        status: 'idle',
        errorMessage: '',
    })
    const [isRoleOpen, setIsRoleOpen] = useState(false)
    const [isFocused, setIsFocused] = useState(false)
    const roleRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (roleRef.current && !roleRef.current.contains(event.target as Node)) {
                setIsRoleOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const validateEmail = (email: string): boolean => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateEmail(formState.email)) {
            setFormState(prev => ({
                ...prev,
                status: 'error',
                errorMessage: form.errorMessage,
            }))
            return
        }

        setFormState(prev => ({ ...prev, status: 'loading' }))

        // Simulate API call - TODO: Replace with actual backend integration
        try {
            await new Promise(resolve => setTimeout(resolve, 800))

            // Store in localStorage for now
            const submissions = JSON.parse(localStorage.getItem('waitlist-landing2') || '[]')
            submissions.push({
                email: formState.email,
                role: formState.role,
                timestamp: new Date().toISOString(),
                source: 'landing2',
            })
            localStorage.setItem('waitlist-landing2', JSON.stringify(submissions))

            setFormState(prev => ({
                ...prev,
                status: 'success',
                email: '',
            }))
        } catch {
            setFormState(prev => ({
                ...prev,
                status: 'error',
                errorMessage: 'Something went wrong. Please try again.',
            }))
        }
    }

    const handleRoleSelect = (role: Role) => {
        setFormState(prev => ({ ...prev, role }))
        setIsRoleOpen(false)
    }

    if (formState.status === 'success') {
        return (
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-copper/20 via-copper/10 to-transparent p-8 border border-copper/30">
                {/* Success glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-copper/10 to-transparent animate-pulse" />

                <div className="relative flex items-center gap-4">
                    {/* Animated checkmark */}
                    <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-copper/20 border border-copper/40">
                        <svg
                            className="w-6 h-6 text-copper animate-scale-in"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        {/* Ripple effect */}
                        <span className="absolute inset-0 rounded-full border border-copper/40 animate-ping-slow" />
                    </div>

                    <div>
                        <p className="font-serif text-lg text-cream">
                            {form.successMessage}
                        </p>
                        <p className="mt-1 font-sans text-sm text-cream/40">
                            Check your inbox for updates
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="relative flex flex-col gap-4"
        >
            {/* Form row */}
            <div className="flex flex-col sm:flex-row items-stretch gap-3">
                {/* Email Input - Dark glass styled */}
                <div className="relative flex-1 group">
                    <div
                        className={`
                            absolute inset-0 rounded-xl transition-all duration-500
                            ${isFocused
                                ? 'bg-gradient-to-r from-copper/15 to-transparent opacity-100'
                                : 'opacity-0'}
                        `}
                    />
                    <input
                        ref={inputRef}
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState(prev => ({
                            ...prev,
                            email: e.target.value,
                            status: 'idle',
                            errorMessage: '',
                        }))}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        placeholder={form.placeholder}
                        className={`
                            relative w-full px-5 py-4 rounded-xl
                            bg-slate-dark/50 backdrop-blur-sm
                            border-2 transition-all duration-300
                            font-sans text-base text-cream placeholder:text-cream/30
                            focus:outline-none
                            ${formState.status === 'error'
                                ? 'border-wine/50 focus:border-wine'
                                : 'border-cream/[0.08] focus:border-copper/50 hover:border-cream/20'}
                        `}
                        aria-label="Email address"
                        aria-invalid={formState.status === 'error'}
                    />
                    {/* Animated border glow on focus */}
                    <div
                        className={`
                            absolute inset-0 rounded-xl pointer-events-none
                            transition-opacity duration-300
                            ${isFocused ? 'opacity-100' : 'opacity-0'}
                        `}
                        style={{
                            boxShadow: '0 0 20px rgba(196, 135, 61, 0.15)',
                        }}
                    />
                </div>

                {/* Role Dropdown - Dark glass styled */}
                <div className="relative" ref={roleRef}>
                    <button
                        type="button"
                        onClick={() => setIsRoleOpen(!isRoleOpen)}
                        className="
                            flex items-center justify-between gap-3 px-5 py-4 w-full sm:w-auto
                            min-w-[140px] rounded-xl
                            bg-slate-dark/50 backdrop-blur-sm
                            border-2 border-cream/[0.08]
                            font-sans text-sm uppercase tracking-widest text-cream/60
                            transition-all duration-300
                            hover:border-cream/20 hover:text-cream
                            focus:outline-none focus:border-copper/50
                            cursor-pointer
                        "
                        aria-haspopup="listbox"
                        aria-expanded={isRoleOpen}
                    >
                        <span>{formState.role === 'buyer' ? form.buyerLabel : form.sellerLabel}</span>
                        <svg
                            className={`w-4 h-4 transition-transform duration-300 ${isRoleOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {/* Dropdown menu with dark glass effect */}
                    {isRoleOpen && (
                        <div
                            className="
                                absolute top-full left-0 right-0 mt-2 z-50
                                rounded-xl overflow-hidden
                                bg-slate-dark/95 backdrop-blur-xl
                                border border-cream/[0.08]
                                shadow-xl shadow-black/30
                                animate-fade-in
                            "
                            role="listbox"
                        >
                            {[
                                { value: 'buyer' as Role, label: form.buyerLabel, desc: 'Looking to buy' },
                                { value: 'seller' as Role, label: form.sellerLabel, desc: 'Looking to sell' },
                            ].map((option) => (
                                <button
                                    key={option.value}
                                    type="button"
                                    onClick={() => handleRoleSelect(option.value)}
                                    className={`
                                        w-full px-5 py-4 text-left
                                        transition-all duration-200 cursor-pointer
                                        ${formState.role === option.value
                                            ? 'bg-copper/15'
                                            : 'hover:bg-cream/[0.03]'}
                                    `}
                                    role="option"
                                    aria-selected={formState.role === option.value}
                                >
                                    <span className={`
                                        block font-sans text-sm uppercase tracking-widest
                                        ${formState.role === option.value ? 'text-copper' : 'text-cream/60'}
                                    `}>
                                        {option.label}
                                    </span>
                                    <span className="block mt-0.5 font-sans text-xs text-cream/30">
                                        {option.desc}
                                    </span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Submit Button - Copper accent */}
                <button
                    type="submit"
                    disabled={formState.status === 'loading'}
                    className="
                        group relative px-8 py-4 rounded-xl overflow-hidden
                        bg-copper text-slate
                        font-sans text-sm uppercase tracking-widest font-medium
                        transition-all duration-300
                        hover:shadow-lg hover:shadow-copper/30
                        focus:outline-none focus:ring-2 focus:ring-copper/50 focus:ring-offset-2 focus:ring-offset-slate
                        disabled:opacity-50 disabled:cursor-not-allowed
                        cursor-pointer
                    "
                    aria-label="Join waitlist"
                >
                    {/* Shimmer effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cream/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                    {/* Button content */}
                    <span className="relative flex items-center justify-center gap-2">
                        {formState.status === 'loading' ? (
                            <svg
                                className="w-5 h-5 animate-spin"
                                fill="none"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                />
                            </svg>
                        ) : (
                            <>
                                <span>{form.submitLabel}</span>
                                <svg
                                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </>
                        )}
                    </span>
                </button>
            </div>

            {/* Error message */}
            {formState.status === 'error' && formState.errorMessage && (
                <div className="flex items-center gap-2 px-2 animate-fade-in">
                    <svg className="w-4 h-4 text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm text-wine font-sans">
                        {formState.errorMessage}
                    </p>
                </div>
            )}
        </form>
    )
}
