---
component: switch
variant: disabled
figma-node-id: "2489:9662"
figma-content-hash: "2489-9662-disabled"
foundation-ref: "../../../../../foundation/foundation-token"
---

## Meta

- component: switch
- variant: disabled
- status: ready
- isActive: off | state: disabled

## Anatomy

Visually identical to default (off). Differences:
- Wrapper: `opacity: 0.5`
- Pointer events: none
- Cursor: `not-allowed` / `default`
- No hover or focus responses

## Props

| Prop | Type | Default |
|---|---|---|
| `isActive` | `false` | — |
| `state` | `"disabled"` | — |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` |
| `label` | `string` | `"Switch label"` |
| `disabled` | `boolean` | `true` |

## Design Tokens

All tokens same as default variant. Override only:

| Property | Token | Value |
|---|---|---|
| wrapper opacity | `--disabled-opacity` | `0.5` |
| pointer-events | — | `none` |
| cursor | — | `not-allowed` |

## Interaction States

No interaction — all events suppressed.

| State | Visual |
|---|---|
| disabled | Opacity 50%, gray track, thumb left, no hover/focus |

## Notes

- Figma encodes `opacity: var(--disabled-opacity, 0.5)` on track root directly.
- Full switch row (`_SwitchControl` + label) should have `opacity: 0.5`, `pointer-events: none`.
- `aria-disabled="true"` on root; do not use HTML `disabled` attribute on a div.
- Disabled shown as `isActive=off` in Figma spec — apply same treatment to `isActive=on` disabled.
