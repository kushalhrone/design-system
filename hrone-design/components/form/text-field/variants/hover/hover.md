---
component: text-field
variant: hover
figma-node-id: "13675:12668"
figma-content-hash: "13675-12668-hover"
foundation-ref: "../../../../../foundation/foundation-token"
---

## Meta

- component: text-field
- variant: hover
- status: ready
- state: hover (empty, pointer over)

## Anatomy

Identical to placeholder. Differences:
- Background: `rgba(249,249,249,0.92)` (slightly warmer)
- Shadow: stronger 3-layer (`shadow-field-hover`)
- Cursor: `pointer`

## Props

| Prop | Type | Default |
|---|---|---|
| `state` | `"hover"` | — |
| `showLabel` | `boolean` | `true` |
| `showDescription` | `boolean` | `true` |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| field bg | near-miss: `--field/background-hover` | `rgba(249,249,249,0.92)` |
| border | — | `1px solid rgba(193,193,193,0)` (transparent) |
| shadow | `shadow-field-hover` | `0px 2px 4px rgba(0,0,0,0.04), 0px 1px 2px rgba(0,0,0,0.06), 0px 0px 1px rgba(0,0,0,0.06)` |

All other tokens: see `placeholder` variant.

## Interaction States

| State | Visual change from placeholder |
|---|---|
| hover | Slightly different bg `rgba(249,249,249,0.92)`, stronger shadow (larger blur radii) |

## Notes

- token-near-miss: hover bg `rgba(249,249,249,0.92)` — no exact foundation match. Designer confirm.
- Shadow stronger than default: offsets same but blur 4px/2px/1px vs 2px/1px/0.5px.
- Border color also shifts slightly (`rgba(193,193,193,0)`) but stays transparent.
