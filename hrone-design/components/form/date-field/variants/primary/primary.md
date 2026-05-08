---
component: date-field
variant: primary
figma-node-id: "14538:24516"
foundation-ref: "../../../../foundation/foundation-token"
---

## Also Load
> Shared structure, spacing, typography tokens: `../../SKILL.md`

## Meta
- component: date-field
- variant: primary
- status: ready

## Variant Tokens

| Property | Token | Value |
|---|---|---|
| field background | `field/background` | #ffffff |
| field background hover | `field/background-hover` | rgba(249,249,249,0.92) |
| field shadow | `shadow-field` | layered drop shadow + inner highlight |
| suffix surface | raw | white |
| focus ring | `focus-ring-field` | #02563d shield ring |
| error border | `danger/danger` | #DC2626 |

## State Matrix

| State | Background | Border | Shadow / Ring | Text | Suffix |
|---|---|---|---|---|---|
| default | `field/background` #ffffff | transparent | `shadow-field` | muted placeholders | white surface |
| hover | `field/background-hover` rgba(249,249,249,0.92) | transparent | `shadow-field` | muted placeholders | white surface |
| focus | `field/background` #ffffff | transparent | `focus-ring-field` + inner highlight | active segment green, others muted | white surface |
| filled | `field/background` #ffffff | transparent | `shadow-field` | foreground / filled values | white surface |
| error | `field/background` #ffffff | `danger/danger` #DC2626 | `shadow-field` | error red on first segment, rest muted | white surface |
| disabled | inherited + `opacity: 0.5` | transparent | `shadow-field` | muted | white surface |

## Rules
- White background with layered field shadow on all non-error states
- Focus activates the shield-style focus ring; only the first date segment is highlighted
- Error state adds a 1px danger-red border; shadow is retained
- Disabled state reduces entire field opacity to 0.5, does not alter individual element colors
