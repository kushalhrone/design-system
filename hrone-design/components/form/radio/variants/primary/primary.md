---
component: radio
variant: primary
figma-node-id: "2450:5484"
foundation-ref: "../../../../foundation/foundation-token"
---

## Also Load
> Shared structure, spacing, typography tokens: `../../SKILL.md`

## Meta
- component: radio
- variant: primary
- status: ready

## Variant Tokens

| Property | Token | Value |
|---|---|---|
| control background | `field/background` | #FFFFFF |
| control hover background | `field/background-hover` | rgba(249,249,249,0.92) |
| control shadow | `shadow-field` | layered field shadow |
| focus ring | double ring | `background/background` + `focus-ring` #02563D |
| error border | `danger/danger` | #DC2626 |
| disabled opacity | `disabled-opacity` | 0.5 |

## Control Matrix

| State | Selected | Outer Surface | Selected Dot | Ring | Notes |
|---|---|---|---|---|---|
| default | false | white + field shadow | hidden | none | default control |
| hover | false | hover surface + field shadow | hidden | none | pointer cursor on hover |
| focus | false | white + field shadow | hidden | double ring | background offset plus focus ring |
| error | false | white + red border | hidden | none | error border visible |
| disabled | false | white + field shadow | hidden | none | opacity 0.5 |

## Rules
- White background with layered field shadow on all non-error states
- Focus uses the two-layer ring (background/background offset + focus-ring), not the shield ring
- Error state shows 1px red border; no focus ring applied simultaneously
- Disabled state reduces entire row opacity to 0.5
