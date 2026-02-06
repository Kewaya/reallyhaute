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
                // Responsive typography scale
                'display': ['clamp(2.5rem, 8vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
                'headline': ['clamp(1.5rem, 4vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
                'subhead': ['clamp(1rem, 2vw, 1.25rem)', { lineHeight: '1.5' }],
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
            },
            maxWidth: {
                'container': '1280px',
            },
            boxShadow: {
                'soft': '0 2px 15px rgba(0, 0, 0, 0.04)',
                'medium': '0 4px 25px rgba(0, 0, 0, 0.08)',
                'strong': '0 10px 40px rgba(0, 0, 0, 0.12)',
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
