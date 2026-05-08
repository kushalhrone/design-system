---
component: toolbar
variant: vertical-detached
figma-node-id: 21281:73927
figma-content-hash: node-21281_73927
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: toolbar
- variant: vertical-detached
- status: ready

## Props
| Prop         | Type                          | Default      |
|--------------|-------------------------------|--------------|
| orientation  | horizontal \| vertical        | vertical     |
| isAttached   | boolean                       | false        |
| children     | ReactNode                     | null         |

## Design Tokens
| Property         | Token Name                              | Value         |
|------------------|-----------------------------------------|---------------|
| background       | none                                    | transparent   |
| shadow           | none                                    | —             |
| border-radius    | none                                    | —             |
| padding          | none                                    | —             |
| gap (slot)       | `--space-2`                             | 8px           |
| layout           | flex-col, items-center                  | —             |
| toggle-bg        | token-near-miss (see Notes)             | #f1f1f1       |
| toggle-size      | —                                       | 36×36px       |
| icon-size        | —                                       | 16×16px       |
| toggle-radius    | `--dimensions/radius/rounded-3xl`       | 24px          |
| toggle-max-w     | —                                       | 36px          |
| button-bg        | token-near-miss (see Notes)             | #f1f1f1       |
| button-border    | `--color-border` / `--neutral-200`      | #E2E8ED       |
| button-radius    | `--dimensions/radius/rounded-xl`        | 12px          |
| separator-w      | —                                       | 18px          |
| separator-h      | —                                       | 1px           |
| separator-radius | `--dimensions/radius/rounded-sm`        | 4px           |

## Interaction States
| State    | Background        | Border             | Cursor   | Other                        |
|----------|-------------------|--------------------|----------|------------------------------|
| default  | transparent       | none               | default  | —                            |

## Sub-Components
| Component        | Node ID       | Slots                              |
|------------------|---------------|------------------------------------|
| ToggleButtonGroup| 21281:73929   | 4 toggle buttons stacked (B/I/U/S) |
| Separator        | 2402:4638     | horizontal (rotated), 18px wide    |
| ButtonGroup      | 21281:73931   | 2 buttons stacked (duplicate, cut) |

## Notes
- token-near-miss: toggle/button background Figma `#f1f1f1`, closest token `--neutral-100` (#F1F5F7) — using raw Figma value. Designer must confirm.
- Vertical layout: slot uses `flex-col gap-2` (`--space-2`). ToggleButtonGroup stacks buttons vertically with `max-w-[36px]`.
- Separator in vertical variant renders as a horizontal line (1px tall × 18px wide), achieved by rotating the standard vertical Separator component -90deg.
- ButtonGroup in vertical variant uses `rounded-xl` (12px) and stacks buttons vertically with internal divider.
- Dividers between toggle buttons in vertical are rotated 90deg container-query-based lines.
