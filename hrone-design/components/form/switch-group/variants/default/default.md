---
component: switch-group
variant: default
figma-node-id: "2489:9992"
figma-content-hash: "2489999200de"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: switch-group
- variant: default
- status: ready
- state: default (on) | opacity: 1

## Anatomy

- Root: flex row, gap 16px, width 312px
- container: flex col, label + description
- Switch: track (40×20px pill) + thumb (20×16px pill, right-aligned)

## Props

| Prop | Type | Default |
|---|---|---|
| `state` | `"default" \| "disabled"` | `"default"` |
| `labelGroup` | `string` | `"Allow Notifications"` |
| `descriptionGroup` | `string` | `"Receive push notifications on your device"` |

## Design Tokens

### Layout

| Property | Token Name | Value |
|---|---|---|
| root width | — (no token) | `312px` |
| root gap | `--space-4` | `16px` |

### Switch Track

| Property | Token Name | Value |
|---|---|---|
| width | `--space-10` | `40px` |
| height | `--space-5` | `20px` |
| padding | `--space-0.5` | `2px` |
| border-radius | `--dimensions/radius/rounded-3xl` | `24px` |
| background (on) | `--color-secondary` | `#02563d` |

### Switch Thumb

| Property | Token Name | Value |
|---|---|---|
| width | — | `20px` |
| height | — | `16px` (track 20px − 2×2px padding) |
| border-radius | `--dimensions/radius/rounded-2xl` | `16px` |
| background | `--neutral-25` | `#FFFFFF` |
| shadow | `--shadow-switch` (raw) | see Effects below |
| position (on) | — | `justify-content: flex-end` |

### Typography — Label

| Property | Token Name | Value |
|---|---|---|
| font-size | `--text-sm` | `14px` |
| font-weight | `--font-medium` | `500` |
| line-height | `--dimensions/leading/text-sm` | `20px` |
| color | raw (near-miss `--color-fg`) | `#18181b` |

### Typography — Description

| Property | Token Name | Value |
|---|---|---|
| font-size | `--text-xs` | `12px` |
| font-weight | `--font-regular` | `400` |
| line-height | `--dimensions/leading/text-xs` | `16px` |
| color | raw (near-miss `--color-fg-muted`) | `#71717a` |

## Effects

```css
/* shadow-switch — no foundation token, raw value */
drop-shadow:
  0px 0px 0.5px rgba(0, 0, 0, 0.30),
  0px 2px   5px   rgba(0, 0, 0, 0.06),
  0px 0px 2.5px rgba(0, 0, 0, 0.02);
```

## Interaction States

| State | Track bg | Thumb pos | Other |
|---|---|---|---|
| on (default) | `--color-secondary` | right | — |
| off | undefined in Figma | left | track bg: `--color-bg-tertiary` (inferred) |
| hover | inherited | inherited | cursor: pointer |
| focus | inherited | inherited | `--color-focus-ring` outline |
| disabled | see disabled variant | — | — |

## Notes

- token-near-miss: label color Figma `#18181b` vs `--color-fg` `#0F172A`. Using raw value. Confirm with designer.
- token-near-miss: description color Figma `#71717a` vs `--color-fg-muted` `#64748B`. Using raw value. Confirm with designer.
- `accent/accent` Figma `#02563d` = exact match `--color-secondary`. No mismatch.
- `accent/accent-foreground` Figma `#FFFFFF` = exact match `--neutral-25`. No mismatch.
- Off state not defined in Figma — inferred track bg `--color-bg-tertiary`; confirm before building.
- Disabled opacity applied to container text AND switch control separately (not root wrapper).
- `--typography-caption` token NOT used for description — it applies `--leading-loose` (2×) giving 24px line-height, which contradicts Figma's 16px. Use `--text-xs` + `--font-regular` directly.
