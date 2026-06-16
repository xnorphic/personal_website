// Central content module — single source of truth for the whole site.
// Mirrors the original adityasinha.xyz content.

export const SITE = {
  name: "Aditya Sinha",
  url: "https://www.adityasinha.xyz",
  title: "Aditya Sinha — AI, Analytics & Commercial Strategy Leader",
  description:
    "Aditya Sinha is an AI and analytics expert with 7+ years across Tier-1 finance (Goldman Sachs, J.P. Morgan) and high-growth consumer tech (Good Glamm Group, Careem). He builds applied AI, machine-learning, and pricing systems that turn data into revenue.",
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
    id: "myglamm",
    title: "Head of Analytics",
    company: "MyGlamm · Good Glamm Group",
    period: "Mar 2021 – Apr 2026",
    location: "New Delhi, India",
    summary:
      "Owned the GTM and analytics charter for a 1,000Cr+ GMV D2C group — pairing pricing science and machine learning to grow revenue and expand margin. Promoted from Business Analyst to Head of Analytics within a year.",
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
          "Designed and deployed a dynamic pricing system — built in-house, no third-party vendor — that cut discount dependency by 35% and expanded contribution margin (CM2) by 25% without trading off volume.",
        ],
      },
      {
        heading: "Machine Learning & AI Operations",
        points: [
          "Redesigned multi-warehouse inventory placement with ML-driven guardrails, cutting shipment splits 75% and saving ₹13Cr/month in logistics costs with zero additional headcount.",
          "Rolled out in-house AI-powered customer service agents that lifted NPS by 14% while improving service turnaround.",
          "Delivered 40+ custom dashboards across revenue, user, social, and product analytics, giving leadership real-time visibility.",
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
    location: "Bengaluru, India",
    summary:
      "Supported live M&A and capital-markets mandates with investment analysis, commercial due diligence, and client materials across sectors.",
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
};

export const BLOG_POSTS: BlogPost[] = [
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
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
