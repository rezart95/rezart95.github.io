---
name: Rezart Abazi
description: A Senior AI Engineer's career set as an annual report on a Swiss grid.
colors:
  paper: "#FFFFFF"
  paper-2: "#F6F7F9"
  ink: "#111318"
  ink-2: "#3A3F4B"
  ink-raised: "#2A2E38"
  muted: "#5E6472"
  rule: "#E3E5EA"
  rule-strong: "#111318"
  bar-neutral: "#B8BDC8"
  gold: "#D2B072"
  gold-ink: "#8C6A2E"
  gold-soft: "#F4E6C4"
  space: "#0B0D13"
  space-ink: "#F1F2F5"
  space-muted: "#9AA1B0"
  space-rule: "#262B38"
typography:
  display:
    fontFamily: "Geist, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(3rem, 7.4vw, 6rem)"
    fontWeight: 300
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  figure-lead:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(4rem, 10vw, 6rem)"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "-0.04em"
    fontFeature: "tnum"
  figure:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4vw, 3.25rem)"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "-0.04em"
    fontFeature: "tnum"
  headline:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.25rem)"
    fontWeight: 300
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  lede:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.1875rem, 1.6vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  meta:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  none: "0px"
  app-icon: "11px"
  device: "28px"
spacing:
  s1: "0.5rem"
  s2: "1rem"
  s3: "1.5rem"
  s4: "2.5rem"
  s5: "4rem"
  s6: "clamp(4.5rem, 10vw, 8.5rem)"
  gutter: "clamp(16px, 4vw, 48px)"
  max: "1240px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0 1.4rem"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.ink-raised}"
    textColor: "{colors.paper}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 1.4rem"
    height: "48px"
  button-secondary-hover:
    backgroundColor: "{colors.paper-2}"
  cv-control:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.meta}"
    rounded: "{rounded.none}"
    padding: "0.38rem 0.8rem"
  cv-control-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  key-figures-spread:
    backgroundColor: "{colors.space}"
    textColor: "{colors.space-ink}"
    padding: "{spacing.s6} 0"
  app-icon:
    rounded: "{rounded.app-icon}"
    size: "44px"
  chart-track:
    backgroundColor: "{colors.paper-2}"
    height: "10px"
---

# Design System: Rezart Abazi

## Overview

**Creative North Star: "The Annual Report"**

The career is typeset like a company's annual report: a cover, a dark key-figures spread, then chapters set as ruled tables on a strict 12-column grid. Authority comes from alignment, hairline rules and real numbers, never from decoration. The page is bright white stock with graphite ink, one gold, and one flat deep-space spread that ties the site to the owner's GitHub banner.

Density is editorial rather than dashboard: generous vertical chapters (up to 8.5rem apart), tight internal rhythm, and every row closed by a rule instead of enclosed in a box. Type does the hierarchy: Geist Light at display scale, Medium for row titles, Regular for reading text. Motion is almost absent; the one signature is that the measured figures settle, once.

The world refuses the dev-portfolio default: no dark gradient hero, no cards, no skill bars, no monospace, no pill buttons.

**Key Characteristics:**
- White stock, graphite ink, a single gold; one flat dark spread per page at most.
- 12-column grid with rules in place of containers.
- Geist only, Light at display scale, tabular numerals on every figure and date.
- Squared interface chrome; rounding only on objects that are round in reality.
- Motion reserved for measured data; everything else is still except hover colour.

## Colors

A cool, near-neutral graphite scale on white, with one warm gold doing all the accent work.

### Primary
- **Report Gold** (`gold`): rules and markers only: the short rule under the cover title, the top rule of the key-figures table, the top rule of each "What I built" column, the plus and unit marks beside figures, link underlines, and the underline under product figures. Never body text on white.
- **Ledger Gold** (`gold-ink`): gold that has to carry text on white: link hover, the focus ring.
- **Gold Wash** (`gold-soft`): text selection on white only.

### Neutral
- **White Stock** (`paper`): the page.
- **Proof Grey** (`paper-2`): image placeholders, chart tracks, secondary button hover. A fill, never a card surface.
- **Graphite Ink** (`ink`): headings, primary text, the solid button, the device frame. Its twin `rule-strong` draws structural rules (chapter rules, caption rules, the close rule).
- **Raised Graphite** (`ink-raised`): solid button hover only.
- **Slate** (`ink-2`): reading text in descriptions, ledger results, nav links.
- **Cool Grey** (`muted`): dates, captions, meta lines, footnotes.
- **Hairline** (`rule`): row dividers inside tables, the masthead base, the colophon rule.
- **Bar Grey** (`bar-neutral`): the losing bar in a comparison chart.

