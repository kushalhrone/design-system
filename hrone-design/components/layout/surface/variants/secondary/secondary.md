---
component: surface
variant: secondary
figma-node-id: 3013:10519
figma-content-hash: not-computed
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: surface
- variant: secondary
- status: ready

## Design Tokens

| Property      | Token / Value                                        | Resolved  |
|---------------|------------------------------------------------------|-----------|
| width         | —                                                    | 100% (220px canvas) |
| height        | —                                                    | 100% (220px canvas) |
| border-radius | `--dimensions/radius/rounded-2xl`                    | 16px      |
| background    | `var(--surface/surface-secondary, #efeff0)`          | see Notes |
| backdrop-blur | `var(--blur, 0px)`                                   | 0px       |

### Shadow (shadow-surface)
```
box-shadow:
  0px 2px 4px 0px var(--field/shadow,   rgba(0,0,0,0.04)),
  0px 1px 2px 0px var(--field/shadow-2, rgba(0,0,0,0.06)),
  0px 0px 1px 0px var(--field/shadow-2, rgba(0,0,0,0.06))
```

## Differences from Default

| Property   | Default                    | Secondary                               |
|------------|----------------------------|-----------------------------------------|
| background | `#FFFFFF` (white)          | `#efeff0` (light grey)                  |
| token      | `var(--surface/surface)`   | `var(--surface/surface-secondary)`      |

## Notes
- token-near-miss: `var(--surface/surface-secondary, #efeff0)` vs `--color-bg-subtle` (`--neutral-100` = `#F1F5F7`). Max diff: 6 hex points. Do NOT auto-snap. Use raw `#efeff0`. No `surface/surface-secondary` foundation mapping — designer must create or alias.
- token-mismatch: no `--color-surface-secondary` token in foundation. Nearest semantic is `--color-bg-subtle` but fails near-miss threshold.
- Size 220×220px is canvas placeholder — use `width: 100%` / `height: 100%` in implementation.
