---
component: autocomplete
variant: closed
figma-node-id: "14339:37145"
figma-content-hash: "pending-14339-37145"
foundation-ref: "../../../foundation/foundation-token"
---

## Meta

- component: autocomplete
- variant: closed
- status: ready
- mode: collapsed field with tags

## Anatomy

- Label
- Search field with tag chips
- Chevron suffix icon

## Props

| Prop | Type | Default |
|---|---|---|
| `state` | `closed` | `closed` |
| `showTags` | `boolean` | `true` |
| `label` | `string` | `State` |
| `values` | `string[]` | `["Lion", "Cat", "Dog"]` |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| field background | `--autocomplete-surface` | `#FFFFFF` |
| field border | `--field/border` | transparent |
| field radius | `--autocomplete-field-radius` | `8px` |
| field shadow | `--autocomplete-field-shadow` | field shadow stack |
| label color | `--autocomplete-fg` | `#18181B` |
| chip background | `--autocomplete-chip-bg` | `#F1F1F1` |
| chip text | `--autocomplete-chip-fg` | `#18181B` |
| chip radius | `--autocomplete-chip-radius` | `4px` |
| chevron icon | system icon | down chevron |

## Interaction States

| State | Background | Text | Border | Cursor | Other |
|---|---|---|---|---|---|
| default | `#FFFFFF` | `#18181B` | transparent | default | shadow-field |
| hover | `#F9F9F9` | `#18181B` | transparent | pointer | same geometry |
| focus | `#FFFFFF` | `#18181B` | transparent | pointer | 2px shield ring |
| disabled | `#FFFFFF` | `#18181B` | transparent | not-allowed | opacity `0.5` |

## Figma Node Map

| Node ID | State |
|---|---|
| `14339:37145` | closed |

## Notes

- The closed state keeps the chips visible and uses the chevron to imply expansion.
- Exact node JSON hash is not emitted by the MCP; placeholder hash is tied to the node id.

