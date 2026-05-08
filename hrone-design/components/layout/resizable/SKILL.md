---
name: component-resizable
description: >
  Builds the resizable (resize handle / panel divider) component and all its variants.
  Read this skill when asked to build, update, or spec the resizable component.
  Available variants: primary, secondary, tertiary.
---

# Resizable Component

## How to build this component

1. Read `foundation/foundation-token/color.md` for token resolution
2. Read `foundation/foundation-token/spacing.md` for spacing tokens
3. Read `foundation/foundation-token/radius.md` for border-radius tokens
4. Read the relevant variant file: `variants/{variant-name}/{variant-name}.md`
5. Cross-ref token names → resolve to values from foundation

## Available Variants

- `variants/primary/primary.md` — lightest separator (`#e4e4e7`), all 3 types
- `variants/secondary/secondary.md` — medium separator (`#d7d7d7`), all 3 types
- `variants/tertiary/tertiary.md` — darkest separator (`#cdcdce`), all 3 types

## Sub-Components / Types

| Type        | Description                                              |
|-------------|----------------------------------------------------------|
| `line`      | Single 1px vertical fill line only                       |
| `drag`      | 1px fill line + centered 2×3 dot drag handle             |
| `pill`      | 5px wide pill handle (no fill line, vertically centered) |

## Key Constraints

- Container height 230px is canvas placeholder — use `height: 100%` in implementation
- Container width: 1px (line/drag), 5px (pill) — no spacing tokens, use raw values
- Drag handle dot gap: 1px — no spacing token, use raw value
- Drag dots use `--foreground/foreground` at **20% opacity** — not a token, apply via `opacity`
- All 3 `type` values share the same structural tokens; only `background` color changes per `variant`

## Open Issues (resolve with designer before building)

1. `var(--separator/separator, #e4e4e7)` — no foundation token. Near-miss to `--color-border` (#E2E8ED). Designer must create token or alias.
2. `var(--separator/separator-secondary, #d7d7d7)` — no foundation token. Near-miss to `--color-border-strong` (#CBD5DD).
3. `var(--separator/separator-tertiary, #cdcdce)` — no foundation token and no near-miss. Needs new token.
4. Cursor style (col-resize / row-resize / ew-resize) not defined in Figma — confirm with designer.
5. Disabled / inactive state not defined in Figma.

## Notes
- Always use token names from foundation, never hardcode hex values
- Resolve all `token-mismatch` and `token-near-miss` entries before building
- Separator color ramp: primary (lightest) → secondary → tertiary (darkest) — use higher-number variant on more prominent surfaces
- HeroUI ref: https://v3.heroui.com/docs/react/components/resizable-panel
