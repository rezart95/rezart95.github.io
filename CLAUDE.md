# rezart95.github.io: context for website work

Personal website of Rezart Abazi, served by GitHub Pages at https://rezart95.github.io/.
It is a static HTML5 UP template (`index.html`, `assets/`, `images/`, plus the
template's leftover `elements.html` and `generic.html`) and the CV
`Rezart_Abazi_AI_Engineer.pdf`. This file sums up the recent work on the owner's
other public surfaces (November 2026), so that website changes stay consistent
with them.

The site currently mentions ALDI, fashion and finances work, but it has not been
audited against the facts below. Check it against them before changing claims.

## Who he is (confirmed by the owner)

- Title: **Senior AI Engineer**. Current employer: Motorola Solutions, where he
  designs multi-agent systems. Describe that work generically, with no details.
  At work he uses AWS and partly GCP.
- Previously at ALDI Tech Hub, where he built internal AI solutions on Azure.
- Contact: rezart392@gmail.com · LinkedIn https://www.linkedin.com/in/rezart-abazi/ · GitHub https://github.com/rezart95
- The big picture is **agentic AI, multi-agent systems and RAG**. Cloud
  providers are a detail, not the headline: the owner said explicitly not to
  frame him around AWS or GCP.
- The GitHub banner deliberately leaves out the employer so it stays accurate
  if he changes jobs. A CV-style site can name the current role, but ask the
  owner before putting the employer in hero or headline copy.

## The GitHub profile (github.com/rezart95, repo `rezart95/rezart95`), rebuilt November 2026

What the profile shows now, from top to bottom:

1. **Banner** (`assets/banner.svg`, animated SVG, always dark). On the left:
   "Rezart Abazi" and "SENIOR AI ENGINEER". On the right:
   - a 3D neural network (layers of 3-6-6-3 nodes, gold wireframe) spinning
     on its own axis, with a pulse passing through the layers;
   - three tilted orbits around it. Each satellite carries one keyword:
     AGENTS (gold), MCP, EVALS, GUARDRAILS, RAG, TOOLS, FINE-TUNING, MEMORY,
     CONTEXT, EMBEDDINGS.
2. **Project dock** (`assets/dock/*.svg`), joined under the banner as one dark
   panel: a "MY WORK" tile linking to this website, then six app tiles, each
   showing the app's own icon and linking to the live product.
3. Toolbox line: LangGraph · Langfuse · MCP · RAG · Fine-tuning · Python ·
   FastAPI · PostgreSQL · React · Docker · AWS · GCP · Azure.
4. Contact line: LinkedIn · rezart95.github.io · email.

The profile carries almost no prose, by design: **the website is where the
project stories are told.** That makes the website the place for the
per-project detail below.

To regenerate the banner or dock, use `tools/banner/generate.py` in the
`rezart95` repo (see its README). The icons and Geist fonts it uses are in
`tools/banner/`, so they can be reused here.

### Visual language, if the website should match

- Background: deep space, a radial gradient from `#121726` to `#07080C`, with a
  faint dot grid. Panel `#0A0C12`.
- Lines `#C9CFDC`, dim `#5B6273`, secondary text `#9AA1B0`, ink `#F1F2F5`.
- One accent: gold `#D2B072` (highlight `#F4E6C4`).
- Type: **Geist** Light for the name and words; **Geist Mono**, uppercase with
  wide letter-spacing, for labels.
- Motifs: orbits, instrument tick rings, small callout lines ending in a dot.
  The tone is futuristic, elegant and timeless, not a flowchart.
- Approved by the owner. Directions the owner rejected:
  - an airport departures board;
  - a magazine poster;
  - a gold "sun" core;
  - "AI" spelled out in letters;
  - provider-led framing (AWS/GCP);
  - paragraphs of project text;
  - emojis;
  - a separate "My work" heading floating apart from the banner.

## Voice

Professional but entertaining. No emojis. No AI-sounding filler and no awkward
phrasing (the old profile had "rounding up my knowledge with Terraform"; avoid
that kind of line). Show seniority through decisions and results, not adjectives.

## Featured projects: verified facts (checked against each repo, 2026-11-07)

Only claim what is listed here or what the owner confirms. None of these
projects uses AWS or GCP; all are self-hosted on Coolify behind Cloudflare.
Never attribute AWS or GCP to a project.

1. **Footbolski** (https://footbolski.org; public repo rezart95/footbolski, the
   public code sample). PWA that runs a weekly pickup football game in Kraków
   for about 20 people, in weekly use since May 2026: waitlist, payment
   tracking, WhatsApp reminders.
   - Team splitting: a LangGraph + Claude splitter in which the model judges
     players and a deterministic exhaustive solver builds the teams; Claude
     then explains the final split.
   - Result: one-shot LLM splits averaged a 1.79 strength gap; the solver
     averaged 0.03.
   - Screenshots are in that repo's `docs/screenshots/`.
2. **MiredheLire** (https://miredhelire.al; private, Illyrian-AI/miredhelire).
   Albanian price comparison. It scrapes Albanian shops and groups their
   offers into canonical products: about 19,730 products from 12 shops in the
   new catalogue on UAT (production still runs older logic).
   - A pipeline of specialised Claude agents:
     - Haiku identity extraction;
     - a Sonnet identity agent on the Claude Agent SDK with MCP tools (catalog
       search, web search, page fetch);
     - Sonnet category placement;
     - an Opus repair agent that opens code-fix PRs (**built, not deployed**).
   - Deterministic checks on every verdict, and a cost ledger with budgets.
   - Stack includes Redis/arq, Next.js and Prometheus.
3. **FashionPricing** (https://fashionpricing.com; private repo fashion-analytics).
   B2B competitive pricing intelligence for Polish fashion brands. It tracks 26
   brands with variant-level price history.
   - AI analyst "Emily": LangGraph with a Haiku input guard and a Sonnet ReAct
     agent over 15 read-only analytics tools, traced in Langfuse. Next.js.
   - **No customers claimed.**
4. **Almanac** (https://xtractor.financial-insights.uk; private repo
   bank-expense-tracker-ai, also called "Bank Extractor"). Turns a household's
   bank statements into a reconciled ledger with analytics and a review queue;
   used by a household of two.
   - Categorisation combines several signals: rules, merchant matching,
     Perplexity web enrichment, Claude batch classification, and a two-framing
     consensus that sends disagreements to human review.
   - The AI analyst chat is **specced, not built**. Never claim it.
5. **My Finances Analyst** (https://my.financial-insights.uk; private). Bank
   Millennium statements are read by Azure AI Document Intelligence,
   categorised, and charted in a React dashboard. It runs on 1,328 real
   transactions from October 2019 to January 2022.
   - Recent updates (Nov 2026):
     - the signed-in app was redesigned into sections (Overview, Prices,
       Habits, Merchants, Scan), with a sidebar on desktop and a bottom tab
       bar on mobile;
     - headline yearly totals count spending only;
     - typefaces are Schibsted Grotesk and JetBrains Mono;
     - the landing copy and README were rewritten.
   - Mobile screenshots are in that repo's `docs/screenshots/` (overview,
     prices, scan). Demo video:
     https://github.com/user-attachments/assets/44c77343-6916-4af2-86d1-dd8a294d306b
6. **LegalHub** (https://legalhub.al; repo avokati / LegalHub). Albanian legal
   assistant using LangGraph RAG over Albanian legislation.

Dropped and not to be shown: the Restok inventory app and the Fashion
Procurement placeholder.

There are no customers, testimonials, certifications or benchmarks beyond the
ones stated above. Do not invent any.

## More context in sibling repos

- `../rezart95/PRODUCT.md` (local only): the source of the facts above. Its
  Positioning section still stresses the employer and AWS/GCP. That emphasis
  was later superseded by the owner, as described in "Who he is".
- `../rezart95/tools/banner/`: the banner generator, app icons and Geist fonts.
- Each project repo sits next to this one in `C:\Users\re_zi\github_projects\`.
