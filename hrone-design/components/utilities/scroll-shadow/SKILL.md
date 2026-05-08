---
name: component-scroll-shadow
description: >
  Builds the scroll-shadow component and all its variants.
  Read this skill when asked to build, update, or spec scroll edge fade/blur overlays.
  Available variants: opacity, blur.
---

# ScrollShadow Component

## How to build this component

1. Read `foundation/foundation-token/color.md` for background token resolution
2. Read `foundation/foundation-token/effects.md` for blur values
3. Read the relevant variant file: `variants/{variant-name}/{variant-name}.md`
4. Cross-ref token names → resolve to values from foundation
5. Build the component using the resolved spec

## Available Variants

| Variant     | File                                        | Figma Node   | Description                                      |
|-------------|---------------------------------------------|--------------|--------------------------------------------------|
| **opacity** | [variants/opacity/opacity.md](./variants/opacity/opacity.md) | `3160:31429` | Solid color masked layer — fades content edge into bg |
| **blur**    | [variants/blur/blur.md](./variants/blur/blur.md)             | `3160:31448` | Frosted-glass masked layer — blurs content edge   |

## Props

| Prop        | Type                | Default     | Notes                                      |
|-------------|---------------------|-------------|--------------------------------------------|
| `type`      | `"opacity" \| "blur"` | `"opacity"` | Selects visual variant                     |
| `inSurface` | `boolean`           | `false`     | Uses surface bg token instead of page bg   |
| `width`     | `number \| string`  | `226px`     | Match to scroll container width (raw)      |
| `height`    | `number \| string`  | `80px`      | Depth of the shadow fade zone (raw)        |

## Shared Mechanism

Both variants are absolute-positioned overlays placed over a scrollable container. A PNG alpha-mask gradient (opaque at edge → transparent inward) is applied via `mask-image` to create the fade effect. The layer should be non-interactive (`pointer-events: none`).

## Known Token Gaps

- `--shadow-scroll`, `--shadow-scroll-on-surface`, `--shadow-scroll-blur`, `--shadow-scroll-blur-on-surface` — component-scoped tokens in Figma, not present in foundation. Resolve to raw values until added to foundation.
- `blur(5px)` in blur variant — near-miss vs `--blur: 6px`. Confirm with designer.
- `--shadow-scroll-on-surface: #ffffff` — near-miss vs `--color-surface: #FFFFFF`. Confirm.
- Default dimensions `226×80px` — raw, no spacing token match.
- Mask PNG assets are ephemeral (Figma CDN, 7-day TTL). Must be embedded (CSS gradient or inline SVG mask) in production.

## Notes

- Always use token names from foundation, never hardcode hex values
- If a state is marked `undefined`, flag it and ask the designer before building
- If a variant's `## Notes` contains `token-mismatch` or `token-near-miss` entries, resolve with designer before building
- Ref: https://v3.heroui.com/docs/react/components/scroll-shadow
