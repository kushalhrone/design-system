---
component: link
variant: default
figma-node-id: "5375:69638"
figma-content-hash: "2300-1615-default"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: link
- variant: default
- status: ready
- state: idle, no interaction

## Anatomy

- Wrapper: flex row, gap 2px, px 2px
- Label: underlined text ("Call to action")
- Icon: external-link arrow, 10×10px, 60% opacity, top-aligned (pt-2px)

## Props

| Prop | Type | Default |
|---|---|---|
| `state` | `"default"` | `"default"` |
| `label` | `string` | `"Call to action"` |
| `showIcon` | `boolean` | `true` |
| `icon` | `ReactNode` | external arrow icon |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| wrapper gap | `--dimensions/spacing/0.5` | `2px` |
| wrapper padding-x | `--dimensions/spacing/0.5` | `2px` |
| wrapper width | — | `104px` (Figma spec; fluid in context) |
| text color | `--foreground/link` | `#18181b` |
| text size | `--dimensions/font/text-sm` | `14px` |
| text weight | `font-medium` | `500` |
| text line-height | `--dimensions/leading/text-sm` | `20px` |
| text decoration | underline solid | — |
| underline color | — | `#cdcdce` |
| underline thickness | — | `10%` |
| icon size | — | `10×10px` |
| icon opacity | — | `0.6` (60%) |
| icon top offset | `--dimensions/spacing/0.5` | `2px` |

## Interaction States

| State | Underline Color | Icon Opacity | Wrapper Opacity | Cursor |
|---|---|---|---|---|
| default | `#cdcdce` | 60% | 100% | default |

## Notes

- token-near-miss: `--foreground/link` Figma `#18181b` vs `--color-fg` `#0F172A`. Using raw `#18181b`. Confirm with designer.
- token-mismatch: underline color `#cdcdce` — no foundation token match. Using raw value.
- External icon is an arrow/diagonal-up-right shape, 10×10px. Replace with inline SVG or icon system in production.
- `text-decoration-skip-ink: none` — underline passes through descenders intentionally.
