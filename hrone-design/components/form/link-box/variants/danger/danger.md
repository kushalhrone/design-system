---
component: link-box
variant: danger
figma-node-id: "3172:16036"
foundation-ref: "../../../../foundation/foundation-token"
---

## Also Load
> Shared structure, spacing, typography tokens: `../../SKILL.md`

## Meta
- component: link-box
- variant: danger
- status: ready

## Variant Tokens

| Property | Token | Value |
|---|---|---|
| title color | `danger/danger` | #DC2626 |
| description color | `foreground/muted` | #71717a |
| hover background | `default/default` | #f1f1f1 |
| focus background | `default/default` | #f1f1f1 |
| focus border | `danger/danger` | #DC2626 1px |
| focus ring offset | `background/background` | #F8FAFB |
| focus ring | `focus-ring` | #02563d |
| suffix icon | red dashed circle | `danger/danger` #DC2626 |
| disabled opacity | `disabled-opacity` | 0.5 |

## State Matrix

| State | Title Color | Description Color | Background | Border | Focus Ring | Suffix Icon |
|---|---|---|---|---|---|---|
| default | `danger/danger` #DC2626 | `foreground/muted` #71717a | transparent | none | none | red dashed circle |
| hover | `danger/danger` #DC2626 | `foreground/muted` #71717a | `default/default` #f1f1f1 | none | none | red dashed circle |
| focus | `danger/danger` #DC2626 | `foreground/muted` #71717a | `default/default` #f1f1f1 | `danger/danger` 1px | shield ring | red dashed circle |
| disabled | `danger/danger` #DC2626 | `foreground/muted` #71717a | transparent | none | none | red dashed circle |

## Rules
- Title color is always `danger/danger` #DC2626; description stays muted
- Suffix icon is always red to reinforce the danger semantic
- Focus state adds both the shield ring AND a 1px red border (unlike initial which has no border in focus)
- Selected state is NOT defined for the danger variant
- Disabled reduces entire row opacity to 0.5
