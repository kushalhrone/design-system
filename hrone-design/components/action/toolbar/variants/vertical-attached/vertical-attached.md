---
component: toolbar
variant: vertical-attached
figma-node-id: 21281:74239
figma-content-hash: node-21281_74239
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: toolbar
- variant: vertical-attached
- status: ready

## Props
| Prop         | Type                          | Default      |
|--------------|-------------------------------|--------------|
| orientation  | horizontal \| vertical        | vertical     |
| isAttached   | boolean                       | true         |
| children     | ReactNode                     | null         |

## Design Tokens
| Property         | Token Name                              | Value         |
|------------------|-----------------------------------------|---------------|
| background       | `--color-surface` / `--neutral-25`      | #FFFFFF       |
| backdrop-blur    | `--blur`                                | 6px           |
| shadow           | token-near-miss (see Notes)             | see Notes     |
| border-radius    | `--dimensions/radius/rounded-4xl`       | 32px          |
| padding          | `--space-1`                             | 4px           |
| inset-shadow     | overlay-shadow (0 opacity)              | transparent   |
| gap (slot)       | `--space-2`                             | 8px           |
| layout           | flex-col, items-center                  | —             |
| toggle-bg        | token-near-miss (see Notes)             | #f1f1f1       |
| toggle-size      | —                                       | 36×36px       |
| icon-size        | —                                       | 16×16px       |
| toggle-radius    | `--dimensions/radius/rounded-3xl`       | 24px          |
| toggle-max-w     | —                                       | 36px          |
| button-bg        | token-near-miss (see Notes)             | #f1f1f1       |
| button-border    | `--color-border` / `--neutral-200`      | #E2E8ED       |
| button-radius    | `--dimensions/radius/rounded-lg`        | 8px           |
| separator-w      | —                                       | 18px          |
| separator-orient | horizontal                              | —             |

## Interaction States
| State    | Background             | Shadow                     | Cursor   | Other                        |
|----------|------------------------|----------------------------|----------|------------------------------|
| default  | `--color-surface`      | overlay drop-shadow        | default  | backdrop-blur: 6px           |

## Sub-Components
| Component        | Node ID       | Slots                                   |
|------------------|---------------|-----------------------------------------|
| ToggleButtonGroup| 21281:74241   | 4 toggle buttons stacked (B/I/U/S)      |
| Separator        | 2402:4638     | horizontal orientation, 18px, no text   |
| ButtonGroup      | 21281:74243   | 2 buttons stacked (duplicate, cut)      |

## Notes
- token-near-miss: toggle/button background Figma `#f1f1f1`, closest token `--neutral-100` (#F1F5F7) — using raw Figma value. Designer must confirm.
- token-near-miss: shadow Figma `drop-shadow(0px 2px 4px rgba(0,0,0,0.06)) drop-shadow(0px -6px 6px rgba(0,0,0,0.03)) drop-shadow(0px 14px 14px rgba(0,0,0,0.08))`, closest foundation token is `shadow-overlay` — blur radii differ. Using raw Figma value. Designer must confirm.
- Attached variant wraps in frosted-glass pill container: `rounded-4xl`, `p-1`, `backdrop-blur`, overlay drop-shadow.
- Separator in vertical-attached uses `orientation="horizontal"` prop natively (not rotation trick), producing a clean 18px-wide horizontal line with `max-h-[12px]`.
- ButtonGroup in vertical-attached uses `rounded-lg` (8px) — differs from vertical-detached (12px). Designer should confirm intentional.
- Same inset overlay shadow div pattern as horizontal-attached (transparent default state).
