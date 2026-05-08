---
component: color-picker
variant: panel-sliders
figma-node-id: 18581:89764
figma-content-hash: 4aa7713d-3271
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: color-picker
- variant: panel-sliders
- status: ready

## Props
| Prop    | Type                                     | Default  |
|---------|------------------------------------------|----------|
| variant | default \| fields \| swatches \| sliders | sliders  |

## Description
Sliders panel mode: format selector (showing "RGB") + four labeled channel sliders (Red, Green, Blue, Alpha). No color area, no preset swatches, no hex input. Compact height.

## Difference vs other panel variants

| Section         | default | fields | swatches | sliders                        |
|-----------------|---------|--------|----------|--------------------------------|
| padding-top     | 16px    | 8px    | 8px      | **12px**                       |
| preset swatches | top     | absent | bottom   | absent                         |
| ColorArea       | present | present| present  | **absent**                     |
| hue slider      | present | present| present  | **absent** (replaced by RGBA)  |
| format select   | absent  | present| absent   | **present** (shows "RGB")      |
| channel sliders | absent  | absent | absent   | **4 sliders**: R, G, B, Alpha  |
| hex input       | present | absent | absent   | absent                         |

## Design Tokens — Panel Shell (sliders variant)

| Property         | Token Name  | Value  |
|------------------|-------------|--------|
| padding-top      | `--space-3` | 12px   |
| padding-bottom   | `--space-3` | 12px   |
| padding-x        | `--space-2` | 8px    |
| gap (sections)   | 0px         | — (raw, see Notes) |

All other shell tokens same as `panel-default`.

## Design Tokens — Format Select (top, "RGB")
Same as `panel-fields` FormatSelect tokens. Shows "RGB" as selected value.

## Design Tokens — Channel Slider (×4: Red, Green, Blue, Alpha)

| Property            | Token Name       | Value                   |
|---------------------|------------------|-------------------------|
| container gap       | `--space-3`      | 12px between sliders    |
| header layout       | row, space-between | —                     |
| label font-size     | `--text-xs`      | 12px                    |
| label line-height   | —                | 16px (raw)              |
| label font-weight   | `--font-medium`  | 500                     |
| label color         | —                | `#18181B` (raw)         |
| value font-size     | `--text-xs`      | 12px                    |
| value font-weight   | `--font-regular` | 400                     |
| value color         | —                | `#71717A` (raw)         |
| value text-align    | right            | —                       |
| slider height       | —                | 20px (raw)              |
| slider border-radius| —                | 32px (raw)              |
| thumb size          | —                | 16px (within 20px bar)  |
| thumb border        | —                | 3px white, backdrop-blur|
| thumb radius        | `--radius-full`  | 9999px                  |

## Channel Slider Gradients
| Channel | Gradient (example values)                      |
|---------|------------------------------------------------|
| Red     | `#3B7B40` → `#E48248` (green-to-orange)        |
| Green   | `#110D3A` → `#71F251` (dark-to-bright-green)   |
| Blue    | `#3B7B1E` → `#437CF3` (dark-to-blue)           |
| Alpha   | `rgba(59,123,64,0)` → `#3B7B40` (transparent→color) |

Note: Gradients are dynamic based on current RGB value. The above are example values from Figma (selected color ≈ `#3B7B40`).

## Channel Values (example)
| Channel | Value |
|---------|-------|
| Red     | 255   |
| Green   | 255   |
| Blue    | 255   |
| Alpha   | 100%  |

## Layout (sliders variant)
```
panel-sliders
└── container (pad-x: 4px, gap: 12px)
    ├── FormatSelect (full width, shows "RGB" + chevron)
    ├── ColorSlider (Red, header: "Red" / "255")
    ├── ColorSlider (Green, header: "Green" / "255")
    ├── ColorSlider (Blue, header: "Blue" / "255")
    └── ColorSlider (Alpha, header: "Alpha" / "100%")
```

## Notes
- token-mismatch: sliders variant gap=0 between container sections — Figma: `gap-[var(--dimensions/spacing/2,0px)]` resolves to 0. Same inconsistency as swatches variant — confirm with designer.
- token-mismatch: 32px slider border-radius — no foundation CSS var
- token-mismatch: all shadow values — no foundation tokens
- token-near-miss: `#18181B`, `#71717A` label colors — same as all variants
- Alpha slider has checkerboard underneath (`bg-image: url(checkerboard)`) before the gradient overlay — for accurate transparency preview
- This variant is the most compact (no ColorArea): panel height ≈ `12+16+12+20+12+20+12+20+12+20+12 = ~168px` + format select height
- Format select in sliders mode reads "RGB"; in fields mode reads "HSL" — same component, different value
