---
component: text-field
variant: disabled
figma-node-id: "13675:12632"
figma-content-hash: "13675-12632-disabled"
foundation-ref: "../../../../../foundation/foundation-token"
---

## Meta

- component: text-field
- variant: disabled
- status: ready
- state: disabled

## Anatomy

Visually identical to placeholder. Differences:
- Root wrapper: `opacity: 0.5`
- Pointer events: none
- Cursor: `not-allowed`
- No hover/focus/interaction

## Props

| Prop | Type | Default |
|---|---|---|
| `state` | `"disabled"` | — |
| `disabled` | `boolean` | `true` |
| `showLabel` | `boolean` | `true` |
| `showDescription` | `boolean` | `true` |

## Design Tokens

All tokens same as placeholder. Override:

| Property | Token | Value |
|---|---|---|
| root opacity | `--disabled-opacity` | `0.5` |
| pointer-events | — | `none` |
| cursor | — | `not-allowed` |

## Interaction States

No interaction — all events suppressed.

| State | Visual |
|---|---|
| disabled | Opacity 50%, placeholder visible, no hover/focus response |

## Notes

- Figma applies `opacity: var(--disabled-opacity, 0.5)` to root wrapper (entire field including label + description).
- `aria-disabled="true"` on root; `disabled` attribute on actual `<textarea>` element.
- Shadow and bg unchanged from placeholder — only opacity differs.
