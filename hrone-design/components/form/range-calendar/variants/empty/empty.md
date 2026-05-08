---
component: range-calendar
variant: empty
figma-node-id: "19890:13076"
figma-content-hash: "19890-13076-r1"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: range-calendar
- variant: empty
- status: ready
- variant-kind: standalone calendar, no selection, no range fill

## Anatomy

```
RangeCalendar (256px wide, overflow: clip, relative)
├── range overlay ×2 (absolute, opacity: 0 — hidden in empty state)
└── Calendar (256px wide)
    ├── CalendarNavigation (min-h 56px)
    │   ├── [month + year + chevron] (flex, gap 6px)
    │   ├── _CalendarDateNav left (24×24, p 4px, rounded-md)
    │   └── _CalendarDateNav right (24×24, p 4px, rounded-md)
    ├── Weekday header row (py 8px, 7 × 36px cells)
    └── Day grid (5–6 rows, gap 2px rows, py 8px)
        └── CalendarDay ×7 per row (36×36, rounded-3xl)
```

## Props

| Prop | Type | Default |
|---|---|---|
| `variant` | `"empty"` | `"empty"` |
| `showSelectionSummary` | `boolean` | `false` |
| `showTime` | `boolean` | `false` |
| `showTopContent` | `boolean` | `false` |
| `showBottomContent` | `boolean` | `false` |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| calendar width | raw | 256px |
| day cell size | raw | 36×36px |
| day border-radius | `dimensions/radius/rounded-3xl` | 24px |
| day padding-y | `dimensions/spacing/0.5` | 2px |
| row gap | `dimensions/spacing/0.5` | 2px |
| grid padding-y | `dimensions/spacing/2` | 8px |
| nav min-height | raw | 56px |
| nav padding-y | `dimensions/spacing/4` | 16px |
| nav month+year gap | `dimensions/spacing/1.5` | 6px |
| nav arrow size | raw | 24×24px |
| nav arrow icon | raw | 16×16px |
| nav arrow padding | `dimensions/spacing/1` | 4px |
| nav arrow radius | `dimensions/radius/rounded-md` | 6px |
| nav chevron size | raw | 12×12px |
| weekday header padding-y | `dimensions/spacing/2` | 8px |
| indicator dot size | raw | 3×3px |
| indicator dot radius | `dimensions/radius/rounded-xl` | 12px |
| indicator dot bottom | raw | 4px |

## CalendarDay States

| State | Background | Text | Opacity | Cursor | Indicator Dot |
|---|---|---|---|---|---|
| default | none | `foreground/foreground` (#18181b) | 1 | default | `foreground/muted` (#71717a) |
| selected | `accent/accent` (#02563d) | `accent/accent-foreground` (#FFFFFF) | 1 | pointer | `accent/accent-foreground` (#FFFFFF) |
| out | none | `foreground/muted` (#71717a) | 0.5 | default | `foreground/muted` (#71717a) |

## Interaction States

| State | Background | Border | Cursor | Other |
|---|---|---|---|---|
| default | none | none | default | — |
| hover | `accent/accent-soft` (rgba 2,86,61,.15) | none | pointer | day only |
| focus | none | focus-ring | pointer | outline-offset 2px |
| disabled | none | none | not-allowed | opacity 0.5 |

## Range Fill (empty state — hidden)

Both overlay elements are present in DOM but `opacity: 0`:
- Right-end overlay: `rounded-br rounded-tr` (8px)
- Left-end overlay: `rounded-bl rounded-tl` (8px)
- Fill color: `accent/accent-soft` = `rgba(2,86,61,0.15)`

## Notes

- `token-near-miss: foreground/foreground #18181b — closest foundation token --color-fg (#0F172A). Using raw Figma value.`
- `token-near-miss: foreground/muted #71717a — closest foundation token --color-fg-muted (#64748B). Using raw Figma value.`
- Figma uses `--foreground/foreground` and `--foreground/muted` which are Figma-local semantic aliases, not direct foundation tokens.
- CalendarDay is the shared subcomponent across all 3 variants.
- Out-of-month days (prev/next month overflow) carry `opacity: 0.5` on the cell wrapper, not the text alone.
