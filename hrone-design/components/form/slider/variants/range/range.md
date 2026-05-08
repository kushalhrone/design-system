---
component: slider
variant: range
figma-node-id: "5375:69703"
figma-content-hash: "2306-2306-range"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: slider
- variant: range
- status: ready
- thumbs: range (start + end) | state: default

## Anatomy

- Header: Label (left) + Value (right)
- Track: bar + fill between thumbs + step dots + thumbStart + thumbEnd
- Marks: 20% / 50% / 80% labels below track
- No tooltip in range mode (Figma default)

## Props

| Prop | Type | Default |
|---|---|---|
| `thumbs` | `"range"` | — |
| `state` | `"default"` | `"default"` |
| `showHeader` | `boolean` | `true` |
| `showMarks` | `boolean` | `true` |
| `showSteps` | `boolean` | `true` |
| `showThumb` | `boolean` | `true` |
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
| fill inset | — | `inset: 0 rightEdge 0 leftEdge` (between thumbs) |
| fill left offset | — | `-2px` from fill container |

### Fill Container (Range)

Fill container is absolutely positioned:
- Left edge: `20.5%` of track width
- Right edge: `41%` from right
- Fill div: `inset: 0 0 0 -2px` (bleeds 2px left for seamless join)

### Thumbs

| Property | Token Name | Value |
|---|---|---|
| thumbEnd (right) | — | `right: 2px` from fill container |
| thumbStart (left) | — | `right: 53px` from fill container |
| size | — | `24×16px` each |
| radius | `--dimensions/radius/rounded-2_5xl` | `20px` |
| background | `--color-surface` | `#FFFFFF` |
| shadow | `--shadow-field` | 3-layer |

### Step Dots (Range)

- 10 dots spanning fill container (extended left -25px, right -66px to cover full track)
- Filled zone: `--color-surface` (#FFFFFF), opacity 17%
- Unfilled zones: `--field/placeholder` (#71717a), opacity 17%

## Interaction States

| State | Fill | ThumbStart | ThumbEnd |
|---|---|---|---|
| default | between thumbs | left handle | right handle |
| drag thumbStart | fill grows/shrinks left | follows pointer | static |
| drag thumbEnd | fill grows/shrinks right | static | follows pointer |
| thumbs meet | fill collapses to point | — | — |

## Notes

- No tooltip in range variant (Figma shows no tooltip).
- Fill container is a separate div absolutely positioned within track — fill div bleeds -2px left for seamless radius join.
- Step dot rows extend beyond fill container bounds (left -25px, right -66px) to cover full track width.
- token-near-miss: `--default/default` `#f1f1f1` no exact foundation match. Confirm.
- token-near-miss: `--field/placeholder` `#71717a` vs `--color-fg-muted`. Confirm.
