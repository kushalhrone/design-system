---
name: component-text-area
description: >
  Builds the text-area component and all its variants.
  Read this skill when asked to build, update, or spec multi-line text input fields.
  Available variants: default.
---

# TextArea Component

## How to build this component

1. Read `foundation/foundation-token/color.md` for token resolution
2. Read `foundation/foundation-token/effects.md` for shadow + focus ring specs
3. Read `foundation/foundation-token/typography.md` for font specs
4. Read `foundation/foundation-token/spacing.md` for gap/padding tokens
5. Read `foundation/foundation-token/radius.md` for radius tokens
6. Read the relevant variant file: `variants/default/default.md`
7. Cross-ref token names → resolve to values from foundation
8. Build using resolved spec

## Available Variants

| Variant     | File                                          | Figma Node    | Description                  |
|-------------|-----------------------------------------------|---------------|------------------------------|
| **default** | [variants/default/default.md](./variants/default/default.md) | `13675:12619` | All 6 interaction states     |

## States (via `state` prop)

| State         | Visual change from default                              |
|---------------|---------------------------------------------------------|
| `placeholder` | Default. Shadow = halved field shadow. Placeholder text color. |
| `hover`       | Bg = semi-transparent `rgba(249,249,249,0.92)`. Shadow = `--shadow-field` (full). |
| `focus`       | No shadow. Focus ring = `0 0 0 2px --color-secondary (#02563D)`. |
| `filled`      | Text color = `#18181B` (filled fg). Same shadow as placeholder. |
| `error`       | Label + border + description = `--color-error`. Same shadow as default. |
| `disabled`    | Entire wrapper `opacity: 0.5`. Pointer-events none. |

## Key Token Gaps (resolve with designer)

| Token | Figma value | Foundation | Delta |
|---|---|---|---|
| label/text color | `#18181B` | `--color-fg: #0F172A` | Zinc vs Gray family |
| placeholder color | `#71717A` | `--color-fg-muted: #64748B` | near-miss |
| input background | `#FFFFFF` | `--color-surface: #FFFFFF` | 3 hex pts |
| hover bg | `rgba(249,249,249,0.92)` | none | no foundation match |
| default shadow | `0 2px 2px / 1px 1px / 0 0.5px` | `--shadow-field: 0 2px 4px / 1px 2px / 0 1px` | halved blur |

## Shared Sub-components

- `Label` — reuses `components/form/label` (text-sm medium, `#18181B` default / `--color-error` in error)
- `DescriptionErrorMessage` — reuses `components/form/descriptive-error-message` (text-xs regular)
- Resize indicator — 10×10px bottom-right corner, two 0.7px diagonal lines at 45°

## Rules

- Always use token names from foundation, never hardcode hex values
- Token gaps above must be resolved with designer before production build
- Focus ring is `--shadow-focus-ring-shield` (2px, `--color-secondary`) — NOT the primary focus ring
- Hover shadow = `--shadow-field` exact match; all other states use halved-blur variant (raw)
- `backdrop-filter: blur(0px)` in light mode = no visible blur effect
- Ref: https://v3.heroui.com/docs/react/components/text-area
