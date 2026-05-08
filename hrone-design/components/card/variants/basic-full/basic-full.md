---
component: card
variant: basic-full
figma-node-id: 3013:11286
figma-content-hash: 3013:11085
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: card
- variant: basic-full
- status: ready

## Props
| Prop          | Type                                                   | Default    |
|---------------|--------------------------------------------------------|------------|
| type          | basic \| side \| item \| basic full \| item full \| basic img | basic full |
| showClose     | boolean                                                | true       |
| showFooter    | boolean                                                | true       |
| showBlur      | boolean                                                | true       |

## Design Tokens
| Property          | Token Name              | Value         |
|-------------------|-------------------------|---------------|
| background        | full-bleed image        | —             |
| border-radius     | --radius-2xl            | 16px          |
| padding           | --padding-card          | 16px          |
| gap (elements)    | --space-3               | 12px          |
| shadow            | shadow-surface          | see effects.md |
| width             | raw: 280px              | —             |
| height            | raw: 337px              | —             |
| close-btn-bg      | raw: #f1f1f1            | —             |
| close-btn-size    | --space-6               | 24px          |
| close-btn-radius  | --radius-xl             | 12px          |
| blur-height       | raw: 134px              | —             |

## Sub-components
### CardHeader (muted style)
| Property          | Token Name              | Value         |
|-------------------|-------------------------|---------------|
| tagline color     | --color-fg-muted        | #64748B       |
| title color       | --color-fg-muted        | #64748B       |
| tagline size      | --text-xs               | 12px          |
| title size        | --text-sm               | 14px          |
| font weight       | --font-medium           | 500           |
| padding-right     | --space-6               | 24px          |
| gap               | --space-4               | 16px          |

### CardFooter (cta type)
| Property              | Token Name              | Value         |
|-----------------------|-------------------------|---------------|
| primary label color   | raw: #18181b            | —             |
| primary label size    | --text-sm               | 14px          |
| primary label weight  | --font-medium           | 500           |
| secondary label color | --color-fg-muted        | #64748B       |
| secondary label size  | --text-xs               | 12px          |
| button bg             | --color-secondary       | #02563D       |
| button text color     | --neutral-25            | #FFFFFF       |
| button height         | --space-9               | 36px          |
| button padding-x      | --space-4               | 16px          |
| button padding-y      | --space-2               | 8px           |
| button radius         | --radius-lg             | 8px           |
| button border         | --color-border          | #E2E8ED       |
| button font size      | --text-sm               | 14px          |
| button font weight    | --font-medium           | 500           |

## Interaction States
| State    | Background          | Border     | Cursor  | Other               |
|----------|---------------------|------------|---------|---------------------|
| default  | full-bleed image    | none       | default | shadow-surface      |
| hover    | undefined           | undefined  | undefined | undefined         |
| active   | undefined           | undefined  | undefined | undefined         |
| focus    | full-bleed image    | focus-ring | —       | undefined           |
| disabled | undefined           | undefined  | undefined | undefined         |

## Notes
- token-near-miss: CloseButton bg #f1f1f1, closest token --neutral-100 (#F1F5F7) — using raw Figma value
- token-near-miss: Foreground text #18181b, closest token --color-fg (#0F172A) — using raw Figma value
- token-near-miss: Muted text #71717a rendered as --color-fg-muted (#64748B) — verified near-miss; logged
- token-mismatch: blur overlay rgba(245,245,245,0.2) has no foundation token — using raw value
- token-mismatch: Card width 280px, height 337px have no foundation container tokens — raw pixel values
- token-mismatch: Figma `accent/accent` (#02563D) maps to --color-secondary in our system; DS color mapping labels it `accent/accent → --color-primary` but value matches --color-secondary. Using --color-secondary (#02563D). Confirm with designer.
- hover/active/disabled states not defined in Figma — mark undefined
- ProgressiveBlur is visible in this variant (height 134px at card bottom)
- CardHeader in this variant uses muted color for both tagline and title (differs from basic variant)
