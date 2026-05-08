---
name: component-toolbar
description: >
  Builds the Toolbar component and all its variants.
  Read this skill when asked to build, update, or spec the Toolbar component.
  Available variants: horizontal-detached, horizontal-attached, vertical-detached, vertical-attached.
---

# Toolbar Component

Docs: https://v3.heroui.com/docs/react/components/toolbar

## How to build this component

1. Read `foundation/foundation-token/color.md` for token resolution
2. Read `foundation/foundation-token/spacing.md` for spacing tokens
3. Read `foundation/foundation-token/radius.md` for border-radius tokens
4. Read `foundation/foundation-token/effects.md` for shadow and blur tokens
5. Read the relevant variant file: `variants/{variant-name}/{variant-name}.md`
6. Cross-ref token names → resolve to values from foundation
7. Build the component using the resolved spec

## Available Variants

- `horizontal-detached` — flat horizontal toolbar, no container or shadow
- `horizontal-attached` — horizontal toolbar in frosted-glass pill container with overlay shadow
- `vertical-detached` — flat vertical toolbar, no container or shadow
- `vertical-attached` — vertical toolbar in frosted-glass pill container with overlay shadow

## Props

| Prop        | Type                   | Default    |
|-------------|------------------------|------------|
| orientation | horizontal \| vertical | horizontal |
| isAttached  | boolean                | false      |
| children    | ReactNode              | null       |

## Sub-Components

| Component        | Figma Node ID  | Docs                                                            |
|------------------|----------------|-----------------------------------------------------------------|
| ToggleButtonGroup| 15251:25661    | https://v3.heroui.com/docs/components/toggle-button-group      |
| ToggleButton     | 15241:24193    | https://v3.heroui.com/docs/components/toggle-button            |
| Separator        | 2402:4638      | https://v3.heroui.com/docs/react/components/separator          |
| ButtonGroup      | 14216:12721    | https://v3.heroui.com/docs/react/components/button-group       |
| Button           | 2218:6175      | https://v3.heroui.com/docs/react/components/button             |

## Open Token Issues (resolve with designer before building)

- `--default/default` (#f1f1f1) is near-miss to `--neutral-100` (#F1F5F7). Difference: 2 hex points. Do not auto-snap.
- Shadow on attached variants is near-miss to `shadow-overlay`. Blur radii differ. Do not auto-snap.
- ButtonGroup radius in horizontal-attached = 17px (token-mismatch, no foundation match). Nearest: `--dimensions/radius/rounded-2_5xl` (20px).
- ButtonGroup radius vertical-detached (12px / `rounded-xl`) vs vertical-attached (8px / `rounded-lg`) — likely intentional but confirm with designer.

## Notes

- Always use token names from foundation, never hardcode hex values
- Interaction states (hover/active/focus/disabled) live on ToggleButton and Button, not on Toolbar container
- Attached variants require `position: relative` on container for backdrop-blur overlay div
- If a variant's `## Notes` contains `token-mismatch` or `token-near-miss` entries, resolve with designer before building
