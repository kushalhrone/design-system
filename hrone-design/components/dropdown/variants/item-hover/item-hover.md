---
component: dropdown
variant: item-hover
figma-node-id: 2401:4427
figma-content-hash: c91d3e72f4b5
foundation-ref: ../../../../../foundation/foundation-token
---

## Meta
- component: dropdown
- variant: item-hover
- status: ready

## Props
| Prop            | Type    | Default      |
|-----------------|---------|--------------|
| state           | hover   | hover        |
| type            | initial | initial      |
| title           | string  | "Title"      |
| description     | string  | "Description"|
| showDescription | boolean | true         |
| showPrefix      | boolean | true         |
| showSuffix      | boolean | true         |

## Design Tokens
| Property       | Token Name                            | Value   |
|----------------|---------------------------------------|---------|
| background     | --color-bg-subtle (near-miss)         | #f1f1f1 (raw — see Notes) |
| text (title)   | --color-fg (near-miss)                | #18181b (raw — see Notes) |
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
| hover | #f1f1f1    | #18181b      | #71717a     | none   | pointer | —     |

## Notes
- token-near-miss: Hover background `#f1f1f1` (Figma `--default/default`); closest foundation token `--color-bg-subtle` = `--neutral-100` = `#F1F5F7`. Gap of ~2 hex points — designer must confirm.
- token-near-miss: Title text `#18181b`; closest `--color-fg` = `#0F172A`. See item-default notes.
- token-near-miss: Description text `#71717a`; closest `--color-fg-muted` = `#64748B`. See item-default notes.
- Same layout/sizing as item-default. Only background changes on hover.
