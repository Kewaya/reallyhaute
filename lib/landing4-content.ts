export const landing4Config = {
    meta: {
        title: "ReallyHaute - Nigeria's Premier Luxury Resale",
        description: "Join the waitlist for exclusive access to authenticated luxury fashion.",
    },

    hero: {
        headline: "Where Luxury Lives On",
        tagline: "Nigeria's first curated marketplace for authenticated pre-loved luxury fashion",
    },

    values: [
        {
            id: "authenticated",
            title: "Authenticated",
            description: "Every piece verified by luxury experts",
        },
        {
            id: "curated",
            title: "Curated",
            description: "Only the finest pieces make the cut",
        },
        {
            id: "sustainable",
            title: "Sustainable",
            description: "Luxury that respects the future",
        },
    ],

    waitlist: {
        headline: "Join the Waitlist",
        description: "Be among the first to experience luxury resale, done right.",
        form: {
            email: {
                label: "Email",
                placeholder: "your@email.com",
                required: "Email is required",
                invalid: "Please enter a valid email",
            },
            phone: {
                label: "Phone Number",
                placeholder: "+234 800 000 0000",
                required: "Phone number is required",
                invalid: "Please enter a valid phone number",
            },
            role: {
                label: "I'm interested in",
                options: [
                    { value: "buyer", label: "Buying" },
                    { value: "seller", label: "Selling" },
                    { value: "both", label: "Both" },
                ],
            },
            submit: "Join Waitlist",
            success: "Welcome to ReallyHaute. We'll be in touch soon.",
            error: "Something went wrong. Please try again.",
        },
    },

    footer: {
        tagline: "Luxury resale, elevated",
        social: [
            { name: "Instagram", url: "#", icon: "instagram" },
            { name: "Twitter", url: "#", icon: "twitter" },
        ],
        copyright: `© ${new Date().getFullYear()} ReallyHaute. All rights reserved.`,
    },
};
