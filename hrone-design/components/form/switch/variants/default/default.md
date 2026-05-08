---
component: switch
variant: default
figma-node-id: "2489:9557"
figma-content-hash: "2489-9557-default"
foundation-ref: "../../../../../foundation/foundation-token"
---

## Meta

- component: switch
- variant: default
- status: ready
- isActive: off | state: default

## Anatomy

- Root: flex row, gap 16px, items-center
- Track: 40×20px pill, gray bg (`#f1f1f1`), padding 2px
- Thumb: 20×16px pill, white bg, `shadow-field`, thumb at **left** (items-start)
- Thumb icon: 10×10px circle-dashed SVG, gray
- Label: 14px/20px 500, `#18181b`, nowrap

## Props

| Prop | Type | Default |
|---|---|---|
| `isActive` | `false` | — |
| `state` | `"default"` | — |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` |
| `label` | `string` | `"Switch label"` |
| `showLabel` | `boolean` | `true` |
| `showIcon` | `boolean` | `true` |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| track bg | near-miss: `--neutral-100` | `#f1f1f1` |
| track w | `--dimensions/spacing/10` | `40px` |
| track h | `--dimensions/spacing/5` | `20px` |
| track radius | `--dimensions/radius/rounded-3xl` | `24px` |
| track padding | `--dimensions/spacing/0.5` | `2px` |
| thumb bg | near-miss: `--color-surface` | `#ffffff` |
| thumb w | — | `20px` |
| thumb radius | `--dimensions/radius/rounded-2xl` | `16px` |
| thumb shadow | `shadow-field` | 3-layer drop + inner rgba(255,255,255,0.1) |
| thumb icon size | — | `10px` |
| label font | Body sm medium | 14px/20px 500 |
| label color | near-miss: `--color-fg` | `#18181b` |
| label gap | `--dimensions/spacing/4` | `16px` |

## Interaction States

| State | Visual |
|---|---|
| default (off) | Gray track, thumb left, `cursor: default` |

## Notes

- token-near-miss: track bg `#f1f1f1` ≈ `--neutral-100` (`#F1F5F7`). Confirm with designer.
- token-near-miss: thumb bg `#ffffff` ≈ `--color-surface` (`#FFFFFF`). Confirm.
- token-near-miss: label `#18181b` ≈ `--color-fg` (`#0F172A`). Confirm.
- Track uses `items-start` (flex-direction: column) to position thumb at left edge.
- `role="switch" aria-checked="false"` on track root.
