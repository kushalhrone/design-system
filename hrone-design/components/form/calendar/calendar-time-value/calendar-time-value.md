---
component: calendar-time-value
variant: all-states
figma-node-id: 2843:9450
figma-content-hash: a6b7c8d9e0f1
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: CalendarTimeValue (_CalendarTimeValue internal primitive)
- variant: all-states
- status: ready

## Props

| Prop | Type | Default |
|---|---|---|
| state | default \| hover \| filled \| focus \| invalid \| invalid-focus | default |
| value | string | "10" |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| padding-x | dimensions/spacing/0.5 | 2px |
| border-radius | dimensions/radius/rounded-md | 6px |
| font-size | dimensions/font/text-sm | 14px |
| font-weight | 400 (regular) | 400 |
| line-height | dimensions/leading/text-sm | 20px |
| letter-spacing | letter-spacing | 0px |

## Interaction States

| State | Background | Text Color | Cursor | Element |
|---|---|---|---|---|
| default | transparent | foreground/muted (#71717a) | default | `<div>` |
| hover | default/default-hover (white) | foreground/foreground (#18181b) | pointer | `<button>` |
| filled | transparent | foreground/foreground (#18181b) | default | `<div>` |
| focus | accent/accent-soft rgba(2,86,61,0.15) | accent/accent-soft-foreground (#02563d) | pointer | `<button>` |
| invalid | transparent | danger/danger (#DC2626) | default | `<div>` |
| invalid-focus | danger/danger-soft rgba(217,45,32,0.15) | danger/danger-soft-foreground (#DC2626) | pointer | `<button>` |

## CalendarTime Container

The time value cells sit inside `_CalendarTime`:

| Property | Token Name | Value |
|---|---|---|
| container-height | 39px (raw) | 39px |
| container-padding-top | dimensions/spacing/3 | 12px |
| label-font-size | dimensions/font/text-sm | 14px |
| label-font-weight | 500 | 500 |
| label-color | foreground/foreground (#18181b) | #18181b |
| label-right-padding | dimensions/spacing/2 | 8px |
| pill-bg | default/default (#f1f1f1) | #f1f1f1 |
| pill-padding-x | dimensions/spacing/3 | 12px |
| pill-padding-y | dimensions/spacing/2 | 8px |
| pill-min-height | 32px (raw) | 32px |
| pill-radius (popover) | dimensions/radius/rounded-lg | 8px |
| pill-radius (inline) | dimensions/radius/rounded-2xl | 16px |
| pill-gap | dimensions/spacing/px | 1px |
| separator-color | foreground/foreground (#18181b) | #18181b |

## Time Format Structure

The time pill displays: `HH : MM AM/PM TZ`

Each segment is a separate `_CalendarTimeValue` instance:
- Hour (`10`) — state: filled or focused
- `:` separator — plain text, `foreground/foreground`, font-weight 500
- Minutes (`30`) — state: filled/default
- AM/PM — state: filled/default
- Timezone (`EDT`) — state: default (muted color)

## Figma Node Map

| Node ID | State |
|---|---|
| `2843:9470` | default |
| `2843:9453` | hover |
| `2843:9449` | filled |
| `14538:15850` | focus |
| `15181:8447` | invalid |
| `15181:8449` | invalid-focus |
| `2843:9495` | _CalendarTime container |
| `21979:66512` | _CalendarTime sub-component frame |

## Notes

- `default/default-hover` hover bg token resolves to `white` in Figma — this appears to be a highlight state within the `default/default` (#f1f1f1) pill background
- `accent/accent-soft` = rgba(2,86,61,0.15) — transparent green; no exact foundation token; log as token-mismatch
- `danger/danger-soft` = rgba(217,45,32,0.15) — transparent red; no exact foundation token; log as token-mismatch
- Two pill radius variants exist: `rounded-lg` (8px) in CalendarPopover, `rounded-2xl` (16px) in inline CalendarTime. Figma node `2843:9394` uses rounded-2xl; `15293:6671` override uses rounded-lg.
- Timezone text (`EDT`) always uses `foreground/muted` — it is informational, not editable
