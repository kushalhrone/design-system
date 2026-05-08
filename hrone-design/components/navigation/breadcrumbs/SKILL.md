---
name: component-breadcrumbs
description: >
  Builds the Breadcrumbs component and all its variants.
  Read this skill when asked to build, update, or spec the Breadcrumbs component.
  Available variants: level-2, level-3, level-4.
---

# Breadcrumbs Component

## How to build this component

1. Read `foundation/foundation-token/color.md` for token resolution
2. Read `foundation/foundation-token/typography.md` for font specs
3. Read `foundation/foundation-token/spacing.md` for gap and padding
4. Read `breadcrumbs.md` (this folder) for the full shared token spec and dark-mode overrides
5. Read the relevant variant file: `variants/{variant-name}/{variant-name}.md`
6. Cross-ref token names → resolve to values from foundation
7. Build the component using the resolved spec

## Available Variants

| Variant   | Level | Crumb count | Example path |
|-----------|-------|-------------|--------------|
| `level-2` | 2     | 2 items     | `Home > Breadcrumbs` |
| `level-3` | 3     | 3 items     | `Home > Version 3 > Breadcrumbs` |
| `level-4` | 4     | 4 items     | `Home > Version 3 > Components > Breadcrumbs` |

## Sub-components

| Sub-component     | Description |
|---|---|
| `BreadcrumbLink`  | Clickable ancestor item — muted color, underlined, navigable |
| `BreadcrumbCurrent` | Last item — dark color, underlined, non-interactive |
| `Separator`       | 12×12px chevron-right icon between items |

## Props

| Prop    | Type              | Default | Notes |
|---------|-------------------|---------|-------|
| `level` | `"2" \| "3" \| "4"` | `"4"` | Controls depth of the breadcrumb trail |
| `items` | `string[]`        | —       | Array of crumb labels; last item is always "current" |

## Shared Token Reference

All shared design tokens are documented in `breadcrumbs.md` in this folder.
Variant files below reference those shared tokens — do not duplicate them.

### Key shared tokens (quick ref)

| Property              | Token                    | Value     |
|-----------------------|--------------------------|-----------|
| container gap         | `--space-1`              | `4px`     |
| link padding-x        | `--space-0-5`            | `2px`     |
| link item gap         | `--space-0-5`            | `2px`     |
| separator size        | `12px`                   | —         |
| font-size             | `--text-sm`              | `14px`    |
| font-weight           | `--font-medium`          | `500`     |
| line-height           | `--text-sm` leading      | `20px`    |
| ancestor link color   | `--color-fg-muted`       | `#64748B` |
| current item color    | `--color-fg`             | `#0F172A` |
| underline color       | `--color-border`         | `#E2E8ED` |
| separator color       | `--color-fg-muted`       | `#64748B` |

## Notes

- Existing `breadcrumbs.md` was based on Figma file `ykoHMdavBzSeeplUfco3HZ`. These variants are from the updated file `g9XgqUp3tqZLGR0unL1QUg` (node `14155:5487`). Token values are consistent — only Figma file key changed.
- Figma uses raw zinc values (`#64748B`, `#0F172A`, `#cdcdce`) which have been mapped to foundation tokens in `breadcrumbs.md`. See the Figma Fixes Log in that file for the full correction history.
- Always use `--color-fg-muted` / `--color-fg` — never hardcode zinc hex values.
- Dark mode overrides are defined in `breadcrumbs.md` — apply via theme context, not separate files.
- Figma doc: https://v3.heroui.com/docs/components/breadcrumbs
