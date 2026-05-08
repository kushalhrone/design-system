---
component: resizable
variant: tertiary
figma-node-id: 17110:14583
figma-content-hash: not-computed
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: resizable
- variant: tertiary
- status: ready

## Props
| Prop    | Type                    | Default    |
|---------|-------------------------|------------|
| type    | `line` \| `drag` \| `pill` | line    |
| variant | `primary` \| `secondary` \| `tertiary` | tertiary |

## Anatomy
```
Resizable (tertiary)
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

| Property   | Token / Value                                          | Resolved  |
|------------|--------------------------------------------------------|-----------|
| width      | —                                                      | 1px       |
| height     | 100%                                                   | —         |
| position   | absolute, centered horizontally                        | —         |
| background | `var(--separator/separator-tertiary, #cdcdce)`         | see Notes |

## Design Tokens — Drag Handle (type=drag)

| Property      | Token                                   | Value   |
|---------------|-----------------------------------------|---------|
| position      | absolute, centered                      | —       |
| padding-x     | `--space-1`                             | 4px     |
| padding-y     | `--space-1.5`                           | 6px     |
| border-radius | `--dimensions/radius/rounded-sm`        | 4px     |
| background    | `var(--separator/separator-tertiary, #cdcdce)` | see Notes |
| gap (grid)    | —                                       | 1px     |
| grid layout   | 2 columns × 3 rows                      | —       |

### Drag Dots
| Property      | Token                               | Value  |
|---------------|-------------------------------------|--------|
| size          | —                                   | 2×2px  |
| border-radius | `--dimensions/radius/rounded-md`    | 6px    |
| color         | `var(--foreground/foreground, #18181b)` | see Notes |
| opacity       | —                                   | 20%    |

## Design Tokens — Pill Handle (type=pill)

| Property      | Token                                   | Value  |
|---------------|-----------------------------------------|--------|
| position      | absolute, centered                      | —      |
| height        | `--space-9`                             | 36px   |
| width         | —                                       | 5px    |
| border-radius | `--dimensions/radius/rounded-sm`        | 4px    |
| background    | `var(--separator/separator-tertiary, #cdcdce)` | see Notes |

## Differences from Primary / Secondary

| Property         | Primary            | Secondary   | Tertiary           |
|------------------|--------------------|-------------|---------------------|
| separator color  | `#e4e4e7` (lightest) | `#d7d7d7` | `#cdcdce` (darkest) |
| token            | `--separator/separator` | `--separator/separator-secondary` | `--separator/separator-tertiary` |
| foundation match | near-miss `--color-border` | near-miss `--color-border-strong` | no match |

## Figma Node Map

| Node ID        | Description                        |
|----------------|------------------------------------|
| `17110:14583`  | tertiary + line (container)        |
| `17110:14584`  | tertiary + line (fill line)        |
| `17110:14587`  | tertiary + drag (container)        |
| `17110:14588`  | tertiary + drag (fill line)        |
| `17110:14589`  | tertiary + drag (handle)           |
| `17110:14590`–`17110:14595` | tertiary drag dots (6) |
| `17110:14585`  | tertiary + pill (container)        |
| `17110:14586`  | tertiary + pill handle             |

## Notes
- token-mismatch: `var(--separator/separator-tertiary, #cdcdce)` — no foundation token match. Closest: `--neutral-300` (#CBD5DD) — 13-point diff on blue channel, too far to log as near-miss. Designer must create `--separator/separator-tertiary` token or assign existing neutral.
- token-near-miss: `var(--foreground/foreground, #18181b)` — same as primary/secondary. Use raw `#18181b`.
- All structural tokens (padding, radius, sizing) identical to primary and secondary variants.
- Tertiary produces the darkest/strongest separator — intended for use on light-colored or prominent surfaces.
