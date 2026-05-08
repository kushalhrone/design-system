# Breadcrumbs Component Token Spec

> Machine-readable token file. All values reference foundation tokens from `/foundation/foundation-token/`.
> Rule priority: effects > radius > color > typography > spacing.

---

## Meta

```yaml
component: Breadcrumbs
figma_file: ykoHMdavBzSeeplUfco3HZ
figma_nodes:
  - id: "14155:5487"
    name: Breadcrumbs
    type: COMPONENT_SET
    variants:
      - "level=2"   # Home > Current
      - "level=3"   # Home > Section > Current
      - "level=4"   # Home > Section > Sub > Current
  - id: "17676:93544"
    name: Information (doc page)
    type: FRAME
    purpose: documentation

structure:
  - BreadcrumbItem (Link)     # repeated per level, all except last are navigable
  - Separator (chevron-right) # between items, 12x12px icon
  - BreadcrumbItem (Current)  # last item — non-interactive, visually distinct

behavior:
  - All items except last: muted color, underlined, navigable
  - Last item (current): fg color, underlined, non-interactive
  - All items in single horizontal row
  - Long paths: collapse or truncate gracefully
```

---

## Structure Tokens

```css
--breadcrumbs-gap:            var(--space-1);      /* 4px — between item+separator pairs */
--breadcrumbs-item-padding-x: var(--space-0.5);   /* 2px — horizontal padding on link */
--breadcrumbs-item-gap:       var(--space-0.5);   /* 2px — gap inside link (icon+label) */
--breadcrumbs-separator-size: 12px;               /* chevron icon width & height */
--breadcrumbs-height:         auto;               /* inline, no fixed height */
```

---

## Typography Tokens

```css
/* All breadcrumb text — both muted and current */
--breadcrumbs-font-family:    var(--font-body);       /* Noto Sans */
--breadcrumbs-font-size:      var(--text-sm);         /* 0.875rem / 14px */
--breadcrumbs-font-weight:    var(--font-medium);     /* 500 */
--breadcrumbs-line-height:    var(--leading-normal);  /* 1.5 → 20px at 14px */
--breadcrumbs-letter-spacing: var(--tracking-normal); /* 0 */
```

---

## Color Tokens

### Link (non-current items)

```css
--breadcrumbs-link-color:           var(--color-fg-muted);   /* #64748B neutral-500 */
--breadcrumbs-link-underline-color: var(--color-border);     /* #E2E8ED neutral-200 */
--breadcrumbs-link-decoration:      underline;
--breadcrumbs-link-decoration-skip: ink;
```

### Current item (last)

```css
--breadcrumbs-current-color:           var(--color-fg);       /* #0F172A neutral-900 */
--breadcrumbs-current-underline-color: var(--color-border);   /* #E2E8ED neutral-200 */
--breadcrumbs-current-decoration:      underline;
--breadcrumbs-current-pointer:         default;
```

### Separator

```css
--breadcrumbs-separator-color: var(--color-fg-muted);         /* #64748B neutral-500 */
```

---

## State Tokens

### Hover (links only, not current)

```css
--breadcrumbs-link-hover-color:     var(--color-fg);          /* #0F172A neutral-900 */
--breadcrumbs-link-hover-underline: var(--color-fg-muted);    /* #64748B neutral-500 */
```

### Focus

```css
/* Focus ring applied to each link item */
--breadcrumbs-focus-shadow:
  0px 0px 0px 2px var(--color-bg),              /* offset ring */
  0px 0px 0px 4px var(--color-focus-ring);      /* brand ring #02563D4D */
--breadcrumbs-focus-radius: var(--radius-sm);   /* 4px */
```

---

## Dark Mode Overrides

```css
--breadcrumbs-link-color:           var(--color-fg-muted);    /* dark-neutral-500 #94A3B5 */
--breadcrumbs-link-underline-color: var(--color-border);      /* dark-neutral-200 #334155 */
--breadcrumbs-current-color:        var(--color-fg);          /* dark-neutral-900 #F8FAFB */
--breadcrumbs-separator-color:      var(--color-fg-muted);    /* dark-neutral-500 #94A3B5 */
--color-focus-ring:                 #3DAB8766;
```

---

## Item State Matrix

### Light Mode

