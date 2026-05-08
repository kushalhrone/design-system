---
component: select
variant: closed
figma-node-id: 2501:10495
figma-content-hash: n/a
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: select
- variant: closed
- status: ready

## Props
| Prop          | Type      | Default        |
|---------------|-----------|----------------|
| state         | `false`   | —              |
| label         | `string`  | `"State"`      |
| required      | `boolean` | `true`         |
| placeholder   | `string`  | `"Select one"` |

## Design Tokens — Label
| Property        | Token              | Value     |
|-----------------|--------------------|-----------|
| font-size       | `--text-sm`        | `14px`    |
| font-weight     | `--font-medium`    | `500`     |
| line-height     | `--text-sm` leading | `20px`   |
| font-family     | `--font-body`      | `Noto Sans`|
| label text color | *(see Notes)*     | `#18181b` |
| required `*` color | `--error`       | `#DC2626` |
| gap (label row) | `--space-1`        | `4px`     |
| padding-right   | `--space-2`        | `8px`     |
| outer gap (label → field) | `--space-1` | `4px` |

## Design Tokens — Trigger Field
| Property           | Token                              | Value     |
|--------------------|------------------------------------|-----------|
| height             | `--space-9`                        | `36px`    |
| width              | `256px`                            | —         |
| background         | *(see Notes)*                      | `white`   |
| border             | `transparent` (visual border via shadow) | —   |
| border-radius      | `--dimensions/radius/rounded-lg`   | `8px`     |
| padding-left       | `--space-3`                        | `12px`    |
| padding-y          | `--space-2`                        | `8px`     |
| shadow             | *(see Notes — shadow-field)*       | —         |

## Design Tokens — Placeholder Text
| Property        | Token              | Value     |
|-----------------|--------------------|-----------|
| color           | *(see Notes)*      | `#71717a` |
| font-size       | `--text-sm`        | `14px`    |
| font-weight     | `--font-regular`   | `400`     |
| line-height     | `--text-sm` leading | `20px`   |
| font-family     | `--font-body`      | `Noto Sans`|

## Design Tokens — Suffix (Chevron)
| Property        | Token              | Value     |
|-----------------|--------------------|-----------|
| background      | *(see Notes)*      | `white`   |
| height          | `--space-9`        | `36px`    |
| padding-x       | `--space-3`        | `12px`    |
| gap             | `--space-1-5`      | `6px`     |
| chevron icon    | chevron-down       | —         |
| chevron size    | `--space-4`        | `16px`    |
| chevron direction | down (0°)        | closed state |

## Interaction States
| State    | Trigger bg | Trigger border     | Placeholder color | Chevron  | Cursor   |
|----------|------------|--------------------|-------------------|----------|----------|
| default  | white      | transparent/shadow | `#71717a`         | down     | pointer  |
| hover    | undefined  | undefined          | undefined         | —        | pointer  |
| focus    | undefined  | undefined          | undefined         | —        | pointer  |
| disabled | undefined  | undefined          | undefined         | —        | not-allowed |
| filled   | white      | transparent/shadow | selected value fg | down     | pointer  |

## Notes
- `token-mismatch`: trigger + suffix background `white` (`var(--field/background)`) has no exact foundation token. Use `--color-surface (#FFFFFF)` as closest match, or define `--color-field-bg`. Using raw `white`.
- `token-mismatch`: label + filled-value text color `#18181b` has no foundation match. Closest is `--neutral-900: #0F172A` (R diff=7, B diff=12). Using raw Figma value.
- `token-mismatch`: placeholder color `#71717a` has no foundation match. Closest is `--neutral-500: #64748B` (R diff=6, B diff=6). Using raw Figma value.
- `token-mismatch`: `shadow-field` (trigger shadow) has no foundation token. Raw values: `0px 2px 4px rgba(0,0,0,0.04)`, `0px 1px 2px rgba(0,0,0,0.06)`, `0px 0px 1px rgba(0,0,0,0.06)`. Recommend adding to `effects.md`.
- Trigger border is `rgba(222,222,224,0)` — transparent. The visual edge is entirely from the field shadow. Implement as `border: none` or a transparent border to reserve 1px of space.
- Hover, focus, filled, and disabled states are not defined in Figma — define before building.
- The outer container wraps the label and trigger in a `flex-col` with `gap: --space-2 (8px)`. The inner label row uses `gap: --space-1 (4px)`.
