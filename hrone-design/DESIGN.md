---
version: alpha
name: HRone Next
description: Next-generation Angular/React HRMS design system — accessible, token-driven, built for scale
stack: angular / react
product: hrone-next

colors:
  brand-primary:          "#02563D"
  brand-primary-dark:     "#013E2C"
  brand-primary-mid:      "#3DAB87"
  brand-primary-light:    "#E8F4F0"
  brand-secondary:        "#ff674d"
  brand-secondary-dark:   "#e55c44"
  brand-secondary-mid:    "#ffa090"
  brand-secondary-light:  "#fff1ee"
  brand-secondary-25:     "#fff8f6"
  brand-secondary-50:     "#fff1ee"
  brand-secondary-100:    "#ffd9d1"
  brand-secondary-200:    "#ffbfb2"
  brand-secondary-300:    "#ffa090"
  brand-secondary-400:    "#ff846e"
  brand-secondary-500:    "#ff674d"
  brand-secondary-600:    "#e55c44"
  brand-secondary-700:    "#cc523c"
  brand-secondary-800:    "#b24733"
  brand-secondary-900:    "#993d2b"
  brand-secondary-950:    "#7f3323"
  neutral-50:             "#F8FAFB"
  neutral-100:            "#F1F5F7"
  neutral-200:            "#E2E8ED"
  neutral-300:            "#CBD5DD"
  neutral-400:            "#94A3B5"
  neutral-500:            "#64748B"
  neutral-600:            "#475569"
  neutral-700:            "#334155"
  neutral-800:            "#1E293B"
  neutral-900:            "#0F172A"
  success:                "#16A34A"
  success-light:          "#DCFCE7"
  warning:                "#D97706"
  warning-light:          "#FEF3C7"
  error:                  "#DC2626"
  error-light:            "#FEE2E2"
  info:                   "#2563EB"
  info-light:             "#DBEAFE"

typography:
  display-xl:
    fontFamily: "Noto Sans, system-ui, sans-serif"
    fontSize: 60px
    fontWeight: 800
    lineHeight: 1
  display-lg:
    fontFamily: "Noto Sans, system-ui, sans-serif"
    fontSize: 48px
    fontWeight: 800
    lineHeight: 1
  display-md:
    fontFamily: "Noto Sans, system-ui, sans-serif"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.25
  display-sm:
    fontFamily: "Noto Sans, system-ui, sans-serif"
    fontSize: 30px
    fontWeight: 700
    lineHeight: 1.25
  h1:
    fontFamily: "Noto Sans, system-ui, sans-serif"
    fontSize: 30px
    fontWeight: 700
    lineHeight: 1.25
  h2:
    fontFamily: "Noto Sans, system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.25
  h3:
    fontFamily: "Noto Sans, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.375
  h4:
    fontFamily: "Noto Sans, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.375
  body-lg:
    fontFamily: "Noto Sans, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.75
  body-md:
    fontFamily: "Noto Sans, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: "Noto Sans, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  body-xs:
    fontFamily: "Noto Sans, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 2
  label:
    fontFamily: "Noto Sans, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.5
  caption:
    fontFamily: "Noto Sans, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 2
  button:
    fontFamily: "Noto Sans, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1
  overline:
    fontFamily: "Noto Sans, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 600
    letterSpacing: 0.05em

rounded:
  xs:    2px
  sm:    4px
  md:    6px
  lg:    8px
  xl:    12px
  2xl:   16px
  2_5xl: 20px
  3xl:   24px
  4xl:   32px
  full:  9999px

spacing:
  0.5: 2px
  1:   4px
  2:   8px
  3:   12px
  4:   16px
  5:   20px
  6:   24px
  7:   28px
  8:   32px
  10:  40px
  12:  48px
  14:  56px
  16:  64px
  20:  80px
  24:  96px

