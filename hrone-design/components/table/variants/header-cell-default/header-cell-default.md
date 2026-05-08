---
component: table
variant: header-cell-default
figma-node-id: 19098:45444
figma-content-hash: 3a7f9c2e1b4d
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: table
- sub-component: TableHeaderCell
- variant: header-cell-default
- status: ready

## Props
| Prop         | Type                                        | Default   |
|--------------|---------------------------------------------|-----------|
| showTooltip  | boolean                                     | false     |
| variant      | default \| sortingHighest \| sortingLowest  | default   |

## Design Tokens
| Property        | Token Name                            | Value         |
|-----------------|---------------------------------------|---------------|
| text-color      | foreground/muted                      | #71717a       |
| font-family     | font (Noto Sans)                      | Noto Sans     |
| font-size       | dimensions/font/text-xs               | 12px          |
| font-weight     | font-medium                           | 500           |
| line-height     | dimensions/leading/text-xs            | 16px          |
| letter-spacing  | letter-spacing                        | 0px           |
| gap             | dimensions/spacing/2 (0px in default) | 0px           |
| icon-size       | —                                     | 12px (tooltip)|

## Anatomy
- **container**: flex row, items-center, gap-1 (4px) between label and tooltip icon
- **label**: `<p>` with Body xs medium style
- **tooltip icon** (optional): 12×12px circle-info icon, shown when `showTooltip=true`

## Interaction States
| State    | Text Color         | Cursor  | Other              |
|----------|--------------------|---------|--------------------|
| default  | foreground/muted   | default | no sort icon       |
| sortingHighest | foreground/foreground | pointer | chevron-down 10px |
| sortingLowest  | foreground/foreground | pointer | chevron-up 10px   |

## Notes
- token-near-miss: `foreground/muted #71717a` — closest foundation token `--neutral-500` (#64748B). Δ~3 hex pts. Using raw Figma value. Designer must align.
- In `sortingHighest` and `sortingLowest` variants the text shifts to `foreground/foreground (#18181b)` — near-miss to `--neutral-900` (#0F172A). Using raw value.
- Tooltip (circle-info icon) is an optional 12×12px icon — show only when `showTooltip=true`
- This sub-component is always embedded inside `TableHeader`, never used standalone
