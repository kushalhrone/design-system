---
component: table
variant: cell-value
figma-node-id: 19107:10030
figma-content-hash: 1d6e4b9f3c7a
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: table
- sub-component: TableRowCell
- variant: cell-value
- status: ready

## Props
| Prop         | Type                    | Default  |
|--------------|-------------------------|----------|
| showPrefix   | boolean                 | false    |
| showSuffix   | boolean                 | true     |
| type         | value                   | value    |
| variant      | leading \| regular      | leading  |

## Design Tokens
| Property         | Token Name                       | Value   |
|------------------|----------------------------------|---------|
| text-color       | foreground/foreground            | #18181b |
| font-size        | dimensions/font/text-sm          | 14px    |
| font-weight      | font-medium (leading) / font-regular (regular) | 500 / 400 |
| line-height      | dimensions/leading/text-sm       | 20px    |
| gap              | dimensions/spacing/2             | 8px     |
| copy-icon-size   | —                                | 16×16px |
| chart-prefix-size| —                                | 20×20px |

## Size Variants
| Variant | Width  | Font Weight | Text Style     |
|---------|--------|-------------|----------------|
| leading | 96px   | 500 medium  | Body sm medium |
| regular | 94px   | 400 regular | Body sm        |

## Anatomy
```
TableRowCell (type=value)
├── [prefix] chart icon 20×20px (optional, showPrefix=true) — mini donut chart
├── text value ("#4586932")
└── [suffix] copy icon 16×16px (optional, showSuffix=true)
```

## Notes
- token-near-miss: `foreground/foreground #18181b` → `--neutral-900` (#0F172A). Δ small. Using raw.
- `leading` variant is used for the **primary identifier column** (e.g. Worker ID / reference numbers) — always bold + copy icon
- `regular` variant is used for secondary columns (text values like Role, Worker Type)
- `showPrefix=true` shows a mini donut chart prefix (see `_TableChart-eg` component); used for comparison/metric columns
- `showSuffix=true` (default for leading) shows a copy-to-clipboard icon; set to false for regular non-ID columns
- spacing/2 = 8px = `--space-2` ✓
