"use client";

import { Cormorant, Montserrat } from "next/font/google";
import Landing4Header from "@/components/landing4/Header";
import Landing4Hero from "@/components/landing4/Hero";
import Landing4Value from "@/components/landing4/Value";
import Landing4WaitlistForm from "@/components/landing4/WaitlistForm";
import Landing4Footer from "@/components/landing4/Footer";

// Luxury typography from design system
const cormorant = Cormorant({
    subsets: ["latin"],
    variable: "--font-cormorant",
    display: "swap",
    weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    display: "swap",
    weight: ["300", "400", "500", "600"],
});

export default function Landing4Page() {
    return (
        <div
            className={`landing4 min-h-screen bg-[rgb(var(--bg))] antialiased ${cormorant.variable} ${montserrat.variable}`}
            style={{
                fontFamily: "var(--font-montserrat), system-ui, sans-serif",
            }}
        >
            {/* Floating header */}
            <Landing4Header />

            {/* Main content - minimal single column */}
            <main>
                <Landing4Hero />
                <Landing4Value />
                <Landing4WaitlistForm />
            </main>

            {/* Footer */}
            <Landing4Footer />
        </div>
    );
}
