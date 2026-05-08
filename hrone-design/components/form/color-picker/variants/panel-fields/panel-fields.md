---
component: color-picker
variant: panel-fields
figma-node-id: 18581:89764
figma-content-hash: 4aa7713d-326f
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: color-picker
- variant: panel-fields
- status: ready

## Props
| Prop    | Type                                    | Default  |
|---------|-----------------------------------------|----------|
| variant | default \| fields \| swatches \| sliders | fields  |

## Description
Fields panel mode: color area + hue slider (with label "Hue" and value "33°") + format selector (dropdown showing "HSL") + three individual channel inputs (H°, S%, L%).

## Difference vs panel-default

| Section        | default                     | fields                                |
|----------------|-----------------------------|---------------------------------------|
| padding-top    | `--space-4` (16px)          | `--space-2` (8px)                     |
| preset swatches| present                     | **absent**                            |
| hue slider     | no header                   | header with label "Hue" + value "33°" |
| format select  | absent                      | **present** (shows "HSL" with chevron)|
| channel fields | absent                      | **present** (H°, S%, L% × 3 inputs)   |
| hex input      | present                     | **absent**                            |

## Design Tokens — Hue Slider Header (added in fields/swatches)

| Property         | Token Name       | Value                  |
|------------------|------------------|------------------------|
| layout           | row, space-between | —                    |
| label font-size  | `--text-xs`      | 12px                   |
| label line-height| —                | 16px (raw)             |
| label font-weight| `--font-medium`  | 500                    |
| label color      | —                | `#18181B` (raw)        |
| value font-size  | `--text-xs`      | 12px                   |
| value line-height| —                | 16px (raw)             |
| value font-weight| `--font-regular` | 400                    |
| value color      | —                | `#71717A` (raw)        |
| value align      | text-right       | —                      |

## Design Tokens — Format Select

| Property         | Token Name      | Value                  |
|------------------|-----------------|------------------------|
| height           | —               | 36px                   |
| border-radius    | `--radius-lg`   | 8px                    |
| background       | —               | `#F1F1F1` (raw)        |
| border           | —               | transparent 1px        |
| padding-left     | `--space-3`     | 12px                   |
| suffix pad-x     | `--space-3`     | 12px                   |
| suffix icon      | chevron-down    | 16px                   |
| value font-size  | `--text-sm`     | 14px                   |
| value font-weight| `--font-regular`| 400                    |
| value color      | —               | `#18181B` (raw)        |
| format options   | HEX, HSL, RGB, HSB | —                  |

## Design Tokens — Channel Input Fields (3-column grid)

| Property         | Token Name      | Value                  |
|------------------|-----------------|------------------------|
| gap between      | `--space-2`     | 8px                    |
| each field flex  | `flex: 1 0 0`   | equal width            |
| height           | —               | 36px                   |
| border-radius    | `--radius-lg`   | 8px                    |
| background       | —               | `#F1F1F1` (raw)        |
| border           | —               | transparent 1px        |
| padding-x        | `--space-3`     | 12px                   |
| padding-y        | `--space-2`     | 8px                    |
| gap (icon+text)  | `--space-1.5`   | 6px                    |
| font-size        | `--text-sm`     | 14px                   |
| font-weight      | `--font-regular`| 400                    |
| text color       | —               | `#18181B` (raw)        |

## Channel Field Values (HSL example)
| Field | Value  |
|-------|--------|
| H     | 33°    |
| S     | 60%    |
| L     | 41%    |

## Layout (fields variant)
```
panel-fields
├── ColorArea (240×240)
└── container (pad-x: 4px, gap: 8px)
    ├── HueSlider (with header: "Hue" / "33°")
    ├── FormatSelect (full width, shows "HSL" + chevron)
    └── row (3 channel inputs: H, S, L)
```

## Notes
- token-mismatch: `--text-xs` line-height `16px` raw — Figma uses 16px but foundation `--text-xs` paired line-height is `1rem` (16px). ✓ Matches. Use `--text-xs`.
- token-mismatch: `#F1F1F1` input background — no foundation token (consistent with panel-default)
- token-near-miss: label colors `#18181B` and `#71717A` — same near-miss as other variants
- Format select uses `Select` component (ref: https://v3.heroui.com/docs/react/components/select)
- Channel inputs use `Input` component (ref: https://v3.heroui.com/docs/react/components/input)
- hue slider header label uses `Body xs medium` type style (12px, 500 weight)
- hue slider header value uses `Body xs` type style (12px, 400 weight)
