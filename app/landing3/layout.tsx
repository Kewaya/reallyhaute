import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ReallyHaute - Luxury pieces. Verified. Priced right.",
    description:
        "Join the waitlist for ReallyHaute, a curated marketplace for premium fashion. Authenticated listings, fair pricing, and fast buying.",
};

export default function Landing3Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
