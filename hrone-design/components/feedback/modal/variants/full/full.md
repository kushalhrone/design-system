---
component: modal
variant: full
figma-node-id: "14428:5590"
foundation-ref: "../../../../foundation/foundation-token"
---

## Also Load
> Shared structure, spacing, typography tokens: `../../SKILL.md`

## Meta
- component: modal
- variant: full
- figma name: `size=full`
- status: ready
- size: 640x246

## Variant Tokens
| Property | Token | Value |
|---|---|---|
| width | raw | 640px |
| height | raw | 246px |
| radius | raw | 0px |
| padding | `dimensions/spacing/6` | 24px |
| surface | field/overlay surface | not the white overlay treatment |
| shadow | `shadow-field` | field shadow + blur + inner highlight |

## Rules
- Full-bleed surface inside shell — no rounded corners
- Uses shadow-field instead of shadow-overlay
- Surface differs from other sizes — uses a surface background, not white overlay
- Standard 24px padding
