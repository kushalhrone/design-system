---
component: tag-group
variant: surface
figma-node-id: 14330:7769
figma-content-hash: not-computed
foundation-ref: ../../../../foundation/foundation-token
---

## Also Load
> Size, typography, TagList, TagGroup structure tokens not repeated here.
> Also load: `components/form/tag-group/variants/default/default.md`

## Meta
- component: tag-group
- variant: surface
- status: ready
- states: default | hover | focus | selected | disabled

## Interaction States — Tag (surface variant)

| State    | Background                                         | Focus Ring        | Opacity | Cursor      |
|----------|----------------------------------------------------|-------------------|---------|-------------|
| default  | `var(--surface/surface, white)` = `#FFFFFF`        | none              | 1       | pointer     |
| hover    | `var(--surface/surface, white)` = `#FFFFFF`        | none              | 1       | pointer     |
| focus    | `var(--surface/surface, white)` = `#FFFFFF`        | yes (see below)   | 1       | pointer     |
| selected | `var(--accent/accent-soft, rgba(2,86,61,0.15))`    | none              | 1       | pointer     |
| disabled | `var(--surface/surface, white)` = `#FFFFFF`        | none              | 0.5     | not-allowed |

### Focus Ring (identical to default variant)
```
box-shadow:
  0 0 0 var(--ring-offset-width, 2px) var(--background/background, #F8FAFB),
  0 0 0 var(--ring-focus-width, 4px)  var(--focus-ring, #02563d)
```

## Differences from Default Variant

| Property              | default variant                              | surface variant                              |
|-----------------------|----------------------------------------------|----------------------------------------------|
| default bg            | `var(--default/default, #f1f1f1)` = grey     | `var(--surface/surface, white)` = `#FFFFFF`  |
| hover bg              | `var(--default/default-hover, white)` = `#FFFFFF` | `var(--surface/surface, white)` = `#FFFFFF` |
| focus bg              | `var(--default/default-hover, white)` = `#FFFFFF` | `var(--surface/surface, white)` = `#FFFFFF` |
| disabled bg           | `var(--default/default, #f1f1f1)` = grey     | `var(--surface/surface, white)` = `#FFFFFF`  |
| selected bg           | `--color-secondary-soft` ✓ (same)            | `--color-secondary-soft` ✓ (same)            |
| text / icons          | identical                                    | identical                                    |
| focus ring            | identical                                    | identical                                    |

**Use case:** `surface` variant sits on a white/light surface where a grey (`#f1f1f1`) tag would be invisible — use white bg to maintain contrast via shadow or border context.

## All Size / Structural Tokens

Identical to `default` variant — see `variants/default/default.md` for full size table, icon sizes, typography, TagList, TagGroup, Label, and DescriptionErrorMessage tokens.

## Figma Node Map

| Node ID        | Description                               |
|----------------|-------------------------------------------|
| `14330:7769`   | Tag surface+default+md                    |
| `14330:7817`   | Tag surface+default+sm                    |
| `14330:7793`   | Tag surface+default+lg                    |
| `14330:7781`   | Tag surface+hover+md                      |
| `14330:7829`   | Tag surface+hover+sm                      |
| `14330:7805`   | Tag surface+hover+lg                      |
| `14330:7785`   | Tag surface+focus+md                      |
| `14330:7833`   | Tag surface+focus+sm                      |
| `14330:7809`   | Tag surface+focus+lg                      |
| `15416:7231`   | Tag surface+selected+md                   |
| `15416:7255`   | Tag surface+selected+sm                   |
| `15416:7243`   | Tag surface+selected+lg                   |
| `14330:7773`   | Tag surface+disabled+md                   |
| `14330:7821`   | Tag surface+disabled+sm                   |
| `14330:7797`   | Tag surface+disabled+lg                   |

## Notes
- token-near-miss: `var(--surface/surface, white)` = `#FFFFFF` vs `--color-surface` (`--neutral-25` = `#FFFFFF`). 3-point diff. Do NOT auto-snap. Use raw `#FFFFFF`. Consistent with surface component token gap.
- No hover state color change in surface variant (default=hover=focus=white) — visual distinction on hover only comes from focus ring on focus state.
- Selected and disabled states share token resolution with default variant.
