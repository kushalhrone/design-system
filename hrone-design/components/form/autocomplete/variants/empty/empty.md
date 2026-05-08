---
component: autocomplete
variant: empty
figma-node-id: "14339:37142"
figma-content-hash: "pending-14339-37142"
foundation-ref: "../../../foundation/foundation-token"
---

## Meta

- component: autocomplete
- variant: empty
- status: ready
- mode: open with no results

## Anatomy

- Label
- Search field
- Empty results row

## Props

| Prop | Type | Default |
|---|---|---|
| `state` | `empty` | `empty` |
| `showTags` | `boolean` | `false` |
| `query` | `string` | `T-Rex` |
| `emptyText` | `string` | `No results found` |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| input background | `--autocomplete-surface` | `#FFFFFF` |
| input border | `--focus-ring` | `#02563D` |
| empty text | `--autocomplete-muted` | `#71717A` |
| field radius | `--autocomplete-field-radius` | `8px` |

## Interaction States

| State | Background | Text | Border | Cursor | Other |
|---|---|---|---|---|---|
| default | `#FFFFFF` | `#18181B` | transparent | pointer | empty message visible |
| focus | `#FFFFFF` | `#18181B` | focus ring | text | typed query visible |
| disabled | `#FFFFFF` | `#18181B` | transparent | not-allowed | opacity `0.5` |

## Figma Node Map

| Node ID | State |
|---|---|
| `14339:37142` | empty |

## Notes

- The empty state keeps the search affordance visible and replaces options with a zero-results message.
- The search field still uses the same 36px input row and 8px dropdown radius.

