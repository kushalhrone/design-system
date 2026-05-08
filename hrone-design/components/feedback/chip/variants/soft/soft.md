---
component: chip
variant: soft
figma-node-id: "2489:10527"
foundation-ref: "../../../../foundation/foundation-token"
---

## Also Load
> Shared structure, spacing, typography tokens: `../../SKILL.md`

## Meta
- component: chip
- variant: soft
- figma name: `variant=soft`
- status: ready

## Variant Tokens

Transparent surface with a soft-tinted base layer. No border.

| Type | Surface | Label | Border | Base Layer |
|---|---|---|---|---|
| accent | transparent | `accent/accent` #02563d | none | `accent/accent-soft` rgba(2,86,61,0.15) |
| default | transparent | `default/default-foreground` #18181b | none | `default/default` #f1f1f1 |
| success | transparent | `success/success` #16A34A | none | `success/success-soft` rgba(3,152,85,0.15) |
| warning | transparent | `warning/warning` #D97706 | none | `warning/warning-soft` rgba(247,144,9,0.15) |
| danger | transparent | `danger/danger` #DC2626 | none | `danger/danger-soft` rgba(217,45,32,0.15) |

## Rules
- Transparent foreground; soft tint is the base layer behind chip content
- Soft base layer uses rounded underlay matching chip radius
- Distinguishes from tertiary by having the base layer fill
- Use for ambient semantic chips where a tint is needed without heavy fill
