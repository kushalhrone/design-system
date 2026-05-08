---
name: component-number-field
description: >
  Builds the number-field component and all its variants.
  Read this skill when asked to build, update, or spec the number-field component.
  Available variants: default, hover, focus, filled, error, disabled.
---

# NumberField Component

## How to build this component

1. Read `foundation/foundation-token/color.md` for color resolution
2. Read `foundation/foundation-token/radius.md` for border-radius
3. Read `foundation/foundation-token/typography.md` for font specs
4. Read the relevant variant file: `variants/{variant-name}/{variant-name}.md`
5. Cross-ref token names -> resolve to values from foundation
6. Build the component using the resolved spec

## Component Structure

```text
NumberField
├── Label row ("Amount")
├── TextField wrapper
│   ├── Prefix button: minus icon
│   ├── Divider
│   ├── Value area
│   ├── Divider
│   └── Suffix button: plus icon
└── Description or error message
```

## Available Variants

- `default` - neutral number field with placeholder value
- `hover` - same structure with hover background treatment
- `focus` - shield focus ring and active field surface
- `filled` - populated value with neutral text styling
- `error` - danger border and error message
- `disabled` - reduced opacity and no interaction

## Shared Tokens

### Layout

```css
--number-field-width: 280px;
--number-field-label-gap: var(--dimensions/spacing/1, 4px);
--number-field-field-height: 36px;
--number-field-field-gap: var(--dimensions/spacing/3, 12px);
--number-field-field-radius: var(--dimensions/radius/rounded-lg, 8px);
--number-field-side-padding: var(--dimensions/spacing/3, 12px);
--number-field-divider-width: 1px;
--number-field-icon-size: 16px;
```

### Color Tokens

```css
--number-field-surface: #FFFFFF; /* raw Figma fill, no exact foundation token */
--number-field-surface-hover: rgba(249,249,249,0.92);
--number-field-surface-focus: #FFFFFF;
--number-field-label: var(--foreground/foreground, #18181B);
--number-field-value: var(--field/foreground, #18181B);
--number-field-placeholder: var(--foreground/muted, #71717A);
--number-field-border: rgba(222,222,224,0);
--number-field-border-hover: rgba(193,193,193,0);
--number-field-danger: var(--danger/danger, #DC2626);
--number-field-focus-ring: var(--focus-ring, #02563D);
--number-field-shadow: var(--field/shadow, rgba(0,0,0,0.04));
```

### Typography

```css
--number-field-label-size: var(--dimensions/font/text-sm, 14px);
--number-field-label-weight: 500;
--number-field-label-leading: var(--dimensions/leading/text-sm, 20px);
--number-field-value-size: var(--dimensions/font/text-sm, 14px);
--number-field-value-weight: 400;
--number-field-value-leading: var(--dimensions/leading/text-sm, 20px);
--number-field-description-size: var(--dimensions/font/text-xs, 12px);
--number-field-description-weight: 400;
--number-field-description-leading: var(--dimensions/leading/text-xs, 16px);
```

### Effects

```css
--number-field-shadow:
  0px 2px 4px 0px rgba(0, 0, 0, 0.04),
  0px 1px 2px 0px rgba(0, 0, 0, 0.06),
  0px 0px 1px 0px rgba(0, 0, 0, 0.06);

--number-field-focus-ring: 0px 0px 0px 2px var(--number-field-focus-ring);
```

## Internal Primitive

### `_NumberFieldControl`

- Prefix icon: `minus`
- Suffix icon: `plus`
- Divider: vertical line image/asset between control sections
- Value text: numeric string, centered vertically in the field row

### Figma Nodes

- Main NumberField component set: `14104:12896`
- State children: `13741:10521`, `14104:12897`, `14104:12995`, `14104:13093`, `14104:13191`, `14104:13289`
- Label node: `13605:42525`
- Description/error node: `13605:27838`
- Minus icon asset: `2217:1129`
- Plus icon asset: `2217:1124`

## Notes

- The field uses a 280px content width inside the 312px frame.
- Figma uses raw white for the field surface instead of the neutral-surface token.
- The placeholder/value text is regular weight, not medium; only the label is medium.
- The default and hover states differ mainly by the field background treatment.
- The focus state uses the shield ring, not the double-ring close-button style.
- The error state swaps the helper copy for a danger message and changes the label/value accents.
