---
component: table
variant: row-disabled
figma-node-id: 19107:10304
figma-content-hash: 9c5f3b2d7e1a
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: table
- sub-component: TableRow
- variant: row-disabled
- status: ready

## Props
| Prop          | Type              | Default  |
|---------------|-------------------|----------|
| showDrag      | boolean           | true     |
| showSeparator | boolean           | true     |
| state         | disabled          | —        |
| width         | leading \| equal  | leading  |

## Design Tokens
| Property           | Token Name             | Value  |
|--------------------|------------------------|--------|
| disabled-opacity   | disabled-opacity       | 0.5    |
| background-overlay | none                   | —      |
| height             | —                      | 56px   |

## Interaction States
| State    | Background | All Cell Opacity | Drag Opacity | Checkbox Opacity | Cursor       |
|----------|------------|------------------|--------------|------------------|--------------|
| disabled | none       | 0.5              | 0.5          | 0.5              | not-allowed  |

## Notes
- Disabled state applies `opacity: var(--disabled-opacity, 0.5)` to **each cell, drag handle, and checkbox individually** — not to the whole row wrapper
- Layout (height, padding, gaps) is identical to `row-default`
- Separator is still rendered but cells are dimmed
- No interactive events should fire on a disabled row
- Actions cell buttons remain visible but are non-interactive (covered by opacity, no pointer events)
