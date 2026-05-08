---
component: text-field
variant: error
figma-node-id: "13675:12656"
figma-content-hash: "13675-12656-error"
foundation-ref: "../../../../../foundation/foundation-token"
---

## Meta

- component: text-field
- variant: error
- status: ready
- state: error (validation failed)

## Anatomy

- Label: 14px/20px 500, **`--color-error` `#DC2626`** (red)
- Input: white bg, **1px solid `--color-error` border**, `shadow-field`, filled text
- Input text: `--field/foreground` `#18181b` (filled content shown)
- ExpandIndicator: same as other states
- Error message: "Characters: 82/80", 12px/16px 400, **`--color-error`**

## Props

| Prop | Type | Default |
|---|---|---|
| `state` | `"error"` | — |
| `value` | `string` | user text |
| `errorMessage` | `string` | `"Characters: 82/80"` |
| `showLabel` | `boolean` | `true` |
| `showDescription` | `boolean` | `true` |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| border | `--color-error` | `1px solid #DC2626` |
| border radius | `--dimensions/radius/rounded-lg` | `8px` |
| label color | `--color-error` | `#DC2626` |
| error message color | `--color-error` | `#DC2626` |
| field bg | near-miss: `--color-surface` | `white` |
| shadow | `shadow-field` | 3-layer drop |
| input text | near-miss: `--color-fg` | `#18181b` |

## Interaction States

| State | Visual |
|---|---|
| error | Red label, red 1px border, filled text, red error message below |

## Notes

- `--danger/danger` `#DC2626` = `--color-error` — exact match.
- Border is now visible (1px red) unlike other states where border is transparent.
- Error message replaces description text; uses `DescriptionErrorMessage` variant=`ErrorMessage`.
- In Figma: error state shows filled text "Lorem ipsum dolor sit amet consectetur. Feugiat a phasellus ipsu" (truncated by overflow-clip).
