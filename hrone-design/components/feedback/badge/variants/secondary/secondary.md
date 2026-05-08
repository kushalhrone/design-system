---
component: badge
variant: secondary
figma-node-id: "19865:36063"
foundation-ref: "../../../../foundation/foundation-token"
---

## Also Load
> Shared structure, spacing, typography tokens: `../../SKILL.md`

## Meta
- component: badge
- variant: secondary
- figma name: `variant=secondary`
- status: ready

## Variant Tokens

Neutral fill background — label carries the semantic color.

| Type | Background | Label | Border |
|---|---|---|---|
| accent | `default/default` #f1f1f1 | `accent/accent` #02563d | `background/background` #F8FAFB |
| default | `default/default` #f1f1f1 | `default/default-foreground` #18181b | `background/background` #F8FAFB |
| success | `default/default` #f1f1f1 | `success/success` #16A34A | `background/background` #F8FAFB |
| warning | `default/default` #f1f1f1 | `warning/warning` #D97706 | `background/background` #F8FAFB |
| danger | `default/default` #f1f1f1 | `danger/danger` #DC2626 | `background/background` #F8FAFB |

## Rules
- Background is always neutral #f1f1f1 regardless of type
- Semantic color is expressed through label text only
- Lower emphasis than primary; use when badge competes with other semantic UI
- No soft base layer
