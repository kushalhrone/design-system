---
component: calendar-navigation
variant: all-variants
figma-node-id: 2729:27661
figma-content-hash: f3a4b5c6d7e8
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: CalendarNavigation
- variant: all-variants (single-closed, single-open, multi)
- status: ready

## Props

| Prop | Type | Default |
|---|---|---|
| variant | single \| multi | single |
| type | closed \| open | closed |
| month | string | "January" |
| year | string | "2025" |
| showExpand | boolean | true |
| showLeft | boolean | true |
| showRight | boolean | true |
| showYear | boolean | true |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| nav-height | 56px (min-height, raw) | 56px |
| nav-padding-y | dimensions/spacing/4 | 16px |
| nav-width-single | 280px (raw) | 280px |
| arrow-size | dimensions/spacing/6 | 24px |
| arrow-radius | dimensions/radius/rounded-md | 6px |
| arrow-padding | dimensions/spacing/1 | 4px |
| arrow-icon-size | 16px (raw) | 16px |
| chevron-size | 12px (raw) | 12px |
| title-gap | dimensions/spacing/1.5 | 6px |
| font-size | dimensions/font/text-sm | 14px |
| font-weight | 500 | 500 |
| line-height | dimensions/leading/text-sm | 20px |

## Variants

### single, type=closed (default)

Used in `present` and `future` calendar types.

| Element | Token / Value | Notes |
|---|---|---|
| month text | foreground/foreground (#18181b) | left-aligned |
| year text | foreground/foreground (#18181b) | left-aligned, after month |
| expand chevron | `chevron-right` icon, 12px | rotated -90deg = points up |
| left arrow | foreground/foreground | visible |
| right arrow | foreground/foreground | visible |
| arrow hover bg | default/default (#f1f1f1) | rounded-md |

Figma node: `2729:27662`

### single, type=open (years mode)

Used when the year picker is expanded. Month/year labels change to accent color.

| Element | Token / Value | Notes |
|---|---|---|
| month text | accent/accent (#02563d) | accent color |
| year text | accent/accent (#02563d) | accent color |
| expand chevron | `chevron-down` icon, 12px | indicates expanded state |
| left arrow | opacity: 0 (hidden) | still in DOM for layout |
| right arrow | opacity: 0 (hidden) | still in DOM for layout |

Figma node: `14490:10287`

### multi

Used in the `multi` calendar type. No expand chevron, no left title container.

| Element | Token / Value | Notes |
|---|---|---|
| left arrow | foreground/foreground | visible, outer left |
| month text | foreground/foreground (#18181b) | centered |
| year text | foreground/foreground (#18181b) | centered |
| right arrow | foreground/foreground | visible, outer right |
| expand chevron | none | not shown in multi |

Figma node: `19806:15964`

## Arrow Button States

| State | Background | Cursor |
|---|---|---|
| default | transparent | pointer |
| hover | default/default (#f1f1f1) | pointer |

Arrow component figma node: `2729:27693` (_CalendarDateNav)

## Figma Node Map

| Node ID | Variant |
|---|---|
| `2729:27662` | single, closed |
| `14490:10287` | single, open |
| `19806:15964` | multi |
| `2729:27693` | _CalendarDateNav — arrow default |
| `2729:27694` | _CalendarDateNav — arrow hover |

## Notes

- In `type=open` (years mode), left/right arrows are `opacity:0` but retain their 24px width to preserve layout symmetry
- The expand icon switches from `chevron-right` (closed) to `chevron-down` (open)
- Multi navigation has no expand control — year picker is not accessible from multi view
- Arrow icon is a 16px chevron rotated 90° (left) or -90° (right) from a down-arrow SVG base
