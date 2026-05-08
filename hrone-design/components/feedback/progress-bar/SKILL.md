---
name: component-progress-bar
description: >
  Builds the progress-bar component and all its variants.
  Read this skill when asked to build, update, or spec the progress-bar component.
  Available variants: sm, md, lg.
---

# ProgressBar Component

## How to build this component

1. Read `../../../foundation/foundation-token/color.md` for color resolution
2. Read `../../../foundation/foundation-token/radius.md` for border-radius
3. Read `../../../foundation/foundation-token/typography.md` for font specs
4. Read the relevant variant file: `variants/{variant-name}/{variant-name}.md`
5. Cross-ref token names -> resolve to values from foundation
6. Build the component using the resolved spec

## Component Structure

```text
ProgressBar
├── Label row
│   ├── label text ("Storage")
│   └── value text ("60%")
└── _ProgressTrack
    └── pill track with color axis: accent | default | success | warning | danger
```

## Available Variants

- `sm` - compact progress bar, 4px track height
- `md` - default progress bar, 8px track height
- `lg` - emphasized progress bar, 12px track height

## Shared Tokens

### Layout

```css
--progress-bar-width: 211px;
--progress-bar-label-gap: var(--dimensions/spacing/1, 4px);
--progress-bar-track-width: 211px;
--progress-bar-track-radius: var(--dimensions/radius/rounded-xl, 12px);
```

### Track Sizes

```css
--progress-bar-track-height-sm: 4px;
--progress-bar-track-height-md: 8px;
--progress-bar-track-height-lg: 12px;
```

### Color Tokens

```css
--progress-bar-track-bg: #F1F1F1; /* raw Figma fill, no exact foundation token */
--progress-bar-track-accent: var(--color-secondary, #02563D);
--progress-bar-track-default: #18181B; /* raw Figma fill, close to fg */
--progress-bar-track-success: var(--color-success, #16A34A);
--progress-bar-track-warning: var(--color-warning, #D97706);
--progress-bar-track-danger: var(--color-error, #DC2626);
--progress-bar-label: var(--color-fg, #0F172A);
--progress-bar-value: var(--color-fg, #0F172A);
--progress-bar-muted: var(--color-fg-muted, #64748B);
```

### Typography

```css
--progress-bar-label-size: var(--dimensions/font/text-sm, 14px);
--progress-bar-label-weight: 500;
--progress-bar-label-leading: var(--dimensions/leading/text-sm, 20px);
--progress-bar-value-size: var(--dimensions/font/text-sm, 14px);
--progress-bar-value-weight: 500;
--progress-bar-value-leading: var(--dimensions/leading/text-sm, 20px);
```

## Internal Primitive

### `_ProgressTrack`

- `color=accent` -> `#02563D`
- `color=default` -> `#18181B`
- `color=success` -> `#16A34A`
- `color=warning` -> `#D97706`
- `color=danger` -> `#DC2626`

### Figma Nodes

- Main progress bar component set: `21302:78106`
- Track primitive set: `21302:78095`
- Track color children: `21302:78096`, `21302:78098`, `21302:78100`, `21302:78102`, `21302:78104`

## Notes

- `accent` on `_ProgressTrack` maps cleanly to the design system secondary brand green.
- `default` track fill is a raw Figma value (`#18181B`) and does not exactly match the foundation foreground token (`#0F172A`).
- The track background is also raw Figma gray (`#F1F1F1`); keep it as a logged exception rather than snapping to the neutral ramp.
- Label and value both use the same 14px medium Noto Sans treatment.
- Keep the 211px width fixed so the bar and text align exactly with Figma.
