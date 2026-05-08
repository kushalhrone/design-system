---
component: searchfield
variant: hover
figma-node-id: "13658:11129"
foundation-ref: "../../../../foundation/foundation-token"
---

## Also Load
> Shared structure, spacing, typography tokens: `../../SKILL.md`

## Meta
- component: searchfield
- variant: hover
- status: ready

## Variant Tokens

| Property | Token | Value |
|---|---|---|
| field background | `field/background-hover` | rgba(249,249,249,0.92) |
| border | `field/border-hover` | rgba(193,193,193,0) — transparent |
| shadow | `shadow-field` (drop) | layered drop shadow |
| inner shadow | — | inset 0 0 0 0 rgba(255,255,255,0.1) |
| label color | `foreground/foreground` | #18181b |
| placeholder color | `field/placeholder` | #71717a |
| cursor | — | text |
| close button | — | absent |

## Rules
- Semi-opaque hover background slightly darkens the field surface
- Field shadow retained
- CloseButton is not rendered in this state
