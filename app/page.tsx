"use client";
import { Cormorant, Montserrat } from "next/font/google";
import Enter from "@/components/landing3/Enter";
import Header from "@/components/landing3/Header";
import Hero from "@/components/landing3/Hero";
import StaticBackground from "@/components/landing3/StaticBackground";

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
    return (
        <div
            className={`landing3 min-h-screen bg-[rgb(var(--bg))] text-[rgb(var(--text))] antialiased ${cormorant.variable} ${montserrat.variable} selection:bg-[rgb(var(--accent))]/20 selection:text-[rgb(var(--text))]`}
            style={{ fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}
        >
            {/* Single viewport - scrollable on mobile if content exceeds */}
            <section className="relative min-h-screen overflow-y-auto overflow-x-hidden">
                {/* Static background image */}
                <StaticBackground />

                {/* Hero content */}
                <div className="relative z-10 min-h-screen flex flex-col">
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