components:
  button-primary:
    backgroundColor: "{colors.brand-secondary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.lg}"
    padding: "8px 16px"
    height: 36px
  button-primary-hover:
    backgroundColor: "{colors.brand-secondary-dark}"
  button-secondary:
    backgroundColor: "{colors.brand-primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.lg}"
    padding: "8px 16px"
    height: 36px
  button-secondary-hover:
    backgroundColor: "{colors.brand-primary-dark}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.neutral-900}"
    border: "1px solid {colors.neutral-200}"
    rounded: "{rounded.lg}"
    padding: "8px 16px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.neutral-600}"
    rounded: "{rounded.lg}"
    padding: "8px 16px"
  button-danger:
    backgroundColor: "{colors.error}"
    textColor: "#FFFFFF"
    rounded: "{rounded.lg}"
    padding: "8px 16px"
  input-default:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.neutral-900}"
    border: "1px solid {colors.neutral-200}"
    rounded: "{rounded.xl}"
    padding: "8px 12px"
    height: 36px
  input-focus:
    borderColor: "{colors.brand-primary}"
    border: "1px solid {colors.brand-primary}"
  card:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.neutral-900}"
    border: "1px solid {colors.neutral-200}"
    rounded: "{rounded.lg}"
    padding: 16px
  sidebar:
    backgroundColor: "{colors.brand-primary}"
    textColor: "#FFFFFF"
    width: 240px
    widthCollapsed: 68px
---

# Design System: HRone Next

> **Stack:** Angular / React. **Consumer:** AI agent generating Angular or React UI.
> **Do not reinvent.** This document is the contract. Every token value here is normative.
> **Authority chain:** This file → `foundation/foundation-token/` → `components/**/SKILL.md`

## Overview

**Creative North Star: "The Trusted Control Room — Next Generation"**

HRone Next is the evolution of the HRone HRMS platform for Angular and React. HR managers, employees, and admins rely on it for high-stakes daily work — payroll, leave approvals, performance reviews, hiring pipelines. The visual language is calm, structured, and precise. It communicates expertise through restraint.

**Reject:** dark glows, gradient excess, glassmorphism, decorative motion, cyan-purple SaaS palettes, sterile enterprise grids without personality.

**Key characteristics:**
- **Dual brand color** — Forest Green (`#02563D`) for structure/nav/trust + Tomato (`#ff674d`) for action/CTA/engagement. Combined ≤15% of any surface.
- **Green-tinted neutral scale** — all neutrals carry hue 161 tint for cohesion with brand green
- **4pt spatial grid** — spacing scale based on 4px increments
- **Noto Sans** — warm, humanist, legible from 12px to 60px. Single family throughout.
- **Layered elevation** — surface shadow on every raised element; flat only for flush/table contexts
- **State-complete components** — every interactive element ships default, hover, focus, active, disabled, loading, error, success

## Colors

Calm, professional palette. Deep forest green primary + vibrant tomato secondary + green-tinted neutral scale.

**Two-Voice Rule.** Forest Green (`#02563D`) anchors navigation, structure, and trust. Tomato (`#ff674d`) drives action, highlights, and engagement. Together ≤15% of any surface. Never both at equal visual weight in the same UI zone — one leads, one supports.

**Use-Secondary-for-Action Rule.** Primary action buttons (CTAs) use `brand-secondary` (`#ff674d`). Navigation sidebar and active states use `brand-primary` (`#02563D`). This preserves hierarchy — green = where you are, tomato = what you do.

- **Forest Green** (`#02563D`): Sidebar bg, active nav states, secondary CTAs, link text, focus rings, progress fills. Rarity = authority.
- **Forest Dark** (`#013E2C`): Hover/pressed of primary. Never default.
- **Forest Mid** (`#3DAB87`): Success-adjacent positive states, gradient end-stops, illustrations.
- **Forest Light** (`#E8F4F0`): Tinted bg for active states, chips, badge fills.
- **Tomato** (`#ff674d`): Primary action buttons, engagement highlights, CTA focus rings.
- **Tomato Dark** (`#e55c44`): Hover/pressed of tomato. Never default.
- **Neutral 50–900**: Green-tinted neutral scale. Never pure gray (`#888888`, `#666666`). Tint creates cohesion; pure gray creates deadness.
- **Semantic**: Success `#16A34A`, Warning `#D97706`, Error `#DC2626`, Info `#2563EB`.

## Typography

**Primary Font:** Noto Sans (Google Fonts — 300, 400, 500, 600, 700, 800 + italic 400)
**Fallback:** `system-ui, -apple-system, sans-serif`

Humanist sans-serif with excellent multilingual coverage — critical for HRMS serving global workforces. Warm apertures, clean structure, readable at 12px label size through 60px display. Single family; weight contrast (800 display vs 400 body) creates hierarchy without font pairing.

