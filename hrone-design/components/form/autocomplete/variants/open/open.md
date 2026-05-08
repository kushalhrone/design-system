---
component: autocomplete
variant: open
figma-node-id: "14339:37136"
figma-content-hash: "pending-14339-37136"
foundation-ref: "../../../foundation/foundation-token"
---

## Meta

- component: autocomplete
- variant: open
- status: ready
- mode: expanded dropdown

## Anatomy

- Label
- Search field
- Dropdown
- List box items

## Props

| Prop | Type | Default |
|---|---|---|
| `state` | `open` | `open` |
| `showTags` | `boolean` | `true` |
| `showSearch` | `boolean` | `true` |
| `options` | `string[]` | `["Dolphin", "Dog", "Cow", "Lion", "Pig"]` |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| field background | `--autocomplete-surface` | `#FFFFFF` |
| dropdown background | `--overlay` | `#FFFFFF` |
| dropdown shadow | `--autocomplete-dropdown-shadow` | overlay shadow stack |
| dropdown radius | `--autocomplete-field-radius` | `8px` |
| item height | `--dimensions/spacing/9` | `36px` |
| item padding x | `--autocomplete-padding-x` | `12px` |

## Interaction States

| State | Background | Text | Border | Cursor | Other |
|---|---|---|---|---|---|
| default | `#FFFFFF` | `#18181B` | transparent | pointer | dropdown visible |
| hover | `#F9F9F9` | `#18181B` | transparent | pointer | field hover bg |
| focus | `#FFFFFF` | `#18181B` | transparent | pointer | search ring |
| disabled | `#FFFFFF` | `#18181B` | transparent | not-allowed | opacity `0.5` |

## Figma Node Map

| Node ID | State |
|---|---|
| `14339:37136` | open |

## Notes

- Open state includes the search input and the dropdown list under the field.
- The list items use 36px rows with 12px horizontal padding and 6px gaps.

