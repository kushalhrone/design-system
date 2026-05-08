---
component: calendar-day
variant: all-states
figma-node-id: 2726:27148
figma-content-hash: e1f2a3b4c5d6
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: CalendarDay (_CalendarDay internal primitive)
- variant: all-states
- status: ready

## Props

| Prop | Type | Default |
|---|---|---|
| state | today \| default \| hover \| selected \| out \| disabled \| hidden | today |
| value | string | "1" |
| showIndicator | boolean | true |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| cell-size | dimensions/spacing/9 | 36px |
| border-radius | dimensions/radius/rounded-3xl | 24px |
| padding-y | dimensions/spacing/0.5 | 2px |
| indicator-size | 3px (raw) | 3px |
| indicator-radius | dimensions/radius/rounded-xl | 12px |
| indicator-bottom | 4px (raw) | 4px |
| gap (text to indicator) | dimensions/spacing/2.5 | 10px |
| font-size | dimensions/font/text-sm | 14px |
| font-weight | 500 | 500 |
| line-height | dimensions/leading/text-sm | 20px |
| disabled-opacity | disabled-opacity | 0.5 |

## Interaction States

| State | Background | Text Color | Indicator Color | Cursor | Opacity | Extra |
|---|---|---|---|---|---|---|
| today | transparent | accent/accent (#02563d) | foreground/muted (#71717a) | default | 1 | — |
| default | transparent | foreground/foreground (#18181b) | foreground/muted (#71717a) | default | 1 | — |
| hover | default/default (#f1f1f1) | foreground/foreground (#18181b) | foreground/muted (#71717a) | pointer | 1 | `<button>` element |
| selected | accent/accent (#02563d) | accent/accent-foreground (#FFFFFF) | accent/accent-foreground (#FFFFFF) | pointer | 1 | `<button>` element |
| out | transparent | foreground/muted (#71717a) | foreground/muted (#71717a) | default | 0.5 | out-of-month day |
| disabled | transparent | foreground/muted (#71717a) | foreground/muted (#71717a) | not-allowed | 0.5 | strikethrough line overlay |
| hidden | transparent | foreground/foreground (#18181b) | foreground/muted (#71717a) | default | 0 | holds grid space, invisible |

## Disabled State — Strikethrough

The disabled state has a horizontal line overlay across the cell:

```css
.strikethrough {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 0px; /* rendered as a 1px line via border */
  border-top: 1px solid currentColor;
}
```
- Figma node: `14480:5490` — absolute positioned, `16px` wide, `h-0` with border

## HTML Element Types

| State | Element |
|---|---|
| today | `<div>` |
| default | `<div>` |
| hover | `<button>` |
| selected | `<button>` |
| out | `<div>` |
| disabled | `<div>` |
| hidden | `<div>` |

## Figma Node Map

| Node ID | State |
|---|---|
| `14694:3755` | today |
| `2726:27151` | default |
| `2726:27149` | hover |
| `2726:27179` | selected |
| `2726:27163` | out |
| `14480:5486` | disabled |
| `2726:27165` | hidden |

## Notes

- `today` state uses `--accent/accent` for text — not a background fill; distinguishable from `selected`
- `selected` state uses full circle fill (border-radius 24px on 36px cell = complete circle)
- `out` and `disabled` both use `opacity: 0.5` — same visual weight, different semantics
- `disabled` additionally renders a strikethrough line (16px wide, absolute centered)
- `hidden` is opacity: 0 (not `display:none`) to preserve grid column alignment
- Indicator dot is `showIndicator=false` for most states in the Figma examples — only shown on specific days with events
- token-near-miss: `--foreground/foreground` Figma #18181b vs foundation #0F172A — using Figma value
- token-near-miss: `--foreground/muted` Figma #71717a vs foundation #64748B — using Figma value
