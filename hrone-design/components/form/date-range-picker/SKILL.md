---
name: component-date-range-picker
description: >
  Builds the date-range-picker component and all its variants.
  Read this skill when asked to build, update, or spec the date-range-picker component.
  Available variants: primary, secondary.
---

# Date Range Picker Component

## How to build this component

1. Read `foundation/foundation-token/color.md` for token resolution
2. Read `foundation/foundation-token/spacing.md` for spacing tokens
3. Read `foundation/foundation-token/radius.md` for border-radius tokens
4. Read `foundation/foundation-token/typography.md` for font specs
5. Read the relevant variant file: `variants/{variant-name}/{variant-name}.md`
6. Cross-ref token names → resolve to values from foundation
7. Reference `components/form/date-picker/` for shared calendar sub-component conventions

## Available Variants

- `variants/primary/primary.md` — white bg + shadow, closed + open states, full calendar popover
- `variants/secondary/secondary.md` — grey bg, no shadow, closed state only

## Sub-Components

| Name                  | Description                                           |
|-----------------------|-------------------------------------------------------|
| `DateRangeFieldInput` | Input field showing start–end date range. Node `14551:12682` |
| `RangeCalendarPopover`| Full calendar with range selection, time, summary. Node `14551:12265` |
| `CalendarDay`         | Single day cell: default / selected / out states      |
| `CalendarNavigation`  | Month/year header + prev/next arrows                  |
| `Label`               | Field label with optional required asterisk           |
| `_CalendarTimeValue`  | Individual date/time segment cell (mm, dd, yyyy, HH, etc.) |

## Key Constraints

- Field height fixed: 36px (`--space-9`) — no size variants
- Range input format: `mm / dd / yyyy , HH : MM : SS AM TZ - mm / dd / yyyy , HH : MM : SS AM TZ`
  - All segments individually focusable
  - Separator chars (/ , : -) are medium weight, non-interactive
- Calendar popover only defined for **primary** variant — do not render for secondary without designer sign-off
- Range highlight: `--color-secondary-soft` (rgba(2,86,61,0.15)) — exact token match ✓
- Selected day start/end: `--accent/accent` bg with rounded ends, range middle has rectangular bg
- `w-[552px]` on input = Figma canvas placeholder — use `width: 100%` in implementation
- Disabled state not defined in Figma for either variant

## Open Issues (resolve with designer before building)

1. Field bg `#FFFFFF` vs `--neutral-25` (#FFFFFF) — confirm canonical surface token for fields
2. `var(--default/default, #f1f1f1)` — no foundation token. Secondary bg + time section bg both use this. Needs token.
3. Focus ring color: `#02563D` (green) vs `--color-focus-ring` (rgba(2,86,61,0.22) orange). Consistent with button/date-picker pattern but not foundation token.
4. `var(--foreground/muted)` and `var(--foreground/foreground)` fallbacks don't match foundation — near-misses.
5. Secondary variant open state not designed — flag before implementing.

## Notes
- Always use token names from foundation, never hardcode hex values
- Resolve all `token-mismatch` and `token-near-miss` entries before building
- accent/accent = `#02563D` convention pre-established across buttons, button-group, date-picker
