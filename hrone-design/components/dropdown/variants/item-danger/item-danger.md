---
component: dropdown
variant: item-danger
figma-node-id: 2401:4526
figma-content-hash: g39f0b16c2d4
foundation-ref: ../../../../../foundation/foundation-token
---

## Meta
- component: dropdown
- variant: item-danger
- status: ready

## Props
| Prop            | Type    | Default      |
|-----------------|---------|--------------|
| state           | default | default      |
| type            | danger  | danger       |
| title           | string  | "Title"      |
| description     | string  | "Description"|
| showDescription | boolean | true         |
| showPrefix      | boolean | true         |
| showSuffix      | boolean | true         |

## Design Tokens
| Property       | Token Name                            | Value   |
|----------------|---------------------------------------|---------|
| background     | transparent                           | —       |
| text (title)   | --color-error                         | #DC2626 |
| text (desc)    | --color-fg-muted (near-miss)          | #71717a (raw — see Notes) |
| border-radius  | --dimensions/radius/rounded-lg        | 8px     |
| min-height     | --space-9                             | 36px    |
| padding-x      | --space-3                             | 12px    |
| padding-y      | --space-1.5                           | 6px     |
| gap            | --space-3                             | 12px    |
| icon-size      | --space-4                             | 16px    |
| cursor         | pointer                               | —       |

## Interaction States
| State   | Background  | Text (title) | Text (desc) | Border | Cursor  | Other |
|---------|-------------|--------------|-------------|--------|---------|-------|
| default | transparent | #DC2626      | #71717a     | none   | pointer | —     |

## Notes
- Title text `#DC2626` (Figma `--danger/danger`) → `--color-error` = `#DC2626` — **exact token match** ✓
- token-near-miss: Description text `#71717a`; closest `--color-fg-muted` = `#64748B`. Designer must confirm.
- Only the title text color changes vs item-default — layout, sizing, and padding are identical.
- Icon in prefix slot also uses danger color convention (trash/delete icons shown in Figma example).
- See `item-danger-hover`, `item-danger-focus`, `item-danger-disabled` for interactive states.
