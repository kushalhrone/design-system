---
component: input-affix
variant: mute
figma-node-id: 13683:14474
figma-content-hash: c7e3b09d2f11
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: input-affix
- variant: mute
- status: ready

## Props
| Prop               | Type                    | Default |
|--------------------|-------------------------|---------|
| color              | mute \| active          | mute    |
| divider            | none \| left \| right   | none    |
| showIcon           | boolean                 | true    |
| showContent        | boolean                 | true    |
| showArrow          | boolean                 | true    |
| showContainerGroup | boolean                 | true    |
| content            | string                  | "1+"    |
| icon               | ReactNode \| null       | null    |

## Design Tokens
| Property       | Token Name               | Value           |
|----------------|--------------------------|-----------------|
| background     | —                        | white (#FFFFFF) |
| height         | --space-9                | 36px            |
| padding-x      | --space-3                | 12px            |
| gap            | --space-1.5              | 6px             |
| group-gap      | --space-1                | 4px             |
| icon-size      | —                        | 16px            |
| chevron-size   | —                        | 12px            |
| icon-color     | —                        | #71717a         |
| text-color     | —                        | #71717a         |
| font-size      | --text-sm                | 14px (0.875rem) |
| font-weight    | --font-regular           | 400             |
| line-height    | --leading-normal (sm)    | 20px (1.25rem)  |
| letter-spacing | --tracking-normal        | 0               |

## Divider Token
| Property      | Token Name         | Value     |
|---------------|--------------------|-----------|
| divider-color | --color-border     | #E2E8ED   |
| divider-width | —                  | 1px       |
| divider-height| —                  | 60% (inset top/bottom) |

## Interaction States
| State    | Icon/Text Color | Background | Cursor   | Other   |
|----------|-----------------|------------|----------|---------|
| default  | #71717a         | white      | pointer  | —       |
| hover    | undefined        | undefined  | pointer  | —       |
| active   | undefined        | undefined  | pointer  | —       |
| disabled | #71717a         | white      | not-allowed | opacity: 0.5 |

## Notes
- token-near-miss: background white (#FFFFFF), closest --color-surface (--neutral-25, #FFFFFF). Using raw Figma value.
- token-near-miss: icon/text color Figma #71717a (var(--field/placeholder)), closest --neutral-500 (#64748B). Using raw Figma value.
- hover and active states not defined in Figma — marked undefined. Flag with designer before building interactive affixes.
- Divider renders as a rotated vertical line at the inner edge (left or right) of the affix. Only shown when gapSpace=true on parent InputGroup.
- The mute variant is the default/resting state — icon and text appear subdued/placeholder-colored.
