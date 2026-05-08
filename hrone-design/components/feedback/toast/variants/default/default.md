---
component: toast
variant: default
figma-node-id: "2912:31841"
foundation-ref: "../../../../foundation/foundation-token"
---

## Also Load
> Shared structure, spacing, typography tokens: `../../SKILL.md`

## Meta
- component: toast
- variant: default
- figma name: `type=default`
- status: ready
- size: 460x64

## Variant Tokens
| Property | Token | Value |
|---|---|---|
| surface | `overlay/overlay` | #ffffff |
| border | `--color-border` | #E2E8ED |
| icon | circle-dashed | — |
| icon color | `foreground/overlay` | #18181b |
| title color | `foreground/overlay` | #18181b |
| description color | `foreground/muted` | #71717a |
| button background | `default/default` | #f1f1f1 |
| button text | `default/default-foreground` | #18181b |
| shadow | `shadow-overlay` | see effects.md Overlay |
| backdrop blur | `blur` | 6px |

## Rules
- Use for low-emphasis, no semantic state
- No color accent anywhere — fully neutral
- Icon is circle-dashed in #18181b
- Button is #f1f1f1 fill + #18181b text
