---
component: radio
variant: secondary
figma-node-id: "2450:5484"
foundation-ref: "../../../../foundation/foundation-token"
---

## Also Load
> Shared structure, spacing, typography tokens: `../../SKILL.md`

## Meta
- component: radio
- variant: secondary
- status: ready

## Variant Tokens

| Property | Token | Value |
|---|---|---|
| control background | raw | #F1F1F1 (gray neutral fill) |
| control hover background | raw | #FFFFFF |
| focus ring | double ring | `background/background` + `focus-ring` #02563D |
| error border | `danger/danger` | #DC2626 |
| disabled opacity | `disabled-opacity` | 0.5 |

## Control Matrix

| State | Selected | Outer Surface | Selected Dot | Ring | Notes |
|---|---|---|---|---|---|
| default | false | gray neutral fill | hidden | none | flat control |
| hover | false | white hover fill | hidden | none | flat hover control |
| focus | false | white hover fill | hidden | double ring | neutral hover surface |
| error | false | gray fill + red border | hidden | none | danger border visible |
| disabled | false | gray fill | hidden | none | opacity 0.5 |

## Rules
- Gray (#F1F1F1) fill replaces white; no field shadow at any state
- Hover transitions the control surface to white
- Focus uses the two-layer ring on the white hover surface
- Error state keeps gray fill and adds 1px red border
- Disabled state reduces entire row opacity to 0.5
