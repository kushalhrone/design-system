---
component: date-range-picker
variant: primary
figma-node-id: 14551:12262
figma-content-hash: not-computed
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: date-range-picker
- variant: primary
- status: ready
- states: closed | open

## Anatomy
```
DateRangePicker
├── Label ("Date", optional required asterisk)
├── DateRangeFieldInput (primary)
│   ├── StartDateSegments  [mm / dd / yyyy]
│   ├── RangeSeparator     " - "
│   ├── EndDateSegments    [mm / dd / yyyy]
│   └── Suffix             (calendar icon)
└── RangeCalendarPopover   (open state only)
    ├── CalendarNavigation (month/year + prev/next)
    ├── DayHeader          (Sun–Sat)
    ├── CalendarGrid       (CalendarDay × 35)
    ├── RangeHighlight     (accent-soft bg between selected days)
    ├── TimeSection        (Start time + End time rows)
    └── SelectedRangeSummary
```

## Props
| Prop         | Type    | Default |
|--------------|---------|---------|
| state        | boolean | false   |
| label        | string  | "Date"  |

`state = false` → closed. `state = true` → open + popover visible.

## Design Tokens — Field (Primary)

| Property          | Token Name                             | Value                  |
|-------------------|----------------------------------------|------------------------|
| width             | —                                      | full-width (552px canvas) |
| height            | `--space-9`                            | 36px                   |
| padding-left      | `--space-3`                            | 12px                   |
| gap               | `--space-0.5`                          | 2px                    |
| border-radius     | `--dimensions/radius/rounded-lg`       | 8px                    |
| border            | `var(--field/border, rgba(222,222,224,0))` | transparent        |
| border-width      | `var(--field/border-width, 1px)`       | 1px                    |
| background        | `var(--field/background, white)`       | #FFFFFF (see Notes)    |
| backdrop-blur     | `var(--blur, 0px)`                     | 0px (no blur)          |
| inner-shadow      | inset highlight                        | `inset 0 0 0 0 rgba(255,255,255,0.1)` |

### Field Shadow (closed state)
```
box-shadow:
  0px 2px 4px 0px var(--field/shadow,   rgba(0,0,0,0.04)),
  0px 1px 2px 0px var(--field/shadow-2, rgba(0,0,0,0.06)),
  0px 0px 1px 0px var(--field/shadow-2, rgba(0,0,0,0.06))
```

### Field Focus Ring (open state)
```
box-shadow: 0 0 0 var(--ring-offset-width, 2px) var(--focus-ring, #02563D)
```
Single ring — no background offset layer. See Notes for token mismatch.

## Design Tokens — Text Segments

| Element           | State       | Token / Value                               |
|-------------------|-------------|---------------------------------------------|
| Placeholder text  | empty       | `var(--foreground/muted, #71717a)` (see Notes) |
| Value text        | filled      | `var(--foreground/foreground, #18181b)` (see Notes) |
| Separator `/`     | always      | `var(--foreground/muted, #71717a)`, medium 500 |
| Range dash `-`    | always      | `var(--foreground/muted, #71717a)`, medium 500 |
| Font size         | —           | `--text-sm` 14px                             |
| Placeholder weight| —           | `--font-regular` 400                         |
| Separator weight  | —           | `--font-medium` 500                          |
| Line height       | —           | `dimensions/leading/text-sm` 20px            |

### Segment Cells (`_CalendarTimeValue`)
| Property      | Token                              | Value |
|---------------|------------------------------------|-------|
| padding-x     | `--space-0.5`                      | 2px   |
| border-radius | `--dimensions/radius/rounded-md`   | 6px   |

## Design Tokens — Suffix
| Property   | Token          | Value |
|------------|----------------|-------|
| height     | `--space-9`    | 36px  |
| padding-x  | `--space-3`    | 12px  |
| gap        | `--space-1.5`  | 6px   |
| background | same as field bg | #FFFFFF |
| icon       | calendar       | 16×16px |

## Design Tokens — Label
| Property    | Token                             | Value    |
|-------------|-----------------------------------|----------|
| font-size   | `--text-sm`                       | 14px     |
| font-weight | `--font-medium`                   | 500      |
| line-height | `dimensions/leading/text-sm`      | 20px     |
| color       | `var(--foreground/foreground, #18181b)` | (see Notes) |
| required `*`| `var(--danger/danger, #DC2626)`   | `--color-error` #DC2626 ✓ |
| gap to field| `--space-1`                       | 4px      |

## Design Tokens — Calendar Popover (open state)

| Property      | Token                            | Value    |
|---------------|----------------------------------|----------|
| width         | —                                | 288px    |
| padding-x     | `--space-4`                      | 16px     |
| padding-bottom| `--space-4`                      | 16px     |
| border-radius | `--dimensions/radius/rounded-lg` | 8px      |
| background    | `var(--overlay, white)`          | #FFFFFF (see Notes) |
| backdrop-blur | `var(--blur, 0px)`               | 0px      |

### Popover Shadow
```
box-shadow:
  0px  2px  8px 0px rgba(0,0,0,0.06),
  0px -6px 12px 0px rgba(0,0,0,0.03),
  0px 14px 28px 0px rgba(0,0,0,0.08)
```

## Design Tokens — CalendarDay

