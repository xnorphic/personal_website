"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  HERO_TAGS,
  STATS,
  EXPERIENCE,
  PROJECTS,
  SKILLS,
  BLOG_POSTS,
  SITE,
  type Experience,
  type Accent,
} from "@/lib/content";
import ScrollReveal from "./ScrollReveal";
import ThemeToggle from "./ThemeToggle";

const ACCENTS: Record<
  Accent,
  { border: string; bg: string; pill: string }
> = {
  indigo: {
    border: "border-indigo-200 dark:border-indigo-500/40",
    bg: "from-indigo-50 dark:from-indigo-500/10",
    pill:
      "bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-500/15 dark:text-indigo-300 dark:border-indigo-500/30",
  },
  pink: {
    border: "border-pink-200 dark:border-pink-500/40",
    bg: "from-pink-50 dark:from-pink-500/10",
    pill:
      "bg-pink-50 text-pink-700 border border-pink-200 dark:bg-pink-500/15 dark:text-pink-300 dark:border-pink-500/30",
  },
  teal: {
    border: "border-teal-200 dark:border-teal-500/40",
    bg: "from-teal-50 dark:from-teal-500/10",
    pill:
      "bg-teal-50 text-teal-700 border border-teal-200 dark:bg-teal-500/15 dark:text-teal-300 dark:border-teal-500/30",
  },
};

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    { label: "Home", id: "home" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-gray-200 dark:border-slate-700/50 shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-gray-900 dark:text-white text-lg tracking-tight">AS</span>
        <div className="hidden sm:flex items-center gap-6">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="text-sm text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
            >
              {l.label}
            </button>
          ))}
          <Link
            href="/resume"
            className="text-sm text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
          >
            Resume
          </Link>
          <ThemeToggle />
          <button
            onClick={() => go("contact")}
            className="px-4 py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors"
          >
            Hire Me
          </button>
        </div>
        <div className="sm:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            className="text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="sm:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-gray-200 dark:border-slate-700/50 px-4 py-4 space-y-3">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="block w-full text-left text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white py-2 text-sm font-medium"
            >
              {l.label}
            </button>
          ))}
          <Link
            href="/resume"
            className="block w-full text-left text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white py-2 text-sm font-medium"
          >
            Resume
          </Link>
        </div>
      )}
    </nav>
  );
}

