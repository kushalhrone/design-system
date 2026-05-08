---
name: component-slider
description: >
  Builds the slider component and all its variants.
  Read this skill when asked to build, update, or spec the slider component.
  Available variants: single, range, disabled.
---

# Slider Component

> Entry point for the slider component family.
> Rule priority: effects > radius > color > typography > spacing.
> Foundation source of truth: `foundation/foundation-token/`.
> Figma node (main Slider): `2306:2324`
> Figma node (SliderStructure): `2306:2306`

---

## How to build this component

1. Read `foundation/foundation-token/color.md` for token resolution
2. Read `foundation/foundation-token/effects.md` for shadow specs
3. Read `foundation/foundation-token/radius.md` for radius tokens
4. Read `foundation/foundation-token/typography.md` for font specs
5. Read the relevant variant file: `variants/{variant-name}/{variant-name}.md`
6. Cross-ref token names → resolve to values from foundation
7. Build the component using the resolved spec

---

## Available Variants

| Variant | File | Figma Node | Description |
|---|---|---|---|
| **single** | [variants/single/single.md](./variants/single/single.md) | `5375:69698` | One thumb, default state, with tooltip + marks |
| **range** | [variants/range/range.md](./variants/range/range.md) | `5375:69703` | Two thumbs (start + end), default state |
| **disabled** | [variants/disabled/disabled.md](./variants/disabled/disabled.md) | `5375:69699` | Range thumbs, opacity 0.5, pointer-events none |

---

## Sub-Components

| Name | Figma Node | Role |
|---|---|---|
| SliderThumb | `2306:2299` | 24×16px pill handle |
| SliderHeader | `2306:2295` | Label (left) + Value (right) row |
| SliderMarks | `21985:72720` | 0/20/50/80/100% labels below track |
| Bg | `18344:37835` | Shared background surface (64px radius) |

---

## Shared Tokens

### Structure

```css
--slider-width: 200px;
--slider-gap: var(--dimensions/spacing/1, 4px);         /* gap: header→track, track→marks */
--slider-track-height: 20px;
--slider-track-radius: var(--dimensions/radius/rounded-2_5xl, 20px);
--slider-thumb-width: 24px;
--slider-thumb-height: 16px;
--slider-thumb-radius: var(--dimensions/radius/rounded-2_5xl, 20px);
--slider-thumb-inset-y: 2px;                            /* top/bottom offset within track */
--slider-step-size: 3px;                                /* step dot diameter */
--slider-step-radius: 3px;
--slider-step-opacity: 0.17;                            /* 17% */
--slider-step-count: 10;
```

### Color Tokens

```css
--slider-track-bg: var(--default/default, #f1f1f1);
--slider-fill: var(--color-secondary, #02563d);          /* --accent/accent exact match */
--slider-thumb-bg: var(--color-surface, #FFFFFF);        /* --accent/accent-foreground exact match */
--slider-step-filled: var(--color-surface, #FFFFFF);     /* dots inside fill zone */
--slider-step-empty: var(--field/placeholder, #71717a);  /* dots outside fill zone */
--slider-label-fg: var(--color-fg, #18181b);
--slider-marks-fg: var(--color-fg, #18181b);
--slider-tooltip-bg: var(--overlay, #ffffff);
--slider-tooltip-fg: var(--foreground/overlay, #18181b);
--slider-disabled-opacity: 0.5;
```

### Effects

```css
--slider-thumb-shadow:
  0px 2px 4px 0px rgba(0, 0, 0, 0.04),
  0px 1px 2px 0px rgba(0, 0, 0, 0.06),
  0px 0px 1px 0px rgba(0, 0, 0, 0.06);
--slider-thumb-inner: inset 0px 0px 1px 0px rgba(255, 255, 255, 0.1);
--slider-tooltip-shadow:
  0px 14px 28px 0px rgba(0, 0, 0, 0.08),
  0px -6px 12px 0px rgba(0, 0, 0, 0.03),
  0px 2px 8px 0px rgba(0, 0, 0, 0.06);
```

### Typography

```css
--slider-label-size: var(--dimensions/font/text-sm, 14px);
--slider-label-weight: 500;
--slider-label-leading: var(--dimensions/leading/text-sm, 20px);
--slider-marks-size: var(--dimensions/font/text-xs, 12px);
--slider-marks-weight: 400;
--slider-marks-leading: var(--dimensions/leading/text-xs, 16px);
--slider-tooltip-size: var(--dimensions/font/text-xs, 12px);
--slider-tooltip-weight: 400;
```

---

## Rules

- Use `Noto Sans` for all text.
- Track is always 20px tall, pill-shaped (radius `2_5xl` = 20px).
- Thumb is 24×16px, same radius, inset 2px top/bottom within track.
- Fill (`--color-secondary`) grows from the left edge (or between thumbs for range).
- Step dots: 10 evenly-spaced 3×3px circles at 17% opacity — filled zone uses `#FFFFFF`, empty zone uses `#71717a`.
- Marks row shows 5 labels (0% hidden, 20%, 50%, 80%, 100% hidden) — first and last are `opacity: 0` spacers for alignment.
- Tooltip appears above the thumb, connected with a 10×10px rotated-45° arrow; radius `xl` (12px).
- Disabled state: `opacity: 0.5` on the whole slider wrapper, no tooltip.
- Do not hardcode hex values — use `--color-*` tokens where matched.
