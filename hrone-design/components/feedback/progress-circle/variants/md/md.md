---
component: progress-circle
variant: md
figma-node-id: "21326:80434"
figma-content-hash: "pending-21326-80434"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: progress-circle
- variant: md
- status: ready
- size: md
- showLabel: true

## Anatomy

- Circle progress glyph
- Optional label row

## Props

| Prop | Type | Default |
|---|---|---|
| `showLabel` | `boolean` | `true` |
| `size` | `"md"` | `"md"` |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| component width | raw | 188px |
| circle diameter | raw | 28px |
| label gap | `dimensions/spacing/1` | 4px |
| label padding-right | `dimensions/spacing/2` | 8px |
| label size | `dimensions/font/text-sm` | 14px |
| label weight | `font-medium` | 500 |
| label line-height | `dimensions/leading/text-sm` | 20px |
| label color | `color-fg` | `#0F172A` |
| track background | raw | `#F1F1F1` |

## Notes

- `token-mismatch: track background #F1F1F1 has no exact foundation alias; using raw value from Figma.`
- The `md` variant is the default implementation target.
