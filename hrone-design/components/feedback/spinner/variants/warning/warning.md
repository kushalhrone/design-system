---
component: spinner
variant: warning
figma-node-id: "18188:15006"
figma-content-hash: "18188-15006-warning"
foundation-ref: "../../../../../foundation/foundation-token"
---

## Meta

- component: spinner
- variant: warning
- status: ready
- color: warning | arc: warning orange

## Anatomy

- Root: 24×24px positioned container
- Track: full circle ring, `--color-border` (#E2E8ED), 2.5px stroke
- Arc: rotating arc segment, `--color-warning` (#D97706), 2.5px stroke
- Animation: continuous 360° rotation, 0.8s linear

## Props

| Prop | Type | Default |
|---|---|---|
| `color` | `"warning"` | — |
| `state` | `"1" \| "2" \| "3" \| "4"` | `"1"` |
| `size` | `number` | `24` |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| arc color | `--color-warning` | `#D97706` |
| track color | near-miss: `--color-border` | `#E2E8ED` |
| size | `--dimensions/spacing/6` | `24px` |
| border width | — | `2.5px` |
| border radius | — | `50%` |
| animation duration | — | `0.8s` |
| animation timing | — | `linear` |
| animation iteration | — | `infinite` |

## Interaction States

| State | Visual |
|---|---|
| spinning | Arc rotates 360° continuously |

## Notes

- arc color `--color-warning` `#D97706` — exact match.
- token-near-miss: track `#E2E8ED` ≈ `--color-border`. Confirm with designer.
