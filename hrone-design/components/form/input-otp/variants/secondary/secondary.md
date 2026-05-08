---
component: input-otp
variant: secondary
figma-node-id: "12948:29646"
figma-content-hash: "pending-12948-29646"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: input-otp
- variant: secondary
- status: ready
- mode: secondary surface

## Anatomy

- Label
- Description
- Six slot input row
- Separator between slot groups
- Footer resend row

## Props

| Prop | Type | Default |
|---|---|---|
| `state` | `default \| hover \| focus \| filled \| error \| disabled` | `default` |
| `variant` | `secondary` | `secondary` |
| `label` | `string` | `Verify account` |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| slot width | `--otp-slot-width` | `38px` |
| slot height | `--otp-slot-height` | `40px` |
| slot radius | `--otp-slot-radius` | `8px` |
| slot background | `--otp-field-surface-secondary` | `#F1F1F1` |
| slot hover bg | `--default/default-hover` | `#FFFFFF` |
| slot focus bg | `--default/default-hover` / `--otp-field-surface-focus` | white |
| slot border | `--field/border` | transparent |
| error border | `--otp-danger` | `#DC2626` |
| digit text | `--otp-field-fg` | `#18181B` |

## Interaction States

| State | Background | Text | Border | Cursor | Other |
|---|---|---|---|---|---|
| default | `#F1F1F1` | hidden | transparent | default | shadow-field retained |
| hover | `#FFFFFF` | hidden | transparent | pointer | hover surface |
| focus | `#FFFFFF` | caret visible | transparent | text | shield ring |
| filled | `#F1F1F1` | `#18181B` | transparent | default | value visible |
| error | `#F1F1F1` | `#18181B` | `#DC2626` | default | error message |
| disabled | `#F1F1F1` | muted/hidden | transparent | not-allowed | opacity `0.5` |

## Figma Node Map

| Node ID | State |
|---|---|
| `12948:30004` | empty |
| `12948:30010` | hover |
| `12948:30013` | focus |
| `12948:30017` | filled |
| `12948:30020` | error |
| `12948:30007` | disabled |

## Notes

- Secondary swaps the empty/default surface to the gray default token.
- Hover and focus lift the slots to white on the elevated surface.

