---
component: table
variant: cell-compare-chip
figma-node-id: 19107:10032
figma-content-hash: 3e7f1b4a9d2c
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: table
- sub-component: TableRowCell
- variant: cell-compare-chip
- status: ready

## Props
| Prop    | Type               | Default  |
|---------|--------------------|----------|
| type    | compare \| chip    | chip     |
| variant | regular            | regular  |

## Design Tokens
| Property             | Token Name                     | Value                    |
|----------------------|--------------------------------|--------------------------|
| chip-bg              | success/success-soft           | rgba(3,152,85,0.15)      |
| chip-text-color      | success/success                | #16A34A                  |
| chip-font-size       | dimensions/font/text-xs        | 12px                     |
| chip-font-weight     | font-medium                    | 500                      |
| chip-line-height     | dimensions/leading/text-xs     | 16px                     |
| chip-padding-x       | dimensions/spacing/1           | 4px                      |
| chip-height          | —                              | 20px                     |
| chip-radius          | dimensions/radius/rounded-xl   | 12px                     |
| compare-gap          | dimensions/spacing/2           | 8px                      |
| compare-text-color   | foreground/foreground          | #18181b                  |
| compare-arrow-size   | —                              | 12×12px                  |

## Cell Type Variants

### type=chip (variant=regular)
- **Single chip** stacked below (flex-col, items-start)
- Chip: success-soft bg, `rounded-xl` (12px), h-20px, px-1 (4px)
- Text: "Active" in `success/success` green, font-medium, text-xs
- Layout: `flex-col items-start`

### type=compare (variant=regular)
- **Value text** (e.g. "$1,000") + **chip with arrow icon**
- Chip: same success-soft treatment + arrow-up icon (12×12px, rotated 180° = arrow pointing up)
- Text in chip: percentage (e.g. "40%"), success green
- Layout: `flex items-center gap-2`

## Anatomy
```
TableRowCell (type=compare)
├── text "$1,000" (font-regular, text-sm, foreground/foreground)
└── Chip
    ├── arrow-up icon 12×12px
    └── text "40%" (font-medium, text-xs, success/success)
```

## Notes
- `success/success #16A34A` → EXACT match `--success` (#16A34A) ✓
- `success/success-soft rgba(3,152,85,0.15)` → derived: `--success` at 15% opacity ✓
- Chip uses `backdrop-blur` effect (blur token) — apply `backdrop-filter: blur(var(--blur))` in CSS
- `rounded-xl` (12px) = `--radius-xl` ✓
- `chip` type stacks content vertically — for status cells (e.g. Active, Inactive)
- `compare` type shows value + trend chip inline — for numeric comparison cells
- Arrow icon for compare is `style=regular keywords=-` icon rotated 180° to become arrow-up
