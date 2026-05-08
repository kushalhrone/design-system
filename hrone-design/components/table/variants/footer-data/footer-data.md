---
component: table
variant: footer-data
figma-node-id: 19109:13226
figma-content-hash: 5a3d8f2b1c7e
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: table
- sub-component: TableFooter
- variant: footer-data
- status: ready

## Props
| Prop  | Type  | Default |
|-------|-------|---------|
| type  | data  | data    |

## Design Tokens
| Property         | Token Name                   | Value    |
|------------------|------------------------------|----------|
| padding-x        | dimensions/spacing/4         | 16px     |
| padding-y        | dimensions/spacing/2.5       | 10px     |
| icon-size        | —                            | 20×20px  |
| text-color       | foreground/foreground        | #18181b  |
| font-size        | dimensions/font/text-sm      | 14px     |
| font-weight      | font-regular (label) / font-medium (value) | 400 / 500 |
| line-height      | dimensions/leading/text-sm   | 20px     |
| value-width      | —                            | 120px (text-right) |

## Anatomy
```
TableFooter (type=data)
├── container (flex row, justify-between, items-center)
│   ├── left: icon (20px circle-dollar) + label "Total Spend" (font-regular, text-sm)
│   └── right: value "$149.61" (font-medium, text-sm, text-right, w-120px)
```

## Notes
- token-near-miss: `foreground/foreground #18181b` → `--neutral-900` (#0F172A). Using raw.
- Left section width is 244px (flex-1 in narrower views)
- `circle-dollar` icon is 20×20px — represents a monetary/financial summary row
- This footer variant summarizes aggregated data across all table rows
- Used at the bottom of tables that show totals, averages, or sum rows
