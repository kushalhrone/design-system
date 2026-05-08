---
component: avatar
variant: img
figma-node-id: 5375:71426
figma-content-hash: n/a
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: avatar
- variant: img
- status: ready

## Props
| Prop    | Type                                               | Default  |
|---------|----------------------------------------------------|----------|
| variant | `img`                                              | —        |
| type    | `accent \| default \| success \| warning \| danger` | `accent` |
| src     | `string`                                           | required |

The `type` prop has no visual effect on the `img` variant (no background or text). It is accepted for API consistency but produces no style change.

## Design Tokens
| Property        | Token Name                         | Value      |
|-----------------|------------------------------------|------------|
| width × height  | `--space-9`                        | `36px`     |
| border-radius   | `--dimensions/radius/rounded-4xl`  | `32px`     |
| object-fit      | —                                  | `cover`    |
| overflow        | —                                  | `hidden`   |

No background, text, or icon tokens apply — the image fills the full circular container.

## Interaction States
| State    | Other                         |
|----------|-------------------------------|
| default  | image shown                   |
| loading  | fallback / skeleton undefined |
| error    | fallback undefined            |
| hover    | undefined                     |

## Notes
- No background, padding, or foreground color tokens apply to this variant.
- `type` prop is ignored visually — retain in API for consistency with other variants.
- Foundation radius.md recommends `rounded-full (9999px)` for avatars, but Figma uses `rounded-4xl (32px)`.
- Image loading error and skeleton/fallback states are not defined in Figma — define before building.
- `object-fit: cover` ensures the image fills the 36×36 container regardless of source aspect ratio.
