---
component: chip
variant: tertiary
figma-node-id: "2489:10527"
foundation-ref: "../../../../foundation/foundation-token"
---

## Also Load
> Shared structure, spacing, typography tokens: `../../SKILL.md`

## Meta
- component: chip
- variant: tertiary
- figma name: `variant=tertiary`
- status: ready

## Variant Tokens

Transparent background — label only carries semantic color. No border, no base layer.

| Type | Background | Label | Border |
|---|---|---|---|
| accent | transparent | `accent/accent` #02563d | none |
| default | transparent | `default/default-foreground` #18181b | none |
| success | transparent | `success/success` #16A34A | none |
| warning | transparent | `warning/warning` #D97706 | none |
| danger | transparent | `danger/danger` #DC2626 | none |

## Rules
- Fully transparent background — no fill, no border
- Lowest fill emphasis but label color still carries semantic signal
- No soft base layer (distinguishes from soft variant)
- Use for inline text-like chips or ghost-style interactive tags
