---
component: close-button
variant: default
figma-node-id: "3136:29454"
figma-content-hash: "pending-3136-29454"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: close-button
- variant: default
- status: ready

## Anatomy

- 24px container
- 16px xmark icon

## Props

| Prop | Type | Default |
|---|---|---|
| `state` | `default` | `default` |
| `icon` | `ReactNode \| null` | default xmark |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| size | `--close-button-size` | `24px` |
| radius | `--close-button-radius` | `12px` |
| padding | `--close-button-padding` | `4px` |
| background | `--close-button-bg` | `#F1F1F1` |
| foreground | `--close-button-fg` | `#71717A` |
| icon size | `--close-button-icon-size` | `16px` |

## Interaction States

| State | Background | Text | Border | Cursor | Other |
|---|---|---|---|---|---|
| default | `#F1F1F1` | `#71717A` | none | pointer | clipped icon |
| hover | `#FFFFFF` | `#71717A` | none | pointer | hover surface |
| focus | `#FFFFFF` | `#71717A` | none | pointer | double ring |

## Figma Node Map

| Node ID | State |
|---|---|
| `3136:29454` | default |

## Notes

- The resting state is a compact gray pill with the xmark icon centered.
- Exact content hash is pending because the MCP output did not expose raw JSON.

