---
component: date-field
variant: secondary
figma-node-id: "14538:24516"
foundation-ref: "../../../../foundation/foundation-token"
---

## Also Load
> Shared structure, spacing, typography tokens: `../../SKILL.md`

## Meta
- component: date-field
- variant: secondary
- status: ready

## Variant Tokens

| Property | Token | Value |
|---|---|---|
| field background | `default/default` | #f1f1f1 |
| field shadow | omitted | none |
| suffix surface | `surface/on-surface` | #ededed |
| focus ring | `focus-ring-field` | #02563d shield ring |
| error border | `danger/danger` | #DC2626 |

## State Matrix

| State | Background | Border | Shadow / Ring | Text | Suffix |
|---|---|---|---|---|---|
| default | `default/default` #f1f1f1 | transparent | none | muted placeholders | `surface/on-surface` #ededed |
| hover | `default/default` #f1f1f1 | transparent | none | muted placeholders | `surface/on-surface` #ededed |
| focus | `default/default` #f1f1f1 | transparent | `focus-ring-field` + inner highlight | active segment green, others muted | `surface/on-surface` #ededed |
| filled | `default/default` #f1f1f1 | transparent | none | foreground / filled values | `surface/on-surface` #ededed |
| error | `default/default` #f1f1f1 | `danger/danger` #DC2626 | field shadow retained | error red on first segment, rest muted | `surface/on-surface` #ededed |
| disabled | inherited + `opacity: 0.5` | transparent | none | muted | `surface/on-surface` #ededed |

## Rules
- Gray (#f1f1f1) background replaces white; field shadow is omitted on all states except error
- Error state retains the field shadow alongside the red border
- Focus activates the shield-style focus ring; only the first date segment is highlighted
- Suffix slot uses #ededed (`surface/on-surface`) instead of white
- Disabled state reduces entire field opacity to 0.5
