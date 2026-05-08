---
component: breadcrumbs
variant: level-2
figma-node-id: 14155:5529
figma-content-hash: n/a
foundation-ref: ../../../../../foundation/foundation-token
---

## Meta
- component: breadcrumbs
- variant: level-2
- status: ready

## Props
| Prop    | Type   | Default |
|---------|--------|---------|
| `level` | `"2"`  | —       |

## Crumb Structure
| Position | Label        | Type    | Color token       | Interactive |
|----------|--------------|---------|-------------------|-------------|
| 1 of 2   | `Home`       | link    | `--color-fg-muted` → `#64748B` | yes |
| —        | separator    | chevron | `--color-fg-muted` → `#64748B` | no  |
| 2 of 2   | `Breadcrumbs`| current | `--color-fg` → `#0F172A`       | no  |

## Design Tokens
All structure, typography, and color tokens are shared. See `../../breadcrumbs.md`.

| Property          | Token / Value                   | Notes |
|-------------------|---------------------------------|-------|
| container width   | auto (fit-content)              | Level 2 has no fixed width — expands to content |
| container gap     | `--space-1` (4px)               | Between all flex children |
| link padding-x    | `--space-0-5` (2px)             | On each BreadcrumbLink container |
| separator size    | `12px`                          | `size-[12px]` — no spacing token |
| separator rotation | `-90deg`                       | Chevron-down icon rotated to point right |
| ancestor color    | `--color-fg-muted` (`#64748B`)  | Foundation exact match |
| current color     | `--color-fg` (`#0F172A`)        | Foundation exact match |
| underline         | `underline` / `--color-border`  | See Notes |
| font              | `--text-sm` / `--font-medium`   | 14px / 500 / 20px leading |

## Interaction States
| State           | Element   | Color                 | Underline color       |
|-----------------|-----------|-----------------------|-----------------------|
| default         | link      | `--color-fg-muted`    | `--color-border`      |
| hover           | link      | `--color-fg`          | `--color-fg-muted`    |
| focus           | link      | `--color-fg-muted` + ring | `--color-border`  |
| default         | current   | `--color-fg`          | `--color-border`      |
| —               | current   | non-interactive       | —                     |

Focus ring: `0 0 0 2px --color-bg` + `0 0 0 4px --color-focus-ring`, radius `--radius-sm (4px)`.

## Notes
- `token-near-miss`: Figma underline decoration color `#cdcdce` does not match `--color-border: #E2E8ED` (R diff=26, G diff=27, B diff=28). The existing `breadcrumbs.md` maps this to `--color-border` as a deliberate design-token correction (not auto-snap). Using `--color-border` per the existing spec decision.
- Hover state is not explicitly defined in this Figma frame — inferred from `breadcrumbs.md` state matrix.
- Level 2 is the shallowest breadcrumb — use when the current page is a direct child of Home.
