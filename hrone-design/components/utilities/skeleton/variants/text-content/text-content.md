---
component: skeleton
variant: text-content
figma-node-id: "6144:91"
figma-content-hash: "6144091txtcnt"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta
- component: skeleton
- variant: text-content
- status: ready

## Props

| Prop   | Type               | Default   | Notes                                    |
|--------|--------------------|-----------|------------------------------------------|
| `type` | `"start" \| "end"` | `"start"` | Shimmer sweep position (animation phase) |

## Anatomy

```
.skeleton-text-content (flex-col, w=149px)
└── .bars-group (flex-col, h=54px)
    ├── .bar-1  (h=6px, right=0,   radius=2px, top=0)
    ├── .bar-2  (h=6px, right=28px,radius=2px, top=12px)
    ├── .bar-3  (h=6px, right=59px,radius=2px, top=24px)
    ├── .bar-4  (h=6px, right=0,   radius=2px, top=36px)
    └── .bar-5  (h=6px, right=83px,radius=2px, top=48px)
+ .shimmer-effect (absolute, 48px wide, h=81px, mask-image PNG, gradient sweep)
```

## Design Tokens

| Property          | Token Name                     | Value     |
|-------------------|--------------------------------|-----------|
| container width   | —                              | `149px`   |
| bars area height  | —                              | `54px`    |
| bar height        | —                              | `6px`     |
| bar radius        | —                              | `2px`     |
| bar bg            | `--surface/surface-tertiary`   | `#eaeaeb` |
| bar-to-bar gap    | —                              | `12px` (top offsets: 0/12/24/36/48) |
| bar-1 width       | full (right=0)                 | —         |
| bar-2 width       | right=28px                     | —         |
| bar-3 width       | right=59px                     | —         |
| bar-4 width       | full (right=0)                 | —         |
| bar-5 width       | right=83px                     | —         |

### Shimmer effect

| Property           | Token Name                     | Value         |
|--------------------|--------------------------------|---------------|
| gradient from/to   | `--surface/surface-tertiary`   | `#eaeaeb`     |
| gradient via (mid) | `--surface/surface-secondary`  | `#efeff0`     |
| effect width       | —                              | `48px`        |
| effect height      | —                              | `81px`        |
| mask-image         | — (PNG asset, ephemeral)       | alpha sweep   |
| mask-size          | —                              | `149×54px`    |
| type=start         | mask-position `48px 14px`      | entering left |
| type=end           | mask-position `-152px 14px`    | exiting right |

## Notes

- token-mismatch: `--surface/surface-tertiary: #eaeaeb` — no foundation match. Raw. Confirm.
- token-mismatch: `--surface/surface-secondary: #efeff0` — no foundation match. Raw. Confirm.
- `bar radius: 2px` — no foundation token (smallest `--radius-sm: 4px`). Raw.
- Bar spacing is `12px` between tops — no foundation token match (`--space-3: 12px` = exact ✓).
- Container width `149px` raw.
- Staggered right offsets (0/28/59/0/83px) create natural paragraph reading shape — intentional design pattern.
- Shimmer effect `h=81px` overflows container `h=54px` (±14px top/bottom) — clip with `overflow: hidden`.
- Ref: https://v3.heroui.com/docs/react/components/skeleton
