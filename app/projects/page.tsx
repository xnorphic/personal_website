import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { PROJECTS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "AI, machine-learning, and analytics project portfolio by Aditya Sinha — applied work that shipped to production and moved revenue.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2">Projects by Aditya Sinha</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Applied AI, machine-learning, and analytics work that shipped to
          production and moved revenue.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <div
              key={p.slug}
              className="flex flex-col rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm p-6 dark:bg-slate-900/40"
            >
              <h2 className="text-xl font-semibold mb-3">{p.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs rounded-full bg-gray-100 dark:bg-slate-800 px-2.5 py-1 font-medium text-gray-700 dark:text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
