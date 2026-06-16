// Central content module — single source of truth for the whole site.
// Mirrors the original adityasinha.xyz content.

import { ACADEMIC_PROJECTS } from "./academic-projects";

export const SITE = {
  name: "Aditya Sinha",
  url: "https://www.adityasinha.xyz",
  title:
    "Aditya Sinha — Revenue & Commercial Leader | GTM, Pricing & AI Analytics",
  jobTitle: "Revenue & Commercial Leader",
  linkedinHeadline:
    "Revenue & Commercial Leader | GTM Strategy · Pricing · RevOps | Ex-Goldman Sachs · JP Morgan | 13Cr/mo Savings · +15% Revenue Growth | NMIMS, DTU",
  description:
    "Aditya Sinha is a revenue and commercial leader with 7 years across Goldman Sachs, J.P. Morgan, Good Glamm Group, and Careem. He builds GTM, pricing, and AI-led systems that move revenue — including +15% YoY growth, ₹13Cr/month logistics savings, and 35% lower discount dependency. MBA (NMIMS), B.Tech (DTU). Based in New Delhi.",
  email: "work.adityasinha@gmail.com",
  phone: "+91-9711776696",
  linkedin: "https://www.linkedin.com/in/adityasinha26",
  location: "New Delhi, India",
  headshot: "/headshot-on-white.png",
  cv: "/aditya-cv.pdf",
} as const;

export const HERO_TAGS = [
  "Applied AI & Machine Learning",
  "LLM Applications",
  "AI-Driven Pricing",
  "GTM Strategy",
  "Revenue Operations",
  "Data Analytics",
  "Financial Modeling",
  "SQL & Python",
];

export const STATS = [
  { value: "7+", label: "Years Experience" },
  { value: "+15%", label: "YoY Revenue Growth" },
  { value: "₹13Cr", label: "Monthly Savings (ML)" },
  { value: "40+", label: "Dashboards Built" },
];

