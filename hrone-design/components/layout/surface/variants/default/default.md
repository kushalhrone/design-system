---
component: surface
variant: default
figma-node-id: 3013:10518
figma-content-hash: not-computed
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: surface
- variant: default
- status: ready

## Design Tokens

| Property      | Token / Value                               | Resolved  |
|---------------|---------------------------------------------|-----------|
| width         | —                                           | 100% (220px canvas) |
| height        | —                                           | 100% (220px canvas) |
| border-radius | `--dimensions/radius/rounded-2xl`           | 16px      |
| background    | `var(--surface/surface, white)` = `#FFFFFF` | see Notes |
| backdrop-blur | `var(--blur, 0px)`                          | 0px       |

### Shadow (shadow-surface)
```
box-shadow:
  0px 2px 4px 0px var(--field/shadow,   rgba(0,0,0,0.04)),
  0px 1px 2px 0px var(--field/shadow-2, rgba(0,0,0,0.06)),
  0px 0px 1px 0px var(--field/shadow-2, rgba(0,0,0,0.06))
```

## Notes
- token-near-miss: `var(--surface/surface, white)` = `#FFFFFF` vs `--color-surface` (`--neutral-25` = `#FFFFFF`). 3-point diff. Do NOT auto-snap. Use raw `#FFFFFF`. Confirm canonical surface token with designer.
- token-mismatch: `var(--surface/surface)` — no explicit DS/Figma mapping in foundation color.md for this token name. Closest semantic: `--color-surface`.
- Figma `shadow-surface` style spec also includes an inner shadow (`shadow-inner` color) that is NOT rendered in component code — may be vestigial or dark-mode-only. Flag with designer.
- No foundation tokens for `--field/shadow` / `--field/shadow-2` — raw rgba values used.
- Size 220×220px is canvas placeholder — use `width: 100%` / `height: 100%` in implementation.
