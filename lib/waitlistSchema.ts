import { z } from 'zod'

export const waitlistSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    whatsapp: z.string().optional(),
    city: z.enum(['lagos', 'abuja', 'ph', 'other', '']).optional(),
    role: z.enum(['buyer', 'seller', 'both'], {
        message: 'Please select how you want to join',
    }),
    // Honeypot field for spam prevention - should be empty
    website: z.string().max(0, 'Bot detected').optional(),
})

export type WaitlistFormData = z.infer<typeof waitlistSchema>

export const cityOptions = [
    { value: '', label: 'Select your city' },
    { value: 'lagos', label: 'Lagos' },
    { value: 'abuja', label: 'Abuja' },
    { value: 'ph', label: 'Port Harcourt' },
    { value: 'other', label: 'Other' },
] as const

export const roleOptions = [
    { value: 'buyer', label: 'Buyer' },
    { value: 'seller', label: 'Seller' },
    { value: 'both', label: 'Both' },
] as const
