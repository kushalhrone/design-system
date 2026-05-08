---
name: component-checkbox
description: >
  Builds the checkbox component and all its variants.
  Read this skill when asked to build, update, or spec the checkbox component.
  Available variants: primary, secondary.
---

# Checkbox Component

## How to build this component

1. Read `foundation/foundation-token/color.md` for token resolution
2. Read `foundation/foundation-token/typography.md` for font specs
3. Read `foundation/foundation-token/spacing.md` for gap/padding
4. Read `foundation/foundation-token/radius.md` for border-radius
5. Read the relevant variant file: `variants/{variant-name}/{variant-name}.md`
6. Cross-ref token names → resolve to values from foundation
7. Build the component using the resolved spec

## Available Variants

- `primary` — white bg when unselected, field shadow always present, secondary-500 fill when checked
- `secondary` — gray (#F1F1F1) bg when unselected, no shadow in default/unselected, white bg on hover/focus

## Component Structure

```
CheckboxControl (box only)
  └── props: variant, value, state

Checkbox (composite)
  ├── CheckboxControl
  └── text container
        ├── title (label)
        ├── description
        └── errorMessage (invalid state only)
```

## Props Matrix

- `variant`: `primary` | `secondary`
- `value`: `unselected` | `selected` | `indeterminate`
- `state` (control): `default` | `hover` | `focus` | `error` | `disabled`
- `state` (composite): `default` | `invalid` | `disabled`

## Notes
- Always use token names from foundation, never hardcode hex values
- Focus ring uses `#02563D` (secondary color) — mismatch with `--color-focus-ring` (primary-based). Resolve with designer before building.
- `--foreground/foreground: #18181B` and `--foreground/muted: #71717A` are near-misses to foundation neutrals — check variant Notes before building
- `--default/default: #F1F1F1` (secondary unselected bg) has no foundation token — check secondary variant Notes
- If a variant's `## Notes` contains `token-mismatch` or `token-near-miss`, resolve with designer before building
- Ref: https://v3.heroui.com/docs/react/components/checkbox
