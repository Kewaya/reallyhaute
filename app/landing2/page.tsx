import type { Metadata } from 'next'
import { landing2Config } from '@/lib/landing2-content'
import Landing2Header from '@/components/landing2/Landing2Header'
import Landing2Hero from '@/components/landing2/Landing2Hero'
import Landing2Index from '@/components/landing2/Landing2Index'
import Landing2Manifesto from '@/components/landing2/Landing2Manifesto'
import Landing2Roadmap from '@/components/landing2/Landing2Roadmap'
import Landing2Footer from '@/components/landing2/Landing2Footer'

export const metadata: Metadata = {
    title: landing2Config.meta.title,
    description: landing2Config.meta.description,
}

export default function Landing2Page() {
    return (
        <div className="landing2-theme min-h-screen">
            <Landing2Header />

            <main>
                <Landing2Hero />
                <Landing2Index />
                <Landing2Manifesto />
                <Landing2Roadmap />
            </main>

            <Landing2Footer />
        </div>
    )
}
