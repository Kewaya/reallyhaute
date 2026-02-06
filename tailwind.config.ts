import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Really Haute Brand Colors - Runway Editorial Palette
                onyx: '#0C0C0C',
                ivory: '#FAF9F7',
                gold: '#B08D57',
                wine: '#4A1F2C',
                // New Dramatic Runway Colors
                slate: {
                    DEFAULT: '#1A1D24',
                    light: '#252A33',
                    dark: '#12141A',
                },
                copper: {
                    DEFAULT: '#C4873D',
                    light: '#D4A066',
                    dark: '#A66B2A',
                },
                teal: {
                    DEFAULT: '#1E6B7B',
                    light: '#2D8B98',
                    dark: '#15525F',
                },
                cream: '#F5F0E8',
                bronze: '#8B5A2B',
                // Semantic aliases
                primary: '#1A1D24',
                secondary: '#F5F0E8',
                accent: '#C4873D',
            },
            fontFamily: {
                serif: ['Playfair Display', 'Georgia', 'serif'],
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                // Display - Hero only
                'display': ['clamp(2.75rem, 7vw, 4.5rem)', {
                    lineHeight: '1.1',
                    letterSpacing: '-0.03em',
                    fontWeight: '500'
                }],

                // Headings
                'h1': ['clamp(2rem, 5vw, 3rem)', {
                    lineHeight: '1.15',
                    letterSpacing: '-0.02em',
                    fontWeight: '500'
                }],
                'h2': ['clamp(1.5rem, 3.5vw, 2.25rem)', {
                    lineHeight: '1.25',
                    letterSpacing: '-0.01em',
                    fontWeight: '500'
                }],
                'h3': ['clamp(1.25rem, 2.5vw, 1.75rem)', {
                    lineHeight: '1.3',
                    fontWeight: '500'
                }],

                // Body - selective sizing
                'body-hero': ['clamp(1rem, 0.6vw + 0.9rem, 1.125rem)', {
                    lineHeight: '1.8'
                }],
                'body': ['1rem', {
                    lineHeight: '1.75'
                }],
                'body-sm': ['0.875rem', {
                    lineHeight: '1.7'
                }],

                // UI elements
                'button': ['0.9375rem', {
                    lineHeight: '1.2',
                    fontWeight: '500'
                }],
                'label': ['0.75rem', {
                    lineHeight: '1.5',
                    letterSpacing: '0.05em'
                }],
            },
            spacing: {
                '4.5': '1.125rem',
                '18': '4.5rem',
                '22': '5.5rem',
            },
            maxWidth: {
                'container': '1280px',
                'content': '1024px',
                'prose': '65ch',
                'narrow': '42rem',
            },
            boxShadow: {
                'soft': '0 2px 16px rgba(28, 25, 23, 0.04)',
                'card': '0 4px 24px rgba(28, 25, 23, 0.06)',
                'elevated': '0 8px 32px rgba(28, 25, 23, 0.08)',
                'cta': '0 4px 16px rgba(176, 141, 87, 0.15)',
                'cta-hover': '0 6px 20px rgba(176, 141, 87, 0.2)',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'slide-up': 'slideUp 0.5s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}

export default config
