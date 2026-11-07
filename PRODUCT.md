# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Plain static HTML, CSS and a little vanilla JS, served as-is by GitHub Pages (no build step). Chosen by the owner on 2026-11-07, replacing the HTML5 UP template (jQuery, Sass theme, leftover `elements.html` / `generic.html`).

## Users

- **Primary: recruiters and hiring managers for senior AI engineering roles.** They arrive from LinkedIn, the CV or a job application, on desktop or phone, and decide in under a minute whether Rezart is a senior AI engineer worth a call. Job: confirm seniority, current role and real shipped work, then reach him or download the CV.
- **Secondary: engineers** checking the work behind the claims (live products, the public Footbolski repo).

## Product Purpose

The personal website of Rezart Abazi, Senior AI Engineer, at https://rezart95.github.io/. It is the long-form companion to the GitHub profile: the profile carries almost no prose by design, so **the website is where the role and project stories are told.** Success: a recruiter leaves knowing what he builds (agentic AI, multi-agent systems, RAG), that it runs in production at scale, what he has shipped on his own, and how to contact him.

## Positioning

A working engineer who ships production AI: at Motorola Solutions a multi-agent text-to-SQL system used by a 1,500-person supply-chain department, and on his own six live products he built and runs end to end. The headline is agentic AI, multi-agent systems and RAG. Cloud providers are a detail, never the headline (owner's explicit instruction: do not frame him around AWS or GCP).

## Operating Context

- First impression for recruiters; often opened on a phone from LinkedIn.
- Most project repos are private, so project links go to live products; Footbolski (rezart95/footbolski) is the public code sample.
- Sibling surfaces that must stay consistent: GitHub profile (repo `rezart95/rezart95`), CV PDF, LinkedIn.

## Capabilities and Constraints

### Identity
- Name: Rezart Abazi. Title: **Senior AI Engineer**. Based in Kraków, Poland.
- Contact: rezart392@gmail.com · LinkedIn https://www.linkedin.com/in/rezart-abazi/ · GitHub https://github.com/rezart95
- The **hero shows the title only**; the employer is named first in the experience section (owner, 2026-11-07).

### Experience (confirmed)
1. **Motorola Solutions**, Senior AI Engineer, **Feb 2026 – present**.
   - Built an AI agent for text-to-SQL serving the whole supply-chain department (about 1,500 people). The agent uses **MCP tools** to query Amazon Redshift and a catalog of table metadata.
   - Designed and implemented the improved **multi-agent architecture**.
   - Integrated the agent into **Google Chat** via its SDK so business users can ask questions where they already work.
   - Evaluation and testing with **Langfuse**.
   - First 100 days: **14,000+ queries, 800+ unique users, 50,000+ requests**, average answer time about **20 seconds**.
   - Uses AWS and partly GCP at work (detail only, not headline).
   - The owner will provide more achievements later; claim only what is listed here.
2. **ALDI Nord** (display name; internally ALDI Tech Hub), AI Engineer, **Dec 2023 – Jan 2026**, Kraków. Customer-care RAG chatbot (Salesforce knowledge base via API, Azure AI Foundry, Databricks Vector Search, OpenAI embeddings); FastAPI service integrating answers into the internal customer-care tool; contributed to the organisation-wide AI strategy and use-case selection; improved the internal A/B testing platform.
3. **Procter & Gamble**, AI Engineer, Nov 2022 – Dec 2023, Warsaw. Refined dynamic-bidding ML algorithms with the Data Science team across 2,000+ e-commerce campaigns (Amazon, Walmart, Target): 20% cost savings for similar or better share of shelf. Extended data pipelines (SQL, Azure, Argo); Prometheus/Grafana monitoring of scraped-data quality.
4. **Dyvenia**, Data Engineer, Nov 2021 – Nov 2022, Kraków. SAP-to-Azure Data Lake ingestion (Python, Prefect); PDF extraction with Azure Form Recognizer; geospatial SQL models for marketing campaigns.
5. **Citi**, Data Analyst (Middle Office), Dec 2020 – Nov 2021, Warsaw. Fund order settlement, SQL Server; Python automation of Excel reporting.
6. University of Padova, Data Scientist (research), Nov 2018 – Jul 2019. Optional on the site.

### Education
- University of Warsaw, Master in Data Science.
- University of Padova, Bachelor in Statistics.

### From the owner's CV (Rezart_Abazi_AI_Engineer.pdf)
- Languages: English, Italian, Albanian.
- Dyvenia: geospatial SQL models for marketing campaigns across Northern and Southern Europe.

### Featured projects (verified in each repo, 2026-11-07)
None uses AWS or GCP; all are self-hosted on Coolify behind Cloudflare. Never attribute AWS or GCP to a project.

1. **Footbolski**: https://footbolski.org, public repo rezart95/footbolski. PWA running a weekly pickup football game in Kraków for about 20 people, in weekly use since May 2026: waitlist, payment tracking, WhatsApp reminders. LangGraph + Claude team splitter: the model judges players, a deterministic exhaustive solver builds the teams, Claude explains the split. One-shot LLM splits averaged a 1.79 strength gap; the solver averages 0.03.
2. **MiredheLire**: https://miredhelire.al (private). Albanian price comparison: scrapes Albanian shops and groups offers into canonical products, about 19,730 products from 12 shops in the new catalogue on UAT (production still runs older logic). Pipeline of specialised Claude agents: Haiku identity extraction; Sonnet identity agent on the Claude Agent SDK with MCP tools (catalog search, web search, page fetch); Sonnet category placement; Opus repair agent that opens code-fix PRs (**built, not deployed**). Deterministic checks on every verdict; cost ledger with budgets. Redis/arq, Next.js, Prometheus.
3. **FashionPricing**: https://fashionpricing.com (private). B2B competitive pricing intelligence for Polish fashion brands; tracks 26 brands with variant-level price history. AI analyst "Emily": LangGraph, Haiku input guard, Sonnet ReAct agent over 15 read-only analytics tools, traced in Langfuse. Next.js. **No customers claimed.**
4. **Almanac**: https://xtractor.financial-insights.uk (private). Turns a household's bank statements into a reconciled ledger with analytics and a review queue; used by a household of two. Multi-signal categorisation: rules, merchant matching, Perplexity web enrichment, Claude batch classification, and a two-framing consensus that sends disagreements to human review. The AI analyst chat is **specced, not built**: never claim it.
5. **My Finances Analyst**: https://my.financial-insights.uk (private). Bank Millennium statements read by Azure AI Document Intelligence, categorised, charted in a React dashboard; 1,328 real transactions, Oct 2019 – Jan 2022.
6. **LegalHub**: https://legalhub.al. Albanian legal assistant, LangGraph RAG over Albanian legislation.

Dropped, never shown: Restok inventory app, Fashion Procurement placeholder, "AI Lawyer" at avokatiyt.al (superseded by LegalHub), the old onrender.com demo links.

### Toolbox (matches the GitHub profile)
LangGraph · Langfuse · MCP · RAG · Fine-tuning · Python · FastAPI · PostgreSQL · React · Docker · AWS · GCP · Azure.

### Owner decisions, 2026-11-08 (override the repo-verified figures for display)
- Tone: **not job-seeking.** The owner does not want to read as waiting to be picked by a recruiter. No hiring asks; the contact block is a quiet row (email in body size, LinkedIn, GitHub, CV), never a headline.
- Display figures confirmed by the owner: FashionPricing **30+ brands**; My Finances Analyst **1,400** transactions (rounded from 1,328); MiredheLire **100,000+ products** shown explicitly as the catalogue's target, not as the current count. The test-environment footnote is dropped.
- **Almanac is the featured product**, presented as its next stage: a multi-agent system that runs the household's finances (analyst with 15 read-only tools from plan 3A; forecasting, goal-driven savings plans and live mortgage-rate research from the AI financial analyst roadmap; tools over MCP; per-member scopes; writes need a person's confirmation). It is **in development** and must always be labelled so; its phone screen is a concept with illustrative figures. The four agent roles (Analyst, Forecaster, Planner, Researcher) are the site's framing of that roadmap.
- **LegalHub**: RAG with spatial and temporal awareness (where a rule applies, when it was in force), per the owner.
- Footbolski is a regular product row, not the feature (owner: too simple to headline).
- Motorola Solutions logo: the owner-supplied stacked logo, recoloured for the dark band (`images/logos/motorola-solutions-on-dark.png`).

