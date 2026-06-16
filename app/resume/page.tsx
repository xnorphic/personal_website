import type { Metadata } from "next";
import Image from "next/image";
import PageShell from "@/components/PageShell";
import ScrollReveal from "@/components/ScrollReveal";
import { EXPERIENCE, EDUCATION, SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Detailed resume of Aditya Sinha — AI, analytics and commercial strategy leader. Work experience across Careem, Good Glamm Group, J.P. Morgan, and Goldman Sachs, plus education.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <PageShell>
      <div className="p-8 lg:p-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <ScrollReveal>
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-bold">Aditya Sinha</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                AI, Analytics &amp; Commercial Strategy Leader · Experience &amp;
                Education
              </p>
              <hr className="mt-8 border-gray-200 dark:border-slate-700" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="career-summary-card rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm p-6 dark:bg-slate-900/40">
              <h2 className="text-2xl font-semibold mb-4">Career Summary</h2>
              <div className="flex flex-col sm:flex-row items-center gap-8">
                <p className="flex-1 leading-relaxed text-gray-700 dark:text-gray-300">
                  I started at Goldman Sachs structuring M&amp;A transactions —
                  now I build the AI and commercial systems that move revenue.
                  Across 7 years at Tier-1 finance (Goldman Sachs, J.P. Morgan)
                  and high-growth consumer tech (Good Glamm Group, Careem), I
                  work at the intersection of applied AI, pricing science, and
                  GTM execution: +15% YoY revenue growth, ₹13Cr/month in
                  ML-driven logistics savings, 35% lower discount dependency
                  through dynamic pricing, and in-house LLM agents that lifted
                  NPS. Data is my weapon, not my job title — I use machine
                  learning, pricing models, and AI-led systems to make commercial
                  decisions faster and better than the competition.
                </p>
                <Image
                  src={SITE.headshot}
                  alt="Aditya Sinha — AI, analytics and commercial strategy leader"
                  width={176}
                  height={208}
                  className="w-44 h-52 rounded-2xl object-cover"
                />
              </div>
            </div>
          </ScrollReveal>

          <section className="space-y-6">
            <ScrollReveal>
              <h2 className="text-3xl font-semibold">Work Experience</h2>
            </ScrollReveal>
            <div className="timeline-container">
              <div className="timeline-track" aria-hidden="true" />
              {EXPERIENCE.map((job, i) => (
                <ScrollReveal key={job.id} delay={i * 100} className="timeline-item">
                  <div className="timeline-node" aria-hidden="true">
                    <div className="timeline-dot" />
                  </div>
                  <div className="timeline-card rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm p-6 mb-6 dark:bg-slate-900/40">
                    <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
                      <div className="space-y-1">
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <p className="font-medium text-gray-600 dark:text-gray-400">
                          {job.company} - {job.location}
                        </p>
                      </div>
                      <span className="text-sm shrink-0 rounded-full bg-gray-100 dark:bg-slate-800 px-3 py-1 font-medium text-gray-700 dark:text-gray-300">
                        {job.period}
                      </span>
                    </div>
                    <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                      {job.summary}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs rounded-full border border-gray-200 dark:border-slate-600 px-2.5 py-1 text-gray-600 dark:text-gray-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    {job.details.map((d) => (
                      <div key={d.heading} className="mt-4">
                        <h4 className="text-sm font-semibold text-indigo-600 mb-2 uppercase tracking-wide">
                          {d.heading}
                        </h4>
                        <ul className="space-y-1.5">
                          {d.points.map((p, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed flex gap-2"
                            >
                              <span className="text-gray-400 shrink-0 mt-0.5">
                                ›
                              </span>
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <ScrollReveal>
              <h2 className="text-3xl font-semibold">Education</h2>
            </ScrollReveal>
            <div className="space-y-6">
              {EDUCATION.map((e, i) => (
                <ScrollReveal key={e.school} delay={i * 100}>
                  <div className="rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm p-6 dark:bg-slate-900/40">
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <h3 className="text-xl font-semibold">{e.school}</h3>
                      <span className="text-sm shrink-0 rounded-full bg-gray-100 dark:bg-slate-800 px-3 py-1 font-medium text-gray-700 dark:text-gray-300">
                        {e.period}
                      </span>
                    </div>
                    <p className="leading-relaxed text-gray-700 dark:text-gray-300 mt-3">
                      {e.degree}
                    </p>
                    <p className="leading-relaxed text-gray-600 dark:text-gray-400 mt-3 text-sm">
                      {e.content}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>

          <ScrollReveal delay={100}>
            <div className="text-center pt-4 pb-8">
              <a
                href={SITE.cv}
                download="aditya_sinha_resume.pdf"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Download Profile
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </PageShell>
  );
}
