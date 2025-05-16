// filepath: /app/head.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Orbit - Modern Video Calling App",
    description:
        "Orbit is a modern Next.js powered video calling app with real-time chat, screen sharing, and scheduling features.",
    openGraph: {
        title: "Orbit - Modern Video Calling App",
        description:
            "Orbit is a modern Next.js powered video calling app with real-time chat, screen sharing, and scheduling features.",
        url: "https://orbit.buildwithmanish.com",
        type: "website",
        images: [
            {
                url: "/images/og.png",
                width: 1200,
                height: 630,
                alt: "Orbit App Preview",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        creator: "@manish_9245",
        title: "Orbit - Modern Video Calling App",
        description:
            "Orbit is a modern Next.js powered video calling app with real-time chat, screen sharing, and scheduling features.",
        images: [
            "/images/og.png",
        ],
    },
    other: {
        features:
            "Video calls, audio calls, live chat, screen sharing, meeting scheduling, analytics",
    },
};

export default function Head() {
  // This file is now only needed for custom tags not supported by Metadata API
  return null;
}
