---
component: checkbox-group
variant: default
figma-node-id: "17290:24391"
figma-content-hash: "2487-7441-def"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: checkbox-group
- variant: default
- status: ready
- state: default | orientation: vertical

## Anatomy

- Group header: Label + Helper text (optional)
- Slot: 1–N Checkbox items stacked vertically
- Each Checkbox: Control (16×16) + Content column (Title + Description)

## Props

| Prop | Type | Default |
|---|---|---|
| `state` | `"default"` | `"default"` |
| `orientation` | `"vertical"` | `"vertical"` |
| `showGroupLabel` | `boolean` | `true` |
| `showHelper` | `boolean` | `true` |
| `children` | `ReactNode` | 3 demo checkboxes |

## Checkbox Item Props

| Prop | Type | Default |
|---|---|---|
| `state` | `"default"` | `"default"` |
| `showTitle` | `boolean` | `true` |
| `showDescription` | `boolean` | `true` |
| `title` | `string` | `"Title here"` |
| `description` | `string` | `"Description here"` |

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
| checkbox border | `--field/border` | `rgba(222,222,224,0)` |
| checkbox radius | `--dimensions/radius/rounded-md` | `6px` |
| container radius | `--dimensions/radius/rounded-xs` | `2px` |
| group label size | `--dimensions/font/text-sm` | `14px` |
| group label weight | `font-medium` | `500` |
| item title size | `--dimensions/font/text-sm` | `14px` |
| item title weight | `font-medium` | `500` |
| item description size | `--dimensions/font/text-sm` | `14px` |
| item description weight | `font-regular` | `400` |
| helper text size | `--dimensions/font/text-xs` | `12px` |
| shadow (checkbox) | `--shadow-field` | 3-layer drop shadow |

## Interaction States

| State | Background | Title | Border | Cursor | Other |
|---|---|---|---|---|---|
| default | `--field/background` (#fff) | `--color-fg` | none (transparent) | default | shadow-field |
| hover | `--field/background` (#fff) | `--color-fg` | none | pointer | same geometry |
| focus | `--field/background` (#fff) | `--color-fg` | none | pointer | focus ring (2px offset + 4px brand) |
| checked | `--color-secondary` (#02563d) | `--color-fg` | none | pointer | checkmark visible |
| disabled | `--field/background` (#fff) | `--color-fg` | none | not-allowed | opacity 0.5 |

## Notes

- token-near-miss: `--foreground/foreground` Figma `#18181b`, closest `--color-fg` (`#0F172A`). Using raw `#18181b`. Designer must confirm.
- token-near-miss: `--foreground/muted` Figma `#71717a`, closest `--color-fg-muted` (`#64748B`). Using raw `#71717a`. Designer must confirm.
- token-near-miss: `--field/background` Figma `#ffffff`, closest `--color-surface` (`#FFFFFF`). Using raw `#ffffff`. Designer must confirm.
- Checkmark icon uses a mask/img asset from Figma MCP (`imgUnion` asset). Replace with inline SVG or icon system in production.
- Checkbox control top-padding: 2px to optically align with first line of text.
