---
name: component-toggle-button-group
description: >
  Builds the toggle-button-group component and all its variants.
  Read this skill when asked to build, update, or spec the toggle-button-group component.
  Available variants: attached-horizontal, attached-vertical, detached-horizontal, detached-vertical.
---

# Toggle Button Group Component

## How to build this component

1. Read `foundation/foundation-token/color.md` for token resolution
2. Read `foundation/foundation-token/spacing.md` for spacing tokens
3. Read `foundation/foundation-token/radius.md` for border-radius tokens
4. Read `foundation/foundation-token/typography.md` for font specs
5. Read the relevant variant file: `variants/{variant-name}/{variant-name}.md`
6. Cross-ref token names → resolve to values from foundation
7. Build the component using the resolved spec

## Available Variants

- `variants/attached-horizontal/attached-horizontal.md` — isAttached=true, horizontal orientation, hug + fill width
- `variants/attached-vertical/attached-vertical.md` — isAttached=true, vertical orientation, hug width only
- `variants/detached-horizontal/detached-horizontal.md` — isAttached=false, horizontal orientation, hug + fill width
- `variants/detached-vertical/detached-vertical.md` — isAttached=false, vertical orientation, hug width only

## Variant Axes

| Prop        | Values                     | Default    |
|-------------|----------------------------|------------|
| isAttached  | true \| false              | true       |
| orientation | horizontal \| vertical     | horizontal |
| size        | sm \| md \| lg             | sm         |
| width       | hug \| fill                | hug        |

**Fill width** only available for horizontal orientation. Vertical always hug.

## Key Structural Differences: Attached vs Detached

| Property               | isAttached=true                          | isAttached=false                        |
|------------------------|------------------------------------------|-----------------------------------------|
| Container border-radius | sm:16px, md/lg:24px (wraps whole group) | none                                    |
| Container overflow     | `overflow-clip`                          | visible                                 |
| Button border-radius   | none (clipped by parent)                 | `rounded-lg` 8px on all corners         |
| Gap between buttons    | none (flush)                             | `--space-1` 4px                         |
| Dividers               | `ToggleButtonGroupDivider` between items | none (gap provides visual separation)   |

## Sub-Components

### ToggleButtonGroupDivider
Figma node: `15251:25727`
A zero-width slot that renders a 1px vertical line between attached toggle buttons.

- Horizontal groups: divider is `height=button-height`, `padding-y` per size, contains `rotate(-90deg)` line
- Vertical groups: same component wrapped in a `rotate(90deg)` container
- Rendered via CSS container query units to match parent height dynamically

### ToggleButton
Figma node: `15241:24193`
Individual toggle item inside the group. Supports:
- Icon-left + label + icon-right (all optional independently)
- Selected / unselected state
- Disabled state
- Reference: https://v3.heroui.com/docs/components/toggle-button

## Size Reference (all variants)

| Size | Button Height | Padding X | Icon+Text Gap | Font              | Line Height |
|------|---------------|-----------|---------------|-------------------|-------------|
| sm   | 32px          | 12px      | 8px           | `--text-sm` 14px  | 20px        |
| md   | 36px          | 16px      | 8px           | `--text-sm` 14px  | 20px        |
| lg   | 40px          | 16px      | 8px           | `--text-base` 16px | 24px       |

## Token Flags (resolve before building)

- **token-near-miss** on background: Figma uses `--default/default` (#f1f1f1). Closest foundation token `--neutral-100` (#F1F5F7) is off by delta R:+2 G:+3 B:+5. Resolve with designer.
- **token-mismatch** on foreground: Figma uses `--default/default-foreground` (#18181b). No HRON foundation match. Use raw value or add component-level token.
- Hover / active / focus / selected states not defined at group level in Figma. Defined at ToggleButton level.

## Documentation References

- HeroUI ToggleButtonGroup: https://v3.heroui.com/docs/components/toggle-button-group
- HeroUI ToggleButton: https://v3.heroui.com/docs/components/toggle-button

## Notes
- Always use token names from foundation, never hardcode hex values
- If a variant's `## Notes` contains `token-mismatch` or `token-near-miss` entries, resolve with designer before building
- `w-[543px]` in Figma fill-mode frames is a canvas placeholder, not a design constraint — fill mode expands to parent container
- `backdrop-blur` present at button level but value is 0px in Figma — apply if blur token is set in consuming context
- `fontVariationSettings: "'CTGR' 0, 'wdth' 100"` — Noto Sans variable font axes, pass as-is if variable font is loaded
