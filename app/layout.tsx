import type { Metadata } from 'next'
import { siteConfig } from '@/lib/content'
import './globals.css'

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: `${siteConfig.name} | ${siteConfig.tagline}`,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
        'Nigerian fashion',
        'luxury pre-loved',
        'Aso Ebi',
        'traditional Nigerian wear',
        'Agbada',
        'Iro and Buba',
        'owambe fashion',
        'occasion wear Nigeria',
        'pre-owned luxury',
        'sustainable fashion Nigeria',
    ],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    openGraph: {
        type: 'website',
        locale: 'en_NG',
        url: siteConfig.url,
        siteName: siteConfig.name,
        title: `${siteConfig.name} | ${siteConfig.tagline}`,
        description: siteConfig.description,
        images: [
            {
                url: '/og-image.svg',
                width: 1200,
                height: 630,
                alt: `${siteConfig.name} - ${siteConfig.tagline}`,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: `${siteConfig.name} | ${siteConfig.tagline}`,
        description: siteConfig.description,
        images: ['/og-image.svg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/favicon.svg',
        shortcut: '/favicon.svg',
        apple: '/apple-touch-icon.svg',
    },
}

// JSON-LD Organization Schema
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    sameAs: [
        siteConfig.social.instagram,
        siteConfig.social.tiktok,
    ],
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="min-h-screen" suppressHydrationWarning>
                {children}
            </body>
        </html>
    )
}
