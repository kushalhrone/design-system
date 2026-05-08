---
component: switch
variant: focus
figma-node-id: "2489:9630"
figma-content-hash: "2489-9630-focus"
foundation-ref: "../../../../../foundation/foundation-token"
---

## Meta

- component: switch
- variant: focus
- status: ready
- isActive: on | state: focus

## Anatomy

Extends checked variant with focus ring on track outer edge.

- Root: flex row, gap 16px, items-center
- Track: 40×20px pill, green bg, `overflow: clip`, + double focus ring
- Thumb: 20×16px right, `--color-surface`, `shadow-switch`
- Thumb icon: 10×10px
- Focus ring: `box-shadow: 0 0 0 2px #F8FAFB, 0 0 0 4px #02563d`

## Props

| Prop | Type | Default |
|---|---|---|
| `isActive` | `true` | — |
| `state` | `"focus"` | — |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` |
| `label` | `string` | `"Switch label"` |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| track bg | `--color-secondary` | `#02563d` |
| track overflow | — | `clip` |
| focus ring offset | `--color-bg` | `#F8FAFB` (2px) |
| focus ring color | `--color-secondary` | `#02563d` (4px) |
| thumb bg | `--color-surface` | `#FFFFFF` |
| thumb shadow | `shadow-switch` | 3-layer |

All other tokens: see `checked` variant.

## Interaction States

| State | Visual |
|---|---|
| focus (on) | Green track + thumb right + double ring (2px bg + 4px secondary) |

## Notes

- Focus ring: `box-shadow: 0 0 0 2px --color-bg, 0 0 0 4px --color-secondary` — both exact matches.
- `overflow: clip` on track prevents ring from being clipped by border-radius.
- Focus ring uses `--color-secondary` `#02563d` NOT `--color-focus-ring` `rgba(2,86,61,0.22)`. Switch uses secondary color ring, not primary.
- Figma encodes `--ring-offset-width: 2px`, `--ring-focus-width: 4px`.
- Apply via `:focus-visible` in production. Figma shows on the `isActive=on` state only — apply to both on/off in production.
