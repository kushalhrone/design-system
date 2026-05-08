---
name: component-searchfield
description: >
  Builds the searchfield component and all its variants.
  Read this skill when asked to build, update, or spec the searchfield component.
  Available variants: searchfield.
---

# SearchField Component

## How to build this component

1. Read `foundation/foundation-token/color.md` for token resolution
2. Read `foundation/foundation-token/spacing.md` for spacing tokens
3. Read `foundation/foundation-token/radius.md` for border-radius tokens
4. Read `foundation/foundation-token/typography.md` for font specs
5. Read `variants/searchfield/searchfield.md` for full state spec
6. Cross-ref token names → resolve to values from foundation
7. Reference `components/form/colorfield/` for CloseButton sub-component conventions

## Available Variants

| Variant | Description |
|---|---|
| placeholder | Empty field; no close button |
| hover | Semi-opaque hover background |
| focus | Focus ring; clear stub at opacity-0 |
| filled | Value present; close button visible |
| error | Red border + red label + error message; close button visible |
| disabled | Wrapper opacity 0.5; not-allowed cursor |

## Sub-Components

| Name                     | Description                                              |
|--------------------------|----------------------------------------------------------|
| `Label`                  | Field label, red in error state                          |
| `Input`                  | Search input box with magnifier icon prefix              |
| `SearchIcon`             | Magnifier icon, 16×16px, left-aligned in input           |
| `CloseButton`            | Clear/dismiss button, absolute positioned, filled+error  |
| `DescriptionErrorMessage`| Below-field helper text or error message                 |

## Key Constraints

- Height fixed: 36px (`--space-9`) — no size variants
- Width 280px is canvas placeholder — use `width: 100%` in implementation
- CloseButton only visible in `filled` and `error` states
- Focus ring: `0 0 0 2px #02563D` — pre-established green focus ring (consistent with date-picker, button)
- Error state: border becomes solid `#DC2626` (`--color-error` ✓) + label turns red + description becomes error message
- Disabled: entire wrapper gets `opacity: 0.5`, not individual elements
- All borders transparent by default (`rgba(222,222,224,0)`) — only error state shows visible border
- Inner shadow highlight (`inset 0 0 0 0 rgba(255,255,255,0.1)`) present on placeholder/hover/disabled/filled

## Open Issues (resolve with designer before building)

1. `var(--field/background, #FFFFFF)` — near-miss vs `--neutral-25` (#FFFFFF). Confirm canonical field surface token.
2. `var(--field/background-hover, rgba(249,249,249,0.92))` — no foundation token. Needs token.
3. `var(--default/default, #f1f1f1)` (CloseButton bg) — recurring unresolved token. Needs assignment.
4. CloseButton size `20px` vs `--space-6 = 24px` — discrepancy. Confirm correct size.
5. CloseButton border-radius fallback `10px` vs `--dimensions/radius/rounded-xl = 12px` — Figma inconsistency. Confirm.
6. Focus ring `#02563D` (green) vs `--color-focus-ring: rgba(2,86,61,0.22)` (orange). Pre-established green pattern — confirm canonical value system-wide.

## Notes
- Always use token names from foundation, never hardcode hex values
- Resolve all `token-mismatch` and `token-near-miss` entries before building
- `--color-error: #DC2626` = exact match for `var(--danger/danger)` ✓ — use `--color-error` in implementation
