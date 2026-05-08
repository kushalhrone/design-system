---
component: surface
variant: tertiary
figma-node-id: 3013:10520
figma-content-hash: not-computed
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: surface
- variant: tertiary
- status: ready

## Design Tokens

| Property      | Token / Value                                        | Resolved  |
|---------------|------------------------------------------------------|-----------|
| width         | —                                                    | 100% (220px canvas) |
| height        | —                                                    | 100% (220px canvas) |
| border-radius | `--dimensions/radius/rounded-2xl`                    | 16px      |
| background    | `var(--surface/surface-tertiary, #eaeaeb)`           | see Notes |
| backdrop-blur | `var(--blur, 0px)`                                   | 0px       |

### Shadow (shadow-surface)
```
box-shadow:
  0px 2px 4px 0px var(--field/shadow,   rgba(0,0,0,0.04)),
  0px 1px 2px 0px var(--field/shadow-2, rgba(0,0,0,0.06)),
  0px 0px 1px 0px var(--field/shadow-2, rgba(0,0,0,0.06))
```

## Variant Background Ramp

| Variant     | Background  | Figma Token                    |
|-------------|-------------|--------------------------------|
| default     | `#FFFFFF`   | `var(--surface/surface)`       |
| secondary   | `#efeff0`   | `var(--surface/surface-secondary)` |
| tertiary    | `#eaeaeb`   | `var(--surface/surface-tertiary)` |

Tertiary = darkest surface. Use on highest-elevation or most prominent surface layer.

## Notes
- token-near-miss: `var(--surface/surface-tertiary, #eaeaeb)` vs `--color-border` (`--neutral-200` = `#E2E8ED`). Diff: EA→E5(5), EA→E7(3), EB→EB(0). Max 5 points. Do NOT auto-snap. Use raw `#eaeaeb`. No `surface/surface-tertiary` foundation mapping — designer must create.
- token-mismatch: no `--color-surface-tertiary` in foundation. Gap in token system.
- Size 220×220px is canvas placeholder — use `width: 100%` / `height: 100%` in implementation.
