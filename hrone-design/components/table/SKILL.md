---
name: component-table
description: >
  Builds the Table component and all its sub-components and variants.
  Read this skill when asked to build, update, or spec the Table component.
  Covers: TableHeaderCell, TableHeader, TableRowCell, TableRow, TableFooter, and the composed Table.
  Available variants: header-cell-default, header-cell-sorting, header-primary, header-secondary,
  row-default, row-hover, row-disabled, cell-value, cell-visual, cell-compare-chip, cell-actions,
  footer-data, footer-pagination.
---

# Table Component

## How to build this component

1. Read `foundation/foundation-token/color.md` for color token resolution
2. Read `foundation/foundation-token/spacing.md` for spacing/padding tokens
3. Read `foundation/foundation-token/typography.md` for font specs
4. Read `foundation/foundation-token/radius.md` for border-radius tokens
5. Read the relevant variant file(s) under `variants/`
6. Cross-ref token names → resolve to values from foundation
7. Build using the resolved spec

## Component Hierarchy

```
Table
├── TableHeader                     → header-primary / header-secondary
│   ├── TableHeaderCell             → header-cell-default / header-cell-sorting
│   └── Separator (vertical 1px)
├── TableRow (×N)                   → row-default / row-hover / row-disabled
│   ├── TableRowCell (leading)      → cell-value (leading)
│   ├── TableRowCell (visual)       → cell-visual
│   ├── TableRowCell (regular)      → cell-value (regular)
│   └── TableRowCell (actions)      → cell-actions / cell-compare-chip
└── TableFooter                     → footer-data / footer-pagination
```

## Available Variants

| Variant                | Figma Node    | Description                                  |
|------------------------|---------------|----------------------------------------------|
| header-cell-default    | 19098:45444   | Column header, no sort active                |
| header-cell-sorting    | 19098:45446   | Column header with sort indicator            |
| header-primary         | 19098:45647   | Table header row, transparent background     |
| header-secondary       | 19098:45649   | Table header row, surface-secondary bg + rounded |
| row-default            | 19107:10136   | Data row, default/resting state              |
| row-hover              | 19107:10221   | Data row, hover state (bg overlay 30%)       |
| row-disabled           | 19107:10304   | Data row, disabled state (50% opacity)       |
| cell-value             | 19107:10030   | ID/text cell — leading (bold) or regular     |
| cell-visual            | 19107:10034   | Avatar + name/email cell                     |
| cell-compare-chip      | 19107:10032   | Chip (status) or compare (value + trend) cell|
| cell-actions           | 19107:10038   | Row action buttons (export/view/edit/delete) |
| footer-data            | 19109:13226   | Footer showing aggregate total               |
| footer-pagination      | 19109:13225   | Footer with pagination controls              |

## Key Props Summary

### TableHeader
- `variant`: `primary` (transparent) | `secondary` (surface-secondary bg + rounded-2xl)
- `width`: `leading` (fixed column widths) | `equal` (all flex-1)
- `showDrag`: boolean — show draggable row handle

### TableRow
- `state`: `default` | `hover` | `disabled`
- `width`: `leading` | `equal`
- `showSeparator`: boolean — bottom 1px divider

### TableRowCell
- `type`: `value` | `visual` | `visualSupport` | `compare` | `chip` | `actions`
- `variant`: `leading` | `regular`
- `showPrefix`: boolean — mini donut chart prefix
- `showSuffix`: boolean — copy icon suffix (value cells)

### TableFooter
- `type`: `data` (totals row) | `pagination` (prev/next navigation)

## Token Mismatches (System-wide)

| Figma Token               | Raw Value      | Foundation Status                           |
|---------------------------|----------------|---------------------------------------------|
| foreground/foreground     | #18181b        | near-miss → --neutral-900 (#0F172A)         |
| foreground/muted          | #71717a        | near-miss → --neutral-500 (#64748B)         |
| surface/surface-secondary | #efeff0        | mismatch — no foundation token              |
| default/default           | #f1f1f1        | near-miss → --neutral-100 (#F1F5F7)         |
| separator/separator-tertiary | #cdcdce     | near-miss → --neutral-300 (#CBD5DD)         |
| success/success           | #16A34A        | EXACT → --success ✓                         |
| danger/danger-soft        | rgba(217,45,32,0.15) | --error (#DC2626) at 15% opacity ✓    |
| border                    | #E2E8ED        | EXACT → --neutral-200 ✓                     |

## Notes
- Always use token names from foundation, never hardcode hex values
- If a state is marked `undefined`, flag it and ask the designer before building
- Resolve all `near-miss` tokens with the designer before shipping to production
- `surface/surface-secondary` has no foundation match — flag before using secondary header variant