## Brand Commitments

- Voice: professional but entertaining. No emojis. No AI-sounding filler or awkward phrasing (e.g. "rounding up my knowledge with Terraform"). Seniority shown through decisions and results, not adjectives.
- Owner's brief for the site (2026-11-07): modern, timeless, oriented to technology but not nerdy.
- The GitHub profile's visual language (dark deep-space panel, single gold accent, Geist / Geist Mono, orbit motifs) is approved by the owner for that surface. Geist fonts and app icons live in `../rezart95/tools/banner/`.
- Directions the owner rejected on the profile: airport departures board, magazine poster, gold "sun" core, "AI" spelled out in letters, provider-led (AWS/GCP) framing, paragraphs of project text, emojis.

## Evidence on Hand

- Photo: `images/my_photo_v2.png` (keep).
- Company logos: `images/aldi-nord.png`, `proctergamble.png`, `dyvenia.png`, `citi.png` (keep); Motorola Solutions logo to be added as `images/motorola-solutions.*` from Wikimedia Commons.
- CV: `Rezart_Abazi_AI_Engineer.pdf` (keep the download). **Out of date**: it lists ALDI as current and omits Motorola; the owner will supply a new PDF.
- Project screenshots: footbolski repo `docs/screenshots/{landing,match,teams}.png`; my-finances-analyst repo `docs/screenshots/` (overview, prices, scan). App icons in `../rezart95/tools/banner/icons`.
- No customers, testimonials, certifications or benchmarks beyond those stated above. Do not invent any.
- Contact form: removed by owner's choice; contact is email + LinkedIn + GitHub.

## Product Principles

1. Every claim traceable to a repo or to the owner's confirmation.
2. Production results first: users, volume, measured outcomes.
3. Live products over badges and skill bars.
4. Skimmable in one screen on a phone; detail is there for those who look.
5. AI systems are the headline; tools and clouds are supporting detail.
