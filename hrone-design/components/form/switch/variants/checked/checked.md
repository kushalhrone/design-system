---
component: switch
variant: checked
figma-node-id: "2489:9558"
figma-content-hash: "2489-9558-checked"
foundation-ref: "../../../../../foundation/foundation-token"
---

## Meta

- component: switch
- variant: checked
- status: ready
- isActive: on | state: default

## Anatomy

- Root: flex row, gap 16px, items-center
- Track: 40×20px pill, green bg (`--color-secondary`), padding 2px
- Thumb: 20×16px pill, `--color-surface` bg, `shadow-switch`, thumb at **right** (items-end)
- Thumb icon: 10×10px circle-dashed SVG, white/light
- Label: 14px/20px 500, `#18181b`, nowrap

## Props

| Prop | Type | Default |
|---|---|---|
| `isActive` | `true` | — |
| `state` | `"default"` | — |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` |
| `label` | `string` | `"Switch label"` |
| `showLabel` | `boolean` | `true` |
| `showIcon` | `boolean` | `true` |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| track bg | `--color-secondary` | `#02563d` |
| track w | `--dimensions/spacing/10` | `40px` |
| track h | `--dimensions/spacing/5` | `20px` |
| track radius | `--dimensions/radius/rounded-3xl` | `24px` |
| track padding | `--dimensions/spacing/0.5` | `2px` |
| thumb bg | `--color-surface` | `#FFFFFF` |
| thumb w | — | `20px` |
| thumb radius | `--dimensions/radius/rounded-2xl` | `16px` |
| thumb shadow | `shadow-switch` | `0px 0px 0.5px rgba(0,0,0,0.3), 0px 2px 5px rgba(0,0,0,0.06), 0px 0px 2.5px rgba(0,0,0,0.02)` |
| thumb icon size | — | `10px` |
| label font | Body sm medium | 14px/20px 500 |
| label color | near-miss: `--color-fg` | `#18181b` |
| label gap | `--dimensions/spacing/4` | `16px` |

## Interaction States

| State | Visual |
|---|---|
| checked (on) | Green track, thumb right, `shadow-switch` on thumb |

## Notes

- track on bg `--color-secondary` `#02563d` — exact match.
- thumb on bg `--accent/accent-foreground` `#FFFFFF` = `--color-surface` — exact match.
- `shadow-switch` differs from `shadow-field`: stronger single-layer drop, no inner shadow.
- Track uses `items-end` (flex-direction: column) to position thumb at right edge.
- `role="switch" aria-checked="true"` on track root.