Scale spans `display-xl` (60px/800) through `body-xs` (12px/400) with semantic UI tokens for `label`, `caption`, `button`, and `overline`. Button text is always 14px/600. Overline is always uppercase with `letter-spacing: 0.05em`.

**Rules:**
- Body text floor: 16px on mobile. 14px minimum with line-height 1.5.
- Numbers in tables and metrics: `font-variant-numeric: tabular-nums`.
- Headings H1–H3: `text-wrap: balance` to prevent orphan words.
- Overline always uppercase — never as body or heading substitute.

## Layout

4pt base grid. All spacing values are multiples of 4px. Semantic spacing tokens (`inset`, `inline`, `stack`, `gap`) map to the primitive scale.

- **Component padding** → `--space-inset-*`
- **Horizontal gaps between elements** → `--space-inline-*`
- **Vertical stacking between elements** → `--space-stack-*`
- **Grid/flex gaps** → `--space-gap-*`
- **Page section spacing** → `--space-section-*`
- **Sidebar:** 240px expanded, 68px collapsed icon-rail

Never use arbitrary pixel values (13px, 17px, 22px). Every spacing value must map to a token.

## Elevation & Depth

Layered by purpose. Every raised surface carries both `surface` shadow and `1px solid #E2E8ED` border — shadow alone is insufficient definition on white-on-white.

- **None**: Flush table rows, full-bleed images, in-grid list items
- **Surface** (`0px 2px 4px rgba(0,0,0,0.04), 0px 1px 2px rgba(0,0,0,0.06), 0px 0px 1px rgba(0,0,0,0.06)`): Cards, panels, inputs at rest, raised containers
- **Overlay** (`0px 14px 28px rgba(0,0,0,0.08), 0px -6px 12px rgba(0,0,0,0.03), 0px 2px 8px rgba(0,0,0,0.06)`): Dropdowns, popovers, drawers, modals — always paired with `backdrop-filter: blur(6px)`
- **Focus** (`0px 0px 0px 2px #F8FAFB, 0px 0px 0px 4px rgba(2,86,61,0.22)`): Keyboard focus ring — double ring, offset + brand

**Rules:**
- Cards, inputs, and raised containers always carry `surface` shadow. Never flat-by-default.
- Every floating element (dropdown, popover, modal, drawer) uses `overlay` shadow + `backdrop-filter: blur(6px)`. Shadow and blur are a pair — never one without the other.
- Focus ring visible on all backgrounds. Use double-ring (offset + brand) when surface is close to ring color.
- Never override shadow tokens at component level — system-level only.

## Shapes

All interactive elements, containers, and inputs use a stepped corner radius scale. The scale is system-level — changing it proportionally updates the entire interface.

- `xs` (2px): Badges, small chips
- `sm` (4px): Tags, separators
- `md` (6px): Small internal elements
- `lg` (8px): **Buttons** — all variants
- `xl` (12px): **Inputs and fields** — all form controls
- `2xl` (16px): Large cards, modals, drawers
- `full` (9999px): Avatars, toggles, pill chips

Never mix radius steps within a single component unless intentionally flush-edge. Consistent radius across all states (default, hover, focus, disabled).

## Components

Every component ships all 8 states: default, hover, focus, active, disabled, loading, error, success. Anything fewer = incomplete.

**Buttons** — decisive and accessible, clear hierarchy, immediate tactile response.
- Primary (CTA): Tomato fill (`#ff674d`), white text, `rounded-lg` (8px). One per view hierarchy maximum. Never stack two primaries.
- Secondary: Forest Green fill (`#02563D`), white text, `rounded-lg` (8px). Alternative action alongside primary.
- Outline: Transparent + 1px neutral-200 border, neutral-900 text.
- Ghost: Transparent, neutral-600 text. For subtle low-emphasis actions only.
- Danger: Error red (`#DC2626`), white text. Destructive/irreversible actions only.
- Danger Soft: `rgba(217,45,32,0.15)` fill, `#DC2626` text. Lower-emphasis destructive.
- All sizes: sm (32px), md (36px), lg (40px). Font: Noto Sans 600 14px.
- Disabled: `opacity: 0.5` on entire button, `cursor: not-allowed`.

**Inputs / Fields**
- Radius: `rounded-xl` (12px) — all field types.
- Height: 36px default. Shadow: `surface` at rest. Border: 1px neutral-200.
- Focus: border → `#02563D` + shield focus ring `0px 0px 0px 2px #02563D`.
- Error: border → `#DC2626`, error message below field. Label always visible.
- Labels always visible — never placeholder-only.

