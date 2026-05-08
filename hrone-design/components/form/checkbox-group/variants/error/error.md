---
component: checkbox-group
variant: error
figma-node-id: "17290:24394"
figma-content-hash: "2487-7441-err"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: checkbox-group
- variant: error
- status: ready
- state: error | orientation: vertical + horizontal

## Anatomy

- Group header: Label (in error color) + Helper text (muted)
- Slot: Checkbox items (all in invalid state)
- Error message: Below slot, in error color

## Props

| Prop | Type | Default |
|---|---|---|
| `state` | `"error"` | — |
| `orientation` | `"vertical" \| "horizontal"` | `"vertical"` |
| `showGroupLabel` | `boolean` | `true` |
| `showHelper` | `boolean` | `true` |

## Checkbox Item Props (invalid state)

| Prop | Type | Value in error group |
|---|---|---|
| `state` | `"invalid"` | `"invalid"` |
| `showTitle` | `boolean` | `true` |
| `showDescription` | `boolean` | depends on orientation |
| `showError` | `boolean` | `false` (error shown at group level) |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| group label color | `--color-error` | `#DC2626` |
| helper text color | `--color-fg-muted` | `#71717a` |
| item title color | `--color-error` | `#DC2626` |
| item description color | `--color-fg-muted` | `#71717a` |
| error message color | `--color-error` | `#DC2626` |
| checkbox border (invalid) | `--color-error` | `#DC2626`, 1px solid |
| checkbox background | `--field/background` | `#ffffff` |
| checkbox radius | `--dimensions/radius/rounded-md` | `6px` |
| shadow | `--shadow-field` | 3-layer drop shadow |
| error message size | `--dimensions/font/text-xs` | `12px` |
| error message weight | `font-regular` | `400` |
| error message leading | `--dimensions/leading/text-xs` | `16px` |
| group gap | `--space-4` | 16px |
| item gap (vertical) | `--space-3` | 12px |
| item gap (horizontal) | `--space-4` | 16px |

## Interaction States

| State | Border | Title | Error msg | Other |
|---|---|---|---|---|
| invalid default | 1px solid `--color-error` | `--color-error` | shown below slot | same shadow |
| invalid hover | 1px solid `--color-error` | `--color-error` | — | — |
| invalid focus | 1px solid `--color-error` | `--color-error` | — | danger focus-ring |
| invalid checked | 1px solid `--color-error` | `--color-error` | — | checkmark visible |
| invalid disabled | 1px solid `--color-error` | `--color-error` | — | opacity 0.5 |

## Error Message

- Positioned below the slot, inside the group wrapper
- Font: `--dimensions/font/text-xs` (12px), regular, `--color-error`
- Full group width
- Default text: "Error message goes here"

## Notes

- Error state shifts group label and item titles to `--color-error` (#DC2626).
- Individual checkbox `showError` is set to `false` — error shown once at group level, not per-item.
- Helper text stays muted (#71717a) regardless of error state.
- Horizontal error layout: items shrink equally; error message spans full row below.
- token-near-miss: `--foreground/muted` `#71717a` vs `--color-fg-muted` `#64748B`. Confirm with designer.
- `--danger/danger` Figma `#DC2626` = exact match to `--error` / `--color-error` `#DC2626`. No mismatch.
