"use client";

import { landing4Config } from "@/lib/landing4-content";

// SVG Icons following ui-ux-pro-max guidelines (no emojis)
const CheckBadgeIcon = () => (
    <svg
        className="w-12 h-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
        />
    </svg>
);

const SparklesIcon = () => (
    <svg
        className="w-12 h-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
        />
    </svg>
);

const LeafIcon = () => (
    <svg
        className="w-12 h-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
        />
    </svg>
);

const icons = {
    authenticated: CheckBadgeIcon,
    curated: SparklesIcon,
    sustainable: LeafIcon,
};

export default function Landing4Value() {
    return (
        <section className="py-32 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Values grid */}
                <div className="grid md:grid-cols-3 gap-12 md:gap-8">
                    {landing4Config.values.map((value, index) => {
                        const Icon = icons[value.id as keyof typeof icons];
                        return (
                            <div
                                key={value.id}
                                className="text-center space-y-6 animate-slide-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Icon */}
                                <div className="flex justify-center">
                                    <div
                                        className="p-4 rounded-2xl transition-all duration-500 hover:scale-110"
                                        style={{
                                            background: "rgba(var(--card-glass))",
                                            backdropFilter: "blur(var(--glass-blur))",
                                            WebkitBackdropFilter: "blur(var(--glass-blur))",
                                            border: "1px solid rgba(var(--border-glass))",
                                            color: "rgb(var(--accent))",
                                        }}
                                    >
                                        <Icon />
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="font-serif text-2xl font-medium text-[rgb(var(--text))]">
                                    {value.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[rgb(var(--text-muted))] font-light">
                                    {value.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
