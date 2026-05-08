---
component: text-field
category: form
figma-node-id: "13675:12619"
figma-component-name: "TextArea"
variants: [placeholder, hover, focus, filled, error, disabled]
foundation-ref: "../../../foundation/foundation-token"
---

## Overview

Multi-line text area input. 280px wide, 36px initial height, vertically resizable (resize indicator bottom-right). Six states. Includes optional label above and description/error message below.

> Figma component name is **TextArea** (not text-field). User-facing name: `text-field`. Ref: https://v3.heroui.com/docs/react/components/text-area

## Variants

| Variant | Border | Shadow | BG | Ring |
|---|---|---|---|---|
| placeholder | transparent 1px | shadow-field | white | — |
| hover | transparent 1px | shadow-field-hover (stronger) | rgba(249,249,249,0.92) | — |
| focus | transparent 1px | — | white | 2px `--color-secondary` |
| filled | transparent 1px | shadow-field | white | — |
| error | 1px `--color-error` | shadow-field | white | — |
| disabled | transparent 1px | shadow-field | white | — (opacity 0.5) |

## Sub-Components

| Name | Description |
|---|---|
| Label | 14px/20px medium above field; error = red |
| Input | The textarea box itself |
| ExpandIndicator | 10×10px resize handle, bottom-right of container |
| DescriptionErrorMessage | 12px/16px below field; two variants: description (muted) / error (red) |

## Anatomy

```
[root flex-col gap-4px, 280px wide]
  [Label — optional]
  [container flex-1 flex-col gap-8px relative]
    [Input — flex box, border, bg, shadow/ring]
      [placeholderWrapper flex-1 overflow-clip]
        [text — placeholder or filled]
    [ExpandIndicator — absolute bottom-0 right-0, 10×10px]
  [descriptionWrapper]
    [DescriptionErrorMessage]
```

## Shared Tokens

| Property | Token | Value |
|---|---|---|
| width | — | `280px` |
| initial height | — | `36px` (min) |
| border width | `--field/border-width` | `1px` |
| border radius | `--dimensions/radius/rounded-lg` | `8px` |
| padding H | `--dimensions/spacing/3` | `12px` |
| padding V | `--dimensions/spacing/2` | `8px` |
| inner gap | `--dimensions/spacing/1.5` | `6px` |
| label-input gap | `--dimensions/spacing/1` | `4px` |
| label font | Body sm medium | 14px/20px 500 |
| label color | near-miss: `--color-fg` | `#18181b` |
| label color (error) | `--color-error` | `#DC2626` |
| input font | Text field sm | 14px/20px 400 |
| placeholder color | `--color-fg-muted` | `#71717a` |
| input text color | near-miss: `--color-fg` | `#18181b` |
| field bg | near-miss: `--color-surface` | `white` |
| field bg hover | — | `rgba(249,249,249,0.92)` |
| border default | — | `rgba(222,222,224,0)` (transparent) |
| border error | `--color-error` | `#DC2626` |
| description font | Body xs | 12px/16px 400 |
| description color | `--color-fg-muted` | `#71717a` |
| error msg color | `--color-error` | `#DC2626` |
| disabled opacity | `--disabled-opacity` | `0.5` |

## Shadows

| State | Shadow |
|---|---|
| default / filled / disabled | `shadow-field`: `0px 2px 2px rgba(0,0,0,0.04), 0px 1px 1px rgba(0,0,0,0.06), 0px 0px 0.5px rgba(0,0,0,0.06)` |
| hover | `shadow-field-hover`: `0px 2px 4px rgba(0,0,0,0.04), 0px 1px 2px rgba(0,0,0,0.06), 0px 0px 1px rgba(0,0,0,0.06)` |
| focus | `box-shadow: 0 0 0 2px --color-secondary` (ring replaces shadow) |
| error | shadow-field |

## Focus Ring

```
box-shadow: 0 0 0 2px --color-secondary (#02563d);
overflow: clip on Input;
```
No offset ring (ring-offset-width = 2px in Figma token but resolves as ring spread only).

## Props

| Prop | Type | Default |
|---|---|---|
| `state` | `"placeholder" \| "hover" \| "focus" \| "filled" \| "error" \| "disabled"` | `"placeholder"` |
| `showLabel` | `boolean` | `true` |
| `showDescription` | `boolean` | `true` |
| `label` | `string` | `"Description"` |
| `placeholder` | `string` | `"Write here..."` |
| `value` | `string` | `""` |
| `maxLength` | `number` | `80` |

## Notes

- token-near-miss: field bg `white` ≈ `--color-surface` `#FFFFFF`. Confirm with designer.
- token-near-miss: label/input text `#18181b` ≈ `--color-fg` `#0F172A`. Confirm with designer.
- token-near-miss: field bg hover `rgba(249,249,249,0.92)` — no foundation match. Designer confirm.
- Border is 1px solid transparent in default/hover/focus states — visible only in error (red).
- ExpandIndicator: two 45°-rotated 0.7px lines, fg color `#18181b`, bottom-right absolute.
- Description shows char count: "Characters: 0/80". Error shows: "Characters: 82/80" in red.
- Focus uses `overflow: clip` on Input wrapper.
- Inner shadow `rgba(255,255,255,0.1)` present in non-focus states (glass effect).
