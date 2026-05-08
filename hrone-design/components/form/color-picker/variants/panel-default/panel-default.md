---
component: color-picker
variant: panel-default
figma-node-id: 18581:89764
figma-content-hash: 4aa7713d-326e
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: color-picker
- variant: panel-default
- status: ready

## Props
| Prop    | Type                                    | Default   |
|---------|-----------------------------------------|-----------|
| variant | default \| fields \| swatches \| sliders | default  |

## Description
Default panel mode: color area + hue slider (no label/value) + randomize button + hex input field. No format selector, no preset swatches row.

## Design Tokens — Panel Shell (shared across all panel variants)

| Property         | Token Name    | Value                                                                  |
|------------------|---------------|------------------------------------------------------------------------|
| width            | —             | 240px (raw)                                                            |
| border-radius    | —             | 20px (raw — see Notes)                                                 |
| bg               | —             | `white` with backdrop-blur (raw)                                       |
| padding-top      | `--space-4`   | 16px                                                                   |
| padding-bottom   | `--space-3`   | 12px                                                                   |
| padding-x        | `--space-2`   | 8px                                                                    |
| gap (sections)   | `--space-2`   | 8px                                                                    |
| drop shadow      | —             | `0 2px 4px rgba(0,0,0,0.06), 0 -6px 6px rgba(0,0,0,0.03), 0 14px 14px rgba(0,0,0,0.08)` |
| inner shadow     | —             | `inset 0 0 1px rgba(0,0,0,0)` (transparent, no visible effect)        |

## Design Tokens — Preset Swatches Row

| Property         | Token Name    | Value                   |
|------------------|---------------|-------------------------|
| swatch size      | `--space-4`   | 16px × 16px             |
| swatch radius    | `--radius-full` | 9999px                |
| gap              | `--space-2`   | 8px                     |
| inner shadow     | —             | `inset 0 0 1px rgba(0,0,0,0.3)` |
| horizontal pad   | `--space-2`   | 8px each side           |

## Design Tokens — ColorArea

| Property         | Token Name    | Value                   |
|------------------|---------------|-------------------------|
| size             | —             | 240px × 240px (raw)     |
| border-radius    | `--radius-2xl`| 16px                    |
| bg               | —             | HSB gradient (dynamic)  |
| inner shadow     | —             | `inset 0 0 1px rgba(0,0,0,0.3)` |
| thumb size       | `--space-4`   | 16px × 16px             |
| thumb border     | —             | 3px white solid         |
| thumb radius     | `--radius-full` | 9999px                |

## Design Tokens — Bottom Container

| Property         | Token Name    | Value                   |
|------------------|---------------|-------------------------|
| gap (slider+btn) | `--space-2`   | 8px                     |
| container pad-x  | `--space-1`   | 4px                     |
| gap (sections)   | `--space-2`   | 8px                     |

## Design Tokens — Hue Slider (in default, no header label)

| Property         | Token Name    | Value                   |
|------------------|---------------|-------------------------|
| height           | —             | 20px (raw)              |
| border-radius    | —             | 32px (raw)              |
| gradient         | —             | full hue rainbow        |
| thumb size       | —             | 16px (within 20px bar)  |
| thumb border     | —             | 3px white, backdrop-blur|
| thumb radius     | `--radius-full` | 9999px                |
| thumb shadow     | —             | `0 2px 8px rgba(0,0,0,0.06), 0 -6px 12px rgba(0,0,0,0.03), 0 14px 28px rgba(0,0,0,0.08)` |

## Design Tokens — Randomize Button

| Property         | Token Name    | Value                   |
|------------------|---------------|-------------------------|
| size             | —             | 32px × 32px             |
| border-radius    | `--radius-2xl`| 16px                    |
| background       | —             | `#F1F1F1` (raw)         |
| border           | `--color-border` | `#E2E8ED` 1px solid  |
| icon             | shuffle       | 16px                    |

## Design Tokens — Hex Input (ColorField)

| Property         | Token Name      | Value                   |
|------------------|-----------------|-------------------------|
| height           | —               | 36px                    |
| border-radius    | `--radius-lg`   | 8px                     |
| background       | —               | `#F1F1F1` (raw)         |
| border           | —               | transparent 1px         |
| padding-right    | `--space-3`     | 12px                    |
| padding-y        | `--space-2`     | 8px                     |
| prefix gap       | `--space-0.5`   | 2px                     |
| prefix swatch    | `--space-4`     | 16px circle             |
| prefix pad-x     | `--space-3`     | 12px                    |
| font-size        | `--text-sm`     | 14px                    |
| font-weight      | `--font-regular`| 400                     |
| text color       | —               | `#18181B` (raw)         |

## Layout (default variant)
```
panel-default
├── suggestions (preset swatches, 9 dots)
├── ColorArea (240×240)
└── container (pad-x: 4px, gap: 8px)
    ├── row (gap: 8px)
    │   ├── HueSlider (flex-1, height: 20px)
    │   └── RandomizeButton (32×32)
    └── ColorField (hex input, full width)
```

## Notes
- token-mismatch: panel width 240px, border-radius 20px, slider radius 32px — all raw values, same as open variant
- token-mismatch: `#F1F1F1` bg — no foundation token
- token-mismatch: all shadow values — no foundation tokens
- Hue slider in default mode has NO label/value header (unlike fields/swatches modes)
- Preset swatches: rose `#F43F5E`, fuchsia `#D946EF`, violet `#8B5CF6`, emerald `#10B981`, cyan `#06B6D4`, emerald `#10B981`, lime `#84CC16`, amber `#F59E0B`, orange `#F97316`
- ColorArea HSB gradient: `linear-gradient(to bottom, black 0%, transparent 100%), linear-gradient(to right, white 0%, transparent 100%), [selected-hue-color]`
- The dots texture layer on ColorArea uses a mask-image (SVG dot grid) for subtle texture — implementation detail
