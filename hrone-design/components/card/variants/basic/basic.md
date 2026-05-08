---
component: card
variant: basic
figma-node-id: 3013:11043
figma-content-hash: 3013:11085
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: card
- variant: basic
- status: ready

## Props
| Prop          | Type                                                   | Default |
|---------------|--------------------------------------------------------|---------|
| type          | basic \| side \| item \| basic full \| item full \| basic img | basic |
| showIcon      | boolean                                                | true    |
| showClose     | boolean                                                | true    |
| showFooter    | boolean                                                | true    |
| showBlur      | boolean                                                | true    |
| icon          | ReactNode \| null                                      | null    |

## Design Tokens
| Property        | Token Name              | Value         |
|-----------------|-------------------------|---------------|
| background      | --color-surface         | #FFFFFF       |
| border-radius   | --radius-3xl            | 24px          |
| padding         | --padding-card          | 16px          |
| gap (elements)  | --space-3               | 12px          |
| shadow          | shadow-surface          | see effects.md |
| icon-size       | --space-6               | 24px          |
| close-btn-bg    | raw: #f1f1f1            | —             |
| close-btn-size  | --space-6               | 24px          |
| close-btn-radius| --radius-xl             | 12px          |
| width           | raw: 355px              | —             |

## Sub-components
### CardHeader
| Property        | Token Name              | Value         |
|-----------------|-------------------------|---------------|
| tagline color   | raw: #18181b            | —             |
| title color     | raw: #18181b            | —             |
| description color | --color-fg-muted      | #64748B       |
| tagline size    | --text-xs               | 12px          |
| tagline leading | --leading-loose         | 16px          |
| title size      | --text-sm               | 14px          |
| title leading   | --leading-normal        | 20px          |
| description size| --text-xs               | 12px          |
| font weight (tagline/title) | --font-medium | 500     |
| font weight (description)  | --font-regular | 400    |
| padding-right   | --space-6               | 24px          |
| gap             | --space-4               | 16px          |

### CardFooter (link type)
| Property        | Token Name              | Value         |
|-----------------|-------------------------|---------------|
| link color      | raw: #18181b            | —             |
| link size       | --text-sm               | 14px          |
| link leading    | --leading-normal        | 20px          |
| link weight     | --font-medium           | 500           |
| arrow icon size | raw: 10px               | —             |
| decoration color| raw: #cdcdce            | —             |

## Interaction States
| State    | Background          | Border     | Cursor      | Other               |
|----------|---------------------|------------|-------------|---------------------|
| default  | --color-surface     | none       | default     | shadow-surface      |
| hover    | undefined           | undefined  | undefined   | undefined           |
| active   | undefined           | undefined  | undefined   | undefined           |
| focus    | --color-surface     | focus-ring | —           | undefined           |
| disabled | undefined           | undefined  | undefined   | undefined           |

## Notes
- token-near-miss: CloseButton bg #f1f1f1, closest token --neutral-100 (#F1F5F7) — using raw Figma value
- token-near-miss: Foreground text #18181b, closest token --color-fg (#0F172A via --neutral-900) — using raw Figma value
- token-near-miss: Muted text #71717a, closest token --color-fg-muted (#64748B) — using raw Figma value
- token-mismatch: Link decoration color #cdcdce has no foundation match — using raw value
- token-mismatch: Figma `accent/accent` variable resolves to #02563D (= --color-secondary), but DS mapping says `accent/accent → --color-primary`. Footer link type does not use accent — no impact on this variant.
- token-mismatch: Card width 355px has no foundation container token — raw pixel value
- hover/active/disabled states not defined in Figma — using design system defaults
- ProgressiveBlur opacity is 0 in Figma (hidden by default for basic variant)
- Component documented at: https://v3.heroui.com/docs/react/components/card
