---
component: time-field
variant: focus
figma-node-id: "14551:13715"
figma-content-hash: "1455113715fo"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: time-field
- variant: focus
- status: ready
- state: keyboard or pointer focus on input

## Diff from default

| Property | Default | Focus |
|---|---|---|
| bg-overlay | `white` | `white` (same) |
| border | transparent | transparent |
| shadow | shadow-field (3-layer drop) | focus-ring 2px (replaces entirely) |
| label | `#18181b` | `#18181b` |
| segments | placeholder `#71717a` | placeholder `#71717a` |

## Design Tokens

All tokens same as default except:

| Property | Token | Value |
|---|---|---|
| input box-shadow | `--color-secondary` focus ring | `0px 0px 0px 2px #02563d` |
| bg-overlay | raw | `white` (no hover tint) |

## Effects

```css
/* Replaces shadow-field entirely — do NOT combine */
box-shadow: 0px 0px 0px 2px var(--color-secondary, #02563d);
```

## Notes

- Focus ring uses `--color-secondary` (#02563D) — Figma token `focus-ring = #02563d`.
- Focus ring REPLACES shadow-field (not additive). Confirmed in Figma — isFocus path removes shadow-field class.
- Ring offset = `var(--ring-offset-width, 2px)`. Solid ring, no blur.
- No bg-overlay removal — input bg remains white on focus.
- `focus-ring-field` effect in Figma: DROP_SHADOW color=focus-ring, offset=(0,0), radius=0, spread=ring-offset-width.
