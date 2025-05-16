// filepath: /app/head.tsx
export default function Head() {
  return (
    <>
      {/* Additional SEO meta tags for features showcase */}
      <meta
        name="features"
        content="Video calls, audio calls, live chat, screen sharing, meeting scheduling, analytics"
      />
      {/* Fallback description for crawlers */}
      <meta
        name="description"
        content="Orbit is a modern Next.js powered video calling app with real-time chat, screen sharing, and scheduling features."
      />
      {/* Open Graph image fallback */}
      <meta property="og:image" content="/og.png" />
      <meta name="twitter:image" content="/og.png" />
    </>
  );
}
