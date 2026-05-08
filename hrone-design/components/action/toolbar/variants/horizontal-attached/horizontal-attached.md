---
component: toolbar
variant: horizontal-attached
figma-node-id: 21281:73353
figma-content-hash: node-21281_73353
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: toolbar
- variant: horizontal-attached
- status: ready

## Props
| Prop         | Type                          | Default      |
|--------------|-------------------------------|--------------|
| orientation  | horizontal \| vertical        | horizontal   |
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
| toggle-bg        | token-near-miss (see Notes)             | #f1f1f1       |
| toggle-size      | —                                       | 36×36px       |
| icon-size        | —                                       | 16×16px       |
| toggle-radius    | `--dimensions/radius/rounded-3xl`       | 24px          |
| button-bg        | token-near-miss (see Notes)             | #f1f1f1       |
| button-border    | `--color-border` / `--neutral-200`      | #E2E8ED       |
| button-radius    | `--dimensions/radius/rounded-4xl` (17px container, 8px inner) | see Notes |
| separator-h      | —                                       | 18px          |
| separator-radius | `--dimensions/radius/rounded-sm`        | 4px           |

## Interaction States
| State    | Background             | Shadow                     | Cursor   | Other                        |
|----------|------------------------|----------------------------|----------|------------------------------|
| default  | `--color-surface`      | overlay drop-shadow        | default  | backdrop-blur: 6px           |

## Sub-Components
| Component        | Node ID       | Slots                              |
|------------------|---------------|------------------------------------|
| ToggleButtonGroup| 21281:73355   | 4 toggle buttons (B/I/U/S)         |
| Separator        | 2402:4638     | vertical, 18px, no text            |
| ButtonGroup      | 21281:73357   | 2 buttons (duplicate, cut)         |

## Notes
- token-near-miss: toggle/button background Figma `#f1f1f1`, closest token `--neutral-100` (#F1F5F7) — using raw Figma value. Designer must confirm.
- token-near-miss: shadow Figma `drop-shadow(0px 2px 4px rgba(0,0,0,0.06)) drop-shadow(0px -6px 6px rgba(0,0,0,0.03)) drop-shadow(0px 14px 14px rgba(0,0,0,0.08))`, closest foundation token is `shadow-overlay` (`0px 14px 28px rgba(0,0,0,0.08), 0px -6px 12px rgba(0,0,0,0.03), 0px 2px 8px rgba(0,0,0,0.06)`) — blur radii differ (14 vs 28, 6 vs 12, 4 vs 8). Using raw Figma value. Designer must confirm.
- Attached variant wraps the slot in a frosted-glass pill container with backdrop blur + overlay drop-shadow.
- Has an absolute inset overlay div (`inset-shadow: 0 0 1px rgba(0,0,0,0)` = transparent) for the overlay-shadow pseudo-border — effectively invisible in default state but wired up in Figma for future states.
- ButtonGroup outer container in attached variant uses radius ~17px (Figma literal) — not a clean design token. Near-miss to `--dimensions/radius/rounded-2_5xl` (20px) or `rounded-xl` (12px). Log as token-mismatch.
- token-mismatch: ButtonGroup radius in attached horizontal = 17px, no exact foundation match. Nearest: `--dimensions/radius/rounded-2_5xl` (20px). Using raw 17px value.
