---
component: radio-group
variant: error
figma-node-id: "2450:5614"
foundation-ref: "../../../../foundation/foundation-token"
---

## Also Load
> Shared structure, spacing, typography tokens: `../../SKILL.md`

## Meta
- component: radio-group
- variant: error
- status: ready

## Variant Tokens

| Property | Token | Value |
|---|---|---|
| label color | `foreground/foreground` | #18181B |
| error color | `danger/danger` | #DC2626 |
| outer gap | `dimensions/spacing/4` | 16px |
| vertical item gap | `dimensions/spacing/3` | 12px |
| horizontal item gap | `dimensions/spacing/4` | 16px |

## Orientation Behavior

| Orientation | Width | Layout | Item gap |
|---|---|---|---|
| vertical | 266px | column | 12px |
| horizontal | 459px | row | 16px |

## Visible Elements

- Group label (visible)
- Error message in place of description (visible, `danger/danger` #DC2626)
- Radio items in invalid state

## Rules
- Description is replaced by the error message; group label stays visible
- Error message color is `danger/danger` #DC2626
- Radio items render in their invalid/error control state
- Vertical width narrows to 266px (vs 280px in default) when error message is present
