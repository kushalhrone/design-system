---
component: checkbox-group
variant: vertical
figma-node-id: "17290:24392"
figma-content-hash: "2487-7441-vert"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: checkbox-group
- variant: vertical
- status: ready
- state: default | orientation: vertical

## Anatomy

Same as `default` variant. This file documents orientation-specific layout rules for the vertical axis.

- Group header stacks above the slot
- Slot: flex-col, gap 12px between items
- Each item: flex-row, control left + content right
- Content column: flex-col, title above description

## Props

| Prop | Type | Default |
|---|---|---|
| `orientation` | `"vertical"` | `"vertical"` |
| `state` | `"default"` | `"default"` |
| `showGroupLabel` | `boolean` | `true` |
| `showHelper` | `boolean` | `true` |

## Layout Spec

| Property | Token | Value |
|---|---|---|
| slot flex direction | — | `column` |
| item gap (between items) | `--space-3` | `12px` |
| group-to-slot gap | `--space-4` | `16px` |
| item internal gap (control → content) | `--space-3` | `12px` |
| item alignment | — | `items-start` |
| content column width | — | `flex: 1 0 0` (full remaining) |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| group gap | `--space-4` | 16px |
| item gap | `--space-3` | 12px |
| group label color | `--color-fg` | `#18181b` |
| helper text color | `--color-fg-muted` | `#71717a` |
| item title color | `--color-fg` | `#18181b` |
| item description color | `--color-fg-muted` | `#71717a` |
| checkbox background | `--field/background` | `#ffffff` |
| checkbox radius | `--dimensions/radius/rounded-md` | `6px` |
| shadow | `--shadow-field` | 3-layer drop shadow |

## Interaction States

| State | Background | Border | Cursor | Other |
|---|---|---|---|---|
| default | `#ffffff` | transparent | default | shadow-field |
| hover | `#ffffff` | transparent | pointer | — |
| focus | `#ffffff` | transparent | pointer | focus-ring |
| checked | `--color-secondary` | transparent | pointer | checkmark visible |
| disabled | `#ffffff` | transparent | not-allowed | opacity 0.5 on item |

## Notes

- Vertical is the default orientation — `orientation="vertical"` is the implied baseline.
- Content column expands to fill available width (`flex: 1 0 0`, `min-width: 0`).
- token-near-miss: `--foreground/foreground` `#18181b` vs `--color-fg` `#0F172A`. Log and confirm with designer.
- token-near-miss: `--foreground/muted` `#71717a` vs `--color-fg-muted` `#64748B`. Log and confirm.
