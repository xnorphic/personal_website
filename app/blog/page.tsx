import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { getAcademicPosts, getWritingPosts } from "@/lib/content";
import { blogIndexJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blog — AI, Pricing, Product Case Studies & Commercial Analytics",
  description:
    "Articles and academic product case studies by Aditya Sinha: AI-driven pricing, ML supply chain, LLM support agents, incrementality testing, and PM case studies on KUKU TV, Zomato, Amazon, and CampEdge — JTBD, RICE, and first-principles frameworks.",
  keywords: [
    "Aditya Sinha blog",
    "product management case study",
    "JTBD framework",
    "RICE prioritization",
    "AI pricing",
    "commercial analytics",
    "KUKU TV case study",
    "Zomato product case study",
    "Amazon bundle UX",
    "CampEdge user adoption",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Writing & Product Case Studies — Aditya Sinha",
    description:
      "Field notes on AI, pricing, and commercial analytics — plus academic product case studies on retention, growth, and user adoption.",
    url: "/blog",
    type: "website",
  },
};

function PostList({
  posts,
  showSubcategory = false,
}: {
  posts: ReturnType<typeof getWritingPosts>;
  showSubcategory?: boolean;
}) {
  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <article
          key={post.slug}
          className="border-b border-gray-100 dark:border-slate-800 pb-8 last:border-0"
        >
          {showSubcategory && post.subcategory && (
            <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1">
              {post.subcategory}
            </p>
          )}
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
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.slice(0, 4).map((t) => (
              <span
                key={t}
                className="text-xs rounded-full bg-gray-100 dark:bg-slate-800 px-2.5 py-1 font-medium text-gray-700 dark:text-gray-300"
              >
                {t}
              </span>
            ))}
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            Read case study →
          </Link>
        </article>
      ))}
    </div>
  );
}

export default function BlogIndexPage() {
  const writing = [...getWritingPosts()].sort((a, b) => (a.date < b.date ? 1 : -1));
  const academic = [...getAcademicPosts()].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogIndexJsonLd()) }}
      />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2">Writing &amp; Product Case Studies</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-12">
          Field notes on applying AI, machine learning, and pricing science to real
          commercial problems — plus academic product case studies using JTBD, RICE,
          and first-principles frameworks.
        </p>

        <section id="academic-projects" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-bold mb-2">Academic Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-sm">
            Product management case studies — retention, engagement, ARPU, and user
            adoption — with structured research methodology and projected outcomes.
          </p>
          <PostList posts={academic} showSubcategory />
        </section>

        <section id="writing">
          <h2 className="text-2xl font-bold mb-2">Professional Writing</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-sm">
            Drawn from roles at Good Glamm Group, Careem, Goldman Sachs, and J.P. Morgan.
          </p>
          <PostList posts={writing} />
        </section>
      </div>
    </PageShell>
  );
}
