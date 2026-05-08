---
component: toast
variant: danger
figma-node-id: "2912:31889"
foundation-ref: "../../../../foundation/foundation-token"
---

## Also Load
> Shared structure, spacing, typography tokens: `../../SKILL.md`

## Meta
- component: toast
- variant: danger
- figma name: `type=danger`
- status: ready
- size: 460x64

## Variant Tokens
| Property | Token | Value |
|---|---|---|
| surface | `overlay/overlay` | #ffffff |
| border | `--color-border` | #E2E8ED |
| icon | circle-exclamation | — |
| icon color | `danger/danger` | #DC2626 |
| title color | `danger/danger` | #DC2626 |
| description color | `foreground/muted` | #71717a |
| button background | `danger/danger` | #DC2626 |
| button text | `danger/danger-foreground` | #FFFFFF |
| shadow | `shadow-overlay` | see effects.md Overlay |
| backdrop blur | `blur` | 6px |

## Rules
- Use for errors, destructive actions, or failed states
- Icon is circle-exclamation in danger red #DC2626
- Title and button both use danger red for strong semantic signal
