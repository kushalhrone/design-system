---
component: close-button
variant: hover
figma-node-id: "3136:29456"
figma-content-hash: "pending-3136-29456"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: close-button
- variant: hover
- status: ready

## Anatomy

- 24px container
- 16px xmark icon

## Props

| Prop | Type | Default |
|---|---|---|
| `state` | `hover` | `hover` |
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

## Interaction States

| State | Background | Text | Border | Cursor | Other |
|---|---|---|---|---|---|
| default | `#F1F1F1` | `#71717A` | none | pointer | shared geometry |
| hover | `#FFFFFF` | `#71717A` | none | pointer | hover surface |
| focus | `#FFFFFF` | `#71717A` | none | pointer | double ring |

## Figma Node Map

| Node ID | State |
|---|---|
| `3136:29456` | hover |

## Notes

- Hover state only changes the background surface from gray to white.
- Exact content hash is pending because the MCP output did not expose raw JSON.

