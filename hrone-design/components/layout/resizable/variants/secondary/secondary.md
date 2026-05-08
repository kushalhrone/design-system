---
component: resizable
variant: secondary
figma-node-id: 16906:29797
figma-content-hash: not-computed
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: resizable
- variant: secondary
- status: ready

## Props
| Prop    | Type                    | Default    |
|---------|-------------------------|------------|
| type    | `line` \| `drag` \| `pill` | line    |
| variant | `primary` \| `secondary` \| `tertiary` | secondary |

## Anatomy
```
Resizable (secondary)
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

| Property   | Token / Value                                           | Resolved  |
|------------|---------------------------------------------------------|-----------|
| width      | —                                                       | 1px       |
| height     | 100%                                                    | —         |
| position   | absolute, centered horizontally                         | —         |
| background | `var(--separator/separator-secondary, #d7d7d7)`         | see Notes |

## Design Tokens — Drag Handle (type=drag)

| Property      | Token                                    | Value   |
|---------------|------------------------------------------|---------|
| position      | absolute, centered                       | —       |
| padding-x     | `--space-1`                              | 4px     |
| padding-y     | `--space-1.5`                            | 6px     |
| border-radius | `--dimensions/radius/rounded-sm`         | 4px     |
| background    | `var(--separator/separator-secondary, #d7d7d7)` | see Notes |
| gap (grid)    | —                                        | 1px     |
| grid layout   | 2 columns × 3 rows                       | —       |

### Drag Dots
| Property      | Token                               | Value  |
|---------------|-------------------------------------|--------|
| size          | —                                   | 2×2px  |
| border-radius | `--dimensions/radius/rounded-md`    | 6px    |
| color         | `var(--foreground/foreground, #18181b)` | see Notes |
| opacity       | —                                   | 20%    |

## Design Tokens — Pill Handle (type=pill)

| Property      | Token                                    | Value  |
|---------------|------------------------------------------|--------|
| position      | absolute, centered                       | —      |
| height        | `--space-9`                              | 36px   |
| width         | —                                        | 5px    |
| border-radius | `--dimensions/radius/rounded-sm`         | 4px    |
| background    | `var(--separator/separator-secondary, #d7d7d7)` | see Notes |

## Differences from Primary

| Property         | Primary                                    | Secondary                                    |
|------------------|--------------------------------------------|----------------------------------------------|
| separator color  | `#e4e4e7` (lighter)                        | `#d7d7d7` (darker)                           |
| token            | `var(--separator/separator, #e4e4e7)`      | `var(--separator/separator-secondary, #d7d7d7)` |

## Figma Node Map

| Node ID        | Description                         |
|----------------|-------------------------------------|
| `16906:29797`  | secondary + line (container)        |
| `16906:29798`  | secondary + line (fill line)        |
| `16906:29801`  | secondary + drag (container)        |
| `16906:29802`  | secondary + drag (fill line)        |
| `16906:29803`  | secondary + drag (handle)           |
| `16906:29804`–`16906:29809` | secondary drag dots (6) |
| `16906:29799`  | secondary + pill (container)        |
| `16906:29800`  | secondary + pill handle             |

## Notes
- token-near-miss: `var(--separator/separator-secondary, #d7d7d7)` vs `--color-border-strong` (#CBD5DD = `--neutral-300`). Max diff: 6 hex points. Do NOT auto-snap. Use raw `#d7d7d7`. No `separator/separator-secondary` token in foundation — designer must create or alias.
- token-near-miss: `var(--foreground/foreground, #18181b)` — same as primary. Use raw `#18181b`.
- All structural tokens (padding, radius, sizing) identical to primary variant.
