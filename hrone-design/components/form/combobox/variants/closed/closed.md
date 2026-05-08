---
component: combobox
variant: closed
figma-node-id: "14118:33129"
figma-content-hash: "14118-33116-closed"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: combobox
- variant: closed
- status: ready
- state: idle, dropdown hidden

## Anatomy

- Label ("State") — above field
- Field: placeholder text + chevron-down suffix icon
- No dropdown

## Props

| Prop | Type | Default |
|---|---|---|
| `state` | `"closed"` | `"closed"` |
| `label` | `string` | `"State"` |
| `placeholder` | `string` | `"Select one"` |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| width | — | `256px` |
| field height | — | `36px` |
| field radius | `--dimensions/radius/rounded-lg` | `8px` |
| field padding-left | `--dimensions/spacing/3` | `12px` |
| field padding-y | `--dimensions/spacing/2` | `8px` |
| label-to-field gap | `--dimensions/spacing/1` | `4px` |
| label color | `--color-fg` | `#18181b` |
| label size | `--dimensions/font/text-sm` | `14px` |
| label weight | `font-medium` | `500` |
| placeholder color | `--field/placeholder` | `#71717a` |
| field text size | `--dimensions/font/text-sm` | `14px` |
| field text weight | `font-regular` | `400` |
| field background | `--field/background` | `#ffffff` |
| field border | `--field/border` | `rgba(222,222,224,0)` (transparent) |
| suffix padding-x | `--dimensions/spacing/3` | `12px` |
| suffix gap | `--dimensions/spacing/1.5` | `6px` |
| suffix bg | `--field/background` | `#ffffff` |
| chevron icon size | — | `16px` |
| chevron direction | — | down |
| shadow | `--shadow-field` | 3-layer drop + inner highlight |

## Interaction States

| State | Shadow | Border | Cursor | Other |
|---|---|---|---|---|
| default (closed) | `--shadow-field` | transparent | default | inner highlight visible |
| hover | `--shadow-field` | transparent | pointer | slight bg shift (system) |
| focus | `--focus-ring-shield` (2px `#02563d`) | transparent | pointer | shadow replaces field shadow |
| disabled | `--shadow-field` | transparent | not-allowed | opacity 0.5 |

## Notes

- Closed state is the only state that uses `--shadow-field` (3-layer) instead of the focus ring.
- Inner highlight (`inset 0 0 1px rgba(255,255,255,0.1)`) is present in closed state only.
- Suffix div has explicit white bg to occlude overflowing text in the field.
- token-near-miss: `--foreground/foreground` Figma `#18181b` vs `--color-fg` `#0F172A`. Using raw `#18181b`. Confirm with designer.
- token-near-miss: `--field/placeholder` Figma `#71717a` vs `--color-fg-muted` `#64748B`. Using raw `#71717a`. Confirm.
- token-near-miss: `--field/background` / `--field/background-focus` Figma `#ffffff` vs `--color-surface` `#FFFFFF`. Using raw `#ffffff`. Confirm.
