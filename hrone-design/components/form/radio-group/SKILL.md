---
name: component-radio-group
description: >
  Builds the radio-group component and its state matrix.
  Read this skill when asked to build, update, or spec the radio-group component.
  Available variants: state-matrix.
---

# RadioGroup Component

## How to build this component

1. Read `../../../foundation/foundation-token/color.md` for color resolution
2. Read `../../../foundation/foundation-token/effects.md` for field shadow and focus ring behavior
3. Read `../../../foundation/foundation-token/radius.md` for border-radius
4. Read `../../../foundation/foundation-token/typography.md` for font specs
5. Read `variants/state-matrix/state-matrix.md`
6. Cross-ref token names -> resolve to values from foundation
7. Build the component using the resolved spec

## Component Structure

```text
RadioGroup
├── Group label, optional
├── Description or error message
└── Radio items
```

## Available Variants

| Variant | Description |
|---|---|
| default | Label + description visible; radios in default state |
| error | Description replaced by error message; radios in invalid state |

## Shared Tokens

### Layout

```css
--radio-group-width-vertical-default: 280px;
--radio-group-width-vertical-error: 266px;
--radio-group-width-horizontal: 459px;
--radio-group-label-gap: var(--dimensions/spacing/4, 16px);
--radio-group-item-gap-vertical: var(--dimensions/spacing/3, 12px);
--radio-group-item-gap-horizontal: var(--dimensions/spacing/4, 16px);
--radio-group-label-gap-inner: var(--dimensions/spacing/1, 4px);
--radio-group-label-padding-right: var(--dimensions/spacing/2, 8px);
```

### Color Tokens

```css
--radio-group-label: var(--foreground/foreground, #18181B);
--radio-group-description: var(--foreground/muted, #71717A);
--radio-group-error: var(--danger/danger, #DC2626);
```

### Typography

```css
--radio-group-label-size: var(--dimensions/font/text-sm, 14px);
--radio-group-label-weight: 500;
--radio-group-label-leading: var(--dimensions/leading/text-sm, 20px);
--radio-group-description-size: var(--dimensions/font/text-xs, 12px);
--radio-group-description-weight: 400;
--radio-group-description-leading: var(--dimensions/leading/text-xs, 16px);
```

## Dependencies

- `Radio` component: see `../radio/SKILL.md`
- `Label` component: shared form token pattern
- `DescriptionErrorMessage` primitive: shared helper/error text pattern

## Figma Nodes

- Main RadioGroup frame: `2450:5614`
- Default vertical: `2450:5603`
- Error vertical: `2450:5731`
- Default horizontal: `2450:5615`
- Error horizontal: `2450:5807`
- Label node: `13605:42525`
- Description / error node: `13605:27837`, `13605:54453`

## Notes

- The RadioGroup is a matrix frame with two axes: `state` and `orientation`.
- Default state shows label + description + radio items.
- Error state replaces the group description with an error message and pushes child radios into the invalid state.
- Vertical orientation is the default and is better for longer labels.
- Horizontal orientation uses three radio items laid out in a row with wider spacing.
- `Radio` remains the canonical child component; do not inline a separate control primitive in the group scaffold.
- Figma’s default widths differ slightly between the vertical default and vertical error frames; preserve those widths in the matrix spec.
