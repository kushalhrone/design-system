---
component: alert-dialog
variant: mobile
figma-node-id: 15763:11024
figma-content-hash: n/a
foundation-ref: ../../../../foundation/foundation-token
---

## Also Load
> AlertHeader tokens (title typography, icon, close button) not repeated here.
> Also load: `components/alert-dialog/variants/desktop/desktop.md`

## Meta
- component: alert-dialog
- variant: mobile
- status: ready

## Props
| Prop   | Type       | Default    |
|--------|------------|------------|
| size   | `mobile`   | `mobile`   |

## Design Tokens — Container
| Property        | Token                                | Value   |
|-----------------|--------------------------------------|---------|
| width           | `393px` (or `100%` on small screens) | —       |
| background      | *(see Notes)*                        | `white` |
| border-radius   | `--dimensions/radius/rounded-3xl`    | `24px`  |
| padding         | `--space-4` (16px) all sides         | —       |
| section gap     | `--space-5`                          | `20px`  |

The mobile variant wraps an inner container that also carries the `shadow-overlay` drop-shadow and its own padding (`--space-6 = 24px`) and `rounded-xl (12px)` background layer.

## Design Tokens — AlertHeader
Identical to the desktop variant. See `desktop.md` AlertHeader section.

| Property           | Token                               | Value    |
|--------------------|-------------------------------------|----------|
| icon size          | `--space-10`                        | `40px`   |
| icon bg            | *(see Notes)*                       | `#f1f1f1`|
| icon radius        | `--dimensions/radius/rounded-4xl`   | `32px`   |
| header gap         | `--space-3`                         | `12px`   |
| title color        | *(see Notes)*                       | `#18181b`|
| title font-size    | `--text-base`                       | `16px`   |
| title font-weight  | `--font-medium`                     | `500`    |
| title line-height  | `--text-base` leading               | `24px`   |

## Design Tokens — AlertBody
Identical to the desktop variant.

| Property              | Token            | Value    |
|-----------------------|------------------|----------|
| description color     | *(see Notes)*    | `#71717a`|
| description font-size | `--text-sm`      | `14px`   |
| description font-weight | `--font-regular` | `400`  |
| description line-height | `--text-sm` leading | `20px` |
| body internal gap     | *(see Notes)*    | `0px`    |

## Design Tokens — AlertFooter (mobile — stacked vertical)
| Property        | Token      | Value  |
|-----------------|------------|--------|
| footer layout   | `flex-col`, `items-start`, `justify-center` | — |
| footer gap      | `--space-2` | `8px` |
| button width    | `100%` (full-width) | — |
| button height   | `--space-9` | `36px` |
| button padding-x | `--space-4` | `16px` |
| button padding-y | `--space-2` | `8px` |
| button border-radius | `--dimensions/radius/rounded-lg` | `8px` |

Button order in mobile footer (top → bottom): **Confirm** then **Cancel** (reversed from desktop horizontal).

### Confirm Button (ButtonOne — danger)
| Property     | Token          | Value     |
|--------------|----------------|-----------|
| background   | `--error`       | `#DC2626` |
| border       | `--color-border` | `#E2E8ED` |
| text-color   | `--neutral-25`  | `#FFFFFF` |
| text         | `"Confirm"`     | —         |
| width        | `100%` (full)   | —         |

### Cancel Button (ButtonTwo)
| Property     | Token                    | Value     |
|--------------|--------------------------|-----------|
| background   | *(see Notes)*            | `white`   |
| border       | `--color-border`         | `#E2E8ED` |
| text-color   | *(see Notes)*            | `#18181b` |
| text         | `"Cancel"`               | —         |
| width        | `100%` (full)            | —         |
| focus ring   | `--secondary-500` + offset `--color-bg` | `#02563D` / `#F8FAFB` |

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
| State    | Dialog bg | Confirm btn | Cancel btn | Cursor  |
|----------|-----------|-------------|------------|---------|
| default  | white     | `--error`   | white      | default |
| hover    | —         | undefined   | undefined  | pointer |
| focus    | —         | —           | focus-ring | pointer |
| disabled | —         | undefined   | undefined  | —       |

## Notes
- `token-mismatch`: background `white` has no exact foundation token. Same as desktop variant. See `desktop.md` Notes.
- `token-mismatch`: title color `#18181b`, description color `#71717a`, close/icon bg `#f1f1f1` — same mismatches as desktop variant.
- `token-mismatch`: body internal gap resolved to `0px` despite Figma token `spacing/3`. Same as desktop variant.
- `token-mismatch`: shadow-overlay has no foundation token. Same values as desktop variant.
- Key structural differences from desktop: full-width buttons, vertical footer (Confirm on top), outer container uses `rounded-3xl` (24px) instead of `rounded-xl` (12px), outer padding is `--space-4` (16px) vs `--space-6` (24px).
- Hover and disabled states for both buttons are not defined in Figma.
