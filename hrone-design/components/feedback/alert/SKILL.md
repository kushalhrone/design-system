---
name: component-alert
description: >
  Builds the Alert component from HRON Design System V32026.
  Available variants: accent, default, success, warning, danger, information (stub).
---

# Alert Component

## How to build this component

1. Read `../../../foundation/foundation-token/color.md` for semantic colors.
2. Read `../../../foundation/foundation-token/typography.md` for Noto Sans typography.
3. Read `../../../foundation/foundation-token/spacing.md` for spacing values.
4. Read `../../../foundation/foundation-token/radius.md` for `rounded-lg`.
5. Read `../../../foundation/foundation-token/effects.md` for blur behavior.
6. Pick the variant subfolder from `variants/`:
   - `variants/accent/accent.md`
   - `variants/default/default.md`
   - `variants/success/success.md`
   - `variants/warning/warning.md`
   - `variants/danger/danger.md`
   - `variants/information/information.md` (stub)

## Available Variants

| Variant | Folder |
|---|---|
| accent | `variants/accent/` |
| default | `variants/default/` |
| success | `variants/success/` |
| warning | `variants/warning/` |
| danger | `variants/danger/` |
| information | `variants/information/` (stub) |

## Shared Structure Tokens

| Property | Token | Value |
|---|---|---|
| width | raw | 460px |
| min-height | raw | 64px |
| gap | `--space-2` | 8px |
| padding-x | `--space-4` | 16px |
| padding-y (content) | `--space-3` | 12px |
| icon slot | raw | 20×20px |
| icon size | raw | 16px |
| radius | `--radius-lg` | 8px |
| button height | raw | 36px |
| button padding | `--space-2 --space-4` | 8px 16px |
| button radius | `--radius-lg` | 8px |
| border width | raw | 1px |
| border color | `--color-border` | #E2E8ED |
| backdrop blur | raw | 0px |

## Shared Typography

| Element | Value |
|---|---|
| title | Noto Sans Medium, 14px, 20px line-height |
| description | Noto Sans Regular, 14px, 20px line-height |
| action label | Noto Sans Medium, 14px, 20px line-height |
| letter spacing | 0 |

## Source

- Figma file: `g9XgqUp3tqZLGR0unL1QUg`
- Alert component set: `2852:11850`
- Information doc frame: `17478:54924`
