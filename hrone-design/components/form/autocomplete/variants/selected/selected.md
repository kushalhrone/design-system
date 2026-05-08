---
component: autocomplete
variant: selected
figma-node-id: "14339:37139"
figma-content-hash: "pending-14339-37139"
foundation-ref: "../../../foundation/foundation-token"
---

## Meta

- component: autocomplete
- variant: selected
- status: ready
- mode: selected tags with checkmarks

## Anatomy

- Label
- Search field with chips
- Clear action
- Dropdown list with selected indicators

## Props

| Prop | Type | Default |
|---|---|---|
| `state` | `selected` | `selected` |
| `showTags` | `boolean` | `true` |
| `values` | `string[]` | `["Lion", "Cat", "Dog", "Cow", "Pig"]` |
| `showClear` | `boolean` | `true` |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| field background | `--autocomplete-surface` | `#FFFFFF` |
| chip background | `--autocomplete-chip-bg` | `#F1F1F1` |
| dropdown background | `--overlay` | `#FFFFFF` |
| selected checkmark | icon | done |
| clear hit area | `24px` target | rounded 3xl hover blob |

## Interaction States

| State | Background | Text | Border | Cursor | Other |
|---|---|---|---|---|---|
| default | `#FFFFFF` | `#18181B` | transparent | pointer | clear action visible |
| hover | `#F9F9F9` | `#18181B` | transparent | pointer | dropdown remains open |
| focus | `#FFFFFF` | `#18181B` | focus ring | pointer | shield ring |
| disabled | `#FFFFFF` | `#18181B` | transparent | not-allowed | opacity `0.5` |

## Figma Node Map

| Node ID | State |
|---|---|
| `14339:37139` | selected |

## Notes

- The selected state adds a clear icon in the field and done icons in the list.
- The dropdown content is still the same height grid, with selected rows showing a checkmark suffix.

