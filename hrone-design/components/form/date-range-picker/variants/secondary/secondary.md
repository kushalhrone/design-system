---
component: date-range-picker
variant: secondary
figma-node-id: 14551:12682
figma-content-hash: not-computed
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: date-range-picker
- variant: secondary
- status: ready
- states: closed only (open state not defined in Figma for secondary)

## Anatomy
```
DateRangeFieldInput (secondary)
├── StartDateSegments  [mm / dd / yyyy]
├── RangeSeparator     " - "
├── EndDateSegments    [mm / dd / yyyy]
└── Suffix             (calendar icon)
```

Note: Calendar popover is not defined for secondary variant. Full DateRangePicker wrapper (with label + popover) only shown for primary.

## Props
| Prop           | Type    | Default |
|----------------|---------|---------|
| variant        | secondary | secondary |
| show12HrCycle  | boolean | true    |
| showDate       | boolean | true    |
| showSeparation | boolean | true    |
| showSuffix     | boolean | true    |
| showTime       | boolean | true    |
| showTimeZone   | boolean | true    |

## Design Tokens — Field (Secondary)

| Property      | Token Name                               | Value                  |
|---------------|------------------------------------------|------------------------|
| height        | `--space-9`                              | 36px                   |
| padding-left  | `--space-3`                              | 12px                   |
| gap           | `--space-0.5`                            | 2px                    |
| border-radius | `--dimensions/radius/rounded-lg`         | 8px                    |
| border        | `var(--field/border, rgba(222,222,224,0))` | transparent          |
| border-width  | `var(--field/border-width, 1px)`         | 1px                    |
| background    | `var(--default/default, #f1f1f1)`        | see Notes              |
| box-shadow    | none                                     | —                      |
| backdrop-blur | none                                     | —                      |

## Design Tokens — Text Segments

| Element           | Token / Value                               |
|-------------------|---------------------------------------------|
| Placeholder text  | `var(--foreground/muted, #71717a)` (see Notes) |
| Separator `/`     | `var(--foreground/muted, #71717a)`, medium 500 |
| Range dash `-`    | `var(--foreground/muted, #71717a)`, medium 500 |
| Font size         | `--text-sm` 14px                            |
| Placeholder weight| `--font-regular` 400                        |
| Separator weight  | `--font-medium` 500                         |
| Line height       | `dimensions/leading/text-sm` 20px           |

### Segment Cells
| Property      | Token                            | Value |
|---------------|----------------------------------|-------|
| padding-x     | `--space-0.5`                    | 2px   |
| border-radius | `--dimensions/radius/rounded-md` | 6px   |

## Design Tokens — Suffix
| Property   | Token / Value                              |
|------------|--------------------------------------------|
| height     | `--space-9` 36px                           |
| padding-x  | `--space-3` 12px                           |
| gap        | `--space-1.5` 6px                          |
| background | `var(--default/default, #f1f1f1)` — matches field |
| icon       | calendar, 16×16px                          |

## Differences from Primary

| Property         | Primary                              | Secondary                             |
|------------------|--------------------------------------|---------------------------------------|
| background       | `#FFFFFF` + shadow-field             | `#f1f1f1`, no shadow                  |
| focus ring       | `0 0 0 2px #02563D`                  | undefined — not shown in Figma        |
| open state       | ✓ calendar popover defined           | ✗ not defined                         |
| suffix bg        | `#FFFFFF` (field bg)                 | `#f1f1f1` (field bg)                  |

## Figma Node Map

| Node ID        | Description                            |
|----------------|----------------------------------------|
| `14551:12699`  | DateRangeFieldInput — secondary        |
| `14551:12714`  | Suffix — secondary                     |

## Notes
- token-mismatch: `var(--default/default, #f1f1f1)` — no foundation token match. Same issue as colorfield component. Closest: `--neutral-100` (#F1F5F7) — too far to auto-snap. Designer must assign token.
- token-near-miss: `var(--foreground/muted, #71717a)` vs `--color-fg-muted` (#64748B). Use raw `#71717a`.
- Open state (calendar popover) not defined in Figma for secondary variant — do not implement without designer confirmation.
- Focus ring for secondary not shown in Figma — undefined. Use same ring as primary or flag.
- All structural sizing tokens (height, padding, radius) identical to primary.
