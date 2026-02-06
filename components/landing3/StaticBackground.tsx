import Image from "next/image";

export default function StaticBackground() {
    return (
        <div className="fixed inset-0 z-0">
            {/* Background Image */}
            <Image
                src="/background-image.jpg"
                alt="Luxury fashion background"
                fill
                priority
                className="object-cover object-center"
                quality={90}
            />

            {/* Overlay gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        </div>
    );
}
