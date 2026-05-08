---
component: toolbar
variant: horizontal-detached
figma-node-id: 21281:71577
figma-content-hash: node-21281_71577
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: toolbar
- variant: horizontal-detached
- status: ready

## Props
| Prop         | Type                          | Default      |
|--------------|-------------------------------|--------------|
| orientation  | horizontal \| vertical        | horizontal   |
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
| toggle-bg        | token-near-miss (see Notes)             | #f1f1f1       |
| toggle-size      | —                                       | 36×36px       |
| icon-size        | —                                       | 16×16px       |
| toggle-radius    | `--dimensions/radius/rounded-3xl`       | 24px          |
| button-bg        | token-near-miss (see Notes)             | #f1f1f1       |
| button-border    | `--color-border` / `--neutral-200`      | #E2E8ED       |
| button-radius    | `--dimensions/radius/rounded-lg`        | 8px           |
| separator-h      | —                                       | 18px          |
| separator-radius | `--dimensions/radius/rounded-sm`        | 4px           |

## Interaction States
| State    | Background        | Border             | Cursor   | Other                        |
|----------|-------------------|--------------------|----------|------------------------------|
| default  | transparent       | none               | default  | —                            |

## Sub-Components
| Component        | Node ID       | Slots                              |
|------------------|---------------|------------------------------------|
| ToggleButtonGroup| 15251:25661   | 4 toggle buttons (B/I/U/S)         |
| Separator        | 2402:4638     | vertical, 18px, no text            |
| ButtonGroup      | 14216:12721   | 2 buttons (duplicate, cut)         |

## Notes
- token-near-miss: toggle/button background Figma `#f1f1f1`, closest token `--neutral-100` (#F1F5F7) — using raw Figma value. Designer must confirm.
- Detached variant has no outer container, no shadow, no padding. Slot (`gap: 8px`) is the only wrapping structure.
- Interaction states (hover/active/focus/disabled) are defined on ToggleButton and Button sub-components, not the Toolbar container.
- ToggleButtonGroup uses `rounded-3xl` (24px) outer radius and overflow-clip to produce pill shape.
- Separator between groups: 1px wide × 18px tall, `rounded-sm` (4px), no text label.
