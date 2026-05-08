---
name: component-button-group
description: >
  Builds the button-group component and all its variants.
  Read this skill when asked to build, update, or spec the button-group component.
  Available variants: horizontal, vertical.
---

# Button Group Component

## How to build this component

1. Read `foundation/foundation-token/color.md` for token resolution
2. Read `foundation/foundation-token/spacing.md` for spacing tokens
3. Read `foundation/foundation-token/radius.md` for border-radius tokens
4. Read `foundation/foundation-token/typography.md` for font specs
5. Read the relevant variant file: `variants/{variant-name}/{variant-name}.md`
6. Cross-ref token names → resolve to values from foundation
7. Build the component using the resolved spec
8. Reference individual button tokens from `components/action/buttons/` for interaction states

## Available Variants

- `variants/horizontal/horizontal.md` — horizontal orientation, supports hug + fill width
- `variants/vertical/vertical.md` — vertical orientation, supports hug width only

## Sub-Components

### ButtonGroupDivider
A 1px separator rendered between buttons. Same component rotated 90° for vertical mode.
Figma node: `14339:29992`

Variants: `primary` | `secondary` | `tertiary` | `ghost` | `danger` | `dangerSoft`

Match divider variant to the button variant used in the group.

## Key Constraints

- Buttons 1 and 2 always present. Buttons 3–5 are optional via `showButton3/4/5` props.
- Dividers between optional buttons are gated by `showDivider2/3/4` — always pair divider with its button.
- Vertical orientation: fill width not defined in Figma — do not implement without designer sign-off.
- Interaction states (hover/focus/active/disabled) are inherited from the child button variant, not defined at group level.
- Button corners: only the outermost exposed corners receive `--dimensions/radius/rounded-lg` (8px). Internal shared edges have no radius.

## Documentation References

- HeroUI ButtonGroup: https://v3.heroui.com/docs/react/components/button-group
- HeroUI Button: https://v3.heroui.com/docs/react/components/button

## Notes
- Always use token names from foundation, never hardcode hex values
- `accent/accent` token mismatch is an established convention — see `components/action/buttons/primary/primary.md` for precedent. Resolve with designer before new work.
- If a variant's `## Notes` contains `token-mismatch` or `token-near-miss` entries, resolve with designer before building
