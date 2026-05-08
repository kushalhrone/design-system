---
component: table
variant: header-primary
figma-node-id: 19098:45647
figma-content-hash: 5c1e8a2f9b7d
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: table
- sub-component: TableHeader
- variant: header-primary
- status: ready

## Props
| Prop       | Type              | Default  |
|------------|-------------------|----------|
| showDrag   | boolean           | true     |
| variant    | primary           | primary  |
| width      | leading \| equal  | leading  |
| children   | ReactNode         | null     |

## Design Tokens
| Property        | Token Name                       | Value    |
|-----------------|----------------------------------|----------|
| background      | none (transparent)               | —        |
| padding-x       | dimensions/spacing/4             | 16px     |
| padding-y       | dimensions/spacing/2.5           | 10px     |
| column-gap      | dimensions/spacing/4             | 16px     |
| separator-color | separator/separator-tertiary     | #cdcdce  |
| separator-height| —                                | 16px     |
| separator-width | —                                | 1px      |
| checkbox-size   | —                                | 16×16px  |
| drag-dot-size   | —                                | 2×2px    |
| drag-dot-color  | foreground/foreground at 20%     | #18181b  |

## Anatomy
```
TableHeader
├── drag handle (6-dot grid, 2×3, hidden by default opacity-0)
├── checkbox (16×16px CheckboxControl)
└── slot (flex row, gap-4)
    ├── [leading column] flex-1 — contains drag + checkbox + TableHeaderCell
    ├── Separator (1px × 16px vertical)
    ├── TableHeaderCell (176px fixed or flex-1 in equal)
    ├── Separator
    ├── TableHeaderCell (192px or flex-1)
    ├── Separator
    ├── TableHeaderCell (120px or flex-1)
    ├── Separator (opacity-0 — placeholder)
    └── TableHeaderCell (120px or flex-1, opacity-0 — placeholder)
```

## Width Variants
| Width   | Leading Column | Other Columns  | Description                           |
|---------|----------------|----------------|---------------------------------------|
| leading | flex-1         | fixed widths   | First col expands, others fixed       |
| equal   | flex-1         | flex-1 each    | All columns equal width               |

## Interaction States
| State   | Background | Drag Handle | Notes                          |
|---------|------------|-------------|--------------------------------|
| default | none       | opacity-0   | Drag dots hidden until hover   |
| hover   | none       | visible     | Drag dots appear on row hover  |

## Notes
- token-near-miss: `separator/separator-tertiary #cdcdce` — closest foundation `--neutral-300` (#CBD5DD). Δ ~4 hex pts. Using raw Figma value.
- token-near-miss: `foreground/foreground #18181b` — closest `--neutral-900` (#0F172A). Using raw value.
- Drag handle uses 6 dots in a 2×3 grid; each dot is 2×2px, `rounded-sm` (4px), `opacity-20`
- Checkbox uses `field/background white` with `field/border rgba(222,222,224,0)` = transparent border → glassmorphism-style field
- The last two TableHeaderCells are `opacity-0` placeholders for column alignment; they are not visible
- Width=leading: default layout for tables with a prominent leading identifier column
- Width=equal: use when all columns carry equal weight (no leading identity column)
