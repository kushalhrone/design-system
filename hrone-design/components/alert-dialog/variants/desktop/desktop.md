---
component: alert-dialog
variant: desktop
figma-node-id: 15763:11024
figma-content-hash: n/a
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: alert-dialog
- variant: desktop
- status: ready

## Props
| Prop   | Type                      | Default |
|--------|---------------------------|---------|
| size   | `xs \| sm \| md \| lg`   | `xs`    |

## Size Variants
| Size | Width  | Padding          | Border-radius |
|------|--------|------------------|---------------|
| xs   | 320px  | px=`--space-6` (24px), py=`--space-4` (16px) | `--dimensions/radius/rounded-xl` (12px) |
| sm   | 480px  | `--space-6` (24px) all sides | `--dimensions/radius/rounded-xl` (12px) |
| md   | 640px  | `--space-6` (24px) all sides | `--dimensions/radius/rounded-xl` (12px) |
| lg   | 800px  | `--space-6` (24px) all sides | `--dimensions/radius/rounded-xl` (12px) |

All desktop sizes are fixed-width (`min-width = max-width = width`).

## Design Tokens — Container
| Property        | Token                                | Value   |
|-----------------|--------------------------------------|---------|
| background      | *(see Notes)*                        | `white` |
| border-radius   | `--dimensions/radius/rounded-xl`     | `12px`  |
| section gap     | `--space-5`                          | `20px`  |
| shadow          | *(see Notes — shadow-overlay)*       | —       |

## Design Tokens — AlertHeader
| Property           | Token                               | Value    |
|--------------------|-------------------------------------|----------|
| icon size (avatar) | `--space-10`                        | `40px`   |
| icon bg            | *(see Notes)*                       | `#f1f1f1`|
| icon radius        | `--dimensions/radius/rounded-4xl`   | `32px`   |
| icon inner size    | `--space-4`                         | `16px`   |
| header gap         | `--space-3`                         | `12px`   |
| header padding-right | `--space-6`                       | `24px`   |
| title color        | *(see Notes)*                       | `#18181b`|
| title font-size    | `--text-base`                       | `16px`   |
| title font-weight  | `--font-medium`                     | `500`    |
| title line-height  | `--text-base` leading               | `24px`   |
| title font-family  | `--font-body`                       | `Noto Sans` |
| header alignment   | `left` (default) or `center`        | —        |

## Design Tokens — AlertBody
| Property             | Token             | Value    |
|----------------------|-------------------|----------|
| description color    | *(see Notes)*     | `#71717a`|
| description font-size | `--text-sm`      | `14px`   |
| description font-weight | `--font-regular` | `400`  |
| description line-height | `--text-sm` leading | `20px` |
| description font-family | `--font-body`  | `Noto Sans` |
| description padding-right | `--space-4`  | `16px`   |
| body gap             | *(see Notes)*     | `0px`    |

## Design Tokens — AlertFooter (desktop horizontal)
| Property           | Token                              | Value    |
|--------------------|------------------------------------|----------|
| footer layout      | `flex-row`, `items-center`, `justify-end` | — |
| footer gap         | `--space-2`                        | `8px`    |
| button height      | `--space-9`                        | `36px`   |
| button padding-x   | `--space-4`                        | `16px`   |
| button padding-y   | `--space-2`                        | `8px`    |
| button gap         | `--space-2`                        | `8px`    |
| button border-radius | `--dimensions/radius/rounded-lg` | `8px`    |

### Cancel Button (ButtonTwo)
| Property     | Token                    | Value     |
|--------------|--------------------------|-----------|
| background   | *(see Notes)*            | `white`   |
| border       | `--color-border`         | `#E2E8ED` |
| border-width | `1px`                    | —         |
| text-color   | *(see Notes)*            | `#18181b` |
| text         | `"Cancel"`               | —         |
| focus ring   | `--secondary-500` + offset `--color-bg` | `#02563D` / `#F8FAFB` |
| focus ring widths | ring `4px`, offset `2px` | — |

### Confirm Button (ButtonOne — danger)
| Property     | Token                     | Value     |
|--------------|---------------------------|-----------|
| background   | `--error`                 | `#DC2626` |
| border       | `--color-border`          | `#E2E8ED` |
| border-width | `1px`                     | —         |
| text-color   | `--neutral-25`            | `#FFFFFF` |
| text         | `"Confirm"`               | —         |

## Design Tokens — Close Button
| Property       | Token                              | Value    |
|----------------|------------------------------------|----------|
| size           | `--space-6`                        | `24px`   |
| background     | *(see Notes)*                      | `#f1f1f1`|
| border-radius  | `--dimensions/radius/rounded-xl`   | `12px`   |
| padding        | `--space-1`                        | `4px`    |
| position-right | `--space-3`                        | `12px`   |
| position-top   | `--space-4`                        | `16px`   |
| icon size      | `--space-4`                        | `16px`   |
| position       | `absolute`                         | —        |

## Interaction States
| State    | Dialog bg | Cancel btn   | Confirm btn   | Cursor  |
|----------|-----------|--------------|---------------|---------|
| default  | white     | white        | `--error`     | default |
| hover (cancel) | — | undefined    | —             | pointer |
| hover (confirm) | — | —           | undefined     | pointer |
| focus    | —         | focus-ring shown | —         | pointer |
| disabled | —         | undefined    | undefined     | —       |

## Notes
- `token-mismatch`: dialog + cancel button background `white` (`var(--overlay)` / `var(--default/default-hover)`) has no exact foundation token. `--color-surface: #FFFFFF` is the nearest semantic token. Recommend `--color-overlay: #FFFFFF` or using `--color-surface`. Using raw `white`.
- `token-mismatch`: title + cancel text color `#18181b` (`var(--foreground/foreground)` / `var(--default/default-foreground)`) has no foundation match. Closest is `--neutral-900: #0F172A` (R diff=7, B diff=12). Using raw Figma value.
- `token-mismatch`: description/muted color `#71717a` (`var(--foreground/muted)`) has no foundation match. Closest is `--neutral-500: #64748B` (R diff=6, B diff=6). Using raw Figma value.
- `token-mismatch`: close button + icon avatar background `#f1f1f1` has no foundation match. Same mismatch as Avatar component. Using raw Figma value.
- `token-mismatch`: body gap uses Figma token `var(--dimensions/spacing/3, 0px)` — fallback resolved to `0px`, not `12px`. The token name implies 12px but the Figma component has zero gap. Using `0px` per Figma resolved value. Verify with designer.
- `token-mismatch`: shadow has no foundation token. Raw values: `0px 2px 8px rgba(0,0,0,0.06)`, `0px -6px 12px rgba(0,0,0,0.03)`, `0px 14px 28px rgba(0,0,0,0.08)`. Recommend adding `--shadow-overlay` to `effects.md`.
- Hover and disabled states for both buttons are not defined in Figma — flag before building.
- Footer button order: Cancel before Confirm (left→right) in horizontal layout.
- Footer supports `vertical` layout (Confirm stacked above Cancel, full-width buttons) — see `AlertFooter` Figma node `7833:33797`.
