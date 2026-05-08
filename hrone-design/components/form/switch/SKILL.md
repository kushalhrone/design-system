---
component: switch
category: form
figma-node-id: "2489:9914"
figma-control-node-id: "2489:9559"
variants: [default, checked, hover, focus, disabled]
foundation-ref: "../../../foundation/foundation-token"
---

## Overview

Toggle switch control. Two sub-components: `_SwitchControl` (track + thumb only) and `Switch` (control + label). Three sizes. Four interactive states × two checked states.

## Variants

| Variant | isActive | state | Description |
|---|---|---|---|
| default | off | default | Idle, unchecked — gray track, thumb left |
| checked | on | default | Active, checked — green track, thumb right |
| hover | off/on | hover | Cursor pointer, no visual change from default |
| focus | on | focus | Focus ring: 2px bg + 4px secondary |
| disabled | off | disabled | Opacity 0.5, pointer-events none |

## Sub-Components

| Name | Node | Description |
|---|---|---|
| `_SwitchControl` | 2489:9559 | Track + thumb, no label |
| `Switch` | 2489:9914 | Control + label row |

## Sizes

| Size | Track W | Track H | Thumb W | Thumb H | Icon |
|---|---|---|---|---|---|
| sm | 32px | 16px | 16px | 12px | 10px |
| md | 40px | 20px | 20px | 16px | 10px |
| lg | 48px | 24px | 24px | 20px | 10px |

Padding inside track: 2px all sides. Thumb fills remaining height (track_h − 4px). Thumb width = track_w / 2.

## Shared Tokens

| Property | Token | Value |
|---|---|---|
| track radius | `--dimensions/radius/rounded-3xl` | `24px` |
| thumb radius | `--dimensions/radius/rounded-2xl` | `16px` |
| track padding | `--dimensions/spacing/0.5` | `2px` |
| track off bg | near-miss: `--neutral-100` | `#f1f1f1` |
| track on bg | `--color-secondary` | `#02563d` |
| thumb off bg | near-miss: `--color-surface` | `#ffffff` |
| thumb on bg | `--color-surface` | `#FFFFFF` |
| label gap | `--dimensions/spacing/4` | `16px` |
| label font | Body sm medium | 14px/20px 500 |
| label color | near-miss: `--color-fg` | `#18181b` |
| disabled opacity | — | `0.5` |

## Thumb Shadows

| State | Shadow name | Value |
|---|---|---|
| off (default/hover) | `shadow-field` | `0px 2px 2px rgba(0,0,0,0.04), 0px 1px 1px rgba(0,0,0,0.06), 0px 0px 0.5px rgba(0,0,0,0.06)` + inner `rgba(255,255,255,0.1)` |
| on | `shadow-switch` | `0px 0px 0.5px rgba(0,0,0,0.3), 0px 2px 5px rgba(0,0,0,0.06), 0px 0px 2.5px rgba(0,0,0,0.02)` |

## Focus Ring

```
box-shadow:
  0 0 0 2px --color-bg (#F8FAFB),   /* offset ring — exact match */
  0 0 0 4px --color-secondary (#02563d);  /* focus ring — exact match */
```

## Props

| Prop | Type | Default |
|---|---|---|
| `isActive` | `boolean` | `false` |
| `state` | `"default" \| "hover" \| "focus" \| "disabled"` | `"default"` |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` |
| `label` | `string` | `"Switch label"` |
| `showLabel` | `boolean` | `true` |
| `showIcon` | `boolean` | `true` |

## Notes

- token-near-miss: track off bg `#f1f1f1` ≈ `--neutral-100` (`#F1F5F7`). Confirm with designer.
- token-near-miss: thumb off bg `#ffffff` ≈ `--color-surface` (`#FFFFFF`). Confirm with designer.
- token-near-miss: label color `#18181b` ≈ `--color-fg` (`#0F172A`). Confirm with designer.
- Hover state: no visual change from default — only `cursor: pointer` applied.
- Figma shows `overflow: hidden` on focus variant to clip ring; apply `overflow: clip` on focus.
- `aria-checked` + `role="switch"` required on control root.
- Thumb icon (`circle-dashed`) 10×10px SVG — same size across all sizes.
