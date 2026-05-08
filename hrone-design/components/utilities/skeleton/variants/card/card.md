---
component: skeleton
variant: card
figma-node-id: "6141:14168"
figma-content-hash: "6141141686card"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta
- component: skeleton
- variant: card
- status: ready

## Props

| Prop   | Type               | Default   | Notes                                    |
|--------|--------------------|-----------|------------------------------------------|
| `type` | `"start" \| "end"` | `"start"` | Shimmer sweep position (animation phase) |

## Anatomy

```
.skeleton-card (flex-col, gap=8px, p=8px, radius=8px, w=130px)
├── .image-block  (full-width, h=66px, radius=8px, bg=surface-tertiary)
└── .text-group   (flex-col, gap=6px, h=30px)
    ├── .bar-1  (h=6px, right=49px, radius=8px, top=0)
    ├── .bar-2  (h=6px, right=34px, radius=8px, top=12px)
    └── .bar-3  (h=6px, right=63px, radius=8px, top=24px)
+ .shimmer-effect (absolute, 48px wide, mask-image PNG, gradient sweep)
```

## Design Tokens

### Card structure

| Property          | Token Name                   | Value     |
|-------------------|------------------------------|-----------|
| container width   | —                            | `130px`   |
| container padding | `--space-2`                  | `8px`     |
| container radius  | `--radius-lg`                | `8px`     |
| section gap       | `--space-2`                  | `8px`     |
| image height      | —                            | `66px`    |
| image radius      | —                            | `8px`     |
| image bg          | `--surface/surface-tertiary` | `#eaeaeb` |
| text area height  | —                            | `30px`    |
| text gap          | —                            | `6px`     |
| bar height        | —                            | `6px`     |
| bar radius        | `--radius-lg`                | `8px`     |
| bar bg            | `--surface/surface-tertiary` | `#eaeaeb` |
| bar-1 right gap   | —                            | `49px`    |
| bar-2 right gap   | —                            | `34px`    |
| bar-3 right gap   | —                            | `63px`    |

### Shimmer effect

| Property           | Token Name                   | Value                |
|--------------------|------------------------------|----------------------|
| gradient from/to   | `--surface/surface-tertiary` | `#eaeaeb`            |
| gradient via (mid) | `--surface/surface`          | `white (#ffffff)`    |
| effect width       | —                            | `48px`               |
| mask-image         | — (PNG asset, ephemeral)     | alpha sweep          |
| mask-size          | —                            | `114×104px`          |
| type=start         | mask-position `52px 12px`    | entering left        |
| type=end           | mask-position `-108px 12px`  | exiting right        |

## Notes

- token-mismatch: `--surface/surface-tertiary: #eaeaeb` — no foundation match. Raw. Confirm.
- token-near-miss: shimmer mid color `--surface/surface: white (#ffffff)` vs `--color-surface: #FFFFFF` (3 hex delta). Using raw `#ffffff`. Confirm.
- `gap-[6px]` between text bars — no foundation token. Raw.
- `bar radius 8px` — Figma uses `--radius-sm` label with fallback `8px`. Foundation `--radius-sm: 4px` ≠ fallback. Using `8px` = `--radius-lg`. Flag to designer (same Figma token name mismatch as user-profile).
- Image `height: 66px` — raw, no spacing token.
- Container width `130px` raw.
- Ref: https://v3.heroui.com/docs/react/components/skeleton