| item type | color | resolved | underline | interactive |
|---|---|---|---|---|
| link | `--color-fg-muted` | `#64748B` | `--color-border` `#E2E8ED` | yes |
| link:hover | `--color-fg` | `#0F172A` | `--color-fg-muted` `#64748B` | yes |
| link:focus | `--color-fg-muted` + ring | `#64748B` | `--color-border` | yes |
| current | `--color-fg` | `#0F172A` | `--color-border` `#E2E8ED` | no |

### Dark Mode

| item type | color | resolved | underline | interactive |
|---|---|---|---|---|
| link | `--color-fg-muted` | `#94A3B5` | `--color-border` `#334155` | yes |
| link:hover | `--color-fg` | `#F8FAFB` | `--color-fg-muted` `#94A3B5` | yes |
| link:focus | `--color-fg-muted` + ring | `#94A3B5` | `--color-border` | yes |
| current | `--color-fg` | `#F8FAFB` | `--color-border` `#334155` | no |

---

## Token → Foundation Map

| Token | Foundation Source | Value (light) | Value (dark) |
|---|---|---|---|
| `--color-fg` | color.md §5 | `#0F172A` | `#F8FAFB` |
| `--color-fg-muted` | color.md §5 | `#64748B` | `#94A3B5` |
| `--color-border` | color.md §5 | `#E2E8ED` | `#334155` |
| `--color-bg` | color.md §5 | `#F8FAFB` | `#0F172A` |
| `--color-focus-ring` | color.md §8 | `#02563D4D` | `#3DAB8766` |
| `--font-body` | typography.md §1 | `Noto Sans` | `Noto Sans` |
| `--text-sm` | typography.md §2 | `0.875rem / 14px` | same |
| `--font-medium` | typography.md §3 | `500` | same |
| `--leading-normal` | typography.md §4 | `1.5` (20px @ 14px) | same |
| `--tracking-normal` | typography.md §5 | `0` | same |
| `--space-1` | spacing.md §2 | `4px` | same |
| `--space-0.5` | spacing.md §2 | `2px` | same |
| `--radius-sm` | radius.md | `4px` | same |

---

## Figma Fixes Log

| Node | Issue | Was | Fixed to |
|---|---|---|---|
| `14155:5487`, `17676:93544` | Muted link color (zinc) | `#71717A` | `#64748B` neutral-500 |
| `14155:5487`, `17676:93544` | Fg/current color (zinc) | `#18181B` | `#0F172A` neutral-900 |
| `17676:93544` | Dark muted (zinc) | `#A1A1AA` | `#94A3B5` neutral-400 |
| `17676:93544` | Muted alt (zinc) | `#52525B` | `#64748B` neutral-500 |
| `17676:93544` | Tag font | `Inter Medium` | `Noto Sans Medium` |
| `17676:93544` | Doc bg (zinc) | `#FAFAFA` | `#F8FAFB` neutral-50 |
| `17676:93544` | Chip bg (zinc) | `#EBEBEC` | `#E2E8ED` neutral-200 |
| `17676:93544` | Dark chip bg (zinc) | `#27272A` | `#1E293B` neutral-800 |
| `17676:93544` | Dark frame bg (zinc) | `#060607` | `#0F172A` neutral-950 |
| `17684:12779` | **Dark mode text invisible** — light `--color-fg` applied to dark frame | `#0F172A` | `#F8FAFB` dark-neutral-900 |
| `17684:12779` | **Dark mode muted invisible** — light `--color-fg-muted` applied to dark frame | `#64748B` | `#94A3B5` dark-neutral-500 |

---

## Rules

- Font always `Noto Sans Medium 14px` — `--font-body` `--font-medium` `--text-sm`
- Never use `Inter` — all text in this component uses `--font-body`
- Muted links = `--color-fg-muted` only — never hardcode zinc values
- Current item: same underline style as links, color change only (`--color-fg`)
- Separator icon inherits `--color-fg-muted` — it is not a border element
- Focus ring uses double-ring pattern (`offset + brand`) with `--radius-sm` per item
- Do not disable `text-decoration` — underline is a required accessibility indicator
- Set `text-decoration-skip-ink` to preserve underline legibility through descenders
- Separator is always `chevron-right` at `12x12px` — not a slash or pipe character
- **Dark mode frames must use dark-resolved values** — `--color-fg` = `#F8FAFB`, `--color-fg-muted` = `#94A3B5` on dark bg. Applying light resolved values (`#0F172A`, `#64748B`) to dark frames makes text invisible. See `color.md §7` resolved table.
