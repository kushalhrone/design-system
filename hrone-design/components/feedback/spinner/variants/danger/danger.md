---
component: spinner
variant: danger
figma-node-id: "18188:15030"
figma-content-hash: "18188-15030-danger"
foundation-ref: "../../../../../foundation/foundation-token"
---

## Meta

- component: spinner
- variant: danger
- status: ready
- color: danger | arc: error red

## Anatomy

- Root: 24×24px positioned container
- Track: full circle ring, `--color-border` (#E2E8ED), 2.5px stroke
- Arc: rotating arc segment, `--color-error` (#DC2626), 2.5px stroke
- Animation: continuous 360° rotation, 0.8s linear

## Props

| Prop | Type | Default |
|---|---|---|
| `color` | `"danger"` | — |
| `state` | `"1" \| "2" \| "3" \| "4"` | `"1"` |
| `size` | `number` | `24` |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| arc color | `--color-error` | `#DC2626` |
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

- arc color `--color-error` `#DC2626` — exact match.
- token-near-miss: track `#E2E8ED` ≈ `--color-border`. Confirm with designer.
- Named `danger` in Figma; maps to `--color-error` in DS token system.
