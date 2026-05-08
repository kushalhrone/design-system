---
component: card
variant: side
figma-node-id: 3013:11086
figma-content-hash: 3013:11085
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: card
- variant: side
- status: ready

## Props
| Prop          | Type                                                   | Default |
|---------------|--------------------------------------------------------|---------|
| type          | basic \| side \| item \| basic full \| item full \| basic img | side |
| showClose     | boolean                                                | true    |
| showFooter    | boolean                                                | true    |
| showBlur      | boolean                                                | true    |

## Design Tokens
| Property          | Token Name              | Value         |
|-------------------|-------------------------|---------------|
| background        | --color-surface         | #FFFFFF       |
| border-radius     | --radius-3xl            | 24px          |
| surface-radius    | --radius-2xl            | 16px          |
| padding           | --padding-card          | 16px          |
| gap (horizontal)  | --space-4               | 16px          |
| shadow            | shadow-surface          | see effects.md |
| width             | raw: 467px              | —             |
| image-size        | raw: 116×116px          | —             |
| image-radius      | --radius-2xl            | 16px          |
| close-btn-bg      | raw: #f1f1f1            | —             |
| close-btn-size    | --space-6               | 24px          |
| close-btn-radius  | --radius-xl             | 12px          |

## Layout
- Direction: horizontal (flex-row)
- Image slot: left side, self-stretch aspect ratio 1:1, radius-2xl
- Content area: flex-col, gap-3 (12px), min-height 80px
- CardHeader + CardFooter stacked vertically in content area

## Sub-components
### CardHeader
| Property          | Token Name              | Value         |
|-------------------|-------------------------|---------------|
| tagline color     | raw: #18181b            | —             |
| title color       | raw: #18181b            | —             |
| description color | --color-fg-muted        | #64748B       |
| tagline size      | --text-xs               | 12px          |
| title size        | --text-sm               | 14px          |
| font weight       | --font-medium           | 500           |
| padding-right     | --space-6               | 24px          |
| gap               | --space-4               | 16px          |

### CardFooter (link type)
| Property          | Token Name              | Value         |
|-------------------|-------------------------|---------------|
| link color        | raw: #18181b            | —             |
| link size         | --text-sm               | 14px          |
| link weight       | --font-medium           | 500           |
| link leading      | --leading-normal        | 20px          |
| decoration color  | raw: #cdcdce            | —             |
| arrow size        | raw: 10px               | —             |

## Interaction States
| State    | Background      | Border     | Cursor  | Other          |
|----------|-----------------|------------|---------|----------------|
| default  | --color-surface | none       | default | shadow-surface |
| hover    | undefined       | undefined  | undefined | undefined    |
| active   | undefined       | undefined  | undefined | undefined    |
| focus    | --color-surface | focus-ring | —       | undefined      |
| disabled | undefined       | undefined  | undefined | undefined    |

## Notes
- token-near-miss: CloseButton bg #f1f1f1, closest --neutral-100 (#F1F5F7) — using raw Figma value
- token-near-miss: Foreground text #18181b, closest --color-fg (#0F172A) — using raw Figma value
- token-mismatch: Image size 116×116px has no semantic space token — raw pixel value
- token-mismatch: Card width 467px has no foundation container token — raw pixel value
- token-mismatch: Link decoration color #cdcdce has no foundation match — using raw value
- hover/active/disabled states not defined in Figma — mark undefined
- ProgressiveBlur opacity is 0 in Figma (hidden for side variant)
- Image uses self-stretch with aspect-ratio 1:1, not a fixed height
