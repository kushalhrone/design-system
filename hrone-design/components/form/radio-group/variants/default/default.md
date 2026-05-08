---
component: radio-group
variant: default
figma-node-id: "2450:5614"
foundation-ref: "../../../../foundation/foundation-token"
---

## Also Load
> Shared structure, spacing, typography tokens: `../../SKILL.md`

## Meta
- component: radio-group
- variant: default
- status: ready

## Variant Tokens

| Property | Token | Value |
|---|---|---|
| label color | `foreground/foreground` | #18181B |
| description color | `foreground/muted` | #71717A |
| outer gap | `dimensions/spacing/4` | 16px |
| vertical item gap | `dimensions/spacing/3` | 12px |
| horizontal item gap | `dimensions/spacing/4` | 16px |

## Orientation Behavior

| Orientation | Width | Layout | Item gap |
|---|---|---|---|
| vertical | 280px | column | 12px |
| horizontal | 459px | row | 16px |

## Visible Elements

- Group label (visible)
- Description text (visible)
- Radio items in default state

## Rules
- Description is visible; no error message shown
- Radio items render in their default control state
- Vertical is the primary orientation; horizontal only when labels are short
