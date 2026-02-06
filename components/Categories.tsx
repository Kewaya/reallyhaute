'use client'

import { categories } from '@/lib/content'

interface CategoriesProps {
    onOpenWaitlist: () => void
}

export default function Categories({ onOpenWaitlist }: CategoriesProps) {
    return (
        <section id="categories" className="section bg-ivory relative overflow-hidden">
            {/* Background decorations */}
            <div className="orb-wine w-[500px] h-[500px] -bottom-40 -right-40 opacity-50" />

            <div className="container-narrow relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <span className="text-xs font-sans uppercase tracking-[0.2em] text-gold mb-4 block animate-fade-in">
                        Collections
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-onyx mb-6 animate-slide-up">
                        Curated Categories
                    </h2>
                    <p className="font-sans text-lg text-onyx/50 max-w-xl mx-auto animate-slide-up delay-100">
                        Discover archive-quality Nigerian fashion across our carefully curated collections.
                    </p>
                    <div className="divider" />
                </div>

                {/* Categories Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {categories.map((category, index) => (
                        <div
                            key={category.name}
                            className="group relative overflow-hidden rounded-xl bg-onyx aspect-[3/4] cursor-pointer animate-fade-in"
                            style={{ animationDelay: `${index * 120}ms` }}
                            onClick={onOpenWaitlist}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === 'Enter' && onOpenWaitlist()}
                            aria-label={`${category.name} - Join waitlist to shop first`}
                        >
                            {/* Background image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${category.image})` }}
                            />

                            {/* Gradient overlay - more dramatic */}
                            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/70 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />

                            {/* Iridescent border on hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute inset-0 rounded-xl" style={{
                                    background: 'linear-gradient(135deg, rgba(176, 141, 87, 0.3), transparent 50%, rgba(74, 31, 44, 0.2))',
                                }} />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                                <h3 className="font-serif text-2xl md:text-3xl text-ivory mb-3 transform group-hover:translate-y-0 translate-y-2 transition-transform duration-500">
                                    {category.name}
                                </h3>
                                <p className="font-sans text-sm text-ivory/60 mb-6 leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                    {category.description}
                                </p>
                                <div className="flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="inline-flex items-center text-xs font-sans text-gold uppercase tracking-widest">
                                        Explore Collection
                                    </span>
                                    <svg className="w-4 h-4 text-gold transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
