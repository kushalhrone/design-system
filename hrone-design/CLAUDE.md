# HRone Design System — Agent Protocol

You are building UI for the HRone Next design system. This file governs how you access design context. Follow it exactly — do not invent tokens, colors, or spacing values.

---

## Load Protocol

**Strict 3-read maximum per task. Follow exactly.**

```
Read 1 — DESIGN.md (tokens, intent — already loaded if session started from root)
Read 2 — REGISTRY.md → find Entry Point path for needed component
Read 3 — That Entry Point SKILL.md — this is enough to generate

Only read a variant file if the user explicitly asks for a specific interaction state.
Only read foundation/foundation-token/ if a CSS variable is missing from DESIGN.md quick reference.
Never read more than 5 files total per task.
```

**Never explore directories. Never use find/ls. REGISTRY.md has every path — use it.**
If a component isn't in REGISTRY.md, ask the user. Do not search.

---

## Authority Chain

When token values conflict between files:

```
DESIGN.md  >  foundation/foundation-token/*.md  >  components/**/SKILL.md
```

Never invent a value. If a token is not in these files, ask.

---

## File Map

| What you need | Where to look |
|---|---|
| All token values (colors, type, spacing, radius) | `DESIGN.md` quick reference (this file) — read first |
| Find a component by intent | `REGISTRY.md` — one lookup, get exact path |
| Full component spec | Entry Point SKILL.md from REGISTRY.md |
| Specific variant tokens | Variant Path from REGISTRY.md — only if user asks |
| CSS variable definitions | `foundation/foundation-token/<topic>.md` — only if token missing above |

---

## Quick Token Reference

Never hardcode these — use the CSS variable.

### Colors
| Role | CSS Variable | Value |
|---|---|---|
| Primary CTA button bg | `--color-brand-secondary` | `#ff674d` |
| Primary CTA button hover | `--color-brand-secondary-dark` | `#e55c44` |
| Nav / sidebar bg | `--color-brand-primary` | `#02563D` |
| Nav hover | `--color-brand-primary-dark` | `#013E2C` |
| Page canvas | `--color-bg` | `#F8FAFB` |
| Card / surface bg | `--color-surface` | `#FFFFFF` |
| Default border | `--color-border` | `#E2E8ED` |
| Primary body text | `--color-fg` | `#0F172A` |
| Muted / helper text | `--color-fg-muted` | `#64748B` |
| Placeholder / disabled text | `--color-fg-subtle` | `#94A3B5` |
| Error | `--color-error` | `#DC2626` |
| Success | `--color-success` | `#16A34A` |
| Warning | `--color-warning` | `#D97706` |
| Focus ring | `--color-focus-ring` | `rgba(2,86,61,0.22)` |

### Typography
| Role | Token | Size / Weight |
|---|---|---|
| Page title | `--typography-h1` | 30px / 700 |
| Section header | `--typography-h2` | 24px / 600 |
| Card title | `--typography-h3` | 20px / 600 |
| Body default | `--typography-body-md` | 16px / 400 |
| Small body | `--typography-body-sm` | 14px / 400 |
| Form labels | `--typography-label` | 14px / 500 |
| Button text | `--typography-button` | 14px / 600 |
| Caption / helper | `--typography-caption` | 12px / 400 |

Font family: `Noto Sans, system-ui, sans-serif` — always. Never Inter, never DM Sans.

### Radius
| Component | Token | Value |
|---|---|---|
| Buttons (all) | `--radius-lg` | 8px |
| Inputs / fields | `--radius-xl` | 12px |
| Cards | `--radius-lg` – `--radius-xl` | 8px – 12px |
| Modals / drawers | `--radius-xl` – `--radius-2xl` | 12px – 16px |
| Avatars / pills | `--radius-full` | 9999px |

### Shadows
| Surface type | Shadow |
|---|---|
| Cards, inputs, raised elements | `surface` — see `foundation/foundation-token/effects.md` |
| Dropdowns, modals, drawers | `overlay` + `backdrop-filter: blur(6px)` — always paired |
| Focus ring (buttons) | double-ring: `0 0 0 2px #F8FAFB, 0 0 0 4px rgba(2,86,61,0.22)` |
| Focus ring (inputs) | shield: `0 0 0 2px #02563D` |

---

## Button Variant Map

| Variant | Fill | Text | When |
|---|---|---|---|
| primary | `#ff674d` tomato | white | Main CTA — one per view max |
| secondary | `#02563D` green | white | Alternative action alongside primary |
| outline | transparent + neutral border | `#0F172A` | Emphasis without fill |
| ghost | transparent | `#475569` | Low-visibility subtle action |
| danger | `#DC2626` red | white | Destructive / irreversible only |
| danger-soft | `rgba(217,45,32,0.15)` | `#DC2626` | Lower-emphasis destructive |

---

## Icons — gravity-ui/icons

**Always use `@gravity-ui/icons`.** Never draw custom SVG paths. Never use any other icon set.

- Repo: https://github.com/gravity-ui/icons
- CDN: `https://unpkg.com/@gravity-ui/icons@2.18.0/svgs/<icon-name>.svg`
- `fill: currentColor` always. Icon-only buttons need `aria-label`.
- Fetch the icon you need from the repo/CDN when building. Do not guess paths.

---

## Hard Rules

- Never use `#000` — use `--color-fg` (`#0F172A`) at darkest
- Never use pure gray (`#888`, `#666`) — use green-tinted neutral scale
- Never stack two primary buttons in the same view
- Never use placeholder text as the only form field label — labels must always be visible
- Never `outline: none` — replace with `:focus-visible` + system focus ring
- Never override shadow tokens at component level — system-level only
- Never hardcode hex values in component styles — always use CSS variables
- Never use DM Sans or Inter — Noto Sans only
- Never use arbitrary spacing (13px, 17px, 22px) — 4pt grid only (4, 8, 12, 16, 20, 24, 32...)
- Never build fewer than 8 states: default, hover, focus, active, disabled, loading, error, success

---

## Spacing Rules

Use semantic tokens — never raw `--space-*` directly in components.

| Use case | Token |
|---|---|
| Component internal padding | `--space-inset-{xs\|sm\|md\|lg\|xl}` |
| Horizontal gap between elements | `--space-inline-{xs\|sm\|md\|lg\|xl}` |
| Vertical stacking | `--space-stack-{xs\|sm\|md\|lg\|xl}` |
| Grid / flex gap | `--space-gap-{xs\|sm\|md\|lg\|xl}` |

Full scale: `foundation/foundation-token/spacing.md`

---

## Dark Mode

Use semantic tokens always — they resolve correctly in both modes.
Never conditionally apply hardcoded hex in dark contexts — invisible text guaranteed.

```css
/* correct */
color: var(--color-fg);

/* wrong — invisible on dark bg */
color: #0F172A;
```

---

## Accessibility Checklist

Before marking any component done:
- [ ] All icon-only buttons have `aria-label`
- [ ] Active nav items have `aria-current="page"`
- [ ] Focus ring visible on all backgrounds
- [ ] No `outline: none` without `:focus-visible` replacement
- [ ] Form fields have visible labels (not placeholder-only)
- [ ] `prefers-reduced-motion` disables/simplifies animations
- [ ] Numbers in tables use `font-variant-numeric: tabular-nums`
