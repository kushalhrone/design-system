---
component: color-picker
variant: empty
figma-node-id: 18581:89574
figma-content-hash: 12a72dcb-c278
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: color-picker
- variant: empty
- status: ready

## Props
| Prop      | Type                        | Default  |
|-----------|-----------------------------|----------|
| variant   | empty \| open \| filled     | empty    |
| label     | string                      | "Pick a color" |
| value     | string \| null              | null     |

## Design Tokens — Trigger Row (empty state)

| Property           | Token Name          | Value                   |
|--------------------|---------------------|-------------------------|
| width              | —                   | 196px (raw — see Notes) |
| gap (swatch→label) | `--space-3`         | 12px                    |
| align items        | center              | —                       |
| swatch size        | `--space-9`         | 36px × 36px             |
| swatch border-radius | `--radius-full`   | 9999px                  |
| swatch fill        | conic-gradient      | rainbow spectrum (raw — see Notes) |
| swatch inner shadow | —                  | `inset 0 0 1px rgba(0,0,0,0.3)` (raw — see Notes) |
| label font-size    | `--text-sm`         | 14px                    |
| label line-height  | `--leading-normal`  | 20px                    |
| label font-weight  | `--font-medium`     | 500                     |
| label color        | —                   | `#71717A` (raw — see Notes) |
| label font-family  | `--font-body`       | Noto Sans               |

## Sub-components Used
- `_ColorSwatchPickerItem` — the swatch circle trigger
- `Label` — "Pick a color" text (ref: https://v3.heroui.com/docs/react/components/label)

## Interaction States
| State   | Swatch          | Label           | Cursor  |
|---------|-----------------|-----------------|---------|
| default | rainbow gradient| muted text      | pointer |
| hover   | undefined       | undefined       | pointer |
| focus   | undefined       | undefined       | default |
| disabled| undefined       | undefined       | not-allowed |

## Notes
- token-mismatch: trigger width `196px` — no foundation token. Use raw 196px.
- token-mismatch: rainbow conic-gradient swatch — no token, dynamic. Gradient: `conic-gradient(from 90deg, #F8AECF 0%, #FBC7A3 12%, #F7E8A4 24%, #D7F5B0 36%, #B5F3D2 48%, #A3EAF7 60%, #A8C9FF 72%, #C9B8FF 84%, #F8AECF 100%)`
- token-mismatch: `--shadow-inner: rgba(0,0,0,0.3)` — no foundation token, use raw inset shadow
- token-near-miss: label color `--foreground/muted: #71717A` vs `--color-fg-muted: #64748B` (different hue) — using raw `#71717A`
- Swatch uses checkerboard pattern as fallback for transparent colors (background-image layering)
- Empty state shows no selected color — swatch displays full hue wheel
