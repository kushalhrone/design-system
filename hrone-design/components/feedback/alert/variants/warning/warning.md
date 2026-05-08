---
component: alert
variant: warning
figma-node-id: "2852:11811"
foundation-ref: "../../../../foundation/foundation-token"
---

## Also Load
> Shared structure, spacing, typography, and token-to-foundation map: `../../SKILL.md`

## Meta
- component: alert
- variant: warning
- figma name: `variant=warning`
- status: ready
- size: 460x64

## Variant Tokens

| Property | Token | Value |
|---|---|---|
| surface | `surface/surface` | #ffffff |
| border | `--color-border` | #E2E8ED |
| icon | warning-triangle | — |
| icon color | `warning/warning` | #F79009 |
| title color | `warning/warning` | #F79009 |
| button background | `warning/warning` | #F79009 |
| button text | `warning/warning-foreground` | #ffffff |

## Rules
- Icon, title, and button all share `#F79009`
- Warning color is `#F79009` — NOT `#D97706` (foundation token mismatch, Figma value wins)
- Use for pending states, incomplete actions, documents missing
