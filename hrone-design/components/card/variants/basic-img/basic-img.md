---
component: card
variant: basic-img
figma-node-id: 3015:11489
figma-content-hash: 3013:11085
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: card
- variant: basic-img
- status: ready

## Props
| Prop          | Type                                                   | Default   |
|---------------|--------------------------------------------------------|-----------|
| type          | basic \| side \| item \| basic full \| item full \| basic img | basic img |
| showClose     | boolean                                                | true      |
| showFooter    | boolean                                                | true      |
| showBlur      | boolean                                                | true      |

## Design Tokens
| Property          | Token Name              | Value         |
|-------------------|-------------------------|---------------|
| background        | --color-surface         | #FFFFFF       |
| border-radius     | --radius-3xl            | 24px          |
| surface-radius    | --radius-2xl            | 16px          |
| padding           | --padding-card          | 16px          |
| gap (elements)    | --space-3               | 12px          |
| shadow            | shadow-surface          | see effects.md |
| width             | raw: 355px              | —             |
| thumbnail-size    | --space-14              | 56px          |
| thumbnail-radius  | --radius-xl             | 12px          |
| close-btn-bg      | raw: #f1f1f1            | —             |
| close-btn-size    | --space-6               | 24px          |
| close-btn-radius  | --radius-xl             | 12px          |

## Sub-components
### CardHeader (no tagline)
| Property          | Token Name              | Value         |
|-------------------|-------------------------|---------------|
| title color       | raw: #18181b            | —             |
| title size        | --text-sm               | 14px          |
| title weight      | --font-medium           | 500           |
| title leading     | --leading-normal        | 20px          |
| description color | --color-fg-muted        | #64748B       |
| description size  | --text-xs               | 12px          |
| description weight| --font-regular          | 400           |
| description leading | --leading-loose       | 16px          |
| showTagline       | false                   | —             |
| padding-right     | --space-6               | 24px          |

### CardFooter (text type)
| Property          | Token Name              | Value         |
|-------------------|-------------------------|---------------|
| avatar size       | raw: 16px               | —             |
| avatar radius     | --dimensions/radius/rounded-4xl | 32px  |
| author text color | --color-fg-muted        | #64748B       |
| author text size  | --text-xs               | 12px          |
| author weight     | --font-regular          | 400           |
| gap               | --space-2               | 8px           |

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
- token-mismatch: Avatar radius --dimensions/radius/rounded-4xl (32px) has no direct rule.md token — use raw 32px or rounded-full depending on context
- token-mismatch: Avatar size 16px, thumbnail size 56px have no semantic space token — raw pixel values
- token-mismatch: Card width 355px has no foundation container token — raw pixel value
- hover/active/disabled states not defined in Figma — mark undefined
- ProgressiveBlur opacity is 0 in Figma (hidden for this variant)
- This variant does not show a tagline (showTagline=false)
