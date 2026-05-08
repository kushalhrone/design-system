---
component: scroll-shadow
variant: blur
figma-node-id: "3160:31448"
figma-content-hash: "3160314481429bl"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta
- component: scroll-shadow
- variant: blur
- status: ready
- type: blur | inSurface: false (default) / true

## Props

| Prop        | Type              | Default   |
|-------------|-------------------|-----------|
| `type`      | `"blur"`          | —         |
| `inSurface` | `boolean`         | `false`   |
| `width`     | `number \| string`| `226px`   |
| `height`    | `number \| string`| `80px`    |

## Mechanism

Blur variant uses a masked frosted-glass layer to create a blurred scroll edge effect.

```
.scroll-shadow (relative, w=226px, h=80px)
└── .blur-layer (absolute, inset-0)
      backdrop-filter: blur(5px)
      background: --shadow-scroll-blur OR --shadow-scroll-blur-on-surface
      mask-image: url(gradient-mask-blur.png)   ← alpha mask, opaque→transparent
      mask-size: 226px 80px
```

The `backdrop-filter: blur(5px)` blurs underlying content. The alpha mask gradient fades the blur layer from full coverage at the edge to invisible at center.

## Design Tokens

### inSurface=false (default)

| Property           | Token Name                | Value                    |
|--------------------|---------------------------|--------------------------|
| layer background   | `--shadow-scroll-blur`    | `rgba(245,245,245,0.7)`  |
| backdrop-filter    | —                         | `blur(5px)`              |
| mask-image         | — (PNG asset)             | gradient alpha mask      |
| width              | —                         | `226px`                  |
| height             | —                         | `80px`                   |

### inSurface=true

| Property           | Token Name                          | Value                    |
|--------------------|-------------------------------------|--------------------------|
| layer background   | `--shadow-scroll-blur-on-surface`   | `rgba(255,255,255,0.7)`  |
| backdrop-filter    | —                                   | `blur(5px)`              |

## Interaction States

No interaction states — purely visual overlay layer. Positioned absolute over scrollable content.

## Notes

- `--shadow-scroll-blur: rgba(245,245,245,0.7)` — no foundation match. `#F5F5F5` is neutral/zinc not in foundation palette. Using raw value. Confirm with designer.
- `--shadow-scroll-blur-on-surface: rgba(255,255,255,0.7)` — no foundation match. Using raw `rgba(255,255,255,0.7)`. Confirm.
- token-near-miss: `backdrop-filter: blur(5px)` vs foundation `--blur: 6px` (1px diff). Using raw `5px`. Designer must decide.
- Figma custom tokens `--shadow-scroll-blur` and `--shadow-scroll-blur-on-surface` not present in foundation — component-scoped tokens only.
- Blur mask PNG asset differs from opacity mask (different gradient shape). Both assets are ephemeral and must be embedded in production (CSS gradient or inline SVG).
- Default size `226×80px` raw — match to actual scroll container at runtime.
- Ref: https://v3.heroui.com/docs/react/components/scroll-shadow
