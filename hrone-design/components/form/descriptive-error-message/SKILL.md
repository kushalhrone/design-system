---
name: component-descriptive-error-message
description: >
  Builds the descriptive-error-message component and all its variants.
  Read this skill when asked to build, update, or spec helper/description text or validation error messages below form fields.
  Available variants: description, error-message.
---

# DescriptiveErrorMessage Component

## How to build this component

1. Read `foundation/foundation-token/color.md` for token resolution
2. Read `foundation/foundation-token/typography.md` for font specs
3. Read the relevant variant file: `variants/{variant-name}/{variant-name}.md`

## Available Variants

- `description` — muted helper text (`#71717A`, Body xs)
- `error-message` — red validation text (`--color-error: #DC2626`, Body xs)

## Props
| Prop    | Type                        | Default       |
|---------|-----------------------------|---------------|
| variant | Description \| ErrorMessage | Description   |
| value   | string                      | helper text   |

## Typography
Both variants: `--text-xs` (12px), `--font-regular` (400), 16px line-height, `--tracking-normal`

## Notes
- Always use `--color-error` for error variant, never hardcode `#DC2626`
- Width should be `flex: 1` / `width: 100%` in context — not fixed 289px
- This is a leaf component used inside form field layouts (TextField, Input, etc.)
