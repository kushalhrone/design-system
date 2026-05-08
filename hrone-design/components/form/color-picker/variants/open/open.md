---
component: color-picker
variant: open
figma-node-id: 18581:89574
figma-content-hash: 12a72dcb-c279
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: color-picker
- variant: open
- status: ready

## Props
| Prop         | Type                       | Default       |
|--------------|----------------------------|---------------|
| variant      | empty \| open \| filled    | open          |
| label        | string                     | "Pick a color"|
| panelVariant | default \| fields \| swatches \| sliders | default |

## Design Tokens — Trigger Row (same as empty)
See `empty/empty.md` for trigger row tokens — identical in open state.

## Design Tokens — Panel Positioning

| Property       | Token Name    | Value                      |
|----------------|---------------|----------------------------|
| panel left     | —             | -4px (raw — see Notes)     |
| panel top      | —             | 44px (raw — see Notes)     |
| panel position | absolute      | —                          |

## Design Tokens — Panel Container (`_ColorPickerSelect`)

| Property           | Token Name       | Value                              |
|--------------------|------------------|------------------------------------|
| width              | —                | 240px (raw — see Notes)            |
| border-radius      | —                | 20px (raw — see Notes)             |
| background         | —                | `white` / backdrop-blur (raw — see Notes) |
| padding-top        | `--space-4`      | 16px                               |
| padding-bottom     | `--space-3`      | 12px                               |
| padding-x          | `--space-2`      | 8px                                |
| gap (sections)     | `--space-2`      | 8px                                |
| drop shadow        | —                | `0 2px 4px rgba(0,0,0,0.06), 0 -6px 6px rgba(0,0,0,0.03), 0 14px 14px rgba(0,0,0,0.08)` (raw) |

## Design Tokens — ColorArea (240×240)

| Property           | Token Name       | Value                              |
|--------------------|------------------|------------------------------------|
| size               | —                | 240px × 240px (raw)                |
| border-radius      | `--radius-2xl`   | 16px                               |
| background         | —                | HSB gradient (dynamic on hue)      |
| inner shadow       | —                | `inset 0 0 1px rgba(0,0,0,0.3)` (raw) |
| thumb size         | `--space-4`      | 16px × 16px                        |
| thumb border       | —                | 3px white solid                    |
| thumb border-radius| `--radius-full`  | 9999px                             |
| thumb shadow       | —                | `0 2px 8px rgba(0,0,0,0.06), 0 -6px 12px rgba(0,0,0,0.03), 0 14px 28px rgba(0,0,0,0.08)` (raw) |

## Design Tokens — Hue Slider

| Property           | Token Name       | Value                              |
|--------------------|------------------|------------------------------------|
| height             | —                | 20px (raw)                         |
| border-radius      | —                | 32px (raw — see Notes)             |
| gradient           | —                | full hue rainbow (raw, dynamic)    |
| thumb size         | —                | 16px × 16px (inside 20px track)    |
| thumb border       | —                | 3px white solid, backdrop-blur     |
| thumb border-radius| `--radius-full`  | 9999px                             |

## Design Tokens — Hex Input (ColorField)

| Property           | Token Name       | Value                              |
|--------------------|------------------|------------------------------------|
| height             | —                | 36px (raw)                         |
| border-radius      | `--radius-lg`    | 8px                                |
| background         | —                | `#F1F1F1` (raw — see Notes)        |
| border             | —                | transparent 1px (raw)              |
| padding-x          | `--space-3`      | 12px                               |
| padding-y          | `--space-2`      | 8px                                |
| prefix gap         | `--space-0.5`    | 2px                                |
| prefix swatch size | `--space-4`      | 16px circle                        |
| font-size          | `--text-sm`      | 14px                               |
| font-weight        | `--font-regular` | 400                                |
| text color         | —                | `#18181B` (raw — see Notes)        |

## Design Tokens — Randomize Button

| Property           | Token Name       | Value                              |
|--------------------|------------------|------------------------------------|
| size               | —                | 32px × 32px (raw)                  |
| border-radius      | `--radius-2xl`   | 16px                               |
| background         | —                | `#F1F1F1` (raw — see Notes)        |
| border             | `--color-border` | `#E2E8ED` 1px solid                |
| icon size          | `--space-4`      | 16px                               |

## Panel Structure
```
_ColorPickerSelect (panel, variant=default)
├── suggestions row
│   └── ColorSwatchPicker (9 preset color dots, 16px each, gap: 8px)
├── ColorArea (240×240, HSB gradient)
│   └── thumb (16px circle, 3px white border)
└── container
    ├── container (slider + randomize button row)
    │   ├── ColorSlider (hue, 20px tall pill track + thumb)
    │   └── Button (randomize, 32×32, shuffle icon)
    └── ColorField (hex input, prefix=color swatch, value="#0485F7")
```

## Preset Swatch Colors (suggestions row)
| Swatch | Color     | Hex       |
|--------|-----------|-----------|
| 1      | rose      | `#F43F5E` |
| 2      | fuchsia   | `#D946EF` |
| 3      | violet    | `#8B5CF6` |
| 4      | emerald   | `#10B981` |
| 5      | cyan      | `#06B6D4` |
| 6      | emerald   | `#10B981` |
| 7      | lime      | `#84CC16` |
| 8      | amber     | `#F59E0B` |
| 9      | orange    | `#F97316` |

## Notes
- token-mismatch: panel width `240px` — no foundation token. `--container-sm: 640px` too large. Use raw 240px.
- token-mismatch: panel border-radius `20px` (`rounded-2_5xl`) — DS has this value but foundation CSS token file has no `--radius-2_5xl`. Between `--radius-2xl: 16px` and `--radius-3xl: 24px`. Use raw 20px. Designer must decide.
- token-mismatch: panel background `--overlay: white` — near-miss `--color-surface: #FFFFFF`. Using raw `white`.
- token-mismatch: slider border-radius `32px` (`rounded-4xl`) — no foundation CSS var. Between `--radius-3xl: 24px` and `--radius-full`. Use raw 32px.
- token-mismatch: `--default/default: #F1F1F1` (input bg, button bg) — no foundation token, same as checkbox near-miss. Use raw.
- token-near-miss: `--field/foreground: #18181B` vs `--neutral-900: #0F172A` — use raw `#18181B`
- token-mismatch: all shadow values (inner shadow, overlay shadow, thumb shadow) have no foundation tokens — use raw values
- Panel `left: -4px` offset aligns panel edge with swatch left edge (accounts for padding)
- Panel `top: 44px` positions below 36px swatch + 8px gap
- Backdrop blur on panel bg and thumb; blur radius is variable token
- Open variant = trigger (empty state visually) + absolute-positioned panel below
