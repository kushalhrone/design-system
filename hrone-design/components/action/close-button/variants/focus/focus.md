---
component: close-button
variant: focus
figma-node-id: "3760:28182"
figma-content-hash: "pending-3760-28182"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: close-button
- variant: focus
- status: ready

## Anatomy

- 24px container
- 16px xmark icon

## Props

| Prop | Type | Default |
|---|---|---|
| `state` | `focus` | `focus` |
| `icon` | `ReactNode \| null` | default xmark |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| size | `--close-button-size` | `24px` |
| radius | `--close-button-radius` | `12px` |
| padding | `--close-button-padding` | `4px` |
| background | `--close-button-bg-hover` | `#FFFFFF` |
| foreground | `--close-button-fg` | `#71717A` |
| icon size | `--close-button-icon-size` | `16px` |
| focus ring | `--close-button-focus-ring` | double ring |

## Interaction States

| State | Background | Text | Border | Cursor | Other |
|---|---|---|---|---|---|
| default | `#F1F1F1` | `#71717A` | none | pointer | shared geometry |
| hover | `#FFFFFF` | `#71717A` | none | pointer | hover surface |
| focus | `#FFFFFF` | `#71717A` | none | pointer | background offset ring + brand ring |

## Figma Node Map

| Node ID | State |
|---|---|
| `3760:28182` | focus |

## Notes

- Focus uses a two-ring treatment: `#F8FAFB` offset ring plus `#02563D` brand ring.
- Exact content hash is pending because the MCP output did not expose raw JSON.

