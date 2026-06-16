import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { BLOG_POSTS } from "@/lib/content";
import { blogIndexJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blog — AI, Pricing & Commercial Analytics",
  description:
    "Articles by Aditya Sinha on AI-driven pricing, machine learning in supply chain, LLM customer support, incrementality testing, and D2C M&A analytics. Based on work at Good Glamm Group, Careem, Goldman Sachs, and J.P. Morgan.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Writing on AI & Analytics — Aditya Sinha",
    description:
      "Field notes on applying AI, machine learning, and pricing science to real commercial problems.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogIndexPage() {
  const posts = [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogIndexJsonLd()) }}
      />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2">Writing on AI &amp; Analytics</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-10">
          Field notes on applying AI, machine learning, and pricing science to
          real commercial problems — drawn from roles at Good Glamm Group,
          Careem, Goldman Sachs, and J.P. Morgan.
        </p>
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border-b border-gray-100 dark:border-slate-800 pb-8 last:border-0"
            >
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </p>
              <h2 className="text-2xl font-semibold hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-2">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                {post.summary}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                Read article →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
