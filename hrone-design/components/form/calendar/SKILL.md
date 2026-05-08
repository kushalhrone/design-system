---
name: component-calendar
description: >
  Builds the Calendar component and all its variants and sub-components.
  Read this skill when asked to build, update, or spec the Calendar, CalendarPopover,
  CalendarDay, CalendarNavigation, CalendarTimeValue, or related date-picker primitives.
  Available variants: present, future, years, multi.
---

# Calendar Component

## How to build this component

1. Read `../../../foundation/foundation-token/color.md` for token resolution
2. Read `../../../foundation/foundation-token/typography.md` for font specs
3. Read `../../../foundation/foundation-token/spacing.md` for spacing and radius tokens
4. Read the relevant variant file: `{variant-name}/{variant-name}.md`
5. Cross-ref token names → resolve to values from foundation
6. Build the component using the resolved spec

## Available Variants

| Variant | File | Width | Description |
|---|---|---|---|
| present | [present/present.md](./present/present.md) | 256px | Current-month standard grid |
| future | [future/future.md](./future/future.md) | 256px | Future-month navigation (no today marker) |
| years | [years/years.md](./years/years.md) | 280px | Year-picker scrollable grid |
| multi | [multi/multi.md](./multi/multi.md) | 780px | Dual-month range selection view |

## Sub-Components

| Sub-Component | File | States / Variants |
|---|---|---|
| CalendarDay | [calendar-day/calendar-day.md](./calendar-day/calendar-day.md) | today, default, hover, selected, out, disabled, hidden |
| CalendarNavigation | [calendar-navigation/calendar-navigation.md](./calendar-navigation/calendar-navigation.md) | single-closed, single-open, multi |
| CalendarTimeValue | [calendar-time-value/calendar-time-value.md](./calendar-time-value/calendar-time-value.md) | default, hover, filled, focus, invalid, invalid-focus |
| CalendarPopover | [calendar-popover/calendar-popover.md](./calendar-popover/calendar-popover.md) | present, future, years, multi |

## Notes

- Always use token names from foundation, never hardcode hex values
- Font: Figma uses `Noto Sans` — production resolves to `--font` CSS variable; confirm with `typography.md`
- Selected state always uses `--accent/accent` (#02563D) — never primary orange (#02563D)
- Day cells are always 36×36px — never resize
- For range selection see `range-calendar.md` in this folder
- Existing `calendar.md` in this folder is a legacy flat spec — the variant files are the source of truth going forward
