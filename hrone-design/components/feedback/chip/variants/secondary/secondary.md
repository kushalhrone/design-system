---
component: chip
variant: secondary
figma-node-id: "2489:10527"
foundation-ref: "../../../../foundation/foundation-token"
---

## Also Load
> Shared structure, spacing, typography tokens: `../../SKILL.md`

## Meta
- component: chip
- variant: secondary
- figma name: `variant=secondary`
- status: ready

## Variant Tokens

Neutral fill background — label carries the semantic color. No border.

| Type | Background | Label | Border |
|---|---|---|---|
| accent | `default/default` #f1f1f1 | `accent/accent` #02563d | none |
| default | `default/default` #f1f1f1 | `default/default-foreground` #18181b | none |
| success | `default/default` #f1f1f1 | `success/success` #16A34A | none |
| warning | `default/default` #f1f1f1 | `warning/warning` #D97706 | none |
| danger | `default/default` #f1f1f1 | `danger/danger` #DC2626 | none |

## Rules
- Background is always neutral #f1f1f1 regardless of type
- Semantic color is expressed through label text only
- No border, no soft base layer
- Use for unselected filter chips or medium-emphasis tags
