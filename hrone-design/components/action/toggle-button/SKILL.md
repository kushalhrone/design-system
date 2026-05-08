---
name: component-toggle-button
description: >
  Builds the ToggleButton component and all its variants.
  Read this skill when asked to build, update, or spec the ToggleButton component.
  Available variants: default, ghost.
---

# ToggleButton Component

## How to build this component

1. Read `foundation/tokens.md` for token resolution
2. Read `foundation/typography.md` for font specs
3. Read the relevant variant file: `variants/{variant-name}/{variant-name}.md`
4. Cross-ref token names → resolve to values from foundation
5. Build the component using the resolved spec

## Available Variants

- [default](variants/default/default.md)
- [ghost](variants/ghost/ghost.md)

## Reference

- HeroUI docs: https://v3.heroui.com/docs/components/toggle-button
- Figma node: 15241:24193 (file: g9XgqUp3tqZLGR0unL1QUg)

## Notes

- Always use token names from foundation, never hardcode hex values
- If a state is marked `undefined`, flag it and ask the designer before building
- If a variant's `## Notes` contains `token-mismatch` or `token-near-miss` entries,
  resolve those with the designer before building
