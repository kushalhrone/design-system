---
component: table
variant: header-cell-sorting
figma-node-id: 19098:45446
figma-content-hash: 8b2e5d7f1a3c
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: table
- sub-component: TableHeaderCell
- variant: header-cell-sorting
- status: ready

## Props
| Prop         | Type                                       | Default         |
|--------------|--------------------------------------------|-----------------|
| showTooltip  | boolean                                    | false           |
| variant      | sortingHighest \| sortingLowest            | sortingHighest  |

## Design Tokens
| Property        | Token Name                   | Value   |
|-----------------|------------------------------|---------|
| text-color      | foreground/foreground        | #18181b |
| font-size       | dimensions/font/text-xs      | 12px    |
| font-weight     | font-medium                  | 500     |
| line-height     | dimensions/leading/text-xs   | 16px    |
| container-gap   | dimensions/spacing/2         | 8px     |
| sort-icon-size  | —                            | 10×10px |

## Anatomy
- **container**: flex row, gap-2 (8px) — label + sort icon
- **label**: Body xs medium, text-color `foreground/foreground`
- **sort icon (sortingHighest)**: `chevron-down` 10×10px, right of label
- **sort icon (sortingLowest)**: `chevron-up` 10×10px (chevron-down rotated 180°), right of label

## Interaction States
| State         | Text Color           | Icon         | Cursor  |
|---------------|----------------------|--------------|---------|
| sortingHighest | foreground/foreground | chevron-down | pointer |
| sortingLowest  | foreground/foreground | chevron-up   | pointer |

## Notes
- token-near-miss: `foreground/foreground #18181b` — closest foundation `--neutral-900` (#0F172A). Δ small. Using raw Figma value.
- The container `gap` changes from **0px** (default) to **8px** (sorting active) — this is a token `dimensions/spacing/2` = 8px → maps to `--space-2` ✓
- Sort icon is embedded inline, right-aligned within the header cell
- Toggling sort direction swaps icon only; label color stays `foreground/foreground` in both sort states
