---
component: switch-group
variant: disabled
figma-node-id: "2489:10035"
figma-content-hash: "2489103500di"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: switch-group
- variant: disabled
- status: ready
- state: disabled | opacity: 0.5 on container + switch separately

## Anatomy

Visually identical to default variant. Differences:
- `container` (text area): `opacity: 0.5`
- `_SwitchControl` (track+thumb): `opacity: 0.5`
- Root wrapper: no opacity change (opacity applied to sub-parts separately)
- No interaction events

## Props

| Prop | Type | Default |
|---|---|---|
| `state` | `"disabled"` | — |
| `labelGroup` | `string` | `"Allow Notifications"` |
| `descriptionGroup` | `string` | `"Receive push notifications on your device"` |

## Design Tokens

All tokens identical to default variant. Wrapper overrides only:

| Property | Token Name | Value |
|---|---|---|
| container opacity | `--disabled-opacity` | `0.5` |
| switch-control opacity | `--disabled-opacity` | `0.5` |
| pointer-events | — | `none` |
| cursor | — | `not-allowed` |

## Interaction States

No interaction — all events suppressed.

| State | Visual |
|---|---|
| disabled | Both text container and switch at 50% opacity, static |

## Notes

- Opacity 0.5 is applied separately to `.switch-group__container` AND `.switch-control` — NOT on the root `.switch-group` wrapper.
- This matches Figma node structure: each sub-part has `opacity: var(--disabled-opacity, 0.5)`.
- Use `aria-disabled="true"` + `role="switch"` on the switch control.
- `pointer-events: none` on root to fully suppress interaction.
- Switch remains in ON state visually when disabled — same thumb position as default.
