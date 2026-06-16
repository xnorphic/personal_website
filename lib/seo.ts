import type { Metadata } from "next";
import { BLOG_POSTS, EXPERIENCE, SITE, SKILLS } from "./content";

/** Keywords derived from LinkedIn profile — no invented terms. */
export const SEO_KEYWORDS = [
  "Aditya Sinha",
  "Revenue Operations",
  "Commercial Strategy",
  "GTM Strategy",
  "Pricing Strategy",
  "RevOps",
  "Applied AI",
  "Machine Learning",
  "Dynamic Pricing",
  "Data Analytics",
  "Goldman Sachs",
  "J.P. Morgan",
  "Careem",
  "Good Glamm Group",
  "MyGlamm",
  "D2C analytics",
  "NMIMS MBA",
  "Delhi Technological University",
  "New Delhi",
  "LinkedIn adityasinha26",
] as const;

export function buildPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE.url}/#person`,
    name: SITE.name,
    url: SITE.url,
    image: `${SITE.url}${SITE.headshot}`,
    email: `mailto:${SITE.email}`,
    telephone: SITE.phone,
    jobTitle: SITE.jobTitle,
    description: SITE.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      addressCountry: "IN",
    },
    sameAs: [SITE.linkedin, SITE.url],
    knowsAbout: SKILLS.flatMap((g) => g.skills),
    worksFor: {
      "@type": "Organization",
      name: EXPERIENCE[0]?.company ?? "Careem",
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
    award: "National Talent Search Examination (NTSE)",
  };
}

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: "en-IN",
    publisher: { "@id": `${SITE.url}/#person` },
  };
}

export function buildProfilePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE.url}/#profile`,
    url: SITE.url,
    name: `${SITE.name} — Professional Profile`,
    description: SITE.description,
    mainEntity: { "@id": `${SITE.url}/#person` },
    inLanguage: "en-IN",
  };
}

export function buildHomeMetadata(): Metadata {
  return {
    title: SITE.title,
    description: SITE.description,
    keywords: [...SEO_KEYWORDS],
    authors: [{ name: SITE.name, url: SITE.url }],
    creator: SITE.name,
    publisher: SITE.name,
    category: "technology",
    alternates: {
      canonical: "/",
      languages: { "en-IN": "/" },
    },
    openGraph: {
      type: "profile",
      url: SITE.url,
      title: SITE.title,
      description: SITE.description,
      siteName: SITE.name,
      locale: "en_IN",
      images: [
        {
          url: SITE.headshot,
          width: 800,
          height: 800,
          alt: `${SITE.name} — ${SITE.jobTitle}`,
        },
      ],
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
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    other: {
      "linkedin:owner": SITE.linkedin,
    },
  };
}

export function blogIndexJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE.url}/blog#blog`,
    url: `${SITE.url}/blog`,
    name: `${SITE.name} — Writing on AI & Analytics`,
    description:
      "Articles by Aditya Sinha on AI, machine learning, pricing, and commercial analytics.",
    author: { "@id": `${SITE.url}/#person` },
    blogPost: BLOG_POSTS.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${SITE.url}/blog/${p.slug}`,
      datePublished: p.date,
    })),
  };
}
