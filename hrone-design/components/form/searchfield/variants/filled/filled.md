---
component: searchfield
variant: filled
figma-node-id: "13658:11105"
foundation-ref: "../../../../foundation/foundation-token"
---

## Also Load
> Shared structure, spacing, typography tokens: `../../SKILL.md`

## Meta
- component: searchfield
- variant: filled
- status: ready

## Variant Tokens

| Property | Token | Value |
|---|---|---|
| field background | `field/background` | #FFFFFF |
| border | `field/border` | rgba(222,222,224,0) — transparent |
| shadow | `shadow-field` (drop) | layered drop shadow |
| inner shadow | — | inset 0 0 0 0 rgba(255,255,255,0.1) |
| label color | `foreground/foreground` | #18181b |
| value color | `field/foreground` | #18181b |
| cursor | — | text |
| close button | — | visible, absolute-positioned |

## CloseButton (visible)

| Property | Token | Value |
|---|---|---|
| size | `dimensions/spacing/6` | 20px (raw — token mismatch, see notes) |
| border-radius | `dimensions/radius/rounded-xl` | 10px (raw — see notes) |
| background | `default/default` | #f1f1f1 |
| position | — | absolute, right: 3px, top: 50% −translate-y-1/2 |

## Rules
- Field contains a value; close button is visible and interactive
- Field shadow retained (same as placeholder state)
- CloseButton appears absolutely positioned at the right edge of the field
