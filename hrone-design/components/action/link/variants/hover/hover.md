---
component: link
variant: hover
figma-node-id: "5375:69640"
figma-content-hash: "2300-1615-hover"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: link
- variant: hover
- status: ready
- state: mouse over

## Anatomy

Same as default. Visual differences:
- Underline color shifts to `#71717a` (more visible)
- Icon opacity lifts to 100%
- Wrapper opacity drops to 80%
- Cursor: pointer

## Props

| Prop | Type | Default |
|---|---|---|
| `state` | `"hover"` | — |
| `label` | `string` | `"Call to action"` |
| `showIcon` | `boolean` | `true` |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| text color | `--foreground/link` | `#18181b` |
| text size | `--dimensions/font/text-sm` | `14px` |
| text weight | `font-medium` | `500` |
| underline color | — | `#71717a` |
| underline thickness | — | `10%` |
| icon size | — | `10×10px` |
| icon opacity | — | `1.0` (100%) |
| wrapper opacity | — | `0.8` |
| cursor | — | `pointer` |

## Interaction States

| State | Underline Color | Icon Opacity | Wrapper Opacity | Cursor |
|---|---|---|---|---|
| hover | `#71717a` | 100% | 80% | pointer |

## Notes

- Underline color `#71717a` — near-miss to `--color-fg-muted` `#64748B`. Using raw value. Confirm.
- Opacity 80% applied on the **wrapper div**, not on individual text/icon — preserves relative icon opacity lift correctly.
- Icon loses `opacity-60` class present in default state.
