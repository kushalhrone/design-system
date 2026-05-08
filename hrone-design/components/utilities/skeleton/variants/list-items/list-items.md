---
component: skeleton
variant: list-items
figma-node-id: "6148:333"
figma-content-hash: "6148333listit"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta
- component: skeleton
- variant: list-items
- status: ready

## Props

| Prop    | Type              | Default   | Notes                                   |
|---------|-------------------|-----------|-----------------------------------------|
| `type`  | `"start" \| "end"` | `"start"` | Shimmer sweep position (animation phase) |
| `count` | `number`          | `3`       | Number of list item rows                |

## Anatomy

```
.skeleton-list-items (flex-col, w=239px)
└── .items-group (flex-col, gap=8px, h=88px)
    └── .item × 3 (flex-row, gap=8px, items-center)
        ├── .icon-block  (24×24px, radius=8px, bg=surface-tertiary)
        └── .text-group  (flex-col, gap=4px, h=16px, flex=1)
            ├── .bar-1  (h=6px, left=0, right=0, radius=2px, top=0)
            └── .bar-2  (h=6px, left=0, right=39px, radius=2px, top=10px)
+ .shimmer-effect (absolute, mask-image PNG, gradient sweep overlay)
```

## Design Tokens

### Item structure

| Property        | Token Name     | Value    |
|-----------------|----------------|----------|
| container width | —              | `239px`  |
| container height| —              | `88px`   |
| row gap         | `--space-2`    | `8px`    |
| icon size       | —              | `24×24px`|
| icon radius     | `--radius-lg`  | `8px`    |
| icon bg         | `--surface/surface-tertiary` | `#eaeaeb` |
| text gap        | `--space-1`    | `4px`    |
| text height     | —              | `16px`   |
| bar height      | —              | `6px`    |
| bar radius      | —              | `2px`    |
| bar bg          | `--surface/surface-tertiary` | `#eaeaeb` |
| bar-2 right gap | —              | `39px`   |

### Shimmer effect

| Property           | Token Name                     | Value       |
|--------------------|--------------------------------|-------------|
| gradient from/to   | `--surface/surface-tertiary`   | `#eaeaeb`   |
| gradient via (mid) | `--surface/surface-secondary`  | `#efeff0`   |
| mask-image         | — (PNG asset, ephemeral)       | alpha sweep |
| mask-size          | —                              | `239×88px`  |
| type=start         | mask-position `100% 0px`       | sweep entering left edge |
| type=end           | mask-position `-244px 0px`     | sweep exiting right edge |

## Notes

- token-mismatch: `--surface/surface-tertiary: #eaeaeb` — no foundation match. Nearest: `--neutral-200: #E2E8ED` (delta ~5 hex). Using raw `#eaeaeb`. Confirm with designer.
- token-mismatch: `--surface/surface-secondary: #efeff0` — no foundation match. Raw. Confirm.
- `bar radius: 2px` — no foundation token (smallest is `--radius-sm: 4px`). Raw.
- `gap-[6px]` between text bars — no foundation token (between `--space-1: 4px` and `--space-2: 8px`). Raw.
- Shimmer PNG mask asset is ephemeral (7-day CDN TTL). Replace with CSS `@keyframes` shimmer in production.
- `type` prop is an animation phase indicator, not a visual variant — both phases are needed for the looping sweep animation.
- Ref: https://v3.heroui.com/docs/react/components/skeleton
