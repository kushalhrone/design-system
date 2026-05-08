---
component: calendar
variant: multi
figma-node-id: 19806:14002
figma-content-hash: d2e3f4a5b6c7
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: calendar
- variant: multi
- status: ready

## Props

| Prop | Type | Default |
|---|---|---|
| startMonth | string | "December" |
| startYear | string | "2025" |
| endMonth | string | "January" |
| endYear | string | "2026" |
| selectedStart | string | "16 Dec, 2025" |
| selectedEnd | string | "24 Dec, 2025" |
| showSelectedRange | boolean | true |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| total-width | 780px (raw) | 780px |
| single-calendar-width | dimensions/spacing/64 | 256px |
| calendar-gap | 268px (raw, two 256px + gap) | 268px |
| day-cell-size | dimensions/spacing/9 | 36px |
| row-gap | dimensions/spacing/0.5 | 2px |
| font-size | dimensions/font/text-sm | 14px |
| font-weight | 500 | 500 |

## Anatomy

```
Multi-Calendar Layout (780px wide)
  ├─ CalendarNavigation — multi variant
  │   └─ left-arrow (prev) | centered month/year label | right-arrow (next)
  ├─ Left Calendar (256px) — current month
  │   └─ Weekday headers (Sun–Sat)
  │   └─ Day grid (same as present variant)
  ├─ Right Calendar (256px) — next month
  │   └─ Weekday headers (Sun–Sat)
  │   └─ Day grid (same as future variant)
  └─ _CalendarSelectedRange (optional, bottom)
      └─ "Selected: {startDate} - {endDate}"
```

## CalendarNavigation — multi variant

| Property | Value |
|---|---|
| layout | centered month/year, arrows on outer edges |
| month text | centered, `--foreground/foreground` (#18181b) |
| year text | centered, `--foreground/foreground` (#18181b) |
| chevron | none (no expand) |
| left arrow | prev-month |
| right arrow | next-month |
| figma-node-id | `19806:15964` |

## _CalendarSelectedRange

| Property | Token Name | Value |
|---|---|---|
| padding-top | dimensions/spacing/3 | 12px |
| gap | dimensions/spacing/1 | 4px |
| font-size | dimensions/font/text-xs | 12px |
| font-weight | 500 | 500 |
| line-height | dimensions/leading/text-xs | 16px |
| "Selected:" label | foreground/muted | #71717a |
| start-date text | foreground/muted | #71717a |
| separator "-" | foreground/muted | #71717a |
| end-date text | foreground/foreground | #18181b |
| figma-node-id | `21979:66511` | — |

## Interaction States

Day cells: same as `present` variant — see `present/present.md §Interaction States`.
Range selection: days between start and end may show range highlight (not explicitly defined in these Figma nodes — defer to designer).

## Figma Node Map

| Node ID | Element |
|---|---|
| `19806:14002` | Calendar — type=multi |
| `14485:4989` | CalendarPopover — type=multi |
| `19806:15964` | CalendarNavigation — multi variant |
| `14485:4575` | _CalendarSelectedRange |

## Notes

- token-mismatch: `total-width` 780px has no foundation token match — using raw value.
- token-mismatch: `calendar-gap` between two calendars is inferred from Figma layout (944-32-256-32-256-368 = computed gap) — no spacing token found.
- The multi navigation header is centered (no expand chevron, no left title container) — different from single navigation.
- Range highlighting between start/end dates is not defined in these Figma nodes. Check with designer before implementing.
- `_CalendarSelectedRange` shows formatted dates using `text-xs` — smaller than day grid text.
