---
component: card
variant: item
figma-node-id: 3013:11192
figma-content-hash: 3013:11085
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: card
- variant: item
- status: ready

## Props
| Prop          | Type                                                   | Default |
|---------------|--------------------------------------------------------|---------|
| type          | basic \| side \| item \| basic full \| item full \| basic img | item |
| showClose     | boolean                                                | true    |
| showFooter    | boolean                                                | true    |
| showBlur      | boolean                                                | true    |

## Design Tokens
| Property          | Token Name              | Value         |
|-------------------|-------------------------|---------------|
| background        | --color-surface         | #FFFFFF       |
| border-radius     | --radius-2xl            | 16px          |
| shadow            | shadow-surface          | see effects.md |
| width             | raw: 201px              | —             |
| height            | raw: 206px              | —             |
| container-padding | --space-1               | 4px           |
| image-radius      | --radius-xl             | 12px          |
| close-btn-bg      | raw: #f1f1f1            | —             |
| close-btn-size    | --space-6               | 24px          |
| close-btn-radius  | --radius-xl             | 12px          |

## Layout
- Direction: flex-col
- Image slot fills the flex-grow area inside a 4px padded container
- Footer at bottom with label + count

## Sub-components
### CardFooter (support type)
| Property          | Token Name              | Value         |
|-------------------|-------------------------|---------------|
| label color       | raw: #18181b            | —             |
| count color       | --color-fg-muted        | #64748B       |
| font size         | --text-sm               | 14px          |
| font weight       | --font-medium           | 500           |
| leading           | --leading-normal        | 20px          |
| padding-bottom    | --space-2               | 8px           |
| padding-top       | --space-1               | 4px           |
| padding-x         | --space-4               | 16px          |
| justify-content   | space-between           | —             |

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
- token-mismatch: Width 201px, height 206px have no foundation container tokens — raw pixel values
- hover/active/disabled states not defined in Figma — mark undefined
- ProgressiveBlur opacity is 0 in Figma (hidden for item variant)
- Image is image-dominant: fills the entire flex-grow area with rounded corners, no header
- Close button overlaps the image area at top-right
