---
component: link
variant: focus
figma-node-id: "5375:69646"
figma-content-hash: "2300-1615-focus"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: link
- variant: focus
- status: ready
- state: keyboard focus

## Anatomy

Same as hover visually (darker underline, full icon opacity). Adds:
- Wrapper: `overflow: clip`, `border-radius: 4px` (`rounded-sm`)
- Focus ring: 2px white offset + 4px brand ring (`#02563d`)
- Background: `rgba(245,245,245,0)` (transparent — ring provides affordance)

## Props

| Prop | Type | Default |
|---|---|---|
| `state` | `"focus"` | — |
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
| icon opacity | — | `1.0` |
| wrapper radius | `--dimensions/radius/rounded-sm` | `4px` |
| wrapper overflow | — | `clip` |
| wrapper bg | — | `rgba(245,245,245,0)` (transparent) |
| focus ring offset | `--ring-offset-width` | `2px`, color `--color-bg` (`#F8FAFB`) |
| focus ring brand | `--ring-focus-width` | `4px`, color `--color-secondary` (`#02563d`) |

## Focus Ring CSS

```css
box-shadow:
  0px 0px 0px 2px var(--color-bg, #F8FAFB),
  0px 0px 0px 4px var(--color-secondary, #02563d);
```

## Interaction States

| State | Ring | Underline | Icon Opacity | Overflow |
|---|---|---|---|---|
| focus | 2px `#F8FAFB` + 4px `#02563d` | `#71717a` | 100% | clip |

## Notes

- `--focus-ring` Figma `#02563d` = exact match to `--color-secondary`. No mismatch.
- `--background/background` Figma `#F8FAFB` = exact match to `--color-bg` (`#F8FAFB`). No mismatch.
- `overflow: clip` on wrapper required — ring clips to `border-radius: 4px`.
- Focus ring is the double-ring pattern (offset + brand), same as standard DS focus ring — NOT the shield variant.
- No wrapper opacity in focus state (unlike hover).
