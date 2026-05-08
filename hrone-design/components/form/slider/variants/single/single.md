---
component: slider
variant: single
figma-node-id: "5375:69698"
figma-content-hash: "2306-2306-single"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: slider
- variant: single
- status: ready
- thumbs: single | state: default

## Anatomy

- Header: Label (left) + Value (right)
- Track: bar + fill + step dots + thumb
- Tooltip: floating above thumb
- Marks: 20% / 50% / 80% labels below track

## Props

| Prop | Type | Default |
|---|---|---|
| `thumbs` | `"single"` | `"single"` |
| `state` | `"default"` | `"default"` |
| `showHeader` | `boolean` | `true` |
| `showMarks` | `boolean` | `true` |
| `showSteps` | `boolean` | `true` |
| `showThumb` | `boolean` | `true` |
| `showTooltip` | `boolean` | `true` |
| `label` | `string` | `"Label"` |
| `value` | `string` | `"Value"` |

## Design Tokens

### Track

| Property | Token Name | Value |
|---|---|---|
| width | — | `200px` |
| height | — | `20px` |
| radius | `--dimensions/radius/rounded-2_5xl` | `20px` |
| background | `--default/default` | `#f1f1f1` |
| fill color | `--color-secondary` | `#02563d` |
| gap (sections) | `--dimensions/spacing/1` | `4px` |

### Thumb

| Property | Token Name | Value |
|---|---|---|
| width | — | `24px` |
| height | — | `16px` |
| radius | `--dimensions/radius/rounded-2_5xl` | `20px` |
| background | `--color-surface` | `#FFFFFF` |
| inset-y | — | `2px` |
| shadow | `--shadow-field` | 3-layer drop + inner highlight |
| cursor | — | `pointer` |

### Step Dots

| Property | Token Name | Value |
|---|---|---|
| size | — | `3×3px` |
| radius | — | `3px` |
| count | — | `10` |
| opacity | — | `0.17` |
| filled zone color | `--color-surface` | `#FFFFFF` |
| empty zone color | `--field/placeholder` | `#71717a` |

### Tooltip

| Property | Token Name | Value |
|---|---|---|
| background | `--overlay` | `#ffffff` |
| text color | `--foreground/overlay` | `#18181b` |
| text size | `--dimensions/font/text-xs` | `12px` |
| radius | `--dimensions/radius/rounded-xl` | `12px` |
| padding | `8px 4px` (px py) | — |
| shadow | `--shadow-overlay` | 3-layer overlay |
| arrow | 10×10px, rotated 45° | white, `rounded-sm` |
| arrow offset | — | `6px` below tooltip |

### Header

| Property | Token Name | Value |
|---|---|---|
| label size | `--dimensions/font/text-sm` | `14px` |
| label weight | `font-medium` | `500` |
| value color | `--color-fg` | `#18181b` |
| layout | — | flex row, `justify-between` |

### Marks

| Property | Token Name | Value |
|---|---|---|
| font size | `--dimensions/font/text-xs` | `12px` |
| font weight | `font-regular` | `400` |
| color | `--color-fg` | `#18181b` |
| layout | — | flex row, `justify-between` |
| visible labels | — | 20%, 50%, 80% (0% + 100% opacity 0) |

## Interaction States

| State | Track | Thumb | Tooltip |
|---|---|---|---|
| default | fill visible | visible | hidden |
| dragging | fill updates | follows pointer | visible above thumb |
| hover thumb | — | — | visible |
| focus | fill visible | focus ring optional | — |

## Notes

- `--accent/accent` Figma `#02563d` = exact match to `--color-secondary`. No mismatch.
- `--accent/accent-foreground` Figma `#FFFFFF` = exact match to `--color-surface`. No mismatch.
- token-near-miss: `--field/placeholder` `#71717a` vs `--color-fg-muted` `#64748B`. Using raw `#71717a`. Confirm.
- token-near-miss: `--default/default` `#f1f1f1` — no exact foundation match (`--neutral-100` = `#F1F5F7`). Using raw `#f1f1f1`. Confirm.
- token-near-miss: `--foreground/foreground` `#18181b` vs `--color-fg` `#0F172A`. Confirm.
- Tooltip arrow: `10×10px` div rotated 45°, white fill, `rounded-sm` (4px), positioned `-6px` below tooltip.
- First and last marks (0%, 100%) are rendered at `opacity: 0` — they serve as flex spacers for alignment only.
