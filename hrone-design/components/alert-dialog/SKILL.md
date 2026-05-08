---
name: component-alert-dialog
description: >
  Builds the AlertDialog component and all its variants.
  Read this skill when asked to build, update, or spec the AlertDialog component.
  Available variants: desktop, mobile.
---

# AlertDialog Component

## How to build this component

1. Read `foundation/foundation-token/color.md` for token resolution
2. Read `foundation/foundation-token/typography.md` for font specs
3. Read `foundation/foundation-token/radius.md` for border-radius
4. Read `foundation/foundation-token/spacing.md` for padding, gap, sizing
5. Read the relevant variant file: `variants/{variant-name}/{variant-name}.md`
6. Cross-ref token names → resolve to values from foundation
7. Build the component using the resolved spec

## Sub-components

The AlertDialog is composed of three internal pieces:

| Sub-component  | Description |
|---|---|
| `AlertHeader`  | Icon avatar + title. Supports `left` and `center` alignment |
| `AlertBody`    | Description text paragraph |
| `AlertFooter`  | Cancel + Confirm buttons. Supports `horizontal` (desktop) and `vertical` / mobile layouts |

## Available Variants

| Variant   | Sizes covered | Layout |
|-----------|---------------|--------|
| `desktop` | xs (320px), sm (480px), md (640px), lg (800px) | Standard dialog with right-aligned footer |
| `mobile`  | 393px (full-width implied) | Stacked layout, full-width buttons, top-right close button |

## Props

| Prop   | Type                             | Default | Notes |
|--------|----------------------------------|---------|-------|
| `size` | `xs \| sm \| md \| lg \| mobile` | `xs`    | Controls dialog width and layout |

## Shared Tokens

| Property         | Token                             | Value  |
|------------------|-----------------------------------|--------|
| background       | *(see Notes)*                     | `white` |
| border-radius (desktop) | `--dimensions/radius/rounded-xl` | `12px` |
| border-radius (mobile)  | `--dimensions/radius/rounded-3xl` | `24px` |
| section gap      | `--space-5`                       | `20px` |
| shadow           | *(see Notes)*                     | overlay shadow |

## Notes

- `token-mismatch`: dialog background `white` (`var(--overlay)`) has no exact foundation token. Closest is `--color-surface: #FFFFFF` (near-white). Resolve with designer — recommend adding `--color-overlay` semantic token.
- `token-mismatch`: shadow is defined in Figma as `shadow-overlay` effect (multi-layer drop-shadow) with no corresponding foundation token. Raw values: `0px 2px 8px rgba(0,0,0,0.06)`, `0px -6px 12px rgba(0,0,0,0.03)`, `0px 14px 28px rgba(0,0,0,0.08)`. Recommend adding `--shadow-overlay` to `effects.md`.
- Figma doc: https://v3.heroui.com/docs/react/components/alert-dialog
- Always use token names from foundation, never hardcode hex values.
- If any variant `## Notes` contains `token-mismatch` entries, resolve with designer before building.
