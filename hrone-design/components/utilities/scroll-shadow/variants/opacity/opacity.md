---
component: scroll-shadow
variant: opacity
figma-node-id: "3160:31429"
figma-content-hash: "3160314331429op"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta
- component: scroll-shadow
- variant: opacity
- status: ready
- type: opacity | inSurface: false (default) / true

## Props

| Prop        | Type              | Default     |
|-------------|-------------------|-------------|
| `type`      | `"opacity"`       | `"opacity"` |
| `inSurface` | `boolean`         | `false`     |
| `width`     | `number \| string`| `226px`     |
| `height`    | `number \| string`| `80px`      |

## Mechanism

Opacity variant uses a masked solid-color layer to create a fade-to-color scroll edge effect.

```
.scroll-shadow (relative, w=226px, h=80px)
└── .layer (absolute, inset-0)
      background: --shadow-scroll OR --shadow-scroll-on-surface
      mask-image: url(gradient-mask.png)   ← alpha mask, opaque→transparent
      mask-size: 226px 80px
```

The mask image is a PNG with an alpha gradient (fully opaque at one edge → fully transparent). This blends the content edge into the container background color, producing a soft fade.

## Design Tokens

### inSurface=false (default)

| Property         | Token Name          | Value       |
|------------------|---------------------|-------------|
| layer background | `--color-bg`        | `#F8FAFB`   |
| mask-image       | — (PNG asset)       | gradient alpha mask |
| width            | —                   | `226px`     |
| height           | —                   | `80px`      |
| inset            | —                   | `0` (full cover) |

### inSurface=true

| Property         | Token Name                    | Value     |
|------------------|-------------------------------|-----------|
| layer background | `--shadow-scroll-on-surface`  | `#FFFFFF` |
| mask-image       | — (PNG asset)                 | gradient alpha mask |

## Interaction States

No interaction states — purely visual overlay layer. Positioned absolute over scrollable content.

## Notes

- `--shadow-scroll: #F8FAFB` → exact match `--color-bg: #F8FAFB`. Token used.
- token-near-miss: `--shadow-scroll-on-surface: #ffffff` (white) vs `--color-surface: #FFFFFF`. Delta = 3 hex points. Using raw `#ffffff`. Designer must decide.
- Figma uses custom design tokens `--shadow-scroll` and `--shadow-scroll-on-surface` not present in foundation token files — these appear to be component-scoped tokens referencing background colors.
- Default size `226×80px` — raw values, no foundation spacing match. Width/height should be runtime-configurable to match scroll container dimensions.
- Mask PNG asset: gradient from opaque (edge) to transparent (center). Asset URL is ephemeral (7 days). Should be embedded as CSS gradient or inlined SVG in production.
- Ref: https://v3.heroui.com/docs/react/components/scroll-shadow
