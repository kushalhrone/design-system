---
name: component-select
description: >
  Builds the Select component and all its variants.
  Read this skill when asked to build, update, or spec the Select component.
  Available variants: closed, open.
---

# Select Component

## How to build this component

1. Read `foundation/foundation-token/color.md` for token resolution
2. Read `foundation/foundation-token/typography.md` for font specs
3. Read `foundation/foundation-token/radius.md` for border-radius
4. Read `foundation/foundation-token/spacing.md` for padding, gap, sizing
5. Read the relevant variant file: `variants/{variant-name}/{variant-name}.md`
6. Cross-ref token names → resolve to values from foundation
7. Build the component using the resolved spec

## Sub-components

| Sub-component | Description |
|---|---|
| `Label`       | Field label with optional required asterisk (`*`) |
| `TextField`   | The trigger button — shows placeholder or selected value + chevron suffix |
| `Dropdown`    | Overlay panel rendered below the trigger when open |
| `ListBox`     | Scrollable list of selectable items inside the Dropdown |
| `ListItem`    | Individual option row inside a ListBox |

## Available Variants

| Variant  | State           | Description |
|----------|-----------------|-------------|
| `closed` | `state = false` | Trigger field only; chevron points down |
| `open`   | `state = true`  | Trigger field + dropdown panel; chevron points up |

## Props

| Prop          | Type      | Default     | Notes |
|---------------|-----------|-------------|-------|
| `state`       | `boolean` | `false`     | `false` = closed, `true` = open |
| `label`       | `string`  | `"State"`   | Label text above the trigger |
| `required`    | `boolean` | `true`      | Shows red `*` after label |
| `placeholder` | `string`  | `"Select one"` | Placeholder inside the trigger |
| `options`     | `string[]`| —           | List of option strings |
| `width`       | `string`  | `256px`     | Width of both trigger and dropdown |

## Shared Tokens

| Property            | Token                             | Value    |
|---------------------|-----------------------------------|----------|
| component width     | `256px` (fixed)                   | —        |
| outer gap           | `--space-2`                       | `8px`    |
| trigger height      | `--space-9`                       | `36px`   |
| trigger border-radius | `--dimensions/radius/rounded-lg` | `8px`    |
| trigger padding-left | `--space-3`                      | `12px`   |
| trigger padding-y   | `--space-2`                       | `8px`    |
| suffix padding-x    | `--space-3`                       | `12px`   |
| suffix gap          | `--space-1-5`                     | `6px`    |
| chevron icon size   | `--space-4`                       | `16px`   |
| label gap           | `--space-1`                       | `4px`    |
| label font-size     | `--text-sm`                       | `14px`   |
| label font-weight   | `--font-medium`                   | `500`    |
| label line-height   | `--text-sm` leading               | `20px`   |
| required `*` color  | `--error`                         | `#DC2626`|

## Notes

- `token-mismatch`: trigger + suffix + dropdown background `white` (`var(--field/background)` / `var(--overlay)`) has no exact foundation token. Closest semantic: `--color-surface: #FFFFFF`. Recommend adding `--color-field-bg` or `--color-overlay` token.
- `token-mismatch`: label + list item text color `#18181b` (`var(--foreground/foreground)` / `var(--default/default-foreground)`) has no foundation match. Same recurring mismatch across Avatar, AlertDialog.
- `token-mismatch`: placeholder color `#71717a` (`var(--field/placeholder)`) has no foundation match. Same mismatch as description/muted across other components.
- `token-mismatch`: `shadow-field` has no foundation token. Raw: `0px 2px 4px rgba(0,0,0,0.04)`, `0px 1px 2px rgba(0,0,0,0.06)`, `0px 0px 1px rgba(0,0,0,0.06)`. Recommend adding `--shadow-field` to `effects.md`.
- `token-mismatch`: `shadow-overlay` (dropdown) has no foundation token — same multi-layer shadow as AlertDialog. Recommend adding `--shadow-overlay` to `effects.md`.
- Trigger border is technically `1px solid rgba(222,222,224,0)` — a transparent border (the visual border comes from the field shadow). Treat as `border: none` in implementation.
- Hover, focus, selected, and disabled states for list items are not defined in Figma — define before building.
- Figma doc: https://v3.heroui.com/docs/react/components/select
