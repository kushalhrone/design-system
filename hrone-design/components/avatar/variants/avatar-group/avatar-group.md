---
component: avatar
variant: avatar-group
figma-node-id: 3172:15627
figma-content-hash: n/a
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: avatar
- variant: avatar-group
- status: ready

## Props
| Prop          | Type      | Default | Notes |
|---------------|-----------|---------|-------|
| avatars       | `Array`   | —       | List of avatar data objects (src or initials) |
| maxVisible    | `number`  | `5`     | Max avatars shown before overflow chip |
| showOverflow  | `boolean` | `true`  | Show `+N` chip when count exceeds maxVisible |
| showAdd       | `boolean` | `true`  | Show the circular add button after the stack |

## Design Tokens

### Container
| Property        | Token Name                         | Value      |
|-----------------|------------------------------------|------------|
| gap (row)       | `--space-3`                        | `12px`     |

### Individual Avatar (within group)
| Property         | Token Name                         | Value      |
|------------------|------------------------------------|------------|
| width × height   | `--space-9`                        | `36px`     |
| border-radius    | `--dimensions/radius/rounded-4xl`  | `32px`     |
| object-fit       | —                                  | `cover`    |
| ring color       | `--color-bg` (`--neutral-50`)      | `#F8FAFB`  |
| ring width       | `--space-0.5`                      | `2px`      |
| overlap offset   | `-var(--space-2.5)`                | `-10px`    |

Ring is implemented as `box-shadow`:
```css
box-shadow: 0 0 0 2px var(--color-bg);
```

### Overflow Chip (`+N`)
| Property        | Token Name                         | Value      |
|-----------------|------------------------------------|------------|
| width × height  | `--space-9`                        | `36px`     |
| border-radius   | `--dimensions/radius/rounded-4xl`  | `32px`     |
| background      | `#f1f1f1` *(see Notes)*            | —          |
| text-color      | `#18181b` *(see Notes)*            | —          |
| font-size       | `--text-xs`                        | `12px`     |
| line-height     | `--text-xs` leading                | `16px`     |
| font-weight     | `--font-medium`                    | `500`      |
| ring color      | `--color-bg`                       | `#F8FAFB`  |
| ring width      | `--space-0.5`                      | `2px`      |

### Add Button
| Property        | Token Name                         | Value      |
|-----------------|------------------------------------|------------|
| width × height  | `--space-9`                        | `36px`     |
| border-radius   | `--dimensions/radius/rounded-3xl`  | `24px`     |
| background      | *(see Notes)*                      | `#02563D`  |
| border          | `--color-border`                   | `#E2E8ED`  |
| border-width    | `1px`                              | —          |
| icon-size       | `--space-4`                        | `16px`     |
| icon            | plus / add icon                    | —          |

## Interaction States
| State    | Background (add btn) | Cursor   | Other |
|----------|----------------------|----------|-------|
| default  | `#02563D`            | pointer  | —     |
| hover    | undefined            | —        | —     |
| focus    | undefined            | —        | —     |
| disabled | undefined            | —        | —     |

## Notes
- `token-mismatch`: overflow chip background `#f1f1f1` has no foundation match. Same as `letter` variant Notes. Uses raw Figma value.
- `token-mismatch`: overflow chip foreground `#18181b` has no foundation match. Same as `letter` variant Notes.
- `token-mismatch` (design discrepancy): Add button uses Figma token `secondary/secondary` which resolves to `#02563D` (primary orange, `--primary-500`). Foundation maps `secondary/secondary → --color-secondary = #02563D` (green). The Figma component is applying the **primary** brand colour here. Confirm with designer which token is intended — likely `--color-primary` / `--primary-500`.
- Overlap offset of `-10px` = `-var(--space-2.5)`. Avatar items use `margin-right: -10px` in an `items-start` flex row.
- Hover, focus, and disabled states for the add button are not defined in Figma.
- The add button uses `backdrop-blur` effect from the Figma design — evaluate whether to retain in implementation.
