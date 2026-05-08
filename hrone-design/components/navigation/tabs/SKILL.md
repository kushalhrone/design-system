---
name: component-tabs
description: >
  Builds the Tabs container component and all its variants.
  Read this skill when asked to build, update, or spec the Tabs component.
  Available variants: primary-hug, primary-fill, secondary-hug, secondary-fill.
---

# Tabs Component

## How to build this component

1. Read `../../../foundation/foundation-token/color.md` for token resolution
2. Read `../../../foundation/foundation-token/typography.md` for font specs
3. Read `../../../foundation/foundation-token/spacing.md` for spacing values
4. Read `../../../foundation/foundation-token/effects.md` for shadow and blur
5. Read `../../../foundation/foundation-token/radius.md` for border-radius
6. Read the relevant variant file: `variants/{variant-name}/{variant-name}.md`
7. Cross-ref token names → resolve to values from foundation
8. Build the component using the resolved spec

## Available Variants

- [primary-hug](variants/primary-hug/primary-hug.md) — pill container, tabs take natural width
- [primary-fill](variants/primary-fill/primary-fill.md) — pill container, tabs stretch to fill width equally
- [secondary-hug](variants/secondary-hug/secondary-hug.md) — underline indicator, tabs take natural width
- [secondary-fill](variants/secondary-fill/secondary-fill.md) — underline indicator, tabs stretch equally

## Related Components

- [tabs-element](../tabs-element/SKILL.md) — individual tab item (sub-component)

## Notes

- Always use token names from foundation, never hardcode hex values
- If a state is marked `undefined`, flag it and ask the designer before building
- If a variant's `## Notes` contains `token-mismatch` or `token-near-miss` entries, resolve with designer before building
- Documentation reference: https://v3.heroui.com/docs/react/components/tabs
- Existing flat token spec preserved at `tabs.md` — this variants/ structure adds scaffold-format detail
