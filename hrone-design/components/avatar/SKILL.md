---
name: component-avatar
description: >
  Builds the Avatar component and all its variants.
  Read this skill when asked to build, update, or spec the Avatar component.
  Available variants: letter, letter-soft, icon, icon-soft, img, avatar-group.
---

# Avatar Component

## How to build this component

1. Read `foundation/foundation-token/color.md` for token resolution
2. Read `foundation/foundation-token/typography.md` for font specs
3. Read `foundation/foundation-token/radius.md` for border-radius
4. Read `foundation/foundation-token/spacing.md` for size and padding
5. Read the relevant variant file: `variants/{variant-name}/{variant-name}.md`
6. Cross-ref token names → resolve to values from foundation
7. Build the component using the resolved spec

## Available Variants

| Variant | Description |
|---|---|
| `letter` | Solid-fill circular avatar with text initials |
| `letter-soft` | Tinted (15% opacity) circular avatar with text initials |
| `icon` | Solid-fill circular avatar with a person icon |
| `icon-soft` | Tinted (15% opacity) circular avatar with a person icon |
| `img` | Circular avatar displaying a user photo |
| `avatar-group` | Stacked row of overlapping avatars with optional count chip and add button |

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `variant` | `letter \| letterSoft \| icon \| iconSoft \| img` | `letter` | Determines avatar content and background style |
| `type` | `accent \| default \| success \| warning \| danger` | `accent` | Applies semantic colour theme |
| `value` | `string` | `"AG"` | Initials shown in letter/letterSoft variants (max 2 chars) |
| `icon` | `ReactNode \| null` | `null` | Custom icon override for icon/iconSoft variants |
| `src` | `string` | — | Image URL for the img variant |

## Shared Tokens

| Property | Token | Value |
|---|---|---|
| size (width × height) | `--space-9` | `36px` |
| border-radius | `--dimensions/radius/rounded-4xl` | `32px` |
| padding (letter/icon) | `--space-2` | `8px` |
| gap (letter/icon) | `--space-2` | `8px` |
| font-size | `--text-xs` | `12px` |
| line-height | `--text-xs` line height | `16px` |
| font-weight | `--font-medium` | `500` |
| font-family | `--font-body` | `Noto Sans` |

## Notes

- Foundation radius spec lists `rounded-full (9999px)` as the avatar default, but Figma uses `rounded-4xl (32px)`. Resolve with designer before building — tokens are close enough visually at 36px size.
- Always use token names from foundation, never hardcode hex values.
- If a variant's `## Notes` contains `token-mismatch` or `token-near-miss` entries, resolve with the designer before building.
- If a state is marked `undefined`, flag it and ask the designer before building.
- Figma doc: https://v3.heroui.com/docs/react/components/avatar
