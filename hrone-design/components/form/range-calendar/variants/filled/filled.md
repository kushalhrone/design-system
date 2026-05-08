---
component: range-calendar
variant: filled
figma-node-id: "19890:13050"
figma-content-hash: "19890-13050-r1"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: range-calendar
- variant: filled
- status: ready
- variant-kind: standalone calendar with range selection + popover composition
- showRangeFill: true
- showSelectionSummary: true
- Popover node: `14485:7858`

## Anatomy

```
RangeCalendarPopover (288px, rounded-lg 8px, shadow-overlay)
├── backdrop overlay (absolute, bg: var(--overlay, white))
├── Top content container (pt 16px)
│   └── ButtonGroup: Today / Week / Month (h 36px, rounded-lg)
├── RangeCalendar (256px, overflow: clip, relative)
│   ├── range overlay — right end (absolute, rounded-br/tr 8px, accent-soft)
│   ├── range overlay — left end (absolute, rounded-bl/tl 8px, accent-soft)
│   └── Calendar grid (CalendarNavigation + weekday headers + day grid)
├── Time container
│   ├── Start time row (pt 12px, h 48px)
│   └── End time row (pt 12px, h 48px)
├── Bottom content container (pt 16px)
│   └── Tag list (wrap, gap 6px)
└── _CalendarSelectedRange summary (pt 12px)
```

## Props

| Prop | Type | Default |
|---|---|---|
| `variant` | `"filled"` | `"filled"` |
| `showSelectionSummary` | `boolean` | `true` |
| `showTime` | `boolean` | `true` |
| `showTopContent` | `boolean` | `true` |
| `showBottomContent` | `boolean` | `true` |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| popover width | raw | 288px |
| popover radius | `dimensions/radius/rounded-lg` | 8px |
| popover shadow | raw | `0 2px 8px rgba(0,0,0,.06), 0 -6px 12px rgba(0,0,0,.03), 0 14px 28px rgba(0,0,0,.08)` |
| popover padding-x | `dimensions/spacing/4` | 16px |
| popover padding-b | `dimensions/spacing/4` | 16px |
| popover bg | raw | `var(--overlay, white)` with backdrop-blur |
| calendar width (inner) | raw | 256px |
| range fill color | `accent/accent-soft` | `rgba(2,86,61,0.15)` |
| range fill radius | `dimensions/radius/rounded-lg` | 8px |
| selected day bg | `accent/accent` | `#02563d` |
| selected day text | `accent/accent-foreground` | `#FFFFFF` |
| top content pt | `dimensions/spacing/4` | 16px |
| time row pt | `dimensions/spacing/3` | 12px |
| time row height | raw | 48px |
| time value bg | `default/default` | `#f1f1f1` |
| time value min-h | raw | 32px |
| time value px | `dimensions/spacing/3` | 12px |
| time value py | `dimensions/spacing/2` | 8px |
| time value radius | `dimensions/radius/rounded-lg` | 8px |
| time segment gap | `dimensions/spacing/px` | 1px |
| bottom content pt | raw | 16px |
| tag wrap gap | raw | 6px |
| tag px | raw | 6px |
| tag py | raw | 4px |
| tag radius | `dimensions/radius/rounded-xl` | 12px |
| tag font-size | `dimensions/font/text-xs` | 12px |
| tag line-height | `dimensions/leading/text-xs` | 16px |
| summary pt | `dimensions/spacing/3` | 12px |
| summary font-size | `dimensions/font/text-xs` | 12px |
| summary line-height | `dimensions/leading/text-xs` | 16px |

## ButtonGroup Spec

- Height: 36px, border-radius: 8px, overflow: clip
- Each button: flex-1, bg `var(--default/default, #f1f1f1)`, border `1px solid var(--border, #E2E8ED)`
- Text: font-sm (14px), weight 500, color `var(--default/default-foreground, #18181b)`
- Dividers between buttons: 0px wide, 16px tall (hairline)
- Labels: Today / Week / Month

## Time Row Spec

Two rows: Start time + End time.

| Sub-element | Empty state | Filled state |
|---|---|---|
| Hour segment | `—` muted | `10` foreground |
| Colon separator | `:` muted, weight 500 | `:` foreground, weight 500 |
| Minute segment | `—` muted | `30` foreground |
| AM/PM segment | `AM` muted | `AM` foreground |
| Timezone | `EDT` muted | `EDT` muted |

Segment container: px 2px, rounded-md (6px).
Font: text-sm (14px), weight 400 for values, weight 500 for colon.

## Tag List Spec

Default tags (4 items): "Exact dates" (active/selected = accent bg), "1 day", "2 days", "7 days" (inactive = on-surface bg).

| State | Background | Text |
|---|---|---|
| active | `accent/accent` (#02563d) | `accent/accent-foreground` (#FFFFFF) |
| inactive | `surface/on-surface` (#ededed) | `surface/on-surface-foreground` (#18181b) |

## Selection Summary Spec

Format: `Selected: [startDate muted] - [endDate fg]`

```
"Selected:"  → foreground/muted
"16 Dec, 2025"  → foreground/muted
"-"  → foreground/muted
"24 Dec, 2025"  → foreground/foreground (active end date highlighted)
```

Empty state text: `"Select start and end dates"` (all muted, separator opacity 0).

## Interaction States

| State | Background | Border | Cursor |
|---|---|---|---|
| default day | none | none | default |
| hover day | `accent/accent-soft` | none | pointer |
| selected day | `accent/accent` | none | pointer |
| focus | none | focus-ring | pointer |
| disabled | none | none | not-allowed |

## Notes

- `token-near-miss: foreground/foreground #18181b — closest --color-fg (#0F172A). Using raw Figma value.`
- `token-near-miss: foreground/muted #71717a — closest --color-fg-muted (#64748B). Using raw Figma value.`
- `token-near-miss: default/default #f1f1f1 — closest --color-bg-subtle (#F1F5F7). Using raw Figma value.`
- `token-mismatch: surface/on-surface #ededed — no foundation match (closest --neutral-200 #E2E8ED). Using raw Figma value.`
- `token-mismatch: default/default-foreground #18181b — same as foreground/foreground. Using raw Figma value.`
- Popover backdrop: `var(--overlay, white)` with `backdrop-blur`. The blur value is a Figma CSS variable, not a fixed radius.
- Range fill overlays use percentage-based `inset` positioning relative to the calendar grid container.
- The filled variant shows a range of Dec 16–24 as the canonical example.
- ScrollShadow component appears on the tag list container right edge (40×40px, rotated -90°).
