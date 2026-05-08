---
component: resizable
variant: primary
figma-node-id: 16902:29720
figma-content-hash: not-computed
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: resizable
- variant: primary
- status: ready

## Props
| Prop    | Type                    | Default |
|---------|-------------------------|---------|
| type    | `line` \| `drag` \| `pill` | line  |
| variant | `primary` \| `secondary` \| `tertiary` | primary |

## Anatomy
```
Resizable
├── FillLine         (type=line OR type=drag — centered 1px vertical line)
├── DragHandle       (type=drag only — 2×3 dot grid, centered over FillLine)
└── PillHandle       (type=pill only — 5px wide pill, centered)
```

## Design Tokens — Container

| Property      | Token                              | Value        |
|---------------|------------------------------------|--------------|
| height        | —                                  | 100% (230px canvas) |
| width (line/drag) | —                              | 1px          |
| width (pill)  | —                                  | 5px          |
| border-radius | `--dimensions/radius/rounded-sm`   | 4px          |

## Design Tokens — Fill Line (type=line, type=drag)

| Property   | Token / Value                                  | Resolved    |
|------------|------------------------------------------------|-------------|
| width      | —                                              | 1px         |
| height     | 100% (stretches container)                     | —           |
| position   | absolute, centered horizontally                | —           |
| background | `var(--separator/separator, #e4e4e7)`          | see Notes   |

## Design Tokens — Drag Handle (type=drag)

| Property      | Token                            | Value   |
|---------------|----------------------------------|---------|
| position      | absolute, centered (50% left, 50% top) | —  |
| padding-x     | `--space-1`                      | 4px     |
| padding-y     | `--space-1.5`                    | 6px     |
| border-radius | `--dimensions/radius/rounded-sm` | 4px     |
| background    | `var(--separator/separator, #e4e4e7)` | see Notes |
| gap (grid)    | —                                | 1px     |
| grid layout   | 2 columns × 3 rows               | —       |

### Drag Dots (6 total, 2×3 grid)
| Property      | Token                              | Value  |
|---------------|------------------------------------|--------|
| size          | —                                  | 2×2px  |
| border-radius | `--dimensions/radius/rounded-md`   | 6px    |
| color         | `var(--foreground/foreground, #18181b)` | see Notes |
| opacity       | —                                  | 20%    |

## Design Tokens — Pill Handle (type=pill)

| Property      | Token                              | Value  |
|---------------|------------------------------------|--------|
| position      | absolute, centered                 | —      |
| height        | `--space-9`                        | 36px   |
| width         | —                                  | 5px    |
| border-radius | `--dimensions/radius/rounded-sm`   | 4px    |
| background    | `var(--separator/separator, #e4e4e7)` | see Notes |

## Figma Node Map

| Node ID        | Description                        |
|----------------|------------------------------------|
| `16902:29720`  | Resizable — root component set     |
| `16902:29731`  | primary + line (container)         |
| `16902:29749`  | primary + line (fill line)         |
| `16906:29754`  | primary + drag (container)         |
| `16906:29755`  | primary + drag (fill line)         |
| `16906:29764`  | primary + drag (handle)            |
| `16906:29765`–`16906:29770` | primary drag dots (6) |
| `16906:29774`  | primary + pill (container)         |
| `16906:29775`  | primary + pill handle              |

## Notes
- token-near-miss: `var(--separator/separator, #e4e4e7)` vs `--color-border` (#E2E8ED = `--neutral-200`). Max diff: 4 hex points. Do NOT auto-snap. Use raw `#e4e4e7`. No `separator/separator` token in foundation — designer must create or alias.
- token-near-miss: `var(--foreground/foreground, #18181b)` vs `--color-fg` (#0F172A). 12-point diff on blue channel. Use raw `#18181b`.
- Container width `1px` (line/drag) and `5px` (pill) have no spacing tokens — use raw values.
- Drag handle gap `1px` has no spacing token — use raw `1px`.
- Container height `230px` is canvas placeholder — use `height: 100%` in implementation.
- Disabled state not defined in Figma — do not implement without designer confirmation.
- Cursor should be `col-resize` for horizontal resizable, `row-resize` for vertical — not defined in Figma, confirm with designer.
