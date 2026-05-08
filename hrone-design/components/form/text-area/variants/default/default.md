---
component: text-area
variant: default
figma-node-id: "13675:12619"
figma-content-hash: "136751261900df"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta
- component: text-area
- variant: default
- status: ready

## Props

| Prop              | Type                                                            | Default         |
|-------------------|-----------------------------------------------------------------|-----------------|
| `state`           | `"placeholder" \| "hover" \| "focus" \| "filled" \| "error" \| "disabled"` | `"placeholder"` |
| `showLabel`       | `boolean`                                                       | `true`          |
| `showDescription` | `boolean`                                                       | `true`          |
| `value`           | `string`                                                        | `""`            |
| `placeholder`     | `string`                                                        | `"Write here..."` |

## Anatomy

```
TextArea (flex-col, gap=4px, w=280px, h=120px min-w=116px)
├── Label (showLabel=true)
│   └── <p> label text (text-sm medium)
│       └── error state: --color-error color
├── container (flex-col, gap=8px, flex=1)
│   ├── Input (border 1px, rounded-lg, px=12px, py=8px, gap=6px, h=36px min)
│   │   ├── bg layer (absolute, backdrop-blur=0px, inset-0)
│   │   ├── placeholderWrapper (flex, flex=1, overflow-clip)
│   │   │   └── <p> text (text-sm regular)
│   │   ├── inner highlight (absolute inset, white 10% inset shadow, depth=0)
│   │   └── expand_indicator (10×10px, bottom-right, 2 diagonal lines)
│   └── expand_indicator (absolute bottom-right of container)
└── descriptionWrapper (showDescription=true)
    └── DescriptionErrorMessage (text-xs regular, "Characters: 0/80")
        └── error state: error color, "Characters: 82/80"
```

## Design Tokens

### Layout

| Property          | Token Name      | Value   |
|-------------------|-----------------|---------|
| outer gap         | `--space-1`     | `4px`   |
| container gap     | `--space-2`     | `8px`   |
| input gap (inner) | `--space-1.5`   | `6px`   |
| padding-x         | `--space-3`     | `12px`  |
| padding-y         | `--space-2`     | `8px`   |
| input min-height  | `--space-9`     | `36px`  |
| input radius      | `--radius-lg`   | `8px`   |
| width             | —               | `280px` |
| min-width         | —               | `116px` |
| height            | —               | `120px` |

### Typography

| Element             | Token               | Value       |
|---------------------|---------------------|-------------|
| label font-size     | `--text-sm`         | `14px`      |
| label font-weight   | `--font-medium`     | `500`       |
| label line-height   | `--leading-sm`      | `20px`      |
| input font-size     | `--text-sm`         | `14px`      |
| input font-weight   | `--font-regular`    | `400`       |
| input line-height   | `--leading-sm`      | `20px`      |
| description size    | `--text-xs`         | `12px`      |
| description weight  | `--font-regular`    | `400`       |
| description leading | `--leading-xs`      | `16px`      |

## Interaction States

| State       | Label color        | Input bg                        | Input border                        | Shadow                          | Text color            | Opacity |
|-------------|--------------------|---------------------------------|-------------------------------------|---------------------------------|-----------------------|---------|
| placeholder | `#18181B` (raw)   | `white` (raw)                   | `rgba(222,222,224,0)` transparent   | drop-shadow ½ field (raw)       | `#71717A` placeholder | 1       |
| hover       | `#18181B` (raw)   | `rgba(249,249,249,0.92)` (raw)  | `rgba(193,193,193,0)` transparent   | `--shadow-field` ✓              | `#71717A` placeholder | 1       |
| focus       | `#18181B` (raw)   | `white` (raw)                   | `rgba(222,222,224,0)` transparent   | focus ring `0 0 0 2px #02563D` ✓ | `#71717A` placeholder | 1       |
| filled      | `#18181B` (raw)   | `white` (raw)                   | `rgba(222,222,224,0)` transparent   | drop-shadow ½ field (raw)       | `#18181B` filled (raw) | 1      |
| error       | `--color-error` ✓ | `white` (raw)                   | `--color-error: #DC2626` ✓          | drop-shadow ½ field (raw)       | `#18181B` filled (raw) | 1      |
| disabled    | `#18181B` (raw)   | `white` (raw)                   | `rgba(222,222,224,0)` transparent   | drop-shadow ½ field (raw)       | `#71717A` placeholder | **0.5** |

### Shadow detail — hover (exact `--shadow-field` match)

```css
box-shadow:
  0px 2px 4px 0px rgba(0,0,0,0.04),
  0px 1px 2px 0px rgba(0,0,0,0.06),
  0px 0px 1px 0px rgba(0,0,0,0.06);
```

### Shadow detail — default/filled/error/disabled (near-miss, raw)

```css
/* drop-shadow (filter) — halved blur vs --shadow-field */
filter: drop-shadow(0px 2px 2px rgba(0,0,0,0.04))
        drop-shadow(0px 1px 1px rgba(0,0,0,0.06))
        drop-shadow(0px 0px 0.5px rgba(0,0,0,0.06));
```

### Focus ring

```css
box-shadow: 0px 0px 0px 2px var(--color-secondary, #02563d);
/* matches --shadow-focus-ring-shield from effects.md ✓ */
```

### Inner highlight (all states, depth=0 = invisible in light mode)

```css
box-shadow: inset 0px 0px 0px rgba(255,255,255,0.1);
```

## Resize Indicator

Bottom-right corner, `10×10px`, two diagonal lines rotated 45°:
- Line 1: `0.7px × 10.8px`, `#18181B` (raw near-miss)
- Line 2: `0.7px × 7.38px`, `#18181B` (raw near-miss)
- Both lines: `rotate(45deg)`, positioned at `1.51px, 1.11px` and `3.8px, 3.33px`

## Description / Error Message

| State    | Text               | Color           |
|----------|--------------------|-----------------|
| normal   | `"Characters: 0/80"` | `#71717A` (raw near-miss) |
| error    | `"Characters: 82/80"` | `--color-error: #DC2626` ✓ |

## Notes

- token-near-miss: label/filled/placeholder text `#18181B` vs `--color-fg: #0F172A` (Zinc vs Gray). Using raw. Confirm.
- token-near-miss: placeholder text `#71717A` vs `--color-fg-muted: #64748B`. Using raw. Confirm.
- token-near-miss: input bg `white (#ffffff)` vs `--color-surface: #FFFFFF` (delta 3). Using raw. Confirm.
- token-mismatch: hover bg `rgba(249,249,249,0.92)` — no foundation match. Raw. Confirm.
- token-near-miss: default shadow `(0px 2px 2px, 0px 1px 1px, 0px 0px 0.5px)` vs `--shadow-field (0px 2px 4px, 0px 1px 2px, 0px 0px 1px)` — halved blur values. Raw. Confirm.
- `--field/border: rgba(222,222,224,0)` — transparent; visual border effect comes from shadow, not border. Raw.
- `--field/background-hover: rgba(249,249,249,0.92)` — no foundation token. Raw.
- `backdrop-blur: var(--blur, 0px)` — resolves to 0px in light mode = no visible blur.
- `--disabled-opacity: 0.5` — applied to entire wrapper. Raw.
- `--space-1.5: 6px` used for inner input gap = exact foundation match ✓
- `--space-9: 36px` used for input min-height = exact foundation match ✓
- Resize indicator uses CSS SVG/border trick or absolute positioned divs — two `0.7px` wide bars at 45°.
- Width `280px`, height `120px`, min-width `116px` — all raw (no foundation token).
- Ref: https://v3.heroui.com/docs/react/components/text-area
