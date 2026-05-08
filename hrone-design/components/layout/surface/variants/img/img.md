---
component: surface
variant: img
figma-node-id: 3013:10522
figma-content-hash: not-computed
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: surface
- variant: img
- status: ready

## Anatomy
```
Surface (img)
└── img    (absolute fill, object-cover, rounded-2xl, backdrop-blur)
```

## Design Tokens

| Property      | Token / Value                     | Resolved  |
|---------------|-----------------------------------|-----------|
| width         | —                                 | 100% (220px canvas) |
| height        | —                                 | 100% (220px canvas) |
| border-radius | `--dimensions/radius/rounded-2xl` | 16px      |
| background    | — (image fill)                    | —         |
| image fit     | `object-cover`                    | —         |
| backdrop-blur | `var(--blur, 0px)`                | 0px       |

### Shadow (shadow-surface)
```
box-shadow:
  0px 2px 4px 0px var(--field/shadow,   rgba(0,0,0,0.04)),
  0px 1px 2px 0px var(--field/shadow-2, rgba(0,0,0,0.06)),
  0px 0px 1px 0px var(--field/shadow-2, rgba(0,0,0,0.06))
```
Applied to outer container; image clipped to `rounded-2xl` within.

## Implementation Notes
- `<img>` is `pointer-events-none`, `position: absolute`, `inset: 0`, fills container
- Image `src` is a slot — accept via prop (no hardcoded URL)
- `overflow: hidden` or `overflow: clip` needed on container to enforce border-radius on image

## Notes
- No background color token — image is the surface. Consumer must supply image src.
- Shadow applied to container wrapper, not the image element directly.
- Size 220×220px is canvas placeholder — use `width: 100%` / `height: 100%` in implementation.
- Figma `shadow-surface` style also includes `shadow-inner` inner shadow layer not present in code output — flag with designer.
