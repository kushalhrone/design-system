---
component: checkbox-group
variant: horizontal
figma-node-id: "17290:24393"
figma-content-hash: "2487-7441-horiz"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: checkbox-group
- variant: horizontal
- status: ready
- state: default | orientation: horizontal

## Anatomy

- Group header: Label + Helper text (optional)
- Slot: flex-row, items distributed equally across width
- Each Checkbox: Control (16×16) + Title only (description hidden by default in horizontal)

## Props

| Prop | Type | Default |
|---|---|---|
| `orientation` | `"horizontal"` | — |
| `state` | `"default"` | `"default"` |
| `showGroupLabel` | `boolean` | `true` |
| `showHelper` | `boolean` | `true` |
| `showDescription` | `boolean` | `false` (Figma default for horizontal items) |

## Layout Spec

| Property | Token | Value |
|---|---|---|
| slot flex direction | — | `row` |
| item gap (between items) | `--space-4` | `16px` |
| group-to-slot gap | `--space-4` | `16px` |
| item flex | — | `flex: 1 0 0` (equal columns) |
| item min-width | — | `0` (shrink allowed) |
| item internal gap (control → content) | `--space-3` | `12px` |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| slot gap | `--space-4` | 16px |
| group gap | `--space-4` | 16px |
| item internal gap | `--space-3` | 12px |
| group label color | `--color-fg` | `#18181b` |
| helper text color | `--color-fg-muted` | `#71717a` |
| item title color | `--color-fg` | `#18181b` |
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

- Horizontal layout hides `description` by default (`showDescription=false`) — Figma shows title-only items in horizontal mode.
- Items use `flex: 1 0 0` with `min-width: 0` to distribute equally; the last item uses `shrink-0` in Figma.
- Container width in Figma: 459px — treat as illustrative, not fixed.
- token-near-miss: `--foreground/foreground` `#18181b` vs `--color-fg` `#0F172A`. Confirm with designer.
- token-near-miss: `--foreground/muted` `#71717a` vs `--color-fg-muted` `#64748B`. Confirm.
