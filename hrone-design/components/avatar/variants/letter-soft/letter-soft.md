---
component: avatar
variant: letter-soft
figma-node-id: 12108:28536
figma-content-hash: n/a
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: avatar
- variant: letter-soft
- status: ready

## Props
| Prop       | Type                                               | Default  |
|------------|----------------------------------------------------|----------|
| variant    | `letterSoft`                                       | —        |
| type       | `accent \| default \| success \| warning \| danger` | `accent` |
| value      | `string`                                           | `"AG"`   |

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

`default` uses the same solid background as the non-soft `letter` variant. The tinted gradient only applies for the four semantic types.

| Type    | Background                                                               | Text Color                            |
|---------|--------------------------------------------------------------------------|---------------------------------------|
| default | `#f1f1f1` solid *(see Notes)*                                            | `#18181b` *(see Notes)*              |
| accent  | `--color-secondary-soft` → `rgba(2, 86, 61, 0.15)` over `#fff`         | `--secondary-500` → `#02563D`        |
| success | `rgba(3, 152, 85, 0.15)` over `#fff` *(see Notes)*                      | `--success` → `#16A34A`             |
| warning | `rgba(247, 144, 9, 0.15)` over `#fff` *(see Notes)*                     | `--warning` → `#D97706`             |
| danger  | `rgba(217, 45, 32, 0.15)` over `#fff` *(see Notes)*                     | `--error` → `#DC2626`               |

The soft background is implemented as a two-layer `background-image` gradient:
```css
background-image:
  linear-gradient(90deg, {color @ 0.15} 0%, {color @ 0.15} 100%),
  linear-gradient(90deg, #fff 0%, #fff 100%);
```

## Interaction States
| State    | Background | Text      | Border | Cursor   | Other |
|----------|------------|-----------|--------|----------|-------|
| default  | as above   | as above  | none   | default  | —     |
| hover    | undefined  | undefined | —      | —        | —     |
| focus    | undefined  | undefined | —      | —        | —     |
| disabled | undefined  | undefined | —      | —        | —     |

## Notes
- `token-mismatch`: background `#f1f1f1` (default type, Figma `var(--default/default)`) has no foundation match. Same mismatch as `letter` variant.
- `token-mismatch`: default foreground `#18181b` has no foundation match. Same mismatch as `letter` variant.
- `token-mismatch`: success-soft background `rgba(3, 152, 85, 0.15)` has no foundation token. Only `--color-secondary-soft` (accent-soft) is defined. Recommend adding `--color-success-soft`, `--color-warning-soft`, `--color-danger-soft` to `color.md §6`.
- `token-mismatch`: warning-soft background `rgba(247, 144, 9, 0.15)` has no foundation token. Same as above.
- `token-mismatch`: danger-soft background `rgba(217, 45, 32, 0.15)` has no foundation token. Same as above.
- Foundation radius.md recommends `rounded-full (9999px)` for avatars, but Figma uses `rounded-4xl (32px)`.
- Hover, focus, and disabled states are not defined in Figma.
