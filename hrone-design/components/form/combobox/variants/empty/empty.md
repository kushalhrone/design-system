---
component: combobox
variant: empty
figma-node-id: "14118:33131"
figma-content-hash: "14118-33116-empty"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: combobox
- variant: empty
- status: ready
- state: user is typing, no results match the query

## Anatomy

- Label ("State")
- Field: typed text with cursor ("Madrid|") + chevron-DOWN icon + focus ring
- No dropdown (empty results — dropdown hidden or shows empty state)

## Props

| Prop | Type | Default |
|---|---|---|
| `state` | `"empty"` | — |
| `label` | `string` | `"State"` |
| `inputValue` | `string` | `"Madrid"` |

## Design Tokens

### Field

| Property | Token Name | Value |
|---|---|---|
| field background | `--field/background-focus` | `#ffffff` |
| field border | `--field/border` | `rgba(222,222,224,0)` |
| field radius | `--dimensions/radius/rounded-lg` | `8px` |
| focus ring | `--focus-ring-shield` | `0 0 0 2px #02563d` |
| text (typed) color | `--field/foreground` | `#18181b` |
| text size | `--dimensions/font/text-sm` | `14px` |
| text weight | `font-regular` | `400` |
| chevron direction | — | down |
| chevron icon size | — | `16px` |
| field padding-left | `--dimensions/spacing/3` | `12px` |
| field height | — | `36px` |
| label-to-field gap | `--dimensions/spacing/2` | `0px` (Figma gap=0 in empty state) |

## Interaction States

| State | Dropdown | Text Color | Chevron |
|---|---|---|---|
| typing (no match) | hidden | `--field/foreground` | down |
| clearing input | hidden | placeholder color | down |
| focus maintained | hidden | `--field/foreground` | down |

## Notes

- Empty state uses `gap-[0px]` between field wrapper sections (Figma uses `--dimensions/spacing/2` resolving to `0px` in this state — confirmed from code: `isEmpty ? "gap-[var(--dimensions/spacing/2,0px)]"`).
- Typed text color `--field/foreground` = `#18181b` (same as foreground), NOT muted/placeholder.
- Chevron stays DOWN in empty state (not rotated) — user is typing but no dropdown is open.
- In production: show an "No results found" empty state inside the dropdown panel.
- token-near-miss: `--field/foreground` `#18181b` vs `--color-fg` `#0F172A`. Confirm.
- token-near-miss: `--field/background-focus` `#ffffff` vs `--color-surface` `#FFFFFF`. Confirm.
