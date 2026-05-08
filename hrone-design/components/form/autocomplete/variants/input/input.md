---
component: autocomplete
variant: input
figma-node-id: "14339:37081"
figma-content-hash: "pending-14339-37081"
foundation-ref: "../../../foundation/foundation-token"
---

## Meta

- component: autocomplete
- variant: input
- status: ready
- mode: shared primitive

## Anatomy

- Prefix icon
- Chips or value row
- Clear action
- Suffix chevron

## Props

| Prop | Type | Default |
|---|---|---|
| `variant` | `primary \| secondary` | `primary` |
| `showTags` | `boolean` | `true` |
| `showClear` | `boolean` | `true` |
| `showValue` | `boolean` | `true` |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| primary surface | `--autocomplete-surface` | `#FFFFFF` |
| secondary surface | `--autocomplete-surface-secondary` | `#F1F1F1` |
| field radius | `--autocomplete-field-radius` | `8px` |
| inner radius | `--autocomplete-input-radius` | `12px` |
| placeholder text | `--autocomplete-muted` | `#71717A` |
| field text | `--autocomplete-fg` | `#18181B` |

## Interaction States

| State | Background | Text | Border | Cursor | Other |
|---|---|---|---|---|---|
| primary | `#FFFFFF` | `#71717A` / `#18181B` | transparent | pointer | shadow-field |
| secondary | `#F1F1F1` | `#71717A` / `#18181B` | transparent | pointer | elevated surface |
| focus | `#FFFFFF` | `#18181B` | focus ring | text | active search field |
| disabled | `#FFFFFF` / `#F1F1F1` | muted | transparent | not-allowed | opacity `0.5` |

## Figma Node Map

| Node ID | Variant |
|---|---|
| `14339:37081` | primary |
| `14339:37089` | secondary |

## Notes

- This primitive is reused by the main autocomplete states and the search row inside the dropdown.
- Primary uses the white field surface; secondary swaps to the default gray surface.

