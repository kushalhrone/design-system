---
component: link
variant: disabled
figma-node-id: "5375:69647"
figma-content-hash: "2300-1615-disabled"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: link
- variant: disabled
- status: ready
- state: non-interactive, unavailable

## Anatomy

Visually identical to default. Differences:
- Wrapper: `opacity: 0.5`
- Cursor: `not-allowed` (or `default` — per platform convention)
- `pointer-events: none` — not clickable

## Props

| Prop | Type | Default |
|---|---|---|
| `state` | `"disabled"` | — |
| `label` | `string` | `"Call to action"` |
| `showIcon` | `boolean` | `true` |
| `disabled` | `boolean` | `true` |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| text color | `--foreground/link` | `#18181b` |
| text size | `--dimensions/font/text-sm` | `14px` |
| text weight | `font-medium` | `500` |
| underline color | — | `#cdcdce` (same as default) |
| underline thickness | — | `10%` |
| icon size | — | `10×10px` |
| icon opacity | — | `0.6` (same as default) |
| wrapper opacity | `--disabled-opacity` | `0.5` |
| pointer-events | — | `none` |

## Interaction States

| State | Underline | Icon Opacity | Wrapper Opacity | Pointer Events |
|---|---|---|---|---|
| disabled | `#cdcdce` | 60% | 50% | none |

## Notes

- Same visual tokens as default — only the wrapper opacity + pointer-events differ.
- Use `aria-disabled="true"` on the anchor; also `tabindex="-1"` to remove from focus order.
- `--disabled-opacity` Figma `0.5` — no foundation mismatch, standard value.
- Do not use `disabled` attribute on `<a>` elements — not a valid HTML attribute. Use `aria-disabled` + `pointer-events: none` pattern.
