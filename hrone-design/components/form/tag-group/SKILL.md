---
name: component-tag-group
description: >
  Builds the tag-group component and all its variants.
  Read this skill when asked to build, update, or spec the tag-group component.
  Available variants: default, surface.
---

# TagGroup Component

## How to build this component

1. Read `foundation/foundation-token/color.md` for token resolution
2. Read `foundation/foundation-token/spacing.md` for spacing tokens
3. Read `foundation/foundation-token/radius.md` for border-radius tokens
4. Read `foundation/foundation-token/typography.md` for font specs
5. Read the relevant variant file: `variants/{variant-name}/{variant-name}.md`
6. Cross-ref token names → resolve to values from foundation

## Available Variants

- `variants/default/default.md` — grey bg (`#f1f1f1`), all 5 states × 3 sizes. Also documents TagList + TagGroup wrapper.
- `variants/surface/surface.md` — white bg (`#FFFFFF`), for use on white/light surfaces. Differences only.

## Component Hierarchy

```
TagGroup                  ← composite (Label + TagList + helpers)
└── TagList               ← flex-wrap container of Tag items
    └── Tag               ← individual tag pill (variant × state × size)
```

## Sub-Components

| Name                     | Description                                              |
|--------------------------|----------------------------------------------------------|
| `Tag`                    | Individual pill — prefix icon + label + suffix icon      |
| `TagList`                | Flex-wrap container, optional overflow limit text        |
| `Label`                  | Field label with optional required `*` and tooltip icon  |
| `DescriptionErrorMessage`| Below-field helper text or error message                 |

## Size Reference (Tag)

| Size | Height | Padding-X | Padding-Y | Icon  | Font        |
|------|--------|-----------|-----------|-------|-------------|
| sm   | 20px   | 4px       | 2px       | 12px  | `--text-xs` |
| md   | 24px   | 6px       | 4px       | 12px  | `--text-xs` |
| lg   | 32px   | 10px      | 6px       | 14px  | `--text-sm` |

## Key Constraints

- `selected` state bg: `--color-secondary-soft` = `rgba(2,86,61,0.15)` ✓ exact token match — both variants
- `selected` text: `--secondary-500: #02563D` ✓ exact token match — both variants
- Focus ring: 2-layer shadow (2px offset `--color-bg`, 4px ring `#02563d`) — pre-established green pattern
- `disabled`: opacity 0.5 on Tag container, not individual elements
- TagGroup/TagList widths (296px/240px) are canvas — use `width: 100%`
- TagList gap-y = 6px (`--space-1.5`) — applies to both x and y in wrapped rows

## Open Issues (resolve with designer before building)

1. `var(--default/default, #f1f1f1)` — no foundation token. Recurring issue. Needs assignment.
2. `var(--default/default-hover, white)` — no foundation token for hover bg. Needs token.
3. `var(--surface/surface, #FFFFFF)` — near-miss vs `--color-surface` (#FFFFFF). Confirm canonical white surface token.
4. Focus ring `#02563d` (green) vs `--color-focus-ring: rgba(2,86,61,0.22)` (orange). Confirm system-wide canonical value.

## Notes
- Always use token names from foundation, never hardcode hex values
- Resolve all `token-mismatch` and `token-near-miss` entries before building
- `--color-secondary-soft` and `--secondary-500` are exact foundation matches for selected state ✓
- HeroUI refs: https://v3.heroui.com/docs/react/components/tag-group, https://v3.heroui.com/docs/react/components/label
