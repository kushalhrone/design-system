---
component: table
variant: header-secondary
figma-node-id: 19098:45649
figma-content-hash: 2f7d4a9c8e1b
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: table
- sub-component: TableHeader
- variant: header-secondary
- status: ready

## Props
| Prop       | Type              | Default   |
|------------|-------------------|-----------|
| showDrag   | boolean           | true      |
| variant    | secondary         | secondary |
| width      | leading \| equal  | leading   |
| children   | ReactNode         | null      |

## Design Tokens
| Property        | Token Name                       | Value    |
|-----------------|----------------------------------|----------|
| background      | surface/surface-secondary        | #efeff0  |
| border-radius   | dimensions/radius/rounded-2xl    | 16px     |
| padding-x       | dimensions/spacing/4             | 16px     |
| padding-y       | dimensions/spacing/2.5           | 10px     |
| column-gap      | dimensions/spacing/4             | 16px     |
| separator-color | separator/separator-tertiary     | #cdcdce  |

## Anatomy
Same as `header-primary` — see `header-primary.md` for full anatomy.

Differences from primary:
- Adds `bg surface/surface-secondary` background
- Adds `rounded-2xl` (16px) border radius
- Used as the table header for "card-style" tables with a contained visual treatment

## Width Variants
| Width   | Leading Column | Other Columns  |
|---------|----------------|----------------|
| leading | flex-1         | fixed widths   |
| equal   | flex-1         | flex-1 each    |

## Notes
- token-mismatch: `surface/surface-secondary #efeff0` — no foundation color token match. Using raw Figma value. Closest candidate: `--neutral-100` (#F1F5F7), Δ significant. Do not auto-snap — designer must decide.
- token-near-miss: `separator/separator-tertiary #cdcdce` → closest `--neutral-300` (#CBD5DD). Using raw.
- `rounded-2xl` maps to `--dimensions/radius/rounded-2xl` = 16px = `--radius-2xl` ✓
- Secondary header is always used with `table-secondary` variant (rounded card table)
