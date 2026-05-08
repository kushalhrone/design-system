---
component: searchfield
variant: placeholder
figma-node-id: "13658:11081"
foundation-ref: "../../../../foundation/foundation-token"
---

## Also Load
> Shared structure, spacing, typography tokens: `../../SKILL.md`

## Meta
- component: searchfield
- variant: placeholder
- status: ready

## Variant Tokens

| Property | Token | Value |
|---|---|---|
| field background | `field/background` | #FFFFFF |
| border | `field/border` | rgba(222,222,224,0) — transparent |
| shadow | `shadow-field` (drop) | layered drop shadow |
| inner shadow | — | inset 0 0 0 0 rgba(255,255,255,0.1) |
| label color | `foreground/foreground` | #18181b |
| placeholder color | `field/placeholder` | #71717a |
| cursor | — | text |
| close button | — | absent |

## Rules
- Default resting state — field is empty, placeholder text shown
- Field shadow present (drop layer + inner highlight)
- CloseButton is not rendered in this state
