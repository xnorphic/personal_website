import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { BLOG_POSTS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles by Aditya Sinha on applying AI, machine learning, and pricing science to real commercial problems.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const posts = [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <PageShell>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2">Writing on AI &amp; Analytics</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-10">
          Field notes on applying AI, machine learning, and pricing science to
          real commercial problems.
        </p>
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border-b border-gray-100 dark:border-slate-800 pb-8 last:border-0"
            >
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-semibold hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-2">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                {post.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs rounded-full bg-gray-100 dark:bg-slate-800 px-2.5 py-1 font-medium text-gray-700 dark:text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
