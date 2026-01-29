import type { Metadata } from "next";
import { Sora, Montagu_Slab, Noto_Sans_Mono, Lexend } from "next/font/google";
import "@/app/globals.css";
import styles from "./layout.module.css";
import NavigationChat from "@/app/components/navigation-chat/navigation-chat";
import Footer from "@/app/components/footer/footer";
import Line from "../components/metro-line/line/line";
import Script from "next/script";


// Fonts:
const sora = Sora({ // heading font 1
  variable: "--font-sora",
  weight: ["600"],
  subsets: ["latin"],
});
const montaguSlab = Montagu_Slab({ // heading font 2
  variable: "--font-montagu-slab",
  weight: ["600"],
  subsets: ["latin"],
});
const lexend = Lexend({ // main font
  variable: "--font-lexend",
  subsets: ["latin"],
});
const notoSansMono = Noto_Sans_Mono({ // monospace font
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-noto-sans-mono",
});


// Metadata:
export const metadata: Metadata = {
  title: "Julius Busch",
  authors: [{"name": "Julius Busch"}],
  description: "The personal website of Julius Busch, a software developer based in Brussels.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  keywords: ["Julius Busch", "Portfolio", "Software Developer", "Web Development", "Brussels", "AI", "React", "Next.js"],

  openGraph: { // For link previews
    type: "website",
    title: "Julius Busch",
    description: "Software Developer based in Brussels.",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: "Julius Busch",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Julius Busch - Software Developer",
      },
    ],
  },
  twitter: { // also for link previews on some platforms.
    card: "summary_large_image",
    title: "Julius Busch",
    description: "Software Developer based in Brussels.",
    images: ["/og-image.png"],
  },

  robots: { // tells crawlers that they're allowed to index the page and follow links
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: { // favicon and app icons
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

// JSON-LD data:
const jsonLd = {
  "@id": `${process.env.NEXT_PUBLIC_BASE_URL}#person`,
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Julius Busch",
  url: process.env.NEXT_PUBLIC_BASE_URL,
  jobTitle: "Software Developer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brussels",
    addressCountry: "BE",
  },
  sameAs: [
    "https://github.com/julii-b",
    "https://www.linkedin.com/in/buschjulius/",
  ],
  knowsAbout: ["Next.js", "React", "Node.js", "TypeScript", "LLMs", "RAG"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
      className={`${styles.body}
        ${sora.variable} ${montaguSlab.variable} ${lexend.variable} ${notoSansMono.variable}
        antialiased`}
      >
        <div className={styles.navigationContainer}>
          <NavigationChat />
        </div>

        <div className={styles.lineWrapper}>
          <Line />
        </div>

        {children}
        <Footer />
        
      </body>
    </html>
  );
}
