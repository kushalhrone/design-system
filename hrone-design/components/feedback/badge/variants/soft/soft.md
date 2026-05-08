---
component: badge
variant: soft
figma-node-id: "19865:36063"
foundation-ref: "../../../../foundation/foundation-token"
---

## Also Load
> Shared structure, spacing, typography tokens: `../../SKILL.md`

## Meta
- component: badge
- variant: soft
- figma name: `variant=soft`
- status: ready

## Variant Tokens

Transparent surface with a soft-tinted base layer behind the badge content.

| Type | Surface | Label | Border | Base Layer |
|---|---|---|---|---|
| accent | `background/background` #F8FAFB | `accent/accent` #02563d | `background/background` #F8FAFB | `accent/accent-soft` rgba(2,86,61,0.15) |
| default | `background/background` #F8FAFB | `default/default-foreground` #18181b | `background/background` #F8FAFB | `default/default` #f1f1f1 |
| success | `background/background` #F8FAFB | `success/success` #16A34A | `background/background` #F8FAFB | `success/success-soft` rgba(3,152,85,0.15) |
| warning | `background/background` #F8FAFB | `warning/warning` #D97706 | `background/background` #F8FAFB | `warning/warning-soft` rgba(247,144,9,0.15) |
| danger | `background/background` #F8FAFB | `danger/danger` #DC2626 | `background/background` #F8FAFB | `danger/danger-soft` rgba(217,45,32,0.15) |

## Rules
- Surface is the page background color (#F8FAFB); the soft tint comes from the base layer
- Soft base layer is a rounded underlay (radius 16px) behind badge content — matches Figma structure
- Lowest emphasis of the three variants; use for passive/ambient status indicators
