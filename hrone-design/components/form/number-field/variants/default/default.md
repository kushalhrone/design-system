---
component: number-field
variant: default
figma-node-id: "13741:10521"
figma-content-hash: "pending-13741-10521"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: number-field
- variant: default
- status: ready
- state: default
- label: Amount
- value: 1

## Anatomy

- Label row
- Field row with minus, value, divider, and plus controls
- Description text

## Props

| Prop | Type | Default |
|---|---|---|
| `state` | `"default"` | `"default"` |
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
| label line-height | `dimensions/leading/text-sm` | 20px |
| value size | `dimensions/font/text-sm` | 14px |
| value weight | `font-regular` | 400 |
| value line-height | `dimensions/leading/text-sm` | 20px |
| description size | `dimensions/font/text-xs` | 12px |
| description weight | `font-regular` | 400 |
| description line-height | `dimensions/leading/text-xs` | 16px |
| surface | raw | `#FFFFFF` |
| placeholder/value | `foreground/muted` + `field/foreground` | `#71717A` / `#18181B` |
| border | raw | `rgba(222,222,224,0)` |
| shadow | `field/shadow` | layered field shadow |

## Interaction States

| State | Background | Border | Shadow / Ring | Text | Other |
|---|---|---|---|---|---|
| default | white | transparent | field shadow | muted placeholder/value | visible helper text |

## Notes

- `token-mismatch: field surface #FFFFFF has no exact foundation alias; using raw Figma value.`
- `token-mismatch: placeholder gray #71717A is slightly different from foundation muted text #64748B; using raw value.`
- `token-mismatch: value foreground #18181B is slightly different from foundation foreground #0F172A; using raw value.`
- The default state keeps the helper text visible below the field.
