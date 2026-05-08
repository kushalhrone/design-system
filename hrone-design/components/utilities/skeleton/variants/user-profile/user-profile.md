---
component: skeleton
variant: user-profile
figma-node-id: "6146:113"
figma-content-hash: "6146113usrpro"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta
- component: skeleton
- variant: user-profile
- status: ready

## Props

| Prop   | Type               | Default   | Notes                                    |
|--------|--------------------|-----------|------------------------------------------|
| `type` | `"start" \| "end"` | `"start"` | Shimmer sweep position (animation phase) |

## Anatomy

```
.skeleton-user-profile (flex-row, gap=8px, items-center, w=97px)
├── .avatar  (24×24px, radius=12px, bg=surface-tertiary)
└── .text-group (flex-col, gap=4px, h=16px, flex=1)
    ├── .bar-1  (h=6px, left=0, right=0, radius=8px, top=0)
    └── .bar-2  (h=6px, left=0, right=18px, radius=8px, top=10px)
+ .shimmer-effect (absolute, mask-image PNG, gradient sweep)
```

## Design Tokens

| Property        | Token Name                   | Value    |
|-----------------|------------------------------|----------|
| container width | —                            | `97px`   |
| row gap         | `--space-2`                  | `8px`    |
| avatar size     | —                            | `24×24px`|
| avatar radius   | `--radius-xl`                | `12px`   |
| avatar bg       | `--surface/surface-tertiary` | `#eaeaeb`|
| text gap        | `--space-1`                  | `4px`    |
| text height     | —                            | `16px`   |
| bar height      | —                            | `6px`    |
| bar radius      | `--radius-lg`                | `8px`    |
| bar bg          | `--surface/surface-tertiary` | `#eaeaeb`|
| bar-2 right gap | —                            | `18px`   |

### Shimmer effect

| Property           | Token Name                     | Value        |
|--------------------|--------------------------------|--------------|
| gradient from/to   | `--surface/surface-tertiary`   | `#eaeaeb`    |
| gradient via (mid) | `--surface/surface-secondary`  | `#efeff0`    |
| mask-image         | — (PNG asset, ephemeral)       | alpha sweep  |
| mask-size          | `359.26% × 24px`               | —            |
| type=start         | mask-position `100% 15px`      | entering left|
| type=end           | mask-position `-377.78% 15px`  | exiting right|
| effect h           | `49px` (overflows ±15px)       | —            |

## Notes

- token-mismatch: `--surface/surface-tertiary: #eaeaeb` — no foundation match. Raw. Confirm.
- token-mismatch: `--surface/surface-secondary: #efeff0` — no foundation match. Raw. Confirm.
- Bar radius uses `--radius-sm` Figma label `rounded-[var(--radius-sm,8px)]` — but foundation `--radius-sm: 4px` ≠ 8px fallback. Figma fallback value `8px` = `--radius-lg`. **Token name/value mismatch in Figma.** Using raw `8px` = `--radius-lg`. Flag to designer.
- Container width `97px` raw — no spacing match.
- Shimmer effect overflows container vertically (`h=49px` vs container `h=24px`) — use `overflow: hidden` on parent.
- Ref: https://v3.heroui.com/docs/react/components/skeleton
