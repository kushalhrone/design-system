---
component: input-group
variant: secondary
figma-node-id: 13683:14551
figma-content-hash: b8d2a11f5c91
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: input-group
- variant: secondary
- status: ready

## Props
| Prop       | Type                    | Default   |
|------------|-------------------------|-----------|
| variant    | primary \| secondary    | secondary |
| type       | text \| number \| password | text   |
| affix      | both \| prefix \| suffix | both     |
| gapSpace   | boolean                 | false     |
| value      | string                  | —         |
| disabled   | boolean                 | false     |

## Design Tokens
| Property       | Token Name                               | Value                            |
|----------------|------------------------------------------|----------------------------------|
| background     | —                                        | #f1f1f1                          |
| border-color   | —                                        | transparent                      |
| border-width   | —                                        | 1px                              |
| border-radius  | --dimensions/radius/rounded-lg           | 8px                              |
| height         | --space-9                                | 36px                             |
| padding-y      | --space-2                                | 8px                              |
| gap (default)  | --space-0.5                              | 2px                              |
| gap (gapSpace) | --space-3                                | 12px                             |
| shadow         | none                                     | —                                |
| placeholder-color | —                                     | #71717a                          |
| font-size      | --text-sm                                | 14px (0.875rem)                  |
| font-weight    | --font-regular                           | 400                              |
| line-height    | --leading-normal (text-sm)               | 20px (1.25rem)                   |
| letter-spacing | --tracking-normal                        | 0                                |

## Affix Sub-component Tokens
| Property        | Token Name               | Value  |
|-----------------|--------------------------|--------|
| affix-background | —                       | #f1f1f1 (matches container bg) |
| affix padding-x | --space-3                | 12px   |
| affix gap       | --space-1.5              | 6px    |
| group gap       | --space-1                | 4px    |
| icon size       | —                        | 16px   |
| chevron size    | —                        | 12px   |

## Interaction States
| State    | Background | Shadow | Border       | Cursor      | Other                                  |
|----------|------------|--------|--------------|-------------|----------------------------------------|
| default  | #f1f1f1    | none   | transparent  | text        | —                                      |
| focus    | #f1f1f1    | none   | focus-ring   | text        | outline-offset: 2px; ring: --color-focus-ring |
| disabled | #f1f1f1    | none   | transparent  | not-allowed | opacity: 0.5                           |
| error    | #f1f1f1    | none   | --color-error | text       | border-color: --color-error            |

## gapSpace Behaviour
| gapSpace | Gap value         | Divider visible |
|----------|-------------------|-----------------|
| false    | --space-0.5 (2px) | No — affix flush to input |
| true     | --space-3 (12px)  | Yes — vertical divider line on inner affix edge |

## Notes
- token-near-miss: background Figma #f1f1f1 (var(--default/default)), closest --neutral-100 (#F1F5F7). Using raw Figma value.
- token-near-miss: placeholder/text color Figma #71717a, closest --neutral-500 (#64748B). Using raw Figma value.
- Secondary variant has NO shadow — unlike primary which uses the Field shadow.
- Affix background matches the container background (#f1f1f1) to appear seamlessly inset.
- Focus, error, and disabled states not defined in Figma — using design system defaults.
- Docs reference: https://v3.heroui.com/docs/react/components/input-group
