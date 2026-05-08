---
name: component-color-picker
description: >
  Builds the color-picker component and all its variants.
  Read this skill when asked to build, update, or spec the color-picker component.
  Available variants: empty, open, filled, panel-default, panel-fields, panel-swatches, panel-sliders.
---

# Color Picker Component

## How to build this component

1. Read `foundation/foundation-token/color.md` for token resolution
2. Read `foundation/foundation-token/spacing.md` for gap/padding/sizing
3. Read `foundation/foundation-token/radius.md` for border-radius
4. Read `foundation/foundation-token/typography.md` for font specs
5. Read the relevant variant file: `variants/{variant-name}/{variant-name}.md`
6. Cross-ref token names → resolve to values from foundation
7. Build the component using the resolved spec

## Component Structure

```
ColorPicker (trigger row)
  ├── _ColorSwatchPickerItem (36px circle swatch)
  └── Label ("Pick a color" / selected label)

ColorPickerSelect (dropdown panel — absolute positioned below trigger)
  ├── suggestions (preset swatches row — 9 dots × 16px)
  ├── ColorArea (240×240 HSB gradient canvas + thumb)
  ├── ColorSlider (hue strip — 20px pill + thumb)
  │   └── optional: _ColorSliderHeader (label + value)
  ├── RandomizeButton (32×32, shuffle icon)
  ├── ColorField (hex input with color swatch prefix)
  ├── FormatSelect (dropdown: HEX / HSL / RGB / HSB)
  └── channel inputs or sliders (variant-dependent)
```

## Available Variants

### Trigger (ColorPicker)
- `empty` — rainbow swatch + "Pick a color" muted label, no selection
- `open` — same trigger + panel visible below (panel uses `panel-default` by default)
- `filled` — solid color swatch + check + selection ring + label

### Panel (ColorPickerSelect)
- `panel-default` — swatches row (top) + color area + hue slider + randomize + hex input
- `panel-fields` — color area + hue slider (labeled) + format select (HSL) + H/S/L inputs
- `panel-swatches` — color area + hue slider (labeled) + swatches row (bottom)
- `panel-sliders` — format select (RGB) + R/G/B/Alpha sliders (compact, no color area)

## Key Shared Tokens
- Swatch/thumb border-radius: `--radius-full`
- ColorArea border-radius: `--radius-2xl` (16px)
- Input border-radius: `--radius-lg` (8px)
- Randomize btn border-radius: `--radius-2xl` (16px)
- Input bg: `#F1F1F1` (raw — no foundation token, resolve with designer)
- Panel bg: `white` with backdrop-blur (raw)
- Border: `--color-border: #E2E8ED` (randomize btn only)

## Known Token Gaps (resolve with designer)
- Panel width 240px — no foundation token
- Panel border-radius 20px (`rounded-2_5xl`) — no foundation CSS var
- Slider border-radius 32px (`rounded-4xl`) — no foundation CSS var
- `#F1F1F1` input/button bg — no foundation token
- Shadow values (inner, overlay, thumb) — no foundation tokens
- Gap=0 inconsistency in swatches and sliders variants — verify intent

## References
- https://v3.heroui.com/docs/react/components/label
- https://v3.heroui.com/docs/react/components/button
- https://v3.heroui.com/docs/react/components/select
- https://v3.heroui.com/docs/react/components/input
- https://v3.heroui.com/docs/react/components/input-group
- https://v3.heroui.com/docs/react/components/text-field

## Notes
- Always use token names from foundation, never hardcode hex values
- If a variant's `## Notes` contains `token-mismatch` or `token-near-miss`, resolve with designer before building
- ColorArea gradient is computed dynamically from the selected hue — not a static background
- Checkerboard pattern (`bg-image: url(...)`) used as alpha transparency indicator beneath color fills
