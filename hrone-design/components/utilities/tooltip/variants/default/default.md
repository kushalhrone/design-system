---
component: tooltip
variant: default
figma-node-id: 2638:7729
figma-content-hash: a3f1c8b2d94e
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: tooltip
- variant: default
- status: ready

## Props
| Prop            | Type                                                                                                                                                              | Default    |
|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| content         | string                                                                                                                                                            | —          |
| showArrow       | boolean                                                                                                                                                           | true       |
| arrowPosition   | `topStart` \| `topCenter` \| `topEnd` \| `rightStart` \| `rightCenter` \| `rightEnd` \| `leftStart` \| `leftCenter` \| `leftEnd` \| `bottomStart` \| `bottomCenter` \| `bottomEnd` | `topStart` |
| inverse         | boolean                                                                                                                                                           | false      |

## Design Tokens
| Property           | Token Name                          | Value                                                                                                              |
|--------------------|-------------------------------------|--------------------------------------------------------------------------------------------------------------------|
| background         | —                                   | `#FFFFFF` (raw — see Notes)                                                                                        |
| text-color         | —                                   | `#18181b` (raw — see Notes)                                                                                        |
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
| inner-shadow       | —                                   | `inset 0px 0px 1px 0px rgba(0,0,0,0)` (transparent — overlay-shadow token resolves to 0 alpha in default)         |
| backdrop-blur      | `--blur`                            | `6px`                                                                                                              |
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
| State    | Background | Text     | Shadow          | Cursor  | Other                  |
|----------|------------|----------|-----------------|---------|------------------------|
| default  | `#FFFFFF`  | `#18181b`| overlay shadow  | default | backdrop-blur: 6px     |
| no-arrow | `#FFFFFF`  | `#18181b`| overlay shadow  | default | showArrow=false; no arrow rendered |

## Notes
- token-mismatch: background `#FFFFFF` (Figma `--overlay`) has no exact foundation match. `--neutral-25` (#FFFFFF) is nearest — 3-hex-point difference. Use raw `#FFFFFF` until designer confirms.
- token-near-miss: text color `#18181b` (Figma `--foreground/overlay`). Closest: `--neutral-900` (#0F172A). Differs by 4 hex points. Do NOT auto-snap. Use raw `#18181b`.
- token-mismatch: `line-height: 1rem` (16px for text-xs). Foundation `--leading-*` tokens are unitless ratios (1, 1.25, 1.375, 1.5…); none resolve to exactly 1rem at 12px base. Use raw `1rem`. `--typography-body-xs` uses `--leading-loose` (ratio 2) which gives 24px — incorrect for tooltip. Do not use body-xs semantic token.
- inner-shadow color `--overlay-shadow` resolves to `rgba(0,0,0,0)` in default variant (fully transparent). Effectively invisible but present for structural parity with inverse.
- Arrow is a 10px square div, `border-radius: 4px`, rotated `45deg`, positioned absolutely outside the container bounds — parent must have `overflow: visible`.
- Figma reference: https://v3.heroui.com/docs/react/components/tooltip
