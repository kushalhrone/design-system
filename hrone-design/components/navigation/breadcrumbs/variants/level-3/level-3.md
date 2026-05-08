---
component: breadcrumbs
variant: level-3
figma-node-id: 14155:5488
figma-content-hash: n/a
foundation-ref: ../../../../../foundation/foundation-token
---

## Also Load
> State matrix and interaction tokens not repeated here.
> Also load: `components/navigation/breadcrumbs/variants/level-2/level-2.md`

## Meta
- component: breadcrumbs
- variant: level-3
- status: ready

## Props
| Prop    | Type   | Default |
|---------|--------|---------|
| `level` | `"3"`  | —       |

## Crumb Structure
| Position | Label          | Type    | Color token              | Interactive |
|----------|----------------|---------|--------------------------|-------------|
| 1 of 3   | `Home`         | link    | `--color-fg-muted` → `#64748B` | yes |
| —        | separator      | chevron | `--color-fg-muted` → `#64748B` | no  |
| 2 of 3   | `Version 3`    | link    | `--color-fg-muted` → `#64748B` | yes |
| —        | separator      | chevron | `--color-fg-muted` → `#64748B` | no  |
| 3 of 3   | `Breadcrumbs`  | current | `--color-fg` → `#0F172A`       | no  |

## Design Tokens
All structure, typography, and color tokens are shared. See `../../breadcrumbs.md`.

| Property          | Token / Value                  | Notes |
|-------------------|--------------------------------|-------|
| container width   | auto (fit-content)             | Level 3 has no fixed width |
| container gap     | `--space-1` (4px)              | Between all flex children |
| link padding-x    | `--space-0-5` (2px)            | On each BreadcrumbLink container |
| separator size    | `12px`                         | `size-[12px]` — no spacing token |
| separator rotation | `-90deg`                      | Chevron-down icon rotated right |
| ancestor color    | `--color-fg-muted` (`#64748B`) | Foundation exact match |
| current color     | `--color-fg` (`#0F172A`)       | Foundation exact match |
| underline         | `underline` / `--color-border` | See Notes |
| font              | `--text-sm` / `--font-medium`  | 14px / 500 / 20px leading |

## Interaction States
Same as `level-2` variant. See `../level-2/level-2.md` for the full state matrix.

## Notes
- `token-near-miss`: underline color `#cdcdce` mapped to `--color-border` per existing `breadcrumbs.md` correction. Same as `level-2`.
- Figma separator uses two icon assets: a muted version before inactive links (`imgIcon`) and a slightly darker version (`imgIcon1`) immediately before the current/active last link. Both map to `--color-fg-muted` — use a single icon with `currentColor` in implementation.
- Level 3 is the standard mid-depth path — use when current page is two levels below Home.
