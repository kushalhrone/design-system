---
component: time-field
variant: hover
figma-node-id: "14551:13720"
figma-content-hash: "1455113720ho"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: time-field
- variant: hover
- status: ready
- state: mouse hover on input

## Diff from default

Only one visual change: input background overlay shifts to hover tint.

| Property | Default | Hover |
|---|---|---|
| bg-overlay | `white` | `rgba(249, 249, 249, 0.92)` |
| border | transparent | transparent |
| shadow | shadow-field | shadow-field |
| label | `#18181b` | `#18181b` |
| segments | placeholder `#71717a` | placeholder `#71717a` |

## Design Tokens

All tokens same as default variant except:

| Property | Token | Value |
|---|---|---|
| input bg (hover) | raw (no token) | `rgba(249, 249, 249, 0.92)` |

## Notes

- Hover bg `rgba(249,249,249,0.92)` = `field/background-hover` Figma token. No foundation match. Raw value.
- All other tokens inherit from default variant.
