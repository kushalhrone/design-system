---
component: card
variant: item-full
figma-node-id: 3015:11366
figma-content-hash: 3013:11085
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: card
- variant: item-full
- status: ready

## Props
| Prop          | Type                                                   | Default   |
|---------------|--------------------------------------------------------|-----------|
| type          | basic \| side \| item \| basic full \| item full \| basic img | item full |
| showClose     | boolean                                                | true      |
| showFooter    | boolean                                                | true      |
| showBlur      | boolean                                                | true      |

## Design Tokens
| Property          | Token Name              | Value         |
|-------------------|-------------------------|---------------|
| background        | full-bleed image        | —             |
| border-radius     | --radius-2xl            | 16px          |
| shadow            | shadow-surface          | see effects.md |
| size              | raw: 280×280px          | —             |
| padding           | --padding-card          | 16px          |
| close-btn-bg      | raw: #f1f1f1            | —             |
| close-btn-size    | --space-6               | 24px          |
| close-btn-radius  | --radius-xl             | 12px          |
| blur-height       | raw: 112px              | —             |

## Layout
- Direction: flex-col, justify-end (footer pinned to bottom)
- Image is full-bleed background (fills the entire card)
- Footer overlays at bottom with progressive blur behind it

## Sub-components
### CardFooter (cta type, overlaid on image)
| Property              | Token Name              | Value         |
|-----------------------|-------------------------|---------------|
| primary label color   | raw: #18181b            | —             |
| primary label size    | --text-sm               | 14px          |
| primary label weight  | --font-medium           | 500           |
| secondary label color | --color-fg-muted        | #64748B       |
| secondary label size  | --text-xs               | 12px          |
| button bg             | raw: #f1f1f1            | —             |
| button text color     | raw: #18181b            | —             |
| button height         | --space-9               | 36px          |
| button padding-x      | --space-4               | 16px          |
| button padding-y      | --space-2               | 8px           |
| button radius         | --radius-lg             | 8px           |
| button border         | --color-border          | #E2E8ED       |
| button font size      | --text-sm               | 14px          |
| button font weight    | --font-medium           | 500           |

## Interaction States
| State    | Background      | Border     | Cursor  | Other          |
|----------|-----------------|------------|---------|----------------|
| default  | full-bleed image| none       | default | shadow-surface |
| hover    | undefined       | undefined  | undefined | undefined    |
| active   | undefined       | undefined  | undefined | undefined    |
| focus    | full-bleed image| focus-ring | —       | undefined      |
| disabled | undefined       | undefined  | undefined | undefined    |

## Notes
- token-near-miss: CloseButton bg #f1f1f1, closest --neutral-100 (#F1F5F7) — using raw Figma value
- token-near-miss: Foreground text #18181b, closest --color-fg (#0F172A) — using raw Figma value
- token-near-miss: Button bg #f1f1f1 (same as close btn) — near-miss with --neutral-100
- token-mismatch: Card size 280×280px has no foundation container token — raw pixel values
- token-mismatch: blur overlay rgba(245,245,245,0.2) has no foundation token — using raw value
- hover/active/disabled states not defined in Figma — mark undefined
- ProgressiveBlur is visible (112px) — differs from basic-full (134px)
- This variant uses a default/muted button (not accent/secondary) for CTA — differs from basic-full variant
- Close button is visible in item-full (showClose=true from basic variant shared prop) — confirmed in Figma
