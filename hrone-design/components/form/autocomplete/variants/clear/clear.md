---
component: autocomplete
variant: clear
figma-node-id: "18010:6038"
figma-content-hash: "pending-18010-6038"
foundation-ref: "../../../foundation/foundation-token"
---

## Meta

- component: autocomplete
- variant: clear
- status: ready
- mode: icon button primitive

## Anatomy

- Hover target
- X icon

## Props

| Prop | Type | Default |
|---|---|---|
| `state` | `default \| hover` | `default` |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| base size | `14px` | `14px` |
| hover hit target | `24px` | `24px` |
| icon size | `12px` | `12px` |
| hover background | `--autocomplete-chip-bg` | `#F1F1F1` |

## Interaction States

| State | Background | Text | Border | Cursor | Other |
|---|---|---|---|---|---|
| default | transparent | `#18181B` | none | pointer | visible icon only |
| hover | `#F1F1F1` | `#18181B` | none | pointer | 24px soft target |

## Figma Node Map

| Node ID | State |
|---|---|
| `18010:6038` | default |
| `18010:6043` | hover |

## Notes

- The clear control uses a 14px visible icon with a larger 24px hover halo.
- The same xmark asset is used across all autocomplete states.

