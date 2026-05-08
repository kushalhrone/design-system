---
component: calendar
variant: future
figma-node-id: 19806:14162
figma-content-hash: b7c3d2e1f4a5
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: calendar
- variant: future
- status: ready

## Props

| Prop | Type | Default |
|---|---|---|
| month | string | "January" |
| year | string | "2026" |
| showTime | boolean | false |
| showIndicator | boolean | true |

## Design Tokens

Same structural tokens as `present` variant — see `present/present.md §Design Tokens`.

| Property | Token Name | Value |
|---|---|---|
| container-width | dimensions/spacing/64 | 256px |
| day-cell-size | dimensions/spacing/9 | 36px |
| row-gap | dimensions/spacing/0.5 | 2px |
| font-size | dimensions/font/text-sm | 14px |
| font-weight | 500 | 500 |
| line-height | dimensions/leading/text-sm | 20px |

## Difference from `present`

| Aspect | present | future |
|---|---|---|
| today marker | One day has `--accent/accent` text color | No day has today marker |
| Navigation | Prev arrow visible | Prev arrow may be disabled if at earliest allowed month |
| Default day text | `--foreground/foreground` | `--foreground/foreground` |

## Interaction States

Identical to `present` — see `present/present.md §Interaction States`.

## Anatomy

Same as `present` — see `present/present.md §Anatomy`.

## Figma Node Map

| Node ID | Element |
|---|---|
| `19806:14162` | Calendar — type=future |
| `2734:28467` | CalendarPopover — type=future |

## Notes

- `future` type is structurally identical to `present`; the only semantic difference is that no day is marked as "today"
- Navigation label text color: `--foreground/foreground` (#18181b) — same as present
- No token mismatches beyond those logged in `present/present.md`
