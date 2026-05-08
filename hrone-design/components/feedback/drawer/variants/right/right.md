---
component: drawer
variant: right
figma-node-id: "21281:67596"
foundation-ref: "../../../../foundation/foundation-token"
---

## Also Load
> Shared structure, spacing, typography tokens: `../../SKILL.md`

## Meta
- component: drawer
- variant: right
- figma name: `position=right`
- status: ready
- size: 393x472

## Variant Tokens
| Property | Token | Value |
|---|---|---|
| width | raw | 393px |
| height | raw | 472px |
| radius | `dimensions/radius/rounded-2xl` | 16px (all corners) |
| surface | `overlay` | #ffffff |
| padding | `dimensions/spacing/6` | 24px |
| shadow | `overlay-shadow` | multi-layer shadow stack |
| handle | none | — |
| close button | present | top-right, 24px |

## Rules
- Slides in from the right edge
- No drag handle — taller height and side position makes handle unnecessary
- All four corners use 16px radius
- Use for sidebars, detail panels, and form drawers on desktop or wide mobile
