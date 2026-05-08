---
component: dropdown
variant: item-danger-focus
figma-node-id: 2686:20348
figma-content-hash: i58b2d38e4f6
foundation-ref: ../../../../../foundation/foundation-token
---

## Meta
- component: dropdown
- variant: item-danger-focus
- status: ready

## Props
| Prop            | Type    | Default      |
|-----------------|---------|--------------|
| state           | focus   | focus        |
| type            | danger  | danger       |
| title           | string  | "Title"      |
| description     | string  | "Description"|
| showDescription | boolean | true         |
| showPrefix      | boolean | true         |
| showSuffix      | boolean | true         |

## Design Tokens
| Property       | Token Name                              | Value   |
|----------------|-----------------------------------------|---------|
| background     | --color-bg-subtle (near-miss)           | #f1f1f1 (raw — see Notes) |
| text (title)   | --color-error                           | #DC2626 |
| text (desc)    | --color-fg-muted (near-miss)            | #71717a (raw — see Notes) |
| border-radius  | --dimensions/radius/rounded-lg          | 8px     |
| min-height     | --space-9                               | 36px    |
| padding-x      | --space-3                               | 12px    |
| padding-y      | --space-1.5                             | 6px     |
| gap            | --space-3                               | 12px    |
| icon-size      | --space-4                               | 16px    |
| cursor         | pointer                                 | —       |

## Focus Ring
| Property      | Token Name                               | Value                |
|---------------|------------------------------------------|----------------------|
| offset-ring   | --color-bg (--background/background)    | #F8FAFB              |
| offset-width  | --ring-offset-width                      | 2px                  |
| danger-ring   | danger-focus-ring (effects.md)           | #B42318              |
| danger-width  | --ring-focus-width                       | 4px                  |

```css
box-shadow:
  0px 0px 0px 2px var(--background/background, #F8FAFB),
  0px 0px 0px 4px #b42318;
```

## Interaction States
| State | Background | Text (title) | Text (desc) | Ring                      | Cursor  | Other          |
|-------|------------|--------------|-------------|---------------------------|---------|----------------|
| focus | #f1f1f1    | #DC2626      | #71717a     | #B42318 (4px) + #F8FAFB offset | pointer | overflow: clip |

## Notes
- Danger focus ring uses `#B42318` per `effects.md` `Danger Focus Ring` spec. Note: this is darker than `--color-error` (`#DC2626`). Effects.md maps it to `var(--color-error, #b42318)` — system inconsistency between the primitive `--error: #DC2626` and the ring fallback `#B42318`. Flagged for designer clarification.
- token-near-miss: Background `#f1f1f1`. See item-hover notes.
- token-near-miss: Description `#71717a`. See item-default notes.
- `overflow: hidden` required on the item for focus ring clipping to work correctly.
