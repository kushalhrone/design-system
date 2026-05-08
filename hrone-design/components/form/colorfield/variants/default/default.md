---
component: colorfield
variant: default
figma-node-id: "3136:16907"
foundation-ref: "../../../../foundation/foundation-token"
---

## Also Load
> Shared structure, spacing, typography tokens: `../../SKILL.md`

## Meta
- component: colorfield
- variant: default
- status: ready

## Variant Tokens

| Property | Token | Value |
|---|---|---|
| width | `--space-6` | 24px |
| height | `--space-6` | 24px |
| padding | `--space-1` | 4px |
| border-radius | `dimensions/radius/rounded-xl` | 12px |
| icon size | — | 16px |
| icon inset | — | 20.31% (~3.25px each side) |

## Interaction States

| State | Background | Token / Note | Border | Shadow | Cursor |
|---|---|---|---|---|---|
| default | `#f1f1f1` | token-mismatch — `var(--default/default)` has no foundation alias | none | none | pointer |
| hover | `#FFFFFF` | token-near-miss — closest `--neutral-25` (#FFFFFF); do not auto-snap | none | none | pointer |
| focus | `#FFFFFF` | token-near-miss — same as hover | none | focus ring (see below) | pointer |

## Focus Ring

```
box-shadow:
  0 0 0 2px var(--background/background, #F8FAFB),   /* offset layer */
  0 0 0 4px var(--focus-ring, #02563D)                /* ring layer   */
```

## Rules
- Single 24×24px size — no size variants defined in Figma
- Icon is `xmark` (close/clear); node `2217:1134`; 16×16px with 20.31% inset on all sides
- Disabled state is not defined in Figma — flag before implementing
- token-mismatch: `#f1f1f1` default bg has no first-class foundation token; do not auto-snap
- token-mismatch: focus-ring `#02563D` (solid green) differs from foundation `--color-focus-ring: rgba(2,86,61,0.22)`; pre-established convention, do not change