export type ExperienceDetail = { heading: string; points: string[] };
export type Experience = {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  tags: string[];
  details: ExperienceDetail[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: "careem",
    title: "Digital Analytics Manager",
    company: "Careem",
    period: "Nov 2025 – Present",
    location: "Remote · United Arab Emirates",
    summary:
      "Driving marketing efficiency and AI-led growth strategy — using incrementality testing and automated AI pipelines to cut acquisition costs and benchmark the competition.",
    tags: ["Applied AI", "Analytics", "A/B Testing", "Growth"],
    details: [
      {
        heading: "Marketing Efficiency & AI-Led Growth",
        points: [
          "Optimized cross-channel marketing spend by running incrementality A/B tests across TikTok, Meta, and Google, with a potential annualized burn reduction of USD 100,000.",
          "Developed growth product strategies through competitor benchmarking and marketing analytics.",
          "Led a cross-functional team to build a roadmap for an AI-led creative intelligence layer — automated pipelines that benchmark competitor ads and surface data insights.",
        ],
      },
    ],
  },
  {
    id: "myglamm-head",
    title: "Head of Analytics",
    company: "MyGlamm · Good Glamm Group",
    period: "Feb 2022 – Apr 2026",
    location: "New Delhi, India",
    summary:
      "Owned GTM and analytics for a PE-backed D2C roll-up that scaled to 1,000Cr+ GMV (Accel, Prosus, Warburg Pincus). Promoted from Business Analyst in less than a year. Role concluded following the company's strategic wind-down.",
    tags: [
      "Applied AI",
      "Machine Learning",
      "Pricing Strategy",
      "Growth",
      "D2C",
      "Analytics",
    ],
    details: [
      {
        heading: "Revenue Growth & AI-Driven Pricing",
        points: [
          "Owned the GTM redesign that delivered +15% YoY top-line revenue growth across a 1,000Cr+ GMV D2C business, leading pricing experiments, funnel optimization, and upsell/cross-sell strategy end to end.",
          "Designed and deployed a dynamic pricing system — built in-house, no third-party vendor — that cut discount dependency by 35% and expanded contribution margin (CM2) by 25% via SKU repricing and assortment restructuring.",
        ],
      },
      {
        heading: "Machine Learning & AI Operations",
        points: [
          "Redesigned multi-warehouse inventory placement with ML-driven guardrails, cutting shipment splits 75% and saving ₹13Cr/month in logistics costs with zero additional headcount.",
          "Rolled out in-house AI-powered customer service agents that lifted NPS by 14% while improving service turnaround.",
          "Delivered 40+ custom dashboards across revenue, user, social, and product analytics, giving leadership real-time visibility.",
          "Led a team of data analysts across revenue, user, social media, and product analytics.",
        ],
      },
    ],
  },
  {
    id: "myglamm-ba",
    title: "Business Analyst",
    company: "MyGlamm · Good Glamm Group",
    period: "Mar 2021 – Feb 2022",
    location: "New Delhi, India",
    summary:
      "Member of the Growth team on a PE-backed D2C roll-up — building in-house MIS, supporting acquisitions, and commercial ventures.",
    tags: ["Growth", "Analytics", "M&A", "D2C"],
    details: [
      {
        heading: "Growth & Commercial Analytics",
        points: [
          "Built an in-house dynamic MIS to monitor daily data and optimize pricing, discounting, and order gamification to maximize GMV and post-discount revenues.",
          "Supported due diligence for acquisitions, integration of new brands, and development of cross-platform synergies.",
          "Supported 10+ acquisitions (800Cr+ deal value) alongside VC/PE teams — deal structuring, due diligence, and integration.",
          "Handled multiple assignments for in-house and external commercial ventures.",
        ],
      },
    ],
  },
  {
    id: "jpmorgan",
    title: "Analyst — CIO & Treasury",
    company: "J.P. Morgan",
    period: "Mar 2020 – Mar 2021",
    location: "Mumbai, India",
    summary:
      "Supported the CIO and Treasury function with financial analysis, risk-model validation, and regulatory compliance through volatile macroeconomic cycles.",
    tags: ["Risk", "Analytics", "Finance"],
    details: [
      {
        heading: "Risk, Compliance & Reporting",
        points: [
          "Conducted daily assessments of capital movements and macroeconomic trends, aligning insights with U.S. Federal Reserve policy.",
          "Reviewed and validated internal compliance models during quantitative-easing cycles, ensuring regulatory alignment and mitigating risk.",
          "Drafted high-impact memos and regulatory briefings for senior leadership and streamlined documentation standards across teams.",
        ],
      },
    ],
  },
  {
    id: "goldman",
    title: "Investment Banking Analyst",
    company: "Goldman Sachs",
    period: "Apr 2019 – Feb 2020",
    location: "Bengaluru, India / New York",
    summary:
      "Supported live M&A and capital-markets mandates with sector-level investment analysis, commercial due diligence, and client materials.",
    tags: ["Finance", "Valuation", "M&A", "Investment Banking"],
    details: [
      {
        heading: "M&A Analysis & Due Diligence",
        points: [
          "Conducted sector-level investment analysis used directly in live deal recommendations across Goldman's IB coverage.",
          "Built commercial due-diligence frameworks and contributed to 75+ investor materials per quarter across M&A, fundraising, and strategic advisory mandates.",
          "Automated data-validation workflows across deal reporting, cutting manual reconciliation time by ~40% and improving model accuracy.",
        ],
      },
    ],
  },
];

export type Education = {
  school: string;
  degree: string;
  period: string;
  tags: string[];
  content: string;
};

export const EDUCATION: Education[] = [
  {
    school: "SVKM's Narsee Monjee Institute of Management Studies (NMIMS)",
    degree:
      "Master of Business Administration (MBA), Finance — graduate business education spanning corporate finance, strategy, and analytics.",
    period: "2017 – 2019",
    tags: ["Finance", "Strategy", "Analytics"],
    content:
      "Master of Business Administration (MBA) in Finance, with coursework across corporate finance, valuation, commercial strategy, and managerial economics.",
  },
  {
    school: "Delhi Technological University (Delhi College of Engineering)",
    degree:
      "Bachelor of Technology (B.Tech), Electrical Engineering — quantitative foundation in systems, control, and computation.",
    period: "2012 – 2016",
    tags: ["Engineering", "Systems", "Quantitative"],
    content:
      "B.Tech in Electrical Engineering. Coursework included Network Analysis, Linear Integrated Circuits, Control Systems, SCADA Systems, Econometrics, and Microprocessors — the quantitative grounding behind a data- and AI-driven career.",
  },
];

export type Accent = "indigo" | "pink" | "teal";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  accent: Accent;
  slug: string;
};

