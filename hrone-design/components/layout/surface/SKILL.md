---
name: component-surface
description: >
  Builds the surface component and all its variants.
  Read this skill when asked to build, update, or spec the surface component.
  Available variants: transparent, default, secondary, tertiary, img.
---

# Surface Component

## How to build this component

1. Read `foundation/foundation-token/color.md` for token resolution
2. Read `foundation/foundation-token/radius.md` for border-radius tokens
3. Read the relevant variant file: `variants/{variant-name}/{variant-name}.md`
4. Cross-ref token names → resolve to values from foundation

## Available Variants

- `variants/transparent/transparent.md` — fully transparent, no shadow
- `variants/default/default.md` — white bg (`#FFFFFF`), shadow-surface
- `variants/secondary/secondary.md` — light grey bg (`#efeff0`), shadow-surface
- `variants/tertiary/tertiary.md` — darker grey bg (`#eaeaeb`), shadow-surface
- `variants/img/img.md` — image fill, object-cover, shadow-surface

## Background Ramp (darkest → lightest)

| Variant     | Background  | Use Case                             |
|-------------|-------------|--------------------------------------|
| transparent | transparent | Overlay, no-bg surface               |
| default     | `#FFFFFF`   | Primary card / panel surface         |
| secondary   | `#efeff0`   | Nested or grouped content surface    |
| tertiary    | `#eaeaeb`   | Deepest nested / most prominent      |
| img         | image       | Hero / media card                    |

## Key Constraints

- Border-radius fixed: `--dimensions/radius/rounded-2xl` (16px) — no radius variants
- Size 220×220px is canvas placeholder — always use `width: 100%` / `height: 100%`
- Backdrop-blur `var(--blur, 0px)` = 0px on all variants — no active blur currently
- Transparent variant has no shadow — all others share the same `shadow-surface` drop-shadow

## Open Issues (resolve with designer before building)

1. `var(--surface/surface, #FFFFFF)` — near-miss vs `--color-surface` (#FFFFFF). Confirm canonical surface white token.
2. `var(--surface/surface-secondary, #efeff0)` and `var(--surface/surface-tertiary, #eaeaeb)` — no foundation tokens. Designer must create `--color-surface-secondary` / `--color-surface-tertiary`.
3. `var(--surface/transparent)` — no foundation mapping. Needs token alias.
4. `shadow-surface` Figma style includes an `inner-shadow` layer (`shadow-inner` color) not present in rendered code — confirm intentional omission.
5. `--field/shadow` and `--field/shadow-2` used in surface shadow — confirm whether these should be surface-specific tokens or reuse field tokens.

## Notes
- Always use token names from foundation, never hardcode hex values
- Resolve all `token-mismatch` and `token-near-miss` entries before building
- HeroUI ref: https://v3.heroui.com/docs/react/components/surface
