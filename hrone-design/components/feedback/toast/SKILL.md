---
name: component-toast
description: >
  Builds the Toast component and all its semantic type variants.
  Read this skill when asked to build, update, or spec the Toast component.
  Available variants: default, accent, success, warning, danger.
---

# Toast Component

## How to build this component

1. Read `../../../foundation/foundation-token/color.md` for semantic colors.
2. Read `../../../foundation/foundation-token/typography.md` for Noto Sans typography.
3. Read `../../../foundation/foundation-token/spacing.md` for spacing values.
4. Read `../../../foundation/foundation-token/radius.md` for `rounded-lg` and `rounded-xl`.
5. Read `../../../foundation/foundation-token/effects.md` for `shadow-overlay` and `blur`.
6. Read the variant spec under `variants/{variant}/{variant}.md`

## Available Variants

| Variant | Purpose |
|---|---|
| default | Low-emphasis, fully neutral |
| accent | Brand-aligned informational, Forest Green button |
| success | Confirmation, completed, approved |
| warning | Pending, incomplete, documents missing |
| danger | Errors, destructive, failed states |

## Source

- Figma file: `g9XgqUp3tqZLGR0unL1QUg`
- `Toast` component frame: `2912:31840`

## Notes

- Always use token names from foundation, never hardcode hex values
- If a state is marked `undefined`, flag it and ask the designer before building
- Toast floats above page content — use `shadow-overlay` + `backdrop-blur`; ensure parent has `overflow: visible` for close button
