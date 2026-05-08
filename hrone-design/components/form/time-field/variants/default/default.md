---
component: time-field
variant: default
figma-node-id: "14551:13695"
figma-content-hash: "1455113695de"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: time-field
- variant: default
- status: ready
- state: empty, no interaction

## Props

| Prop | Type | Default |
|---|---|---|
| `state` | `"default"` | `"default"` |
| `showLabel` | `boolean` | `true` |
| `showDescription` | `boolean` | `true` |

## Design Tokens

### Root

| Property | Token | Value |
|---|---|---|
| width | — (raw) | `296px` |
| gap | `--space-1` | `4px` |
| flex-direction | — | column |

### Label

| Property | Token | Value |
|---|---|---|
| font-size | `--text-sm` | `14px` |
| font-weight | `--font-medium` | `500` |
| line-height | `--dimensions/leading/text-sm` | `20px` |
| color | raw (near-miss `--color-fg`) | `#18181b` |

### Input (_DateFieldInput)

| Property | Token | Value |
|---|---|---|
| height | `--space-9` | `36px` |
| padding-left | `--space-3` | `12px` |
| border | `var(--field/border-width, 1px)` | `1px solid rgba(222,222,224,0)` |
| border-radius | `--dimensions/radius/rounded-lg` | `8px` |
| background | raw (near-miss `--neutral-25`) | `white` |
| shadow | `--shadow-field` | 3-layer drop + inner |

### Segments (_CalendarTimeValue)

| Property | Token | Value |
|---|---|---|
| padding-x | `--space-0.5` | `2px` |
| border-radius | `--dimensions/radius/rounded-md` | `6px` |
| segment-gap | `--space-px` | `1px` |
| text (placeholder) | raw (near-miss `--color-fg-muted`) | `#71717a` |
| text font-size | `--text-sm` | `14px` |
| text font-weight (value) | `--font-regular` | `400` |
| separator ":" weight | `--font-medium` | `500` |

### Description

| Property | Token | Value |
|---|---|---|
| font-size | `--text-xs` | `12px` |
| font-weight | `--font-regular` | `400` |
| line-height | `--dimensions/leading/text-xs` | `16px` |
| color | raw (near-miss `--color-fg-muted`) | `#71717a` |

## Segment Content

| Segment | Placeholder | Filled value |
|---|---|---|
| HH | `—` | `12` |
| MM | `—` | `32` |
| SS | `—` | `53` |
| AM/PM | `AM` | `AM` |
| TZ | `EST` | `EST` |

## Notes

- token-near-miss: label + value color Figma `#18181b` vs `--color-fg` `#0F172A`. Using raw. Confirm.
- token-near-miss: placeholder color Figma `#71717a` vs `--color-fg-muted` `#64748B`. Using raw. Confirm.
- token-near-miss: input bg Figma `white` (#ffffff) vs `--neutral-25` (#FFFFFF). Using raw `white`. Confirm.
- Border is transparent by default (`rgba(222,222,224,0)`) — effectively invisible.
- Inner shadow overlay uses `inset 0 0 1px rgba(255,255,255,0.1)` — absolute positioned div, not on input directly.
- AM/PM and TZ segments always show values (not dashes) in all states.
