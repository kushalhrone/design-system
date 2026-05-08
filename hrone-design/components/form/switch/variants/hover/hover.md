---
component: switch
variant: hover
figma-node-id: "2489:9578"
figma-content-hash: "2489-9578-hover"
foundation-ref: "../../../../../foundation/foundation-token"
---

## Meta

- component: switch
- variant: hover
- status: ready
- isActive: off | state: hover

## Anatomy

Identical to default variant. Only behavioral change: `cursor: pointer`.

- Root: flex row, gap 16px, items-center
- Track: 40×20px, gray bg, thumb left
- Thumb: white bg, `shadow-field`
- Label: 14px/20px 500

## Props

| Prop | Type | Default |
|---|---|---|
| `isActive` | `false` | — |
| `state` | `"hover"` | — |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` |
| `label` | `string` | `"Switch label"` |

## Design Tokens

Same as default variant. Only cursor differs:

| Property | Token Name | Value |
|---|---|---|
| track bg | near-miss: `--neutral-100` | `#f1f1f1` |
| cursor | — | `pointer` |

All other tokens: see `default` variant.

## Interaction States

| State | Visual Change from Default |
|---|---|
| hover (off) | `cursor: pointer` only — no color/shadow change |
| hover (on) | Same — no color change on hover |

## Notes

- Figma hover state is visually identical to default — only cursor signals interactivity.
- No background shift, no thumb scale, no opacity change on hover.
- `cursor: pointer` applied to track root (or full switch row).
