---
component: meter
variant: sm
figma-node-id: "21302:76780"
figma-content-hash: "pending-21302-76780"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: meter
- variant: sm
- status: ready
- size: sm
- showLabel: true
- value: 60%

## Anatomy

- Optional label row
- Meter value row
- `_MeterTrack` pill bar

## Props

| Prop | Type | Default |
|---|---|---|
| `showLabel` | `boolean` | `true` |
| `size` | `"sm"` | `"sm"` |
| `value` | `string` | `"60%"` |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| meter width | raw | 211px |
| label gap | `dimensions/spacing/1` | 4px |
| track width | raw | 211px |
| track height | raw | 4px |
| track radius | `dimensions/radius/rounded-xl` | 12px |
| label size | `dimensions/font/text-sm` | 14px |
| label weight | `font-medium` | 500 |
| label line-height | `dimensions/leading/text-sm` | 20px |
| value size | `dimensions/font/text-sm` | 14px |
| value weight | `font-medium` | 500 |
| value line-height | `dimensions/leading/text-sm` | 20px |
| label color | `color-fg` | `#0F172A` |
| value color | `color-fg` | `#0F172A` |
| track background | raw | `#F1F1F1` |

## Interaction States

| State | Behavior |
|---|---|
| default | compact track, optional label row visible |
| filled | value is rendered as a percentage string |
| disabled | inherited opacity only; no unique Figma state |

## Notes

- `token-mismatch: track background #F1F1F1 has no exact foundation alias; using raw value from Figma.`
- `token-mismatch: track fill default is documented in the shared meter skill as a raw Figma color (#18181B).`
- The `sm` variant only changes track height; label and value typography stay constant across all sizes.
