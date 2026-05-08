---
name: component-progress-circle
description: >
  Builds the progress-circle component and all its variants.
  Read this skill when asked to build, update, or spec the progress-circle component.
  Available variants: sm, md, lg.
---

# ProgressCircle Component

## How to build this component

1. Read `../../../foundation/foundation-token/color.md` for color resolution
2. Read `../../../foundation/foundation-token/radius.md` for border-radius
3. Read `../../../foundation/foundation-token/typography.md` for font specs
4. Read the relevant variant file: `variants/{variant-name}/{variant-name}.md`
5. Cross-ref token names -> resolve to values from foundation
6. Build the component using the resolved spec

## Component Structure

```text
ProgressCircle
├── _ProgressCircleColors
│   ├── circle ring
│   └── progress arc
└── Label row, optional
```

## Available Variants

- `sm` - compact circle, 20px diameter
- `md` - default circle, 28px diameter
- `lg` - emphasized circle, 36px diameter

## Shared Tokens

### Layout

```css
--progress-circle-width: 188px;
--progress-circle-gap: var(--dimensions/spacing/3, 12px);
--progress-circle-label-gap: var(--dimensions/spacing/1, 4px);
--progress-circle-label-padding-right: var(--dimensions/spacing/2, 8px);
```

### Circle Sizes

```css
--progress-circle-size-sm: 20px;
--progress-circle-size-md: 28px;
--progress-circle-size-lg: 36px;
```

### Color Tokens

```css
--progress-circle-track-bg: #F1F1F1; /* raw Figma fill, no exact foundation token */
--progress-circle-fill-accent: var(--color-secondary, #02563D);
--progress-circle-fill-default: #18181B; /* raw Figma fill, close to fg */
--progress-circle-fill-success: var(--color-success, #16A34A);
--progress-circle-fill-warning: var(--color-warning, #D97706);
--progress-circle-fill-danger: var(--color-error, #DC2626);
--progress-circle-label: var(--color-fg, #0F172A);
```

### Typography

```css
--progress-circle-label-size: var(--dimensions/font/text-sm, 14px);
--progress-circle-label-weight: 500;
--progress-circle-label-leading: var(--dimensions/leading/text-sm, 20px);
```

## Internal Primitive

### `_ProgressCircleColors`

- `color=accent` -> `#02563D`
- `color=default` -> `#18181B`
- `color=success` -> `#16A34A`
- `color=warning` -> `#D97706`
- `color=danger` -> `#DC2626`

### Figma Nodes

- Main progress circle component set: `21326:80435`
- Color primitive set: `21326:80393`
- Size children: `21326:80444`, `21326:80434`, `21326:80460`
- Color children: `21326:80392`, `21326:80394`, `21326:80397`, `21326:80400`, `21326:80403`

## Notes

- Label text is fixed as `25% Complete` in the Figma set.
- The circle and progress arc are separate stacked overlays inside the primitive.
- `accent` maps cleanly to the design system secondary brand green.
- `default` fill is a raw Figma value (`#18181B`) and does not exactly match the foundation foreground token (`#0F172A`).
- The track background is also raw Figma gray (`#F1F1F1`); keep it as a logged exception rather than snapping to the neutral ramp.
- Keep the 188px width fixed so the circle and label align exactly with Figma.
