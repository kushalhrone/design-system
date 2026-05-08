---
component: date-picker
variant: closed
figma-node-id: "2740:9205"
figma-content-hash: "pending-2740-9205"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: date-picker
- variant: closed
- status: ready
- mode: field only

## Anatomy

- Label
- Date field input
- Calendar icon suffix

## Props

| Prop | Type | Default |
|---|---|---|
| `state` | `closed` | `closed` |
| `label` | `string` | `Date` |
| `placeholder` | `string` | `mm / dd / yyyy` |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| width | `--datepicker-width` | `288px` |
| field height | `--field-height` | `36px` |
| field radius | `--field-radius` | `12px` |
| field shadow | `--datepicker-field-shadow` | field shadow stack |
| field background | `--datepicker-surface` | `#FFFFFF` |
| field text | `--datepicker-muted` | `#71717A` |
| suffix icon | system icon | calendar |

## Interaction States

| State | Background | Text | Border | Cursor | Other |
|---|---|---|---|---|---|
| default | `#FFFFFF` | `#71717A` | transparent | pointer | shadow-field |
| hover | `#FFFFFF` | `#71717A` | transparent | pointer | hover state not differentiated in this capture |
| focus | `#FFFFFF` | `#71717A` | transparent | pointer | shield ring on field |
| disabled | `#FFFFFF` | `#71717A` | transparent | not-allowed | opacity `0.5` |

## Figma Node Map

| Node ID | State |
|---|---|
| `2740:9205` | closed |

## Notes

- The closed state is the resting field with a calendar icon suffix.
- The input placeholder is `mm / dd / yyyy`.

