import {
  SITE,
  EXPERIENCE,
  EDUCATION,
  PROJECTS,
  SKILLS,
  BLOG_POSTS,
} from "./content";

// A compact, plain-text knowledge base about Aditya — mirrors llms.txt.
// Used as grounding context for the LLM and as the corpus for the
// rule-based fallback.
export const KNOWLEDGE_BASE = `
ABOUT
${SITE.name} is an AI, analytics, and commercial strategy leader based in ${SITE.location}.
${SITE.description}
He holds an MBA in Finance from NMIMS and a B.Tech in Electrical Engineering from Delhi Technological University (Delhi College of Engineering), plus an AI Micro-Certification (AIC) and a Post Graduate Certificate in Data Science. He is open to AI, analytics, revenue-operations, and commercial-strategy leadership roles (remote & hybrid worldwide).

WORK EXPERIENCE
${EXPERIENCE.map(
  (e) =>
    `- ${e.title} at ${e.company} (${e.period}) — ${e.location}\n  ${e.summary}\n${e.details
      .flatMap((d) => d.points.map((p) => `  • ${p}`))
      .join("\n")}`,
).join("\n")}

EDUCATION
${EDUCATION.map((e) => `- ${e.degree} — ${e.school} (${e.period})`).join("\n")}

KEY SKILLS
${SKILLS.map((s) => `- ${s.label}: ${s.skills.join(", ")}`).join("\n")}

FEATURED PROJECTS
${PROJECTS.map((p) => `- ${p.title}: ${p.description}`).join("\n")}

WRITING
${BLOG_POSTS.map((p) => `- ${p.title} (/blog/${p.slug}): ${p.summary}`).join("\n")}

CONTACT
- Email: ${SITE.email}
- LinkedIn: ${SITE.linkedin}
- Phone: ${SITE.phone}
- Location: ${SITE.location} (available for remote & hybrid roles worldwide)
- Resume / CV: ${SITE.url}${SITE.cv}
`.trim();

export const SYSTEM_PROMPT = `You are Aditya Sinha's friendly portfolio assistant on his personal website. Answer questions about Aditya's background, experience, projects, skills, education, and how to get in touch.

Rules:
- Only use the information provided in the KNOWLEDGE BASE below. Do not invent facts, employers, dates, or numbers.
- If something is not covered, say you don't have that detail and point the visitor to email ${SITE.email} or LinkedIn ${SITE.linkedin}.
- Be concise (2-4 sentences unless asked for more), warm, and professional. Refer to Aditya in the third person.

KNOWLEDGE BASE:
${KNOWLEDGE_BASE}`;

export type QA = { keywords: string[]; answer: string };

