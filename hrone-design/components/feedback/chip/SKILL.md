---
name: component-chip
description: >
  Builds the Chip component and all its variants.
  Available variants: primary, secondary, tertiary, soft.
---

# Chip Component

## How to build this component

1. Read `../../../foundation/foundation-token/color.md` for semantic colors and soft fills.
2. Read `../../../foundation/foundation-token/typography.md` for Noto Sans typography.
3. Read `../../../foundation/foundation-token/spacing.md` for chip padding, gap, and icon sizing.
4. Read `../../../foundation/foundation-token/radius.md` for pill and chip corner radii.
5. Read the variant spec: `variants/{variant}/{variant}.md`

## Available Variants

| Variant | Purpose |
|---|---|
| primary | Solid fill, high-emphasis selected/active chips |
| secondary | Neutral fill, label carries semantic color |
| tertiary | Fully transparent, ghost-style inline tags |
| soft | Transparent surface with soft-tinted base layer |

## Source

- Figma file: `g9XgqUp3tqZLGR0unL1QUg`
- Chip matrix frame: `2489:10527`

## Notes

- Each variant covers all 5 types: accent, default, success, warning, danger
- Three sizes: sm (20px), md (24px), lg (28px)
- No border on any chip variant (unlike Badge which has a border)

