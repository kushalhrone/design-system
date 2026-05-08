---
component: color-picker
variant: panel-swatches
figma-node-id: 18581:89764
figma-content-hash: 4aa7713d-3270
foundation-ref: ../../../../foundation/foundation-token
---

## Also Load
> Color area, hue slider, panel container tokens not repeated here.
> Also load: `components/form/color-picker/variants/panel-default/panel-default.md`

## Meta
- component: color-picker
- variant: panel-swatches
- status: ready

## Props
| Prop    | Type                                    | Default   |
|---------|-----------------------------------------|-----------|
| variant | default \| fields \| swatches \| sliders | swatches |

## Description
Swatches panel mode: color area + hue slider (with label "Hue" / value "33°") + preset color swatches row (9 dots). No format selector, no channel inputs, no hex input.

## Difference vs panel-default / panel-fields

| Section         | default              | fields               | swatches                     |
|-----------------|----------------------|----------------------|------------------------------|
| padding-top     | 16px                 | 8px                  | 8px                          |
| preset swatches | top row              | absent               | **bottom** (after slider)    |
| hue slider      | no header            | header               | **header** (Hue / 33°)       |
| format select   | absent               | present              | absent                       |
| channel fields  | absent               | present              | absent                       |
| hex input       | present              | absent               | absent                       |

## Layout (swatches variant)
```
panel-swatches
├── ColorArea (240×240)
└── container (pad-x: 4px, gap: 0px — swatches mode uses gap=0)
    ├── HueSlider (with header: "Hue" / "33°")
    └── ColorSwatchPicker (9 preset dots, pad-x: 4px)
```

## Design Tokens — Swatches Row (bottom, in swatches mode)

| Property         | Token Name    | Value                   |
|------------------|---------------|-------------------------|
| swatch size      | `--space-4`   | 16px × 16px             |
| swatch radius    | `--radius-full` | 9999px                |
| gap              | `--space-2`   | 8px                     |
| inner shadow     | —             | `inset 0 0 1px rgba(0,0,0,0.3)` |
| row pad-x        | `--space-1`   | 4px                     |

## All Other Tokens
Shared with `panel-default` and `panel-fields`. See `panel-default/panel-default.md` for:
- Panel shell tokens
- ColorArea tokens
- Hue slider tokens (with header in swatches mode)

## Preset Swatch Colors
| # | Name      | Hex       |
|---|-----------|-----------|
| 1 | rose      | `#F43F5E` |
| 2 | fuchsia   | `#D946EF` |
| 3 | violet    | `#8B5CF6` |
| 4 | emerald   | `#10B981` |
| 5 | cyan      | `#06B6D4` |
| 6 | emerald   | `#10B981` |
| 7 | lime      | `#84CC16` |
| 8 | amber     | `#F59E0B` |
| 9 | orange    | `#F97316` |

## Notes
- Swatches variant gap=0 in `container` section (vs gap=8px in other modes) — Figma shows `gap-[var(--dimensions/spacing/2,0px)]` which resolves to 0. This appears intentional — swatches sit flush against slider.
- token-mismatch: gap resolving to 0 via `--space-2` is a Figma token resolution inconsistency. `--space-2 = 8px` in foundation. Gap is effectively 0 in this variant — confirm with designer.
- Preset swatches in this variant appear at the bottom (below hue slider), whereas in `default` they appear at the top. Position flip is variant-level behavior.
