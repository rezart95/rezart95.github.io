---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Surface brief: index.html (personal site home)

Scope: the whole single-page site at rezart95.github.io. Visitor mode: **Persuade**: a recruiter decides whether to call; the action is email / LinkedIn / CV download.

Audience and job: recruiters and hiring managers for senior AI roles, ~60 seconds, often on a phone from LinkedIn. They must leave knowing: Senior AI Engineer, production multi-agent work at scale (Motorola Solutions), six self-built live products, how to reach him.
Proof on hand: Motorola first-100-days figures; Footbolski 1.79 vs 0.03; MiredheLire 19,730 products / 12 shops; FashionPricing 26 brands / 15 tools; My Finances 1,328 transactions; P&G 2,000+ campaigns / 20%. All facts from PRODUCT.md only.
Constraints: hero shows title only (no employer); no hacker/terminal look, no template feel, no walls of text, no heavy animation; plain static HTML/CSS/JS on GitHub Pages; keep photo, CV link, company logos; no contact form.

## Direction contract

THESIS: The career as an annual report: a cover, then key figures that are real measurements, then one chapter per role and per product. It refuses the dev-portfolio default (dark gradient hero, skill bars, same-size project cards).

OWN-WORLD: Bright white stock (#FFFFFF), graphite ink (#111318), a cool secondary grey (#5E6472), hairline rules (#E3E5EA), one gold (#D2B072 for rules and figure markers; #8C6A2E where gold must carry text). One flat deep-space spread (#0B0D13, no gradient) holds the key figures, the page's single link to the GitHub banner. Geist, self-hosted: Light at display scale, Regular for text; tabular numerals for every figure and date. No monospace anywhere (Geist Mono was dropped during build: it read as dev costume against the "not nerdy" brief). Strict 12-column grid, logos as single-ink marks, no cards, no shadows, no icon tiles; actions are squared, never pills.

STORY: Cover: who he is in one line. Figures: this runs in production at scale. Chapters: what he built at Motorola, where he came from, what he ships alone, each product a short entry with a live link and a measured fact only where a real measurement exists. Close: contact in one move.

FIRST VIEWPORT: Slim top rule with "Rezart Abazi" left, chapter links and a "Download CV" control right. Below, on the grid: left columns 1-7 carry "Senior AI Engineer" in Geist Light at display scale, then the one-line pitch (agentic AI, multi-agent systems, RAG, in production), then two actions, "Email me" (primary) and "LinkedIn". Right columns 8-12: the portrait cropped to the grid with a caption line ("Rezart Abazi" | "Kraków, Poland"); the name is not repeated as a label over the title. The top edge of the dark key-figures spread shows at the fold on desktop.

FORM: Swiss-grid annual report with a key-figures spread; my top-ranked grounded candidate (#1), chosen by the user as IMPECCABLE'S PICK; seed key 60a39da8. Signature interaction: the key figures settle into place once as the spread enters view (digits tick from a near value to the real one, tabular, 900ms exponential ease-out; static under reduced motion), and the Footbolski chart draws its two bars. Motion grammar: nothing else moves except hover states on rows and links.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

- New CV PDF from the owner (current one lists ALDI as current).
- More Motorola achievements to come from the owner.
