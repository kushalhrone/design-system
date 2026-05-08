---
component: dropdown
variant: item-danger-hover
figma-node-id: 2401:4532
figma-content-hash: h47a1c27d3e5
foundation-ref: ../../../../../foundation/foundation-token
---

## Meta
- component: dropdown
- variant: item-danger-hover
- status: ready

## Props
| Prop            | Type    | Default      |
|-----------------|---------|--------------|
| state           | hover   | hover        |
| type            | danger  | danger       |
| title           | string  | "Title"      |
| description     | string  | "Description"|
| showDescription | boolean | true         |
| showPrefix      | boolean | true         |
| showSuffix      | boolean | true         |

## Design Tokens
| Property       | Token Name                            | Value   |
|----------------|---------------------------------------|---------|
| background     | --color-bg-subtle (near-miss)         | #f1f1f1 (raw — see Notes) |
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
| State | Background | Text (title) | Text (desc) | Border | Cursor  | Other |
|-------|------------|--------------|-------------|--------|---------|-------|
| hover | #f1f1f1    | #DC2626      | #71717a     | none   | pointer | —     |

## Notes
- Background `#f1f1f1` on hover — same near-miss as item-hover. See item-hover notes.
- Title text `--color-error` = `#DC2626` — exact match ✓. Danger color is preserved on hover.
- token-near-miss: Description text `#71717a`. See item-default notes.
