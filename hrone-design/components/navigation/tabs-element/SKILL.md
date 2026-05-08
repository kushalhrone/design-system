---
name: component-tabs-element
description: >
  Builds the individual TabsElement sub-component with all variant × orientation combinations.
  Read this skill when asked to build, update, or spec a single tab item.
  Available variants: primary-horizontal, primary-vertical, secondary-horizontal, secondary-vertical.
---

# TabsElement Sub-Component

TabsElement is the individual tab item used inside the Tabs container.
It has 3 axes: variant × state × orientation = 16 total combinations.
Each variant file documents all states for that variant+orientation pair.

## How to build this component

1. Read `../../../foundation/foundation-token/color.md` for token resolution
2. Read `../../../foundation/foundation-token/typography.md` for font specs
3. Read `../../../foundation/foundation-token/spacing.md` for spacing values
4. Read `../../../foundation/foundation-token/effects.md` for shadow
5. Read the relevant variant file: `variants/{variant-name}/{variant-name}.md`
6. Cross-ref token names → resolve to values from foundation
7. Build the component using the resolved spec

## Available Variants

- [primary-horizontal](variants/primary-horizontal/primary-horizontal.md) — pill tab, horizontal layout
- [primary-vertical](variants/primary-vertical/primary-vertical.md) — pill tab, vertical (stacked icon+label) layout
- [secondary-horizontal](variants/secondary-horizontal/secondary-horizontal.md) — underline tab, horizontal layout
- [secondary-vertical](variants/secondary-vertical/secondary-vertical.md) — underline tab, vertical layout (left-border indicator)

## Related Components

- [tabs](../tabs/SKILL.md) — container that wraps multiple TabsElement instances

## Axes Summary

| Axis | Values |
|------|--------|
| variant | primary, secondary |
| state | default, hover, selected, disabled |
| orientation | horizontal, vertical |

## Notes

- Always use token names from foundation, never hardcode hex values
- States are documented within each variant file (not as separate variant folders)
- If a state is marked `undefined`, flag it and ask the designer before building
- Figma node: 14115:71556 (COMPONENT_SET)
