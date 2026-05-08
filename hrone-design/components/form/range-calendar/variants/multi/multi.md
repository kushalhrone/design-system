---
component: range-calendar
variant: multi
figma-node-id: "19890:13064"
figma-content-hash: "19890-13064-r1"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: range-calendar
- variant: multi
- status: ready
- variant-kind: two-month range calendar (standalone + popover)
- showRangeFill: true
- showSelectionSummary: false (standalone) | true (popover)
- Popover node: `14695:6564`

## Anatomy

```
RangeCalendar (items-start, justify-center, overflow: clip, relative)
├── range overlay — right end (absolute, rounded-br/tr 8px, accent-soft)
├── range overlay — left end (absolute, rounded-bl/tl 8px, accent-soft)
└── Calendar (flex-col, items-start)
    └── Months container (flex-row, gap 12px)
        ├── Month 1 — December 2025 (flex-col, items-start)
        │   ├── Nav: [← left arrow] [centered: month year] (no right arrow, no chevron)
        │   ├── Weekday header row (py 8px)
        │   └── Day grid (5 rows, gap 2px, py 8px)
        └── Month 2 — January 2026 (flex-col, items-start)
            ├── Nav: [centered: month year] [→ right arrow] (no left arrow, no chevron)
            ├── Weekday header row (py 8px)
            └── Day grid (5 rows, gap 2px, py 8px)
```

Popover wraps the above with ButtonGroup + time rows + tags + summary (same as filled variant).

## Props

| Prop | Type | Default |
|---|---|---|
| `variant` | `"multi"` | `"multi"` |
| `showSelectionSummary` | `boolean` | `false` (standalone) / `true` (popover) |
| `showTime` | `boolean` | `false` (standalone) / `true` (popover) |
| `showTopContent` | `boolean` | `false` (standalone) / `true` (popover) |
| `showBottomContent` | `boolean` | `false` (standalone) / `true` (popover) |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| months gap | `dimensions/spacing/3` | 12px |
| each month width | raw | ~252px (fills available) |
| day cell size | raw | 36×36px |
| day border-radius | `dimensions/radius/rounded-3xl` | 24px |
| nav min-height | raw | 56px |
| nav padding-y | `dimensions/spacing/4` | 16px |
| nav arrow size | raw | 24×24px |
| nav arrow icon | raw | 16×16px |
| nav arrow padding | `dimensions/spacing/1` | 4px |
| nav arrow radius | `dimensions/radius/rounded-md` | 6px |
| row gap | `dimensions/spacing/0.5` | 2px |
| grid padding-y | `dimensions/spacing/2` | 8px |
| range fill color | `accent/accent-soft` | `rgba(2,86,61,0.15)` |
| range fill radius | `dimensions/radius/rounded-lg` | 8px |
| selected day bg | `accent/accent` | `#02563d` |
| selected day text | `accent/accent-foreground` | `#FFFFFF` |

## Navigation Layout (Critical — differs from empty/filled)

Multi variant uses **per-month navigation**, not a single shared header.

| Month position | Left arrow | Month+Year label | Right arrow | Expand chevron |
|---|---|---|---|---|
| Left (1st) | ✓ visible | centered, font-sm w500 | hidden | hidden |
| Right (2nd) | hidden | centered, font-sm w500 | ✓ visible | hidden |

Month+year label in multi: `justify-center` flex, gap 6px. Label is a clickable `<button>` element.

## Range Fill Overlays

Two absolute overlay divs positioned relative to each calendar month container:

- **Start-of-range end** (right edge of start-day row): `rounded-br rounded-tr` (8px)
  - Multi inset: `inset: 59.46% 51.16% 28.38% 31.78%` (relative to left month)
- **End-of-range start** (left edge of end-day row): `rounded-bl rounded-tl` (8px)
  - Multi inset: `inset: 72.3% 61.63% 15.54% 0` (relative to left month)
- Color: `accent/accent-soft` = `rgba(2,86,61,0.15)`

## Popover Composition (multi popover — node 14695:6564)

Same structure as filled popover with differences:
- Container: `items-start justify-center` (not `items-center`)
- No fixed width on popover container
- Time container: `width: 256px`
- Tag list: `width: 303px`, includes extra tag "14 days"
- Default tags: "Exact dates" (active), "1 day", "2 days", "7 days", "14 days"
- Selection summary: same format as filled — `"Selected: 16 Dec, 2025 - 24 Dec, 2025"`

## CalendarDay States

| State | Background | Text | Opacity | Cursor |
|---|---|---|---|---|
| default | none | `foreground/foreground` (#18181b) | 1 | default |
| selected | `accent/accent` (#02563d) | `accent/accent-foreground` (#FFFFFF) | 1 | pointer |
| out | none | `foreground/muted` (#71717a) | 0.5 | default |

## Notes

- `token-near-miss: foreground/foreground #18181b — closest --color-fg (#0F172A). Using raw Figma value.`
- `token-near-miss: foreground/muted #71717a — closest --color-fg-muted (#64748B). Using raw Figma value.`
- **Multi nav is per-month, not shared.** Left month has only ← arrow; right month has only → arrow. Prior scaffold incorrectly described a shared nav header.
- Months gap is 12px (`spacing/3`), not 24px as previously noted.
- The range fill overlays in multi use different inset percentages than the single-month variants.
- In popover, the multi time container is constrained to `width: 256px` to align with the left month.
- The Figma popover multi outer width is determined by content (two months + gap + padding).
