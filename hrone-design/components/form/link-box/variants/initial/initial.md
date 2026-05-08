---
component: link-box
variant: initial
figma-node-id: "3172:16036"
foundation-ref: "../../../../foundation/foundation-token"
---

## Also Load
> Shared structure, spacing, typography tokens: `../../SKILL.md`

## Meta
- component: link-box
- variant: initial
- status: ready

## Variant Tokens

| Property | Token | Value |
|---|---|---|
| title color | `foreground/foreground` | #18181b |
| description color | `foreground/muted` | #71717a |
| hover background | `default/default` | #f1f1f1 |
| focus background | `default/default` | #f1f1f1 |
| focus ring offset | `background/background` | #F8FAFB |
| focus ring | `focus-ring` | #02563d |
| suffix icon | gray dashed circle | neutral |
| disabled opacity | `disabled-opacity` | 0.5 |

## State Matrix

| State | Title Color | Description Color | Background | Border | Focus Ring | Suffix Icon |
|---|---|---|---|---|---|---|
| default | `foreground/foreground` #18181b | `foreground/muted` #71717a | transparent | none | none | gray dashed circle |
| hover | `foreground/foreground` #18181b | `foreground/muted` #71717a | `default/default` #f1f1f1 | none | none | dark dashed circle |
| focus | `foreground/foreground` #18181b | `foreground/muted` #71717a | `default/default` #f1f1f1 | none | shield ring | dark dashed circle |
| disabled | `foreground/foreground` #18181b | `foreground/muted` #71717a | transparent | none | none | gray dashed circle |
| selected | `foreground/foreground` #18181b | `foreground/muted` #71717a | transparent | none | none | active dashed circle |

## Rules
- Neutral styling throughout; title is never colored
- Selected state is only defined for the initial variant (not danger)
- Disabled reduces entire row opacity to 0.5; no individual element color changes
- Focus uses the shield-style ring with `background/background` offset; no border added
