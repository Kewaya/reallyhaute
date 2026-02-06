"use client";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";

interface IntroVideoProps {
    onReady: () => void;
}

export default function IntroVideo({ onReady }: IntroVideoProps) {
    const shouldReduce = useReducedMotion();
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const [phase, setPhase] = useState<"cover" | "background">("cover");
    const [posterUrl, setPosterUrl] = useState<string | null>(null);
    const hasFinalized = useRef(false);

    // Capture the current frame to a data URL
    const captureFrame = useCallback(() => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        if (!video || !canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0);

        const dataUrl = canvas.toDataURL("image/jpeg", 0.92);
        setPosterUrl(dataUrl);
    }, []);

    // Finalize: pause video, switch to background, notify parent
    const finalize = useCallback(() => {
        if (hasFinalized.current) return;
        hasFinalized.current = true;

        const video = videoRef.current;
        if (video) {
            video.pause();
        }

        setPhase("background");
        onReady();
    }, [onReady]);

    // Handle reduced motion: skip video, go straight to background
    useEffect(() => {
        if (shouldReduce) {
            setPhase("background");
            // Use static fallback image for reduced motion
            setPosterUrl("/landing3/final-frame.jpg");
            onReady();
        }
    }, [shouldReduce, onReady]);

    // Monitor video time to capture last frame just before end
    const handleTimeUpdate = useCallback(() => {
        const video = videoRef.current;
        if (!video || posterUrl || hasFinalized.current) return;

        // Capture frame when we're within 0.05s of the end
        if (video.duration && video.currentTime >= video.duration - 0.05) {
            captureFrame();
            finalize();
        }
    }, [posterUrl, captureFrame, finalize]);

    // Fallback: also handle onEnded in case timeupdate misses it
    const handleEnded = useCallback(() => {
        if (!posterUrl) {
            captureFrame();
        }
        finalize();
    }, [posterUrl, captureFrame, finalize]);

    // Skip render for reduced motion (but keep mounted for posterUrl background)
    if (shouldReduce && !posterUrl) return null;

    return (
        <div
            className={`absolute inset-0 h-screen pointer-events-none overflow-hidden transition-none ${phase === "cover" ? "z-[100] fixed" : "z-0"
                }`}
        >
            {/* Hidden canvas for frame capture */}
            <canvas ref={canvasRef} className="hidden" />

            {/* Poster layer: captured last frame as background */}
            {posterUrl && (
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${posterUrl})` }}
                />
            )}

            {/* Dark overlay for text readability - appears when video becomes background */}
            {phase === "background" && (
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
            )}

            {/* Video layer: fades out once poster is captured */}
            <video
                ref={videoRef}
                src="/landing3/intro-video.mp4"
                autoPlay
                muted
                playsInline
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleEnded}
                className={`w-full h-full object-cover transition-opacity duration-300 ${posterUrl ? "opacity-0" : "opacity-100"
                    }`}
            />
        </div>
    );
}
