---
component: spinner
category: feedback
figma-node-id: "3337:17133"
variants: [accent, current, success, warning, danger]
foundation-ref: "../../../foundation/foundation-token"
---

## Overview

Circular loading indicator. 24×24px ring with rotating colored arc. Five color variants; states 1–4 are animation keyframes (not interactive states).

## Variants

| Variant | Arc Color | Token |
|---|---|---|
| accent | Brand green | `--color-secondary` `#02563D` |
| current | Inherits parent `color` | `currentColor` |
| success | Success green | `--color-success` `#16A34A` |
| warning | Warning orange | `--color-warning` `#D97706` |
| danger | Error red | `--color-error` `#DC2626` |

## Sub-Components

| Name | Description |
|---|---|
| SpinnerTrack | Full 360° circle background ring |
| SpinnerArc | Rotating colored arc segment |

## Shared Tokens

| Property | Token | Value |
|---|---|---|
| size | `--dimensions/spacing/6` | `24px` |
| track color | near-miss: `--color-border` | `#E2E8ED` |
| border width | — | `2.5px` |
| border radius | — | `50%` |
| animation | — | `spin 0.8s linear infinite` |

## Props

| Prop | Type | Default |
|---|---|---|
| `color` | `"accent" \| "current" \| "success" \| "warning" \| "danger"` | `"accent"` |
| `state` | `"1" \| "2" \| "3" \| "4"` | — |
| `size` | `number` | `24` |

## Animation States

States 1–4 are Figma keyframe snapshots: state=1 (0°), state=2 (~90°), state=3 (~180°), state=4 (~270°). Production: use CSS `animation: spin 0.8s linear infinite`.

## Notes

- token-near-miss: track color raw `#E2E8ED` ≈ `--color-border`. Confirm with designer.
- `color=current` uses `currentColor`; no explicit token — inherits parent `color` property.
- Figma states are animation snapshots, not interactive variants.
- Reference: https://v3.heroui.com/docs/react/components/spinner
