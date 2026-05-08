---
component: dropdown
variant: item-selected
figma-node-id: 2416:5270
figma-content-hash: d04b8a63e2c7
foundation-ref: ../../../../../foundation/foundation-token
---

## Meta
- component: dropdown
- variant: item-selected
- status: ready

## Props
| Prop            | Type     | Default      |
|-----------------|----------|--------------|
| state           | selected | selected     |
| type            | initial  | initial      |
| title           | string   | "Title"      |
| description     | string   | "Description"|
| showDescription | boolean  | true         |
| showPrefix      | boolean  | true         |
| showSuffix      | boolean  | true         |

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
| State    | Background | Text (title) | Text (desc) | Border | Cursor  | Other |
|----------|------------|--------------|-------------|--------|---------|-------|
| selected | #f1f1f1    | #18181b      | #71717a     | none   | pointer | —     |

## Notes
- token-near-miss: Selected background `#f1f1f1` (same as hover, Figma `--default/default`); closest `--color-bg-subtle` = `#F1F5F7`. Designer must confirm.
- Selected state uses same visual treatment as hover in this design — no additional indicator (checkmark, tick) defined in Figma. Flag to designer: selected state may need a distinguishing visual cue.
- token-near-miss: Title `#18181b`; desc `#71717a` — same near-misses as item-default. See item-default notes.
