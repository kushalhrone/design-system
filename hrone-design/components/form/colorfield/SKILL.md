---
name: component-colorfield
description: >
  Builds the colorfield component and all its variants.
  Read this skill when asked to build, update, or spec the colorfield component.
  Available variants: colorfield.
---

# Colorfield Component

## How to build this component

1. Read `foundation/foundation-token/color.md` for token resolution
2. Read `foundation/foundation-token/spacing.md` for spacing tokens
3. Read `foundation/foundation-token/radius.md` for border-radius tokens
4. Read `variants/colorfield/colorfield.md` for full state spec
5. Cross-ref token names → resolve to values from foundation
6. Build using resolved spec

## Available Variants

| Variant | Description |
|---|---|
| default | Single close/clear button; 3 interaction states: default · hover · focus |

## Key Constraints

- Fixed size: 24×24px — no size variants
- Border-radius: `--dimensions/radius/rounded-xl` (12px) → circular appearance at 24px
- Icon: `xmark` 16×16px — always centered via 20.31% inset
- Disabled state undefined in Figma — do not implement without designer confirmation
- Focus ring uses 2 shadow layers (offset + ring) — must be implemented as `box-shadow`, not `outline`

## Open Issues (resolve with designer before building)

1. `--default/default` (#f1f1f1) — no foundation token. Assign `--neutral-100` or create new token.
2. Hover/focus bg `#FFFFFF` vs `--neutral-25` (#FFFFFF) — confirm which is correct.
3. Focus ring color: Figma `#02563D` (green) vs foundation `--color-focus-ring` (`rgba(2,86,61,0.22)` orange). Confirm canonical value.

## Notes
- Always use token names from foundation, never hardcode hex values
- Resolve all `token-mismatch` and `token-near-miss` entries in `## Notes` before building
