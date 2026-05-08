---
name: component-input-group
description: >
  Builds the input-group component and all its variants.
  Read this skill when asked to build, update, or spec the input-group component.
  Available variants: primary, secondary.
---

# InputGroup Component

An input field that accepts prefix and/or suffix affix controls (icons, dropdowns, text labels).
Documented at: https://v3.heroui.com/docs/react/components/input-group

## How to build this component

1. Read `foundation/foundation-token/color.md` for token resolution
2. Read `foundation/foundation-token/spacing.md` for spacing tokens
3. Read `foundation/foundation-token/radius.md` for border-radius tokens
4. Read `foundation/foundation-token/effects.md` for shadow definitions
5. Read `foundation/foundation-token/typography.md` for font specs
6. Read the relevant variant file: `variants/{variant-name}/{variant-name}.md`
7. Cross-ref token names → resolve to values from foundation

## Available Variants

- **primary** — white background with multi-layer Field shadow. Used on page backgrounds.
- **secondary** — filled (#f1f1f1) background, no shadow. Used inside panels or secondary surfaces.

## Variant Axes (props)

| Axis      | Values                    | Notes                                      |
|-----------|---------------------------|--------------------------------------------|
| variant   | primary \| secondary      | Visual style — background + shadow         |
| type      | text \| number \| password | HTML input type                           |
| affix     | both \| prefix \| suffix  | Which side(s) show the InputAffix control  |
| gapSpace  | false \| true             | false = flush affix; true = 12px gap + divider |

## Composition

InputGroup composes `InputAffix` on prefix and/or suffix sides. Each affix renders:
- An icon slot (16×16)
- A content label + chevron-down (12×12) inside a containerGroup

## Notes
- Always use token names from foundation, never hardcode hex values
- Two token near-misses logged in variant files — resolve with designer before shipping:
  - background white (#FFFFFF) vs --color-surface (#FFFFFF)
  - placeholder color #71717a vs --neutral-500 (#64748B)
- Secondary variant's `--default/default` (#f1f1f1) has no foundation match — near-miss vs --neutral-100 (#F1F5F7)
- Focus, error, and disabled states not defined in Figma — using design system defaults from effects.md
