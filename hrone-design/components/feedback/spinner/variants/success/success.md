---
component: spinner
variant: success
figma-node-id: "18188:14982"
figma-content-hash: "18188-14982-success"
foundation-ref: "../../../../../foundation/foundation-token"
---

## Meta

- component: spinner
- variant: success
- status: ready
- color: success | arc: success green

## Anatomy

- Root: 24×24px positioned container
- Track: full circle ring, `--color-border` (#E2E8ED), 2.5px stroke
- Arc: rotating arc segment, `--color-success` (#16A34A), 2.5px stroke
- Animation: continuous 360° rotation, 0.8s linear

## Props

| Prop | Type | Default |
|---|---|---|
| `color` | `"success"` | — |
| `state` | `"1" \| "2" \| "3" \| "4"` | `"1"` |
| `size` | `number` | `24` |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| arc color | `--color-success` | `#16A34A` |
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

- arc color `--color-success` `#16A34A` — exact match.
- token-near-miss: track `#E2E8ED` ≈ `--color-border`. Confirm with designer.
