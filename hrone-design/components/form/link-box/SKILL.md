---
name: component-link-box
description: >
  Builds the link-box component and all its variants.
  Read this skill when asked to build, update, or spec the link-box component.
  Available variants: state-matrix.
---

# Link Box Component

> Entry point for the link-box component family.
> Rule priority: effects > radius > color > typography > spacing.
> Foundation source of truth: `../../../foundation/foundation-token/`.
> Figma node (main): `3172:16382`
> Figma matrix node: `3172:16036`

## How to build this component

1. Read `../../../foundation/foundation-token/color.md` for semantic colors and surfaces.
2. Read `../../../foundation/foundation-token/typography.md` for Noto Sans typography.
3. Read `../../../foundation/foundation-token/spacing.md` for row padding, gap, and icon sizing.
4. Read `../../../foundation/foundation-token/radius.md` for list item and avatar radii.
5. Read `../../../foundation/foundation-token/effects.md` for the focus ring and shadow behavior.
6. Use the relevant variant spec:
   - `variants/state-matrix/state-matrix.md`

## Available Variants

| Variant | Description |
|---|---|
| initial | Neutral styling; title in foreground color; has selected state |
| danger | Red title + red suffix icon; no selected state |

## Source

- Figma file: `g9XgqUp3tqZLGR0unL1QUg`
- ListBox frame: `3172:16382`
- ListBoxItem matrix: `3172:16036`