function ExperienceCard({ job }: { job: Experience }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-slate-700/60 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm overflow-hidden shadow-sm dark:shadow-none">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{job.title}</h3>
            <p className="text-indigo-600 dark:text-indigo-400 font-medium">{job.company}</p>
          </div>
          <div className="text-right shrink-0">
            <p className="text-sm text-slate-400">{job.period}</p>
            <p className="text-sm text-slate-500">{job.location}</p>
          </div>
        </div>
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
          {job.summary}
        </p>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
        >
          <span>{open ? "Hide" : "Show"} Details</span>
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
      {open && (
        <div className="border-t border-gray-200 dark:border-slate-700/60 px-6 py-5 space-y-5 bg-gray-50 dark:bg-slate-900/30">
          {job.details.map((d) => (
            <div key={d.heading}>
              <h4 className="text-sm font-semibold text-teal-600 dark:text-teal-400 mb-2 uppercase tracking-wide">
                {d.heading}
              </h4>
              <ul className="space-y-1.5">
                {d.points.map((p, i) => (
                  <li
                    key={i}
                    className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex gap-2"
                  >
                    <span className="text-slate-500 shrink-0 mt-0.5">›</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function HomeClient() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-slate-900 dark:text-white transition-colors">
      <NavBar />

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 hero-glow-top" />
        <div className="absolute inset-0 hero-glow-bottom" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-500/40 dark:bg-indigo-500/10 dark:text-indigo-300 text-sm font-medium mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-teal-400 animate-pulse" />
            Open to new opportunities
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-4 animate-slide-up">
            <span className="text-gray-900 dark:text-white">Aditya </span>
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-teal-600 dark:from-indigo-400 dark:via-pink-400 dark:to-teal-400 bg-clip-text text-transparent">
              Sinha
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 dark:text-slate-300 font-medium mb-6 animate-slide-up animation-delay-100">
            Revenue &amp; Commercial Leader · GTM · Pricing · RevOps
          </p>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-slate-400 leading-relaxed mb-10 animate-slide-up animation-delay-200">
            Aditya Sinha builds the commercial systems that move revenue — 7 years
            across Goldman Sachs, J.P. Morgan, Good Glamm Group, and Careem,
            including +15% YoY growth, ₹13Cr/month logistics savings, and
            in-house AI pricing and LLM support systems.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-12 animate-slide-up animation-delay-300">
            {HERO_TAGS.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-full text-sm font-medium border border-gray-200 dark:border-slate-600/60 bg-gray-50 dark:bg-slate-800/60 text-gray-700 dark:text-slate-300 hover:border-indigo-300 hover:text-indigo-600 dark:hover:border-indigo-500/60 dark:hover:text-indigo-300 transition-colors cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto animate-slide-up animation-delay-400">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-gray-200 dark:border-slate-700/60 bg-white dark:bg-slate-800/50 backdrop-blur-sm p-5 shadow-sm dark:shadow-none"
              >
                <div className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-teal-600 dark:from-indigo-400 dark:to-teal-400 bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="text-xs text-gray-500 dark:text-slate-400 mt-1 font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10 animate-slide-up animation-delay-500">
            <button
              onClick={() =>
                document
                  .getElementById("experience")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-semibold transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
            >
              View Experience
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 rounded-full border border-gray-300 dark:border-slate-600 hover:border-gray-400 dark:hover:border-slate-400 text-gray-700 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white font-semibold transition-all bg-white dark:bg-transparent"
            >
              Get in Touch
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-5 h-5 text-slate-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
                Career
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2">
                Work Experience
              </h2>
              <p className="text-gray-600 dark:text-slate-400 mt-3">
                A track record of AI-driven impact across growth, analytics, and
                finance.
              </p>
            </div>
          </ScrollReveal>
          <div className="space-y-4">
            {EXPERIENCE.map((job, i) => (
              <ScrollReveal key={job.id} delay={i * 100}>
                <ExperienceCard job={job} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-4 sm:px-6 bg-gray-50 dark:bg-slate-800/20">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <span className="text-sm font-semibold text-pink-600 dark:text-pink-400 uppercase tracking-widest">
                Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2">
                Featured Projects
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mt-3">
                Applied AI, machine learning, and analytics initiatives that
                moved revenue and margin.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((p, i) => {
              const a = ACCENTS[p.accent];
              return (
                <ScrollReveal key={p.title} delay={i * 80}>
                  <div
                    className={`h-full rounded-2xl border ${a.border} bg-gradient-to-br ${a.bg} to-transparent backdrop-blur-sm p-6 flex flex-col gap-4 hover:scale-[1.02] transition-transform duration-300`}
                  >
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {p.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-1">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className={`text-xs px-2.5 py-1 rounded-full font-medium ${a.pill}`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/projects"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
            >
              View all projects →
            </Link>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <span className="text-sm font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-widest">
                Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2">
                Skills &amp; Tools
              </h2>
            </div>
          </ScrollReveal>
          <div className="space-y-6">
            {SKILLS.map((g) => (
              <ScrollReveal key={g.label}>
                <div className="rounded-2xl border border-gray-200 dark:border-slate-700/60 bg-white/80 dark:bg-slate-800/40 p-6 shadow-sm dark:shadow-none">
                  <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-4">
                    {g.label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {g.skills.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 border border-gray-200 dark:border-slate-600/50 hover:border-indigo-500/50 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS / WRITING */}
      <section id="insights" className="py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <span className="text-sm font-semibold text-pink-600 dark:text-pink-400 uppercase tracking-widest">
                Insights
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2">
                Writing on AI &amp; Analytics
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mt-3">
                Field notes on applying AI, machine learning, and pricing
                science to real commercial problems.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 80}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block h-full rounded-2xl border border-gray-200 dark:border-slate-700/60 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm p-6 hover:border-indigo-500/60 transition-colors shadow-sm dark:shadow-none"
                >
                  <p className="text-xs text-slate-500 mb-2">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                    })}
                  </p>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {post.summary}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-4 sm:px-6 bg-gray-50 dark:bg-slate-800/20">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
              Contact
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
              Let&apos;s Connect
            </h2>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-10">
              Open to AI, analytics, and commercial-strategy leadership roles,
              advisory projects, and hard problems where data and machine
              learning move the needle.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl border border-indigo-200 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 dark:border-indigo-500/40 dark:bg-indigo-500/10 dark:text-indigo-300 dark:hover:bg-indigo-500/20 transition-colors font-medium"
              >
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
                {SITE.email}
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl border border-teal-200 bg-teal-50 text-teal-700 hover:bg-teal-100 dark:border-teal-500/40 dark:bg-teal-500/10 dark:text-teal-300 dark:hover:bg-teal-500/20 transition-colors font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl border border-pink-200 bg-pink-50 text-pink-700 hover:bg-pink-100 dark:border-pink-500/40 dark:bg-pink-500/10 dark:text-pink-300 dark:hover:bg-pink-500/20 transition-colors font-medium"
              >
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
                {SITE.phone}
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              Based in New Delhi, India · Available for remote &amp; hybrid roles
              worldwide
            </p>
          </ScrollReveal>
        </div>
      </section>

      <footer className="border-t border-gray-200 dark:border-slate-800 py-8 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Aditya Sinha · Built with Next.js &amp; Tailwind CSS</p>
      </footer>
    </div>
  );
}
