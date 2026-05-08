---
component: time-field
variant: disabled
figma-node-id: "14551:13700"
figma-content-hash: "1455113700di"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: time-field
- variant: disabled
- status: ready
- state: non-interactive, form field disabled

## Diff from default

| Property | Default | Disabled |
|---|---|---|
| root opacity | 1 | `0.5` |
| pointer-events | all | none |
| cursor | text | not-allowed |
| visual appearance | normal | identical to default, dimmed |

## Design Tokens

All tokens same as default. Root wrapper override only:

| Property | Token | Value |
|---|---|---|
| root opacity | `--disabled-opacity` | `0.5` |
| pointer-events | — | `none` |
| cursor | — | `not-allowed` |

## Notes

- Opacity applied to ROOT wrapper — differs from switch-group (which dims sub-parts separately).
- `opacity: var(--disabled-opacity, 0.5)` on the outermost div `14551:13700`.
- Use `aria-disabled="true"` on root + `disabled` on any native inputs inside.
- No tooltip, no hover/focus states when disabled.
- Label text, segment text, description — all inherit 50% opacity from root.
