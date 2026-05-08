---
component: text-field
variant: placeholder
figma-node-id: "13675:12620"
figma-content-hash: "13675-12620-placeholder"
foundation-ref: "../../../../../foundation/foundation-token"
---

## Meta

- component: text-field
- variant: placeholder
- status: ready
- state: placeholder (empty, idle)

## Anatomy

- Label: "Description", 14px/20px 500, `#18181b`
- Input: white bg, transparent 1px border, `shadow-field`, 36px min-height
- Placeholder text: "Write here...", 14px/20px 400, `--color-fg-muted` `#71717a`
- ExpandIndicator: 10×10px, bottom-right, two diagonal `#18181b` lines
- Description: "Characters: 0/80", 12px/16px 400, `--color-fg-muted`

## Props

| Prop | Type | Default |
|---|---|---|
| `state` | `"placeholder"` | — |
| `showLabel` | `boolean` | `true` |
| `showDescription` | `boolean` | `true` |
| `label` | `string` | `"Description"` |
| `placeholder` | `string` | `"Write here..."` |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| field bg | near-miss: `--color-surface` | `white` |
| border | — | `1px solid rgba(222,222,224,0)` (transparent) |
| border radius | `--dimensions/radius/rounded-lg` | `8px` |
| padding H | `--dimensions/spacing/3` | `12px` |
| padding V | `--dimensions/spacing/2` | `8px` |
| shadow | `shadow-field` | 3-layer drop + inner rgba(255,255,255,0.1) |
| placeholder color | `--color-fg-muted` | `#71717a` |
| label color | near-miss: `--color-fg` | `#18181b` |
| description color | `--color-fg-muted` | `#71717a` |

## Interaction States

| State | Visual |
|---|---|
| placeholder | Empty field, placeholder text visible, shadow-field |

## Notes

- token-near-miss: field bg `white` ≈ `--color-surface` `#FFFFFF`. Confirm.
- token-near-miss: label/resize color `#18181b` ≈ `--color-fg` `#0F172A`. Confirm.
- Border transparent — not visible, but 1px present for layout stability.
