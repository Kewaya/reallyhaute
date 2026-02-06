'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { X, Check, Loader2 } from 'lucide-react'

interface WaitlistModalProps {
    isOpen: boolean
    onClose: () => void
    initialRole?: 'buyer' | 'seller'
}

interface FormData {
    email: string
    role: 'buyer' | 'seller'
    whatsapp: string
}

interface FormErrors {
    email?: string
    role?: string
}

export default function WaitlistModal({ isOpen, onClose, initialRole }: WaitlistModalProps) {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        role: initialRole || 'buyer',
        whatsapp: '',
    })
    const [errors, setErrors] = useState<FormErrors>({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const modalRef = useRef<HTMLDivElement>(null)
    const firstInputRef = useRef<HTMLInputElement>(null)

    // Update role when initialRole changes
    useEffect(() => {
        if (initialRole) {
            setFormData(prev => ({ ...prev, role: initialRole }))
        }
    }, [initialRole])

    // Focus trap and escape key handling
    useEffect(() => {
        if (!isOpen) return

        // Focus first input when modal opens
        setTimeout(() => firstInputRef.current?.focus(), 100)

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }

        document.addEventListener('keydown', handleEscape)
        document.body.style.overflow = 'hidden'

        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = ''
        }
    }, [isOpen, onClose])

    // Reset form when modal closes
    useEffect(() => {
        if (!isOpen) {
            setFormData({ email: '', role: initialRole || 'buyer', whatsapp: '' })
            setErrors({})
            setIsSuccess(false)
        }
    }, [isOpen, initialRole])

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    const validate = (): boolean => {
        const newErrors: FormErrors = {}

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email'
        }

        if (!formData.role) {
            newErrors.role = 'Please select a role'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validate()) return

        setIsSubmitting(true)

        try {
            // TODO: Replace with actual API endpoint (Mailchimp/Brevo/Supabase)
            // const response = await fetch('/api/waitlist', {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify(formData),
            // })

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1200))

            // Store to localStorage as fallback
            const existingData = JSON.parse(localStorage.getItem('waitlist') || '[]')
            const newEntry = {
                ...formData,
                timestamp: new Date().toISOString(),
            }
            localStorage.setItem('waitlist', JSON.stringify([...existingData, newEntry]))

            setIsSuccess(true)
        } catch (error) {
            console.error('Waitlist submission error:', error)
            setErrors({ email: 'Something went wrong. Please try again.' })
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }))
        if (errors[field as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [field]: undefined }))
        }
    }

    const handleOverlayClick = useCallback((e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }, [onClose])

    if (!isOpen) return null

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="waitlist-title"
        >
            {/* Overlay with blur */}
            <div
                className="absolute inset-0 bg-onyx/60 backdrop-blur-md animate-fade-in"
                onClick={handleOverlayClick}
            />

            {/* Modal */}
            <div
                ref={modalRef}
                className="relative w-full max-w-lg bg-ivory rounded-2xl overflow-hidden animate-slide-up"
                style={{ boxShadow: '0 25px 80px rgba(0, 0, 0, 0.3)' }}
            >
                {/* Gold accent top */}
                <div className="h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />

                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full text-onyx/40 hover:text-onyx hover:bg-onyx/5 transition-all duration-300 cursor-pointer"
                    aria-label="Close modal"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="p-8 md:p-10">
                    {isSuccess ? (
                        /* Success State */
                        <div className="text-center py-10">
                            <div className="w-20 h-20 mx-auto mb-8 rounded-full flex items-center justify-center animate-glow" style={{ background: 'linear-gradient(135deg, rgba(176, 141, 87, 0.2), rgba(176, 141, 87, 0.1))' }}>
                                <Check className="w-10 h-10 text-gold" />
                            </div>
                            <h2 className="font-serif text-3xl text-onyx mb-4">
                                Welcome to the Archive.
                            </h2>
                            <p className="text-onyx/50 font-sans text-lg mb-8">
                                We'll notify you first when we launch.
                            </p>
                            <button
                                onClick={onClose}
                                className="btn-secondary"
                            >
                                Close
                            </button>
                        </div>
                    ) : (
                        /* Form State */
                        <>
                            <div className="text-center mb-8">
                                <h2 id="waitlist-title" className="font-serif text-3xl md:text-4xl text-onyx mb-3">
                                    Join the Waitlist
                                </h2>
                                <p className="text-onyx/50 font-sans text-lg">
                                    Be first to access curated Nigerian luxury fashion.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-sans font-medium text-onyx mb-2 uppercase tracking-wider">
                                        Email <span className="text-wine">*</span>
                                    </label>
                                    <input
                                        ref={firstInputRef}
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                        placeholder="you@example.com"
                                        className={`input ${errors.email ? 'border-wine focus:border-wine' : ''}`}
                                        aria-invalid={!!errors.email}
                                        aria-describedby={errors.email ? 'email-error' : undefined}
                                    />
                                    {errors.email && (
                                        <p id="email-error" className="mt-2 text-sm text-wine">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                {/* Role Toggle */}
                                <div>
                                    <label className="block text-sm font-sans font-medium text-onyx mb-3 uppercase tracking-wider">
                                        I want to <span className="text-wine">*</span>
                                    </label>
                                    <div className="flex gap-4">
                                        <button
                                            type="button"
                                            onClick={() => handleInputChange('role', 'buyer')}
                                            className={`flex-1 py-4 px-6 text-sm font-sans font-medium uppercase tracking-wider rounded-lg transition-all duration-400 cursor-pointer ${formData.role === 'buyer'
                                                    ? 'bg-onyx text-ivory shadow-lg'
                                                    : 'bg-transparent text-onyx border border-onyx/15 hover:border-gold'
                                                }`}
                                            aria-pressed={formData.role === 'buyer'}
                                        >
                                            Buy Pieces
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleInputChange('role', 'seller')}
                                            className={`flex-1 py-4 px-6 text-sm font-sans font-medium uppercase tracking-wider rounded-lg transition-all duration-400 cursor-pointer ${formData.role === 'seller'
                                                    ? 'bg-onyx text-ivory shadow-lg'
                                                    : 'bg-transparent text-onyx border border-onyx/15 hover:border-gold'
                                                }`}
                                            aria-pressed={formData.role === 'seller'}
                                        >
                                            Sell Pieces
                                        </button>
                                    </div>
                                </div>

                                {/* WhatsApp (Optional) */}
                                <div>
                                    <label htmlFor="whatsapp" className="block text-sm font-sans font-medium text-onyx mb-2 uppercase tracking-wider">
                                        WhatsApp <span className="text-onyx/30">(optional)</span>
                                    </label>
                                    <div className="flex">
                                        <span className="inline-flex items-center px-5 bg-onyx/5 border border-r-0 border-onyx/10 rounded-l-lg text-sm font-medium text-onyx/50">
                                            +234
                                        </span>
                                        <input
                                            type="tel"
                                            id="whatsapp"
                                            value={formData.whatsapp}
                                            onChange={(e) => handleInputChange('whatsapp', e.target.value.replace(/\D/g, ''))}
                                            placeholder="801 234 5678"
                                            className="input rounded-l-none flex-1"
                                        />
                                    </div>
                                    <p className="mt-2 text-xs text-onyx/40">
                                        Get priority launch updates via WhatsApp
                                    </p>
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn-primary w-full py-5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center gap-3">
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Joining...
                                        </span>
                                    ) : (
                                        'Join the Archive'
                                    )}
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
