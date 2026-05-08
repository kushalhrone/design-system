---
component: searchfield
variant: focus
figma-node-id: "13658:11141"
foundation-ref: "../../../../foundation/foundation-token"
---

## Also Load
> Shared structure, spacing, typography tokens: `../../SKILL.md`

## Meta
- component: searchfield
- variant: focus
- status: ready

## Variant Tokens

| Property | Token | Value |
|---|---|---|
| field background | `field/background-focus` | #FFFFFF |
| border | `field/border` | rgba(222,222,224,0) — transparent |
| shadow / ring | `focus-ring` | 0 0 0 2px #02563d; overflow: clip |
| label color | `foreground/foreground` | #18181b |
| placeholder color | `field/placeholder` | #71717a |
| cursor | — | text |
| close button | — | inline stub, opacity-0 (not interactive) |

## Focus Ring

```
box-shadow: 0 0 0 var(--ring-offset-width, 2px) var(--focus-ring, #02563d)
```
No backdrop blur. Overflow: clip on field wrapper.

## Rules
- White background, no drop shadow — focus ring replaces shadow
- Inline clear stub is present in the DOM at `opacity-0`; it is not interactive
- overflow: clip required on field wrapper to confine the focus ring correctly
