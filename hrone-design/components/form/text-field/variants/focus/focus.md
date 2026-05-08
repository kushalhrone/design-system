---
component: text-field
variant: focus
figma-node-id: "13675:12680"
figma-content-hash: "13675-12680-focus"
foundation-ref: "../../../../../foundation/foundation-token"
---

## Meta

- component: text-field
- variant: focus
- status: ready
- state: focus (keyboard or click active)

## Anatomy

- Label: 14px/20px 500, `#18181b`
- Input: white bg, transparent border, **no drop shadow**, green focus ring, `overflow: clip`
- Placeholder: "Write here...", muted color (no text entered in Figma focus state)
- ExpandIndicator: same as other states
- Description: "Characters: 0/80", muted

## Props

| Prop | Type | Default |
|---|---|---|
| `state` | `"focus"` | — |
| `showLabel` | `boolean` | `true` |
| `showDescription` | `boolean` | `true` |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| field bg | near-miss: `--color-surface` | `white` |
| border | — | `1px solid rgba(222,222,224,0)` (transparent) |
| border radius | `--dimensions/radius/rounded-lg` | `8px` |
| focus ring | `--color-secondary` | `0 0 0 2px #02563d` |
| overflow | — | `clip` (required for ring) |
| shadow | — | none (ring replaces) |
| ring-offset-width | `--ring-offset-width` | `2px` |

All other tokens same as placeholder.

## Interaction States

| State | Visual |
|---|---|
| focus | White bg, green ring `0 0 0 2px #02563d`, no drop shadow, overflow clip |

## Notes

- Focus ring: `box-shadow: 0 0 0 2px --color-secondary` — exact match. No offset bg ring (unlike switch which has 2-ring system).
- Drop shadow removed entirely on focus — ring is the sole depth indicator.
- `overflow: clip` on Input box; prevents ring bleed issues.
- Apply via `:focus-within` or `:focus-visible` in production.
- Figma encodes `--focus-ring: #02563d` = `--color-secondary`. NOT `--color-focus-ring` (primary orange).
