---
component: table
variant: cell-actions
figma-node-id: 19107:10038
figma-content-hash: 8f2c5d1e7b3a
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: table
- sub-component: TableRowCell
- variant: cell-actions
- status: ready

## Props
| Prop    | Type     | Default  |
|---------|----------|----------|
| type    | actions  | actions  |
| variant | regular  | regular  |

## Design Tokens
| Property            | Token Name                        | Value                    |
|---------------------|-----------------------------------|--------------------------|
| button-size         | —                                 | 32×32px                  |
| button-radius       | dimensions/radius/rounded-2xl     | 16px (pill)              |
| button-gap          | dimensions/spacing/1              | 4px                      |
| button-border       | border (--neutral-200)            | #E2E8ED                  |
| button-bg-default   | default/default                   | #f1f1f1                  |
| button-bg-danger    | danger/danger-soft                | rgba(217,45,32,0.15)     |
| icon-size           | —                                 | 16×16px                  |
| cell-justify        | justify-end                       | right-aligned            |

## Anatomy
```
TableRowCell (type=actions, variant=regular)
├── Button (export icon, default bg)   32×32px
├── Button (view/eye icon, default bg) 32×32px
├── Button (edit/pen icon, default bg) 32×32px
└── Button (delete/trash icon, danger-soft bg) 32×32px
```

## Button Specs
| Button  | Icon               | Background                        | Icon keywords                  |
|---------|--------------------|-----------------------------------|--------------------------------|
| Export  | share/export       | default/default (#f1f1f1)         | export move share              |
| View    | eye/dash           | default/default (#f1f1f1)         | - (dash/eye icon)              |
| Edit    | pencil/edit        | default/default (#f1f1f1)         | edit write                     |
| Delete  | trash              | danger/danger-soft rgba(217,45,32,0.15) | delete remove trash can  |

## Interaction States
| State    | Background              | Border              | Cursor    |
|----------|-------------------------|---------------------|-----------|
| default  | default/default         | border (neutral-200)| pointer   |
| hover    | (inherited from parent) | —                   | pointer   |
| disabled | (via parent row)        | —                   | not-allowed |

## Notes
- `danger/danger-soft rgba(217,45,32,0.15)` → `--error` (#DC2626) at 15% opacity ✓ (D92D20 = #DC2626, exact match)
- `border #E2E8ED` → EXACT match `--neutral-200` ✓
- `default/default #f1f1f1` → near-miss `--neutral-100` (#F1F5F7). Using raw.
- All buttons are `32×32px` icon-only with `rounded-2xl` (16px = pill effect for square button)
- Cell is `justify-end` — actions always right-aligned in the row
- Buttons use `backdrop-blur` from the `blur` effect token
- In the simplified `TableRow` (node 19107:10137), only 3 buttons appear: view, edit, delete (no export)
- The full `TableRowCell` (node 19107:10039) exposes all 4 buttons
