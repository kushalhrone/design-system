---
component: number-field
variant: focus
figma-node-id: "14104:12995"
figma-content-hash: "pending-14104-12995"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: number-field
- variant: focus
- status: ready
- state: focus
- label: Amount
- value: 1

## Anatomy

- Label row
- Field row with minus, value, divider, and plus controls
- Description text

## Props

| Prop | Type | Default |
|---|---|---|
| `state` | `"focus"` | `"focus"` |
| `label` | `string` | `"Amount"` |
| `value` | `string` | `"1"` |
| `description` | `string` | `"Description text"` |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| component width | raw | 280px |
| field height | raw | 36px |
| field radius | `dimensions/radius/rounded-lg` | 8px |
| ring width | `ring-offset-width` | 2px |
| label size | `dimensions/font/text-sm` | 14px |
| value size | `dimensions/font/text-sm` | 14px |
| focus ring | `focus-ring` | `#02563D` |
| surface | raw | `#FFFFFF` |

## Interaction States

| State | Background | Border | Shadow / Ring | Text | Other |
|---|---|---|---|---|---|
| focus | white | transparent | 2px shield ring in brand green | foreground / muted mix | active field surface |

## Notes

- `token-mismatch: field surface #FFFFFF has no exact foundation alias; using raw value.`
- The focus ring is a single shield ring with no offset shadow stack.
- The visible value remains regular-weight text in focus.
