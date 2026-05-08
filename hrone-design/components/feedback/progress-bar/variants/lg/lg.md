---
component: progress-bar
variant: lg
figma-node-id: "21302:78117"
figma-content-hash: "pending-21302-78117"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: progress-bar
- variant: lg
- status: ready
- size: lg
- showLabel: true
- value: 60%

## Anatomy

- Optional label row
- `_ProgressTrack` pill bar

## Props

| Prop | Type | Default |
|---|---|---|
| `showLabel` | `boolean` | `true` |
| `size` | `"lg"` | `"lg"` |
| `value` | `string` | `"60%"` |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| progress bar width | raw | 211px |
| label gap | `dimensions/spacing/1` | 4px |
| track width | raw | 211px |
| track height | raw | 12px |
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
- The `lg` variant is visually the most prominent but keeps the same width and typography as the smaller sizes.
