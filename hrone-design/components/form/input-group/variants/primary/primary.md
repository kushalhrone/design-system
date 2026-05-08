---
component: input-group
variant: primary
figma-node-id: 13683:14531
figma-content-hash: a3f91c7e2d40
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: input-group
- variant: primary
- status: ready

## Props
| Prop       | Type                    | Default  |
|------------|-------------------------|----------|
| variant    | primary \| secondary    | primary  |
| type       | text \| number \| password | text  |
| affix      | both \| prefix \| suffix | both    |
| gapSpace   | boolean                 | false    |
| value      | string                  | —        |
| disabled   | boolean                 | false    |

## Design Tokens
| Property       | Token Name                               | Value                            |
|----------------|------------------------------------------|----------------------------------|
| background     | —                                        | white (#FFFFFF)                  |
| backdrop-blur  | effects.md › blur                        | blur(6px)                        |
| border-color   | —                                        | transparent                      |
| border-width   | —                                        | 1px                              |
| border-radius  | --dimensions/radius/rounded-lg           | 8px                              |
| height         | --space-9                                | 36px                             |
| padding-y      | --space-2                                | 8px                              |
| gap (default)  | --space-0.5                              | 2px                              |
| gap (gapSpace) | --space-3                                | 12px                             |
| shadow         | effects.md › Field                       | 0px 2px 4px rgba(0,0,0,0.04), 0px 1px 2px rgba(0,0,0,0.06), 0px 0px 1px rgba(0,0,0,0.06) + inset 0px 0px 1px rgba(255,255,255,0.1) |
| placeholder-color | —                                     | #71717a                          |
| font-size      | --text-sm                                | 14px (0.875rem)                  |
| font-weight    | --font-regular                           | 400                              |
| line-height    | --leading-normal (text-sm)               | 20px (1.25rem)                   |
| letter-spacing | --tracking-normal                        | 0                                |

## Affix Sub-component Tokens
| Property        | Token Name               | Value  |
|-----------------|--------------------------|--------|
| affix padding-x | --space-3                | 12px   |
| affix gap       | --space-1.5              | 6px    |
| group gap       | --space-1                | 4px    |
| icon size       | —                        | 16px   |
| chevron size    | —                        | 12px   |

## Interaction States
| State    | Background | Shadow   | Border       | Cursor   | Other                                  |
|----------|------------|----------|--------------|----------|----------------------------------------|
| default  | white      | Field    | transparent  | text     | —                                      |
| focus    | white      | Field    | focus-ring   | text     | outline-offset: 2px; ring: --color-focus-ring |
| disabled | white      | none     | transparent  | not-allowed | opacity: 0.5                        |
| error    | white      | Field    | --color-error | text    | border-color: --color-error            |

## gapSpace Behaviour
| gapSpace | Gap value | Divider visible |
|----------|-----------|-----------------|
| false    | --space-0.5 (2px) | No — affix flush to input |
| true     | --space-3 (12px)  | Yes — vertical divider line on inner affix edge |

## Notes
- token-near-miss: background white (#FFFFFF), closest --color-surface (--neutral-25, #FFFFFF). Using raw Figma value.
- token-near-miss: placeholder/text color Figma #71717a, closest --neutral-500 (#64748B). Using raw Figma value.
- Focus state not explicitly defined in Figma — using design system default (focus-ring from effects.md).
- Error state not defined in Figma — using design system default (--color-error border).
- Disabled state not defined in Figma — using design system default (opacity 0.5).
- Docs reference: https://v3.heroui.com/docs/react/components/input-group