export const PROJECTS: Project[] = [
  {
    title: "AI-Driven Dynamic Pricing Engine",
    description:
      "Built an in-house dynamic pricing system from scratch — no third-party vendor — combining pricing science with data models. Cut discount dependency by 35% and expanded contribution margin (CM2) by 25% without trading off volume.",
    tags: ["Applied AI", "Pricing Science", "Python", "Revenue"],
    accent: "indigo",
    slug: "ai-dynamic-pricing",
  },
  {
    title: "ML-Driven Inventory Placement",
    description:
      "Redesigned multi-warehouse inventory placement using machine-learning guardrails, cutting shipment splits by 75% and saving ₹13Cr per month in logistics costs with zero additional headcount.",
    tags: ["Machine Learning", "Operations", "Supply Chain"],
    accent: "pink",
    slug: "ml-inventory-placement",
  },
  {
    title: "In-House LLM Customer Support Agents",
    description:
      "Designed and rolled out in-house AI-powered (LLM) customer service agents that lifted NPS by 14% while improving service turnaround and containing support cost.",
    tags: ["LLM", "Generative AI", "NLP", "CX"],
    accent: "teal",
    slug: "llm-support-agents",
  },
  {
    title: "AI Creative Intelligence Layer",
    description:
      "Led a cross-functional team at Careem to architect an AI-led creative intelligence layer — automated pipelines that benchmark competitor ads and surface actionable data insights for growth.",
    tags: ["Applied AI", "Automation", "Growth"],
    accent: "indigo",
    slug: "ai-creative-intelligence",
  },
  {
    title: "Marketing Incrementality Testing",
    description:
      "Designed incrementality A/B tests across TikTok, Meta, and Google to measure true marketing lift, identifying a potential annualized burn reduction of USD 100,000.",
    tags: ["Experimentation", "A/B Testing", "Analytics"],
    accent: "pink",
    slug: "incrementality-testing",
  },
  {
    title: "Executive Analytics & KPI Suite",
    description:
      "Delivered 40+ custom dashboards across revenue, user, social, and product analytics, giving leadership real-time visibility and a single source of truth for decision-making.",
    tags: ["Data Analytics", "SQL", "BI Dashboards"],
    accent: "teal",
    slug: "executive-analytics-suite",
  },
];

export type SkillGroup = { label: string; skills: string[] };

