---
component: input-affix
variant: active
figma-node-id: 13683:14474
figma-content-hash: c7e3b09d2f11
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: input-affix
- variant: active
- status: ready

## Props
| Prop               | Type                    | Default |
|--------------------|-------------------------|---------|
| color              | mute \| active          | active  |
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
| icon-color     | —                        | #18181b         |
| text-color     | —                        | #18181b         |
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
| State    | Icon/Text Color | Background | Cursor      | Other   |
|----------|-----------------|------------|-------------|---------|
| default  | #18181b         | white      | pointer     | —       |
| hover    | undefined       | undefined  | pointer     | —       |
| active   | undefined       | undefined  | pointer     | —       |
| disabled | #18181b         | white      | not-allowed | opacity: 0.5 |

## Notes
- token-mismatch: icon/text color Figma #18181b (var(--field/foreground)), no foundation match. Closest --neutral-900 (#0F172A) differs across all channels (R: Δ7, G: Δ17, B: Δ12). Using raw Figma value — resolve with designer.
- token-near-miss: background white (#FFFFFF), closest --color-surface (--neutral-25, #FFFFFF). Using raw Figma value.
- hover and active states not defined in Figma — marked undefined. Flag with designer before building interactive affixes.
- The active variant is used when the affix is selected/has a value — icon and text appear at full foreground contrast vs mute's placeholder color.
- Structurally identical to mute variant; only the icon/text color changes (#18181b vs #71717a).
