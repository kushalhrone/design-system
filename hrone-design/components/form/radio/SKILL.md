---
name: component-radio
description: >
  Builds the radio component and its state matrix.
  Read this skill when asked to build, update, or spec the radio component.
  Available variants: state-matrix.
---

# Radio Component

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
Radio
├── _RadioControl
│   ├── outer circle / border / fill
│   └── inner selected dot
├── Label
├── Description, optional
└── Error message, optional
```

## Available Variants

| Variant | Description |
|---|---|
| primary | White background with field shadow on the control |
| secondary | Gray (#F1F1F1) fill, flat — no field shadow |

## Shared Tokens

### Layout

```css
--radio-row-width: 200px;
--radio-control-size: 16px;
--radio-gap: var(--dimensions/spacing/3, 12px);
--radio-label-top-offset: 2px;
--radio-label-padding-right: var(--dimensions/spacing/2, 8px);
```

### Color Tokens

```css
--radio-label: var(--foreground/foreground, #18181B);
--radio-description: var(--foreground/muted, #71717A);
--radio-error: var(--danger/danger, #DC2626);
--radio-primary-bg: var(--field/background, #FFFFFF);
--radio-primary-bg-hover: var(--field/background-hover, rgba(249,249,249,0.92));
--radio-primary-border: var(--field/border, rgba(222,222,224,0));
--radio-primary-selected: var(--accent/accent, #02563D);
--radio-primary-selected-hover: var(--accent/accent-hover, #024A34);
--radio-primary-selected-fg: var(--accent/accent-foreground, #FFFFFF);
--radio-secondary-bg: var(--default/default, #F1F1F1);
--radio-secondary-bg-hover: var(--default/default-hover, #FFFFFF);
--radio-secondary-border: var(--field/border, rgba(222,222,224,0));
--radio-focus-background: var(--background/background, #F8FAFB);
--radio-focus-ring: var(--focus-ring, #02563D);
--radio-disabled-opacity: var(--disabled-opacity, 0.5);
```

### Typography

```css
--radio-label-size: var(--dimensions/font/text-sm, 14px);
--radio-label-weight: 500;
--radio-label-leading: var(--dimensions/leading/text-sm, 20px);
--radio-description-size: var(--dimensions/font/text-xs, 12px);
--radio-description-weight: 400;
--radio-description-leading: var(--dimensions/leading/text-xs, 16px);
```

### Effects

```css
--radio-shadow-field:
  0px 2px 4px 0px rgba(0, 0, 0, 0.04),
  0px 1px 2px 0px rgba(0, 0, 0, 0.06),
  0px 0px 1px 0px rgba(0, 0, 0, 0.06);

--radio-focus-ring:
  0px 0px 0px 2px var(--background/background, #F8FAFB),
  0px 0px 0px 4px var(--focus-ring, #02563D);
```

## Internal Primitive

### `_RadioControl`

- `variant=primary` uses the field shadow, white fill, and selected accent green
- `variant=secondary` uses the neutral gray fill and the same selected accent green
- `state=default` and `state=hover` use the hover surface rules
- `state=focus` uses the double-ring focus treatment
- `state=error` uses danger red for border/fill
- `state=disabled` reduces opacity and disables interaction
- `isSelected=true` shows the inner dot or selected glyph

### Figma Nodes

- Main radio component set: `2450:5484`
- Control primitive set: `2450:5447`
- Main row states: `2450:5483`, `2450:5491`, `2450:5505`
- Control matrix states: `2450:5437` through `2450:5446`, `12948:31889` through `12948:31955`

## Notes

- The Radio row keeps description text visible in the invalid state and adds a separate error message below it.
- The control primitive is 16px and never resizes.
- Primary uses the layered field shadow on unselected controls.
- Secondary uses a flat neutral surface on unselected controls.
- Figma’s muted text and foreground values are slightly different from the foundation palette; use the raw values from the design when necessary.
