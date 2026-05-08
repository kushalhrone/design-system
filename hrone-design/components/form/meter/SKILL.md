---
name: component-meter
description: >
  Builds the meter component and all its variants.
  Read this skill when asked to build, update, or spec the meter component.
  Available variants: sm, md, lg.
---

# Meter Component

## How to build this component

1. Read `foundation/foundation-token/color.md` for color resolution
2. Read `foundation/foundation-token/radius.md` for border-radius
3. Read `foundation/foundation-token/typography.md` for font specs
4. Read the relevant variant file: `variants/{variant-name}/{variant-name}.md`
5. Cross-ref token names -> resolve to values from foundation
6. Build the component using the resolved spec

## Component Structure

```text
Meter
├── Label row, optional
│   ├── label text ("Storage")
│   └── value text ("60%")
└── _MeterTrack
    └── pill track with color axis: accent | default | success | warning | danger
```

## Available Variants

- `sm` - compact meter, 4px track height
- `md` - default meter, 8px track height
- `lg` - emphasized meter, 12px track height

## Shared Tokens

### Layout

```css
--meter-width: 211px;
--meter-label-gap: var(--dimensions/spacing/1, 4px);
--meter-content-gap: var(--dimensions/spacing/1, 4px);
--meter-track-width: 211px;
--meter-track-radius: var(--dimensions/radius/rounded-xl, 12px);
```

### Track Sizes

```css
--meter-track-height-sm: 4px;
--meter-track-height-md: 8px;
--meter-track-height-lg: 12px;
```

### Color Tokens

```css
--meter-surface: var(--field/background, #FFFFFF);
--meter-track-bg: #F1F1F1; /* raw Figma fill, no exact foundation token */
--meter-track-accent: var(--color-secondary, #02563D);
--meter-track-default: #18181B; /* raw Figma fill, close to color-fg */
--meter-track-success: var(--color-success, #16A34A);
--meter-track-warning: var(--color-warning, #D97706);
--meter-track-danger: var(--color-error, #DC2626);
--meter-label-color: var(--color-fg, #0F172A);
--meter-value-color: var(--color-fg, #0F172A);
--meter-muted: var(--color-fg-muted, #64748B);
```

### Typography

```css
--meter-label-size: var(--dimensions/font/text-sm, 14px);
--meter-label-weight: 500;
--meter-label-leading: var(--dimensions/leading/text-sm, 20px);
--meter-value-size: var(--dimensions/font/text-sm, 14px);
--meter-value-weight: 500;
--meter-value-leading: var(--dimensions/leading/text-sm, 20px);
```

## Internal Primitive

### `_MeterTrack`

- `color=accent` -> `#02563D`
- `color=default` -> `#18181B`
- `color=success` -> `#16A34A`
- `color=warning` -> `#D97706`
- `color=danger` -> `#DC2626`

### Figma Nodes

- Main meter component set: `21302:76781`
- Track primitive set: `21302:76768`
- Track color children: `21302:76767`, `21302:76769`, `21302:76771`, `21302:76773`, `21302:76775`

## Notes

- `accent` on `_MeterTrack` maps cleanly to the design system secondary brand green.
- `default` track fill is a raw Figma value (`#18181B`) and does not exactly match the foundation foreground token (`#0F172A`).
- The track background is also raw Figma gray (`#F1F1F1`); use it as a logged exception rather than snapping to the neutral ramp.
- Label and value both use the same 14px medium Noto Sans treatment.
- Keep the 211px width fixed so the track and text align exactly with Figma.
