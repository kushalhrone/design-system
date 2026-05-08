---
name: component-label
description: >
  Builds the label component and all its variants.
  Read this skill when asked to build, update, or spec form field labels.
  Available variants: default, required, with-tooltip.
---

# Label Component

## How to build this component

1. Read `foundation/foundation-token/color.md` for token resolution
2. Read `foundation/foundation-token/typography.md` for font specs
3. Read `foundation/foundation-token/spacing.md` for gap/padding
4. Read the relevant variant file: `variants/{variant-name}/{variant-name}.md`

## Available Variants

- `default` — label text only (showRequired=false, showTooltip=false)
- `required` — label + red asterisk (showRequired=true)
- `with-tooltip` — label + asterisk + circle-info icon (showTooltip=true)

## Props
| Prop         | Type    | Default     |
|--------------|---------|-------------|
| value        | string  | "Your name" |
| showRequired | boolean | true        |
| showTooltip  | boolean | false       |

## Typography
`Body sm medium`: `--text-sm` (14px) + `--font-medium` (500) + `--leading-normal` (20px)

## Key Tokens
- Label text: `#18181B` raw (near-miss `--neutral-900`)
- Required `*`: `--color-error: #DC2626`
- Gap: `--space-1` = 4px
- Padding-right: `--space-2` = 8px

## Notes
- Width `148px` in Figma is frame default — use `width: auto` in actual layout
- Required asterisk is same font size/weight as label, NOT superscript
- Ref: https://v3.heroui.com/docs/react/components/label
