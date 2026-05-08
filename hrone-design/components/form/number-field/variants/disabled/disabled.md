---
component: number-field
variant: disabled
figma-node-id: "14104:13289"
figma-content-hash: "pending-14104-13289"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: number-field
- variant: disabled
- status: ready
- state: disabled
- label: Amount
- value: 1

## Anatomy

- Label row
- Disabled field row
- Description text

## Props

| Prop | Type | Default |
|---|---|---|
| `state` | `"disabled"` | `"disabled"` |
| `label` | `string` | `"Amount"` |
| `value` | `string` | `"1"` |
| `description` | `string` | `"Description text"` |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| component width | raw | 280px |
| opacity | `disabled-opacity` | 0.5 |
| field height | raw | 36px |
| field radius | `dimensions/radius/rounded-lg` | 8px |
| surface | raw | `#FFFFFF` |

## Interaction States

| State | Background | Border | Shadow / Ring | Text | Other |
|---|---|---|---|---|---|
| disabled | white | transparent | field shadow | muted, reduced opacity | non-interactive |

## Notes

- `token-mismatch: field surface #FFFFFF has no exact foundation alias; using raw value.`
- Disabled reduces opacity on the wrapper rather than changing the field geometry.
