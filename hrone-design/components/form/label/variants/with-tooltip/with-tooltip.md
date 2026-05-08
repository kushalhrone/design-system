---
component: label
variant: with-tooltip
figma-node-id: 13605:42525
figma-content-hash: 13605425232
foundation-ref: ../../../../foundation/foundation-token
---

## Also Load
> Label text, color, required asterisk tokens not repeated here.
> Also load: `components/form/label/variants/required/required.md`

## Meta
- component: label
- variant: with-tooltip
- status: ready

## Props
| Prop         | Type    | Default     |
|--------------|---------|-------------|
| value        | string  | "Your name" |
| showRequired | boolean | true        |
| showTooltip  | boolean | true        |

## Design Tokens — Tooltip Icon

| Property       | Token Name    | Value                   |
|----------------|---------------|-------------------------|
| icon           | circle-info   | 12px × 12px             |
| icon-size      | —             | 12px (raw)              |
| icon color     | —             | inherited from SVG asset|
| overflow       | clip          | —                       |
| inset          | —             | 6.25% (0.75px) padding  |

## Layout
```
Label (flex wrap, gap: 4px, items-center)
├── <p> label text (#18181B, medium)
├── <p> * (--color-error, medium) ← showRequired=true
└── <div> circle-info icon (12×12) ← showTooltip=true
```

## All Other Tokens
Same as `required` variant. See `required/required.md`.

## Notes
- Tooltip icon is `circle-info` SVG, 12px × 12px, with `inset: 6.25%` internal padding
- Icon color undefined in Figma spec — uses SVG fill from asset. Likely `--color-fg-muted`
- `showTooltip=true` AND `showRequired=true` is most common with-tooltip config — can be combined with `showRequired=false`
- Icon triggers a tooltip on hover/focus — tooltip content is external (not part of this component spec)
- Tooltip interaction state (hover/focus on icon) not defined in Figma — mark as `undefined`, follow design system default