### The Spread
- **Deep Space** (`space`): the key-figures spread. Flat, no gradient.
- **Starlight** (`space-ink`), **Nebula Grey** (`space-muted`), **Orbit Rule** (`space-rule`): text, secondary text and rules inside the spread. On the spread, `gold` may carry figure marks and the period line as text.

### Named Rules
**The One Gold Rule.** Gold is the only hue. It marks structure and measurement; it never fills a surface.

**The Gold Carries Text Only as Ledger Gold Rule.** On white, any gold glyph that must be read uses `gold-ink`; `gold` is reserved for rules, bars and underlines. On `space`, `gold` itself may be read.

**The Single Spread Rule.** Deep Space appears as one full-bleed band holding real key figures. It is not a theme toggle, not a hero, and never a gradient.

## Typography

**Display Font:** Geist, self-hosted variable 100-900 (with ui-sans-serif, system-ui, -apple-system, Segoe UI)
**Body Font:** Geist (same stack)

**Character:** One grotesque family across every role, so hierarchy comes from weight, size and tracking. Light weights at large sizes with tight negative tracking read as print, not as a tech product.

### Hierarchy
- **Display** (300, `display`, lh 0.98, -0.04em): the cover title only; followed by a 72px by 2px gold rule.
- **Figure Lead / Figure** (300, `figure-lead` / `figure`, lh 1, -0.04em, tabular): measured values in the key-figures spread. Product figures use the same voice at clamp(2rem, 3vw, 2.5rem).
- **Headline** (300, `headline`, lh 1.08, -0.035em): chapter titles, sitting on a `rule-strong` rule. The spread title is the same voice at its own clamp (up to 3rem).
- **Title** (500, 1.1875rem, lh 1.3, -0.015em): row titles in ledgers and the "built" columns. Product names step up to 1.375rem (feature product: clamp(1.75rem, 2.6vw, 2.25rem) at 400).
- **Lede** (400, `lede`, lh 1.5, max 34ch): the cover pitch.
- **Body** (400, 1.0625rem, lh 1.6; 1rem under 560px): reading text, capped at 60ch in rows and 46ch in chapter intros.
- **Meta** (400, 0.9375rem): nav, dates, roles, product meta.
- **Label** (400, 0.875rem, sentence case, no tracking): captions, definition terms, the figures' period line. Fine print (footnotes, colophon, shot captions) is 0.8125rem.

### Named Rules
**The Tabular Rule.** Every figure, date and number set in `<strong>` uses tabular numerals.

**The Light-at-Scale Rule.** Anything at headline size or larger is Geist 300 with negative tracking; weight 500 is for row titles and the name, never for display.

**The No-Mono Rule.** No monospace anywhere. Geist Mono was tried and dropped because it read as dev costume.

## Layout

A centred column of 1240px plus gutters (`gutter`, clamp 16-48px). Every major block lays out on a 12-column grid with a 1.5rem column gap: cover text on columns 1-7, portrait on 8-12; ledger rows as date 1-2, organisation 3-6, result 7-12; products as head 1-4, body 5-9, figure 10-12; key figures as a lead figure on 1-6 against a figure list on 7-12. Chapters are separated by `s6`; rows are padded with `s3` and closed by a rule, flush to the rule rather than inset in a box.

Breakpoints: at 1080px the four "built" columns become two and product rows reflow; at 860px everything collapses to one column, the masthead nav moves to its own scrolling row, and the spread's vertical divider becomes a horizontal rule; at 560px the cover reorders to title, portrait (4:3), pitch, actions, and actions stretch full width.

**The Rule-Not-Box Rule.** Structure is drawn with horizontal rules on the grid, never with enclosing borders, backgrounds or cards.

## Elevation & Depth

Flat. There is no elevation vocabulary: no drop shadows, no layered surfaces. Depth is carried by rule weight (1px `rule` inside tables, 1-2px `rule-strong` and `gold` at section boundaries) and by the single tonal jump to the Deep Space spread. The sticky masthead is near-opaque paper (92%) with a light backdrop blur so text stays legible under scroll, closed by a hairline; it does not cast a shadow. The only shadow declaration in the build is a 1px keyline around app icons, which is a border that follows their rounded shape, not depth.

**The Flat Stock Rule.** If a surface looks lifted off the page, it is wrong.

