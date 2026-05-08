---
component: table
variant: row-default
figma-node-id: 19107:10136
figma-content-hash: 7e3b1f6d2a9c
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: table
- sub-component: TableRow
- variant: row-default
- status: ready

## Props
| Prop          | Type              | Default  |
|---------------|-------------------|----------|
| showDrag      | boolean           | true     |
| showSeparator | boolean           | true     |
| state         | default           | default  |
| width         | leading \| equal  | leading  |
| children      | ReactNode         | null     |

## Design Tokens
| Property          | Token Name                        | Value         |
|-------------------|-----------------------------------|---------------|
| height            | —                                 | 56px          |
| padding-x         | dimensions/spacing/4              | 16px          |
| padding-y         | dimensions/spacing/3              | 12px          |
| column-gap        | dimensions/spacing/8              | 32px          |
| background-overlay| none                              | transparent   |
| separator-color   | separator/separator-tertiary      | #cdcdce       |
| separator-opacity | —                                 | 50%           |
| separator-height  | —                                 | 1px (bottom)  |
| checkbox-bg       | default/default                   | #f1f1f1       |
| checkbox-size     | —                                 | 16×16px       |
| drag-dot-color    | foreground/foreground at 20%      | #18181b20     |

## Anatomy
```
TableRow (h-56px)
├── bg overlay layer (absolute, inset 0 0 1px 0 — clears bottom border area)
├── slot (flex row, gap-8 / 32px)
│   ├── container (flex-1, gap-4 / 16px)
│   │   ├── drag handle (6-dot 2×3 grid, visible)
│   │   ├── checkbox (16px CheckboxControl)
│   │   └── TableRowCell type=value variant=leading (flex-1)
│   ├── TableRowCell type=visualSupport variant=regular (w-176px or flex-1)
│   ├── TableRowCell type=value variant=regular (w-192px or flex-1) — Role
│   ├── TableRowCell type=value variant=regular (w-120px or flex-1) — Worker Type
│   └── TableRowCell type=actions variant=regular (w-120px or flex-1, justify-end)
└── separator (absolute, bottom-0, full width, 1px, opacity-50)
```

## Width Variants
| Width   | Leading Column | Other Columns  |
|---------|----------------|----------------|
| leading | flex-1 min-w-0 | fixed widths   |
| equal   | flex-1         | flex-1 each    |

## Interaction States
| State    | Background  | Drag Handle | Opacity | Cursor  |
|----------|-------------|-------------|---------|---------|
| default  | transparent | visible     | 1       | default |
| hover    | #f1f1f1 30% | visible     | 1       | default |
| disabled | transparent | 50% opacity | 0.5     | default |

## Notes
- token-near-miss: `default/default #f1f1f1` — closest foundation `--neutral-100` (#F1F5F7). Δ ~4 pts. Using raw value.
- token-near-miss: `separator/separator-tertiary #cdcdce` → `--neutral-300` (#CBD5DD). Using raw.
- Row height is fixed at **56px** — do not override for standard data rows
- The bg overlay layer covers `inset: 0 0 1px 0` to avoid the separator overlapping the hover background
- Drag handle is always visible in default rows (unlike header where it's opacity-0 by default)
- CheckboxControl uses `default/default (#f1f1f1)` background — this is the unchecked/resting state
