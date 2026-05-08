---
name: component-modal
description: >
  Builds the modal component and all its size variants.
  Read this skill when asked to build, update, or spec the modal component.
  Available variants: xs, sm, md, lg, cover, full, mobile, mobile-cover.
---

# Modal Component

> Entry point for the modal component family.
> Rule priority: effects > radius > color > typography > spacing.
> Foundation source of truth: `../../../../foundation/foundation-token/`.
> Figma node (main): `14427:4562`
> Header node: `3029:13229`
> Footer node: `3029:13349`

## How to build this component

1. Read `../../../../foundation/foundation-token/color.md` for surface and semantic colors.
2. Read `../../../../foundation/foundation-token/typography.md` for Noto Sans typography.
3. Read `../../../../foundation/foundation-token/spacing.md` for padding, gaps, and button sizing.
4. Read `../../../../foundation/foundation-token/radius.md` for modal corner radii.
5. Read `../../../../foundation/foundation-token/effects.md` for blur, shadows, and rings.
6. Read the variant spec: `variants/{variant}/{variant}.md`

## Available Variants

| Variant | Size | Radius | Padding | Notes |
|---|---|---|---|---|
| xs | 320x248px | 16px | 24px | Smallest desktop |
| sm | 480x228px | 16px | 24px | Compact desktop |
| md | 640x208px | 16px | 24px | Standard desktop |
| lg | 800x208px | 24px | 24px | Large desktop |
| cover | 640x308px | 24px | 24px | Rich header/cover |
| full | 640x246px | 0px | 24px | Full-bleed surface |
| mobile | 393x324px | 24px | 16px | Mobile sheet |
| mobile-cover | 393x324px | 24px | 16px | Mobile cover |

## Source

- Figma file: `g9XgqUp3tqZLGR0unL1QUg`
- Modal frame: `14427:4562`
- Modal header: `3029:13229`
- Modal footer: `3029:13349`
