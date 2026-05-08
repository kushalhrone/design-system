---
component: table
variant: footer-pagination
figma-node-id: 19109:13225
figma-content-hash: 2c6b9e4f1d7a
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: table
- sub-component: TableFooter
- variant: footer-pagination
- status: ready

## Props
| Prop  | Type        | Default     |
|-------|-------------|-------------|
| type  | pagination  | pagination  |

## Design Tokens
| Property           | Token Name                        | Value    |
|--------------------|-----------------------------------|----------|
| padding-left       | dimensions/spacing/4              | 16px     |
| padding-right      | dimensions/spacing/2              | 8px      |
| padding-y          | dimensions/spacing/2.5            | 10px     |
| count-text-color   | foreground/muted                  | #71717a  |
| count-font-size    | dimensions/font/text-sm           | 14px     |
| count-font-weight  | font-regular                      | 400      |
| button-height      | —                                 | 32px     |
| button-padding-x   | dimensions/spacing/3              | 12px     |
| button-padding-y   | dimensions/spacing/1.5            | 6px      |
| button-radius      | dimensions/radius/rounded-lg      | 8px      |
| button-border      | border (--neutral-200)            | #E2E8ED  |
| button-text-color  | default/default-foreground        | #18181b  |
| button-font-size   | dimensions/font/text-sm           | 14px     |
| button-font-weight | font-medium                       | 500      |
| button-gap         | dimensions/spacing/2              | 8px      |
| icon-size          | —                                 | 16×16px  |
| prev-disabled-opacity | disabled-opacity               | 0.5      |

## Anatomy
```
TableFooter (type=pagination)
└── Pagination (flex row, justify-between, w-530px)
    ├── count text "1 to 5 of 10 invoices" (font-regular, text-sm, foreground/muted)
    └── button group (flex, gap-2)
        ├── Prev button (disabled state: opacity-0.5)
        │   ├── chevron-left icon (16px, rotated 90°)
        │   └── "Prev" label
        └── Next button
            ├── "Next" label
            └── chevron-right icon (16px, rotated -90°)
```

## Notes
- token-near-miss: `foreground/muted #71717a` → `--neutral-500` (#64748B). Using raw.
- `border #E2E8ED` → EXACT match `--neutral-200` ✓
- `rounded-lg` (8px) = `--radius-lg` ✓
- Prev button is shown at `opacity-0.5` (disabled) on first page
- Chevron icons are the `arrow` icon rotated: `rotate-90` for Prev (left), `-rotate-90` for Next (right)
- Pagination container width in Figma is 530px — in implementation use flex to fill available width
- Count text format: `"{start} to {end} of {total} {items}"` — localizable