## Shapes

Interface chrome is square: buttons, the CV control, tracks and bars all use `rounded.none`. Rounding exists only where the depicted object is itself round: app icons keep their platform squircle (about 22% of their size: 10px at 44px, 11px at 48px, 13px at 56px) and the featured product's phone sits in a device frame (7px `ink` border, `rounded.device`). The focus ring has a 2px radius for legibility. Recurring geometry is the short gold rule (72px by 2px under the cover title, 2px over each "built" column, 2px under product figures).

**The Square Chrome Rule.** Actions are squared, never pills. Corner radius belongs to depicted devices and app marks, not to interface elements.

## Components

### Buttons
Plain and confident, like a report's call to action.
- **Shape:** square corners (0), 1px `ink` border, 48px minimum height, 0 1.4rem padding, 1rem at weight 500.
- **Primary:** `ink` fill, `paper` text. Hover moves to `ink-raised`.
- **Secondary:** transparent with `ink` text and border. Hover fills `paper-2`.
- **CV control:** a compact squared outline in the masthead (0.38rem 0.8rem, 0.9375rem) that inverts to `ink` fill on hover.
- **Focus:** 2px `gold-ink` outline, 3px offset. Transitions are colour only, 0.2s.
- **Icons:** inline 16px stroke SVG (arrow out, download) at 0.9em, inheriting text colour.

### Navigation
A sticky 60px masthead: the name at weight 500 on the left, section links in `ink-2` meta size, then the CV control. Links darken to `ink` and underline on hover. Under 860px the links wrap to a horizontally scrolling row with 40px targets.

### Links
Inline links keep the text colour and take a 1px `gold` underline offset 0.22em; link groups use weight 500 and turn `gold-ink` on hover. The contact block is deliberately quiet: one ruled row with a small "Contact" heading, then email, LinkedIn, GitHub and CV all at body size. No headline, no hiring ask, no large email.

### Ledger Row
The core table pattern for experience and products: a 12-column row, `s3` padding, 1px `rule` underneath, no background. Employer logos sit at 44px, greyscale at 72% opacity. Product rows add a right-aligned figure in the Light figure voice with a 2px gold underline, present only when a real measurement exists.

### Key-Figures Spread (signature)
A full-bleed `space` band. The head pairs the employer (the owner-supplied stacked Motorola Solutions logo in its own blue with a white wordmark, then role and dates) against a Light headline, both on `space-rule` top rules. Below, a gold top rule opens the figures table: a period line in `gold` at label size stating the measurement window, a lead figure with a vertical `space-rule` divider, and a ruled list of label-value rows. Plus, approx and unit marks are gold. On entry the numbers settle once: they run from 90% of the real value up to it over 900ms on an exponential ease-out. Under reduced motion, or without JavaScript, they render static at the real value.

### Comparison Chart (retired)

No comparison chart ships since 2026-11-08 (the owner removed the Footbolski chart). The `bar-neutral` and `chart-track` tokens stay reserved for a future data chart, which would follow the same grammar: ruled rows, tabular values, the winning value in `gold-ink`.

### Device Shot
An authored concept screen of the featured product, drawn in HTML in that product's own palette (Almanac's green paper, spine and stamp purple), inside a 7px `ink` frame with `rounded.device` corners, max 300px wide, right-aligned on columns 9-12. Its caption always says it is a concept with illustrative figures.

## Do's and Don'ts

### Do:
- **Do** lay every block on the 12-column grid and close rows with a rule.
- **Do** set display and headline sizes in Geist 300 with negative tracking, and every number in tabular figures.
- **Do** use `gold` for rules, bars and marks, and `gold-ink` whenever gold must be read on white.
- **Do** keep former-employer logos single-ink greyscale on white; the current employer's mark keeps its blue on the spread; product app icons keep their own colours because they are the product's mark.
- **Do** show a figure only where a real measurement exists, and pair it with its unit or period.
- **Do** make every animation static under `prefers-reduced-motion` and without JavaScript.

### Don't:
- **Don't** use cards, boxed containers, or background fills to group content.
- **Don't** add drop shadows or elevation; the only shadow is the 1px app-icon keyline.
- **Don't** round interface elements or use pill buttons; radius is for app icons and device frames.
- **Don't** use colour gradients. The flat Deep Space spread stays flat (solid-colour gradients used as rule lines are fine).
- **Don't** use monospace type anywhere.
- **Don't** animate anything except measured data entering view and hover colour.
- **Don't** introduce a second accent hue.
