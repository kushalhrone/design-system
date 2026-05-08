---
component: input-otp
variant: primary
figma-node-id: "2698:25441"
figma-content-hash: "pending-2698-25441"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: input-otp
- variant: primary
- status: ready
- mode: primary surface

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
| `variant` | `primary` | `primary` |
| `label` | `string` | `Verify account` |
| `description` | `string` | `We&apos;ve sent a code to a****@gmail.com` |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| slot width | `--otp-slot-width` | `38px` |
| slot height | `--otp-slot-height` | `40px` |
| slot radius | `--otp-slot-radius` | `8px` |
| slot background | `--otp-field-surface` | `#FFFFFF` |
| slot focus bg | `--otp-field-surface-focus` | `#FFFFFF` |
| slot hover bg | `--otp-field-surface-hover` | `rgba(249,249,249,0.92)` |
| slot border | `--field/border` | transparent |
| slot shadow | `--otp-field-shadow` | field shadow stack |
| digit text | `--otp-field-fg` | `#18181B` |
| separator color | `--otp-muted` | `#71717A` |
| error border | `--otp-danger` | `#DC2626` |

## Interaction States

| State | Background | Text | Border | Cursor | Other |
|---|---|---|---|---|---|
| default | `#FFFFFF` | hidden | transparent | default | shadow-field |
| hover | `#F9F9F9` | hidden | transparent | pointer | hover surface |
| focus | `#FFFFFF` | caret visible | transparent | text | shield ring |
| filled | `#FFFFFF` | `#18181B` | transparent | default | value visible |
| error | `#FFFFFF` | `#18181B` | `#DC2626` | default | error message in danger color |
| disabled | `#FFFFFF` | muted/hidden | transparent | not-allowed | opacity `0.5` |

## Figma Node Map

| Node ID | State |
|---|---|
| `2698:25300` | default |
| `2698:25301` | hover |
| `2698:25302` | focus |
| `2698:25303` | filled |
| `2698:25304` | error |
| `2698:25305` | disabled |

## Notes

- Primary uses the white field surface and the inset highlight shadow.
- Focus state shows a single active caret and the shield ring.
- The separator is a 6px by 2px muted dash between slot groups.

