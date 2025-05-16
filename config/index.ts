import type { Metadata } from "next";

export const siteConfig: Metadata = {
  metadataBase: new URL("https://yourdomain.com"), // replace with your actual URL
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  title: "Orbit",
  description: "Modern Next.js powered Video calling app",
  keywords: [
    "reactjs",
    "nextjs",
    "vercel",
    "react",
    "getstream",
    "stream",
    "shadcn",
    "shadcn-ui",
    "radix-ui",
    "cn",
    "clsx",
    "orbit",
    "realtime-video",
    "realtime-chat",
    "live-audio",
    "live-video",
    "live-chat",
    "radix-toast",
    "lucide-react",
    "next-themes",
    "postcss",
    "prettier",
    "react-dom",
    "tailwindcss",
    "tailwindcss-animate",
    "ui/ux",
    "js",
    "ts",
    "javascript",
    "typescript",
    "eslint",
    "html",
    "css",
  ] as Array<string>,
  authors: {
    name: "Manish Tiwari",
    url: "https://github.com/manish-9245",
  },
  openGraph: {
    title: "Orbit",
    description: "Modern Next.js powered Video calling app",
    url: "https://orbit.buildwithmanish.com", // replace with your actual URL
    siteName: "Orbit",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Orbit - Modern Video calling app",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orbit",
    description: "Modern Video calling website",
    creator: "@manish_9245", // replace with your Twitter handle
    images: ["/og.png"],
  },
} as const;

export const links = {
  sourceCode: "https://github.com/manish-9245/orbit",
} as const;
