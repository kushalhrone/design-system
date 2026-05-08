---
name: component-dropdown
description: >
  Builds the Dropdown component and all its variants.
  Read this skill when asked to build, update, or spec the Dropdown component.
  Available variants: container, item-default, item-hover, item-selected, item-focus,
  item-disabled, item-danger, item-danger-hover, item-danger-focus, item-danger-disabled.
---

# Dropdown Component

## How to build this component

1. Read `../../../../foundation/foundation-token/color.md` for color token resolution
2. Read `../../../../foundation/foundation-token/spacing.md` for spacing tokens
3. Read `../../../../foundation/foundation-token/radius.md` for border-radius tokens
4. Read `../../../../foundation/foundation-token/effects.md` for shadow and focus ring specs
5. Read the relevant variant file: `variants/{variant-name}/{variant-name}.md`
6. Cross-ref token names → resolve to values from foundation
7. Build the component using the resolved spec

## Component Structure

The Dropdown is composed of two sub-components:

### 1. Dropdown (container)
- Wrapper shell with overlay shadow, blur, and group labels
- Contains one or more `ListBox` groups separated by a `Separator`
- Spec: `variants/container/container.md`

### 2. DropdownItem
- Individual interactive row inside the container
- Has two axes: **type** (`initial` | `danger`) × **state** (`default` | `hover` | `selected` | `focus` | `disabled`)
- Danger type only supports: default, hover, focus, disabled (no selected)

## Available Variants

> Auto-populated from scanning `variants/` folder.

| Variant              | Type    | State    | Figma Node  |
|----------------------|---------|----------|-------------|
| container            | —       | —        | 2405:4479   |
| item-default         | initial | default  | 2399:4413   |
| item-hover           | initial | hover    | 2401:4427   |
| item-selected        | initial | selected | 2416:5270   |
| item-focus           | initial | focus    | 2686:20342  |
| item-disabled        | initial | disabled | 2686:20781  |
| item-danger          | danger  | default  | 2401:4526   |
| item-danger-hover    | danger  | hover    | 2401:4532   |
| item-danger-focus    | danger  | focus    | 2686:20348  |
| item-danger-disabled | danger  | disabled | 2686:20787  |

## Key Design Decisions

- All item states share identical layout/sizing — only background, text color, and shadow (focus ring) change
- Disabled state uses `opacity: 0.5` on the entire item — no per-property color overrides
- Focus ring: `initial` type uses secondary green `#02563D`; `danger` type uses `#B42318`
- Group headers use `--color-fg-muted` text at `text-xs medium` (12px/500)
- Container uses `shadow-overlay` from `effects.md` — do not apply surface shadow

## Outstanding Token Mismatches (Resolve with Designer)

| Token | Figma Raw | Closest Foundation | Gap |
|---|---|---|---|
| Title text | `#18181b` | `--color-fg` = `#0F172A` | ~7 hex pts |
| Desc text / group label | `#71717a` | `--color-fg-muted` = `#64748B` | ~7 hex pts |
| Hover/focus/selected bg | `#f1f1f1` | `--color-bg-subtle` = `#F1F5F7` | ~2 hex pts |
| Overlay bg | `#FFFFFF` | `--color-surface` = `#FFFFFF` | 3 hex pts |
| Danger focus ring | `#B42318` | `--error` = `#DC2626` (different role) | — |

## Notes
- Always use token names from foundation, never hardcode hex values once designer confirms
- If a state is marked `undefined`, flag it and ask the designer before building
- Figma documentation reference: https://v3.heroui.com/docs/react/components/dropdown
- ListBox sub-component reference: https://v3.heroui.com/docs/react/components/listbox
