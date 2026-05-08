---
name: component-input-affix
description: >
  Builds the input-affix component and all its variants.
  Read this skill when asked to build, update, or spec the input-affix component.
  Available variants: mute, active.
---

# InputAffix Component

A prefix or suffix affix control used inside InputGroup. Renders an icon, text label, and
chevron-down arrow. Appears in two color states: muted (placeholder color) and active (foreground color).

## How to build this component

1. Read `foundation/foundation-token/color.md` for token resolution
2. Read `foundation/foundation-token/spacing.md` for spacing tokens
3. Read `foundation/foundation-token/typography.md` for font specs
4. Read the relevant variant file: `variants/{variant-name}/{variant-name}.md`
5. Cross-ref token names → resolve to values from foundation

## Available Variants

- **mute** — icon and text rendered in placeholder/subdued color (#71717a). Default/resting state.
- **active** — icon and text rendered at full foreground contrast (#18181b). Used when a value is selected.

## Variant Axes (props)

| Axis               | Values                  | Notes                                         |
|--------------------|-------------------------|-----------------------------------------------|
| color              | mute \| active          | Controls icon/text color                      |
| divider            | none \| left \| right   | Vertical divider on the specified inner edge. Shown when parent InputGroup has gapSpace=true |
| showIcon           | boolean                 | Toggle icon slot visibility                   |
| showContent        | boolean                 | Toggle text label visibility                  |
| showArrow          | boolean                 | Toggle chevron-down visibility                |
| showContainerGroup | boolean                 | Toggle the entire content+arrow group         |

## Notes
- Always use token names from foundation, never hardcode hex values
- token-mismatch logged in active variant: foreground color #18181b has no foundation match — resolve with designer
- token-near-miss logged in mute variant: placeholder color #71717a vs --neutral-500 (#64748B) — resolve with designer
- hover and active interaction states not defined in Figma — flag with designer before building click/hover behavior
- InputAffix is a sub-component of InputGroup; do not use standalone unless explicitly specified
