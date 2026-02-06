"use client";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState, useCallback, useRef } from "react";
import { EASE } from "@/lib/motion";

// Each slide can be an image or any JSX
const slides = [
    {
        id: 0,
        src: "/landing3/intro-slide-1.jpg",
        alt: "Luxury clothing laid out on a table",
    },
    {
        id: 1,
        src: "/landing3/intro-slide-2.jpg",
        alt: "Close-up of a designer handbag",
    },
    {
        id: 2,
        src: "/landing3/intro-slide-3.jpg",
        alt: "Stylists preparing a photoshoot",
    },
];

interface IntroSlideshowProps {
    /** Duration per slide in milliseconds */
    duration?: number;
    /** Callback when slideshow finishes */
    onFinish: () => void;
}

export default function IntroSlideshow({
    duration = 3000,
    onFinish,
}: IntroSlideshowProps) {
    const shouldReduce = useReducedMotion();
    const [current, setCurrent] = useState(0);
    const [done, setDone] = useState(false);
    const onFinishRef = useRef(onFinish);

    // Keep the callback ref updated
    useEffect(() => {
        onFinishRef.current = onFinish;
    }, [onFinish]);

    const finishSlideshow = useCallback(() => {
        setDone(true);
        onFinishRef.current();
    }, []);

    useEffect(() => {
        // Skip slideshow immediately if reduced motion is preferred
        if (shouldReduce) {
            finishSlideshow();
            return;
        }

        // Set up interval to cycle through slides
        const intervalId = setInterval(() => {
            setCurrent((prev) => {
                // If we're on the last slide, we'll finish after this interval
                if (prev >= slides.length - 1) {
                    clearInterval(intervalId);
                    // Give the last slide time to display, then finish
                    setTimeout(finishSlideshow, duration);
                    return prev;
                }
                return prev + 1;
            });
        }, duration);

        // Clean up on unmount
        return () => clearInterval(intervalId);
    }, [duration, finishSlideshow, shouldReduce]);

    // If finished, render nothing
    if (done) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgb(var(--bg))] pointer-events-none overflow-hidden"
            aria-hidden="true"
        >
            <AnimatePresence mode="wait">
                {slides.map(
                    (slide) =>
                        slide.id === current && (
                            <motion.div
                                key={slide.id}
                                className="absolute inset-0 flex items-center justify-center"
                                initial={{ opacity: 0, x: 40, scale: 1.0 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    scale: 1.05,
                                    transition: { duration: 0.8, ease: EASE },
                                }}
                                exit={{
                                    opacity: 0,
                                    x: -40,
                                    scale: 1.05,
                                    transition: { duration: 0.8, ease: EASE },
                                }}
                            >
                                {/* Dark overlay for better visual hierarchy */}
                                <div className="absolute inset-0 bg-black/20 z-10" />
                                <img
                                    src={slide.src}
                                    alt={slide.alt}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        )
                )}
            </AnimatePresence>

            {/* Progress indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className={`w-12 h-1 rounded-full transition-all duration-300 ${slide.id === current
                                ? "bg-white"
                                : slide.id < current
                                    ? "bg-white/60"
                                    : "bg-white/30"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
