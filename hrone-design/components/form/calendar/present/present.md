---
component: calendar
variant: present
figma-node-id: 19806:13945
figma-content-hash: a3f2b1c4d5e6
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: calendar
- variant: present
- status: ready

## Props

| Prop | Type | Default |
|---|---|---|
| month | string | "December" |
| year | string | "2025" |
| showTime | boolean | false |
| showIndicator | boolean | true |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| container-width | dimensions/spacing/64 | 256px |
| day-cell-size | dimensions/spacing/9 | 36px |
| row-gap | dimensions/spacing/0.5 | 2px |
| nav-padding-y | dimensions/spacing/4 | 16px |
| weekday-padding-y | dimensions/spacing/2 | 8px |
| grid-padding-y | dimensions/spacing/2 | 8px |
| day-border-radius | dimensions/radius/rounded-3xl | 24px |
| nav-arrow-size | dimensions/spacing/6 | 24px |
| nav-arrow-radius | dimensions/radius/rounded-md | 6px |
| nav-arrow-padding | dimensions/spacing/1 | 4px |
| indicator-size | 3px | 3px |
| indicator-radius | dimensions/radius/rounded-xl | 12px |
| font-size | dimensions/font/text-sm | 14px |
| font-weight | 500 | 500 |
| line-height | dimensions/leading/text-sm | 20px |
| letter-spacing | letter-spacing | 0px |

## Interaction States

See `calendar-day/calendar-day.md` for full day-cell state matrix.
See `calendar-navigation/calendar-navigation.md` for nav arrow states.

| State | Background | Text | Cursor | Notes |
|---|---|---|---|---|
| default day | transparent | foreground/foreground (#18181b) | default | standard month day |
| today day | transparent | accent/accent (#02563d) | default | accent color text, no fill |
| hover day | default/default (#f1f1f1) | foreground/foreground (#18181b) | pointer | rounded-3xl bg |
| selected day | accent/accent (#02563d) | accent/accent-foreground (#FFFFFF) | pointer | full circle fill |
| out-of-month | transparent | foreground/muted (#71717a) | default | opacity: 0.5 |
| disabled | transparent | foreground/muted (#71717a) | not-allowed | opacity: 0.5, strikethrough line |
| hidden | transparent | foreground/foreground (#18181b) | default | opacity: 0 (holds grid space) |

## Anatomy

```
CalendarNavigation (56px height)
  └─ month label + year label + chevron-right icon (expand)
  └─ prev-arrow button (24px)
  └─ next-arrow button (24px)

Weekday headers row (padding-y: 8px)
  └─ 7 × _CalendarDayWeek (36px width each) — Sun Mon Tue Wed Thu Fri Sat

Day grid (padding-y: 8px, row-gap: 2px)
  └─ 5–6 rows × 7 CalendarDay cells (36×36px)
     └─ day number text (center)
     └─ indicator dot (optional, 3px, absolute bottom: 4px)
```

## Figma Node Map

| Node ID | Element |
|---|---|
| `19806:13945` | Calendar — type=present |
| `2726:27247` | CalendarPopover — type=present |
| `2729:27662` | CalendarNavigation — single, closed |
| `2726:27151` | CalendarDay — state=default |
| `14694:3755` | CalendarDay — state=today |
| `2726:27149` | CalendarDay — state=hover |
| `2726:27179` | CalendarDay — state=selected |
| `2726:27163` | CalendarDay — state=out |
| `14480:5486` | CalendarDay — state=disabled |
| `2726:27165` | CalendarDay — state=hidden |

## Notes

- token-near-miss: `--foreground/foreground` Figma value #18181b; existing calendar.md uses #0F172A (`--neutral-900`). Using Figma value — designer must reconcile.
- token-near-miss: `--foreground/muted` Figma value #71717a; existing calendar.md uses #64748B (`--neutral-500`). Using Figma value — designer must reconcile.
- Font family: Figma shows `Noto Sans`; production font token is `--font`. Resolve via typography.md.
- The `present` type is visually identical to `future` except the today-state day uses `--accent/accent` color text to mark the current date.
- Navigation chevron icon (12px) indicates expand-to-year-picker on click.
