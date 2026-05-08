---
component: number-field
variant: hover
figma-node-id: "14104:12897"
figma-content-hash: "pending-14104-12897"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: number-field
- variant: hover
- status: ready
- state: hover
- label: Amount
- value: 1

## Anatomy

- Label row
- Field row with minus, value, divider, and plus controls
- Description text

## Props

| Prop | Type | Default |
|---|---|---|
| `state` | `"hover"` | `"hover"` |
| `label` | `string` | `"Amount"` |
| `value` | `string` | `"1"` |
| `description` | `string` | `"Description text"` |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| component width | raw | 280px |
| field height | raw | 36px |
| field gap | `dimensions/spacing/1` | 4px |
| field horizontal gap | `dimensions/spacing/3` | 12px |
| field radius | `dimensions/radius/rounded-lg` | 8px |
| label size | `dimensions/font/text-sm` | 14px |
| label weight | `font-medium` | 500 |
| value size | `dimensions/font/text-sm` | 14px |
| value weight | `font-regular` | 400 |
| description size | `dimensions/font/text-xs` | 12px |
| surface | raw | `rgba(249,249,249,0.92)` |
| border | raw | `rgba(193,193,193,0)` |
| shadow | `field/shadow` | layered field shadow |

## Interaction States

| State | Background | Border | Shadow / Ring | Text | Other |
|---|---|---|---|---|---|
| hover | lightly tinted white | transparent | field shadow | muted placeholder/value | hover surface only |

## Notes

- `token-mismatch: hover surface rgba(249,249,249,0.92) has no exact foundation alias; using raw value.`
- `token-mismatch: hover border rgba(193,193,193,0) has no foundation alias; using raw value.`
- Hover changes the field backing only; label and helper text remain unchanged.
