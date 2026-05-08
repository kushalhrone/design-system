---
component: dropdown
variant: item-default
figma-node-id: 2399:4413
figma-content-hash: b72e4f91c3a8
foundation-ref: ../../../../../foundation/foundation-token
---

## Meta
- component: dropdown
- variant: item-default
- status: ready

## Props
| Prop            | Type                                       | Default     |
|-----------------|--------------------------------------------|-------------|
| state           | default \| hover \| selected \| focus \| disabled | default |
| type            | initial \| danger                          | initial     |
| title           | string                                     | "Title"     |
| description     | string                                     | "Description"|
| showDescription | boolean                                    | true        |
| showPrefix      | boolean                                    | true        |
| showSuffix      | boolean                                    | true        |
| prefix          | ReactNode                                  | icon slot   |
| suffix          | ReactNode                                  | icon slot   |

## Design Tokens
| Property       | Token Name                            | Value   |
|----------------|---------------------------------------|---------|
| background     | transparent                           | —       |
| text (title)   | --color-fg (near-miss)                | #18181b (raw — see Notes) |
| text (desc)    | --color-fg-muted (near-miss)          | #71717a (raw — see Notes) |
| border-radius  | --dimensions/radius/rounded-lg        | 8px     |
| min-height     | --space-9                             | 36px    |
| padding-x      | --space-3                             | 12px    |
| padding-y      | --space-1.5                           | 6px     |
| gap            | --space-3                             | 12px    |
| icon-size      | --space-4                             | 16px    |
| icon-pt        | --space-0.5                           | 2px     |
| cursor         | pointer                               | —       |

## Interaction States
| State    | Background           | Text (title)  | Text (desc)   | Border | Cursor      | Other |
|----------|----------------------|---------------|---------------|--------|-------------|-------|
| default  | transparent          | #18181b       | #71717a       | none   | pointer     | —     |

## Notes
- token-near-miss: Title text `#18181b` (Figma `--default/default-foreground`); closest foundation token `--color-fg` = `--neutral-900` = `#0F172A`. Gap of ~7 hex points — designer must confirm.
- token-near-miss: Description text `#71717a` (Figma `--foreground/muted`); closest foundation token `--color-fg-muted` = `--neutral-500` = `#64748B`. Gap of ~7 hex points — designer must confirm.
- This is the base item state. See `item-hover`, `item-selected`, `item-focus`, `item-disabled` for interactive states.
- Icon slot accepts any 16×16 icon. Default placeholder shown as circle-dashed.
- Suffix slot is typically a shortcut hint or secondary icon.
