---
component: descriptive-modal
variant: default
figma-node-id: "7833:6985"
figma-content-hash: "7833-6985-default"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: descriptive-modal
- variant: default
- status: ready
- purpose: muted description paragraph used inside modal/dialog surfaces

## Anatomy

- Single `<p>` inside a flex row container
- Text expands to fill container width (`flex: 1 0 0`)
- No prefix/suffix elements

## Props

| Prop | Type | Default |
|---|---|---|
| `value` | `string` | `"Lorem ipsum dolor sit amet consectetur. Ultrices nunc commodo dictumst fermentum."` |
| `className` | `string` | — |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| container width | — | `288px` |
| container display | — | `flex`, `items-center`, `justify-center` |
| text color | `--color-fg-muted` | `#71717a` |
| font family | `Noto Sans` | variable font |
| font size | `--dimensions/font/text-sm` | `14px` |
| font weight | `font-regular` | `400` |
| line height | `--dimensions/leading/text-sm` | `20px` |
| letter spacing | `--letter-spacing` | `0px` |
| text flex | — | `flex: 1 0 0`, `min-width: 0` |

## Interaction States

No interactive states — static display-only component.

## Notes

- token-near-miss: `--foreground/muted` Figma `#71717a` vs `--color-fg-muted` `#64748B`. Using raw `#71717a`. Confirm with designer.
- Component has no padding/background/border — modal host is responsible for those.
- Used as the description slot in modal dialogs (below the modal title).
- 288px width matches standard modal content width in this design system.