// Rule-based fallback knowledge — used when no LLM key is configured.
export const FALLBACK_QA: QA[] = [
  {
    keywords: ["who", "about", "yourself", "bio", "summary", "background"],
    answer:
      "Aditya Sinha is an AI, analytics & commercial strategy leader based in New Delhi with 7+ years across Goldman Sachs, J.P. Morgan, Good Glamm Group, and Careem. He builds applied AI, machine-learning, and pricing systems that turn data into revenue.",
  },
  {
    keywords: ["careem", "current", "now", "present", "latest job"],
    answer:
      "Aditya is currently a Digital Analytics Manager at Careem (Nov 2025–Present), driving marketing efficiency via incrementality A/B tests across TikTok, Meta, and Google, and leading an AI-led creative intelligence layer that benchmarks competitor ads.",
  },
  {
    keywords: ["myglamm", "good glamm", "head of analytics", "d2c"],
    answer:
      "At MyGlamm · Good Glamm Group (Mar 2021–Apr 2026), Aditya was Head of Analytics for a 1,000Cr+ GMV D2C business: +15% YoY revenue, an in-house dynamic pricing system (-35% discount dependency, +25% CM2), ML inventory placement saving ₹13Cr/month, and LLM support agents that lifted NPS 14%.",
  },
  {
    keywords: ["jpmorgan", "j.p. morgan", "jp morgan", "treasury"],
    answer:
      "At J.P. Morgan (Mar 2020–Mar 2021), Aditya was an Analyst in CIO & Treasury — validating risk and compliance models and assessing daily capital movements aligned with U.S. Federal Reserve policy.",
  },
  {
    keywords: ["goldman", "investment banking", "m&a", "banking"],
    answer:
      "Aditya started at Goldman Sachs (Apr 2019–Feb 2020) as an Investment Banking Analyst, doing sector-level investment analysis, commercial due diligence, and contributing to 75+ investor materials per quarter.",
  },
  {
    keywords: ["pricing", "dynamic pricing", "discount", "margin", "cm2"],
    answer:
      "Aditya built an in-house AI-driven dynamic pricing engine (no third-party vendor) that cut discount dependency by 35% and expanded contribution margin (CM2) by 25% without trading off volume.",
  },
  {
    keywords: ["inventory", "supply chain", "logistics", "warehouse", "shipment"],
    answer:
      "His ML-driven inventory placement system cut shipment splits by 75% and saved ₹13Cr/month in logistics costs across a multi-warehouse network — with zero additional headcount.",
  },
  {
    keywords: ["llm", "chatbot", "support", "customer service", "generative", "nlp"],
    answer:
      "Aditya designed and rolled out in-house AI-powered (LLM) customer support agents that lifted NPS by 14% while improving service turnaround and containing support cost.",
  },
  {
    keywords: ["project", "projects", "portfolio", "built", "work"],
    answer:
      "Featured projects include an AI-Driven Dynamic Pricing Engine, ML-Driven Inventory Placement, In-House LLM Support Agents, an AI Creative Intelligence Layer, Marketing Incrementality Testing, and a 40+ dashboard Executive Analytics Suite. See the Projects page for details.",
  },
  {
    keywords: ["skill", "skills", "tools", "tech", "stack", "expertise", "python", "sql"],
    answer:
      "Aditya's toolkit spans Applied AI, Machine Learning, LLM applications, AI-driven pricing, and data science — with SQL, Python, Tableau, Looker, and BigQuery, plus commercial strengths in GTM, pricing, revenue ops, and financial modeling.",
  },
  {
    keywords: ["education", "study", "degree", "mba", "btech", "college", "university", "nmims", "dtu"],
    answer:
      "Aditya holds an MBA in Finance from NMIMS (2017–2019) and a B.Tech in Electrical Engineering from Delhi Technological University / Delhi College of Engineering (2012–2016).",
  },
  {
    keywords: ["certification", "certificate", "aic", "data science"],
    answer:
      "Certifications include the Artificial Intelligence Micro-Certification (AIC)™, a Post Graduate Certificate in Data Science, Product Launches (PRLC), and a Strategy Consulting Bootcamp.",
  },
  {
    keywords: ["blog", "writing", "article", "articles", "post", "read"],
    answer:
      "Aditya writes about AI in commerce — on AI-driven dynamic pricing, using ML to cut logistics costs, and deploying in-house LLM support agents. Check the Blog page to read them.",
  },
  {
    keywords: ["contact", "email", "reach", "hire", "linkedin", "phone", "connect", "available", "opportunity"],
    answer: `You can reach Aditya at ${SITE.email}, on LinkedIn (${SITE.linkedin}), or by phone at ${SITE.phone}. He's open to AI, analytics, and commercial-strategy leadership roles, remote & hybrid worldwide.`,
  },
  {
    keywords: ["resume", "cv", "download"],
    answer: `You can download Aditya's resume from the Resume page, or directly here: ${SITE.cv}.`,
  },
  {
    keywords: ["location", "where", "based", "city", "country", "remote"],
    answer:
      "Aditya is based in New Delhi, India, and is available for remote & hybrid roles worldwide.",
  },
];

export function ruleBasedAnswer(message: string): string {
  const text = message.toLowerCase();
  let best: { score: number; answer: string } | null = null;
  for (const qa of FALLBACK_QA) {
    let score = 0;
    for (const kw of qa.keywords) {
      if (text.includes(kw)) score += kw.length > 4 ? 2 : 1;
    }
    if (score > 0 && (!best || score > best.score)) {
      best = { score, answer: qa.answer };
    }
  }
  if (best) return best.answer;
  return `I can tell you about Aditya's experience (Careem, Good Glamm Group, J.P. Morgan, Goldman Sachs), his AI/ML & pricing projects, skills, education, or how to get in touch. What would you like to know? You can also reach him directly at ${SITE.email}.`;
}