**Cards / Containers**
- Radius: `rounded-lg` (8px) default, `rounded-xl` (12px) for modals/panels.
- Background: `#FFFFFF`. Shadow: `surface` always — never flat at rest.
- Border: 1px solid `#E2E8ED`. Padding: 16px default, 24px spacious.
- Never nest cards. Use spacing and dividers for hierarchy within a card.

**Sidebar / Navigation**
- Background: Forest Green (`#02563D`), white text. 240px expanded, 68px collapsed.
- Active state: `rgba(255,255,255,0.16)` bg tint + 2px white left-edge indicator.
- `aria-current="page"` on active link.

## Do's and Don'ts

**Do:**
- Use `brand-secondary` (`#ff674d`) for primary action buttons, engagement highlights, CTA focus rings.
- Use `brand-primary` (`#02563D`) for sidebar/nav backgrounds, active nav states, secondary CTAs, link text.
- Use `font-variant-numeric: tabular-nums` on all metric, stat, and table number values.
- Apply `text-wrap: balance` to all headings (H1–H3).
- Design all 8 interactive states before considering any component done.
- Use `aria-current="page"` on active nav links, `aria-label` on all icon-only buttons.
- Use `prefers-reduced-motion` to disable/simplify animations.
- Use 4pt spacing scale (4, 8, 12, 16, 20, 24, 32...). Never arbitrary pixels.
- Show errors inline, near source: "What went wrong, how to fix."
- Apply `surface` shadow + `1px solid neutral-200` border to all raised surfaces.
- Use semantic tokens (`--color-*`, `--typography-*`, `--space-*`) — never primitives directly.

**Don't:**
- Don't use `#02563D` green decoratively — it signals nav/structure. Rarity = authority.
- Don't use `#ff674d` tomato on more than ~10% of any surface — reserve for primary CTAs.
- Don't use gradient text, glassmorphism, neon glows, or dark UI with purple/cyan accents.
- Don't rely on hover-only interactions — touch users can't hover.
- Don't use placeholder text as the only form field label.
- Don't use `outline: none` without replacement. Use `:focus-visible` with the standard focus ring.
- Don't use bounce or elastic easing. Use `cubic-bezier(0.25, 1, 0.5, 1)` for transitions.
- Don't animate UI feedback longer than 300ms. Reserve 350ms+ for entrance only.
- Don't use pure black (`#000`). Use `neutral-900` (`#0F172A`) at darkest.
- Don't override shadow tokens at component level — system-level only.
- Don't hardcode light-mode hex values into dark-mode frames — semantic tokens resolve correctly, hardcoded values produce invisible text.
- Don't assign unique accent colors per HR module — use neutral palette for icons, reserve color for semantic meaning.

## Icons

**Library:** `@gravity-ui/icons` — https://github.com/gravity-ui/icons

**CDN:** `https://unpkg.com/@gravity-ui/icons@2.18.0/svgs/<icon-name>.svg`

**Rules:**
- `fill: currentColor` — never hardcode color on an SVG
- Sizes: 16px default, 14px small, 20px large. Never arbitrary.
- Icon-only buttons must have `aria-label`
- Never mix stroke-based icon sets with gravity-ui

```css
.i     { width: 16px; height: 16px; fill: currentColor; flex-shrink: 0; display: block; }
.i--sm { width: 14px; height: 14px; }
.i--lg { width: 20px; height: 20px; }
```

> Agent: fetch the icon you need from the CDN or browse the repo. Do not invent paths.

---

## Foundation

Token implementations and deep component specs live in:

| Topic | File |
|---|---|
| Colors + semantic mappings | `foundation/foundation-token/color.md` |
| Typography scale + CSS vars | `foundation/foundation-token/typography.md` |
| Spacing scale + semantic tokens | `foundation/foundation-token/spacing.md` |
| Border radius scale | `foundation/foundation-token/radius.md` |
| Shadows, blur, focus rings | `foundation/foundation-token/effects.md` |
| Component orchestrator | `components/SKILL.md` |

**When building UI — load in this order:**
1. This file (`DESIGN.md`) — all token values and design intent
2. `foundation/foundation-token/<topic>.md` — CSS variable definitions for your topic
3. `components/<name>/SKILL.md` — component-specific tokens, state matrix, Figma node IDs
