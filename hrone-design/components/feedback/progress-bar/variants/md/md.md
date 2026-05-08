---
component: progress-bar
variant: md
figma-node-id: "21302:78112"
figma-content-hash: "pending-21302-78112"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: progress-bar
- variant: md
- status: ready
- size: md
- showLabel: true
- value: 60%

## Anatomy

- Optional label row
- `_ProgressTrack` pill bar

## Props

| Prop | Type | Default |
|---|---|---|
| `showLabel` | `boolean` | `true` |
| `size` | `"md"` | `"md"` |
| `value` | `string` | `"60%"` |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| progress bar width | raw | 211px |
| label gap | `dimensions/spacing/1` | 4px |
| track width | raw | 211px |
| track height | raw | 8px |
| track radius | `dimensions/radius/rounded-xl` | 12px |
| label size | `dimensions/font/text-sm` | 14px |
| label weight | `font-medium` | 500 |
| value size | `dimensions/font/text-sm` | 14px |
| value weight | `font-medium` | 500 |
| label color | `color-fg` | `#0F172A` |
| value color | `color-fg` | `#0F172A` |
| track background | raw | `#F1F1F1` |

## Notes

- `token-mismatch: track background #F1F1F1 has no exact foundation alias; using raw value from Figma.`
- The `md` variant matches the base Figma component set and is the default implementation target.
