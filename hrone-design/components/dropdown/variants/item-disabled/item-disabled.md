---
component: dropdown
variant: item-disabled
figma-node-id: 2686:20781
figma-content-hash: f28d9e05a1b3
foundation-ref: ../../../../../foundation/foundation-token
---

## Meta
- component: dropdown
- variant: item-disabled
- status: ready

## Props
| Prop            | Type     | Default      |
|-----------------|----------|--------------|
| state           | disabled | disabled     |
| type            | initial  | initial      |
| title           | string   | "Title"      |
| description     | string   | "Description"|
| showDescription | boolean  | true         |
| showPrefix      | boolean  | true         |
| showSuffix      | boolean  | true         |

## Design Tokens
| Property       | Token Name                            | Value   |
|----------------|---------------------------------------|---------|
| background     | transparent                           | —       |
| text (title)   | --color-fg (near-miss)                | #18181b (raw — see Notes) |
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
| disabled | transparent | #18181b      | #71717a     | none   | not-allowed | opacity 0.5 |

## Notes
- Disabled state applies `opacity: var(--disabled-opacity, 0.5)` to the entire item — no individual color overrides.
- `pointer-events: none` should be set; `cursor: not-allowed` applied via parent if needed.
- token-near-miss: Title `#18181b`, desc `#71717a`. Same near-misses as item-default — designer must confirm.
- No background change in disabled state (stays transparent), unlike hover/focus/selected.
