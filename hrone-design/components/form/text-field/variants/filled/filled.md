---
component: text-field
variant: filled
figma-node-id: "13675:12644"
figma-content-hash: "13675-12644-filled"
foundation-ref: "../../../../../foundation/foundation-token"
---

## Meta

- component: text-field
- variant: filled
- status: ready
- state: filled (user has entered text)

## Anatomy

Identical to placeholder. Only text color changes:
- Input text: `--field/foreground` `#18181b` (full fg, not muted)
- All other visual properties same as placeholder

## Props

| Prop | Type | Default |
|---|---|---|
| `state` | `"filled"` | — |
| `value` | `string` | user text |
| `showLabel` | `boolean` | `true` |
| `showDescription` | `boolean` | `true` |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| input text color | near-miss: `--color-fg` | `#18181b` |
| field bg | near-miss: `--color-surface` | `white` |
| border | — | transparent 1px |
| shadow | `shadow-field` | 3-layer drop |

All other tokens same as placeholder.

## Interaction States

| State | Visual change from placeholder |
|---|---|
| filled | Text color changes from `--color-fg-muted` (#71717a) to `#18181b` |

## Notes

- Only visual difference from placeholder: `--field/foreground` `#18181b` instead of `--field/placeholder` `#71717a`.
- token-near-miss: input text `#18181b` ≈ `--color-fg` `#0F172A`. Confirm.
- Shadow and bg identical to placeholder state.
