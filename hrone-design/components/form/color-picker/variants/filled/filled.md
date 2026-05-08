---
component: color-picker
variant: filled
figma-node-id: 18581:89574
figma-content-hash: 86429013-09b3
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: color-picker
- variant: filled
- status: ready

## Props
| Prop    | Type                      | Default    |
|---------|---------------------------|------------|
| variant | empty \| open \| filled   | filled     |
| label   | string                    | "Color"    |
| value   | string                    | "#E9B42F"  |

## Design Tokens — Trigger Row (filled state)

| Property              | Token Name      | Value                        |
|-----------------------|-----------------|------------------------------|
| width                 | —               | 196px (raw)                  |
| gap (swatch→label)    | `--space-3`     | 12px                         |
| swatch container size | `--space-9`     | 36px × 36px                  |
| swatch fill size      | `--space-8`     | 32px × 32px (centered inset) |
| swatch fill           | —               | selected color solid fill    |
| swatch border-radius  | `--radius-full` | 9999px                       |
| swatch inner shadow   | —               | `inset 0 0 1px rgba(0,0,0,0.3)` (raw) |
| selection ring size   | `--space-11`    | 44px × 44px                  |
| selection ring border | —               | 3.5px solid white (raw)      |
| selection ring radius | `--radius-full` | 9999px                       |
| checkmark size        | `--space-3`     | 12px × 12px                  |
| checkmark color       | —               | white (over selected color)  |
| label font-size       | `--text-sm`     | 14px                         |
| label line-height     | `--leading-normal` | 20px                      |
| label font-weight     | `--font-medium` | 500                          |
| label color           | —               | `#18181B` (raw — see Notes)  |
| label font-family     | `--font-body`   | Noto Sans                    |

## Structural Difference vs Empty

| Element              | empty / open                  | filled                                      |
|----------------------|-------------------------------|---------------------------------------------|
| swatch fill          | rainbow conic-gradient        | solid selected color (e.g. `#E9B42F`)       |
| swatch size          | 36px (full container)         | 32px (slightly inset within 36px container) |
| selection ring       | absent                        | 44px white ring, 3.5px border, centered     |
| checkmark            | absent                        | 12px white check icon centered on swatch    |
| label text           | "Pick a color" (muted)        | "Color" (foreground, e.g. user-set label)   |
| label color          | muted `#71717A`               | foreground `#18181B`                        |
| label has required * | no (shown by default in Label component) | no (showRequired=false) |

## Example Filled State (color = `#E9B42F`)
- Swatch: solid amber fill `#E9B42F` + inset shadow
- Ring: 44px circle, 3.5px white border, centered offset: `left: calc(50% + 0.2px)` (1px right nudge)
- Checkmark: white SVG check, 12px × 12px

## Notes
- token-near-miss: label `--foreground/foreground: #18181B` vs `--neutral-900: #0F172A` — use raw
- token-mismatch: selection ring border `3.5px` — no foundation spacing token for 3.5px. Use raw.
- token-mismatch: ring size `44px` (`--space-11`) — `--space-11: 44px` exists in spacing scale ✓ use token
- token-mismatch: `0.2px` horizontal nudge on ring center — CSS artifact, use raw
- token-mismatch: `--shadow-inner: rgba(0,0,0,0.3)` — no foundation token
- Swatch fill color is dynamic (user-selected). Checkerboard bg-image is layered beneath for transparent color support.
- Checkmark icon SVG rendered at 12px; icon uses white fill for contrast against any selected hue
- Clicking filled trigger should re-open the panel (open variant)
