---
component: drawer
variant: top
figma-node-id: "21281:67556"
foundation-ref: "../../../../foundation/foundation-token"
---

## Also Load
> Shared structure, spacing, typography tokens: `../../SKILL.md`

## Meta
- component: drawer
- variant: top
- figma name: `position=top`
- status: ready
- size: 393x216

## Variant Tokens
| Property | Token | Value |
|---|---|---|
| width | raw | 393px |
| height | raw | 216px |
| radius | `dimensions/radius/rounded-2xl` | 16px (all corners) |
| surface | `overlay` | #ffffff |
| padding | `dimensions/spacing/6` | 24px |
| shadow | `overlay-shadow` | multi-layer shadow stack |
| handle | present | bottom-center, 36x4px, radius 4px |
| close button | present | top-right, 24px |

## Rules
- Slides down from the top of the screen
- Handle is present at the bottom center (for drag-to-dismiss)
- All four corners use 16px radius
- Use for notification drawers or top-anchored panels
