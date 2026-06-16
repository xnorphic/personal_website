# Aditya Sinha — Personal Website

[![Live site](https://img.shields.io/badge/live-personalwebsite--nu--two.vercel.app-indigo)](https://personalwebsite-nu-two.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![Deploy on Vercel](https://img.shields.io/badge/deploy-Vercel-black)](https://vercel.com)

SEO-optimized personal portfolio for **Aditya Sinha** — AI, Analytics & Commercial Strategy Leader. Built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and an embedded **AI chatbot** grounded in his professional profile.

**Production:** [https://personalwebsite-nu-two.vercel.app](https://personalwebsite-nu-two.vercel.app)  
**Canonical domain (configured in content):** [https://www.adityasinha.xyz](https://www.adityasinha.xyz)

---

## Table of contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Environment variables](#environment-variables)
- [Chatbot](#chatbot)
- [Editing content](#editing-content)
- [Theming](#theming)
- [SEO & discoverability](#seo--discoverability)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [Custom domain](#custom-domain)
- [License](#license)

---

## Features

| Area | Description |
|------|-------------|
| **Home** (`/`) | Single-page layout: hero, stats, experience accordions, projects, skills, blog preview, contact |
| **Resume** (`/resume`) | Timeline of work experience and education; downloadable CV PDF |
| **Projects** (`/projects`) | Portfolio of applied AI, ML, and analytics initiatives |
| **Blog** (`/blog`, `/blog/[slug]`) | Markdown articles with per-post metadata and BlogPosting JSON-LD |
| **Contact** (`/contact`) | Email, LinkedIn, and phone links (no backend form) |
| **Chatbot** | Floating widget; LLM when configured, rule-based fallback otherwise |
| **Dark / light mode** | System-aware default with manual toggle via `next-themes` |
| **SEO** | Metadata, Open Graph, Twitter cards, Person JSON-LD, sitemap, robots, manifest, `llms.txt` |

---

## Tech stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **UI:** React 19, Tailwind CSS v4, Geist font
- **Themes:** [`next-themes`](https://github.com/pacocoursey/next-themes) with class-based dark mode
- **Markdown:** [`marked`](https://marked.js.org/) for blog rendering
- **AI:** OpenAI-compatible Chat Completions API (optional)
- **Hosting:** [Vercel](https://vercel.com)

---

## Project structure

```
personal_website/
├── app/
│   ├── api/chat/route.ts      # Chatbot API (LLM + fallback)
│   ├── blog/                  # Blog index + dynamic slug pages
│   ├── contact/               # Contact page
│   ├── projects/              # Projects page
│   ├── resume/                # Resume page
│   ├── globals.css            # Tailwind, animations, chatbot, hero gradients
│   ├── layout.tsx             # Root layout, SEO metadata, JSON-LD
│   ├── page.tsx               # Home (server wrapper)
│   ├── manifest.ts            # Web app manifest
│   ├── robots.ts              # robots.txt
│   └── sitemap.ts             # Dynamic sitemap
├── components/
│   ├── Chatbot.tsx            # Floating chat widget
│   ├── HomeClient.tsx         # Home page client UI
│   ├── PageShell.tsx          # Layout shell for inner pages
│   ├── ScrollReveal.tsx       # Scroll animation helper
│   ├── SiteHeader.tsx         # Sticky header for inner pages
│   ├── ThemeProvider.tsx      # next-themes provider
│   └── ThemeToggle.tsx        # Sun/moon toggle
├── lib/
│   ├── content.ts             # ★ Single source of truth for all site content
│   └── knowledge.ts           # Chatbot system prompt + rule-based Q&A
├── public/
│   ├── aditya-cv.pdf          # Downloadable CV
│   ├── favicon.png
│   ├── headshot-on-white.png
│   └── llms.txt               # LLM/crawler-friendly site summary
├── .env.example               # Environment variable template
└── next.config.ts
```

---

## Getting started

### Prerequisites

- **Node.js 20+** (Node 24 LTS recommended)
- **npm** (or pnpm/yarn)

### Install and run

```bash
git clone https://github.com/xnorphic/personal_website.git
cd personal_website
npm install
cp .env.example .env.local   # optional — see Environment variables
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build locally

```bash
npm run build
npm start
```

---

## Environment variables

Copy `.env.example` to `.env.local` for local development. **Never commit `.env.local`.**

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `OPENAI_API_KEY` | No | — | Enables LLM-powered chatbot. Without it, rule-based fallback runs automatically. |
| `OPENAI_BASE_URL` | No | `https://api.openai.com/v1` | Base URL for any OpenAI-compatible provider (Groq, OpenRouter, Together, etc.) |
| `OPENAI_MODEL` | No | `gpt-4o-mini` | Model name passed to the completions API |

**Example — OpenAI:**

```env
OPENAI_API_KEY=sk-...
```

**Example — Groq:**

```env
OPENAI_API_KEY=gsk_...
OPENAI_BASE_URL=https://api.groq.com/openai/v1
OPENAI_MODEL=llama-3.3-70b-versatile
```

On Vercel, add the same variables under **Project → Settings → Environment Variables** for Production (and Preview if desired).

---

## Chatbot

The chatbot appears as a floating button in the bottom-right corner on every page.

### How it works

1. User sends a message → `POST /api/chat`
2. If `OPENAI_API_KEY` is set, the route calls an OpenAI-compatible **chat completions** endpoint with a system prompt built from `lib/knowledge.ts`
3. If the key is missing or the API fails, **`ruleBasedAnswer()`** returns curated responses from keyword matching against Aditya's bio, experience, and projects

### Customizing responses

- **LLM behavior:** Edit `SYSTEM_PROMPT` in `lib/knowledge.ts`
- **Fallback Q&A:** Add keyword rules to the `rules` array in the same file
- **UI:** Styles in `app/globals.css` (`.chatbot-*` classes); component in `components/Chatbot.tsx`

---

## Editing content

All copy, experience, projects, skills, blog posts, and contact details live in **`lib/content.ts`**. Update that file and redeploy — no CMS required.

After changing content, regenerate chatbot knowledge if needed (the system prompt in `lib/knowledge.ts` is derived from the same data).

Key exports in `lib/content.ts`:

| Export | Used for |
|--------|----------|
| `SITE` | Name, URL, email, phone, LinkedIn, headshot, CV path |
| `HERO_TAGS` | Skill pills on the home hero |
| `STATS` | Hero stat cards |
| `EXPERIENCE` | Work history (home accordions + resume page) |
| `EDUCATION` | Resume education section |
| `PROJECTS` | Home grid + projects page |
| `SKILLS` | Skills grouped by category |
| `BLOG_POSTS` | Blog index and `[slug]` pages |

---

## Theming

- **Provider:** `components/ThemeProvider.tsx` — `attribute="class"`, default theme `dark`
- **Toggle:** `components/ThemeToggle.tsx` in the nav on home and inner pages
- **Tailwind v4 dark mode:** Class-based variant in `app/globals.css`:

  ```css
  @custom-variant dark (&:where(.dark, .dark *));
  ```

**Light theme** uses a clean white background, near-black headings (`#111827`), readable body gray (`#4B5563`), and indigo accents (`#6366F1`) — matching a modern portfolio aesthetic.

**Dark theme** retains the original slate/indigo gradient hero with animated background.

---

## SEO & discoverability

| Asset | Location | Purpose |
|-------|----------|---------|
| Page metadata | `app/layout.tsx`, per-page `metadata` exports | Title, description, keywords, canonical URLs |
| Open Graph / Twitter | `app/layout.tsx` | Social sharing cards |
| Person JSON-LD | `app/layout.tsx` | Structured data for search engines |
| BlogPosting JSON-LD | `app/blog/[slug]/page.tsx` | Article rich results |
| Sitemap | `app/sitemap.ts` → `/sitemap.xml` | Crawl discovery |
| Robots | `app/robots.ts` → `/robots.txt` | Indexing rules |
| Manifest | `app/manifest.ts` | PWA metadata |
| LLM summary | `public/llms.txt` | Concise site overview for AI crawlers |

Update `SITE.url` in `lib/content.ts` when pointing a custom domain.

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (Turbopack) |
| `npm run build` | Production build |
| `npm start` | Serve production build |
| `npm run lint` | ESLint |

---

## Deployment

This project is linked to Vercel (`personal_website`).

### Deploy from CLI

```bash
npx vercel --prod
```

### Deploy from GitHub

1. Push this repo to GitHub
2. Import the repository in [Vercel Dashboard](https://vercel.com/new)
3. Add environment variables (`OPENAI_API_KEY`, etc.)
4. Deploy — Vercel auto-detects Next.js

### Post-deploy checklist

- [ ] Set `OPENAI_API_KEY` in Vercel Production env
- [ ] Verify chatbot at `/api/chat` returns `"source":"llm"` when key is set
- [ ] Point custom domain (`adityasinha.xyz`) in Vercel → Domains
- [ ] Confirm sitemap at `/sitemap.xml` and robots at `/robots.txt`

---

## Custom domain

1. In Vercel: **Project → Settings → Domains** → add `adityasinha.xyz` and `www.adityasinha.xyz`
2. Update DNS at your registrar per Vercel's instructions (typically `A`/`CNAME` records)
3. Ensure `SITE.url` in `lib/content.ts` matches the live canonical URL

---

## License

Private portfolio project. Content © Aditya Sinha. Code structure available for reference; please do not reuse personal biographical content without permission.
