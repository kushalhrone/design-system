---
component: progress-circle
variant: sm
figma-node-id: "21326:80444"
figma-content-hash: "pending-21326-80444"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: progress-circle
- variant: sm
- status: ready
- size: sm
- showLabel: true

## Anatomy

- Circle progress glyph
- Optional label row

## Props

| Prop | Type | Default |
|---|---|---|
| `showLabel` | `boolean` | `true` |
| `size` | `"sm"` | `"sm"` |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| component width | raw | 188px |
| circle diameter | raw | 20px |
| label gap | `dimensions/spacing/1` | 4px |
| label padding-right | `dimensions/spacing/2` | 8px |
| label size | `dimensions/font/text-sm` | 14px |
| label weight | `font-medium` | 500 |
| label line-height | `dimensions/leading/text-sm` | 20px |
| label color | `color-fg` | `#0F172A` |
| track background | raw | `#F1F1F1` |

## Notes

- `token-mismatch: track background #F1F1F1 has no exact foundation alias; using raw value from Figma.`
- The `sm` variant only changes the circle size; label typography stays constant across all sizes.
