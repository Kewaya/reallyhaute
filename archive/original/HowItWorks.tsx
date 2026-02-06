'use client'

import { useState } from 'react'
import { howItWorks } from '@/lib/content'

export default function HowItWorks() {
    const [activeTab, setActiveTab] = useState<'buyer' | 'seller'>('buyer')
    const currentContent = activeTab === 'buyer' ? howItWorks.buyer : howItWorks.seller

    return (
        <section id="how-it-works" className="section bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="orb-gold w-[400px] h-[400px] -top-20 -right-20 opacity-30" />

            <div className="container-narrow relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <span className="text-xs font-sans uppercase tracking-[0.2em] text-gold mb-4 block animate-fade-in">
                        How It Works
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-onyx mb-6 animate-slide-up">
                        Simple. Refined.
                    </h2>
                    <div className="divider" />
                </div>

                {/* Tab Toggle */}
                <div className="flex justify-center mb-16 animate-fade-in delay-200">
                    <div className="glass-card inline-flex p-1.5 gap-1">
                        <button
                            onClick={() => setActiveTab('buyer')}
                            className={`px-8 py-3 text-sm font-sans font-medium tracking-wide uppercase transition-all duration-400 cursor-pointer rounded-lg ${activeTab === 'buyer'
                                    ? 'bg-onyx text-ivory shadow-lg'
                                    : 'text-onyx/60 hover:text-onyx'
                                }`}
                            aria-pressed={activeTab === 'buyer'}
                        >
                            {howItWorks.buyer.title}
                        </button>
                        <button
                            onClick={() => setActiveTab('seller')}
                            className={`px-8 py-3 text-sm font-sans font-medium tracking-wide uppercase transition-all duration-400 cursor-pointer rounded-lg ${activeTab === 'seller'
                                    ? 'bg-onyx text-ivory shadow-lg'
                                    : 'text-onyx/60 hover:text-onyx'
                                }`}
                            aria-pressed={activeTab === 'seller'}
                        >
                            {howItWorks.seller.title}
                        </button>
                    </div>
                </div>

                {/* Steps Grid */}
                <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
                    {currentContent.steps.map((step, index) => (
                        <div
                            key={step.number}
                            className="glass-card card-premium p-8 md:p-10 text-center animate-fade-in"
                            style={{ animationDelay: `${(index + 1) * 150}ms` }}
                        >
                            {/* Step Number */}
                            <div className="relative inline-flex items-center justify-center w-20 h-20 mb-8">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/20 to-transparent" />
                                <div className="absolute inset-1 rounded-full border border-gold/30" />
                                <span className="font-serif text-3xl text-gradient-gold">
                                    {step.number}
                                </span>
                            </div>

                            {/* Step Title */}
                            <h3 className="font-serif text-xl md:text-2xl text-onyx mb-4">
                                {step.title}
                            </h3>

                            {/* Step Description */}
                            <p className="font-sans text-onyx/60 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
