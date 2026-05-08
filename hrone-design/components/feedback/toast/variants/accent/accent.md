---
component: toast
variant: accent
figma-node-id: "12116:70748"
foundation-ref: "../../../../foundation/foundation-token"
---

## Also Load
> Shared structure, spacing, typography tokens: `../../SKILL.md`

## Meta
- component: toast
- variant: accent
- figma name: `type=accent`
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
| button background | `accent/accent` | #02563d |
| button text | `accent/accent-foreground` | #FFFFFF |
| shadow | `shadow-overlay` | see effects.md Overlay |
| backdrop blur | `blur` | 6px |

## Rules
- Use for brand-aligned informational toasts
- Icon remains neutral (circle-dashed, #18181b) — accent is carried by the button only
- Button is forest green #02563d fill + white text
