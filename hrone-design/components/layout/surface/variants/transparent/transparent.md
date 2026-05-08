---
component: surface
variant: transparent
figma-node-id: 3013:10517
figma-content-hash: not-computed
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: surface
- variant: transparent
- status: ready

## Props
| Prop    | Type                                                      | Default       |
|---------|-----------------------------------------------------------|---------------|
| variant | `transparent` \| `default` \| `secondary` \| `tertiary` \| `img` | transparent |

## Design Tokens

| Property      | Token / Value                                   | Resolved  |
|---------------|-------------------------------------------------|-----------|
| width         | —                                               | 100% (220px canvas) |
| height        | —                                               | 100% (220px canvas) |
| border-radius | `--dimensions/radius/rounded-2xl`               | 16px      |
| background    | `var(--surface/transparent, rgba(255,255,255,0))` | transparent (see Notes) |
| box-shadow    | none                                            | —         |
| backdrop-blur | `var(--blur, 0px)`                              | 0px       |

## Notes
- token-mismatch: `var(--surface/transparent, rgba(255,255,255,0))` — no foundation token for `surface/transparent`. Raw value is fully transparent. Designer must alias or confirm token name.
- No shadow on transparent variant — intentional (container is invisible).
- Size 220×220px is canvas placeholder — use `width: 100%` / `height: 100%` in implementation.
