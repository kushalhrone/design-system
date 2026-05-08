---
component: tooltip
variant: inverse
figma-node-id: 16915:30160
figma-content-hash: b7e2a1f093cd
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: tooltip
- variant: inverse
- status: ready

## Props
| Prop            | Type                                                                                                                                                              | Default    |
|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| content         | string                                                                                                                                                            | —          |
| showArrow       | boolean                                                                                                                                                           | true       |
| arrowPosition   | `topStart` \| `topCenter` \| `topEnd` \| `rightStart` \| `rightCenter` \| `rightEnd` \| `leftStart` \| `leftCenter` \| `leftEnd` \| `bottomStart` \| `bottomCenter` \| `bottomEnd` | `topStart` |
| inverse         | boolean                                                                                                                                                           | true       |

## Design Tokens
| Property           | Token Name                          | Value                                                                                                              |
|--------------------|-------------------------------------|--------------------------------------------------------------------------------------------------------------------|
| background         | —                                   | `#18181b` (raw — see Notes)                                                                                        |
| text-color         | —                                   | `#FFFFFF` (raw — see Notes)                                                                                        |
| border-radius      | `--dimensions/radius/rounded-xl`    | `12px`                                                                                                             |
| arrow-border-radius| `--dimensions/radius/rounded-sm`    | `4px`                                                                                                              |
| padding-x          | `--space-2`                         | `8px`                                                                                                              |
| padding-y          | `--space-1`                         | `4px`                                                                                                              |
| font-family        | `--font-body`                       | `Noto Sans`                                                                                                        |
| font-size          | `--text-xs`                         | `12px`                                                                                                             |
| font-weight        | `--font-regular`                    | `400`                                                                                                              |
| line-height        | —                                   | `1rem` / `16px` (raw — see Notes)                                                                                  |
| letter-spacing     | `--tracking-normal`                 | `0`                                                                                                                |
| shadow             | Overlay (effects.md)                | `0px 14px 28px rgba(0,0,0,0.08), 0px -6px 12px rgba(0,0,0,0.03), 0px 2px 8px rgba(0,0,0,0.06)`                   |
| inner-shadow       | —                                   | `inset 0px 0px 1px 0px rgba(0,0,0,0)` (transparent)                                                               |
| backdrop-blur      | `--blur`                            | `6px`                                                                                                              |
| arrow-color        | —                                   | `#18181b` (matches background, raw)                                                                                |
| arrow-size         | —                                   | `10px × 10px` rotated 45°                                                                                          |
| arrow-offset       | —                                   | `~6px` from container edge                                                                                         |

## Arrow Position Offsets
| arrowPosition  | Arrow placement (absolute within container)                       |
|----------------|-------------------------------------------------------------------|
| topStart       | top: -6px; left: ~16px                                            |
| topCenter      | top: -6px; left: 50% - 0.5px (translate -50%)                    |
| topEnd         | top: -6px; right: ~16px                                           |
| bottomStart    | bottom: -6px; left: ~16px                                         |
| bottomCenter   | bottom: -6px; left: 50% + 0.22px (translate -50%)                |
| bottomEnd      | bottom: -6px; right: ~16px                                        |
| leftStart      | left: -5px; top: 50% + 0.07px (translate -50%)                   |
| leftCenter     | left: -5px; top: 50% + 0.07px (translate -50%)                   |
| leftEnd        | left: -5px; top: 50% + 0.07px (translate -50%)                   |
| rightStart     | right: -5px; top: 50% + 0.07px (translate -50%)                  |
| rightCenter    | right: -5px; top: 50% + 0.07px (translate -50%)                  |
| rightEnd       | right: -5px; top: 50% + 0.07px (translate -50%)                  |

## Interaction States
| State    | Background | Text      | Shadow         | Cursor  | Other              |
|----------|------------|-----------|----------------|---------|--------------------|
| default  | `#18181b`  | `#FFFFFF` | overlay shadow | default | backdrop-blur: 6px |
| no-arrow | `#18181b`  | `#FFFFFF` | overlay shadow | default | showArrow=false    |

## Difference from Default Variant
| Property       | Default             | Inverse             |
|----------------|---------------------|---------------------|
| background     | `#FFFFFF`           | `#18181b`           |
| text-color     | `#18181b`           | `#FFFFFF`           |
| arrow-color    | `#FFFFFF`           | `#18181b`           |
| backdrop layer | bg white + blur     | bg dark + blur      |

## Notes
- token-near-miss: background `#18181b` (Figma `--foreground/overlay`). Closest: `--neutral-900` (#0F172A). Differs. Do NOT auto-snap. Use raw `#18181b`.
- token-mismatch: text `#FFFFFF` (Figma `--overlay`). Foundation `--neutral-25` = #FFFFFF (near-miss). Use raw `#FFFFFF`.
- Same line-height caveat as default — use `1rem` raw.
- Arrow color matches background exactly — arrow "bleeds" into container creating seamless triangle effect.
- All 12 arrow positions identical offsets to default variant.
- Inverse used for dark tooltips on light backgrounds — prefer when triggering element sits on `--color-surface` or `--color-bg`.
