---
component: number-field
variant: filled
figma-node-id: "14104:13093"
figma-content-hash: "pending-14104-13093"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: number-field
- variant: filled
- status: ready
- state: filled
- label: Amount
- value: 10

## Anatomy

- Label row
- Field row with minus, value, divider, and plus controls
- Description text

## Props

| Prop | Type | Default |
|---|---|---|
| `state` | `"filled"` | `"filled"` |
| `label` | `string` | `"Amount"` |
| `value` | `string` | `"10"` |
| `description` | `string` | `"Description text"` |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| component width | raw | 280px |
| field height | raw | 36px |
| field radius | `dimensions/radius/rounded-lg` | 8px |
| value size | `dimensions/font/text-sm` | 14px |
| value weight | `font-regular` | 400 |
| surface | raw | `#FFFFFF` |
| value color | `field/foreground` | `#18181B` |

## Interaction States

| State | Background | Border | Shadow / Ring | Text | Other |
|---|---|---|---|---|---|
| filled | white | transparent | field shadow | foreground value text | numeric value displayed |

## Notes

- `token-mismatch: field surface #FFFFFF has no exact foundation alias; using raw value.`
- The value is regular-weight even when the field is populated.
- Filled state swaps the placeholder text for the explicit numeric value.
