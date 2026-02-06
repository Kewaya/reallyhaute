'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WaitlistModal from '@/components/WaitlistModal'
import HowItWorks from '@/components/HowItWorks'
import Categories from '@/components/Categories'
import WhyReallyHaute from '@/components/WhyReallyHaute'
import ComingSoon from '@/components/ComingSoon'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
    const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)
    const [waitlistRole, setWaitlistRole] = useState<'buyer' | 'seller'>('buyer')

    const openWaitlist = (role?: 'buyer' | 'seller') => {
        if (role) setWaitlistRole(role)
        setIsWaitlistOpen(true)
    }

    const closeWaitlist = () => {
        setIsWaitlistOpen(false)
    }

    return (
        <>
            <Header onOpenWaitlist={openWaitlist} />

            <main>
                <Hero onOpenWaitlist={openWaitlist} />
                <HowItWorks />
                <Categories onOpenWaitlist={() => openWaitlist()} />
                <WhyReallyHaute />
                <ComingSoon />
                <FAQ />
            </main>

            <Footer onOpenWaitlist={() => openWaitlist()} />

            <WaitlistModal
                isOpen={isWaitlistOpen}
                onClose={closeWaitlist}
                initialRole={waitlistRole}
            />
        </>
    )
}
