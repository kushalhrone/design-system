---
component: searchfield
variant: disabled
figma-node-id: "13658:11093"
foundation-ref: "../../../../foundation/foundation-token"
---

## Also Load
> Shared structure, spacing, typography tokens: `../../SKILL.md`

## Meta
- component: searchfield
- variant: disabled
- status: ready

## Variant Tokens

| Property | Token | Value |
|---|---|---|
| field background | `field/background` | #FFFFFF |
| border | `field/border` | rgba(222,222,224,0) — transparent |
| shadow | `shadow-field` (drop) | layered drop shadow |
| inner shadow | — | inset 0 0 0 0 rgba(255,255,255,0.1) |
| label color | `foreground/foreground` | #18181b |
| wrapper opacity | `disabled-opacity` | 0.5 |
| cursor | — | not-allowed |
| close button | — | absent |

## Rules
- Opacity `0.5` applied to the entire component wrapper
- Individual element colors are NOT changed; opacity achieves the muted appearance
- Cursor is `not-allowed`
- CloseButton is absent
- Non-interactive — pointer events disabled
