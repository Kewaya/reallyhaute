"use client";

import { landing4Config } from "@/lib/landing4-content";

export default function Landing4Header() {
    return (
        <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-6">
            <div
                className="mx-auto w-fit px-6 py-4 rounded-2xl cursor-pointer transition-all duration-500"
                style={{
                    background: "rgba(var(--card-glass))",
                    backdropFilter: "blur(var(--glass-blur))",
                    WebkitBackdropFilter: "blur(var(--glass-blur))",
                    border: "1px solid rgba(var(--border-glass))",
                    boxShadow: "var(--shadow-soft)",
                }}
            >
                <h1 className="text-2xl font-serif font-semibold tracking-tight text-[rgb(var(--text))]">
                    ReallyHaute
                </h1>
            </div>
        </header>
    );
}
