---
name: component-card
description: >
  Builds the Card component and all its variants.
  Read this skill when asked to build, update, or spec the Card component.
  Available variants: basic, basic-full, basic-img, side, item, item-full.
---

# Card Component

## How to build this component

1. Read `foundation/foundation-token/color.md` for color token resolution
2. Read `foundation/foundation-token/typography.md` for font specs
3. Read `foundation/foundation-token/spacing.md` for padding/gap tokens
4. Read `foundation/foundation-token/radius.md` for border-radius tokens
5. Read `foundation/foundation-token/effects.md` for shadow and blur tokens
6. Read the relevant variant file: `variants/{variant-name}/{variant-name}.md`
7. Cross-ref token names → resolve to values from foundation
8. Build the component using the resolved spec

## Available Variants

> Auto-populated from scanning the `variants/` folder.

| Variant      | Figma Node     | Description                                           |
|--------------|----------------|-------------------------------------------------------|
| basic        | 3013:11043     | Text card with icon, header, footer link              |
| basic-full   | 3013:11286     | Full-bleed image card with muted header + CTA button  |
| basic-img    | 3015:11489     | Card with thumbnail image, header, avatar footer      |
| side         | 3013:11086     | Horizontal layout: image left, content + link right   |
| item         | 3013:11192     | Image-dominant small card with label/count footer     |
| item-full    | 3015:11366     | Full-bleed square image card with overlaid CTA footer |

## Sub-components

| Sub-component | Figma Node  | Variants                    |
|---------------|-------------|-----------------------------|
| CardHeader    | 3013:10541  | showTagline, showTitle, showDescription toggles |
| CardFooter    | 3013:11009  | link, cta, support, text    |

## Shared Props

| Prop          | Type                                                         | Used by variants         |
|---------------|--------------------------------------------------------------|--------------------------|
| type          | basic \| side \| item \| basic full \| item full \| basic img | all                    |
| showClose     | boolean (default true)                                       | all                      |
| showFooter    | boolean (default true)                                       | all                      |
| showBlur      | boolean (default true)                                       | all (opacity varies)     |
| showIcon      | boolean (default true)                                       | basic only               |
| icon          | ReactNode \| null                                            | basic only               |

## Design System References
- Component docs: https://v3.heroui.com/docs/react/components/card
- Surface docs: https://v3.heroui.com/docs/react/components/surface
- CloseButton docs: https://v3.heroui.com/docs/react/components/close-button
- Link docs: https://v3.heroui.com/docs/react/components/link
- Button docs: https://v3.heroui.com/docs/react/components/button
- Avatar docs: https://v3.heroui.com/docs/react/components/avatar

## Notes
- Always use token names from foundation, never hardcode hex values
- If a state is marked `undefined`, flag it and ask the designer before building
- If a variant's `## Notes` contains `token-mismatch` or `token-near-miss` entries,
  resolve those with the designer before building
- Foreground color mismatch: Figma uses #18181b (Tailwind Zinc-900), foundation uses #0F172A (Tailwind Gray-900).
  Affects: all variants. Resolve with designer — do not auto-snap.
- Muted text mismatch: Figma uses #71717a (Zinc-500), foundation uses #64748B (Gray-500).
  Affects: all variants. Resolve with designer.
- CloseButton bg mismatch: Figma uses #f1f1f1, foundation nearest is --neutral-100 (#F1F5F7).
  Affects: all variants. Resolve with designer.
- Accent/secondary color naming conflict: Figma variable `accent/accent` resolves to #02563D
  which matches --color-secondary in our system, but the DS Figma mapping table says
  `accent/accent → --color-primary`. Confirm correct semantic mapping with designer.
