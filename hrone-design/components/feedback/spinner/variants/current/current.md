---
component: spinner
variant: current
figma-node-id: "18187:14958"
figma-content-hash: "18187-14958-current"
foundation-ref: "../../../../../foundation/foundation-token"
---

## Meta

- component: spinner
- variant: current
- status: ready
- color: current | arc: inherits parent text color

## Anatomy

- Root: 24×24px positioned container
- Track: full circle ring, `--color-border` (#E2E8ED), 2.5px stroke
- Arc: rotating arc segment, `currentColor` (inherits parent), 2.5px stroke
- Animation: continuous 360° rotation, 0.8s linear

## Props

| Prop | Type | Default |
|---|---|---|
| `color` | `"current"` | — |
| `state` | `"1" \| "2" \| "3" \| "4"` | `"1"` |
| `size` | `number` | `24` |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| arc color | `currentColor` | (inherits parent `color`) |
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

- Arc uses `currentColor` — no explicit token. Arc adopts whatever `color` the parent sets.
- In Figma this renders as dark gray (#0F172A ≈ `--color-fg`); runtime color depends on context.
- token-near-miss: track `#E2E8ED` ≈ `--color-border`. Confirm with designer.
- Use this variant inside colored surfaces (buttons, banners) so spinner inherits surface text color.
