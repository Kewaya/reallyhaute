"use client";

import { landing4Config } from "@/lib/landing4-content";

export default function Landing4Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Liquid glass background orbs */}
            <div
                className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-40 animate-float"
                style={{
                    background:
                        "radial-gradient(circle, rgba(202, 138, 4, 0.15) 0%, transparent 70%)",
                    filter: "blur(80px)",
                }}
            />
            <div
                className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-30 animate-float"
                style={{
                    background:
                        "radial-gradient(circle, rgba(28, 25, 23, 0.1) 0%, transparent 70%)",
                    filter: "blur(100px)",
                    animationDelay: "2s",
                }}
            />

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <div className="space-y-8 animate-slide-up">
                    {/* Headline */}
                    <h2
                        className="font-serif text-6xl sm:text-7xl lg:text-8xl font-light tracking-tight text-[rgb(var(--text))]"
                        style={{ lineHeight: "1.1" }}
                    >
                        {landing4Config.hero.headline}
                    </h2>

                    {/* Tagline */}
                    <p className="text-lg sm:text-xl text-[rgb(var(--text-muted))] max-w-2xl mx-auto font-light">
                        {landing4Config.hero.tagline}
                    </p>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-slide-up delay-500">
                    <div className="flex flex-col items-center gap-2 opacity-60">
                        <span className="text-xs uppercase tracking-widest text-[rgb(var(--text-muted))]">
                            Scroll
                        </span>
                        <div className="w-[1px] h-16 bg-[rgb(var(--text-muted))] relative overflow-hidden">
                            <div className="w-full h-1/3 bg-[rgb(var(--accent))] animate-scroll-line" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
