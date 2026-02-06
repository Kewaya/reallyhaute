'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '@/lib/content'

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section id="faq" className="section bg-ivory relative overflow-hidden">
            {/* Background decoration */}
            <div className="orb-gold w-[300px] h-[300px] top-20 -left-20 opacity-40" />

            <div className="container-narrow relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <span className="text-xs font-sans uppercase tracking-[0.2em] text-gold mb-4 block animate-fade-in">
                        Questions & Answers
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-onyx mb-6 animate-slide-up">
                        Frequently Asked
                    </h2>
                    <div className="divider" />
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-onyx/10 last:border-b-0 animate-fade-in"
                            style={{ animationDelay: `${index * 80}ms` }}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full py-6 md:py-8 flex items-start justify-between gap-6 text-left cursor-pointer group"
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <span className="font-serif text-lg md:text-xl text-onyx group-hover:text-gold transition-colors duration-400">
                                    {faq.question}
                                </span>
                                <div className={`flex-shrink-0 w-10 h-10 rounded-full border border-onyx/10 flex items-center justify-center transition-all duration-400 group-hover:border-gold ${openIndex === index ? 'bg-gold border-gold' : ''
                                    }`}>
                                    <ChevronDown
                                        className={`w-5 h-5 transition-all duration-400 ${openIndex === index ? 'rotate-180 text-ivory' : 'text-onyx/40 group-hover:text-gold'
                                            }`}
                                    />
                                </div>
                            </button>

                            <div
                                id={`faq-answer-${index}`}
                                className={`overflow-hidden transition-all duration-500 ease-out ${openIndex === index ? 'max-h-96 pb-8' : 'max-h-0'
                                    }`}
                                aria-hidden={openIndex !== index}
                            >
                                <p className="font-sans text-onyx/60 leading-relaxed pr-16 md:pr-20 text-lg">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