export const SKILLS: SkillGroup[] = [
  {
    label: "AI & Machine Learning",
    skills: [
      "Applied AI",
      "Machine Learning",
      "LLM Applications",
      "Generative AI",
      "AI-Driven Pricing",
      "Data Science",
    ],
  },
  {
    label: "Analytics Tools",
    skills: ["SQL", "Python", "Tableau", "Looker", "BigQuery", "Excel/Sheets"],
  },
  {
    label: "Commercial & Growth",
    skills: [
      "GTM Strategy",
      "Pricing Strategy",
      "Commercial Planning",
      "Revenue Operations",
      "Product Analysis",
      "Performance Marketing",
    ],
  },
  {
    label: "Finance & Modeling",
    skills: [
      "Financial Modeling",
      "Valuation",
      "Due Diligence",
      "M&A",
      "Regulatory Compliance",
    ],
  },
  {
    label: "Certifications",
    skills: [
      "AI Micro-Certification (AIC)™",
      "PG Certificate in Data Science",
      "Product Launches (PRLC)",
      "Strategy Consulting Bootcamp",
      "Certificate Program in International Business Environment",
    ],
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  author: string;
  content: string;
  /** "academic" = product case study; default = professional writing */
  section?: "academic" | "writing";
  subcategory?: string;
};

export const WRITING_POSTS: BlogPost[] = [
  {
    slug: "ai-driven-dynamic-pricing",
    title: "How AI-Driven Dynamic Pricing Cut Discount Dependency by 35%",
    date: "2026-04-02",
    summary:
      "How an in-house, AI-driven dynamic pricing system reduced discount dependency by 35% and expanded contribution margin by 25% — without trading off volume.",
    tags: ["AI", "Pricing", "Machine Learning", "Revenue"],
    author: "Aditya Sinha",
    content: `Most consumer businesses are addicted to discounting. It is the fastest lever to hit a volume target and the slowest poison for margin. Every blanket discount trains customers to wait for the next one.

At Good Glamm Group I led the build of an in-house dynamic pricing system — no third-party vendor — to break that cycle. The thesis was simple: most pricing decisions are made on intuition, but they are fundamentally a data problem. If you can model how demand responds to price at the SKU and segment level, you can stop discounting indiscriminately and start pricing intelligently.

## What "AI-driven" actually means here

Dynamic pricing is not a single model; it is a system. Ours combined demand signals, elasticity estimates, inventory position, and margin guardrails into a pipeline that recommended prices continuously rather than in quarterly batches. The AI did the heavy lifting of pattern recognition across thousands of SKUs; the guardrails kept every recommendation inside commercially sane bounds.

## The results

- **35% reduction in discount dependency** — the business stopped reflexively discounting to hit volume targets.
- **25% expansion in contribution margin (CM2)** — without trading off volume.
- A repeatable system, owned in-house, that improved as it saw more data.

## The lesson

The win was not a clever model. It was treating pricing as a continuously learning system instead of a one-off decision, and pairing machine learning with hard commercial guardrails so the output was always something the business could actually ship.

If you take one thing away: AI in commerce earns its keep when it is wired into a decision that happens thousands of times a day. Pricing is exactly that decision.`,
  },
  {
    slug: "llm-customer-support-agents",
    title: "Deploying In-House LLM Agents for Customer Support",
    date: "2026-02-05",
    summary:
      "What it takes to put large language models into production for customer service — and how in-house AI agents lifted NPS by 14% without ballooning support costs.",
    tags: ["LLM", "Generative AI", "AI", "Customer Experience"],
    author: "Aditya Sinha",
    content: `Customer support is where a lot of AI ambition meets reality. Demos are easy; a support agent that customers actually trust, that resolves issues, and that does not invent answers is hard. At Good Glamm Group we built in-house AI-powered (LLM) customer service agents and put them into production.

## Why in-house

Off-the-shelf bots are quick to stand up but slow to trust. They do not know your catalogue, your policies, or your edge cases, and you cannot tune their behaviour when they get something wrong. Building in-house meant we controlled the knowledge the agents drew on, the guardrails on what they could say, and the escalation path to a human.

## The outcome

- **NPS lifted by 14%** — customers got faster, more consistent resolutions.
- **Faster service turnaround** without a proportional increase in support cost.

## What I would tell anyone shipping LLMs to production

1. **Ground the model.** An LLM answering from your actual policies and order data is useful; one answering from its training prior is a liability.
2. **Design the handoff.** The goal is not to remove humans, it is to let humans spend their time on the cases that need them.
3. **Measure the business metric, not the model metric.** We cared about NPS and turnaround, not token-level scores.

Generative AI is most valuable when it is pointed at a high-frequency, high-friction workflow and held to a real business outcome. Support is one of the clearest examples.`,
  },
  {
    slug: "machine-learning-supply-chain",
    title: "Using Machine Learning to Cut Logistics Costs by ₹13 Crore a Month",
    date: "2026-03-12",
    summary:
      "A practical look at how ML-driven inventory placement reduced shipment splits by 75% across a multi-warehouse network — with zero additional headcount.",
    tags: ["Machine Learning", "AI", "Supply Chain", "Analytics"],
    author: "Aditya Sinha",
    content: `When an order ships in three boxes from three warehouses instead of one box from one, the customer waits longer and the company pays more. Multiply that across a 1,000Cr+ GMV D2C operation and "shipment splits" stops being an operational footnote and becomes a multi-crore monthly leak.

## Framing it as a prediction problem

The instinct is to solve placement with rules: keep fast movers everywhere, slow movers central. Rules are brittle. Demand shifts by geography, season, and promotion, and static rules cannot keep up.

We reframed inventory placement as a machine-learning problem. The model learned where demand for each SKU was likely to originate and positioned stock so that the maximum share of orders could be fulfilled from a single node. Crucially, we wrapped the model in guardrails — capacity limits, safety stock, and cost constraints — so its recommendations were always executable.

## What changed

- **75% reduction in shipment splits** — far more orders fulfilled from a single warehouse.
- **₹13 Crore per month in logistics savings.**
- **Zero additional headcount** — the system replaced manual judgement, it did not add to it.

## Why it worked

Two things. First, the model was trained on the messy reality of demand rather than a tidy set of rules. Second — and this matters more than people admit — the ML output was constrained by operational guardrails, so the warehouse teams trusted it and acted on it.

AI projects in operations fail when the model is technically impressive but operationally ignored. The savings here came from making machine learning *boringly executable*.`,
  },
  {
    slug: "incrementality-testing-marketing-spend",
    title:
      "Finding USD 100K in Marketing Waste with Incrementality Testing",
    date: "2026-05-10",
    summary:
      "How incrementality A/B tests across TikTok, Meta, and Google at Careem surfaced potential annualized marketing burn reduction of USD 100,000.",
    tags: ["Analytics", "A/B Testing", "Marketing", "Growth"],
    author: "Aditya Sinha",
    content: `Marketing teams often optimize to last-click metrics. That tells you what happened, not what would have happened anyway. Incrementality testing closes that gap — and at Careem it pointed to real savings.

## The problem

Cross-channel spend was growing across TikTok, Meta, and Google. Each platform reported conversions. The question was not whether ads drove *some* activity, but how much *incremental* lift each channel actually contributed.

## What we ran

Incrementality A/B tests designed to isolate true marketing lift — holding out control groups where appropriate and measuring incremental conversions rather than attributed ones.

## The finding

The work identified a **potential annualized burn reduction of USD 100,000** — spend that was not delivering incremental return at the margin.

## Why it matters

Incrementality is unglamorous compared to creative optimization, but it is where analytics pays for itself fastest. You do not need a bigger budget; you need to know which parts of the budget are doing work.`,
  },
  {
    slug: "acquisition-diligence-d2c-roll-up",
    title:
      "Supporting 10+ Acquisitions in a PE-Backed D2C Roll-Up",
    date: "2026-01-18",
    summary:
      "What due diligence and integration work looked like across 10+ acquisitions with 800Cr+ combined deal value at Good Glamm Group.",
    tags: ["M&A", "Due Diligence", "D2C", "Analytics"],
    author: "Aditya Sinha",
    content: `Good Glamm Group was a PE-backed D2C roll-up that scaled to 1,000Cr+ GMV, backed by investors including Accel, Prosus, and Warburg Pincus. Growth was not only organic — it came through acquisitions.

## The analytics role in M&A

As a Business Analyst on the Growth team (Mar 2021 – Feb 2022), I worked alongside VC/PE teams on deal work: structuring, due diligence, and post-close integration. Across that period we supported **10+ acquisitions with 800Cr+ in combined deal value**.

## What that actually involved

- **Due diligence** on target brands — revenue quality, discount dependency, funnel health.
- **Integration planning** — connecting new brands into shared MIS, pricing, and analytics infrastructure.
- **Cross-platform synergies** — identifying where acquired catalogues could lift GMV and post-discount revenue across the group.

## The lesson

M&A in consumer is often sold on brand; it is won or lost on data. The deals that integrated cleanly were the ones where analytics showed up before the term sheet, not after.`,
  },
  {
    slug: "goldman-sachs-ma-to-revenue-analytics",
    title: "From Goldman Sachs M&A to Revenue Analytics Leadership",
    date: "2025-11-08",
    summary:
      "How investment banking analysis at Goldman Sachs — 75+ investor materials per quarter and automated deal reporting — shaped a career in GTM, pricing, and applied AI.",
    tags: ["Career", "M&A", "Analytics", "Finance"],
    author: "Aditya Sinha",
    content: `I started at Goldman Sachs as an Investment Banking Analyst (Apr 2019 – Feb 2020), working across Bengaluru and New York on live M&A and capital-markets mandates.

## What IB taught me about commercial work

- **Sector-level investment analysis** used directly in live deal recommendations across Goldman's IB coverage.
- **Commercial due diligence frameworks** and contribution to **75+ investor materials per quarter** across M&A, fundraising, and strategic advisory.
- **Automated data-validation workflows** across deal reporting that cut manual reconciliation time by **~40%**.

## The through-line

The skill was never "banking" for its own sake. It was rigorous commercial analysis under time pressure — the same muscle applied later to pricing experiments, GTM redesign, and ML guardrails at a 1,000Cr+ GMV D2C business.

Data is the weapon, not the job title. The transition from Goldman and J.P. Morgan to Good Glamm and Careem was a shift in industry, not in what the work required: make commercial decisions faster and better than the competition.`,
  },
];

/** Professional writing + academic case studies (single blog index). */
export const BLOG_POSTS: BlogPost[] = [...WRITING_POSTS, ...ACADEMIC_PROJECTS];

export function getWritingPosts(): BlogPost[] {
  return WRITING_POSTS;
}

export function getAcademicPosts(): BlogPost[] {
  return ACADEMIC_PROJECTS;
}

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
