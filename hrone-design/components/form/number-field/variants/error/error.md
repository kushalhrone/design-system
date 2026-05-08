---
component: number-field
variant: error
figma-node-id: "14104:13191"
figma-content-hash: "pending-14104-13191"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: number-field
- variant: error
- status: ready
- state: error
- label: Amount
- value: 100

## Anatomy

- Error label row
- Field row with minus, value, divider, and plus controls
- Error message

## Props

| Prop | Type | Default |
|---|---|---|
| `state` | `"error"` | `"error"` |
| `label` | `string` | `"Amount"` |
| `value` | `string` | `"100"` |
| `errorMessage` | `string` | `"Only 10 left in stock"` |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| component width | raw | 280px |
| field height | raw | 36px |
| field radius | `dimensions/radius/rounded-lg` | 8px |
| label size | `dimensions/font/text-sm` | 14px |
| value size | `dimensions/font/text-sm` | 14px |
| error size | `dimensions/font/text-xs` | 12px |
| danger | `danger/danger` | `#DC2626` |
| surface | raw | `#FFFFFF` |

## Interaction States

| State | Background | Border | Shadow / Ring | Text | Other |
|---|---|---|---|---|---|
| error | white | danger red | field shadow | danger label, foreground value | error message visible |

## Notes

- `token-mismatch: field surface #FFFFFF has no exact foundation alias; using raw value.`
- Error state keeps the same base geometry while swapping accent colors to danger.
- The helper copy becomes an error message with danger color.
