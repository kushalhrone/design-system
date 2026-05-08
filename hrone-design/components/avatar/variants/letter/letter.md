---
component: avatar
variant: letter
figma-node-id: 2595:9483
figma-content-hash: n/a
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: avatar
- variant: letter
- status: ready

## Props
| Prop       | Type                                         | Default  |
|------------|----------------------------------------------|----------|
| variant    | `letter`                                     | —        |
| type       | `accent \| default \| success \| warning \| danger` | `accent` |
| value      | `string`                                     | `"AG"`   |

## Design Tokens
| Property        | Token Name                         | Value     |
|-----------------|------------------------------------|-----------|
| width × height  | `--space-9`                        | `36px`    |
| border-radius   | `--dimensions/radius/rounded-4xl`  | `32px`    |
| padding         | `--space-2`                        | `8px`     |
| gap             | `--space-2`                        | `8px`     |
| background      | *(see type matrix below)*          | —         |
| text-color      | *(see type matrix below)*          | —         |
| font-size       | `--text-xs`                        | `12px`    |
| line-height     | `--text-xs` leading                | `16px`    |
| font-weight     | `--font-medium`                    | `500`     |
| font-family     | `--font-body`                      | `Noto Sans`|

## Type Matrix
| Type    | Background                  | Text Color                            |
|---------|-----------------------------|---------------------------------------|
| default | `#f1f1f1` *(see Notes)*     | `#18181b` *(see Notes)*              |
| accent  | `#f1f1f1` *(see Notes)*     | `--secondary-500` → `#02563D`        |
| success | `#f1f1f1` *(see Notes)*     | `--success` → `#16A34A`             |
| warning | `#f1f1f1` *(see Notes)*     | `--warning` → `#D97706`             |
| danger  | `#f1f1f1` *(see Notes)*     | `--error` → `#DC2626`               |

## Interaction States
| State    | Background | Text      | Border | Cursor   | Other |
|----------|------------|-----------|--------|----------|-------|
| default  | as above   | as above  | none   | default  | —     |
| hover    | undefined  | undefined | —      | —        | —     |
| focus    | undefined  | undefined | —      | —        | —     |
| disabled | undefined  | undefined | —      | —        | —     |

## Notes
- `token-mismatch`: background `#f1f1f1` (Figma `var(--default/default)`) has no foundation match. Closest is `--neutral-100: #F1F5F7` (G diff=3, B diff=5). Using raw Figma value. Resolve with designer — likely a missing `--color-avatar-bg` semantic token.
- `token-mismatch`: default foreground `#18181b` (Figma `var(--default/default-foreground)`) has no foundation match. Closest is `--neutral-900: #0F172A` (R diff=7, B diff=12). Using raw Figma value.
- Foundation radius.md recommends `rounded-full (9999px)` for avatars, but Figma uses `rounded-4xl (32px)`. Visually identical at 36px. Verify intent with designer.
- Hover, focus, and disabled states are not defined in Figma — flag before building interactive use cases.
- `accent/accent` Figma variable resolves to `#02563D` which matches `--secondary-500`, not `--color-primary`. The Figma-to-foundation mapping in `color.md §9` (`accent/accent → --color-primary`) appears incorrect for this component. Using `--secondary-500` per resolved hex value.
