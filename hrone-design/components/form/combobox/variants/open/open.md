---
component: combobox
variant: open
figma-node-id: "14118:33130"
figma-content-hash: "14118-33116-open"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: combobox
- variant: open
- status: ready
- state: dropdown expanded, no selection yet

## Anatomy

- Label ("State")
- Field: placeholder text + chevron-UP suffix icon + focus ring
- Dropdown: white overlay panel with list of items (no checkmark)

## Props

| Prop | Type | Default |
|---|---|---|
| `state` | `"open"` | — |
| `label` | `string` | `"State"` |
| `placeholder` | `string` | `"Select one"` |
| `items` | `string[]` | `["Florida","Delaware","Texas","California","New York","Wyoming"]` |

## Design Tokens

### Field (focused/open)

| Property | Token Name | Value |
|---|---|---|
| field background | `--field/background-focus` | `#ffffff` |
| field border | `--field/border` | `rgba(222,222,224,0)` |
| field radius | `--dimensions/radius/rounded-lg` | `8px` |
| focus ring | `--focus-ring-shield` | `0 0 0 2px #02563d` |
| chevron icon size | — | `16px` |
| chevron direction | — | up (rotate 180°) |
| placeholder color | `--field/placeholder` | `#71717a` |

### Dropdown

| Property | Token Name | Value |
|---|---|---|
| dropdown bg | `--overlay` | `#ffffff` |
| dropdown padding | `--dimensions/spacing/1` | `4px` |
| dropdown item gap | `--dimensions/spacing/0.5` | `2px` |
| dropdown radius | `--dimensions/radius/rounded-lg` | `8px` |
| dropdown shadow | `--shadow-overlay` | 3-layer (14px/28px, -6px/12px, 2px/8px) |
| item height (min) | — | `36px` |
| item padding-x | `--dimensions/spacing/3` | `12px` |
| item padding-y | `--dimensions/spacing/1.5` | `6px` |
| item radius | `--dimensions/radius/rounded-lg` | `8px` |
| item text color | `--default/default-foreground` | `#18181b` |
| item text size | `--dimensions/font/text-sm` | `14px` |
| item text weight | `font-medium` | `500` |
| item hover bg | `--default/default` | `#f1f1f1` |
| item gap (icon → text) | `--dimensions/spacing/3` | `12px` |

## Interaction States

| State | Field Shadow | Dropdown |
|---|---|---|
| open (default) | focus-ring-shield (2px `#02563d`) | visible |
| item hover | focus-ring-shield | item bg `#f1f1f1` |
| item active | focus-ring-shield | item bg slightly darker |
| dismiss (Escape/click-away) | reverts to closed shadow | hidden |

## Dropdown Structure

Two ListBox groups stacked vertically inside the dropdown, separated only by the 2px gap:
- ListBox 1: Florida, Delaware, Texas, California, New York
- ListBox 2: Wyoming

## Notes

- Dropdown appears directly below the field; no explicit margin between field and dropdown — gap comes from the field `gap-[2px]` container (Figma shows 0px gap when open/selected/empty states).
- Overlay panel uses `backdrop-blur` + overlay bg — do NOT remove blur.
- `--shadow-overlay` (Figma `shadow-overlay`): 14px/28px + -6px/12px + 2px/8px + inner shadow `rgba(0,0,0,0)`.
- token-near-miss: `--default/default-foreground` `#18181b` vs `--color-fg` `#0F172A`. Confirm with designer.
- token-near-miss: `--field/placeholder` `#71717a` vs `--color-fg-muted` `#64748B`. Confirm.
