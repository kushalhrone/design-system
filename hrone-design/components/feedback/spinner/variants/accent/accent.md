---
component: spinner
variant: accent
figma-node-id: "3337:17134"
figma-content-hash: "3337-17134-accent"
foundation-ref: "../../../../../foundation/foundation-token"
---

## Meta

- component: spinner
- variant: accent
- status: ready
- color: accent | arc: brand green

## Anatomy

- Root: 24×24px positioned container
- Track: full circle ring, `--color-border` (#E2E8ED), 2.5px stroke
- Arc: rotating arc segment, `--color-secondary` (#02563D), 2.5px stroke
- Animation: continuous 360° rotation, 0.8s linear

## Props

| Prop | Type | Default |
|---|---|---|
| `color` | `"accent"` | — |
| `state` | `"1" \| "2" \| "3" \| "4"` | `"1"` |
| `size` | `number` | `24` |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| arc color | `--color-secondary` | `#02563D` |
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
| state=1 | 0° rotation (arc at top) |
| state=2 | ~90° rotation |
| state=3 | ~180° rotation |
| state=4 | ~270° rotation |

## Notes

- arc color `--color-secondary` `#02563D` — exact match.
- token-near-miss: track `#E2E8ED` ≈ `--color-border`. Confirm with designer.
- States 1–4 are Figma animation snapshots; production uses CSS `@keyframes`.
