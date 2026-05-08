---
component: combobox
variant: selected
figma-node-id: "14118:33132"
figma-content-hash: "14118-33116-selected"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: combobox
- variant: selected
- status: ready
- state: value chosen, dropdown open showing selection with checkmark

## Anatomy

- Label ("State")
- Field: selected value text ("Texas") + chevron-UP icon + focus ring
- Dropdown: same list as open, selected item ("Texas") has checkmark icon right-aligned

## Props

| Prop | Type | Default |
|---|---|---|
| `state` | `"selected"` | — |
| `label` | `string` | `"State"` |
| `value` | `string` | `"Texas"` |
| `items` | `string[]` | `["Florida","Delaware","Texas","California","New York","Wyoming"]` |

## Design Tokens

### Field

| Property | Token Name | Value |
|---|---|---|
| field background | `--field/background-focus` | `#ffffff` |
| field radius | `--dimensions/radius/rounded-lg` | `8px` |
| focus ring | `--focus-ring-shield` | `0 0 0 2px #02563d` |
| value text color | `--field/foreground` | `#18181b` |
| value text size | `--dimensions/font/text-sm` | `14px` |
| value text weight | `font-regular` | `400` |
| chevron direction | — | up (rotate 180°) |

### Dropdown (selected state)

| Property | Token Name | Value |
|---|---|---|
| dropdown bg | `--overlay` | `#ffffff` |
| dropdown padding | `--dimensions/spacing/1` | `4px` |
| dropdown item gap | `--dimensions/spacing/0.5` | `2px` |
| dropdown shadow | `--shadow-overlay` | 3-layer overlay shadow |
| item height | — | `36px` min |
| item padding-x | `--dimensions/spacing/3` | `12px` |
| item padding-y | `--dimensions/spacing/1.5` | `6px` |
| item text color | `--default/default-foreground` | `#18181b` |
| item text size | `--dimensions/font/text-sm` | `14px` |
| item text weight | `font-medium` | `500` |
| checkmark icon size | — | `16px` |
| checkmark color | `--color-fg` | `#18181b` |

## Selected Item Anatomy

```
[ text label (flex: 1 0 0) ]  [ checkmark icon 16×16 ]
```

- Checkmark is a trailing icon, right-aligned within the item row
- Only visible on the currently selected item
- Other items render without the checkmark slot

## Interaction States

| State | Field | Dropdown |
|---|---|---|
| selected + open | focus-ring `#02563d` | visible, checkmark on selected item |
| selected + closed | closed shadow | hidden |
| re-open | focus-ring `#02563d` | visible, checkmark persists |
| clear selection | reverts to closed | — |

## Notes

- Selected state is visually identical to `open` except: field shows selected value text (not placeholder), and the matching dropdown item has a checkmark.
- Chevron UP (rotate 180°) — same as `open` state.
- Field text uses `--field/foreground` (`#18181b`) not `--field/placeholder`.
- token-near-miss: `--field/foreground` `#18181b` vs `--color-fg` `#0F172A`. Confirm.
- token-near-miss: `--default/default-foreground` `#18181b` vs `--color-fg` `#0F172A`. Confirm.
- `--focus-ring` Figma token = `#02563d` = exact match to `--color-secondary` in foundation. No mismatch.
