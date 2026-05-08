---
name: component-kbd
description: >
  Builds the kbd (keyboard shortcut) component and all its variants.
  Read this skill when asked to build, update, or spec the kbd component.
  Available variants: default, light.
---

# Kbd Component

## How to build this component

1. Read `foundation/foundation-token/color.md` for token resolution
2. Read `foundation/foundation-token/spacing.md` for spacing tokens
3. Read `foundation/foundation-token/radius.md` for border-radius tokens
4. Read `foundation/foundation-token/typography.md` for font specs
5. Read the relevant variant file: `variants/{variant-name}/{variant-name}.md`
6. Cross-ref token names → resolve to values from foundation

## Available Variants

- `variants/default/default.md` — grey bg (`#f1f1f1`), all 6 shortcut types
- `variants/light/light.md` — transparent bg, all 6 shortcut types

## Sub-Components

| Name              | Description                                          |
|-------------------|------------------------------------------------------|
| `ModifierSegment` | Symbol glyph or "Win +" prefix, omitted for `key` shortcut |
| `KeyChar`         | The key label (e.g. "K")                             |

## Key Constraints

- No size variants — single size defined in Figma
- `shortcut="key"` renders no modifier segment (KeyChar only)
- Non-Windows shortcuts (command, ctrl, option, shift) use `Noto_Sans_Symbols` font for Unicode glyphs
- Windows shortcut uses `Noto_Sans:Medium` with plain text "Win +"
- Modifier segment padding-x = `--space-px` (1px) — minimal padding
- Container uses `leading-0` with inner text `dimensions/leading/text-sm` 20px
- Disabled state not defined in Figma

## Open Issues (resolve with designer before building)

1. `var(--default/default, #f1f1f1)` — no foundation token. Same unresolved issue as colorfield and date-range-picker. Designer must assign token.
2. `var(--foreground/muted, #71717a)` — near-miss vs `--color-fg-muted` (#64748B). Confirm canonical muted text token.

## Notes
- Always use token names from foundation, never hardcode hex values
- Resolve all `token-mismatch` and `token-near-miss` entries before building
- `--default/default` = `#f1f1f1` is a recurring unresolved token across multiple components — track as design system debt
