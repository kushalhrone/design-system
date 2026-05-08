---
component: searchfield
variant: error
figma-node-id: "13658:11117"
foundation-ref: "../../../../foundation/foundation-token"
---

## Also Load
> Shared structure, spacing, typography tokens: `../../SKILL.md`

## Meta
- component: searchfield
- variant: error
- status: ready

## Variant Tokens

| Property | Token | Value |
|---|---|---|
| field background | `field/background` | #FFFFFF |
| border | `danger/danger` | #DC2626 1px solid |
| shadow | `shadow-field` (drop) | layered drop shadow |
| label color | `danger/danger` | #DC2626 |
| value / placeholder color | `field/placeholder` | #71717a |
| error message color | `danger/danger` | #DC2626 |
| cursor | — | text |
| close button | — | visible, absolute-positioned |

## Rules
- Label color changes to `danger/danger` #DC2626
- Field border becomes `danger/danger` 1px solid; shadow is retained
- Error message replaces description text below the field
- CloseButton is visible (same as filled state)
