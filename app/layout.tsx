import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE, EXPERIENCE, SKILLS } from "@/lib/content";
import Chatbot from "@/components/Chatbot";
import ThemeProvider from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: "%s — Aditya Sinha",
  },
  description: SITE.description,
  keywords: [
    "Aditya Sinha",
    "AI",
    "Analytics",
    "Machine Learning",
    "Dynamic Pricing",
    "Commercial Strategy",
    "Data Science",
    "Goldman Sachs",
    "Careem",
    "Good Glamm Group",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE.url,
    title: SITE.title,
    description: SITE.description,
    siteName: SITE.name,
    images: [{ url: SITE.headshot, alt: SITE.name }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: [SITE.headshot],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  url: SITE.url,
  image: `${SITE.url}${SITE.headshot}`,
  email: `mailto:${SITE.email}`,
  jobTitle: "AI, Analytics & Commercial Strategy Leader",
  description: SITE.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "New Delhi",
    addressCountry: "IN",
  },
  sameAs: [SITE.linkedin],
  knowsAbout: SKILLS.flatMap((g) => g.skills),
  worksFor: {
    "@type": "Organization",
    name: EXPERIENCE[0].company,
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "SVKM's Narsee Monjee Institute of Management Studies (NMIMS)",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Delhi Technological University (Delhi College of Engineering)",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased bg-white text-gray-900 dark:bg-slate-950 dark:text-gray-100 transition-colors">
        <ThemeProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
          />
          {children}
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
