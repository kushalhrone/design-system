---
component: table
variant: cell-visual
figma-node-id: 19107:10034
figma-content-hash: 6b9a3c8f2e4d
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: table
- sub-component: TableRowCell
- variant: cell-visual
- status: ready

## Props
| Prop    | Type                                          | Default        |
|---------|-----------------------------------------------|----------------|
| type    | visual \| visualSupport                       | visualSupport  |
| variant | leading \| regular                            | regular        |

## Design Tokens
| Property         | Token Name                      | Value   |
|------------------|---------------------------------|---------|
| avatar-size      | dimensions/radius/rounded-4xl   | 32×32px |
| avatar-radius    | dimensions/radius/rounded-4xl   | 32px    |
| gap              | dimensions/spacing/3            | 12px    |
| name-color       | foreground/foreground           | #18181b |
| email-color      | foreground/muted                | #71717a |
| font-size-name   | dimensions/font/text-xs (support) / text-sm (visual) | 12px / 14px |
| font-size-email  | dimensions/font/text-xs         | 12px    |
| line-height      | dimensions/leading/text-xs      | 16px    |

## Cell Type Variants

### type=visual
- Avatar (32px) + **single name text** (inline)
- `variant=leading`: name is font-medium (500), z-1 stacking with avatar z-2
- `variant=regular`: name is font-regular (400), z-1

### type=visualSupport
- Avatar (32px) + **two-line stack** (name + email/secondary label)
- `variant=leading`: name = font-medium; email = font-regular; both text-xs
- `variant=regular`: name + email = font-regular, both text-xs

## Anatomy
```
TableRowCell (type=visualSupport, variant=regular)
├── Avatar 32×32px (z-2, rounded-full)
└── container (flex-col, z-1)
    ├── name line (text-xs, foreground/foreground)
    └── email line (text-xs, foreground/muted)
```

## Notes
- token-near-miss: `foreground/foreground #18181b` → `--neutral-900` (#0F172A). Using raw.
- token-near-miss: `foreground/muted #71717a` → `--neutral-500` (#64748B). Using raw.
- Avatar uses `object-cover` with `pointer-events-none` — it is presentational only
- Avatar border-radius = `rounded-4xl` (32px) = full circle for 32×32px avatar → effectively `rounded-full`
- `z-2` on avatar, `z-1` on text — avatar stacks above text in `isolate` context for visual layering
- gap-3 (12px) = `--space-3` ✓
