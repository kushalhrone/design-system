---
name: component-tooltip
description: >
  Builds the tooltip component and all its variants.
  Read this skill when asked to build, update, or spec the tooltip component.
  Available variants: default, inverse.
---

# Tooltip Component

## How to build this component

1. Read `foundation/foundation-token/color.md` for token resolution
2. Read `foundation/foundation-token/typography.md` for font specs
3. Read `foundation/foundation-token/spacing.md` for padding tokens
4. Read `foundation/foundation-token/radius.md` for border-radius tokens
5. Read `foundation/foundation-token/effects.md` for overlay shadow spec
6. Read the relevant variant file: `variants/{variant-name}/{variant-name}.md`
7. Cross-ref token names → resolve to values from foundation

## Available Variants

- [`default`](variants/default/default.md) — light background (`#FFFFFF`), dark text (`#18181b`)
- [`inverse`](variants/inverse/inverse.md) — dark background (`#18181b`), white text (`#FFFFFF`)

## Props Summary

| Prop          | Type                                                                                                                   | Default    |
|---------------|------------------------------------------------------------------------------------------------------------------------|------------|
| content       | string                                                                                                                 | —          |
| inverse       | boolean                                                                                                                | false      |
| showArrow     | boolean                                                                                                                | true       |
| arrowPosition | `topStart` \| `topCenter` \| `topEnd` \| `rightStart` \| `rightCenter` \| `rightEnd` \| `leftStart` \| `leftCenter` \| `leftEnd` \| `bottomStart` \| `bottomCenter` \| `bottomEnd` | `topStart` |

## Structural Notes

- Container: flex column, `padding: 4px 8px`, `border-radius: 12px`, overlay shadow + backdrop-blur 6px
- Arrow: `10×10px` square, `border-radius: 4px`, rotated `45deg`, absolutely positioned ~6px outside container edge; color = container background
- Parent must have `overflow: visible` for arrow to render outside bounds
- `showArrow=false` → omit arrow element entirely; container unchanged

## Token Mismatches (resolve with designer before building)

- Background colors (`#FFFFFF` / `#18181b`) have no exact foundation token — see Notes in each variant file
- `line-height: 1rem` has no standalone foundation token — use raw value

## Reference

- Figma: https://v3.heroui.com/docs/react/components/tooltip
- Figma node (overview): `2638:7737` in file `g9XgqUp3tqZLGR0unL1QUg`
