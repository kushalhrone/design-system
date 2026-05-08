---
component: date-picker
variant: open
figma-node-id: "2740:9202"
figma-content-hash: "pending-2740-9202"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: date-picker
- variant: open
- status: ready
- mode: field plus calendar popover

## Anatomy

- Label
- Focused date field input
- Calendar popover
  - Month navigation
  - Weekday header
  - Day grid

## Props

| Prop | Type | Default |
|---|---|---|
| `state` | `open` | `open` |
| `label` | `string` | `Date` |
| `placeholder` | `string` | `mm / dd / yyyy` |
| `month` | `string` | `December` |
| `year` | `string` | `2025` |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| width | `--datepicker-width` | `288px` |
| field height | `--field-height` | `36px` |
| field radius | `--field-radius` | `12px` |
| field focus ring | `--datepicker-focus-ring` | single ring |
| popover radius | `--datepicker-popover-radius` | `8px` |
| popover shadow | `--datepicker-popover-shadow` | overlay shadow stack |
| popover padding x | `--datepicker-popover-padding-x` | `16px` |
| popover padding bottom | `--datepicker-popover-padding-bottom` | `16px` |

## Interaction States

| State | Background | Text | Border | Cursor | Other |
|---|---|---|---|---|---|
| default | `#FFFFFF` | `#71717A` | transparent | pointer | date field + popover |
| focus | `#FFFFFF` | `#71717A` | transparent | pointer | shield ring on field |
| selected day | `#02563D` | `#FFFFFF` | none | pointer | day indicator dot |
| out day | transparent | `#71717A` | none | default | opacity `0.5` |

## Figma Node Map

| Node ID | State |
|---|---|
| `2740:9202` | open |

## Notes

- The open state keeps the field focused and mounts the calendar popover directly below it.
- Calendar popover width is 288px; inner calendar content is 256px wide.

