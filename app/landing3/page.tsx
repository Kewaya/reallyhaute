"use client";
import { useState } from "react";
import { Cormorant, Montserrat } from "next/font/google";
import IntroVideo from "@/components/landing3/IntroVideo";
import Enter from "@/components/landing3/Enter";
import Header from "@/components/landing3/Header";
import Hero from "@/components/landing3/Hero";

// Premium luxury font pairing
const cormorant = Cormorant({
    subsets: ["latin"],
    variable: "--font-cormorant",
    display: "swap",
    weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    display: "swap",
    weight: ["300", "400", "500", "600"],
});

export default function Landing3Page() {
    const [ready, setReady] = useState(false);

    return (
        <div
            className={`landing3 h-screen overflow-hidden bg-[rgb(var(--bg))] text-[rgb(var(--text))] antialiased ${cormorant.variable} ${montserrat.variable} selection:bg-[rgb(var(--accent))]/20 selection:text-[rgb(var(--text))]`}
            style={{ fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}
        >
            {/* Single viewport - no scrolling */}
            <section className="relative h-screen overflow-hidden">
                {/* IntroVideo: plays on load, then becomes static background */}
                <IntroVideo onReady={() => setReady(true)} />

                {/* Hero content: fades in when intro is ready */}
                <div
                    className={`relative z-10 h-screen flex flex-col transition-opacity duration-500 ${ready ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                >
                    <Enter>
                        <div className="max-w-6xl mx-auto px-6 flex-1 flex flex-col">
                            <Header />
                            <div className="flex-1 flex items-center">
                                <Hero />
                            </div>
                        </div>
                    </Enter>
                </div>
            </section>
        </div>
    );
}
