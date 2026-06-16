import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Aditya Sinha — AI, analytics and commercial strategy leader. Email, LinkedIn, and phone.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <PageShell>
      <div className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-2">Contact</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-10">
          Have a question or want to work together? The fastest way to reach me
          is by email or LinkedIn.
        </p>

        <div className="space-y-4">
          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-4 rounded-xl border border-gray-200 dark:border-slate-700 p-5 hover:border-indigo-400 hover:shadow-sm transition-all dark:bg-slate-900/40"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-500/15 text-indigo-600 dark:text-indigo-300">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {SITE.email}
              </p>
            </div>
          </a>

          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-xl border border-gray-200 dark:border-slate-700 p-5 hover:border-teal-400 hover:shadow-sm transition-all dark:bg-slate-900/40"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-50 dark:bg-teal-500/15 text-teal-600 dark:text-teal-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </span>
            <div>
              <p className="font-semibold">LinkedIn</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                in/adityasinha26
              </p>
            </div>
          </a>

          <a
            href={`tel:${SITE.phone}`}
            className="flex items-center gap-4 rounded-xl border border-gray-200 dark:border-slate-700 p-5 hover:border-pink-400 hover:shadow-sm transition-all dark:bg-slate-900/40"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-50 dark:bg-pink-500/15 text-pink-600 dark:text-pink-300">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </span>
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {SITE.phone}
              </p>
            </div>
          </a>
        </div>

        <p className="text-gray-500 dark:text-gray-400 text-sm mt-10">
          Based in {SITE.location} · Available for remote &amp; hybrid roles
          worldwide.
        </p>
      </div>
    </PageShell>
  );
}
