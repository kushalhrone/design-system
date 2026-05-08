---
component: breadcrumbs
variant: level-4
figma-node-id: 14155:5477
figma-content-hash: n/a
foundation-ref: ../../../../../foundation/foundation-token
---

## Also Load
> State matrix and interaction tokens not repeated here.
> Also load: `components/navigation/breadcrumbs/variants/level-2/level-2.md`

## Meta
- component: breadcrumbs
- variant: level-4
- status: ready

## Props
| Prop    | Type   | Default |
|---------|--------|---------|
| `level` | `"4"`  | —       |

## Crumb Structure
| Position | Label          | Type    | Color token              | Interactive |
|----------|----------------|---------|--------------------------|-------------|
| 1 of 4   | `Home`         | link    | `--color-fg-muted` → `#64748B` | yes |
| —        | separator      | chevron | `--color-fg-muted` → `#64748B` | no  |
| 2 of 4   | `Version 3`    | link    | `--color-fg-muted` → `#64748B` | yes |
| —        | separator      | chevron | `--color-fg-muted` → `#64748B` | no  |
| 3 of 4   | `Components`   | link    | `--color-fg-muted` → `#64748B` | yes |
| —        | separator      | chevron | `--color-fg-muted` → `#64748B` | no  |
| 4 of 4   | `Breadcrumbs`  | current | `--color-fg` → `#0F172A`       | no  |

## Design Tokens
All structure, typography, and color tokens are shared. See `../../breadcrumbs.md`.

| Property          | Token / Value                  | Notes |
|-------------------|--------------------------------|-------|
| container width   | `356px` (fixed)                | **Only level-4 has a fixed width** — levels 2 and 3 are auto |
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
- `token-near-miss`: underline color `#cdcdce` mapped to `--color-border` per existing `breadcrumbs.md` correction. Same as other levels.
- Level 4 is the deepest defined variant. Figma fixes the container to `356px` — in implementation, this should be `max-width: 356px` or unconstrained (auto) so it works responsively. Verify with designer.
- Figma separator: same two-icon pattern as `level-3` (`imgIcon` before inactive links, `imgIcon1` before active). Implement with a single `currentColor` chevron icon.
- If paths exceed 4 levels, define a truncation/collapse pattern with an ellipsis (`…`) — not defined in Figma.