| State     | Background                               | Text                                    | Opacity | Border-radius                            |
|-----------|------------------------------------------|-----------------------------------------|---------|------------------------------------------|
| default   | none                                     | `var(--foreground/foreground, #18181b)` | 1       | `--dimensions/radius/rounded-3xl` (24px) |
| selected  | `var(--accent/accent, #02563D)`          | `var(--accent/accent-foreground, #FFFFFF)` | 1    | `--dimensions/radius/rounded-3xl` (24px) |
| out       | none                                     | `var(--foreground/muted, #71717a)`      | `var(--disabled-opacity, 0.5)` | `--dimensions/radius/rounded-3xl` (24px) |

### CalendarDay Sizing
| Property      | Token                                | Value |
|---------------|--------------------------------------|-------|
| width         | `var(--dimensions/spacing/9, 36px)`  | 36px  |
| height        | `var(--dimensions/spacing/9, 36px)`  | 36px  |
| padding-y     | `--space-0.5`                        | 2px   |
| indicator dot | —                                    | 3×3px, `--dimensions/radius/rounded-xl` (12px), bottom 4px |

### Range Highlight
| Property  | Token                                           | Value                     |
|-----------|-------------------------------------------------|---------------------------|
| background | `var(--accent/accent-soft, rgba(2,86,61,0.15))` | `--color-secondary-soft` ✓ |
| shape      | partial `rounded-lg` on start/end edges         | left-rounded on start row, right-rounded on end row |

## Design Tokens — CalendarNavigation

| Property       | Token                            | Value |
|----------------|----------------------------------|-------|
| min-height     | —                                | 56px  |
| padding-y      | `--space-4`                      | 16px  |
| month/year text| `var(--foreground/foreground, #18181b)` | medium 500, `--text-sm` |
| chevron icon   | —                                | 12×12px |
| nav buttons    | 24×24px, padding `--space-1` (4px), radius `--dimensions/radius/rounded-md` (6px) |
| arrow icons    | —                                | 16×16px |

## Design Tokens — Time Section

| Property      | Token                            | Value    |
|---------------|----------------------------------|----------|
| padding-top   | `--space-3`                      | 12px     |
| label font    | `--text-sm` / `--font-medium`    | 14px 500 |
| wrapper bg    | `var(--default/default, #f1f1f1)` | see Notes |
| wrapper padding-x | `--space-3`                  | 12px     |
| wrapper padding-y | `--space-2`                  | 8px      |
| wrapper min-height | `--space-8`                 | 32px     |
| wrapper radius | `--dimensions/radius/rounded-lg` | 8px      |
| value text    | `var(--foreground/foreground, #18181b)` | medium 500 |
| timezone text | `var(--foreground/muted, #71717a)` | muted    |

## Design Tokens — Selected Range Summary

| Property  | Token / Value                       |
|-----------|-------------------------------------|
| font-size | `--text-xs` 12px                    |
| font-weight | `--font-medium` 500               |
| line-height | `dimensions/leading/text-xs` 16px |
| padding-top | `--space-3` 12px                  |
| "Selected:" label | `var(--foreground/muted, #71717a)` |
| start date | `var(--foreground/muted, #71717a)` |
| end date   | `var(--foreground/foreground, #18181b)` |

## Interaction States

| State    | Field BG  | Shadow            | Ring                            | Cursor  |
|----------|-----------|-------------------|---------------------------------|---------|
| closed   | `#FFFFFF` | shadow-field      | none                            | pointer |
| open     | `#FFFFFF` | none              | `0 0 0 2px #02563D`             | pointer |
| disabled | undefined — not in Figma | —    | —                               | not-allowed |

## Figma Node Map

| Node ID        | Description                          |
|----------------|--------------------------------------|
| `14551:12266`  | DateRangePicker — closed (state=false) |
| `14551:12263`  | DateRangePicker — open (state=true)  |
| `14551:12683`  | DateRangeFieldInput — primary        |
| `14551:12265`  | RangeCalendarPopover                 |

## Notes
- token-near-miss: field bg `#FFFFFF` vs `--neutral-25` (#FFFFFF). 3-point diff. Do NOT auto-snap. Use raw `#FFFFFF`.
- token-near-miss: overlay bg `#FFFFFF` vs `--neutral-25` (#FFFFFF). Same as above.
- token-near-miss: `var(--foreground/muted, #71717a)` vs `--color-fg-muted` (#64748B). 6-point diff. Use raw `#71717a`.
- token-near-miss: `var(--foreground/foreground, #18181b)` vs `--color-fg` (#0F172A). 7-point diff. Use raw `#18181b`.
- token-mismatch: focus ring `var(--focus-ring, #02563D)` = green (--secondary-500). Foundation `--color-focus-ring = rgba(2,86,61,0.22)` (orange, alpha). Different hue + alpha. Resolve with designer. Consistent with pre-existing pattern from date-picker and button components.
- token-mismatch: time section bg `var(--default/default, #f1f1f1)` — no foundation token. Consistent with colorfield component issue.
- accent/accent = `#02563D` — pre-established convention from button-group. See `components/action/buttons/primary/primary.md`.
- `--color-secondary-soft: rgba(2,86,61,0.15)` = exact match for range highlight ✓
- `w-[552px]` on DateRangeFieldInput = Figma canvas placeholder. Use `width: 100%` in implementation.
- Disabled state not defined in Figma — flag before building.
- HeroUI refs: https://v3.heroui.com/docs/react/components/date-field, https://v3.heroui.com/docs/react/components/label
