import type { BlogPost } from "./content";

/** Academic product case studies — surfaced in /blog under Academic Projects. */
export const ACADEMIC_PROJECTS: BlogPost[] = [
  {
    slug: "kuku-tv-paywall-retention-case-study",
    title:
      "KUKU TV Case Study: Fixing Paywall Drop-Off on a Tier 2/3 Short-Form Video Platform",
    date: "2025-04-10",
    summary:
      "Product case study on diagnosing paywall-driven churn at KUKU TV — 30 user interviews, RICE-prioritized ideation, Coin Hybrid Economy, and Smart End-Screen Bridge projecting 40% show completion uplift and 30% reduction in Episode 6 drop-off.",
    tags: [
      "Academic Project",
      "Product Management",
      "Retention",
      "RICE Framework",
      "OTT India",
      "Monetization",
    ],
    author: "Aditya Sinha",
    section: "academic",
    subcategory: "Retention & Growth",
    content: `KUKU TV operates in India's Tier 2 and Tier 3 short-form video market — a segment where users are highly price-sensitive, discovery-driven, and quick to abandon content when monetization feels abrupt. This academic product case study documents a structured approach to diagnosing paywall-driven drop-off and designing retention-first monetization interventions.

## Problem statement

The primary churn signal was **paywall-driven drop-off** — users who engaged deeply with episodic content but exited at or before the Episode 6 paywall. For a short-form platform where show completion drives ad inventory, subscription conversion, and algorithmic recommendation quality, this drop-off directly suppressed both retention and revenue.

Key signals:

- Sharp exit spike at the Episode 6 paywall boundary
- Low show completion despite strong Episode 1–3 engagement
- Tier 2/3 users perceive paywalls as abrupt, not earned
- Monetization model misaligned with binge behaviour

## Research methodology

**30 structured user interviews** were conducted across Tier 2 and Tier 3 cities, segmented by engagement frequency, payment history, and content genre preference. Insights were synthesised into behavioural themes before entering a **RICE-prioritized ideation sprint**.

### RICE prioritization

| Dimension | Question |
|-----------|----------|
| **Reach** | How many users does this affect per quarter? |
| **Impact** | Expected effect on show completion and paywall conversion |
| **Confidence** | Strength of qualitative and quantitative evidence |
| **Effort** | Engineering, design, and ops cost to ship |

## Solution 1: Coin Hybrid Economy

Instead of a hard paywall at Episode 6, the Coin Hybrid Economy introduces a soft currency layer. Users earn coins through daily watch streaks, ad views, and referrals — then spend coins to unlock episodes or supplement subscription discounts.

- Daily login coins to build habit loops
- Episode unlock tiers: free → coin → subscription
- Transparent coin balance visible on every end screen
- Subscription upsell only after coin engagement threshold

This reframes monetization from "pay now or leave" to "engage more, unlock gradually."

## Solution 2: Smart End-Screen Bridge

The Smart End-Screen Bridge replaces generic "Next Episode" cards with context-aware transitions. At high-churn episodes (notably Episode 5→6), the end screen surfaces cliffhanger copy, coin balance, and a one-tap unlock — reducing the cognitive gap between engagement and payment.

## Projected outcomes

- **40% uplift in show completion** across target cohorts
- **30% reduction in Episode 6 paywall drop-off**
- Improved session depth without suppressing ad-supported free tier
- Higher subscription conversion via earned-trust coin pathway

## Key insight

Tier 2/3 users don't reject paying — they reject paying without warning. Soft monetization bridges that respect binge momentum outperform hard paywalls.

## Frameworks applied

- Qualitative user interviews (n=30)
- RICE prioritization for feature ranking
- Funnel analysis at episode-level granularity
- Cohort retention mapping by city tier`,
  },
  {
    slug: "zomato-delivery-fee-churn-case-study",
    title:
      "Zomato Case Study: Reducing Churn from Delivery Fee Friction with Value Meals Hour",
    date: "2025-04-15",
    summary:
      "Product case study on Zomato delivery fee friction as the primary churn driver. JTBD framework across 20 interviews, 3 personas, RICE-scored features, and a phased A/B rollout of Value Meals Hour (RICE score 75) targeting NPS and session frequency.",
    tags: [
      "Academic Project",
      "Product Management",
      "JTBD",
      "RICE Framework",
      "Food Delivery",
      "Retention",
      "Zomato",
    ],
    author: "Aditya Sinha",
    section: "academic",
    subcategory: "Engagement & Retention",
    content: `Zomato's competitive moat in India depends on habit frequency — how often users open the app, not just whether they convert once. This case study applies the **Jobs-to-be-Done (JTBD)** framework to identify why delivery fee friction, not food quality, was the primary driver of session abandonment and churn.

## Problem statement

Quantitative data showed rising cart abandonment at the fee disclosure step. Qualitative hypothesis: users felt "surprised" by fees relative to order value, especially on solo and lunch orders. The job users were hiring Zomato for — *feed me affordably without cooking* — was being undermined at checkout.

## JTBD research: 20 user interviews

Twenty structured JTBD interviews explored the functional, emotional, and social jobs users hired food delivery for. Three distinct personas emerged:

1. **The Budget Office Eater** — optimises for lowest total cost per meal; high fee sensitivity
2. **The Convenience Parent** — prioritises speed and reliability; moderate fee tolerance
3. **The Social Orderer** — group orders dilute fee pain; low individual sensitivity

## Feature ideation & RICE scoring

Six feature concepts were evaluated:

| Feature | RICE Score |
|---------|------------|
| **Value Meals Hour** — sub-₹99 meals with waived/reduced fees | **75** |
| Fee Transparency Pre-Search | 62 |
| Subscription Fee Waiver Tiers (Gold) | 58 |
| Group Order Fee Split | 51 |
| Loyalty Points for Fee Offset | 44 |
| Dynamic Fee Cap by Order Value | 39 |

## Recommended solution: Value Meals Hour

Value Meals Hour is a time-boxed discovery surface — a dedicated in-app section surfacing restaurant meals under a price ceiling with delivery fees waived or capped. It directly addresses the Budget Office Eater persona's core job: affordable solo meals without checkout shock.

### Phased A/B rollout plan

1. **Phase 1:** Bangalore pilot — 12–2 PM weekday window, 50K user cohort
2. **Phase 2:** Expand to Mumbai, Delhi, Hyderabad with local restaurant partnerships
3. **Phase 3:** Personalised Value Meals based on order history and fee sensitivity score

**Success metrics:** NPS delta, session frequency, cart-to-order conversion at fee step.

## Target metrics

- NPS improvement among fee-sensitive cohorts
- Session frequency uplift (weekly orders per active user)
- Reduced cart abandonment at fee disclosure step
- Higher restaurant partner participation in value tier

## Key insight

Users weren't churning because food was bad — they were churning because the final price broke the job they hired Zomato for. Value Meals Hour realigns price with job completion.`,
  },
  {
    slug: "amazon-ai-bundle-arpu-case-study",
    title:
      "Amazon Case Study: AI Bundle UX Redesign to Lift ARPU and Average Order Value",
    date: "2025-04-20",
    summary:
      "Product case study on four Amazon bundle friction points suppressing AOV. First-principles and JTBD analysis with LLM-assisted review mining — redesigned Recommended Product Bundle UX with transparent savings and variant selectors.",
    tags: [
      "Academic Project",
      "Product Management",
      "ARPU",
      "E-commerce",
      "JTBD",
      "LLM",
      "Amazon",
      "UX Design",
    ],
    author: "Aditya Sinha",
    section: "academic",
    subcategory: "ARPU via AI Bundles",
    content: `Amazon's Recommended Product Bundle feature has high strategic value — it increases basket size, reduces per-unit shipping cost, and improves customer lifetime value. Yet bundle conversion remained below benchmark. This case study applies **first-principles thinking**, **JTBD framing**, and **LLM-assisted review analysis** to surface four friction points suppressing Average Order Value (AOV) and ARPU.

## Problem statement

Bundle attach rates on product detail pages underperformed despite algorithmic relevance improvements. The hypothesis: recommendation quality wasn't the bottleneck — **bundle UX and trust** were.

## Four bundle friction points

1. **Opaque savings** — users couldn't quickly verify bundle discount vs individual prices
2. **Variant confusion** — bundled items defaulted to wrong size/colour without clear selectors
3. **Irrelevant add-ons** — algorithm included low-affinity items that reduced trust
4. **Checkout anxiety** — no clear "what am I buying" summary before add-to-cart

## Research methodology

### First-principles decomposition

The bundle purchase decision was decomposed to atomic steps: discover bundle → verify value → customise variants → confirm contents → add to cart. Each step was mapped to drop-off rates from funnel analytics.

### JTBD framework

Users hire bundles for three jobs:

- Save money on things I already planned to buy
- Complete a setup without research
- Avoid forgetting complementary items

UX failures mapped to job failure modes.

### LLM-assisted review analysis

Product reviews mentioning "bundle," "combo," and "deal" were processed using LLM-assisted thematic coding across **12,000+ reviews**. Top themes: wrong variant shipped, savings not as advertised, unwanted items in bundle.

## Redesigned bundle UX

- **Transparent savings display** — strikethrough individual total vs bundle price with ₹ saved badge
- **Inline variant selectors** per bundled item before add-to-cart
- **Affinity score threshold** — hide items below relevance cutoff
- **Bundle summary modal** with itemised list and one-tap edit
- **Post-purchase satisfaction prompt** for feedback loop

## Expected impact

- Bundle conversion rate uplift on product detail pages
- Average Order Value increase via higher attach rates
- ARPU improvement through repeat bundle purchases
- Reduced bundle-related returns and negative reviews

## Key insight

Users don't reject bundles because they don't want savings — they reject bundles because they **can't verify savings or control what's included**.`,
  },
  {
    slug: "campedge-user-adoption-case-study",
    title:
      "CampEdge Case Study: Trust-First Positioning to Reduce Top-of-Funnel Drop-Off",
    date: "2025-04-25",
    summary:
      "Product case study on CampEdge user adoption. Structured discovery across 10 behavioural dimensions mapped willingness-to-pay (₹8–20K/trip) and led to a trust-first strategy with verified organisers and social proof integration.",
    tags: [
      "Academic Project",
      "Product Management",
      "User Adoption",
      "Discovery Research",
      "Travel Startup",
      "CampEdge",
      "Positioning",
    ],
    author: "Aditya Sinha",
    section: "academic",
    subcategory: "User Adoption",
    content: `CampEdge is a travel and camping experiences platform targeting Indian millennials seeking curated outdoor trips. Despite healthy top-of-funnel traffic, conversion to booking remained low. This case study documents structured discovery research across **10 behavioural dimensions** and the resulting **trust-first positioning strategy**.

## Problem statement

High landing page engagement but steep drop-off before booking confirmation. Initial assumption: price sensitivity. Research outcome: **willingness-to-pay existed (₹8,000–₹20,000 per trip)** — but trust in organiser quality, safety, and experience delivery was the actual conversion blocker.

## Discovery research: 10 behavioural dimensions

Structured discovery interviews mapped the full decision journey:

- Trip motivation — escape, adventure, social, learning
- Budget allocation and willingness-to-pay (₹8K–₹20K range)
- Trust signals — reviews, organiser credentials, friend referrals
- Risk perception — safety, weather, group dynamics
- Booking friction — payment, cancellation, communication
- Channel preference — Instagram, WhatsApp groups, word-of-mouth
- Past negative experiences with unverified organisers
- Group vs solo booking behaviour
- Seasonality and advance booking windows
- Post-trip advocacy and repeat booking triggers

## Willingness-to-pay findings

Contrary to the price-sensitivity hypothesis, **72% of interviewed users** indicated willingness-to-pay between ₹8,000 and ₹20,000 per trip — provided trust signals were strong. Price became a filter only after trust was established.

## Acquisition channel mapping

| Channel | Behaviour |
|---------|-----------|
| Instagram discovery → landing page | High volume, low conversion |
| WhatsApp referral groups → booking | Highest conversion |
| Friend recommendation → direct contact | Bypasses platform |
| Google search | Comparison with established travel brands |

## Trust-first positioning strategy

Rather than competing on price or inventory breadth, CampEdge repositioned around **verifiable trust** — the dimension most correlated with booking conversion.

### Verified organiser profiles

- Government ID and business registration verification badge
- Trip completion count and repeat customer rate
- Specialisation tags: trekking, camping, wildlife, wellness
- Direct organiser video introduction on listing page

### Social proof integration

- Post-trip photo galleries with verified attendee tags
- Structured reviews across safety, value, and experience quality
- WhatsApp community links for past trip alumni
- "Booked by X people from your city" localisation signal

## Expected outcomes

- Reduced top-of-funnel drop-off at organiser profile step
- Higher landing-page-to-booking conversion rate
- Increased repeat booking via alumni community loops
- Lower customer acquisition cost through referral channels

## Key insight

CampEdge users weren't price-shopping — they were **trust-shopping**. Verified organisers and social proof convert better than discounts.`,
  },
];
