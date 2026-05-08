---
component: dropdown
variant: item-focus
figma-node-id: 2686:20342
figma-content-hash: e15c7f84d9a6
foundation-ref: ../../../../../foundation/foundation-token
---

## Meta
- component: dropdown
- variant: item-focus
- status: ready

## Props
| Prop            | Type    | Default      |
|-----------------|---------|--------------|
| state           | focus   | focus        |
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

## Focus Ring
| Property      | Token Name                              | Value                |
|---------------|-----------------------------------------|----------------------|
| offset-ring   | --color-bg (--background/background)   | #F8FAFB              |
| offset-width  | --ring-offset-width                     | 2px                  |
| brand-ring    | --color-secondary (--focus-ring)        | #02563D              |
| brand-width   | --ring-focus-width                      | 4px                  |

```css
box-shadow:
  0px 0px 0px 2px var(--background/background, #F8FAFB),
  0px 0px 0px 4px var(--focus-ring, #02563d);
```

## Interaction States
| State | Background | Text (title) | Text (desc) | Ring              | Cursor  | Other           |
|-------|------------|--------------|-------------|-------------------|---------|-----------------|
| focus | #f1f1f1    | #18181b      | #71717a     | #02563d (4px)     | pointer | overflow: clip  |

## Notes
- Focus ring exactly matches `Focus Ring` in `effects.md` — double ring: 2px white offset + 4px `#02563D` outer.
- `overflow: hidden` (overflow-clip) is required on the item to allow focus ring render; ensure parent has `clipsContent: false`.
- token-near-miss: Background `#f1f1f1`; closest `--color-bg-subtle` = `#F1F5F7`. See item-hover notes.
- token-near-miss: Title `#18181b`, desc `#71717a`. See item-default notes.
