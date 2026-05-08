---
component: dropdown
variant: item-danger-disabled
figma-node-id: 2686:20787
figma-content-hash: j69c3e49f5a7
foundation-ref: ../../../../../foundation/foundation-token
---

## Meta
- component: dropdown
- variant: item-danger-disabled
- status: ready

## Props
| Prop            | Type     | Default      |
|-----------------|----------|--------------|
| state           | disabled | disabled     |
| type            | danger   | danger       |
| title           | string   | "Title"      |
| description     | string   | "Description"|
| showDescription | boolean  | true         |
| showPrefix      | boolean  | true         |
| showSuffix      | boolean  | true         |

## Design Tokens
| Property       | Token Name                            | Value   |
|----------------|---------------------------------------|---------|
| background     | transparent                           | —       |
| text (title)   | --color-error                         | #DC2626 |
| text (desc)    | --color-fg-muted (near-miss)          | #71717a (raw — see Notes) |
| opacity        | --disabled-opacity                    | 0.5     |
| border-radius  | --dimensions/radius/rounded-lg        | 8px     |
| min-height     | --space-9                             | 36px    |
| padding-x      | --space-3                             | 12px    |
| padding-y      | --space-1.5                           | 6px     |
| gap            | --space-3                             | 12px    |
| icon-size      | --space-4                             | 16px    |
| cursor         | not-allowed                           | —       |

## Interaction States
| State    | Background  | Text (title) | Text (desc) | Border | Cursor      | Other       |
|----------|-------------|--------------|-------------|--------|-------------|-------------|
| disabled | transparent | #DC2626      | #71717a     | none   | not-allowed | opacity 0.5 |

## Notes
- Disabled applies `opacity: 0.5` to entire item — danger title color `#DC2626` is preserved at reduced opacity.
- Exact same disabled pattern as item-disabled (opacity only) — the danger type color persists through opacity reduction.
- token-near-miss: Description text `#71717a`. See item-default notes.
- `pointer-events: none` required to block interaction.
