---
name: component-range-calendar
description: >
  Builds the range-calendar component and all its variants.
  Read this skill when asked to build, update, or spec the range-calendar component.
  Available variants: empty, filled, multi.
---

# RangeCalendar Component

## How to build this component

1. Read `../../../foundation/foundation-token/color.md` for color resolution
2. Read `../../../foundation/foundation-token/spacing.md` for spacing tokens
3. Read `../../../foundation/foundation-token/radius.md` for border-radius tokens
4. Read `../../../foundation/foundation-token/typography.md` for font specs
5. Read the relevant variant file: `variants/{variant-name}/{variant-name}.md`
6. Cross-ref token names -> resolve to values from foundation
7. Build the component using the resolved spec

## Component Structure

```text
RangeCalendar
├── CalendarNavigation
├── Weekday headers
├── Calendar grid
├── Range fill overlay, selected/selected-range only
├── Optional time inputs
├── Optional top content
└── Optional bottom content / selected range summary
```

## Available Variants

- `empty` - no selection, clean single-month grid
- `filled` - selected start/end range with popover composition details
- `multi` - two synchronized months side by side

## Shared Tokens

### Layout

```css
--range-calendar-width-single: 256px;
--range-calendar-width-popover: 288px;
--range-calendar-width-multi: 516px;
--range-calendar-day-size: 36px;
--range-calendar-nav-height: 56px;
--range-calendar-row-gap: var(--dimensions/spacing/0.5, 2px);
--range-calendar-week-gap: var(--dimensions/spacing/2, 8px);
--range-calendar-grid-padding-y: var(--dimensions/spacing/2, 8px);
--range-calendar-header-padding-y: var(--dimensions/spacing/4, 16px);
--range-calendar-time-row-height: 32px;
```

### Color Tokens

```css
--range-calendar-label: var(--foreground/foreground, #18181B);
--range-calendar-muted: var(--foreground/muted, #71717A);
--range-calendar-selected: var(--accent/accent, #02563D);
--range-calendar-selected-fg: var(--accent/accent-foreground, #FFFFFF);
--range-calendar-range-fill: var(--accent/accent-soft, rgba(2,86,61,0.15));
--range-calendar-time-bg: var(--default/default, #F1F1F1);
--range-calendar-tag-bg: var(--surface/on-surface, #EDEDED);
--range-calendar-summary-fg: var(--foreground/muted, #71717A);
```

### Typography

```css
--range-calendar-nav-size: var(--dimensions/font/text-sm, 14px);
--range-calendar-nav-weight: 500;
--range-calendar-nav-leading: var(--dimensions/leading/text-sm, 20px);
--range-calendar-day-size: var(--dimensions/font/text-sm, 14px);
--range-calendar-day-weight: 500;
--range-calendar-day-leading: var(--dimensions/leading/text-sm, 20px);
--range-calendar-summary-size: var(--dimensions/font/text-xs, 12px);
--range-calendar-summary-weight: 500;
--range-calendar-summary-leading: var(--dimensions/leading/text-xs, 16px);
--range-calendar-time-size: var(--dimensions/font/text-sm, 14px);
--range-calendar-time-weight: 400;
```

## Subcomponents

- `CalendarDay` - default / selected / out states, 36px cell
- `CalendarNavigation` - month/year header plus prev/next controls
- `RangeCalendarPopover` - popover composition with top content, calendar, time rows, bottom content, and summary
- `_CalendarSelectedRange` - selected range summary text
- `_CalendarTimeValue` - individual time segment

## Figma Nodes

- Main standalone frame: `19890:13049`
- Popover frame: `14485:7651`
- Empty standalone: `19890:13076`
- Empty popover: `14567:10833`
- Filled standalone: `19890:13050`
- Filled popover: `14485:7858`
- Multi standalone: `19890:13064`
- Multi popover: `14695:6564`

## Notes

- Range fill uses `--color-secondary-soft` / Figma `accent/accent-soft` — never primary orange.
- Day cells remain 36×36 and rounded-3xl (24px) regardless of selection state.
- **Multi nav is per-month, not a shared header.** Left month: ← only. Right month: → only. No expand chevron on either.
- Months gap in multi: 12px (`spacing/3`).
- The filled and multi popovers carry: ButtonGroup presets, calendar grid, time rows, tag list, and selection summary.
- Multi popover tag list has 5 tags (adds "14 days"); single/filled has 4 tags.
- `foreground/foreground #18181b` and `foreground/muted #71717a` are near-misses to foundation tokens — use raw values.
- `default/default #f1f1f1` is a near-miss to `--color-bg-subtle #F1F5F7` — use raw value.
- `surface/on-surface #ededed` has no foundation match — use raw value.
