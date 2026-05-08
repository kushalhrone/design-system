---
component: calendar
variant: years
figma-node-id: 19806:14219
figma-content-hash: c9d4e5f6a7b8
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: calendar
- variant: years
- status: ready

## Props

| Prop | Type | Default |
|---|---|---|
| selectedYear | number | 2026 |
| visibleYears | number[] | 2010–2033 (scrollable) |
| columnsPerRow | number | 3 |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| container-width | 280px (raw) | 280px |
| container-height | 304px (raw) | 304px |
| year-tag-height | 32px (raw) | 32px |
| year-tag-radius-default | dimensions/radius/rounded-sm | 4px |
| year-tag-radius-selected | dimensions/radius/rounded-2xl | 16px |
| year-tag-padding-x | dimensions/spacing/2.5 | 10px |
| year-tag-padding-y | dimensions/spacing/1.5 | 6px |
| row-gap | dimensions/spacing/2 | 8px |
| col-gap | dimensions/spacing/2 | 8px |
| font-size | dimensions/font/text-sm | 14px |
| font-weight | 500 | 500 |
| line-height | dimensions/leading/text-sm | 20px |
| tag-text-default | field/foreground (#18181b) | #18181b |
| tag-bg-selected | accent/accent | #02563d |
| tag-text-selected | accent/accent-foreground | #FFFFFF |
| blur-effect | blur (background blur) | var(--blur, 0px) |

## Interaction States

| State | Background | Text | Border-Radius | Cursor |
|---|---|---|---|---|
| default | transparent | field/foreground (#18181b) | rounded-sm (4px) | pointer |
| hover | default/default (#f1f1f1) | field/foreground (#18181b) | rounded-sm (4px) | pointer |
| selected | accent/accent (#02563d) | accent/accent-foreground (#FFFFFF) | rounded-2xl (16px) | pointer |

## Anatomy

```
CalendarNavigation (single, open — shows year in accent color + chevron-down)

_CalendarYear container (280×304px, overflow hidden)
  └─ 8 rows × 3 columns of year Tag cells
     └─ Tag (default): transparent bg, rounded-sm
     └─ Tag/selected: accent/accent bg, rounded-2xl (pill shape)
```

## Navigation in years mode

When in years mode, CalendarNavigation shows:
- Month + Year text in `--accent/accent` (#02563d) color
- `chevron-down` icon instead of `chevron-right`
- Left/right arrows are invisible (opacity: 0) but still present in layout

See `calendar-navigation/calendar-navigation.md §type=open`.

## Figma Node Map

| Node ID | Element |
|---|---|
| `19806:14219` | Calendar — type=years |
| `14480:4994` | CalendarPopover — type=years |
| `21979:66508` | _CalendarYear sub-component |
| `14490:10287` | CalendarNavigation — single, open |
| `14480:3247` | Year Tag — selected (2026) |
| `14480:3242` | Year Tag — default |

## Notes

- token-mismatch: `container-width` is 280px raw (not from spacing scale). No token match found — using raw value.
- token-mismatch: `year-tag-height` is 32px raw. No exact token match — using raw value.
- `blur` effect on year tags uses `BACKGROUND_BLUR` type in Figma; value resolves to `var(--blur, 0px)` which is effectively no blur in default theme.
- Selected year uses `rounded-2xl` (16px radius) — pill shape on 32px height, unlike default which uses `rounded-sm` (4px).
- Year grid is rendered as a scrollable list; Figma shows years 2010–2033 (8 rows × 3 cols = 24 cells).
