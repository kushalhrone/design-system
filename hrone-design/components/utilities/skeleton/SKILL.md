---
name: component-skeleton
description: >
  Builds the skeleton component and all its variants.
  Read this skill when asked to build, update, or spec skeleton loading placeholders.
  Available variants: list-items, user-profile, card, text-content.
---

# Skeleton Component

## How to build this component

1. Read `foundation/foundation-token/color.md` for token resolution
2. Read `foundation/foundation-token/radius.md` for radius tokens
3. Read `foundation/foundation-token/spacing.md` for gap/padding tokens
4. Read the relevant variant file: `variants/{variant-name}/{variant-name}.md`
5. Cross-ref token names → resolve to values from foundation
6. Build with CSS shimmer `@keyframes` animation — do NOT use PNG mask assets from Figma (ephemeral)

## Available Variants

| Variant          | File                                                          | Figma Node    | Description                             |
|------------------|---------------------------------------------------------------|---------------|-----------------------------------------|
| **list-items**   | [variants/list-items/list-items.md](./variants/list-items/list-items.md)       | `6148:333`    | 3 rows: icon + 2 text bars              |
| **user-profile** | [variants/user-profile/user-profile.md](./variants/user-profile/user-profile.md) | `6146:113`    | Avatar + 2 text bars                    |
| **card**         | [variants/card/card.md](./variants/card/card.md)             | `6141:14168`  | Image block + 3 staggered text bars     |
| **text-content** | [variants/text-content/text-content.md](./variants/text-content/text-content.md) | `6144:91`     | 5 staggered text bars (paragraph shape) |

## Shared Props

| Prop   | Type               | Default   | Notes                                                      |
|--------|--------------------|-----------|------------------------------------------------------------|
| `type` | `"start" \| "end"` | `"start"` | Shimmer sweep phase — used for looping animation sequencing |

## Shared Shimmer Mechanism

All variants use the same CSS shimmer pattern:

```css
@keyframes shimmer {
  0%   { transform: translateX(-100%); }
  100% { transform: translateX(400%); }
}
.skeleton-block::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    transparent 0%,
    var(--surface-secondary) 50%,   /* #efeff0 — no foundation token */
    transparent 100%
  );
  animation: shimmer 1.5s ease-in-out infinite;
}
```

The `type` prop in Figma represents a snapshot of the sweep at two keyframe positions (`start` = entering, `end` = exiting). In CSS these collapse into a single continuous `@keyframes` animation.

## Shared Token Gaps

| Token | Figma value | Foundation match | Resolution |
|---|---|---|---|
| `--surface/surface-tertiary` | `#eaeaeb` | None (nearest `--neutral-200: #E2E8ED`, delta ~5) | Raw `#eaeaeb`. Confirm. |
| `--surface/surface-secondary` | `#efeff0` | None | Raw `#efeff0`. Confirm. |
| `--surface/surface` (card only) | `white (#ffffff)` | Near-miss `--color-surface: #FFFFFF` (delta 3) | Raw `#ffffff`. Confirm. |
| bar `radius: 2px` | `2px` | None (smallest `--radius-sm: 4px`) | Raw `2px`. |
| `gap-[6px]` (card text) | `6px` | None (between `--space-1: 4px` and `--space-2: 8px`) | Raw `6px`. |
| `--radius-sm fallback: 8px` | Figma uses `--radius-sm` label but fallback `8px` | Foundation `--radius-sm: 4px` ≠ `8px` | Use `8px` = `--radius-lg`. Flag to designer — Figma token name/value mismatch. |

## Rules

- Always use `overflow: hidden` on skeleton containers (shimmer effect overflows bounds).
- Replace Figma PNG mask assets with CSS `@keyframes` in production.
- Never hardcode hex values — use CSS custom properties mapped to foundation where matched.
- Ref: https://v3.heroui.com/docs/react/components/skeleton
